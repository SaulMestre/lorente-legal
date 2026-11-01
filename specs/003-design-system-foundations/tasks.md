---
description: "Lista de tareas para Fundamentos del sistema de diseño"
---

# Tareas: Fundamentos del sistema de diseño

**Entrada**: Documentos de diseño de `/specs/003-design-system-foundations/`

**Prerrequisitos**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/design-system-ui.md`, `quickstart.md`

**Alcance**: Consolidar las decisiones visuales existentes y aplicarlas a la Home. No incluye páginas secundarias, formularios conectados, skill ni área privada.

## Fase 1: Preparación

**Propósito**: Crear la ubicación duradera de la referencia común del sistema de diseño.

- [X] T001 Crear el documento canónico `frontend/docs/design-system.md` con las decisiones visuales vigentes y enlaces a los artefactos `specs/003-design-system-foundations/`.

## Fase 2: Fundamentos compartidos

**Propósito**: Dejar listos tokens y primitivas que necesitan la documentación y la migración de la Home.

- [X] T002 [P] Centralizar colores, tipografías y escalas visuales acordadas en `frontend/tailwind.config.ts`, reutilizando los valores actuales y sin añadir una escala arbitraria de breakpoints.
- [X] T003 [P] Consolidar foco visible, transiciones, estados hover/active y reducción de movimiento en `frontend/src/app/globals.css` sin añadir dependencias.
- [X] T004 Actualizar las variantes semánticas del botón nativo en `frontend/src/components/ui/button.tsx` para incluir los estados documentados y usar tokens compartidos.
- [X] T005 Crear `ButtonLink` en `frontend/src/components/ui/button-link.tsx` para acciones de navegación con aspecto de botón, conservando semántica y comportamiento nativo de enlace.
- [X] T006 Crear `PageSection` en `frontend/src/components/layout/page-section.tsx` para centralizar el espaciado repetido de sección y las pocas superficies que necesite la Home.

**Punto de control**: Los tokens y las primitivas de botón, enlace y sección están disponibles sin alterar todavía el contenido de la Home.

## Fase 3: Historia de usuario 1 - Consultar una identidad visual coherente (Prioridad: P1)

**Objetivo**: La identidad y los estados visuales compartidos tienen una fuente de verdad fácil de aplicar.

**Prueba independiente**: Consultar `frontend/docs/design-system.md` y verificar que documenta los valores vigentes, variantes, estados y criterios responsive/accesibles.

- [X] T007 [US1] Documentar en `frontend/docs/design-system.md` paleta, tipografías, jerarquía de texto, contenedores, espaciado, superficies, radios, estados de interacción, movimiento e imágenes con valores alineados a `frontend/tailwind.config.ts` y `frontend/src/app/globals.css`.
- [X] T008 [US1] Añadir a `frontend/docs/design-system.md` ejemplos de uso y reglas para decidir entre botón, enlace con aspecto de acción y patrón de sección, sin introducir controles sin uso.

**Punto de control**: Una persona puede consultar la referencia y resolver una acción, una sección y una imagen sin inferir una nueva identidad.

## Fase 4: Historia de usuario 2 - Aplicar los fundamentos a la Home existente (Prioridad: P1)

**Objetivo**: La Home conserva contenido y recorrido, pero sus patrones repetidos siguen las reglas compartidas.

**Prueba independiente**: Abrir `/es/` en móvil y escritorio y comparar su contenido, jerarquía, acciones y superficies con la referencia, sin cambios de destinos ni comportamiento.

- [X] T009 [P] [US2] Migrar introducción y áreas de práctica a `PageSection`, `PageContainer` y patrones compartidos en `frontend/src/features/public-home/components/firm-introduction.tsx` y `frontend/src/features/public-home/components/practice-areas.tsx`.
- [X] T010 [P] [US2] Aplicar los patrones compartidos de superficie, tipografía, imagen y enlaces en `frontend/src/features/public-home/components/immigration-highlight.tsx` y `frontend/src/features/public-home/components/laura-profile.tsx`.
- [X] T011 [US2] Unificar las acciones y reglas visuales de las variantes móvil/escritorio del hero en `frontend/src/features/public-home/components/hero-section.tsx` sin cambiar el comportamiento de vídeo o navegación.
- [X] T012 [US2] Aplicar `ButtonLink`, `Button`, `PageContainer` y patrones de sección a la CTA y al shell existente en `frontend/src/features/public-home/components/contact-call-to-action.tsx`, `frontend/src/components/layout/header.tsx`, `frontend/src/components/layout/mobile-navigation.tsx` y `frontend/src/components/layout/footer.tsx`.

**Punto de control**: Las apariciones repetidas de acción, contenedor, sección y superficie en la Home siguen los patrones documentados.

## Fase 5: Historia de usuario 3 - Crear futuras páginas sobre una referencia común (Prioridad: P2)

**Objetivo**: La referencia permite aplicar patrones futuros sin construir componentes vacíos.

**Prueba independiente**: Usar la referencia para resolver el patrón de una tarjeta, imagen y campo de formulario de una futura página, sin añadir nuevos valores globales.

- [X] T013 [US3] Completar en `frontend/docs/design-system.md` las reglas de imagen, tarjetas, insignias, avisos y campos de formulario, indicando qué controles quedan pendientes hasta tener un uso real.
- [X] T014 [US3] Revisar que los ejemplos y reglas de `frontend/docs/design-system.md` concuerdan con `specs/003-design-system-foundations/contracts/design-system-ui.md` y sirven de referencia para una página nueva.

**Punto de control**: La siguiente feature puede consultar la referencia para reutilizar patrones sin inventar estilos o crear controles no utilizados.

## Fase 6: Pulido y validación transversal

**Propósito**: Confirmar que los cambios preservan la Home y cumplen los escenarios observables.

- [X] T015 Ejecutar `npm run lint` y `npm run build` desde `frontend/` y completar los escenarios manuales de `specs/003-design-system-foundations/quickstart.md`, corrigiendo hallazgos dentro del alcance.

## Dependencias y orden de ejecución

### Dependencias entre fases

- **Preparación**: T001 crea la ubicación de la referencia.
- **Fundamentos compartidos**: T002 y T003 pueden ejecutarse en paralelo; T004-T006 dependen de los tokens y deben terminar antes de migrar la Home.
- **Historia de usuario 1**: T007-T008 dependen de los fundamentos y se completan antes de las migraciones visuales.
- **Historia de usuario 2**: T009-T012 dependen de los fundamentos; T011 y T012 pueden avanzar en paralelo con T009-T010 al tocar archivos diferentes.
- **Historia de usuario 3**: T013-T014 amplían la referencia existente y siguen a T007-T008.
- **Pulido**: T015 depende de todas las fases anteriores.

### Dependencias entre historias de usuario

- **Historia de usuario 1 (P1)**: Requiere la fase de fundamentos; produce la referencia compartida.
- **Historia de usuario 2 (P1)**: Requiere los fundamentos y la referencia de US1 para migrar la Home sin reinterpretar decisiones.
- **Historia de usuario 3 (P2)**: Requiere la referencia de US1; documenta patrones que usarán páginas futuras, sin depender de la migración completa de Home.

### Oportunidades de paralelización

- T002 y T003 modifican archivos distintos y pueden ejecutarse en paralelo.
- T009 y T010 modifican componentes distintos y pueden ejecutarse en paralelo una vez completados los fundamentos.
- T011 puede ejecutarse en paralelo con T009-T010; T012 también puede paralelizarse con ellos si se mantienen los archivos indicados separados.

## Estrategia de implementación

### MVP primero

1. Completar T001-T006 para crear referencia y fundamentos compartidos.
2. Completar US1 para dejar documentadas las decisiones visuales.
3. Completar US2 y validar de forma independiente la Home.
4. Completar US3 para preparar la referencia a páginas futuras sin añadir controles no utilizados.
5. Ejecutar la validación automatizada y manual de T015.

### Entrega incremental

1. Fundamentos y documentación compartida.
2. Aplicación a la Home existente, preservando contenido y comportamiento.
3. Reglas de consulta para páginas futuras y validación final.

## Resumen de validación de formato

- Todas las tareas tienen checkbox, ID secuencial y descripción con ruta concreta.
- Las etiquetas `[US1]`, `[US2]` y `[US3]` aparecen únicamente en las fases de historias de usuario.
- `[P]` se utiliza solo en tareas sobre archivos diferentes y sin dependencias mutuas.
- No se añaden tareas para crear una suite de tests; la feature requiere lint, build y escenarios manuales definidos en `quickstart.md`.