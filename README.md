# VetFlow

Landing page responsive para VetFlow, una plataforma de gestión veterinaria, creada con React, TypeScript y Vite.

## Empezar

```bash
npm install
npm run dev
```

Vite mostrará la dirección local en la terminal.

## Scripts

- `npm run dev`: inicia el servidor local.
- `npm run build`: verifica los tipos y genera la compilación en `dist/`.
- `npm run lint`: analiza el código con Oxlint.
- `npm run preview`: sirve localmente la compilación generada.

## Estructura

```text
src/
├── components/
│   ├── layout/                 # Navegación y pie de página
│   └── ui/                     # Componentes visuales compartidos
├── features/
│   ├── contact/                # Formulario de clínicas
│   ├── legal/pages/            # Políticas de privacidad y cookies
│   └── landing/
│       ├── components/         # Secciones, vista previa y tarjetas reutilizables
│       └── data/               # Contenido tipado separado de la presentación
├── App.tsx                     # Composición de la página
├── App.css                     # Estilos de componentes y secciones
├── index.css                   # Estilos globales y tokens visuales
└── main.tsx                    # Punto de entrada de React
```

El menú móvil, el acordeón de preguntas frecuentes y el formulario de clínicas incluyen interacciones funcionales en el navegador. El formulario actualmente muestra una confirmación local; para recibir solicitudes reales, conéctalo a una API o servicio de backend.

Las secciones de landing reutilizan tarjetas tipadas y separan los datos de presentación para que el contenido y los módulos puedan evolucionar de forma independiente.

La navegación utiliza React Router. Las políticas están disponibles en `/politica-de-privacidad` y `/politica-de-cookies`.
