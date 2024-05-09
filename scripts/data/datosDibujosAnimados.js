const dibujosAnimados = [
    new EntretenimientoTV("KND Los Chicos del Barrio",
        "Un grupo de niños realiza misiones secretas para luchar contra adultos tiranos, utilizando artilugios ingeniosos.",
        new Date(2003, 0 , 1),
        new Date(2008, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/dNSfGQUIWhE?si=HgcKNdgoqXaJkuGb"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("La Vida Moderna de Rocko",
        "Un wallaby australiano experimenta la vida en una ciudad estadounidense, enfrentándose a situaciones cómicas y absurdas en esta serie animada para adultos.",
        new Date(1993, 0 , 1),
        new Date(1996, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/OdX8p4-TBqE?si=eb6eW1obnNPIoV6L"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Phineas y Ferb",
        "Dos hermanos, en su tiempo libre de verano, emprenden proyectos ambiciosos y extravagantes, mientras su mascota ornitorrinco, Perry, lleva una doble vida como agente secreto.",
        new Date(2008, 0 , 1),
        new Date(2015, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/Nt5AuDn6BwE?si=y1G-p_UBb_E0eOZm"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Coraje el perro cobarde",
        "Coraje, un perro asustadizo, enfrenta situaciones paranormales para proteger a sus dueños en su granja, mezclando humor negro, surrealismo y valentía.",
        new Date(1999, 0 , 1),
        new Date(2002, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/kOnfiTtil5o?si=biDJLpaQW-QXqebg"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Los Castores Cascarravias",
        "Dos castores emprenden aventuras y proyectos para construir el lugar perfecto, enfrentándose a desafíos y situaciones cómicas en su búsqueda constante de la perfección.",
        new Date(1997, 0 , 1),
        new Date(2001, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/CW_B4KB0wYs?si=R_C0bFLmjPd0M8uv"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Johnny Bravo",
        "Un mujeriego seguro de sí mismo busca el amor sin éxito, enfrentando situaciones cómicas y a menudo absurdas.",
        new Date(1997, 0 , 1),
        new Date(2004, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/AfdpygNylGc?si=oQ4EbqSZckxYt-8V"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Invasor Zim",
        "Un extraterrestre incompetente intenta conquistar la Tierra acompañado de su perro robot, enfrentando la resistencia de un niño.",
        new Date(2001, 0 , 1),
        new Date(2006, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/WgX2cu9N6_8?si=NvPFJhex3DhIh72E"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("El laboratorio de Dexter",
        "Un niño genio realiza experimentos secretos en su laboratorio mientras lucha contra su hermana mandona.",
        new Date(1996, 0 , 1),
        new Date(2003, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/nhZ0YMKBcv8?si=8VYbvcspDgAfgvtt"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("La vaca y el pollito",
        "Dos hermanos, una vaca y un pollito, enfrentan aventuras mientras interactúan con personajes excéntricos.",
        new Date(1997, 0 , 1),
        new Date(2003, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/Pl9x2DqBRdU?si=4WGQjZH1LmecfAcI"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Danny Phantom",
        "Un adolescente adquiere poderes de fantasma y lucha contra los espíritus malignos que amenazan su ciudad.",
        new Date(2004, 0 , 1),
        new Date(2007, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/AoJNSX8_8g4?si=E_7pUPtggFnysBuC"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Ed, Edd y Eddy",
        "Tres amigos realizan planes para conseguir caramelos, enfrentando obstáculos y travesuras en su vecindario suburbano.",
        new Date(1999, 0 , 1),
        new Date(2009, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/rHFZHdov_LA?si=A0LFP8e8Z_-wst6R"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Mucha Lucha",
        "Tres amigos asisten a una escuela de lucha libre, enfrentando desafíos y villanos mientras buscan la fama.",
        new Date(2002, 0 , 1),
        new Date(2005, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/Isa5E1wzvEc?si=TKjbDJRJ5yp_PmOB&amp;start=4"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Bob Esponja",
        "Una optimista esponja de mar vive en una piña debajo del mar, disfrutando de aventuras con sus amigos en Fondo de Bikini.",
        new Date(1999, 0 , 1),
        null,
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/b6sxT078cuw?si=sFuhXNsEDwCAxrqU"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Los Picapiedras",
        "Una familia de la Edad de Piedra vive aventuras modernas en Bedrock, enfrentando situaciones cómicas y prehistóricas.",
        new Date(1960, 0 , 1),
        new Date(1966, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/wFfT7X87uX8?si=otKEDNjcq03LfSai"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Ben 10",
        "Un niño descubre un reloj extraterrestre que le permite transformarse en diferentes formas alienígenas y luchar contra el mal.",
        new Date(2006, 0 , 1),
        null,
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/bBaM2sAdE5o?si=mDqrUktOe4QRnJoS"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Jóvenes Titanes",
        "Un grupo de superhéroes adolescentes lucha contra villanos y protege Jump City mientras enfrentan desafíos personales.",
        new Date(2003, 0 , 1),
        new Date(2006, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/04aFPY08IoM?si=IqgqezbYoteO6PHO"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Los Padrinos Mágicos",
        "Un niño tiene dos padrinos mágicos que le conceden deseos, causando caos y aprendiendo lecciones valiosas.",
        new Date(2001, 0 , 1),
        new Date(2017, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/a1F2UpFdPMI?si=c4EKDlDVsHNCgsxV"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Las Chicas Super Poderosas",
        "Tres niñas con superpoderes protegen la ciudad de villanos mientras enfrentan los desafíos de la infancia.",
        new Date(1998, 0 , 1),
        new Date(2005, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/2GmMXZmueeE?si=ye0qWhKG7vMwknIc&amp;start=1"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Jimmy Neutron",
        "Un niño genio inventa dispositivos locos y vive aventuras con sus amigos en Retroville.",
        new Date(2002, 0 , 1),
        new Date(2006, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/zm9hb03dvaw?si=BtFH64daqsB2egaP"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Rugrats",
        "Aventuras de un grupo de bebés exploradores liderados por Tommy Pickles, que enfrentan el mundo desde su perspectiva infantil.",
        new Date(1991, 0 , 1),
        new Date(2004, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/jMEj9kQg3F8?si=J_7fV5lc8EntFJYw"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Mansión Foster para Amigos Imaginarios",
        "Un niño visita una mansión donde los amigos imaginarios esperan ser adoptados, disfrutando de aventuras y amistad.",
        new Date(2004, 0 , 1),
        new Date(2009, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/xaN71DeT87c?si=JgAPWKWZeOhk7Py6"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Johnny Test",
        "Un niño se somete a experimentos locos con su perro parlante, enfrentando desafíos y villanos en su ciudad.",
        new Date(2005, 0 , 1),
        new Date(2014, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/Z9FB26q7tY0?si=OdB7cGEuMm3n7qMa"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Hey Arnold!",
        "Un niño vive en una ciudad con sus amigos, enfrentando situaciones de la vida real y resolviendo problemas.",
        new Date( 199, 0 , 1),
        new Date(2004, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/Z2EotmVUdDE?si=LOjK36_rO6doEkXE"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Cat-Dog",
        "Un gato y un perro fusionados viven juntos, enfrentando desafíos y aventuras mientras lidian con sus diferencias.",
        new Date(1998, 0 , 1),
        new Date(2005, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/EjHjxuEJBrk?si=p__d6NV25dMgTF0k"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Jake Long: El dragón occidental",
        "Un adolescente mitad humano, mitad dragón, lucha contra criaturas mágicas y protege Nueva York.",
        new Date(2005, 0 , 1),
        new Date(2007, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/zIgU9Q3xvQs?si=M3Od2msZ3DTDy5KL"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Kim Possible",
        "Una adolescente lucha contra el crimen como agente secreto, equilibrando su vida escolar y sus deberes como heroína.",
        new Date(2002, 0 , 1),
        new Date(2007, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/qvxEvjWuges?si=sdjxE_fGIASChIWR"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Duelo xiaolins",
        "Cuatro monjes jóvenes entrenan para convertirse en maestros Xiaolin, protegiendo el mundo de las fuerzas del mal.",
        new Date(2003, 0 , 1),
        new Date(2006, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/i6MFjq50384?si=cM3HVDaXC0LbtC_v&amp;start=5"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Las aventuras de Brandy y el Sr. Bigotes",
        "Una perra mimada y un conejo callejero disfrutan de aventuras en la selva tropical.",
        new Date(2004, 0 , 1),
        new Date(2006, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/GNor7vET3vI?si=YqsqW2-NvU4KHJrR&amp;start=1"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Los Sustitutos",
        "Todd y Riley, dos hermanos que vivieron en un orfanato toda su vida, adquieren un teléfono que les permite reemplazar a personas no deseadas.",
        new Date(2005, 0 , 1),
        new Date(2009, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/_1ahIVWtcTI?si=V_48rsVtt34Af6h8"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Dave el Bárbaro",
        "Un bárbaro torpe debe proteger su reino de la magia y la tecnología, enfrentando desafíos cómicos.",
        new Date(2004, 0 , 1),
        new Date(2005, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/3163VHcSBnY?si=CLurgZmjQ4oCN7xD"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Doug",
        "Un niño tímido navega por la vida cotidiana y enfrenta desafíos en la escuela y con sus amigos.",
        new Date(1991, 0 , 1),
        new Date(1994, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/Hygi3PlZI0Y?si=RFstg4qI2qUkPFXo"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
    new EntretenimientoTV("Gravity Falls",
        "Dos hermanos, Dipper y Mabel, pasan el verano con su tío Stan, explorando misterios sobrenaturales y enfrentándose a criaturas extrañas.",
        new Date(2012, 0 , 1),
        new Date(2016, 0 , 1),
        `<iframe class="rounded-5 contenedorDibujosAnimados__video"
                    src="https://www.youtube-nocookie.com/embed/X2DUpDxFJyg?si=ryGebht1U3irDZnH"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>`),
];
