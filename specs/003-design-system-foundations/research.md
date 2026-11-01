# Investigación: Fundamentos del sistema de diseño

## Decisiones

### Mantener la identidad visual aprobada

- **Decisión**: Usar la gama `ink`, `moss`, `sage`, `paper` y `sand`, Cormorant Garamond para títulos y DM Sans para texto como base de la referencia.
- **Justificación**: Son decisiones visibles en la Home actual y fueron aceptadas durante la iteración de diseño. La configuración de Tailwind ya define los cinco colores y el layout localizado carga ambas familias mediante `next/font`.
- **Alternativas consideradas**: Introducir otra paleta o tipografía; se descarta porque equivaldría a rediseñar la Home y rompería la continuidad acordada.

### Compartir estilos conservando la semántica HTML

- **Decisión**: Diferenciar controles que ejecutan una acción de enlaces que navegan; permitir que un enlace tenga una variante visual de acción sin convertirlo en un botón nativo.
- **Justificación**: En la Home y el header, las principales llamadas navegan a rutas. El componente `Button` actual cubre botones nativos, mientras `SiteLink` y varios usos directos repiten clases de acción.
- **Alternativas consideradas**: Convertir todo en botones con navegación manual o usar un componente polimórfico que cambie de elemento según props; se descartan para conservar accesibilidad, navegación estándar y una API sencilla.

### Reutilizar el layout existente y limitar las nuevas abstracciones

- **Decisión**: Extender el uso de `PageContainer` y crear solo los patrones de sección o superficie necesarios para retirar duplicación real.
- **Justificación**: Los componentes de Home repiten anchuras, gutters y espaciado vertical, pero ya existe un contenedor compartido. Una capa que envuelva cada texto o clase visual no aporta por sí sola semántica ni reutilización.
- **Alternativas consideradas**: Reescribir todos los componentes como una biblioteca completa de layouts y tipografía; se descarta por YAGNI y porque aumentaría el área de cambio sin valor inmediato.

### Documentar controles futuros sin construirlos anticipadamente

- **Decisión**: Definir las reglas visuales y accesibles de input, textarea, select y checkbox para orientar la página de Contacto, y crear componentes solo si una superficie incluida los necesita.
- **Justificación**: La Home no contiene formularios. El estándar del proyecto pide simplicidad y prohíbe construir infraestructura no utilizada.
- **Alternativas consideradas**: Crear ahora un catálogo de controles no utilizados; se descarta porque no podría validarse en un flujo real y ampliaría innecesariamente la feature.

### Crear una referencia duradera y ejemplos de uso

- **Decisión**: Mantener la referencia compartida en `frontend/docs/design-system.md` y especificar el contrato observable en `contracts/design-system-ui.md`.
- **Justificación**: La Constitución requiere una fuente de verdad de diseño y las páginas y la futura skill deben poder consultarla después de que termine esta feature.
- **Alternativas consideradas**: Dejar las decisiones únicamente en la spec temporal o dispersas entre las clases; se descarta porque dificulta la reutilización y la consulta posterior.

## Hallazgos del repositorio

- Tailwind ya contiene los colores `ink`, `moss`, `sage`, `paper` y `sand`, y alias de fuentes `sans` y `display`.
- El layout de locale carga Cormorant Garamond y DM Sans mediante `next/font`.
- `globals.css` ya contempla foco visible, transiciones, un pequeño crecimiento al pasar el ratón, contracción al pulsar y reducción de movimiento.
- `PageContainer` ya centraliza el ancho máximo y los gutters del shell.
- `Button` solo cubre el elemento nativo `<button>`; acciones de navegación en hero, tarjetas, header y CTA están implementadas con enlaces que repiten estilos de botón.
- Las secciones de Home repiten espaciado vertical, ancho máximo y padding horizontal; algunas superficies usan clases particulares.
- Los scripts del frontend disponibles para validación son `lint` y `build`; no hay un script de pruebas unitarias configurado en `package.json`.

## Resultado

No quedan decisiones técnicas bloqueantes ni dependencias externas por investigar. Los valores exactos de escala tipográfica, superficies y variantes se fijarán en la referencia de diseño durante la implementación, respetando la identidad existente y las restricciones de la spec.