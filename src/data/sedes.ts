/**
 * LAS CIUDADES DE BIG CAT — EL ÚNICO ARCHIVO QUE HAY QUE TOCAR PARA CARGAR DATOS
 * ════════════════════════════════════════════════════════════════════════════
 *
 * TRES NIVELES (campo `tipo`)
 *
 *   'sede'      Sede física: página completa con dirección, horario y mapa.
 *   'servicio'  Ciudad con servicio, sin oficina: "damos servicio en X". Nunca
 *               muestra dirección ni dice que hay oficina.
 *   'aliados'   Ciudad atendida por la red de aliados: "te conectamos con un
 *               especialista certificado de nuestra red de aliados". Nunca dice
 *               que hay técnicos ni oficina de Big Cat.
 *
 * `constants.ts` reexporta esta lista como BRANCHES. Vive en este archivo y no
 * en constants.ts porque también la lee el generador del sitemap (Node), y
 * constants.ts importa componentes de React.
 *
 * De esta lista salen la página de cada sede (/sedes/{slug}/), el listado
 * /sedes/, la página /cobertura/, el menú, el pie, el bloque de sedes de la
 * home y del blog, el sitemap y el JSON-LD. Agregar o quitar una sede acá la
 * agrega o la quita de todos esos lugares.
 *
 * CÓMO CARGAR LOS DATOS PENDIENTES DE UNA SEDE
 *
 * Solo aplica a las de tipo 'sede'. Los campos del bloque "DATOS DE LA SEDE"
 * están vacíos a propósito: no se inventan. Mientras un campo esté vacío, la página no muestra ese bloque ni lo
 * declara en el JSON-LD. Al completarlo, aparece solo en el próximo deploy.
 *
 *   telefonoLocal teléfono de la sede, como se muestra: '81 1234 5678'. Si está
 *                vacío se usa el general. WhatsApp va SIEMPRE al número central.
 *   direccion    'Av. Ejemplo 123, Col. Centro, 64000 Monterrey, N.L.'
 *   horario      texto visible:       'Lunes a sábado de 8:00 a 19:00'
 *   horarioSchema formato schema.org:  ['Mo-Sa 08:00-19:00']
 *   mapaEmbedUrl Google Maps > Compartir > Insertar un mapa > copiar SOLO la URL
 *                del atributo src="https://www.google.com/maps/embed?pb=..."
 *   geo          coordenadas del local (clic derecho en Google Maps):
 *                { lat: 25.6866, lng: -100.3161 }
 *   resenas      reseñas reales, textuales, con nombre y fuente.
 *
 * `coords` NO es la ubicación de la sede: es el centro de la ciudad y solo se
 * usa para centrar los mapas decorativos. Por eso no va al JSON-LD.
 *
 * ESTE ARCHIVO NO IMPORTA NADA
 *
 * Lo lee también el generador del sitemap (Node, sin navegador ni React). Por
 * eso es solo datos y tipos: nada de íconos ni componentes.
 */

export interface Resena {
    autor: string;
    texto: string;
    /** 1 a 5 */
    calificacion: number;
    /** 'Google', 'Facebook'… */
    fuente: string;
    /** AAAA-MM-DD */
    fecha?: string;
}

export interface Zona {
    nombre: string;
    /** Si la zona tiene sede propia, su slug: el nombre enlaza a esa página. */
    sede?: string;
}

export interface PlagaLocal {
    nombre: string;
    texto: string;
    /** Slug de /servicios/{slug}/. Sin slug, se muestra sin enlace. */
    servicio?: string;
}

export type TipoCiudad = 'sede' | 'servicio' | 'aliados';

export interface Branch {
    /** Slug de la URL: /sedes/{id}/ */
    id: string;
    tipo: TipoCiudad;
    /** Si la página es parte de la zona de una sede (San Pedro → monterrey). */
    zonaDe?: string;
    /** Nombre con abreviatura de estado: "Monterrey, N.L." */
    name: string;
    /** Nombre de la ciudad para títulos y textos: "Monterrey". */
    shortName: string;
    /** Nombre corto SOLO para el <title> cuando el largo no entra en 60 caracteres. */
    tituloCiudad?: string;
    state: string;
    /** Centro de la ciudad, para mapas decorativos. NO es la dirección de la sede. */
    coords: [number, number];
    range?: string;
    zipCodes?: string[];

    /** Meta description (≤ 155 caracteres, sin precios). */
    metaDescription: string;
    /** Texto bajo el H1. Si falta, se arma según el tipo. */
    intro?: string;
    /** Introducción de la sección de servicios. */
    serviciosIntro?: string;
    /** Plagas frecuentes con texto propio. Si no hay, se usan `commonPests`. */
    plagas?: PlagaLocal[];
    commonPests: string[];
    /** Municipios atendidos: van a "Zonas que atendemos" y al areaServed. */
    municipios?: Zona[];
    /** Colonias (se muestran si no hay municipios). */
    neighborhoods?: string[];
    seasonalNote?: string;

    // ── DATOS DE LA SEDE (los carga el dueño; vacío = bloque oculto) ────────
    /** Teléfono local de la sede ('81 1234 5678'). Vacío = el general. */
    telefonoLocal: string;
    direccion: string;
    horario: string;
    horarioSchema: string[];
    mapaEmbedUrl: string;
    geo: { lat: number; lng: number } | null;
    resenas: Resena[];
}

/** Datos de sede todavía sin cargar. Se reemplaza campo por campo en cada sede. */
const SIN_DATOS = {
    telefonoLocal: '',
    direccion: '',
    horario: '',
    horarioSchema: [] as string[],
    mapaEmbedUrl: '',
    geo: null,
    resenas: [] as Resena[],
};

export const BRANCHES: Branch[] = [
    // ── Nuevo León ──────────────────────────────────────────────────────────
    {
        id: 'monterrey',
        tipo: 'sede',
        name: 'Monterrey, N.L.',
        shortName: 'Monterrey',
        state: 'Nuevo León',
        coords: [-100.3161, 25.6866],
        range: '64000 - 66299',
        zipCodes: ['64000', '64720', '64830', '64988', '66220', '66269'],
        metaDescription:
            'Fumigación para casas y negocios en Monterrey, San Nicolás, Guadalupe y Apodaca. Alacranes, cucarachas, ratas y termitas. Cotiza gratis por WhatsApp.',
        intro:
            'Fumigaciones para casas, departamentos y negocios en Monterrey y su área metropolitana. Cuéntanos por WhatsApp qué plaga tienes y te mandamos la cotización sin costo.',
        serviciosIntro:
            'Hacemos fumigación de casas, departamentos, oficinas, restaurantes, comercios y bodegas en Monterrey. No aplicamos lo mismo en todas partes: primero vemos qué plaga hay, dónde se esconde y por dónde entra, y con eso elegimos entre gel, cebos, aspersión residual, nebulización o estaciones para roedores. Estos son los servicios de fumigación que más nos piden en la ciudad:',
        plagas: [
            {
                nombre: 'Alacranes',
                servicio: 'control-de-alacranes',
                texto:
                    'Son la consulta más común en casas cercanas a cerros, parques y lotes baldíos, y en planta baja. Entran por grietas, coladeras y bajo las puertas, y aparecen más en los meses de calor. El tratamiento combina una barrera residual en el perímetro con la revisión de registros y el sellado de accesos.',
            },
            {
                nombre: 'Cucarachas',
                servicio: 'eliminacion-de-cucarachas',
                texto:
                    'El calor regio acelera su reproducción y las empuja a cocinas y baños. La alemana vive dentro de cocinas y electrodomésticos; la americana sube por el drenaje. Por eso se trabaja con gel y cebos en sus puntos de paso, y aspersión solo donde hace falta.',
            },
            {
                nombre: 'Ratas y ratones',
                servicio: 'control-de-roedores',
                texto:
                    'Buscan agua, comida y refugio en bodegas, techos, patios y cuartos de servicio. Si necesitas un exterminador de ratas en Monterrey, colocamos estaciones de cebo cerradas, ubicamos sus rutas y te decimos qué huecos sellar para que no regresen.',
            },
            {
                nombre: 'Termitas',
                servicio: 'control-de-termitas',
                texto:
                    'Pueden estar en marcos, closets, muebles y techos de madera sin que se note por fuera. Las señales: polvo fino junto a la madera, alas sueltas cerca de ventanas o túneles de lodo en los muros. Se tratan con inyección en la madera y barrera en el suelo.',
            },
            {
                nombre: 'Mosquitos',
                servicio: 'control-de-mosquitos',
                texto:
                    'Se crían en agua quieta: macetas, cubetas, llantas y canaletas, sobre todo después de las lluvias. Además de eliminar criaderos, nebulizamos patios y jardines y aplicamos larvicida donde el agua no se puede quitar.',
            },
        ],
        commonPests: ['Alacranes', 'Cucarachas', 'Roedores', 'Termitas', 'Mosquitos'],
        municipios: [
            { nombre: 'Monterrey' },
            { nombre: 'San Pedro Garza García', sede: 'san-pedro-garza-garcia' },
            { nombre: 'Apodaca' },
            { nombre: 'San Nicolás de los Garza' },
            { nombre: 'General Escobedo' },
            { nombre: 'Guadalupe' },
            { nombre: 'García' },
            { nombre: 'Santa Catarina' },
        ],
        ...SIN_DATOS,
    },
    {
        id: 'san-pedro-garza-garcia',
        tipo: 'servicio',
        zonaDe: 'monterrey',
        name: 'San Pedro Garza García, N.L.',
        shortName: 'San Pedro Garza García',
        tituloCiudad: 'San Pedro',
        state: 'Nuevo León',
        coords: [-100.4028, 25.6588],
        range: '66200 - 66290',
        zipCodes: ['66220', '66230', '66240', '66250', '66260', '66270'],
        metaDescription:
            'Fumigación para casas y negocios en San Pedro Garza García, de Valle Oriente a Chipinque. Alacranes, cucarachas y termitas. Cotiza gratis por WhatsApp.',
        intro:
            'Damos servicio de fumigación en San Pedro Garza García como parte de la zona de nuestra sede Monterrey: casas, departamentos y negocios, de Valle Oriente a Chipinque. Cotiza por WhatsApp sin costo.',
        neighborhoods: ['Del Valle', 'Valle Oriente', 'Fuentes del Valle', 'Colinas de San Jerónimo', 'Zona Tec', 'Vista Hermosa', 'Chipinque'],
        commonPests: ['Cucarachas', 'Alacranes', 'Hormigas', 'Roedores', 'Termitas'],
        seasonalNote:
            'Las residencias de la falda de la Sierra Madre (Chipinque, Vista Hermosa) presentan mayor incidencia de alacranes; aplicamos barreras residuales de larga duración discretas.',
        ...SIN_DATOS,
    },

    // ── Coahuila ────────────────────────────────────────────────────────────
    {
        id: 'saltillo',
        tipo: 'sede',
        name: 'Saltillo, Coah.',
        shortName: 'Saltillo',
        state: 'Coahuila',
        coords: [-100.9737, 25.4383],
        range: '25000 - 25350',
        zipCodes: ['25000', '25015', '25100', '25204', '25230', '25290'],
        metaDescription:
            'Fumigación para casas y negocios en Saltillo, Ramos Arizpe y Arteaga. Cucarachas, alacranes, ratas y arañas. Cotiza gratis tu servicio por WhatsApp.',
        intro:
            'Fumigaciones para casas, negocios y bodegas en Saltillo, Ramos Arizpe y Arteaga. Escríbenos por WhatsApp qué plaga tienes y te mandamos la cotización sin costo.',
        serviciosIntro:
            'Atendemos casas, departamentos, comercios, oficinas, restaurantes y bodegas en Saltillo. Cada servicio de fumigación se arma según la plaga y el inmueble: no es lo mismo una cocina con cucarachas que un patio con alacranes o una bodega con ratas. Estos son los servicios que más se piden en la ciudad:',
        plagas: [
            {
                nombre: 'Cucarachas',
                servicio: 'eliminacion-de-cucarachas',
                texto:
                    'Se esconden detrás de estufas, refrigeradores y muebles de cocina, y en baños con fugas. En negocios de comida son la plaga más frecuente. Se controlan con gel y cebos en grietas y puntos de paso, y aspersión residual donde la infestación lo pide.',
            },
            {
                nombre: 'Alacranes',
                servicio: 'control-de-alacranes',
                texto:
                    'El clima seco de Saltillo los lleva a buscar sombra y humedad dentro de las casas, sobre todo en primavera y verano. Aparecen en planta baja, junto a coladeras y detrás de muebles. Se trata el perímetro con barrera residual y se sellan los accesos.',
            },
            {
                nombre: 'Ratas y ratones',
                servicio: 'control-de-roedores',
                texto:
                    'Frecuentes en bodegas, patios con material acumulado y zonas cercanas a terrenos abiertos. Usamos estaciones de cebo cerradas, seguras para niños y mascotas, y revisamos por dónde están entrando.',
            },
            {
                nombre: 'Hormigas',
                servicio: 'control-de-hormigas',
                texto:
                    'Forman caminos hacia cocinas y despensas buscando azúcar y agua. Rociarlas solo dispersa la colonia; con cebos de transferencia las obreras llevan el producto al nido y se elimina la colonia completa.',
            },
            {
                nombre: 'Arañas',
                servicio: 'control-de-aranas',
                texto:
                    'En bodegas, cocheras y rincones poco usados pueden aparecer la viuda negra y la araña violinista, cuya picadura requiere atención médica. Se aspiran telarañas y sacos de huevos y se aplica barrera en rincones y accesos.',
            },
        ],
        commonPests: ['Cucarachas', 'Alacranes', 'Roedores', 'Hormigas', 'Arañas'],
        municipios: [{ nombre: 'Saltillo' }, { nombre: 'Ramos Arizpe' }, { nombre: 'Arteaga' }],
        ...SIN_DATOS,
    },
    {
        id: 'torreon',
        tipo: 'servicio',
        name: 'Torreón, Coah.',
        shortName: 'Torreón',
        state: 'Coahuila',
        coords: [-103.4068, 25.5439],
        range: '27000 - 27420',
        zipCodes: ['27000', '27010', '27100', '27200', '27260', '27290'],
        metaDescription:
            'Fumigación para casas y negocios en Torreón y La Laguna. Alacranes, cucarachas, ratas y moscas. Cotiza gratis tu servicio por WhatsApp.',
        neighborhoods: ['Centro', 'Torreón Jardín', 'San Isidro', 'Los Ángeles', 'Villa Florida', 'Ampliación Los Ángeles'],
        commonPests: ['Alacranes', 'Cucarachas', 'Roedores', 'Moscas', 'Mosquitos'],
        seasonalNote:
            'El calor extremo lagunero eleva la presencia de alacranes y moscas; aplicamos programas intensivos de mayo a septiembre con seguimiento quincenal.',
        ...SIN_DATOS,
    },

    // ── Tamaulipas ──────────────────────────────────────────────────────────
    {
        id: 'reynosa',
        tipo: 'servicio',
        name: 'Reynosa, Tamps.',
        shortName: 'Reynosa',
        state: 'Tamaulipas',
        coords: [-98.288, 26.0806],
        range: '88500 - 88799',
        zipCodes: ['88500', '88520', '88630', '88690', '88710', '88780'],
        metaDescription:
            'Fumigación para casas y negocios en Reynosa y Río Bravo. Mosquitos, cucarachas, ratas y hormigas. Cotiza gratis tu servicio por WhatsApp.',
        intro:
            'Damos servicio de fumigación a casas, negocios y bodegas en Reynosa y Río Bravo. Escríbenos por WhatsApp qué plaga tienes y te mandamos la cotización sin costo.',
        serviciosIntro:
            'Damos servicio de fumigación a casas, comercios, restaurantes, oficinas y bodegas en Reynosa. El clima cálido y húmedo de la frontera mantiene activas a varias plagas casi todo el año, así que el tratamiento se ajusta a la plaga y a la temporada. Estos son los servicios que más se piden:',
        plagas: [
            {
                nombre: 'Mosquitos',
                servicio: 'control-de-mosquitos',
                texto:
                    'Con el calor y la humedad se reproducen rápido en patios, macetas, cubetas y canaletas. El Aedes aegypti transmite dengue, zika y chikungunya. Eliminamos criaderos, aplicamos larvicida en el agua que no se puede quitar y nebulizamos patios y jardines.',
            },
            {
                nombre: 'Cucarachas',
                servicio: 'eliminacion-de-cucarachas',
                texto:
                    'La humedad las mantiene activas casi todo el año en cocinas, baños y drenajes. En restaurantes y negocios de comida se controlan con gel y cebos en grietas y equipos, y aspersión residual en el perímetro.',
            },
            {
                nombre: 'Ratas y ratones',
                servicio: 'control-de-roedores',
                texto:
                    'Aparecen en bodegas, patios y techos, sobre todo donde hay comida o basura al alcance. Colocamos estaciones de cebo cerradas, revisamos rutas y accesos, y te indicamos qué sellar.',
            },
            {
                nombre: 'Hormigas',
                servicio: 'control-de-hormigas',
                texto:
                    'Entran a cocinas y despensas, y en patios y jardines forman hormigueros que crecen después de las lluvias. Con cebos de transferencia se elimina la colonia completa, incluida la reina.',
            },
            {
                nombre: 'Moscas',
                texto:
                    'Son un problema en negocios de comida, contenedores de basura y zonas cercanas a terrenos abiertos. El control combina limpieza de focos, manejo de basura y aplicación en las superficies donde se posan.',
            },
        ],
        commonPests: ['Mosquitos', 'Cucarachas', 'Roedores', 'Moscas', 'Hormigas'],
        municipios: [{ nombre: 'Reynosa' }, { nombre: 'Río Bravo' }],
        ...SIN_DATOS,
    },
    {
        id: 'tampico',
        tipo: 'servicio',
        name: 'Tampico, Tamps.',
        shortName: 'Tampico',
        state: 'Tamaulipas',
        coords: [-97.8686, 22.2553],
        range: '89000 - 89370',
        zipCodes: ['89000', '89100', '89140', '89200', '89308', '89360'],
        metaDescription:
            'Fumigación para casas y negocios en Tampico, Madero y Altamira. Cucarachas, mosquitos, termitas y ratas. Cotiza gratis tu servicio por WhatsApp.',
        neighborhoods: ['Centro Histórico', 'Zona Dorada', 'Águila', 'Universidad', 'Flamboyanes', 'Laguna de la Puerta'],
        commonPests: ['Cucarachas', 'Mosquitos', 'Termitas', 'Roedores', 'Moscas'],
        seasonalNote:
            'La humedad tropical del puerto mantiene alta la actividad de cucarachas y termitas todo el año; recomendamos programas de mantenimiento mensual en negocios.',
        ...SIN_DATOS,
    },
    {
        id: 'matamoros',
        tipo: 'servicio',
        name: 'Matamoros, Tamps.',
        shortName: 'Matamoros',
        state: 'Tamaulipas',
        coords: [-97.5027, 25.869],
        range: '87300 - 87599',
        zipCodes: ['87300', '87340', '87370', '87450', '87490', '87560'],
        metaDescription:
            'Fumigación para casas, negocios y bodegas en Matamoros, Tamaulipas. Ratas, mosquitos, cucarachas y moscas. Cotiza gratis tu servicio por WhatsApp.',
        neighborhoods: ['Centro', 'Jardín', 'Victoria', 'Fraccionamiento Los Encinos', 'Valle Real', 'Modulo 2000'],
        commonPests: ['Roedores', 'Mosquitos', 'Cucarachas', 'Moscas', 'Hormigas'],
        seasonalNote:
            'El tránsito de mercancías fronterizo incrementa el riesgo de roedores en bodegas; instalamos estaciones de monitoreo perimetral con reporte documentado para auditorías.',
        ...SIN_DATOS,
    },

    // ── Jalisco ─────────────────────────────────────────────────────────────
    {
        id: 'guadalajara',
        tipo: 'sede',
        name: 'Guadalajara, Jal.',
        shortName: 'Guadalajara',
        state: 'Jalisco',
        coords: [-103.4147, 20.7326],
        range: '44100 - 45200',
        metaDescription:
            'Fumigación para casas y negocios en Guadalajara, Zapopan, Tlaquepaque y Tonalá. Cucarachas, ratas, hormigas y termitas. Cotiza gratis por WhatsApp.',
        intro:
            'Fumigaciones para casas, departamentos y negocios en Guadalajara y su zona metropolitana. Escríbenos por WhatsApp qué plaga tienes y te mandamos la cotización sin costo.',
        serviciosIntro:
            'Atendemos casas, departamentos, restaurantes, comercios, oficinas y bodegas en Guadalajara, Zapopan, Tlaquepaque, Tonalá y Tlajomulco. Antes de fumigar vemos qué plaga hay, dónde se refugia y por dónde entra, y con eso elegimos el tratamiento. Estos son los servicios de fumigación que más se piden en la zona metropolitana:',
        plagas: [
            {
                nombre: 'Cucarachas',
                servicio: 'eliminacion-de-cucarachas',
                texto:
                    'Con la intensa actividad gastronómica de la ciudad, son la plaga más común en cocinas de casas y restaurantes. La alemana vive en cocinas y equipos; la americana sale del drenaje, sobre todo en temporada de lluvias. Se controlan con gel y cebos en puntos de paso, y aspersión donde hace falta.',
            },
            {
                nombre: 'Ratas y ratones',
                servicio: 'control-de-roedores',
                texto:
                    'Aparecen en bodegas, mercados, patios y techos, y se mueven por el drenaje. Colocamos estaciones de cebo cerradas, ubicamos rutas y accesos, y te decimos qué huecos sellar para que no regresen.',
            },
            {
                nombre: 'Hormigas',
                servicio: 'control-de-hormigas',
                texto:
                    'De junio a octubre, con las lluvias, los hormigueros crecen en jardines y las hormigas entran a cocinas y despensas. Con cebos de transferencia se elimina la colonia completa, no solo las que se ven.',
            },
            {
                nombre: 'Termitas',
                servicio: 'control-de-termitas',
                texto:
                    'Puertas, closets, vigas y muebles de madera pueden tener termitas sin daño visible por fuera. El polvo fino junto a la madera, las alas sueltas cerca de las ventanas o la madera que suena hueca son señales para revisarlas.',
            },
            {
                nombre: 'Mosquitos',
                servicio: 'control-de-mosquitos',
                texto:
                    'La temporada de lluvias los dispara en patios, jardines y zonas con agua estancada. Eliminamos criaderos, aplicamos larvicida donde el agua no se puede quitar y nebulizamos áreas verdes.',
            },
        ],
        commonPests: ['Cucarachas', 'Roedores', 'Hormigas', 'Termitas', 'Mosquitos'],
        municipios: [
            { nombre: 'Guadalajara' },
            { nombre: 'Zapopan' },
            { nombre: 'Tlaquepaque' },
            { nombre: 'Tonalá' },
            { nombre: 'Tlajomulco' },
        ],
        ...SIN_DATOS,
    },

    // ── Querétaro ───────────────────────────────────────────────────────────
    {
        id: 'queretaro',
        tipo: 'sede',
        name: 'Querétaro, Qro.',
        shortName: 'Querétaro',
        state: 'Querétaro',
        coords: [-100.3899, 20.5888],
        range: '76000 - 76299',
        zipCodes: ['76000', '76020', '76090', '76100', '76120', '76220'],
        metaDescription:
            'Fumigación para casas y negocios en Querétaro, Corregidora, El Marqués y Juriquilla. Cucarachas, ratas y hormigas. Cotiza gratis por WhatsApp.',
        intro:
            'Fumigaciones para casas, negocios y naves en Querétaro, Corregidora, El Marqués y Juriquilla. Escríbenos por WhatsApp qué plaga tienes y te mandamos la cotización sin costo.',
        serviciosIntro:
            'Atendemos casas, departamentos, fraccionamientos, restaurantes, comercios, oficinas y bodegas en Querétaro y su zona metropolitana. Antes de fumigar revisamos qué plaga hay y por dónde entra, para aplicar el tratamiento que corresponde y no uno genérico. Estos son los servicios de fumigación más solicitados en la ciudad:',
        plagas: [
            {
                nombre: 'Cucarachas',
                servicio: 'eliminacion-de-cucarachas',
                texto:
                    'En casas se concentran en cocinas y baños; en el Centro Histórico, las construcciones antiguas y los drenajes les dan refugio. En restaurantes se trabaja con gel y cebos en equipos y grietas, sin interrumpir la operación.',
            },
            {
                nombre: 'Ratas y ratones',
                servicio: 'control-de-roedores',
                texto:
                    'Los fraccionamientos nuevos junto a terrenos abiertos y las bodegas de los parques industriales reciben roedores que se quedan sin refugio. Colocamos estaciones de cebo cerradas y revisamos accesos en techos, puertas y tuberías.',
            },
            {
                nombre: 'Hormigas',
                servicio: 'control-de-hormigas',
                texto:
                    'Con la temporada de lluvias, de junio a septiembre, crecen los hormigueros en jardines y entran a las cocinas. Los cebos de transferencia eliminan la colonia completa en lugar de solo las hormigas que se ven.',
            },
            {
                nombre: 'Termitas',
                servicio: 'control-de-termitas',
                texto:
                    'Puertas, closets, vigas y muebles de madera pueden tener termitas sin daño visible por fuera. Si encuentras polvo fino, alas sueltas o madera que suena hueca, conviene revisarlas antes de que avancen.',
            },
            {
                nombre: 'Mosquitos',
                servicio: 'control-de-mosquitos',
                texto:
                    'Aumentan en la época de lluvias en zonas con jardines, presas y canales. Eliminamos criaderos, aplicamos larvicida y nebulizamos áreas verdes y terrazas.',
            },
        ],
        commonPests: ['Cucarachas', 'Roedores', 'Hormigas', 'Termitas', 'Mosquitos'],
        municipios: [
            { nombre: 'Querétaro' },
            { nombre: 'Corregidora' },
            { nombre: 'El Marqués' },
            { nombre: 'Juriquilla' },
            { nombre: 'San Juan del Río', sede: 'san-juan-del-rio' },
        ],
        ...SIN_DATOS,
    },
    {
        id: 'san-juan-del-rio',
        tipo: 'servicio',
        name: 'San Juan del Río, Qro.',
        shortName: 'San Juan del Río',
        state: 'Querétaro',
        coords: [-99.9962, 20.3897],
        range: '76800 - 76806',
        zipCodes: ['76800', '76802', '76804', '76806', '76807'],
        metaDescription:
            'Fumigación para casas, negocios y naves en San Juan del Río, Querétaro. Ratas, cucarachas, moscas y hormigas. Cotiza gratis por WhatsApp.',
        neighborhoods: ['Centro', 'Vista Hermosa', 'La Estancia', 'Banthí', 'San Isidro', 'Lomas de San Juan'],
        commonPests: ['Roedores', 'Cucarachas', 'Moscas', 'Hormigas', 'Arañas'],
        seasonalNote:
            'La cercanía con zonas agrícolas eleva la presión de roedores y moscas hacia naves y bodegas; implementamos estaciones de cebado perimetral inviolables.',
        ...SIN_DATOS,
    },

    // ── Guanajuato ──────────────────────────────────────────────────────────
    {
        id: 'san-miguel-de-allende',
        tipo: 'servicio',
        name: 'San Miguel de Allende, Gto.',
        shortName: 'San Miguel de Allende',
        state: 'Guanajuato',
        coords: [-100.7436, 20.9144],
        range: '37700 - 37795',
        zipCodes: ['37700', '37710', '37740', '37750', '37770'],
        metaDescription:
            'Fumigación para casas, hoteles y negocios en San Miguel de Allende, del Centro Histórico a Los Frailes. Alacranes y termitas. Cotiza por WhatsApp.',
        neighborhoods: ['Centro Histórico', 'San Antonio', 'Guadiana', 'Los Frailes', 'Zona Dorada', 'Balcones'],
        commonPests: ['Alacranes', 'Cucarachas', 'Termitas', 'Roedores', 'Arañas'],
        seasonalNote:
            'Las construcciones coloniales de piedra y madera son propensas a termitas y alacranes; usamos tratamientos de inyección discretos que respetan el patrimonio arquitectónico.',
        ...SIN_DATOS,
    },

    // ── Ciudad de México ────────────────────────────────────────────────────
    {
        id: 'cdmx',
        tipo: 'sede',
        name: 'Ciudad de México',
        shortName: 'Ciudad de México',
        tituloCiudad: 'CDMX',
        state: 'Ciudad de México',
        coords: [-99.13, 19.43],
        range: '01000 - 16999',
        metaDescription:
            'Fumigación para casas y negocios en la Ciudad de México. Cucarachas, ratas, chinches y hormigas. Cotiza gratis tu servicio por WhatsApp.',
        intro:
            'Fumigaciones para casas, departamentos y negocios en la Ciudad de México. Escríbenos por WhatsApp qué plaga tienes y te mandamos la cotización sin costo.',
        serviciosIntro:
            'Atendemos casas, departamentos, edificios, restaurantes, comercios, oficinas y bodegas en la Ciudad de México. En una ciudad tan densa, las plagas pasan de un departamento a otro por ductos, drenajes e instalaciones, así que primero ubicamos de dónde vienen y luego elegimos el tratamiento. Estos son los servicios de fumigación más solicitados:',
        plagas: [
            {
                nombre: 'Cucarachas',
                servicio: 'eliminacion-de-cucarachas',
                texto:
                    'En edificios y departamentos se mueven entre viviendas por ductos y tuberías, por eso vuelven aunque una sola casa esté limpia. Se trabaja con gel y cebos en cocinas, baños y registros, y conviene tratar las áreas comunes cuando el problema es de todo el edificio.',
            },
            {
                nombre: 'Ratas y ratones',
                servicio: 'control-de-roedores',
                texto:
                    'Viven en el drenaje, mercados, bodegas y azoteas, y entran a casas y negocios por huecos de apenas un par de centímetros. Usamos estaciones de cebo cerradas, ubicamos rutas y te decimos qué accesos sellar.',
            },
            {
                nombre: 'Chinches de cama',
                servicio: 'control-de-chinches',
                texto:
                    'Llegan en maletas, muebles usados y transporte público, y se esconden en colchones, cabeceras y enchufes. Pican de noche y dejan manchas pequeñas en las sábanas. Se tratan con calor y aplicación dirigida, recámara por recámara.',
            },
            {
                nombre: 'Hormigas',
                servicio: 'control-de-hormigas',
                texto:
                    'Entran a cocinas y despensas en busca de azúcar y agua, y aumentan con la temporada de lluvias. Con cebos de transferencia las obreras llevan el producto al nido y se elimina la colonia completa.',
            },
            {
                nombre: 'Mosquitos',
                servicio: 'control-de-mosquitos',
                texto:
                    'En temporada de lluvias se crían en azoteas, macetas, cubetas y coladeras tapadas. Eliminamos criaderos, aplicamos larvicida y nebulizamos patios, jardines y terrazas.',
            },
        ],
        commonPests: ['Cucarachas', 'Roedores', 'Chinches', 'Hormigas', 'Mosquitos'],
        ...SIN_DATOS,
    },

    // ── Ciudades con servicio (sin oficina) ─────────────────────────────────
    {
        id: 'sanluis',
        tipo: 'servicio',
        name: 'San Luis Potosí, S.L.P.',
        shortName: 'San Luis Potosí',
        state: 'San Luis Potosí',
        coords: [-100.97, 22.15],
        range: '78000 - 78499',
        metaDescription:
            'Damos servicio de fumigación a casas y negocios en San Luis Potosí y Soledad. Cucarachas, ratas, alacranes y termitas. Cotiza gratis por WhatsApp.',
        commonPests: ['Cucarachas', 'Roedores', 'Alacranes', 'Termitas'],
        ...SIN_DATOS,
    },
    {
        id: 'aguascalientes',
        tipo: 'servicio',
        name: 'Aguascalientes, Ags.',
        shortName: 'Aguascalientes',
        state: 'Aguascalientes',
        coords: [-102.29, 21.88],
        range: '20000 - 20999',
        metaDescription:
            'Damos servicio de fumigación a casas, oficinas y negocios en Aguascalientes. Cucarachas, ratas, chinches y arañas. Cotiza gratis por WhatsApp.',
        commonPests: ['Cucarachas', 'Roedores', 'Chinches', 'Arañas'],
        ...SIN_DATOS,
    },
    {
        id: 'leon',
        tipo: 'servicio',
        name: 'León, Gto.',
        shortName: 'León',
        state: 'Guanajuato',
        coords: [-101.68, 21.12],
        range: '37000 - 37699',
        metaDescription:
            'Damos servicio de fumigación a casas y negocios en León, Guanajuato. Cucarachas, ratas, chinches y hormigas. Cotiza gratis tu servicio por WhatsApp.',
        commonPests: ['Cucarachas', 'Roedores', 'Chinches', 'Hormigas'],
        ...SIN_DATOS,
    },
    {
        id: 'guanajuato',
        tipo: 'servicio',
        name: 'Guanajuato, Gto.',
        shortName: 'Guanajuato',
        state: 'Guanajuato',
        coords: [-101.2574, 21.019],
        metaDescription:
            'Damos servicio de fumigación a casas, hoteles y negocios en la ciudad de Guanajuato. Alacranes, cucarachas, ratas y termitas. Cotiza por WhatsApp.',
        commonPests: ['Alacranes', 'Cucarachas', 'Roedores', 'Termitas'],
        ...SIN_DATOS,
    },
    {
        id: 'lagos-de-moreno',
        tipo: 'servicio',
        name: 'Lagos de Moreno, Jal.',
        shortName: 'Lagos de Moreno',
        state: 'Jalisco',
        coords: [-101.93, 21.356],
        metaDescription:
            'Damos servicio de fumigación a casas, negocios y bodegas en Lagos de Moreno, Jalisco. Cucarachas, ratas, alacranes y hormigas. Cotiza por WhatsApp.',
        commonPests: ['Cucarachas', 'Roedores', 'Alacranes', 'Hormigas'],
        ...SIN_DATOS,
    },
    {
        id: 'puerto-vallarta',
        tipo: 'servicio',
        name: 'Puerto Vallarta, Jal.',
        shortName: 'Puerto Vallarta',
        state: 'Jalisco',
        coords: [-105.2253, 20.6534],
        metaDescription:
            'Damos servicio de fumigación a casas, hoteles y restaurantes en Puerto Vallarta. Cucarachas, mosquitos, termitas y ratas. Cotiza gratis por WhatsApp.',
        commonPests: ['Cucarachas', 'Mosquitos', 'Termitas', 'Roedores'],
        ...SIN_DATOS,
    },

    // ── Red de aliados (sin oficina ni técnicos de Big Cat) ─────────────────
    {
        id: 'hermosillo',
        tipo: 'aliados',
        name: 'Hermosillo, Son.',
        shortName: 'Hermosillo',
        state: 'Sonora',
        coords: [-110.96, 29.07],
        metaDescription:
            'Control de plagas en Hermosillo: te conectamos con un especialista certificado de nuestra red de aliados. Cucarachas, alacranes y ratas. Por WhatsApp.',
        commonPests: ['Cucarachas', 'Alacranes', 'Roedores', 'Mosquitos'],
        ...SIN_DATOS,
    },
    {
        id: 'tijuana',
        tipo: 'aliados',
        name: 'Tijuana, B.C.',
        shortName: 'Tijuana',
        state: 'Baja California',
        coords: [-117.03, 32.51],
        metaDescription:
            'Control de plagas en Tijuana: te conectamos con un especialista certificado de nuestra red de aliados. Cucarachas, ratas y chinches. Por WhatsApp.',
        commonPests: ['Cucarachas', 'Roedores', 'Arañas', 'Chinches'],
        ...SIN_DATOS,
    },
    {
        id: 'mexicali',
        tipo: 'aliados',
        name: 'Mexicali, B.C.',
        shortName: 'Mexicali',
        state: 'Baja California',
        coords: [-115.45, 32.62],
        metaDescription:
            'Control de plagas en Mexicali: te conectamos con un especialista certificado de nuestra red de aliados. Cucarachas, ratas y mosquitos. Por WhatsApp.',
        commonPests: ['Cucarachas', 'Roedores', 'Arañas', 'Mosquitos'],
        ...SIN_DATOS,
    },
    {
        id: 'juarez',
        tipo: 'aliados',
        name: 'Cd. Juárez, Chih.',
        shortName: 'Ciudad Juárez',
        state: 'Chihuahua',
        coords: [-106.48, 31.73],
        metaDescription:
            'Control de plagas en Ciudad Juárez: te conectamos con un especialista certificado de nuestra red de aliados. Cucarachas, ratas y chinches. Por WhatsApp.',
        commonPests: ['Cucarachas', 'Roedores', 'Chinches', 'Arañas'],
        ...SIN_DATOS,
    },
    {
        id: 'culiacan',
        tipo: 'aliados',
        name: 'Culiacán, Sin.',
        shortName: 'Culiacán',
        state: 'Sinaloa',
        coords: [-107.39, 24.8],
        metaDescription:
            'Control de plagas en Culiacán: te conectamos con un especialista certificado de nuestra red de aliados. Cucarachas, ratas y mosquitos. Por WhatsApp.',
        commonPests: ['Cucarachas', 'Roedores', 'Mosquitos', 'Alacranes'],
        ...SIN_DATOS,
    },
    {
        id: 'merida',
        tipo: 'aliados',
        name: 'Mérida, Yuc.',
        shortName: 'Mérida',
        state: 'Yucatán',
        coords: [-89.62, 20.96],
        metaDescription:
            'Control de plagas en Mérida: te conectamos con un especialista certificado de nuestra red de aliados. Cucarachas, mosquitos y termitas. Por WhatsApp.',
        commonPests: ['Cucarachas', 'Mosquitos', 'Termitas', 'Roedores'],
        ...SIN_DATOS,
    },
    {
        id: 'puebla',
        tipo: 'aliados',
        name: 'Puebla, Pue.',
        shortName: 'Puebla',
        state: 'Puebla',
        coords: [-98.2, 19.04],
        metaDescription:
            'Control de plagas en Puebla: te conectamos con un especialista certificado de nuestra red de aliados. Cucarachas, ratas y chinches. Por WhatsApp.',
        commonPests: ['Cucarachas', 'Roedores', 'Chinches', 'Hormigas'],
        ...SIN_DATOS,
    },
];
export const TIPOS: { tipo: TipoCiudad; titulo: string; descripcion: string }[] = [
    {
        tipo: 'sede',
        titulo: 'Sedes',
        descripcion: 'Oficinas de Big Cat con equipo propio.',
    },
    {
        tipo: 'servicio',
        titulo: 'Ciudades con servicio',
        descripcion: 'Damos servicio en estas ciudades aunque no tenemos oficina ahí.',
    },
    {
        tipo: 'aliados',
        titulo: 'Red de aliados',
        descripcion: 'Te conectamos con un especialista certificado de nuestra red de aliados.',
    },
];

export const ciudadesDeTipo = (tipo: TipoCiudad): Branch[] => BRANCHES.filter(c => c.tipo === tipo);

/** Ciudades de un tipo agrupadas por estado, en el orden de la lista. */
export function porEstado(ciudades: Branch[]): { estado: string; ciudades: Branch[] }[] {
    const estados = ciudades.reduce<string[]>((l, c) => (l.includes(c.state) ? l : [...l, c.state]), []);
    return estados.map(estado => ({ estado, ciudades: ciudades.filter(c => c.state === estado) }));
}

/** Estados con sede física, en orden (para la home). */
export const ESTADOS_CON_SEDE: string[] = porEstado(ciudadesDeTipo('sede')).map(g => g.estado);

export const buscarSede = (slug?: string): Branch | undefined =>
    BRANCHES.find(s => s.id === slug);

/** Los números salen siempre de la lista, nunca se escriben a mano. */
export const TOTAL_SEDES = ciudadesDeTipo('sede').length;
export const TOTAL_CIUDADES_SERVICIO = ciudadesDeTipo('servicio').length;
/** Ciudades sin sede (con servicio + aliados), redondeado hacia abajo a 5: "más de 15". */
export const MAS_DE_CIUDADES = Math.floor((BRANCHES.length - TOTAL_SEDES - 1) / 5) * 5;

/** Plaga (como aparece en `commonPests`) → slug de su página de servicio. */
export const SERVICIO_POR_PLAGA: Record<string, string> = {
    Cucarachas: 'eliminacion-de-cucarachas',
    Alacranes: 'control-de-alacranes',
    Roedores: 'control-de-roedores',
    'Ratas y ratones': 'control-de-roedores',
    Hormigas: 'control-de-hormigas',
    Termitas: 'control-de-termitas',
    Mosquitos: 'control-de-mosquitos',
    Arañas: 'control-de-aranas',
    Chinches: 'control-de-chinches',
    'Chinches de cama': 'control-de-chinches',
    Pulgas: 'control-de-pulgas',
    Avispas: 'control-de-avispas',
    Garrapatas: 'control-de-garrapatas',
};
