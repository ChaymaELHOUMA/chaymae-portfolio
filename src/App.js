import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import {
  PERSONAL_INFO,
  ABOUT_TEXTS,
  SKILL_CATEGORIES,
  TIMELINE_ITEMS,
  PROJECTS_DATA,
  CERTIFICATIONS_DATA,
} from './data/portfolioData';

/* ─── Hook d'animation au défilement (Observer accessible) ─── */
function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Si l'utilisateur préfère réduire les animations, on active immédiatement
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  return [ref, isVisible];
}

/* ─── Composant Logo de Marque (Monogramme Stylisé CE) ─── */
function Logo({ dark = false }) {
  return (
    <div className="brand-logo">
      <div className="brand-logo-icon" aria-hidden="true">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="38" rx="10" fill={dark ? 'var(--white)' : 'var(--espresso)'} />
          {/* Lettre C géométrique moderne */}
          <path
            d="M18 12H13.5C11.0147 12 9 14.0147 9 16.5V21.5C9 23.9853 11.0147 26 13.5 26H18"
            stroke={dark ? 'var(--espresso)' : 'var(--chambray)'}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Lettre E géométrique moderne */}
          <path
            d="M22 12H28.5M22 19H27M22 26H28.5M22 12V26"
            stroke={dark ? 'var(--chambray)' : 'var(--glacier)'}
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="brand-logo-text">
        <span className="brand-logo-title" style={{ color: dark ? 'var(--white)' : 'var(--espresso)' }}>
          Chayma El Houma
        </span>
        <span className="brand-logo-tagline" style={{ color: dark ? 'var(--glacier)' : 'var(--clay)' }}>
          Développeuse Full Stack
        </span>
      </div>
    </div>
  );
}

/* ─── Composant Navigation Fixe ─── */
function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Empêcher le scroll arrière-plan quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Accueil', href: '#home', id: 'home' },
    { label: 'À propos', href: '#about', id: 'about' },
    { label: 'Compétences', href: '#skills', id: 'skills' },
    { label: 'Parcours', href: '#parcours', id: 'parcours' },
    { label: 'Projets', href: '#projects', id: 'projects' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="navbar" role="banner" style={{
      boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
    }}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo-link" onClick={closeMenu} aria-label="Accueil - Chayma El Houma">
          <Logo />
        </a>

        {/* Liens Desktop */}
        <nav className="nav-desktop" aria-label="Navigation principale">
          <ul className="nav-desktop-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={PERSONAL_INFO.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-btn-cv"
                aria-label="Télécharger mon CV au format PDF"
              >
                <span>CV (PDF)</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </li>
          </ul>
        </nav>

        {/* Bouton Burger Mobile */}
        <button
          type="button"
          className="nav-mobile-toggle"
          aria-label={isMobileMenuOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Menu Déroulant Mobile */}
      <div className={`nav-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} aria-hidden={!isMobileMenuOpen}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`nav-mobile-link ${activeSection === link.id ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <a
          href={PERSONAL_INFO.cvPath}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-btn-cv"
          style={{ alignSelf: 'flex-start', marginTop: '12px' }}
          onClick={closeMenu}
        >
          📄 Télécharger mon CV
        </a>
      </div>
    </header>
  );
}

/* ─── Composant Hero (Deux colonnes & Photo) ─── */
function Hero() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="home" className="hero-section" aria-label="Présentation">
      <div className="container">
        <div className="hero-grid">
          
          {/* Colonne Gauche : Textes, Titres, Actions */}
          <div className="hero-content">
            
            {/* Badge PFE demandé */}
            <div className="hero-badge">
              <span className="hero-badge-pulse" aria-hidden="true"></span>
              <span>{PERSONAL_INFO.badge}</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-name-highlight">{PERSONAL_INFO.name}</span>
              {PERSONAL_INFO.title}
            </h1>

            <p className="hero-pitch">
              {PERSONAL_INFO.heroSubtitle}
            </p>

            {/* Boutons d'action demandés */}
            <div className="hero-actions">
              <a
                href={PERSONAL_INFO.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Télécharger mon CV</span>
              </a>

              <a href="#contact" className="btn-secondary">
                <span>Me contacter</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Liens GitHub & LinkedIn demandés */}
            <div className="hero-socials">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="Profil GitHub de Chayma EL HOUMA"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="Profil LinkedIn de Chayma EL HOUMA"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--linkedin-blue)' }} aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Colonne Droite : Photo (Étape 3) */}
          <div className="hero-photo-wrapper">
            {/* Décor arrière en couleur d'accent existante (--glacier) */}
            <div className="hero-photo-backdrop" aria-hidden="true"></div>

            <div className="hero-photo-container">
              {!photoError ? (
                <img
                  src={PERSONAL_INFO.photo.src}
                  alt={PERSONAL_INFO.photo.alt}
                  width={PERSONAL_INFO.photo.width}
                  height={PERSONAL_INFO.photo.height}
                  loading="eager"
                  className="hero-photo-img"
                  onError={() => setPhotoError(true)}
                />
              ) : (
                /* Fallback initiales « CH » si la photo ne charge pas */
                <div className="hero-photo-fallback" role="img" aria-label={PERSONAL_INFO.photo.alt}>
                  <span className="fallback-initials">{PERSONAL_INFO.initials}</span>
                  <span className="fallback-text">{PERSONAL_INFO.name}</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── Composant À Propos ─── */
function About() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section id="about" className="section section-dark" ref={sectionRef} aria-label="À propos de moi">
      <div className={`container reveal-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-badge">Profil &amp; Vision</span>
          <h2 className="section-title">À propos de moi</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-card">
          {ABOUT_TEXTS.map((paragraph, index) => (
            <p key={index} className="about-paragraph">
              {paragraph}
            </p>
          ))}

          <div className="stats-grid">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Composant Compétences (5 Catégories & Highlights) ─── */
function Skills() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section id="skills" className="section" ref={sectionRef} aria-label="Compétences techniques">
      <div className={`container reveal-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-badge">Expertise</span>
          <h2 className="section-title">Compétences Techniques</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((catGroup) => (
            <div key={catGroup.category} className="card skill-category-card">
              <div className="skill-cat-header">
                <span className="skill-cat-icon" aria-hidden="true"></span>
                <h3 className="skill-cat-title">{catGroup.category}</h3>
              </div>
              <p className="skill-cat-desc">{catGroup.description}</p>
              
              <div className="skill-tags-wrapper">
                {catGroup.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`skill-tag ${skill.featured ? 'featured' : ''}`}
                    title={skill.featured ? 'Compétence mise en avant' : undefined}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Modal Détails Expérience / Stage ─── */
function ExperienceModal({ exp, onClose }) {
  // Fermeture par touche Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!exp) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-exp-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="timeline-badge stage" style={{ marginBottom: '4px' }}>
              {exp.typeLabel}
            </span>
            <h3 id="modal-exp-title" className="timeline-title" style={{ marginTop: '4px' }}>
              {exp.title}
            </h3>
            <p className="timeline-org">
              {exp.organization} — {exp.location}
            </p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Fermer la boîte de dialogue"
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          {exp.isPrivate && (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              background: 'var(--espresso-soft)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--espresso-border)',
              marginBottom: '20px',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--espresso)'
            }}>
              <span aria-hidden="true">🔒</span>
              <span>Projet d’entreprise privé — Confidentialité respectée</span>
            </div>
          )}

          <h4 className="modal-section-title">Présentation du stage</h4>
          <p style={{ marginBottom: '20px', lineHeight: 1.7, color: 'var(--espresso)' }}>
            {exp.overview}
          </p>

          <h4 className="modal-section-title">Responsabilités &amp; Réalisations</h4>
          <ul className="modal-bullet-list">
            {exp.contribution.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h4 className="modal-section-title">Technologies &amp; Outils</h4>
          <div className="timeline-tech-list">
            {exp.tech.map((t) => (
              <span key={t} className="timeline-tech-pill" style={{ background: 'var(--glacier)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Composant Parcours (Frise Chronologique : Formation & 3 Stages) ─── */
function Timeline() {
  const [sectionRef, isVisible] = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedExp, setSelectedExp] = useState(null);

  const filteredItems = TIMELINE_ITEMS.filter((item) => {
    if (activeFilter === 'internship') return item.type === 'internship';
    if (activeFilter === 'education') return item.type === 'education';
    return true;
  });

  return (
    <section id="parcours" className="section section-alt" ref={sectionRef} aria-label="Parcours académique et professionnel">
      <div className={`container reveal-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-badge">Expérience &amp; Formation</span>
          <h2 className="section-title">Mon Parcours</h2>
          <div className="section-line"></div>
        </div>

        {/* Onglets de filtrage */}
        <div className="timeline-filter-tabs" role="tablist" aria-label="Filtrer le parcours">
          <button
            type="button"
            className={`timeline-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
            role="tab"
            aria-selected={activeFilter === 'all'}
          >
            Tout le parcours ({TIMELINE_ITEMS.length})
          </button>
          <button
            type="button"
            className={`timeline-tab-btn ${activeFilter === 'internship' ? 'active' : ''}`}
            onClick={() => setActiveFilter('internship')}
            role="tab"
            aria-selected={activeFilter === 'internship'}
          >
            Stages en entreprise (3)
          </button>
          <button
            type="button"
            className={`timeline-tab-btn ${activeFilter === 'education' ? 'active' : ''}`}
            onClick={() => setActiveFilter('education')}
            role="tab"
            aria-selected={activeFilter === 'education'}
          >
            Formation académique (3)
          </button>
        </div>

        {/* Frise chronologique unifiée */}
        <div className="timeline-container">
          {filteredItems.map((item) => (
            <article key={item.id} className={`timeline-item ${item.type}`}>
              <div className="timeline-dot" aria-hidden="true"></div>
              
              <div className="card timeline-card">
                <div className="timeline-meta">
                  <span className={`timeline-badge ${item.type === 'internship' ? 'stage' : 'formation'}`}>
                    {item.typeLabel}
                  </span>
                  <span className="timeline-period">{item.period}</span>
                </div>

                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-org">
                  {item.organization} — {item.location}
                </p>
                <p className="timeline-desc">{item.shortSummary}</p>

                <div className="timeline-tech-list">
                  {item.tech.slice(0, 8).map((t) => (
                    <span key={t} className="timeline-tech-pill">
                      {t}
                    </span>
                  ))}
                  {item.tech.length > 8 && (
                    <span className="timeline-tech-pill" style={{ color: 'var(--clay)' }}>
                      +{item.tech.length - 8}
                    </span>
                  )}
                </div>

                {item.type === 'internship' && (
                  <div>
                    <button
                      type="button"
                      className="timeline-action-btn"
                      onClick={() => setSelectedExp(item)}
                      aria-label={`Voir les responsabilités détaillées pour ${item.title}`}
                    >
                      <span>Détails de l'expérience</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <ExperienceModal exp={selectedExp} onClose={() => setSelectedExp(null)} />
    </section>
  );
}

/* ─── Modal Détails Projet ─── */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="project-category-badge" style={{ display: 'inline-block', marginBottom: '6px' }}>
              {project.category}
            </span>
            <h3 id="modal-project-title" className="project-title" style={{ margin: 0 }}>
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Fermer la boîte de dialogue"
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          <h4 className="modal-section-title">Vue d'ensemble</h4>
          <p style={{ marginBottom: '20px', lineHeight: 1.7, color: 'var(--espresso)' }}>
            {project.overview}
          </p>

          <h4 className="modal-section-title">Fonctionnalités Clés</h4>
          <ul className="modal-bullet-list">
            {project.features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>

          <h4 className="modal-section-title">Mon Rôle &amp; Contribution</h4>
          <p style={{ marginBottom: '20px', lineHeight: 1.7, color: 'var(--espresso)' }}>
            {project.contribution}
          </p>

          {project.architecture && (
            <>
              <h4 className="modal-section-title">Architecture du Système</h4>
              <div className="architecture-flow">
                {project.architecture.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="flow-step">{step}</span>
                    {idx < project.architecture.length - 1 && (
                      <span className="flow-arrow" aria-hidden="true">➔</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </>
          )}

          <h4 className="modal-section-title">Technologies Utilisées</h4>
          <div className="project-techs" style={{ marginBottom: '24px' }}>
            {project.tech.map((t) => (
              <span key={t} className="project-tech-tag">
                {t}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid var(--espresso-soft)' }}>
            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>Dépôt GitHub</span>
              </a>
            ) : (
              /* TODO: Ajouter le lien GitHub public dès qu'il est disponible */
              <span className="skill-tag" style={{ color: 'var(--clay)' }}>
                Dépôt GitHub privé / confidentiel
              </span>
            )}

            {/* TODO: Ajouter le lien de démo en direct si disponible */}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>Démo en ligne ➔</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Composant Projets Réalisés ─── */
function Projects() {
  const [sectionRef, isVisible] = useScrollReveal();
  const [selectedProj, setSelectedProj] = useState(null);

  return (
    <section id="projects" className="section" ref={sectionRef} aria-label="Projets réalisés">
      <div className={`container reveal-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-badge">Réalisations</span>
          <h2 className="section-title">Projets Récents</h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-grid">
          {PROJECTS_DATA.map((project) => (
            <article key={project.id} className="card project-card">
              <div className="project-banner" style={{ background: project.accent }}>
                <div className="project-banner-decor" aria-hidden="true"></div>
                <span className="project-category-badge">{project.category}</span>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.shortDesc}</p>

                <div className="project-techs">
                  {project.tech.slice(0, 6).map((t) => (
                    <span key={t} className="project-tech-tag">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 6 && (
                    <span className="project-tech-tag" style={{ background: 'var(--white)', border: '1px solid var(--chambray-border)' }}>
                      +{project.tech.length - 6}
                    </span>
                  )}
                </div>

                <div className="project-footer">
                  <button
                    type="button"
                    className="btn-project-details"
                    onClick={() => setSelectedProj(project)}
                    aria-label={`Consulter les détails du projet ${project.title}`}
                  >
                    Détails du projet →
                  </button>

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project-code"
                      aria-label={`Dépôt GitHub du projet ${project.title}`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProj} onClose={() => setSelectedProj(null)} />
    </section>
  );
}

/* ─── Composant Certifications ─── */
function Certifications() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section id="certifications" className="section section-alt" ref={sectionRef} aria-label="Certifications obtenues">
      <div className={`container reveal-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="section-header text-center">
          <span className="section-badge">Apprentissage continu</span>
          <h2 className="section-title">Certifications</h2>
          <div className="section-line"></div>
        </div>

        {Object.entries(CERTIFICATIONS_DATA).map(([category, certList]) => (
          <div key={category} style={{ marginBottom: '32px' }}>
            <h3 className="cert-category-title">
              <span style={{ color: 'var(--chambray)' }}>//</span> {category}
            </h3>

            <div className="certs-grid">
              {certList.map((cert, idx) => {
                const CardWrapper = cert.link ? 'a' : 'div';
                const linkProps = cert.link
                  ? { href: cert.link, target: '_blank', rel: 'noopener noreferrer' }
                  : {};

                return (
                  <CardWrapper
                    key={cert.name + idx}
                    {...linkProps}
                    className="card cert-card"
                    aria-label={cert.link ? `Consulter le certificat ${cert.name} délivré par ${cert.issuer}` : undefined}
                  >
                    <div className="cert-top">
                      <div className="cert-logo-wrap">
                        <img src={cert.logo} alt="" className="cert-logo-img" aria-hidden="true" />
                      </div>
                      {cert.link && (
                        <span className="cert-verify-badge">Vérifier ↗</span>
                      )}
                    </div>

                    <h4 className="cert-name">{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                  </CardWrapper>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Modal Contact & Envoi Direct ─── */
function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Opportunité Stage PFE (Février 2027)',
    message: '',
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const formattedBody = `Bonjour Chayma,

${formData.message ? formData.message + '\n\n' : ''}Cordialement,
${formData.name ? formData.name : ''}
${formData.email ? 'Email : ' + formData.email : ''}`;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    PERSONAL_INFO.email
  )}&su=${encodeURIComponent(formData.subject || 'Prise de contact')}&body=${encodeURIComponent(
    formattedBody
  )}`;

  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || 'Prise de contact'
  )}&body=${encodeURIComponent(formattedBody)}`;

  const handleSendGmail = () => {
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSendMailto = (e) => {
    e.preventDefault();
    window.location.href = mailtoUrl;
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-contact-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        <div className="modal-header">
          <div>
            <span className="section-badge" style={{ marginBottom: '2px' }}>Contact Direct</span>
            <h3 id="modal-contact-title" className="timeline-title" style={{ margin: 0 }}>
              Contacter Chayma EL HOUMA
            </h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Fermer la boîte de dialogue"
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          {/* Options directes & copie rapide */}
          <div className="contact-quick-actions">
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--espresso)', marginBottom: '4px' }}>
                Adresse email directe :
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--chambray)', fontWeight: 600 }}>
                {PERSONAL_INFO.email}
              </div>
              {copied && (
                <div className="contact-copy-badge">
                  ✓ Adresse copiée dans le presse-papier !
                </div>
              )}
            </div>

            <div className="contact-quick-buttons">
              <button
                type="button"
                className="btn-quick-action"
                onClick={handleCopyEmail}
                title="Copier l'adresse email"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span>{copied ? 'Copié !' : 'Copier l’adresse'}</span>
              </button>

              <button
                type="button"
                className="btn-quick-action primary"
                onClick={handleSendGmail}
                title="Ouvrir directement dans Gmail (nouvel onglet)"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
                <span>Ouvrir dans Gmail</span>
              </button>

              <button
                type="button"
                className="btn-quick-action"
                onClick={handleSendMailto}
                title="Ouvrir dans votre client de messagerie par défaut (Outlook, Mail, etc.)"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Client Mail</span>
              </button>
            </div>
          </div>

          {/* Formulaire de message avec pré-remplissage */}
          <form onSubmit={handleSendMailto}>
            <div className="contact-form-group">
              <label htmlFor="contact-name" className="contact-form-label">
                Votre Nom ou Entreprise
              </label>
              <input
                id="contact-name"
                type="text"
                className="contact-form-input"
                placeholder="Ex: Entreprise Tech / Recruteur"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-email" className="contact-form-label">
                Votre Email de contact
              </label>
              <input
                id="contact-email"
                type="email"
                className="contact-form-input"
                placeholder="votre-email@exemple.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-subject" className="contact-form-label">
                Sujet
              </label>
              <input
                id="contact-subject"
                type="text"
                className="contact-form-input"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-message" className="contact-form-label">
                Message (Optionnel)
              </label>
              <textarea
                id="contact-message"
                rows="4"
                className="contact-form-textarea"
                placeholder="Bonjour Chayma, nous avons découvert votre profil..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
              <button
                type="button"
                className="btn-primary"
                onClick={handleSendGmail}
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <span>Envoyer via Gmail ➔</span>
              </button>
              <button
                type="submit"
                className="btn-secondary"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <span>Envoyer via Mail ➔</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ─── Composant Contact ─── */
function Contact() {
  const [sectionRef, isVisible] = useScrollReveal();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contactMethods = [
    {
      label: 'Email professionnel',
      val: PERSONAL_INFO.email,
      onClick: () => setIsModalOpen(true),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
    },
    {
      label: 'Téléphone',
      val: PERSONAL_INFO.phone,
      link: `tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      val: 'Chayma EL HOUMA',
      link: PERSONAL_INFO.linkedin,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      label: 'GitHub',
      val: 'ChaymaELHOUMA',
      link: PERSONAL_INFO.github,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="section" ref={sectionRef} aria-label="Me contacter">
      <div className={`container reveal-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="contact-grid">
          
          <div>
            <div className="section-header" style={{ marginBottom: '24px' }}>
              <span className="section-badge">Opportunités</span>
              <h2 className="section-title">Prête pour de Nouveaux Défis</h2>
              <div className="section-line"></div>
            </div>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--espresso-muted)', marginBottom: '24px' }}>
              Actuellement à la recherche d’un <strong>Stage de Fin d’Études (PFE)</strong> débutant en <strong>février 2027</strong>, je suis enthousiaste à l'idée d’intégrer une équipe dynamique où je pourrai apporter mon expertise en développement backend Java/Spring Boot, interfaces React et IA générative.
            </p>

            <button
              type="button"
              className="btn-primary"
              style={{ display: 'inline-flex', cursor: 'pointer' }}
              onClick={() => setIsModalOpen(true)}
              aria-label="Ouvrir la fenêtre d'envoi de message direct"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Envoyer un message direct</span>
            </button>
          </div>

          <div className="contact-card-list">
            {contactMethods.map((c) => {
              if (c.onClick) {
                return (
                  <button
                    key={c.label}
                    type="button"
                    onClick={c.onClick}
                    className="contact-item-card"
                    style={{ width: '100%', textAlign: 'left', cursor: 'pointer', background: 'var(--white)', font: 'inherit' }}
                    aria-label={`${c.label} : ${c.val} (cliquer pour ouvrir les options d'envoi)`}
                  >
                    <div className="contact-item-icon">{c.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div className="contact-item-label">{c.label}</div>
                      <div className="contact-item-val">{c.val}</div>
                    </div>
                    <div style={{ color: 'var(--chambray)' }} aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  </button>
                );
              }

              return (
                <a
                  key={c.label}
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item-card"
                  aria-label={`${c.label} : ${c.val}`}
                >
                  <div className="contact-item-icon">{c.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div className="contact-item-label">{c.label}</div>
                    <div className="contact-item-val">{c.val}</div>
                  </div>
                  <div style={{ color: 'var(--chambray)' }} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>

        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div>
          <Logo dark />
          <p className="footer-copy" style={{ marginTop: '10px' }}>
            © {new Date().getFullYear()} Chayma EL HOUMA. Tous droits réservés.
          </p>
        </div>

        <ul className="footer-links">
          {['Accueil', 'À propos', 'Compétences', 'Parcours', 'Projets', 'Contact'].map((item, idx) => {
            const anchor = ['home', 'about', 'skills', 'parcours', 'projects', 'contact'][idx];
            return (
              <li key={item}>
                <a href={`#${anchor}`} className="footer-link">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

/* ─── Application Principale ─── */
export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'parcours', 'projects', 'certifications', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar activeSection={activeSection} />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
