const datosSeries = [
    new EntretenimientoTV(
        "Kenan & Kel",
        "Dos amigos excéntricos embarcan en divertidas y alocadas aventuras mientras trabajan en un supermercado y enfrentan situaciones cómicas con su humor característico.",
        new Date(1997, 0, 1),
        new Date(2000, 0, 1),
        `<iframe class="rounded-5 contenedorSeries__video"
                    src="https://www.youtube-nocookie.com/embed/QcNE2ue2V_g?si=4eCQRr-fr7izU_vX"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV(
        "Drake & Josh",
        "Dos hermanastros, opuestos en personalidad, enfrentan situaciones y desafíos mientras navegan por la adolescencia, amistad y relaciones familiares en su peculiar convivencia.",
        new Date(2004, 0, 1),
        new Date(2008, 0, 1),
        `<iframe class="rounded-5 contenedorSeries__video"
                    src="https://www.youtube-nocookie.com/embed/ar_EmK1zuSk?si=4Gpr3kv6CvngLUly"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV(
        "Zack y Cody: Gemelos en Acción",
        "Gemelos viven en un lujoso hotel, causando caos y risas mientras exploran la vida hotelera, la amistad y las travesuras en este ambiente inusual.",
        new Date(2005, 0, 1),
        new Date(2008, 0, 1),
        `<iframe class="rounded-5 contenedorSeries__video"
                    src="https://www.youtube-nocookie.com/embed/gliZp5UuHVw?si=7PETYtAB3qhNyC4H"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV(
        "Los Hechiceros de Waverly Place",
        "Una familia de Nueva York oculta su identidad como hechiceros mientras los hermanos compiten por ser el único poseedor de poderes mágicos en la familia.",
        new Date(2007, 0, 1),
        new Date(2012, 0, 1),
        `<iframe class="rounded-5 contenedorSeries__video"
                    src="https://www.youtube-nocookie.com/embed/KiNp343hpow?si=cqh36T801jHgpjqG"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV(
        "ICarly",
        "Una adolescente crea un webshow junto a sus amigos, explorando la comedia y mientras comparten sus ocurrencias en línea, ganando popularidad y amistades.",
        new Date(2007, 0, 1),
        new Date(2012, 0, 1),
        `<iframe class="rounded-5 contenedorSeries__video"
                    src="https://www.youtube-nocookie.com/embed/854jxWy5L5Y?si=wvwUvrjLtN7akEYv"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV(
        "Buena Suerte Charlie",
        "Una familia documenta la vida cotidiana mediante videso mientras se adapta a la llegada de un nuevo miembro, Charlie.",
        new Date(2010, 0, 1),
        new Date(2014, 0, 1),
        `<iframe class="rounded-5 contenedorSeries__video"
                    src="https://www.youtube-nocookie.com/embed/SJEDenRWfAo?si=KY5Kjs-l0sX8e3cs"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV(
        "Skimo",
        "Tres amigos enfrentan desafíos en la escuela secundaria mientras intentan navegar por la adolescencia y sus problemas sociales.",
        new Date(2006, 0, 1),
        new Date(2008, 0, 1),
        `<iframe class="rounded-5 contenedorSeries__video"
                    src="https://www.youtube-nocookie.com/embed/BHXn5E6Z0OU?si=YQkMU5WdWlAYH80s"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV(
        "Zoey 101",
        "Zoey Brooks y sus amigos experimentan la vida en un internado, enfrentando amistades, romances y desafíos académicos.",
        new Date(2005, 0, 1),
        new Date(2008, 0, 1),
        `<iframe class="rounded-5 contenedorSeries__video"
                    src="https://www.youtube-nocookie.com/embed/RX6YeYT3ed8?si=hIShYhLhJo6-tjvr"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV(
        "Hannah Montana",
        "Una chica lleva una doble vida como estudiante de secundaria y estrella pop, manteniendo su verdadera identidad en secreto.",
        new Date(2006, 0, 1),
        new Date(2011, 0, 1),
        `<iframe class="rounded-5 contenedorSeries__video"
                    src="https://www.youtube-nocookie.com/embed/nDMIuuO_PQo?si=WWgw9G8MWqK1KmCm"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV(
        "Sunny Entre Estrellas",
        "Una adolescente se convierte en la estrella de un programa de televisión y debe equilibrar la fama con su vida personal en un estudio de Hollywood.",
        new Date(2009, 0, 1),
        new Date(2011, 0, 1),
        `<iframe class="rounded-5 contenedorSeries__video"
                    src="https://www.youtube-nocookie.com/embed/bjmFqU7VRfM?si=-TG_dgXPIyKZ0koZ&amp;start=3"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV(
        "31 minutos",
        "Un programa de noticias peculiar y cómico dirigido por títeres, que aborda temas sociales y culturales de manera divertida.",
        new Date(2003, 0, 1),
        new Date(2014, 0, 1),
        `<iframe class="rounded-5 contenedorSeries__video"
                    src="https://www.youtube-nocookie.com/embed/ppiuQuD15wQ?si=q7HiW1GlFvqpJzjs"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV(
        "Big Time Rush",
        "Cuatro amigos de Minnesota persiguen sus sueños de convertirse en estrellas de la música pop en Los Ángeles, enfrentando desafíos y aventuras.",
        new Date(2009, 0, 1),
        new Date(2013, 0, 1),
        `<iframe class="rounded-5 contenedorSeries__video"
                    src="https://www.youtube-nocookie.com/embed/SN_MY9uDUEw?si=Zf-silw-G1bGQ0vG"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV(
        "El Principe Del Rap En Bel - Air",
        "Un joven de Filadelfia se muda a vivir con sus adinerados parientes en Bel-Air, California, adaptándose a un nuevo estilo de vida.",
        new Date(1990, 0, 1),
        new Date(1996, 0, 1),
        `<iframe class="rounded-5 contenedorSeries__video"
                    src="https://www.youtube-nocookie.com/embed/5M7V3xtFN18?si=fOKvzHptjAoZrAoS"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV(
        "Zoboomafoo",
        "Dos hermanos exploran el mundo animal con la ayuda de un lémur, Zoboomafoo, aprendiendo sobre diferentes especies y hábitats.",
        new Date(1999, 0, 1),
        new Date(2001, 0, 1),
        `<iframe class="rounded-5 contenedorSeries__video"
                    src="https://www.youtube-nocookie.com/embed/c5CZJbss6Ms?si=LvflJMw6bletgkMB&amp;start=9"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV(
        "ALF",
        "Un extraterrestre peludo llamado ALF vive con una familia terrestre, causando estragos mientras intenta adaptarse a la vida en la Tierra.",
        new Date(1986, 0, 1),
        new Date(1990, 0, 1),
        `<iframe class="rounded-5 contenedorSeries__video"
                    src="https://www.youtube-nocookie.com/embed/TwoTd6SzMzQ?si=lCcwIGCud8rdmHUP"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV(
        "Manual de Supervivencia Escolar de Ned",
        "Ned comparte consejos y trucos para sobrevivir a la escuela secundaria, enfrentando problemas típicos de adolescentes con humor y astucia.",
        new Date(2004, 0, 1),
        new Date(2007, 0, 1),
        `<iframe class="rounded-5 contenedorSeries__video"
                    src="https://www.youtube-nocookie.com/embed/p3xBpV9nf0U?si=JlSpOnNvLur_A7YV"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV(
        "Art Attack",
        "Un programa educativo de arte dirigido a niños, que presenta manualidades creativas y técnicas artísticas, fomentando la imaginación y la expresión creativa.",
        new Date(1994, 0, 1),
        new Date(2007, 0, 1),
        `<iframe class="rounded-5 contenedorSeries__video"
                    src="https://www.youtube-nocookie.com/embed/QV3vlWC-HJM?si=cuS9cc1ZFvy6inke"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`)
];

// nombre, descripcion, fechaDesde, fechaHasta, iframe