// All icons are now custom SVG components from PestIcons.tsx
import { ServiceItem, Testimonial, NavLink, MethodItem } from './types';
import {
  CommercialPestIcon,
  CockroachIcon,
  TermiteIcon,
  RodentIcon,
  BedBugHotelIcon,
  SprayCanIcon,
  ShieldPestIcon,
  WoodwormIcon,
  MouseTrapIcon,
} from './components/PestIcons';

export const COLORS = {
  primary: '#E53935',
  secondary: '#FBC02D',
  text: '#1A1A1A',
  white: '#FFFFFF'
};

export const CONTACT_INFO = {
  phone: "55 1234 5678",
  whatsapp: "55 1234 5678",
  email: "contacto@nombrenegocio.com",
  address: "Dirección del Negocio #123, Ciudad, País",
  schedule: "Servicio Profesional de Fumigación | Nombre Negocio"
};

export const LOGO_LIGHT = "Insertar Logo";
export const LOGO_DARK = "Insertar Logo";

export const BRANCHES = [
  {
    id: 'guadalajara',
    name: "Guadalajara, Jal.",
    phone: "3312345678",
    coords: [-103.4147, 20.7326] as [number, number]
  },
  {
    id: 'leon',
    name: "León, Gto.",
    phone: "3312345678",
    coords: [-101.68, 21.12] as [number, number]
  },
  {
    id: 'queretaro',
    name: "Querétaro, Qro.",
    phone: "3312345678",
    coords: [-100.39, 20.59] as [number, number]
  },
  {
    id: 'cdmx',
    name: "Ciudad de México",
    phone: "3312345678",
    coords: [-99.13, 19.43] as [number, number]
  },
  {
    id: 'monterrey',
    name: "Monterrey, N.L.",
    phone: "3312345678",
    coords: [-100.31, 25.68] as [number, number]
  },
  {
    id: 'puebla',
    name: "Puebla, Pue.",
    phone: "3312345678",
    coords: [-98.20, 19.04] as [number, number]
  },
  {
    id: 'tijuana',
    name: "Tijuana, B.C.",
    phone: "3312345678",
    coords: [-117.03, 32.51] as [number, number]
  },
  {
    id: 'merida',
    name: "Mérida, Yuc.",
    phone: "3312345678",
    coords: [-89.62, 20.96] as [number, number]
  },
  {
    id: 'sanluis',
    name: "San Luis Potosí",
    phone: "3312345678",
    coords: [-100.97, 22.15] as [number, number]
  },
  {
    id: 'aguascalientes',
    name: "Aguascalientes",
    phone: "3312345678",
    coords: [-102.29, 21.88] as [number, number]
  },
  {
    id: 'hermosillo',
    name: "Hermosillo, Son.",
    phone: "3312345678",
    coords: [-110.96, 29.07] as [number, number]
  },
  {
    id: 'mexicali',
    name: "Mexicali, B.C.",
    phone: "3312345678",
    coords: [-115.45, 32.62] as [number, number]
  },
  {
    id: 'culiacan',
    name: "Culiacán, Sin.",
    phone: "3312345678",
    coords: [-107.39, 24.80] as [number, number]
  },
  {
    id: 'juarez',
    name: "Cd. Juárez, Chih.",
    phone: "3312345678",
    coords: [-106.48, 31.73] as [number, number]
  }
];


export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { 
    label: 'Servicios', 
    href: '/#servicios',
    children: [
      { label: 'Control General', href: '/servicios/control-de-plagas-comercial' },
      { label: 'Hormigas', href: '/servicios/control-de-hormigas' },
      { label: 'Cucarachas', href: '/servicios/eliminacion-de-cucarachas' },
      { label: 'Termitas', href: '/servicios/control-de-termitas' },
      { label: 'Arañas', href: '/servicios/control-de-aranas' },
      { label: 'Roedores (Ratas y Ratones)', href: '/servicios/control-de-roedores' },
      { label: 'Pescaditos de Plata', href: '/servicios/control-de-pescaditos' },
      { label: 'Avispas', href: '/servicios/control-de-avispas' },
      { label: 'Pulgas', href: '/servicios/control-de-pulgas' },
      { label: 'Garrapatas', href: '/servicios/control-de-garrapatas' },
      { label: 'Mosquitos', href: '/servicios/control-de-mosquitos' },
      { label: 'Chinches de Cama', href: '/servicios/control-de-chinches' }
    ]
  },
  { 
    label: 'Ubicaciones', 
    href: '/#mapa',
    children: BRANCHES.map(branch => ({
      label: branch.name,
      href: `/#mapa` // Or potentially a specific link if the map supports passing an ID
    }))
  },
  { label: 'Contacto', href: '/#contacto' },
];


export const PESTS_LIST = [
  {
    id: 'control-comercial',
    slug: 'control-de-plagas-comercial',
    name: "Control de Plagas Comercial",
    description: "Soluciones de alto nivel para restaurantes, hoteles e industrias alimentarias.",
    fullDescription: "Nuestro programa de Manejo Integrado de Plagas (MIP) está diseñado para cumplir con las normativas más estrictas de salud y seguridad en México (COFEPRIS). Cumplimos con estándares de fumigación profesionales y entregamos hojas de seguridad (MSDS) de todos nuestros materiales.",
    risks: "Sanciones sanitarias, pérdida de reputación, contaminación de alimentos y riesgos estructurales.",
    process: "Inspección detallada, diagnóstico de vulnerabilidades, implementación de barreras físicas y químicas, y monitoreo continuo.",
    prevention: "Manejo adecuado de residuos, sellado de grietas y capacitación del personal sobre higiene.",
    icon: CommercialPestIcon,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
    features: ["Normativa COFEPRIS", "Hojas de Seguridad", "Atención DISCRETA", "Planes de Mantenimiento"]
  },
  {
    id: 'cucarachas',
    slug: 'eliminacion-de-cucarachas',
    name: "Cucarachas",
    description: "Eliminación garantizada de Blatella germánica y americana en áreas críticas.",
    fullDescription: "Usamos geles activos inodoros y aspersión residual de última generación que no mancha ni requiere evacuar el área por tiempos prolongados.",
    risks: "Transmisión de enfermedades como salmonelosis, asma y alergias severas.",
    process: "Identificación de nidos, aplicación de cebo en puntos estratégicos y barreras perimetrales.",
    prevention: "Eliminación de fuentes de agua (humedad) y restos de comida en cocinas.",
    icon: CockroachIcon,
    image: "https://gleba.com.ar/wp-content/uploads/2021/12/Cucaracha-americana-Gleba.jpg",
    features: ["Gel sin olor", "Sin manchas", "Efecto dominó", "Respaldo Profesional"]
  },
  {
    id: 'termitas',
    slug: 'control-de-termitas',
    name: "Termitas",
    description: "Protección estructural con barreras antitermita de larga duración.",
    fullDescription: "Tratamientos preventivos en pre-construcción y correctivos en estructuras ya dañadas usando termonebulización y perforación controlada.",
    risks: "Daños irreversibles en muebles de madera y cimientos de la propiedad.",
    process: "Detección de túneles de avance, inyección de termiticida y sellado protector.",
    prevention: "Control de humedad en cimientos y evitar contacto de madera con suelo directo.",
    icon: WoodwormIcon,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq4LejNIfaT_kr_scpPV9lVoCfEDMffAgL_g&s",
    features: ["Protección 5+ años", "Barreras químicas", "Inyección profunda", "Inspección térmica"]
  },
  {
    id: 'roedores',
    slug: 'control-de-roedores',
    name: "Control de Roedores",
    description: "Sistemas de cebado y trampeo profesional para ratas y ratones.",
    fullDescription: "Instalación de estaciones de cebado de seguridad inviolables, ideales para áreas con niños o mascotas.",
    risks: "Incendios por cables roídos, transmisión de leptospirosis y hantavirus.",
    process: "Mapeo de zonas de paso, colocación de estaciones de monitoreo y exclusión de accesos.",
    prevention: "Sellado de entradas mayores a 1cm y gestión de contenedores de basura.",
    icon: MouseTrapIcon,
    image: "https://images.unsplash.com/photo-1452195100486-94291c66c271?auto=format&fit=crop&q=80&w=800",
    features: ["Estaciones de seguridad", "Trampeo incruento", "Eliminación de nidos", "Exclusión física"]
  },
  {
    id: 'chinches',
    slug: 'control-de-chinches',
    name: "Eliminación de Chinches",
    description: "Tratamiento de choque para chinches de cama en residencias.",
    fullDescription: "Utilizamos métodos combinados de calor y nebulización para eliminar huevos y adultos de forma inmediata. Seguridad total para tu familia y mascotas.",
    risks: "Picaduras nocturnas, insomnio y estrés familiar.",
    process: "Desarmado de mobiliario, nebulización dirigida y sellado de grietas.",
    prevention: "Inspección de equipaje tras viajes y fundas protectoras certificadas.",
    icon: BedBugHotelIcon,
    image: "https://images.unsplash.com/photo-1615560151624-a78b3036e520?auto=format&fit=crop&q=80&w=800",
    features: ["Eliminación inmediata", "Segura para colchones", "Sin residuos tóxicos", "Respaldo Residencial"]
  },
  {
    id: 'mosquitos',
    slug: 'control-de-mosquitos',
    name: "Mosquitos y Jardín",
    description: "Protección perimetral para que disfrutes de tu patio sin riesgos.",
    fullDescription: "Tratamientos de nebulización y control de larvas en reservorios de agua para prevenir Dengue, Zika y Chikungunya.",
    risks: "Transmisión de enfermedades virales y molestias constantes.",
    process: "Identificación de criaderos y barrera química perimetral.",
    prevention: "Eliminar agua estancada y control de vegetación.",
    icon: ShieldPestIcon,
    image: "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=800",
    features: ["Barrera perimetral", "Seguro para plantas", "Control de larvas", "Efecto prolongado"]
  }
];

export const RESIDENTIAL_PESTS = [
  {
    name: "Cucarachas",
    environment: "Alacenas y Baños",
    description: "Las cucarachas son maestras del escondite y buscan refugio, agua y comida en tu hogar. Al ser nocturnas, una infestación puede salirse de control antes de que notes su presencia. Nuestro tratamiento las elimina de inmediato.",
    image: "/services/cucaracha.webp",
    icon: CockroachIcon
  },
  {
    name: "Hormigas",
    environment: "Cocinas y Patios",
    description: "Las hormigas son plagas altamente sociales; ver una sola suele significar que hay cientos más cerca. Aplicar soluciones caseras no eliminará el hormiguero. Nosotros localizamos y erradicamos la colonia de raíz.",
    image: "/services/hormigas.jpg",
    icon: SprayCanIcon
  },
  {
    name: "Avispas",
    environment: "Techos y Jardines",
    description: "La presencia de avispas cerca de casa puede arruinar tus actividades al aire libre. Aunque rara vez atacan sin motivo, se vuelven agresivas si se sienten amenazadas. Retiramos panales de forma segura y profesional.",
    image: "/services/Avispa_-_Wikipedia,_la_enciclopedia_libre_es.jpg",
    icon: ShieldPestIcon
  },
  {
    name: "Arañas",
    environment: "Rincones y Garajes",
    description: "Las arañas son depredadores eficaces, pero ver sus telarañas en casa es inquietante. Aunque la mayoría son inofensivas, algunas como la viuda negra o violinista requieren control experto para la seguridad de tu familia.",
    image: "/services/arañas.jpg",
    icon: ShieldPestIcon
  },
  {
    name: "Termitas",
    environment: "Estructuras de Madera",
    description: "Tratamiento profundo para proteger cimientos y mobiliario de daños irreparables. Detectamos túneles y eliminamos colonias subterráneas antes de que comprometetan tu inversión.",
    image: "/services/termitas.webp",
    icon: TermiteIcon
  },
  {
    name: "Roedores",
    environment: "Áticos y Perímetros",
    description: "Ratas y ratones invaden tu hogar buscando comida y refugio, pero son mucho más que una molestia. Representan una amenaza seria para tu propiedad y la salud de tus seres queridos. Implementamos control total.",
    image: "/services/roedores.webp",
    icon: MouseTrapIcon
  },
  {
    name: "Control de Mosquitos",
    environment: "Exteriores y Terrazas",
    description: "Nebulización perimetral y tratamiento de criaderos para que disfrutes de tu patio sin riesgos de Dengue o Zika. Una barrera invisible que protege a tu familia día y noche.",
    image: "/services/mosquitos.webp",
    icon: ShieldPestIcon
  },
  {
    name: "Fumigación de Chinches",
    environment: "Recámaras y Colchones",
    description: "Protocolo de choque inmediato con vapor y nebulización residual para erradicar chinches de cama. Recupera el sueño tranquilo con nuestra eliminación efectiva.",
    image: "/images/chinches_bedroom_1776661359500.png",
    icon: BedBugHotelIcon
  },
  {
    name: "Pulgas",
    environment: "Alfombras y Mascotas",
    description: "Las pulgas suelen alimentarse y desovar mientras tus mascotas descansan, convirtiendo sus camas y alfombras en focos de infestación. Protegemos tanto el interior de tu hogar como el jardín para romper el ciclo.",
    image: "/services/pulgas.webp",
    icon: SprayCanIcon
  },
  {
    name: "Garrapatas y Ácaros",
    environment: "Áreas Comunes",
    description: "Protegemos a tu familia y mascotas de plagas transmisoras de enfermedades como Lyme o Rickettsia. Desinfección total de áreas críticas.",
    image: "/services/garrapatas y acaros.webp",
    icon: ShieldPestIcon
  }
];

export const METHODS: MethodItem[] = [
  {
    title: "MIP (Manejo Integrado)",
    description: "Estrategia integral que prioriza la prevención y el control físico antes del químico.",
    icon: ShieldPestIcon,
    isEco: true
  },
  {
    title: "Geles Activos",
    description: "Cebos especializados inodoros y pet-friendly, ideales para cocinas abiertas.",
    icon: CockroachIcon,
    isEco: true
  },
  {
    title: "Nebulización ULV",
    description: "Micro-gotas que alcanzan grietas profundas sin dejar superficies mojadas.",
    icon: SprayCanIcon
  },
  {
    title: "Barreras Químicas",
    description: "Protección perimetral residual de larga duración contra insectos rastreros.",
    icon: TermiteIcon
  }
];


export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Jess Dector",
    subtitle: "Local Guide · 182 opiniones · 98 fotos",
    rating: 5,
    text: "La atención es muy profesional y puntual, en ningún momento me hicieron esperar y siempre se mantuvieron comunicados. En mi caso solicité revisar el servicio y respondieron rápido y de manera eficiente.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXbJsHQcVV-GQ894pSfjDETlLG70eygiJO9UWAVxN9iSjJebftjBQ=w32-h32-p-rp-mo-ba4-br100"
  },
  {
    id: 2,
    name: "Martha Alicia Medina McCormick",
    subtitle: "10 opiniones · 1 foto",
    rating: 5,
    text: "Muy profesionales y razonables, excelente servicio al cliente",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKSLQrcFUMHbXoaNQyu1Vx4zvufMuSqHsCkVpa6AYB4RxvPYQ=w32-h32-p-rp-mo-br100"
  },
  {
    id: 3,
    name: "Jenny Luna",
    subtitle: "8 opiniones · 1 foto",
    rating: 5,
    text: "Súper profesional, me resolvieron mi problema, me gustó mucho como me explicaron los procesos, me quitaron toda mi plaga con respaldo total",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjX_71YYWnUbT2-LJle8gQ4SWuV6JkUPkQhNE0SLJeZToG6_RtQ=w32-h32-p-rp-mo-br100"
  },
  {
    id: 4,
    name: "JuanPablo Salcedo",
    subtitle: "1 opinión",
    rating: 5,
    text: "Es un buen servicio, profesional.",
    image: "https://lh3.googleusercontent.com/a/ACg8ocIyS0lKe3xp7Fz_-rPMghN_4rf-F6hoKoRqFZ1X5Zg0_E6_dg=w32-h32-p-rp-mo-br100"
  },
  {
    id: 5,
    name: "Peter Neri",
    subtitle: "Local Guide · 74 opiniones · 14 fotos",
    rating: 5,
    text: "Muy bien servicio, rápido, eficaz y buen precio",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVPTe9lZuk7YMHSIDz_FLzWM1nimFycgu5EuDN38XylOlxjs7_k=w32-h32-p-rp-mo-ba4-br100"
  },
  {
    id: 6,
    name: "Oscar Ruiz Zea",
    subtitle: "Local Guide · 21 opiniones · 4 fotos",
    rating: 5,
    text: "Excelente servicio y atención a los detalles, lo recomiendo",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXd-9Uwm_E4SoFpl2--usZTmOhnDYWvBQ9opjo9gxSz6pWHg4Ah=w32-h32-p-rp-mo-ba2-br100"
  }
];

export const COVERAGE_AREAS = [
  "Guadalajara",
  "León",
  "Querétaro",
  "Ciudad de México (CDMX)",
  "Monterrey"
];

export const RESTAURANT_CLIENTS = {
  guadalajara: [
    { name: "Santo Coyote", address: "C. Miguel Lerdo de Tejada 2379", coords: [-103.3756, 20.6720] },
    { name: "Bruna", address: "C. Juan Manuel 2106", coords: [-103.3720, 20.6755] },
    { name: "Hueso", address: "C. Efraín González Luna 2061", coords: [-103.3700, 20.6710] },
    { name: "Alcalde", address: "Av. México 2903", coords: [-103.3850, 20.6820] },
    { name: "La Tequila", address: "Av. México 2830", coords: [-103.3820, 20.6810] },
    { name: "Hilton Midtown", address: "Av. Adolfo López Mateos Nte 95", coords: [-103.3810, 20.6950] },
    { name: "Hotel Morales", address: "Av. Ramón Corona 243", coords: [-103.3470, 20.6730] },
    { name: "Casa Habita", address: "C. Miguel Lerdo de Tejada 2415", coords: [-103.3770, 20.6725] },
    { name: "Riu Plaza GDL", address: "Av. Adolfo López Mateos Sur 830", coords: [-103.3920, 20.6650] },
    { name: "Hyatt Regency Andares", address: "Paseo Andares 5113", coords: [-103.4110, 20.7100] }
  ],
  cdmx: [
    { name: "Pujol", address: "Tennyson 133, Polanco", coords: [-99.1910, 19.4310] },
    { name: "Quintonil", address: "Newton 55, Polanco", coords: [-99.1890, 19.4320] },
    { name: "Rosetta", address: "Colima 166, Roma Nte", coords: [-99.1600, 19.4190] },
    { name: "Contramar", address: "Durango 200, Roma Nte", coords: [-99.1680, 19.4180] },
    { name: "Lardo", address: "Agustín Melgar 6, Condesa", coords: [-99.1750, 19.4150] },
    { name: "Four Seasons CDMX", address: "Paseo de la Reforma 500", coords: [-99.1740, 19.4230] },
    { name: "Ritz-Carlton CDMX", address: "Paseo de la Reforma 509", coords: [-99.1730, 19.4240] },
    { name: "Las Alcobas", address: "Anatole France 229", coords: [-99.1950, 19.4330] },
    { name: "Condesa DF", address: "Veracruz 102", coords: [-99.1760, 19.4170] },
    { name: "Blanco Colima", address: "Colima 168, Roma Nte", coords: [-99.1610, 19.4200] }
  ],
  monterrey: [
    { name: "Pangea", address: "Av. del Roble 660", coords: [-100.3550, 25.6510] },
    { name: "La Nacional", address: "Av. San Jerónimo 1106", coords: [-100.3700, 25.6720] },
    { name: "Koli Cocina de Origen", address: "Río Amazonas 225", coords: [-100.3580, 25.6580] },
    { name: "El Lingote", address: "Parque Fundidora", coords: [-100.2850, 25.6780] },
    { name: "Safi Royal Luxury", address: "Pino Suárez 444", coords: [-100.3150, 25.6680] },
    { name: "Fiesta Americana", address: "Av. Constitución 300", coords: [-100.3180, 25.6660] },
    { name: "Galería Plaza MTY", address: "Av. Constitución 1640", coords: [-100.3250, 25.6700] },
    { name: "Cuerno Calzada", address: "Calz. del Valle 401", coords: [-100.3620, 25.6560] },
    { name: "Grand Cru", address: "Real San Agustín 301", coords: [-100.3450, 25.6450] },
    { name: "El Rey del Cabrito", address: "Av. Constitución 817", coords: [-100.3050, 25.6710] }
  ],
  queretaro: [
    { name: "San Miguelito", address: "And. 5 de Mayo 39", coords: [-100.3920, 20.5930] },
    { name: "Hacienda La Laborcilla", address: "Prol. Corregidora Nte 911", coords: [-100.3850, 20.6120] },
    { name: "Mesón Chucho Roto", address: "Plaza de Armas", coords: [-100.3910, 20.5925] },
    { name: "La Bocha Querétaro", address: "Prol. Bernardo Quintana 11", coords: [-100.3820, 20.5950] },
    { name: "La Casa Marquesa", address: "Madero 41", coords: [-100.3940, 20.5920] },
    { name: "Grand Fiesta Americana", address: "Bv. Bernardo Quintana 4050", coords: [-100.3750, 20.5850] },
    { name: "Hacienda Jurica", address: "Paseo Jurica 700", coords: [-100.4350, 20.6650] },
    { name: "Maria y Su Bici", address: "5 de Mayo 91", coords: [-100.3915, 20.5935] },
    { name: "Stadía Suites", address: "Av. Constituyentes 175", coords: [-100.4150, 20.5820] },
    { name: "Hotel Mirabel", address: "Av. Constituyentes Ote 2", coords: [-100.3880, 20.5890] }
  ],
  leon: [
    { name: "Restaurante Argentilia", address: "Blvd. Campestre 1511", coords: [-101.6920, 21.1450] },
    { name: "Frascati Campestre", address: "Blvd. Campestre 1101", coords: [-101.6880, 21.1430] },
    { name: "HS HOTSSON", address: "Blvd. Adolfo López Mateos 1102", coords: [-101.6650, 21.1150] },
    { name: "Hyatt Centric", address: "Blvd. Manuel J. Clouthier 202", coords: [-101.7100, 21.1550] },
    { name: "Mochomos León", address: "Blvd. Adolfo López Mateos 2040", coords: [-101.6950, 21.1510] },
    { name: "Panteón Taurino", address: "Calz. de los Héroes 408", coords: [-101.6720, 21.1210] },
    { name: "Hampton Inn", address: "Blvd. Adolfo López Mateos 1402", coords: [-101.6620, 21.1120] },
    { name: "Hotel Noite", address: "Blvd. Campestre 1515", coords: [-101.6930, 21.1460] },
    { name: "Galería Plaza", address: "Blvd. Adolfo López Mateos 2502", coords: [-101.6550, 21.1020] },
    { name: "La Tequila León", address: "Plaza Mayor", coords: [-101.6960, 21.1520] }
  ]
};