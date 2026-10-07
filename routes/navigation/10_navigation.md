# Ruta 10 — navegación elegida

Versión `10-v1-20261006`. Base exterior S01→S07, **5,487 km**. Distancias de seis tramos Valhalla/OSM archivados el 3 de octubre de 2026. La traza fija es simplificada: obedecer aceras, pasos, señales y cierres.

| ID | Llegada WGS84 | Instrucción | km |
|---|---|---|---:|
| S01 | Folies, `48.8741, 2.3446` | Empezar en la acera opuesta a 32 rue Richer. | — |
| S02 | Garnier, `48.8720, 2.3316` | Rue Richer → rue du Faubourg-Montmartre → boulevard Montmartre/Haussmann → place de l’Opéra; cruces señalizados. | 1,240 |
| S03 | Casino, `48.8785, 2.3303` | Rodear Garnier por calles públicas hacia rue Scribe/Auber, rue de Caumartin y rue de Clichy; no atravesar interiores. | 0,855 |
| S04 | Moulin, `48.8841, 2.3322` | Subir rue de Clichy/boulevard de Clichy por acera; observar desde punto legal, no desde calzada. | 0,802 |
| S05 | Lapin Agile, `48.8893, 2.3396` | Rue Lepic y calles señalizadas de la Butte hacia rue des Saules; pendiente/adoquín. | 1,140 |
| S06 | Sacré-Cœur, `48.8867, 2.3430` | Rue Saint-Vincent/rue du Mont-Cenis y acceso público indicado; el router usa escaleras. | 0,777 |
| S07 | Madame Arthur, `48.8825, 2.3399` | Descender por escaleras/calles públicas hacia Abbesses y rue des Martyrs; el router usa escaleras. | 0,670 |

[Mapa dinámico](https://www.google.com/maps/dir/?api=1&origin=48.8741%2C2.3446&destination=48.8825%2C2.3399&travelmode=walking&waypoints=48.8720%2C2.3316%7C48.8785%2C2.3303%7C48.8841%2C2.3322%7C48.8893%2C2.3396%7C48.8867%2C2.3430). Puede recalcular; mandan el orden y las distancias archivadas.

## Variantes

- `V1_CORTA_ACTIVIDAD`: S01→S02→S03→S04→S07, 3,567 km; inactividad, lluvia, movilidad o fatiga.
- `V2_FIN_BLANCHE`: finalizar S04; conserva cuatro instituciones, pierde Montmartre y cierre laboral.
- `V3_FIN_ABBESSES`: S05→métro Abbesses por vía pública; pierde mirador y Madame Arthur.
- `V4_SIN_EXPLANADA`: S05→S07 por calles/Abbesses sin explanada si está cerrada o saturada.
- `V5_TRANSPORTE`: desde S04 a S07 por métro/taxi no cartografiado; experiencia reducida, sin continuidad peatonal.

Inicio por Grands Boulevards/Cadet. Salidas: Blanche tras S04, Lamarck-Caulaincourt cerca de S05, Abbesses tras S06 y Pigalle tras S07. Comprobar servicio real.
