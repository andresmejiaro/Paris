# Ruta 06 — Navegación fija

Cruce · **06-v1-20261006** · 6 octubre 2026. [Ficha](../06_revolutionary_paris.md) · [operaciones](06_access_operations.md) · [JSON](06.operations.json).

## Archivos y medida

[06.gpx](06.gpx) fija el corredor y los seis extremos de la traza base medida en **8,140 km**. [06.variants.gpx](06.variants.gpx) contiene llegada, salida, escapes y desvío de jardín como tracks independientes; no se suman todos. [06.geojson](06.geojson) conserva la misma línea simplificada. [06.evidence.json](06.evidence.json) registra procedencia, fuentes y límites.

La medida controladora procede del cálculo peatonal Valhalla/OSM archivado en `discovery_batch_d.md`, normalizado a la decisión de producción de **8,140 km**: 1,452 + 1,276 + 1,771 + 1,539 + 2,102. La polilínea entregada es una guía simplificada sobre viario público, no una nueva medición del router ni permiso de paso. Señales, pasos, obras y agentes prevalecen; no cruzar una calzada para perseguir el pin.

## Coordenadas WGS84

| ID | Punto | Lat, lon | Posición |
|---|---|---|---|
| R01 | Café de Foy / Galerie de Montpensier | 48.864800, 2.336000 | Junto a 57–60, fuera de terrazas y pasos. |
| R02 | Concorde / estatua de Rouen | 48.866300, 2.321100 | Acera segura próxima; nunca isla de tráfico obligatoria. |
| R03 | Carrousel / línea del palacio | 48.861200, 2.332000 | Espacio abierto con alas Flore y Marsan legibles. |
| R04 | Hôtel de Ville | 48.856700, 2.351000 | Esplanada, fuera de eventos y accesos. |
| R05 | Bastille / lado Saint-Antoine | 48.853200, 2.369100 | Exterior de Café Français y después zona peatonal de la columna. |
| R06 | Nation / Triomphe de la République | 48.848300, 2.395900 | Borde peatonal central; adaptar a pasos/barreras. |
| A | Métro Palais-Royal–Musée du Louvre | 48.862859, 2.335838 | Boca exterior place du Palais-Royal. |
| S | Métro Nation | 48.848069, 2.397982 | Boca exterior seleccionada; seguir señalización real. |
| WC | Sanisette Bastille | 48.852650, 2.369730 | Inventario municipal; estado y acceso se comprueban el día. |

[R01](https://www.google.com/maps/search/?api=1&query=48.864800%2C2.336000) · [R02](https://www.google.com/maps/search/?api=1&query=48.866300%2C2.321100) · [R03](https://www.google.com/maps/search/?api=1&query=48.861200%2C2.332000) · [R04](https://www.google.com/maps/search/?api=1&query=48.856700%2C2.351000) · [R05](https://www.google.com/maps/search/?api=1&query=48.853200%2C2.369100) · [R06](https://www.google.com/maps/search/?api=1&query=48.848300%2C2.395900)

## Tramos base

| Tramo | Instrucción | km |
|---|---|---:|
| R01 → R02 | Salir por Montpensier/Beaujolais y avanzar al oeste por rue Saint-Honoré, usando pasos señalizados hacia Concorde. No entrar en calzada ni rodear la plaza para buscar una alineación exacta. | 1,452 |
| R02 → R03 | Entrar en Tuileries solo por puerta abierta y seguir el eje peatonal al Carrousel; si está cerrada usar `V1_R02_R03_Rivoli`. | 1,276 |
| R03 → R04 | Salir a superficie y seguir al este por el frente del Louvre, rue de Rivoli/quais y pasos legales hasta la esplanada. No bajar a túnel, ribera inundable ni centro comercial. | 1,771 |
| R04 → R05 | Rue de Lobau → François-Miron → Saint-Antoine hasta el lado occidental de Bastille. Rodear cierres por aceras, no por la calzada circular. | 1,539 |
| R05 → R06 | Seguir al este por rue du Faubourg-Saint-Antoine; alcanzar Nation por pasos semaforizados y entrar en la zona central solo si el cruce está abierto. | 2,102 |

Los enlaces dinámicos de mapas pueden recalcular: [R01–R02](https://www.google.com/maps/dir/?api=1&origin=48.864800%2C2.336000&destination=48.866300%2C2.321100&travelmode=walking) · [R02–R03](https://www.google.com/maps/dir/?api=1&origin=48.866300%2C2.321100&destination=48.861200%2C2.332000&travelmode=walking) · [R03–R04](https://www.google.com/maps/dir/?api=1&origin=48.861200%2C2.332000&destination=48.856700%2C2.351000&travelmode=walking) · [R04–R05](https://www.google.com/maps/dir/?api=1&origin=48.856700%2C2.351000&destination=48.853200%2C2.369100&travelmode=walking) · [R05–R06](https://www.google.com/maps/dir/?api=1&origin=48.853200%2C2.369100&destination=48.848300%2C2.395900&travelmode=walking).

## Llegada, salida y apoyos

- `Llegada_PalaisRoyal_R01`, **0,247 km**: boca exterior → rue de Valois/Montpensier → galería.
- `Salida_R06_Nation`, **0,181 km**: borde central → paso señalizado → boca exterior.
- `Escape_R03_PalaisRoyal`, **0,354 km**: Carrousel → acceso exterior señalado.
- `Escape_R04_HotelDeVille`, **0,188 km**: esplanada → boca exterior operativa.
- `Escape_R05_Bastille`, **0,214 km**: zona de observación → boca exterior; el acceso concreto depende de obras.
- `V1_R02_R03_Rivoli`, **1,331 km**: evita Tuileries cerrado por aceras de rue de Rivoli; sustituye, no se suma, al tramo de 1,276 km.

Total de superficie planificado: **8,568 km** (base + llegada + salida). Carnavalet, interiores y vueltas de observación son independientes. Henri-Galli no está incluido. © OpenStreetMap contributors, ODbL. Sin inspección presencial.
