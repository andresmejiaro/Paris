# Geometry batch B — v4 routes 7–12

Mapped 3 October 2026. Route numbering follows the **definitive full-route candidate list** in [portfolio_rebuild_v4.md](portfolio_rebuild_v4.md), not its earlier section headings or the old twenty-file manifest.

## Method and limits

These are genuine **Valhalla pedestrian-network queries**, using the anonymous [OpenStreetMap Valhalla routing service](https://valhalla1.openstreetmap.de/) with `costing: pedestrian`, `units: kilometers`, default pedestrian options, and the coordinates below in order. Successful requests returned status 0. Distances are modelled network lengths, not straight-line calculations or GPS measurements. Three decimals preserve the returned sums; entrance/coordinate uncertainty is materially larger than one metre.

The named stops are exact intended places; the WGS84 coordinates are **approximate planning anchors**, usually frontage/forecourt points rather than surveyed doors. Router snapping can select the wrong pavement, underground passage, stair or bank. Consequently this is a geometry gate, not certification of current lawful passage, lighting, opening hours, construction or flood access. No new historical investigations were performed.

One initial Lovers route used a Louvre underground connection; a surface via point replaced that shortcut. A Markets endpoint snapped onto a Canopée escalator; stop at the surface hall instead, or finish at Bourse, pending an exact surface pin. The western water query initially chose river crossings/bank paths inconsistent with the intended walk. A revised query uses Kennedy/New York via points, with remaining Port Debilly access needing on-site/path verification. No router result proves that a riverside promenade is open during flood conditions.

Time columns distinguish movement and experience. Router movement time is a model, excludes narration, queues, eating and sustained inspection, and should not be treated as the visitor's clock. Experience bands add explicit substantial-script/observation/rest time; paid indoor visits and performances remain separate. Lodging approaches/return are excluded. The 3.3 km/h trip benchmark can be used as an alternative ordinary-stop planning pace; do not add the same pauses twice.

Reproduction: call `https://valhalla1.openstreetmap.de/route?json=` followed by a URL-encoded JSON object `{"locations":[{"lat":...,"lon":...,"type":"break"},...],"costing":"pedestrian","units":"kilometers"}`. Via points below use `type:"through"`. Their length is included in the adjacent main leg, not an extra stop. OSM data and routing graph may change between queries.

## Gate overview

| v4 # | Route | Routed distance | Movement model | With substantial narration/observation | Gate against 7–11 km |
|---:|---|---:|---:|---|---|
| 7 | Lovers | **8.925 km**, surface variant | 1 h 51 min | 3–4 h outdoors | **PASS** |
| 8 | Art Nouveau | **6.658 km**, including optional Mezzara and Alma coda | 1 h 25 min | 2.5–3.5 h | **REBUILD / compact exception required**; 7–9 km claim unproved |
| 9 | Stage After Dark | **5.487 km** | 1 h 11 min, hill/stairs may take longer | 2.5–4 h with actual venue observation | **PASS only as experiential exception**; ordinary distance gate fails |
| 10 | Cosmopolitan | **5.883 km** | 1 h 14 min | 2.5–3.5 h, plus a substantial exhibition visit if chosen | **REBUILD** for full-route target; 7.5–9.5 km claim rejected |
| 11 | Markets | **4.678 km**, including surface-final-pin problem | 58 min | 2.5–3.5 h with active trade/browsing | **FAIL full-route distance**; excellent compact market experience remains possible |
| 12 | Water/Pressure/Flood | **7.013 km** with optional infrastructure handoff; **6.735 km** ending at Alma | 1 h 29 min | 2.5–3.5 h | **PASS handoff variant**, narrow lower-edge margin; shorter core needs explicit compact exception |

No minimum-distance claim is rescued by undocumented loops, repeating a street or counting indoor browsing as kilometres.

## 7 — Lovers’ Paris

Recommended surface sequence: Colette residence frontage → Pont des Arts → Héloïse–Abélard façade → Fontaine Médicis → Rodin **exterior** → Bir-Hakeim romantic-image payoff.

| Segment | km |
|---|---:|
| Colette → Pont des Arts, surface via rue Amiral-de-Coligny | 1.348 |
| Pont des Arts → Héloïse–Abélard | 1.403 |
| Héloïse–Abélard → Fontaine Médicis | 1.452 |
| Fontaine Médicis → Rodin exterior | 2.098 |
| Rodin exterior → Bir-Hakeim | 2.622 |
| **Total** | **8.925** |

Shape: south from Palais-Royal, east into Cité, southwest to Luxembourg, northwest to Rodin, then west to the river. The Arts→Cité→Luxembourg hook is real, approximately 2.86 km, and justified by different researched relationship stories; it is not a chronological sequence. This is geographical directional reversal rather than a claim that 2.86 km of pavement are retraced.

Backtracking: the default first leg was 1.192 km and contained a level −1 passage. Surface routing adds 0.156 km and avoids dependence on an underground Louvre shortcut. Rodin→Bir-Hakeim is the longest westward movement. A garden visit is a separate budget/access/time decision; its extra circulation is not in this total. Gate **PASS**. The physical strength of Rodin exterior remains a narration/site-value question outside geometry.

## 8 — Art Nouveau Thresholds

Mapped sequence: Porte Dauphine → Castel Béranger → rue Agar → **Mezzara selected comparison** → Pont de Grenelle crossing → Lavirotte → Alma south-bank display coda. Mezzara was used as the optional comparison for a concrete test, not promoted to a required historical chapter.

| Segment | km |
|---|---:|
| Porte Dauphine → Castel Béranger | 2.538 |
| Castel Béranger → rue Agar | 0.235 |
| Rue Agar → Mezzara frontage | 0.372 |
| Mezzara → Pont de Grenelle west approach | 0.863 |
| Grenelle crossing → Lavirotte | 2.190 |
| Lavirotte → Alma south-bank coda | 0.457 |
| **Total** | **6.658** |

Shape: south through the western neighbourhood, southeast across the river, northeast through the Eiffel/Rapp area. This is coherent and does not need a Trocadéro detour. No full repeated long segment is apparent; the Mezzara comparison adds a small southwest displacement before eastward crossing.

Gate **REBUILD / request compact exception**. The former 7–9 km envelope overstates this particular spine. Frontage inspections may add a few hundred metres, but have not been mapped and must not be booked as guaranteed extra length. Without Mezzara, distance is lower. Preserve the distinct three core scales if the Controller accepts a roughly 6.5–7 km experience; otherwise identify a worthwhile new endpoint before research. An Eiffel or second Guimard address added solely for mileage does not solve the gate. Alma coda is a view/exit, not another substantial Water-route flood narration.

## 9 — Paris on Stage After Dark

Definitive ordered sequence: Folies Bergère → Palais Garnier → Casino de Paris → Moulin Rouge → Lapin Agile → Sacré-Cœur forecourt → Madame Arthur.

| Segment | km |
|---|---:|
| Folies Bergère → Garnier | 1.240 |
| Garnier → Casino de Paris | 0.855 |
| Casino → Moulin Rouge | 0.802 |
| Moulin Rouge → Lapin Agile | 1.140 |
| Lapin Agile → Sacré-Cœur forecourt | 0.777 |
| Sacré-Cœur → Madame Arthur | 0.670 |
| **Total** | **5.487** |

Shape: westward introductory transfer, then north up the Clichy corridor, climb around Montmartre, downhill southeast to the living finale. Router specifically uses stairs in the Lapin→Sacré-Cœur and Sacré-Cœur→Arthur legs. Do not turn the default movement estimate into an accessibility promise; an accessible/stair-avoiding route would need a fresh query.

Backtracking: the Montmartre section intentionally returns downhill to Pigalle; it is an experience loop, not a necessary 7 km street line. No additional venue is needed to support the climb. Gate **PASS by explicit experiential exception only**: active evening observation, hill effort, audiences, exterior comparison and substantial delivery can occupy 2.5–4 hours. If venues are inactive or Lapin has no distinct chapter, the exception weakens; shorten/demote rather than count absent activity. A paid performance adds its real duration separately and is not part of street distance. Correct v4's 6.5–8 km assumption to about **5.5 km plus genuinely chosen local circulation**.

## 10 — Cosmopolitan North and East

Sequence: Passage Brady → Bouffes du Nord → ICI Léon/Goutte-d’Or → Belleville crossroads → rue Dénoyez → Parc de Belleville **upper overlook on rue Piat**.

| Segment | km |
|---|---:|
| Passage Brady → Bouffes du Nord | 1.598 |
| Bouffes → ICI Léon | 0.817 |
| ICI → Belleville crossroads | 2.712 |
| Belleville crossroads → rue Dénoyez | 0.195 |
| Rue Dénoyez → upper overlook | 0.559 |
| **Total** | **5.883** |

Shape: north to Goutte-d’Or, then southeast to Belleville, then uphill east. The ICI→Belleville leg reverses the earlier northward heading and is the 2.712 km connective to evaluate. It is not automatically a 4 km connector. The final approach uses stairs; a gate-closed/stair-free park variant must remain street based.

Backtracking: north-to-southeast directional change, with some departure near the La Chapelle approach. This is materially less than the inherited 7.5–9.5 km claim. Gate **REBUILD** if the commission requires a full 7–11 km street route. An ICI visit and real shop/cultural activity may justify a compact experience exception, but visitors/residents cannot be treated as additional exhibits or invented narrated quarters. Transit on the long connector would reduce walked distance further. Removing Brady might improve density but does not solve the full-route length target.

## 11 — Markets and Supply

Main producer-day sequence: Aligre/Beauvau → Enfants Rouges → rue Montorgueil former supply-street context → Bourse de Commerce exterior → optional surface Halles/Canopée finish.

| Segment | km |
|---|---:|
| Aligre/Beauvau → Enfants Rouges | 2.342 |
| Enfants Rouges → rue Montorgueil | 1.242 |
| Montorgueil → Bourse exterior | 0.629 |
| Bourse → Canopée anchor | 0.464 |
| **Total** | **4.678** |
| **Finish at Bourse, omit Canopée return** | **4.214** |

Shape: northwest from Aligre through Marais, west toward the former central supply complex. Bourse→Canopée is a small eastward return within the same endpoint complex, and the queried Canopée pin produced an escalator/level artefact. Prefer the Bourse exterior finish until a surface pin is verified.

Thursday/Sunday variant: Aligre→Bastille operating food market **1.282 km**; Bastille→Enfants Rouges **1.123 km**; Enfants Rouges→Montorgueil **1.242 km**; Montorgueil→Bourse **0.629 km**; reported total **4.277 km** (sum differs by 0.001 km because individual legs are rounded). Bastille does not rescue route length. Enfants Rouges producer session is a separate Wednesday/Saturday dependency, so the Thu/Sun variant cannot claim that same producer encounter.

Gate **FAIL as a 7–11 km full-route line**. Real stall browsing, breakfast and three substantial food-system narrations can make this a rewarding 2.5–3.5-hour morning, warranting a compact reserve/experience decision. They cannot turn 4.2–4.7 km into 7–9 km. No inactive Bastille stop, zigzag shopping street or additional false market chapter should be commissioned just to reach seven.

## 12 — Water, Pressure, and Flood

Preferred candidate: **Jean-Lorrain Wallace comparison**, whose address/model already has stronger route evidence than the alternatives. Directional sequence: Lamartine → Jean-Lorrain → former Auteuil waterworks frontage → Pont Mirabeau western approach → upper Kennedy/right-bank river walk → Bir-Hakeim **passing connective only** → upper New York/Alma flood-view payoff → optional sewer-entrance handoff across Alma.

| Segment, corrected bank-aware query | km |
|---|---:|
| Lamartine → Jean-Lorrain | 2.268 |
| Jean-Lorrain → Auteuil, 77 avenue de Versailles | 0.885 |
| Auteuil → Mirabeau western approach | 0.198 |
| Mirabeau → Bir-Hakeim west pavement, via Kennedy/Radio-France frontage | 1.819 |
| Bir-Hakeim → Alma north-bank viewpoint, via upper avenue de New York | 1.563 |
| Alma → sewer entrance exterior handoff | 0.278 |
| **Total with handoff** | **7.013** |
| **Core ending at Alma** | **6.735** |

Shape: south/southwest from Lamartine, east to Auteuil/Mirabeau, then northeast along the river. Jean-Lorrain costs 3.153 km to reach the works, rather than making a premature north/east reservoir excursion. Bir-Hakeim receives no second romantic or engineering core narration. The handoff is an actual nearby service-address relationship, not a paid sewer visit or a sixth scripted chapter.

Comparison test: **place de Barcelone**, geocoded junction at **48.8474292, 2.2737147**, gives Lamartine→comparison **2.289 km**, comparison→Auteuil **0.184 km**, then Mirabeau **0.198 km**, river→Bir-Hakeim **1.819 km**, Bir-Hakeim→Alma **1.563 km**, optional handoff **0.278 km**, total **6.333 km** with handoff / **6.055 km** to Alma. This uses the same revised river via points as Jean-Lorrain. Its western block is **2.473 km vs Jean-Lorrain 3.153 km**, saving **0.680 km**. Barcelone is immediately north of the waterworks and is the cleanest geometric comparison, but its precise fountain frontage/model/visibility needs a cheap site check. An earlier trial pin at 48.8530, 2.2736 did not identify place de Barcelone and is discarded, including its 6.239 km result. Neither comparison supports the inherited 8–10 km claim.

**Passy reservoir is rejected for this shape**: it pulls north/east before the southern works and creates a redundant source/reservoir comparison. Jean-Lorrain is the current recommendation, Barcelone the optional simplified version; do not use both.

The first water query totalled 7.147 km but chose unwanted bank/crossing paths. A subsequent nominal north-bank attempt was 6.868 km and still used opposite-bank ports. Those figures are superseded, not averaged into an 8–10 km band. The final 7.013 km query improves the sequence but still mentions **Port Debilly**: current lower-bank continuity/flood access is unresolved. An upper-pavement override may add distance; no speculative allowance is included. Treat **7.0–7.5 km** as a provisional execution envelope only after that override is mapped. The proper gate is **PASS for the handoff version, lower-edge confidence**, or explicit compact exception for the 6.735 km core. The inherited 8–10 km band is unsupported.

For site identification only, [Ministry of Culture's Auteuil record](https://pop.culture.gouv.fr/notice/merimee/PA75160013) confirms 75–93 avenue de Versailles / 74 quai Louis-Blériot. Nominatim located the 77 avenue frontage at approximately 48.84635, 2.27321. This does not certify an operating pumping tour or museum access. [Municipal Wallace map](https://cdn.paris.fr/paris/2022/09/14/6b6781223df8d088b72cb5bf79b214e2.pdf) distinguishes Jean-Lorrain from Barcelone; no claim that either fountain runs in cold weather is made.

## Reproducible anchor register

Coordinates below are latitude, longitude. All are planning pins, not a survey. Do not silently reuse the old twenty-route numbers.

### 7 — Lovers

| Order | Intended stop | Latitude | Longitude | Role |
|---:|---|---:|---:|---|
| 1 | Colette | 48.8666 | 2.3375 | break |
| 2 | Surface via rue Amiral de Coligny | 48.8609 | 2.34 | through |
| 3 | Pont des Arts | 48.8583 | 2.3378 | break |
| 4 | Heloise | 48.8538 | 2.3506 | break |
| 5 | Medicis | 48.8496 | 2.3372 | break |
| 6 | Rodin | 48.8555 | 2.3155 | break |
| 7 | BirHakeim | 48.8555 | 2.2897 | break |

### 8 — Art Nouveau

| Order | Intended stop | Latitude | Longitude | Role |
|---:|---|---:|---:|---|
| 1 | Porte Dauphine | 48.8715 | 2.2768 | break |
| 2 | Castel Beranger 14 La Fontaine | 48.8525 | 2.2738 | break |
| 3 | Agar junction | 48.8519 | 2.2735 | break |
| 4 | Mezzara optional comparison | 48.8508 | 2.27 | break |
| 5 | Pont de Grenelle west | 48.8507 | 2.2798 | break |
| 6 | Lavirotte29Rapp | 48.8585 | 2.3005 | break |
| 7 | Alma south-bank coda | 48.8624 | 2.3013 | break |

### 9 — Stage

| Order | Intended stop | Latitude | Longitude | Role |
|---:|---|---:|---:|---|
| 1 | Folies Bergere | 48.8741 | 2.3446 | break |
| 2 | Palais Garnier | 48.872 | 2.3316 | break |
| 3 | Casino de Paris | 48.8785 | 2.3303 | break |
| 4 | Moulin Rouge | 48.8841 | 2.3322 | break |
| 5 | Lapin Agile | 48.8893 | 2.3396 | break |
| 6 | Sacre Coeur forecourt | 48.8867 | 2.343 | break |
| 7 | Madame Arthur | 48.8825 | 2.3399 | break |

### 10 — Cosmopolitan

| Order | Intended stop | Latitude | Longitude | Role |
|---:|---|---:|---:|---|
| 1 | Passage Brady | 48.8715 | 2.3557 | break |
| 2 | Bouffes du Nord | 48.8842 | 2.3583 | break |
| 3 | ICI Leon | 48.8877 | 2.3538 | break |
| 4 | Belleville crossroads | 48.872 | 2.3769 | break |
| 5 | rue Denoyez | 48.8725 | 2.3793 | break |
| 6 | Parc Belleville overlook Piat | 48.8713 | 2.3845 | break |

### 11 — Markets-main

| Order | Intended stop | Latitude | Longitude | Role |
|---:|---|---:|---:|---|
| 1 | Aligre Beauvau | 48.8489 | 2.3783 | break |
| 2 | Enfants Rouges39Bretagne | 48.863 | 2.3619 | break |
| 3 | Montorgueil former supply streets | 48.8646 | 2.3477 | break |
| 4 | Bourse de Commerce | 48.8628 | 2.3428 | break |
| 5 | Halles Canopee | 48.8625 | 2.347 | break |

### 12 — Water Jean-Lorrain

| Order | Intended stop | Latitude | Longitude | Role |
|---:|---|---:|---:|---|
| 1 | Lamartine | 48.8649 | 2.2752 | break |
| 2 | Jean-Lorrain | 48.8481 | 2.2648 | break |
| 3 | Auteuil | 48.8463 | 2.2732 | break |
| 4 | Mirabeau west | 48.847155 | 2.275417 | break |
| 5 | RadioFrance Kennedy frontage | 48.8527 | 2.2794 | through |
| 6 | BirHakeim west pavement | 48.856 | 2.2873 | break |
| 7 | avenueNewYork upperpavement | 48.8605 | 2.2921 | through |
| 8 | Alma northbank | 48.864 | 2.3013 | break |
| 9 | sewer optional | 48.8626 | 2.3027 | break |

Additional variant pins: place de Barcelone comparison junction **48.8474292, 2.2737147**; Bastille market southern/middle boulevard approach **48.8565, 2.3706**. Variant totals are recorded above, not additional compulsory stops.

## Controller action

Accept Lovers geometry; evaluate Art Nouveau as a near-threshold compact exception; preserve Stage only with its explicit experiential/active-night exception. Rebuild or demote Cosmopolitan and Markets instead of retaining their inflated bands. Keep the Jean-Lorrain water spine at the lower target edge, conditional on a legal upper-bank trace and honest optional handoff. No new narrations, ownership allocations, source histories or external QA acceptance are implied by this file.
