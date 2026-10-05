# Ruta 16 — Navegación fija

Cruce · **16-v10-20261005** · revisada 2026-10-05. [Ficha](../16_cinema_paris.md) · [operaciones y DoD](16_access_operations.md) · [JSON](16.operations.json). Narrador Aster; coda Noctámbulo.

## Elección de archivo y distancia

[16.gpx](16.gpx) contiene **un track**, `16_nucleo_Champo_Pathe`: Champo → Filmothèque → portal norte Saint-Étienne → Pathé, **2.555 km**. [16.variants.gpx](16.variants.gpx) contiene **16 tracks independientes**; no es un circuito ni una invitación a recorrerlos todos. V1/V3 conservan la línea del núcleo; V2/V4/V5/V6 usan los tracks indicados abajo. [GeoJSON propio](16.geojson), [manifest conjunto](manifest.json) y [evidencia reproducible](16.evidence.json) guardan la misma versión.

Llegada Cluny 0.164 km + núcleo 2.555 km + salida Les Gobelins 0.217 km = **2.936 km de superficie**. Galería estimada 0.1–0.3 km interior aparte, sin levantamiento. Coda 0.505 km + llegada Louvre–Rivoli 0.259 km + salida Pont Neuf 0.148 km = **0.912 km**. No existe track de transporte ni unión continua Pathé–Louvre.

Las tres cifras decimales reproducen salidas del motor, sin certificar precisión de un metro. El resumen de cada recorrido y sus piernas se publican por separado: la suma puede diferir 0.001 km en el núcleo/coda y 0.004 km en las seis piernas del conector Jean Calvin. Se conserva el resumen del recorrido para los totales, sin fabricar precisión adicional. GPX guarda una línea; necesita app compatible y no proporciona avisos de giro por sí solo. Maps recalcula: sus enlaces son ayudas, no sustituyen la traza elegida. Señales, pasos y barreras reales prevalecen.

## Coordenadas de llegada/observación

| Punto | Latitud, longitud WGS84 | Acceso/posición | Mapa |
|---|---|---|---|
| C01 — Champo, esquina Écoles/Champollion | 48.85001, 2.343145 | Acera ante 51 rue des Écoles; no entrar en la sala. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.85001%2C2.343145) |
| C01b — Filmothèque, 9 rue Champollion | 48.84951, 2.342795 | Comparación dentro de A01; no nueva biografía. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.84951%2C2.342795) |
| C02 — Portal norte, place de l’Abbé-Basset | 48.846777, 2.347878 | Observación desde plaza; no portal principal del Panthéon, umbral o escalera. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.846777%2C2.347878) |
| C03 — Pathé, 73 avenue des Gobelins | 48.83339, 2.354433 | Acceso por avenue des Gobelins; no entrada de investigadores o Pathé Les Fauvettes. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.83339%2C2.354433) |
| Llegada — Cluny–La Sorbonne, Saint-Germain/Saint-Michel | 48.851267, 2.343361 | Extremo superior en superficie; no andén ni fondo de escalera. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.851267%2C2.343361) |
| Salida — Les Gobelins, rue Le Brun | 48.835102, 2.353237 | Pavimento en superficie junto a la boca, antes de bajar. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.835102%2C2.353237) |
| B01 — Cour Carrée, junto a la fuente | 48.86049, 2.33868 | Lado de la fuente sobre el pavimento; no borde de fuente ni interior del museo. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.86049%2C2.33868) |
| Control — rue des Prêtres-Saint-Germain-l’Auxerrois | 48.859312, 2.340997 | Control del recorrido a nivel de calle; no bajada a ribera. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.859312%2C2.340997) |
| B02 — rue du Pont-Neuf, tramo sur | 48.8591073, 2.3430364 | Acera occidental cartografiada OSM 1162926784; fuera del acceso al parking. No tapa de rescate autenticada. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.8591073%2C2.3430364) |
| Llegada coda — Louvre–Rivoli, Rivoli/Amiral de Coligny | 48.860762, 2.340922 | Pavimento exterior, antes de escaleras. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.860762%2C2.340922) |
| Salida coda — Pont Neuf, quai du Louvre | 48.858666, 2.342385 | Boca en superficie, nivel superior; no ribera ni escalera inferior. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.858666%2C2.342385) |
| B01 V5 — colonnade, exterior place du Louvre | 48.86019, 2.34032 | Acera pública exterior si patio cerrado; sin atravesar puerta bloqueada. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.86019%2C2.34032) |
| WC — 75b rue Monge | 48.843136, 2.352094 | Fila municipal: en servicio, 24 h; inventario no confirma estado en vivo. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.843136%2C2.352094) |
| Control — Pot de Fer / Tournefort | 48.84285, 2.348196 | Fija un desvío sin pasaje cubierto. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.84285%2C2.348196) |
| Control — Tournefort / Lhomond / Jean Calvin | 48.841678, 2.348235 | Acceso occidental a Jean Calvin, antes del tramo cubierto oriental. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.841678%2C2.348235) |
| WC alternativo — 8 rue Jean Calvin | 48.841645, 2.348701 | Fila municipal: en servicio, 24 h. Llegada por Tournefort/Lhomond y tramo occidental de Jean Calvin. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.841645%2C2.348701) |
| WC coda — 37 rue Berger | 48.862117, 2.343749 | Fila municipal: en servicio, 06–22 h, junto a borde sur de Les Halles. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.862117%2C2.343749) |
| Control — Geoffroy-Saint-Hilaire / Buffon | 48.841177, 2.355964 | Esquina de calles públicas, fuera del Jardin des Plantes. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.841177%2C2.355964) |
| Refugio — bibliothèque Buffon, 15 bis rue Buffon | 48.842573, 2.361884 | Entrada por rue Buffon; horario y WC/asientos publicados. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.842573%2C2.361884) |
| Escape — Cardinal Lemoine | 48.846535, 2.351915 | Pavimento junto a boca; no continuidad subterránea en GPX. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.846535%2C2.351915) |
| Escape — Place Monge | 48.84304, 2.352105 | Boca en superficie junto al servicio WC. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.84304%2C2.352105) |
| Escape — Censier-Daubenton, rue Monge | 48.840616, 2.351629 | Boca en superficie; servicio del metro se comprueba el día. | [Abrir](https://www.google.com/maps/search/?api=1&query=48.840616%2C2.351629) |

## Todos los tramos del núcleo

| Tramo | Instrucción | km | Enlace dinámico |
|---|---|---:|---|
| Champo → Filmothèque | Bajar por rue Champollion hasta el 9; detenerse al lado de la puerta, sin impedir entrada. | 0.064 | [Maps](https://www.google.com/maps/dir/?api=1&origin=48.85001%2C2.343145&destination=48.84951%2C2.342795&travelmode=walking) |
| Filmothèque → portal norte | Continuar al sur por Champollion hasta place de la Sorbonne. Tomar Victor-Cousin, girar al este por Cujas, cruzar Saint-Jacques por el paso y seguir hacia Valette. Continuar junto al borde norte de place du Panthéon, tomar Montagne-Sainte-Geneviève y llegar a la pequeña place de l’Abbé-Basset. Mirar el portal norte desde la plaza; no subir escalones. | 0.659 | [Maps](https://www.google.com/maps/dir/?api=1&origin=48.84951%2C2.342795&destination=48.846777%2C2.347878&travelmode=walking) |
| Portal norte → Pathé | Salir por rue Saint-Étienne-du-Mont hacia Descartes; bajar por Descartes/Thouin y Mouffetard. Girar a la izquierda por Lacépède, luego a la derecha por Monge. Mantenerse en las aceras de Monge y avenue des Gobelins, cruzando por pasos señalizados. Terminar ante la entrada 73, en la acera oriental. No doblar hacia una supuesta entrada trasera en Véronèse ni entrar en Les Fauvettes. | 1.831 | [Maps](https://www.google.com/maps/dir/?api=1&origin=48.846777%2C2.347878&destination=48.83339%2C2.354433&travelmode=walking) |

Champo y Filmothèque forman A01: la marcha entre ambos está incluida, la comparación no añade otro núcleo. El portal es un contraste conectivo, no promesa de rodaje ni acceso religioso. La entrada Pathé fijada está en 73 avenue des Gobelins; el pin heredado situado al noroeste fue descartado.

## Llegada, salida y coda

| Track / tramo | Acción por calles y niveles | km |
|---|---|---:|
| `Llegada_Cluny_Champo` | Desde el pavimento superior junto a Saint-Germain/Saint-Michel, bajar por acera oriental de boulevard Saint-Michel y girar al este por rue des Écoles hasta Champollion. No comenzar desde andén o escalera subterránea. | 0.164 |
| `Salida_Pathe_LesGobelins` | Desde 73 avenue des Gobelins subir por acera oriental de la avenue hasta rue Le Brun. Detenerse en la boca de metro, antes de bajar. | 0.217 |
| `Llegada_coda_LouvreRivoli` | Desde la boca exterior Rivoli/Amiral-de-Coligny seguir rue de Rivoli al oeste hasta el paso público norte de Cour Carrée. Atravesarlo sólo abierto y llegar al lado de la fuente. Este conector entra por el norte; el núcleo de coda sale por el este. Paso o patio cerrado: usar llegada V5, sin forzar la puerta. | 0.259 |
| `Coda_Belphegor_Eleonore` primera pierna | Desde fuente, tomar el paso oriental del patio abierto hacia place du Louvre. Seguir al sur por pavimento público y girar al este por rue des Prêtres-Saint-Germain-l’Auxerrois hasta el control, siempre en nivel superior. | 0.265 |
| `Coda_Belphegor_Eleonore` segunda pierna | Continuar por Prêtres, girar al sur por place de l’École, seguir su conexión con quai du Louvre/rue de la Monnaie por los pasos. Ir hacia el encuentro de rue de la Monnaie/rue du Pont-Neuf, luego subir brevemente por acera occidental de rue du Pont-Neuf al punto B02. No entrar al parking Rivoli ni bajar al río. | 0.239 |
| `Salida_coda_PontNeuf` | Desandar por acera occidental de rue du Pont-Neuf, girar hacia quai du Louvre y boca de Pont Neuf. Nivel superior; finalizar antes de bajar. | 0.148 |
| `Llegada_V5_colonnade` | Desde Louvre–Rivoli bajar por Amiral-de-Coligny hasta acera pública de place du Louvre, frente a la colonnade. | 0.102 |
| `V5_coda_sin_patio` | Entrada alternativa B01 exterior; bajar por place du Louvre hasta Prêtres y continuar por la misma segunda pierna de coda. Pérdida: envoltura del patio. Salida Pont Neuf separada. | 0.397 |

B02 es una posición interpretativa sobre la **calle** identificada por Ville de Paris. No certifica tapa de rescate, animales actuales ni colonia. La posición final se aparta de la rampa del parking, que el router seleccionaba con otro pin. Biblioteca/refugio interior de la coda: ninguno incorporado. Comprobación de patio, horarios y traslado M7/M1 con respuestas: [operaciones](16_access_operations.md#coda-y-traslado-desde-pathé).

## Variantes y servicios

| Track | Instrucciones y activación | km |
|---|---|---:|
| `V2_sin_portal` | Champo → Filmothèque; después Sorbonne/Victor-Cousin, cruce de Cujas, Soufflot/Malebranche y Saint-Jacques, Amyot/Vauquelin, Claude-Bernard y avenue des Gobelins al 73. Seguir GPX y pasos; no entrar a campus. Omite portal. WC Monge/Buffon no están en esta traza; no servicio intermedio garantizado. | 2.350 |
| `V4_carteleras_salida` | A01 ante ambas carteleras, regresar por Champollion/Écoles/Saint-Michel al pavimento de Cluny. Es una reducción si Pathé está cerrada, no realización de núcleo íntegro. | 0.293 |
| `V6_Pathe_directo` | Desde la boca exterior Les Gobelins bajar por avenue des Gobelins, acera oriental, hasta el 73. A03 real; si Pathé no admite, terminar. Regreso por track Salida Pathé separado. | 0.217 |
| `WC_JeanCalvin_ida_vuelta` | Desde 75b rue Monge; subir por Monge y Lacépède, enlazar Mouffetard/Blainville y bajar por Tournefort hasta Jean Calvin. Girar al este por su tramo occidental al WC. Regreso por Tournefort, Pot de Fer, Mouffetard, Ortolan y Place Monge. No usar Passage des Postes ni el tramo oriental cubierto de Jean Calvin. Añadir 25–35 min más espera. | 1.245 |
| `Refugio_Buffon_ida_vuelta` | Desde 75b rue Monge, Larrey, place du Puits-de-l’Ermite, Georges Desplas y Daubenton hasta Geoffroy-Saint-Hilaire. Bajar a esquina Buffon y girar al este por **rue Buffon exterior** hasta 15 bis; volver por calles equivalentes. Evitar puertas del Jardin, Passage de la Girafe y allées. Añadir 60–75 min incluidos 20–30 min de refugio; si compromete film, V1. | 1.936 |
| `WC_Berger_ida_vuelta` | Desde Louvre–Rivoli subir por rue du Louvre hasta Berger, girar al este hacia el 37, junto al borde sur de Les Halles. Volver por Berger/Sauval, Saint-Honoré, rue du Louvre/Bailleul y Rivoli. No incluye WC del museo ni ribera. | 0.756 |
| `Escape_CardinalLemoine` | Desde el portal norte salir hacia Descartes/Clovis, seguir Clovis al este y Cardinal-Lemoine hasta boca exterior. | 0.397 |
| `Escape_PlaceMonge` | Desde 75b rue Monge seguir al pavimento contiguo de la boca Place Monge. | 0.022 |
| `Escape_CensierDaubenton` | Desde 75b rue Monge bajar por la acera de Monge a la boca Censier-Daubenton. | 0.303 |

En JSON y GPX, los controles Tournefort/Buffon no son nuevas paradas narrativas. Elegir un conector de servicios sólo si hace falta y está operativo. WC marcados «en servicio» por inventario no se consideran inspeccionados en vivo. Si ningún WC/refugio es utilizable ante necesidad, terminar; no extender el paseo en busca de una promesa inexistente. Escaleras interiores de metro y accesibilidad universal no certificadas.

## Evidencia y comprobación

[16.evidence.json](16.evidence.json) conserva peticiones completas Valhalla, respuestas con polilíneas de precisión 6, geocodificación cruda, registro OSM de aceras/entradas y candidatos rechazados. [16.operations.json](16.operations.json) conserva fuentes primarias, fecha, horarios WC/Buffon, costes, grupos de galería, variantes y reacción a cada comprobación del día.

Revisión frente a cartografía OSM: esquina Champo, portal **norte**, fachada 73 avenue des Gobelins, acceso oriental del patio, nivel alto en coda, posición B02 fuera del parking, calles exteriores de Buffon y límites superiores de bocas de metro. No visita ni levantamiento presencial. Única excepción `ignore_oneways:true`: conector Jean Calvin, tras revisar calles peatonales públicas; jamás `ignore_access`, ni opción global para otras rutas.

GPX/XML, JSON, coordenadas, continuidad, índices de maniobra, distancias, enlaces locales y sincronización de versiones comprobados en esta entrega. Los extremos de cálculo pueden desplazarse respecto al punto de observación hasta 10.1 m: recorrer esos últimos metros sobre el pavimento público, sin señalarlos como una puerta histórica exacta. Esta tolerancia cartográfica no equivale a precisión de campo. Datos 02/21/22 se preservan. Condiciones futuras de puerta/obras/servicio se comprueban el día con variantes ya entregadas. Revisión externa posterior a DONE, aún no realizada.

© OpenStreetMap contributors, [ODbL](https://www.openstreetmap.org/copyright). [API Valhalla](https://valhalla.github.io/valhalla/api/route/api-reference/). Los enlaces de Maps pueden recalcular; utilizar GPX e instrucciones si devuelven otra calle o nivel.
