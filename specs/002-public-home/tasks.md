---
description: "Lista de tareas para la feature de la Home pÃºblica"
---

# Tareas: Home pÃºblica

**Entrada**: Documentos de diseÃ±o de `/specs/002-public-home/`

**Prerrequisitos**: [plan.md](plan.md), [spec.md](spec.md), [research.md](research.md), [data-model.md](data-model.md), [contracts/home-ui.md](contracts/home-ui.md), [quickstart.md](quickstart.md)

**Alcance de implementaciÃ³n**: Solo frontend pÃºblico. Sin backend, base de datos, autenticaciÃ³n, formularios conectados, integraciones externas, sistema visual definitivo ni dependencias de animaciÃ³n.

## Fase 1: PreparaciÃ³n (Infraestructura compartida)

**PropÃ³sito**: Establecer el lÃ­mite de la aplicaciÃ³n frontend y la base de rutas consciente de locale que necesitan todas las historias de usuario.

- [X] T001 Crear la estructura de la aplicaciÃ³n frontend en `frontend/` con `frontend/src/app/`, `frontend/src/components/`, `frontend/src/features/`, `frontend/src/lib/`, `frontend/src/hooks/`, `frontend/src/stores/`, `frontend/src/types/` y `frontend/src/utils/` segÃºn `specs/002-public-home/plan.md`
- [X] T002 [P] Configurar TypeScript estricto, Next.js App Router y Tailwind CSS en `frontend/tsconfig.json`, `frontend/next.config.ts`, `frontend/postcss.config.mjs` y `frontend/tailwind.config.ts`
- [X] T003 [P] Configurar los scripts del paquete frontend y sus versiones de dependencias en `frontend/package.json` sin aÃ±adir dependencias de animaciÃ³n, analÃ­tica, backend o gestiÃ³n de estado no requeridas por esta feature
- [X] T004 [P] AÃ±adir la configuraciÃ³n de locales y rutas localizadas para `es`, `en` y `ca` en `frontend/src/lib/i18n/locale-config.ts`, publicando solo `es` en esta feature
- [X] T005 [P] AÃ±adir la configuraciÃ³n del sitio pÃºblico y la disponibilidad de rutas en `frontend/src/lib/config/public-routes.ts`, incluyendo `/es/` como Home publicada y los destinos futuros como rutas previstas aÃºn no publicadas

---
## Fase 2: Fundamentos (Prerrequisitos bloqueantes)

**PropÃ³sito**: Crear los fundamentos estructurales y de accesibilidad compartidos antes de implementar las secciones de la Home.

**Punto de control**: El punto de entrada de locale, el shell de pÃ¡gina localizada y las primitivas estructurales compartidas estÃ¡n disponibles sin contenido especÃ­fico de la Home.

- [X] T006 Crear el dispatcher no permanente de locale en `frontend/src/app/page.tsx` para que `/` redirija a `/es/` mientras `es` sea el Ãºnico locale publicado
- [X] T007 Crear el shell de ruta localizada en `frontend/src/app/[locale]/layout.tsx` con validaciÃ³n de locale, metadata de idioma HTML y Server Component por defecto
- [X] T008 [P] Crear las primitivas semÃ¡nticas de layout compartidas en `frontend/src/components/layout/header.tsx`, `frontend/src/components/layout/footer.tsx` y `frontend/src/components/layout/page-container.tsx`
- [X] T009 [P] Crear las primitivas UI accesibles mÃ­nimas de la Home en `frontend/src/components/ui/link.tsx`, `frontend/src/components/ui/button.tsx` y `frontend/src/components/ui/image-placeholder.tsx`
- [X] T010 Crear el punto de entrada pÃºblico de la feature Home en `frontend/src/features/public-home/index.ts` y mantener los componentes exclusivos en `frontend/src/features/public-home/components/`
- [X] T011 Crear el contenido espaÃ±ol de la Home y los datos de rutas de Ã¡reas de prÃ¡ctica en `frontend/src/features/public-home/content/es.ts`, incluyendo las cinco Ã¡reas y sus destinos previstos
- [X] T012 AÃ±adir la metadata base del layout localizado en `frontend/src/app/[locale]/layout.tsx` y asegurar que los locales `en`/`ca` no publicados no se emitan como pÃ¡ginas pÃºblicas ni entradas del sitemap

---

## Fase 3: Historia de usuario 1 - Comprender el despacho y sus servicios (Prioridad: P1) ðŸŽ¯ MVP

**Objetivo**: Una persona que visita el sitio por primera vez comprende quÃ© es Lorente Legal, su naturaleza jurÃ­dica, el papel de Laura y las cinco Ã¡reas de prÃ¡ctica.

**Prueba independiente**: Abrir `/es/`, leer el HTML inicial y las secciones visibles, y confirmar que la identidad, la presentaciÃ³n de Laura y las cinco Ã¡reas se entienden sin datos de backend ni renderizado exclusivo en cliente.

### ImplementaciÃ³n de la Historia de usuario 1
- [X] T013 [P] [US1] Crear la secciÃ³n hero de la Home en `frontend/src/features/public-home/components/hero-section.tsx` con identidad de Lorente Legal, descripciÃ³n jurÃ­dica, referencia a Laura y acciÃ³n principal de contacto/servicios
- [X] T014 [P] [US1] Crear la secciÃ³n de presentaciÃ³n del despacho en `frontend/src/features/public-home/components/firm-introduction.tsx` con contenido espaÃ±ol de `frontend/src/features/public-home/content/es.ts`
- [X] T015 [P] [US1] Crear la secciÃ³n de Ã¡reas de prÃ¡ctica en `frontend/src/features/public-home/components/practice-areas.tsx` con enlaces/tarjetas de ExtranjerÃ­a, Nacionalidad, Derecho de familia, Derecho laboral y Derecho civil
- [X] T016 [P] [US1] Crear el bloque destacado de extranjerÃ­a y nacionalidad en `frontend/src/features/public-home/components/immigration-highlight.tsx`
- [X] T017 [P] [US1] Crear la secciÃ³n de perfil de Laura en `frontend/src/features/public-home/components/laura-profile.tsx` con nombre, resumen profesional, espacio de imagen accesible y destino futuro de Sobre mÃ­
- [X] T018 Componer la Home espaÃ±ola en `frontend/src/app/[locale]/page.tsx` renderizando las secciones en orden semÃ¡ntico y rechazando locales no compatibles sin duplicar la implementaciÃ³n
- [X] T019 AÃ±adir la metadata espaÃ±ola y la URL canÃ³nica en `frontend/src/app/[locale]/page.tsx` o en el mÃ³dulo de metadata localizada, asegurando que `/es/` sea indexable y `/` no sea su representaciÃ³n canÃ³nica

**Punto de control**: La Historia de usuario 1 puede demostrarse de forma independiente en `/es/` con identidad, Ã¡reas de prÃ¡ctica, servicios destacados y presentaciÃ³n de Laura.

---

## Fase 4: Historia de usuario 2 - Navegar por la arquitectura pÃºblica (Prioridad: P1)

**Objetivo**: Las personas visitantes pueden utilizar la navegaciÃ³n pÃºblica prevista en pantallas grandes y pequeÃ±as sin pÃ¡ginas ficticias ni interacciÃ³n inaccesible.

**Prueba independiente**: Abrir `/es/` en anchos mÃ³vil y escritorio, utilizar la navegaciÃ³n con teclado y puntero/tacto, y verificar las etiquetas previstas y el comportamiento de disponibilidad de rutas.

- [X] T020 [P] [US2] Crear los datos de navegaciÃ³n principal en `frontend/src/features/public-home/content/navigation-es.ts` para Inicio, Servicios, ExtranjerÃ­a, Nacionalidad, Laboral, Civil, Familia, Sobre mÃ­, Contacto y Blog
- [X] T021 [US2] Componer la navegaciÃ³n de escritorio en `frontend/src/components/layout/main-navigation.tsx` usando enlaces semÃ¡nticos y los datos compartidos de disponibilidad de rutas
- [X] T022 [US2] Implementar la interacciÃ³n de navegaciÃ³n mÃ³vil en `frontend/src/components/layout/mobile-navigation.tsx` con teclado, foco visible, cierre claro y sin depender de hover
- [X] T023 [US2] Integrar la navegaciÃ³n de escritorio y mÃ³vil en `frontend/src/components/layout/header.tsx` manteniendo el mismo conjunto de destinos
- [X] T024 [US2] Mantener los destinos futuros como enlaces normales a sus rutas previstas en `frontend/src/lib/config/public-routes.ts` y `frontend/src/features/public-home/components/future-route-link.tsx`, sin crear pÃ¡ginas placeholder ni contenido ficticio
- [X] T025 [US2] AÃ±adir la estructura del selector de idioma en `frontend/src/components/layout/language-selector.tsx`, mostrando espaÃ±ol como publicado y los locales futuros sin emitir URLs no disponibles

**Punto de control**: La Historia de usuario 2 puede probarse de forma independiente mediante el dispatcher, la navegaciÃ³n de `/es/` y el menÃº mÃ³vil responsive.

---

## Fase 5: Historia de usuario 3 - Conocer a Laura y contactar con el despacho (Prioridad: P1)

**Objetivo**: Las personas visitantes pueden encontrar la presentaciÃ³n profesional de Laura y una vÃ­a clara de contacto sin integraciones conectadas.

**Prueba independiente**: Abrir `/es/`, localizar la secciÃ³n de Laura y activar la llamada principal a contacto; confirmar que la navegaciÃ³n llega al destino pÃºblico previsto sin enviar datos a un backend.

### ImplementaciÃ³n de la Historia de usuario 3

- [X] T026 [P] [US3] Crear la secciÃ³n de llamada a contacto en `frontend/src/features/public-home/components/contact-call-to-action.tsx` con una acciÃ³n clara en espaÃ±ol hacia la ruta pÃºblica Contacto
- [X] T027 [P] [US3] Crear la estructura de contenido del footer en `frontend/src/components/layout/footer-content.tsx` con identidad, navegaciÃ³n secundaria, placeholders de contacto, enlaces legales, selector de idioma y copyright
- [X] T028 [US3] Integrar el enlace futuro de Sobre mÃ­ y la acciÃ³n de contacto con `frontend/src/lib/config/public-routes.ts`, manteniendo la disponibilidad de rutas sin formularios, email, telÃ©fono ni WhatsApp conectados
- [X] T029 [US3] Componer el footer final y el flujo de contacto de la Home en `frontend/src/app/[locale]/page.tsx` y `frontend/src/components/layout/footer.tsx` sin introducir lÃ³gica de negocio ni integraciones externas

**Punto de control**: La Historia de usuario 3 puede probarse de forma independiente encontrando a Laura, la llamada a contacto y el footer estructurado en `/es/`.

---

## Fase 6: Historia de usuario 4 - Utilizar una Home pÃºblica de calidad (Prioridad: P2)

**Objetivo**: La Home funciona en mÃ³vil y escritorio, es accesible mediante teclado, indexable y estÃ¡ preparada para locales futuros sin crear el sistema visual definitivo.

**Prueba independiente**: Ejecutar los escenarios de [quickstart.md](quickstart.md) sobre `/` y `/es/`, incluyendo comprobaciones responsive, de teclado, HTML inicial, metadata y rutas.

### ImplementaciÃ³n de la Historia de usuario 4

- [X] T030 [P] [US4] AÃ±adir landmarks semÃ¡nticos y jerarquÃ­a de encabezados en `frontend/src/app/[locale]/page.tsx`, `frontend/src/features/public-home/components/` y `frontend/src/components/layout/`
- [X] T031 [P] [US4] AÃ±adir foco accesible, labels, comportamiento de texto alternativo y estilos de interacciÃ³n compatibles con reducciÃ³n de movimiento en `frontend/src/components/ui/` y los componentes de navegaciÃ³n mÃ³vil
- [X] T032 [P] [US4] AÃ±adir restricciones responsive y protecciÃ³n contra overflow en `frontend/src/app/globals.css` y los estilos de la feature sin crear una identidad visual ni un sistema de animaciÃ³n definitivos
- [X] T033 [US4] AÃ±adir metadata SEO localizada, canonical y validaciÃ³n de locales futuros en `frontend/src/app/[locale]/page.tsx`, `frontend/src/app/[locale]/layout.tsx` y `frontend/src/lib/i18n/locale-config.ts`
- [X] T034 [US4] AÃ±adir el comportamiento pÃºblico de sitemap y robots en `frontend/src/app/sitemap.ts` y `frontend/src/app/robots.ts`, incluyendo solo rutas `/es/` publicadas e indexables y excluyendo `/` como dispatcher
- [X] T035 [US4] Ejecutar los escenarios responsive, de teclado, accesibilidad, HTML inicial, metadata y rutas de `specs/002-public-home/quickstart.md`, y corregir los hallazgos antes de cerrar la historia

**Punto de control**: La Historia de usuario 4 queda validada de forma independiente en `/`, `/es/`, los viewports compatibles, la interacciÃ³n por teclado y los requisitos SEO pÃºblicos.

---

## Fase 7: Pulido y aspectos transversales

**PropÃ³sito**: Finalizar la coherencia entre historias sin ampliar el alcance de la feature.

- [X] T036 [P] Revisar todos los textos y labels de navegaciÃ³n de la Home en `frontend/src/features/public-home/content/` para garantizar coherencia en espaÃ±ol y preparaciÃ³n para locales futuros
- [X] T037 [P] Revisar todos los componentes de la Home en `frontend/src/features/public-home/components/` segÃºn los lÃ­mites de tamaÃ±o y responsabilidad de la ConstituciÃ³n
- [X] T038 [P] Confirmar que no se han introducido llamadas al backend, autenticaciÃ³n, persistencia, formularios conectados, servicios de terceros, dependencias de animaciÃ³n ni tokens visuales definitivos en `frontend/src/features/public-home/`, `frontend/src/app/` y `frontend/src/components/`
- [X] T039 Ejecutar la validaciÃ³n completa de `specs/002-public-home/quickstart.md` y actualizar `specs/002-public-home/quickstart.md` solo si los pasos observados requieren aclaraciÃ³n
- [X] T040 [P] Revisar y aprobar el contenido jurÃ­dico y profesional visible de la Home en `frontend/src/features/public-home/content/es.ts` antes de publicarlo

---

## Dependencias y orden de ejecuciÃ³n

### Dependencias entre fases

- **PreparaciÃ³n (Fase 1)**: Sin dependencias; establece el lÃ­mite frontend y la configuraciÃ³n de locales.
- **Fundamentos (Fase 2)**: Depende de PreparaciÃ³n; bloquea el trabajo de las historias.
- **Historia de usuario 1 (Fase 3)**: Depende de Fundamentos; entrega la estructura de contenido del MVP.
- **Historia de usuario 2 (Fase 4)**: Depende de Fundamentos y puede avanzar en paralelo con US1 cuando existan los archivos de layout compartidos.
- **Historia de usuario 3 (Fase 5)**: Depende de Fundamentos y de la composiciÃ³n de la Home; integra las secciones de US1.
- **Historia de usuario 4 (Fase 6)**: Depende de la Home y la navegaciÃ³n implementadas; valida el comportamiento transversal.
- **Pulido (Fase 7)**: Depende de las historias de usuario deseadas.

### Dependencias entre historias de usuario

- **Historia de usuario 1 (P1)**: Puede comenzar tras Fundamentos; no depende de otras historias.
- **Historia de usuario 2 (P1)**: Puede comenzar tras Fundamentos; comparte archivos de header/layout con US1 y debe coordinar esas ediciones.
- **Historia de usuario 3 (P1)**: Depende de la composiciÃ³n de Home de US1 y de los datos de rutas de US2.
- **Historia de usuario 4 (P2)**: Depende de que US1, US2 y US3 estÃ©n disponibles para validaciÃ³n.

### Oportunidades de paralelizaciÃ³n

- T002-T005 pueden ejecutarse en paralelo despuÃ©s de T001.
- T008-T009 y T011 pueden ejecutarse en paralelo despuÃ©s de T001/T004.
- T013-T017 pueden ejecutarse en paralelo despuÃ©s de T010/T011.
- T020 y T025 pueden ejecutarse en paralelo con las secciones de Home tras configurar las rutas base.
- T026-T027 pueden ejecutarse en paralelo despuÃ©s de configurar layout y contenido base.
- T030-T034 pueden ejecutarse en paralelo cuando exista la composiciÃ³n de Home, coordinando archivos compartidos.
- T036-T038 y T040 pueden ejecutarse en paralelo durante el pulido.

---

## Estrategia de implementaciÃ³n

### Primero el MVP (solo Historia de usuario 1)

1. Completar la Fase 1: PreparaciÃ³n.
2. Completar la Fase 2: Fundamentos.
3. Completar la Fase 3: Historia de usuario 1.
4. Validar `/es/` de forma independiente con los criterios de contenido y estructura.
5. Continuar con navegaciÃ³n y contacto solo despuÃ©s de aceptar el contenido del MVP.

### Entrega incremental

1. PreparaciÃ³n + Fundamentos: shell consciente de locale y primitivas estructurales compartidas.
2. Historia de usuario 1: identidad, hero, Ã¡reas de prÃ¡ctica y presentaciÃ³n de Laura.
3. Historia de usuario 2: navegaciÃ³n prevista completa y menÃº mÃ³vil responsive.
4. Historia de usuario 3: llamada a contacto y estructura del footer.
5. Historia de usuario 4: validaciÃ³n de accesibilidad, SEO, responsive y rutas.
6. Pulido: revisiÃ³n de coherencia y alcance.

### LÃ­mite de alcance

No aÃ±adir backend, base de datos, autenticaciÃ³n, rutas privadas, formularios conectados,
WhatsApp, pagos, comportamiento funcional del blog, tokens visuales definitivos, dependencias
de animaciÃ³n ni contenido traducido para `en`/`ca` en esta feature.
