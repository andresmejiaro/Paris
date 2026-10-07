# Ruta 25 — Navegación fija

Cruce · **25-v1-20261007** · 7 octubre 2026. [Ficha](../25_western_green_machinery.md) · [operaciones](25_access_operations.md) · [JSON](25.operations.json).

## Medida y naturaleza

La distancia controladora **7,794 km** procede de dos consultas Valhalla/OSM contiguas archivadas en `discovery_batch_f.md` (5,258 + 2,536 km). Los once tramos redondeados suman 7,790 km; el total no redondeado controla. [25.gpx](25.gpx) y [25.geojson](25.geojson) son corredores simplificados, no polilínea densa ni inspección. No existe continuidad ferroviaria pública entre W02 y W03: se usan calles.

## Puntos WGS84

| ID | Punto | Lat, lon | Posición |
|---|---|---|---|
| W01 | PC14 Coulmiers/Général-Leclerc | 48.824800, 2.322800 | Acceso público próximo a 124 avenue du Général-Leclerc. |
| W02 | PC14 rue Didot | 48.827323, 2.314599 | Salida pública; no continuar por vía cerrada. |
| W03 | Brassens, acceso oriental | 48.832400, 2.301500 | Acceso público desde sector Morillons/Brancion. |
| W04 | Brassens central | 48.831000, 2.299200 | Camino público ante bassin/beffroi; no objeto industrial supuesto. |
| W05 | PC15 Dantzig | 48.831338, 2.296863 | Acceso oficial 47 rue de Dantzig. |
| W06 | PC15 Balard | 48.836100, 2.278300 | Salida oficial 84 rue Leblanc/place Balard. |
| W07 | André-Citroën sur | 48.839000, 2.274700 | Entrada pública rue Leblanc/Montagne-de-la-Fage. |
| W08 | André-Citroën central | 48.841600, 2.274500 | Camino público; pausa fuera del flujo. |
| W09 | André-Citroën río | 48.842800, 2.272000 | Salida pública hacia quai André-Citroën. |
| W10 | Javel, acera alta | 48.846300, 2.276000 | Nivel alto; nunca depender de ribera inundable. |
| W11 | Pont de Grenelle | 48.851500, 2.279400 | Acceso legal señalado a isla. |
| W12 | Île aux Cygnes, extremo sur | 48.850100, 2.279700 | Paseo público junto a estatua; retorno separado. |
| A | Porte d'Orléans | 48.823100, 2.325000 | Llegada exterior, fuera del total. |

## Tramos base

| Tramo | Instrucción | km |
|---|---|---:|
| W01 → W02 | Promenade PC14 exclusivamente entre puertas oficiales Coulmiers y Didot. | 0,755 |
| W02 → W03 | Rue Didot hacia el norte, rue des Morillons y acceso público Brassens indicado; pasos legales. No buscar vía férrea. | 1,526 |
| W03 → W04 | Caminos públicos del parque hacia bassin/beffroi. | 0,393 |
| W04 → W05 | Salir por sector Dantzig y entrar solo por 47 rue de Dantzig abierto. | 0,310 |
| W05 → W06 | PC15 señalizada completa hacia Balard, incluido túnel seguro abierto; nunca taludes. | 1,640 |
| W06 → W07 | Place Balard/rue Leblanc por aceras y pasos hasta entrada sur abierta del parque. | 0,632 |
| W07 → W08 | Caminos públicos hacia espacio central, sin atajo por jardín cerrado. | 0,453 |
| W08 → W09 | Salida señalizada hacia quai André-Citroën. | 0,293 |
| W09 → W10 | Acera alta del quai André-Citroën hacia Javel. | 0,556 |
| W10 → W11 | Acera alta por quai de Grenelle hasta Pont de Grenelle. | 0,876 |
| W11 → W12 | Acceso legal puente/escalera y paseo público hacia extremo sur. | 0,356 |

Enlaces dinámicos auxiliares: [W02–W03](https://www.google.com/maps/dir/?api=1&origin=48.827323%2C2.314599&destination=48.832400%2C2.301500&travelmode=walking) · [W06–W07](https://www.google.com/maps/dir/?api=1&origin=48.836100%2C2.278300&destination=48.839000%2C2.274700&travelmode=walking) · [W09–W11](https://www.google.com/maps/dir/?api=1&origin=48.842800%2C2.272000&destination=48.851500%2C2.279400&travelmode=walking&waypoints=48.846300%2C2.276000). El recálculo no manda sobre puertas, nivel alto ni pasos legales.

## Conectores, variantes y escapes

[25.variants.gpx](25.variants.gpx) guarda tracks independientes:

- `Llegada_PorteOrleans_W01`: enlace simplificado de 0,25 km, fuera del total.
- `Salida_W12_W11`: retorno de isla, 0,356 km aproximados fuera del total.
- `V1_W02_W03_sin_PC14`: conexión tras omitir PC14.
- `V2_W05_W06_superficie`: Dantzig → Olivier-de-Serres → Desnouettes → Balard; referencia no medida, no conserva 7,794 km.
- `V3_W06_Balard`: final anticipado.
- `V4_W09_Javel` y `V4_W11_Grenelle`: finales sin isla.

Escapes: Porte d'Orléans, Didot/tranvía, Convention, Balard, Javel y Charles Michels/Grenelle; verificar servicio. Señales, obras, barreras, personal y semáforos prevalecen.

© OpenStreetMap contributors, ODbL.
