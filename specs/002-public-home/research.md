# Investigación: Home pública

**Feature**: `002-public-home`
**Date**: 2026-09-21

## Decisión 1: Home pública renderizada en servidor

- **Decisión**: Renderizar la Home pública con Server Components y limitar el JavaScript de cliente a las interacciones que lo requieran, como la navegación móvil.
- **Justificación**: La feature es pública, está orientada a SEO y es estática en la primera fase. El renderizado en servidor conserva el HTML inicial, reduce JavaScript innecesario y sigue la Constitución.
- **Alternativas consideradas**:
  - Renderizar toda la página en cliente: descartado porque debilita la experiencia HTML inicial y contradice la regla de Server Components por defecto.
  - Añadir una caché de datos en cliente: descartado porque esta feature no tiene datos interactivos de backend.

## Decisión 2: Rutas con locale

- **Decisión**: Tratar `/es/` como Home española canónica y `/` como punto de entrada no permanente que redirige a `/es/` mientras solo esté publicado el español.
- **Justificación**: Sigue la aclaración de la spec y la exigencia constitucional de que las páginas públicas localizadas incluyan el locale como primer segmento.
- **Alternativas consideradas**:
  - Usar `/` como Home canónica: descartado porque contradice las reglas de routing multidioma.
  - Publicar `/` y `/es/`: descartado porque crea URLs indexables duplicadas sin una estrategia explícita posterior.

## Decisión 3: Composición compartida de la feature

- **Decisión**: Mantener las secciones estructurales de la Home dentro de su feature y utilizar componentes layout/UI compartidos solo cuando sean globales o se reutilicen en al menos dos features.
- **Justificación**: Preserva la propiedad de la feature, evita abstracciones prematuras y permite sustituir el sistema visual sin acoplar las secciones de negocio a primitivas globales.
- **Alternativas consideradas**:
  - Crear todas las secciones como componentes globales: descartado porque en esta fase pertenecen solo a la Home.
  - Duplicar páginas por locale: descartado por las reglas constitucionales multidioma.

## Decisión 4: Las rutas futuras son explícitas, pero no se fabrican páginas

- **Decisión**: Definir los destinos de navegación del mapa público, dejando sin implementar las páginas fuera de esta feature y sin contenido placeholder presentado como válido.
- **Justificación**: La Home establece la navegación estable sin ampliar el alcance a servicios, blog o área privada.
- **Alternativas consideradas**:
  - Omitir las rutas futuras: descartado porque dejaría incompleta la arquitectura pública solicitada.
  - Crear páginas placeholder: descartado porque amplía el alcance y puede generar contenido indexable engañoso.

## Decisión 5: Enfoque de validación

- **Decisión**: Validar la Home mediante flujos de usuario, navegador responsive, teclado, contenido/metadata inicial y comportamiento de rutas.
- **Justificación**: Los riesgos principales son estructurales y públicos, no de persistencia de datos.
- **Alternativas consideradas**:
  - Solo pruebas unitarias: descartado porque no prueban routing, HTML renderizado, comportamiento responsive ni uso por teclado.
  - Snapshot visual como gate principal: descartado porque la identidad visual definitiva está fuera de alcance.

## Incertidumbres resueltas

No quedan incertidumbres que bloqueen la implementación. Los textos exactos, datos finales de contacto, fotografía, valores concretos de metadata y tipos Schema.org quedan como decisiones de contenido o especificaciones futuras.
