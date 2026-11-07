# París — calendario equilibrado y voces · actualizado 07-11-2026

**Ajuste confirmado 7/11 por Andrés:** Orangerie se mueve al **miércoles 11 por la mañana**, Frankenstein E al **miércoles por la tarde** y Frankenstein C al **domingo 8 por la mañana**, en sentido inverso para enlazar directamente con R06 Revolución. El concierto de órgano del domingo sigue siendo **opcional y secundario**: no recortar las rutas por llegar. Los párrafos de auditoría histórica del 6/11 documentan el estado previo, y no prevalecen sobre este ajuste ni sobre la tabla siguiente.

Decisión de Andrés: asignar **sólo las rutas con score personal estrictamente superior a 8**, al **primer slot logísticamente compatible**, sin museos en sábado ni domingo, máximo **20 km a pie por día** contando rutas, enlaces, estaciones, NOC y movimientos locales. No se restauran automáticamente asignaciones previamente anuladas para rutas de <=8. Excepción posterior autorizada por Andrés el 06/11: **R07 Ocupación (8,0) se programa expresamente**, aunque no superaba el umbral estricto de autoasignación. Se mantienen R11 y Louvre del viernes 6; **R10 Burlesque queda retirada y se sustituye sólo su tramo nocturno por Frankenstein N corto**. Sábado 7 **no** es descanso. Viernes 13 sólo **un** bloque; bus a las 17:00 según decisión más reciente de Andrés.

**Respaldo inmutable anterior a esta redistribución:** [versión del 6 de noviembre, commit `5bb4629`](https://github.com/andresmejiaro/Paris/blob/5bb462943093af94b86e0f53ca97b76a66d72889/routes/paris_slots_auto_20261105.md). Se conserva intacta en Git. Este documento es el calendario operativo nuevo; **las asignaciones de narrador aquí indicadas prevalecen** sobre el catálogo histórico de 25 voces.

| Día | Bloque 1 | Bloque 2 | Extra/compromiso fuera de bloque | Presupuesto a pie total con margen |
|---|---|---|---|---|
| Vie 06 | **R11 Cosmopolita (Liv)**, 10:45 (8,7; M5/transporte 4,81 km medidos + enlaces) | **Louvre (Siro)**, 19:00 (9,4), compromiso de museo | **Frankenstein N «La noche en tres actos» (Limo + Cruce)** ~21:15, ~1,8–2,5 km; sustituye R10 | **~12–17 km** con enlaces y museo; sin desvíos largos. **Día intacto** |
| Sáb 07 | **Libre por recuperación** tras 40.000 pasos el viernes | **R15 Libros (Cobre)** 13:00–16:15 (8,5; 1,68 km base) | — | **~4–7 km** con aproximaciones/metro |
| Dom 08 | **Frankenstein C «París en capas» (Tara)** 09:15–11:30, recorrido invertido République→Palais-Royal (8,3; ~3,2–4,1 km) | **R06 Revolución (Rook)** 11:30–16:30, arranca en Palais-Royal y termina en Nation (8,2; 8,14 km base) | Órgano de Bach en Saint-Eustache 17:00 **sólo si apetece y da tiempo**, sin condicionar las rutas | **~15–19 km** con enlaces y estaciones; respetar máximo 20 km |
| Lun 09 | **Visita 42 por la mañana**, compromiso prioritario | **R22 Coulée Verte (Hilo), TENTATIVO**, 14:15–16:45 (8,3; 3,44 km base) | Orangerie trasladada al miércoles; Coulée Verte puede moverse sin coste según energía | **~5–9 km** con enlaces y estaciones |
| Mar 10 | **R18 Canal con M5 (Nexo)** 09:30–13:30 (8,5; 4,43 km medidos + enlace, ~4,8–5,1 km orientativos) | Libre | **R17 Espectáculo científico (Faro)** (9,0), Arts et Métiers 15:15 y péndulo 17:00 | **~8–12 km** con conexiones, canal y museo |
| Mié 11 | **Musée de l'Orangerie (Vesper)** 09:30–12:15 (9,1), museo abierto pese a festivo | **Frankenstein E «El imperio hecho monumento» (Rita)** 14:15–15:15, Porte Dorée, interior gratuito y exterior breve | Metro desde Concorde hasta Porte Dorée, pausa para comer; C pasa al domingo | **~4–8 km** con museo, accesos y metro |
| Jue 12 | **R07 París ocupado (Vera)**, 10:00–15:45 (8,0; 7,789 km de superficie + interiores) | Libre | Musée de la Libération 10:00; Mémorial de la Shoah abierto hasta 21:00 el jueves | **~10–13 km** con metro, interiores y enlaces |
| Vie 13 | **Musée d’Orsay (Trace)** temprano (9,3), único bloque | **No existe bloque 2** | Check-out NOC 09:00; bus 17:00 | Museo y conexiones; debajo de 20 km |

## Validaciones

- **Doce experiencias >8 ubicadas:** las nueve originales (Louvre, Orsay, Orangerie, R17, R11, R15, R18, R22, R06) más Frankenstein N, C y E. **R07 (8,0) se añade por autorización expresa posterior:** total trece experiencias asignadas. **Siete nuevas asignaciones de bloque:** R22, R15, R06, Orangerie, R18, C y R07; Frankenstein N (viernes) y E (miércoles) son extras. R11/Louvre/R17/Orsay conservan sus compromisos.
- **No se asignan museos al sábado o domingo**, por decisión de Andrés. Orangerie pasa al miércoles 11, 09:30–12:15, pese al festivo, con E por la tarde; R18 permanece el martes antes de R17.
- **R15 sábado**: Bibliothèque Mazarine y Salle Ovale atienden los sábados hasta 18:00; no programar para domingo/lunes como versión íntegra.
- **R22 lunes, TENTATIVO**: traslado desde el sábado 7 bloque 1 por recuperación después de unos 40.000 pasos el viernes. Coulée Verte abre 08:00–17:45 entre semana; 14:15–16:45 es una ventana propuesta después de la visita a 42. **No es compromiso firme; mover o cancelar sin penalización** si 42, energía o transporte lo aconsejan.
- **Orangerie miércoles festivo 11**: abre 09:00–18:00 incluso el 11 de noviembre, última entrada 17:15; visita propuesta 09:30–12:15, sin reserva todavía confirmada. Después metro hacia Porte Dorée para E (14:15). El billete combinado con Orsay, €20 a la venta presencial, requiere confirmar vigencia entre miércoles y viernes.
- **R06 domingo**: 11:30–16:30, inicio Palais-Royal y fin Nation. Va **después de Frankenstein C invertido** 09:15–11:30 (République→Palais-Royal): ambos comparten punto de enlace sin retroceder por metro. Órgano Saint-Eustache 17:00 sigue opcional; no acortar la ruta por él. Presupuesto diario ~15–19 km, máximo 20.
- **Frankenstein C domingo 8**: 09:15–11:30 en orden invertido **République→Flamel→Quincampoix→Stohrer→Buren/Palais-Royal**; narradora Tara. El final coincide con el inicio de Revolución de Rook a las 11:30. Visita diurna, puntos débiles siguen oportunistas. Frankenstein E queda miércoles 11 a las 14:15 después de Orangerie (metro, no caminata entre ambos).
- **R18 martes**: Arsenal figura abierto 08:00–22:00, salvo cierre excepcional del jueves 5 por manifestaciones; M5 Bastille→Jacques Bonsergent entre dos trazos a pie. Inicio 09:30 y cierre 13:30 dejan 1h45 antes de Arts et Métiers 15:15.
- **R07 jueves 12**: primer slot compatible sin mover los extras y compromisos existentes. Musée de la Libération abre jueves 10:00–18:00 (colección permanente gratuita; último acceso 17:30), y Mémorial de la Shoah abre hasta 21:00 los jueves (entrada individual gratuita). Ruta de 4h45–5h45, 7,789 km planificados de superficie más interiores; reservar 10:00–15:45 y presupuestar ~10–13 km con estaciones. Miércoles 11 por la mañana ya está dedicado a Orangerie, y la tarde a Frankenstein E; la ruta exige empezar antes de 10:45 y su versión íntegra no cabe en ese día.
- Los kilómetros totales son **presupuestos conservadores, no tracks de red enrutados** (especialmente museos, transbordos y NOC). El 20 km es el máximo de decisión: evitar añadidos y desvíos voluntarios que superen el margen diario.
- R10 Burlesque **retirada** por nota 7,6; su lugar el viernes es [Frankenstein N](frankenstein_n_montmartre.md), tres paradas nocturnas compactas y sin espectáculo de pago obligado. R07, justo **8,0**, no satisfacía “por encima de 8”, pero se asignó después por petición expresa de Andrés.

Fuentes oficiales contrastadas 05–06/11/2026: Bibliothèque Mazarine (abre sábado 7, cerrada miércoles festivo 11), BnF Salle Ovale (sábado 7 abierta), Domaine national du Palais-Royal (08:00–20:30 en noviembre), Palais de la Porte Dorée (martes–domingo 10:00–17:30 entre semana), Musée de l'Orangerie, Ville de Paris Coulée Verte y Jardin du Port de l'Arsenal. Reconfirmar cambios/eventos el día de visita.

## Auditoría del 6 noviembre

Rutas pendientes retiradas por disfrute <8: **02, 05, 10, 19, 20 y 21**. Puntos rescatados por geometría en [Frankenstein C, N y E](frankenstein_20261106.md). **En la fotografía histórica del 6/11, C figuraba el miércoles (bloque 2) y E el mismo miércoles (extra); quedó superada el 7/11**. R07=8,0 se programó expresamente el jueves 12, fuera del umbral automático original.

## Conteo de bloques sin ocupar (vigente 07/11)

**3 bloques libres o flexibles**: sábado 7 bloque 1 (recuperación), martes 10 bloque 2 (aunque hay Ciencia como extra) y jueves 12 bloque 2 (después de Ocupación). Lunes 9 bloque 2 tiene R22 **tentativo, no obligatorio**. Domingo 8 tiene C invertido + Revolución; miércoles 11, Orangerie + E, sin bloques enteros libres. Viernes 13 no tiene bloque 2 por el autobús. Mantener accesos y desplazamientos dentro del límite diario de 20 km.

## Bolsillo de experiencias (06/11)

Andrés pidió conservar las excursiones y conciertos descubiertos **sin asignarlos**: [investigación y alternativas](experiencias_libres_20261106.md). Saint-Eustache (domingo 08, 17:00) queda **opcional, con prioridad muy inferior a las dos rutas**, sin obligación de llegar ni recortar recorridos. No hay otras nuevas obligaciones.

## Ajuste tentativo por recuperación — noche del 6 de noviembre

Andrés informó ~40.000 pasos y autorizó expresamente guardar en el repositorio público el cambio: **sábado 7 bloque 1 libre por recuperación; R22 Coulée Verte con Hilo queda tentativamente en lunes 9 bloque 2, 14:15–16:45**. En esta versión histórica Orangerie figuraba el lunes, pero **se trasladó al miércoles 11 por decisión del 7/11**; R15 Libros del sábado y la visita a 42 del lunes siguen. R22 no constituye compromiso: si hace falta moverla, se mueve sin coste ni presión de completar.

## Nota de vigencia — ajuste 07/11

La tabla inicial y las validaciones inmediatamente anteriores a esta nota reflejan las nuevas horas. Cualquier mención anterior a C el miércoles o a Orangerie el lunes en auditorías históricas no está vigente. Saint-Eustache es opcional y no altera la prioridad de las dos rutas del domingo.
