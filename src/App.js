import React, { useState, useEffect, useRef } from 'react';
import './index.css';

/* ─── DATA ─── */
const SKILLS = {
  'Programmation': ['Python', 'JavaScript', 'Java', 'PHP', 'HTML', 'CSS'],
  'Frameworks': ['React.js', 'Vue.js', 'Spring Boot', 'Laravel'],
  'Bases de données': ['MySQL', 'PostgreSQL', 'SQLite'],
  'Outils & DevOps': ['Docker', 'Git', 'GitHub', 'Postman', 'VS Code', 'IntelliJ'],
  'IA / Data': ['LangChain', 'FAISS', 'HuggingFace', 'Streamlit'],
};

const PROJECTS = [
  {
    title: 'Chatbot Intelligent RAG',
    tag: 'IA · NLP',
    desc: "Chatbot capable d'interroger des documents PDF et de fournir des réponses précises en langage naturel grâce à l'analyse sémantique du contenu.",
    tech: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'HuggingFace', 'SQLite'],
    accent: 'var(--chambray)',
    link: 'https://github.com/ChaymaELHOUMA/chatbot-pdf-project.git',
  },
  {
    title: 'Plateforme éducative interactive',
    tag: 'Fullstack · IA',
    desc: 'Plateforme interactive pour l\'apprentissage des langages de programmation avec intégration IA.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'Git', 'Postman'],
    accent: 'var(--clay)',
    link: 'https://github.com/sofiastron/CodeArena.git',
  },
  {
    title: 'EcoRide – Covoiturage',
    tag: 'Web · Fullstack',
    desc: 'Plateforme de covoiturage éco-responsable avec gestion des trajets, réservations et profils utilisateurs.',
    tech: ['Spring Boot', 'React', 'MySQL', 'Postman', 'Git'],
    accent: 'var(--espresso)',
    link: 'https://github.com/sofiastron/EcoRide.git',
  },
  {
    title: 'Gestion des Étudiants',
    tag: 'Fullstack',
    desc: 'Application web complète de gestion des étudiants, encadrants, propositions de sujets et soutenances.',
    tech: ['Spring Boot', 'Vue.js', 'MySQL', 'Git', 'Postman'],
    accent: 'var(--chambray)',
    link: 'https://github.com/sofiastron/ProjectFlow.git',
  },
  {
    title: 'Gestion de Présence',
    tag: 'Fullstack',
    desc: 'Système de gestion de présence avec reconnaissance faciale et QR Code pour l\'automatisation.',
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Reconnaissance faciale', 'QR Code'],
    accent: 'var(--bisque)',
    link: 'https://github.com/sofiastron/AgoraCampus.git',
  },
];

const CERTS = [
  { 
    name: 'Introduction Python', 
    issuer: '365 Data Science', 
    link: 'https://learn.365datascience.com/certificates/CC-D782A4BF37/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
  },
  { 
    name: 'Intermediate Python', 
    issuer: '365 Data Science', 
    link: 'https://learn.365datascience.com/certificates/CC-83808A5853/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
  },
  { 
    name: 'JavaScript', 
    issuer: 'Cisco Networking Academy',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
  },
  { 
    name: 'Introduction to java', 
    issuer: 'DataCamp',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ee779adf5c1e9be79a2a71c4c4f9ce16141f77b2',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg'
  },
  { 
    name: 'Introduction to object oriented programming in java', 
    issuer: 'DataCamp',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/b648a2de22341e5a2404de060f5f1a23c6283b2d',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg'
  },
  { 
    name: 'Java Programming Achievement — Intermediate Level', 
    issuer: 'DataCamp',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/d79c6452e40e0e7b71a6e48201891568d711e6b6',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg'
  },
  { 
    name: 'Introduction to Git', 
    issuer: 'DataCamp',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/bc4540ba3e583dbeae2d58c941cc1d2a3f5979e4',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'
  },
  { 
    name: 'Intermediate Git', 
    issuer: 'DataCamp',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/35e512fcaa8c19610a262d361f198e9605b3f8f4',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'
  },
];

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
  const links = ['Accueil', 'À Propos', 'Compétences', 'Projets', 'Formation', 'Certifications', 'Contact'];
  const ids    = ['home',   'about',    'skills',       'projects','formation','certifications', 'contact'];
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
    opacity: active === id ? 1 : 0.5,
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
        borderBottom: scrolled || menuOpen ? '1px solid rgba(121, 163, 195, 0.1)' : '1px solid transparent',
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
        </div>

        <button
          type="button"
          className="nav-mobile-btn"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
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
      {/* Decorative Elements */}
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 500, color: 'var(--clay)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Élève ingénieure · ENSA Safi
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
            fontSize: '1.15rem', color: 'var(--clay)', maxWidth: '540px', marginBottom: '3rem',
            animation: 'fadeUp 0.8s 0.4s ease forwards', opacity: 0, lineHeight: 1.7
          }}>
            Développeuse full-stack & passionnée d'IA. Je conçois des solutions digitales élégantes, 
            robustes et intelligentes pour répondre aux défis de demain.
          </p>

          <div className="hero-actions" style={{ animation: 'fadeUp 0.8s 0.6s ease forwards', opacity: 0 }}>
            <a href="#projects" className="btn" style={{
              padding: '16px 28px', background: 'var(--espresso)', color: 'var(--white)',
              borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em',
              transition: 'var(--transition-smooth)', boxShadow: 'var(--shadow-md)'
            }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-5px)'; e.target.style.boxShadow = 'var(--shadow-lg)'; }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'var(--shadow-md)'; }}
            >
              Explorer mes projets
            </a>
            
            <a href="/Chayma_EL_HOUMA_CV.pdf" target="_blank" className="btn" style={{
              padding: '16px 28px', background: 'var(--chambray)', color: 'var(--white)',
              borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em',
              transition: 'var(--transition-smooth)', boxShadow: 'var(--shadow-md)',
              display: 'flex', alignItems: 'center', gap: '8px'
            }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-5px)'; e.target.style.background = '#608CAE'; }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.background = 'var(--chambray)'; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="12" y1="18" x2="12" y2="12"></line>
                <polyline points="9 15 12 12 15 15"></polyline>
              </svg>
              Voir mon CV
            </a>

            <a href="#contact" className="btn" style={{
              padding: '16px 28px', border: '1.5px solid var(--espresso)', color: 'var(--espresso)',
              borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={e => { e.target.style.background = 'rgba(58, 33, 25, 0.05)'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; }}
            >
              Me contacter
            </a>
          </div>
        </div>

        <div className="hero-profile" style={{ position: 'relative', animation: 'fadeIn 1.5s 0.5s ease forwards', opacity: 0, marginTop: '90px' }}>
          <div className="glass" style={{
            width: '100%', aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            padding: '3rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.4)',
            boxShadow: 'var(--shadow-lg)'
          }}>
             <div style={{
              width: 120, height: 120, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--chambray), var(--clay))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '3rem', fontWeight: 700, color: 'var(--white)',
              marginBottom: '2rem', border: '4px solid var(--white)',
              boxShadow: '0 10px 20px rgba(121, 163, 195, 0.3)'
            }}>CE</div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--espresso)', marginBottom: '0.5rem' }}>Chayma EL HOUMA</h3>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--chambray)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2rem' }}>
              Génie Informatique & IA
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%' }}>
              {[
                { label: 'Projets', val: '5+' },
                { label: 'Certifs', val: '8' },
                { label: 'Clubs', val: '2' },
                { label: 'Langues', val: '3' }
              ].map(stat => (
                <div key={stat.label} style={{ padding: '1rem', background: 'var(--espresso-soft)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--espresso)' }}>{stat.val}</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--clay)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Decorative floating dots */}
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
  const highlights = [
    { icon: '🎓', text: 'ENSA Safi – Génie Informatique & IA' },
    { icon: '💻', text: 'Développement web full-stack moderne' },
  ];
  return (
    <section id="about" ref={ref} className="section-padding" style={{
      background: `linear-gradient(160deg, var(--espresso) 0%, #5c3527 60%, #3A2119 100%)`,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* decorative circle */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(121,163,195,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div className="about-grid" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Left – label + title */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-30px)', transition: 'all 0.9s ease' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--chambray)', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '1.2rem' }}>
            À Propos
          </span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', fontWeight: 300, color: 'var(--bisque)', lineHeight: 1.1, marginBottom: '2rem' }}>
            Qui suis-<em style={{ fontStyle: 'italic', fontWeight: 700, color: 'var(--glacier)' }}>je ?</em>
          </h2>
          <div style={{ width: 60, height: 3, background: 'var(--chambray)', borderRadius: 2, marginBottom: '2.5rem' }} />
          {/* Highlight badges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {highlights.map((h, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '0.9rem',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateX(-20px)',
                transition: `all 0.7s ${0.3 + i * 0.15}s ease`,
              }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '10px', flexShrink: 0,
                  background: 'rgba(121,163,195,0.12)',
                  border: '1px solid rgba(121,163,195,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem',
                }}>{h.icon}</div>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.9rem', color: 'rgba(210,226,236,0.8)', fontWeight: 500 }}>{h.text}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right – paragraphs */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(30px)', transition: 'all 0.9s 0.2s ease' }}>
          <div className="about-card" style={{
            background: 'rgba(210,226,236,0.05)',
            border: '1px solid rgba(210,226,236,0.12)',
            borderRadius: '20px', padding: '3rem',
            backdropFilter: 'blur(10px)',
          }}>
            {[
              "Je suis étudiante en 2ᵉ année cycle d'ingénieur en Génie Informatique et Intelligence Artificielle à l'ENSA Safi.",
              "Je suis spécialisée dans le développement d'applications web modernes et les systèmes intelligents basés sur l'intelligence artificielle.",
              "J'ai une forte passion pour la conception de solutions logicielles, le développement backend et les technologies IA comme les chatbots et la recherche sémantique.",
            ].map((para, i) => (
              <p key={i} style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '1.05rem',
                lineHeight: 1.85,
                color: 'rgba(235,205,183,0.75)',
                marginBottom: i < 2 ? '1.5rem' : 0,
                paddingLeft: '1rem',
                borderLeft: i === 0 ? '3px solid var(--chambray)' : '3px solid transparent',
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
      <SectionHeader label="Expertise" title="Compétences Techniques" visible={visible} />
      
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem',
        opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)',
        transition: 'var(--transition-smooth) 0.3s'
      }}>
        {Object.entries(SKILLS).map(([cat, items], idx) => (
          <div key={cat} className="glass" style={{
            padding: '2.5rem', borderRadius: '20px', transition: 'var(--transition-smooth)',
            border: '1px solid rgba(121,163,195,0.1)'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'var(--chambray)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(121,163,195,0.1)'; }}
          >
            <h3 style={{ fontSize: '1.4rem', color: 'var(--espresso)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--chambray)' }} />
              {cat}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {items.map(skill => (
                <span key={skill} style={{
                  padding: '6px 14px', background: 'var(--white)', borderRadius: '6px',
                  fontSize: '0.8rem', fontWeight: 600, color: 'var(--clay)',
                  border: '1px solid var(--glacier)', transition: 'var(--transition-fast)'
                }}
                onMouseEnter={e => { e.target.style.background = 'var(--glacier)'; e.target.style.color = 'var(--espresso)'; }}
                onMouseLeave={e => { e.target.style.background = 'var(--white)'; e.target.style.color = 'var(--clay)'; }}
                >{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const [ref, visible] = useVisible();
  return (
    <section id="projects" ref={ref} className="section-padding" style={{ background: 'var(--glacier)', backgroundOpacity: 0.3 }}>
      <SectionHeader label="Réalisations" title="Projets" visible={visible} />
      
      <div className="projects-grid">
        {PROJECTS.map((project, idx) => (
          <div key={project.title} style={{
            background: 'var(--white)', borderRadius: '24px', overflow: 'hidden',
            boxShadow: 'var(--shadow-md)', transition: 'var(--transition-smooth)',
            opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)',
            transitionDelay: `${idx * 0.1}s`, display: 'flex', flexDirection: 'column',
            cursor: project.link ? 'pointer' : 'default',
          }}
          onClick={() => { if (project.link) window.open(project.link, '_blank', 'noopener,noreferrer'); }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-12px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
          >
            <div className="project-header" style={{ height: '240px', background: project.accent, position: 'relative', overflow: 'hidden' }}>
              {/* If project has an image, show it; otherwise show abstract background */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                />
              ) : (
                <>
                  <div style={{ position: 'absolute', inset: 0, opacity: 0.2, backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '4rem', fontWeight: 800, opacity: 0.1 }}>
                    {project.title.charAt(0)}
                  </div>
                </>
              )}
              {/* Tag badge */}
              <div style={{ position: 'absolute', bottom: '20px', left: '24px' }}>
                <span style={{
                  padding: '6px 12px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)',
                  borderRadius: '6px', fontSize: '0.65rem', fontWeight: 700, color: 'white',
                  textTransform: 'uppercase', letterSpacing: '0.1em'
                }}>
                  {project.tag}
                </span>
              </div>
              {/* GitHub badge – only shown when link exists */}
              {project.link && (
                <div style={{
                  position: 'absolute', top: '16px', right: '16px',
                  background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.25)', borderRadius: '8px',
                  padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '6px',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'white', letterSpacing: '0.05em' }}>GitHub</span>
                </div>
              )}
            </div>
            
            <div className="project-card-inner" style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--espresso)', marginBottom: '1rem' }}>{project.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--clay)', lineHeight: 1.7, marginBottom: '2rem', flex: 1 }}>{project.desc}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    fontSize: '0.7rem', fontWeight: 600, color: 'var(--chambray)',
                    padding: '4px 10px', background: 'var(--glacier)', borderRadius: '4px'
                  }}>{t}</span>
                ))}
                {project.link && (
                  <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--chambray)', fontWeight: 700 }}>Voir le code →</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const [ref, visible] = useVisible();
  const experiences = [
    { year: '2025 – 2026', title: 'Cycle d\'ingénieur (2ème année)', school: 'ENSA SAFI', sub: 'Génie Informatique' },
    { year: '2024 – 2025', title: 'Cycle d\'ingénieur (1ère année)', school: 'ENSA SAFI', sub: 'Génie Informatique & IA' },
    { year: '2022 – 2024', title: 'Cycle Préparatoire intégré', school: 'ENSA SAFI', sub: 'Formation fondamentale' },
    { year: '2021 – 2022', title: 'Baccalauréat Scientifique', school: 'Lycée Awlade Amrane', sub: 'Sciences Physiques' },
  ];

  return (
    <section id="formation" ref={ref} className="section-padding" style={{ background: 'var(--espresso)' }}>
      <SectionHeader label="Parcours" title="Formation & Expérience" dark visible={visible} />
      
      <div className="experience-grid">
        <div className="experience-timeline" style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid rgba(121,163,195,0.2)' }}>
           {experiences.map((exp, idx) => (
            <div key={idx} style={{
              marginBottom: '3.5rem', position: 'relative',
              opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-20px)',
              transition: `all 0.8s ${idx * 0.15}s`
            }}>
              <div className="experience-dot" style={{
                position: 'absolute', left: '-2.7rem', top: '0', width: '20px', height: '20px',
                borderRadius: '50%', background: 'var(--chambray)', border: '4px solid var(--espresso)',
                boxShadow: '0 0 0 4px rgba(121,163,195,0.1)',
              }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--chambray)', fontWeight: 600 }}>{exp.year}</span>
              <h4 style={{ fontSize: '1.4rem', color: 'var(--white)', marginTop: '0.5rem', marginBottom: '0.25rem' }}>{exp.title}</h4>
              <p style={{ fontSize: '1rem', color: 'var(--bisque)', marginBottom: '0.5rem' }}>{exp.school}</p>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>{exp.sub}</p>
            </div>
          ))}
        </div>

        <div style={{
          opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(20px)',
          transition: 'all 1s 0.5s'
        }}>
          <div className="glass experience-side-card" style={{ padding: '3rem', borderRadius: '24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--chambray)', marginBottom: '2rem' }}>Expérience Professionnelle</h3>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--white)' }}>Stage RAG Chatbot</h4>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--chambray)' }}>Août 2025</span>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--bisque)', marginBottom: '1rem' }}>ANP – Agence Nationale des Ports, Casablanca</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                Développement d'une solution d'intelligence artificielle basée sur le RAG pour l'analyse automatisée de documents portuaires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const [ref, visible] = useVisible();
  
  const techConfig = {
    'Python': { color: '#3776AB', bg: 'rgba(55, 118, 171, 0.08)' },
    'Java': { color: '#007396', bg: 'rgba(0, 115, 150, 0.08)' },
    'JavaScript': { color: '#F7DF1E', bg: 'rgba(247, 223, 30, 0.08)' },
    'Git': { color: '#F05032', bg: 'rgba(240, 80, 50, 0.08)' },
    'default': { color: 'var(--chambray)', bg: 'rgba(121, 163, 195, 0.08)' }
  };

  const getConfig = (name) => {
    const n = name.toLowerCase();
    if (n.includes('python')) return techConfig['Python'];
    if (n.includes('java')) return techConfig['Java'];
    if (n.includes('javascript')) return techConfig['JavaScript'];
    if (n.includes('git')) return techConfig['Git'];
    return techConfig['default'];
  };

  return (
    <section id="certifications" ref={ref} className="section-padding" style={{ 
      background: 'linear-gradient(to bottom, var(--white), var(--glacier))',
      position: 'relative'
    }}>
      <SectionHeader label="Reconnaissances" title="Certifications" center visible={visible} />
      
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem',
        opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)',
        transition: 'all 1s cubic-bezier(0.2, 0.8, 0.2, 1)'
      }}>
        {CERTS.map((cert, i) => {
          const config = getConfig(cert.name);
          return (
            <div 
              key={cert.name + i} 
              onClick={() => { if (cert.link) window.open(cert.link, '_blank', 'noopener,noreferrer'); }}
              className="cert-card"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                borderRadius: '24px',
                padding: '2.5rem',
                textAlign: 'left',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(20px)',
                transitionDelay: `${i * 0.08}s`,
                cursor: cert.link ? 'pointer' : 'default',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'; 
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(58, 33, 25, 0.08)'; 
                e.currentTarget.style.borderColor = config.color;
                e.currentTarget.style.background = 'var(--white)';
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.transform = 'translateY(0) scale(1)'; 
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)'; 
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
              }}
            >
              {/* Top Row: Icon + Certified Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  width: 60, height: 60, borderRadius: '16px',
                  background: config.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '12px', transition: 'var(--transition-smooth)'
                }}>
                  {cert.logo ? (
                    <img src={cert.logo} alt={cert.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  ) : (
                    <span style={{ fontSize: '1.8rem' }}>📜</span>
                  )}
                </div>
                
                <div style={{
                  padding: '6px 12px',
                  background: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '100px',
                  border: '1px solid rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: config.color }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--clay)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Verify
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  fontSize: '1.25rem', color: 'var(--espresso)', 
                  marginBottom: '0.5rem', fontWeight: 600, lineHeight: 1.3,
                  fontFamily: 'var(--font-ui)'
                }}>
                  {cert.name}
                </h3>
                <p style={{ 
                  fontFamily: 'var(--font-mono)', fontSize: '0.7rem', 
                  color: 'var(--chambray)', textTransform: 'uppercase', 
                  letterSpacing: '0.1em', fontWeight: 600
                }}>
                  {cert.issuer}
                </p>
              </div>

              {/* Footer Action */}
              {cert.link && (
                <div style={{
                  marginTop: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: config.color,
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  transition: 'var(--transition-fast)'
                }}>
                  <span>Voir le certificat</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  const [ref, visible] = useVisible();
  
  const contacts = [
    { 
      label: 'Email', 
      val: 'chaymaeelhouma2005@gmail.com', 
      link: 'mailto:chaymaeelhouma2005@gmail.com', 
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
      {/* Decorative background element */}
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
            <SectionHeader label="Contact" title="Prête pour de nouveaux défis" visible={visible} />
            <p style={{
              fontSize: '1.2rem', color: 'var(--clay)', lineHeight: 1.7, marginBottom: '2.5rem'
            }}>
              Je suis actuellement à la recherche d'un <strong>stage technique de 2 mois</strong> (juillet–août 2026). 
              Passionnée par l'IA et le développement web, je suis prête à relever de nouveaux défis au sein de votre équipe.
            </p>
          </div>

          <div style={{
            display: 'flex', flexDirection: 'column', gap: '1.5rem',
            opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(30px)',
            transition: 'all 0.8s 0.2s ease'
          }}>
            {contacts.map((item, idx) => (
              <a 
                key={item.label} 
                href={item.link} 
                target={item.link.startsWith('mailto:') ? undefined : '_blank'} 
                rel={item.link.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                onClick={(e) => {
                  if (item.link.startsWith('mailto:')) {
                    e.preventDefault();
                    window.location.href = item.link;
                  }
                }}
                className="contact-card"
                style={{ textDecoration: 'none' }}
                onMouseEnter={e => { 
                  e.currentTarget.style.transform = 'translateX(15px)'; 
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
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>© 2026 Chayma EL HOUMA. Fait avec passion.</p>
        </div>
        <div className="footer-links">
          {['Accueil', 'Projets', 'Contact'].map(link => (
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
    const sections = ['home', 'about', 'skills', 'projects', 'formation', 'certifications', 'contact'];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { threshold: 0.3 });
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
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
