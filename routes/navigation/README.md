# Navegación seleccionada — Hilo, Aster/Noctámbulo, Miga y Rumbo
Cruce · navegación base del 3 octubre 2026; cierres operativos de ruta 02 revisado el 4 octubre y rutas 16, 21 y 22 el 5 octubre 2026. Trazados calculados y revisados en cartografía peatonal. No son un levantamiento GPS ni una inspección presencial de puertas.

Cada ruta tiene instrucciones por calles, puntos de llegada, enlaces de Google Maps y un GPX fijo. Maps puede recalcular y elegir otra acera o una calle paralela: sus enlaces no son prueba de que haya seguido el GPX. El GPX contiene una línea para seguir en una aplicación compatible; no produce por sí solo avisos de giro. El [GeoJSON conjunto](routes.geojson) y el [registro de navegación](manifest.json) conservan coordenadas y maniobras.

| Narrador | Recorrido principal | Distancia de red | Archivo fijo |
|---|---|---:|---|
| Hilo | Flamel → parvis Notre-Dame → Saint-Médard, frente y ábside | 3.136 km | [GPX](02.gpx) |
| Aster | Champo/Filmothèque → portal norte Saint-Étienne → Pathé | 2.555 km | [GPX](16.gpx) · [instrucciones](16_navigation.md) |
| Noctámbulo, coda independiente de 16 | Cour Carrée/Belphégor → rue du Pont-Neuf/Éléonore | 0.505 km | [GPX adicional, seleccionar coda](16.variants.gpx) |
| Miga | Stohrer → Kayser → Chartier por Réaumur/Montmartre | 0.971 km | [GPX](21.gpx) |
| Rumbo | Escaleras de rue de Lyon → Reuilly → Sahel → salida Édouard-Lartet | 3.435 km | [GPX](22.gpx) |

Tres decimales reproducen la respuesta del motor; no implican exactitud de un metro. No incluyen acceso desde alojamiento, interiores ni vueltas de degustación. Los totales y conectores propios de cada experiencia se declaran por separado.

## 16 — Aster: la sesión es el final; Noctámbulo: coda aparte

**DONE — 16-v10-20261005, revisada el 5 octubre 2026.** [Ficha canónica](../16_cinema_paris.md) · [instrucciones, puntos y enlaces](16_navigation.md) · [operaciones y auditoría DoD](16_access_operations.md) · [JSON](16.operations.json) · [evidencia cruda](16.evidence.json) · [GeoJSON propio](16.geojson).

Núcleo único de 2.555 km, con llegada Cluny 0.164 y salida Les Gobelins/Rue Le Brun 0.217 km: **2.936 km de superficie**. Programa fechado Pathé 3/11/2026 a las 16:30, 51 min, €7; inicio 12:55–13:15 y salida prevista 17:30–17:45. V1 galería €5 con cierre propio si no hay film admitido. No hay compra ni idioma garantizados.

El [GPX adicional](16.variants.gpx) contiene **16 tracks independientes**, que incluyen variantes, servicios, llegada/retorno y coda. Coda 0.505 + 0.259 llegada + 0.148 salida = **0.912 km**. V5 exterior si patio cerrado: 0.397 + 0.102 llegada + 0.148 salida = **0.647 km**. No se mide una línea de metro ni se une a pie Pathé con el Louvre. V2/V4/V6 indican qué capítulos se pierden; reducción o cancelación no equivalen al núcleo completo.

Cartografía revisada para evitar puerta religiosa incorrecta, pin Pathé desplazado, escaleras subterráneas, parking/ribera en coda y pasos cubiertos/atajos de jardín en servicios. Comprobaciones del día y sus respuestas en operaciones; evaluación externa posterior. La Fayette se asigna a 19 sin editar su ficha. Datos 02/21/22 preservados, sin reapertura de 02.

## 02 — Hilo: llegar a las puertas, no al centro del edificio
[Flamel → Notre-Dame](https://www.google.com/maps/dir/?api=1&origin=48.8636%2C2.35313&destination=48.85318%2C2.34875&travelmode=walking) · [Notre-Dame → Saint-Médard](https://www.google.com/maps/dir/?api=1&origin=48.85318%2C2.34875&destination=48.84009%2C2.34983&travelmode=walking) · [Frente → ábside](https://www.google.com/maps/dir/?api=1&origin=48.84009%2C2.34983&destination=48.8399%2C2.35115&travelmode=walking)

| Tramo | Instrucción elegida | km |
|---|---|---:|
| Flamel → Notre-Dame | Desde 51 Montmorency, caminar al este hasta Beaubourg; bajar por Beaubourg/Renard hasta Hôtel de Ville. Cruzar por pasos peatonales hacia Pont d'Arcole; atravesarlo y seguir rue d'Arcole hasta el parvis. | 1.343 |
| Notre-Dame → frente Saint-Médard | Desde el parvis cruzar Pont au Double; seguir Lagrange hasta Saint-Germain y tomar Monge hacia el sur. Girar a Daubenton hacia Mouffetard. | 1.666 |
| Frente → ábside | Seguir Daubenton hacia el este, girar a la derecha por rue de Candolle y detenerse junto a Censier frente al extremo oriental de la iglesia. | 0.127 |

La posición de Notre-Dame queda en el parvis occidental, desde donde se mira la fachada. Sainte-Anne es la puerta a la derecha al mirar de frente; el pin no intenta conducir al hierro de la puerta atravesando colas o barreras. El final Saint-Médard mira al ábside desde la calle: ningún sepulcro o acceso histórico exacto queda identificado por este punto.

La traza base pasa por Beaubourg/Renard, no por Tour Saint-Jacques. Se retira la promesa anterior de pasar a sus pies. Sainte-Chapelle sigue siendo una visita opcional aparte y no está sumada a este GPX.

| Punto | WGS84: latitud, longitud | Abrir |
|---|---|---|
| Fachada de Flamel, 51 rue de Montmorency | 48.8636, 2.35313 | [Mapa](https://www.google.com/maps/search/?api=1&query=48.8636,2.35313) |
| Parvis, frente a fachada occidental | 48.85318, 2.34875 | [Mapa](https://www.google.com/maps/search/?api=1&query=48.85318,2.34875) |
| Saint-Médard, frente de Mouffetard/Daubenton | 48.84009, 2.34983 | [Mapa](https://www.google.com/maps/search/?api=1&query=48.84009,2.34983) |
| Saint-Médard, vista oriental desde rue Censier | 48.8399, 2.35115 | [Mapa](https://www.google.com/maps/search/?api=1&query=48.8399,2.35115) |

**DONE — 02-v10-20261004, revisada el 4 octubre 2026.** Hilo narra; Cruce produce. [Ficha canónica](../02_old_paris_devils_miracles.md) · [operaciones, fuentes y adaptaciones de guion](02_access_operations.md) · [registro operativo JSON](02.operations.json) · [GPX de variantes y conectores](02.variants.gpx). Base: 2–2.5 h, inicio 09:00–14:00, final máximo 16:30, hora de París; €0 y sin reserva. La revisión externa por varios modelos es posterior al cierre.

| Conector / variante | Marcha medida | Qué elegir |
|---|---:|---|
| Rambuteau salida 4 → Flamel | 0.176 km | Llegada preferida; salida 1 alternativa: 0.318 km. |
| Cabecera → Censier-Daubenton | 0.076 km | [Acceso rue Monge](https://www.google.com/maps/search/?api=1&query=48.8404419%2C2.3515106), nodo OSM 703430271. Base con llegada preferida y salida: 3.388 km. |
| Notre-Dame → Sainte-Chapelle → Notre-Dame | 0.789 km | Opcional, fuera de la base; añade interior, reserva, coste y 80–110 min. |
| Cabecera → Buffon | 0.910 km | Refugio solo abierto; cerrado lunes, domingos, 1 y 11 de noviembre. Ver horario completo en operaciones. |
| V0 parcial hasta Notre-Dame + salida exterior Cité | 1.343 + 0.528 km | Terminar tras dos capítulos; últimos 20–30 m hasta escaleras/andenes sin medir. |
| V1, traslado en bus 47 | 1.919 km a pie | Tres capítulos; 0.292 km hasta poste sur Cité y 0.284 km desde bajada Censier incluidos. Viaje en bus sin línea ficticia en GPX. |
| V2, sin Flamel | 1.793 km | Comenzar en Notre-Dame; dos capítulos. |
| V3, sin parvis | 3.792 km | Flamel → Petit Pont por Cité → Saint-Médard; dos capítulos. |
| V4, sin cabecera | 3.009 km + 0.136 km salida | Final en frente; tres capítulos con adaptación. |

El GPX adicional guarda **13 tracks independientes**: tres versiones parciales extraídas de la base, un desvío completo y nueve conectores. Seleccionar solo los nombres indicados por la variante; no sumar todos los tracks. Los puntos de objeto Sainte-Anne y escaleras Cité quedan como referencias en JSON y no como destinos GPX. Obras/barreras, clima, WC, refugio y servicio se comprueban el día, con respuestas V0–V4 ya fijadas. Las versiones parciales no se registran como ejecución íntegra de la base.

## 21 — Miga: tres compras, menos de un kilómetro
[Ficha canónica](../21_paris_popular_flavours.md) · [instrucciones completas](21_navigation.md) · [operaciones y auditoría DoD](21_access_operations.md) · [registro operativo JSON](21.operations.json) · [variantes GPX](21.variants.gpx).

**DONE — 21-v10-20261005, revisada el 5 octubre 2026.** Base 0.971 km, 2 h 05–2 h 45; V0–V4 cubren producto ausente, Kayser cerrado/sin compra, Chartier inutilizable, fatiga y lluvia. V2 conserva un final de bouillon en Julien mediante dos trazas independientes. Aperturas, existencias, precios, carta y cola se comprueban el día; evaluación externa posterior.

[Stohrer → Kayser](https://www.google.com/maps/dir/?api=1&origin=48.86525%2C2.34692&destination=48.86707%2C2.34728&travelmode=walking) · [Kayser → Chartier por Réaumur y Montmartre](https://www.google.com/maps/dir/?api=1&origin=48.86707%2C2.34728&destination=48.87194%2C2.34296&travelmode=walking&waypoints=48.8676201%2C2.3460668%7C48.8681507%2C2.3436015)

| Tramo | Instrucción elegida | km |
|---|---|---:|
| Stohrer → Kayser | Subir por Montorgueil; continuar por Petits-Carreaux hasta el 16. | 0.203 |
| Kayser → Chartier | Seguir al norte hasta Réaumur; girar a la izquierda hacia Montmartre. Girar a la derecha y subir Montmartre; cruzar los boulevards por los pasos señalizados y continuar por Faubourg Montmartre hasta el acceso del 7. | 0.768 |

No rodeo por Étienne-Marcel/Louvre para unir las dos tiendas. El domingo, la versión sin Kayser simplemente pasa por esa calle sin compra; conserva la misma línea peatonal. Detenerse ante tiendas y comprar no cambia la geometría registrada.

| Punto | WGS84: latitud, longitud | Abrir |
|---|---|---|
| Stohrer, 51 rue Montorgueil | 48.86525, 2.34692 | [Mapa](https://www.google.com/maps/search/?api=1&query=48.86525,2.34692) |
| Kayser, 16 rue des Petits-Carreaux | 48.86707, 2.34728 | [Mapa](https://www.google.com/maps/search/?api=1&query=48.86707,2.34728) |
| Chartier, acceso del 7 rue du Faubourg Montmartre | 48.87194, 2.34296 | [Mapa](https://www.google.com/maps/search/?api=1&query=48.87194,2.34296) |

Salida hacia transporte: [entrada Grands Boulevards, boulevard Montmartre/Musée Grévin](https://www.google.com/maps/search/?api=1&query=48.8716354%2C2.3427747), acceso 2 en OSM; el servicio y las puertas del metro se comprueban el día de viaje.

## 22 — Rumbo: arriba del viaducto, dentro de la trinchera
[Ficha canónica](../22_coulee_verte.md) · [operaciones y auditoría DoD](22_access_operations.md) · [revisión de acceso de noviembre](22_access_november.md).

**DONE — 22-v1-20261005, revisada el 5 octubre 2026.** Núcleo 3.435 km, 4.210 km con conectores, 2 h 20 min con margen a 2 h 30. V0–V4 cubren fatiga/lluvia, corte intermedio, puerta oriental cerrada y cancelación. La ventana conservadora es 09:00–16:45, con último inicio 14:15; señales y barreras locales mandan. Evaluación externa posterior.

[Entrada → Reuilly, tramo elevado](https://www.google.com/maps/dir/?api=1&origin=48.8495863%2C2.3711588&destination=48.842302%2C2.387501&travelmode=walking&waypoints=48.8495904%2C2.3713355%7C48.8481641%2C2.3740269%7C48.8443732%2C2.3819791) · [Reuilly → Sahel por Vivaldi](https://www.google.com/maps/dir/?api=1&origin=48.842302%2C2.387501&destination=48.8411999%2C2.3964213&travelmode=walking&waypoints=48.841442%2C2.3912393) · [Sahel → sendero al este de rue de Toul](https://www.google.com/maps/dir/?api=1&origin=48.8411999%2C2.3964213&destination=48.8407626%2C2.4045413&travelmode=walking&waypoints=48.8411162%2C2.3993852%7C48.8409299%2C2.4030752) · [Sendero oriental → salida Édouard-Lartet](https://www.google.com/maps/dir/?api=1&origin=48.8407626%2C2.4045413&destination=48.8411992%2C2.4131125&travelmode=walking&waypoints=48.8405746%2C2.4073765%7C48.8405596%2C2.409818%7C48.8410708%2C2.4124373)

| Tramo | Instrucción elegida | km |
|---|---|---:|
| Escaleras rue de Lyon → Reuilly | Subir los dos tramos de escaleras de la promenade y continuar por arriba del Viaduc des Arts, dirección sureste. Mantenerse en la promenade hasta la pasarela André-Léo. | 1.493 |
| Reuilly → Sahel | Cruzar la pasarela hacia el este y seguir la continuidad peatonal de la Coulée por allée Vivaldi y el túnel hacia la trinchera. | 0.688 |
| Sahel → puerta Édouard-Lartet | Seguir al este dentro del corredor: túneles, continuidad al cruce de rue de Toul y sendero peatonal paralelo separado de bicicletas. En la bifurcación, seguir hacia Montempoivre/Édouard-Lartet, no la rama Charles-Péguy. Continuar bajo boulevard Soult y salir por la rama que sube a la puerta oriental. | 1.202 |
| Puerta → exterior | Atravesar la puerta pública si está abierta y seguir hasta el punto exterior sobre Édouard-Lartet. | 0.051 |

| Punto | WGS84: latitud, longitud | Abrir |
|---|---|---|
| Pie de escaleras, rue de Lyon | 48.8495863, 2.3711588 | [Mapa](https://www.google.com/maps/search/?api=1&query=48.8495863,2.3711588) |
| Pasarela André-Léo, sobre jardín de Reuilly | 48.842302, 2.387501 | [Mapa](https://www.google.com/maps/search/?api=1&query=48.842302,2.387501) |
| Sendero de la trinchera, tramo de Sahel | 48.8411999, 2.3964213 | [Mapa](https://www.google.com/maps/search/?api=1&query=48.8411999,2.3964213) |
| Puerta oriental hacia Édouard-Lartet | 48.8410708, 2.4124373 | [Mapa](https://www.google.com/maps/search/?api=1&query=48.8410708,2.4124373) |
| Fuera del recinto, salida Édouard-Lartet | 48.8411992, 2.4131125 | [Mapa](https://www.google.com/maps/search/?api=1&query=48.8411992,2.4131125) |

El pin de entrada es el pie de la escalera de la promenade, no una escalera del metro Bastille. La entrada de rue de Lyon requiere escaleras; no se anuncia una variante accesible. La puerta oriental es el nodo OSM 7668989643. Las señales y barreras reales mandan sobre la línea.

| Acceso o regreso separado | km | Enlace |
|---|---:|---|
| Bastille → entrada por rue de Lyon | 0.396 | [Maps](https://www.google.com/maps/dir/?api=1&origin=48.8524174%2C2.3690683&destination=48.8495863%2C2.3711588&travelmode=walking) |
| Salida → acceso al andén de Montempoivre T3a | 0.379 | [Maps](https://www.google.com/maps/dir/?api=1&origin=48.8411992%2C2.4131125&destination=48.8400571%2C2.4090033&travelmode=walking) |

Total con ambos conectores: **4.210 km**, unos 4.21 km. El acceso final al tranvía es un borde de andén en boulevard Soult, no un punto sobre los raíles. Elegir el sentido de viaje allí. El GPX guarda núcleo y ambos conectores como tres tracks con nombre; una aplicación puede mostrar los tres, así que no sumar solo el track núcleo cuando se camina todo.

[Puertas y horarios de noviembre: revisión documental del 4 octubre](22_access_november.md). RATP publica 08:00–17:45 entre semana, 09:00–17:45 fines de semana y festivos. Falta el calendario municipal fechado y turismo publica un cierre invernal anterior. Ventana de planificación conservadora: desde 09:00, fuera antes de 16:45, inicio máximo 14:15 para 2.5 horas. La apertura concreta de Édouard-Lartet sigue pendiente. Ascensor del 34 rue de Lyon fuera de servicio según ficha municipal. No cruzar barreras; señales locales mandan.

## Qué se comprobó
Direcciones comerciales contrastadas con sus fuentes oficiales; puntos geocodificados separados de puntos sobre vía peatonal; acceso y niveles de la Coulée contrastados con geometría OSM y secuencia municipal; traza revisada para retirar calles paralelas, entrada de metro, punto dentro de Notre-Dame y antiguos puntos fuera de la vía. GPX/XML, coordenadas GeoJSON, índices de maniobra y límites de París comprobados.

Las distancias proceden de Valhalla peatonal, con consultas guardadas. En Miga se usó explícitamente `ignore_oneways:true` para corregir el rodeo provocado por sentidos únicos genéricos: no se usó `ignore_access`, ni se aceptó circulación por calles privadas. Esa opción debe revisarse si se reutiliza para una ruta distinta; no es una configuración global del portfolio.
Rumbo se calculó en dos peticiones por el límite de diez puntos del servicio, con el mismo punto de unión en Reuilly. La suma de salidas redondeadas puede diferir una milésima entre resumen y piernas: no fabricar precisión mayor.

## Evidencia reproducible y fuentes
[Hilo: peticiones y respuestas](02.evidence.json) · [Ruta 16: peticiones, respuestas y accesos](16.evidence.json) · [Miga: petición y respuesta](21.evidence.json) · [Rumbo: peticiones y respuestas, incluidos conectores](22.evidence.json).
[API y opciones Valhalla](https://valhalla.github.io/valhalla/api/route/api-reference/) · [Instancia utilizada](https://valhalla1.openstreetmap.de/) · [OSM y licencia ODbL](https://www.openstreetmap.org/copyright).
[Accesos municipales Coulée](https://www.paris.fr/lieux/coulee-verte-rene-dumont-1772) · [Secuencia municipal del paseo](https://www.paris.fr/pages/la-coulee-verte-rene-dumont-l-endroit-ideal-pour-une-rando-urbaine-36101).
Las direcciones de tiendas se respaldan en [ruta 21](../21_paris_popular_flavours.md). Las posiciones de parvis/ábside son puntos de observación seleccionados sobre cartografía, no observaciones presenciales de visibilidad.

Rutas 02, 16, 21 y 22 cerradas bajo [Definition of Done](../DEFINITION_OF_DONE.md): incertidumbres del día con alternativas explícitas y revisión externa posterior. La ruta 05 utiliza el conjunto de navegación independiente enlazado a continuación. No se ha simulado aceptación externa ni inspección presencial.

## 05 — Cruce: Republic and Representation
**DONE — 05-v10-20261005.** 6.244 km base, 6.485 km with arrival/return;3–3½h. [Canonical](../05_paris_of_republic.md) · [instructions](05_navigation.md) · [operations](05_access_operations.md) · [GPX](05.gpx) · [15 independent additional tracks](05.variants.gpx) · [standalone GeoJSON](05.geojson) · [JSON](05.operations.json) · [raw evidence](05.evidence.json). V0–V5, travel-day checks and subsequent external review explicit. Combined manifest/GeoJSON retain previous scope; standalone05 files control this route.
