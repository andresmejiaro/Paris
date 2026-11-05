# Ruta 18 — Navegación con metro

Cruce · **18-v2-20261105**, 5 noviembre 2026. [Guion](../18_canal_paris.md) · [operaciones](18_access_operations.md) · [JSON](18.operations.json).

**Secuencia autorizada:** C01 Arsenal → Métro Bastille → **línea 5 dirección Bobigny–Pablo Picasso** → Métro Jacques Bonsergent → C03 Récollets → C04 Rotonde/Bassin → C05 Grande Halle.

Se retira C02 Temple/Richard-Lenoir: caminar sobre una bóveda invisible fue evaluado como bajo retorno de experiencia por kilómetro.

## Dos segmentos a pie, separados por metro

| Segmento | Recorrido | Distancia |
|---|---|---:|
| A | C01 Arsenal → Métro Bastille, por caminos y salidas públicos | **0,756 km** medidos C01→Bastille |
| Transporte | Bastille → Jacques Bonsergent (M5 dirección Bobigny–Pablo Picasso; vía Bréguet-Sabin, Richard-Lenoir, Oberkampf, République) | No computa km a pie |
| Enlace | Metro Jacques Bonsergent → C03 Écluses des Récollets | **Pendiente de enrutamiento exacto**, aprox. 0,4–0,7 km |
| B | C03 Récollets → C04 Rotonde/Bassin → C05 Grande Halle | **3,674 km** del recorrido V2 archivado |

**4,430 km de tramos ya medidos + enlace urbano + desplazamientos dentro de paradas**: para piernas, estimar **~4,8–5,1 km** sin atribuir exactitud al total. [18.gpx](18.gpx) tiene **dos trkseg separados**: la aplicación debe usar metro entre segmentos, nunca una diagonal a pie. [18.geojson](18.geojson) separa también los trazados.

## Waypoints

| ID | Ubicación | Coordenadas | Comprobación |
|---|---|---|---|
| C01 | Arsenal, ribera pública | 48.847300, 2.367500 | Entrada del jardín; no pontones privados |
| T1 | Métro Bastille | 48.853000, 2.369500 | Entrar en línea 5 |
| T2 | Métro Jacques Bonsergent | Estación oficial, verificar acceso al salir | Caminar hacia esclusas, sin usar vías de mantenimiento |
| C03 | Écluses des Récollets | 48.874000, 2.363800 | Pasarela pública o mirador legal |
| C04a | Rotonde | 48.883900, 2.369000 | Exterior desde Stalingrad |
| C04b | Quai de Seine | 48.889200, 2.373500 | Ribera pública |
| C05 | Grande Halle | 48.890800, 2.390000 | Explanada pública |

## Salidas y seguridad

Arsenal cerrado: vista desde calle y continuar a Bastille. Incidencia M5: no sustituirla por caminar los casi 2 km de la bóveda; pasar a variante de inicio C03, posponer o cancelar ese enlace. Récollets con obra: observar sólo desde punto seguro abierto, sin forzar compuertas. En Bassin/cruces, obedecer barreras y señalización. Final: Métro Porte de Pantin.

Las rutas V1 Temple y V2 Récollets en [18.variants.gpx](18.variants.gpx) quedan **históricas**, V2 utilizable por fatiga. La evidencia original de enrutamiento consta en [18.evidence.json](18.evidence.json); el enlace metro–C03 no se ha medido con router. No hubo visita de campo.

© OpenStreetMap contributors, ODbL para geometría archivada.
