# Discovery batch D — southern underground, revolution, occupation

Completed 5 October 2026 from the interrupted 3 October discovery and Valhalla measurements preserved in CLOUD_HANDOFF_STATE.md. Controlling brief: portfolio_rebuild_v5.md. This is candidate discovery and architecture screening, not full evidence/narration audit, live-access certification or external QA. No subagents, paid interior mileage, closed railway or scenic distance loops were used.

## Recommendation

| Commission | Recommended change | Measured pedestrian spine | Architecture verdict |
|---|---|---:|---|
| Revolutionary Paris | Bastille → Nation/Dalou ending | 8.147 km | ACCEPT architecture for focused waypoint investigation |
| Occupied City | Shoah exterior complex → Gymnase Japy | 7.268 km | ACCEPT architecture; exact public frontage and delivery still need investigation |
| City Under the City | Grenelle borehole monument opening; Paul-Verlaine aquifer endpoint | 6.962 km | CONDITIONAL REBUILD; geological broadening must earn its two water-related chapters |

The first two recover full-route distance through strong exact thematic anchors. The third is a plausible surface-geology walk at the lower boundary, but is not automatically an accepted horror walk or a second water-service route. If geological broadening is rejected, demote the inherited approximately 5–6 km walk to a compact module rather than add invisible quarry addresses.

## Routing method and measurement continuity

All candidate versions below were queried on 3 October against anonymous Valhalla: `https://valhalla1.openstreetmap.de/route?json=` plus URL-encoded JSON with `locations:[{lat,lon},...]`, `costing:"pedestrian"`, `units:"kilometers"`, `directions_type:"none"`. Successful responses had trip status 0. Values below preserve those returned leg distances and totals, not estimates newly presented as measurements. They have not been rerouted or operationally recertified on 5 October.

Input coordinates identify existing route anchors or approximate public frontage/search areas. OSM routing does not certify current gates, the exact sculpture position, construction-free sight lines or entry permission. Foot distances exclude museum interiors, lodging approaches, transit and invented circulation. For the cemetery alternative, mapped internal paths remain subject to gate opening and on-site routing. Coordinates and ordered leg tables make requests reproducible; routing data can change.

Valhalla differs slightly from batch A's OSRM foot graph: Revolutionary baseline becomes 6.043 km instead of 5.931; Occupied 4.928 instead of 4.929; Underground baseline 4.588 instead of 4.518. Compare each extension to its own router baseline, not mixed totals.

## City Under the City — four screened candidates

### D-U1. Fontaine du puits de Grenelle, place Georges-Mulot

**Theme screen: PASS for geological discovery; conditional for this route's final identity.** Exact public monument at place Georges-Mulot, approximately 48.8468963, 2.310128. The Musée d'Orsay monument inventory locates the memorial at the former artesian borehole and dates its inauguration to 1906. The municipal 15th-arrondissement fountain guide connects Mulot's drilling to the 1841 breakthrough. This is a physically identifiable memorial to penetrating the geological layers under Paris; it is not an opportunity to see the original open borehole.

Physical encounter: public square, surviving memorial/fontaine and its carved human commemoration. Do not promise flowing artesian water here or interpret ordinary fountain plumbing as the historic drilling mechanism. Date/site link is documentary; describing drilling as a contrast with quarry extraction is proposed interpretation.

Sources: [Musée d'Orsay monument inventory](https://anosgrandshommes.musee-orsay.fr/index.php/Detail/objects/4762), [municipal fountain guide](https://cdn.paris.fr/paris/2021/09/17/0fd62ed41f556ac0efcf6c97b2409514.pdf). Photon resolved the square's OSM street position; the narration standing point still requires a precise monument pin.

Geographic role: a real west/northwest opening before Montparnasse, then southeast across the inherited quarry/collapse line. Unlike a distant southern appendage, it changes the beginning of the route. Risk: groundwater is also Water/Pressure material; use scientific penetration of deep layers, not a second distribution-network account.

### D-U2. Fontaine à l'Albien, place Paul-Verlaine, Butte-aux-Cailles

**Theme screen: PASS for visible hydrological geology; route contribution conditional.** Approximately 48.8276, 2.3529. Eau de Paris identifies a public fountain drawing from a deep underground aquifer and reported return to service after maintenance; the MNHN geological inventory explicitly classifies the Paris artesian wells as a geological-interest site. The physical fountain supplies an exact interface with depth, unlike a street arbitrarily chosen above a tunnel.

Physical encounter: the public fountain itself; actual water must be checked when there. A 2026 return-to-service notice is not a promise of November operation, and no tasting/temperature claim is needed. Aquifer connection is documented; contrasting occupied stone voids with stored groundwater is the proposed interpretation.

Sources: [Eau de Paris operational/geological account](https://www.eaudeparis.fr/actualit%C3%A9s/la-fontaine-lalbien-de-la-butte-aux-cailles-leau-coule-nouveau), [MNHN/INPN geological-interest inventory](https://inpn.mnhn.fr/site/inpg/IDF0002/tab/interets). Sources differ in depth wording; cheap discovery does not settle a precise metre count, so none is asserted here.

Geographic role: 0.301 km beyond the existing Butte finish. It does not repair length alone. It can finish a broader geology story with a present-day interface after Grenelle's commemorated drilling, provided those are genuinely different chapters rather than two fountain speeches.

### D-U3. Capucins/Cochin, 27 rue du Faubourg-Saint-Jacques

**Theme screen: real quarry connection, FAIL present-day outdoor anchor.** AP-HP documents the hospital's relationship with injured quarry workers and the surviving underground galleries. The public hospital frontage is physically available, but this discovery has not established a visible quarry feature outside or an independently compelling exterior chapter. The interesting object remains below ground and controlled.

Source: [AP-HP: La Carrière des Capucins, updated July 2026](https://hopital-cochin-port-royal.aphp.fr/la-carriere-des-capucins). Rejected before routing; no exceptional-visit or subterranean-gallery distance is added.

### D-U4. Moulin de la Tour, place du 8 Mai 1945, Ivry

**Theme screen: FAIL quarry/collapse specificity.** The municipality confirms the mill's relocation/restoration, and the departmental tourism authority says it is stabilized on a concrete slab. Those facts do not establish that the movement was caused by quarry collapse or supply a visibly readable underground-danger chapter. A conspicuous mill could lengthen the southern/eastern line, but the missing thematic causal link is decisive.

Sources: [Ivry heritage programme](https://www.ivry94.fr/2936/journees-europeennes-du-patrimoine.htm), [Val-de-Marne tourism](https://www.tourisme-valdemarne.com/patrimoine-culturel/moulin-de-la-tour/). No quarry motive is inferred from the slab. Rejected before routing.

### Theme-valid underground geometry

| Ordered public point | Lat, lon | Incoming Valhalla leg |
|---|---|---:|
| Grenelle borehole memorial search area | 48.8468963, 2.310128 | start |
| Montparnasse cemetery main entrance | 48.8387, 2.3266 | 2.073 km |
| Denfert/Catacombs exterior | 48.8338, 2.3324 | 0.915 km |
| René-Coty exit context, reached above ground | 48.8310, 2.3340 | 0.569 km |
| Montsouris north entrance | 48.8251, 2.3372 | 0.921 km |
| La Carrière upper-park search area | 48.8210, 2.3380 | 0.673 km |
| Butte-aux-Cailles/place de la Commune-de-Paris | 48.8274, 2.3497 | 1.507 km |
| Paul-Verlaine geological fountain | 48.8276, 2.3529 | 0.301 km |

Total **6.962 km**. Without Grenelle, Paul-Verlaine version is **4.889 km**, and without the Paul-Verlaine endpoint the new west-opening version is **6.661 km**. Small real monument/cemetery/relief approaches can make about 7.0–7.8 km executed plausible, but they are not measured extra distance or permission for a cemetery loop. The route moves southeast/south then northeast out of Montsouris; no closed PC13/rail or paid Catacombs is counted. The 2.073 km opening connector is the new low-density stretch to evaluate.

Recommendation: **conditional REBUILD into geology/extraction/instability/invented underworlds**, not immediate acceptance. Confirm that deep drilling and a working aquifer constitute different strong encounters and preserve the quarry/horror identity between them. If the Controller wants a specifically horror-first route, these water-related sites do not solve that brief; keep the original as a module. No full narration should be commissioned until that decision and exact sculpture/monument standing points pass.

## Revolutionary Paris — three exact eastbound alternatives

### D-R1. Nation — Dalou's Triomphe de la République

**Theme screen: PASS; preferred.** Public monumental group at approximately 48.8483, 2.3959. Municipal revolutionary geography links this former royal entrance with revolutionary renaming and later centennial commemoration. Petit Palais explains the defeated competition proposal and its eventual public realization. A former Communard artist creating the later Republic's triumphant image supplies a distinct consequence chapter after Bastille's contested commemorations.

Physical encounter: large bronze allegory, its moving group, workers/justice/liberty imagery and reconfigured central pedestrian space. It is an actual object, not a supposed vanished event room. Commission history and iconographic identification are facts; the route's reading of revolution becoming an authorized political image is interpretation. Carefully distinguish the 1889 plaster centennial installation from the later bronze/inauguration chronology during investigation.

Sources: [City Parcours Révolution: Nation neighbourhood](https://parcoursrevolution.paris.fr/en/neighborhoods/15-the-place-de-la-nation-and-its-neighborhood), [Petit Palais work interpretation](https://www.petitpalais.paris.fr/en/node/579), [municipal history/renewal of Nation](https://www.paris.fr/pages/reinventons-la-nation-4701).

Geometry: natural east/southeast continuation from Bastille along the faubourg corridor, with a **2.102 km** extension and no return. Ownership must formally transfer Nation/Dalou from Republic reserve to Revolutionary if selected; no duplicate Republic introduction is created.

### D-R2. Maison Belhomme pavilion, Square Colbert, 159 rue de Charonne

**Theme screen: PASS; strong alternative.** Approximately 48.8556132, 2.3894966. The city's Parcours Révolution identifies a visible old pavilion inside the square and the institution's role as detention where payment could buy better conditions. This offers a concrete revolution/class/unequal-treatment chapter rather than another heroic statue.

Physical encounter: surviving pavilion seen from the public square, conditional on gate access. Historical photographs are context, not proof that every present wall is unchanged. The pavilion's presence is described by the municipal walking source; current unobscured viewing is still an access gate. No private interior is assumed.

Source: [City: Belhomme, a prison for the rich](https://parcoursrevolution.paris.fr/en/points-of-interest/82-the-belhomme-a-prison-for-the-rich). Extension **1.696 km** northeast from Bastille. This makes a stronger social contradiction but a less expansive final public image than Nation. Do not add both simply because both fit.

### D-R3. Mur des Fédérés, Père-Lachaise

**Theme screen: PASS; alternate endpoint with operational cost.** Approximate memorial area 48.8598, 2.3970. The City documents the repression remembered here; the Commune association documents the continuing commemorative practice. This supplies an exact bodily consequence of revolutionary defeat and its public afterlife, with a wall/memorial that can actually be visited during cemetery access.

Sources: [City: end of the Commune](https://www.paris.fr/pages/les-150-ans-de-la-commune-la-fin-sanglante-et-les-consequences-5-5-17210), [Commune association: wall and commemoration](https://parcours.commune1871.org/en/communards-at-pere-lachaise/the-federated-wall/). Precise execution/date/count and rebuilt-wall material deserve later investigation; they are not re-audited here.

Geometry: route via Rue du Repos/main cemetery entrance around 48.8583, 2.3909, then internal paths to the memorial. It adds **3.352 km** after Bastille. Cemetery gates, ascent and evening cutoff are real constraints. Different story from the cemetery-spirit module but repeats cemetery geography. Good alternative if repression is the intended ending; Nation wins for an unrestricted street/object finish.

### Revolution route comparison — Valhalla

Shared sequence and coordinates: café de Foy 48.8648,2.3360 → Concorde 48.8663,2.3211 → Carrousel 48.8612,2.3320 → Hôtel de Ville 48.8567,2.3510 → Bastille 48.8532,2.3691. Shared leg distances **1.452 + 1.276 + 1.776 + 1.539 = 6.043 km**.

| Theme-valid ending | New leg(s) after Bastille | Full total | Verdict |
|---|---:|---:|---|
| Nation/Dalou | 2.102 km | **8.147 km** | Preferred architecture PASS |
| Belhomme/Colbert | 1.696 km | **7.741 km** | Alternative PASS, square-gate constraint |
| Mur des Fédérés via cemetery main entrance | 1.992 + 1.360 km | **9.397 km** | Alternative PASS, cemetery/duplication constraint |

Recommendation: **accept Nation ending for the next focused investigation**. It repairs distance through political consequence rather than Henri-Galli's backward mileage. Keep the existing westward opening and eastward return; the final eastern continuation is clean. No narrative scripts or canonical route edits are made here.

## Occupied City — three precise candidates

### D-O1. Gymnase Japy, 2 rue Japy

**Theme screen: PASS; preferred.** Photon/OSM street-number coordinate 48.8558751, 2.3824662. The Mémorial de la Shoah's acquisition of a photographic sequence ties arrests, waiting families, police and buses to the actual gymnasium frontage in May 1941. The gymnasium is a documented gathering/arrest site in the billet-vert roundup; a City commemoration records the commemorative plaque. The ordinary sports institution becoming an arrest apparatus is an exact daily-control chapter, not a random plaque.

Physical encounter: surviving public street/frontage at a working sports venue; the entrance/street relation can be compared with sourced historical photographs later. The interior is reserved for clubs/associations, so no entry is promised. Plaque currently unobscured and exact frontage comparison still need visual validation.

Sources: [Mémorial: photographic discovery and detailed sequence](https://www.memorialdelashoah.org/98-photos-inedites-sur-la-rafle-du-billet-vert.html), [municipal plaque/commemoration](https://www.paris.fr/pages/commemorations-des-80-ans-de-la-rafle-du-billet-vert-17638), [current official gymnasium address/access](https://www.paris.fr/lieux/gymnase-japy-3045).

Source caution: the City's recent popular-history article compresses or confuses summons and arrest totals. The Memorial explicitly distinguishes people arrested at several summons sites from Japy's own scene. Do not repeat a citywide number as everyone detained in this one gymnasium. No mass-count precision is needed for discovery.

Geometry: **2.338 km** east from the Shoah exterior complex. The direction is coherent. Ending at a former arrest site after a memorial changes the old narrative finish: the proposed payoff becomes ordinary life carrying an exact memory of coercion, not liberation triumph. That architecture must be consciously accepted rather than quietly retaining the old memorial-ending claim.

### D-O2. Hôpital Rothschild public frontage, rue Santerre/Picpus site

**Theme screen: PASS historical rescue/control; physical encounter BORDERLINE.** Provisional current public frontage around 48.8439, 2.4014. Municipal council material identifies Jewish patients held for treatment before deportation and the rescue work of Colette Brull-Ulmann and Claire Heyman. This is a distinct medical/rescue operation with a consequence-bearing exact institution, not generic hospital benevolence.

Physical encounter: a current hospital threshold/perimeter, not automatically surviving wartime rooms. AP-HP's current plan places the hospital between Nation/Daumesnil/Saint-Mandé. The commemorative parvis mentioned in secondary accounts is within the hospital context and has not been certified as freely accessible for a tourist route. Do not enter clinical areas or equate modern rue Santerre frontage with the original arrest/exfiltration doorway.

Sources: [Paris Council historical/rescue discussion](https://a06-v7.apps.paris.fr/a06/jsp/site/Portal.jsp?id_document=125570&items_per_page=100&page=ods-solr.display_document&query=sdf&sort_name=&sort_order=&terms=sdf), [municipal resolution](https://a06-v7.apps.paris.fr/a06/jsp/site/plugins/solr/modules/ods/DoDownload.jsp?id_document=125215&items_per_page=20&query=Secr%C3%A9taire+administratif+de+la+Pr%C3%A9fecture+de+Police&sort_name=&sort_order=&terms=Secr%C3%A9taire+administratif+de+la+Pr%C3%A9fecture+de+Police), [AP-HP hospital plan](https://rothschild.aphp.fr/plan-de-lhopital/).

Theme passed before an exploratory geometry query; the route query does **not** promote uncertain exterior value into KEEP. Extension **3.913 km**, south/east after the Memorial. Longer connective and rebuilt/frontage uncertainty make it inferior to Japy. Keep as a replacement only after one exact public-visible memorial/historic frontage is established.

### D-O3. Former Lévitan store/camp, 85–87 rue du Faubourg-Saint-Martin

**Historical/physical theme strong; FAIL requested eastbound architecture.** The city-published local-history account identifies the surviving store building and its use as a Drancy annex where internees sorted stolen possessions. The building's store identity can support a precise appropriation/forced-work chapter rather than a plaque list.

Source: [city-published 10th arrondissement history, Lévitan chapter](https://cdn.paris.fr/paris/2020/10/06/f05c6bc008e61898604d10fc60ca8c59.pdf). Present-day construction-free appearance not certified. It pulls north/northwest of the inherited Marais finish, contrary to this eastward rebuild brief. **Not route-tested**: thematic relevance alone does not overcome the chosen corridor. Preserve as an alternative architecture lead, not another endpoint to stack after Japy.

### Occupied route comparison — Valhalla

Shared spine: Denfert exterior 48.8337,2.3324 → Lutetia 48.8514,2.3271 → 48 rue du Four 48.8516,2.3319 → Shoah exterior 48.8550,2.3562 → adjacent Mur des Justes 48.8549,2.3565. Shared distances **2.250 + 0.416 + 2.236 + 0.026 = 4.928 km**.

| Theme-valid candidate | Extension | Full total | Verdict |
|---|---:|---:|---|
| Japy, 48.8558751,2.3824662 | 2.338 km | **7.268 km** | Preferred architecture PASS |
| Rothschild public frontage, 48.8439,2.4014 | 3.913 km | **8.842 km** | Geometry PASS; exterior-value gate unresolved |

Recommendation: **accept Japy architecture for focused investigation**, preserving the Denfert→Lutetia→CNR→Memorial line and an eastward exact-control endpoint. Do not add both Japy and Rothschild. Denfert's exterior strength remains an existing gate, not a new claim solved by distance. No museum tour, ticket or interior mileage is counted.

## Handoff limits

Acceptance above means a viable commission, not a finished itinerary. Next work is narrowly scoped evidence/physical-site investigation of Nation and Japy, plus the Controller's identity decision for groundwater in City Under the City. Exact public standing positions, legal crossings/gates, construction, seasonal operations, narration, daily load and external Claude remain later gates. None is represented as complete here.
