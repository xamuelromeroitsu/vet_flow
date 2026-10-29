export type PlatformCardData = {
  icon: string
  tone: string
  title: string
  subtitle: string
  bullets: string[]
  note: string
}

export type FeatureCardData = {
  icon: string
  title: string
  body: string
  link: string
  tone: string
}

export type WorkflowStepData = {
  number: string
  title: string
  text: string
}

export const platformCards: PlatformCardData[] = [
  {
    icon: '⌘',
    tone: 'mint',
    title: 'En esta Web de Presentación',
    subtitle: 'Acceso práctico y profesional',
    bullets: [
      'Conoce la tecnología VetFlow y explora las herramientas para tu clínica.',
      'Accede a información clara sobre la plataforma y sus funcionalidades.',
      'Descubre cómo VetFlow conecta a familias y profesionales veterinarios.',
    ],
    note: 'Tu información y la experiencia clínica siempre protegidas.',
  },
  {
    icon: '▣',
    tone: 'green',
    title: 'Exclusivo en la App Móvil',
    subtitle: 'Estás conectado desde cualquier lugar',
    bullets: [
      'Gestiona citas clínicas y mantén la información de cada paciente organizada.',
      'Consulta historiales veterinarios y seguimientos desde cualquier lugar.',
      'Recibe notificaciones de citas, recetas y controles próximos.',
    ],
    note: 'Protegemos cada consulta, paciente y conversación.',
  },
]

export const features: FeatureCardData[] = [
  {
    icon: '▧',
    title: 'Carnet Digital',
    body: 'Fichas médicas completas con historial, vacunas, esterilización y alergias en un solo lugar.',
    link: 'Ficha completa',
    tone: 'lilac',
  },
  {
    icon: '▣',
    title: 'Triaje Inteligente',
    body: 'Organiza los signos vitales y ayuda a detectar cambios que pueden necesitar atención veterinaria.',
    link: 'Conoce cómo funciona',
    tone: 'green',
  },
  {
    icon: '⚕',
    title: 'Derivación a Clínicas',
    body: 'Comparte la información importante con el equipo veterinario antes de la llegada del paciente.',
    link: 'Red integrada 24/7',
    tone: 'blue',
  },
  {
    icon: '▣',
    title: 'Modo sin conexión',
    body: 'Consulta información guardada incluso sin cobertura y sincronízala al volver a conectarte.',
    link: 'Seguridad total',
    tone: 'sky',
  },
]

export const workflowSteps: WorkflowStepData[] = [
  {
    number: '01',
    title: 'Registro de Signos y Síntomas',
    text: 'Registra el peso, la masa y los signos vitales de cada consulta para que el equipo tenga la información a mano.',
  },
  {
    number: '02',
    title: 'Orientación Preliminar',
    text: 'Revisa la información y recibe orientación inicial para organizar la atención según las necesidades del paciente.',
  },
  {
    number: '03',
    title: 'Conexión con la Clínica',
    text: 'Comparte los datos con el centro veterinario y mantén a la familia informada durante el seguimiento.',
  },
]
