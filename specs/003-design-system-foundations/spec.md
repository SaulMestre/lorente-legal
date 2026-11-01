# Especificación de feature: Fundamentos del sistema de diseño

**Rama de la feature**: `003-design-system-foundations`

**Creada**: 2026-10-08

**Estado**: Borrador

**Entrada**: Definir los fundamentos visuales de Lorente Legal a partir de las decisiones ya aprobadas en la Home, documentarlos como referencia compartida y aplicar esa referencia a la Home sin rediseñarla antes de construir las páginas secundarias.

## Escenarios de usuario y pruebas *(obligatorio)*

### Historia de usuario 1 - Consultar una identidad visual coherente (Prioridad: P1)

Como persona que visita Lorente Legal, quiero encontrar una presentación visual coherente en toda la Home para reconocer una misma identidad y utilizar sus controles con facilidad.

**Por qué esta prioridad**: La Home ya está construida y establece una identidad visual aceptada. Consolidarla reduce inconsistencias antes de ampliar el sitio.

**Prueba independiente**: Revisar la referencia visual publicada para confirmar que recoge las decisiones vigentes y comprobar en la Home que los elementos repetidos comparten apariencia y comportamiento.

**Escenarios de aceptación**:

1. **Given** una persona recorre las secciones de la Home, **When** encuentra títulos, texto, acciones y superficies equivalentes, **Then** reconoce una jerarquía visual coherente y no encuentra estilos contradictorios para el mismo propósito.
2. **Given** una persona interactúa con una acción mediante ratón, teclado o tacto, **When** la acción está disponible, enfocada, activa o deshabilitada, **Then** puede distinguir su estado y utilizarla sin depender exclusivamente de hover.
3. **Given** una persona tiene activada la reducción de movimiento, **When** utiliza la Home, **Then** las transiciones respetan esa preferencia sin ocultar contenido ni bloquear acciones.

---

### Historia de usuario 2 - Aplicar los fundamentos a la Home existente (Prioridad: P1)

Como responsable del sitio, quiero que la Home use las reglas visuales compartidas sin alterar su composición aceptada para que sirva de referencia fiable a las páginas que vendrán después.

**Por qué esta prioridad**: Documentar reglas sin aplicarlas dejaría abierta la posibilidad de que las páginas futuras sigan copiando estilos particulares de la Home.

**Prueba independiente**: Comparar la Home antes y después de la consolidación, verificando que conserva su estructura y contenido y que los elementos visuales repetidos siguen las reglas acordadas.

**Escenarios de aceptación**:

1. **Given** la Home actual, **When** se aplica el sistema de diseño, **Then** se conserva su contenido, orden de secciones, comportamiento y dirección visual aprobada, salvo ajustes necesarios para aplicar de forma coherente los fundamentos.
2. **Given** un elemento visual repetido aparece en varias secciones, **When** se revisa la Home, **Then** todas sus apariciones utilizan el mismo patrón o una variante documentada.
3. **Given** la Home se muestra en tamaños de pantalla móvil y escritorio, **When** se revisa su contenido y sus acciones, **Then** ambos siguen siendo legibles, operables y libres de desbordamiento horizontal global.

---

### Historia de usuario 3 - Crear futuras páginas sobre una referencia común (Prioridad: P2)

Como persona que amplía el sitio, quiero consultar reglas y ejemplos claros para construir páginas nuevas sin inventar estilos para elementos que ya tienen un patrón aprobado.

**Por qué esta prioridad**: Las páginas secundarias deben poder añadirse progresivamente sin fragmentar la identidad visual ni duplicar decisiones.

**Prueba independiente**: Usar la referencia para decidir el tratamiento de una acción, un bloque de contenido, una imagen y un control de formulario sin recurrir a estilos particulares de otra página.

**Escenarios de aceptación**:

1. **Given** una página nueva necesita una acción, un enlace, una tarjeta o un campo, **When** la persona responsable consulta la referencia, **Then** encuentra el patrón, sus variantes pertinentes y sus estados de interacción.
2. **Given** un componente existente no cubre una necesidad real, **When** se propone una nueva variante o patrón, **Then** la decisión puede justificarse sin crear una segunda representación equivalente.

### Casos límite

- Un título, enlace o etiqueta es más largo de lo habitual: el contenido debe adaptarse sin recortarse ni desbordar su contenedor.
- Un elemento interactivo se utiliza en pantalla táctil, donde no existe hover: su estado y función siguen siendo comprensibles.
- Una imagen no está disponible, es decorativa o tiene una relación de aspecto distinta: se conserva la estabilidad del layout y se comunica su propósito de forma accesible cuando corresponda.
- Una variante aún no se utiliza en la Home: su patrón puede quedar documentado para una necesidad cercana, pero no obliga a crear un componente sin uso actual.
- Una decisión visual vigente no coincide con una regla heredada: prevalece la identidad aprobada para la Home y el cambio debe quedar explícito en la referencia compartida.

## Requisitos *(obligatorio)*

### Requisitos funcionales

- **FR-001**: La feature DEBE establecer una referencia única y fácil de consultar para la identidad visual compartida de Lorente Legal.
- **FR-002**: La referencia DEBE recoger como base la paleta verde aprobada, Cormorant Garamond para títulos y DM Sans para texto, y DEBE exigir una decisión explícita antes de cambiar esas elecciones.
- **FR-003**: La referencia DEBE definir jerarquías de títulos y texto, espaciado, anchuras de contenido, superficies, esquinas, sombras y reglas responsive con suficiente claridad para aplicarlas consistentemente.
- **FR-004**: La referencia DEBE definir los tratamientos de acciones principales y secundarias, enlaces, tarjetas, insignias y avisos, incluyendo los estados normal, hover, foco de teclado, activo y deshabilitado cuando correspondan.
- **FR-005**: Las acciones DEBEN conservar el comportamiento aprobado de hover sutil y respuesta al pulsar, sin depender de hover para comunicar o habilitar una función, y DEBEN respetar la preferencia de reducción de movimiento.
- **FR-006**: La referencia DEBE describir patrones accesibles para campos de texto, áreas de texto, selectores y casillas, incluyendo etiquetas, foco, ayuda y errores, sin requerir que se creen controles que aún no use una página existente.
- **FR-007**: La referencia DEBE describir el tratamiento de imágenes, incluyendo reserva de espacio, adaptación de proporción y uso de texto alternativo según el propósito de la imagen.
- **FR-008**: Los patrones compartidos DEBEN ser coherentes con teclado, tacto, contenido de longitud variable y los locales publicados o previstos.
- **FR-009**: La Home DEBE aplicar la referencia a sus elementos repetidos y reutilizar patrones compartidos cuando exista una necesidad real, evitando redefiniciones visuales equivalentes.
- **FR-010**: La aplicación de la referencia NO DEBE rediseñar la Home ni cambiar su contenido, orden de secciones, destinos de navegación o comportamiento funcional.
- **FR-011**: La feature NO DEBE implementar páginas secundarias, formularios conectados, integraciones, backend ni dependencias de animación.
- **FR-012**: La referencia DEBE incluir ejemplos de uso suficientes para que una página secundaria pueda adoptar sus fundamentos sin inferir decisiones visuales importantes.

### Entidades principales *(incluidas porque la feature define información compartida)*

- **Fundamento visual**: Regla compartida de identidad, tipografía, color, espaciado, layout, imagen o movimiento aplicable a más de una página.
- **Patrón de interfaz**: Tratamiento reutilizable de un elemento visual con propósito y estados reconocibles, como una acción, un enlace, una tarjeta o un campo.
- **Variante**: Diferencia visual documentada de un patrón que conserva su propósito, como la prioridad o el estado de una acción.

## Criterios de éxito *(obligatorio)*

### Resultados medibles

- **SC-001**: La referencia documenta todos los fundamentos visuales requeridos en FR-002 a FR-008 y no deja decisiones globales existentes sin asignar a una regla o token compartido.
- **SC-002**: El 100% de las apariciones de acciones, enlaces y patrones repetidos identificados en la Home se ajusta a una regla o variante documentada.
- **SC-003**: En las comprobaciones de teclado, foco visible, tacto y reducción de movimiento, todas las acciones principales de la Home siguen siendo localizables y operables.
- **SC-004**: En las comprobaciones de viewport móvil y escritorio, la Home no presenta desbordamiento horizontal global ni contenido esencial cortado.
- **SC-005**: Una persona que implemente una página secundaria puede resolver el patrón visual de una acción, una imagen y un campo de formulario consultando la referencia, sin inventar una identidad visual alternativa.

## Supuestos

- La identidad de la Home actual se considera aprobada: gama de verdes, Cormorant Garamond para títulos y DM Sans para texto son el punto de partida, no una invitación a rediseñar.
- Los valores concretos podrán ajustarse durante el plan si la revisión visual descubre una inconsistencia, pero cualquier ajuste debe preservar el lenguaje visual aprobado y quedar documentado.
- Los patrones de campos de formulario se definirán para orientar la página de Contacto; solo se implementarán controles reutilizables si existe un uso inmediato en la Home u otra superficie incluida en esta feature.
- La navegación global y el footer ya existen. Esta feature puede adaptar su apariencia a las reglas compartidas, pero no cambia sus destinos ni añade idiomas o páginas.
- La skill `lorente-legal-ui` se creará después de que la referencia y los patrones estén estabilizados; no forma parte de esta feature.
- La Home es la única página que se migrará en esta feature. Las páginas secundarias y el área privada quedan fuera de alcance.