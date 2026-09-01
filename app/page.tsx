import Image from 'next/image';
import {
  appointments,
  coreProjects,
  foundationProjects,
  openTools,
  publications,
  researchTracks,
  sidebarTimeline,
  type ProjectModule,
} from './content';

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" className="text-link">{children}<span aria-hidden="true"> ↗</span></a>;
}

function ProjectModules({ modules }: { modules: ProjectModule[] }) {
  return (
    <div className="project-modules" aria-label="Project modules">
      {modules.map((module) => (
        <div className="project-module" key={module.id}>
          <div className="project-module-meta"><span>{module.statusLabel}</span></div>
          <h4>{module.label}</h4>
          <p className="project-module-zh">{module.labelZh}</p>
          <p>{module.summary}</p>
          <p className="project-module-summary-zh">{module.summaryZh}</p>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <aside className="profile-rail">
        <div className="profile-inner">
          <a className="wordmark" href="#top" aria-label="Back to top">YY<span className="wordmark-dot">.</span></a>
          <div className="portrait-wrap">
            <Image src="/assets/yibo-yuan.jpg" alt="Portrait of Yibo Yuan" width={480} height={600} priority className="portrait" />
          </div>
          <div>
            <p className="eyebrow">RESEARCHER · BUILDER</p>
            <h2 className="profile-name">Yibo Yuan</h2>
            <p className="profile-role">Research Assistant<br />Westlake University</p>
          </div>
          <p className="profile-bio">I study when non-biological companions can support social need—and where their biological and relational limits begin.</p>
          <div className="rail-timeline" aria-label="Research and education timeline">
            {sidebarTimeline.map((group) => (
              <section className="rail-timeline-group" key={group.label}>
                <div className="rail-timeline-title"><h3>{group.label}</h3><span /></div>
                <div className="rail-timeline-items">
                  {group.items.map((item) => {
                    const content = (
                      <>
                        <span className={`rail-timeline-logo-frame${item.logoVariant === 'crest-left' ? ' rail-timeline-logo-frame--crest-left' : ''}`}>
                          <Image src={item.logo} alt={item.logoAlt} width={88} height={64} className="rail-timeline-logo" />
                        </span>
                        <span className="rail-timeline-copy">
                          <strong>{item.institution}</strong>
                          <span>{item.role}</span>
                          {item.note && <span className="rail-timeline-note">{item.note}</span>}
                          <time>{item.date}</time>
                        </span>
                      </>
                    );
                    return item.href
                      ? <a className="rail-timeline-item" href={item.href} target="_blank" rel="noreferrer" key={`${group.label}-${item.institution}`}>{content}</a>
                      : <div className="rail-timeline-item" key={`${group.label}-${item.institution}`}>{content}</div>;
                  })}
                </div>
              </section>
            ))}
          </div>
          <nav className="side-nav" aria-label="Primary navigation">
            <a href="#research">Research question</a>
            <a href="#companions">Core program</a>
            <a href="#foundations">Foundations</a>
            <a href="#collaborations">Collaborations</a>
            <a href="#publication">Publication</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="profile-links">
            <a href="mailto:yibo031110@gmail.com">Email</a>
            <ExternalLink href="https://github.com/BoBo1529707515">GitHub</ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/yibo-yuan-319547343/">LinkedIn</ExternalLink>
            <a href="/Yibo_Yuan_CV.pdf" target="_blank" rel="noreferrer">CV · EN ↗</a>
            <a href="/Yibo_Yuan_CV_Chinese.pdf" target="_blank" rel="noreferrer">CV · 中文 ↗</a>
          </div>
          <p className="rail-note">Hangzhou, China · PhD applicant for Fall 2027</p>
        </div>
      </aside>

      <main className="main-content" id="top">
        <header className="topbar"><span>Yibo Yuan / Research</span><a href="mailto:yibo031110@gmail.com">Let’s talk ↗</a></header>

        <section className="hero" id="research">
          <p className="eyebrow accent">SOCIAL NEUROSCIENCE × NON-BIOLOGICAL COMPANIONS</p>
          <h1>What makes a non-biological agent a <em>meaningful social companion?</em></h1>
          <p className="hero-zh">什么使一个非生物智能体成为真正有意义的社会伙伴？</p>
          <div className="hero-copy">
            <p>I study whether—and under what conditions—artificial partners can relieve social need. The central question is which social functions can be substituted and which remain uniquely biological.</p>
            <p>Across mice and humans, I connect neural mechanisms of social need with embodied agents, long-term AI companions, and experiments on relational authority.</p>
          </div>
          <div className="research-lenses" aria-label="Research framework">
            <div><span className="lens-index">01</span><strong>Need</strong><p>How do deprivation and relief emerge in brain and behavior?</p></div>
            <div><span className="lens-index">02</span><strong>Substitution</strong><p>Which social functions can embodied or conversational agents reproduce?</p></div>
            <div><span className="lens-index">03</span><strong>Boundaries</strong><p>Where does biological equivalence fail, and what authority should an AI have?</p></div>
          </div>
        </section>

        <section className="section core-program-section" id="companions">
          <div className="section-heading">
            <div><p className="eyebrow">CORE RESEARCH PROGRAM</p><h2>Non-biological companionship at two experimental scales.</h2></div>
            <p>从具身机器鼠到长期 AI 伙伴：检验人工伙伴能否提供有意义的社会输入，以及这种替代在哪里失效或越界。</p>
          </div>
          <div className="project-list core-project-list">
            {coreProjects.map((project) => (
              <article className={`project-card core-project-card ${project.image ? 'project-card-featured' : ''}`} id={project.id} key={project.id}>
                {project.image && (
                  <div className="project-image-wrap">
                    <Image src={project.image} alt={project.imageAlt ?? project.title} width={1600} height={1000} className="project-image" />
                    {project.imageCaption && <span className="image-caption">{project.imageCaption}</span>}
                  </div>
                )}
                <div className="project-body">
                  <div className="project-meta"><span>{String(project.order).padStart(2, '0')}</span><span className="status-badge">{project.statusLabel}</span></div>
                  <h3>{project.title}</h3>
                  <p className="project-title-zh">{project.titleZh}</p>
                  <p className="project-description">{project.description}</p>
                  <p className="project-description-zh">{project.descriptionZh}</p>
                  {project.contribution && (
                    <div className="contribution-note"><span>CONTRIBUTION</span><p>{project.contribution}</p>{project.contributionZh && <p>{project.contributionZh}</p>}</div>
                  )}
                  {project.evidence && (
                    <aside className="evidence-note">
                      <div className="evidence-heading"><span>{project.evidence.label}</span><span>{project.evidence.lastVerified}</span></div>
                      <p>{project.evidence.observation}</p>
                      <p className="evidence-zh">{project.evidence.observationZh}</p>
                      <p className="evidence-boundary">{project.evidence.boundary}</p>
                      <p className="evidence-zh">{project.evidence.boundaryZh}</p>
                    </aside>
                  )}
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  {project.links?.map((link) => <ExternalLink href={link.href} key={link.href}>{link.label}</ExternalLink>)}
                  {project.modules && <ProjectModules modules={project.modules} />}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section foundation-section" id="foundations">
          <div className="section-heading">
            <div><p className="eyebrow">SCIENTIFIC FOUNDATIONS</p><h2>What must be understood before substitution can be claimed.</h2></div>
            <p>机制与边界不是旁支：只有先定义社交需求和有效授权，才能严谨判断人工陪伴究竟替代了什么。</p>
          </div>
          <div className="foundation-grid">
            {foundationProjects.map((project) => (
              <article className="foundation-card" id={project.id} key={project.id}>
                <div className="project-meta"><span>{String(project.order).padStart(2, '0')}</span><span className="status-badge">{project.statusLabel}</span></div>
                <h3>{project.title}</h3>
                <p className="project-title-zh">{project.titleZh}</p>
                <p className="project-description">{project.description}</p>
                <p className="project-description-zh">{project.descriptionZh}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section breadth-section" id="collaborations">
          <div className="section-heading">
            <div><p className="eyebrow">SUPPORTING COLLABORATIONS</p><h2>Methods that expand how I study brains, behavior, and intelligent systems.</h2></div>
            <p>这些合作提供脑机接口、科学智能、行为视觉与实验系统能力，但不与“非生物陪伴”主线争夺首页重心。</p>
          </div>
          <div className="breadth-grid">
            {researchTracks.map((track) => (
              <article className="breadth-card" key={track.code}>
                <div className="breadth-meta"><span>{track.code}</span><span>{track.lab}</span></div>
                {track.logo && <span className={`breadth-logo-frame${track.logoTheme === 'dark' ? ' logo-surface-dark' : ''}${track.logoScale === 'large' ? ' breadth-logo-frame-large' : ''}`}><Image src={track.logo} alt={track.logoAlt ?? track.lab} width={320} height={96} className="breadth-logo" /></span>}
                <h3>{track.title}</h3>
                <p className="project-title-zh">{track.titleZh}</p>
                <p>{track.description}</p>
                <p className="breadth-description-zh">{track.descriptionZh}</p>
                {track.figure && <a className={`breadth-figure${track.figureSize === 'compact' ? ' breadth-figure-compact' : ''}`} href={track.figure} target="_blank" rel="noreferrer"><Image src={track.figure} alt={track.figureAlt ?? track.title} width={962} height={641} /><span>{track.figureCaption} ↗</span></a>}
              </article>
            ))}
          </div>
        </section>

        <section className="section publication-section" id="publication">
          <div className="section-heading compact"><div><p className="eyebrow">PUBLICATION</p><h2>Methods for observing social circuits in action.</h2></div></div>
          {publications.map((publication) => (
            <article className="publication-card" key={publication.href}>
              <div className="publication-year">{publication.year}</div>
              <div><p className="publication-state">{publication.state}</p><h3>{publication.title}</h3><p>{publication.authors}</p><ExternalLink href={publication.href}>{publication.linkLabel}</ExternalLink></div>
            </article>
          ))}
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading"><div><p className="eyebrow">EXPERIENCE</p><h2>From clinical observation to neural data and intelligent systems.</h2></div><p>这些经历共同提供研究非生物陪伴所需的神经科学、工程与人机交互基础。</p></div>
          <div className="appointment-list">
            {appointments.map((appointment) => (
              <article className="appointment" key={`${appointment.date}-${appointment.institution}`}>
                <p className="appointment-date">{appointment.date}</p>
                <div className="appointment-content">
                  <div className="appointment-heading">
                    <h3>{appointment.href ? <a href={appointment.href} target="_blank" rel="noreferrer">{appointment.institution}</a> : appointment.institution}</h3>
                    {appointment.logo && (
                      appointment.href
                        ? <a href={appointment.href} target="_blank" rel="noreferrer" className={`appointment-logo-frame appointment-logo-link${appointment.logoTheme === 'dark' ? ' logo-surface-dark' : ''}${appointment.logoScale === 'large' ? ' appointment-logo-frame-large' : ''}`} aria-label={`Visit ${appointment.institution}`}><Image src={appointment.logo} alt={appointment.logoAlt ?? appointment.institution} width={280} height={84} className="appointment-logo" /></a>
                        : <span className={`appointment-logo-frame${appointment.logoTheme === 'dark' ? ' logo-surface-dark' : ''}${appointment.logoScale === 'large' ? ' appointment-logo-frame-large' : ''}`}><Image src={appointment.logo} alt={appointment.logoAlt ?? appointment.institution} width={280} height={84} className="appointment-logo" /></span>
                    )}
                  </div>
                  <p className="appointment-role">{appointment.role}</p>
                  <p className="appointment-detail">{appointment.detail}</p>
                  {appointment.detailZh && <p className="appointment-detail-zh">{appointment.detailZh}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section methods-section">
          <div className="section-heading compact"><div><p className="eyebrow">SELECTED OPEN RESEARCH SOFTWARE</p><h2>Tools built for experiments that need to remain inspectable.</h2></div></div>
          <div className="methods-grid">
            {openTools.map((tool) => (
              <div key={tool.code}>
                <span>{tool.code}</span><h3>{tool.title}</h3><p className="tool-title-zh">{tool.titleZh}</p><p>{tool.description}</p><p className="tool-description-zh">{tool.descriptionZh}</p><ExternalLink href={tool.href}>View repository</ExternalLink>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow accent">CONTACT</p><h2>Interested in social need, non-biological companions, or bounded AI agency?</h2>
          <p>I’m preparing PhD applications for Fall 2027 and welcome conversations with aligned labs.</p>
          <a className="contact-button" href="mailto:yibo031110@gmail.com">yibo031110@gmail.com <span>↗</span></a>
          <div className="contact-affiliation"><span>CURRENT AFFILIATION</span><Image src="/assets/westlake-logo-reverse.png" alt="Westlake University" width={300} height={90} className="contact-affiliation-logo" /></div>
        </section>
        <footer><span>© 2026 Yibo Yuan</span><span>Built around one research question.</span></footer>
      </main>
    </div>
  );
}
