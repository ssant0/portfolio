
import cucii from "../assets/img/clients/cucii.png";
import labstudiomedia from "../assets/img/clients/labstudiomedia.png";
import cocinasmodulares from "../assets/img/clients/cocinasmodulares.png";
import cybercafe10m from "../assets/img/clients/cybercafe10m.png";
import type { Project } from "../types/Project";

export const allProjects: Project[] = [
  {
    title: "cucii.mx",
    longDescription: "El Centro Universitario de Ciencias e Investigación (CUCII) es una universidad privada con sede en Sinaloa. En este proyecto, mi rol fue desarrollar el front-end completo utilizando HTML, CSS y JavaScript, enfocándome en una experiencia de usuario fluida y un rendimiento óptimo. Se implementó un diseño responsive que fue entregado por el cliente basándose en una plantilla y posteriormente se trabajo sobre esa plantilla todos los cambios solicitados por el cliente al a medida.",
    image: cucii,
    liveLink: "https://cucii.mx/",
    technologies: ["HTML", "CSS", "JavaScript", "Google Fonts"],
    keywords: ["HTML", "CSS", "JavaScript", "Responsive Design", "SEO", "Accessibility", "Educación", "Universidad", "Sinaloa"]
  },
  {
    title: "labstudiomedia.com",
    longDescription: "Desarrollo del sitio web para la agencia de marketing digital Labstudiomedia. El objetivo era crear un portafolio visualmente atractivo que mostrara sus servicios. Trabajé con Astro y TypeScript junto con Bootstrap, el objetivo era destacar los servicios y ser la puerta de entrada para nuevos clientes.",
    image: labstudiomedia,
    liveLink: "https://labstudiomedia.com/",
    technologies: ["Astro", "TypeScript", "Bootstrap", "CSS", "Google analytics", "AOS"],
    keywords: ["Astro", "TypeScript", "Bootstrap", "CSS", "Google analytics", "AOS", "SEO", "Agencia", "Marketing", "Digital", "Diseño", "Web", "Visual", "Landing Page"],
    repoLink: "https://github.com/ssant0/labstudio-landing"
  },
  {
    title: "cocinasmodulares.com.mx",
    longDescription: "Cocinas modulares es una empresa familiar con sede en Los Mochis, Sinaloa. Contactaron conmigo y concretamos una serie de reuniones tanto para levantar requisitos como validar la idea del sitio que querían, finalmente se desarrollo el sitio con HTML, CSS y JavaScript, el objetivo era crear un sitio que mostrara imágenes profesionales asi que colabore con un equipo de fotografía y optimize las imágenes para su uso en la pagina, configure los dominios y los apoye configurando cuentas de correo empresarial ademas del hosting para el despliegue de la pagina web.",
    image: cocinasmodulares,
    liveLink: "https://cocinasmodulares.mx/",
    technologies: ["HTML", "CSS", "JavaScript"],
    keywords: ["HTML", "CSS", "JavaScript", "Responsive Design", "SEO", "Elegancia", "Cocinas", "Cocinas Modulares", "Sinaloa", "Fotografía", "Web", "Hosting", "Correo Empresarial", "Dominio"] },
  {
    title: "cybercafe10m.com",
    longDescription: "Cybercafe10m es un cyber el cual presta servicios de apoyo en tramites y documentos para personas con dudas o necesidad de concretar tramites pesados sin mucho esfuerzo, necesitaban mostrar su existencia en linea contactaron conmigo y concretamos un diseño, en este caso colabore con su equipo de diseñadores gráficos para crear un diseño atractivo y moderno implementando diseños echos por ellos y utilize la API de google maps para personalizar un poco los mapas con sus ubicaciones.",
    image: cybercafe10m,
    liveLink: "https://cybercafe10m.com/",
    technologies: ["React", "Firebase", "Styled Components"],
    keywords: ["HTML", "CSS", "JavaScript", "Responsive Design", "SEO", "Cybercafe", "Sinaloa", "Web", "Hosting", "Dominio"]
  }
];
