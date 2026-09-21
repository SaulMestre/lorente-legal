# Guía rápida: Home pública

**Feature**: `002-public-home`

Esta guía valida la Home pública después de su implementación. Excluye deliberadamente backend, autenticación, formularios conectados y trabajo de identidad visual definitiva.

## Prerrequisitos

- El proyecto frontend está disponible y sus dependencias están instaladas.
- El servidor de desarrollo puede iniciarse con el comando documentado del frontend.
- Hay un navegador con emulación de viewport y soporte de teclado.

## Escenarios de validación

### 1. Punto de entrada del locale

1. Abrir `/`.
2. Confirmar que la respuesta redirige temporalmente a `/es/` mientras solo esté publicado el español.
3. Confirmar que `/es/` renderiza la Home y no vuelve a redirigir inmediatamente.
4. Confirmar que `/es/` es la URL indexable y canónica y que `/` no se trata como Home canónica.

### 2. Contenido estructural

En `/es/`, confirmar que la página contiene:

- Header y navegación principal.
- Hero que identifica Lorente Legal, el despacho jurídico y a Laura.
- Presentación breve del despacho.
- Áreas de Extranjería, Nacionalidad, familia, laboral y civil.
- Bloque destacado de Extranjería y Nacionalidad.
- Perfil de Laura con espacio de imagen utilizable.
- Llamada principal a contacto.
- Footer con la información secundaria reservada.

### 3. Navegación

- Confirmar que la navegación principal expone las diez etiquetas españolas previstas.
- Confirmar que los enlaces a páginas futuras no renderizan contenido ficticio.
- Confirmar que la navegación móvil expone los mismos destinos previstos que la navegación de pantallas grandes.
- Confirmar que la navegación sigue siendo utilizable solo con teclado.

### 4. Revisión responsive y de accesibilidad

- Comprobar un viewport móvil estrecho, uno de escritorio amplio y ambas orientaciones cuando estén disponibles.
- Confirmar que no existe overflow horizontal global.
- Recorrer la página con `Tab`, `Shift+Tab`, `Enter` y `Escape` cuando corresponda.
- Confirmar que el foco es visible y el orden es coherente.
- Confirmar que landmarks y jerarquía de encabezados son comprensibles con herramientas de accesibilidad.
- Confirmar que el contenido sigue siendo utilizable cuando el texto crece para locales futuros.

### 5. SEO y HTML inicial

- Inspeccionar el documento inicial para comprobar el contenido principal y el encabezado principal de la Home.
- Confirmar que `/es/` tiene title, description, canonical y metadata social propios.
- Confirmar que la página puede incluirse en el sitemap público cuando se publique.
- Confirmar que ningún contenido SEO crítico aparece solo tras la ejecución en cliente.

## Resultado esperado

La Home está completa estructuralmente, funciona en móvil y escritorio, es accesible mediante teclado, es indexable en `/es/`, está preparada para locales futuros y no contiene backend ni integraciones conectadas.
