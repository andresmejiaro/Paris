# París — cierre de producción del catálogo

7 octubre 2026 · Cruce. [Índice vigente](README.md) · [catálogo de entrega](navigation/portfolio.delivery.json).

## Resultado y denominador

**26/26 decisiones de catálogo resueltas: 100%.** Hay **25 experiencias DONE**, 01–03 y 05–26. La 04 está retirada y absorbida en la 16; su investigación se conserva. Son 25/25 experiencias activas cerradas y 26/26 decisiones resueltas, no 26 rutas independientes.

El 100% significa producción de rutas bajo DoD, **no todo el viaje ni toda publicación**. No hay reservas, compras, llamadas, inspecciones presenciales, ensayo hablado, aceptación externa ni web publicada que se puedan dar por hechas.

## Última entrega

Ruta 26 v2: BiLiPo → identificación/Landru en acera Monge → antiguo «36». Base independiente de 130–160 min/€0, línea de referencia de 1,407 km con precisión declarada y asignación real de 1,5–1,7 km. Tres guiones centrales y dos satélites. Fichas offline y alternativa completa de exterior; museo interior opcional en otro bloque. Nozière: 35–45 min/0,1 km local; Diana: 25–35 min/punto público. Aproximaciones de satélites temporizadas pero no medidas, fuera del núcleo.

El segundo trabajador revisó y no encontró bloqueosDoD: tiempos coherentes, guion exterior reescrito, materialoffline, geometría reproducible66puntos, JSON/XML/whitespace válidos. Revisión interna no equivale a evaluación externa por otros modelos ni campo. [Historial de correcciones](26_internal_review_20261007.md).

## Uso durante el viaje

1. Escoger experiencias del menú; no intentar recorrer todo por estar terminado. Mantener descansos y compromisos conamistades, contar aproximación/salida/transporte en la carga diaria.
2. Descargar canon, operaciones y navegación de cada experiencia; su archivo por ruta manda sobre antiguos resúmenes conjuntos.
3. Leer las condiciones del día/variantes antes de salir. Una visita opcional cerrada no se convierte en visitada por escuchar su historia fuera.
4. Reservar solo los módulos elegidos y con confirmación; una ficha terminada no significa plaza adquirida. No se enviaron datos deAndrés.

## Capas posteriores, separadas del porcentaje

|Capa|Estado real|Siguiente paso|
|---|---|---|
|Producción de experiencias/decisiones|Cerrada|Reabrir solo por defecto material, fallo esencial o petición|
|Exportación legible por máquina|Catálogo de paquetes con versiones/archivos y validador|Usar catálogo actual, no atribuir cobertura total al antiguo manifest|
|Programación diaria final|No comprometida|Fechas reales de transporte/alojamiento, preferencias y descansos; seleccionar, no llenar todos los días|
|Reservas/entradas|No realizadas|Autorización y datos para módulos seleccionados; no necesarias para cerrar sus fichas|
|Solapamiento peatonalGIS preciso|No calculado para todo el catálogo|Exige geometrías comparables; muchas líneas simplificadas no soportan una cifra fiable|
|Ensayo de voz/audio|No realizado|Escucha humana y ajustes de narrador; guiones preparados no son audio producido|
|Evaluación externa multmodelo/Claude|No realizada|Entregar canon+operaciones+evidencia, recibir feedback; etapa posterior bajoDoD|
|Web|No construida/publicada|Entregable posterior, no contabilizado como terminado por cerrar catálogo|
|Git|Cambios locales sin commit|`.git` montado solo lectura en esta sesión; Andrés puede guardar commit desde entorno con escritura|

No se inventa un porcentaje conjunto de estas capas: no hay pesos acordados y varias requieren elecciones/autorización externa. Este informe permite dar100% al trabajo de producción **sin esconder las capas pendientes**.

## Validación reproducible

Resultado final: catálogo consistente, 25 experiencias DONE y 26 decisiones resueltas; 74 archivos JSON parseados, 48 GPX con XML válido y 646 enlaces relativos comprobados. Geometría de Ruta 26 consistente con su generador: 66 puntos, 1,407 km. `git diff --check` sin errores.

- `node scripts/build-route26-navigation.mjs` comprueba que archivos de26 coinciden con sus fuentes y generador; no escribe.
- `node scripts/build-portfolio-delivery.mjs` valida índice, paquetes, JSON, envolturas GPX, enlaces y consistencia de cierre, y compara el catálogo generado; no escribe.
- `xmllint --noout routes/navigation/*.gpx` valida el XML de todos los GPX por separado.
- Ambos tienen modo`--patch` que emite cambios para aplicar mediante`apply_patch`; no reescriben archivos ni hacen operacionesGit.

Estas comprobaciones son de entrega/documentos, no prueban acceso futuro, verdad de cada dato histórico, vigencia instantánea de un servicio o ausencia de obras.
