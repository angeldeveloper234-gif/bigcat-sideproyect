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
  /** Estado (para SEO local y schema): "Nuevo León", "Coahuila", etc. */
  state?: string;
  /** Nombre corto de la ciudad sin abreviatura de estado (para títulos SEO). */
  shortName?: string;
  /** Ciudad foco prioritaria del cliente (mayor peso en sitemap/interlinkado). */
  priority?: boolean;
  /** Párrafo introductorio ÚNICO por ciudad (evita contenido duplicado). */
  intro?: string;
  /** Colonias / zonas atendidas (relevancia hiperlocal). */
  neighborhoods?: string[];
  /** Plagas más frecuentes en la ciudad (contenido local real). */
  commonPests?: string[];
  /** Nota estacional/clima local que influye en las plagas. */
  seasonalNote?: string;
}

export const BRANCHES: Branch[] = [
  // ===================================================================
  // CIUDADES PRIORITARIAS (foco SEO del cliente) — se listan primero
  // Estados foco: Nuevo León, Coahuila, Jalisco, Querétaro (+ Tamaulipas, Gto.)
  // ===================================================================
  {
    id: 'monterrey',
    name: "Monterrey, N.L.",
    shortName: "Monterrey",
    state: "Nuevo León",
    phone: "81 11150958",
    address: "Rio Mississippi 44-I, Del Valle",
    coords: [-100.3161, 25.6866],
    range: "64000 - 66299",
    zipCodes: ["64000", "64720", "64830", "64988", "66220", "66269"],
    priority: true,
    intro: "Somos la empresa de control de plagas de referencia en Monterrey y su Zona Metropolitana. Con base operativa en San Pedro Garza García, damos respuesta el mismo día a hogares, restaurantes e industrias del área regia, adaptando cada protocolo al clima semiárido y a las plagas urbanas más agresivas del norte de México.",
    neighborhoods: ["Del Valle", "Centro", "Contry", "Cumbres", "Mitras", "Obispado", "San Jerónimo", "Valle Oriente"],
    commonPests: ["Cucarachas", "Alacranes", "Roedores", "Hormigas", "Mosquitos"],
    seasonalNote: "El calor extremo del verano regio dispara la actividad de cucarachas y alacranes; en Big Cat reforzamos las barreras perimetrales de mayo a septiembre."
  },
  {
    id: 'san-pedro-garza-garcia',
    name: "San Pedro Garza García, N.L.",
    shortName: "San Pedro Garza García",
    state: "Nuevo León",
    phone: "81 11150958",
    address: "Rio Mississippi 44-I, Del Valle",
    coords: [-100.4028, 25.6588],
    range: "66200 - 66290",
    zipCodes: ["66220", "66230", "66240", "66250", "66260", "66270"],
    priority: true,
    intro: "En San Pedro Garza García —el municipio con el mayor nivel de vida de México— operamos con protocolos discretos de alto estándar para residencias premium, corporativos y restaurantes exclusivos. Nuestras oficinas se ubican aquí mismo, en Del Valle, lo que nos permite atención inmediata y confidencial en toda la zona.",
    neighborhoods: ["Del Valle", "Valle Oriente", "Fuentes del Valle", "Colinas de San Jerónimo", "Zona Tec", "Vista Hermosa", "Chipinque"],
    commonPests: ["Cucarachas", "Alacranes", "Hormigas", "Roedores", "Termitas"],
    seasonalNote: "Las residencias de la falda de la Sierra Madre (Chipinque, Vista Hermosa) presentan mayor incidencia de alacranes; aplicamos barreras residuales de larga duración discretas."
  },
  {
    id: 'queretaro',
    name: "Querétaro, Qro.",
    shortName: "Querétaro",
    state: "Querétaro",
    phone: "81 11150958",
    address: "And. 5 de Mayo 39",
    coords: [-100.3899, 20.5888],
    range: "76000 - 76299",
    zipCodes: ["76000", "76020", "76090", "76100", "76120", "76220"],
    priority: true,
    intro: "Querétaro es uno de los polos industriales y logísticos de mayor crecimiento del país, y con ese crecimiento llega la presión de plagas urbanas. Big Cat protege naves industriales, parques tecnológicos, restaurantes del Centro Histórico y fraccionamientos residenciales con manejo integrado certificado ante COFEPRIS.",
    neighborhoods: ["Centro Histórico", "Juriquilla", "El Refugio", "Milenio III", "Álamos", "Jurica", "Zibatá"],
    commonPests: ["Cucarachas", "Roedores", "Hormigas", "Termitas", "Mosquitos"],
    seasonalNote: "La temporada de lluvias (junio-septiembre) incrementa mosquitos y hormigas en zonas como Juriquilla y El Refugio; ajustamos la nebulización perimetral en esos meses."
  },
  {
    id: 'san-juan-del-rio',
    name: "San Juan del Río, Qro.",
    shortName: "San Juan del Río",
    state: "Querétaro",
    phone: "81 11150958",
    address: "Av. Juárez Ote. 45, Centro",
    coords: [-99.9962, 20.3897],
    range: "76800 - 76806",
    zipCodes: ["76800", "76802", "76804", "76806", "76807"],
    priority: true,
    intro: "En San Juan del Río, segundo municipio más importante de Querétaro y corredor industrial clave, brindamos control de plagas a la industria manufacturera, agroindustria, comercios y hogares. Nuestro servicio cumple con las auditorías de calidad e inocuidad que exigen las plantas de la región.",
    neighborhoods: ["Centro", "Vista Hermosa", "La Estancia", "Banthí", "San Isidro", "Lomas de San Juan"],
    commonPests: ["Roedores", "Cucarachas", "Moscas", "Hormigas", "Arañas"],
    seasonalNote: "La cercanía con zonas agrícolas eleva la presión de roedores y moscas hacia naves y bodegas; implementamos estaciones de cebado perimetral inviolables."
  },
  {
    id: 'san-miguel-de-allende',
    name: "San Miguel de Allende, Gto.",
    shortName: "San Miguel de Allende",
    state: "Guanajuato",
    phone: "81 11150958",
    address: "Centro Histórico",
    coords: [-100.7436, 20.9144],
    range: "37700 - 37795",
    zipCodes: ["37700", "37710", "37740", "37750", "37770"],
    priority: true,
    intro: "San Miguel de Allende, Patrimonio de la Humanidad y destino turístico de lujo, exige un control de plagas impecable y discreto para hoteles boutique, restaurantes de alta cocina, galerías y residencias coloniales. Big Cat protege sin dañar acabados históricos ni interrumpir la operación turística.",
    neighborhoods: ["Centro Histórico", "San Antonio", "Guadiana", "Los Frailes", "Zona Dorada", "Balcones"],
    commonPests: ["Alacranes", "Cucarachas", "Termitas", "Roedores", "Arañas"],
    seasonalNote: "Las construcciones coloniales de piedra y madera son propensas a termitas y alacranes; usamos tratamientos de inyección discretos que respetan el patrimonio arquitectónico."
  },
  {
    id: 'saltillo',
    name: "Saltillo, Coah.",
    shortName: "Saltillo",
    state: "Coahuila",
    phone: "81 11150958",
    address: "Blvd. Venustiano Carranza 2400",
    coords: [-100.9737, 25.4383],
    range: "25000 - 25350",
    zipCodes: ["25000", "25015", "25100", "25204", "25230", "25290"],
    priority: true,
    intro: "En Saltillo, capital de Coahuila y uno de los clústeres automotrices más importantes de América Latina, damos servicio a plantas industriales, proveedores del sector automotriz, comercios y hogares. Nuestros protocolos cumplen los estándares de inocuidad y seguridad que exige la industria manufacturera saltillense.",
    neighborhoods: ["Centro", "República", "Saltillo 2000", "Los Pinos", "Rincón Colonial", "Valle Real"],
    commonPests: ["Cucarachas", "Roedores", "Alacranes", "Hormigas", "Arañas"],
    seasonalNote: "El clima seco de Saltillo favorece la entrada de alacranes y arañas a interiores; reforzamos sellado de accesos y barreras perimetrales en primavera-verano."
  },
  {
    id: 'torreon',
    name: "Torreón, Coah.",
    shortName: "Torreón",
    state: "Coahuila",
    phone: "81 11150958",
    address: "Blvd. Independencia 1500",
    coords: [-103.4068, 25.5439],
    range: "27000 - 27420",
    zipCodes: ["27000", "27010", "27100", "27200", "27260", "27290"],
    priority: true,
    intro: "Torreón, corazón de La Laguna, combina un fuerte sector industrial, agroindustrial y comercial con un clima desértico que intensifica ciertas plagas. Big Cat atiende bodegas, restaurantes, comercios y residencias con manejo integrado de plagas certificado y garantía por escrito.",
    neighborhoods: ["Centro", "Torreón Jardín", "San Isidro", "Los Ángeles", "Villa Florida", "Ampliación Los Ángeles"],
    commonPests: ["Alacranes", "Cucarachas", "Roedores", "Moscas", "Mosquitos"],
    seasonalNote: "El calor extremo lagunero eleva la presencia de alacranes y moscas; aplicamos programas intensivos de mayo a septiembre con seguimiento quincenal."
  },
  {
    id: 'reynosa',
    name: "Reynosa, Tamps.",
    shortName: "Reynosa",
    state: "Tamaulipas",
    phone: "81 11150958",
    address: "Blvd. Hidalgo 1200",
    coords: [-98.2880, 26.0806],
    range: "88500 - 88799",
    zipCodes: ["88500", "88520", "88630", "88690", "88710", "88780"],
    priority: true,
    intro: "En Reynosa, uno de los principales polos maquiladores de la frontera norte, damos servicio de control de plagas a parques industriales, maquiladoras, comercios y hogares. El clima cálido y húmedo de la frontera exige un control constante de mosquitos, cucarachas y roedores, y Big Cat responde con protocolos de alta frecuencia.",
    neighborhoods: ["Centro", "Las Fuentes", "Del Prado", "Aztlán", "Jarachina", "Valle Alto"],
    commonPests: ["Mosquitos", "Cucarachas", "Roedores", "Moscas", "Hormigas"],
    seasonalNote: "La humedad fronteriza y el riesgo de dengue hacen crítico el control de mosquitos; ofrecemos nebulización y tratamiento de criaderos durante toda la temporada cálida."
  },
  {
    id: 'tampico',
    name: "Tampico, Tamps.",
    shortName: "Tampico",
    state: "Tamaulipas",
    phone: "81 11150958",
    address: "Av. Hidalgo 4000",
    coords: [-97.8686, 22.2553],
    range: "89000 - 89370",
    zipCodes: ["89000", "89100", "89140", "89200", "89308", "89360"],
    priority: true,
    intro: "Tampico, puerto histórico del Golfo, presenta una alta humedad y clima tropical que favorecen plagas como cucarachas, mosquitos y termitas. Big Cat protege comercios del centro, restaurantes de mariscos, hoteles de la zona conurbada (Tampico-Madero-Altamira) y residencias con soluciones adaptadas al ambiente costero.",
    neighborhoods: ["Centro Histórico", "Zona Dorada", "Águila", "Universidad", "Flamboyanes", "Laguna de la Puerta"],
    commonPests: ["Cucarachas", "Mosquitos", "Termitas", "Roedores", "Moscas"],
    seasonalNote: "La humedad tropical del puerto mantiene alta la actividad de cucarachas y termitas todo el año; recomendamos programas de mantenimiento mensual en negocios."
  },
  {
    id: 'matamoros',
    name: "Matamoros, Tamps.",
    shortName: "Matamoros",
    state: "Tamaulipas",
    phone: "81 11150958",
    address: "Av. Lauro Villar 800",
    coords: [-97.5027, 25.8690],
    range: "87300 - 87599",
    zipCodes: ["87300", "87340", "87370", "87450", "87490", "87560"],
    priority: true,
    intro: "En Matamoros, ciudad fronteriza y puerto industrial de Tamaulipas, atendemos maquiladoras, comercios, bodegas y hogares con control de plagas certificado. El clima cálido y la actividad logística fronteriza requieren un manejo riguroso de roedores, cucarachas y mosquitos que Big Cat garantiza por escrito.",
    neighborhoods: ["Centro", "Jardín", "Victoria", "Fraccionamiento Los Encinos", "Valle Real", "Modulo 2000"],
    commonPests: ["Roedores", "Mosquitos", "Cucarachas", "Moscas", "Hormigas"],
    seasonalNote: "El tránsito de mercancías fronterizo incrementa el riesgo de roedores en bodegas; instalamos estaciones de monitoreo perimetral con reporte documentado para auditorías."
  },

  // ===================================================================
  // RESTO DE SEDES (cobertura nacional)
  // ===================================================================
  {
    id: 'guadalajara',
    name: "Guadalajara, Jal.",
    shortName: "Guadalajara",
    state: "Jalisco",
    phone: "81 11150958",
    address: "C. Miguel Lerdo de Tejada 2379",
    coords: [-103.4147, 20.7326],
    range: "44100 - 45200",
    priority: true,
    intro: "Guadalajara, la Perla de Occidente y una de las mayores zonas metropolitanas del país, concentra una enorme actividad gastronómica, comercial e industrial. Big Cat ofrece control de plagas profesional para restaurantes de Chapultepec y Providencia, comercios del centro, industrias de El Salto y residencias en toda la ZMG.",
    neighborhoods: ["Centro", "Providencia", "Chapultepec", "Zapopan", "Andares", "Tlaquepaque", "Americana"],
    commonPests: ["Cucarachas", "Roedores", "Hormigas", "Mosquitos", "Termitas"],
    seasonalNote: "La temporada de lluvias tapatía dispara mosquitos y hormigas; ajustamos los tratamientos perimetrales de junio a octubre."
  },
  {
    id: 'leon',
    name: "León, Gto.",
    shortName: "León",
    state: "Guanajuato",
    phone: "81 11150958",
    address: "Blvd. Campestre 1511",
    coords: [-101.68, 21.12],
    range: "37000 - 37999"
  },
  {
    id: 'cdmx',
    name: "Ciudad de México",
    shortName: "Ciudad de México",
    state: "Ciudad de México",
    phone: "81 11150958",
    address: "Tennyson 133, Polanco",
    coords: [-99.13, 19.43],
    range: "01000 - 16999"
  },
  {
    id: 'puebla',
    name: "Puebla, Pue.",
    shortName: "Puebla",
    state: "Puebla",
    phone: "81 11150958",
    address: "Av. Juárez 2902",
    coords: [-98.20, 19.04],
    range: "72000 - 72999"
  },
  {
    id: 'tijuana',
    name: "Tijuana, B.C.",
    shortName: "Tijuana",
    state: "Baja California",
    phone: "81 11150958",
    address: "Blvd. Agua Caliente 10440",
    coords: [-117.03, 32.51],
    range: "22000 - 22999"
  },
  {
    id: 'merida',
    name: "Mérida, Yuc.",
    shortName: "Mérida",
    state: "Yucatán",
    phone: "81 11150958",
    address: "Calle 60 491",
    coords: [-89.62, 20.96],
    range: "97000 - 97314"
  },
  {
    id: 'sanluis',
    name: "San Luis Potosí",
    shortName: "San Luis Potosí",
    state: "San Luis Potosí",
    phone: "81 11150958",
    address: "Av. Venustiano Carranza 1000",
    coords: [-100.97, 22.15],
    range: "78000 - 78499"
  },
  {
    id: 'aguascalientes',
    name: "Aguascalientes",
    shortName: "Aguascalientes",
    state: "Aguascalientes",
    phone: "81 11150958",
    address: "Av. Universidad 1001",
    coords: [-102.29, 21.88],
    range: "20000 - 20999"
  },
  {
    id: 'hermosillo',
    name: "Hermosillo, Son.",
    shortName: "Hermosillo",
    state: "Sonora",
    phone: "81 11150958",
    address: "Blvd. Eusebio Kino 300",
    coords: [-110.96, 29.07],
    range: "83000 - 83299"
  },
  {
    id: 'mexicali',
    name: "Mexicali, B.C.",
    shortName: "Mexicali",
    state: "Baja California",
    phone: "81 11150958",
    address: "Av. Madero 100",
    coords: [-115.45, 32.62],
    range: "21000 - 21399"
  },
  {
    id: 'culiacan',
    name: "Culiacán, Sin.",
    shortName: "Culiacán",
    state: "Sinaloa",
    phone: "81 11150958",
    address: "Blvd. Pedro Infante 2500",
    coords: [-107.39, 24.80],
    range: "80000 - 80299"
  },
  {
    id: 'juarez',
    name: "Cd. Juárez, Chih.",
    shortName: "Ciudad Juárez",
    state: "Chihuahua",
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
  },
  {
    id: '5',
    slug: 'control-de-plagas-monterrey-calor',
    title: "Control de plagas en Monterrey: por qué el calor extremo dispara las infestaciones",
    excerpt: "El verano regio no solo es sofocante: es el escenario perfecto para que cucarachas, alacranes y roedores invadan tu hogar o negocio. Te explicamos por qué y cómo prevenirlo.",
    content: `
      <p>Si vives en <strong>Monterrey</strong> o su zona metropolitana, sabes que el verano no perdona. Pero más allá de las altas temperaturas, pocos saben que el calor extremo del área regia es uno de los principales detonantes de infestaciones de plagas en hogares, restaurantes e industrias.</p>

      <img src="/services/cucaracha.webp" alt="Control de plagas en Monterrey durante el calor" style="width: 100%; border-radius: 12px; margin: 24px 0;" />

      <h2>¿Por qué el calor de Monterrey atrae más plagas?</h2>
      <p>Las plagas son organismos de sangre fría: su metabolismo se acelera con el calor. En una ciudad con veranos que superan los 40°C como Monterrey, esto se traduce en ciclos de reproducción más rápidos y una búsqueda desesperada de agua y sombra… dentro de tu casa.</p>
      <ul>
        <li><strong>Cucarachas:</strong> El calor acelera su reproducción y las empuja hacia cocinas y baños en busca de humedad. Conoce nuestro <a href="/servicios/eliminacion-de-cucarachas">servicio de eliminación de cucarachas</a>.</li>
        <li><strong>Alacranes:</strong> Muy comunes en las faldas de la Sierra Madre (San Pedro, Chipinque). Buscan refugio fresco en interiores. Revisa el <a href="/servicios/control-de-alacranes">control de alacranes</a>.</li>
        <li><strong>Roedores:</strong> El estrés hídrico los acerca a fuentes de agua domésticas. Aquí nuestro <a href="/servicios/control-de-roedores">control de roedores</a>.</li>
      </ul>

      <h3>Zonas de Monterrey con mayor incidencia</h3>
      <p>En colonias como Del Valle, Cumbres, Contry y San Jerónimo registramos picos de actividad entre mayo y septiembre. Las viviendas cercanas a áreas verdes o a la sierra presentan mayor presión de alacranes.</p>

      <h3>Cómo proteger tu propiedad este verano</h3>
      <p>1. Sella grietas en muros y zócalos, especialmente en planta baja.<br/>
      2. Elimina fugas y encharcamientos: el agua es el imán número uno.<br/>
      3. Programa una barrera perimetral residual antes del pico de calor.</p>

      <p>En <strong>Big Cat</strong> reforzamos los protocolos para el clima regio de mayo a septiembre. Conoce nuestra cobertura de <a href="/sedes/monterrey">control de plagas en Monterrey</a> y solicita una inspección gratuita.</p>
    `,
    featured_image: "/services/cucaracha.webp",
    published_at: "2026-05-06T10:00:00Z",
    author: "Alexander",
    category: "Guía Local",
    meta_description: "Descubre por qué el calor extremo de Monterrey dispara las plagas de cucarachas, alacranes y roedores, y cómo protegerte. Guía local de Big Cat Control de Plagas.",
    keywords: ["control de plagas monterrey", "fumigación monterrey", "plagas calor", "cucarachas monterrey", "alacranes monterrey"]
  },
  {
    id: '6',
    slug: 'alacranes-norte-mexico-prevencion',
    title: "Alacranes en el norte de México: guía de prevención para Coahuila y Nuevo León",
    excerpt: "Saltillo, Torreón y Monterrey están entre las zonas con mayor presencia de alacranes. Aprende a identificar el riesgo y a mantener tu hogar seguro.",
    content: `
      <p>El alacrán es una de las plagas más temidas —y peligrosas— del norte de México. En estados como <strong>Coahuila</strong> y <strong>Nuevo León</strong>, su picadura representa un riesgo real de salud, sobre todo para niños, adultos mayores y mascotas.</p>

      <img src="/services/alacranes.webp" alt="Prevención de alacranes en el norte de México" style="width: 100%; border-radius: 12px; margin: 24px 0;" />

      <h2>¿Por qué hay tantos alacranes en el norte?</h2>
      <p>El clima seco y cálido de ciudades como <a href="/sedes/saltillo">Saltillo</a>, <a href="/sedes/torreon">Torreón</a> y <a href="/sedes/monterrey">Monterrey</a> es el hábitat ideal para el <em>Centruroides</em>, el género de alacrán de importancia médica en México. Buscan refugio fresco durante el día y salen de noche a cazar.</p>

      <h3>Puntos donde se esconden en casa</h3>
      <ul>
        <li>Grietas en muros y zócalos.</li>
        <li>Detrás de cuadros, muebles y electrodomésticos.</li>
        <li>Registros de drenaje, coladeras y cajas de luz.</li>
        <li>Zapatos, ropa y toallas dejadas en el piso.</li>
      </ul>

      <h3>7 hábitos que reducen el riesgo</h3>
      <p>1. Sacude ropa, zapatos y ropa de cama antes de usarlos.<br/>
      2. Sella grietas y coloca guardapolvos en puertas exteriores.<br/>
      3. Mantén patios libres de escombros, madera y macetas amontonadas.<br/>
      4. Instala mosquiteros y protege coladeras.<br/>
      5. Evita acumular cajas contra los muros.<br/>
      6. Usa luz de vapor de sodio (amarilla) en exteriores: atrae menos insectos de los que se alimentan.<br/>
      7. Aplica una <a href="/servicios/control-de-alacranes">barrera química residual profesional</a> en el perímetro.</p>

      <h2>¿Qué hacer ante una picadura?</h2>
      <p>Acude de inmediato al centro de salud más cercano. México cuenta con antídoto (faboterápico) gratuito en el sector público. No apliques remedios caseros.</p>

      <p>En <strong>Big Cat</strong> aplicamos barreras residuales de larga duración, seguras para tu familia, diseñadas específicamente para el clima del norte. Solicita tu inspección en <a href="/sedes/saltillo">Saltillo</a>, <a href="/sedes/torreon">Torreón</a> o <a href="/sedes/monterrey">Monterrey</a>.</p>
    `,
    featured_image: "/services/alacranes.webp",
    published_at: "2026-05-13T09:30:00Z",
    author: "Alexander",
    category: "Prevención",
    meta_description: "Guía de prevención de alacranes en Coahuila y Nuevo León: dónde se esconden, cómo evitarlos y qué hacer ante una picadura. Consejos de Big Cat.",
    keywords: ["alacranes", "control de alacranes", "alacranes saltillo", "alacranes torreón", "picadura de alacrán", "alacranes monterrey"]
  },
  {
    id: '7',
    slug: 'como-elegir-empresa-control-de-plagas',
    title: "Cómo elegir una empresa de control de plagas en México: 7 puntos clave",
    excerpt: "No todas las fumigadoras son iguales. Estos son los criterios que debes revisar antes de contratar para no tirar tu dinero (ni arriesgar tu salud).",
    content: `
      <p>Contratar control de plagas parece sencillo, pero elegir mal puede significar pagar por un servicio que no funciona —o peor, exponer a tu familia a productos mal aplicados. Esta es la guía definitiva para elegir una <strong>empresa de control de plagas</strong> confiable en México.</p>

      <img src="/images/hero-home.webp" alt="Cómo elegir una empresa de control de plagas" style="width: 100%; border-radius: 12px; margin: 24px 0;" />

      <h2>1. Registro y licencia ante COFEPRIS</h2>
      <p>Toda empresa seria debe operar con productos y protocolos autorizados por la <strong>COFEPRIS</strong>. Si no pueden comprobarlo, desconfía.</p>

      <h2>2. Técnicos capacitados y certificados</h2>
      <p>El producto es solo la mitad del trabajo; la aplicación correcta es la otra mitad. Pregunta por la capacitación del personal.</p>

      <h2>3. Diagnóstico antes que cotización</h2>
      <p>Una buena empresa inspecciona antes de darte un precio. Las cotizaciones "a ciegas" suelen esconder sorpresas.</p>

      <h2>4. Garantía por escrito</h2>
      <p>Si el servicio es efectivo, la empresa lo respalda por escrito. En <strong>Big Cat</strong> entregamos garantía documentada en cada servicio.</p>

      <h2>5. Productos seguros para niños y mascotas</h2>
      <p>Busca métodos de bajo impacto como el <a href="/servicios/control-de-plagas-comercial">Manejo Integrado de Plagas (MIP)</a>, geles inodoros y nebulización controlada.</p>

      <h2>6. Cobertura y tiempos de respuesta</h2>
      <p>Una plaga no espera. Verifica que tengan presencia local y atención el mismo día en tu ciudad.</p>

      <h2>7. Reseñas y experiencia comprobable</h2>
      <p>Los años en el mercado y las reseñas reales importan. Big Cat cuenta con más de 29 años de experiencia respaldados por PCP Internacional.</p>

      <p>¿Buscas un servicio que cumpla los 7 puntos? Conoce nuestra <a href="/nosotros">historia</a> y solicita una <a href="/#cotizacion">cotización gratuita</a>.</p>
    `,
    featured_image: "/images/hero-home.webp",
    published_at: "2026-05-20T11:00:00Z",
    author: "Alexander",
    category: "Guía de Compra",
    meta_description: "7 criterios clave para elegir una empresa de control de plagas confiable en México: COFEPRIS, garantía, seguridad y más. Guía experta de Big Cat.",
    keywords: ["empresa control de plagas", "mejor fumigadora", "cofepris", "elegir fumigadora", "control de plagas confiable"]
  },
  {
    id: '8',
    slug: 'control-de-plagas-restaurantes-cofepris',
    title: "Control de plagas para restaurantes: cumple con COFEPRIS y evita multas",
    excerpt: "Una sola cucaracha puede cerrar tu restaurante. Descubre cómo un programa profesional protege tu reputación, tus clientes y tu licencia sanitaria.",
    content: `
      <p>En la industria restaurantera, la higiene no es negociable. Un incidente de plagas puede significar una multa, una clausura o —lo más costoso— la pérdida de la confianza de tus clientes en la era de las reseñas en línea.</p>

      <img src="/images/cocina.webp" alt="Control de plagas para restaurantes y COFEPRIS" style="width: 100%; border-radius: 12px; margin: 24px 0;" />

      <h2>¿Qué exige la normativa sanitaria en México?</h2>
      <p>La <strong>COFEPRIS</strong> y las normas de inocuidad (como la NOM-251) exigen un programa documentado de control de plagas. Esto incluye bitácoras, mapas de estaciones de cebado, productos autorizados y personal capacitado.</p>

      <h3>Riesgos de no tener un programa profesional</h3>
      <ul>
        <li>Multas y clausuras por parte de la autoridad sanitaria.</li>
        <li>Contaminación de alimentos y riesgo de intoxicaciones.</li>
        <li>Daño reputacional viral en redes y plataformas de reseñas.</li>
        <li>Pérdida de certificaciones y contratos con cadenas.</li>
      </ul>

      <h2>Cómo funciona el Manejo Integrado de Plagas (MIP)</h2>
      <p>Nuestro <a href="/servicios/control-de-plagas-comercial">programa comercial MIP</a> prioriza la prevención: inspección, sellado de accesos, monitoreo con estaciones inviolables y aplicación química solo cuando es necesaria. Todo documentado para tus auditorías.</p>

      <h3>Plagas críticas en cocinas profesionales</h3>
      <p>Las más frecuentes son <a href="/servicios/eliminacion-de-cucarachas">cucarachas</a>, <a href="/servicios/control-de-roedores">roedores</a> y moscas. Cada una requiere un abordaje distinto y discreto que no interrumpa tu operación.</p>

      <p>En <strong>Big Cat</strong> protegemos a más de 300 restaurantes en México, desde Monterrey hasta Querétaro y la CDMX. Solicita una auditoría de vulnerabilidades sin costo para tu establecimiento.</p>
    `,
    featured_image: "/images/cocina.webp",
    published_at: "2026-05-27T10:15:00Z",
    author: "Alexander",
    category: "Sector Comercial",
    meta_description: "Guía de control de plagas para restaurantes en México: cumple con COFEPRIS y la NOM-251, evita multas y protege tu reputación. Programa MIP de Big Cat.",
    keywords: ["control de plagas restaurantes", "fumigación comercial", "cofepris restaurantes", "inocuidad alimentaria", "nom-251"]
  },
  {
    id: '9',
    slug: 'chinches-de-cama-deteccion-eliminacion',
    title: "Chinches de cama: cómo detectarlas a tiempo y eliminarlas por completo",
    excerpt: "Las chinches de cama resurgieron con fuerza por el turismo. Aprende a reconocer las señales tempranas antes de que la infestación se salga de control.",
    content: `
      <p>Las <strong>chinches de cama</strong> son una de las plagas más difíciles de eliminar por cuenta propia. Se esconden, se reproducen rápido y viajan en el equipaje. Detectarlas a tiempo es la diferencia entre un tratamiento sencillo y una infestación costosa.</p>

      <img src="/images/chinches_bedroom_1776661359500.png" alt="Detección y eliminación de chinches de cama" style="width: 100%; border-radius: 12px; margin: 24px 0;" />

      <h2>5 señales de que tienes chinches</h2>
      <ol>
        <li><strong>Picaduras en línea o en zigzag</strong> al despertar, generalmente en brazos, cuello y piernas.</li>
        <li><strong>Manchas oscuras</strong> (excremento) en costuras del colchón y base de la cama.</li>
        <li><strong>Pequeñas manchas de sangre</strong> en las sábanas.</li>
        <li><strong>Mudas de piel</strong> translúcidas cerca de los escondites.</li>
        <li><strong>Olor dulzón y desagradable</strong> en infestaciones avanzadas.</li>
      </ol>

      <h2>¿Por qué no basta con los remedios caseros?</h2>
      <p>Los insecticidas de aerosol dispersan la colonia y generan resistencia. Las chinches soportan largos periodos sin alimentarse y sus huevos son muy resistentes, por lo que un tratamiento incompleto casi garantiza el rebrote.</p>

      <h3>El tratamiento profesional</h3>
      <p>En <strong>Big Cat</strong> combinamos métodos de calor y nebulización dirigida para eliminar huevos y adultos. Conoce el <a href="/servicios/control-de-chinches">control de chinches de cama</a>. Es especialmente crítico en hoteles y hospedajes de destinos turísticos como <a href="/sedes/san-miguel-de-allende">San Miguel de Allende</a> y <a href="/sedes/queretaro">Querétaro</a>.</p>

      <h3>Cómo prevenir su regreso</h3>
      <p>Revisa tu equipaje tras viajar, usa fundas de colchón certificadas y evita comprar muebles usados sin inspección. Si viajas con frecuencia, inspecciona el cabecero y las costuras del colchón al llegar a cualquier hotel.</p>

      <p>¿Sospechas de una infestación? Solicita una inspección discreta y profesional hoy mismo.</p>
    `,
    featured_image: "/images/chinches_bedroom_1776661359500.png",
    published_at: "2026-06-03T09:00:00Z",
    author: "Alexander",
    category: "Guía de Especies",
    meta_description: "Aprende a detectar chinches de cama a tiempo: señales, picaduras y por qué necesitas tratamiento profesional. Guía de eliminación de Big Cat.",
    keywords: ["chinches de cama", "eliminar chinches", "chinches hotel", "picaduras de chinches", "señales de chinches"]
  },
  {
    id: '10',
    slug: 'mosquitos-dengue-zonas-calidas',
    title: "Mosquitos y dengue: cómo protegerte en Tampico, Reynosa y zonas cálidas",
    excerpt: "En las zonas cálidas y húmedas del país, el mosquito no solo molesta: transmite dengue, zika y chikungunya. Te decimos cómo cortar su ciclo.",
    content: `
      <p>En ciudades cálidas y húmedas como <a href="/sedes/tampico">Tampico</a>, <a href="/sedes/reynosa">Reynosa</a> y <a href="/sedes/matamoros">Matamoros</a>, el mosquito <em>Aedes aegypti</em> es más que una molestia: es el principal transmisor de <strong>dengue, zika y chikungunya</strong> en México.</p>

      <img src="/services/mosquitos.webp" alt="Control de mosquitos y prevención de dengue" style="width: 100%; border-radius: 12px; margin: 24px 0;" />

      <h2>El agua estancada es el enemigo</h2>
      <p>El <em>Aedes</em> se reproduce en pequeñas acumulaciones de agua limpia. Un tapón de botella con agua puede convertirse en un criadero. Por eso el control empieza en casa.</p>

      <h3>Revisa estos criaderos comunes</h3>
      <ul>
        <li>Platos de macetas y bebederos de mascotas.</li>
        <li>Llantas, cubetas y juguetes en el patio.</li>
        <li>Canaletas y azoteas con mal drenaje.</li>
        <li>Tinacos y cisternas destapadas.</li>
        <li>Floreros y agua de plantas.</li>
      </ul>

      <h2>Prevención en 3 pasos: lava, tapa, voltea</h2>
      <p>1. <strong>Lava</strong> los recipientes que acumulan agua.<br/>
      2. <strong>Tapa</strong> tinacos y depósitos.<br/>
      3. <strong>Voltea</strong> o desecha objetos que junten agua.</p>

      <h2>El control profesional marca la diferencia</h2>
      <p>Cuando la población de mosquitos ya es alta, la nebulización perimetral y el tratamiento de criaderos son la solución más eficaz. Conoce nuestro <a href="/servicios/control-de-mosquitos">control de mosquitos</a>, ideal para negocios, escuelas y residencias en zonas de riesgo.</p>

      <p>En <strong>Big Cat</strong> ofrecemos programas de temporada para la costa del Golfo y la frontera norte. Protege a tu familia antes del pico de lluvias.</p>
    `,
    featured_image: "/services/mosquitos.webp",
    published_at: "2026-06-10T10:30:00Z",
    author: "Alexander",
    category: "Salud y Prevención",
    meta_description: "Cómo protegerte de mosquitos y dengue en Tampico, Reynosa y zonas cálidas de México: elimina criaderos y conoce el control profesional de Big Cat.",
    keywords: ["mosquitos", "control de mosquitos", "dengue mexico", "fumigación mosquitos tampico", "aedes aegypti"]
  },
  {
    id: '11',
    slug: 'termitas-senales-riesgo-hogar',
    title: "Termitas: 6 señales de que están destruyendo tu casa (y cómo detenerlas)",
    excerpt: "Las termitas trabajan en silencio y pueden comprometer la estructura de tu hogar antes de que las veas. Aprende a detectar el daño a tiempo.",
    content: `
      <p>Las <strong>termitas</strong> son conocidas como "el enemigo silencioso" por una buena razón: pueden devorar la madera de tu casa durante años sin que lo notes. Detectarlas a tiempo puede ahorrarte miles de pesos en reparaciones estructurales.</p>

      <img src="/services/termitas.webp" alt="Señales de daño por termitas en el hogar" style="width: 100%; border-radius: 12px; margin: 24px 0;" />

      <h2>6 señales de que tienes termitas</h2>
      <ol>
        <li><strong>Tubos de lodo</strong> en muros, cimientos o esquinas (túneles que construyen para desplazarse).</li>
        <li><strong>Madera que suena hueca</strong> al golpearla.</li>
        <li><strong>Alas desprendidas</strong> cerca de ventanas tras un vuelo de reproducción.</li>
        <li><strong>Pintura abombada o agrietada</strong> sin causa aparente.</li>
        <li><strong>Puertas y ventanas que se atoran</strong> por deformación de la madera.</li>
        <li><strong>Polvo fino tipo aserrín</strong> (excremento de termita de madera seca).</li>
      </ol>

      <h2>Termitas subterráneas vs. de madera seca</h2>
      <p>Las subterráneas viven en el suelo y suben por los cimientos; son las más destructivas. Las de madera seca colonizan muebles y vigas directamente. Cada una requiere un tratamiento distinto, por eso el diagnóstico profesional es esencial. Esto es especialmente relevante en construcciones históricas como las de <a href="/sedes/san-miguel-de-allende">San Miguel de Allende</a>.</p>

      <h3>La solución profesional</h3>
      <p>Nuestro <a href="/servicios/control-de-termitas">control de termitas</a> incluye barreras químicas en el suelo, inyección profunda en la madera afectada y tratamientos preventivos en pre-construcción, con garantía extendida.</p>

      <p>Si detectaste una o más de estas señales, no esperes: el daño estructural avanza cada día. Solicita una inspección especializada con <strong>Big Cat</strong>.</p>
    `,
    featured_image: "/services/termitas.webp",
    published_at: "2026-06-17T09:45:00Z",
    author: "Alexander",
    category: "Prevención",
    meta_description: "6 señales de que tu casa tiene termitas y cómo detener el daño estructural. Guía experta de control de termitas de Big Cat México.",
    keywords: ["termitas", "control de termitas", "daño de termitas", "señales de termitas", "fumigación termitas"]
  },
  {
    id: '12',
    slug: 'cuanto-cuesta-fumigacion-mexico-2026',
    title: "¿Cuánto cuesta una fumigación en México en 2026? Precios y factores",
    excerpt: "El costo de una fumigación depende de varios factores. Te explicamos qué influye en el precio para que puedas comparar y decidir con información real.",
    content: `
      <p>Una de las preguntas más frecuentes que recibimos es: <strong>¿cuánto cuesta una fumigación?</strong> La respuesta honesta es "depende", pero en este artículo te explicamos exactamente de qué depende para que puedas presupuestar con claridad en 2026.</p>

      <img src="/images/hero-home.webp" alt="Cuánto cuesta una fumigación en México" style="width: 100%; border-radius: 12px; margin: 24px 0;" />

      <h2>Factores que determinan el precio</h2>
      <ul>
        <li><strong>Tipo de plaga:</strong> No cuesta lo mismo un control de <a href="/servicios/eliminacion-de-cucarachas">cucarachas</a> que un tratamiento de <a href="/servicios/control-de-termitas">termitas</a> o <a href="/servicios/control-de-chinches">chinches</a>, que requieren equipo especializado.</li>
        <li><strong>Tamaño del inmueble:</strong> Metros cuadrados y número de habitaciones.</li>
        <li><strong>Nivel de infestación:</strong> Un problema incipiente es más barato que una plaga establecida.</li>
        <li><strong>Tipo de propiedad:</strong> Residencial, comercial o industrial (los <a href="/servicios/control-de-plagas-comercial">programas comerciales</a> incluyen documentación para auditorías).</li>
        <li><strong>Frecuencia:</strong> Servicio único vs. programa de mantenimiento periódico.</li>
      </ul>

      <h2>¿Por qué desconfiar de un precio "por teléfono"?</h2>
      <p>Cualquier empresa seria necesita inspeccionar antes de dar un precio final. Una cotización a ciegas casi siempre esconde costos adicionales o un servicio insuficiente. En <strong>Big Cat</strong>, la inspección y cotización son <strong>gratuitas y sin compromiso</strong>.</p>

      <h2>Barato puede salir caro</h2>
      <p>Un servicio de bajo costo mal aplicado suele requerir repeticiones, exponer a tu familia a productos inadecuados y no resolver el problema de raíz. Fíjate en la garantía por escrito, la certificación COFEPRIS y la experiencia de la empresa —revisa nuestra guía sobre <a href="/blog/como-elegir-empresa-control-de-plagas">cómo elegir una empresa de control de plagas</a>.</p>

      <h3>Obtén tu cotización real hoy</h3>
      <p>La mejor forma de saber cuánto costará <em>tu</em> caso es una inspección profesional. Contáctanos y recibe un presupuesto claro, sin sorpresas, con garantía incluida.</p>
    `,
    featured_image: "/images/hero-home.webp",
    published_at: "2026-06-24T11:15:00Z",
    author: "Alexander",
    category: "Guía de Precios",
    meta_description: "¿Cuánto cuesta una fumigación en México en 2026? Descubre los factores que determinan el precio del control de plagas y cómo obtener una cotización real. Guía de Big Cat.",
    keywords: ["cuánto cuesta fumigación", "precio control de plagas", "costo fumigación mexico", "tarifa fumigación 2026", "cotización fumigación"]
  }
];

