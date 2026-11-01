# Sistema de diseño de Lorente Legal

Esta es la referencia compartida para las páginas públicas de Lorente Legal. Las decisiones parten de la Home aprobada; una feature no debe crear otra paleta o repetir estilos particulares cuando ya exista un patrón aquí.

## Identidad actual

| Uso | Token | Valor |
|---|---|---|
| Texto y fondos oscuros | `ink` | `#17211f` |
| Acción principal y superficies destacadas | `moss` | `#315c50` |
| Acentos y acción secundaria | `sage` | `#6d907b` |
| Fondo claro | `paper` | `#f7f5ef` |
| Superficie secundaria | `sand` | `#e5ede7` |

- Títulos: Cormorant Garamond.
- Texto general: DM Sans.
- La carga de ambas tipografías se mantiene centralizada en el layout localizado.
- Un cambio de paleta o tipografía requiere una decisión explícita y una actualización de esta referencia.

## Base de implementación

Los tokens compartidos se mantienen en `frontend/tailwind.config.ts` y los estados globales de foco y movimiento en `frontend/src/app/globals.css`.

## Tipografía

| Uso | Token | Tamaño |
|---|---|---:|
| Hero | `display` / `display-lg` / `display-xl` | 48 / 60 / 72 px |
| Título de sección | `heading` / `heading-lg` | 36 / 48 px |
| Título de tarjeta | `card-heading` | 24 px |
| Texto general | `sans` | 16 px como base; 18 px para destacados |

Los tamaños se aplican con clases responsivas explícitas; no se escalan con el ancho del viewport. La jerarquía debe seguir siendo clara cuando el texto ocupe más de una línea.

## Layout y superficies

- El contenedor de página alcanza 72 rem de ancho, con gutters de 1.25 rem y 2 rem desde el breakpoint `sm` existente.
- Las secciones usan 5 rem de espacio vertical, que pasa a 7 rem desde `sm`, salvo el hero u otra composición que necesite una excepción justificada.
- Las tarjetas repetidas usan el radio `card` de 8 px. Las acciones utilizan el radio `action` de 12 px.
- Las secciones de página usan bandas de superficie o layouts sin marco; no se enmarcan como tarjetas decorativas anidadas.

## Acciones y navegación

- `Button` se reserva para acciones en la página. `ButtonLink` navega y conserva el elemento de enlace. `SiteLink` es para enlaces de texto y navegación.
- Variantes disponibles: `primary` (moss), `secondary` (sage), `light` (blanco), `outline` (superficie clara) y `outline-inverse` (superficie oscura).
- Los botones y enlaces con aspecto de acción mantienen un alto mínimo de 44 px, foco visible y estados deshabilitados reconocibles.
- Hover: crecimiento sutil de 1.035 y sombra discreta. Active: contracción a 0.98. Estos estados son feedback visual, nunca requisitos para activar una acción.
- Las transiciones respetan `prefers-reduced-motion`.

## Imágenes y controles futuros

- Reservar dimensiones o proporción antes de cargar una imagen; preservar su proporción y usar texto alternativo según sea informativa o decorativa.
- Un placeholder debe conservar la misma área reservada y describir el contenido ausente sin ser confundido con una imagen real.
- Los futuros campos de formulario requieren etiqueta visible, ayuda y error asociados, foco visible, estado deshabilitado distinguible y un tamaño cómodo en móvil. No se implementan hasta que una página en alcance los necesite.
- Insignias y avisos deben tener un propósito y no comunicar estado únicamente mediante color.

## Reutilización

Se reutilizan `PageContainer`, `PageSection`, `Button`, `ButtonLink` y `SiteLink` según su responsabilidad. Antes de añadir un patrón, se comprueba si basta una variante de uno existente y si hay un uso real. No se crea un componente tipográfico genérico cuando una jerarquía de estilos compartida resuelve la necesidad.

La guía de estados, imágenes y patrones futuros también está expresada en [el contrato de esta feature](../../specs/003-design-system-foundations/contracts/design-system-ui.md).