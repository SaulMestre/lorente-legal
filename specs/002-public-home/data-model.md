# Modelo de datos: Home pública

**Feature**: `002-public-home`
**Date**: 2026-09-21

Esta feature es una superficie pública y principalmente estática de presentación. No introduce entidades persistentes de backend ni un modelo de base de datos.

## Contenido público de la Home

Representa el contenido estructural mostrado en la Home.

| Campo | Descripción | Reglas |
|---|---|---|
| identity | Identidad y naturaleza jurídica del despacho | Debe identificar Lorente Legal como despacho jurídico |
| heroMessage | Mensaje introductorio breve | Debe identificar el despacho, a Laura y una vía principal de continuación |
| introduction | Presentación breve del despacho | Debe ser legible en el HTML inicial |
| contactCallToAction | Acción principal de contacto | Debe apuntar al destino público de contacto sin requerir un formulario conectado |

## Área de práctica

Representa un área jurídica presentada en la Home.

| Campo | Descripción | Reglas |
|---|---|---|
| name | Nombre visible del área | Obligatorio para cada una de las cinco áreas iniciales |
| summary | Texto explicativo breve | No debe contener afirmaciones jurídicas finales no aprobadas para publicación |
| destination | Ruta pública futura | Debe usar el mapa de rutas de la feature y no inventar una página no publicada |
| prominence | Prioridad de presentación | Extranjería y Nacionalidad reciben un bloque destacado propio |

Initial values:

- Extranjería
- Nacionalidad
- Derecho de familia
- Derecho laboral
- Derecho civil

## Perfil profesional

Representa la presentación pública de Laura en la Home.

| Campo | Descripción | Reglas |
|---|---|---|
| name | Nombre profesional | Obligatorio y visible |
| summary | Presentación profesional breve | Debe entenderse sin fotografía |
| imageSlot | Espacio reservado para imagen | Puede estar vacío en esta feature y no debe ser necesario para entender la sección |
| destination | Futura ruta Sobre mí | Debe estar disponible como destino de navegación cuando exista la página |

## Ruta pública

Representa un elemento del mapa de navegación pública.

| Campo | Descripción | Reglas |
|---|---|---|
| label | Etiqueta de navegación legible | Debe ser descriptiva y localizarse mediante la capa i18n |
| locale | Locale publicado | `es` se publica primero; `en` y `ca` se preparan pero no se publican en esta feature |
| path | Ruta localizada | La Home española usa `/es/`; la raíz `/` es un punto de entrada no permanente |
| availability | Si la feature destino está publicada | Los destinos no publicados no deben mostrar contenido ficticio |

## Locale

Representa el contexto de idioma compatible.

| Valor | Significado | Regla de publicación |
|---|---|---|
| `es` | Español | Publicado en esta feature |
| `en` | Inglés | Preparado para publicación futura; sin duplicar la implementación |
| `ca` | Valenciano/Catalán | Preparado para publicación futura; sin duplicar la implementación |

## Relaciones

- Un `Locale` determina el conjunto de `Public Route` localizadas.
- Un `Public Home Content` contiene varias entradas `Practice Area`.
- Un `Public Home Content` contiene una presentación `Professional Profile`.
- Un `Practice Area` y un elemento de navegación pueden referenciar el mismo destino público futuro, pero la disponibilidad de la ruta sigue siendo explícita.

## Reglas de estado

- La Home no tiene estado de ciclo de vida persistente.
- Una ruta futura está publicada y es navegable, o no está publicada y no debe representarse mediante contenido ficticio.
- `/` es una redirección de entrada y no una representación indexable de la Home.
