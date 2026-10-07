# 26 — Navegación seleccionada

**26-v2-20261007 · 7 octubre 2026.** [Ficha](../26_modern_true_crime.md) · [operaciones](26_access_operations.md) · [segmentos/procedencia](26.geometry.json).

## Núcleo

W01 BiLiPo → W02 acera rue Monge junto al bloque del museo → W03 antiguo 36. **1,407 km de línea fijada, aproximadamente 1,4 km; asignación real 1,5–1,7 km** por aceras y cruces. BiLiPo interior 0,1–0,3 km aparte. La cifra anterior 1,545/2,052 km no gobierna esta versión.

Hasta Notre-Dame se reutilizan puntos densos de consultas Valhalla/OSM archivadas en 16 (conexión BiLiPo) y 02 (Monge/Lagrange/pont au Double, al revés). El corredor superior de Cité se fija manualmente sobre parvis/quai du Marché-Neuf/quai des Orfèvres: continuidad corroborada documentalmente y observaciones públicas en fotografías georreferenciadas. Los intermedios manuales son aproximaciones de corredor, no localizaciones exactas de semáforo. [GPX](26.gpx) y [Geo JSON](26.geojson) contienen la secuencia, no rectas entre tres edificios. Procedencia por segmento en JSON; no router nuevo ni inspección de campo. Señales, aceras, pasos y barreras prevalecen; no seguir el trazo a través de una calzada.

|ID|Llegada pública|Latitud,longitud|
|---|---|---|
|W01|Calle junto a Bi Li Po 48 Cardinal-Lemoine|48.846596,2.351445|
|W02|Acera rue Monge junto al bloque policial, **no puerta del museo**|48.849717,2.349225|
|C01|Parvis Notre-Dame, conector sin capítulo nuevo|48.853150,2.348847|
|C02|Quai du Marché-Neuf, referencia superior|48.853957,2.345978|
|C03|Cruce superior boulevard du Palais/quai, punto fotográfico|48.854381,2.345106|
|W03|Observación pública del antiguo 36 cerca de Pont-Neuf|48.855440,2.341869|

**W01→W02,0,391 km de línea:** salir a Cardinal-Lemoine, alcanzar el cruce señalizado con Monge y seguir Monge hacia noroeste. Guion 1 en acera lateral; no afirmar estar en recepción. El pin antiguo 48.849431,2.348353 era centroide de edificio, no puerta verificada.

**W02→C01:** seguir Monge, cruzar boulevard Saint-Germain en pasos de Maubert, tomar Lagrange hacia el Sena y pont au Double por paso autorizado al parvis. Segmento archivado 02 invertido; no otra visita Medieval.

**C01→W03:** parvis hacia oeste, cruzar rue de la Cité legalmente, continuar por acera alta de quai du Marché-Neuf hacia Pont Saint-Michel; cruzar boulevard du Palais y seguir quai des Orfèvres al oeste a W03. Nunca escalera al muelle, puerta judicial ni calzada. Segundo tramo W02→W03 completo 1,016 km de línea; reservar 25–35 min. Si falla pont au Double/parvis o acera 36, V3/V4, no rodeo supuesto.

[Mapa auxiliar W01–W02](https://www.google.com/maps/dir/?api=1&origin=48.846596%2C2.351445&destination=48.849717%2C2.349225&travelmode=walking) · [W02–W03 por C01](https://www.google.com/maps/dir/?api=1&origin=48.849717%2C2.349225&destination=48.855440%2C2.341869&waypoints=48.853150%2C2.348847&travelmode=walking). Recálculo dinámico auxiliar, no prueba de trazado.

## Módulos y escapes

**26B:** N01 norte rue Madagascar 48.835456,2.397708 → N02 sur 48.834944,2.397236. Recorrer acera y localizar 9 por placa. Fotografías georreferenciadas de calle/placa corroboran extremos; no pin de apartamento. Línea 0,067 km, asignación 0,1 km. Desde Michel-Bizot: avenue du Général-Michel-Bizot hasta rue de Wattignies, seguir Wattignies hacia 56 y girar a Madagascar; regreso por las mismas calles. Aproximación no medida,15–25 min por sentido. Otra llegada posible por rue des Meuniers. Daumesnil/Dugommier no se ofrecen como estaciones inmediatas.

**26C:** D01 observación Flamme/place Diana 48.864211,2.300922, punto fotográfico 2024. Un waypoint, no circuito de túnel. Desde Alma-Marceau salir a place de l'Alma y usar aceras/pasos hasta comienzo avenue de New York; regreso igual,5–10 min por sentido no medidos. No calzada, mediana, ribera, parapeto ni túnel.

[Variantes GPX](26.variants.gpx): V1 utiliza núcleo sin interior; V2 mismo corredor sin observación W02; V3/V4/V5 tienen puntos de escape, no rodeos medidos. N01–N02 es 26B, D01 es 26C. Aproximación de alojamiento/metro y salida del núcleo fuera del total. Inicio Cardinal-Lemoine; escapes Maubert-Mutualité/Saint-Michel; final Pont-Neuf según servicio abierto. WC BiLiPo condicionado a apertura; ningún otro garantizado. Sin certificación PMR integral.

M opcional usa dirección oficial 4 rue de la Montagne-Sainte-Geneviève y acceso indicado en confirmación, no W02 como puerta.

©OpenStreetMap contributors, ODb L para segmentos derivados. Fotografías citadas como evidencia, no reproducidas. Sin levantamiento GPS ni giro a giro certificado.
