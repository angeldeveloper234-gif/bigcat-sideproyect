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
  AntIcon,
  WaspIcon,
  TickIcon,
  MosquitoIcon,
  FleaIcon,
  SpiderIcon,
  BirdIcon,
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
  schedule: "Servicio Profesional de Control de Plagas | Big Cat",
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
      { label: 'Alacranes', href: '/servicios/control-de-alacranes' },
      { label: 'Arañas', href: '/servicios/control-de-aranas' },
      { label: 'Aves y Palomas', href: '/servicios/control-de-aves-y-palomas' }
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
    fullDescription: "Implementamos barreras químicas residuales de alta adherencia en perímetros y puntos de acceso para evitar el ingreso de arácnidos peligrosos a tu hogar. Nuestro equipo experto identifica los puntos críticos de entrada y utiliza productos específicos que garantizan una protección prolongada.",
    risks: "Picaduras venenosas extremadamente dolorosas y peligrosas, especialmente para niños, adultos mayores y mascotas.",
    process: "Aplicación perimetral de alta adherencia, tratamiento de grietas en muros, revisión de registros de drenaje y eliminación estratégica de refugios.",
    prevention: "Mantener limpios los patios, evitar cúmulos de escombros o madera, y colocar guardapolvos en puertas exteriores.",
    icon: ShieldPestIcon,
    image: "/services/alacranes.webp",
    features: ["Barrera Residual", "Eficacia Probada", "Seguro para Mascotas", "Control Total"]
  },
  {
    id: 'hormigas',
    slug: 'control-de-hormigas',
    name: "Hormigas",
    description: "Localización y erradicación de colonias de raíz, evitando que regresen a tu hogar.",
    fullDescription: "Nuestro tratamiento contra hormigas no solo elimina a las que ves, sino que ataca el corazón de la colonia: la reina. Utilizamos cebos específicos y geles de transferencia que las hormigas llevan voluntariamente al nido, logrando una eliminación total y definitiva en áreas de cocina y jardín.",
    risks: "Contaminación de alimentos, daños en estructuras eléctricas (especialmente en equipos electrónicos) y molestias constantes en despensas.",
    process: "Inspección de senderos de forrajeo, localización de hormigueros, aplicación de cebos de transferencia y sellado de puntos de entrada críticos.",
    prevention: "Limpieza profunda de residuos dulces, sellado de grietas en muros, manejo adecuado de basura y eliminación de humedad excesiva.",
    icon: AntIcon,
    image: "/services/hormigas.jpg",
    features: ["Eliminación de Reina", "Cebos no tóxicos", "Sin olor", "Garantía de Satisfacción"]
  },
  {
    id: 'pulgas',
    slug: 'control-de-pulgas',
    name: "Pulgas",
    description: "Protección integral para tu hogar y mascotas, rompiendo el ciclo de reproducción.",
    fullDescription: "Las pulgas pueden ser una pesadilla para tus mascotas y tu familia. Nuestro protocolo de tres etapas elimina adultos, larvas y huevos, utilizando reguladores de crecimiento de insectos (IGR) que aseguran que la infestación no resurja semanas después. Es un tratamiento profundo que cubre alfombras, muebles y exteriores.",
    risks: "Dermatitis alérgica por picadura, transmisión de parásitos internos, anemia en mascotas y picaduras muy molestas para los humanos.",
    process: "Nebulización profunda de alfombras y grietas, aplicación de reguladores de crecimiento (IGR), barreras residuales perimetrales y desinfección de áreas de descanso.",
    prevention: "Tratamiento preventivo constante en mascotas (pipetas/collares), aspirado frecuente de alfombras y lavado de ropa de cama con agua caliente.",
    icon: FleaIcon,
    image: "/services/pulgas.webp",
    features: ["Corta el ciclo vital", "Seguro para mascotas", "Resultados rápidos", "Atención nacional"]
  },
  {
    id: 'avispas',
    slug: 'control-de-avispas',
    name: "Avispas",
    description: "Retirada segura de panales y control preventivo para tus áreas exteriores.",
    fullDescription: "Eliminar un avispero puede ser extremadamente peligroso sin el equipo adecuado. Nuestros técnicos especializados cuentan con trajes de protección y productos de neutralización inmediata que eliminan el riesgo de picaduras para tu familia y clientes.",
    risks: "Picaduras dolorosas, reacciones alérgicas severas (shock anafiláctico), y riesgos constantes en áreas de recreación o entradas.",
    process: "Localización precisa de nidos en aleros, techos o vegetación, aplicación dirigida de espuma paralizante y retiro físico seguro del panal.",
    prevention: "Sellado de cavidades en paredes exteriores, revisión periódica de techos durante primavera y evitar acumulación de basura dulce.",
    icon: WaspIcon,
    image: "/services/Avispa_-_Wikipedia,_la_enciclopedia_libre_es.jpg",
    features: ["Retiro Seguro", "Equipo Especializado", "Sin Riesgos", "Atención Urgente"]
  },
  {
    id: 'garrapatas',
    slug: 'control-de-garrapatas',
    name: "Garrapatas",
    description: "Desinfección total de áreas críticas para proteger a tu familia y animales de compañía.",
    fullDescription: "Las garrapatas son portadoras de enfermedades graves y se reproducen rápidamente en jardines y grietas de muros. Nuestro tratamiento de choque utiliza productos de alta residualidad que eliminan a estos parásitos al contacto y previenen su regreso por meses.",
    risks: "Transmisión de Enfermedad de Lyme, Rickettsia (fiebre manchada), anemia severa en mascotas y parálisis por garrapata.",
    process: "Aspersión perimetral de alta presión, tratamiento minucioso de vegetación, fumigación de grietas en muros exteriores y áreas de descanso animal.",
    prevention: "Mantener el césped corto, eliminar maleza acumulada, revisar periódicamente a las mascotas y sellar grietas en muros de piedra.",
    icon: TickIcon,
    image: "/services/garrapatas y acaros.webp",
    features: ["Protección Familiar", "Alta Residualidad", "Control Exterior", "Expertos en Rickettsia"]
  },
  {
    id: 'mosquitos',
    slug: 'control-de-mosquitos',
    name: "Mosquitos",
    description: "Nebulización perimetral y tratamiento de criaderos para disfrutar de tu patio sin riesgos.",
    fullDescription: "Protege a tu familia del Dengue, Zika y Chikungunya. Nuestro sistema de control combina la eliminación de criaderos con nebulización ULV de ultra bajo volumen, creando una zona de protección efectiva en jardines y terrazas.",
    risks: "Transmisión de enfermedades virales graves, reacciones alérgicas a picaduras y pérdida de confort en áreas exteriores.",
    process: "Termonebulización de áreas verdes, aplicación de larvicidas biológicos en depósitos de agua estancada y creación de barreras repelentes perimetrales.",
    prevention: "Eliminar recipientes que acumulen agua (descacharrización), uso de mallas mosquiteras y mantenimiento de fuentes o albercas.",
    icon: MosquitoIcon,
    image: "/services/mosquitos.webp",
    features: ["Control Larvario", "Nebulización ULV", "Protección contra Dengue", "Verano sin Plagas"]
  },
  {
    id: 'aranas',
    slug: 'control-de-aranas',
    name: "Arañas",
    description: "Eliminación de arañas venenosas y limpieza de telarañas en áreas de difícil acceso.",
    fullDescription: "Aunque la mayoría de las arañas son beneficiosas, especies como la Viuda Negra o la Violinista representan un riesgo necrótico grave en México. Nuestro protocolo incluye la identificación de especies y la aplicación de barreras específicas para arácnidos.",
    risks: "Picaduras venenosas con riesgo de necrosis tisular, reacciones sistémicas graves y fobia por infestación en interiores.",
    process: "Identificación de especies críticas, aspirado profesional de telarañas y sacos de huevos, y aplicación de insecticidas de alta residualidad en rincones y bodegas.",
    prevention: "Eliminación de escombros en patios, sellado de grietas en muros, sacudido frecuente de áreas poco usadas y control de otros insectos presa.",
    icon: SpiderIcon,
    image: "/services/arañas.webp",
    features: ["Control de Violinista", "Barrera Residual", "Limpieza de Nidos", "Seguridad Total"]
  },
  {
    id: 'aves',
    slug: 'control-de-aves-y-palomas',
    name: "Control de Aves / Palomas",
    description: "Sistemas de disuasión no letales para proteger fachadas y techos de suciedad y enfermedades.",
    fullDescription: "Las palomas y otras aves pueden causar daños severos por corrosión y transmitir múltiples enfermedades. Instalamos sistemas de púas, redes invisibles y geles repelentes táctiles que las alejan definitivamente sin causarles daño físico.",
    risks: "Corrosión de acabados por excrementos (ácido úrico), transmisión de histoplasmosis, presencia de ácaros y piojos, y contaminación de aires acondicionados.",
    process: "Limpieza profunda y sanitización de áreas afectadas, e instalación profesional de barreras físicas de disuasión (púas, redes o postes y cables).",
    prevention: "Evitar dejar fuentes de alimentación en balcones, sellado de huecos en techos o cornisas y mantenimiento de limpieza en terrazas.",
    icon: BirdIcon,
    image: "/services/palomas.jpg",
    features: ["Sistemas No Letales", "Protección de Fachadas", "Limpieza Profunda", "Garantía de Resultados"]
  }
];

export const RESIDENTIAL_PESTS = [
  {
    name: "Cucarachas",
    slug: "eliminacion-de-cucarachas",
    environment: "Alacenas y Baños",
    description: "Eliminación garantizada de Blatella germánica y americana en áreas críticas.",
    image: "/services/cucaracha.webp",
    icon: CockroachIcon
  },
  {
    name: "Hormigas",
    slug: "control-de-hormigas",
    environment: "Cocinas y Patios",
    description: "Localización y erradicación de colonias de raíz, evitando que regresen a tu hogar.",
    image: "/services/hormigas.jpg",
    icon: AntIcon
  },
  {
    name: "Termitas",
    slug: "control-de-termitas",
    environment: "Estructuras de Madera",
    description: "Protección estructural con barreras antitermita de larga duración y tratamiento profundo.",
    image: "/services/termitas.webp",
    icon: TermiteIcon
  },
  {
    name: "Chinches",
    slug: "control-de-chinches",
    environment: "Recámaras y Colchones",
    description: "Protocolo de choque inmediato con vapor y nebulización residual para erradicar chinches.",
    image: "/images/chinches_bedroom_1776661359500.png",
    icon: BedBugHotelIcon
  },
  {
    name: "Roedores / Ratones",
    slug: "control-de-roedores",
    environment: "Áticos y Perímetros",
    description: "Sistemas de cebado y trampeo profesional para ratas y ratones con estaciones de seguridad.",
    image: "/services/roedores.webp",
    icon: MouseTrapIcon
  },
  {
    name: "Pulgas",
    slug: "control-de-pulgas",
    environment: "Alfombras y Mascotas",
    description: "Protección integral para tu hogar y mascotas, rompiendo el ciclo de reproducción.",
    image: "/services/pulgas.webp",
    icon: FleaIcon
  },
  {
    name: "Avispas",
    slug: "control-de-avispas",
    environment: "Techos y Jardines",
    description: "Retirada segura de panales y control preventivo para tus áreas exteriores.",
    image: "/services/Avispa_-_Wikipedia,_la_enciclopedia_libre_es.jpg",
    icon: WaspIcon
  },
  {
    name: "Garrapatas",
    slug: "control-de-garrapatas",
    environment: "Jardines y Mascotas",
    description: "Desinfección total de áreas críticas para proteger a tu familia y animales de compañía.",
    image: "/services/garrapatas y acaros.webp",
    icon: TickIcon
  },
  {
    name: "Mosquitos",
    slug: "control-de-mosquitos",
    environment: "Exteriores y Terrazas",
    description: "Nebulización perimetral y tratamiento de criaderos para disfrutar de tu patio sin riesgos.",
    image: "/services/mosquitos.webp",
    icon: MosquitoIcon
  },
  {
    name: "Alacranes",
    slug: "control-de-alacranes",
    environment: "Patios y Esquinas",
    description: "Barrera impenetrable contra alacranes en regiones cálidas y zonas de riesgo.",
    image: "/services/alacranes.webp",
    icon: ShieldPestIcon
  },
  {
    name: "Arañas",
    slug: "control-de-aranas",
    environment: "Rincones y Techos",
    description: "Eliminación de arañas venenosas y limpieza de telarañas en áreas de difícil acceso.",
    image: "https://images.unsplash.com/photo-1533658925330-333061328905?auto=format&fit=crop&q=80&w=800",
    icon: SpiderIcon
  },
  {
    name: "Aves y Palomas",
    slug: "control-de-aves-y-palomas",
    environment: "Fachadas y Techos",
    description: "Sistemas de disuasión no letales para proteger fachadas y techos de suciedad.",
    image: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&q=80&w=800",
    icon: BirdIcon
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

// Helper to format date consistent with the design across components
export const formatBlogDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).replace('.', '');
};

export const BLOG_POSTS = [
  {
    id: '1',
    slug: 'control-plagas-invierno',
    title: "Por qué el control de plagas en invierno es más importante de lo que crees",
    excerpt: "Las plagas de invierno no descansan. Descubre por qué el control de plagas estacional durante los meses fríos es clave para prevenir...",
    content: `
      <p>Cuando las temperaturas bajan, solemos pensar que las plagas desaparecen. Sin embargo, en México, el invierno es una época crítica donde insectos y roedores buscan el calor y la comida de nuestros hogares.</p>
      
      <img src="/articulos/articulo1.jpg" alt="Control de plagas en invierno" style="width: 100%; border-radius: 12px; margin: 24px 0;" />

      <h2>¿Por qué las plagas entran en invierno?</h2>
      <p>A diferencia de lo que se cree, la mayoría de las plagas no mueren con el frío, sino que entran en un estado de baja actividad o buscan refugios térmicos. Tu casa, con su calefacción y despensa llena, es el refugio ideal.</p>
      
      <ul>
        <li><strong>Roedores:</strong> Buscan grietas para anidar cerca de fuentes de calor.</li>
        <li><strong>Cucarachas:</strong> Se refugian detrás de electrodomésticos que generan calor constante.</li>
        <li><strong>Chinches:</strong> El movimiento de maletas y ropa de invierno puede facilitar su propagación.</li>
      </ul>

      <h3>Consejos para prevenir invasiones invernales</h3>
      <p>1. Sella grietas y hendiduras en puertas y ventanas. Un ratón puede pasar por un agujero del tamaño de una moneda de diez centavos.</p>
      <p>2. Mantén la leña y escombros alejados de los muros de la casa.</p>
      <p>3. Revisa las cajas de decoraciones navideñas antes de meterlas a casa.</p>

      <p>En <strong>Big Cat</strong>, contamos con protocolos específicos para la temporada invernal que garantizan una barrera protectora duradera.</p>
    `,
    featured_image: "/articulos/articulo1.jpg",
    published_at: "2026-04-27T10:00:00Z",
    author: "Alexander",
    category: "Tips y Trucos",
    meta_description: "Aprende cómo prevenir la entrada de plagas a tu hogar durante el invierno. Consejos expertos de Big Cat Control de Plagas.",
    keywords: ["plagas invierno", "control roedores", "fumigacion mexico", "consejos fumigacion"]
  },
  {
    id: '2',
    slug: 'hormigas-invadiendo-hogar',
    title: "¿Hormigas invadiendo tu hogar? Por qué nunca parecen irse del todo",
    excerpt: "Si pensaste que el fin del verano significaba el fin de las hormigas, piénsalo de nuevo. A diferencia de otras regiones...",
    content: `
      <p>Las hormigas son una de las plagas más persistentes y frustrantes. Una sola exploradora que encuentre una migaja de azúcar puede guiar a cientos de compañeras a tu cocina en cuestión de minutos.</p>

      <img src="/articulos/articulo2.jpg" alt="Hormigas en el hogar" style="width: 100%; border-radius: 12px; margin: 24px 0;" />

      <h2>El comportamiento de la colonia</h2>
      <p>Entender a las hormigas es la clave para eliminarlas. No basta con matar a las que ves; hay que atacar el corazón de la colonia: la reina.</p>
      
      <p>En México, las especies más comunes en áreas urbanas son la hormiga argentina y la hormiga loca. Ambas son extremadamente adaptables y crean redes de nidos interconectados.</p>

      <h3>Errores comunes al combatir hormigas</h3>
      <ul>
        <li><strong>Usar insecticidas de aerosol:</strong> Solo matan a las obreras de la superficie, provocando que la colonia se estrese y se divida (efecto rebote).</li>
        <li><strong>Limpiar con cloro:</strong> Elimina el rastro de feromonas temporalmente, pero no soluciona el nido de origen.</li>
      </ul>

      <p>Nuestros métodos en <strong>Big Cat</strong> utilizan cebos de transferencia que las obreras llevan voluntariamente al nido, erradicando la plaga de raíz sin contaminar tus alimentos.</p>
    `,
    featured_image: "/articulos/articulo2.jpg",
    published_at: "2026-04-27T09:00:00Z",
    author: "Alexander",
    category: "Guía de Especies",
    meta_description: "Descubre las causas de las invasiones de hormigas en el hogar y las mejores estrategias profesionales para eliminarlas definitivamente.",
    keywords: ["eliminar hormigas", "hormigas cocina", "cebos hormigas", "plagas domesticas"]
  },
  {
    id: '3',
    slug: 'otono-cucarachas-casas',
    title: "El otoño no detiene a las cucarachas: Por qué invaden casas en esta época",
    excerpt: "A medida que el clima se enfría, podrías esperar que las plagas se tomen un descanso, pero las cucarachas no juegan bajo las...",
    content: `
      <p>El otoño en México trae consigo cambios de humedad que obligan a las cucarachas a buscar nuevos territorios. Es en esta época cuando las llamadas al servicio técnico aumentan drásticamente.</p>

      <img src="/articulos/articulo3.jpg" alt="Cucarachas en otoño" style="width: 100%; border-radius: 12px; margin: 24px 0;" />

      <h2>¿Por qué el otoño es peligroso?</h2>
      <p>Las cucarachas americanas (las grandes voladoras) suelen habitar en drenajes. Con las variaciones de presión y temperatura del otoño, tienden a subir a las superficies y entrar a las casas por coladeras y registros.</p>

      <p>Por otro lado, la cucaracha germánica (pequeña de cocina) acelera su ciclo de reproducción para asegurar la supervivencia de la colonia antes de que el frío más intenso llegue.</p>

      <h3>Puntos críticos que debes revisar</h3>
      <ol>
        <li><strong>Coladeras:</strong> Asegúrate de que tengan trampa de agua o rejillas de seguridad.</li>
        <li><strong>Detrás del refrigerador:</strong> El compresor es el lugar favorito para anidar.</li>
        <li><strong>Bajo el fregadero:</strong> Cualquier fuga mínima es agua suficiente para una colonia entera.</li>
      </ol>

      <p>En <strong>Big Cat</strong> aplicamos geles de alta tecnología que aprovechan el comportamiento social de las cucarachas para lograr un control total en menos de 48 horas.</p>
    `,
    featured_image: "/articulos/articulo3.jpg",
    published_at: "2026-04-27T11:30:00Z",
    author: "Alexander",
    category: "Prevención",
    meta_description: "Por qué las cucarachas aumentan en otoño y qué puedes hacer para proteger tu propiedad. Guía de Big Cat México.",
    keywords: ["cucarachas otoño", "fumigar cucarachas", "plagas mexico", "prevencion plagas"]
  },
  {
    id: '4',
    slug: 'insectos-comunes-mexico',
    title: "Insectos y plagas comunes: Qué vigilar durante todo el año en México",
    excerpt: "El clima templado de México es un paraíso, pero lamentablemente es igual de atractivo para las plagas. Conoce qué...",
    content: `
      <p>México tiene una biodiversidad asombrosa, pero esa misma riqueza se traduce en una gran variedad de insectos que pueden convertirse en plagas domésticas en cuestión de días.</p>

      <img src="/articulos/articulo4.jpg" alt="Insectos comunes México" style="width: 100%; border-radius: 12px; margin: 24px 0;" />

      <h2>1. La Cucaracha Germánica</h2>
      <p>Es la reina de las cocinas. Su capacidad de resistencia a insecticidas comunes la hace un desafío para cualquier propietario.</p>

      <h2>2. El Alacrán (Centruroides)</h2>
      <p>Especialmente común en el centro y occidente del país. Su picadura requiere atención médica inmediata, sobre todo en niños.</p>

      <h2>3. La Hormiga de Pavimento</h2>
      <p>Aparece en grietas de banquetas y muros, invadiendo despensas en busca de carbohidratos y proteínas.</p>

      <h2>4. La Chinche de Cama</h2>
      <p>Ha resurgido con fuerza debido al turismo global. Se oculta en costuras de colchones y viaja en el equipaje.</p>

      <h2>5. La Araña Violinista</h2>
      <p>De hábitos nocturnos y tímidos, pero su veneno es necrótico. Suele esconderse en lugares oscuros y poco transitados como bodegas.</p>

      <p>No permitas que estos visitantes se adueñen de tu tranquilidad. En <strong>Big Cat</strong> tenemos un experto para cada una de estas amenazas.</p>
    `,
    featured_image: "/articulos/articulo4.jpg",
    published_at: "2026-04-27T08:00:00Z",
    author: "Alexander",
    category: "Noticias",
    meta_description: "Identifica las plagas más comunes en México y conoce los riesgos asociados a cada una. Información experta de Big Cat.",
    keywords: ["plagas comunes mexico", "alacranes", "chinches de cama", "araña violinista"]
  }
];

