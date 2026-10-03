# Paris portfolio — cloud handoff checkpoint

Paused: 3 October 2026, at the user's request.

## Do not restart from the old 20-route portfolio

The old route files are a waypoint/narration quarry, not an accepted portfolio.
The user prefers thematic walks. Geography is connective tissue and becomes the
subject only when landscape transformation genuinely supports a route. Museum
interiors are reserved for a free-museum day. Do not create a greatest-hits walk.

User requirements now governing the rebuild:

- roughly 20 real walking opportunities across a two-week/28-slot trip, but do
  not manufacture a numerical quota;
- normal full route target is 7–11 km;
- 2–5 km concepts are modules, not full walks;
- famous landmarks need thematic owners rather than one monumental checklist;
- undercovered zones and parks/nature/retired rail must be addressed where they
  produce real themes;
- preserve strong themes, especially paranormal/horror and Spy if evidence works;
- kill weak routes and rediscover anchors before spending on full investigation;
- no audit/narration work until architecture and real geometry pass.

## Current controlling document

Read `routes/portfolio_rebuild_v5.md` first. It supersedes v2–v4 for decisions.

Actual pedestrian routing invalidated many optimistic distance estimates. The
reproducible geometry is in:

- `routes/geometry_batch_a.md`
- `routes/geometry_batch_b.md`
- `routes/geometry_batch_c.md`
- `routes/geometry_batch_c_data.json`

## Honest measured baseline

Seven current full walking days:

1. Cinema, Projection, and Modern Monsters — 6.968 km routed, about 7–7.5 executed.
2. Republic and Representation — 7.359 km using the explicit Marais/Cite path.
3. Lovers' Paris — 8.925 km.
4. Water, Pressure, and Flood — 7.013 km with infrastructure handoff.
5. Canal Changes Jobs — 7.077 km, full Arsenal version only.
6. Art Nouveau Thresholds — 6.658 km, narrowly accepted architecture exception.
7. Paris on Stage After Dark — 5.487 km, accepted only as an active-night,
   hill/venue-observation exception; otherwise it is a module.

Spy measures 7.889 km and passes geometry, but remains conditional on physical
anchor legibility.

Definitive modules, not full walking days:

- Markets and Supply — 4.678 km.
- Cemetery Spirits/Spectacles — honest 2.5–4 km.
- Medieval Devils — about 4–5 km.
- Books, Illusions, two Colonial blocks, and Scientific material remain reserve
  modules/free-museum-day material as described in v5.

Nine routes were awaiting targeted anchor discovery:

- City Under the City
- Revolutionary Paris
- Occupied City
- Spy Paris
- Cosmopolitan North/East
- Northwestern Belt
- Elevated East / Coulee verte
- Southern Margins
- Western Green Machinery

PC13 must count as closed/unavailable after the reported tunnel fire until an
explicit city reopening notice exists. The lawful Southern Margins fallback is
6.839 km, not the invalid 9.343 km rail hypothesis.

## Discovery work interrupted before files were written

Two workers were stopped on request. Their last reported results must be treated
as promising leads, not completed research.

### Batch D partial findings

- Revolutionary Paris measured:
  - Bastille to Nation/Dalou version: 8.147 km — recommended lead.
  - Maison Belhomme version: 7.741 km.
  - Mur des Federes version: 9.397 km.
- Occupied City to Gymnase Japy: 7.268 km. Japy was reported as a strong, precise
  `billet vert` roundup/public-gymnasium anchor and is the recommended lead.
- Occupied City to Rothschild: 8.842 km; exterior/rescue payoff less secure.
- City Under the City: a westward opening using the Grenelle borehole monument
  and an aquifer/public-water endpoint near square Paul-Verlaine measured 6.962
  km before honest cemetery circulation. Geological sources from Orsay/MNHN were
  reportedly found. Promising conditional rescue, but thematic fit must be
  checked carefully so the walk remains underground geology/horror rather than
  becoming a second water-infrastructure route.

### Batch E partial findings

- Cosmopolitan: CENTQUATRE, 5 rue Curial, was identified as a strong cultural-
  production anchor. The worker reported official 2026 France–Taiwan Villa
  Formose residency material and free artistic-practice halls. It needs routing
  and thematic integration with Brady/Bouffes/ICI/Belleville.
- Northwestern Belt candidates beyond Porte Maillot:
  - Bois threshold / square Alexandre-et-Rene-Parodi;
  - Jardin d'Acclimatation gate and historic Maillot rail connection;
  - Mare Saint-James toward Fondation exterior;
  - Porte de Madrid gate pavilions.
  These were leads only; reject park loops.
- Spy: the Passy plaque reportedly has historical-society and heritage-registry
  photo/location support. Mata Hari's 103 Champs-Elysees block has official city
  records showing a large construction wrap, but no authoritative certification
  that it will be visible in 2026. Do not call old crawled imagery a current
  onsite verification.

No `routes/discovery_batch_d.md` or `routes/discovery_batch_e.md` existed when
the workers were interrupted.

## Exact next action after resume

1. Finish and save discovery batches D and E from the partial findings above.
2. Run discovery batch F for Elevated East, Southern Margins, and Western Green
   Machinery using the exact briefs in v5.
3. Route-test only candidates that first pass the thematic screen.
4. Synthesize a v6 portfolio. Aim for 14–16 strong full walks if discovery earns
   them; do not restore 18–20 by padding.
5. Only then commission missing waypoint evidence. Do not restart narration
   audits or external QA yet.

## Agent/config constraints

- Maximum three spawned agents open concurrently.
- Maximum delegation depth two; grandchildren must not spawn.
- Two discovery workers were explicitly interrupted at pause.
- A working anonymous pedestrian router was found at the Valhalla OpenStreetMap
  endpoint `https://valhalla1.openstreetmap.de/route?json=` using URL-encoded
  JSON with `costing: pedestrian` and `units: kilometers`.

