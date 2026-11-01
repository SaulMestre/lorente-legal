# Modelo de fundamentos visuales

Esta feature no almacena datos de negocio ni introduce persistencia. El modelo describe la información que debe recoger la referencia compartida.

## Fundamento visual

Representa una decisión común que se aplica a más de un elemento o página.

| Campo | Descripción | Regla |
|---|---|---|
| categoría | Color, tipografía, escala, espacio, contenedor, superficie, foco, movimiento o imagen | Debe pertenecer a una categoría documentada. |
| valor o regla | Valor visual o comportamiento observable | Debe ser único para el mismo propósito y estar alineado con la identidad aprobada. |
| uso previsto | Contexto en que debe aplicarse | Debe describir la decisión y cuándo utilizarla. |
| accesibilidad | Requisitos de legibilidad, foco, semántica o movimiento | Debe ser verificable para los estados aplicables. |

## Patrón de interfaz

Representa una pieza reutilizable de interacción o composición, sin conocimiento del dominio jurídico.

| Campo | Descripción | Regla |
|---|---|---|
| propósito | Acción o información que representa | Debe ser claro para la persona usuaria. |
| variantes | Diferencias de prioridad o presentación | Deben conservar el mismo propósito semántico. |
| estados | Normal, hover, foco, activo, deshabilitado, error o ayuda según corresponda | No pueden depender solo del color o del hover. |
| comportamiento responsive | Adaptación a móvil y escritorio | No debe perder función ni crear overflow global. |
| ejemplo | Uso coherente del patrón | Debe referenciar una necesidad real de la Home o de una página planificada. |

## Tratamiento de imagen

Representa las reglas de presentación accesible y estable para medios visuales.

- Reservar dimensiones o relación de aspecto para evitar saltos de layout.
- Mantener proporción y recorte intencional al adaptarse a distintos tamaños.
- Proporcionar texto alternativo descriptivo cuando la imagen aporte información y texto alternativo vacío cuando sea decorativa.
- Definir un fallback comprensible cuando no haya imagen disponible.

## Relaciones

- Un fundamento visual puede ser utilizado por varios patrones.
- Un patrón utiliza uno o más fundamentos y puede tener varias variantes.
- Una variante pertenece a un único patrón y define solo diferencias justificadas.
- Un tratamiento de imagen aplica fundamentos de layout, responsive y accesibilidad.