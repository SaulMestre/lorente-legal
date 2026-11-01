# Plan de implementación: Fundamentos del sistema de diseño

**Rama de la feature**: `003-design-system-foundations` | **Fecha**: 2026-10-08 | **Spec**: [spec.md](spec.md)

**Entrada**: [spec.md](spec.md)

## Resumen

Consolidar la identidad visual aprobada de la Home en una referencia compartida, hacer explícitos sus tokens y estados de interacción, y migrar a esos patrones los elementos repetidos de la Home sin cambiar su contenido ni su composición. Se reutilizarán los fundamentos existentes de Tailwind, las fuentes cargadas con `next/font`, `PageContainer`, `SiteLink` y `Button`; los enlaces que se muestran como acciones conservarán semántica de enlace y tendrán un patrón compartido propio. Solo se crearán abstracciones que reduzcan duplicación observable en la Home.

## Contexto técnico

**Lenguaje y versiones**: TypeScript 5.7, React 19, Next.js 16.

**Dependencias principales**: Next.js App Router, Tailwind CSS 3.4 y `next/font`, ya instaladas. No se prevén dependencias nuevas.

**Persistencia**: No aplica.

**Pruebas**: `npm run lint` y `npm run build` desde `frontend/`; comprobación manual de responsive, teclado, estados de interacción y reducción de movimiento.

**Plataforma objetivo**: Navegadores actuales de escritorio y móvil.

**Tipo de proyecto**: Frontend web público existente.

**Objetivos de rendimiento**: No aumentar dependencias ni JavaScript de cliente para resolver estilos; conservar la carga optimizada de fuentes y los límites actuales de Server Components.

**Restricciones**: Mantener el contenido, orden, rutas y comportamiento de la Home; seguir la dirección visual aprobada; priorizar accesibilidad, diseño mobile-first y reducción de movimiento; no construir páginas secundarias ni controles sin uso inmediato.

**Alcance**: Una referencia visual reutilizable, tokens compartidos, patrones esenciales de acción/enlace/layout/superficie/imagen y su aplicación a Home y al shell compartido que se ve en ella. Los patrones de formulario pueden documentarse para Contacto; sus controles solo se implementan si existe uso dentro del alcance de esta feature.

## Revisión de la Constitución

| Regla | Estado | Aplicación a esta feature |
|---|---|---|
| Frontend tipado, Server Components por defecto y estilos centralizados | PASS | Se mantiene el stack existente; no se añade lógica de negocio ni estado innecesario. |
| Sistema de diseño centralizado y componentes UI reutilizables | PASS | La referencia será la fuente común; se reutilizan o amplían primitivas solo donde la Home ya repite patrones. |
| Accesibilidad y diseño responsive | PASS | Se especifican estados de foco, teclado, tacto, contenido variable y movimiento reducido. |
| Fuentes optimizadas y coherencia SEO/rendimiento | PASS | Se conservan las fuentes existentes y no se añaden dependencias de animación. |
| Simplicidad, YAGNI y separación por feature | PASS | No se crean controles de formulario sin consumo inmediato, una capa genérica de estilos ni páginas nuevas. |
| Idioma de código y documentación | PASS | El código seguirá en inglés y los documentos y textos de interfaz en español. |

**Resultado de la puerta inicial**: PASS. No se requieren excepciones a la Constitución.

## Investigación y decisiones

Los hallazgos y decisiones se recogen en [research.md](research.md). El estado inicial confirma una paleta y tipografías compartidas, clases de movimiento globales, un contenedor reutilizable y estilos de acciones repetidos en enlaces. La Home también repite medidas de contenedor y espaciado de sección.

Decisiones que guían el diseño:

- Mantener como base los colores actuales (`ink`, `moss`, `sage`, `paper`, `sand`) y Cormorant Garamond/DM Sans.
- Mantener el significado semántico: botones para acciones en la página y enlaces para navegación, incluso cuando el enlace tenga aspecto de botón.
- Reutilizar el `PageContainer` existente y formalizar un patrón de sección únicamente si elimina la repetición presente.
- Definir jerarquías tipográficas mediante estilos/tokens compartidos; no crear una capa de componentes tipográficos genéricos sin una necesidad semántica real.
- Describir patrones de formulario para uso futuro, sin crear controles vacíos de uso.

## Estructura del proyecto

### Documentación de esta feature

```text
specs/003-design-system-foundations/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── design-system-ui.md
└── tasks.md                  # Se genera en la fase /speckit-tasks
```

### Superficie de implementación prevista

```text
frontend/
├── docs/
│   └── design-system.md     # Referencia compartida duradera para futuras features
├── tailwind.config.ts        # Tokens y escalas compartidas
└── src/
    ├── app/globals.css      # Estados globales y movimiento
    ├── components/
    │   ├── ui/              # Patrones visuales reutilizables
    │   └── layout/          # Contenedor y shell común de la Home
    └── features/public-home/components/  # Aplicación de patrones, sin rediseño
```

**Decisión de estructura**: El código compartido vive en `frontend/src/components/ui/` o `frontend/src/components/layout/` según su responsabilidad. La documentación canónica duradera se ubicará en `frontend/docs/design-system.md`; los contratos y documentos de planificación de la feature permanecerán bajo `specs/003-design-system-foundations/`. No se añadirán carpetas genéricas vacías.

## Puerta de la Constitución tras el diseño

| Verificación | Estado |
|---|---|
| Fuente común de tokens y reglas | PASS |
| Componentes neutrales respecto al dominio | PASS |
| Semántica, teclado, foco y estados accesibles | PASS |
| Sin dependencias de animación ni servicios externos | PASS |
| Sin cambios de backend, rutas o comportamiento funcional | PASS |
| Componentes limitados a necesidades observadas | PASS |

**Resultado de la puerta posterior al diseño**: PASS. No se identifican violaciones que requieran justificar complejidad.

## Registro de complejidad

No aplica: el diseño no introduce proyectos, servicios, dependencias o capas adicionales que contradigan la Constitución.
