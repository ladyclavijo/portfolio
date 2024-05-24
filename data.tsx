import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Github } from "lucide-react";

export const socialNetworks = [
    // {
    //     id: 1,
    //     logo: <Youtube size={30} strokeWidth={1} />,
    //     src: "#!",
    // },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/ladyclavijo",
    },
    // {
    //     id: 3,
    //     logo: <Twitter size={30} strokeWidth={1} />,
    //     src: "#!",
    // },
    // {
    //     id: 4,
    //     logo: <Rss size={30} strokeWidth={1} />,
    //     src: "#!",
    // },
    // {
    //     id: 5,
    //     logo: <Twitch size={30} strokeWidth={1} />,
    //     src: "#!",
    // },
    {
        id: 6,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/ladyclavijo",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    // {
    //     id: 5,
    //     title: "Home",
    //     icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    //     link: "/testimonials",
    // },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Python, NextJs, Typescript y Framer Motion",
        subtitle: "Autodidacta",
        description: "Documentación, videos en distintas plataformas como Youtube y Google.",
        date: "Mar 2024",
    },
    {
        id: 2,
        title: "Ingeniería en Computación",
        subtitle: "Universidad Nacional de la Plata",
        description: "Carrera universitaria en formación a la fecha.",
        date: "Mar 2024",
    },
    {
        id: 3,
        title: "Curso Profesional de Python",
        subtitle: "Código Facilito",
        description: "Aprendizaje de todo lo necesario para mejorar las habilidades y crecer como desarrollador Python aplicando las mejores practicas de programación logrando así un código mucho más Pythonico.",
        date: "Jul 2023",
    },
    {
        id: 4,
        title: "Full Stack Developer",
        subtitle: "HENRY",
        description: "700 horas de cursado teórico-práctico. Henry Bootcamp con tecnologías como Javascript, HTML y CSS.",
        date: "Jul 2023",
    },
    {
        id: 5,
        title: "Scrum Foundation Professional Certificate",
        subtitle: "CertiProf",
        description: "Competencia en los principios de gestión de proyectos de Scrum.",
        date: "Jun 2023",
    },
    {
        id: 6,
        title: "Curso Profesional de Javascript",
        subtitle: "Código Facilito",
        description: "Aprendizaje de JavaScript a profundidad, desde las bases del lenguaje, hasta el trabajo con objetos, programación asíncrona, novedades del lenguaje, buenas prácticas y conceptos teóricos.",
        date: "Nov 2022",
    },
    {
        id: 7,
        title: "Curso a fondo de Github",
        subtitle: "Código Facilito",
        description: "Aprendizaje sobre algunas de las principales herramientas de GitHub para trabajo colaborativo y distribución de software.",
        date: "Nov 2022",
    },
    {
        id: 8,
        title: "Fundamentos esenciales de la Programación",
        subtitle: "Linkedin",
        description: "Desarrollo de aplicaciones informáticas en cualquier lenguaje de programación. Aprendizaje de los componentes comunes de cualquier lenguaje.",
        date: "Dic 2022",
    },
    {
        id: 9,
        title: "Ingeniería Aeroespacial",
        subtitle: "Universidad Nacional de la Plata",
        description: "Carrera Universitaria en formación a la fecha.",
        date: "Mar 2011",
    },   
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 3,
        text: "Proyectos finalizados",
        lineRight: false,
        lineRightMobile: false,
    },
    // {
    //     id: 2,
    //     endCounter: 220,
    //     text: "Proyectos finalizados",
    //     lineRight: false,
    //     lineRightMobile: false,
    // },
];

export const serviceData = [
    // {
    //     icon: <Crop />,
    //     title: "Branding",
    //     description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    // },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Construcción de sitios web personalizados, adaptados a tus requisitos y especificaciones.",
    },
    {
        icon: <Rocket />,
        title: "Tecnologias",
        description: "HTML, CSS, Javascript, Next.js, Tailwind, Typescript, React.js, Python, Framer Motion y Figma.",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Trazado de interfaces web profesionales, enfocadas en la experiencia del usuario.",
    },
    // {
    //     icon: <Rocket />,
    //     title: "SEO",
    //     description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    // },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "BookBuster",
        image: "/BookBuster.jpeg",
        urlGithub: "https://github.com/fmaldeco/BookBuster-FRONT",
        urlDemo: "https://book-buster-front.vercel.app/",
    },
    {
        id: 2,
        title: "DoggyDex",
        image: "/doggy-dex.png",
        urlGithub: "https://github.com/ladyclavijo/PI-Dogs",
        urlDemo: "https://github.com/ladyclavijo/PI-Dogs",
    },
    // {
    //     id: 3,
    //     title: "Estrategias Web",
    //     image: "/image-3.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 4,
    //     title: "Ideas Creativas",
    //     image: "/image-4.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 5,
    //     title: "Webs Impactantes",
    //     image: "/image-5.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 6,
    //     title: "Web Dinámica",
    //     image: "/image-6.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 7,
    //     title: "Dark Web ",
    //     image: "/image-7.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 8,
    //     title: "E-commerce web",
    //     image: "/image-8.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];