# Especificación de feature: Home pública

**Rama de la feature**: `002-public-home`

**Creada**: 2026-09-21

**Estado**: Borrador

**Entrada**: Descripción de usuario: "Crear la página principal pública de Lorente Legal con estructura funcional, navegación básica, contenido del despacho, áreas de práctica, presentación de Laura, contacto, SEO, accesibilidad, responsive e integración inicial con la arquitectura multidioma."

## Clarifications

### Session 2026-09-21

- Q: ¿Cuál debe ser la URL pública de la Home en la primera versión en español? → A: La Home canónica en español será `/es/`; `/` será únicamente el punto de entrada no permanente al sistema multidioma y redirigirá a `/es/` mientras solo exista español publicado.

## Escenarios de usuario y pruebas *(obligatorio)*

### Historia de usuario 1 - Entender el despacho y sus servicios (Prioridad: P1)

Como persona que visita Lorente Legal por primera vez, quiero identificar rápidamente el despacho, su naturaleza jurídica, la profesional responsable y sus principales áreas de práctica para decidir si sus servicios pueden ayudarme.

**Por qué esta prioridad**: Es el objetivo principal de captación de la Home y permite evaluar el valor de la página sin depender de funcionalidades futuras.

**Prueba independiente**: Una persona que no conozca el despacho puede identificar quién es Lorente Legal, quién es Laura y cuáles son sus áreas principales tras recorrer la Home desde el inicio.

**Escenarios de aceptación**:

1. **Given** una persona accede a la Home, **When** observa el encabezado inicial, **Then** identifica "Lorente Legal" y que se trata de un despacho jurídico.
2. **Given** una persona recorre la Home, **When** llega a las áreas de práctica, **Then** encuentra Extranjería, Nacionalidad, Derecho de familia, Derecho laboral y Derecho civil.
3. **Given** una persona quiere conocer una especialidad, **When** selecciona su área de interés, **Then** encuentra un enlace preparado para acceder a la página específica de esa área.

### Historia de usuario 2 - Navegar por el contenido público (Prioridad: P1)

Como visitante, quiero utilizar una navegación clara para acceder a las principales secciones públicas del proyecto, aunque algunas todavía no estén implementadas.

**Por qué esta prioridad**: La navegación define la estructura pública inicial y evita rediseños cuando se incorporen las páginas restantes.

**Prueba independiente**: Una persona puede identificar y utilizar la navegación principal desde la Home en móvil y escritorio, y los destinos pendientes se presentan de manera consistente sin inventar contenido inexistente.

**Escenarios de aceptación**:

1. **Given** la Home está abierta en una pantalla amplia, **When** la persona consulta la navegación principal, **Then** encuentra Inicio, Servicios, Extranjería, Nacionalidad, Laboral, Civil, Familia, Sobre mí, Contacto y Blog.
2. **Given** la Home está abierta en una pantalla estrecha, **When** la persona necesita navegar, **Then** dispone de una alternativa adaptada que permite acceder a las secciones previstas sin overflow horizontal.
3. **Given** una página futura todavía no forma parte de esta feature, **When** la persona selecciona su enlace, **Then** la aplicación utiliza el comportamiento de ruta inexistente definido por el proyecto y no presenta contenido falso como si fuera definitivo.
4. **Given** una persona accede a `/`, **When** todavía solo existe español publicado, **Then** recibe una redirección no permanente a `/es/`.

### Historia de usuario 3 - Conocer a Laura y contactar (Prioridad: P1)

Como visitante interesado, quiero conocer brevemente a Laura y encontrar una llamada clara al contacto para continuar mi conversación con el despacho.

**Por qué esta prioridad**: La confianza y la conversión a contacto son resultados esenciales de una Home de un despacho profesional.

**Prueba independiente**: Una persona puede localizar la presentación de Laura y una llamada principal a contacto sin necesitar formularios conectados ni integraciones externas.

**Escenarios de aceptación**:

1. **Given** una persona visita la Home, **When** llega a la sección profesional, **Then** encuentra el nombre de Laura, una presentación breve, un espacio preparado para fotografía y un enlace futuro a "Sobre mí".
2. **Given** una persona decide contactar, **When** selecciona la llamada principal de contacto, **Then** accede a la ruta pública de contacto o a la navegación definida para ella.
3. **Given** no existe todavía una fotografía definitiva, **When** se muestra la sección de Laura, **Then** la estructura sigue siendo comprensible y no depende de la imagen para comunicar la información esencial.

### Historia de usuario 4 - Consumir una Home pública de calidad (Prioridad: P2)

Como visitante, quiero leer y utilizar la Home desde móvil o escritorio, con teclado y tecnologías de asistencia, y encontrarla correctamente mediante buscadores.

**Por qué esta prioridad**: La captación pública depende de que la página sea usable, accesible, indexable y estable en los contextos principales.

**Prueba independiente**: La Home puede revisarse en móvil, escritorio y navegación por teclado, comprobando estructura semántica, contenido inicial, metadata y ausencia de overflow global.

**Escenarios de aceptación**:

1. **Given** una persona abre la Home en móvil o escritorio, **When** recorre el contenido, **Then** la página mantiene su funcionalidad, legibilidad y jerarquía sin scroll horizontal global.
2. **Given** una persona navega mediante teclado, **When** recorre header, navegación, áreas, presentación y contacto, **Then** encuentra un orden coherente, foco visible y controles operables.
3. **Given** un buscador solicita la Home, **When** procesa el documento público, **Then** encuentra el contenido principal, una metadata específica y una URL canónica de la página.

## Edge Cases

- La fotografía de Laura no está disponible: se conserva un espacio accesible y la información textual sigue siendo suficiente.
- Una ruta enlazada todavía no está publicada: el enlace no debe generar contenido inventado ni presentar una página válida ficticia.
- Un texto traducido futuro ocupa más espacio que el español: ningún botón, título, tarjeta o navegación debe depender de una longitud fija.
- La navegación no cabe en móvil: debe existir una alternativa accesible que mantenga todas las secciones previstas.
- Un visitante utiliza teclado o tecnologías de asistencia: la estructura debe conservar contexto, foco visible y jerarquía semántica.
- La ventana cambia de tamaño u orientación: el contenido debe seguir siendo utilizable sin overflow horizontal global.
- El contenido de la Home se amplía posteriormente con datos reales: la estructura debe admitirlo sin convertir la página en un bloque monolítico.

## Requisitos *(obligatorio)*

### Requisitos funcionales

- **FR-001**: La Home DEBE estar disponible en `/es/` como URL española indexable y canónica.
- **FR-002**: La Home DEBE identificar claramente a Lorente Legal como despacho jurídico.
- **FR-003**: La Home DEBE incluir header, navegación principal, hero, presentación breve del despacho, áreas de práctica, bloque destacado de Extranjería y Nacionalidad, presentación de Laura, llamada principal a contacto y footer.
- **FR-004**: La navegación principal DEBE contemplar Inicio, Servicios, Extranjería, Nacionalidad, Laboral, Civil, Familia, Sobre mí, Contacto y Blog.
- **FR-005**: Cada área de práctica DEBE mostrar un nombre comprensible y un enlace preparado para su futura página específica.
- **FR-006**: Las áreas de práctica DEBEN incluir Extranjería, Nacionalidad, Derecho de familia, Derecho laboral y Derecho civil.
- **FR-007**: El hero DEBE comunicar el nombre del despacho, su naturaleza jurídica, la profesional responsable y al menos una acción orientada a contacto o servicios.
- **FR-008**: La sección de Laura DEBE incluir su nombre, una presentación profesional breve, un espacio preparado para fotografía y un enlace futuro a "Sobre mí".
- **FR-009**: La Home DEBE incluir una llamada clara a contactar que conduzca a la ruta pública de Contacto o al destino equivalente definido para esta fase.
- **FR-010**: El footer DEBE reservar espacio para identidad del despacho, navegación secundaria, contacto, enlaces legales, selector de idioma y copyright, aunque los datos definitivos puedan completarse posteriormente.
- **FR-011**: La ruta `/` DEBE actuar únicamente como punto de entrada al sistema multidioma y DEBE redirigir de forma no permanente al locale correspondiente; mientras solo exista español publicado, DEBE redirigir a `/es/`.
- **FR-012**: La Home DEBE funcionar con una única interfaz adaptable en móvil y escritorio, sin overflow horizontal global.
- **FR-013**: La navegación móvil DEBE permitir acceder a todas las secciones principales previstas y ser operable mediante teclado cuando corresponda.
- **FR-014**: La Home DEBE utilizar una estructura semántica con una jerarquía de encabezados coherente, un encabezado principal identificable, enlaces descriptivos y controles distinguibles.
- **FR-015**: La Home DEBE ofrecer foco visible y permitir recorrer y activar su navegación, enlaces y acciones mediante teclado.
- **FR-016**: El contenido principal de la Home DEBE estar disponible en el HTML inicial y no depender exclusivamente de interacciones posteriores del navegador.
- **FR-017**: La Home española `/es/` DEBE ser indexable y tener `/es/` como URL canónica.
- **FR-018**: La Home DEBE estar preparada para title, meta description, Open Graph, datos estructurados y sitemap conforme a las reglas SEO del proyecto.
- **FR-019**: La Home DEBE integrarse en la arquitectura multidioma sin duplicar páginas o componentes para preparar `en` y `ca`.
- **FR-020**: La estructura DEBE permitir que cada versión lingüística futura tenga URL, contenido y metadata propios sin publicar URLs de idiomas no disponibles.
- **FR-021**: La Home NO DEBE implementar backend, base de datos, autenticación, área privada, expedientes, documentos, pagos, WhatsApp, automatizaciones, blog funcional ni formularios conectados.
- **FR-022**: La Home NO DEBE incorporar animaciones complejas, transiciones entre páginas, dependencias de animación ni un sistema visual definitivo.
- **FR-023**: La estructura funcional DEBE permitir sustituir o evolucionar posteriormente la presentación visual sin rehacer la navegación, el contenido estructural ni los límites de la feature.

### Entidades principales

- **Public Home Content**: Contenido público estructural de la Home, incluyendo identidad del despacho, mensajes principales, áreas de práctica, presentación profesional y llamadas a la acción.
- **Practice Area**: Área jurídica presentada en la Home, con nombre visible, descripción breve y destino público futuro.
- **Public Route**: Ruta pública prevista para la navegación, con nombre visible, destino y estado de disponibilidad.
- **Locale**: Idioma de la página pública, inicialmente español (`es`) y preparado para inglés (`en`) y valenciano/catalán (`ca`).

## Criterios de éxito *(obligatorio)*

### Resultados medibles

- **SC-001**: En una prueba con personas que no conocen el despacho, al menos el 90% identifica correctamente el nombre del despacho, su naturaleza jurídica y la profesional responsable tras recorrer la Home.
- **SC-002**: Al menos el 90% de las personas participantes encuentra una de las cinco áreas de práctica y llega al destino enlazado en un máximo de dos interacciones desde la sección de áreas.
- **SC-003**: Al menos el 90% de las personas participantes localiza la llamada principal a contacto en una prueba de uso de la Home.
- **SC-004**: La Home permite recorrer las secciones principales mediante teclado sin perder el foco ni encontrar controles inoperables en una revisión manual.
- **SC-005**: La Home se muestra sin overflow horizontal global en las dimensiones móviles y de escritorio definidas por la especificación de validación.
- **SC-006**: El contenido principal, la jerarquía de encabezados, la metadata específica y la URL canónica `/es/` están disponibles en la primera respuesta pública de la Home española.
- **SC-007**: La Home puede incorporar posteriormente los idiomas `en` y `ca` sin crear una copia independiente de la página o de sus componentes funcionales.
- **SC-008**: Ninguna funcionalidad fuera de alcance se ejecuta como dependencia de esta feature, incluyendo backend, autenticación, persistencia o integraciones de contacto.

## Supuestos

- La primera versión publicada contiene contenido en español (`es`); las traducciones completas a inglés y valenciano/catalán se especificarán en features posteriores.
- La URL `/` no es indexable ni canónica; funciona como entrada no permanente al sistema multidioma y redirige a `/es/` mientras solo exista español publicado.
- Las rutas internas previstas pueden enlazarse aunque algunas todavía no estén implementadas; su comportamiento final se definirá cuando cada página se especifique.
- Los textos definitivos, datos de contacto, fotografía de Laura, metadata concreta y datos estructurados concretos se definirán o revisarán en las especificaciones y documentación correspondientes.
- La Home utilizará el sistema de diseño vigente cuando exista, pero esta feature no define tokens ni identidad visual definitiva.
- La validación responsive, accesible y SEO se realizará en los dispositivos, navegadores y criterios definidos durante la planificación de la feature.
- La navegación básica no implica conexión funcional con formularios, email, teléfono, WhatsApp ni backend.
