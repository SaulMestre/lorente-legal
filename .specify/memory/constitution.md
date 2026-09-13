<!--
Sync Impact Report
- Cambio de versión: inexistente -> 1.0.0
- Principios modificados: ninguno; se crean los cinco principios iniciales
- Secciones añadidas: Restricciones técnicas y de seguridad; Flujo de desarrollo y calidad
- Secciones eliminadas: ninguna
- TODOs: confirmar la fecha original de ratificación
-->

# Constitución de Lorente Legal

## Principios fundamentales

### I. Separación arquitectónica y fuente única de verdad
Lorente Legal DEBE componerse de dos aplicaciones independientes: un frontend con Next.js,
React y TypeScript, y un backend con ASP.NET Core Web API en C#. El backend DEBE ser la
única fuente de verdad para los datos y las reglas de negocio; la lógica de negocio NO DEBE
implementarse en el frontend. El sistema DEBE evolucionar inicialmente como un monolito
modular y NO DEBE dividirse en microservicios sin una necesidad técnica demostrada.

### II. Frontend tipado, accesible y orientado a la presentación
El frontend DEBE utilizar Next.js App Router, React, TypeScript en modo estricto y Tailwind
CSS. Los componentes React DEBEN utilizar `.tsx` y el resto del código fuente TypeScript
`.ts`; NO DEBEN crearse archivos `.js` o `.jsx` salvo una exigencia explícita de una
herramienta externa. El diseño DEBE ser responsive, mobile-first, accesible y optimizado
para SEO, renderizado apropiado y Core Web Vitals. Los Client Components SOLO DEBEN
utilizarse cuando sean necesarios para la interactividad del navegador. Las páginas NO
DEBEN contener lógica de negocio y el acceso a la API DEBE estar centralizado.

### III. Dominio protegido y aplicación explícita
El backend DEBE organizarse en los proyectos `LorenteLegal.Domain`,
`LorenteLegal.Application`, `LorenteLegal.Infrastructure` y `LorenteLegal.Api`, con la
dirección de dependencias `Api -> Application -> Domain`. Infrastructure puede implementar
abstracciones de Application o Domain, pero Domain NO DEBE depender de ASP.NET Core,
Entity Framework Core, PostgreSQL, Infrastructure ni APIs externas. Las entidades DEBEN
proteger sus invariantes, evitar setters públicos sin justificación y representar conceptos
relevantes mediante Value Objects cuando corresponda. Cada operación importante DEBE
representarse como un caso de uso explícito en Application; los controladores DEBEN
limitarse a preocupaciones HTTP y a invocar esos casos de uso.

### IV. Seguridad, privacidad y control del acceso
La autenticación y autorización DEBEN gestionarse y verificarse en el backend para toda
operación protegida. Los secretos, credenciales y claves API NO DEBEN almacenarse en Git;
DEBEN utilizarse variables de entorno o un gestor de secretos. Las entradas y archivos
subidos DEBEN validarse, los nombres de archivo NO DEBEN convertirse directamente en rutas,
los documentos NO DEBEN ser públicos por defecto y producción DEBE utilizar HTTPS. Los
logs NO DEBEN incluir contraseñas, tokens, contenido documental ni datos personales
sensibles innecesarios. El diseño DEBE respetar el principio de minimización del RGPD y
permitir posteriormente exportación, eliminación, retención, auditoría y consentimiento.

### V. Calidad verificable, simplicidad y evolución prudente
La lógica crítica de dominio DEBE poder probarse unitariamente sin base de datos ni red.
Los casos de uso y las integraciones críticas DEBERÍAN disponer de pruebas automatizadas,
utilizando xUnit, Vitest, React Testing Library y Playwright cuando sean adecuados. El
backend DEBE utilizar logging estructurado, errores centralizados y respuestas de API
consistentes. Deben preferirse nombres intencionales, responsabilidades claras y código
simple; NO DEBEN añadirse dependencias, interfaces, CQRS, MediatR u otros patrones sin una
justificación concreta. El desarrollo DEBE aplicar YAGNI sin cerrar la posibilidad de añadir
cuentas, expedientes, documentos, mensajería, citas, pagos o automatizaciones en el futuro.

## Restricciones técnicas y de seguridad

El backend DEBE utilizar .NET 10, ASP.NET Core, C#, Entity Framework Core y PostgreSQL.
El acceso a la base de datos DEBE permanecer en Infrastructure, las migraciones DEBEN estar
versionadas y los cambios representables mediante migración NO DEBEN aplicarse manualmente
en producción. Los documentos DEBEN almacenarse en almacenamiento de objetos mediante una
abstracción sustituible; PostgreSQL solo DEBE conservar sus metadatos. Los contratos HTTP
DEBEN ser explícitos, REST orientados a recursos y utilizar códigos de estado adecuados.
Swagger/OpenAPI DEBE estar disponible durante el desarrollo. Las integraciones de correo,
WhatsApp, IA, pagos, almacenamiento y autenticación DEBEN aislarse tras abstracciones, con
el código específico de proveedores en Infrastructure. La IA NO DEBE tomar decisiones
jurídicas finales y todo resultado que afecte a un procedimiento DEBE poder revisarse.

## Flujo de desarrollo y calidad

Los cambios DEBEN ser pequeños, coherentes y revisables. Antes de integrar una modificación
se DEBE comprobar su cumplimiento con esta constitución, sus pruebas relevantes, validación
de entradas, autorización y ausencia de secretos o documentos de clientes en el repositorio.
Las pruebas DEBEN verificar comportamiento y contratos, no detalles internos. Los errores de
negocio esperables DEBEN expresarse de forma explícita y los errores inesperados DEBEN
gestionarse centralmente sin exponer trazas ni detalles internos en producción. Las nuevas
funcionalidades DEBEN respetar los límites entre frontend, API, Application, Domain e
Infrastructure y NO DEBEN anticipar funcionalidades futuras sin una necesidad actual.

## Gobernanza

Esta constitución prevalece sobre prácticas incompatibles del proyecto. Toda modificación
DEBE documentar la motivación, las secciones afectadas, el impacto sobre el código y las
pruebas o migraciones necesarias. Los cambios requieren revisión de cumplimiento antes de
integrarse. La versión utiliza SemVer: MAJOR para eliminar o redefinir reglas de forma
incompatible, MINOR para añadir o ampliar principios y PATCH para aclaraciones sin cambio
semántico. En cada revisión se DEBE comprobar la arquitectura, seguridad, privacidad,
calidad y alcance YAGNI. Las plantillas y guías dependientes DEBEN alinearse cuando una
enmienda cambie sus supuestos.

**Versión**: 1.0.0 | **Ratificada**: TODO(RATIFICATION_DATE): confirmar fecha original | **Última enmienda**: 2026-09-12
