# Discovery batch D — three thematic rebuilds

Researched and route-tested 3 October 2026. Scope: the three briefs assigned in
`portfolio_rebuild_v5.md`: **City Under the City**, **Revolutionary Paris**, and
**Occupied City**. This is anchor discovery and architecture, not finished
narration, a current-access guarantee, or permission to count an interior.

## Method and decision rule

Candidates were screened for a chapter that changes or advances the route's
argument before they were routed. Distances below come from the anonymous
[Valhalla OpenStreetMap endpoint](https://valhalla1.openstreetmap.de/) with
`costing: pedestrian`, `units: kilometers`, and every listed point set as a
`break`. They are pedestrian-network results, not straight lines. Valhalla's
time is reported only to make each result reproducible; it is not a visitor-time
promise. Coordinates are latitude, longitude and name a public standing area,
not an asserted historical footprint to centimetre precision.

The live graph returned slightly different numbers from the interrupted
worker's checkpoint (6.962, 8.147, 7.741, 9.397 and 7.268 km). That checkpoint
did not preserve its JSON or pins. The tables below therefore supersede those
unreproducible figures: they preserve exact inputs and per-leg output from the
3 October rerun. Small differences do not change any decision.

## 1. City Under the City — conditional rescue, not yet an unconditional pass

### Candidate and evidence screen

**Candidate:** open at the public Fontaine du puits de Grenelle, place Georges-
Mulot, then retain the existing cemetery → Denfert/Guillaumot → Catacombs-exit
→ Montsouris/La Carrière sequence and finish at the working artesian fountain,
place Paul-Verlaine.

This is not a generic water detour. The western object marks a bore through the
Paris Basin: the City records the 26 February 1841 breakthrough in the former
Grenelle slaughterhouse and identifies Formigé's 1906 monument at the site
([Ville de Paris, *Sculptures-fontaines*](https://cdn.paris.fr/paris/2021/09/17/0fd62ed41f556ac0efcf6c97b2409514.pdf)).
Paris Musées independently identifies the present monument as a public-street
fountain at place Georges-Mulot and records the place's formation on the former
slaughterhouse site
([Musée Carnavalet collection record](https://www.parismuseescollections.paris.fr/zh-hans/node/77068)).

The endpoint makes the below-ground section materially legible rather than
merely commemorative. The national geological inventory classifies the Paul-
Verlaine, Lamartine and Madone wells for their **hydrogeology**, placing the
Albian aquifer roughly 550–600 m down and its Paris water at about 30,000 years
old
([MNHN/INPN geological inventory IDF0002](https://inpn.mnhn.fr/site/inpg/IDF0002/tab/interets)).
More usefully for current physical payoff, Eau de Paris says that the
Paul-Verlaine fountain resumed service on 29 January 2026, draws from more than
600 m below the pavement, and exposes the result through a public fountain
([Eau de Paris, 9 February 2026](https://www.eaudeparis.fr/actualit%C3%A9s/la-fontaine-lalbien-de-la-butte-aux-cailles-leau-coule-nouveau)).

The middle remains genuinely quarry/collapse material. The IGC describes the
Lutetian limestone platforms, the southern arrondissements' former limestone
workings, and the surface danger created when a quarry roof failure rises as a
*fontis*
([Ville de Paris/IGC overview](https://www.paris.fr/pages/tout-savoir-sur-les-sous-sols-2317/)).
The City also locates the spectacular 17 December 1774 collapse on rue d'Enfer,
now avenue Denfert-Rochereau, and explains the subsequent inspection and
consolidation regime
([Ville de Paris, quarry visit](https://www.paris.fr/pages/les-carrieres-de-paris-visite-avec-des-experts-18949)).

**Thematic ruling:** it passes the cheap thematic screen only as **deep Paris:
boring, extracting, collapse and control**. The paired wells demonstrate that
the underground is layered and technically reached; they must not become a
second municipal-water history (already owned by Water, Pressure, and Flood).
The opening is somewhat remote from the horror promise and the result is still
below 7 km on the reproducible network. Accept it only if an exact, narratively
approved cemetery chapter supplies real circulation and the scripts keep the
quarry/fontis danger at the centre. Otherwise retain the honest 5–6 km module
and keep looking for a visible collapse/quarry anchor.

### Exact geometry

| # | Public standing area | Coordinate (lat, lon) | Incoming Valhalla leg |
|---:|---|---|---:|
| 1 | Fontaine du puits de Grenelle, place Georges-Mulot | 48.8468849, 2.3100155 | start |
| 2 | Montparnasse cemetery, Edgar-Quinet main-gate area | 48.8387000, 2.3266000 | 2.079 km |
| 3 | Denfert/Guillaumot/Catacombs exterior threshold | 48.8338000, 2.3324000 | 0.915 km |
| 4 | Catacombs exit context, 21 bis avenue René-Coty, reached above ground | 48.8310000, 2.3340000 | 0.569 km |
| 5 | Parc Montsouris north public-entrance approach | 48.8251000, 2.3372000 | 0.921 km |
| 6 | La Carrière upper-park search area (still not a certified sculpture pin) | 48.8210000, 2.3380000 | 0.673 km |
| 7 | Fontaine à l'Albien, place Paul-Verlaine | 48.8277631, 2.3519115 | 1.633 km |

**Valhalla total: 6.793 km; router time 5,153.545 seconds.** Honest cemetery
entry/exit and locating an approved grave/chapter could put execution above
7 km, but that circulation must be mapped after the chapter is selected; it is
not silently added here. No paid Catacombs circuit, park lap, Petite Ceinture,
or lodging approach is counted.

Reproduction JSON (URL-encode as the `json` value of
`https://valhalla1.openstreetmap.de/route?json=`):

```json
{"locations":[{"lat":48.8468849,"lon":2.3100155,"type":"break"},{"lat":48.8387,"lon":2.3266,"type":"break"},{"lat":48.8338,"lon":2.3324,"type":"break"},{"lat":48.831,"lon":2.334,"type":"break"},{"lat":48.8251,"lon":2.3372,"type":"break"},{"lat":48.821,"lon":2.338,"type":"break"},{"lat":48.8277631,"lon":2.3519115,"type":"break"}],"costing":"pedestrian","units":"kilometers","directions_options":{"units":"kilometers"}}
```

### Caveats

- Georges-Mulot is a surviving monument to the historic bore, not a claim that
  the original 1841 iron tower survives; Paris Musées records that the original
  tower disappeared in 1903
  ([Carnavalet record](https://www.parismuseescollections.paris.fr/fr/musee-carnavalet/oeuvres/le-puits-artesien-de-grenelle-place-de-breteuil)).
- Paul-Verlaine's 2026 reopening is strong current evidence, but a fountain can
  be taken temporarily out of service. Its public place remains an exterior
  anchor; recheck water operation near travel.
- Park gates and the exact La Carrière artwork remain operational/waypoint QA.
  The router certifies neither.
- **Architecture verdict: CONDITIONAL REBUILD/PASS.** The line becomes roughly
  7–7.5 km only with honest, selected cemetery circulation. Do not call the
  6.793 km spine a measured 7 km pass.

## 2. Revolutionary Paris — adopt Nation/Dalou

### Candidate comparison and evidence screen

**Recommended endpoint: place de la Nation, at Dalou's *Triomphe de la
République*.** It is much more than a distance repair. The City's official
Revolution trail identifies the place as the revolutionary place du Trône-
Renversé, where more than 1,300 people were guillotined in June–July 1794,
before its renaming and Dalou monument
([Parcours Révolution, Nation](https://parcoursrevolution.paris.fr/fr/quartiers/15-le-quartier-de-la-place-de-la-nation)).
The Petit Palais supplies the later-order argument: former Communard Dalou made
the work after exile; the City commissioned its revolutionary aesthetic and it
became a major public monument
([Petit Palais, Dalou](https://www.petitpalais.paris.fr/decouvrir-la-programmation/expositions/dalou-1838-1902)).
Its collection record explains the iconography—Republic, Liberty, Labour,
Justice, Peace and Abundance—and the municipal decision to transfer the losing
1879 competition design to Nation
([Paris Musées, *Triomphe*](https://www.parismuseescollections.paris.fr/de/node/228117)).
Thus the endpoint closes the route's argument: an uprising site becomes
official republican state imagery, while the site itself retains Terror memory.

Two alternatives were tested:

- **Maison Belhomme, 159 rue de Charonne:** thematically valid and accessible
  through square Colbert according to the City's Revolution trail; it was a
  fee-paying prisoner asylum during 1793–94
  ([Parcours Révolution, Belhomme](https://parcoursrevolution.paris.fr/en/points-of-interest/82-the-belhomme-a-prison-for-the-rich)).
  It produces a 7.733 km route, but ends on a quieter, partly courtyard-dependent
  survival and class chapter. Keep as a reserve, not the primary payoff.
- **Mur des Fédérés:** a later-revolution/Commune chapter is substantial, but
  the selected pin lies inside Père-Lachaise and therefore makes the result
  gate/hour dependent, requires cemetery navigation that the router cannot
  certify, and collides with the dedicated Cemetery Spirits module. Reject for
  this architecture even though the routed street total is long enough.

### Exact recommended geometry

| # | Public standing area | Coordinate (lat, lon) | Incoming Valhalla leg |
|---:|---|---|---:|
| 1 | Former café de Foy/Galerie de Montpensier, Palais-Royal | 48.8648000, 2.3360000 | start |
| 2 | Concorde, statue-of-Rouen area | 48.8663000, 2.3211000 | 1.452 km |
| 3 | Tuileries former-palace line/Carrousel | 48.8612000, 2.3320000 | 1.276 km |
| 4 | Hôtel de Ville esplanade | 48.8567000, 2.3510000 | 1.776 km |
| 5 | Bastille Saint-Antoine/column approach | 48.8532000, 2.3691000 | 1.539 km |
| 6 | *Triomphe de la République*, Nation public approach | 48.8484500, 2.3959000 | 2.095 km |

**Valhalla total: 8.140 km; router time 6,090.584 seconds. PASS.** The last leg
continues naturally east from Bastille; there is no Henri-Galli backtrack.

```json
{"locations":[{"lat":48.8648,"lon":2.336,"type":"break"},{"lat":48.8663,"lon":2.3211,"type":"break"},{"lat":48.8612,"lon":2.332,"type":"break"},{"lat":48.8567,"lon":2.351,"type":"break"},{"lat":48.8532,"lon":2.3691,"type":"break"},{"lat":48.84845,"lon":2.3959,"type":"break"}],"costing":"pedestrian","units":"kilometers","directions_options":{"units":"kilometers"}}
```

### Comparison geometry

All comparison routes use stops 1–5 above.

| Endpoint | Coordinate | Bastille→endpoint | Total | Ruling |
|---|---|---:|---:|---|
| Maison Belhomme / square Colbert approach | 48.8555751, 2.3895631 | 1.688 km | 7.733 km | strong reserve; weaker final public payoff |
| Mur des Fédérés mapped memorial pin | 48.8596793, 2.4000825 | 2.758 km | 8.803 km | reject: cemetery access/navigation and module collision |

The interrupted notes reported 9.397 km for the Mur; the present exact pin and
current graph return 8.803 km. Do not transplant either number to a future
gate-aware route through Père-Lachaise.

### Caveats

- Nation is a large traffic/park space. The coordinate is a lawful public
  approach and does not promise access to the monument plinth or road islands.
- The western opening still reverses from Concorde to Carrousel. As in the
  measured baseline, use a distinct rue Saint-Honoré/rue de Rivoli approach and
  Tuileries return when gates allow; do not imply the geometry eliminates that
  hinge.
- Assign Nation/Dalou to Revolutionary Paris. Republic and Representation must
  not separately narrate it.
- **Architecture verdict: FULL WALK PASS at 8.140 km.**

## 3. Occupied City — adopt Gymnase Japy

### Candidate and evidence screen

**Recommended endpoint: Gymnase Japy, 2 rue Japy.** This is the exact kind of
eastbound everyday-persecution chapter the brief requests: a municipal public
gymnasium converted into an assembly/internment site. The City identifies the
building, address and present use
([Gymnase Japy venue page](https://www.paris.fr/lieux/gymnase-japy-3045)),
and its place history ties that same building to the 14 May 1941 *billet vert*
roundup as well as later 1941 and 1942 roundups
([Ville de Paris, *1 lieu, trois histoires*](https://www.paris.fr/pages/1-lieu-trois-histoires-le-gymnase-japy-31979)).

Physical legibility is unusually strong for this class of candidate. The City
says commemorative plaques were installed at Japy and other assembly sites and
documents a wreath ceremony **in front of the Japy plaque**
([Ville de Paris, 80th-anniversary commemoration](https://prod-v3.paris.fr/pages/commemorations-des-80-ans-de-la-rafle-du-billet-vert-17638)).
A 2024 municipal neighbourhood report independently inventories “stèles
mémorielles” at the gymnasium entrance
([11th-arrondissement public-space report](https://cdn.paris.fr/paris/2024/12/20/bf-cr-reunion-14-05-24-marche-japy-rl-et-projet-Zhl4.pdf)).
The exact building and exterior memorial therefore carry the chapter without
requiring gym access. The Mémorial de la Shoah's 2026 programme also captions a
historical photograph as taken in front of Japy during the 14 May roundup
([Mémorial de la Shoah programme](https://www.memorialdelashoah.org/programme-trimestriel/2026-janvier-mars/common/data/catalogue.pdf)).

**Thematic ruling:** pass. It advances the line from command/resistance/return
and central commemoration to the machinery of persecution embedded in an
ordinary east-Paris civic building. It is neither a generic school plaque nor a
remote Vel d'Hiv detour. It also supplies a powerful present-day contrast: the
building remains a working public gymnasium.

### Exact geometry

| # | Public standing area | Coordinate (lat, lon) | Incoming Valhalla leg |
|---:|---|---|---:|
| 1 | Denfert command-site museum exterior | 48.8337000, 2.3324000 | start |
| 2 | Hôtel Lutetia, boulevard Raspail/rue de Sèvres exterior | 48.8514000, 2.3271000 | 2.250 km |
| 3 | 48 rue du Four/CNR exterior | 48.8516000, 2.3319000 | 0.416 km |
| 4 | Mémorial de la Shoah exterior, 17 rue Geoffroy-l'Asnier | 48.8550000, 2.3562000 | 2.236 km |
| 5 | Mur des Justes, rue Grenier-sur-l'Eau area | 48.8549000, 2.3565000 | 0.026 km |
| 6 | Gymnase Japy entrance/memorial frontage, 2 rue Japy | 48.8557672, 2.3821310 | 2.346 km |

**Valhalla total: 7.275 km; router time 5,344.800 seconds. PASS.** The final leg
continues east and supplies the missing 2.346 km without reversal or an
unrelated destination.

```json
{"locations":[{"lat":48.8337,"lon":2.3324,"type":"break"},{"lat":48.8514,"lon":2.3271,"type":"break"},{"lat":48.8516,"lon":2.3319,"type":"break"},{"lat":48.855,"lon":2.3562,"type":"break"},{"lat":48.8549,"lon":2.3565,"type":"break"},{"lat":48.8557672,"lon":2.382131,"type":"break"}],"costing":"pedestrian","units":"kilometers","directions_options":{"units":"kilometers"}}
```

### Caveats

- The municipal venue page says gym access is reserved to clubs and
  associations. This architecture is explicitly exterior; no interior time or
  distance is counted.
- The public evidence establishes exterior memorial objects, but not that no
  works, parked vehicle, or event will briefly obstruct them in late 2026.
  Recheck the frontage close to travel.
- The 0.026 km Justes leg confirms that Shoah/Justes remains one final complex,
  not two distance-producing chapters.
- Treat the subject with restraint: Japy is a persecution/roundup endpoint, not
  an upbeat “sport building transformation” reveal.
- **Architecture verdict: FULL WALK PASS at 7.275 km.**

## Controller-ready result

| Route | Decision | Reproducible measured spine | Why |
|---|---|---:|---|
| City Under the City | **conditional rebuild/pass** | 6.793 km before selected cemetery circulation | excellent deep-geology bookends, but below 7 km and vulnerable to duplicating the water route |
| Revolutionary Paris | **full walk pass; adopt Nation/Dalou** | 8.140 km | natural eastward line and a strong conversion of revolution into later republican order |
| Occupied City | **full walk pass; adopt Gymnase Japy** | 7.275 km | precise, exterior-legible everyday-persecution site on the eastbound line |

Do not restore City Under the City to the secure full-walk count until its
cemetery chapter and actual circulation are fixed. Revolutionary and Occupied
have both cleared the cheap anchor and measured-geometry gates; their historical
scripts, exact street-by-street wayfinding, late-2026 obstruction checks and
normal narration QA remain future work.
