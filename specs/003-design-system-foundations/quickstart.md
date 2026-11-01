# Guía rápida: Fundamentos del sistema de diseño

## Prerrequisitos

- Dependencias instaladas en `frontend/`.
- Servidor local y navegador con tamaños de viewport ajustables.
- Teclado y opción de sistema operativo o navegador para activar reducción de movimiento.

## Validación automatizada

Desde `frontend/`, ejecutar:

```powershell
npm run lint
npm run build
```

Ambos comandos deben finalizar correctamente. No se requiere backend ni servicio externo.

## Escenarios manuales

1. Abrir `/es/` y recorrer hero, áreas de práctica, perfil de Laura, CTA, header y footer. Confirmar que contenido y orden se mantienen y que colores, tipografía, anchuras y espaciado siguen la referencia.
2. Comparar botones nativos y enlaces con presentación de acción. Confirmar que conservan su semántica, comparten variantes visuales y no repiten estilos particulares.
3. Usar Tab, Shift+Tab y Enter para recorrer navegación y acciones. Confirmar foco visible, orden coherente y estados distinguibles.
4. Probar las acciones con ratón y táctil. Confirmar que la función no requiere hover y que el feedback de hover/active es discreto.
5. Activar reducción de movimiento y repetir el recorrido. Confirmar que la página no depende de animaciones para revelar información o habilitar controles.
6. Revisar una ventana móvil estrecha y una de escritorio amplia. Confirmar que no hay overflow horizontal global, contenido cortado ni controles difíciles de tocar.
7. Revisar títulos, enlaces y textos largos, así como el placeholder de fotografía. Confirmar que mantienen legibilidad, proporción, espacio reservado y texto alternativo acorde a su propósito.
8. Consultar `frontend/docs/design-system.md` y el contrato de esta feature para encontrar la regla de acción, imagen, campo de formulario y variante de superficie sin inferir valores nuevos.

## Resultado esperado

La Home conserva su identidad y recorrido; los patrones repetidos tienen una regla compartida; teclado, tacto y reducción de movimiento siguen funcionando; la referencia permite construir la próxima página sin inventar otra identidad visual.