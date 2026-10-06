# Ruta 03 — Navegación fija en Père-Lachaise

Cruce · **03-v10-20261005** · revisada 2026-10-05. [Ficha](../03_ghosts_revolution_nineteenth.md) · [operaciones](03_access_operations.md) · [JSON](03.operations.json) · [GPX](03.gpx) · [variantes](03.variants.gpx) · [GeoJSON](03.geojson) · [evidencia](03.evidence.json).

## Qué representa la traza

`03.gpx` contiene puntos exactos y una ruta de decisión de **1.086 km geométricos**: puerta principal → Robertson → Kardec → Victor Noir → puerta Gambetta. Es una polilínea cartográfica de orientación contrastada con el plano municipal, no un levantamiento GPS ni permiso para cruzar concesiones. Los pequeños caminos curvan, las sepulturas se observan desde el borde y un cierre local obliga a rodear; presupuestar **1.3–1.8 km reales** y 1 h 45–2 h 15.

La discrepancia no se «corrige» añadiendo vueltas. Cargar GPX y plano oficial descargado. En una división, permanecer en camino visible y seguir placas/personal aunque el segmento del dispositivo apunte a través de tumbas. Si no se localiza un monumento en diez minutos, aplicar V2; no abrir senda.

## Llegadas y puntos de observación

| Punto | WGS84 | Posición seleccionada |
|---|---|---|
| Porte principale | **48.859969, 2.389222** | Acceso municipal de 28 ter boulevard de Ménilmontant. WC y acogida, si operativos. [Mapa](https://www.google.com/maps/search/?api=1&query=48.859969%2C2.389222). |
| Robertson | **48.859933, 2.390947** | División 8, primera línea de avenue Casimir-Périer. Observar relieves desde el camino. [Mapa](https://www.google.com/maps/search/?api=1&query=48.859933%2C2.390947). |
| Allan Kardec | **48.862320, 2.394350** | División 44, dolmen visible junto al chemin du Quinconce / avenue transversale nº1. [Mapa](https://www.google.com/maps/search/?api=1&query=48.86232%2C2.39435). |
| Victor Noir | **48.860819, 2.396543** | División 92, junto a avenue transversale nº2. Mantenerse en camino; no tocar el bronce. [Mapa](https://www.google.com/maps/search/?api=1&query=48.860819%2C2.396543). |
| Porte Gambetta | **48.863384, 2.397162** | Salida municipal de 55–57 rue des Rondeaux. WC, si operativo. [Mapa](https://www.google.com/maps/search/?api=1&query=48.863384%2C2.397162). |
| Métro Philippe-Auguste | **48.858239, 2.390269** | Acceso exterior de referencia; comprobar boca/línea 2 el día. [Mapa](https://www.google.com/maps/search/?api=1&query=48.858239%2C2.390269). |
| Métro Gambetta | **48.864964, 2.398800** | Acceso exterior de referencia; líneas 3/3bis, comprobar servicio. [Mapa](https://www.google.com/maps/search/?api=1&query=48.864964%2C2.398800). |

Los pines de sepultura proceden de registros cartográficos abiertos y se contrastaron con división/posición del plano oficial; no son observación presencial. La puerta principal y Gambetta tienen coordenadas municipales publicadas. Ninguna cadena accesible para silla de ruedas está certificada: el recinto es accidentado y la base usa pendiente y caminos potencialmente irregulares.

## Entre todas las escenas

### Entrada → Robertson

Cruzar la puerta principal y continuar por el eje público de entrada. Tomar la conexión señalizada hacia **avenue Casimir-Périer** y localizar división 8. Robertson está en primera línea, antes del rond-point Casimir-Périer. No entrar entre concesiones aunque el pin parezca cercano. Si la primera conexión está cortada, pedir al personal la continuidad pública a division 8 o V1.

### Robertson → Kardec

Continuar por **avenue Casimir-Périer** hacia el rond-point y ganar altura por los ejes públicos del plano hacia **avenue transversale nº1**. Buscar las placas de división 44 y **chemin du Quinconce**; el dolmen de Kardec es el objeto, no cualquier busto cercano. Este es el tramo con más subida y orientación. Una valla o ceremonia manda sobre el GPX: rodear solo por camino señalizado y volver a la placa 44. Tras diez minutos sin hallarlo, V2.

### Kardec → Victor Noir

Volver al camino, no cortar por el interior de división 44. Seguir los ejes públicos al este/sureste hacia **avenue transversale nº2** y división 92. Confirmar el gisant de bronce y sombrero antes de empezar. Si el monumento está ocupado, esperar apartado; si sigue ocupado o acordonado, ejecutar V2 y conservar el cierre oral desde un lugar neutro sin afirmar observación.

### Victor Noir → Gambetta

Regresar a **avenue transversale nº2** y seguir los ejes de salida hacia el norte, conforme a placas de **Porte Gambetta**. No desviarse al Mur des Fédérés ni al crematorio: son contenidos distintos. Cruzar la puerta antes del margen fijado. Ya fuera, seguir rue des Rondeaux / avenue du Père-Lachaise hacia place Gambetta y escoger una boca abierta; el conector exterior es separado.

## Variantes en `03.variants.gpx`

| Track | Uso |
|---|---|
| `03_arrival_PhilippeAuguste_mainGate` | Orientación exterior desde acceso de métro a puerta principal; verificar cruces y boca real. |
| `03_return_GambettaGate_metro` | Orientación exterior desde puerta a métro Gambetta; verificar boca/línea. |
| `03_V1_mainGate_Robertson_return` | Entrada, Robertson y regreso por puerta principal si la subida/tiempo impiden seguir. |
| `03_V2_Kardec_Gambetta_direct` | Salida degradada desde Kardec hacia Gambetta cuando Noir no es observable o falta margen. |

Los tracks de variantes son independientes; no sumarlos todos. V3 (cierre total/meteorología) no tiene track interior: no entrar. V4 (lluvia/fatiga después de Noir) usa salida Gambetta base sin parada adicional.

## Comprobación realizada

Se contrastaron divisiones, puertas, nombres de vías y servicios con el plano municipal; coordenadas de puertas con la ficha de la Ville de Paris; coordenadas de monumentos con objetos OSM/Wikidata y fuentes de cada escena. GPX/GeoJSON comparten 22 vértices y cinco hitos. La longitud es suma geodésica de esa línea de decisión. No se usó un router capaz de certificar microrrecorridos entre concesiones y por eso no se presentan maniobras automáticas como caminos legales. La cartografía no equivale a visita de campo ni garantiza apertura futura.
