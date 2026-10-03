# Paris 2026 — Route-Building Constraints

Working specification for planning the Paris trip. This is a constraint sheet, not an itinerary.

## 1. Date envelope

- Work ends: **Friday 30 October 2026**.
- Must be back for work: **Monday 16 November 2026**.
- Baseline travel window: **after work 30 Oct → return by 15 Nov**.
- There are **2 leave days available** to extend the trip:
  - both before,
  - both after,
  - or one on each side.
- Exact placement of those days is **price-driven**.
- Current strong transport candidate: leave **Thursday 29 Oct after work**, using one leave day on Friday 30, because weekday fares appeared materially cheaper.
- No transport or accommodation is committed yet.

## 2. Budget constraint

Target: **€600 all-in trip envelope**, isolated from normal-life money.

Working rough components:
- NOC accommodation: **~€150–160**
- Madrid↔Paris intercity transport: **~€90**
- Food: **~€190–240**
- Remaining slack: local transport, tourist tax, laundry, cafés, toiletries, paid attractions, contingencies

Cash position discussed:
- ~€330 cash
- ~€160 in coins to convert
- therefore roughly **€490 recoverable**, leaving about **€100–110** to reach the €600 envelope

Budget accounting is a separate planning layer from route construction.

## 3. NOC 42 lodging / food model

Current candidate:
- **NOC 42 Bessières**
- baseline stay tested: **31 Oct → 15 Nov = 15 nights ≈ €150 + tourist tax**
- if shifted one day earlier: **30 Oct → 15 Nov = 16 nights ≈ €160 + tourist tax**

Food infrastructure at Bessières:
- common area where residents may eat
- refrigerators
- microwave ovens
- vending machines
- **no cooking appliances**
- food is forbidden in dormitories and lockers
- refrigerator food must be labeled
- food older than 7 days may be discarded
- strong-smelling food may be discarded

Therefore the food model is:

**supermarket + fridge + microwave + deliberate meals out**, not cooking from scratch.

## 4. Walking / transport model

Granada is the planning benchmark:
- average operational pace: **~3.3 km/h including stops**
- typical route target: **~12–14 km** when enough worthwhile material exists

Important:
- distance must never be padded
- route geometry should emerge from material, not arbitrary neighborhood boundaries
- thematic payoff may justify a significant detour or route redesign
- exceptional sites may reshape a route
- weak/medium sites should usually fit existing geography

From NOC / 42 Paris:
- **≤1 hour walking** to a starting area can itself be part of the experience
- **1–1.5 hours** depends on route quality / energy
- around **2 hours one way** should normally become transit first, then walking

Paris is not one continuous Cádiz-style traverse. Use transit to anchor distant blocks, then walk densely inside them.

### Daily physical load

Step caps apply at the day level:
- **40k steps: hard ceiling**
- **30k steps: usual/full day**
- **20k steps: light day**

No itinerary should deliberately exceed 40k.

## 5. Route design philosophy

Routes are **theme-first, not checklist-first**.

Examples:
- Lovers’ Paris
- Paranormal Paris
- Paris of the Republic
- Olympic Paris
- Revolutionary Paris
- Occupied Paris
- Art Nouveau Paris
- Spy Paris
- Burlesque Paris

A waypoint may be valuable through:
- documented history
- people/events
- architecture
- folklore
- legends
- ghost stories
- rumors / urban myths
- cultural memory
- traditions / sayings
- literary associations
- popular beliefs
- unusual local anecdotes

Historical importance is not required.

A waypoint earns its place because it strengthens:
1. the theme
2. the physical walk
3. the narrative arc

Each route should have a narrative shape:

**opening → development → payoff**

A technically relevant place may still be rejected if its story is weak, its site gives little to experience, or its inclusion weakens the route.

## 6. Route artifacts

Each finished route produces a canonical Markdown file containing:
- route title
- theme / thesis
- vibe
- assigned guide
- start point
- finish point
- expected distance
- expected duration
- transport assumptions
- time-slot score vector
- ordered waypoints

For every waypoint:
1. why it was selected
2. explainer / story
3. what to notice in person
4. why it leads naturally to the next stop
5. core vs optional
6. access / timing constraints where relevant

### On-site narration quality

The explainer is the delivered experience, not a synopsis of research.

For core stops, use substantial authored narration when the material supports
it (often roughly 450–900 words). It should normally begin with the physical
place, build a concrete factual scene, mark the transition into legend, rumor,
testimony or interpretation, reconnect to visible details and the route arc,
and end with a memorable beat. Connective stops may be shorter.

Never pad weak material. A waypoint unable to sustain an engaging on-site
narration should be revised or removed even if its thematic connection is real.

Also mark useful infrastructure where natural:
- toilets
- libraries / indoor refuge
- food
- rest
- transit escape points

A second machine-readable artifact (JSON/YAML) contains:
- coordinates
- order
- segment distances
- waypoint type
- hard timing constraints
- core/optional status

A third artifact is a **route website** containing:
- route
- waypoint photos
- explainers

The website serves as:
- a human QA surface before travel
- a low-token fallback during the trip

## 7. Route acceptance

Every finished route is evaluated by an **external Claude evaluator** before acceptance.

The evaluator checks:
- actual walking distance
- geographic coherence
- strength / interest of the theme
- quality / interest of the explainers

Delivery quality matters independently from site quality.

A strong site with a flat explainer is still a route defect.

The evaluator may reject a route, identify weak waypoints, or request restructuring.

## 8. Time-slot model

Every route receives independent scores:
- **MORNING: 0–10**
- **AFTERNOON: 0–10**
- **EVENING: 0–10**
- **NIGHT: 0–10**

Each score must be justified using:
- light / visibility
- opening hours
- street activity
- crowd levels
- atmosphere
- safety / isolation
- markets / food / commercial activity
- seasonal sunset
- narrative mood
- whether the theme materially benefits from darkness or nightlife

Night should not receive generic bonus points merely for being atmospheric.

But darkness/nightlife should score strongly when it materially improves the route: paranormal, espionage, vice, burlesque, nocturnal history, illuminated architecture, active nightlife, empty streets, etc.

The test is:

**Does this time slot genuinely improve the route’s material and experience?**

The Portfolio Controller uses the full score vectors.

Approximately **half of the final route portfolio should consist of genuinely strong morning routes**.

This does not mean forcing night-native routes into mornings.

Instead, the portfolio should intentionally commission and preserve strong morning-native material so mornings never become filler.

## 9. Guide assignment

Hilo is **not** the Paris guide.

Guide options:
- **Cruce**
- **Aster**
- **Noctámbulo**

Assignment is per route block according to vibe.

A day may change guide between blocks.

## 10. Museum strategy

Museums are **finite raids, not completionist visits**.

For each museum:
- preselect roughly **6–10 works / objects / rooms**
- allow a small wildcard detour if something grabs attention
- leave once the hunt is complete
- never attempt to see every room

Known anchors:
- **Sunday 1 Nov:** strong free-museum candidate day; reservations where required
- **Friday 6 Nov evening:** free Louvre candidate

Versailles is out of scope: already visited.

Reservation handling is a separate calendar layer, operationally handled by Vera.

## 11. Weather and degradation

Expected conditions for late Oct / first half of Nov:
- cool late autumn
- roughly **10–13°C daytime**
- roughly **4–7°C mornings/nights**
- frequent grey / damp conditions
- meaningful rain risk
- early darkness

Operational consequence:
- warm layer + rain shell matter
- daytime walking should be comfortable
- darkness arrives early enough for evening/nocturnal blocks

### Degradation rule

Routes should degrade gracefully:
1. remove optional material first
2. shorten or transit over low-value exposed segments
3. preserve core thematic stops where the experience still works
4. if weather/energy makes the route unpleasant, default to:
   - library
   - indoor refuge
   - return to NOC

Do not force outdoor tourism merely because a route was scheduled.

## 12. Safety / phone model

Paris is treated primarily as a theft-awareness environment, especially on transit and in dense tourist areas.

Preferred device setup:
- old Redmi = street phone
- own SIM / data connection
- Nubia stays at NOC or home
- avoid all-day hotspot dependence

## 13. Route infrastructure

Public toilets, libraries, museums, stations, cafés/restaurants when already patronized, and large commercial spaces are legitimate route infrastructure.

Paris has a broad free sanisette network.

Route metadata should identify useful toilet opportunities so live execution does not depend on improvisation.

## 14. Source hierarchy

For operational facts:
1. official venue / museum / monument / city / transport source
2. current institutional or specialist source
3. reputable current guide or journalism
4. community reports when useful for lived experience

For history:
- verify substantive claims against strong historical / institutional sources where possible

For folklore, paranormal material, legends, rumor and local memory:
- weaker/local/community sources are acceptable when useful
- distinguish documented fact, disputed account, oral tradition, legend, folklore and rumor
- uncertainty does not make a story useless
- never silently promote legend to fact

Current information beats evergreen information for:
- opening hours
- closures
- access rules
- reservations
- prices
- transport
- construction / site visibility

## 15. Agentic route-construction workflow

Agent work must be **rate-controlled and budget-conscious**.

Do not launch large uncontrolled parallel swarms merely because parallelism is available.

### Route Architect

Owns route construction:
- initial themed route hypothesis
- geographic shape
- candidate ordering
- narrative arc
- time-slot scores
- revisions after research
- replacement candidates after SKIPs
- final route artifact

The Route Architect performs cheap candidate discovery, not deep waypoint research.

### Waypoint Investigator

Receives one proposed waypoint and performs expensive research.

Determines:
- documented connection
- folklore / legend / rumor / cultural associations
- thematic importance
- physical site value today
- story potential
- epistemic status
- KEEP / BORDERLINE / SKIP
- final explainer
- overlap flags

“SKIP — technically related but not interesting enough” is a useful result.

### Portfolio Controller

Owns:
- cross-route overlap
- waypoint ownership conflicts
- portfolio diversity
- global physical constraints
- time-slot balance
- morning-route supply
- slot congestion
- external Claude QA feedback
- sending defective routes back for revision

Default overlap tendency:

**one strong place belongs to one route**

Duplication is allowed when the same place supports two genuinely strong, substantially different stories and both routes benefit enough to justify revisiting it.

### Workflow

**Route Architect proposal → Waypoint Investigator research → Route Architect revision → Portfolio Controller arbitration / QA → external Claude evaluation → revision if needed**

Detailed agent synthesis/orchestration mechanics can be designed separately.

## 16. Current state

What exists:
- date envelope
- accommodation candidate and price
- rough intercity transport cost
- food model
- €600 budget envelope
- walking-distance target
- daily step caps
- route artifact schema
- website requirement
- external Claude acceptance rule
- guide model
- museum strategy
- weather/degradation strategy
- safety assumptions
- toilet/infrastructure concept
- source hierarchy
- Route Architect / Waypoint Investigator / Portfolio Controller split
- time-slot score model
- ~50% strong-morning portfolio target

What does **not** exist yet:
- booked NOC stay
- booked transport
- final route clusters
- final themed routes
- museum reservations
- local transit strategy
- attraction spend plan
- detailed runtime orchestration / agent-rate-limit design
