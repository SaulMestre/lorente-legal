<!--
Sync Impact Report
- Cambio de versión: 1.14.0 -> 1.15.0
- Principios y secciones modificados:
   - Principio II y Principio IV: Vinculación explícita con las nuevas secciones "Cookies, analítica y servicios de terceros" e "Internacionalización y arquitectura multidioma".
  - Se añade Sección "Cookies, analítica y servicios de terceros": 10 párrafos/reglas normativas que establecen los principios de privacidad por diseño y minimización de datos, activación de cookies no esenciales exclusivamente tras obtener consentimiento legal previo sin bloquear funcionalidades básicas ante el rechazo, evaluación estricta de servicios externos (analítica, publicidad, seguimiento, mapas, vídeo, chat, redes sociales, widgets), optimización y carga centralizada de scripts de terceros minimizando su impacto en Core Web Vitals, clasificación diferenciada de categorías de cookies/servicios para la gestión del consentimiento con capacidad de revocación/modificación, prohibición estricta de enviar datos jurídicos, documentos, credenciales o información personal sensible a herramientas de analítica/seguimiento, gestión centralizada de claves/configuraciones de terceros sin exponer secretos al navegador, y la delimitación explícita de que la Constitución fija las reglas transversales de privacidad mientras que la elección de proveedores concretos (consentimiento o analítica) se decidirá en las especificaciones correspondientes.
- Se añade Sección "Internacionalización y arquitectura multidioma": 23 subsecciones sobre locales es/en/ca, rutas localizadas, slugs traducibles, código compartido, contenido editorial independiente, selección y persistencia de idioma, selector accesible, SEO multidioma, sitemap, canonicalización, revisión humana de contenido jurídico traducido, formatos locales, errores localizados, fallbacks, accesibilidad, tecnología centralizada y publicación progresiva.
- TODOs: confirmar la fecha original de ratificación
-->

# Constitución de Lorente Legal

## Principios fundamentales

### I. Separación arquitectónica y fuente única de verdad
Lorente Legal DEBE componerse de dos aplicaciones independientes: un frontend desarrollado
en Next.js, React, TypeScript y Tailwind CSS, y un backend desarrollado en ASP.NET Core
Web API (.NET 10) en C#. El backend DEBE ser la única fuente de verdad para los datos y
las reglas de negocio; la lógica de negocio NO DEBE implementarse en el frontend. El sistema
se desarrollará progresivamente en dos fases bien definidas:
- **Fase 1 (Presencia y Captación)**: Construcción de la web pública estática optimizada
  para SEO, rendimiento y captación de clientes.
- **Fase 2 (Área Privada e Integración)**: Conexión con el backend para soporte de cuentas
  de usuario, expedientes, gestión documental, mensajería y automatizaciones.

Las decisiones arquitectónicas de Fase 1 DEBEN permitir la evolución hacia Fase 2, pero NO
DEBEN implementar anticipadamente funcionalidades propias de Fase 2. Durante la Fase 1 NO
deben añadirse por anticipación autenticación, gestión de clientes, expedientes, documentos,
mensajería, WhatsApp, pagos, base de datos ni workflows jurídicos salvo que una especificación
aprobada los requiera expresamente. La arquitectura DEBE estar preparada para incorporarlos
posteriormente sin obligar a implementar infraestructura no utilizada.

El proyecto DEBE mantenerse como un monolito modular y NO DEBEN introducirse microservicios
salvo necesidad técnica demostrada.

### II. Frontend tipado, accesible y orientado a la presentación
El frontend DEBE utilizar Next.js App Router, React, TypeScript en modo estricto y Tailwind
CSS. Los Server Components DEBEN ser la opción predeterminada para todo componente, página o
layout. Los Client Components SOLO DEBEN utilizarse cuando exista necesidad explícita de
interactividad o uso de APIs del navegador, aislándolos en el nivel más bajo posible del árbol.
Todos los archivos fuente DEBEN ser TypeScript (`.tsx` para componentes React y `.ts` para el
resto). NO DEBEN crearse archivos `.js` o `.jsx` salvo imperativo de herramientas externas. El
diseño DEBE ser responsive, mobile-first, accesible, optimizado para SEO y con excelentes métricas
Core Web Vitals.

Las páginas NO DEBEN contener lógica de negocio y la comunicación HTTP con el backend DEBE
estar centralizada en la capa de API (`src/lib/api/` para infraestructura común y
`src/features/<feature>/api/` para operaciones específicas). NO debe existir una tercera
capa genérica `src/services/` para llamadas HTTP.

La gestión de estado, la arquitectura de componentes, el SEO técnico, la estrategia responsive y multidispositivo,
el sistema de diseño y consistencia visual, la internacionalización, la comunicación API y la organización de carpetas del frontend DEBEN seguir
estrictamente las secciones "Gestión de estado del frontend", "Estrategia de renderizado y componentes del frontend",
"SEO técnico y contenido público", "Diseño responsive y comportamiento multidispositivo", "Sistema de diseño y
consistencia visual", "Internacionalización y arquitectura multidioma", "Comunicación entre frontend y backend" y
"Arquitectura y estructura de carpetas del frontend".

La estructura recomendada del frontend DEBE ser:
```text
src/
  app/          # Rutas, páginas y layouts del App Router (Server Components por defecto)
  components/   # Componentes de UI genéricos (ui/) y de estructura global (layout/)
  features/     # Módulos organizados por funcionalidad (componentes, hooks, api, schemas, stores)
  lib/          # Utilidades, cliente HTTP y configuración centralizada (ej. lib/api/)
  hooks/        # Hooks globales compartidos por 2+ features
  stores/       # Stores de Zustand globales compartidos por 2+ features
  types/        # Definiciones de tipos globales compartidas por 2+ features
  utils/        # Funciones puras y genéricas compartidas por 2+ features
```

Las carpetas globales `hooks/`, `stores/`, `types/` y `utils/` SOLO deben existir o contener
elementos utilizados por al menos 2 features independientes. Los elementos utilizados únicamente por una
feature DEBEN permanecer dentro de dicha feature.

Las rutas públicas iniciales requeridas para la web estática DEBEN ser:
- `/` (Página principal e inicio)
- `/servicios` (Resumen global de áreas y servicios jurídicos)
- `/extranjeria` (Derecho de extranjería)
- `/nacionalidad` (Nacionalidad española)
- `/laboral` (Derecho laboral)
- `/civil` (Derecho civil)
- `/familia` (Derecho de familia)
- `/sobre-mi` (Presentación profesional de Laura)
- `/contacto` (Datos y formulario de contacto)
- `/blog` (Contenido divulgativo y SEO)

Estas rutas representan la estructura funcional inicial. Los slugs finales podrán modificarse
posteriormente por razones de SEO dentro de una especificación concreta.

### III. Dominio protegido y aplicación explícita
El backend DEBE estructurarse en una arquitectura limpia orientada al dominio dentro de
la solución `.NET 10`:
```text
src/
  LorenteLegal.Domain
  LorenteLegal.Application
  LorenteLegal.Infrastructure
  LorenteLegal.Api
```
La dirección conceptual de dependencias DEBE ser estrictamente:
```text
Api -> Application -> Domain
Infrastructure -> Application / Domain
```
Como única excepción, `LorenteLegal.Api` PODRÁ referenciar `LorenteLegal.Infrastructure` exclusivamente
desde el Composition Root para:
- registrar implementaciones en el contenedor de dependencias (DI)
- registrar DbContext
- registrar repositorios
- registrar proveedores externos
- configurar Infrastructure e iniciar la aplicación (ej. `builder.Services.AddInfrastructure(configuration);`)

Esta referencia de bootstrapping NO autoriza a los controladores o endpoints de `Api` a utilizar directamente
repositorios concretos, DbContext, implementaciones de Infrastructure, proveedores externos, almacenamiento de archivos
ni clientes de APIs externas. Los controladores y endpoints DEBEN seguir dependiendo únicamente de `Application` para
ejecutar casos de uso.

`Domain` NO DEBE depender de `Application`, `Infrastructure`, `Api`, Entity Framework Core, ASP.NET Core, PostgreSQL
ni APIs externas. Las entidades de dominio DEBEN proteger sus invariantes y no exponer setters públicos sin
justificación. Los conceptos de negocio DEBEN expresarse mediante Value Objects cuando corresponda. Cada operación
significativa DEBE ser un caso de uso explícito en `Application`. `Application` NO DEBE depender de `Infrastructure`.

### IV. Seguridad, privacidad y control del acceso
Toda operación protegida DEBE autenticarse y autorizarse en el backend; la seguridad NO DEBE
depender del ocultamiento de elementos en el frontend. Los secretos, credenciales y claves API
NUNCA DEBEN guardarse en Git y DEBEN gestionarse mediante variables de entorno o gestores de
secretos. La entrada de usuario y archivos subidos DEBEN validarse en los límites del
sistema. Los documentos de clientes NO DEBEN guardarse como binarios en PostgreSQL, sino en
almacenamiento de objetos (Object Storage), almacenando en la base de datos únicamente sus
metadatos. Los documentos NO DEBEN ser accesibles públicamente por defecto. Los logs NO
DEBEN registrar información sensible ni datos personales innecesarios, respetando los
principios de minimización y privacidad del RGPD.

### V. Calidad verificable, simplicidad y evolución prudente
Las reglas de dominio DEBEN ser verificables mediante tests automatizados unitarios sin dependencias
de red o base de datos. Se utilizarán xUnit en backend, Vitest y React Testing Library en frontend, y
Playwright para tests end-to-end críticos. Deben evitarse abstracciones prematuras,
marcos innecesarios, dependencias no justificadas y patrones como CQRS o MediatR salvo que
exista un problema concreto que lo requiera. Se aplicará estrictamente YAGNI: construir
únicamente lo necesario para la fase actual manteniendo límites arquitectónicos limpios que
permitan escalar en el futuro.

### VI. Idioma del código y de la documentación
Todo el código fuente (nombres de variables, funciones, clases, interfaces, tipos, componentes,
comentarios en código, nombres de archivos de código, nombres de ramas de Git y mensajes de
commit) DEBE estar escrito estrictamente en **inglés**.
Todos los archivos de documentación Markdown (`.md`), especificaciones, planes, tareas,
textos de la interfaz de usuario (UI) y cualquier contenido generado para lectura humana DEBEN
estar redactados en **español**.

## Gestión de estado del frontend

La gestión de estado DEBE utilizar la herramienta adecuada según la naturaleza del estado.

### 1. Estado local de React
El estado DEBE gestionarse mediante `useState` o `useReducer` cuando se cumplan TODAS estas condiciones:
- El estado es consumido por un máximo de 3 componentes.
- Los componentes consumidores pertenecen a la misma rama del árbol de componentes.
- El estado no necesita atravesar más de 2 niveles mediante props.
- El estado no debe sobrevivir a un cambio de página o ruta.
- El estado no representa datos obtenidos del backend.
- El estado no representa navegación, filtros o parámetros que deban aparecer en la URL.
- El estado no pertenece a un formulario complejo gestionado por React Hook Form (definido como formulario con 4 o más campos, validación condicional, múltiples pasos, subida de archivos o validaciones asíncronas).

Si el estado necesita ser consumido por 4 o más componentes, o requiere prop drilling de más de 2 niveles, NO DEBE mantenerse mediante lifting state y DEBE evaluarse Zustand.

Una propiedad de estado NO DEBE transmitirse a través de más de 2 componentes intermedios que no la utilicen directamente. Si para alcanzar al consumidor una propiedad debe atravesar 3 o más niveles intermedios, DEBE utilizarse otro mecanismo de estado.

### 2. Estado del servidor (Server State)
Todos los datos procedentes del backend DEBEN considerarse Server State (ejemplos: clientes, expedientes, documentos, mensajes, notificaciones, citas, perfil, configuraciones y permisos del backend).

Si un dato:
- únicamente se necesita durante el renderizado de un Server Component
- no requiere interacción inmediata desde el navegador
- no requiere refetch desde un Client Component
- no requiere mutations desde esa vista
- no necesita sincronización interactiva en cliente

DEBE obtenerse mediante el **Server API Client**.

Si un dato necesita:
- ser consumido desde un Client Component
- refetch interactivo
- mutations
- actualización dinámica desde el navegador
- sincronización mediante caché de cliente

DEBE gestionarse mediante **TanStack Query**.

Los datos procedentes del backend NO DEBEN almacenarse en Zustand ni utilizarse Zustand como caché de datos del backend.

Cuando se utilice TanStack Query en el cliente, este será responsable de caching, revalidación, loading/error states, mutations, invalidación de queries, sincronización con el backend y reintentos oportunos. Las claves de queries DEBEN seguir una convención coherente y centralizada. Tras una mutation, las queries relacionadas DEBEN actualizarse o invalidarse explícitamente. Las actualizaciones optimistas SOLO DEBEN utilizarse si aportan una mejora clara de UX, el cambio se puede revertir de forma segura y existe rollback en caso de error.

### 3. Estado global del frontend
Zustand DEBE utilizarse únicamente para estado global que pertenezca al frontend y no represente datos cuya fuente de verdad sea el backend.

Zustand DEBE utilizarse cuando se cumpla al menos UNA de estas condiciones:
- El estado es consumido por 4 o más componentes.
- El estado es consumido desde 2 o más ramas independientes del árbol de componentes.
- El estado debe compartirse entre 2 o más páginas o rutas.
- Mantenerlo con React requeriría prop drilling a través de 3 o más niveles intermedios.
- El estado representa una preferencia global de interfaz (ej. sidebar abierta/cerrada, preferencias visuales).
- El estado representa un workflow temporal compartido entre múltiples componentes o páginas (ej. wizard temporal, filtros globales fuera de la URL, datos temporales no persistidos).

Los stores DEBEN mantenerse pequeños y organizados por responsabilidad o feature. NO DEBE existir un único store global que contenga todo el estado de la aplicación ni mezclarse responsabilidades no relacionadas.

Zustand NO DEBE utilizarse para: datos del backend, navegación, parámetros de URL, formularios complejos, tokens sensibles, documentos ni datos jurídicos sensibles persistentes.

Redux NO DEBE añadirse salvo necesidad técnica futura explícitamente justificada.

### 4. Estado en URL
El estado que represente navegación o que deba poder conservarse al recargar, compartir o guardar una página DEBE almacenarse en la URL mediante route params o searchParams (ejemplos: paginación, búsqueda, filtros compartibles, ordenación, pestañas navegables, identificadores de recursos, vistas seleccionadas).

Este estado NO DEBE duplicarse innecesariamente en Zustand. Si un filtro debe poder compartirse mediante enlace o sobrevivir a una recarga con significado de navegación, DEBE estar en la URL.

### 5. Formularios
Los formularios complejos DEBEN gestionarse utilizando React Hook Form y Zod. Se considera formulario complejo cualquier formulario que cumpla al menos UNA de estas condiciones:
- Tenga 4 o más campos.
- Tenga validación condicional o campos dependientes.
- Tenga múltiples pasos.
- Tenga subida de archivos o validaciones asíncronas.
- Tenga lógica de mostrar/ocultar campos o valores precargados desde el backend.
- Tenga estados de guardado parcial o borrador.

Formularios de 1 a 3 campos simples pueden utilizar estado local de React si no cumplen las condiciones anteriores. Zod se utilizará para validación y tipado del formulario. La validación en frontend es una mejora de UX; el backend DEBE volver a validar siempre los datos recibidos. Las reglas críticas de negocio NO DEBEN existir únicamente en esquemas Zod del frontend.

### 6. Persistencia local
`localStorage` o `sessionStorage` SOLO podrán utilizarse cuando exista una necesidad explícita. NO DEBEN almacenarse en almacenamiento local: contraseñas, tokens sensibles, documentos, expedientes, información jurídica sensible, datos personales innecesarios, claves API, secretos ni datos completos de clientes.

Cualquier estado persistido mediante Zustand DEBE especificar explícitamente qué propiedades se persisten; NO DEBE persistirse un store completo por defecto y la persistencia DEBE limitarse al mínimo de propiedades necesarias.

### 7. Autenticación
Los tokens o credenciales sensibles NO DEBEN almacenarse en `localStorage`. La autenticación deberá utilizar mecanismos seguros, preferentemente cookies con `HttpOnly`, `Secure` y `SameSite`.

El frontend puede ocultar o mostrar elementos según los permisos del usuario, pero esto NO constituye autorización. Todas las operaciones protegidas DEBEN volver a comprobarse en el backend. El frontend NO DEBE asumir autorización porque una ruta o botón sea visible, un rol esté en memoria o un id provenga del navegador.

### 8. Árbol obligatorio de decisión para estado
Antes de elegir una herramienta de estado en el frontend, DEBE aplicarse este orden estricto:

1. **¿El dato proviene del backend?**
   - **NO** → continuar con las reglas de URL, formulario, estado local y Zustand.
   - **SÍ** → continuar.
2. **¿El dato solo se necesita durante el renderizado en servidor y no requiere interacción, refetch ni mutation desde cliente?**
   - **SÍ** → Server API Client.
   - **NO** → continuar.
3. **¿El dato necesita interacción, refetch, mutation o actualización desde un Client Component?**
   - **SÍ** → TanStack Query.
4. **¿El dato representa navegación, filtros, búsqueda, paginación, ordenación o un estado que debe poder compartirse mediante URL?**
   - **SÍ** → route params o searchParams.
   - **NO** → continuar.
5. **¿El dato pertenece a un formulario complejo?**
   - **SÍ** → React Hook Form + Zod.
   - **NO** → continuar.
6. **¿El dato es consumido por un máximo de 3 componentes, en la misma rama del árbol y con un máximo de 2 niveles de prop drilling?**
   - **SÍ** → useState o useReducer.
   - **NO** → continuar.
7. **¿El dato es consumido por 4 o más componentes, por ramas independientes, por varias páginas o requiere 3 o más niveles de prop drilling?**
   - **SÍ** → Zustand.
   - **NO** → usar estado local de React.

### 9. Regla de fuente única de verdad
Cada dato DEBE tener una única fuente de verdad. NO se permite mantener simultáneamente el mismo dato en:
- TanStack Query y Zustand
- URL y Zustand
- React Hook Form y Zustand
- estado local y Zustand
- backend y una copia persistente manual en frontend

Si un dato pertenece al backend, la fuente de verdad es el backend. Si representa navegación, la fuente de verdad es la URL. Si pertenece a un formulario activo, la fuente de verdad es React Hook Form. Si pertenece exclusivamente a la UI global, la fuente de verdad es Zustand.

### 10. Reglas de estructura
Los stores de Zustand y las queries/mutations de TanStack Query DEBEN estar organizados por feature o responsabilidad.

NO DEBE crearse un archivo genérico como `global-store.ts`, `app-store.ts` o `store.ts` que contenga responsabilidades no relacionadas. Las llamadas a la API NO DEBEN escribirse directamente dentro de componentes React; la comunicación con el backend DEBE realizarse a través de una capa centralizada de API (`src/lib/api/` o `src/features/<feature>/api/`), y los componentes DEBEN consumir hooks o funciones de acceso a datos.

## Estrategia de renderizado y componentes del frontend

El frontend utiliza Next.js con App Router.
Los Server Components DEBEN ser la opción por defecto.
Los Client Components SOLO deben utilizarse cuando exista una necesidad técnica concreta definida en esta sección.

### 1. Regla general
Todo componente nuevo DEBE crearse como Server Component por defecto.
NO debe añadirse `"use client"` salvo que el componente necesite al menos UNA de las siguientes funcionalidades:
- `useState`, `useReducer`, `useEffect`, `useRef` cuando dependa del DOM.
- Event handlers del navegador (`onClick`, `onChange`, `onSubmit`, etc.).
- APIs exclusivas del navegador (`window`, `document`, `navigator`, `localStorage`).
- Zustand, TanStack Query en cliente, React Hook Form o hooks dependientes del navegador.
- Librerías de terceros que requieran ejecución en cliente.

Si ninguna de estas condiciones se cumple, el componente DEBE permanecer como Server Component.

### 2. Aislamiento de Client Components
Cuando una parte de una página necesite interactividad, `"use client"` DEBE colocarse en el componente más bajo posible del árbol.
NO debe convertirse una página completa en Client Component únicamente porque uno de sus hijos necesite interactividad.

### 3. Pages y Layouts
Los archivos `page.tsx` y `layout.tsx` DEBEN permanecer como Server Components salvo que sea técnicamente imposible cumplir la funcionalidad requerida.
NO debe añadirse `"use client"` directamente a `layout.tsx` ni a `page.tsx` si la interactividad puede aislarse en componentes hijos. Los providers que necesiten cliente DEBEN encapsularse en un componente específico (ej. `app/providers.tsx`).

Un archivo `page.tsx` NO DEBERÍA superar 150 líneas.
- Hasta 150 líneas: permitido.
- Más de 150 líneas: DEBE revisarse si contiene lógica, presentación o responsabilidades que deban extraerse.
- Más de 200 líneas: DEBE dividirse salvo justificación técnica documentada.

La división DEBE responder a una separación real de responsabilidades; NO debe dividirse código únicamente para cumplir un número de líneas.

### 4. Web pública
Las páginas públicas de Lorente Legal DEBEN priorizar Server Components, generación estática, renderizado en servidor y la mínima cantidad de JavaScript enviada al navegador (Inicio, Servicios, Extranjería, Nacionalidad, Derecho laboral, Derecho civil, Derecho de familia, Sobre Laura, Contacto y Blog). Textos, metadatos y contenido SEO NO DEBEN depender de Client Components salvo necesidad técnica.

### 5. Área privada
El área privada podrá utilizar Client Components con mayor frecuencia cuando exista interacción real (tablas interactivas, formularios, filtros, subida de documentos, modales, workflows, notificaciones). Esto NO significa que toda el área privada deba convertirse en Client Components; la regla de Server Components por defecto sigue aplicando.

### 6. Obtención inicial de datos
Los datos necesarios para renderizar contenido público o estático DEBEN obtenerse preferentemente desde Server Components mediante el Server API Client. NO debe utilizarse `useEffect` para realizar una carga inicial de datos si esos datos pueden obtenerse directamente desde un Server Component.

### 7. TanStack Query
TanStack Query DEBE utilizarse para Server State que necesite comportamiento interactivo en cliente (refresco de expedientes, listado interactivo, notificaciones, mutations, paginación dinámica). NO DEBE utilizarse automáticamente para todos los datos del backend ni desde Server Components; si el dato solo es necesario para generar la página sin interacción inmediata, DEBE obtenerse desde un Server Component con el Server API Client.

### 8. Uso legítimo de useEffect
`useEffect` NO DEBE utilizarse para obtener datos iniciales de servidor, derivar valores calculables o sincronizar estados internos de React. `useEffect` SOLO debe utilizarse para sincronizar React con un sistema externo (APIs del navegador, event listeners, timers, librerías externas de terceros).

### 9. Estado derivado
Un valor que pueda calcularse a partir de props, estado existente o datos obtenidos NO DEBE almacenarse como un nuevo estado independiente en `useState`. Debe calcularse directamente durante el render.

### 10. Tamaño y límites de componentes y archivos
Límites unificados y verificables:
- **Páginas App Router (`page.tsx`)**:
  - Hasta 150 líneas: permitido.
  - Más de 150 líneas: DEBE revisarse.
  - Más de 200 líneas: DEBE dividirse salvo justificación técnica documentada.
- **Componentes React**:
  - Hasta 250 líneas: permitido.
  - Más de 250 líneas: DEBE revisarse si contiene más de una responsabilidad.
  - Más de 350 líneas: DEBE dividirse salvo justificación técnica documentada.
- **Archivos TypeScript generales**:
  - Hasta 300 líneas: permitido.
  - Más de 300 líneas: DEBE revisarse.
  - Más de 400 líneas: DEBE dividirse salvo justificación técnica documentada.

La división de cualquier archivo DEBE responder a una separación funcional real de responsabilidades.

### 11. Responsabilidad de componentes
Cada componente DEBE tener una responsabilidad principal identificable. Un componente NO DEBE gestionar simultáneamente acceso a datos, transformación compleja, lógica de negocio, presentación y workflows independientes. La lógica reutilizable DEBE extraerse a hooks, funciones o módulos de feature.

### 12. Hooks personalizados
Un hook personalizado DEBE crearse únicamente cuando se cumpla al menos UNA condición: la lógica se repite en 2+ componentes, contiene 3+ hooks relacionados con una responsabilidad, encapsula una API del navegador, encapsula una operación repetida de TanStack Query o encapsula comportamiento específico de una feature. NO deben crearse hooks que solo envuelvan una llamada a `useState` sin añadir comportamiento.

### 13. Componentes reutilizables
Un componente DEBE moverse al conjunto de componentes compartidos (`src/components/ui/`) únicamente cuando se utilice en al menos 2 features diferentes. Si un componente pertenece a una sola feature, DEBE permanecer dentro de dicha feature (`src/features/<feature_name>/components/`).

### 14. Comunicación entre Server y Client Components
Los Server Components pueden pasar datos a Client Components mediante props. Los datos pasados DEBEN ser serializables. NO deben pasarse conexiones de base de datos, servicios, instancias complejas, secretos o funciones arbitrarias de servidor. Todo dato enviado a un Client Component se considera visible para el navegador.

### 15. Seguridad del renderizado
Los secretos y credenciales DEBEN permanecer exclusivamente en el servidor. Las variables de entorno con secretos NO DEBEN utilizar el prefijo `NEXT_PUBLIC_`. Toda variable `NEXT_PUBLIC_` se considera pública. El frontend no debe recibir datos sensibles confiando en ocultarlos con CSS o React.

### 16. Árbol obligatorio de decisión para componentes
1. ¿El componente necesita estado, eventos, APIs del navegador o librería de cliente?
   - **NO** → Server Component.
   - **SÍ** → continuar.
2. ¿La funcionalidad interactiva puede aislarse en un componente hijo?
   - **SÍ** → mantener el padre como Server Component y convertir solo el hijo en Client Component.
   - **NO** → continuar.
3. ¿El componente necesita realmente ejecutarse en cliente?
   - **SÍ** → Client Component.
   - **NO** → Server Component.

### 17. Objetivo de arquitectura
Minimizar el JavaScript enviado al navegador: Server Components para contenido y estructura; Client Components únicamente para interactividad; TanStack Query para Server State interactivo en cliente; Zustand para estado global exclusivo de cliente; React Hook Form para formularios complejos; URL para estado de navegación; useState/useReducer para estado local.

## SEO técnico y contenido público

Todas las páginas públicas DEBEN ser indexables salvo decisión explícita en contrario.

### 1. Indexabilidad
Toda página pública destinada a captación, información o posicionamiento DEBE ser indexable por defecto. Una página pública SOLO podrá utilizar `noindex` cuando exista una razón funcional, jurídica o SEO explícita. Las áreas privadas, páginas internas, resultados que no deban aparecer en buscadores y contenido no destinado a indexación DEBEN excluirse de los índices cuando corresponda. La aplicación NO DEBE aplicar accidentalmente `noindex` o bloqueos de rastreo globales en producción.

### 2. Contenido disponible para buscadores
El contenido principal destinado a SEO DEBE estar presente en el HTML generado por el servidor. El contenido esencial para comprender una página NO DEBE depender exclusivamente de JavaScript ejecutado después de la carga, llamadas desde `useEffect`, interacciones del usuario o componentes cargados únicamente en cliente. Los Server Components, generación estática y renderizado en servidor DEBEN priorizarse para el contenido público.

### 3. Metadata
Toda página pública indexable DEBE disponer de metadata propia y coherente con su contenido. Como mínimo DEBE poder definir `title`, `description`, URL canónica y metadata social/Open Graph. La metadata DEBE generarse utilizando las capacidades oficiales de Next.js. NO deben utilizarse títulos o descripciones genéricos idénticos para páginas cuyo contenido y finalidad sean diferentes. La metadata DEBE describir fielmente el contenido visible de la página.

### 4. URLs
Las URLs públicas DEBEN ser descriptivas, legibles, estables, semánticas, en minúsculas e independientes de identificadores técnicos cuando exista una alternativa semántica. Las URLs públicas NO DEBEN depender de parámetros técnicos para representar contenido principal cuando pueda utilizarse una ruta semántica. Los cambios de URLs públicas previamente publicadas o indexadas DEBEN preservar el posicionamiento mediante redirecciones permanentes cuando corresponda.

### 5. Canonicalización y contenido duplicado
Cada página pública indexable DEBE tener una URL canónica claramente determinada. La aplicación DEBE evitar que el mismo contenido público sea accesible mediante múltiples URLs indexables sin canonicalización o redirección apropiada. La variante principal del dominio DEBE ser coherente en toda la aplicación.

### 6. Sitemap y robots
La aplicación DEBE generar y mantener `sitemap.xml` y `robots.txt`. El sitemap DEBE incluir únicamente URLs públicas que puedan ser indexadas. Las URLs privadas, administrativas o marcadas como `noindex` NO DEBEN incluirse en el sitemap. `robots.txt` NO DEBE utilizarse como sustituto de los mecanismos adecuados de autenticación o autorización.

### 7. HTML semántico
Las páginas públicas DEBEN utilizar HTML semántico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) cuando representen semánticamente el contenido correspondiente. Cada página DEBE disponer de una jerarquía de encabezados coherente y su encabezado principal identificado. Los encabezados NO DEBEN utilizarse únicamente por razones visuales.

### 8. Enlaces internos
Las páginas públicas importantes DEBEN ser descubribles mediante enlaces HTML rastreables. La navegación principal NO DEBE depender exclusivamente de JavaScript para permitir el acceso a contenido público. Los textos de los enlaces DEBEN describir su destino cuando sea posible, evitando textos genéricos como "haz clic aquí", "ver más" o "más información" cuando pueda utilizarse un texto descriptivo. Las páginas relacionadas DEBEN poder enlazarse entre sí para construir una arquitectura interna coherente.

### 9. Datos estructurados
La aplicación DEBE permitir incorporar datos estructurados compatibles con Schema.org en las páginas públicas cuando representen información realmente existente en la página (ej. `LegalService`, `LocalBusiness`, `Person`, `BreadcrumbList`, `Article`). Los datos estructurados DEBEN corresponder al contenido visible, NO DEBEN inventar información ni crear datos inexistentes, y DEBEN mantenerse sincronizados con la información pública mostrada al usuario. La elección del tipo concreto de Schema.org pertenecerá a la especificación de cada página o feature.

### 10. Imágenes
Las imágenes públicas DEBEN implementarse de forma que no perjudiquen el tiempo de carga, la estabilidad visual, la accesibilidad ni los Core Web Vitals. Las imágenes DEBEN declarar dimensiones o reservar su espacio para evitar cambios de layout. Las imágenes que transmitan información DEBEN disponer de texto alternativo descriptivo, y las puramente decorativas DEBEN utilizar texto alternativo vacío. La carga y optimización de imágenes DEBE utilizar las capacidades de Next.js cuando sean apropiadas.

### 11. Rendimiento orientado a SEO
Las páginas públicas DEBEN diseñarse para obtener buenos Core Web Vitals. Debe minimizarse el JavaScript enviado al navegador, la ejecución innecesaria en cliente, los scripts de terceros, el bloqueo del renderizado, los cambios inesperados de layout y los recursos innecesarios. El rendimiento NO DEBE sacrificarse por animaciones o efectos puramente decorativos sin una justificación clara de experiencia de usuario.

### 12. Fuentes
Las fuentes DEBEN cargarse mediante mecanismos optimizados y evitando dependencias externas innecesarias (usando `next/font`). Las tipografías utilizadas DEBEN estar centralizadas en el sistema de diseño y su carga NO DEBE provocar cambios visuales significativos durante el renderizado.

### 13. Contenido jurídico y calidad
El contenido jurídico público DEBE ser correcto, identificable y revisable. El contenido jurídico generado o asistido por IA NO DEBE publicarse automáticamente sin revisión humana. Cuando una página contenga información jurídica sustantiva, la arquitectura DEBE permitir identificar autor/responsable, fecha de publicación y última revisión cuando corresponda. Las afirmaciones jurídicas NO DEBEN generarse o modificarse dinámicamente por IA sin supervisión. El contenido SEO NO DEBE degradarse mediante keyword stuffing, texto generado únicamente para buscadores, páginas duplicadas con variaciones mínimas o contenido oculto. La utilidad para el usuario DEBE prevalecer sobre la repetición artificial de palabras clave.

### 14. Información del despacho
Los datos públicos fundamentales del despacho (nombre comercial, titular profesional, datos de contacto, dirección profesional, teléfono, correo electrónico, horarios, áreas de práctica) DEBEN mantenerse coherentes en toda la web. La misma información NO DEBE presentarse de forma contradictoria en distintas páginas.

### 15. Accesibilidad y SEO
La estructura destinada a SEO NO DEBE perjudicar la accesibilidad. NO debe utilizarse texto invisible para incluir palabras clave, contenido oculto destinado exclusivamente a buscadores, encabezados vacíos, atributos `alt` cargados artificialmente de keywords ni enlaces ocultos. La semántica utilizada para buscadores DEBE representar también correctamente la estructura percibida por el usuario.

### 16. Errores y páginas inexistentes
Las URLs inexistentes DEBEN devolver el estado HTTP apropiado (ej. `404 Not Found`). Una página inexistente NO DEBE devolver un `200 OK` simulando una página válida. Las redirecciones DEBEN utilizarse únicamente cuando exista un destino equivalente o razonablemente relacionado; NO deben redirigirse indiscriminadamente todas las páginas inexistentes hacia la página principal.

### 17. Separación entre Constitución y especificaciones SEO
La Constitución define únicamente las reglas SEO transversales. Las especificaciones de cada página definirán intención de búsqueda, keywords principales/secundarias, title/description concretos, encabezados, contenido y estrategias locales específicas. Todas las especificaciones particulares DEBEN cumplir las reglas generales de esta sección.

## Diseño responsive y comportamiento multidispositivo

La aplicación DEBE desarrollarse siguiendo una estrategia mobile-first. Los estilos base DEBEN representar la experiencia móvil y las adaptaciones para pantallas de mayor tamaño DEBEN añadirse progresivamente mediante breakpoints. La aplicación NO DEBE desarrollar una versión móvil y una versión de escritorio separadas; DEBE existir una única interfaz adaptable.

### 1. Funcionalidad completa
Toda funcionalidad disponible para un usuario en escritorio DEBE ser accesible también desde dispositivos móviles, salvo que exista una restricción técnica o funcional explícitamente documentada. La versión móvil NO DEBE eliminar funcionalidades necesarias únicamente por falta de espacio. Cuando una interfaz no pueda representarse de la misma forma en móvil, DEBE adaptarse manteniendo la misma capacidad funcional (ej. navegación horizontal a menú móvil, columnas a una columna, panel lateral a desplegable, tabla extensa a vista adaptada/desplazable).

### 2. Ausencia de overflow horizontal
Las páginas NO DEBEN provocar scroll horizontal global en tamaños de pantalla soportados. Los elementos que por su naturaleza puedan requerir desplazamiento horizontal, como tablas o visualizaciones extensas, DEBEN encapsular dicho desplazamiento dentro de su propio contenedor. El contenido principal NO DEBE quedar cortado fuera del viewport.

### 3. Layouts
Los layouts DEBEN poder reorganizarse según el espacio disponible. Las interfaces NO DEBEN depender de anchuras fijas incompatibles con pantallas pequeñas, alturas fijas que puedan cortar contenido, posiciones absolutas como mecanismo principal de layout, tamaños de viewport concretos o la orientación horizontal del dispositivo. Deben priorizarse layouts fluidos utilizando Flexbox, CSS Grid, unidades relativas, límites de anchura y breakpoints centralizados.

### 4. Breakpoints
Los breakpoints DEBEN gestionarse de forma centralizada mediante el sistema de diseño y Tailwind CSS. NO deben inventarse breakpoints arbitrarios dentro de componentes individuales salvo necesidad excepcional documentada. La lógica funcional NO DEBE depender directamente de nombres de dispositivos concretos (iPhone, iPad, Android, MacBook); el comportamiento DEBE depender del espacio disponible y de las capacidades del dispositivo.

### 5. Navegación
La navegación principal DEBE ser completamente utilizable en móvil. Cuando el espacio disponible no permita mostrar la navegación completa, DEBE utilizarse una alternativa adaptada. La navegación móvil DEBE permitir acceder a todas las secciones principales, ser operable mediante tacto y teclado cuando corresponda, poder cerrarse de forma clara, gestionar correctamente el foco y no bloquear permanentemente el contenido. La navegación móvil NO DEBE depender de hover.

### 6. Interacción táctil
Toda acción esencial DEBE poder realizarse mediante interacción táctil. Ninguna funcionalidad DEBE depender exclusivamente de hover, click derecho, posición del cursor o gestos no evidentes. Los elementos interactivos DEBEN disponer de un área táctil suficiente; los controles táctiles principales DEBERÍAN disponer de un área interactiva mínima aproximada de 44 × 44 píxeles CSS.

### 7. Formularios
Los formularios DEBEN ser completamente utilizables desde dispositivos móviles. Los campos DEBEN adaptarse al ancho disponible, mantener labels visibles, mostrar errores sin romper el layout, utilizar tipos de input HTML adecuados y permitir el teclado virtual apropiado. Las acciones principales NO DEBEN quedar ocultas por el teclado virtual o fuera del viewport sin acceso razonable. Los formularios NO DEBEN requerir zoom manual para poder utilizarse.

### 8. Tipografía y contenido
El texto DEBE permanecer legible en todos los tamaños de pantalla soportados sin requerir zoom manual. Los tamaños tipográficos, espaciados y longitudes de línea DEBEN adaptarse mediante el sistema de diseño. Títulos largos, URLs, correos electrónicos y contenido dinámico NO DEBEN romper el layout.

### 9. Imágenes y contenido multimedia
Las imágenes y recursos multimedia DEBEN adaptarse al espacio disponible sin deformarse ni provocar overflow. La relación de aspecto DEBE preservarse cuando corresponda. Los recursos visuales NO DEBEN obligar a descargar versiones innecesariamente grandes cuando puedan servirse versiones adecuadas al dispositivo.

### 10. Tablas y datos complejos
Las tablas NO DEBEN reducirse hasta hacer ilegible su contenido. Cuando una tabla no pueda mostrarse correctamente en móvil, la especificación de la funcionalidad DEBE elegir entre desplazamiento horizontal contenido, reducción de columnas visibles, representación alternativa o tarjetas adaptadas. La adaptación NO DEBE eliminar datos o acciones esenciales sin proporcionar otra forma de acceder a ellos.

### 11. Modales y overlays
Los modales, diálogos, menús y overlays DEBEN permanecer completamente utilizables en pantallas pequeñas. NO DEBEN superar el viewport sin posibilidad de scroll, dejar controles esenciales fuera de la pantalla, impedir su cierre, perder el foco correctamente ni dejar el fondo interactuable cuando deba estar bloqueado.

### 12. Orientación y cambio de tamaño
La aplicación DEBE seguir siendo funcional en orientación vertical, orientación horizontal, al cambiar el tamaño de la ventana o en pantalla dividida. El comportamiento responsive NO DEBE depender exclusivamente de la carga inicial de la página.

### 13. Contenido dinámico
La interfaz DEBE soportar contenido de longitud variable. NO debe asumirse que un nombre tendrá una longitud determinada, un título ocupará una sola línea, un mensaje de error será corto o un botón siempre tendrá el mismo texto. El contenido dinámico NO DEBE romper la interfaz al crecer dentro de límites razonables.

### 14. Área privada
Las mismas reglas responsive DEBEN aplicarse a la futura área privada (gestión de clientes, expedientes, documentos, mensajes, notificaciones, formularios). La versión móvil puede utilizar representaciones distintas de la versión de escritorio, pero DEBE mantener acceso a las funcionalidades necesarias.

### 15. Criterio de finalización
Una funcionalidad frontend NO DEBE considerarse terminada únicamente porque funcione correctamente en escritorio. Antes de darse por completada DEBE verificarse que el contenido es accesible en móvil, no existe overflow global, la navegación funciona, los controles son utilizables mediante tacto, los formularios y acciones principales son accesibles, el contenido mantiene una jerarquía visual comprensible y no se pierde funcionalidad esencial.

## Sistema de diseño y consistencia visual

La interfaz de Lorente Legal DEBE utilizar un sistema de diseño centralizado y coherente. El sistema de diseño será la fuente de verdad para las decisiones visuales compartidas del frontend. Los detalles concretos de identidad visual, componentes, variantes y tokens se definirán fuera de esta Constitución en la documentación específica del sistema de diseño.

### 1. Sistema de estilos
Tailwind CSS DEBE utilizarse como sistema principal de estilos del frontend. NO deben introducirse sistemas de estilos paralelos sin una justificación técnica documentada. NO deben añadirse librerías CSS, frameworks visuales o sistemas de componentes alternativos que dupliquen responsabilidades ya cubiertas por Tailwind y el sistema de diseño existente.

### 2. Tokens de diseño
Las decisiones visuales globales DEBEN estar centralizadas mediante tokens o configuración compartida (colores, tipografías, tamaños tipográficos, espaciados, radios, sombras, tamaños de contenedores, breakpoints, capas visuales, transiciones y estilos de foco). Los componentes NO DEBEN introducir valores visuales arbitrarios repetidos cuando exista un token equivalente en el sistema de diseño. Las decisiones visuales globales NO DEBEN duplicarse entre componentes.

### 3. Componentes UI reutilizables
Los componentes visuales básicos reutilizables DEBEN implementarse dentro de `src/components/ui/` (`Button`, `Input`, `Textarea`, `Select`, `Checkbox`, `Card`, `Badge`, `Modal`, `Dialog`, `Alert`, `Tooltip`, `Tabs`, `Table` primitives, etc.). Las features DEBEN reutilizar los componentes existentes del sistema de diseño antes de crear implementaciones nuevas equivalentes. NO DEBEN existir múltiples implementaciones independientes del mismo componente visual básico.

### 4. Variantes
Cuando dos elementos compartan la misma responsabilidad semántica pero necesiten diferencias visuales, DEBEN implementarse preferentemente como variantes del mismo componente (ej. `Button` con variantes `primary`, `secondary`, `outline`, `destructive`). NO debe crearse un componente nuevo únicamente porque necesite una apariencia distinta si sigue representando el mismo concepto. Las variantes concretas se definirán en el sistema de diseño.

### 5. Responsabilidad del sistema de diseño
Los componentes de `src/components/ui/` DEBEN ser independientes de la lógica de negocio. NO deben conocer conceptos como clientes, expedientes, trámites, documentos jurídicos, nacionalidad, extranjería o abogados. Las features serán responsables de componer los componentes UI para representar conceptos de negocio.

### 6. Consistencia visual
La misma acción, estado o concepto visual DEBE representarse de forma coherente en toda la aplicación (acciones principales con el mismo patrón visual, errores con patrón común, estados deshabilitados consistentes, formularios coherentes, criterios compartidos de foco, hover, active y disabled). Una feature NO DEBE redefinir arbitrariamente la apariencia de un componente global.

### 7. Diseño responsive
El sistema de diseño DEBE soportar la estrategia mobile-first definida en esta Constitución. Los componentes UI DEBEN poder utilizarse correctamente en distintos tamaños de pantalla. Los breakpoints DEBEN gestionarse mediante la configuración centralizada del sistema de diseño; NO deben introducirse breakpoints arbitrarios repetidos en componentes cuando exista una alternativa centralizada.

### 8. Accesibilidad
Los componentes del sistema de diseño DEBEN construirse teniendo en cuenta accesibilidad desde su implementación base (navegación por teclado, foco visible, estados disabled, semántica HTML apropiada y atributos accesibles). Las features NO DEBEN tener que reimplementar la accesibilidad básica de los componentes globales.

### 9. Reutilización antes de creación
Antes de crear un nuevo componente visual, DEBE comprobarse:
1. Si ya existe un componente equivalente en `src/components/ui/`.
2. Si el comportamiento puede resolverse mediante una variante de un componente existente.
3. Si el nuevo componente pertenece realmente al sistema de diseño o únicamente a una feature.

Solo debe crearse un nuevo componente global cuando represente una responsabilidad visual reutilizable que no esté cubierta por el sistema existente.

### 10. Prohibición de estilos duplicados
NO deben copiarse manualmente conjuntos repetidos de clases Tailwind para recrear componentes existentes (ej. crear varios botones con elementos `<button>` independientes con clases repetidas cuando ya existe un componente `Button`). Debe utilizarse el componente centralizado.

### 11. Identidad visual
La identidad visual de Lorente Legal DEBE mantenerse coherente en todas las páginas públicas y privadas. Las features NO DEBEN introducir por iniciativa propia nuevas paletas de colores, tipografías, estilos visuales globales, radios, sombras o patrones de interacción que afecten a la identidad general del producto. Los cambios globales de identidad visual DEBEN realizarse en el sistema de diseño.

### 12. Separación entre Constitución y Design System
Esta Constitución define únicamente las reglas generales del sistema de diseño. La documentación específica del sistema de diseño definirá paleta de colores, tipografías, escalas tipográficas, espaciados, radios, sombras, iconografía, componentes UI, variantes, estados visuales, patrones de formularios, navegación, cards, tablas, animaciones, transiciones y ejemplos de uso. Los valores concretos NO DEBEN fijarse en esta Constitución. Las especificaciones y componentes futuros DEBEN respetar el sistema de diseño vigente.

## Comunicación entre frontend y backend

El frontend se comunicará con el backend exclusivamente mediante la API HTTP de ASP.NET Core.
El backend será la fuente de verdad de los datos, reglas de negocio, validaciones y permisos.
El frontend NO DEBE acceder directamente a PostgreSQL, almacenamiento de documentos, servicios de WhatsApp, correo, APIs jurídicas externas, proveedores de IA ni ningún recurso de infraestructura; toda comunicación DEBE pasar por ASP.NET Core.

### 1. Contrato de la API
ASP.NET Core DEBE exponer un contrato OpenAPI. El contrato OpenAPI será la fuente de verdad para los contratos HTTP entre frontend y backend.
El flujo obligatorio para lectura y uso de datos DEBE ser:
```text
ASP.NET Core -> OpenAPI -> Tipos TypeScript generados -> API Client -> Server Components / TanStack Query -> Componentes React
```
Los tipos TypeScript correspondientes a requests y responses DEBEN generarse automáticamente a partir del contrato OpenAPI mediante `openapi-typescript` y guardarse en `src/lib/api/generated/`. NO deben editarse manualmente los archivos generados ni mantenerse manualmente dos definiciones independientes del mismo DTO en C# y TypeScript. Si cambia el contrato OpenAPI, DEBEN regenerarse los tipos TypeScript y corregirse los errores de compilación resultantes; NO deben utilizarse casts arbitrarios (`as Client`) para evitar adaptar el frontend.

### 2. Ubicación del código de API
Las llamadas HTTP NO DEBEN realizarse directamente dentro de componentes React. Está prohibido realizar `fetch`, `axios` o `XMLHttpRequest` directamente dentro de `page.tsx`, `layout.tsx`, componentes visuales, componentes de formulario o stores de Zustand. Toda comunicación HTTP DEBE pasar por la capa de API (`src/lib/api/` para clientes e infraestructura común y `src/features/<feature_name>/api/` para operaciones específicas).

### 3. Cliente HTTP
Se utilizará `fetch` nativo como cliente HTTP. Axios NO DEBE añadirse salvo que exista una necesidad técnica concreta que `fetch` no pueda resolver adecuadamente. Debe existir una capa común encargada de URL base, headers comunes, serialización/deserialización JSON, autenticación, tratamiento de errores, timeouts, cancelación y trazabilidad.

### 4. Cliente de servidor y cliente de navegador
DEBEN existir dos formas explícitas de acceder a la API:
- **Server API Client**: para Server Components, código ejecutado exclusivamente en servidor y Server Actions.
- **Browser API Client**: para Client Components, TanStack Query, formularios interactivos y mutations en navegador.

NO debe utilizarse Browser API Client desde Server Components ni código dependiente de `window`, `document` o APIs del navegador. NO debe utilizarse Server API Client desde código ejecutado en navegador.

### 5. Variables de entorno
La URL del backend NO DEBE escribirse directamente en el código; DEBE obtenerse mediante configuración (ej. `API_BASE_URL`). Las variables utilizadas exclusivamente por el servidor NO deben llevar el prefijo `NEXT_PUBLIC_`. Solo las variables públicas conocidas por el navegador pueden llevar `NEXT_PUBLIC_`; los secretos NUNCA deben llevar este prefijo.

### 6. Requests
Las funciones de API DEBEN representar operaciones concretas (ej. `getClients()`, `getClientById(id)`, `createClient(request)`). NO deben crearse funciones genéricas ambiguas como `request()`, `execute()` o `callApi()` salvo para el cliente HTTP interno de bajo nivel.

### 7. Responses
Las respuestas HTTP DEBEN estar tipadas. NO debe utilizarse `any` para responses de la API. Todo dato recibido del backend debe ajustarse al contrato OpenAPI correspondiente; NO deben crearse casts arbitrarios para silenciar errores de TypeScript.

### 8. Errores HTTP
El backend DEBE utilizar respuestas de error consistentes basadas en `ProblemDetails` de ASP.NET Core. El frontend DEBE disponer de una representación común de errores de API (`ApiError` con `status`, `title`, `detail`, `code`, `validationErrors`). La capa de API convierte las respuestas de error del backend en errores tipados para el frontend.

### 9. Códigos HTTP
El frontend DEBE distinguir como mínimo: 200-299 (éxito), 400 (petición inválida), 401 (no autenticado), 403 (autenticado sin permiso), 404 (recurso inexistente), 409 (conflicto de negocio), 422 (validación), 429 (límite excedido), 500-599 (error de servidor). Un error 401/403 no debe mostrarse como un error genérico o no existente salvo decisión explícita de seguridad del backend.

### 10. Errores de validación
Los errores de validación enviados por ASP.NET Core DEBEN poder asociarse a campos concretos de formularios en React Hook Form. Las validaciones del backend tienen prioridad sobre las del frontend; el frontend no debe asumir que un formulario válido según Zod será aceptado necesariamente por el backend.

### 11. TanStack Query
Las lecturas interactivas desde Client Components DEBEN utilizar TanStack Query (`useClients()`, `useCases()`), y las escrituras DEBEN utilizar mutations (`useCreateClient()`, `useUploadDocument()`). Los componentes no deben invocar directamente las funciones de API cuando deban integrarse con la caché de TanStack Query. NO debe utilizarse TanStack Query automáticamente desde Server Components.

### 12. Query Keys
Las query keys DEBEN estar centralizadas por feature (ej. `clientKeys.all`, `clientKeys.lists()`, `clientKeys.detail(id)`). NO deben escribirse strings arbitrarios repetidos por la aplicación.

### 13. Invalidación de caché
Después de una mutation, las queries afectadas DEBEN invalidarse o actualizarse explícitamente. NO debe confiarse en que la UI se actualice de forma no explícita.

### 14. Reintentos
Las peticiones de lectura GET podrán reintentarse automáticamente un máximo de 2 veces. NO deben reintentarse automáticamente POST, PUT, PATCH o DELETE (salvo idempotencia explícita) ni errores 400, 401, 403, 404, 409 o 422. Errores de red y determinados 5xx podrán reintentarse.

### 15. Timeout
Toda petición HTTP DEBE disponer de timeout (15 segundos por defecto). Las operaciones de mayor duración (subida de documentos, procesamiento de archivos, IA) deberán declarar explícitamente un timeout distinto.

### 16. Cancelación
Las peticiones que puedan dejar de ser necesarias DEBEN poder cancelarse mediante `AbortController`. Cambiar de página o sustituir una búsqueda anterior NO debe mantener peticiones innecesarias activas si pueden cancelarse.

### 17. Búsquedas
Las búsquedas de texto que invoquen al backend desde el navegador DEBEN utilizar debounce (300 ms por defecto) y cancelar la búsqueda anterior si está en curso.

### 18. Paginación
Listados que potencialmente puedan superar 100 registros DEBEN paginarse desde el backend. Tamaño por defecto: 25 elementos (opciones permitidas: 25, 50, 100; superior requiere justificación).

### 19. Filtros y ordenación
Cuando un listado se pagine desde backend, los filtros, la búsqueda y la ordenación también DEBEN ejecutarse desde backend. Los filtros visibles DEBEN reflejarse en la URL cuando tenga sentido compartirlos.

### 20. Autenticación
Las peticiones autenticadas desde el navegador DEBEN enviar credenciales seguras (preferentemente cookies HttpOnly). Los componentes no deben leer directamente ni añadir manualmente tokens de autenticación sensibles.

### 21. CORS
El backend DEBE permitir únicamente los orígenes frontend necesarios. En producción NO debe utilizarse `Access-Control-Allow-Origin: *` para endpoints autenticados.

### 22. Server Components y Server API Client
Los Server Components obtendrán datos directamente a través del Server API Client. NO se utilizará TanStack Query para datos que solo se necesiten durante el renderizado del servidor.

### 23. Datos sensibles
Todo dato devuelto por la API se considera visible para el usuario. El backend deberá crear DTOs específicos para evitar enviar propiedades que no deban exponerse; el frontend NO debe recibir datos sensibles para luego ocultarlos desde React.

### 24. Logs
El frontend NO debe registrar en consola tokens, contraseñas, documentos, datos personales ni secretos. Los `console.log` de desarrollo DEBEN eliminarse antes de producción.

### 25. Árbol obligatorio de decisión de acceso a API
1. **¿La petición se realiza durante renderizado en servidor?**
   - **SÍ** → Server API Client.
   - **NO** → continuar.
2. **¿La petición se realiza desde un Client Component o código de navegador?**
   - **SÍ** → Browser API Client.
   - **NO** → continuar.
3. **¿Es una lectura de Server State interactiva?**
   - **SÍ** → TanStack Query + Browser API Client.
   - **NO** → continuar.
4. **¿Es una mutation de Server State?**
   - **SÍ** → TanStack Query Mutation + Browser API Client.
   - **NO** → continuar.
5. **¿Existe un `fetch`, `axios` o `XMLHttpRequest` directamente dentro de un componente?**
   - **SÍ** → eliminación de imprecisión; debe moverse a la capa API correspondiente (`src/lib/api/` o `src/features/<feature>/api/`).

### 26. Regla de contrato único
ASP.NET Core es la fuente de verdad del contrato HTTP. Los tipos generados mediante OpenAPI en `src/lib/api/generated/` NO DEBEN editarse manualmente.

## Arquitectura y estructura de carpetas del frontend

El frontend DEBE organizarse principalmente por funcionalidades de negocio (features), no únicamente por tipo técnico.

La estructura base DEBE ser:
```text
src/
  app/
  components/
    ui/
    layout/
  features/
  lib/
    api/
    auth/
    config/
  hooks/
  stores/
  types/
  utils/
```

Toda infraestructura HTTP común DEBE vivir en `src/lib/api/` (`browser-client.ts`, `server-client.ts`, `errors.ts`, `generated/`). Las operaciones concretas de una feature DEBEN vivir en `src/features/<feature>/api/`. NO debe existir una tercera capa genérica `src/services/` para llamadas HTTP.

### 1. Responsabilidad de `app/`
La carpeta `src/app/` pertenece exclusivamente al sistema de rutas de Next.js App Router (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`, metadata, route groups y carpetas dinámicas). Las páginas dentro de `app/` DEBEN ser ligeras (máximo 150 líneas recomendadas, división requerida a las 200 líneas); NO DEBEN contener lógica compleja de negocio, llamadas HTTP arbitrarias, esquemas de validación ni componentes grandes definidos localmente. Se limitan a obtener parámetros, obtener datos, componer features y definir metadatos.

### 2. Features
Toda funcionalidad de negocio significativa DEBE vivir dentro de `src/features/<feature_name>/` (ej. `clients`, `cases`, `documents`, `contact`, `immigration`, `nationality`). Cada feature puede albergar subcarpetas como `api/`, `components/`, `hooks/`, `schemas/`, `stores/`, `types/`, `utils/` e `index.ts`. Solo DEBEN crearse carpetas que contengan archivos reales; prohibido crear estructuras vacías por anticipación.

### 3. Componentes de una feature
Los componentes utilizados exclusivamente por una feature DEBEN permanecer dentro de dicha feature (`src/features/<feature>/components/`). No deben colocarse en `src/components/`.

### 4. Promoción de componentes compartidos
Un componente se moverá fuera de una feature únicamente cuando sea utilizado por al menos 2 features independientes y represente realmente un concepto genérico. Dos componentes visualmente parecidos NO deben unificarse si representan conceptos de negocio distintos.

### 5. `components/ui`
Contiene exclusivamente componentes visuales genéricos y agnósticos del dominio (`Button`, `Input`, `Modal`, `Card`, `Badge`, `Spinner`, etc.). NO DEBEN conocer ni importar conceptos de negocio (cliente, expediente, documento, trámite, etc.).

### 6. `components/layout`
Contiene componentes estructurales globales (`Header`, `Footer`, `Sidebar`, `MainNavigation`, `MobileNavigation`, `PageContainer`). Conocen la estructura global de la UI pero no contienen lógica de negocio específica de features.

### 7. API por feature
Las operaciones HTTP específicas de una feature viven en `src/features/<feature>/api/` (ej. `get-clients.ts`, `create-client.ts`, `client-keys.ts`). La infraestructura HTTP genérica permanece en `src/lib/api/`.

### 8. Hooks
Los hooks específicos de feature viven en `src/features/<feature>/hooks/`. `src/hooks/` SOLO contendrá hooks genéricos y verdaderamente globales utilizados por 2+ features independientes (ej. `useMediaQuery`, `useDebounce`).

### 9. Stores
Los stores Zustand de una feature viven en `src/features/<feature>/stores/`. `src/stores/` solo contendrá stores de UI global consumidos por 2+ features independientes. Prohibido un store único global monolítico.

### 10. Schemas
Los esquemas Zod específicos de feature pertenecen a `src/features/<feature>/schemas/`. Solo se comparten globalmente si representan exactamente el mismo concepto en 2+ features.

### 11. Types
Tipos específicos de feature viven en `src/features/<feature>/types/`. Tipos generados por OpenAPI viven en `src/lib/api/generated/`. `src/types/` solo contiene tipos globales compartidos por 2+ features.

### 12. Utilidades
Las funciones auxiliares específicas de feature viven en `src/features/<feature>/utils/`. `src/utils/` solo contiene funciones puras y genéricas (ej. `formatDate()`, `formatCurrency()`) utilizadas por 2+ features.

### 13. Dependencias entre features y API pública
Una feature NO DEBE importar directamente archivos internos de otra feature (ej. prohibido `import ClientCard from "@/features/clients/components/ClientCard"`). La comunicación entre features se realiza exclusivamente a través del archivo de entrada público de la feature (`src/features/<feature>/index.ts`).

### 14. API pública de una feature (`index.ts`)
Cada feature exporta únicamente los componentes, hooks o utilidades que deben ser accesibles externamente a través de su `index.ts`. Los detalles internos no se exportan para preservar los límites de la feature.

### 15. Dirección permitida de dependencias
La dirección de dependencias del frontend DEBE ser explícitamente:
```text
app -> features -> components/ui + lib + hooks/types/utils compartidos
```
- `app` puede depender de `features`
- `features` puede depender de `components/ui`, `lib`, hooks globales, types globales y utils globales
- `components/ui` NO DEBE depender de features
- `lib` NO DEBE depender de features
- las capas inferiores NO DEBEN importar capas superiores

### 16. Dependencias circulares
Prohibidas las dependencias circulares. Si dos features se necesitan mutuamente, la funcionalidad común DEBE extraerse a una capa compartida adecuada.

### 17. Tamaño de archivos
Un archivo general TypeScript NO DEBERÍA superar las 300 líneas de código. Refactorización requerida al superar 400 líneas salvo justificación técnica documentada.

### 18. Nombres de archivos y componentes
Los archivos TypeScript utilizan estrictamente `kebab-case` (ej. `client-card.tsx`, `create-client.ts`, `use-client.ts`). Los componentes React utilizan dentro del código nombres `PascalCase` (`export function ClientCard() {}`).

### 19. Prohibición de carpetas genéricas ambiguas
Prohibido crear carpetas o archivos ambiguos como `common/`, `shared/`, `misc/`, `helpers/` o `stuff/`. No debe existir una carpeta cajón de sastre.

### 20. Colocación por proximidad
El código vive lo más cerca posible de donde se utiliza. Solo se promueve a global si es consumido por 2+ features independientes y representa exactamente el mismo concepto.

### 21. Regla de abstracción no anticipada
- **1 uso**: Mantener local.
- **2 usos en la misma feature**: Extraer dentro de esa feature.
- **2+ usos en distintas features**: Evaluar extracción a carpeta compartida.

### 22. Árbol obligatorio para decidir ubicación
1. ¿Pertenece exclusivamente a una feature? → `src/features/<feature>/`.
2. ¿Es un componente visual genérico usado por 2+ features? → `src/components/ui/`.
3. ¿Es un componente de estructura global? → `src/components/layout/`.
4. ¿Es infraestructura técnica compartida? → `src/lib/`.
5. ¿Es un hook genérico usado por 2+ features? → `src/hooks/`.
6. ¿Es un tipo global usado por 2+ features? → `src/types/`.
7. ¿Es una función pura genérica usada por 2+ features? → `src/utils/`.



## Accesibilidad

Toda la interfaz de Lorente Legal DEBE diseñarse y desarrollarse teniendo en cuenta la accesibilidad desde su implementación inicial. Las páginas públicas y privadas DEBEN aspirar al cumplimiento de WCAG 2.2 nivel AA. La accesibilidad NO DEBE añadirse posteriormente como una capa correctiva cuando pueda resolverse correctamente desde el diseño del componente.

### 1. HTML semántico
La interfaz DEBE utilizar elementos HTML según su significado y responsabilidad. Deben preferirse elementos semánticos nativos (`button`, `a`, `nav`, `main`, `header`, `footer`, `section`, `article`, `form`, `label`, `fieldset`, `legend`) frente a elementos genéricos con comportamiento recreado mediante JavaScript. NO DEBE utilizarse un `div` o `span` como sustituto de un botón, enlace u otro control nativo cuando exista un elemento HTML adecuado.

### 2. Navegación mediante teclado
Toda funcionalidad interactiva DEBE poder utilizarse mediante teclado cuando dicha interacción sea aplicable (recorrer elementos interactivos, activar acciones, utilizar formularios, abrir/cerrar menús y modales). El orden de navegación mediante teclado DEBE ser coherente con el orden visual y semántico de la página. NO deben utilizarse valores positivos de `tabindex` para forzar artificialmente el orden de navegación.

### 3. Foco
Todo elemento interactivo que pueda recibir foco DEBE disponer de un indicador de foco visible. NO debe eliminarse el estilo de foco sin proporcionar una alternativa claramente visible. Los componentes que alteren significativamente la interfaz (modales, diálogos, menús, drawers) DEBEN gestionar correctamente el foco; al cerrarse, el foco DEBE poder volver al elemento originario.

### 4. Formularios
Todo campo de formulario DEBE disponer de una etiqueta accesible asociada (`label`). Los placeholders NO DEBEN utilizarse como sustituto de un `label`. Las instrucciones necesarias y los errores de validación DEBEN asociarse al campo correspondiente de forma accesible y NO DEBEN comunicarse únicamente mediante color. Los campos obligatorios DEBEN identificarse de forma accesible.

### 5. Color y significado
La interfaz NO DEBE utilizar exclusivamente el color para comunicar errores, estados, advertencias, selección, éxito o prioridad. Cuando un color tenga significado funcional, DEBE existir otra señal complementaria (texto, icono, etiqueta o patrón visual). El sistema de diseño DEBE utilizar combinaciones de colores con contraste suficiente.

### 6. Contenido textual
El contenido DEBE permanecer comprensible independientemente de su presentación visual. Los textos de botones, enlaces, instrucciones y mensajes DEBEN describir de forma comprensible la acción o información correspondiente, evitando textos ambiguos.

### 7. Imágenes
Las imágenes que transmitan información DEBEN disponer de texto alternativo adecuado (`alt`). Las imágenes puramente decorativas DEBEN utilizar un texto alternativo vacío (`alt=""`). El atributo `alt` NO DEBE utilizarse para keyword stuffing, repetir información idéntica en texto o describir decoraciones irrelevantes.

### 8. Iconos
Un icono que represente una acción sin texto visible DEBE disponer de un nombre accesible. Los iconos puramente decorativos DEBEN ocultarse de las tecnologías de asistencia (`aria-hidden="true"`). NO debe asumirse que el significado visual de un icono es suficiente.

### 9. ARIA
Los atributos y roles ARIA SOLO DEBEN utilizarse cuando el HTML nativo no proporcione la semántica necesaria. NO DEBE utilizarse ARIA para recrear controles que puedan implementarse mediante elementos HTML nativos. Los atributos ARIA utilizados DEBEN reflejar correctamente el estado real del componente.

### 10. Contenido dinámico
Los cambios importantes de estado que se produzcan sin navegación completa (errores, confirmaciones, resultados de operaciones) DEBEN poder comunicarse de forma accesible cuando el usuario necesite conocerlos (utilizando regiones en vivo / `aria-live` cuando corresponda).

### 11. Modales y diálogos
Los diálogos y modales DEBEN tener un título accesible, permitir su cierre, gestionar el foco, impedir que el foco navegue por contenido inaccesible de fondo y devolver el foco adecuadamente al cerrarse. NO deben utilizarse modales para contenido que pueda presentarse de forma más simple sin bloquear al usuario.

### 12. Movimiento y animaciones
La funcionalidad de la aplicación NO DEBE depender de animaciones. Las animaciones y transiciones DEBEN respetar las preferencias del usuario relacionadas con reducción de movimiento (`prefers-reduced-motion`). Los efectos puramente decorativos NO DEBEN dificultar lectura, navegación o interacción.

### 13. Zoom y escalado
La interfaz DEBE permanecer funcional cuando el usuario aumente el tamaño del contenido mediante las herramientas del navegador o sistema operativo. El diseño NO DEBE bloquear artificialmente el zoom del navegador ni perder funcionalidad esencial al escalar el texto.

### 14. Contenido multimedia
Cuando se incorpore contenido multimedia que contenga información necesaria para comprender la página, DEBEN proporcionarse alternativas accesibles. La reproducción automática de contenido con sonido NO DEBE utilizarse.

### 15. Componentes reutilizables
Los requisitos básicos de accesibilidad DEBEN resolverse dentro de los componentes reutilizables del sistema de diseño (`Button`, `Input`, `Dialog`, `Select`, `Checkbox`, `Tabs`, componentes de formularios) desde su implementación base. Las features NO DEBEN reimplementar repetidamente la accesibilidad fundamental.

### 16. Responsabilidad de las features
La existencia de componentes UI accesibles NO exime a las features de mantener una estructura accesible (orden lógico, jerarquía de encabezados coherente, contexto en controles y comunicación comprensible de errores).

### 17. Accesibilidad y responsive
La experiencia accesible DEBE mantenerse en todos los tamaños de pantalla soportados. La adaptación móvil NO DEBE eliminar información necesaria, ocultar controles sin alternativa accesible, alterar el orden de foco o depender de hover.

### 18. Accesibilidad y SEO
Las necesidades SEO NO DEBEN utilizarse como justificación para degradar la accesibilidad. La estructura semántica destinada a buscadores DEBE representar también correctamente la estructura real del contenido para el usuario. Prohibidos encabezados vacíos, texto o enlaces ocultos exclusivamente para buscadores o `alt` inflados artificialmente con keywords.

### 19. Validación
Las funcionalidades frontend DEBEN revisarse teniendo en cuenta accesibilidad antes de considerarse terminadas (combinando análisis automatizado, revisión semántica, navegación por teclado, comprobación de foco y errores). Las herramientas automáticas NO DEBEN considerarse suficientes por sí solas.

### 20. Separación entre Constitución y especificaciones
Esta Constitución establece los requisitos generales de accesibilidad. Las especificaciones concretas podrán definir el comportamiento accesible específico de componentes o workflows particulares sin reducir los requisitos generales de esta sección.


## Estados de interfaz y gestión de errores en frontend

Toda funcionalidad frontend que dependa de datos, procesos asíncronos o acciones del usuario DEBE contemplar explícitamente sus estados relevantes. La aplicación NO DEBE asumir que una operación terminará siempre correctamente ni que siempre existirán datos disponibles.

### 1. Estados mínimos
Toda vista o componente que dependa de datos asíncronos DEBE contemplar, cuando sean aplicables, los siguientes estados: carga, éxito, ausencia de datos, error, acción en curso y acción completada. La especificación concreta determinará qué estados son necesarios según la funcionalidad. NO debe renderizarse una interfaz incompleta o ambigua mientras el sistema desconoce todavía el estado real de los datos.

### 2. Estado de carga
Durante una operación asíncrona, la interfaz DEBE proporcionar feedback cuando el usuario necesite saber que el sistema está procesando una acción. El estado de carga NO DEBE bloquear partes no relacionadas de la interfaz, provocar cambios de layout innecesarios, ocultar información que el usuario todavía necesita ni permitir ejecutar repetidamente una acción que ya está en curso cuando dicha repetición pueda producir duplicados.

### 3. Estados vacíos
La ausencia válida de datos NO DEBE tratarse como un error (ej. cliente sin expedientes, búsqueda sin resultados, usuario sin notificaciones). Los estados vacíos DEBEN comunicar claramente que la operación se ha realizado correctamente pero no existen datos que mostrar. Cuando exista una acción razonable para continuar, la interfaz DEBE poder ofrecerla.

### 4. Errores recuperables
Cuando una operación falle y el usuario pueda recuperarse, la interfaz DEBE explicar que la operación no se ha completado, preservar los datos introducidos por el usuario cuando sea posible, permitir reintentar cuando tenga sentido y evitar mensajes técnicos incomprensibles. NO deben mostrarse directamente al usuario stack traces, nombres internos de excepciones, detalles de infraestructura, SQL, identificadores técnicos innecesarios, secretos ni respuestas crudas de APIs.

### 5. Errores no recuperables
Los errores inesperados que impidan continuar DEBEN gestionarse mediante mecanismos centralizados. Next.js DEBE utilizar sus mecanismos de gestión de errores cuando corresponda (`error.tsx`, `not-found.tsx`, boundaries apropiados). Una excepción inesperada NO DEBE provocar una pantalla en blanco ni dejar la aplicación en un estado incoherente.

### 6. Recursos inexistentes
Cuando un recurso solicitado no exista, la interfaz DEBE diferenciar ese caso de errores de servidor, ausencia de permisos o ausencia de autenticación. Las páginas o recursos inexistentes DEBEN utilizar el comportamiento correspondiente a `404`. Un recurso inexistente NO DEBE mostrarse como un error genérico de servidor.

### 7. Autenticación y autorización
Los estados relacionados con seguridad DEBEN tratarse de forma diferenciada: `401` (no autenticado o sesión no válida), `403` (autenticado sin permiso), `404` (recurso inexistente o backend oculta su existencia por seguridad). El frontend NO DEBE inferir permisos únicamente a partir del estado visual.

### 8. Acciones en curso
Cuando una acción que modifica datos esté en curso (crear cliente, enviar formulario, subir documento, enviar mensaje, realizar pago, acción administrativa), la interfaz DEBE impedir duplicaciones accidentales cuando puedan provocar efectos repetidos (deshabilitando temporalmente el control, mostrando estado de progreso, utilizando idempotencia en backend o combinación de varias medidas).

### 9. Confirmación de éxito
Cuando una operación cambie datos de forma relevante, el usuario DEBE poder conocer si la operación se ha completado correctamente. El feedback de éxito NO DEBE depender exclusivamente del color. NO todas las operaciones requieren una notificación explícita si el resultado ya es evidente mediante el cambio de interfaz.

### 10. Acciones destructivas
Las acciones que puedan provocar pérdida significativa o irreversible de información DEBEN distinguirse visual y funcionalmente de las acciones normales. Cuando una acción no pueda deshacerse fácilmente, DEBE existir una confirmación adecuada antes de ejecutarla. La confirmación NO DEBE utilizarse indiscriminadamente para acciones triviales. Las acciones destructivas DEBEN autorizarse siempre en backend.

### 11. Preservación de datos introducidos
Cuando una petición falle, los datos que el usuario haya introducido manualmente (formularios, comentarios, mensajes, filtros complejos, datos de workflows) NO DEBEN perderse innecesariamente. La aplicación DEBE evitar limpiar el estado antes de saber que la operación se ha completado correctamente.

### 12. Errores de formularios
Los errores de validación DEBEN mostrarse lo más cerca posible del campo o acción que los provoca. Los errores globales del formulario DEBEN diferenciarse de los errores asociados a campos concretos. Los errores enviados por el backend DEBEN poder integrarse en el sistema de errores del formulario. El usuario NO DEBE tener que buscar manualmente qué campo ha provocado un error cuando el sistema pueda identificarlo.

### 13. Conectividad
La interfaz DEBE poder distinguir, cuando sea posible, entre error del backend, timeout, cancelación, pérdida de conectividad, error de validación y error de autorización. NO todos estos casos deben mostrarse al usuario con el mismo mensaje.

### 14. Reintentos
La interfaz PODRÁ permitir o ejecutar reintentos únicamente cuando la operación pueda repetirse de forma segura. Las operaciones que puedan producir efectos duplicados NO DEBEN reintentarse automáticamente salvo que hayan sido diseñadas explícitamente para ser idempotentes.

### 15. Cancelación
Cuando una operación pueda cancelarse porque ha dejado de ser necesaria, el frontend DEBE permitir que la infraestructura técnica correspondiente evite mantener trabajo innecesario (`AbortController`). La cancelación NO DEBE mostrarse como un error al usuario cuando haya sido provocada intencionadamente por navegación, nueva búsqueda u otra interacción válida.

### 16. Consistencia de mensajes
Los mensajes de error, éxito, advertencia, información y confirmación DEBEN seguir patrones visuales y de lenguaje definidos por el sistema de diseño. Una misma clase de situación NO DEBE comunicarse de formas contradictorias en distintas partes de la aplicación.

### 17. Lenguaje de errores
Los mensajes dirigidos al usuario DEBEN ser comprensibles, indicar qué ha ocurrido cuando sea útil, indicar qué puede hacer el usuario cuando exista una acción posible y evitar jerga técnica innecesaria. Los mensajes NO DEBEN responsabilizar al usuario de errores internos del sistema.

### 18. Logging de errores
Los errores técnicos relevantes PODRÁN registrarse mediante los mecanismos de observabilidad del sistema. Los mensajes mostrados al usuario y los detalles registrados técnicamente DEBEN mantenerse separados. Los logs NO DEBEN contener contraseñas, tokens, secretos, contenido completo de documentos ni datos personales innecesarios.

### 19. Coherencia entre frontend y backend
El frontend DEBE interpretar los errores a partir del contrato definido por la API. NO DEBEN existir convenciones de error diferentes e incompatibles entre features. Los errores de negocio, validación, autorización y errores inesperados DEBEN seguir el formato común definido por el backend (`ProblemDetails` / `ApiError`).

### 20. Criterio de finalización
Una funcionalidad asíncrona NO DEBE considerarse terminada si únicamente se ha implementado su estado de éxito. Antes de considerarse completa DEBE haberse evaluado, cuando aplique: carga, éxito, ausencia de datos, error, pérdida de conectividad, falta de autenticación, falta de permisos, acción duplicada, preservación de datos del usuario y recuperación o reintento.

## Internacionalización y arquitectura multidioma

Lorente Legal DEBE diseñarse desde el inicio como una aplicación multidioma. La arquitectura NO DEBE asumir que el español será el único idioma disponible, aunque pueda ser el único idioma publicado durante una fase inicial. La aplicación DEBE poder incorporar nuevos idiomas sin duplicar páginas, componentes ni lógica de negocio. Los idiomas inicialmente previstos son español (`es`), inglés (`en`) y valenciano/catalán (`ca`). La incorporación efectiva de cada idioma podrá realizarse progresivamente.

### 1. Idioma como parte de la URL
Toda página pública localizada DEBE incluir el idioma como primer segmento de la URL, por ejemplo `/es/`, `/en/` y `/ca/`. Las páginas internas DEBEN mantener la misma estructura. La aplicación NO DEBE utilizar subdominios distintos ni parámetros de query como mecanismo principal para seleccionar idioma. El idioma DEBE formar parte de la estructura de rutas.

### 2. Traducción de rutas
Los slugs públicos DEBEN poder localizarse por idioma (por ejemplo, `/es/extranjeria`, `/en/immigration`, `/ca/estrangeria`). Las rutas equivalentes DEBEN relacionarse mediante configuración centralizada. Los componentes y páginas NO DEBEN contener lógica dispersa para construir rutas traducidas.

### 3. Código compartido
La internacionalización NO DEBE duplicar componentes ni páginas por idioma. DEBE existir una única implementación funcional que reciba el contenido del idioma activo. La lógica, estructura, componentes y comportamiento DEBEN compartirse salvo necesidad funcional explícita.

### 4. Separación entre interfaz y contenido
Los textos cortos y repetitivos de interfaz (botones, navegación, labels, validaciones, mensajes y estados) DEBEN gestionarse mediante el sistema de internacionalización. El contenido editorial o jurídico extenso DEBE poder gestionarse independientemente por idioma, sin tratarlo obligatoriamente como simples cadenas de traducción.

### 5. Idioma por defecto
El español (`es`) será el idioma principal y de referencia inicial. Esto NO DEBE impedir que las demás versiones dispongan de contenido, metadata, URLs y SEO propios; el idioma principal no convierte a las demás versiones en técnicamente secundarias.

### 6. Selección inicial de idioma
Sin una elección previa, la aplicación PODRÁ utilizar las preferencias lingüísticas del navegador. La detección NO DEBE depender exclusivamente de IP, país o geolocalización. El usuario DEBE poder cambiar manualmente el idioma en todo momento y su elección explícita DEBE tener prioridad.

### 7. Persistencia de la preferencia
Cuando un usuario seleccione manualmente un idioma, la aplicación DEBE poder recordar la elección mediante un mecanismo compatible con las reglas de privacidad. Cuando exista una cuenta autenticada, la arquitectura DEBE permitir guardar el idioma en las preferencias del usuario, con prioridad sobre la detección automática.

### 8. Selector de idioma
La navegación pública DEBE ofrecer un selector accesible. Si existe una página equivalente, el cambio DEBE llevar a dicha página localizada, por ejemplo `/es/extranjeria` a `/en/immigration`. Si no existe traducción, el comportamiento DEBE ser explícito y consistente según la especificación correspondiente.

### 9. SEO multidioma
Cada versión lingüística pública DEBE considerarse una página SEO independiente y poder disponer de `title`, `meta description`, URL, canonical, contenido y metadata social propios. Las equivalencias DEBEN declarar correctamente su relación mediante `hreflang` u otros mecanismos estándar. Cada versión localizada DEBE declarar correctamente su idioma y NO DEBE interpretarse accidentalmente como contenido duplicado.

### 10. Sitemap multidioma
El sitemap DEBE contemplar las versiones lingüísticas realmente publicadas e indexables. Una traducción no disponible NO DEBE generar una URL ficticia.

### 11. Canonicalización
Cada traducción publicada DEBE tener como canonical su propia URL cuando represente una versión legítima e independiente. Las versiones lingüísticas legítimas NO DEBEN canonicalizarse todas hacia la versión española.

### 12. Contenido jurídico traducido
El contenido jurídico NO DEBE traducirse y publicarse automáticamente sin revisión humana. La IA PODRÁ apoyar la traducción, pero el contenido DEBE revisarse antes de publicarse para preservar significado jurídico, terminología, referencias normativas, advertencias y contexto. Los conceptos sin traducción equivalente DEBEN poder mantenerse en español y explicarse en el idioma correspondiente; NO debe forzarse una traducción literal que altere el significado.

### 13. Contenido localizado
Las versiones en distintos idiomas NO están obligadas a ser traducciones literales. Podrán adaptarse lingüística y culturalmente para mejorar comprensión, precisión, experiencia de usuario, SEO o explicación jurídica, sin modificar el sentido jurídico.

### 14. Datos procedentes del backend
Cuando el backend devuelva contenido destinado a la interfaz, la arquitectura DEBE permitir conocer el locale correspondiente cuando sea necesario. Los códigos, identificadores y valores internos NO DEBEN traducirse. La lógica de negocio NO DEBE depender del texto traducido; por ejemplo, `InProgress` podrá mostrarse como `En tramitación`, `In progress` o `En tramitació`.

### 15. Formatos locales
La interfaz DEBE poder adaptar al locale fechas, horas, números, monedas y separadores numéricos. Los datos internos NO DEBEN almacenarse en formatos dependientes del idioma y la presentación localizada NO DEBE modificar el valor real.

### 16. Errores y validaciones
Los mensajes dirigidos al usuario DEBEN poder localizarse al idioma activo. Los códigos internos del backend DEBEN permanecer estables e independientes del idioma, por ejemplo `CLIENT_NOT_FOUND`; la lógica NO DEBE depender del texto traducido para identificar el error.

### 17. Área privada
Las reglas multidioma DEBEN aplicarse a la futura área privada durante navegación, formularios, expedientes, documentos de interfaz, notificaciones y mensajes del sistema. Cambiar el idioma de la interfaz NO DEBE traducir automáticamente documentos jurídicos aportados por clientes.

### 18. Fallbacks
La aplicación DEBE disponer de una estrategia explícita de fallback para traducciones de interfaz. Una ausencia NO DEBE provocar errores, páginas en blanco, claves técnicas visibles o componentes rotos. El fallback de interfaz será español (`es`), pero NO autoriza publicar contenido SEO español bajo una URL de otro idioma sin página localizada.

### 19. Internacionalización y sistema de diseño
Los componentes del sistema de diseño DEBEN soportar longitudes variables entre idiomas. Los layouts NO DEBEN asumir que los textos tienen la misma longitud, que un botón ocupa una línea o que una etiqueta tiene un ancho fijo.

### 20. Internacionalización y accesibilidad
El idioma de cada página DEBE declararse mediante los mecanismos HTML correspondientes. Los cambios de idioma dentro de contenido concreto DEBEN identificarse semánticamente cuando sea necesario. El selector DEBE ser accesible mediante teclado y tecnologías de asistencia.

### 21. Tecnología de internacionalización
El frontend DEBE utilizar una solución de internacionalización compatible con Next.js App Router, Server Components, Client Components, rutas localizadas, traducciones de interfaz y metadata localizada. La solución DEBE centralizar locales y rutas. NO debe desarrollarse un sistema propio si existe una solución mantenida que cubra estos requisitos; la librería concreta se definirá como decisión técnica del frontend.

### 22. Publicación progresiva de idiomas
La arquitectura multidioma DEBE existir desde el inicio, pero NO obliga a publicar simultáneamente todos los idiomas. Cada idioma o contenido podrá activarse cuando esté disponible, revisado, tenga metadata preparada, navegación funcional y cumpla SEO y calidad. Una traducción incompleta NO DEBE publicarse únicamente para disponer de la ruta.

### 23. Separación entre Constitución y especificaciones
Esta Constitución define el comportamiento general multidioma. Las especificaciones definirán idiomas de cada fase, traducciones, contenido, slugs, metadata, SEO, equivalencias y comportamiento cuando falte una traducción. Las especificaciones NO DEBEN contradecir estos principios.

## Autenticación, sesiones y autorización

La autenticación y autorización de Lorente Legal DEBEN gestionarse principalmente desde el backend ASP.NET Core.
El frontend NO DEBE considerarse una barrera de seguridad. Ocultar botones, páginas, enlaces o acciones en el frontend NO constituye autorización.
Toda operación protegida DEBE validar la identidad y los permisos del usuario en el backend antes de ejecutarse.

### 1. Sistema de identidad
La gestión de usuarios DEBE utilizar los mecanismos de identidad y seguridad proporcionados por ASP.NET Core. Las credenciales, sesiones, recuperación de cuentas, verificación de correo y demás procesos relacionados con identidad NO DEBEN implementarse manualmente si el framework proporciona una solución segura equivalente. La persistencia de identidad DEBE realizarse en el backend. El frontend NO DEBE gestionar directamente hashes de contraseña, credenciales, sesiones, tokens de recuperación ni secretos de autenticación.

### 2. Autenticación basada en sesión segura
Para usuarios humanos que accedan a la aplicación web, DEBE priorizarse autenticación mediante cookies de sesión seguras gestionadas por el backend. Las cookies de autenticación DEBEN utilizar, cuando corresponda: `HttpOnly`, `Secure`, una política `SameSite` compatible con la arquitectura y expiración controlada. Las credenciales o tokens de autenticación sensibles NO DEBEN almacenarse en `localStorage`, `sessionStorage`, stores de Zustand, estado React persistente ni cookies accesibles mediante JavaScript. El frontend NO DEBE necesitar leer el secreto utilizado para autenticar al usuario.

### 3. JWT
JWT NO DEBE utilizarse automáticamente como mecanismo de autenticación para la aplicación web. JWT podrá utilizarse cuando exista una necesidad técnica concreta (ej. integración máquina a máquina, API externa, aplicación móvil o arquitectura distribuida futura), debiendo justificarse en la especificación correspondiente. Si se utilizan JWT, NO DEBEN almacenarse en `localStorage` cuando contengan credenciales reutilizables o permitan acceder a recursos protegidos.

### 4. Contraseñas
Las contraseñas NUNCA DEBEN almacenarse en texto plano. El hashing y verificación de contraseñas DEBEN delegarse a mecanismos de seguridad mantenidos y reconocidos del framework; NO DEBE implementarse un algoritmo propio de hashing. Las contraseñas NO DEBEN aparecer en logs, analytics, excepciones, auditorías, URLs, parámetros de query ni respuestas HTTP.

### 5. Verificación de correo
Cuando el sistema permita crear cuentas de clientes, la arquitectura DEBE soportar verificación de la dirección de correo electrónico. Las funcionalidades que requieran identidad verificada PODRÁN exigir que el correo haya sido confirmado. El criterio concreto para permitir o bloquear determinadas operaciones DEBERÁ definirse en la especificación correspondiente.

### 6. Recuperación de cuenta
La recuperación de contraseña DEBE realizarse mediante tokens temporales, de un solo propósito y con expiración. El sistema NO DEBE enviar contraseñas existentes por correo ni permitir recuperar una contraseña mostrando o enviando su valor anterior. Los mensajes de recuperación NO DEBEN revelar innecesariamente si una determinada dirección de correo pertenece a una cuenta existente.

### 7. Autenticación multifactor
La arquitectura DEBE permitir autenticación multifactor (MFA). Las cuentas con privilegios elevados, incluyendo administración del sistema y acceso profesional al conjunto de expedientes, DEBEN poder utilizar MFA. La especificación de seguridad determinará qué perfiles tendrán MFA obligatorio. La ausencia de MFA para determinados usuarios NO DEBE impedir añadirlo posteriormente sin rediseñar el sistema de identidad.

### 8. Autorización
La autorización DEBE realizarse en el backend basándose en políticas, permisos, propiedad de recursos o reglas explícitas. NO deben distribuirse comprobaciones arbitrarias de strings de rol por toda la aplicación cuando pueda utilizarse un mecanismo centralizado. Debe distinguirse entre identidad, rol, permiso y propiedad de un recurso. Un usuario autenticado NO obtiene automáticamente acceso a todos los recursos del sistema.

### 9. Acceso a recursos propios
Los clientes DEBEN poder acceder únicamente a los recursos para los que tengan autorización. El backend NO DEBE confiar en identificadores recibidos del frontend para determinar la propiedad de un recurso (ej. que un cliente solicite `/cases/{caseId}` no significa que pueda acceder; el backend DEBE comprobar la autorización). Esta regla aplica igualmente a documentos, mensajes, expedientes, citas, datos personales y notificaciones.

### 10. Perfiles privileged / diferenciados
Las cuentas administrativas o profesionales DEBEN disponer únicamente de los permisos necesarios para sus responsabilidades. La arquitectura DEBE permitir diferenciar al menos conceptualmente entre cliente, profesional y administrador. Los roles y permisos concretos se definirán en las especificaciones correspondientes. NO debe asumirse que todos los usuarios internos tienen los mismos permisos.

### 11. Autorización en frontend
El frontend PODRÁ utilizar información de permisos para ocultar acciones no disponibles, adaptar navegación y mejorar experiencia de usuario. Estas comprobaciones son exclusivamente de presentación; el backend DEBE repetir siempre la autorización antes de realizar la operación.

### 12. Sesiones
Las sesiones DEBEN tener expiración. La arquitectura DEBE permitir cerrar sesión, invalidar una sesión, invalidar sesiones comprometidas o por cambio de credenciales críticas y gestionar múltiples sesiones. El cierre de sesión DEBE invalidar el mecanismo de autenticación correspondiente, no depender únicamente de eliminar estado visual del frontend.

### 13. Protección frente a CSRF
Cuando la autenticación utilice cookies, las operaciones que modifiquen estado DEBEN estar protegidas frente a ataques CSRF mediante los mecanismos apropiados para la arquitectura utilizada. Las peticiones de modificación de estado NO DEBEN considerarse seguras únicamente porque requieran una cookie de autenticación.

### 14. Protección frente a abuso
Los endpoints relacionados con autenticación (inicio de sesión, recuperación de contraseña, registro, verificación de correo, MFA) DEBEN disponer de mecanismos contra abuso automatizado (rate limiting, bloqueo temporal, detección de intentos repetidos). Los valores concretos pertenecerán a las especificaciones de seguridad correspondientes.

### 15. Enumeración de usuarios
Las respuestas públicas relacionadas con autenticación NO DEBEN revelar innecesariamente si un correo está registrado, una cuenta concreta existe o un usuario está activo cuando revelar dicha información pueda facilitar ataques.

### 16. Auditoría
Las acciones de seguridad relevantes DEBEN poder registrarse mediante auditoría (inicio/cierre de sesión, fallos de autenticación relevantes, recuperación de contraseña, cambios de permisos/credenciales, operaciones administrativas sensibles). Los registros de auditoría NO DEBEN contener contraseñas, tokens completos, secretos ni contenido innecesario de documentos.

### 17. Separación entre autenticación y datos de negocio
La identidad técnica del usuario y los datos de negocio asociados NO DEBEN tratarse necesariamente como la misma entidad. La capa de dominio NO DEBE depender directamente de ASP.NET Core Identity (que pertenece a Infrastructure); Domain DEBE permanecer independiente del sistema concreto utilizado para autenticar usuarios.

### 18. Integración con arquitectura limpia
Las implementaciones concretas de ASP.NET Core Identity, envío de correos de verificación, MFA, proveedores externos de identidad y almacenamiento de sesiones DEBEN permanecer en Infrastructure. Application podrá definir abstracciones y casos de uso relacionados con identidad y autorización cuando sean necesarios.

### 19. Proveedores externos
La arquitectura DEBE permitir incorporar en el futuro proveedores externos de identidad (Google, Microsoft, etc.) sin rediseñar el dominio. La incorporación de un proveedor externo DEBE definirse mediante especificación propia; el proyecto NO DEBE añadir proveedores externos anticipadamente si no existe una necesidad actual.

### 20. Comunicación segura
Las credenciales y datos de autenticación DEBEN transmitirse únicamente mediante conexiones HTTPS en producción. Los secretos de autenticación NO DEBEN aparecer en URLs ni utilizar parámetros de query para transportar credenciales o tokens reutilizables cuando exista una alternativa segura.

### 21. Errores de autenticación
Los errores de autenticación y autorización DEBEN utilizar respuestas HTTP coherentes: `401` representa ausencia o invalidez de autenticación, y `403` representa identidad autenticada sin autorización suficiente. El frontend DEBE distinguir ambos casos. Las respuestas NO DEBEN exponer información interna sensible sobre el mecanismo de seguridad.

### 22. Áreas públicas y privadas
Las páginas públicas del despacho NO DEBEN requerir autenticación. Las áreas privadas futuras DEBEN estar claramente separadas de las páginas públicas, permitiendo proteger rutas y recursos privados sin afectar al contenido público ni a su indexación SEO. Las páginas privadas NO DEBEN ser indexables por buscadores (`noindex`).

### 23. Fase actual y evolución
Durante la Fase 1 de presencia y captación NO DEBE implementarse anticipadamente autenticación de usuarios salvo que una especificación aprobada lo requiera. La arquitectura actual DEBE permitir añadir el sistema de identidad en Fase 2 sin modificar los principios arquitectónicos fundamentales.

### 24. Fuente de verdad de seguridad
El backend es la única fuente de verdad para identidad autenticada, permisos, autorización, propiedad de recursos y validez de sesión. El frontend NO DEBE asumir ninguna de estas condiciones exclusivamente a partir de su propio estado.


## Cookies, analítica y servicios de terceros

La aplicación DEBE aplicar principios de privacidad por diseño y minimización de datos.

Las cookies y tecnologías equivalentes que no sean estrictamente necesarias NO DEBEN activarse antes de obtener el consentimiento correspondiente cuando este sea legalmente necesario. El rechazo de cookies no esenciales NO DEBE impedir el uso de las funcionalidades esenciales de la aplicación.

Los servicios externos de analítica, publicidad, seguimiento, mapas, vídeo embebido, chat, redes sociales y widgets externos DEBEN evaluarse antes de incorporarse y NO DEBEN añadirse únicamente por conveniencia si introducen seguimiento, dependencias o tratamiento de datos innecesarios.

Los scripts de terceros DEBEN limitarse al mínimo necesario y cargarse de forma que reduzcan su impacto sobre privacidad, seguridad, rendimiento y Core Web Vitals. La integración de herramientas de analítica DEBE centralizarse y NO DEBE implementarse mediante scripts arbitrarios distribuidos por componentes o páginas.

La aplicación DEBE permitir distinguir entre servicios estrictamente necesarios, analíticos, funcionales y de marketing o seguimiento cuando dicha distinción sea necesaria para gestionar consentimiento. La retirada o modificación del consentimiento DEBE poder reflejarse en el comportamiento de los servicios afectados.

NO DEBEN enviarse a servicios de analítica o seguimiento datos jurídicos, documentos, credenciales ni información personal sensible que no sea necesaria para la finalidad declarada.

Los identificadores, claves y configuraciones de servicios externos DEBEN gestionarse mediante la configuración centralizada correspondiente y los secretos NO DEBEN exponerse al navegador.

La herramienta concreta de analítica, consentimiento o servicios de terceros se decidirá en las especificaciones correspondientes. La Constitución NO DEBE fijar proveedores concretos salvo que una decisión arquitectónica posterior los convierta en estándar obligatorio del proyecto.

## Restricciones técnicas y de seguridad

El backend DEBE utilizar .NET 10, ASP.NET Core, C#, Entity Framework Core y PostgreSQL.
El acceso a la base de datos DEBE realizarse desde `Infrastructure` y las migraciones DEBEN
estar versionadas en el repositorio. La integración con servicios externos (WhatsApp, email,
almacenamiento de objetos, proveedores de pago o IA) DEBE realizarse mediante abstracciones
definidas en `Application` o `Domain`, dejando las implementaciones concretas en `Infrastructure`.
La IA NO DEBE tomar decisiones jurídicas finales; las reglas legales deterministas DEBEN
implementarse explícitamente en el código de dominio o aplicación.

## Flujo de desarrollo y calidad

Los cambios DEBEN ser pequeños, independientes y coherentes. Antes de dar por completada una
tarea se DEBE validar la conformidad con la constitución, la ausencia de secretos en el
código, el tipado estricto en TypeScript y la ejecución satisfactoria de las pruebas. Los
nombres DEBEN ser descriptivos evitando términos ambiguos o genéricos como `Manager`, `Helper`
o `Utils` a menos que describan una responsabilidad real y acotada.

## Gobernanza

Esta constitución es la norma suprema del proyecto Lorente Legal y prevalece sobre cualquier
otra directiva o propuesta. Cualquier enmienda DEBE documentarse con su informe de impacto (Sync
Impact Report), motivo del cambio y ajuste de versión según SemVer (MAJOR para cambios
incompatibles, MINOR para ampliación de directrices o principios, PATCH para correcciones o
aclaraciones).

**Versión**: 1.15.0 | **Ratificada**: TODO(RATIFICATION_DATE): confirmar fecha original | **Última enmienda**: 2026-09-21
