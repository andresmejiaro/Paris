# Ruta 07 — Navegación fija

Cruce · **07-v1-20261006** · 6 octubre 2026. [Ficha](../07_occupied_paris.md) · [operaciones](07_access_operations.md) · [JSON](07.operations.json).

## Medida y alcance

[07.gpx](07.gpx) fija el corredor y los seis puntos de decisión de la traza base de **7,268 km**. Shoah y Mur des Justes son un solo complejo narrativo pero conservan dos puntos contiguos porque así se midió el recorrido. [07.variants.gpx](07.variants.gpx) contiene llegada, salida, escapes y atajo como tracks independientes. [07.geojson](07.geojson) conserva la misma línea simplificada; [07.evidence.json](07.evidence.json) registra procedencia y límites.

La medida controladora es Valhalla/OSM, 3 octubre 2026. Los cinco tramos se archivaron redondeados como 2,250; 0,416; 2,236; 0,026 y 2,338 km; suman 7,266 km por redondeo, mientras el total no redondeado devuelto fue 7,268 km. La línea entregada orienta decisiones sobre viario público; no reproduce la polilínea completa del router. Pasos, barreras y agentes prevalecen.

## Coordenadas WGS84

| ID | Punto | Lat, lon | Posición |
|---|---|---|---|
| O01 | Musée de la Libération | 48.833700, 2.332400 | Entrada de visitantes; narración dentro ante grupos señalados. |
| O02 | Hôtel Lutetia | 48.851400, 2.327100 | Acera opuesta/oblicua sin bloquear hotel. |
| O03 | 48 rue du Four | 48.851600, 2.331900 | Acera con número/placa visible; portal libre. |
| O04 | Mémorial de la Shoah | 48.855000, 2.356200 | Entrada controlada, 17 rue Geoffroy-l'Asnier. |
| O04b | Mur des Justes | 48.854900, 2.356500 | Callejón público; antes de la entrada si se elige. |
| O05 | Gymnase Japy | 48.855875, 2.382466 | Acera pública frente/oblicua a 2 rue Japy. |
| A | Denfert-Rochereau | 48.833010, 2.331350 | Boca exterior seleccionada. |
| S | Voltaire | 48.857730, 2.380560 | Boca exterior seleccionada; seguir señalización. |

[O01](https://www.google.com/maps/search/?api=1&query=48.833700%2C2.332400) · [O02](https://www.google.com/maps/search/?api=1&query=48.851400%2C2.327100) · [O03](https://www.google.com/maps/search/?api=1&query=48.851600%2C2.331900) · [O04](https://www.google.com/maps/search/?api=1&query=48.855000%2C2.356200) · [O05](https://www.google.com/maps/search/?api=1&query=48.855875%2C2.382466)

## Tramos base

| Tramo | Instrucción | km |
|---|---|---:|
| O01 → O02 | Salir hacia boulevard Raspail y avanzar al norte por su acera legal hasta rue de Sèvres; usar pasos semaforizados de Denfert y Montparnasse. | 2,250 |
| O02 → O03 | Rue de Sèvres → rue du Four; acercarse al 48 sin cruzar para perseguir la placa. | 0,416 |
| O03 → O04 | Continuar al este por Saint-Germain, cruzar el Sena por Pont Marie mediante pasos legales y entrar al Marais por quai/Célestins hasta Geoffroy-l'Asnier. No bajar a ribera inundable. | 2,236 |
| O04 → O04b | Salir al callejón del Mur des Justes solo por el acceso público abierto; si se observa antes, invertir únicamente estos 26 m. | 0,026 |
| O04b → O05 | Rue des Barres/François-Miron → Saint-Antoine → Charonne/Faidherbe y rue Japy. Mantener aceras; Bastille no es una parada temática. | 2,338 |

Enlaces dinámicos: [O01–O02](https://www.google.com/maps/dir/?api=1&origin=48.833700%2C2.332400&destination=48.851400%2C2.327100&travelmode=walking) · [O02–O03](https://www.google.com/maps/dir/?api=1&origin=48.851400%2C2.327100&destination=48.851600%2C2.331900&travelmode=walking) · [O03–O04](https://www.google.com/maps/dir/?api=1&origin=48.851600%2C2.331900&destination=48.855000%2C2.356200&travelmode=walking) · [O04–O05](https://www.google.com/maps/dir/?api=1&origin=48.855000%2C2.356200&destination=48.855875%2C2.382466&travelmode=walking).

## Llegada, salida y escapes

- `Llegada_Denfert_O01`, **0,132 km**: boca exterior → paso legal → entrada.
- `Salida_O05_Voltaire`, **0,389 km**: rue Japy → boulevard Voltaire → boca exterior.
- `Escape_O02_SevresBabylone`, **0,183 km**.
- `Escape_O03_SaintSulpice`, **0,326 km**.
- `Escape_O04_PontMarie`, **0,337 km**.
- `Escape_O05_Charonne`, **0,524 km**.
- `V2_O03_O04_direct`, **2,236 km**: es el mismo tramo exterior cuando el Memorial está cerrado; permite llegar y comprobar, pero no transforma la versión parcial en completa.

Total planificado con llegada/salida: **7,789 km**. Galerías, puesto de mando, exposición y movimientos de observación se contabilizan en tiempo, no distancia. © OpenStreetMap contributors, ODbL. Sin inspección presencial.
