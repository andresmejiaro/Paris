# Ruta 19 — Navegación fija

Cruce · **19-v1-20261005** · 5 octubre 2026. [Ficha](../19_paris_illusions.md) · [operaciones](19_access_operations.md) · [JSON](19.operations.json).

## Archivos y medida

[19.gpx](19.gpx) contiene el track base de **3.415 km**. [19.variants.gpx](19.variants.gpx) contiene llegada, salida, escape y V2/V3 como tracks independientes; no se suman todos. [19.geojson](19.geojson) conserva la misma línea. La evidencia de elaboración está en [19.evidence.json](19.evidence.json).

La traza se fijó sobre calles públicas cartografiadas; no atraviesa Gare du Nord, Forum des Halles, Pompidou, jardines cerrados ni oficinas de Palais-Royal. GPX es línea de referencia, no permiso de paso. Señalización, pasos, barreras y agentes prevalecen. Los 3 decimales identifican esta versión; no afirman precisión de un metro.

## Coordenadas WGS84

| ID | Punto | Lat, lon | Posición |
|---|---|---|---|
| I01 | 145 rue La Fayette | 48.879170, 2.356140 | Acera pública opuesta; si no es segura, misma acera. |
| I02 | 1 bis rue Chapon | 48.864120, 2.355880 | Muro en rue Chapon; conector condicional, no tocar. |
| I03 | 29 rue Quincampoix | 48.860620, 2.350310 | Esquina Aubry-le-Boucher; cambiar ángulo por acera. |
| I04 | Les Deux Plateaux | 48.863600, 2.337070 | Cour d’honneur, pavimento autorizado. |
| A | Gare du Nord, salida rue de Dunkerque | 48.879550, 2.355380 | Superficie exterior. |
| S | Palais Royal–Musée du Louvre | 48.862850, 2.336520 | Boca exterior place Colette. |
| WC | Sanisette, 37 rue Berger | 48.862117, 2.343749 | Inventario municipal; comprobar estado. |
| R | Square Émile-Chautemps | 48.866340, 2.352630 | Pausa exterior condicional; no refugio. |
| E | Métro Rambuteau | 48.861280, 2.353280 | Escape en superficie. |

[I01](https://www.google.com/maps/search/?api=1&query=48.879170%2C2.356140) · [I02](https://www.google.com/maps/search/?api=1&query=48.864120%2C2.355880) · [I03](https://www.google.com/maps/search/?api=1&query=48.860620%2C2.350310) · [I04](https://www.google.com/maps/search/?api=1&query=48.863600%2C2.337070)

## Tramos base

| Tramo | Instrucción | km |
|---|---|---:|
| I01 → I02 | Desde Saint-Quentin tomar rue de Chabrol al oeste, bajar por rue du Faubourg-Saint-Denis, continuar Strasbourg/Saint-Martin por cruces señalizados y girar al este en rue Chapon. No usar pasajes interiores. | 1.728 |
| I02 → I03 | Continuar por Chapon al oeste, bajar por Beaubourg y girar hacia Aubry-le-Boucher/Quincampoix. Observar desde esquina, no desde calzada. | 0.661 |
| I03 → I04 | Ir al oeste por Aubry-le-Boucher/Berger, mantener nivel de calle al borde sur de Les Halles, seguir Coquillière y rue Saint-Honoré; entrar a la cour por el acceso público de place Colette/rue de Valois que esté señalizado abierto. | 1.027 |

[Mapa I01–I02](https://www.google.com/maps/dir/?api=1&origin=48.879170%2C2.356140&destination=48.864120%2C2.355880&travelmode=walking) · [I02–I03](https://www.google.com/maps/dir/?api=1&origin=48.864120%2C2.355880&destination=48.860620%2C2.350310&travelmode=walking) · [I03–I04](https://www.google.com/maps/dir/?api=1&origin=48.860620%2C2.350310&destination=48.863600%2C2.337070&travelmode=walking). Maps puede recalcular; manda la traza y la calle abierta.

## Llegada, salida y apoyos

- `Llegada_GareNord_I01`, **0.462 km**: desde la salida exterior rue de Dunkerque ir por rue de Saint-Quentin y La Fayette; usar pasos.
- `Salida_I04_PalaisRoyal`, **0.168 km**: salir por place Colette a la boca exterior; no unir bajo tierra.
- `Escape_I02_Rambuteau`, **0.438 km**: Chapon → Beaubourg → boca exterior Rambuteau.
- `V2_I01_I03_sin_Chapon`, **2.194 km**: Chabrol/Faubourg-Saint-Denis/Strasbourg/Saint-Martin/Rambuteau/Beaubourg/Aubry-le-Boucher; se usa si Chapon está físicamente cortada, no solo si la obra falta.
- `V3_I03_PalaisRoyal_exterior`, **1.109 km**: final ante fachada/acceso de place Colette si la cour está cerrada. No se presenta como visita a Buren.

La ida al WC Berger desde la línea central y regreso añade aproximadamente 0.35–0.55 km según el punto de activación. Se navega con su pin y calles señalizadas, no se integra en el GPX base. El inventario no certifica funcionamiento instantáneo. No se afirma accesibilidad universal de todo el trazado.

© OpenStreetMap contributors, ODbL. No inspección presencial. La continuidad XML/GeoJSON y los extremos se validaron; obras y cruces futuros se comprueban el día.
