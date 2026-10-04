# 02 — Diablos y milagros: pactos con lo invisible

> **DONE — versión 02-v10-20261004, revisada el 4 de octubre de 2026.**  
> Esta es la versión elegida para el viaje y cumple los criterios de aceptación bajo control del agente.  
> Comprobaciones del día: circulación y barreras del parvis; visibilidad de Flamel y acceso al frente/cabecera de Saint-Médard; estado de los baños; apertura del refugio elegido; meteorología y servicio de transporte; reserva y admisión de Sainte-Chapelle solamente si se elige ese desvío. Cada fallo tiene respuesta en [operaciones y variantes](navigation/02_access_operations.md).  
> Variantes operativas: V0, V1, V2, V3 y V4, documentadas y enlazadas allí.  
> Revisión externa por varios modelos y feedback: posterior al cierre; no realizada.

## Ficha elegida

| Campo | Decisión |
|---|---|
| Tema / tesis | El París anterior a la Revolución dio una dirección física a la oración, al pacto con el Diablo y al milagro disputado. El recorrido va de la piedra que pide recordar a los muertos al cementerio donde los vivos esperaban recibir ayuda. |
| Voz | **Hilo narra. Cruce produce:** diseño, investigación, selección, guiones, navegación y operaciones. |
| Vibe | Curiosidad, astucia y desasosiego; una leyenda bien contada entre dos historias humanas. |
| Inicio | Fachada de Flamel, **51 rue de Montmorency**, 48.863600, 2.353130. |
| Final | Exterior oriental de Saint-Médard, desde **rue Censier / rue de Candolle**, 48.839900, 2.351150. |
| Base fija | **3.136 km**, aproximadamente **3.14 km**. Exterior gratuito; tres capítulos y cuatro puntos de llegada. No se exige ningún interior ni parque. |
| Duración | **2–2.5 horas**, incluida narración, observación, cruces y descanso. |
| Franja elegida | Día: comenzar **09:00–14:00** y terminar **como máximo a las 16:30**. Horas locales de París. |
| Coste / reservas | Base **€0**, sin reserva. Comida, transportes y Sainte-Chapelle son partidas separadas. |
| Transporte asumido | Llegar en metro a Rambuteau (L11), salida 4 rue du Grenier Saint-Lazare; alternativa salida 1 rue Beaubourg. Regreso desde Censier-Daubenton (L7). Servicio y accesos sujetos a comprobación del día. No hay alojamiento ni transporte reservado por esta entrega. |

La distancia responde a tres historias, no a un mínimo de kilómetros. El tramo de 1.666 km hacia Saint-Médard merece el desplazamiento porque transforma el cuento de un alma salvada en un conflicto entre cuerpos, creencias y autoridades. Las calles comerciales cambian la escala del relato; no reciben paradas artificiales.

**Distancias separadas:** acceso desde Rambuteau y salida al metro se registran en [operaciones](navigation/02_access_operations.md). El desvío Sainte-Chapelle añade **0.789 km exteriores**; base con ese desvío = **3.925 km**, antes de circulación interior. Los movimientos voluntarios para mirar detalles pueden añadir hasta unos 100 m; no están fingidos dentro de la medición del motor. El desplazamiento desde/hacia NOC, las comidas fuera del recorrido y cualquier otro bloque del día quedan fuera de 3.136 km.

## Orden y navegación

| Orden | Llegada WGS84 (latitud, longitud) | Qué se hace |
|---|---|---|
| 1. Flamel | 48.863600, 2.353130 | Ver la fachada desde la acera; escuchar el primer guion sin ocupar la entrada del restaurante. |
| 2. Notre-Dame | 48.853180, 2.348750 | Parvis occidental. Orientarse por los tres portales; Sainte-Anne está a la derecha al mirar la fachada. El punto lleva al espacio público, no a una puerta ni a una cola de entrada. |
| 3a. Saint-Médard, frente | 48.840090, 2.349830 | Situar la iglesia en Mouffetard; comenzar el guion del desenlace. |
| 3b. Saint-Médard, cabecera | 48.839900, 2.351150 | Reanudar tras el desplazamiento de 127 m y terminar junto a la cabecera oriental. |

| Tramo fijo | Instrucciones utilizables | km |
|---|---|---:|
| Flamel → Notre-Dame | Salir hacia el este por Montmorency; girar a la derecha en Beaubourg y seguir al sur por Beaubourg/Renard. En Hôtel de Ville, usar pasos señalizados para llegar a Pont d’Arcole. Cruzarlo, seguir rue d’Arcole y llegar al punto del parvis. | 1.343 |
| Notre-Dame → frente Saint-Médard | Desde el parvis, tomar Pont au Double por arriba, a nivel de calle. Continuar por Lagrange; al llegar a Saint-Germain, tomar Monge hacia el sur. Girar a la derecha en Daubenton hacia Mouffetard. | 1.666 |
| Frente → cabecera | Volver por Daubenton hacia el este; girar a la derecha en rue de Candolle y llegar al exterior de rue Censier, frente a la cabecera. No entrar en salas parroquiales ni en el aparcamiento. | 0.127 |

Seguir aceras y pasos peatonales. Las expresiones genéricas del motor «hacia la calzada» no autorizan caminar entre coches. Esta base no usa riberas inferiores, escaleras de acceso al río ni pasajes privados.

[GPX base fijo](navigation/02.gpx) · [GPX de variantes y conectores](navigation/02.variants.gpx) · [coordenadas y maniobras](navigation/manifest.json) · [GeoJSON](navigation/routes.geojson) · [peticiones y respuestas del motor](navigation/02.evidence.json) · [operaciones legibles por máquina](navigation/02.operations.json).

[Maps: Flamel → Notre-Dame](https://www.google.com/maps/dir/?api=1&origin=48.8636%2C2.35313&destination=48.85318%2C2.34875&travelmode=walking) · [Notre-Dame → Saint-Médard](https://www.google.com/maps/dir/?api=1&origin=48.85318%2C2.34875&destination=48.84009%2C2.34983&travelmode=walking) · [frente → cabecera](https://www.google.com/maps/dir/?api=1&origin=48.84009%2C2.34983&destination=48.8399%2C2.35115&travelmode=walking). Maps recalcula; el GPX conserva la elección.

**Posiciones de observación resueltas:** Flamel se mira desde enfrente, sin entrar en el restaurante. En Notre-Dame, mantener el punto de llegada como referencia y aproximarse al hierro solamente por espacio permitido; las tres puertas se identifican sin exigir tocar los herrajes. La puerta de Sainte-Anne es un objeto de referencia, no un destino navegable a través de barreras. La [actualización municipal del 21 de septiembre de 2026](https://www.paris.fr/pages/les-abords-de-notre-dame-vont-faire-peau-neuve-17332) confirma que el pequeño parvis ante los portales y rue du Cloître-Notre-Dame están terminados; el resto de obras continúa. En Saint-Médard, los dos puntos permanecen en calle pública: se compara el entorno oriental con el jardín meridional sin localizar una tumba, una puerta de 1732 o un cementerio visitable. Los detalles de aproximación y los límites del día tienen respuesta en V2/V3/V4.

Sainte-Chapelle queda fuera de la base y se elige **después** del guion de Notre-Dame: ida y vuelta al mismo punto, sin repetir ese guion. **Tour Saint-Jacques no es una parada ni un hito de paso prometido.** Cour des Miracles tampoco se incorpora.

## Tiempo y franjas

| Componente de la base | Presupuesto |
|---|---:|
| Movimiento: 3.136 km a ritmo conservador de planificación de 3.3 km/h | 57 min |
| Tres guiones, lectura calmada; todavía sin ensayo de voz grabado | 14–17 min |
| Mirar fachada, portales, entorno y cabecera | 20–25 min |
| Descanso | 15 min |
| Cruces, congestión y ajustes a la circulación permitida | 10–20 min |
| Total de planificación | 116–134 min; reservar hasta 150 min |

No se exige hacer cola para ningún interior. Un ejemplo es 09:30 Flamel → alrededor de 10:10 Notre-Dame → alrededor de 11:10 Saint-Médard, con final hacia 11:30–12:00. Son márgenes de planificación, no citas.

La puesta de sol entre el 1 y el 15 de noviembre va aproximadamente de 17:30 a 17:10 ([tabla astronómica](https://www.timeanddate.com/sun/france/paris?month=11&year=2026)); el límite de 16:30 deja margen y evita depender de luz artificial para inscripciones.

| Franja | Nota / 10 | Justificación |
|---|---:|---|
| MORNING | 8 | Luz para letras e hierro, calles activas y menos fatiga. El refugio Buffon solo abre por la mañana martes, miércoles y sábado; ninguna visita interior es necesaria. |
| AFTERNOON | 8 | Se conservan los detalles y mejora la disponibilidad del refugio. Inicio máximo 14:00 para acabar con luz. |
| EVENING | 7 | El cuento del Diablo gana contraste junto a la catedral y las calles siguen vivas; Flamel necesita empezar con luz. No se garantiza iluminación de cada herraje ni banco libre. Si se elige atardecer: salir a las 15:30 y terminar hacia las 18:00, sin Sainte-Chapelle; final máximo 18:30. |
| NIGHT | 5 | El sitio conserva fuerza narrativa, pero se pierden letras, detalle material y refugios. El conflicto de Saint-Médard gana poco a medianoche. No es la versión elegida para el viaje. |

## Guiones preparados para el lugar

Los tres núcleos conservan la narración completa de la revisión anterior. Se han leído frente a [las dos anclas de calibración](mystery_calibration_anchors.md): instrucción física, escena humana, cambio de registro, regreso al lugar y desenlace que transforma las paradas anteriores. No se ha simulado escucha, inspección presencial ni evaluación externa.

### 1. Casa de Nicolas Flamel — CORE

**Why selected:** The surviving inscription contrasts documented concern for dead souls with a later legend of an alchemist who could overcome death.

**Explainer — narración presencial en español:**

Ponte donde puedas ver la fachada sin cerrar el paso ni quedarte delante de la puerta del restaurante. Antes de buscar el nombre de Flamel, busca las letras que corren sobre la planta baja. Si la luz lo permite, encuentra la fecha: 1407. Luego baja la mirada hacia las pequeñas figuras de los pilares. Hay personajes, rollos, ángeles. No hace falta descifrar todavía nada. Basta con notar que esta casa quiere decir algo a quien pasa por delante.

Empecemos por lo que podemos documentar. Nicolas Flamel encargó esta casa para alojar a personas pobres. La inscripción establece una obligación de oración por los difuntos. Sus habitantes debían rezar un padrenuestro y un avemaría. La piedra hace público un intercambio: alguien proporciona un lugar donde vivir; quienes reciben esa ayuda recuerdan a los muertos. El edificio responde así a dos necesidades que comparten una dirección: encontrar amparo durante la vida y recibir ayuda después de ella.

Quédate un momento con esa imagen. Una vivienda, una obligación diaria, unas palabras que se mantienen cuando las personas ya han desaparecido. El nombre de Flamel nos lleva fácilmente hacia un laboratorio secreto, pero el testimonio que tenemos delante habla de caridad y de oración. Para quienes vivían aquí, la relación con lo invisible tenía una práctica concreta, repetida por la mañana y por la tarde.

Ahora cambiamos de registro. Dejamos la historia documentada de la casa y entramos en la leyenda de Flamel. Ese segundo personaje conoce la piedra filosofal: el secreto capaz de transformar los metales y asociado, en la imaginación alquímica, con vencer los límites de la vida. Su nombre quedó ligado a textos alquímicos después de su muerte. En 1612 apareció una obra especialmente influyente que pretendía explicar sus figuras misteriosas. La Biblioteca Nacional de Francia lo registra como autor supuesto. La asociación tenía antecedentes, de modo que aquella publicación no fue un instante mágico en el que alguien inventó toda la leyenda de golpe.

Lo interesante es el desplazamiento. Un hombre conocido por sus fundaciones podía convertirse, para lectores posteriores, en alguien cuya riqueza necesitaba una explicación extraordinaria. Las imágenes religiosas podían leerse como señales de otro conocimiento. La misma fachada permitía una lectura distinta según lo que cada visitante esperaba encontrar. Nada de lo investigado demuestra que esta dirección albergara su laboratorio o un tesoro escondido.

Mira otra vez las figuras. Si te parecen enigmáticas, conserva esa impresión; no necesitamos asignarles un código que no conocemos. Lo que sí podemos leer es el contraste entre los dos Flamel: el fundador que pide recordar a los difuntos y el personaje legendario al que se atribuye una salida de la muerte. La leyenda no elimina la casa real. Se instala sobre ella, y consigue que hasta una instrucción de oración parezca una pista.

Al irnos, deja la fachada en su tamaño verdadero: una casa en una calle donde siguen pasando vecinos y clientes. Nuestra primera puerta hacia lo invisible ha sido bastante modesta. Guarda esta diferencia para las siguientes: aquí, el recuerdo de los muertos quedó escrito en piedra; la promesa de no morir la pusieron otros.

**Notice:** Gothic lettering, dated frieze, pillar figures/scrolls/angels, restaurant frontage. Do not assign secret meanings to carvings without evidence.  
**Next:** Take the selected Beaubourg/Renard surface trace to Pont d'Arcole and the western parvis. Do not announce passing Tour Saint-Jacques in this version.  
**Access:** street exterior, no admission; restaurant is private commercial space. Daylight helps inscription legibility.

**Evidence:** [Ministry of Culture monument record](https://pop.culture.gouv.fr/notice/merimee/PA00086213); [City charity/building account](https://www.paris.fr/pages/une-balade-a-velo-a-la-decouverte-des-maisons-d-artistes-ca-vous-dit-26974); [BnF 1612 publication](https://catalogue.bnf.fr/ark%3A/12148/cb304398122); [University of Rouen attribution study](https://publis-shs.univ-rouen.fr/ceredi/2124.html); [Carnavalet pillar record](https://www.parismuseescollections.paris.fr/en/node/158666); [restaurant operational site](https://auberge.nicolas-flamel.fr/). Rouen full page failed retrieval; substantive excerpts and independent BnF record support cautious publication-history wording.

### 2. Las puertas del Diablo en Notre-Dame — CORE

**Why selected:** Visible, astonishing metalwork became a contract story in which the Devil loses to his own terms.

**Explainer — narración presencial en español:**

Busca un lugar del atrio desde el que puedas ver las tres entradas occidentales sin bloquear la cola. Mira primero la de tu derecha: el portal de Santa Ana. Acércate solamente si la circulación lo permite. Nuestra historia está en el hierro que se extiende sobre la madera. Sigue con la vista una de sus ramas, sus curvas, la forma en que el trabajo ocupa la hoja de la puerta. Durante un momento deja arriba las torres. La pregunta está mucho más cerca del suelo.

Lo que vemos tiene una historia material. En estas puertas se conserva una extraordinaria obra de hierro medieval; las hojas de Santa Ana sobrevivieron al incendio de 2019. Pero su virtuosismo también tuvo otra vida. La gente miró un trabajo humano tan elaborado y le dio una explicación en la que intervenía alguien que preferiríamos no encontrar a la entrada de una iglesia.

Ahora entramos expresamente en el terreno de la leyenda. La versión que vamos a contar quedó recogida por Viollet-le-Duc en el siglo XIX. En ella, un cerrajero llamado Biscornet recibe un encargo que lo desborda: realizar los herrajes de las tres entradas. El Diablo le ofrece ayuda. El precio es su alma, y la condición es terminar el trabajo. No estamos reconstruyendo un contrato que conserve un archivo; estamos siguiendo las reglas de un cuento que París puso sobre estas puertas.

Dos entradas quedan resueltas. Entonces aparece una dificultad que no estaba en el metal. Por la puerta central pasa el Santísimo Sacramento. El Diablo no puede completar esa parte de la obra. Ha aceptado una comisión de tres puertas y solo puede entregar dos. La leyenda lo derrota con la condición que él mismo había aceptado: si falta una parte, el trato no queda cumplido. Biscornet conserva su alma.

Vuelve a mirar las tres entradas juntas. Esa disposición convierte el relato en algo que puedes seguir con los ojos: dos trabajos, un obstáculo, una salvación. El miedo a perder el alma tiene una solución casi administrativa. El personaje humano no necesita derrotar al Diablo por fuerza; sobrevive a través de una cláusula. Esa mezcla de terror y astucia es parte de lo que vuelve memorable la historia.

Pero tenemos que hacer otro cambio de registro y regresar al hierro. El propio Viollet-le-Duc señaló que la obra medieval era anterior a la época atribuida a Biscornet. Conservar el cuento no obliga a aceptar su autoría. Sabemos que el relato circulaba cuando aquel autor lo recogió; eso no demuestra que lo contaran ya los artesanos medievales. La incertidumbre nos permite ver cómo un objeto verdadero acaba sosteniendo una biografía imaginada.

Hay además un remate humano. Durante la restauración del siglo XIX, Pierre Boulanger realizó los herrajes de la puerta central. Un herrero con nombre documentado hizo el trabajo que, dentro del cuento, había detenido al Diablo. Mira la puerta del centro una última vez. Podemos admirar la habilidad del artesano y escuchar la leyenda sin confundirlas.

En la casa de Flamel, la escritura prometía recuerdo para los muertos. Aquí, el relato encuentra una manera de salvar un alma amenazada. Al cruzar ahora el río, iremos hacia un lugar donde quienes creían haber recibido ayuda sobrenatural tuvieron que enfrentarse a autoridades de carne y hueso. Antes de irte, quédate con esta imagen: el Diablo puede hacer dos puertas magníficas, pero la tercera lo deja sin cobrar.

**Notice:** right-hand Sainte-Anne door, spreading metalwork against wood, three western portals, central ironwork.  
**Next:** Cross the river and walk into an ordinary neighbourhood where claimed miracles provoked a much less playful argument.  
**Access:** exterior west forecourt; entry queues may restrict close inspection. Do not block movement or promise unrestricted door access. Cathedral entry is free and optional, not part of core timing.

**Evidence:** [Lyon municipal library, citing Dany Sandron](https://www.guichetdusavoir.org/question/voir/134559); [Viollet-le-Duc historical account, volume V](https://www.terc.hu/download/uploads/viollet5.pdf); [CMN educational dossier](https://www.paris-conciergerie.fr/enseignants/mediatheque-espace-enseignant/ressources-pedagogiques-en-et-cs/dossier-thematique-les-tours-de-notre-dame); [cathedral admission](https://www.notredamedeparis.fr/en/visit/reservation-free/). The CMN dossier's attribution is less cautious than Viollet-le-Duc; do not repeat it as established authorship.

### 3. Saint-Médard — CORE / desenlace

**Why selected:** A claimed miracle gets a precise public destination; closing its gate changes where belief happens, rather than ending it.

**Explainer — narración presencial en español:**

Detente junto a la iglesia, en un punto donde puedas verla dentro de la vida del barrio. Hay comercio, peatones, personas que vienen por motivos completamente ordinarios. Conserva esa escala mientras escuchas lo que ocurrió aquí. El último lugar de nuestra ruta tenía que ser una dirección a la que alguien pudiera acudir esperando que su vida cambiara.

François de Pâris, un diácono, murió en 1727. Su sepultura se convirtió en un destino de devoción. Visitantes afirmaban haber recibido curaciones. Más adelante, algunos experimentaban convulsiones. Esos testimonios, las reuniones que suscitaron y el conflicto público que provocaron pertenecen a una historia documentada. También conservamos publicaciones de partidarios que defendían los milagros. Lo que esas fuentes permiten establecer es que hubo personas que los proclamaban; la causa sobrenatural de las curaciones seguía siendo una afirmación disputada.

Hagamos explícito ese cambio. Cuando decimos que alguien fue curado por intercesión del diácono, entramos en el registro de la creencia de sus seguidores. Para ellos, lo ocurrido podía expresar un favor divino. Los opositores hablaban de falsos milagros o de desorden. La disputa estaba atravesada por el conflicto religioso del jansenismo. La misma experiencia corporal podía recibir interpretaciones opuestas, y cada interpretación concedía autoridad a unas personas y se la quitaba a otras.

Ahora muévete, si las calles lo permiten, hacia la cabecera oriental por el entorno de rue Daubenton y rue de Candolle. No vamos a localizar una tumba que puedas visitar. La monografía histórica distingue un pequeño cementerio junto a esta parte de la iglesia, asociado a los episodios, del cementerio mayor al sur. Este último fue sustituido por el espacio que hoy se llama Square Miss.Tic. Mira la diferencia entre ambas zonas y evita convertir el parque agradable que tenemos delante en un escenario exacto que las fuentes no nos permiten señalar.

Esa ausencia importa. Para los devotos del siglo XVIII, el lugar sí tenía un centro concreto: una sepultura a la que podían aproximarse. La esperanza podía organizar un trayecto y una reunión. Un cuerpo que sufría llegaba a una dirección; después, el relato de lo ocurrido podía viajar mucho más lejos. Frente a la casa de Flamel leíamos una obligación de rezar por los muertos. Aquí encontramos personas que acudían a un muerto esperando ayuda para los vivos.

En 1732 se cerró el cementerio. Las autoridades podían impedir la entrada a un recinto. Pero las reuniones continuaron en otros lugares, y unos años después los defensores publicaron relatos ilustrados para sostener la realidad de los milagros. Una puerta cerrada no resolvía la disputa. La trasladaba de espacio y la dejaba en circulación a través de testimonios, imágenes y lecturas.

Vuelve a mirar la iglesia y el barrio. No necesitamos que sobreviva la puerta original, ni convertir una abertura tapiada en aquella puerta sin pruebas. La consecuencia está en la relación entre el lugar y lo que las personas afirmaban haber vivido. El poder podía administrar el acceso; aceptar o rechazar la experiencia era otra cuestión.

Nuestra ruta termina con esa tensión. Hemos visto una oración inscrita, una leyenda instalada en el hierro y, si entramos en la capilla, un espacio real construido alrededor de reliquias. Aquí la promesa llegó al propio cuerpo de quienes buscaban ayuda. Antes de volver a Mouffetard, deja abierta la pregunta: cuando una persona dice haber vivido un milagro, ¿quién puede cerrar la puerta de su experiencia?

**Notice:** church scale within everyday commercial streets; eastern chevet via rue Daubenton/rue de Candolle; difference from southern Square Miss.Tic. Any blocked opening is not certified as the gate closed in 1732.  
**End:** rest/food on Mouffetard or transit home. This ending supplies consequence instead of another unresolvable ghost sighting.  
**Access:** exterior works without park admission. Parish says Tuesday–Saturday 09:00–19:30, Sunday 09:00–20:00, Monday closed. Interior optional and quiet; avoid storytelling during services.

**Evidence:** [Criminocorpus contemporary 1737 defence](https://criminocorpus.org/fr/bibliotheque/doc/2361/); [Société de Port-Royal research bibliography](https://www.bib-port-royal.com/convulsionnaires.pdf); [historical parish monograph locating cemeteries](https://upload.wikimedia.org/wikipedia/commons/9/95/Saint-M%C3%A9dard_-_une_vieille_%C3%A9glise_de_Paris_%28IA_saintmedardunevi00mann%29.pdf); [official parish hours](https://www.saintmedard.org/bienvenue-2/horaires-et-coordonnees/); [City Square Miss.Tic record](https://www.paris.fr/lieux/square-miss-tic-ex-square-saint-medard-2478). Exact grave and historical gate cannot be shown. Documented crowds, controversy and closure do not authenticate supernatural cures.

### Sainte-Chapelle — OPTIONAL / desvío después de Notre-Dame

**Why selected:** A monarchy makes sacred authority overwhelming through light, hierarchy and imagery; a counterpart to the street's feared devils and claimed miracles.

**Explainer — narración presencial opcional en español:**

Antes de buscar una escena en las vidrieras, recuerda el cambio que acabas de hacer al subir. La capilla inferior servía al personal del palacio; la superior, al rey y a sus invitados distinguidos. El acceso a lo sagrado tenía una distribución social. Ahora deja que la luz haga su trabajo unos segundos, sin intentar leerlo todo.

Mira hacia la tribuna elevada del extremo oriental. Su reconstrucción posterior evoca el lugar del gran relicario. La capilla se construyó para recibir objetos venerados como reliquias de la Pasión, entre ellos la Corona de Espinas. La adquisición por Luis IX y la construcción del edificio pertenecen a la historia documentada. La autenticidad religiosa de aquellos objetos pertenece a la fe. Conviene mantener ambas afirmaciones visibles mientras miramos el mismo lugar.

El relicario original ya no está: fue destruido durante la Revolución. Tampoco encontraremos aquí la corona conservada. Sin embargo, sigue en pie la enorme disposición de imágenes que daba sentido a su presencia. Busca la vidriera oriental de la Pasión y después, con el plano de visita, la historia de las reliquias en el lado sur. Allí Luis IX entra en la secuencia de la historia sagrada. Los emblemas reales completan esa posición dentro del relato.

No vamos a descifrar cientos de escenas a distancia. Buscamos ocho conjuntos y detalles para comprender cómo funcionaba esta experiencia. Al terminar, gira hacia el rosetón occidental del Apocalipsis: el mundo también tenía un final representado. El rey y sus invitados se encontraban entre el sufrimiento de Cristo y ese destino último. La oración de la casa de Flamel cabía en una inscripción; aquí, los recursos de una monarquía levantaron un espacio entero alrededor de una creencia.

**Finite raid, eight targets:** lower chapel; change of scale in upper chapel; reconstructed reliquary tribune; eastern Passion window; southern relic-history window; royal emblems in borders; Saint Peter with keys; western Apocalypse rose. Use the official leaflet to orient, and treat distant panels as ensembles rather than promising easy detailed reading. Allow 30–40 minutes for raid plus queue/security.  
**Next:** Return by the saved out-and-back connector to the Notre-Dame arrival point, then resume Pont au Double → Lagrange → Monge → Saint-Médard. Notre-Dame's core script has already been told; do not repeat it.  
**Access/cost:** October–March 09:00–17:00, last entry 16:30. Current €16 EEA nationals/qualifying regular residents, €22 others. First Sunday in November is free: **1 November 2026** is a candidate, subject to booking availability. Enhanced Palais de Justice security; adhere to reservation time. A street-only pause is not a replacement for the interior and should be omitted if admission is skipped.

**Evidence:** [official history](https://www.sainte-chapelle.fr/decouvrir/histoire-de-la-sainte-chapelle); [official practical information](https://www.sainte-chapelle.fr/visiter/informations-pratiques/); [official glass interpretation](https://www.sainte-chapelle.fr/decouvrir/un-ensemble-de-vitraux-unique); [official visit leaflet](https://www.sainte-chapelle.fr/content/download/9827901/file/Document%20de%20visite%20Sainte%20Chapelle%20fr.pdf?inLanguage=fre-FR&version=37). The former great shrine is lost and surviving crown is elsewhere; do not promise relic viewing here.

## Operaciones y contingencias

La decisión operativa completa está en [02_access_operations.md](navigation/02_access_operations.md), con fuentes, coordenadas, rutas de salida y variantes. La base no depende de Sainte-Chapelle, de la apertura de Square Miss.Tic, de Notre-Dame por dentro ni de la reapertura de Mohammed Arkoun.

Los baños elegidos son **8 rue d’Arcole, 06:00–22:00**, y **75 bis rue Monge, 24 h**, identificados en el inventario municipal como en servicio al consultar; no se certifica su funcionamiento futuro. Refugio sentado: **Buffon, 15 bis rue Buffon**, a 0.910 km del final, solamente dentro de sus horarios y sin usarlo como refugio inmediato en un aguacero. Si ese desplazamiento resulta desagradable, usar la salida al metro de 0.076 km. Arkoun sigue excluida mientras no esté confirmada su apertura.

Comida opcional: Kayser, **8 rue Monge**, sobre el tramo hacia Saint-Médard, con límite de compra **€8** para un bocadillo/comida sencilla. Es un tope elegido, no un precio publicado. Llevar un tentempié permite omitir la compra si no hay opción dentro de ese límite. Para la base no hace falta reservar mesa ni comprar nada en el restaurante Flamel.

V0 elimina un interior o interrumpe la visita con cierre explícito; V1 evita el tramo largo con el 47; V2 empieza en Notre-Dame si Flamel es inaccesible; V3 omite el parvis si queda cerrado; V4 termina ante Saint-Médard si no se puede llegar a la cabecera. Las versiones parciales declaran qué pierden: no se registran como si se hubiera recorrido la base completa.

## Propiedad del material y límites

Se mantiene la propiedad de las puertas occidentales de Notre-Dame para la ruta 02 según [la decisión del Controller](controller_review.md). Flamel conserva afinidad con libros/ilusiones y Saint-Médard con ciencia/conflicto religioso; no se añadió ninguna visita duplicada. Sainte-Chapelle sigue opcional. Los descartes de Cour des Miracles y Tour Saint-Jacques permanecen en [la ficha anterior archivada](archive/02_old_paris_devils_miracles_pre_done_20261004.md), junto con su evidencia útil.

La revisión documental y cartográfica ha cerrado los criterios bajo control del agente. No es una inspección de campo: las barreras, obras puntuales, plazas disponibles, baños y servicios se verifican el día y activan alternativas ya elegidas. Si un impedimento permanente elimina un núcleo sin una experiencia satisfactoria, la ruta se reabre según [Definition of Done](DEFINITION_OF_DONE.md). El sitio web del portfolio y la revisión externa siguen siendo trabajo posterior; no se declaran realizados aquí.
