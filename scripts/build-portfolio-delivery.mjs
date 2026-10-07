import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Read-only audit. --patch prints a patch; it never writes files or touches Git.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const exists = p => fs.existsSync(path.join(root, p));
const requireFile = p => { if (!exists(p)) throw new Error(`Missing ${p}`); return p; };
const index = read('routes/README.md');
const rows = index.split('\n').filter(s => s.startsWith('| ') && /\*\*(DONE|RESOLVED)/.test(s));
if (rows.length !== 26) throw new Error(`Expected 26 catalog rows, got ${rows.length}`);
const packages = rows.map(row => {
  const canonical = row.match(/\[(?:canonical|archive\/workbench)\]\(([^)]+)\)/)?.[1];
  if (!canonical) throw new Error('Missing canonical link');
  const id = canonical.slice(0, 2);
  const document = requireFile(`routes/${canonical}`);
  if (id === '04') return { id, status: 'RETIRED_ABSORBED', absorbed_into: '16', canonical: document };
  const version = row.match(/DONE · ([0-9]+-v[0-9]+-[0-9]+)/)?.[1];
  if (!version || !read(document).includes(version)) throw new Error(`Canonical version mismatch: ${id}`);
  const candidates = {
    operations: `routes/navigation/${id}_access_operations.md`,
    operations_json: `routes/navigation/${id}.operations.json`,
    navigation: `routes/navigation/${id}_navigation.md`,
    gpx: `routes/navigation/${id}.gpx`,
    variants_gpx: `routes/navigation/${id}.variants.gpx`,
    geojson: `routes/navigation/${id}.geojson`,
    evidence: `routes/navigation/${id}.evidence.json`,
    geometry: `routes/navigation/${id}.geometry.json`
  };
  requireFile(candidates.operations); requireFile(candidates.gpx); requireFile(candidates.evidence);
  const files = Object.fromEntries(Object.entries(candidates).map(([k,p]) => [k, exists(p) ? p : null]));
  if (files.operations_json) {
    const operations = JSON.parse(read(files.operations_json));
    if ((operations.version ?? operations.route_version) !== version) throw new Error(`Operations version mismatch: ${id}`);
  }
  return { id, status: 'DONE', version, canonical: document, files,
    precision: 'Route-specific geometry declarations control; presence of a GPX is not a field survey or dense routing guarantee.' };
}).sort((a,b) => a.id.localeCompare(b.id));
if (new Set(packages.map(p => p.id)).size !== 26 || packages.filter(p => p.status === 'DONE').length !== 25)
  throw new Error('Catalog identity/count mismatch');
for (let i=1; i<=26; i++) if (!packages.some(p => p.id === String(i).padStart(2,'0'))) throw new Error(`Missing identity ${i}`);
const catalog = {
  schema_version: 1, as_of: '2026-10-07', scope: 'Route production decisions under Definition of Done, not total trip or website completion',
  catalog_decisions: 26, resolved_decisions: 26, production_percent: 100,
  active_experiences: 25, done_experiences: 25, retired_absorbed: ['04'],
  verification_limits: ['Document/package checks only', 'No field inspection, future access guarantee or new routing API query',
    'External evaluation, bookings, dated itinerary, precise portfolio-wide overlap, audio and website remain separate',
    'Null optional file fields mean not delivered, not an implicit export; route22 operations are Markdown'],
  packages
};
const outputPath = 'routes/navigation/portfolio.delivery.json';
const output = JSON.stringify(catalog,null,2)+'\n';
let jsonCount=0, xmlCount=0, linkCount=0;
for (const name of fs.readdirSync(path.join(root,'routes/navigation'))) {
  const p = `routes/navigation/${name}`;
  if (/\.(json|geojson)$/.test(name)) { JSON.parse(read(p)); jsonCount++; }
  if (name.endsWith('.gpx')) {
    if (!/<gpx\s/.test(read(p)) || !/<\/gpx>/.test(read(p))) throw new Error(`Missing GPX envelope ${p}`);
    xmlCount++;
  }
}
const documents = new Set(['routes/README.md','routes/navigation/README.md','routes/portfolio_delivery_20261007.md',
  'routes/26_case_cards.md','routes/26_internal_review_20261007.md', ...packages.flatMap(p =>
    [p.canonical, ...Object.values(p.files ?? {}).filter(x => x?.endsWith('.md'))])]);
for (const p of documents) {
  for (const match of read(p).matchAll(/\[[^\]\n]*\]\(([^)\n]+)\)/g)) {
    let target = match[1].split(/\s+"/)[0].replace(/^<|>$/g,'').split('#')[0];
    if (!target || /^[a-z]+:|^\//i.test(target)) continue;
    target = path.posix.normalize(path.posix.join(path.posix.dirname(p),decodeURIComponent(target)));
    if (target !== outputPath) requireFile(target);
    linkCount++;
  }
}
if (process.argv.includes('--patch')) {
  const old = exists(outputPath) ? read(outputPath) : null;
  if (old !== output) console.log('*** Begin Patch\n'+(old === null
    ? `*** Add File: ${outputPath}\n${output.trimEnd().split('\n').map(s=>'+'+s).join('\n')}`
    : `*** Update File: ${outputPath}\n@@\n${old.trimEnd().split('\n').map(s=>'-'+s).join('\n')}\n${output.trimEnd().split('\n').map(s=>'+'+s).join('\n')}`)+'\n*** End Patch');
} else {
  if (!exists(outputPath) || read(outputPath) !== output) throw new Error('Delivery catalog missing or stale; use --patch and apply_patch');
  console.log(JSON.stringify({consistent:true,active_done:25,resolved:26,production_percent:100,json_files:jsonCount,gpx_files:xmlCount,relative_links:linkCount}));
}
