# París — calendario equilibrado y voces · 06-11-2026

Decisión de Andrés: asignar **sólo las rutas con score personal estrictamente superior a 8**, al **primer slot logísticamente compatible**, sin museos en sábado ni domingo, máximo **20 km a pie por día** contando rutas, enlaces, estaciones, NOC y movimientos locales. No se restauran automáticamente asignaciones previamente anuladas para rutas de <=8. Excepción posterior autorizada por Andrés el 06/11: **R07 Ocupación (8,0) se programa expresamente**, aunque no superaba el umbral estricto de autoasignación. Se mantienen R11 y Louvre del viernes 6; **R10 Burlesque queda retirada y se sustituye sólo su tramo nocturno por Frankenstein N corto**. Sábado 7 **no** es descanso. Viernes 13 sólo **un** bloque; bus a las 17:00 según decisión más reciente de Andrés.

**Respaldo inmutable anterior a esta redistribución:** [versión del 6 de noviembre, commit `5bb4629`](https://github.com/andresmejiaro/Paris/blob/5bb462943093af94b86e0f53ca97b76a66d72889/routes/paris_slots_auto_20261105.md). Se conserva intacta en Git. Este documento es el calendario operativo nuevo; **las asignaciones de narrador aquí indicadas prevalecen** sobre el catálogo histórico de 25 voces.

| Día | Bloque 1 | Bloque 2 | Extra/compromiso fuera de bloque | Presupuesto a pie total con margen |
|---|---|---|---|---|
| Vie 06 | **R11 Cosmopolita (Liv)**, 10:45 (8,7; M5/transporte 4,81 km medidos + enlaces) | **Louvre (Siro)**, 19:00 (9,4), compromiso de museo | **Frankenstein N «La noche en tres actos» (Limo + Cruce)** ~21:15, ~1,8–2,5 km; sustituye R10 | **~12–17 km** con enlaces y museo; sin desvíos largos. **Día intacto** |
| Sáb 07 | **R22 Coulée Verte (Hilo)** 09:15–11:45 (8,3; 3,44 km base) | **R15 Libros (Cobre)** 13:00–16:15 (8,5; 1,68 km base) | — | **~8–11 km** con aproximaciones/metro |
| Dom 08 | **R06 Revolución (Rook)** 09:00–14:00 (8,2; 8,14 km base) | **Libre** | Sin museo; Frankenstein C pasa al miércoles | **~10–13 km** con enlaces y estaciones |
| Lun 09 | **Musée de l'Orangerie (Vesper)** 12:00–13:30 (9,1) | Libre | **Mañana reservada exclusivamente para 42**; no programar ruta antes del museo | **~4–7 km** con 42, museo y estaciones |
| Mar 10 | **R18 Canal con M5 (Nexo)** 09:30–13:30 (8,5; 4,43 km medidos + enlace, ~4,8–5,1 km orientativos) | Libre | **R17 Espectáculo científico (Faro)** (9,0), Arts et Métiers 15:15 y péndulo 17:00 | **~8–12 km** con conexiones, canal y museo |
| Mié 11 | **Libre** | **Frankenstein C «París en capas» (Tara)** 13:30–16:00 (8,3; ~3,2–4,1 km estimados) | **Frankenstein E «El imperio hecho monumento» (Rita)** 10:30–11:30 (8,1; 0,31 km base + interior, metro L8); **extra**. Metro y pausa entre E y C | **~7–11 km** incluyendo ambos módulos, enlaces y estaciones |
| Jue 12 | **R07 París ocupado (Vera)**, 10:00–15:45 (8,0; 7,789 km de superficie + interiores) | Libre | Musée de la Libération 10:00; Mémorial de la Shoah abierto hasta 21:00 el jueves | **~10–13 km** con metro, interiores y enlaces |
| Vie 13 | **Musée d’Orsay (Trace)** temprano (9,3), único bloque | **No existe bloque 2** | Check-out NOC 09:00; bus 17:00 | Museo y conexiones; debajo de 20 km |

## Validaciones

- **Doce experiencias >8 ubicadas:** las nueve originales (Louvre, Orsay, Orangerie, R17, R11, R15, R18, R22, R06) más Frankenstein N, C y E. **R07 (8,0) se añade por autorización expresa posterior:** total trece experiencias asignadas. **Siete nuevas asignaciones de bloque:** R22, R15, R06, Orangerie, R18, C y R07; Frankenstein N (viernes) y E (miércoles) son extras. R11/Louvre/R17/Orsay conservan sus compromisos.
- **No se asignan museos al sábado o domingo**, por decisión de Andrés. Orangerie pasa a lunes 9 a las 12:00 tras 42; R18, a martes 10 por la mañana antes de R17.
- **R15 sábado**: Bibliothèque Mazarine y Salle Ovale atienden los sábados hasta 18:00; no programar para domingo/lunes como versión íntegra.
- **R22 sábado**: Coulée Verte abre 09:00–17:45 durante noviembre, 09:15 compatible.
- **Orangerie lunes**: abre 09:00–18:00, última entrada 17:15; considerar billete horario, aún no comprado por esta asignación. Hora de 12:00 condicionada a que termine la visita temprana a 42.
- **R06 domingo**: 09:00–14:00 y descanso/libertad el resto del día; al mover Frankenstein C al miércoles, baja el presupuesto total de marcha a ~10–13 km.
- **Frankenstein C miércoles 11**: después de Frankenstein E (10:30–11:30) y traslado en metro desde Porte Dorée, inicio 13:30 en Palais-Royal y fin ~16:00 en République. No se unen ambos recorridos caminando. El Domaine national du Palais-Royal está abierto 08:00–20:30 en noviembre; miércoles 11 es festivo, por lo que se conserva la comprobación puntual de aperturas e incidencias. El total de E+C con transportes es ~7–11 km, no track de red enrutado.
- **R18 martes**: Arsenal figura abierto 08:00–22:00, salvo cierre excepcional del jueves 5 por manifestaciones; M5 Bastille→Jacques Bonsergent entre dos trazos a pie. Inicio 09:30 y cierre 13:30 dejan 1h45 antes de Arts et Métiers 15:15.
- **R07 jueves 12**: primer slot compatible sin mover los extras y compromisos existentes. Musée de la Libération abre jueves 10:00–18:00 (colección permanente gratuita; último acceso 17:30), y Mémorial de la Shoah abre hasta 21:00 los jueves (entrada individual gratuita). Ruta de 4h45–5h45, 7,789 km planificados de superficie más interiores; reservar 10:00–15:45 y presupuestar ~10–13 km con estaciones. Miércoles 11 por la mañana choca con Frankenstein E a las 10:30; la ruta exige empezar antes de 10:45 y su versión íntegra no cabe en el segundo bloque de ese día.
- Los kilómetros totales son **presupuestos conservadores, no tracks de red enrutados** (especialmente museos, transbordos y NOC). El 20 km es el máximo de decisión: evitar añadidos y desvíos voluntarios que superen el margen diario.
- R10 Burlesque **retirada** por nota 7,6; su lugar el viernes es [Frankenstein N](frankenstein_n_montmartre.md), tres paradas nocturnas compactas y sin espectáculo de pago obligado. R07, justo **8,0**, no satisfacía “por encima de 8”, pero se asignó después por petición expresa de Andrés.

Fuentes oficiales contrastadas 05–06/11/2026: Bibliothèque Mazarine (abre sábado 7, cerrada miércoles festivo 11), BnF Salle Ovale (sábado 7 abierta), Domaine national du Palais-Royal (08:00–20:30 en noviembre), Palais de la Porte Dorée (martes–domingo 10:00–17:30 entre semana), Musée de l'Orangerie, Ville de Paris Coulée Verte y Jardin du Port de l'Arsenal. Reconfirmar cambios/eventos el día de visita.

## Auditoría del 6 noviembre

Rutas pendientes retiradas por disfrute <8: **02, 05, 10, 19, 20 y 21**. Puntos rescatados por geometría en [Frankenstein C, N y E](frankenstein_20261106.md). **C queda el miércoles 11 (bloque 2), E el mismo miércoles (extra)**. R07=8,0 se programó expresamente el jueves 12, fuera del umbral automático original.

## Conteo de bloques sin ocupar (tras Frankenstein)

**5 bloques libres**: domingo 8 bloque 2; lunes 9 bloque 2; martes 10 bloque 2; miércoles 11 bloque 1; jueves 12 bloque 2. Viernes 13 bloque 2 **no existe** por el autobús. El viernes 6 tiene N como extra y miércoles 11 tiene E como extra, porque un microrecorrido de ~0,31 km base + interiores no equivale a una ruta larga de piernas. Se contabilizará su acceso en metro y desplazamientos locales en el límite de 20 km si se añaden rutas ese día. El domingo 8 queda sólo con Revolución; miércoles 11 tiene E como extra por la mañana y C en bloque 2 por la tarde. El jueves 12 bloque 1 queda ocupado por R07 Ocupación (10:00–15:45).
