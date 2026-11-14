/**
 * EL CONTENIDO DE CADA PÁGINA DE SERVICIO — /servicios/{slug}/
 * ════════════════════════════════════════════════════════════════════════════
 *
 * Título, H1, description, la respuesta de la primera frase, señales,
 * temporada, lugares y preguntas frecuentes de cada servicio. La ficha corta
 * (nombre, imagen, ícono) sigue en PESTS_LIST de constants.ts; las dos listas
 * se unen por `slug`.
 *
 * CÓMO ESTÁ ESCRITO
 *
 * Cada bloque responde en la primera frase y después amplía. Es lo que Google
 * muestra como fragmento y lo que citan los asistentes de IA: una respuesta
 * completa que se entiende sola, sin leer el resto de la página.
 *
 * LO QUE NO DICE, A PROPÓSITO
 *
 * Nada de precios, garantías, años de experiencia, certificaciones ni tiempos
 * de respuesta: son datos del negocio que el dueño todavía no confirmó. Lo que
 * hay acá es información de la plaga y descripción del método de trabajo que
 * ya estaba publicada en el sitio.
 *
 * ESTE ARCHIVO NO IMPORTA NADA
 *
 * Igual que sedes.ts, lo leen también los scripts de Node (sitemap, llms.txt).
 */

export interface PreguntaServicio {
    q: string;
    a: string;
}

export interface ContenidoServicio {
    /** <title>, 60 caracteres o menos. */
    titulo: string;
    /** H1 de la página. */
    h1: string;
    /** Texto del enlace desde una ciudad: "Fumigación de cucarachas" + " en Monterrey". */
    ancla: string;
    /** Meta description, 155 caracteres o menos, sin precios. */
    metaDescription: string;
    /** Primera frase de la página: qué es el servicio y cómo se resuelve. */
    respuesta: string;
    senalesTitulo: string;
    senales: string[];
    temporadaTitulo: string;
    temporada: string;
    lugaresTitulo: string;
    lugares: string;
    faqs: PreguntaServicio[];
    /** Slugs de otros servicios que se enlazan al final. */
    relacionados: string[];
}

export const SERVICIOS: Record<string, ContenidoServicio> = {
    'control-de-plagas-comercial': {
        titulo: 'Control de plagas para negocios y restaurantes | Big Cat',
        h1: 'Control de plagas para negocios y restaurantes',
        ancla: 'Control de plagas para negocios',
        metaDescription:
            'Control de plagas para restaurantes, comercios, oficinas y bodegas: inspección, monitoreo y servicio periódico con registro. Cotiza por WhatsApp.',
        respuesta:
            'El control de plagas para negocios es un servicio periódico: se inspecciona el local, se colocan puntos de monitoreo, se trata solo donde hace falta y se deja registro de cada visita. Así se trabaja en restaurantes, comercios, oficinas y bodegas, donde una plaga no puede esperar a que alguien la vea.',
        senalesTitulo: 'Señales de que tu negocio necesita control de plagas',
        senales: [
            'Excremento de roedor o empaques roídos en bodega, alacena o cuarto de basura.',
            'Cucarachas que aparecen de día en cocina, barra o baños: suele indicar una población grande.',
            'Moscas constantes cerca de contenedores, coladeras o área de lavado.',
            'Reclamos de clientes o del personal por insectos en el área de servicio.',
            'Una visita de verificación sanitaria próxima y ningún registro de control de plagas.',
        ],
        temporadaTitulo: '¿Cada cuánto se fumiga un negocio?',
        temporada:
            'En un negocio el control de plagas se hace todo el año y no por temporada. La frecuencia depende del giro: una cocina profesional o una bodega de alimentos suele necesitar visitas mensuales, y una oficina o un comercio sin alimentos puede espaciarlas más. En los meses de calor y de lluvias la presión de cucarachas, moscas y roedores aumenta, y conviene no saltarse visitas.',
        lugaresTitulo: '¿Qué tipo de negocios atendemos?',
        lugares:
            'Restaurantes, cafeterías, cocinas industriales, panaderías, tiendas, supermercados, oficinas, hoteles, escuelas, consultorios y bodegas. Las plantas industriales y las empresas grandes de cualquier parte de México las atiende PCP Internacional, la marca industrial de nuestro grupo.',
        faqs: [
            {
                q: '¿Qué incluye un servicio de control de plagas para un negocio?',
                a: 'Incluye la inspección del local, la colocación de estaciones y puntos de monitoreo, el tratamiento de las áreas con actividad y un registro de lo que se hizo en cada visita. El detalle se define después de ver el lugar y el giro.',
            },
            {
                q: '¿Hay que cerrar el restaurante para fumigar?',
                a: 'Normalmente no. El gel y los cebos se aplican en grietas y equipos sin interrumpir la operación. Las aplicaciones por aspersión o nebulización se programan fuera del horario de servicio, y el técnico te indica cuánto tiempo dejar el área desocupada.',
            },
            {
                q: '¿Cada cuánto debe fumigarse un restaurante?',
                a: 'Lo habitual en cocinas profesionales es un servicio mensual, con revisiones adicionales si aparece actividad entre visitas. La frecuencia final depende del tamaño del local, del tipo de alimentos y de lo que encuentre la inspección.',
            },
            {
                q: '¿Atienden plantas industriales o cadenas con varias sucursales?',
                a: 'Las empresas grandes e industrias las atiende PCP Internacional, la marca industrial de nuestro grupo, en cualquier parte de México. Big Cat atiende negocios, restaurantes, comercios y oficinas.',
            },
        ],
        relacionados: ['eliminacion-de-cucarachas', 'control-de-roedores', 'control-de-aves-y-palomas'],
    },

    'eliminacion-de-cucarachas': {
        titulo: 'Fumigación de cucarachas: control y eliminación | Big Cat',
        h1: 'Fumigación y control de cucarachas',
        ancla: 'Fumigación de cucarachas',
        metaDescription:
            'Fumigación de cucarachas para casas, departamentos y restaurantes. Gel y cebos en cocina y baños, y aspersión donde hace falta. Cotiza por WhatsApp.',
        respuesta:
            'Las cucarachas se eliminan con gel y cebos colocados en sus escondites y puntos de paso, y con aspersión residual solo donde la infestación lo pide. El gel no tiene olor y no obliga a desocupar la casa, por eso es el método que más se usa en cocinas, baños y negocios de comida.',
        senalesTitulo: 'Señales de que tienes cucarachas',
        senales: [
            'Ves cucarachas de día: son nocturnas, así que verlas con luz suele indicar que ya son muchas.',
            'Puntos negros parecidos a pimienta o café molido en cajones, bisagras y esquinas.',
            'Cápsulas de huevos (ootecas) cafés detrás del refrigerador, la estufa o el microondas.',
            'Olor a humedad rancia en alacenas y debajo del fregadero.',
            'Cucarachas grandes que salen de coladeras y registros, sobre todo después de llover.',
        ],
        temporadaTitulo: '¿En qué temporada hay más cucarachas?',
        temporada:
            'Hay cucarachas todo el año, pero con el calor se reproducen más rápido y por eso las infestaciones crecen de mayo a octubre. En temporada de lluvias la cucaracha americana, la grande, sube del drenaje a las casas por coladeras y registros. La alemana, la chica de cocina, vive dentro de la casa y no depende del clima.',
        lugaresTitulo: '¿Dónde se esconden las cucarachas?',
        lugares:
            'En casas y departamentos: detrás del refrigerador y la estufa, dentro de alacenas, bajo el fregadero y en baños con fugas. En edificios pasan de un departamento a otro por ductos y tuberías. En restaurantes y cocinas profesionales viven en motores de equipos, mesas de trabajo, trampas de grasa y cuartos de basura.',
        faqs: [
            {
                q: '¿Cómo se eliminan las cucarachas de una casa?',
                a: 'Con gel y cebos aplicados en grietas, bisagras, motores de electrodomésticos y demás puntos de paso. Las cucarachas comen el cebo, regresan al nido y lo transmiten a las demás. Donde hay mucha actividad se complementa con aspersión residual en el perímetro y en drenajes.',
            },
            {
                q: '¿Cuánto tarda en hacer efecto la fumigación de cucarachas?',
                a: 'Los primeros resultados se ven en pocos días, y el control de la colonia completa puede tomar de 3 a 7 días porque el cebo actúa por transferencia entre las cucarachas. Si la infestación es grande puede hacer falta una segunda visita.',
            },
            {
                q: '¿Tengo que salir de mi casa cuando fumigan cucarachas?',
                a: 'Con gel y cebos no hace falta salir ni vaciar la cocina. Si se aplica aspersión o nebulización, el técnico te indica cuánto tiempo mantener el área desocupada, normalmente de 2 a 4 horas.',
            },
            {
                q: '¿Por qué regresan las cucarachas después de fumigar?',
                a: 'Regresan cuando sigue habiendo agua, comida y entradas: fugas bajo el fregadero, coladeras sin rejilla, basura destapada o un departamento vecino infestado. Por eso el servicio incluye decirte qué corregir, además de la aplicación.',
            },
        ],
        relacionados: ['control-de-hormigas', 'control-de-roedores', 'control-de-plagas-comercial'],
    },

    'control-de-hormigas': {
        titulo: 'Control de hormigas en casas y negocios | Big Cat',
        h1: 'Fumigación y control de hormigas',
        ancla: 'Control de hormigas',
        metaDescription:
            'Control de hormigas en cocina, despensa y jardín. Cebos que las obreras llevan al nido para eliminar la colonia completa. Cotiza por WhatsApp.',
        respuesta:
            'Las hormigas se eliminan con cebos de transferencia: las obreras los llevan al nido y con eso muere la colonia completa, incluida la reina. Rociarlas con aerosol solo mata a las que se ven y puede hacer que la colonia se divida en varias.',
        senalesTitulo: 'Señales de una colonia de hormigas en casa',
        senales: [
            'Filas de hormigas que van siempre por el mismo camino hacia la cocina o la despensa.',
            'Montoncitos de tierra fina en juntas del piso, banquetas o macetas.',
            'Hormigas dentro de contactos, apagadores o aparatos electrónicos.',
            'Hormigas con alas dentro de casa: la colonia está madura y busca formar otras.',
        ],
        temporadaTitulo: '¿En qué temporada salen más hormigas?',
        temporada:
            'Las hormigas están más activas en primavera y verano, y entran a las casas sobre todo en temporada de lluvias, cuando el agua inunda sus nidos y buscan un lugar seco. En las ciudades de clima cálido hay actividad casi todo el año.',
        lugaresTitulo: '¿Por dónde entran las hormigas?',
        lugares:
            'Entran por grietas en muros y pisos, marcos de puertas y ventanas, y pasos de tubería. En casas con jardín los hormigueros suelen estar afuera y las obreras entran por comida; en departamentos pueden anidar dentro de los muros. En negocios aparecen en barras, bodegas de alimentos y áreas de bebidas.',
        faqs: [
            {
                q: '¿Cómo se acaba con las hormigas de la cocina?',
                a: 'Con cebos en gel colocados sobre sus caminos. Las obreras llevan el cebo al nido y lo comparten con la reina y las larvas, que es lo que acaba con la colonia. Mientras actúa el cebo no conviene rociarlas ni limpiar el camino con cloro.',
            },
            {
                q: '¿Por qué no funciona el insecticida en aerosol contra las hormigas?',
                a: 'Porque solo mata a las obreras que están a la vista, que son una parte pequeña de la colonia. La reina sigue poniendo huevos y algunas especies responden dividiéndose en varios nidos, con lo que el problema crece.',
            },
            {
                q: '¿Cuánto tarda en desaparecer una colonia de hormigas?',
                a: 'Con cebos de transferencia la actividad baja en unos días y la colonia se elimina en una a dos semanas, según su tamaño y la especie. Es normal ver más hormigas el primer día: están llevando el cebo al nido.',
            },
            {
                q: '¿Las hormigas dañan la casa?',
                a: 'La mayoría solo contamina alimentos, pero algunas especies anidan en instalaciones eléctricas y pueden dañar contactos y aparatos. Las hormigas carpinteras hacen galerías en madera húmeda.',
            },
        ],
        relacionados: ['eliminacion-de-cucarachas', 'control-de-termitas', 'control-de-aranas'],
    },

    'control-de-termitas': {
        titulo: 'Control de termitas: fumigación y tratamiento | Big Cat',
        h1: 'Fumigación y control de termitas',
        ancla: 'Control de termitas',
        metaDescription:
            'Control de termitas en casas y muebles: inyección en la madera dañada y barrera en el suelo. Aprende a reconocer las señales y cotiza por WhatsApp.',
        respuesta:
            'Las termitas se tratan con inyección de termiticida en la madera afectada y con una barrera en el suelo que corta el paso de la colonia hacia la casa. Como comen la madera por dentro, lo primero es una inspección para saber qué tipo de termita es y hasta dónde llegó el daño.',
        senalesTitulo: 'Señales de que tienes termitas',
        senales: [
            'Túneles de lodo del grosor de un lápiz en muros, cimientos o esquinas.',
            'Madera que suena hueca al golpearla o que se hunde al presionarla.',
            'Alas sueltas cerca de ventanas y lámparas después de un enjambre.',
            'Polvo fino parecido al aserrín debajo de muebles, marcos o vigas.',
            'Puertas y ventanas que se atoran, o pintura abombada sin humedad aparente.',
        ],
        temporadaTitulo: '¿En qué temporada aparecen las termitas?',
        temporada:
            'Las termitas trabajan todo el año, pero se dejan ver al inicio de la temporada de lluvias, cuando salen los enjambres de termitas con alas a formar colonias nuevas. Ver alas sueltas o insectos alados dentro de casa en esas semanas es la señal más clara para pedir una revisión.',
        lugaresTitulo: '¿Dónde atacan las termitas?',
        lugares:
            'Las termitas subterráneas viven en el suelo y suben por los cimientos hacia marcos, zoclos, closets y duelas. Las de madera seca se instalan directamente en muebles, vigas y puertas. Las casas con madera en contacto con el suelo, con humedad en los cimientos o con vigas y techos de madera son las más expuestas.',
        faqs: [
            {
                q: '¿Cómo sé si tengo termitas o polilla?',
                a: 'Las termitas dejan túneles de lodo en los muros o un polvo granulado y uniforme bajo la madera, y la madera queda hueca por dentro. La carcoma o polilla de la madera deja agujeros redondos pequeños en la superficie y un polvo muy fino, como harina.',
            },
            {
                q: '¿Cómo se eliminan las termitas?',
                a: 'Depende del tipo. Para las subterráneas se aplica una barrera de termiticida en el suelo alrededor y debajo de la construcción; para las de madera seca se inyecta el producto en la madera afectada. Muchas casas necesitan las dos cosas.',
            },
            {
                q: '¿Se puede prevenir el daño de termitas?',
                a: 'Sí. Ayuda mantener secos los cimientos, evitar madera en contacto directo con el suelo, no acumular leña o cartón contra los muros y revisar la madera de la casa una vez al año. En obra nueva se puede tratar el suelo antes de construir.',
            },
            {
                q: '¿Las termitas pueden dañar la estructura de la casa?',
                a: 'Sí, cuando atacan vigas, techos o marcos de madera que cargan peso. El daño avanza despacio y sin verse, por eso conviene revisar en cuanto aparece una señal.',
            },
        ],
        relacionados: ['control-de-hormigas', 'eliminacion-de-cucarachas', 'control-de-roedores'],
    },

    'control-de-chinches': {
        titulo: 'Fumigación de chinches de cama | Big Cat',
        h1: 'Fumigación y control de chinches de cama',
        ancla: 'Fumigación de chinches',
        metaDescription:
            'Fumigación de chinches de cama en casas, departamentos y hoteles: tratamiento con calor y aplicación dirigida, recámara por recámara. Cotiza por WhatsApp.',
        respuesta:
            'Las chinches de cama se eliminan combinando calor y aplicación dirigida en colchones, bases, cabeceras y grietas, recámara por recámara. Los insecticidas de aerosol no llegan a los huevos y dispersan a las chinches a otros cuartos, por eso casi nunca resuelven una infestación.',
        senalesTitulo: 'Señales de que tienes chinches de cama',
        senales: [
            'Ronchas en línea o en grupo al despertar, en brazos, cuello, espalda o piernas.',
            'Manchitas oscuras, como puntos de tinta, en costuras del colchón y en la base de la cama.',
            'Pequeñas manchas de sangre en sábanas y fundas.',
            'Mudas de piel translúcidas y huevos blancos en costuras, cabecera y burós.',
            'Olor dulzón en la recámara cuando la infestación es grande.',
        ],
        temporadaTitulo: '¿En qué temporada hay más chinches?',
        temporada:
            'Las chinches no tienen temporada: viven dentro de casa y se reproducen todo el año. Los casos aumentan después de las vacaciones de verano, de diciembre y de Semana Santa, porque llegan en maletas, ropa y muebles usados.',
        lugaresTitulo: '¿Dónde se esconden las chinches?',
        lugares:
            'A menos de dos metros de donde duerme una persona: costuras del colchón, base de la cama, cabecera, burós, zoclos, contactos y detrás de cuadros. Son frecuentes en departamentos, hoteles, hostales, casas de huéspedes y residencias de estudiantes, donde pasan de un cuarto a otro.',
        faqs: [
            {
                q: '¿Cómo saber si son piquetes de chinche?',
                a: 'Los piquetes de chinche suelen aparecer en línea o en grupo, en la piel que queda descubierta al dormir, y dan comezón por la mañana. Para confirmarlo hay que revisar las costuras del colchón y la base de la cama en busca de manchas oscuras, mudas o chinches vivas.',
            },
            {
                q: '¿Tengo que tirar el colchón si tiene chinches?',
                a: 'En la mayoría de los casos no. El colchón y la base se tratan, y después se recomienda una funda cerrada. Tirarlo sin tratar la recámara no resuelve nada, porque las chinches también viven en la cabecera, los muebles y las grietas.',
            },
            {
                q: '¿Cuántas visitas hacen falta para eliminar las chinches?',
                a: 'Depende de cuántos cuartos estén afectados y de qué tan avanzada esté la infestación. Los huevos resisten más que los adultos, así que es común programar una revisión de seguimiento para confirmar que no hubo rebrote.',
            },
            {
                q: '¿Cómo llegan las chinches a una casa limpia?',
                a: 'Llegan en maletas, ropa, mochilas, muebles y colchones usados; no tienen relación con la limpieza. Por eso son comunes después de un viaje o de estrenar un mueble de segunda mano.',
            },
        ],
        relacionados: ['control-de-pulgas', 'control-de-garrapatas', 'eliminacion-de-cucarachas'],
    },

    'control-de-roedores': {
        titulo: 'Control de ratas y ratones: desratización | Big Cat',
        h1: 'Control de ratas y ratones',
        ancla: 'Control de ratas y ratones',
        metaDescription:
            'Control de ratas y ratones en casas, negocios y bodegas: estaciones de cebo cerradas, trampas y sellado de accesos. Cotiza tu servicio por WhatsApp.',
        respuesta:
            'Las ratas y los ratones se controlan con estaciones de cebo cerradas y trampas colocadas en sus rutas, y sellando los huecos por donde entran. Las estaciones van con llave, así que el cebo no queda al alcance de niños ni mascotas.',
        senalesTitulo: 'Señales de que hay ratas o ratones',
        senales: [
            'Excremento oscuro en forma de grano de arroz en alacenas, cajones o detrás de muebles.',
            'Empaques de comida, cables o madera roídos.',
            'Ruidos de rasguños o carreras en techos, plafones y muros, sobre todo de noche.',
            'Manchas grasosas a lo largo de zoclos y tuberías: es el rastro de sus rutas.',
            'Nidos de papel, tela o cartón deshebrado en bodegas y rincones.',
        ],
        temporadaTitulo: '¿En qué temporada entran más ratas y ratones?',
        temporada:
            'Hay roedores todo el año, pero entran más a casas y negocios en otoño e invierno, cuando buscan calor y refugio, y después de lluvias fuertes que inundan el drenaje y sus madrigueras. Las obras y demoliciones cercanas también los desplazan hacia los inmuebles vecinos.',
        lugaresTitulo: '¿Dónde aparecen ratas y ratones?',
        lugares:
            'En casas: techos, plafones, cocheras, cuartos de servicio y patios con cosas acumuladas. En negocios: bodegas, cuartos de basura, cocinas y áreas de carga. Un ratón pasa por un hueco de poco más de medio centímetro y una rata por uno de unos dos centímetros, así que cualquier paso de tubería sin sellar es una entrada.',
        faqs: [
            {
                q: '¿Cómo se eliminan las ratas de una casa?',
                a: 'Se colocan estaciones de cebo cerradas y trampas en los lugares por donde pasan, se revisan en visitas de seguimiento y se sellan los accesos. Sin sellar las entradas, llegan otras a ocupar el lugar.',
            },
            {
                q: '¿El veneno para ratas es peligroso para mis mascotas?',
                a: 'El cebo se coloca dentro de estaciones cerradas con llave, fijas y fuera del alcance de niños y mascotas. Avísale al técnico si tienes perros o gatos para que elija dónde ponerlas y qué método conviene.',
            },
            {
                q: '¿Cuál es la diferencia entre una rata y un ratón?',
                a: 'El ratón adulto mide de 7 a 10 cm de cuerpo y deja excremento del tamaño de un grano de arroz. La rata mide más del doble y su excremento es del tamaño de un frijol. Importa distinguirlos porque las trampas, el cebo y los lugares de colocación cambian.',
            },
            {
                q: '¿Qué enfermedades transmiten las ratas?',
                a: 'Pueden transmitir leptospirosis y salmonelosis por medio de la orina y el excremento, y contaminan alimentos y superficies. También roen cables, lo que puede provocar cortos circuitos.',
            },
        ],
        relacionados: ['eliminacion-de-cucarachas', 'control-de-plagas-comercial', 'control-de-aves-y-palomas'],
    },

    'control-de-pulgas': {
        titulo: 'Fumigación de pulgas en casa | Big Cat',
        h1: 'Fumigación y control de pulgas',
        ancla: 'Fumigación de pulgas',
        metaDescription:
            'Fumigación de pulgas en casa: tratamiento de pisos, alfombras, muebles y patio para cortar el ciclo de huevos y larvas. Cotiza por WhatsApp.',
        respuesta:
            'Las pulgas se eliminan tratando al mismo tiempo la casa y a la mascota: en la casa se aplica un adulticida junto con un regulador de crecimiento que impide que huevos y larvas lleguen a adultos. Si solo se trata al perro o al gato, las pulgas que están en pisos, alfombras y patio lo vuelven a infestar.',
        senalesTitulo: 'Señales de que tienes pulgas en casa',
        senales: [
            'Tu mascota se rasca o se muerde más de lo normal, sobre todo en lomo y base de la cola.',
            'Piquetes pequeños y rojos en tobillos y piernas.',
            'Puntitos negros en la cama de la mascota que se ponen rojizos al mojarlos.',
            'Pulgas que brincan sobre calcetines claros al caminar por alfombras o por el patio.',
        ],
        temporadaTitulo: '¿En qué temporada hay más pulgas?',
        temporada:
            'Las pulgas se multiplican con calor y humedad, así que los brotes más fuertes se dan en primavera y verano. Dentro de casa pueden reproducirse todo el año, y los capullos aguantan meses esperando a que pase una persona o un animal.',
        lugaresTitulo: '¿Dónde viven las pulgas?',
        lugares:
            'Solo una parte pequeña de las pulgas está sobre la mascota. El resto son huevos, larvas y capullos en alfombras, juntas del piso, sillones, camas de mascotas, grietas y zonas sombreadas del patio. Por eso también aparecen en casas sin mascotas, cuando hubo animales antes o entran gatos o tlacuaches al patio.',
        faqs: [
            {
                q: '¿Cómo se eliminan las pulgas de una casa?',
                a: 'Se tratan pisos, alfombras, muebles, grietas y patio con un producto que mata a las adultas y un regulador de crecimiento que corta el ciclo de huevos y larvas. El mismo día hay que tratar a las mascotas con el producto que indique el veterinario.',
            },
            {
                q: '¿Por qué sigo viendo pulgas después de fumigar?',
                a: 'Porque los capullos resisten la aplicación y siguen naciendo pulgas durante unas dos semanas. Al salir tocan el producto residual y mueren. Aspirar todos los días en ese periodo acelera el resultado.',
            },
            {
                q: '¿Puedo tener pulgas si no tengo mascotas?',
                a: 'Sí. Pueden quedar de inquilinos anteriores con mascotas, o llegar con gatos callejeros, tlacuaches o ratas que pasan por el patio o la azotea. Los capullos esperan meses hasta sentir movimiento.',
            },
            {
                q: '¿Qué tengo que hacer antes de que fumiguen contra pulgas?',
                a: 'Aspirar pisos, alfombras y sillones, lavar con agua caliente la ropa de cama y la cama de la mascota, y despejar el piso de juguetes y objetos para que el producto llegue a todas las superficies.',
            },
        ],
        relacionados: ['control-de-garrapatas', 'control-de-chinches', 'control-de-roedores'],
    },

    'control-de-avispas': {
        titulo: 'Retiro de panales y control de avispas | Big Cat',
        h1: 'Control de avispas y retiro de panales',
        ancla: 'Control de avispas',
        metaDescription:
            'Retiro de panales de avispas en aleros, techos, árboles y muros, con equipo de protección. No lo intentes por tu cuenta. Cotiza por WhatsApp.',
        respuesta:
            'Un panal de avispas se retira con traje de protección: primero se neutraliza la colonia con un producto de acción rápida y después se quita el panal y se trata el punto de anclaje para que no lo reconstruyan. Hacerlo sin equipo es peligroso, porque las avispas defienden el nido en grupo y cada una puede picar varias veces.',
        senalesTitulo: 'Señales de un panal de avispas',
        senales: [
            'Avispas que entran y salen siempre del mismo punto: un alero, una grieta o una caja de persiana.',
            'Un panal gris, con textura de papel, colgado de techos, cornisas, ramas o lámparas.',
            'Zumbido dentro de un muro, un plafón o un tronco hueco.',
            'Muchas avispas alrededor de botes de basura, fruta caída o bebidas dulces.',
        ],
        temporadaTitulo: '¿En qué temporada hay más avispas?',
        temporada:
            'Las avispas empiezan a construir sus panales en primavera, y las colonias llegan a su tamaño máximo a finales del verano, que es cuando hay más avispas y más picaduras. Un panal pequeño visto en primavera es mucho más fácil de retirar que el mismo panal en agosto.',
        lugaresTitulo: '¿Dónde hacen sus panales las avispas?',
        lugares:
            'En lugares altos y protegidos: aleros, cornisas, marcos de ventanas, techumbres, palapas, árboles, lámparas exteriores y juegos infantiles. Algunas especies anidan dentro de muros huecos, plafones y medidores. En negocios son frecuentes en anuncios, estructuras metálicas y terrazas.',
        faqs: [
            {
                q: '¿Qué hago si encuentro un panal de avispas en mi casa?',
                a: 'No lo golpees, no lo mojes y no lo quemes. Aleja a niños y mascotas de la zona, cierra las ventanas cercanas y pide que lo retiren con equipo de protección.',
            },
            {
                q: '¿Puedo quitar un panal de avispas yo mismo?',
                a: 'No es recomendable. Al sentir el nido amenazado las avispas atacan en grupo y pueden picar varias veces, y una caída desde la escalera agrava el accidente. Para una persona alérgica, las picaduras pueden ser una urgencia médica.',
            },
            {
                q: '¿Retiran panales de abejas?',
                a: 'El servicio de esta página es para avispas. Las abejas son polinizadores y lo indicado es reubicarlas; escríbenos por WhatsApp con una foto y te decimos si es avispa o abeja y qué procede.',
            },
            {
                q: '¿Las avispas vuelven a hacer el panal en el mismo lugar?',
                a: 'Pueden volver si el sitio sigue siendo cómodo para ellas. Después de retirar el panal se trata el punto de anclaje y se recomienda sellar huecos en aleros, muros y cajas de persiana.',
            },
        ],
        relacionados: ['control-de-aranas', 'control-de-mosquitos', 'control-de-aves-y-palomas'],
    },

    'control-de-garrapatas': {
        titulo: 'Fumigación de garrapatas en casa y patio | Big Cat',
        h1: 'Fumigación y control de garrapatas',
        ancla: 'Fumigación de garrapatas',
        metaDescription:
            'Fumigación de garrapatas en patios, jardines, muros y áreas de mascotas. Tratamiento de grietas y bardas donde se esconden. Cotiza por WhatsApp.',
        respuesta:
            'Las garrapatas se eliminan fumigando el patio, las bardas y las grietas donde se esconden, además de tratar a la mascota. La garrapata café del perro pasa la mayor parte de su vida fuera del animal, subida en muros y rendijas, así que bañar al perro no acaba con el problema.',
        senalesTitulo: 'Señales de que hay garrapatas en casa',
        senales: [
            'Garrapatas en orejas, cuello, axilas o entre los dedos de tu perro.',
            'Garrapatas que suben por muros, bardas y marcos de puertas.',
            'Grupos de garrapatas muy pequeñas (larvas) en rincones del patio o en la casa del perro.',
            'Garrapatas en la ropa o en la piel después de estar en el patio o el jardín.',
        ],
        temporadaTitulo: '¿En qué temporada hay más garrapatas?',
        temporada:
            'Las garrapatas son más activas en los meses de calor, de primavera a otoño. En el norte de México, donde la garrapata café del perro transmite la fiebre manchada (rickettsiosis), puede haber actividad casi todo el año dentro de los patios y las casas.',
        lugaresTitulo: '¿Dónde se esconden las garrapatas?',
        lugares:
            'En grietas de bardas y muros, juntas del piso, marcos de puertas, techos de lámina, casas de perro y zonas de pasto alto o maleza. Después de alimentarse se sueltan del perro y trepan a poner huevos en rendijas altas; una sola hembra pone miles.',
        faqs: [
            {
                q: '¿Cómo se eliminan las garrapatas del patio?',
                a: 'Se aplica un producto residual por aspersión en pisos, bardas, grietas, techos bajos y áreas de descanso de la mascota, que es donde están los huevos y las larvas. El mismo día hay que tratar al perro con el producto que indique el veterinario.',
            },
            {
                q: '¿Las garrapatas son peligrosas para las personas?',
                a: 'Sí. En México la garrapata café del perro puede transmitir la rickettsiosis o fiebre manchada, una enfermedad grave. Si después de una picadura hay fiebre, dolor de cabeza o manchas en la piel, hay que acudir de inmediato a un centro de salud.',
            },
            {
                q: '¿Por qué mi perro vuelve a tener garrapatas?',
                a: 'Porque la mayor parte de las garrapatas está en el patio y no sobre el perro. Si solo se trata al animal, las que están en muros y grietas lo vuelven a infestar en días. Hay que tratar las dos cosas a la vez.',
            },
            {
                q: '¿Cuántas fumigaciones se necesitan contra las garrapatas?',
                a: 'Lo habitual es más de una aplicación, porque los huevos siguen naciendo durante varias semanas. El técnico define el número de visitas según el tamaño del patio y el nivel de infestación.',
            },
        ],
        relacionados: ['control-de-pulgas', 'control-de-chinches', 'control-de-aranas'],
    },

    'control-de-mosquitos': {
        titulo: 'Control de mosquitos: fumigación de patios | Big Cat',
        h1: 'Fumigación y control de mosquitos',
        ancla: 'Control de mosquitos',
        metaDescription:
            'Control de mosquitos en patios, jardines y terrazas: eliminación de criaderos, larvicida y nebulización. Reduce el riesgo de dengue. Cotiza por WhatsApp.',
        respuesta:
            'Los mosquitos se controlan en tres pasos: eliminar el agua estancada donde se crían, aplicar larvicida en el agua que no se puede quitar y nebulizar patios, jardines y terrazas para bajar la población de adultos. La nebulización sola dura poco si los criaderos siguen ahí.',
        senalesTitulo: 'Señales de que hay criaderos de mosquitos cerca',
        senales: [
            'Te pican de día dentro de casa: es el hábito del Aedes aegypti, el mosquito del dengue.',
            'Larvas que se mueven a sacudidas ("maromeros") en cubetas, floreros o platos de macetas.',
            'Nubes de mosquitos al atardecer en el jardín, la terraza o cerca de la alberca.',
            'Mosquitos que salen al mover plantas, cortinas o ropa colgada.',
        ],
        temporadaTitulo: '¿En qué temporada hay más mosquitos?',
        temporada:
            'La temporada de mosquitos coincide con las lluvias, de junio a octubre o noviembre en la mayor parte de México, y es también cuando suben los casos de dengue. En zonas cálidas y húmedas, como la costa del Golfo, hay mosquitos casi todo el año.',
        lugaresTitulo: '¿Dónde se crían los mosquitos?',
        lugares:
            'En cualquier recipiente con agua quieta: cubetas, llantas, platos de macetas, bebederos, canaletas tapadas, tinacos y cisternas sin tapa, lonas y juguetes en el patio. Les basta el agua de una corcholata. Fuera de casa: fuentes sin mantenimiento, albercas sin cloro, lotes baldíos y coladeras.',
        faqs: [
            {
                q: '¿Cuánto dura una fumigación contra mosquitos?',
                a: 'La nebulización baja de inmediato la población de mosquitos adultos, pero su efecto es de corta duración si quedan criaderos. Por eso se combina con eliminación de agua estancada y larvicida, y en temporada de lluvias se programa de forma periódica.',
            },
            {
                q: '¿La fumigación previene el dengue?',
                a: 'Reduce el riesgo al bajar la cantidad de mosquitos Aedes aegypti, que transmite dengue, zika y chikungunya, pero no lo elimina. La medida más efectiva sigue siendo no dejar agua estancada: lavar, tapar, voltear y tirar recipientes.',
            },
            {
                q: '¿Se puede fumigar el patio antes de un evento?',
                a: 'Sí. La nebulización de jardines y terrazas se programa antes del evento para que el área esté lista cuando lleguen los invitados. Escríbenos con la fecha y el tamaño aproximado del lugar.',
            },
            {
                q: '¿Qué puedo hacer en casa para tener menos mosquitos?',
                a: 'Vaciar o voltear todo lo que junte agua, tapar tinacos y cisternas, limpiar canaletas, cambiar el agua de floreros y bebederos cada tercer día y poner mosquiteros en puertas y ventanas.',
            },
        ],
        relacionados: ['control-de-avispas', 'control-de-garrapatas', 'eliminacion-de-cucarachas'],
    },

    'control-de-alacranes': {
        titulo: 'Control de alacranes: fumigación para casas | Big Cat',
        h1: 'Fumigación y control de alacranes',
        ancla: 'Control de alacranes',
        metaDescription:
            'Fumigación de alacranes para casas y negocios: barrera residual en el perímetro, tratamiento de grietas y sellado de accesos. Cotiza por WhatsApp.',
        respuesta:
            'Los alacranes se controlan con una barrera residual alrededor de la casa, el tratamiento de grietas, registros y coladeras, y el sellado de los accesos por donde entran. También hay que reducir los insectos de los que se alimentan, porque un patio con cucarachas y grillos es un patio con alacranes.',
        senalesTitulo: 'Señales de que hay alacranes en tu casa',
        senales: [
            'Encuentras alacranes vivos o muertos en planta baja, baños, cochera o cuarto de lavado.',
            'Aparecen de noche en paredes y techos, sobre todo después de llover o en noches calurosas.',
            'Hay escombro, leña, tabiques o macetas amontonadas contra los muros de la casa.',
            'Tu casa colinda con un cerro, un lote baldío, una obra o un arroyo.',
        ],
        temporadaTitulo: '¿En qué temporada hay más alacranes?',
        temporada:
            'La temporada de alacranes va de abril a octubre, con el calor. Son nocturnos: de día se esconden en lugares frescos y oscuros, y de noche salen a cazar. Las lluvias los sacan de sus refugios y los empujan hacia dentro de las casas, y en los meses fríos reducen su actividad pero no desaparecen.',
        lugaresTitulo: '¿Dónde se esconden los alacranes?',
        lugares:
            'En grietas de muros y bardas, debajo de piedras, macetas y madera, en registros, coladeras y cajas de luz, y dentro de casa en zapatos, ropa en el piso, toallas, closets y detrás de muebles y cuadros. Entran por debajo de las puertas, por coladeras sin rejilla y por pasos de tubería.',
        faqs: [
            {
                q: '¿Cómo se fumiga una casa contra alacranes?',
                a: 'Se aplica un producto residual en el perímetro exterior, zoclos, marcos de puertas y ventanas, grietas, registros y coladeras, y se revisan los puntos de entrada. La aplicación se acompaña de recomendaciones de sellado: guardapolvos en puertas, rejillas en coladeras y resanado de grietas.',
            },
            {
                q: '¿Cuánto tiempo protege la fumigación contra alacranes?',
                a: 'La barrera residual actúa durante semanas, pero el sol, la lluvia y el lavado de pisos la desgastan. En zonas con mucha presencia de alacranes se recomienda repetir el servicio de forma periódica durante la temporada de calor.',
            },
            {
                q: '¿Qué hago si me pica un alacrán?',
                a: 'Acude de inmediato al centro de salud u hospital más cercano, sobre todo si se trata de un niño o de un adulto mayor. No uses remedios caseros ni esperes a ver si aparecen síntomas. En México hay antiveneno (faboterápico) en el sector salud.',
            },
            {
                q: '¿Por qué hay alacranes en mi casa?',
                a: 'Entran buscando alimento, humedad y un lugar fresco. Los atraen los insectos de los que se alimentan, las fugas de agua y los escondites: escombro, leña, cajas y macetas pegadas a los muros.',
            },
        ],
        relacionados: ['control-de-aranas', 'eliminacion-de-cucarachas', 'control-de-hormigas'],
    },

    'control-de-aranas': {
        titulo: 'Control de arañas: violinista y viuda negra | Big Cat',
        h1: 'Fumigación y control de arañas',
        ancla: 'Control de arañas',
        metaDescription:
            'Fumigación de arañas en casas, bodegas y cocheras: retiro de telarañas y barrera residual contra violinista y viuda negra. Cotiza por WhatsApp.',
        respuesta:
            'Las arañas se controlan retirando telarañas y sacos de huevos y aplicando una barrera residual en rincones, zoclos, bodegas y accesos. En México las dos especies que requieren atención son la araña violinista y la viuda negra, cuya mordedura necesita valoración médica.',
        senalesTitulo: 'Señales de que tienes arañas de riesgo',
        senales: [
            'Telarañas desordenadas y resistentes a ras de suelo, en rincones oscuros: suelen ser de viuda negra.',
            'Sacos de huevos blancos o crema, redondos, pegados a telarañas o bajo muebles.',
            'Arañas cafés de patas largas que aparecen de noche en closets, cajas y detrás de cuadros.',
            'Mudas de piel de araña en bodegas, clósets y cuartos poco usados.',
        ],
        temporadaTitulo: '¿En qué temporada hay más arañas?',
        temporada:
            'Hay arañas todo el año, pero se ven más en los meses cálidos, cuando hay más insectos de los que se alimentan. Muchos encuentros con la violinista ocurren al sacar cosas guardadas: ropa de temporada, cajas de adornos o herramienta que llevaba meses sin moverse.',
        lugaresTitulo: '¿Dónde se esconden las arañas peligrosas?',
        lugares:
            'La violinista prefiere interiores secos, oscuros y sin movimiento: closets, cajas de cartón, detrás de muebles y cuadros, bodegas y cuartos de servicio. La viuda negra vive más en exteriores y lugares bajos: medidores, registros, macetas, leña, cocheras y bajo muebles de jardín.',
        faqs: [
            {
                q: '¿Cómo reconozco una araña violinista?',
                a: 'Es café claro, mide de 1 a 2 cm de cuerpo, tiene patas largas y delgadas y una marca en forma de violín sobre el dorso. No hace telarañas a la vista y se esconde en lugares oscuros y secos.',
            },
            {
                q: '¿Qué hago si me muerde una araña violinista o una viuda negra?',
                a: 'Lava la zona con agua y jabón y acude de inmediato a un centro de salud u hospital. Si puedes hacerlo sin riesgo, lleva la araña o una foto para que la identifiquen. No apliques remedios caseros.',
            },
            {
                q: '¿La fumigación elimina todas las arañas?',
                a: 'Reduce de forma importante la población dentro de casa y en el perímetro. Las arañas caminan sobre las puntas de las patas y absorben poco producto, por eso el servicio combina el retiro de telarañas y sacos de huevos con aplicación directa en sus refugios.',
            },
            {
                q: '¿Cómo evito que entren arañas a mi casa?',
                a: 'Sacude y revisa la ropa y los zapatos guardados, usa cajas de plástico cerradas en lugar de cartón, separa los muebles de la pared, sella grietas y controla los demás insectos, que son su alimento.',
            },
        ],
        relacionados: ['control-de-alacranes', 'eliminacion-de-cucarachas', 'control-de-avispas'],
    },

    'control-de-aves-y-palomas': {
        titulo: 'Control de palomas y aves en edificios | Big Cat',
        h1: 'Control de palomas y aves',
        ancla: 'Control de palomas',
        metaDescription:
            'Control de palomas en techos, fachadas, naves y bodegas con púas, redes y sistemas de exclusión que no dañan a las aves. Cotiza por WhatsApp.',
        respuesta:
            'Las palomas se controlan con barreras físicas —redes, púas y sistemas de exclusión— que les impiden posarse y anidar, sin hacerles daño. Antes de instalarlas se limpia y se desinfecta la zona, porque el excremento acumulado es el principal riesgo para la salud.',
        senalesTitulo: 'Señales de un problema de palomas',
        senales: [
            'Excremento acumulado en cornisas, marquesinas, banquetas o equipos de aire acondicionado.',
            'Nidos, plumas y ramas en techos, canaletas, anuncios o estructuras.',
            'Palomas que duermen todas las noches en el mismo lugar del edificio.',
            'Canaletas y bajantes tapadas, o manchas de corrosión en lámina y fachadas.',
        ],
        temporadaTitulo: '¿En qué temporada hay más problemas con palomas?',
        temporada:
            'Las palomas están todo el año y pueden criar varias veces al año mientras tengan comida y un lugar protegido. La anidación aumenta en primavera, y lo más sencillo es instalar las barreras antes de que haya nidos con huevos o pichones.',
        lugaresTitulo: '¿Dónde se instalan las palomas?',
        lugares:
            'En techos y cornisas de edificios, naves industriales, bodegas, andenes de carga, estacionamientos techados, anuncios, campanarios, balcones y unidades de aire acondicionado. Buscan sitios altos, techados y cerca de comida: mercados, plazas, restaurantes y silos.',
        faqs: [
            {
                q: '¿Cómo se ahuyenta a las palomas sin hacerles daño?',
                a: 'Con barreras físicas que les quitan el lugar para posarse: redes que cierran huecos y techumbres, púas en cornisas y bordes, y sistemas de postes y cable. No se usan venenos; las aves simplemente se van a otro sitio.',
            },
            {
                q: '¿El excremento de paloma es peligroso?',
                a: 'Sí. Al secarse y volverse polvo puede transmitir enfermedades respiratorias como la histoplasmosis, además de traer ácaros y piojos. También es ácido y corroe lámina, pintura y cantera. La limpieza debe hacerse con protección.',
            },
            {
                q: '¿Qué funciona mejor contra las palomas: púas o redes?',
                a: 'Depende del lugar. Las púas sirven en bordes y cornisas angostas; las redes cierran por completo patios, techumbres y huecos donde anidan. En una visita se define qué combinación conviene para tu edificio.',
            },
            {
                q: '¿Instalan control de aves en naves industriales?',
                a: 'Sí, en naves, bodegas y andenes. Los proyectos de empresas grandes e industrias los atiende PCP Internacional, la marca industrial de nuestro grupo, en cualquier parte de México.',
            },
        ],
        relacionados: ['control-de-plagas-comercial', 'control-de-roedores', 'control-de-avispas'],
    },
};

export const contenidoServicio = (slug?: string): ContenidoServicio | undefined =>
    slug ? SERVICIOS[slug] : undefined;
