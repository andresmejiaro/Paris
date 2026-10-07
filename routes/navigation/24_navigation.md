# Ruta 24 — Navegación fija

Cruce · **24-v1-20261007** · 7 octubre 2026. [Ficha](../24_southern_margins.md) · [operaciones](24_access_operations.md) · [JSON](24.operations.json).

## Medida y límites

La distancia controladora **7,690 km** procede de la consulta peatonal Valhalla/OSM archivada en `discovery_batch_f.md`. Los nueve tramos redondeados suman 7,685 km; el total no redondeado controla. [24.gpx](24.gpx) y [24.geojson](24.geojson) fijan un corredor simplificado con decisiones, no la polilínea densa del router ni una inspección. **PC13 no forma parte de la ruta**, aunque una aplicación intente recalcular por ella.

## Puntos WGS84

| ID | Punto | Lat, lon | Posición de observación |
|---|---|---|---|
| S01 | BnF / borde del Sena | 48.833900, 2.376500 | Acera alta pública, sin bajar a ribera cerrada. |
| S02 | Grands Moulins | 48.829100, 2.380000 | Explanada pública; observar exterior. |
| S03 | Moulin-des-Prés alto | 48.827400, 2.349700 | Acera segura con lectura de pendiente; no se afirma cauce exacto. |
| S04 | Traza Moulin-des-Prés | 48.825800, 2.353500 | Acera; usar solo placa/medallón visible. |
| S05 | Place Hénocque | 48.823700, 2.353500 | Borde público de la plaza fuera del flujo. |
| S06 | Cité Florale | 48.822703, 2.344820 | Cruce Glycines/Orchidées; sin ocupar portales. |
| S07 | Montsouris, puerta este | 48.824400, 2.340100 | Acceso público abierto de rue Gazan/Nansouty. |
| S08 | Montsouris, puerta sur | 48.821800, 2.337800 | Salida hacia boulevard Jourdan. |
| S09 | CIUP, borde norte | 48.820200, 2.339700 | Camino público tras acceso abierto; perímetro si está cerrado. |
| S10 | CIUP, final oeste | 48.819400, 2.327800 | Camino/perímetro público próximo a boulevard Jourdan. |
| A | Métro/RER Bibliothèque F.-Mitterrand | 48.829800, 2.376800 | Salida exterior; enlace a S01 separado. |
| E | Porte d'Orléans | 48.823100, 2.325000 | Salida exterior de transporte; enlace desde S10 separado. |

## Tramos base

| Tramo | Instrucción operativa | km |
|---|---|---:|
| S01 → S02 | Acera alta del quai François-Mauriac, rue Émile-Durkheim y espacio público del campus hacia Grands Moulins. | 0,737 |
| S02 → S03 | Seguir calles abiertas hacia avenue de France, cruzar el corredor ferroviario solo por paso urbano habilitado y continuar al oeste por rue de Tolbiac/rues señalizadas hasta la Butte. No entrar en obra ni vía férrea. | 2,679 |
| S03 → S04 | Descender rue du Moulin-des-Prés por acera; cruces legales. | 0,476 |
| S04 → S05 | Continuar al sur por Moulin-des-Prés y calles señalizadas hasta el borde de place Hénocque. | 0,276 |
| S05 → S06 | Oeste por rues de la Colonie/Brillat-Savarin y acceso público a Cité Florale; seguir una sola vez Glycines/Orchidées. | 0,781 |
| S06 → S07 | Salir hacia rue Brillat-Savarin, rue Boussingault/rue Gazan y usar únicamente puerta este abierta de Montsouris. | 0,668 |
| S07 → S08 | Caminos públicos señalizados del parque de este a sur; no buscar La Carrière ni salir de caminos. | 0,422 |
| S08 → S09 | Cruzar boulevard Jourdan por semáforo/paso legal hasta acceso público CIUP. | 0,437 |
| S09 → S10 | Itinerario público hacia el oeste, paralelo al borde de Jourdan; no entrar en maisons, jardines residenciales, obras o servicio. | 1,209 |

Enlaces dinámicos: [S01–S02](https://www.google.com/maps/dir/?api=1&origin=48.833900%2C2.376500&destination=48.829100%2C2.380000&travelmode=walking) · [S02–S03](https://www.google.com/maps/dir/?api=1&origin=48.829100%2C2.380000&destination=48.827400%2C2.349700&travelmode=walking) · [S03–S05](https://www.google.com/maps/dir/?api=1&origin=48.827400%2C2.349700&destination=48.823700%2C2.353500&travelmode=walking&waypoints=48.825800%2C2.353500) · [S05–S06](https://www.google.com/maps/dir/?api=1&origin=48.823700%2C2.353500&destination=48.822703%2C2.344820&travelmode=walking) · [S06–S08](https://www.google.com/maps/dir/?api=1&origin=48.822703%2C2.344820&destination=48.821800%2C2.337800&travelmode=walking&waypoints=48.824400%2C2.340100) · [S08–S10](https://www.google.com/maps/dir/?api=1&origin=48.821800%2C2.337800&destination=48.819400%2C2.327800&travelmode=walking&waypoints=48.820200%2C2.339700). Un servicio puede recalcular: manda la secuencia escrita y la vía abierta.

## Conectores y escapes

- `Llegada_BFM_S01`: salida exterior → quai François-Mauriac; **0,46 km geométricos simplificados**, fuera de los 7,690 km.
- `Salida_S10_PorteOrleans`: perímetro oeste → Porte d'Orléans; **0,50 km simplificados**, fuera del total.
- `V2_S05_S07_directo`: omite Cité Florale si sus calles están bloqueadas.
- `V3_S07_S08_perimetro`: calles exteriores si Montsouris está cerrado; no conserva el capítulo de relieve.
- `V4_S08_S10_Jourdan`: boulevard Jourdan por aceras si CIUP está cerrado.
- Escapes principales: Bibliothèque F.-Mitterrand, Tolbiac/Corvisart, Maison Blanche, Cité Universitaire y Porte d'Orléans; verificar servicio real.

© OpenStreetMap contributors, ODbL. Señales, obras, barreras, semáforos y personal prevalecen.
