# Geometry batch A — v4 routes 1–6

Measured 3 October 2026. Scope: walking geometry and timing only. No narration/history/source audit, visibility certification or subagents. Numbering follows the **definitive candidate list** in portfolio_rebuild_v4.md, not its older subsection numbers or the original twenty-route manifest.

## Method and gate

A real pedestrian router was available: OpenStreetMap Germany's `routing.openstreetmap.de/routed-foot`, OSRM API `/route/v1/foot/{lon,lat;...}?overview=false`. All six queries returned `code: Ok`. These are network-routed leg distances, not straight lines or car-routing distances. Requests used discovery coordinates from existing files or approximate street/frontage map positions; the street number at 145 rue La Fayette was resolved through Photon to 2.3561426,48.87917. Individual stop precision is stated below. The router snaps the point to its mapped network and chooses a walk; it does not certify today's gates, barriers, construction, opening hours or exact historical footprint.

Distances in tables are rounded to 0.01 km; totals use unrounded responses. Small circulation allowances are separately labelled estimates and never disguised as router measurements. Paid museum/Catacombs walking, lodging approaches, transit station walking and deliberate sightseeing loops are excluded. Cemetery and park opening/entrance continuity remain operational gates. No generic 20–30% multiplier is applied to rescue short routes.

The router's duration implies approximately 4.5 km/h and is too brisk as a trip promise. Time estimates below use **4 km/h moving pace**, plus 4–7 minutes per substantial narration, modest looking/rest pauses and explicitly noted local navigation. These are planning allowances, not an audit of script length. The earlier 3.3 km/h benchmark already includes ordinary stops, so it must not be combined mechanically with every stop allowance again. Both moving-only and delivered-route times are shown.

Gate: PASS means defensibly 7–11 km with ordinary site circulation; REBUILD means the current exterior spine is short and needs an actual architectural decision, not added wandering. A strong compact module may remain worthwhile while failing this full-route length gate. Geometry acceptance does not confer evidence or experience acceptance.

| v4 # | Route | Router total | Honest executed planning band | Gate |
|---:|---|---:|---:|---|
| 1 | City Under the City | 4.518 km | approximately 5.0–6.3 km with cemetery/park search | REBUILD — current full-route claim fails |
| 2 | Cinema/Modern Monsters | 6.968 km | approximately 7.0–7.5 km | PASS, near lower boundary |
| 3 | Revolutionary | 5.931 km core; 6.646 with Henri-Galli | approximately 6.0–6.5 core / 6.7–7.1 with optional return | REBUILD — optional return does not securely solve target |
| 4 | Republic | 7.359 km through explicit Marais/Cité transition | approximately 7.4–7.8 km | PASS |
| 5 | Occupied | 4.929 km | approximately 5.0–5.4 km | REBUILD — clearly below target |
| 6 | Spy | 7.889 km | approximately 8.0–8.5 km | PASS geometry only; historical/physical gates untouched |

Three earlier bands were materially optimistic. Surface routing does not substantiate 7–9 km for City Under the City, 8–9 km for Revolutionary's core, or 6–8 km for Occupied. No full-route experiential exception is granted in this geometry-only pass: cemetery navigation adds some time, but there is no verified exceptional climb/performance/interior that would justify silently substituting time for the requested distance.

## 1 — City Under the City

| Ordered standing area | Coordinates lat, lon | Incoming foot-router leg |
|---|---|---:|
| 1. Montparnasse cemetery public main-gate area, boulevard Edgar-Quinet | 48.8387, 2.3266 | start |
| 2. Denfert/Guillaumot/Catacombs **exterior** threshold | 48.8338, 2.3324 | 0.91 km |
| 3. Catacombs exit context, 21bis avenue René-Coty, reached **above ground** | 48.8310, 2.3340 | 0.49 km |
| 4. Parc Montsouris north public entrance approach | 48.8251, 2.3372 | 1.10 km |
| 5. La Carrière upper-park **search area**, not verified sculpture pin | 48.8210, 2.3380 | 0.73 km |
| 6. Butte-aux-Cailles/place de la Commune-de-Paris public-area finish | 48.8274, 2.3497 | 1.29 km |

Router total 4.518 km; approximate brisk router time 60 minutes. Maximum waypoint snap 27 m. An internal cemetery approach/return and locating the actual upper-park relief can reasonably add approximately 0.5–1.5 km; this is an allowance, not mapped proof. No exact cemetery grave was mandated or verified; the main gate is therefore the measurable cemetery anchor. Even this allowance gives roughly 5.0–6.3 km, not a demonstrated 7–9 km.

Lawful proposed connector: René-Coty → ordinary public streets toward the north Montsouris gate → mapped park paths → exit toward rue de Tolbiac/Butte-aux-Cailles. **No Petite Ceinture passage or tunnel is required.** The router does not validate an open gate on the chosen day. The relief coordinate is deliberately provisional; relocate it on a municipal sculpture map before final acceptance.

Shape: southeast from Montparnasse/Denfert, south through Montsouris, then northeast to the Butte. The final park-to-Butte turn is visible but not a return along the same corridor. Cemetery navigation could introduce a local out-and-back; it should be measured from an actual approved chapter location.

Moving-only: about 1¼–1½ hours with honest circulation. Including narration/observation/rest: approximately 2–3 hours. A paid 1.5 km underground Catacombs circuit is **not** added: v4 is a surface commission and sends paid interiors to another planning layer.

Decision: REBUILD as a 7–11 km full route, or explicitly accept a compact 5–6 km module. Do not wander around cemetery paths, add unspecified quarry streets, or rely on an inaccessible rail segment to manufacture kilometres.

Reproducible query: [foot route](https://routing.openstreetmap.de/routed-foot/route/v1/foot/2.3266,48.8387;2.3324,48.8338;2.3340,48.8310;2.3372,48.8251;2.3380,48.8210;2.3497,48.8274?overview=false).

## 2 — Cinema, Projection, and Modern Monsters

| Ordered stop | Coordinates lat, lon | Incoming foot-router leg |
|---|---|---:|
| 1. Fondation Pathé exterior, 73 avenue des Gobelins | 48.8342, 2.3525 | start |
| 2. Saint-Étienne-du-Mont lateral steps/place Abbé-Basset | 48.8466, 2.3483 | 1.56 km |
| 3. Le Champo/Champollion cluster | 48.8496, 2.3431 | 0.64 km |
| 4. Rue du Pont-Neuf/Quai du Louvre Éléonore standing area | 48.8598, 2.3424 | 1.44 km |
| 5. Louvre Cour Carrée fountain/Belphégor | 48.8604, 2.3380 | 0.46 km |
| 6. Grand Rex frontage, 1 boulevard Poissonnière | 48.8711, 2.3471 | 1.49 km |
| 7. 145 rue La Fayette frontage | 48.87917, 2.3561426 | 1.38 km |

Router total 6.968 km; approximate brisk time 93 minutes. Maximum snap 18 m. Normal safe frontage approaches and short Champollion/courtyard observation make approximately 7.0–7.5 km credible without invented chapters. This is a measured lower-bound pass, not support for the upper 9 km envelope.

Shape: northbound from Gobelins to Latin Quarter; central river crossing; a brief westward Louvre pocket; northeast through Grand Rex to La Fayette. Pont-Neuf→Louvre introduces a short 0.46 km westward movement before the next northeast leg, but ordering Éléonore first avoids returning east to it after the Louvre. No Garnier detour remains.

Moving-only about 1¾–2 hours. Delivered exterior route approximately 3–4 hours with six/seven stopping opportunities and rest. A real screening/gallery adds actual runtime and admission time and is not included in this exterior result. Courtyard closure may force a river-side variant and changes the physical encounter even if distance stays similar.

If La Fayette is removed after site-value validation, the Grand Rex finish is **5.586 km routed**, approximately 5.7–6.1 km with circulation, not a safely 6–7 km route. That variant would need explicit compact-module acceptance or REBUILD; do not count a lodging approach as thematic length.

Decision: PASS with La Fayette; current visibility/story merit at Grand Rex and La Fayette remain separate gates.

Reproducible query: [foot route](https://routing.openstreetmap.de/routed-foot/route/v1/foot/2.3525,48.8342;2.3483,48.8466;2.3431,48.8496;2.3424,48.8598;2.3380,48.8604;2.3471,48.8711;2.3561426,48.87917?overview=false).

## 3 — Revolutionary Paris

| Ordered stop | Coordinates lat, lon | Incoming foot-router leg |
|---|---|---:|
| 1. Former café de Foy/Galerie de Montpensier Palais-Royal | 48.8648, 2.3360 | start |
| 2. Concorde statue-of-Rouen area | 48.8663, 2.3211 | 1.45 km |
| 3. Tuileries former-palace line/Carrousel | 48.8612, 2.3320 | 1.28 km |
| 4. Hôtel de Ville esplanade | 48.8567, 2.3510 | 1.67 km |
| 5. Bastille Saint-Antoine/column pedestrian approach | 48.8532, 2.3691 | 1.52 km |
| 6. Optional square Henri-Galli masonry | 48.8503, 2.3614 | 0.71 km |

Core routed total 5.931 km; with Henri-Galli 6.646 km. Brisk router time about 79/89 minutes. Maximum input snap 35 m near Concorde; final standing position must avoid traffic islands. Small gallery/garden/esplanade circulation gives roughly 6.0–6.5 km core, 6.7–7.1 km with optional tail. The old 8–9 km band is not supported.

Shape: a deliberate westward opening, then eastward for the remainder. Concorde→Carrousel reverses broad direction and may partly retrace the same park axis; choose the first leg on rue Saint-Honoré/rue de Rivoli streets and the return inside the Tuileries if actual gate access permits. This reduces path repetition but does not add a missing two kilometres. Henri-Galli is a final southwest return of 0.71 km from Bastille, so keeping it purely to cross 7 km weakens the clean eastern ending.

Moving-only 1½–1¾ hours. Delivered core around 2½–3½ hours; optional masonry adds roughly 15–20 minutes walking/looking. Five substantial scenes can yield good time-on-site, but this geometry pass cannot invent an experiential exception based solely on unwritten future delivery.

Decision: REBUILD for a reliable 7–11 km full route, or honestly accept the 6 km core as a compact exception by a separate Controller decision. The optional backward tail does not robustly repair the length gate.

Reproducible query: [core plus optional foot route](https://routing.openstreetmap.de/routed-foot/route/v1/foot/2.3360,48.8648;2.3211,48.8663;2.3320,48.8612;2.3510,48.8567;2.3691,48.8532;2.3614,48.8503?overview=false).

## 4 — Republic and Representation

The mandated **Marais/Cité transition needs explicit route-shaping street points**. The shortest unconstrained République→Panthéon request gives a whole-route total of only 6.381 km. The following legal street/crossing shape produces a defensible 7.359 km while implementing the v4 instruction, not inventing narrated stops.

| Ordered point | Coordinates lat, lon | Incoming foot-router leg |
|---|---|---:|
| 1. République monument | 48.8674, 2.3638 | start |
| 2. Marais transition: rue Vieille-du-Temple/rue des Francs-Bourgeois area — **wayfinding only** | 48.8575, 2.3600 | 1.64 km |
| 3. Pont d'Arcole crossing approach — **wayfinding only** | 48.8554, 2.3508 | 1.03 km |
| 4. Petit-Pont Cité crossing — **wayfinding only** | 48.8535, 2.3475 | 0.41 km |
| 5. Panthéon exterior | 48.8462, 2.3460 | 1.03 km |
| 6. Sénat north exterior/rue de Vaugirard | 48.8497, 2.3374 | 0.87 km |
| 7. Palais Bourbon public exterior/place du Palais-Bourbon | 48.8605, 2.3180 | 2.10 km |
| 8. Pont de la Concorde south-bank finish | 48.8622, 2.3195 | 0.28 km |

Total 7.359 km; normal public-space approaches approximately 7.4–7.8 km. Maximum snap 13 m. République→Panthéon through this transition totals 4.113 km; the unconstrained shortest equivalent was 3.135 km. Both values matter: using the shortest route and still claiming 7–8.5 km is wrong. The wayfinding points add no Hôtel de Ville/Notre-Dame/Place des Vosges narration or ownership claim.

Shape: southwest through Marais and Cité, south to Panthéon, west/northwest through Sénat to Bourbon/river. The Panthéon→Sénat change northward is a modest hinge rather than retracing the approach. Bourbon→river is a short coda; no Nation appendage.

Moving-only 1¾–2 hours. Including four institution narrations, looking and rest: approximately 2¾–3½ hours, all exterior. No Panthéon interior or garden maze is counted. Rue de Vaugirard keeps the Sénat segment independent of garden access.

Decision: PASS **on the explicitly specified Marais/Cité street shape**. If that transition is shortened to direct routing, recalculate and downgrade the resulting 6.4 km version instead of keeping this verdict.

Reproducible query: [Marais/Cité foot route](https://routing.openstreetmap.de/routed-foot/route/v1/foot/2.3638,48.8674;2.3600,48.8575;2.3508,48.8554;2.3475,48.8535;2.3460,48.8462;2.3374,48.8497;2.3180,48.8605;2.3195,48.8622?overview=false).

## 5 — Occupied City

| Ordered stop | Coordinates lat, lon | Incoming foot-router leg |
|---|---|---:|
| 1. Denfert command-site museum exterior | 48.8337, 2.3324 | start |
| 2. Lutetia boulevard Raspail/rue de Sèvres exterior | 48.8514, 2.3271 | 2.24 km |
| 3. 48 rue du Four/CNR exterior | 48.8516, 2.3319 | 0.42 km |
| 4. Shoah Memorial exterior, 17 rue Geoffroy-l'Asnier | 48.8550, 2.3562 | 2.24 km |
| 5. Adjacent Mur des Justes rue Grenier-sur-l'Eau area | 48.8549, 2.3565 | 0.03 km |

Total 4.929 km; small exterior observation movements approximately 5.0–5.4 km. Maximum snap 11 m. Mur des Justes is part of the same final complex, not a separate kilometre-producing endpoint. Museum galleries and memorial interiors are excluded from this v4 exterior line.

Shape: north up boulevard Raspail, short eastward rue du Four movement, then east through central Left Bank streets and a lawful central Seine crossing into the Marais. No significant reversal. Exact river bridge may be fixed for observation preference later, but an ordinary bridge choice cannot plausibly produce two additional kilometres.

Moving-only 1¼–1½ hours; delivered four-anchor route about 2¼–3 hours with respectful final pauses/rest. This may be a strong compact experience, but there is no mapped support for 7 km. Longer memorial contemplation does not increase walking distance.

Decision: REBUILD as a full 7–11 km commission or keep as an explicitly compact approximately 5 km route. No Vel d'Hiv, liberation Hôtel de Ville, arbitrary plaque trail or long western detour is added here. Denfert's exterior strength remains another gate and has not been assessed in this task.

Reproducible query: [foot route](https://routing.openstreetmap.de/routed-foot/route/v1/foot/2.3324,48.8337;2.3271,48.8514;2.3319,48.8516;2.3562,48.8550;2.3565,48.8549?overview=false).

## 6 — Spy Paris, geometry only

| Ordered standing area | Coordinates lat, lon | Incoming foot-router leg |
|---|---|---:|
| 1. Former Valentinois grounds/rue Raynouard–rue Singer **search area** | 48.8571, 2.2800 | start |
| 2. Place du Trocadéro diplomatic landscape approach | 48.8621, 2.2880 | 1.05 km |
| 3. École Militaire/place Joffre **mapped public approach**, not ceremony courtyard | 48.853593, 2.303284 | 1.87 km |
| 4. Hôtel Beauharnais, 78 rue de Lille exterior | 48.8584, 2.3234 | 1.94 km |
| 5. Pont de la Concorde north crossing approach — **wayfinding only** | 48.8630, 2.3197 | 0.65 km |
| 6. Mata Hari former hotel block, 103–111 Champs-Élysées exterior | 48.8721, 2.3005 | 1.99 km |
| 7. Arc de Triomphe Champs-side **public approach coda** | 48.8738, 2.2965 | 0.39 km |

Total 7.889 km; ordinary frontage/landscape approaches approximately 8.0–8.5 km. The mapped result passes 7–11 km, but does not support asserting 9–11 km as measured. Maximum final snap 11 m. An earlier École coordinate snapped approximately 71–74 m; it was replaced by a mapped approach coordinate. That resolves routing location precision only, not public visibility or permission to enter military grounds. The Arc coda stops on the Champs-side public approach: no traffic-roundabout crossing or monument admission is counted.

Shape: northeast Passy→Trocadéro, southeast across the Seine toward Military, northeast to Beauharnais, then north/northwest across Concorde toward Champs/Arc. Trocadéro is a small northward bulge before crossing; Beauharnais→Concorde returns west a little to the specified crossing. Neither requires a large duplicate loop. Finishing at the former hotel omits 0.394 km and still gives 7.495 km routed.

Moving-only about 2 hours; including four/five substantial stories, landscape pauses and rest approximately 3–4 hours. Institutional interiors, appointments and waiting are excluded.

Decision: PASS geometry only. No claim that Passy's marker exists visibly, that the Mata Hari block is unobscured, that the Trocadéro stop has sufficient spy material, or that the old commission's operation/evidence requirements pass. If an endpoint is removed, route it again rather than transfer this verdict to a shortened hypothesis.

Reproducible query: [foot route](https://routing.openstreetmap.de/routed-foot/route/v1/foot/2.2800,48.8571;2.2880,48.8621;2.303284,48.853593;2.3234,48.8584;2.3197,48.8630;2.3005,48.8721;2.2965,48.8738?overview=false).

## Controller decisions required by measured geometry

1. City Under the City needs a real longer architecture or a compact exception; lawful surface connectors alone do not reach 7 km.
2. Revolutionary's core is approximately 6 km. Its optional Henri-Galli return is geometrically backward and only borderline at the minimum after circulation.
3. Occupied is approximately 5 km, with excellent directional coherence but insufficient distance for this full-route gate.
4. Republic passes when the explicitly mandated Marais/Cité transition is mapped; that exact street shape must be retained in future artifacts.
5. Cinema passes with La Fayette; dropping it produces approximately 5.6 km, not the optimistic 6–7 km fallback.
6. Spy passes the length/shape test while remaining conditional on completely separate historical and visible-site checks.

No geometry verdict here certifies current access, performs external Claude QA, or changes canonical route narrations. This file supplies measured evidence for the next Controller decision.
