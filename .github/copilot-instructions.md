# Instrucciones del proyecto VetFlow

## Stack y comandos
- Aplicación web con React, TypeScript y Vite.
- `npm run dev`: servidor local de desarrollo.
- `npm run build`: comprobación TypeScript y compilación de producción.
- `npm run lint`: análisis estático con Oxlint.
- `npm run preview`: vista previa de la compilación.

## Arquitectura
- Mantener la composición global en `src/App.tsx`.
- Componentes de layout reutilizables en `src/components/layout/` y componentes visuales compartidos en `src/components/ui/`.
- Organizar funcionalidades de producto por dominio en `src/features/<dominio>/`; separar cada sección o comportamiento en componentes pequeños.
- Mantener los estilos globales en `src/index.css` y estilos de aplicación en `src/App.css` hasta que el proyecto necesite estilos por componente.
- Preferir componentes funcionales, props tipadas, HTML semántico y controles accesibles.
- El contenido visible de esta web debe estar en español y conservar el tono cercano y profesional de VetFlow.
