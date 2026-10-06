# Ruta 15 — Navegación fija

Cruce · **15-v1-20261005** · 5 octubre 2026. [Ficha](../15_paris_reads.md) · [operaciones](15_access_operations.md) · [JSON](15.operations.json).

## Archivos y medida

[15.gpx](15.gpx) contiene la traza base de **1,684 km**. [15.variants.gpx](15.variants.gpx) separa llegada, salida, escape y ruta mojada; no se suman todas. [15.geojson](15.geojson) conserva la línea base. Con llegada Pont-Neuf (**0,184 km**) y salida a Bourse (**0,210 km**), el movimiento de superficie previsto es **2,078 km**.

La traza sigue aceras, Pont des Arts y galerie Vivienne. No atraviesa estaciones, Louvre, patios de acceso condicionado ni salas de lectura. El interior de galerie Vivienne solo se usa durante apertura; V3 lo rodea. GPX es referencia: señales, obras, barreras y personal prevalecen.

## Coordenadas WGS84

| ID | Punto | Lat, lon | Posición |
|---|---|---|---|
| B01 | Bouquinistes, quai de Conti | 48.856910, 2.341330 | Acera alta, junto a caja abierta sin bloquear. |
| B02 | Bibliothèque Mazarine | 48.857270, 2.337400 | Acceso 23 quai de Conti. |
| B03 | Librairie Jousseaume | 48.866730, 2.339550 | 45–47 galerie Vivienne. |
| B04 | Salle Ovale | 48.868100, 2.338550 | Acceso público 5 rue Vivienne. |
| A | Métro Pont-Neuf | 48.858450, 2.342160 | Boca exterior quai du Louvre. |
| S | Métro Bourse | 48.868820, 2.341150 | Boca exterior place de la Bourse. |
| E | Métro Palais Royal | 48.862780, 2.336550 | Escape exterior place Colette. |

[B01](https://www.google.com/maps/search/?api=1&query=48.856910%2C2.341330) · [B02](https://www.google.com/maps/search/?api=1&query=48.857270%2C2.337400) · [B03](https://www.google.com/maps/search/?api=1&query=48.866730%2C2.339550) · [B04](https://www.google.com/maps/search/?api=1&query=48.868100%2C2.338550)

## Tramos base

| Tramo | Instrucción | km |
|---|---|---:|
| B01 → B02 | Seguir al oeste por la acera alta de quai de Conti; no bajar a la ribera. | 0,291 |
| B02 → B03 | Volver al cruce de Pont des Arts, cruzar el puente, seguir quai François-Mitterrand, rue de l’Amiral-de-Coligny, rue de Rivoli y rue Croix-des-Petits-Champs hasta place des Victoires; tomar rue des Petits-Champs y entrar en galerie Vivienne por el acceso señalizado. | 1,210 |
| B03 → B04 | Continuar al norte dentro del pasaje, salir por rue Vivienne y seguir hasta el acceso BnF de 5 rue Vivienne. | 0,183 |

[B01–B02](https://www.google.com/maps/dir/?api=1&origin=48.856910%2C2.341330&destination=48.857270%2C2.337400&travelmode=walking) · [B02–B03](https://www.google.com/maps/dir/?api=1&origin=48.857270%2C2.337400&destination=48.866730%2C2.339550&travelmode=walking) · [B03–B04](https://www.google.com/maps/dir/?api=1&origin=48.866730%2C2.339550&destination=48.868100%2C2.338550&travelmode=walking). Un servicio puede recalcular; manda la secuencia escrita y la vía abierta.

## Conectores

- `Llegada_PontNeuf_B01`, **0,184 km**: desde la boca exterior cruzar Pont-Neuf por paso habilitado y bajar por rue Dauphine/quai de Conti hasta B01.
- `Salida_B04_Bourse`, **0,210 km**: rue Vivienne al norte y este hacia place de la Bourse; terminar en boca exterior.
- `Escape_B02_PalaisRoyal`, **0,676 km**: Pont des Arts → quai François-Mitterrand → Amiral-de-Coligny → place Colette.
- `V3_Galerie_cerrada`, **0,214 km**: desde la entrada sur seguir rue des Petits-Champs, rue Vivienne y acceder a B04; B03 queda fuera.
- `V4_Mojada_B02_B04`, **1,394 km**: omite B01 y mantiene B02–B04; no se presenta como experiencia de comercio fluvial.

© OpenStreetMap contributors, ODbL. Línea peatonal elaborada sin router en vivo ni inspección presencial; los tres decimales identifican la versión, no precisión topográfica.
