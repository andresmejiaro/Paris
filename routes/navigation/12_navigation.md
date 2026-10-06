# Ruta 12 — Navegación fija

Cruce · **12-v1-20261005** · 5 octubre 2026. [Ficha](../12_market_morning.md) · [operaciones](12_access_operations.md) · [JSON](12.operations.json).

## Archivos y medida

[12.gpx](12.gpx) contiene la traza base de **4,214 km**. [12.variants.gpx](12.variants.gpx) contiene llegada, salida, escape y variante Bastille como tracks independientes; no se suman todos. [12.geojson](12.geojson) conserva la línea elegida. [12.evidence.json](12.evidence.json) registra procedencia y límites.

La medida procede del cálculo peatonal Valhalla/OSM conservado en `geometry_batch_b.md`: 2,342 km Aligre→Enfants Rouges, 1,242 km Enfants Rouges→Montorgueil y 0,629 km Montorgueil→Bourse; el total de la respuesta fue 4,214 km aunque los tramos redondeados sumen 4,213. La traza se fija sobre calles públicas y no atraviesa interiores. GPX es referencia, no permiso de paso; señales, cruces, obras y agentes prevalecen.

## Coordenadas WGS84

| ID | Punto | Lat, lon | Posición |
|---|---|---|---|
| M01 | Aligre/Beauvau | 48.848900, 2.378300 | Place d’Aligre; empezar fuera del flujo y entrar solo por acceso abierto. |
| M02 | Enfants Rouges | 48.863000, 2.361900 | Entrada publicada de 39 rue de Bretagne; usar entrada señalizada abierta. |
| C03 | Rue Montorgueil | 48.864600, 2.347700 | Paso contextual en superficie; sin parada comercial obligatoria. |
| M04 | Bourse de Commerce | 48.862800, 2.342800 | Exterior, rue de Viarmes; sin promesa de interior. |
| A | Métro Ledru-Rollin | 48.851644, 2.376077 | Boca exterior seleccionada; comprobar salida. |
| S | Les Halles, rue Berger | 48.862430, 2.346720 | Acceso exterior; no se cuenta navegación subterránea. |
| B | Marché Bastille | 48.856500, 2.370600 | Variante jueves/domingo, sobre boulevard y solo con mercado activo. |
| WC | Sanisette, 37 rue Berger | 48.862117, 2.343749 | Inventario municipal; comprobar funcionamiento. |
| E | Métro Temple | 48.866500, 2.360600 | Escape tras M02; boca exterior aproximada, seguir señalización. |

[M01](https://www.google.com/maps/search/?api=1&query=48.848900%2C2.378300) · [M02](https://www.google.com/maps/search/?api=1&query=48.863000%2C2.361900) · [C03](https://www.google.com/maps/search/?api=1&query=48.864600%2C2.347700) · [M04](https://www.google.com/maps/search/?api=1&query=48.862800%2C2.342800)

## Tramos base

| Tramo | Instrucción | km |
|---|---|---:|
| M01 → M02 | Salir por rue d’Aligre/rue de Charenton, avanzar al noroeste por el viario público hacia Bastille; continuar por rue Saint-Antoine, rue de Turenne y rue de Bretagne. No cortar por patios, mercado Bastille inactivo ni pasajes con puerta. | 2,342 |
| M02 → C03 | Seguir al oeste por rue de Bretagne, rue Réaumur y el viario señalizado hacia rue Montorgueil. C03 es paso breve, sin cola ni entrada. | 1,242 |
| C03 → M04 | Bajar por rue Montorgueil, girar hacia rue Coquillière y alcanzar el exterior circular por rue de Viarmes. No entrar en Forum ni museo para completar la línea. | 0,629 |

[Mapa M01–M02](https://www.google.com/maps/dir/?api=1&origin=48.848900%2C2.378300&destination=48.863000%2C2.361900&travelmode=walking) · [M02–C03](https://www.google.com/maps/dir/?api=1&origin=48.863000%2C2.361900&destination=48.864600%2C2.347700&travelmode=walking) · [C03–M04](https://www.google.com/maps/dir/?api=1&origin=48.864600%2C2.347700&destination=48.862800%2C2.342800&travelmode=walking). El proveedor puede recalcular; manda la traza y la calle abierta.

## Llegada, salida y apoyos

- `Llegada_LedruRollin_M01`, **0,469 km**: desde la boca exterior, rue du Faubourg-Saint-Antoine → rue d’Aligre.
- `Salida_M04_LesHalles`, **0,351 km**: rue de Viarmes/rue Coquillière → acceso exterior rue Berger.
- `Escape_M02_Temple`, **0,438 km**: rue de Bretagne → rue du Temple → boca señalizada.
- `V2_M01_Bastille`, **1,282 km**: variante jueves/domingo; termina en mercado Bastille y no reclama productor de Enfants Rouges.

La circulación dentro de mercados no se añade porque depende de puestos, aforo y accesos abiertos. El total de superficie planificado es **5,034 km** (base + llegada + salida), más circulación elegida. No se afirma accesibilidad universal, estado de ascensores ni continuidad sin obras.

© OpenStreetMap contributors, ODbL. Sin inspección presencial; accesos y cruces se comprueban el día.
