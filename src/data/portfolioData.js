export const PERSONAL_INFO = {
  name: 'Chayma EL HOUMA',
  initials: 'CH',
  badge: 'Recherche un stage PFE · février 2027',
  title: 'Développeuse Full Stack Java & React',
  heroSubtitle:
    'Étudiante en cycle ingénieur en Génie Informatique et Intelligence Artificielle à l’ENSA Safi. Spécialisée en développement full stack Java 17 & React, API REST sécurisées avec Spring Boot & Spring Security, persistance PostgreSQL & MySQL, et intégration de solutions d’IA générative.',
  photo: {
    src: '/photo.jpg',
    alt: 'Portrait de Chayma El Houma',
    width: 400,
    height: 500,
  },
  cvPath: '/CV_Chayma_El_Houma_Full_Stack_Java_React_.pdf',
  github: 'https://github.com/ChaymaELHOUMA',
  linkedin: 'https://www.linkedin.com/in/chaymaelhouma',
  email: 'chaymaelhouma2005@gmail.com',
  phone: '+212 6 72 98 45 69',
  stats: [
    { label: 'Stages', value: '3' },
    { label: 'Projets majeurs', value: '4+' },
    { label: 'Certifications', value: '9' },
  ],
};

export const ABOUT_TEXTS = [
  'Étudiante en cycle ingénieur en Génie Informatique et Intelligence Artificielle à l’ENSA Safi, je suis spécialisée en développement full stack Java 17 & React.',
  'Mon expertise technique est centrée sur la conception d’API REST sécurisées (Spring Boot, Spring Security), la persistance des données (PostgreSQL, MySQL) et la création d’interfaces modernes et réactives (React, Next.js, TypeScript).',
  'J’accorde une attention rigoureuse à la qualité logicielle et aux bonnes pratiques : tests automatisés (JUnit 5, Mockito, Jest), conteneurisation Docker, architecture microservices et collaboration agile sous Git/GitHub.',
  'Passionnée par les innovations technologiques, j’intègre également des solutions d’IA générative (LLMs, pipelines RAG, LangChain, FAISS) pour concevoir des applications intelligentes et performantes.',
];

export const SKILL_CATEGORIES = [
  {
    category: 'Backend',
    description: 'Architecture robuste, APIs REST sécurisées et microservices',
    skills: [
      { name: 'Java 17', featured: true },
      { name: 'Spring Boot', featured: true },
      { name: 'Spring MVC', featured: false },
      { name: 'Spring Security', featured: false },
      { name: 'Spring Data JPA', featured: false },
      { name: 'Hibernate', featured: false },
      { name: 'REST APIs', featured: false },
      { name: 'Microservices', featured: false },
      { name: 'WebClient', featured: false },
      { name: 'WebSocket', featured: false },
      { name: 'Lombok', featured: false },
      { name: 'POO & Clean Architecture', featured: false },
    ],
  },
  {
    category: 'Frontend',
    description: 'Interfaces web dynamiques, réactives et accessibles',
    skills: [
      { name: 'React', featured: true },
      { name: 'Next.js', featured: false },
      { name: 'TypeScript', featured: false },
      { name: 'JavaScript (ES6+)', featured: false },
      { name: 'Tailwind CSS', featured: false },
      { name: 'HTML5 & CSS3', featured: false },
    ],
  },
  {
    category: 'Bases de données',
    description: 'Modélisation relationnelle, requêtes et persistance',
    skills: [
      { name: 'PostgreSQL', featured: true },
      { name: 'MySQL', featured: true },
      { name: 'SQLite', featured: false },
      { name: 'SQL', featured: false },
    ],
  },
  {
    category: 'Tests et outils',
    description: 'Qualité logicielle, CI/CD, conteneurs et environnement de dev',
    skills: [
      { name: 'JUnit 5', featured: false },
      { name: 'Mockito', featured: false },
      { name: 'Jest', featured: false },
      { name: 'Supertest', featured: false },
      { name: 'Postman', featured: false },
      { name: 'Couverture de code', featured: false },
      { name: 'Docker', featured: false },
      { name: 'Maven', featured: false },
      { name: 'Git', featured: false },
      { name: 'GitHub', featured: false },
      { name: 'Méthodologie Agile', featured: false },
    ],
  },
  {
    category: 'IA générative',
    description: 'Solutions LLM, recherche sémantique et pipelines RAG',
    skills: [
      { name: 'API LLM (Gemini)', featured: false },
      { name: 'Retrieval-Augmented Generation (RAG)', featured: false },
      { name: 'LangChain', featured: false },
      { name: 'FAISS', featured: false },
      { name: 'HuggingFace Embeddings', featured: false },
      { name: 'Prompt Engineering', featured: false },
      { name: 'Python', featured: false },
    ],
  },
];

export const TIMELINE_ITEMS = [
  {
    id: 'exp-1',
    type: 'internship',
    typeLabel: 'Stage',
    title: 'Développeuse Java/Spring Boot Stagiaire',
    organization: 'Arimayi',
    location: 'France (Télétravail)',
    period: '9 juin 2026 – 7 septembre 2026',
    shortSummary:
      'Développement du backend Java 17/Spring Boot d’une solution de supervision SOC en équipe agile avec conception d’API REST.',
    overview:
      'Développement du backend Java 17/Spring Boot d’une solution de supervision SOC en équipe agile, avec conception d’API REST.',
    contribution: [
      'Développé le backend Java 17/Spring Boot d’une solution de supervision SOC en équipe agile, avec conception d’API REST.',
      'Implémenté les fonctionnalités métier avec Spring Data JPA, Hibernate et PostgreSQL ; sécurisé l’application avec Spring Security ; conteneurisé les services avec Docker.',
      'Écrit des tests unitaires avec JUnit 5, validé les endpoints avec Postman et contribué à la réalisation du frontend Next.js/TypeScript ; rédigé la documentation technique.',
    ],
    tech: [
      'Java 17', 'Spring Boot', 'Spring Security', 'Spring Data JPA',
      'Hibernate', 'API REST', 'PostgreSQL', 'JUnit 5', 'Postman',
      'Docker', 'Git', 'Next.js', 'TypeScript',
    ],
    isPrivate: true,
  },
  {
    id: 'exp-2',
    type: 'internship',
    typeLabel: 'Stage',
    title: 'Stagiaire – Full Stack Java/React & Automatisation des Tests assistée par IA',
    organization: 'Smart Automation Technologies',
    location: 'Tanger, Maroc (Télétravail)',
    period: '9 juillet 2026 – 9 septembre 2026',
    shortSummary:
      'Conception d’un orchestrateur Java/Spring Boot pour la génération et l’évaluation de tests logiciels assistées par IA (LLM Gemini).',
    overview:
      'Conception d’un outil d’automatisation de la qualité logicielle (orchestrateur Java/Spring Boot) : analyse AST du code, génération de tests via un LLM (Gemini) appelé par WebClient, exécution isolée et persistance avec Spring Data JPA.',
    contribution: [
      'Conçu un outil d’automatisation de la qualité logicielle (orchestrateur Java/Spring Boot) : analyse AST du code, génération de tests via un LLM (Gemini) appelé par WebClient, exécution isolée et persistance avec Spring Data JPA.',
      'Intégré Java et Node.js (ProcessBuilder) pour exécuter Jest et Supertest, et mesuré la qualité des tests par la couverture de code et le mutation testing. Tests JUnit 5 et Mockito.',
      'Développé un tableau de bord React/TypeScript de suivi des indicateurs et de visualisation des résultats.',
    ],
    tech: [
      'Java 17', 'Spring Boot', 'Spring Data JPA', 'WebClient',
      'API LLM (Gemini)', 'ProcessBuilder', 'JUnit 5', 'Mockito',
      'Node.js', 'Jest', 'Supertest', 'React', 'TypeScript',
    ],
    isPrivate: true,
  },
  {
    id: 'exp-3',
    type: 'internship',
    typeLabel: 'Stage',
    title: 'Stagiaire – Développement d’un Chatbot Intelligent RAG',
    organization: 'Agence Nationale des Ports (ANP)',
    location: 'Casablanca, Maroc',
    period: 'Août 2025',
    shortSummary:
      'Développement d’un outil digital (chatbot RAG) permettant d’interroger des documents PDF par recherche sémantique avec interface Streamlit.',
    overview:
      'Développement d’un outil digital (chatbot RAG) permettant d’interroger des documents PDF par recherche sémantique, avec une interface Streamlit.',
    contribution: [
      'Développé un outil digital (chatbot RAG) permettant d’interroger des documents PDF par recherche sémantique, avec une interface Streamlit.',
      'Mis en place le pipeline : extraction, découpage, embeddings, indexation vectorielle avec FAISS, récupération du contexte et génération de réponses par LLM.',
    ],
    tech: [
      'Python', 'LangChain', 'FAISS', 'HuggingFace Embeddings',
      'Streamlit', 'SQLite',
    ],
    isPrivate: false,
  },
  {
    id: 'edu-1',
    type: 'education',
    typeLabel: 'Formation',
    title: 'Cycle Ingénieur en Génie Informatique et Intelligence Artificielle',
    organization: 'ENSA Safi, Maroc',
    location: 'Safi, Maroc',
    period: '2024 – Présent',
    shortSummary: 'Élève-ingénieure en dernière année, parcours Génie Informatique & IA.',
    overview: 'Formation d’ingénieur d’État approfondie en architecture logicielle, systèmes distribués, bases de données, sécurité et intelligence artificielle.',
    contribution: [
      'Conception orientée objet et architectures logicielles (Clean Architecture, Microservices)',
      'Développement Full Stack avec Java/Spring Boot et frameworks front-end',
      'Bases de données avancées, optimisation SQL et modélisation relationnelle',
      'Machine Learning, Deep Learning et Traitement Automatique du Langage Naturel (NLP)',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker', 'Python', 'Machine Learning'],
    isPrivate: false,
  },
  {
    id: 'edu-2',
    type: 'education',
    typeLabel: 'Formation',
    title: 'Cycle Préparatoire Intégré',
    organization: 'ENSA Safi, Maroc',
    location: 'Safi, Maroc',
    period: '2022 – 2024',
    shortSummary: 'Cycle préparatoire aux grandes écoles d’ingénieurs en Sciences Fondamentales.',
    overview: 'Deux années intensives d’acquisition des fondamentaux scientifiques, mathématiques et algorithmiques préparant aux cycles ingénieurs.',
    contribution: [
      'Mathématiques fondamentales (Algèbre linéaire, Analyse, Probabilités & Statistiques)',
      'Physique appliquée et sciences de l’ingénieur',
      'Algorithmique, structures de données et programmation en langage C',
    ],
    tech: ['Algorithmique', 'Structures de données', 'Langage C', 'Mathématiques'],
    isPrivate: false,
  },
  {
    id: 'edu-3',
    type: 'education',
    typeLabel: 'Formation',
    title: 'Baccalauréat Sciences Physiques — Mention Très Bien',
    organization: 'Lycée Qualifiant Ouled Amrane, Sidi Bennour',
    location: 'Maroc',
    period: '2021 – 2022',
    shortSummary: 'Baccalauréat scientifique mention Très Bien.',
    overview: 'Baccalauréat scientifique avec spécialisation en sciences physiques, sanctionné par une Mention Très Bien.',
    contribution: [],
    tech: ['Sciences Physiques', 'Mathématiques'],
    isPrivate: false,
  },
];

export const PROJECTS_DATA = [
  {
    id: 'learning-platform',
    title: 'Plateforme d’Apprentissage Interactive',
    category: 'Full Stack · Education',
    shortDesc:
      'Plateforme de cours avec compétitions en direct, messagerie et suivi de progression en temps réel.',
    overview:
      'Plateforme de cours avec compétitions en direct, messagerie et suivi de progression en temps réel, conçue avec Java, Spring Boot, React, PostgreSQL et WebSocket.',
    features: [
      'Création et gestion de modules de cours',
      'Messagerie et notifications en temps réel via WebSocket',
      'Compétitions étudiantes et duels de code interactifs',
      'Tableau de bord de suivi de progression des apprenants',
      'Contrôle d’accès par rôles et sécurité des endpoints',
    ],
    contribution:
      'Architecture backend complète avec Java 17 et Spring Boot, implémentation des handlers WebSocket pour l’interaction en direct, modélisation de la base PostgreSQL et conception du frontend dynamique en React.',
    architecture: ['Frontend React', 'Couche WebSocket / REST', 'Serveur Spring Boot', 'Base PostgreSQL', 'Conteneurs Docker'],
    tech: ['Java 17', 'Spring Boot', 'React', 'PostgreSQL', 'WebSocket', 'Docker', 'Git', 'GitHub'],
    githubLink: 'https://github.com/sofiastron/CodeArena.git',
    demoLink: null, // TODO: Ajouter le lien de démo en direct si disponible
    accent: 'var(--clay)',
  },
  {
    id: 'carpooling',
    title: 'Plateforme de Covoiturage',
    category: 'Web · Full Stack · Microservices',
    shortDesc:
      'Plateforme de covoiturage basée sur une architecture microservices en Java et Spring Boot.',
    overview:
      'Plateforme de covoiturage d’entreprise basée sur une architecture microservices avec Java, Spring Boot, Spring Security et React.',
    features: [
      'Gestion complète des utilisateurs',
      'Authentification et sécurité via tokens JWT',
      'Création et planification de trajets',
      'Recherche et filtrage multicritères de trajets',
      'Gestion des réservations en temps réel',
      'APIs REST sécurisées',
      'Architecture en microservices découplés',
    ],
    contribution:
      'Conception et développement de l’architecture microservices en Java 17 / Spring Boot, intégration de Spring Security, communication inter-services via APIs REST, persistance MySQL, conteneurisation Docker et interfaces utilisateurs en React.',
    architecture: ['Client React', 'Passerelle API REST', 'Microservices Spring Boot', 'Base MySQL', 'Conteneurs Docker'],
    tech: ['Java 17', 'Spring Boot', 'Spring Security', 'React', 'MySQL', 'Docker', 'Git', 'GitHub', 'REST APIs'],
    githubLink: 'https://github.com/sofiastron/EcoRide.git',
    demoLink: null, // TODO: Ajouter le lien de démo en direct si disponible
    accent: 'var(--espresso)',
  },
  {
    id: 'ai-test-automation',
    title: 'Automatisation des Tests assistée par IA',
    category: 'Backend · AI · Test Automation',
    shortDesc:
      'Plateforme Java/Spring Boot pour la génération et l’évaluation automatisées de tests logiciels via LLM.',
    overview:
      'Outil d’automatisation de la qualité logicielle (orchestrateur Java/Spring Boot) : analyse AST du code, génération de tests via un LLM (Gemini) appelé par WebClient, exécution isolée et persistance avec Spring Data JPA.',
    features: [
      'Génération assistée par IA de tests logiciels',
      'Intégration d’API LLM (Gemini) & prompt engineering',
      'Intégration Java ↔ Node.js via ProcessBuilder',
      'Analyse du code source basée sur l’AST',
      'Exécution automatisée avec Jest & Supertest',
      'Mesure de couverture de code et mutation testing',
      'Tableau de bord de suivi React & TypeScript',
    ],
    contribution:
      'Conception du cœur de l’orchestrateur Java/Spring Boot, intégration de l’API LLM (Gemini) via WebClient, communication inter-processus Node.js avec ProcessBuilder, et réalisation de l’interface React/TypeScript.',
    architecture: ['Dashboard React/TS', 'Orchestrateur Spring Boot', 'Moteur de Prompt LLM (Gemini)', 'Parseur AST', 'ProcessBuilder (Node.js)', 'Rapports de Tests'],
    tech: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'WebClient', 'API LLM (Gemini)', 'ProcessBuilder', 'Jest', 'Supertest', 'React', 'TypeScript', 'JUnit 5', 'Mockito'],
    githubLink: null, // TODO: Ajouter le lien GitHub lorsque le dépôt sera public
    demoLink: null, // TODO: Ajouter le lien de démo en direct si disponible
    accent: 'var(--chambray)',
  },
  {
    id: 'rag-chatbot',
    title: 'Chatbot Intelligent RAG pour Documents PDF',
    category: 'AI · RAG · NLP',
    shortDesc:
      'Outil digital (chatbot RAG) permettant d’interroger des documents PDF par recherche sémantique avec interface Streamlit.',
    overview:
      'Développement d’un outil digital (chatbot RAG) permettant d’interroger des documents PDF par recherche sémantique avec un LLM et indexation vectorielle.',
    features: [
      'Téléversement de documents PDF et extraction textuelle',
      'Découpage (chunking) et prétraitement de texte',
      'Génération d’embeddings avec HuggingFace',
      'Indexation vectorielle avec base FAISS',
      'Recherche sémantique et récupération de contexte',
      'Génération de réponses précises par LLM',
      'Interface conversationnelle interactive avec Streamlit',
      'Intégration base de données SQLite',
    ],
    contribution:
      'Mise en place de la chaîne RAG complète en Python et LangChain, génération des embeddings HuggingFace, indexation vectorielle FAISS, logique de recherche sémantique et développement de l’interface interactive Streamlit.',
    architecture: ['Document PDF', 'Extraction de Texte', 'Découpage (Chunking)', 'Embeddings HuggingFace', 'Index Vectoriel FAISS', 'Recherche Sémantique', 'LLM', 'Réponse Utilisateur'],
    tech: ['Python', 'LangChain', 'FAISS', 'HuggingFace Embeddings', 'Streamlit', 'SQLite', 'LLM'],
    githubLink: null, // TODO: Ajouter le lien GitHub si disponible
    demoLink: null, // TODO: Ajouter le lien de démo en direct si disponible
    accent: '#2D5A4C',
  },
];

export const CERTIFICATIONS_DATA = {
  'Java': [
    { name: 'Java Programming', issuer: 'DataCamp', link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/d79c6452e40e0e7b71a6e48201891568d711e6b6', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { name: 'Oracle Java Foundations', issuer: 'Oracle', link: null, logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { name: 'Introduction to Java', issuer: 'DataCamp', link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ee779adf5c1e9be79a2a71c4c4f9ce16141f77b2', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { name: 'Object-Oriented Programming in Java', issuer: 'DataCamp', link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/b648a2de22341e5a2404de060f5f1a23c6283b2d', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
  ],
  'Git': [
    { name: 'Introduction to Git', issuer: 'DataCamp', link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/bc4540ba3e583dbeae2d58c941cc1d2a3f5979e4', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
    { name: 'Intermediate Git', issuer: 'DataCamp', link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/35e512fcaa8c19610a262d361f198e9605b3f8f4', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
  ],
  'Python': [
    { name: 'Python Programmer Bootcamp', issuer: '365 Data Science', link: 'https://learn.365datascience.com/certificates/CC-83808A5853/', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    { name: 'Introduction Python', issuer: '365 Data Science', link: 'https://learn.365datascience.com/certificates/CC-D782A4BF37/', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  ],
  'JavaScript': [
    { name: 'JavaScript Essentials 1', issuer: 'Cisco Networking Academy', link: null, logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  ],
};
