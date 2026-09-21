# Plan de implementación: Home pública

**Rama**: `002-public-home` | **Fecha**: 2026-09-21 | **Spec**: [spec.md](spec.md)

**Entrada**: Especificación de la feature en `/specs/002-public-home/spec.md`

## Resumen

Crear la Home pública española en `/es/` como una superficie de presentación renderizada en
servidor, responsive y accesible para Lorente Legal. La ruta raíz `/` actúa únicamente como
punto de entrada no permanente al locale y redirige a `/es/` mientras solo esté publicado el
español. La Home compone sus propias secciones estructurales, utiliza primitivas compartidas
de layout/UI solo cuando ya existan o sean realmente reutilizables, y mantiene explícitos los
futuros locales y destinos públicos sin implementar todavía sus páginas.

## Contexto técnico

<!--
  Esta sección recoge el contexto técnico de la feature y sirve como referencia para
  guiar la implementación.
-->

**Lenguaje/Versión**: TypeScript en modo estricto; la versión de React/Next.js seguirá la configuración del frontend

**Dependencias principales**: Next.js App Router, React y Tailwind CSS; esta feature no requiere nuevas dependencias

**Almacenamiento**: No aplica; no hay backend, base de datos ni datos persistentes de la feature

**Pruebas**: Validación en navegador y de flujos de usuario, revisión de accesibilidad con teclado, comprobaciones responsive y herramientas de pruebas frontend disponibles

**Plataforma objetivo**: Navegadores web públicos en tamaños de viewport móviles y de escritorio

**Tipo de proyecto**: Página de aplicación web pública

**Objetivos de rendimiento**: Contenido principal disponible en el HTML inicial; sin JavaScript de cliente innecesario, cambios globales de layout ni overflow horizontal introducidos por la Home

**Restricciones**: `/es/` es indexable y canónica; `/` es un dispatcher no permanente; Server Components son la opción predeterminada; no hay backend ni integraciones conectadas; no se define sistema visual definitivo ni dependencias de animación

**Escala/Alcance**: Una Home pública localizada con un locale publicado, diez destinos de navegación previstos, cinco áreas de práctica y una sección profesional

## Constitution Check

*GATE: Superado antes de la investigación de la Fase 0 y reevaluado tras el diseño de la Fase 1.*

- **Arquitectura**: PASS. Este plan cubre únicamente la presentación frontend y no añade backend, base de datos, autenticación ni acceso a infraestructura.
- **Server Components**: PASS. La Home y el contenido estático se renderizan en servidor por defecto; el comportamiento de cliente se limita a la interacción necesaria de navegación móvil.
- **Estado y API**: PASS. Esta feature no requiere Server State del backend, TanStack Query, Zustand ni cliente HTTP.
- **Routing e i18n**: PASS. `/es/` es la Home publicada y canónica; `/` es un dispatcher no permanente; `en` y `ca` quedan reservados sin páginas ficticias.
- **SEO**: PASS. El HTML inicial, la metadata localizada, la URL canónica y la inclusión en sitemap forman parte del diseño.
- **Accesibilidad y responsive**: PASS. Landmarks semánticos, teclado, foco visible, layout mobile-first y ausencia de overflow horizontal global son gates de aceptación.
- **Alcance visual**: PASS. No se introduce identidad visual definitiva, sistema de animación ni dependencia visual.
- **Complejidad**: PASS. No hay incumplimientos constitucionales ni excepciones de complejidad que registrar.

## Estructura del proyecto

### Documentación de esta feature

```text
specs/002-public-home/
├── plan.md              # Este archivo (salida de /speckit-plan)
├── research.md          # Salida de la Fase 0 (/speckit-plan)
├── data-model.md        # Salida de la Fase 1 (/speckit-plan)
├── quickstart.md        # Salida de la Fase 1 (/speckit-plan)
├── contracts/
│   └── home-ui.md       # Contrato de rutas públicas y UI de la Home
└── tasks.md             # Salida de la Fase 2 (/speckit-tasks; no la crea /speckit-plan)
```

### Código fuente (raíz del repositorio)

```text
frontend/
└── src/
  ├── app/
  │   ├── page.tsx          # Punto de entrada y dispatcher de locale
  │   └── [locale]/
  │       └── page.tsx      # Composición de la Home localizada
  ├── components/
  │   ├── layout/           # Primitivas de layout compartidas cuando sean reutilizables
  │   └── ui/               # Primitivas visuales compartidas cuando sean reutilizables
  ├── features/
  │   └── public-home/
  │       ├── components/   # Secciones específicas de la Home
  │       ├── content/      # Contenido publicado por locale y datos de rutas
  │       └── index.ts       # Exportaciones públicas de la feature
  ├── lib/
  │   ├── config/           # Configuración de locales y del sitio público
  │   └── i18n/             # Helpers centralizados de locales y rutas
  ├── hooks/                # Solo si un hook se comparte entre 2+ features
  ├── stores/               # No se utiliza en esta feature
  ├── types/                # Solo tipos compartidos globalmente
  └── utils/                # Solo utilidades puras compartidas

tests/
└── frontend/
  └── public-home/          # Comprobaciones de navegador y accesibilidad
```

**Decisión de estructura**: Utilizar el límite independiente de la aplicación frontend y
organizar el contenido específico de la Home en `frontend/src/features/public-home/`. Los
puntos de entrada del App Router deben ser ligeros: la ruta raíz selecciona el locale y la
ruta localizada compone la feature. El código UI/layout compartido se utiliza solo cuando
cumple la regla de reutilización entre features. Esta feature no incluye backend ni una capa
`src/services/`.

## Seguimiento de complejidad

No se han identificado incumplimientos constitucionales ni excepciones de complejidad.
