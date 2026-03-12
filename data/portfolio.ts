export const personalInfo = {
  name: "EL HADAD HAMZA",
  role: "Ingénieur & Développeur Web",
  tagline:
    "Je conçois et développe des applications web modernes, performantes et orientées expérience utilisateur.",
  about:
    "Je suis EL HADAD HAMZA, élève ingénieur à l’EMSI et passionné par le développement web et logiciel. Titulaire d’une licence en Mathématiques et Informatique à la Faculté des Sciences de Rabat, j’aime concevoir des applications modernes, structurées et utiles, en combinant qualité technique, interface professionnelle et bonnes pratiques de développement.",
  email: "hamzihadi123@gmail.com",
  phone: "+212 6 97 57 27 47",
  location: "Rabat, Maroc",
  cvUrl: "/hamza-cv.pdf",
};

export const socials = {
  github: "https://github.com/ELhadad-hamza",
  linkedin: "https://www.linkedin.com/in/hamza-el-hadad/",
  email: "mailto:hamzihadi123@gmail.com",
};

export const skills = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Java",
      "Spring Boot",
      "C#",
      ".NET",
      "PHP",
    ],
  },
  {
    title: "Base de données",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server 2022"],
  },
  {
    title: "Outils",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
];

export const experiences = [
  {
    period: "2024 - Aujourd’hui",
    title: "Développeur / Projets académiques et personnels",
    company: "EMSI & projets personnels",
    description:
      "Conception et développement d’applications web modernes, création d’interfaces responsives, intégration frontend/backend, structuration de bases de données et amélioration continue de la qualité technique des projets.",
  },
  {
    period: "2023 - Aujourd’hui",
    title: "Formation d’Ingénieur",
    company: "EMSI Rabat",
    description:
      "Formation en ingénierie orientée développement logiciel, technologies web, bases de données, architecture applicative et bonnes pratiques de conception de projets informatiques.",
  },
  {
    period: "Avant EMSI",
    title: "Licence en Mathématiques et Informatique",
    company: "Faculté des Sciences de Rabat",
    description:
      "Obtention d’une licence en Mathématiques et Informatique, avec acquisition de bases solides en algorithmique, logique, programmation, modélisation et résolution de problèmes.",
  },
];

export const projects = [
  {
    slug: "cabinet-medical",
    title: "Application Cabinet Médical",
    description:
      "Application de gestion pour cabinet médical permettant l’organisation des rendez-vous, des patients et des opérations métier dans une interface claire et professionnelle.",
    fullDescription:
      "Cette application a été conçue pour digitaliser la gestion quotidienne d’un cabinet médical. Elle permet d’organiser les rendez-vous, de centraliser les informations liées aux patients et de structurer les opérations principales dans une interface simple et professionnelle.",
    stack: ["C#", ".NET", "SQL Server 2022"],
    github: "https://github.com/ELhadad-hamza",
    demo: "#",
    image: "/projects/cabinet-medical.png",
    role: "Conception et développement de l’application",
    features: [
      "Gestion des patients",
      "Organisation des rendez-vous",
      "Interface d’administration claire",
      "Structuration des données médicales",
    ],
    problem:
      "La gestion manuelle d’un cabinet médical peut devenir lente, désorganisée et difficile à suivre, notamment pour les rendez-vous, les dossiers patients et les opérations internes.",
    solution:
      "J’ai conçu une application centralisée permettant de structurer les données, de mieux organiser les rendez-vous et d’offrir une interface claire pour le suivi quotidien des activités du cabinet.",
    impact:
      "Le projet montre ma capacité à concevoir une application métier utile, structurée et adaptée à un besoin réel, avec une logique claire côté interface et base de données.",
    result:
      "Projet académique et technique mettant en valeur la conception d’une interface métier, la structuration d’une base de données et l’organisation logique d’une application de gestion.",
  },
  {
    slug: "shop-coffee",
    title: "Shop Coffee",
    description:
      "Application web inspirée d’un coffee shop moderne avec interface attractive, structure backend claire et gestion de données à l’aide de MongoDB.",
    fullDescription:
      "Shop Coffee est une application web pensée autour d’un concept moderne de coffee shop. L’objectif du projet était de créer une interface visuellement agréable, avec une structure backend claire et une gestion efficace des données.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/ELhadad-hamza",
    demo: "#",
    image: "/projects/shop-coffee.png",
    role: "Développement frontend et backend",
    features: [
      "Interface moderne et responsive",
      "Gestion des données avec MongoDB",
      "Backend structuré avec Express",
      "Présentation claire des éléments",
    ],
    problem:
      "Créer une application web à la fois moderne visuellement et bien organisée techniquement, avec une gestion cohérente des données et une navigation fluide.",
    solution:
      "J’ai développé une interface moderne avec React, reliée à un backend Node.js / Express et à une base MongoDB pour structurer les informations et offrir une expérience claire.",
    impact:
      "Ce projet renforce ma maîtrise du développement full stack et montre ma capacité à relier design d’interface, logique serveur et gestion de données dans un même produit.",
    result:
      "Projet démontrant ma capacité à concevoir une application web full stack avec une interface soignée et une logique de données cohérente.",
  },
  {
    slug: "portfolio-personnel",
    title: "Portfolio Personnel",
    description:
      "Création de mon site portfolio personnel pour présenter mon profil, mes compétences, mes projets et mes coordonnées professionnelles dans une interface moderne.",
    fullDescription:
      "Ce portfolio personnel a été conçu pour mettre en valeur mon profil, mon parcours académique, mes compétences et mes réalisations dans un environnement moderne, responsive et professionnel.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/ELhadad-hamza/hamza-portfolio",
    demo: "https://hamzaelhadad.com",
    image: "/projects/portfolio.png",
    role: "Design, développement et déploiement",
    features: [
      "Design premium et responsive",
      "Présentation structurée du profil",
      "Intégration de projets et sections dynamiques",
      "Déploiement sur Vercel avec domaine personnalisé",
    ],
    problem:
      "Présenter mon profil de manière professionnelle, moderne et crédible sur le web, avec une identité visuelle claire et un site facile à consulter sur desktop et mobile.",
    solution:
      "J’ai conçu et développé un portfolio complet avec Next.js, TypeScript et Tailwind CSS, en ajoutant animations, sections structurées, SEO, domaine personnalisé et expérience responsive.",
    impact:
      "Ce site me sert de vitrine professionnelle et démontre mes compétences en développement frontend moderne, structuration d’interface et mise en production réelle.",
    result:
      "Projet personnel servant de vitrine professionnelle pour présenter mon travail de manière claire, moderne et crédible.",
  },
];
