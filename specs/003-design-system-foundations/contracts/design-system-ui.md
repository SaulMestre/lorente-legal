# Contrato de interfaz: sistema de diseño

Este contrato establece el comportamiento visual que deben compartir la Home y las páginas públicas futuras. No define contenido jurídico ni rutas.

## Identidad

- La base es la paleta verde y neutra ya utilizada: `ink` (`#17211f`), `moss` (`#315c50`), `sage` (`#6d907b`), `paper` (`#f7f5ef`) y `sand` (`#e5ede7`).
- Los títulos utilizan Cormorant Garamond y el texto general DM Sans.
- No se añaden colores o familias tipográficas globales sin una decisión explícita y una actualización de la referencia común.

## Tipografía y layout

- Debe existir una jerarquía clara para título principal, títulos de sección, títulos de bloque, cuerpo, texto auxiliar y etiquetas.
- La jerarquía debe conservarse al adaptarse a móvil y a contenido más largo; no se debe depender de que un título o botón quepa en una sola línea.
- El ancho de contenido, gutters y ritmo vertical deben derivar de valores compartidos y sustituir las repeticiones equivalentes de la Home.
- Las secciones pueden diferenciarse mediante las superficies existentes, pero no deben convertirse en tarjetas decorativas anidadas.

## Acciones y enlaces

- Las acciones principales, secundarias y de menor énfasis deben diferenciarse mediante variantes explícitas y coherentes.
- Los botones representan acciones en la página; los enlaces representan navegación, aunque puedan adoptar presentación visual de botón.
- El hover puede aplicar un crecimiento sutil y sombra; al pulsar puede haber una contracción breve. Ninguna función depende de hover.
- El foco de teclado debe ser visible; los estados activos, deshabilitados y de error deben distinguirse sin depender solo del color.
- Los controles principales deben conservar un área táctil cómoda, aproximadamente 44 × 44 píxeles CSS o mayor cuando el contexto lo permita.
- La preferencia de reducción de movimiento debe suprimir o reducir transiciones no esenciales sin afectar a la operación.

## Superficies y controles

- Las tarjetas, insignias y avisos deben tener un propósito informativo o funcional reconocible y compartir sus estilos por patrón.
- Las tarjetas repetidas no deben superar 8 px de radio de esquina; botones y otros controles pueden seguir la variante de radio documentada para su propósito.
- Los campos futuros deben tener etiqueta visible, estado de foco, ayuda y error comprensibles, y un estado deshabilitado diferenciable.
- No se crea un control global hasta que exista un uso dentro de una feature en alcance.

## Imágenes y movimiento

- Las imágenes deben reservar su espacio, mantener una proporción adecuada y adaptarse sin deformación ni overflow.
- La intención accesible del texto alternativo debe corresponder al papel informativo o decorativo de la imagen.
- Los efectos de entrada o interacción deben ser discretos, opcionales cuando no aporten información y compatibles con reducción de movimiento.

## Criterio de evolución

Una página futura reutiliza el patrón existente. Si una necesidad no está cubierta, primero se comprueba si basta una variante; una nueva pieza compartida solo se añade cuando tiene una responsabilidad reutilizable y un uso real.