# Ruta 18 — Navegación fija

Cruce · **18-v1-20261006** · 6 octubre 2026. [Ficha](../18_canal_paris.md) · [operaciones](18_access_operations.md) · [JSON](18.operations.json).

## Medida

[18.gpx](18.gpx) fija la secuencia completa de **7,077 km**, medida por Valhalla/OSM el 3 de octubre. [18.geojson](18.geojson) conserva puntos de decisión y longitudes. Es línea peatonal de decisión: en esclusas, bassin y parque mandan el borde abierto, señales y barreras, nunca una diagonal ni el derecho de atravesar instalaciones.

[18.variants.gpx](18.variants.gpx) contiene tracks independientes: Temple–C05 **4,418 km**, Récollets–C05 **3,674 km**, llegada Bastille–Arsenal, salida Porte de Pantin y escapes. No se suman entre sí.

| ID | Lugar | Lat, lon | Llegada |
|---|---|---|---|
| C01 | Arsenal | 48.847300, 2.367500 | Orilla pública desde 53 boulevard de la Bastille. |
| P02 | Bastille | 48.853200, 2.369100 | Extremo norte del bassin. |
| P03 | Richard-Lenoir | 48.860000, 2.371500 | Jardín/mediana pública. |
| C02 | Temple | 48.868200, 2.366800 | Acera junto al canal abierto. |
| C03 | Récollets | 48.874000, 2.363800 | Orilla/pasarela fuera del flujo. |
| C04a | Rotonde | 48.883900, 2.369000 | Place de la Bataille-de-Stalingrad. |
| C04b | Quai de Seine | 48.889200, 2.373500 | Orilla pública, exteriores. |
| C05 | Grande Halle | 48.890800, 2.390000 | Explanada pública. |
| A | Métro Bastille | 48.853000, 2.369500 | Boca exterior. |
| S | Métro Porte de Pantin | 48.889800, 2.392000 | Boca exterior. |

## Tramos base

| Tramo | Instrucción | km |
|---|---|---:|
| C01→P02 | Camino público del jardín, boulevard Bourdon y borde norte del bassin por cruces. | 0,756 |
| P02→P03 | Norte por medianas/jardines de boulevard Richard-Lenoir; no buscar la bóveda. | 0,861 |
| P03→C02 | Richard-Lenoir hacia Jules-Ferry/Temple hasta el agua abierta. | 1,040 |
| C02→C03 | Quai de Valmy; cruzar sólo donde obras y señales indiquen. | 0,744 |
| C03→C04a | Quai de Valmy, con desvíos Alibert/Jemmapes, hasta Stalingrad. | 1,300 |
| C04a→C04b | Orilla pública por quai de Seine hacia el norte. | 0,770 |
| C04b→C05 | Crimée, puente abierto y vías públicas al acceso sur del parque/Grande Halle. | 1,602 |

Los tramos redondeados suman 7,073; la consulta completa da **7,077 km**.

## Niveles y salidas

- Arsenal: si cierra la puerta, V0 observa desde boulevard de la Bastille y no baja.
- Récollets: no usar compuertas, plataformas técnicas ni borde sin protección. Pasarela sólo abierta y seca.
- Bassin: ninguna navette forma parte de la ruta. Usar puente de Crimée o cruce abierto; nunca una estructura en movimiento.
- La Villette: llegada sur exterior; los ascensores del canal no son necesarios.
- Salidas: Bastille tras C01; République/Goncourt cerca de C02; Jaurès/Stalingrad tras C03; Riquet/Crimée en C04; Porte de Pantin al final.

© OpenStreetMap contributors, ODbL. Consulta preservada en [evidencia](18.evidence.json). No hubo inspección; señalización, personal y barreras prevalecen.
