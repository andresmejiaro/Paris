# Geometry batch C — v4 routes 13–17

Measured 3 October 2026. Numbering follows the **definitive candidate list** in [portfolio rebuild v4](portfolio_rebuild_v4.md), not the older subsection numbers. Scope is pedestrian geometry, timing and entrance/continuity gates. No narration audit or agents were used.

## Method, precision and verdicts

Working router: anonymous **Valhalla**, `https://valhalla1.openstreetmap.de/route?json=`, with URL-encoded `{locations:[{lat,lon},...],costing:"pedestrian",units:"kilometers"}`. All final queries returned status 0. Valhalla limits a request to ten locations, so Route 17 uses two requests sharing one point; their distances are summed without duplicating a leg. Responses were parsed in the orchestration tool; a nested Node→curl subprocess failed DNS/permission checks, while direct curl calls succeeded. No permission escalation was used.

Every final input coordinate, exact response leg/total, timing and reproducible URL is saved in [geometry_batch_c_data.json](geometry_batch_c_data.json). These are router measurements, not straight-line estimates. Inputs identify standing/gate areas, not survey-grade positions. Photon resolved 116 rue de Saussure and 34 boulevard Pereire to house points, and 101 rue Olivier-de-Serres to a house point; the Damesme result was a **street segment**, not a verified number-60 stair pin. All other points are explicit approximate map positions. The router snaps them onto its network; exact gate/deck locations must still be verified.

Crucial limitation: a pedestrian router seeks a legal mapped connection, not the thematic corridor. Inspection of maneuvers showed that the PC15 legs briefly use Boulevard Lefebvre/Victor and that the elevated opening uses Rue de Charenton before returning to the promenade. Such lengths cannot certify uninterrupted rail/deck walking. Internal circulation and substitutions are therefore recorded separately below, with no double-counting and no generic distance inflation.

Timing uses **4 km/h moving pace**, then independently adds roughly 4–7 minutes per substantial chapter plus looking/rest/navigation. It does not audit or assume completed scripts. The older 3.3 km/h benchmark includes stops already and is not combined mechanically with a full stop allowance. Router durations are retained in JSON for reproducibility, not promised as trip pace. Lodging approaches, station walking and attraction interiors are excluded.

PASS requires a defensible 7–11 km thematic route. REBUILD identifies a short current spine or an unresolved substantial corridor substitution. FAIL identifies a presently unavailable required connection, without predicting its state in November. A compact route can remain interesting while failing the requested full-route distance gate.

| v4 # | Route | Measured network distance | Honest planning implication | Gate |
|---:|---|---:|---|---|
| 13 | Canal Changes Jobs | **7.077 km full**; **4.418 km short** | About 7.1–7.5 km full; short form roughly 4.5–5 km | **PASS full / REBUILD short** |
| 14 | Northwestern Belt | **5.164 km** | About 5.2–6 km, including modest extra park/rail observation | **REBUILD** |
| 15 | Elevated East / Coulée Verte | **6.276 km** | About 6.3–6.8 km; deck/rail fidelity remains an additional gate | **REBUILD** |
| 16 | Southern Margins | **9.343 km prescribed rail hypothesis**; **6.839 km surface fallback** | Length passes only with an eastern rail hook; current closure invalidates rail access | **FAIL current rail access; REBUILD surface fallback** |
| 17 | Western Green Machinery | **5.753 km** | Approximately 5.9 km replacing mapped rail approach with published PC15 length; roughly 5.9–6.4 km after modest looking | **REBUILD** |

The earlier 8–10 km Northwestern, 9–11 km Elevated and 7.5–9.5 km Western bands are not supported by the selected spines. Canal's full 10–11 km estimate also overstates the network measurement; its Arsenal opening is sufficient for a lower-bound full-route pass. Southern's prescribed ordering has a real directional defect in addition to its closure.

## 13 — Canal Changes Jobs

| Order / standing or wayfinding area | Latitude, longitude | Incoming routed distance |
|---|---|---:|
| 1. Arsenal southern basin/boulevard Bourdon approach | 48.847300, 2.367500 | start |
| 2. Bastille northern basin/covered-canal transition | 48.853200, 2.369100 | 0.756 km |
| 3. Richard-Lenoir covered-canal trace | 48.860000, 2.371500 | 0.861 km |
| 4. Temple mouth/open-canal threshold | 48.868200, 2.366800 | 1.040 km |
| 5. Récollets locks | 48.874000, 2.363800 | 0.744 km |
| 6. Rotonde/Bassin southern threshold | 48.883900, 2.369000 | 1.300 km |
| 7. MK2/northern warehouse bank standing area | 48.889200, 2.373500 | 0.770 km |
| 8. Grande Halle approach, Parc de la Villette | 48.890800, 2.390000 | 1.602 km |

**Total 7.077 km.** Without Arsenal/Bastille/Richard-Lenoir, an independent short query starting at Temple gives **4.418 km**. Starting at Récollets gives roughly 3.67 km. Leg values are rounded by the router, so sums can differ by a few metres from full-precision route totals. The short line cannot retain its old 7–8 km claim.

Internal circulation: none separately measured beyond the routed basin/park approaches. Allow **0.1–0.4 km** for lock-front viewing and final hall approach if desired; do not add the entire basin perimeter or a La Villette loop as obligatory movement. That gives a sensible full planning band around 7.1–7.5 km, not 10–11 km.

Shape: broadly northbound until the upper canal reaches La Villette, then east/southeast toward Grande Halle. The final 1.602 km leg includes the practical movement from the warehouse bank to the hall; it is not a straight diagonal across water. There is no major repeated corridor. Covered-canal points are surface wayfinding, not permission to enter a canal tunnel.

Moving-only full **1¾–2 hours**, short **1¼ hours**. With five/six substantial chapters, looking and rest: full **2¾–3½ hours**, short **2–2¾ hours**. These are geometry planning figures, not script runtime measurements.

Dependencies: public basin approaches, towpath closures/works, footbridge availability, choice of bank and Parc de la Villette crossing. Where a bank is interrupted, ordinary public-street bypasses should be rerouted; do not cross operational lock equipment. No opening/works certification was performed for this route. **PASS full**, conditional on current legal continuity; **REBUILD short** if the controller still requires a full 7–11 km route.

## 14 — Northwestern Belt

| Order / standing or wayfinding area | Latitude, longitude | Incoming routed distance |
|---|---|---:|
| 1. Batignolles village/Sainte-Marie church frontage | 48.883700, 2.319100 | start |
| 2. Square des Batignolles internal standing area | 48.885500, 2.316700 | 0.296 km |
| 3. Martin-Luther-King southern park approach | 48.888300, 2.315100 | 0.428 km |
| 4. Martin-Luther-King northern landscape area | 48.892900, 2.313000 | 0.752 km |
| 5. PC17 access opposite 116 rue de Saussure — geocoded house-side approach | 48.888097, 2.310876 | 1.000 km |
| 6. PC17 exit opposite 34 boulevard Pereire — geocoded house-side approach | 48.887901, 2.306693 | 0.326 km |
| 7. Promenade Pereire westbound standing area | 48.885700, 2.298900 | 0.681 km |
| 8. Porte Maillot pedestrian transformation area | 48.878000, 2.282000 | 1.678 km |

**Total 5.164 km.** The house-side entrance pins are approximately correct public approaches, not the bottom of the stairs. The PC17 between-access query uses walkways, but its map shape alone does not establish whether every section lies in the railway trench or alongside it.

Separately measured internal MLK transit: **0.752 km**, already included. PC17 between-access network movement **0.326 km**, already included. [Official borough page](https://mairie17.paris.fr/pages/nouveau-ouverture-au-public-de-la-petite-ceinture-pereire-12056) identifies exactly two stair accesses, opposite 116 Saussure and 34 Pereire, and says the promenade is not accessible for reduced mobility. The public section may extend beyond the second stair, which could create an optional local out-and-back; no unmeasured full-section distance is added. Modest square/park/rail observations could add **0.2–0.8 km**, keeping the honest envelope roughly **5.2–6 km**.

Shape: northwest through MLK, then **southward roughly 1 km** toward the Saussure access, then west/southwest along Pereire toward Maillot. The northern park point creates a noticeable hook, though the exit leg can use a different edge from the inbound walk. Moving Saussure earlier or leaving MLK from the southwest may reduce that reversal, but also shortens the route. Monceau would reintroduce the rejected southeast ending rather than fix the full-route thesis.

Moving-only **1¼–1½ hours**. With five/six landscape chapters, looking and rest **2¼–3 hours**. The Maillot coordinate is a pedestrian standing area, **not a validated exact transformation feature**; its final chapter remains a site-selection gate.

Dependencies: park opening, PC17 stair gates, current rail-path boundary, continuous promenade sections and safe Maillot crossings under construction. Never assume the open rail segment continues into RER tracks. **REBUILD** for a 7–11 km commission; no meaningful extra two kilometres are presently mapped.

## 15 — Elevated East / Coulée Verte

| Order / standing or wayfinding area | Latitude, longitude | Incoming routed distance |
|---|---|---:|
| 1. Bastille/Viaduc opening street approach | 48.852700, 2.369200 | start |
| 2. Early elevated promenade access/deck area | 48.849900, 2.373800 | 0.590 km |
| 3. Jardin de Reuilly/Passerelle André-Léo area | 48.842300, 2.387500 | 1.372 km |
| 4. Rail-cut continuation/rue du Sahel area | 48.839800, 2.398200 | 0.926 km |
| 5. Montempoivre/eastern continuation approach | 48.837300, 2.409600 | 1.208 km |
| 6. Porte Dorée public threshold, geography only | 48.835200, 2.406400 | 0.419 km |
| 7. Lac Daumesnil western public-shore approach | 48.830100, 2.410900 | 0.744 km |
| 8. Southern shoreline wayfinding point | 48.828600, 2.414500 | 0.440 km |
| 9. Southeastern lake/woodland-edge finish | 48.828100, 2.419500 | 0.575 km |

**Total 6.276 km.** The southern shore is an explicit partial traversal, not an arbitrary full lake circuit. Porte Dorée→woodland finish is **1.759 km**. Promenade-area points 2→5 account for **3.506 km**, but the measured path uses some street connectors: it is not proof of uninterrupted elevated/sunken corridor walking.

Rejected measurement: preliminary northern lake/possible island points produced **8.927 km**, but polyline inspection showed large returns and repeated shoreline/bridge movements. Those input points were not reliable external shore positions. That apparently passing distance is **not accepted**. Its inflation came from a poor endpoint choice, not a superior route. No full lake loop is added merely to restore the original 9–11 km envelope.

Internal rail/garden and lake movements are already included in the table. Unmeasured small deck-viewing and Reuilly circulation allowance **0.1–0.5 km** yields roughly **6.3–6.8 km**, not a secure minimum of 7. A correctly constrained deck route must be mapped before certification; it could be longer or shorter than the router's street preference.

Shape: southeast/east along the reused railway, then **southwest 0.419 km** from the eastern continuation to Porte Dorée, followed by south/east lake movement. That is a small threshold turn, not a full reverse traverse. The southeast finish has no immediately guaranteed Métro entrance; return to Porte Dorée adds an ordinary exit leg that must be measured separately and must not be counted as thematic route length.

Moving-only **1½–1¾ hours**; with five/six landscape chapters and rest **2½–3½ hours**. Park gates and deck approaches affect pacing, even without dramatic elevation gain.

[Official Coulée Verte listing](https://www.paris.fr/lieux/coulee-verte-rene-dumont-1772) gives access groups for Bastille→Reuilly, Tunnel de Reuilly→Émile-Laurent and the farther eastern section. It identifies the Hector-Malot lift as operating, with lifts at 34 rue de Lyon and Leroy Merlin out of service. Its timetable returned September values rather than trip-date certification; refresh late-autumn gates. Use lawful stairs or an operating lift, not a route line drawn through a closed access. Further gates: sunken-section tunnel availability, Boulevard Soult crossing, forest/lake public paths. **REBUILD**: the selected spine is short and corridor fidelity remains unresolved.

## 16 — Southern Margins

| Order / standing or wayfinding area | Latitude, longitude | Incoming routed distance |
|---|---|---:|
| 1. BnF Seine-edge public approach | 48.833900, 2.376500 | start |
| 2. Grands Moulins/new 13th urban fabric | 48.829100, 2.380000 | 0.737 km |
| 3. Butte-aux-Cailles/Bièvre search area | 48.827400, 2.349700 | 2.679 km |
| 4. Cité Florale street area | 48.822300, 2.341900 | 0.963 km |
| 5. PC13 rue Damesme approach, geocoder returned street segment | 48.821493, 2.355284 | 1.112 km |
| 6. PC13/Charles-Trenet western approach | 48.820700, 2.347100 | 0.795 km |
| 7. Montsouris eastern public gate approach | 48.824400, 2.340100 | 0.985 km |
| 8. Montsouris southern gate approach | 48.821800, 2.337800 | 0.422 km |
| 9. Cité Universitaire northern public perimeter | 48.820200, 2.339700 | 0.437 km |
| 10. Cité Universitaire western public-perimeter finish | 48.819400, 2.327800 | 1.209 km |

**Prescribed rail-hypothesis total 9.343 km.** This is a network connection through the selected areas, not proof of rail-path access. The Damesme pin's exact entrance precision remains weak, and the router uses mapped ways that do not encode the current emergency closure.

**Current access blocker:** [official PC13 listing](https://www.paris.fr/lieux/petite-ceinture-du-13e-pc-13-18089) reports closure after a tunnel fire, with a dated exception through 5 October **and an open-ended closure notice**. It cannot be assumed to reopen on 6 October or before this trip. The [borough description](https://mairie13.paris.fr/pages/la-petite-ceinture-dans-le-13e-10741) identifies the formal section connecting Charles-Trenet, Moulin-de-la-Pointe and Poterne-des-Peupliers. Those formal paths do not establish a public rail corridor continuing to Montsouris.

Shape defect: Cité Florale→Damesme goes **east for 1.112 km**, then west again through the PC13 area and toward Montsouris. The v3/v4 description of consistently southwest progress is false for its stated order. If PC13 reopens, the architect should investigate visiting it **before Cité Florale**. Do not preserve the reverse ordering just because it produces a convenient nine kilometres.

Mapped fallback: remove points 5 and 6, go from Cité Florale directly to the eastern Montsouris gate (**0.389 km**). The resulting total is **6.839 km**, using only public surface connections and park gates. The rail hook contributes **2.504 km** over this direct alternative. It is not all valuable internal railway distance.

Internal Montsouris gate-to-gate circulation **0.422 km** and Cité northern-to-western perimeter **1.209 km** are already included. No quarry-relief visit is inserted. The CIUP query follows the public edge and some streets; it does not assume unlimited access through student residences. A modest **0.1–0.4 km** park/Bièvre observation allowance could place the surface version near 7–7.3 km, but exact Bièvre markers and park chapters have not been mapped, so that is not a robust full-route PASS yet.

Moving-only rail hypothesis **2¼–2½ hours**, surface **1¾–2 hours**. With five/six chapters and rest: hypothetical rail **3½–4½ hours**, surface **2¾–3¾ hours**. Current closure means the rail runtime is hypothetical only.

Dependencies: exact Bièvre chapter location; PC13 reopening and correct stairs; street connectors between separate rail segments; Montsouris gates; CIUP perimeter and exit choice. **FAIL current rail access / REBUILD surface alternative**. The theme need not be abandoned, but its lawful available architecture must be selected explicitly.

## 17 — Western Green Machinery

| Order / standing or wayfinding area | Latitude, longitude | Incoming routed distance |
|---|---|---:|
| 1. Georges-Brassens eastern park gate approach | 48.832400, 2.301500 | start |
| 2. Brassens central park landscape | 48.831000, 2.299200 | 0.393 km |
| 3. Brassens western gate approach | 48.831600, 2.295300 | 0.455 km |
| 4. PC15/101 Olivier-de-Serres house-side access approach | 48.831693, 2.293095 | 0.363 km |
| 5. PC15/Desnouettes midway access area | 48.833100, 2.286200 | 0.670 km |
| 6. PC15/Place Balard exit approach | 48.836100, 2.278300 | 0.703 km |
| 7. André-Citroën southern park entrance | 48.839000, 2.274700 | 0.632 km |
| 8. André-Citroën central landscape | 48.841600, 2.274500 | 0.453 km |
| 9. André-Citroën river-side exit approach | 48.842800, 2.272000 | 0.293 km |
| 10. Javel Seine bank wayfinding point | 48.846300, 2.276000 | 0.556 km |
| 11. Pont de Grenelle island-access approach | 48.851500, 2.279400 | 0.876 km |
| 12. Île aux Cygnes southern statue/river-engineering finish | 48.850100, 2.279700 | 0.356 km |

**Total 5.753 km** = request A 4.521 + request B 1.232. Bir-Hakeim is neither a stop nor a narrated ending. Returning from the statue to the Grenelle bridge adds roughly the same **0.356 km** as an exit requirement, separately from the thematic total.

Internal park circulation already measured: Brassens **0.848 km**; Citroën **0.746 km**. Mapped PC15 approach-to-Balard via midway point **1.373 km**, but maneuvers partly use parallel public streets. [City ecological-promenade description](https://paris-v4.paris.fr/pages/la-petite-ceinture-et-ses-promenades-ecologiques-7855) gives **1.5 km** for Olivier-de-Serres→Balard. Replacing—not adding—that portion with the published rail-traversal length yields approximately **5.88 km**, before unmeasured exact stair approaches. This is an operational planning substitution, not a fully routed rail measurement. Modest additional park observation puts the envelope around **5.9–6.4 km**, still short of seven.

Shape: west/southwest across Brassens to railway access, northwest toward Balard, north through Citroën, northeast up the river, then a short southward island coda. The only return needed is the island-to-bridge exit. The route's essential direction is coherent; its defect is length and some corridor-specific routing, not a large cross-city zigzag.

Moving-only **1½–1¾ hours** with honest park/rail circulation; delivered five-chapter route **2½–3½ hours**. Additional park wandering may increase both time and kilometres but is not accepted thematic distance without explicit relevant chapter locations.

Dependencies: Brassens/Citroën gates; exact PC15 stairs and open railway path; any claimed newer Brassens/tunnel connection; safe riverbank path; Grenelle stair access to the island. The [15th borough account](https://mairie15.paris.fr/pages/decouvrez-la-petite-ceinture-une-ballade-en-pleine-nature-au-coeur-du-15e-31985) supports the formal Olivier-de-Serres–Balard section. A [city works document](https://cdn.paris.fr/paris/2024/09/24/lettre-info-chantier-pc15-a3v2-8-CcsG.pdf) describes new Brassens access works, but is not an as-of-today opening certificate. This map deliberately reaches the established street access instead of relying on that unverified tunnel. **REBUILD**; a coherent compact green route survives, but the current seven-kilometre minimum does not.

## Controller decisions required

1. Canal can pass as the Arsenal-opening version at roughly 7 km. Its short form is a compact module unless a different meaningful extension is commissioned.
2. Northwestern is about 5.2 km with the chosen park traverse. A genuine added chapter is needed for full-route status; extra park laps do not fix the gate.
3. Elevated East is roughly 6.3 km on a defensible partial south-shore lake ending. Constrain actual deck/cut walking and select the lake chapter before any length claim. Reject inflated northern/island pins and arbitrary full circuits.
4. Southern needs a closure-aware choice and better ordering. The prescribed rail hook passes length but is currently unavailable and reverses direction. The available surface line is near the minimum and needs exact meaningful internal chapter mapping.
5. Western is approximately 5.8–6.4 km despite three distinct landscapes. Decide compact exception or real rebuild; Bir-Hakeim ownership and railway trespass cannot be used to rescue it.

None of these findings certifies historical evidence, current November operation, narrated experience or external Claude acceptance. They are measured inputs for the next architecture decision.
