# Arquitectura de la plataforma e integración futura

## Estado y alcance

Este documento describe la arquitectura objetivo acordada para Lorente Legal. La web actual y Lorente Legal Desk siguen en repositorios separados. **No se ha realizado aún la migración a un monorepo ni se ha desplegado una API compartida.**

### Aplicaciones y propiedad de responsabilidades

| Componente | Tecnología | Responsabilidad | Despliegue previsto |
| --- | --- | --- | --- |
| Web pública | Next.js 16, React, TypeScript | Presentación, captación, contenido público y consumo de operaciones HTTP autorizadas | `lorentelegal.es`; Static Site si el build es compatible |
| Desk + backend | .NET 10, Blazor Interactive Server, Minimal APIs | Aplicación interna y única fuente de verdad para operaciones de negocio | Un Web Service de pago en Render |
| Persistencia | EF Core + PostgreSQL | Datos de negocio e identidades | PostgreSQL de pago con backups |
| Chatbot futuro | Pendiente | Interfaz de atención / procesamiento de IA, sin duplicar reglas de negocio | Alojamiento y dominio independientes por decidir |

**Una sola API de negocio:** los endpoints HTTP externos vivirán dentro del host `LauraLegal.Web`, que ya sirve Blazor. No se creará un ejecutable separado `LorenteLegal.Api` por defecto. Los componentes de Desk seguirán invocando servicios .NET mediante DI, no por HTTP al propio host.

Los documentos se almacenarán en un servicio privado de objetos; las políticas, autenticación, autorización y almacenamiento no se consideran implantados todavía.

## Integración de la web con Desk

1. Las rutas HTTP de negocio se implementarán en Desk con DTO explícitos, validación y controles de acceso.
2. La API publicará OpenAPI **cuando existan endpoints reales de negocio**.
3. Se generarán tipos TypeScript a partir de OpenAPI, sin duplicar manualmente los contratos.
4. `frontend/src/lib/api/` albergará infraestructura común y `frontend/src/features/<feature>/api/` operaciones por módulo, cuando haga falta.
5. No se introducirán ahora clientes HTTP ficticios, secretos en el navegador ni endpoints de ejemplo.
6. Las consultas anónimas futuras requerirán protección contra abuso; los documentos y expedientes no serán accesibles anónimamente.

Los cambios que afecten a web y Desk se harán compatibles entre versiones y se probarán antes de su despliegue; una PR común no convierte automáticamente los despliegues en atómicos.

## Exportación estática: bloqueo actual

La carpeta `frontend/` contiene un proyecto Next.js 16. `frontend/next.config.ts` **no tiene** `output: "export"` por ahora. Además, `frontend/src/app/page.tsx` ejecuta `redirect("/es/")`, que no es compatible con exportación estática.

Antes de afirmar que la web puede desplegarse como Render Static Site se debe:

1. Diseñar y probar el comportamiento de `/` sin redirección de servidor (por ejemplo, contenido estático o regla de redirección soportada por el hosting, teniendo en cuenta SEO y locales).
2. Verificar que las rutas dinámicas publicadas estén generadas con `generateStaticParams` y que no haya dependencias en funciones de petición o Server Actions.
3. Activar `output: "export"` en una rama de integración y ejecutar `npm ci`, `npm run build` y validaciones de rutas, fuentes, navegación y metadata.
4. Confirmar que Render publica la carpeta `out/` desde `frontend/` antes de modificar el servicio de producción.

**No se realiza este cambio de comportamiento en la presente PR.** Si una funcionalidad futura necesita procesamiento en tiempo de petición, se utilizará la API ASP.NET Core o se decidirá explícitamente un despliegue de Next.js con servidor; no se supondrá que el Static Site puede ejecutar Server Actions.

## Futuro monorepo

Estructura conceptual, pendiente de importar Desk preservando historial:

```text
lorente-legal-platform/
  apps/
    website/        # contenido actual de frontend/
    desk/           # solución LauraLegal.sln, con sus cuatro proyectos
    chatbot/        # solo cuando exista
  contracts/        # generados cuando existan APIs reales
  workspaces/       # configuraciones VS Code por tarea
  .github/          # CI e instrucciones de agente por ruta
  docs/             # decisiones compartidas
```

Antes de migrar: inspeccionar Desk y su historia, revisar secretos en historiales, comprobar rutas de Docker y Next, preservar Constitutions existentes y actualizar las reglas específicas por aplicación. Los repositorios originales se conservarán hasta que los despliegues desde el nuevo repositorio estén probados.

El monorepo no implica compilar ni desplegar todo por cada commit. Cada componente tendrá su propia configuración de Render, filtros por rutas y pruebas. Copilot trabajará con workspaces restringidos a la aplicación o aplicaciones afectadas.

## Estado real y pendientes

- Esta PR solo modifica documentación y reglas de arquitectura.
- No hay cambios funcionales, configuración de Render, variables de entorno, paquetes ni migraciones.
- No se ha validado el build estático de Next.js ni una ejecución de Desk en producción.
- La API de Desk todavía requiere completar autenticación/autorización y configuración persistente segura antes de exponer datos reales.
- El chatbot y su modelo de autenticación permanecen fuera de alcance.
