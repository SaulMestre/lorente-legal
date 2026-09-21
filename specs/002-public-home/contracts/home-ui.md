# Contrato UI de la Home

**Feature**: `002-public-home`
**Date**: 2026-09-21

Este es un contrato UI orientado a usuarios. No expone una API de backend ni define cuerpos de implementación.

## Contrato de rutas

| Ruta | Comportamiento | Indexación |
|---|---|---|
| `/` | Punto de entrada del locale; redirige de forma no permanente al locale correspondiente. Mientras solo exista español, redirige a `/es/`. | No indexable como Home |
| `/es/` | Home pública española | Indexable y canónica |
| `/en/` | Reservada para una futura Home inglesa publicada | No debe generarse hasta su publicación |
| `/ca/` | Reservada para una futura Home valenciana/catalana publicada | No debe generarse hasta su publicación |

## Landmarks de la Home

La Home española debe exponer estas regiones estructurales:

1. Header y navegación principal.
2. Hero con una acción principal de contacto/servicios.
3. Presentación breve del despacho.
4. Áreas de práctica.
5. Bloque destacado de Extranjería y Nacionalidad.
6. Perfil profesional de Laura con espacio de imagen.
7. Llamada principal a contacto.
8. Footer con navegación secundaria, enlaces legales, placeholders de contacto, selector de idioma y copyright.

## Contrato de navegación

Etiquetas de navegación principal en español:

- Inicio -> `/es/`
- Servicios -> futura ruta localizada de servicios
- Extranjería -> futura ruta localizada de extranjería
- Nacionalidad -> futura ruta localizada de nacionalidad
- Laboral -> futura ruta localizada laboral
- Civil -> futura ruta localizada civil
- Familia -> futura ruta localizada de familia
- Sobre mí -> futura ruta localizada del perfil
- Contacto -> futura ruta localizada de contacto
- Blog -> futura ruta localizada del blog

Los destinos no publicados deben representarse mediante decisiones explícitas de disponibilidad. La Home no debe fabricar páginas ni contenido placeholder indexable. Los enlaces conservarán las rutas previstas para que puedan activarse cuando se publiquen las features correspondientes.

## Contrato de accesibilidad

- Usar landmarks semánticos y un único encabezado principal.
- Usar textos descriptivos en los enlaces.
- Garantizar que toda navegación interactiva sea operable con teclado y foco visible.
- Proporcionar una alternativa de navegación móvil accesible sin depender de hover.
- Mantener el espacio de imagen profesional como decorativo o informativo según su contenido real; no inventar texto alternativo para una imagen ausente.

## Contrato SEO

- `/es/` tiene title, description, canonical y metadata social propios del locale.
- El contenido principal está presente en el HTML inicial.
- `/` es un dispatcher no permanente y no debe tratarse como Home canónica.
- Los datos estructurados solo se añaden cuando representan contenido visible y aprobado.

## Contrato responsive

- Una única interfaz adaptable sirve a móviles y pantallas grandes.
- No existe overflow horizontal global.
- Navegación, secciones, acciones y contenido siguen siendo utilizables en los viewports compatibles.
- El contenido de locales futuros puede crecer sin asumir anchos fijos.
