import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

// Read-only generator: --patch emits an apply_patch patch, default checks files.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const version = '26-v2-20261007';
function read(p) { return fs.readFileSync(path.join(root, p), 'utf8'); }
function decode(s) {
  let i = 0, lat = 0, lon = 0;
  const out = [];
  while (i < s.length) {
    const delta = [];
    for (let k = 0; k < 2; k++) {
      let n = 0, shift = 0, c;
      do {
        if (i >= s.length) throw new Error('Incomplete polyline');
        c = s.charCodeAt(i++) - 63;
        n |= (c & 31) << shift;
        shift += 5;
      } while (c >= 32);
      delta.push(n & 1 ? ~(n >> 1) : n >> 1);
    }
    lat += delta[0]; lon += delta[1];
    out.push([lat / 1e6, lon / 1e6]);
  }
  return out;
}
const src02 = 'routes/navigation/02.evidence.json';
const src16 = 'routes/navigation/16.evidence.json';
const a = decode(JSON.parse(read(src02)).runs[0].response.trip.legs[1].shape);
const b = decode(JSON.parse(read(src16)).runs[14].response.trip.legs[0].shape);
if (JSON.stringify(a[54]) !== '[48.846713,2.351554]' ||
    JSON.stringify(b[27]) !== JSON.stringify(a[54])) throw new Error('Archive join changed');
const first = b.slice(24, 28).concat(a.slice(38, 54).reverse());
// Manually authored upper-level corridor. Intermediate points are approximations;
// names, crossings and documented public viewpoints control, not metre precision.
const manual = [[48.85360,2.34800],[48.85372,2.34722],
  [48.853957,2.345978],[48.854381,2.345106],[48.8545,2.34482],
  [48.85482,2.3438],[48.8551,2.3429],[48.85544,2.341869]];
const second = a.slice(0, 39).reverse().concat(manual);
const core = first.concat(second.slice(1));
const north = [48.835456,2.397708], south = [48.834944,2.397236];
const diana = [48.864211,2.300922];
const rad = x => x * Math.PI / 180;
function dist(a,b) {
  const h = Math.sin(rad(b[0]-a[0])/2)**2 + Math.cos(rad(a[0])) *
    Math.cos(rad(b[0])) * Math.sin(rad(b[1]-a[1])/2)**2;
  return 12742 * Math.asin(Math.sqrt(Math.min(1,h)));
}
function length(p) { return p.slice(1).reduce((s,x,i)=>s+dist(p[i],x),0); }
const round = n => Math.round(n*1000)/1000;
const waypoints = [
  ['W01','BiliPo public approach',first[0]],
  ['W02','Rue Monge pavement NOT museum reception',first.at(-1)],
  ['C01','Notre-Dame parvis connector',a[0]],
  ['W03','Former36 documented public viewpoint',core.at(-1)]
];
const geometry = {
  route_id:'26',version,crs:'WGS84',on_ground_verified:false,
  method:'archived pedestrian subsegments plus documented manually authored upper street corridor; no new router query',
  line_length_km:round(length(core)),legs_line_km:[round(length(first)),round(length(second))],
  actual_walking_allowance_km:[1.5,1.7],interior_allowance_km:[0.1,0.3],
  source_hashes:Object.fromEntries([src02,src16].map(p=>[p,crypto.createHash('sha256').update(read(p)).digest('hex')])),
  segments:[
    {id:'bili_join',source:src16,run_index:14,leg_index:0,shape_indices_inclusive:[24,27],precision:6},
    {id:'monge_to_W02',source:src02,run_index:0,leg_index:1,shape_indices_inclusive:[54,38],precision:6,reversed:true},
    {id:'W02_to_parvis',source:src02,run_index:0,leg_index:1,shape_indices_inclusive:[38,0],precision:6,reversed:true},
    {id:'parvis_to_36',source:'documented street continuity and georeferenced public photographs in26.evidence.json',manual:true,intermediates_approximate:true,level:'upper street pavements, no riverside stairs',coordinates_lat_lon:manual}
  ],waypoints:waypoints.map(([id,name,p])=>({id,name,lat:p[0],lon:p[1]})),
  coordinates_lat_lon:core,
  satellites:{'26B':{coordinates_lat_lon:[north,south],line_length_km:round(dist(north,south)),walking_allowance_km:0.1,exact_private_door_pin:false},
    '26C':{coordinates_lat_lon:[diana],inter_stop_distance_km:0,kind:'public observation waypoint, not a tunnel track'}},
  limits:['No new routing or field check','Manual intermediate vertices approximate street corridor, not certified crossing locations',
    'Published camera positions do not certify future access','Follow lawful pavements and current crossings; barriers override line',
    'Station approaches/exit and optional museum access not included in measured geometry']
};
const pt = p => `<trkpt lat="${p[0].toFixed(6)}" lon="${p[1].toFixed(6)}"/>`;
const wpt = (id,name,p) => `  <wpt lat="${p[0].toFixed(6)}" lon="${p[1].toFixed(6)}"><name>${id} ${name}</name></wpt>`;
const track = (name,p) => `  <trk><name>${name}</name><trkseg>\n    ${p.map(pt).join('\n    ')}\n  </trkseg></trk>`;
const xmlStart = `<?xml version="1.0" encoding="UTF-8"?>\n<gpx version="1.1" creator="Cruce" xmlns="http://www.topografix.com/GPX/1/1">\n`;
const gpx = xmlStart+`  <metadata><name>26 base ${version}</name><desc>Fixed mixed-provenance reference corridor 1.407km; real allowance1.5-1.7km. Manual Cité vertices approximate; public street instructions and crossings control. No field survey.</desc></metadata>\n`+
  waypoints.map(([id,n,p])=>wpt(id,n,p)).join('\n')+'\n'+track('26 base fixed reference',core)+'\n</gpx>\n';
const variants = xmlStart+`  <metadata><name>26 variants ${version}</name><desc>V1 same base without interior; V2 same corridor. Escapes are decision points only; station approaches unmeasured.</desc></metadata>\n`+
  wpt('V3_V5','Maubert vicinity use signposted station',[48.850371,2.34869])+'\n'+
  wpt('V4_V5','Saint-Michel vicinity use signposted station',[48.854381,2.345106])+'\n'+
  wpt('D01','26C Flame public viewpoint NOT tunnel',diana)+'\n'+
  wpt('N01','26B Madagascar north street',north)+'\n'+wpt('N02','26B Madagascar south street',south)+'\n'+
  track('26B public street identify9 by number plate',[north,south])+'\n</gpx>\n';
const geo = {type:'FeatureCollection',name:`26 ${version}`,features:[
  {type:'Feature',properties:{route_id:'26',kind:'base_fixed_mixed_provenance_reference',line_length_km:geometry.line_length_km,on_ground_verified:false,manual_vertices_approximate:true},geometry:{type:'LineString',coordinates:core.map(([lat,lon])=>[lon,lat])}},
  ...waypoints.map(([id,name,[lat,lon]])=>({type:'Feature',properties:{id,name},geometry:{type:'Point',coordinates:[lon,lat]}})),
  {type:'Feature',properties:{id:'26B',kind:'separate_street_module',line_length_km:geometry.satellites['26B'].line_length_km,exact_private_door_pin:false},geometry:{type:'LineString',coordinates:[north,south].map(([lat,lon])=>[lon,lat])}},
  {type:'Feature',properties:{id:'26C',kind:'separate_public_observation_NOT_tunnel'},geometry:{type:'Point',coordinates:[diana[1],diana[0]]}}
]};
const outputs = {'routes/navigation/26.geometry.json':JSON.stringify(geometry,null,2)+'\n',
  'routes/navigation/26.gpx':gpx,'routes/navigation/26.variants.gpx':variants,
  'routes/navigation/26.geojson':JSON.stringify(geo,null,2)+'\n'};
if(process.argv.includes('--patch')) {
  let patch='*** Begin Patch\n';
  for(const [p,s] of Object.entries(outputs)) {
    if(fs.existsSync(path.join(root,p))) patch+=`*** Update File: ${path.join(root,p)}\n@@\n-`+read(p).trimEnd().split('\n').join('\n-')+'\n+'+s.trimEnd().split('\n').join('\n+')+'\n';
    else patch+=`*** Add File: ${path.join(root,p)}\n+`+s.trimEnd().split('\n').join('\n+')+'\n';
  }
  process.stdout.write(patch+'*** End Patch\n');
} else {
  let failed=false;
  for(const [p,s] of Object.entries(outputs)) {
    if(!fs.existsSync(path.join(root,p))||read(p)!==s){console.error('Mismatch:',p);failed=true;}
  }
  console.log(JSON.stringify({version,points:core.length,line_length_km:geometry.line_length_km,legs:geometry.legs_line_km,consistent:!failed}));
  if(failed)process.exitCode=1;
}
