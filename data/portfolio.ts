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
    slug: "gestion-stock",
    title: "Plateforme de Gestion de Stock",
    category: "Projet de stage",
    description:
      "Application métier développée dans le cadre de mon stage pour centraliser et optimiser la gestion des produits, fournisseurs, mouvements de stock, inventaires et alertes au sein d’une interface d’administration complète.",
    fullDescription:
      "Cette plateforme de gestion de stock a été développée dans le cadre de mon stage afin de répondre à un besoin concret de suivi et de centralisation des opérations liées au stock. L’application permet de gérer les produits, les catégories, les fournisseurs, les entrées et sorties, les inventaires ainsi que les alertes de stock depuis un tableau de bord structuré.",
    
    // ⚠️ Remplace par les vraies technologies utilisées
    stack: [
      "À compléter",
      "À compléter",
      "SQL / Database",
    ],

    // ⚠️ Mets ici le vrai dépôt si tu l'as sur GitHub
    github: "https://github.com/ELhadad-hamza",

    // Mets "#" si le projet n'est pas déployé
    demo: "#",

    image: "/projects/gestion-stock.png",

    role:
      "Analyse du besoin, conception de l’application, développement des fonctionnalités métier et création de l’interface d’administration.",

    features: [
      "Tableau de bord avec indicateurs de stock",
      "Gestion des produits et des catégories",
      "Gestion des fournisseurs",
      "Gestion des entrées de stock",
      "Gestion des sorties de stock",
      "Gestion des inventaires",
      "Alertes de stock faible",
      "Génération et consultation de rapports",
      "Gestion des utilisateurs et des rôles",
    ],

    problem:
      "Le suivi des stocks devient rapidement complexe lorsque les produits, fournisseurs, entrées, sorties et inventaires sont gérés de manière dispersée. Cela rend plus difficile la surveillance des niveaux de stock et la prise de décision.",

    solution:
      "J’ai participé à la conception et au développement d’une plateforme centralisée permettant de suivre les principales opérations de stock depuis une interface unique, avec un tableau de bord, des alertes et des modules dédiés aux différentes opérations métier.",

    impact:
      "La solution permet de centraliser les informations liées au stock, d’améliorer la visibilité sur les mouvements et de simplifier les opérations quotidiennes de gestion.",

    result:
      "Ce projet de stage m’a permis de travailler sur une application métier complète, de mieux comprendre la traduction d’un besoin professionnel en fonctionnalités techniques et de renforcer mes compétences en développement d’applications de gestion.",
  },

  {
    slug: "gestion-ressources-humaines",
    title: "Système de Gestion des Ressources Humaines",
    category: "Application métier",
    description:
      "Application de gestion des ressources humaines conçue pour centraliser les informations des employés et faciliter le suivi des principales opérations administratives au sein d’une interface claire et structurée.",

    fullDescription:
      "Ce projet consiste en la conception d’une application dédiée à la gestion des ressources humaines. L’objectif est de centraliser les informations relatives aux collaborateurs et de faciliter les opérations administratives à travers une architecture claire et une interface simple à utiliser.",

    // ⚠️ Donne-moi ensuite les technologies exactes
    stack: [
      "À compléter",
      "À compléter",
      "À compléter",
    ],

    github: "https://github.com/ELhadad-hamza",
    demo: "#",

    image: "/projects/gestion-rh.png",

    role:
      "Conception de l’application, développement des fonctionnalités métier et structuration des données.",

    // ⚠️ Adapte cette liste aux fonctions réellement présentes
    features: [
      "Gestion des employés",
      "Centralisation des informations RH",
      "Gestion des données administratives",
      "Recherche et consultation des collaborateurs",
      "Interface d’administration",
    ],

    problem:
      "La gestion de nombreuses informations liées aux collaborateurs peut devenir difficile lorsque les données sont dispersées entre plusieurs supports ou processus.",

    solution:
      "L’application centralise les informations RH au sein d’un système structuré permettant de consulter et gérer les données des collaborateurs plus facilement.",

    impact:
      "Le projet illustre ma capacité à concevoir une application métier autour d’un besoin organisationnel concret et à structurer les données et fonctionnalités autour de l’utilisateur.",

    result:
      "Cette application m’a permis de renforcer mes compétences en analyse fonctionnelle, conception d’applications métier, développement et organisation des données.",
  },

  {
    slug: "cabinet-medical",
    title: "Application Cabinet Médical",
    category: "Application métier",
    description:
      "Application métier conçue pour centraliser la gestion des patients, des rendez-vous et des opérations quotidiennes d’un cabinet médical au sein d’une interface structurée et intuitive.",

    fullDescription:
      "Cette application a été conçue pour digitaliser la gestion quotidienne d’un cabinet médical. Elle permet d’organiser les rendez-vous, de centraliser les informations liées aux patients et de structurer les principales opérations métier.",

    stack: ["C#", ".NET", "SQL Server 2022"],

    github: "https://github.com/ELhadad-hamza",
    demo: "#",

    image: "/projects/cabinet-medical.png",

    role:
      "Conception de l’architecture, développement de l’application et modélisation de la base de données.",

    features: [
      "Gestion des patients",
      "Organisation des rendez-vous",
      "Gestion des données du cabinet",
      "Interface d’administration",
      "Structuration des informations médicales",
    ],

    problem:
      "La gestion manuelle des rendez-vous et des informations relatives aux patients peut devenir difficile à organiser et à suivre au quotidien.",

    solution:
      "J’ai conçu une application permettant de centraliser les données du cabinet, d’organiser les rendez-vous et de structurer les principales opérations dans une interface unique.",

    impact:
      "La solution simplifie l’accès aux informations principales et permet une organisation plus structurée du fonctionnement du cabinet.",

    result:
      "Ce projet m’a permis de travailler sur la conception d’une application métier, la modélisation d’une base de données SQL Server et le développement avec l’écosystème .NET.",
  },

  {
    slug: "portfolio-personnel",
    title: "Portfolio Personnel",
    category: "Projet personnel",
    description:
      "Conception et développement de mon identité professionnelle en ligne à travers un portfolio performant, responsive et pensé pour présenter clairement mon parcours et mes réalisations.",

    fullDescription:
      "Ce portfolio a été conçu comme une véritable vitrine professionnelle afin de présenter mon profil, ma formation, mes compétences et mes réalisations dans une expérience moderne et accessible sur tous les appareils.",

    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],

    github:
      "https://github.com/ELhadad-hamza/hamza-portfolio",

    demo: "https://hamzaelhadad.com",

    image: "/projects/portfolio.png",

    role:
      "Direction artistique, UX/UI, développement frontend, SEO et déploiement.",

    features: [
      "Interface responsive",
      "Présentation des projets",
      "Pages détaillées pour les études de cas",
      "Animations d’interface",
      "SEO",
      "Domaine personnalisé",
      "Déploiement continu avec Vercel",
    ],

    problem:
      "Je souhaitais disposer d’un espace professionnel permettant de présenter mon profil, mes compétences et mes réalisations autrement qu’à travers un simple CV.",

    solution:
      "J’ai conçu et développé un portfolio complet avec Next.js, TypeScript et Tailwind CSS en portant une attention particulière à la lisibilité, au responsive design et à la présentation des projets.",

    impact:
      "Le portfolio centralise mon identité professionnelle, mes projets et mes moyens de contact dans une expérience cohérente accessible publiquement.",

    result:
      "Le projet est aujourd’hui déployé sur mon domaine personnel hamzaelhadad.com et évolue progressivement avec mes nouvelles expériences et réalisations.",
  },
];
