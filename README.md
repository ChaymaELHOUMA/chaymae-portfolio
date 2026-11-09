# Portfolio Personnel — Chayma EL HOUMA

> **Développeuse Full Stack Java & React | Élève-Ingénieure en Génie Informatique & Intelligence Artificielle (ENSA Safi)**  
> En recherche active d'un **Stage de Fin d’Études (PFE)** de 6 mois à partir de **février 2027**.

[![Déploiement Vercel](https://img.shields.io/badge/Vercel-Déployé-black?style=for-the-badge&logo=vercel)](https://chaymae-portfolio.vercel.app/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Java](https://img.shields.io/badge/Java-17%2B-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Chayma_EL_HOUMA-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/chaymaelhouma)

**Site en direct :** [chaymae-portfolio.vercel.app](https://chaymae-portfolio.vercel.app/)

---

## Sommaire

- [Aperçu du Projet](#aperçu-du-projet)
- [Fonctionnalités Clés](#fonctionnalités-clés)
- [Stack Technique](#stack-technique)
- [Charte Graphique & Palette](#charte-graphique--palette)
- [Structure du Projet](#structure-du-projet)
- [Installation & Démarrage Local](#installation--démarrage-local)
- [Déploiement sur Vercel](#déploiement-sur-vercel)
- [Accessibilité & Performances](#accessibilité--performances)
- [Contact](#contact)

---

## Aperçu du Projet

Ce portfolio personnel présente le profil, les compétences, le parcours académique et professionnel, ainsi que les réalisations techniques de **Chayma EL HOUMA**.

Conçu selon les standards modernes du développement front-end et du design UI/UX, il met en avant :
- Une **conception sur-mesure** sans dépendances CSS superflues (CSS pur avec variables personnalisées).
- Une **architecture modulaire** découplant totalement la logique de présentation des données métier (`src/data/portfolioData.js`).
- Une expérience utilisateur fluide, responsive (mobile, tablette, desktop) et inclusive.

---

## Fonctionnalités Clés

### 1. En-tête & Hero Section
- **Présentation à fort impact** en 2 colonnes avec badge clignotant : `Recherche un stage PFE · février 2027`.
- **Portrait officiel** : cadre arrondi (26 px), format portrait 4/5, chargement prioritaire (`loading="eager"`), décor d'accentuation en arrière-plan et solution de secours (initiales `CH` en cas d'erreur réseau).
- **Actions directes** : téléchargement en 1 clic du CV à jour au format PDF, accès direct au formulaire de contact, badges vers GitHub et LinkedIn.

### 2. Logo de Marque Vectoriel (SVG)
- Emblème monogramme moderne combinant de manière géométrique le **C** et le **E** aux couleurs officielles de la charte.
- Intégré dans la barre de navigation fixe et le pied de page, avec favicon SVG dédié (`public/favicon.svg`).

### 3. Compétences Techniques par Catégories
Organisation claire en 5 domaines d'expertise avec mise en valeur des technologies maîtresses (badge étoilé distinctif) :
- **Backend** : *Java 17*, *Spring Boot*, Spring Security, Spring Data JPA, Hibernate, REST APIs, Microservices, WebClient, WebSocket, POO & Clean Architecture, Lombok.
- **Frontend** : *React*, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5 & CSS3.
- **Bases de données** : *PostgreSQL*, *MySQL*, SQLite, SQL.
- **Tests & Outils** : JUnit 5, Mockito, Jest, Supertest, Postman, Couverture de code, Docker, Maven, Git, GitHub, Méthodologie Agile.
- **IA Générative** : API LLM (Gemini), RAG, LangChain, FAISS, HuggingFace Embeddings, Prompt Engineering, Python.

### 4. Frise Chronologique du Parcours
- Frise unifiée regroupant la **formation académique** (Cycle Ingénieur ENSA Safi, Prépa, Bac) et les **3 stages en entreprise** (Arimayi, Smart Automation Technologies, Agence Nationale des Ports).
- Filtre interactif par onglets : *Tout le parcours*, *Stages en entreprise*, *Formation académique*.
- **Boîte modale accessible** au clavier (`Échap` / `Escape`) détaillant pour chaque stage : contexte du projet, responsabilités détaillées et pile technologique.

### 5. Galerie de Projets & Architecture
- Cartes modernes avec bannières graphiques personnalisées.
- Modals de détails présentant la **vue d’ensemble**, les **fonctionnalités clés**, la **contribution personnelle**, le **workflow architectural** étape par étape et les liens vers les dépôts de code source.

### 6. Certifications Officielles
- Présentation par technologie (Java, Git, Python, JavaScript).
- Badges de vérification officiels redirigeant vers les certificats délivrés par **Oracle**, **DataCamp**, **Cisco** et **365 Data Science**.

### 7. Prise de Contact Multi-Canaux Sans Friction
- Bouton **« Envoyer un message direct »** ouvrant une boîte de dialogue adaptée à tous les environnements :
  - **Ouvrir dans Gmail** : compose directement le message dans Gmail (idéal sur navigateur sans client mail local).
  - **Copier l'adresse** : copie `chaymaelhouma2005@gmail.com` dans le presse-papier avec confirmation visuelle immédiate.
  - **Client Mail** : lance l'application de messagerie locale (`mailto:`).
  - **Formulaire de message pré-rempli** (Nom, Email, Sujet, Message).
- Cartes de contact directes pour l'Email, le Téléphone (`+212 6 72 98 45 69`), LinkedIn et GitHub.

---

## Stack Technique

| Domaine | Technologies |
| :--- | :--- |
| **Framework Front-End** | [React 18](https://react.dev/) (Hooks: `useState`, `useEffect`, `useRef`) |
| **Styles & UI** | Vanilla CSS3, CSS Custom Properties (Variables), Flexbox & CSS Grid |
| **Typographie** | Google Fonts ([Inter](https://fonts.google.com/specimen/Inter) & [DM Mono](https://fonts.google.com/specimen/DM+Mono)) |
| **Données & Modélisation** | JavaScript ES Modules (`src/data/portfolioData.js`) |
| **Icônes & Visuels** | SVGs vectoriels inline et logo sur-mesure |
| **Hébergement & Déploiement** | [Vercel](https://vercel.com/) |

---

## Charte Graphique & Palette

La palette de couleurs est strictement préservée et organisée via des variables CSS :

| Nom de variable | Code Hex | Nuance & Rôle |
| :--- | :--- | :--- |
| `--chambray` | `#79A3C3` | Bleu acier — Accent principal, boutons d'action, indicateurs |
| `--espresso` | `#3A2119` | Marron foncé profond — Textes principaux, titres, contrastes |
| `--glacier` | `#D2E2EC` | Bleu givre — Fonds secondaires, badges mis en avant, halos |
| `--bisque` | `#EBCDB7` | Beige rosé doux — Titres et touches de lumière sur fonds sombres |
| `--clay` | `#957662` | Marron moyen — Sous-titres et métadonnées secondaires |
| `--white` | `#FAF8F5` | Blanc cassé chaleureux — Fond de page global |
| `--dark` | `#1A0E0A` | Bistre très sombre — Toile de fond des fenêtres modales |

---

## Structure du Projet

```text
portfolio/
├── public/
│   ├── favicon.svg             # Favicon SVG du logo de marque CE
│   ├── index.html              # HTML principal, SEO, meta Open Graph & polices
│   ├── photo.jpg               # Portrait officiel optimisé pour le hero
│   ├── CV_Chayma_El_Houma_Full_Stack_Java_React_.pdf  # CV PDF téléchargeable
│   └── images/                 # Dossier des visuels et médias statiques
│       ├── photo.jpg
│       └── CV_Chayma_El_Houma_Full_Stack_Java_React_.pdf
├── src/
│   ├── data/
│   │   └── portfolioData.js    # Source unique des textes, compétences et projets
│   ├── App.js                  # Composant racine et découpage en sections
│   ├── index.css               # Design system, variables CSS, styles et responsive
│   └── index.js                # Point d'entrée ReactDOM
├── package.json                # Dépendances et scripts de build
└── README.md                   # Documentation du projet
```

---

## Installation & Démarrage Local

### Prérequis
- [Node.js](https://nodejs.org/) (version 16.x ou supérieure recommandée)
- `npm` (fourni avec Node.js) ou `yarn`

### 1. Cloner le dépôt
```bash
git clone https://github.com/ChaymaELHOUMA/portfolio.git
cd portfolio
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Lancer le serveur de développement
```bash
npm start
```
L'application s'exécute en local sur [http://localhost:3000](http://localhost:3000).

### 4. Compiler pour la production
```bash
npm run build
```
Le dossier optimisé et minifié sera généré dans `/build`.

---

## Déploiement sur Vercel

Le projet est configuré pour se déployer automatiquement à chaque push sur la branche principale :

```bash
git add .
git commit -m "feat: mise a jour du portfolio"
git push origin main
```

Pour déployer manuellement via le CLI Vercel :
```bash
npm install -g vercel
vercel --prod
```

---

## Accessibilité & Performances

- **Balises HTML5 Sémantiques** : utilisation rigoureuse de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>`/`role="dialog"` et `<footer>`.
- **Navigation au clavier** : tous les éléments interactifs possèdent un état `:focus-visible` net et accessible. Fermeture des fenêtres modales par la touche `Échap`.
- **Préférence de réduction des mouvements** : respect de la directive `@media (prefers-reduced-motion: reduce)` pour désactiver les animations si souhaité par l'utilisateur.
- **Performance Lighthouse** : images optimisées (< 200 Ko), préconnexion DNS vers Google Fonts (`preconnect`), build CSS minifié (< 5 Ko gzip) et JavaScript allégé (< 60 Ko gzip).

---

## Contact

Pour toute opportunité de stage PFE ou échange technique :

- **Nom :** Chayma EL HOUMA
- **Email :** [chaymaelhouma2005@gmail.com](mailto:chaymaelhouma2005@gmail.com)
- **Téléphone :** [+212 6 72 98 45 69](tel:+212672984569)
- **LinkedIn :** [linkedin.com/in/chaymaelhouma](https://www.linkedin.com/in/chaymaelhouma)
- **GitHub :** [github.com/ChaymaELHOUMA](https://github.com/ChaymaELHOUMA)
- **Portfolio :** [chaymae-portfolio.vercel.app](https://chaymae-portfolio.vercel.app/)

---

*© 2026 Chayma EL HOUMA. Conçu avec soin pour le web moderne.*
