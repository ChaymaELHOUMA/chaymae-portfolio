import React, { useState, useEffect, useRef } from 'react';
import './index.css';

/* ─── DATA ─── */
const SKILLS = {
  'Backend Development': [
    'Java 17', 'Spring Boot', 'Spring MVC', 'Spring Security', 
    'Spring Data JPA', 'Hibernate', 'REST APIs', 'Spring Modulith', 
    'Clean Architecture', 'Microservices'
  ],
  'Frontend Development': [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS'
  ],
  'Databases': [
    'PostgreSQL', 'MySQL', 'SQLite', 'SQL'
  ],
  'Testing & Quality': [
    'JUnit 5', 'Mockito', 'Jest', 'Supertest', 'Postman'
  ],
  'AI Engineering': [
    'Large Language Models (LLMs)', 'Retrieval-Augmented Generation (RAG)', 
    'LangChain', 'Prompt Engineering', 'FAISS', 'HuggingFace'
  ],
  'Tools & DevOps': [
    'Docker', 'Maven', 'Git', 'GitHub', 'IntelliJ IDEA', 'VS Code'
  ],
};

const EXPERIENCES = [
  {
    title: 'Backend Java Developer Intern',
    company: 'Arimayi',
    location: 'France (Remote)',
    dates: '09 June 2026 – 07 September 2026',
    shortSummary: 'Contributed to CyberWatch360, a cybersecurity supervision platform designed to centralize and manage security assets.',
    overview: 'During my internship at Arimayi, I contributed to the development of CyberWatch360, a cybersecurity supervision platform designed to centralize and manage security assets.',
    contribution: [
      'Developed the Asset Management module',
      'Designed and implemented REST APIs',
      'Implemented asset creation, update and archiving',
      'Developed CSV/JSON import functionality',
      'Implemented import history',
      'Implemented multicriteria asset search',
      'Implemented asset dependency management',
      'Integrated the module with other application modules',
      'Worked with Spring Data JPA and PostgreSQL',
      'Contributed to security integration with Spring Security',
      'Wrote unit tests with JUnit 5 and Mockito',
      'Tested REST APIs using Postman',
      'Contributed to the Next.js/TypeScript frontend',
      'Designed UML diagrams and technical documentation',
      'Collaborated using Git Flow'
    ],
    tech: [
      'Java 17', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 
      'Hibernate', 'PostgreSQL', 'REST API', 'JUnit 5', 'Mockito', 
      'Postman', 'Next.js', 'TypeScript', 'Docker', 'Git'
    ],
    isPrivate: true
  },
  {
    title: 'Software Test Automation Intern',
    company: 'Smart Automation Technologies',
    location: 'Remote',
    dates: '09 July 2026 – 09 September 2026',
    shortSummary: 'Developed a Java/Spring Boot orchestration platform for AI-assisted software test generation and evaluation.',
    overview: 'During this internship, I developed a Java/Spring Boot orchestration platform for AI-assisted software test generation and evaluation.',
    contribution: [
      'Developed the Java/Spring Boot orchestrator',
      'Integrated Large Language Models',
      'Implemented prompt engineering',
      'Built REST APIs',
      'Developed Java ↔ Node.js integration',
      'Used ProcessBuilder to execute Node.js processes',
      'Implemented AST-based source code analysis',
      'Automated software test generation',
      'Executed generated tests using Jest and Supertest',
      'Measured code coverage using nyc/Istanbul',
      'Evaluated test quality using mutation testing with Stryker',
      'Developed a React/TypeScript dashboard',
      'Used JUnit and Mockito for testing'
    ],
    tech: [
      'Java 17', 'Spring Boot', 'WebClient', 'Node.js', 'ProcessBuilder', 
      'LLMs', 'Prompt Engineering', 'AST', 'Jest', 'Supertest', 
      'nyc/Istanbul', 'Stryker', 'JUnit 5', 'Mockito', 'React', 'TypeScript'
    ],
    isPrivate: true
  },
  {
    title: 'AI Chatbot Intern — RAG',
    company: 'Agence Nationale des Ports (ANP)',
    location: 'Casablanca, Morocco',
    dates: 'August 2025',
    shortSummary: 'Developed a RAG chatbot allowing users to upload PDF documents and interact with content via semantic search and an LLM.',
    overview: 'Developed a Retrieval-Augmented Generation chatbot allowing users to upload PDF documents and interact with their content using semantic search and an LLM.',
    contribution: [
      'PDF document upload',
      'Text extraction',
      'Document chunking',
      'Embedding generation',
      'FAISS vector indexing',
      'Semantic search',
      'Context retrieval',
      'LLM response generation',
      'Chat interface',
      'SQLite integration'
    ],
    tech: [
      'Python', 'LangChain', 'FAISS', 'HuggingFace Embeddings', 
      'Streamlit', 'SQLite', 'PyPDF2', 'LLM'
    ],
    isPrivate: false
  }
];

const PROJECTS = [
  {
    id: 'carpooling',
    title: 'Carpooling Platform',
    category: 'Web · Full Stack · Microservices',
    shortDesc: 'Enterprise microservices-based carpooling platform developed with Java and Spring Boot.',
    overview: 'Enterprise microservices-based carpooling platform developed with Java and Spring Boot.',
    features: [
      'User management',
      'Authentication & JWT security',
      'Trip creation & scheduling',
      'Trip search & multi-criteria filtering',
      'Reservation management',
      'Secure REST APIs',
      'Microservices architecture'
    ],
    contribution: 'Designed and built the microservices architecture in Java 17 / Spring Boot, integrated Spring Security, established RESTful API communication, persisted user and ride records with MySQL, containerized services with Docker, and implemented frontend UI components in React.',
    architecture: ['React Client', 'REST API Gateway', 'Spring Boot Microservices', 'MySQL Database', 'Docker Containers'],
    tech: ['Java 17', 'Spring Boot', 'Spring Security', 'React', 'MySQL', 'Docker', 'Git', 'REST APIs'],
    githubLink: 'https://github.com/sofiastron/EcoRide.git',
    accent: 'var(--espresso)'
  },
  {
    id: 'learning-platform',
    title: 'Interactive Learning Platform',
    category: 'Full Stack · Education',
    shortDesc: 'Interactive educational platform featuring course management, real-time communication, competitions and student progress tracking.',
    overview: 'Interactive educational platform featuring course management, real-time communication, competitions and student progress tracking.',
    features: [
      'Course creation & module management',
      'Real-time WebSocket communication & notifications',
      'Interactive student competitions & coding duels',
      'Student progress tracking & performance dashboards',
      'Role-based access control & secure endpoints'
    ],
    contribution: 'Architected the backend platform using Java 17 and Spring Boot, developed WebSocket handlers for live real-time interaction and competitive duels, managed PostgreSQL database schemas, and built dynamic user dashboards with React.',
    architecture: ['React Frontend', 'WebSocket / REST Layer', 'Spring Boot Server', 'PostgreSQL Database', 'Docker'],
    tech: ['Java 17', 'Spring Boot', 'React', 'PostgreSQL', 'WebSocket', 'Docker'],
    githubLink: 'https://github.com/sofiastron/CodeArena.git',
    accent: 'var(--clay)'
  },
  {
    id: 'ai-test-automation',
    title: 'AI-Assisted Software Test Automation',
    category: 'Backend · AI · Test Automation',
    shortDesc: 'Java/Spring Boot platform for AI-assisted software test generation and evaluation.',
    overview: 'Java/Spring Boot platform for AI-assisted software test generation and evaluation.',
    features: [
      'AI-assisted automated test generation',
      'LLM integration & prompt engineering',
      'Java ↔ Node.js integration via ProcessBuilder',
      'AST-based source code analysis',
      'Automated test execution with Jest & Supertest',
      'Code coverage analysis with nyc/Istanbul',
      'Mutation testing with Stryker',
      'Test quality evaluation metrics',
      'React & TypeScript interactive dashboard'
    ],
    contribution: 'Engineered the core Java/Spring Boot orchestrator, crafted specialized prompts for LLM test generation, built inter-process communication using ProcessBuilder to trigger Node.js analysis modules, integrated coverage and mutation analysis engines, and created the React dashboard.',
    architecture: ['React/TS Dashboard', 'Spring Boot Orchestrator', 'LLM Prompt Engine', 'AST Parser', 'ProcessBuilder (Node.js)', 'Coverage & Stryker Reports'],
    tech: ['Java 17', 'Spring Boot', 'Node.js', 'LLMs', 'Jest', 'Supertest', 'nyc/Istanbul', 'Stryker', 'React', 'TypeScript', 'JUnit', 'Mockito'],
    accent: 'var(--chambray)'
  },
  {
    id: 'rag-chatbot',
    title: 'Intelligent PDF Chatbot — RAG',
    category: 'AI · RAG · NLP',
    shortDesc: 'RAG-based chatbot allowing users to upload PDF documents and ask questions using semantic search and an LLM.',
    overview: 'RAG-based chatbot allowing users to upload PDF documents and ask questions using semantic search and an LLM.',
    features: [
      'PDF document upload & text extraction',
      'Document text chunking & preprocessing',
      'HuggingFace text embeddings generation',
      'FAISS vector index storage',
      'Semantic search & context retrieval',
      'LLM answer synthesis',
      'Streamlit chat interface',
      'SQLite database integration'
    ],
    contribution: 'Built the complete RAG pipeline with Python and LangChain, constructed FAISS vector indexing with HuggingFace Embeddings, engineered semantic retrieval logic, and created an interactive Streamlit UI.',
    architecture: ['PDF Document', 'Text Extraction', 'Chunking', 'Embeddings', 'FAISS Index', 'Semantic Retrieval', 'LLM', 'Answer'],
    tech: ['Python', 'LangChain', 'FAISS', 'HuggingFace Embeddings', 'Streamlit', 'SQLite', 'LLM'],
    accent: '#2D5A4C'
  }
];

const CERTS_BY_CATEGORY = {
  'Java': [
    { name: 'Oracle Java Foundations', issuer: 'Oracle', link: null, logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { name: 'Java Programming Achievement — Intermediate Level', issuer: 'DataCamp', link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/d79c6452e40e0e7b71a6e48201891568d711e6b6', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { name: 'Introduction to Java', issuer: 'DataCamp', link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ee779adf5c1e9be79a2a71c4c4f9ce16141f77b2', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { name: 'Introduction to Object-Oriented Programming in Java', issuer: 'DataCamp', link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/b648a2de22341e5a2404de060f5f1a23c6283b2d', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' }
  ],
  'Git': [
    { name: 'Introduction to Git', issuer: 'DataCamp', link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/bc4540ba3e583dbeae2d58c941cc1d2a3f5979e4', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
    { name: 'Intermediate Git', issuer: 'DataCamp', link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/35e512fcaa8c19610a262d361f198e9605b3f8f4', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' }
  ],
  'Python': [
    { name: 'Introduction Python', issuer: '365 Data Science', link: 'https://learn.365datascience.com/certificates/CC-D782A4BF37/', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    { name: 'Intermediate Python', issuer: '365 Data Science', link: 'https://learn.365datascience.com/certificates/CC-83808A5853/', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' }
  ],
  'JavaScript': [
    { name: 'JavaScript Essentials 1', issuer: 'Cisco Networking Academy', link: null, logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' }
  ]
};

/* ─── HOOK: Intersection Observer ─── */
function useVisible(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── COMPONENTS ─── */

function Nav({ active }) {
  const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Certifications', 'Contact'];
  const ids   = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const linkStyle = (id) => ({
    fontFamily: 'var(--font-ui)',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: active === id ? 'var(--chambray)' : 'var(--espresso)',
    opacity: active === id ? 1 : 0.6,
    transition: 'var(--transition-fast)',
    position: 'relative',
  });

  return (
    <>
      <nav className="glass" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: scrolled || menuOpen ? '70px' : '90px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(16px, 5vw, 8vw)',
        transition: 'var(--transition-smooth)',
        borderBottom: scrolled || menuOpen ? '1px solid rgba(121, 163, 195, 0.15)' : '1px solid transparent',
        background: scrolled || menuOpen ? 'var(--white-glass)' : 'transparent',
      }}>
        <a href="#home" className="nav-logo" style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.8rem',
          fontWeight: 700,
          color: 'var(--espresso)',
          cursor: 'pointer',
        }} onClick={closeMenu}>
          C<span style={{ color: 'var(--chambray)' }}>.</span>EH
        </a>

        <div className="nav-desktop">
          {links.map((l, i) => (
            <a key={l} href={`#${ids[i]}`} style={linkStyle(ids[i])}>
              {l}
              {active === ids[i] && (
                <div style={{
                  position: 'absolute', bottom: -6, left: 0, width: '100%', height: 2,
                  background: 'var(--chambray)', borderRadius: 2,
                }} />
              )}
            </a>
          ))}
          <a
            href="/CV_ELHOUMA_CHAYMA__.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '8px 16px',
              background: 'var(--chambray)',
              color: 'var(--white)',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              boxShadow: 'var(--shadow-sm)',
              transition: 'var(--transition-fast)'
            }}
          >
            CV
          </a>
        </div>

        <button
          type="button"
          className="nav-mobile-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {links.map((l, i) => (
          <a
            key={l}
            href={`#${ids[i]}`}
            className={active === ids[i] ? 'active' : ''}
            onClick={closeMenu}
          >
            {l}
          </a>
        ))}
        <a
          href="/CV_ELHOUMA_CHAYMA__.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--chambray)', fontWeight: 700 }}
          onClick={closeMenu}
        >
          📄 Download CV
        </a>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section" style={{
      minHeight: '100vh',
      background: `radial-gradient(circle at 70% 30%, var(--glacier) 0%, var(--white) 100%)`,
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '100px clamp(16px, 5vw, 8vw) 4rem',
    }}>
      <div className="hero-decor-large" style={{
        position: 'absolute', top: '15%', right: '10%', width: '400px', height: '400px',
        background: 'var(--chambray)', opacity: 0.05, borderRadius: '50%', filter: 'blur(80px)',
        animation: 'float 10s ease-in-out infinite',
      }} />
      <div className="hero-decor-small" style={{
        position: 'absolute', bottom: '10%', left: '5%', width: '300px', height: '300px',
        background: 'var(--clay)', opacity: 0.05, borderRadius: '50%', filter: 'blur(60px)',
        animation: 'float 8s ease-in-out infinite reverse',
      }} />

      <div className="hero-grid" style={{ maxWidth: '1200px', zIndex: 10 }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '8px 16px', background: 'var(--espresso-soft)', borderRadius: '100px',
            marginBottom: '2rem', animation: 'fadeUp 0.6s ease forwards'
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--chambray)', animation: 'pulse-glow 2s infinite' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 600, color: 'var(--clay)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Java/Spring Boot • React • REST APIs • PostgreSQL
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', fontWeight: 300, lineHeight: 1,
            color: 'var(--espresso)', marginBottom: '1rem', animation: 'fadeUp 0.8s 0.2s ease forwards', opacity: 0
          }}>
            Chayma <br />
            <span style={{ fontWeight: 700, fontStyle: 'italic' }} className="text-gradient">EL HOUMA</span>
          </h1>

          <p style={{
            fontSize: '1.1rem', color: 'var(--clay)', maxWidth: '560px', marginBottom: '2.5rem',
            animation: 'fadeUp 0.8s 0.4s ease forwards', opacity: 0, lineHeight: 1.7
          }}>
            Final-year Computer Science and Artificial Intelligence Engineering student specializing in software and web development. Focused on building robust backend systems with <strong>Java 17 & Spring Boot</strong>, modern web interfaces with <strong>React & Next.js</strong>, and incorporating Generative AI solutions.
          </p>

          <div className="hero-actions" style={{ animation: 'fadeUp 0.8s 0.6s ease forwards', opacity: 0 }}>
            <a href="#projects" className="btn" style={{
              padding: '16px 28px', background: 'var(--espresso)', color: 'var(--white)',
              borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em',
              transition: 'var(--transition-smooth)', boxShadow: 'var(--shadow-md)'
            }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = 'var(--shadow-lg)'; }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'var(--shadow-md)'; }}
            >
              Explore my projects
            </a>
            
            <a href="/CV_ELHOUMA_CHAYMA__.pdf" target="_blank" rel="noopener noreferrer" className="btn" style={{
              padding: '16px 28px', background: 'var(--chambray)', color: 'var(--white)',
              borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em',
              transition: 'var(--transition-smooth)', boxShadow: 'var(--shadow-md)',
              display: 'flex', alignItems: 'center', gap: '8px'
            }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.background = '#608CAE'; }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.background = 'var(--chambray)'; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="12" y1="18" x2="12" y2="12"></line>
                <polyline points="9 15 12 12 15 15"></polyline>
              </svg>
              Download CV
            </a>

            <a href="#contact" className="btn" style={{
              padding: '16px 28px', border: '1.5px solid var(--espresso)', color: 'var(--espresso)',
              borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={e => { e.target.style.background = 'rgba(58, 33, 25, 0.05)'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; }}
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="hero-profile" style={{ position: 'relative', animation: 'fadeIn 1.5s 0.5s ease forwards', opacity: 0, marginTop: '70px' }}>
          <div className="glass" style={{
            width: '100%', aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            padding: '2.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.4)',
            boxShadow: 'var(--shadow-lg)'
          }}>
             <div style={{
              width: 110, height: 110, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--chambray), var(--clay))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2.8rem', fontWeight: 700, color: 'var(--white)',
              marginBottom: '1.5rem', border: '4px solid var(--white)',
              boxShadow: '0 10px 20px rgba(121, 163, 195, 0.3)'
            }}>CE</div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--espresso)', marginBottom: '0.25rem' }}>Chayma EL HOUMA</h3>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--chambray)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.75rem', fontWeight: 600 }}>
              Software & Web Developer
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', width: '100%' }}>
              {[
                { label: 'Internships', val: '3' },
                { label: 'Projects', val: '4+' },
                { label: 'Certifs', val: '9' }
              ].map(stat => (
                <div key={stat.label} style={{ padding: '0.85rem 0.5rem', background: 'var(--espresso-soft)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--espresso)' }}>{stat.val}</div>
                  <div style={{ fontSize: '0.62rem', color: 'var(--clay)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'absolute', top: -20, right: -20, width: 60, height: 60, background: 'var(--bisque)', borderRadius: '50%', opacity: 0.5, zIndex: -1 }} />
          <div style={{ position: 'absolute', bottom: -10, left: -10, width: 40, height: 40, background: 'var(--glacier)', borderRadius: '50%', opacity: 0.8, zIndex: -1 }} />
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ label, title, center = false, dark = false, visible }) {
  return (
    <div className="section-header-wrap" style={{
      textAlign: center ? 'center' : 'left',
      marginBottom: '4rem',
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(20px)',
      transition: 'var(--transition-smooth)'
    }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600,
        color: 'var(--chambray)', textTransform: 'uppercase', letterSpacing: '0.2em',
        display: 'block', marginBottom: '1rem'
      }}>{label}</span>
      <h2 style={{
        fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: dark ? 'var(--white)' : 'var(--espresso)',
        lineHeight: 1.1, fontWeight: 300
      }}>
        {title}
      </h2>
      <div style={{
        height: '3px', width: '60px', background: 'var(--chambray)',
        margin: center ? '1.5rem auto 0' : '1.5rem 0 0',
        borderRadius: '2px',
        animation: visible ? 'draw-line 1s ease forwards' : 'none'
      }} />
    </div>
  );
}

function About() {
  const [ref, visible] = useVisible();
  
  const aboutParagraphs = [
    "I am a final-year Computer Science and Artificial Intelligence engineering student at ENSA Safi, passionate about software and web development.",
    "My main expertise is Java 17 and Spring Boot, with experience in designing REST APIs, business features, database integration and secure backend applications.",
    "I also have hands-on experience with React, Next.js and TypeScript for building modern web interfaces and integrating frontend applications with REST APIs.",
    "Through my internships and projects, I have also worked with software testing, Docker, Git and Generative AI technologies such as LLMs and RAG."
  ];

  return (
    <section id="about" ref={ref} className="section-padding" style={{
      background: `linear-gradient(160deg, var(--espresso) 0%, #5c3527 60%, #3A2119 100%)`,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(121,163,195,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div className="about-grid" style={{ maxWidth: '1100px', margin: '0 auto', gridTemplateColumns: '1fr' }}>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-30px)', transition: 'all 0.9s ease', marginBottom: '2.5rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--chambray)', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '1.2rem' }}>
            About
          </span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', fontWeight: 300, color: 'var(--bisque)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            About <em style={{ fontStyle: 'italic', fontWeight: 700, color: 'var(--glacier)' }}>Me</em>
          </h2>
          <div style={{ width: 60, height: 3, background: 'var(--chambray)', borderRadius: 2 }} />
        </div>
        
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(30px)', transition: 'all 0.9s 0.2s ease' }}>
          <div className="about-card" style={{
            background: 'rgba(210,226,236,0.05)',
            border: '1px solid rgba(210,226,236,0.12)',
            borderRadius: '20px', padding: '3rem',
            backdropFilter: 'blur(10px)',
          }}>
            {aboutParagraphs.map((para, i) => (
              <p key={i} style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '1.05rem',
                lineHeight: 1.85,
                color: 'rgba(235,205,183,0.85)',
                marginBottom: i < aboutParagraphs.length - 1 ? '1.5rem' : 0,
                paddingLeft: '1.2rem',
                borderLeft: i === 0 || i === 1 ? '3px solid var(--chambray)' : '3px solid rgba(121, 163, 195, 0.3)',
              }}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [ref, visible] = useVisible();
  return (
    <section id="skills" ref={ref} className="section-padding" style={{ background: 'var(--white)' }}>
      <SectionHeader label="Expertise" title="Technical Skills" visible={visible} />
      
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem',
        opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)',
        transition: 'var(--transition-smooth) 0.3s'
      }}>
        {Object.entries(SKILLS).map(([cat, items], idx) => (
          <div key={cat} className="glass" style={{
            padding: '2.5rem', borderRadius: '20px', transition: 'var(--transition-smooth)',
            border: '1px solid rgba(121,163,195,0.15)'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'var(--chambray)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(121,163,195,0.15)'; }}
          >
            <h3 style={{ fontSize: '1.4rem', color: 'var(--espresso)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--chambray)' }} />
              {cat}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {items.map(skill => (
                <span key={skill} style={{
                  padding: '6px 14px', background: 'var(--white)', borderRadius: '6px',
                  fontSize: '0.82rem', fontWeight: 600, color: 'var(--espresso)',
                  border: '1px solid var(--glacier)', transition: 'var(--transition-fast)'
                }}
                onMouseEnter={e => { e.target.style.background = 'var(--glacier)'; e.target.style.color = 'var(--espresso)'; }}
                onMouseLeave={e => { e.target.style.background = 'var(--white)'; e.target.style.color = 'var(--espresso)'; }}
                >{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceModal({ exp, onClose }) {
  if (!exp) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--chambray)', fontWeight: 700 }}>
              {exp.dates}
            </span>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--espresso)', margin: 0, marginTop: '2px' }}>
              {exp.title}
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--clay)', margin: 0, fontWeight: 600 }}>
              {exp.company} — {exp.location}
            </p>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        <div className="modal-body">
          {exp.isPrivate && (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px', background: 'rgba(58, 33, 25, 0.06)',
              borderRadius: '8px', border: '1px solid rgba(58, 33, 25, 0.12)',
              marginBottom: '1.5rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--espresso)'
            }}>
              <span>🔒 Private Enterprise Project</span>
              <span style={{ color: 'var(--clay)', fontWeight: 400 }}>• Professional Confidentiality Maintained</span>
            </div>
          )}

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--espresso)', marginBottom: '0.75rem', borderBottom: '2px solid var(--glacier)', paddingBottom: '0.4rem' }}>
              Overview
            </h4>
            <p style={{ fontSize: '1rem', color: 'var(--espresso)', lineHeight: 1.7 }}>
              {exp.overview}
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--espresso)', marginBottom: '0.75rem', borderBottom: '2px solid var(--glacier)', paddingBottom: '0.4rem' }}>
              My Contribution & Responsibilities
            </h4>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--espresso)', fontSize: '0.95rem', lineHeight: 1.8 }}>
              {exp.contribution.map((item, idx) => (
                <li key={idx} style={{ marginBottom: '0.4rem' }}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--espresso)', marginBottom: '0.75rem', borderBottom: '2px solid var(--glacier)', paddingBottom: '0.4rem' }}>
              Technologies & Tools
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {exp.tech.map(t => (
                <span key={t} style={{
                  fontSize: '0.8rem', fontWeight: 600, color: 'var(--espresso)',
                  padding: '6px 12px', background: 'var(--glacier)', borderRadius: '6px'
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfessionalExperience() {
  const [ref, visible] = useVisible();
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section id="experience" ref={ref} className="section-padding" style={{ background: 'var(--espresso)' }}>
      <SectionHeader label="Career" title="Professional Experience" dark visible={visible} />
      
      <div className="experience-timeline" style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid rgba(121,163,195,0.2)', maxWidth: '1000px', margin: '0 auto' }}>
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} style={{
            marginBottom: '4rem', position: 'relative',
            opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-20px)',
            transition: `all 0.8s ${idx * 0.15}s`
          }}>
            <div className="experience-dot" style={{
              position: 'absolute', left: '-2.7rem', top: '0', width: '20px', height: '20px',
              borderRadius: '50%', background: 'var(--chambray)', border: '4px solid var(--espresso)',
              boxShadow: '0 0 0 4px rgba(121,163,195,0.1)',
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--chambray)', fontWeight: 600 }}>
                {exp.dates}
              </span>
              <h4 style={{ fontSize: '1.5rem', color: 'var(--white)', margin: 0 }}>
                {exp.title}
              </h4>
              <p style={{ fontSize: '1.1rem', color: 'var(--bisque)', margin: 0, fontWeight: 500 }}>
                {exp.company} — <span style={{ fontSize: '0.95rem', opacity: 0.8 }}>{exp.location}</span>
              </p>
              
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.7, margin: '0.75rem 0 1rem' }}>
                {exp.shortSummary}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {exp.tech.map(t => (
                  <span key={t} style={{
                    fontSize: '0.75rem', fontWeight: 600, color: 'var(--espresso)',
                    padding: '4px 10px', background: 'var(--glacier)', borderRadius: '6px'
                  }}>{t}</span>
                ))}
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setSelectedExp(exp)}
                  style={{
                    padding: '10px 20px',
                    background: 'transparent',
                    border: '1.5px solid var(--chambray)',
                    color: 'var(--glacier)',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--chambray)'; e.currentTarget.style.color = 'var(--white)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--glacier)'; }}
                >
                  <span>View Experience</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ExperienceModal exp={selectedExp} onClose={() => setSelectedExp(null)} />
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <button
              type="button"
              onClick={onClose}
              style={{
                background: 'none', border: 'none', color: 'var(--chambray)',
                fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '0.4rem'
              }}
            >
              ← Back to Projects
            </button>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--espresso)', margin: 0 }}>
              {project.title}
            </h3>
            <span style={{
              fontSize: '0.75rem', fontWeight: 700, color: 'var(--clay)',
              textTransform: 'uppercase', letterSpacing: '0.1em'
            }}>
              {project.category}
            </span>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--espresso)', marginBottom: '0.5rem', borderBottom: '2px solid var(--glacier)', paddingBottom: '0.4rem' }}>
              Overview
            </h4>
            <p style={{ fontSize: '1rem', color: 'var(--espresso)', lineHeight: 1.7 }}>
              {project.overview}
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--espresso)', marginBottom: '0.75rem', borderBottom: '2px solid var(--glacier)', paddingBottom: '0.4rem' }}>
              Key Features
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
              {project.features.map((feat, idx) => (
                <div key={idx} style={{
                  padding: '10px 14px', background: 'var(--espresso-soft)',
                  borderRadius: '8px', fontSize: '0.88rem', fontWeight: 600, color: 'var(--espresso)',
                  display: 'flex', alignItems: 'center', gap: '8px'
                }}>
                  <span style={{ color: 'var(--chambray)' }}>✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--espresso)', marginBottom: '0.5rem', borderBottom: '2px solid var(--glacier)', paddingBottom: '0.4rem' }}>
              My Contribution
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--espresso)', lineHeight: 1.7 }}>
              {project.contribution}
            </p>
          </div>

          {project.architecture && (
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--espresso)', marginBottom: '0.5rem', borderBottom: '2px solid var(--glacier)', paddingBottom: '0.4rem' }}>
                Architecture & Workflow
              </h4>
              <div className="architecture-flow">
                {project.architecture.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flow-step">{step}</div>
                    {idx < project.architecture.length - 1 && <div className="flow-arrow">➔</div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--espresso)', marginBottom: '0.75rem', borderBottom: '2px solid var(--glacier)', paddingBottom: '0.4rem' }}>
              Technologies Used
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {project.tech.map(t => (
                <span key={t} style={{
                  fontSize: '0.85rem', fontWeight: 600, color: 'var(--chambray)',
                  padding: '6px 14px', background: 'var(--glacier)', borderRadius: '6px'
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid rgba(121, 163, 195, 0.15)' }}>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '12px 24px', background: 'var(--espresso)', color: 'var(--white)',
                  borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  textDecoration: 'none'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub Repository →</span>
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '12px 24px', background: 'var(--chambray)', color: 'var(--white)',
                  borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  textDecoration: 'none'
                }}
              >
                <span>Live Demo →</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [ref, visible] = useVisible();
  const [selectedProj, setSelectedProj] = useState(null);

  return (
    <section id="projects" ref={ref} className="section-padding" style={{ background: 'var(--glacier)', backgroundOpacity: 0.3 }}>
      <SectionHeader label="Portfolio" title="Projects" visible={visible} />
      
      <div className="projects-grid">
        {PROJECTS.map((project, idx) => (
          <div key={project.title} style={{
            background: 'var(--white)', borderRadius: '24px', overflow: 'hidden',
            boxShadow: 'var(--shadow-md)', transition: 'var(--transition-smooth)',
            opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)',
            transitionDelay: `${idx * 0.1}s`, display: 'flex', flexDirection: 'column',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
          >
            <div className="project-header" style={{ height: '220px', background: project.accent, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, opacity: 0.2, backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '4rem', fontWeight: 800, opacity: 0.15 }}>
                {project.title.charAt(0)}
              </div>
              
              <div style={{ position: 'absolute', bottom: '16px', left: '20px', zIndex: 2 }}>
                <span style={{
                  padding: '6px 12px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)',
                  borderRadius: '6px', fontSize: '0.65rem', fontWeight: 700, color: 'white',
                  textTransform: 'uppercase', letterSpacing: '0.1em'
                }}>
                  {project.category}
                </span>
              </div>
            </div>
            
            <div className="project-card-inner" style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--espresso)', marginBottom: '0.75rem' }}>{project.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--clay)', lineHeight: 1.7, marginBottom: '1.75rem', flex: 1 }}>
                {project.shortDesc}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    fontSize: '0.7rem', fontWeight: 600, color: 'var(--chambray)',
                    padding: '4px 10px', background: 'var(--glacier)', borderRadius: '4px'
                  }}>{t}</span>
                ))}
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setSelectedProj(project)}
                  style={{
                    width: '100%',
                    padding: '12px 20px',
                    background: 'var(--espresso)',
                    color: 'var(--white)',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--chambray)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--espresso)'; }}
                >
                  <span>View Project</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProj}
        onClose={() => setSelectedProj(null)}
      />
    </section>
  );
}

function Education() {
  const [ref, visible] = useVisible();
  const experiences = [
    {
      year: '2024 – Present',
      title: 'Engineering Cycle — Computer Science & Artificial Intelligence',
      school: 'ENSA Safi',
      sub: 'Final-year engineering student'
    },
    {
      year: '2022 – 2024',
      title: 'Integrated Preparatory Classes',
      school: 'ENSA Safi',
      sub: 'Fundamental Sciences'
    },
    {
      year: '2021 – 2022',
      title: 'Scientific Baccalaureate',
      school: 'Awlade Amrane High School',
      sub: 'Physical Sciences — Mention Très Bien'
    },
  ];

  return (
    <section id="education" ref={ref} className="section-padding" style={{ background: 'var(--white)' }}>
      <SectionHeader label="Academic Background" title="Education" visible={visible} />
      
      <div className="experience-timeline" style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid rgba(121,163,195,0.2)', maxWidth: '1000px', margin: '0 auto' }}>
         {experiences.map((exp, idx) => (
          <div key={idx} style={{
            marginBottom: '3.5rem', position: 'relative',
            opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-20px)',
            transition: `all 0.8s ${idx * 0.15}s`
          }}>
            <div className="experience-dot" style={{
              position: 'absolute', left: '-2.7rem', top: '0', width: '20px', height: '20px',
              borderRadius: '50%', background: 'var(--chambray)', border: '4px solid var(--white)',
              boxShadow: '0 0 0 4px rgba(121,163,195,0.1)',
            }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--chambray)', fontWeight: 600 }}>{exp.year}</span>
            <h4 style={{ fontSize: '1.4rem', color: 'var(--espresso)', marginTop: '0.5rem', marginBottom: '0.25rem' }}>{exp.title}</h4>
            <p style={{ fontSize: '1rem', color: 'var(--clay)', marginBottom: '0.5rem', fontWeight: 600 }}>{exp.school}</p>
            <p style={{ fontSize: '0.88rem', color: 'rgba(58, 33, 25, 0.7)' }}>{exp.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  const [ref, visible] = useVisible();

  return (
    <section id="certifications" ref={ref} className="section-padding" style={{ 
      background: 'linear-gradient(to bottom, var(--white), var(--glacier))',
      position: 'relative'
    }}>
      <SectionHeader label="Achievements" title="Certifications" center visible={visible} />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {Object.entries(CERTS_BY_CATEGORY).map(([category, certList], catIdx) => (
          <div key={category} style={{ marginBottom: '3.5rem' }}>
            <h3 className="cert-group-title">
              <span style={{ color: 'var(--chambray)' }}>//</span> {category}
            </h3>
            
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem',
              opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)',
              transition: `all 0.8s ${catIdx * 0.1}s`
            }}>
              {certList.map((cert, i) => (
                <div 
                  key={cert.name + i} 
                  onClick={() => { if (cert.link) window.open(cert.link, '_blank', 'noopener,noreferrer'); }}
                  className="cert-card"
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    padding: '2rem',
                    textAlign: 'left',
                    border: '1px solid rgba(121, 163, 195, 0.2)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: cert.link ? 'pointer' : 'default',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                  }}
                  onMouseEnter={e => { 
                    e.currentTarget.style.transform = 'translateY(-6px)'; 
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(58, 33, 25, 0.08)'; 
                    e.currentTarget.style.borderColor = 'var(--chambray)';
                    e.currentTarget.style.background = 'var(--white)';
                  }}
                  onMouseLeave={e => { 
                    e.currentTarget.style.transform = 'translateY(0)'; 
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)'; 
                    e.currentTarget.style.borderColor = 'rgba(121, 163, 195, 0.2)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{
                      width: 50, height: 50, borderRadius: '12px',
                      background: 'rgba(121, 163, 195, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      padding: '10px'
                    }}>
                      <img src={cert.logo} alt={cert.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    
                    {cert.link && (
                      <div style={{
                        padding: '4px 10px',
                        background: 'rgba(121, 163, 195, 0.12)',
                        borderRadius: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--chambray)', fontWeight: 700, textTransform: 'uppercase' }}>
                          Verify
                        </span>
                      </div>
                    )}
                  </div>

                  <div style={{ flex: 1 }}>
                    <h4 style={{ 
                      fontSize: '1.15rem', color: 'var(--espresso)', 
                      marginBottom: '0.4rem', fontWeight: 600, lineHeight: 1.3,
                      fontFamily: 'var(--font-ui)'
                    }}>
                      {cert.name}
                    </h4>
                    <p style={{ 
                      fontFamily: 'var(--font-mono)', fontSize: '0.72rem', 
                      color: 'var(--clay)', textTransform: 'uppercase', 
                      letterSpacing: '0.08em', fontWeight: 600
                    }}>
                      {cert.issuer}
                    </p>
                  </div>

                  {cert.link && (
                    <div style={{
                      marginTop: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--chambray)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                    }}>
                      <span>View Certificate</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [ref, visible] = useVisible();
  
  const contacts = [
    { 
      label: 'Email', 
      val: 'chaymaelhouma2005@gmail.com', 
      link: 'mailto:chaymaelhouma2005@gmail.com', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      color: 'var(--chambray)'
    },
    { 
      label: 'LinkedIn', 
      val: 'Chayma EL HOUMA', 
      link: 'https://www.linkedin.com/in/chaymaelhouma', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      color: '#0077B5'
    },
    { 
      label: 'GitHub', 
      val: 'ChaymaELHOUMA', 
      link: 'https://github.com/ChaymaELHOUMA', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      color: 'var(--espresso)'
    }
  ];

  return (
    <section id="contact" ref={ref} className="section-padding" style={{ 
      background: 'var(--white)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', bottom: '-10%', right: '-5%', width: '40%', height: '40%',
        background: 'radial-gradient(circle, var(--glacier) 0%, transparent 70%)',
        opacity: 0.5, pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="contact-grid">
          
          <div style={{
            opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-30px)',
            transition: 'all 0.8s ease'
          }}>
            <SectionHeader label="Contact" title="Ready for New Challenges" visible={visible} />
            <p style={{
              fontSize: '1.15rem', color: 'var(--clay)', lineHeight: 1.7, marginBottom: '2.5rem'
            }}>
              I am currently seeking a Final-Year Engineering Internship (PFE) starting in February 2027, where I can contribute to real-world software and web development projects while continuing to grow my technical skills.
            </p>
          </div>

          <div style={{
            display: 'flex', flexDirection: 'column', gap: '1.5rem',
            opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(30px)',
            transition: 'all 0.8s 0.2s ease'
          }}>
            {contacts.map((item) => (
              <a 
                key={item.label} 
                href={item.link} 
                target={item.link.startsWith('mailto:') ? undefined : '_blank'} 
                rel={item.link.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="contact-card"
                style={{ textDecoration: 'none' }}
                onMouseEnter={e => { 
                  e.currentTarget.style.transform = 'translateX(10px)'; 
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  e.currentTarget.style.borderColor = item.color;
                }}
                onMouseLeave={e => { 
                  e.currentTarget.style.transform = 'translateX(0)'; 
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.borderColor = 'rgba(121, 163, 195, 0.1)';
                }}
              >
                <div className="contact-icon" style={{ 
                  width: 54, height: 54, borderRadius: '14px', 
                  background: `${item.color}10`, color: item.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.3s',
                }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--clay)', letterSpacing: '0.15em', marginBottom: '0.3rem' }}>
                    {item.label}
                  </div>
                  <div className="contact-card-value">
                    {item.val}
                  </div>
                </div>
                <div style={{ color: 'var(--glacier)', transition: '0.3s' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: '4rem clamp(16px, 5vw, 8vw)', background: 'var(--espresso)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="footer-inner">
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem' }}>
            C<span style={{ color: 'var(--chambray)' }}>.</span>EH
          </div>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>© 2026 Chayma EL HOUMA. All rights reserved.</p>
        </div>
        <div className="footer-links">
          {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{ fontSize: '0.8rem', color: 'var(--bisque)', fontWeight: 600, transition: 'var(--transition-fast)' }}
            onMouseEnter={e => e.target.style.color = 'var(--chambray)'}
            onMouseLeave={e => e.target.style.color = 'var(--bisque)'}
            >{link}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { threshold: 0.25 });
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: 'var(--white)', minHeight: '100vh' }}>
      <Nav active={activeSection} />
      <Hero />
      <About />
      <Skills />
      <ProfessionalExperience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
