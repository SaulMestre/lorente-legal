---
description: "Lista de tareas para la feature de la Home pública"
---

# Tareas: Home pública

**Entrada**: Documentos de diseño de `/specs/002-public-home/`

**Prerrequisitos**: [plan.md](plan.md), [spec.md](spec.md), [research.md](research.md), [data-model.md](data-model.md), [contracts/home-ui.md](contracts/home-ui.md), [quickstart.md](quickstart.md)

**Alcance de implementación**: Solo frontend público. Sin backend, base de datos, autenticación, formularios conectados, integraciones externas, sistema visual definitivo ni dependencias de animación.

## Fase 1: Preparación (Infraestructura compartida)

**Propósito**: Establecer el límite de la aplicación frontend y la base de rutas consciente de locale que necesitan todas las historias de usuario.

- [ ] T001 Crear la estructura de la aplicación frontend en `frontend/` con `frontend/src/app/`, `frontend/src/components/`, `frontend/src/features/`, `frontend/src/lib/`, `frontend/src/hooks/`, `frontend/src/stores/`, `frontend/src/types/` y `frontend/src/utils/` según `specs/002-public-home/plan.md`
- [ ] T002 [P] Configurar TypeScript estricto, Next.js App Router y Tailwind CSS en `frontend/tsconfig.json`, `frontend/next.config.ts`, `frontend/postcss.config.mjs` y `frontend/tailwind.config.ts`
- [ ] T003 [P] Configurar los scripts del paquete frontend y sus versiones de dependencias en `frontend/package.json` sin añadir dependencias de animación, analítica, backend o gestión de estado no requeridas por esta feature
- [ ] T004 [P] Añadir la configuración de locales y rutas localizadas para `es`, `en` y `ca` en `frontend/src/lib/i18n/locale-config.ts`, publicando solo `es` en esta feature
- [ ] T005 [P] Añadir la configuración del sitio público y la disponibilidad de rutas en `frontend/src/lib/config/public-routes.ts`, incluyendo `/es/` como Home publicada y los destinos futuros como rutas previstas aún no publicadas

---

## Fase 2: Fundamentos (Prerrequisitos bloqueantes)

**Propósito**: Crear los fundamentos estructurales y de accesibilidad compartidos antes de implementar las secciones de la Home.

**Punto de control**: El punto de entrada de locale, el shell de página localizada y las primitivas estructurales compartidas están disponibles sin contenido específico de la Home.

- [ ] T006 Crear el dispatcher no permanente de locale en `frontend/src/app/page.tsx` para que `/` redirija a `/es/` mientras `es` sea el único locale publicado
- [ ] T007 Crear el shell de ruta localizada en `frontend/src/app/[locale]/layout.tsx` con validación de locale, metadata de idioma HTML y Server Component por defecto
- [ ] T008 [P] Crear las primitivas semánticas de layout compartidas en `frontend/src/components/layout/header.tsx`, `frontend/src/components/layout/footer.tsx` y `frontend/src/components/layout/page-container.tsx`
- [ ] T009 [P] Crear las primitivas UI accesibles mínimas de la Home en `frontend/src/components/ui/link.tsx`, `frontend/src/components/ui/button.tsx` y `frontend/src/components/ui/image-placeholder.tsx`
- [ ] T010 Crear el punto de entrada público de la feature Home en `frontend/src/features/public-home/index.ts` y mantener los componentes exclusivos en `frontend/src/features/public-home/components/`
- [ ] T011 Crear el contenido español de la Home y los datos de rutas de áreas de práctica en `frontend/src/features/public-home/content/es.ts`, incluyendo las cinco áreas y sus destinos previstos
- [ ] T012 Añadir la metadata base del layout localizado en `frontend/src/app/[locale]/layout.tsx` y asegurar que los locales `en`/`ca` no publicados no se emitan como páginas públicas ni entradas del sitemap

---

## Fase 3: Historia de usuario 1 - Comprender el despacho y sus servicios (Prioridad: P1) 🎯 MVP

**Objetivo**: Una persona que visita el sitio por primera vez comprende qué es Lorente Legal, su naturaleza jurídica, el papel de Laura y las cinco áreas de práctica.

**Prueba independiente**: Abrir `/es/`, leer el HTML inicial y las secciones visibles, y confirmar que la identidad, la presentación de Laura y las cinco áreas se entienden sin datos de backend ni renderizado exclusivo en cliente.

### Implementación de la Historia de usuario 1
- [ ] T013 [P] [US1] Crear la sección hero de la Home en `frontend/src/features/public-home/components/hero-section.tsx` con identidad de Lorente Legal, descripción jurídica, referencia a Laura y acción principal de contacto/servicios
- [ ] T014 [P] [US1] Crear la sección de presentación del despacho en `frontend/src/features/public-home/components/firm-introduction.tsx` con contenido español de `frontend/src/features/public-home/content/es.ts`
- [ ] T015 [P] [US1] Crear la sección de áreas de práctica en `frontend/src/features/public-home/components/practice-areas.tsx` con enlaces/tarjetas de Extranjería, Nacionalidad, Derecho de familia, Derecho laboral y Derecho civil
- [ ] T016 [P] [US1] Crear el bloque destacado de extranjería y nacionalidad en `frontend/src/features/public-home/components/immigration-highlight.tsx`
- [ ] T017 [P] [US1] Crear la sección de perfil de Laura en `frontend/src/features/public-home/components/laura-profile.tsx` con nombre, resumen profesional, espacio de imagen accesible y destino futuro de Sobre mí
- [ ] T018 Componer la Home española en `frontend/src/app/[locale]/page.tsx` renderizando las secciones en orden semántico y rechazando locales no compatibles sin duplicar la implementación
- [ ] T019 Añadir la metadata española y la URL canónica en `frontend/src/app/[locale]/page.tsx` o en el módulo de metadata localizada, asegurando que `/es/` sea indexable y `/` no sea su representación canónica

**Punto de control**: La Historia de usuario 1 puede demostrarse de forma independiente en `/es/` con identidad, áreas de práctica, servicios destacados y presentación de Laura.

---

## Fase 4: Historia de usuario 2 - Navegar por la arquitectura pública (Prioridad: P1)

**Objetivo**: Las personas visitantes pueden utilizar la navegación pública prevista en pantallas grandes y pequeñas sin páginas ficticias ni interacción inaccesible.

**Prueba independiente**: Abrir `/es/` en anchos móvil y escritorio, utilizar la navegación con teclado y puntero/tacto, y verificar las etiquetas previstas y el comportamiento de disponibilidad de rutas.

- [ ] T020 [P] [US2] Crear los datos de navegación principal en `frontend/src/features/public-home/content/navigation-es.ts` para Inicio, Servicios, Extranjería, Nacionalidad, Laboral, Civil, Familia, Sobre mí, Contacto y Blog
- [ ] T021 [US2] Componer la navegación de escritorio en `frontend/src/components/layout/main-navigation.tsx` usando enlaces semánticos y los datos compartidos de disponibilidad de rutas
- [ ] T022 [US2] Implementar la interacción de navegación móvil en `frontend/src/components/layout/mobile-navigation.tsx` con teclado, foco visible, cierre claro y sin depender de hover
- [ ] T023 [US2] Integrar la navegación de escritorio y móvil en `frontend/src/components/layout/header.tsx` manteniendo el mismo conjunto de destinos
- [ ] T024 [US2] Mantener los destinos futuros como enlaces normales a sus rutas previstas en `frontend/src/lib/config/public-routes.ts` y `frontend/src/features/public-home/components/future-route-link.tsx`, sin crear páginas placeholder ni contenido ficticio
- [ ] T025 [US2] Añadir la estructura del selector de idioma en `frontend/src/components/layout/language-selector.tsx`, mostrando español como publicado y los locales futuros sin emitir URLs no disponibles

**Punto de control**: La Historia de usuario 2 puede probarse de forma independiente mediante el dispatcher, la navegación de `/es/` y el menú móvil responsive.

---

## Fase 5: Historia de usuario 3 - Conocer a Laura y contactar con el despacho (Prioridad: P1)

**Objetivo**: Las personas visitantes pueden encontrar la presentación profesional de Laura y una vía clara de contacto sin integraciones conectadas.

**Prueba independiente**: Abrir `/es/`, localizar la sección de Laura y activar la llamada principal a contacto; confirmar que la navegación llega al destino público previsto sin enviar datos a un backend.

### Implementación de la Historia de usuario 3

- [ ] T026 [P] [US3] Crear la sección de llamada a contacto en `frontend/src/features/public-home/components/contact-call-to-action.tsx` con una acción clara en español hacia la ruta pública Contacto
- [ ] T027 [P] [US3] Crear la estructura de contenido del footer en `frontend/src/components/layout/footer-content.tsx` con identidad, navegación secundaria, placeholders de contacto, enlaces legales, selector de idioma y copyright
- [ ] T028 [US3] Integrar el enlace futuro de Sobre mí y la acción de contacto con `frontend/src/lib/config/public-routes.ts`, manteniendo la disponibilidad de rutas sin formularios, email, teléfono ni WhatsApp conectados
- [ ] T029 [US3] Componer el footer final y el flujo de contacto de la Home en `frontend/src/app/[locale]/page.tsx` y `frontend/src/components/layout/footer.tsx` sin introducir lógica de negocio ni integraciones externas

**Punto de control**: La Historia de usuario 3 puede probarse de forma independiente encontrando a Laura, la llamada a contacto y el footer estructurado en `/es/`.

---

## Fase 6: Historia de usuario 4 - Utilizar una Home pública de calidad (Prioridad: P2)

**Objetivo**: La Home funciona en móvil y escritorio, es accesible mediante teclado, indexable y está preparada para locales futuros sin crear el sistema visual definitivo.

**Prueba independiente**: Ejecutar los escenarios de [quickstart.md](quickstart.md) sobre `/` y `/es/`, incluyendo comprobaciones responsive, de teclado, HTML inicial, metadata y rutas.

### Implementación de la Historia de usuario 4

- [ ] T030 [P] [US4] Añadir landmarks semánticos y jerarquía de encabezados en `frontend/src/app/[locale]/page.tsx`, `frontend/src/features/public-home/components/` y `frontend/src/components/layout/`
- [ ] T031 [P] [US4] Añadir foco accesible, labels, comportamiento de texto alternativo y estilos de interacción compatibles con reducción de movimiento en `frontend/src/components/ui/` y los componentes de navegación móvil
- [ ] T032 [P] [US4] Añadir restricciones responsive y protección contra overflow en `frontend/src/app/globals.css` y los estilos de la feature sin crear una identidad visual ni un sistema de animación definitivos
- [ ] T033 [US4] Añadir metadata SEO localizada, canonical y validación de locales futuros en `frontend/src/app/[locale]/page.tsx`, `frontend/src/app/[locale]/layout.tsx` y `frontend/src/lib/i18n/locale-config.ts`
- [ ] T034 [US4] Añadir el comportamiento público de sitemap y robots en `frontend/src/app/sitemap.ts` y `frontend/src/app/robots.ts`, incluyendo solo rutas `/es/` publicadas e indexables y excluyendo `/` como dispatcher
- [ ] T035 [US4] Ejecutar los escenarios responsive, de teclado, accesibilidad, HTML inicial, metadata y rutas de `specs/002-public-home/quickstart.md`, y corregir los hallazgos antes de cerrar la historia

**Punto de control**: La Historia de usuario 4 queda validada de forma independiente en `/`, `/es/`, los viewports compatibles, la interacción por teclado y los requisitos SEO públicos.

---

## Fase 7: Pulido y aspectos transversales

**Propósito**: Finalizar la coherencia entre historias sin ampliar el alcance de la feature.

- [ ] T036 [P] Revisar todos los textos y labels de navegación de la Home en `frontend/src/features/public-home/content/` para garantizar coherencia en español y preparación para locales futuros
- [ ] T037 [P] Revisar todos los componentes de la Home en `frontend/src/features/public-home/components/` según los límites de tamaño y responsabilidad de la Constitución
- [ ] T038 [P] Confirmar que no se han introducido llamadas al backend, autenticación, persistencia, formularios conectados, servicios de terceros, dependencias de animación ni tokens visuales definitivos en `frontend/src/features/public-home/`, `frontend/src/app/` y `frontend/src/components/`
- [ ] T039 Ejecutar la validación completa de `specs/002-public-home/quickstart.md` y actualizar `specs/002-public-home/quickstart.md` solo si los pasos observados requieren aclaración
- [ ] T040 [P] Revisar y aprobar el contenido jurídico y profesional visible de la Home en `frontend/src/features/public-home/content/es.ts` antes de publicarlo

---

## Dependencias y orden de ejecución

### Dependencias entre fases

- **Preparación (Fase 1)**: Sin dependencias; establece el límite frontend y la configuración de locales.
- **Fundamentos (Fase 2)**: Depende de Preparación; bloquea el trabajo de las historias.
- **Historia de usuario 1 (Fase 3)**: Depende de Fundamentos; entrega la estructura de contenido del MVP.
- **Historia de usuario 2 (Fase 4)**: Depende de Fundamentos y puede avanzar en paralelo con US1 cuando existan los archivos de layout compartidos.
- **Historia de usuario 3 (Fase 5)**: Depende de Fundamentos y de la composición de la Home; integra las secciones de US1.
- **Historia de usuario 4 (Fase 6)**: Depende de la Home y la navegación implementadas; valida el comportamiento transversal.
- **Pulido (Fase 7)**: Depende de las historias de usuario deseadas.

### Dependencias entre historias de usuario

- **Historia de usuario 1 (P1)**: Puede comenzar tras Fundamentos; no depende de otras historias.
- **Historia de usuario 2 (P1)**: Puede comenzar tras Fundamentos; comparte archivos de header/layout con US1 y debe coordinar esas ediciones.
- **Historia de usuario 3 (P1)**: Depende de la composición de Home de US1 y de los datos de rutas de US2.
- **Historia de usuario 4 (P2)**: Depende de que US1, US2 y US3 estén disponibles para validación.

### Oportunidades de paralelización

- T002-T005 pueden ejecutarse en paralelo después de T001.
- T008-T009 y T011 pueden ejecutarse en paralelo después de T001/T004.
- T013-T017 pueden ejecutarse en paralelo después de T010/T011.
- T020 y T025 pueden ejecutarse en paralelo con las secciones de Home tras configurar las rutas base.
- T026-T027 pueden ejecutarse en paralelo después de configurar layout y contenido base.
- T030-T034 pueden ejecutarse en paralelo cuando exista la composición de Home, coordinando archivos compartidos.
- T036-T038 y T040 pueden ejecutarse en paralelo durante el pulido.

---

## Estrategia de implementación

### Primero el MVP (solo Historia de usuario 1)

1. Completar la Fase 1: Preparación.
2. Completar la Fase 2: Fundamentos.
3. Completar la Fase 3: Historia de usuario 1.
4. Validar `/es/` de forma independiente con los criterios de contenido y estructura.
5. Continuar con navegación y contacto solo después de aceptar el contenido del MVP.

### Entrega incremental

1. Preparación + Fundamentos: shell consciente de locale y primitivas estructurales compartidas.
2. Historia de usuario 1: identidad, hero, áreas de práctica y presentación de Laura.
3. Historia de usuario 2: navegación prevista completa y menú móvil responsive.
4. Historia de usuario 3: llamada a contacto y estructura del footer.
5. Historia de usuario 4: validación de accesibilidad, SEO, responsive y rutas.
6. Pulido: revisión de coherencia y alcance.

### Límite de alcance

No añadir backend, base de datos, autenticación, rutas privadas, formularios conectados,
WhatsApp, pagos, comportamiento funcional del blog, tokens visuales definitivos, dependencias
de animación ni contenido traducido para `en`/`ca` en esta feature.
