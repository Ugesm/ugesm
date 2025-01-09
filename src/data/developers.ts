export interface Developer {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  email: string;
  description: string;
}

export const developers: Developer[] = [
  {
    name: "Khadim SEYE",
    role: "Développeur",
    image: "/images/developers/dev2.jpg",
    linkedin: "https://linkedin.com/in/fatou-ndiaye",
    github: "https://github.com/fatou-ndiaye",
    email: "fatou.ndiaye@ugesm.org",
    description: "Architecte principal et développeur full-stack de la nouvelle version du site. A dirigé l'intégralité du projet de refonte, de la conception à l'implémentation, en apportant des solutions innovantes et une expertise technique approfondie."
  },
  {
    name: "Ambroise Ngagne TINE",
    role: "Développeur",
    image: "/images/developers/dev1.jpg",
    linkedin: "https://linkedin.com/in/mamadou-diallo",
    github: "https://github.com/mamadou-diallo",
    email: "mamadou.diallo@ugesm.org",
    description: "A developpé la première version du site web de l'UGESM, établissant les bases initiales du projet."
  },
  {
    name: "Saliou THIANE",
    role: "Développeur ",
    image: "/images/developers/dev3.jpg",
    linkedin: "https://linkedin.com/in/omar-sall",
    github: "https://github.com/omar-sall",
    email: "omar.sall@ugesm.org",
    description: "Développeur full-stack de la nouvelle version du site. A participé au développement de certaines fonctionnalités du site et à l'amélioration continue de la plateforme."
  }
];
