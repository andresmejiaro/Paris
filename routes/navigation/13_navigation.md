# Ruta 13 — Navegación fija

Cruce · **13-v1-20261006** · 6 octubre 2026. [Ficha](../13_engineered_city.md) · [operaciones](13_access_operations.md) · [JSON](13.operations.json).

## Medida y naturaleza de la traza

La distancia controladora **7,013 km** procede de la consulta peatonal Valhalla/OSM archivada en `geometry_batch_b.md`. Los tramos publicados redondeados (2,268 + 0,885 + 0,198 + 1,819 + 1,563 + 0,278) suman 7,011 km; el total no redondeado controla. [13.gpx](13.gpx) y [13.geojson](13.geojson) fijan un corredor público simplificado con puntos de decisión; **no** reproducen una polilínea densa del router ni certifican la acera. La ruta permanece siempre en nivel alto entre Mirabeau y Alma: no seguir recálculos por Port Debilly ni bajar a vías inundables.

## Puntos WGS84

| ID | Punto | Lat, lon | Posición |
|---|---|---|---|
| W01 | Fuente del square Lamartine | 48.864900, 2.275200 | Dentro solo con puerta abierta; localizar la salida de agua. |
| W02 | Wallace place Jean-Lorrain | 48.848100, 2.264800 | Acera/plaza, sin bloquear paso. |
| W03 | Antiguo recinto de Auteuil | 48.846300, 2.273200 | Acera pública ante 75–93 avenue de Versailles. |
| W04 | Pont Mirabeau oeste | 48.847155, 2.275417 | Paso de orientación, no capítulo. |
| W05 | Radio France / Kennedy | 48.852700, 2.279400 | Corredor alto. |
| W06 | Bir-Hakeim oeste | 48.856000, 2.287300 | Paso alto, sin duplicar Ruta 01. |
| W07 | Avenue de New York | 48.860500, 2.292100 | Corredor alto; no Port Debilly. |
| W08 | Mirador alto del Zouave | 48.864000, 2.301300 | Primera acera segura con figura visible. |
| W09 | Musée des Égouts, umbral | 48.862600, 2.302700 | Exterior esplanade Habib-Bourguiba. |
| A | RER Avenue Henri-Martin | 48.864390, 2.272960 | Salida exterior seleccionada. |
| S | Métro Alma-Marceau | 48.864520, 2.300930 | Boca exterior; cruzar solo por paso legal. |

## Tramos

| Tramo | Instrucción operativa | km |
|---|---|---:|
| W01 → W02 | Salir por Henri-Martin, seguir al sur por Mozart/La Fontaine y calles señalizadas hacia place Jean-Lorrain. El mapa dinámico puede variar; no confundir place de Barcelone. | 2,268 |
| W02 → W03 | Rue Jean-de-La-Fontaine y rues d'Auteuil/Remusat hasta avenue de Versailles; permanecer en aceras. | 0,885 |
| W03 → W04 | Alcanzar quai Louis-Blériot y el arranque occidental del Pont Mirabeau por paso legal. | 0,198 |
| W04 → W05 | Seguir únicamente aceras altas de quai Louis-Blériot/avenue du Président-Kennedy, frente a Radio France. | 1,819 parcial hasta W06 |
| W05 → W06 | Continuar por Kennedy hasta Bir-Hakeim; no bajar a ribera. | incluido arriba |
| W06 → W08 | Avenue de New York por nivel alto y pasos abiertos hasta Alma. | 1,563 |
| W08 → W09 | Cruzar por pasos legales al lado sur y seguir a esplanade Habib-Bourguiba. | 0,278 |

Los enlaces dinámicos son auxiliares y pueden recalcular: [W01–W02](https://www.google.com/maps/dir/?api=1&origin=48.864900%2C2.275200&destination=48.848100%2C2.264800&travelmode=walking) · [W02–W03](https://www.google.com/maps/dir/?api=1&origin=48.848100%2C2.264800&destination=48.846300%2C2.273200&travelmode=walking) · [W03–W04](https://www.google.com/maps/dir/?api=1&origin=48.846300%2C2.273200&destination=48.847155%2C2.275417&travelmode=walking) · [W04–W06](https://www.google.com/maps/dir/?api=1&origin=48.847155%2C2.275417&destination=48.856000%2C2.287300&travelmode=walking&waypoints=48.852700%2C2.279400) · [W06–W08](https://www.google.com/maps/dir/?api=1&origin=48.856000%2C2.287300&destination=48.864000%2C2.301300&travelmode=walking&waypoints=48.860500%2C2.292100) · [W08–W09](https://www.google.com/maps/dir/?api=1&origin=48.864000%2C2.301300&destination=48.862600%2C2.302700&travelmode=walking).

## Llegada, salida y variantes

[13.variants.gpx](13.variants.gpx) guarda tracks independientes:

- `Llegada_AvenueHenriMartin_W01`: corredor simplificado desde la salida RER; **0,180 km geométricos de referencia**, no distancia router.
- `Salida_W09_AlmaMarceau`: umbral → cruce legal → boca exterior; **0,242 km de referencia**.
- `V0_Perimetro_Lamartine`: punto exterior para narrar con square cerrado.
- `V1_W01_W02_directo`: conexión conceptual para omitir Wallace si está tapada; no sustituye la instrucción vial del día.
- `V3_W03_Mirabeau`: salida directa después de Auteuil.
- `V4_W06_Passy`: escape de fatiga hacia Passy/Bir-Hakeim.

© OpenStreetMap contributors, ODbL. Señales, semáforos, obras, agentes y barreras prevalecen.
