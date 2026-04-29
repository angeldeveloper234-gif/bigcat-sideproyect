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
  name: "Big Cat - Control de Plagas",
  motherCompany: "PCP Internacional",
  since: 1995,
  experience: "29+",
  phone: "81 11150958",
  whatsapp: "81 11150958",
  email: "contacto@bigcat.mx",
  address: "Rio Mississippi 44-I, Del Valle, 66220 San Pedro Garza García, N.L.",
  schedule: "Servicio Profesional de Fumigación | Big Cat Fumigaciones",
  description: "Somos una familia de empresas que prioriza un servicio amigable, rápido y efectivo, e invertimos en el crecimiento y bienestar de nuestro equipo.",
  facebook: "https://web.facebook.com/profile.php?id=61561957291508",
  instagram: "https://www.instagram.com/bigcat.mx/"
};

export const LOGO_LIGHT = "/logo/BIG CAT - Control de plagas.png";
export const LOGO_DARK = "/logo/BIG CAT - Control de plagas.png";

export interface Branch {
  id: string;
  name: string;
  phone: string;
  address: string;
  coords: [number, number];
  range?: string;
  zipCodes?: string[];
}

export const BRANCHES: Branch[] = [
  {
    id: 'guadalajara',
    name: "Guadalajara, Jal.",
    phone: "81 11150958",
    address: "C. Miguel Lerdo de Tejada 2379",
    coords: [-103.4147, 20.7326],
    range: "44100 - 45200"
  },
  {
    id: 'leon',
    name: "León, Gto.",
    phone: "81 11150958",
    address: "Blvd. Campestre 1511",
    coords: [-101.68, 21.12],
    range: "37000 - 37999"
  },
  {
    id: 'queretaro',
    name: "Querétaro, Qro.",
    phone: "81 11150958",
    address: "And. 5 de Mayo 39",
    coords: [-100.39, 20.59],
    range: "76000 - 76299"
  },
  {
    id: 'cdmx',
    name: "Ciudad de México",
    phone: "81 11150958",
    address: "Tennyson 133, Polanco",
    coords: [-99.13, 19.43],
    range: "01000 - 16999"
  },
  {
    id: 'monterrey',
    name: "Monterrey, N.L.",
    phone: "81 11150958",
    address: "Rio Mississippi 44-I, Del Valle",
    coords: [-100.31, 25.68],
    range: "64000 - 66299"
  },
  {
    id: 'puebla',
    name: "Puebla, Pue.",
    phone: "81 11150958",
    address: "Av. Juárez 2902",
    coords: [-98.20, 19.04],
    range: "72000 - 72999"
  },
  {
    id: 'tijuana',
    name: "Tijuana, B.C.",
    phone: "81 11150958",
    address: "Blvd. Agua Caliente 10440",
    coords: [-117.03, 32.51],
    range: "22000 - 22999"
  },
  {
    id: 'merida',
    name: "Mérida, Yuc.",
    phone: "81 11150958",
    address: "Calle 60 491",
    coords: [-89.62, 20.96],
    range: "97000 - 97314"
  },
  {
    id: 'sanluis',
    name: "San Luis Potosí",
    phone: "81 11150958",
    address: "Av. Venustiano Carranza 1000",
    coords: [-100.97, 22.15],
    range: "78000 - 78499"
  },
  {
    id: 'aguascalientes',
    name: "Aguascalientes",
    phone: "81 11150958",
    address: "Av. Universidad 1001",
    coords: [-102.29, 21.88],
    range: "20000 - 20999"
  },
  {
    id: 'hermosillo',
    name: "Hermosillo, Son.",
    phone: "81 11150958",
    address: "Blvd. Eusebio Kino 300",
    coords: [-110.96, 29.07],
    range: "83000 - 83299"
  },
  {
    id: 'mexicali',
    name: "Mexicali, B.C.",
    phone: "81 11150958",
    address: "Av. Madero 100",
    coords: [-115.45, 32.62],
    range: "21000 - 21399"
  },
  {
    id: 'culiacan',
    name: "Culiacán, Sin.",
    phone: "81 11150958",
    address: "Blvd. Pedro Infante 2500",
    coords: [-107.39, 24.80],
    range: "80000 - 80299"
  },
  {
    id: 'juarez',
    name: "Cd. Juárez, Chih.",
    phone: "81 11150958",
    address: "Av. Lincoln 1000",
    coords: [-106.48, 31.73],
    range: "32000 - 32699"
  }
];


export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/#nosotros' },
  {
    label: 'Servicios',
    href: '/#servicios',
    children: [
      { label: 'Control Comercial', href: '/servicios/control-de-plagas-comercial' },
      { label: 'Cucarachas', href: '/servicios/eliminacion-de-cucarachas' },
      { label: 'Hormigas', href: '/servicios/control-de-hormigas' },
      { label: 'Termitas', href: '/servicios/control-de-termitas' },
      { label: 'Chinches', href: '/servicios/control-de-chinches' },
      { label: 'Roedores', href: '/servicios/control-de-roedores' },
      { label: 'Pulgas', href: '/servicios/control-de-pulgas' },
      { label: 'Avispas', href: '/servicios/control-de-avispas' },
      { label: 'Garrapatas', href: '/servicios/control-de-garrapatas' },
      { label: 'Mosquitos', href: '/servicios/control-de-mosquitos' },
      { label: 'Alacranes', href: '/servicios/control-de-alacranes' }
    ]
  },
  {
    label: 'Ubicaciones',
    href: '/#mapa',
    children: BRANCHES.map(branch => ({
      label: branch.name,
      href: `/#mapa`
    }))
  },
  { label: 'Contacto', href: '/#contacto' },
];


export const PESTS_LIST = [
  {
    id: 'control-comercial',
    slug: 'control-de-plagas-comercial',
    name: "Control de Plagas Comercial",
    description: "Soluciones de alto nivel para Restaurantes, Industrias, Comercios y Supermercados.",
    fullDescription: "Nuestro programa de Manejo Integrado de Plagas (MIP) está diseñado para cumplir con las normativas más estrictas de salud y seguridad en México (COFEPRIS). Ofrecemos soluciones eficaces con atención personalizada para el sector comercial a nivel nacional.",
    risks: "Sanciones sanitarias, pérdida de reputación, contaminación de alimentos y riesgos estructurales.",
    process: "Inspección detallada, diagnóstico de vulnerabilidades, implementación de barreras físicas y químicas, y monitoreo continuo.",
    prevention: "Manejo adecuado de residuos, sellado de grietas y capacitación del personal sobre higiene.",
    icon: CommercialPestIcon,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
    features: ["Normativa COFEPRIS", "Sectores Diversos", "Atención DISCRETA", "PCP Internacional"]
  },
  {
    id: 'cucarachas',
    slug: 'eliminacion-de-cucarachas',
    name: "Cucarachas",
    description: "Eliminación garantizada de Blatella germánica y americana en áreas críticas.",
    fullDescription: "Usamos geles activos inodoros y aspersión residual de última generación que no mancha ni requiere evacuar el área por tiempos prolongados. Productos 100% seguros.",
    risks: "Transmisión de enfermedades como salmonelosis, asma y alergias severas.",
    process: "Identificación de nidos, aplicación de cebo en puntos estratégicos y barreras perimetrales.",
    prevention: "Eliminación de fuentes de agua (humedad) y restos de comida en cocinas.",
    icon: CockroachIcon,
    image: "/services/cucaracha.webp",
    features: ["Gel sin olor", "Seguro para mascotas", "Efecto dominó", "29+ Años Exp."]
  },
  {
    id: 'termitas',
    slug: 'control-de-termitas',
    name: "Termitas",
    description: "Protección estructural con barreras antitermita de larga duración.",
    fullDescription: "Tratamientos preventivos en pre-construcción y correctivos en estructuras ya dañadas usando termonebulización y perforación controlada. Respaldo de PCP Internacional.",
    risks: "Daños irreversibles en muebles de madera y cimientos de la propiedad.",
    process: "Detección de túneles de avance, inyección de termiticida y sellado protector.",
    prevention: "Control de humedad en cimientos y evitar contacto de madera con suelo directo.",
    icon: WoodwormIcon,
    image: "/services/termitas.webp",
    features: ["Garantía Extendida", "Barreras químicas", "Inyección profunda", "Protección Total"]
  },
  {
    id: 'roedores',
    slug: 'control-de-roedores',
    name: "Roedores / Ratones",
    description: "Sistemas de cebado y trampeo profesional para ratas y ratones.",
    fullDescription: "Instalación de estaciones de cebado de seguridad inviolables, ideales para áreas con niños o mascotas. Eliminación total garantizada.",
    risks: "Incendios por cables roídos, transmisión de leptospirosis y hantavirus.",
    process: "Mapeo de zonas de paso, colocación de estaciones de monitoreo y exclusión de accesos.",
    prevention: "Sellado de entradas mayores a 1cm y gestión de contenedores de basura.",
    icon: MouseTrapIcon,
    image: "/services/roedores.webp",
    features: ["Estaciones seguras", "Atención inmediata", "Eliminación de nidos", "Nivel Nacional"]
  },
  {
    id: 'chinches',
    slug: 'control-de-chinches',
    name: "Chinches de Cama",
    description: "Tratamiento de choque para chinches de cama en residencias y hoteles.",
    fullDescription: "Utilizamos métodos combinados de calor y nebulización para eliminar huevos y adultos de forma inmediata. Productos 100% seguros para personas y mascotas.",
    risks: "Picaduras nocturnas, insomnio y estrés familiar.",
    process: "Desarmado de mobiliario, nebulización dirigida y sellado de grietas.",
    prevention: "Inspección de equipaje tras viajes y fundas protectoras certificadas.",
    icon: BedBugHotelIcon,
    image: "/images/chinches_bedroom_1776661359500.png",
    features: ["Eliminación inmediata", "Sin residuos tóxicos", "Atención nacional", "Seguro para familias"]
  },
  {
    id: 'alacranes',
    slug: 'control-de-alacranes',
    name: "Alacranes",
    description: "Barrera impenetrable contra alacranes en regiones cálidas y zonas de riesgo.",
    fullDescription: "Implementamos barreras químicas residuales de alta adherencia en perímetros y puntos de acceso para evitar el ingreso de arácnidos peligrosos a tu hogar.",
    risks: "Picaduras venenosas peligrosas para niños y adultos mayores.",
    process: "Aplicación perimetral, tratamiento de grietas y eliminación de refugios.",
    prevention: "Mantener limpios los patios y evitar cúmulos de escombros.",
    icon: ShieldPestIcon,
    image: "/services/alacranes.webp",
    features: ["Barrera Residual", "Eficacia Probada", "Seguro para Mascotas", "Control Total"]
  }
];

export const RESIDENTIAL_PESTS = [
  {
    name: "Cucarachas",
    environment: "Alacenas y Baños",
    description: "Eliminación garantizada de Blatella germánica y americana en áreas críticas.",
    image: "/services/cucaracha.webp",
    icon: CockroachIcon
  },
  {
    name: "Hormigas",
    environment: "Cocinas y Patios",
    description: "Localización y erradicación de colonias de raíz, evitando que regresen a tu hogar.",
    image: "/services/hormigas.jpg",
    icon: SprayCanIcon
  },
  {
    name: "Termitas",
    environment: "Estructuras de Madera",
    description: "Protección estructural con barreras antitermita de larga duración y tratamiento profundo.",
    image: "/services/termitas.webp",
    icon: TermiteIcon
  },
  {
    name: "Chinches",
    environment: "Recámaras y Colchones",
    description: "Protocolo de choque inmediato con vapor y nebulización residual para erradicar chinches.",
    image: "/images/chinches_bedroom_1776661359500.png",
    icon: BedBugHotelIcon
  },
  {
    name: "Roedores / Ratones",
    environment: "Áticos y Perímetros",
    description: "Sistemas de cebado y trampeo profesional para ratas y ratones con estaciones de seguridad.",
    image: "/services/roedores.webp",
    icon: MouseTrapIcon
  },
  {
    name: "Pulgas",
    environment: "Alfombras y Mascotas",
    description: "Protección integral para tu hogar y mascotas, rompiendo el ciclo de reproducción.",
    image: "/services/pulgas.webp",
    icon: SprayCanIcon
  },
  {
    name: "Avispas",
    environment: "Techos y Jardines",
    description: "Retirada segura de panales y control preventivo para tus áreas exteriores.",
    image: "/services/Avispa_-_Wikipedia,_la_enciclopedia_libre_es.jpg",
    icon: ShieldPestIcon
  },
  {
    name: "Garrapatas",
    environment: "Jardines y Mascotas",
    description: "Desinfección total de áreas críticas para proteger a tu familia y animales de compañía.",
    image: "/services/garrapatas y acaros.webp",
    icon: ShieldPestIcon
  },
  {
    name: "Mosquitos",
    environment: "Exteriores y Terrazas",
    description: "Nebulización perimetral y tratamiento de criaderos para disfrutar de tu patio sin riesgos.",
    image: "/services/mosquitos.webp",
    icon: ShieldPestIcon
  },
  {
    name: "Alacranes",
    environment: "Patios y Esquinas",
    description: "Barrera impenetrable contra alacranes en regiones cálidas y zonas de riesgo.",
    image: "/services/alacranes.webp",
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
    name: "Sebastián Allende",
    subtitle: "Director General, Only Tea",
    rating: 5,
    text: "Durante más de 10 años hemos trabajado con PCP en nuestro negocio de bebidas. Gracias a PCP Internacional podemos decir que estamos muy contentos con su trabajo.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
  },
  {
    id: 2,
    name: "Claudia Mendoza",
    subtitle: "Desarrollo de Negocios y Restaurantes",
    rating: 5,
    text: "Puntuales, atentos y extraordinariamente profesionales. Con PCP Internacional puedo dormir tranquila.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
  },
  {
    id: 3,
    name: "Oralia Orduña",
    subtitle: "Auxiliar Administrativo, Little Caesars Pizza",
    rating: 5,
    text: "Cuentan con un equipo muy profesional y tienen un alto conocimiento en el control de plagas. Hemos notado una gran mejoría con sus servicios.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
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
