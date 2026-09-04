import Image from 'next/image';
import { FigureLightbox } from '../components/FigureLightbox';
import { LanguageToggle } from '../components/LanguageToggle';
import { ProjectGalleryLightbox } from '../components/ProjectGalleryLightbox';
import {
  appointments,
  coreProjects,
  openTools,
  publications,
  researchTracks,
  sidebarTimeline,
  type Appointment,
} from './content';

function ExternalLink({ href, children, childrenZh }: { href: string; children: React.ReactNode; childrenZh?: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" className="text-link"><span data-lang="en">{children}</span>{childrenZh && <span data-lang="zh">{childrenZh}</span>}<span aria-hidden="true"> ↗</span></a>;
}

function HighlightedAuthorLine({ text, selfAuthor }: { text: string; selfAuthor: string }) {
  const authorIndex = text.indexOf(selfAuthor);
  if (authorIndex === -1) return <>{text}</>;
  return <>{text.slice(0, authorIndex)}<strong>{selfAuthor}</strong>{text.slice(authorIndex + selfAuthor.length)}</>;
}

function AppointmentList({ items }: { items: Appointment[] }) {
  return (
    <div className="appointment-list">
      {items.map((appointment) => (
        <article className="appointment" key={`${appointment.date}-${appointment.institution}`}>
          <p className="appointment-date"><span data-lang="en">{appointment.date}</span><span data-lang="zh">{appointment.dateZh}</span></p>
          <div className="appointment-content">
            <div className="appointment-heading">
              <h3>{appointment.href ? <a href={appointment.href} target="_blank" rel="noreferrer"><span data-lang="en">{appointment.institution}</span><span data-lang="zh">{appointment.institutionZh}</span></a> : <><span data-lang="en">{appointment.institution}</span><span data-lang="zh">{appointment.institutionZh}</span></>}</h3>
              {appointment.logo && (
                appointment.href
                  ? <a href={appointment.href} target="_blank" rel="noreferrer" className={`appointment-logo-frame appointment-logo-link${appointment.logoTheme === 'dark' ? ' logo-surface-dark' : ''}${appointment.logoScale === 'large' ? ' appointment-logo-frame-large' : ''}${appointment.logoScale === 'prominent' ? ' appointment-logo-frame-prominent' : ''}${appointment.logoScale === 'fit-wide' ? ' appointment-logo-frame-fit-wide' : ''}`} aria-label={`Visit ${appointment.institution}`}><Image src={appointment.logo} alt={appointment.logoAlt ?? appointment.institution} width={280} height={84} className="appointment-logo" /></a>
                  : <span className={`appointment-logo-frame${appointment.logoTheme === 'dark' ? ' logo-surface-dark' : ''}${appointment.logoScale === 'large' ? ' appointment-logo-frame-large' : ''}${appointment.logoScale === 'prominent' ? ' appointment-logo-frame-prominent' : ''}${appointment.logoScale === 'fit-wide' ? ' appointment-logo-frame-fit-wide' : ''}`}><Image src={appointment.logo} alt={appointment.logoAlt ?? appointment.institution} width={280} height={84} className="appointment-logo" /></span>
              )}
            </div>
            <p className="appointment-role" data-lang="en">{appointment.role}</p><p className="appointment-role" data-lang="zh">{appointment.roleZh}</p>
            <p className="appointment-detail" data-lang="en">{appointment.detail}</p>
            {appointment.detailZh && <p className="appointment-detail" data-lang="zh">{appointment.detailZh}</p>}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  const education = appointments.filter((appointment) => appointment.institution === "Xi'an Jiaotong University");
  const experience = appointments.filter((appointment) => appointment.institution !== "Xi'an Jiaotong University");

  return (
    <div className="site-shell">
      <aside className="profile-rail">
        <div className="profile-inner">
          <a className="wordmark" href="#top" aria-label="Back to top">YY<span className="wordmark-dot">.</span></a>
          <div className="portrait-wrap">
            <Image src="/assets/yibo-yuan.jpg" alt="Portrait of Yibo Yuan" width={480} height={600} priority className="portrait" />
          </div>
          <div>
            <p className="eyebrow"><span data-lang="en">RESEARCHER · BUILDER</span><span data-lang="zh">研究者 · 开发者</span></p>
            <h2 className="profile-name">Yibo Yuan</h2>
            <p className="profile-role" data-lang="en">Research Assistant<br />Westlake University</p>
            <p className="profile-role" data-lang="zh">研究助理<br />西湖大学</p>
          </div>
          <div className="rail-timeline" aria-label="Academic path">
            {sidebarTimeline.map((group) => (
              <section className="rail-timeline-group" key={group.label}>
                <div className="rail-timeline-title"><h3><span data-lang="en">{group.label}</span><span data-lang="zh">{group.labelZh}</span></h3><span /></div>
                <div className="rail-timeline-items">
                  {group.items.map((item) => {
                    const itemContent = (
                      <>
                        <span className={`rail-timeline-logo-frame${item.logoVariant === 'crest-left' ? ' rail-timeline-logo-frame--crest-left' : ''}`}>
                          <Image src={item.logo} alt={item.logoAlt} width={88} height={64} className="rail-timeline-logo" />
                        </span>
                        <span className="rail-timeline-copy">
                          <strong><span data-lang="en">{item.institution}</span><span data-lang="zh">{item.institutionZh}</span></strong>
                          <span data-lang="en">{item.role}</span><span data-lang="zh">{item.roleZh}</span>
                          {item.note && <span className="rail-timeline-note" data-lang="en">{item.note}</span>}
                          {item.noteZh && <span className="rail-timeline-note" data-lang="zh">{item.noteZh}</span>}
                          <time data-lang="en">{item.date}</time><time data-lang="zh">{item.dateZh}</time>
                        </span>
                      </>
                    );
                    return item.href
                      ? <a className="rail-timeline-item" href={item.href} target="_blank" rel="noreferrer" key={`${group.label}-${item.institution}-${item.date}`}>{itemContent}</a>
                      : <div className="rail-timeline-item" key={`${group.label}-${item.institution}-${item.date}`}>{itemContent}</div>;
                  })}
                </div>
              </section>
            ))}
          </div>
          <nav className="side-nav" aria-label="Primary navigation">
            <a href="#research"><span data-lang="en">Home</span><span data-lang="zh">首页</span></a>
            <a href="#companions"><span data-lang="en">Selected work</span><span data-lang="zh">代表工作</span></a>
            <a href="#publication"><span data-lang="en">Publication</span><span data-lang="zh">论文发表</span></a>
            <a href="#collaborations"><span data-lang="en">Other work</span><span data-lang="zh">其他工作</span></a>
            <a href="#education"><span data-lang="en">Education</span><span data-lang="zh">教育背景</span></a>
            <a href="#experience"><span data-lang="en">Experience</span><span data-lang="zh">工作经历</span></a>
            <a href="#contact"><span data-lang="en">Contact</span><span data-lang="zh">联系方式</span></a>
          </nav>
          <div className="profile-links">
            <a href="mailto:yuanyibo@westlake.edu.cn"><span data-lang="en">Email</span><span data-lang="zh">邮箱</span></a>
            <ExternalLink href="https://github.com/BoBo1529707515">GitHub</ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/yibo-yuan-319547343/">LinkedIn</ExternalLink>
            <a href="/Yibo_Yuan_Academic_CV_2026.pdf" target="_blank" rel="noreferrer" data-lang="en">CV · EN ↗</a>
          </div>
          <p className="rail-note" data-lang="en">Hangzhou, China · PhD applicant for Fall 2027</p>
          <p className="rail-note" data-lang="zh">中国杭州 · 申请 2027 年秋季博士项目</p>
        </div>
      </aside>

      <main className="main-content" id="top">
        <header className="topbar">
          <span><span data-lang="en">Yibo Yuan / Research</span><span data-lang="zh">袁艺博 / 研究</span></span>
          <div className="topbar-actions"><LanguageToggle /><a href="mailto:yuanyibo@westlake.edu.cn"><span data-lang="en">Let’s talk</span><span data-lang="zh">联系我</span> ↗</a></div>
        </header>

        <section className="hero" id="research">
          <p className="eyebrow accent"><span data-lang="en">SOCIAL NEUROSCIENCE × NON-BIOLOGICAL COMPANIONS</span><span data-lang="zh">社会神经科学 × 非生物陪伴</span></p>
          <h1 data-lang="en">How does social need change when the social partner is <em>artificial?</em></h1>
          <h1 data-lang="zh">当社交伙伴是人工的，<em>社交需求会发生什么变化？</em></h1>
          <div className="hero-copy single" data-lang="en">
            <p>I study how social need builds up and is relieved, and whether artificial partners can reproduce parts of what biological social interaction provides. My current work spans mouse social neuroscience, a programmable robotic mouse, and long-term human–AI companionship.</p>
          </div>
          <div className="hero-copy single" data-lang="zh">
            <p>我研究社交需求如何积累与缓解，以及人工伙伴能否复现真实生物互动所提供的部分社会功能。目前的工作横跨小鼠社会神经科学、可编程机器鼠与长期人机陪伴。</p>
          </div>
          <div className="hero-actions">
            <a href="#companions"><span data-lang="en">Selected work ↓</span><span data-lang="zh">代表工作 ↓</span></a>
            <a href="/Yibo_Yuan_Academic_CV_2026.pdf" target="_blank" rel="noreferrer"><span data-lang="en">CV ↗</span><span data-lang="zh">简历 ↗</span></a>
            <a href="mailto:yuanyibo@westlake.edu.cn"><span data-lang="en">Email ↗</span><span data-lang="zh">邮箱 ↗</span></a>
          </div>
        </section>

        <section className="section core-program-section" id="companions">
          <div className="section-heading compact"><div><h2 data-lang="en">Selected work.</h2><h2 data-lang="zh">代表工作。</h2></div></div>
          <div className="project-list core-project-list">
            {coreProjects.map((project) => (
              <article className={`project-card core-project-card${project.image ? ' project-card-has-media' : ''}`} id={project.id} key={project.id}>
                <div className="project-body">
                  <div className="project-meta"><span>{String(project.order).padStart(2, '0')}</span><span className="status-badge"><span data-lang="en">{project.statusLabel}</span><span data-lang="zh">{project.statusLabelZh}</span></span></div>
                  <h3 data-lang="en">{project.title}</h3>
                  <h3 data-lang="zh">{project.titleZh}</h3>
                  <p className="project-description" data-lang="en">{project.description}</p>
                  <p className="project-description" data-lang="zh">{project.descriptionZh}</p>
                  {project.image && project.figureDetails && (
                    <FigureLightbox
                      src={project.image}
                      alt={project.imageAlt ?? project.title}
                      caption={project.imageCaption}
                      captionZh={project.imageCaptionZh}
                      fit={project.imageFit ?? 'cover'}
                      details={project.figureDetails}
                    />
                  )}
                  {project.image && !project.figureDetails && (
                    project.id === 'robotic-mouse'
                      ? <ProjectGalleryLightbox triggerSrc={project.image} triggerAlt={project.imageAlt ?? project.title} triggerCaption={project.imageCaption} triggerCaptionZh={project.imageCaptionZh} />
                      : <a className="project-primary-media" href={project.image} target="_blank" rel="noreferrer" aria-label={`Open full image for ${project.title}`}>
                          <Image src={project.image} alt={project.imageAlt ?? project.title} width={2000} height={1200} className={`project-primary-image project-primary-image-${project.imageFit ?? 'cover'}`} />
                          {project.imageCaption && <span className="image-caption" data-lang="en">{project.imageCaption}</span>}
                          {project.imageCaptionZh && <span className="image-caption" data-lang="zh">{project.imageCaptionZh}</span>}
                        </a>
                  )}
                  {project.contribution && <div className="project-narrative"><p data-lang="en">{project.contribution}</p>{project.contributionZh && <p data-lang="zh">{project.contributionZh}</p>}</div>}
                  {project.evidence && (
                    <aside className="project-result">
                      <p data-lang="en">{project.evidence.observation}</p>
                      <p data-lang="zh">{project.evidence.observationZh}</p>
                    </aside>
                  )}
                  {project.links?.map((link) => <ExternalLink href={link.href} childrenZh={link.labelZh} key={link.href}>{link.label}</ExternalLink>)}
                  {project.modules?.filter((module) => module.id === 'tas-gate').map((module) => (
                    <div className="project-continuation" key={module.id}>
                      <h4><span data-lang="en">{module.label}</span><span data-lang="zh">{module.labelZh}</span></h4>
                      <p data-lang="en">{module.summary}</p><p data-lang="zh">{module.summaryZh}</p>
                    </div>
                  ))}
                  {project.secondaryImage && (
                    <a className="project-secondary-media" href={project.secondaryImage} target="_blank" rel="noreferrer" aria-label={`Open system figure for ${project.title}`}>
                      <Image src={project.secondaryImage} alt={project.secondaryImageAlt ?? project.title} width={1600} height={900} />
                      {project.secondaryImageCaption && <span data-lang="en">{project.secondaryImageCaption} ↗</span>}
                      {project.secondaryImageCaptionZh && <span data-lang="zh">{project.secondaryImageCaptionZh} ↗</span>}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section publication-section" id="publication">
          <div className="section-heading compact"><div><h2 data-lang="en">Publications &amp; manuscripts.</h2><h2 data-lang="zh">论文与在审稿件。</h2></div></div>
          {publications.map((publication) => (
            <article className="publication-card" key={publication.title}>
              <div className="publication-year">{publication.year}</div>
              <div><p className="publication-state"><span data-lang="en">{publication.state}</span><span data-lang="zh">{publication.stateZh}</span></p><h3 data-lang="en">{publication.title}</h3><h3 data-lang="zh">{publication.titleZh}</h3><p data-lang="en"><HighlightedAuthorLine text={publication.authors} selfAuthor={publication.selfAuthor} /></p><p data-lang="zh"><HighlightedAuthorLine text={publication.authorsZh} selfAuthor={publication.selfAuthorZh} /></p>{publication.href && publication.linkLabel && <ExternalLink href={publication.href} childrenZh={publication.linkLabelZh}>{publication.linkLabel}</ExternalLink>}</div>
            </article>
          ))}
        </section>

        <section className="section breadth-section" id="collaborations">
          <div className="section-heading compact">
            <div><h2 data-lang="en">Other work &amp; collaborations.</h2><h2 data-lang="zh">其他工作与合作。</h2></div>
          </div>
          <div className="breadth-grid">
            {researchTracks.map((track) => (
              <article className="breadth-card" key={track.code}>
                <div className="breadth-meta"><span><span data-lang="en">{track.code}</span><span data-lang="zh">{track.codeZh}</span></span>{track.href ? <a href={track.href} target="_blank" rel="noreferrer"><span data-lang="en">{track.lab} ↗</span><span data-lang="zh">{track.labZh} ↗</span></a> : <span><span data-lang="en">{track.lab}</span><span data-lang="zh">{track.labZh}</span></span>}</div>
                {track.logo && <span className={`breadth-logo-frame${track.logoTheme === 'dark' ? ' logo-surface-dark' : ''}${track.logoScale === 'large' ? ' breadth-logo-frame-large' : ''}${track.logoScale === 'prominent' ? ' breadth-logo-frame-prominent' : ''}`}><Image src={track.logo} alt={track.logoAlt ?? track.lab} width={320} height={96} className="breadth-logo" /></span>}
                <h3 data-lang="en">{track.title}</h3><h3 data-lang="zh">{track.titleZh}</h3>
                <p data-lang="en">{track.description}</p><p data-lang="zh">{track.descriptionZh}</p>
                {track.figure && <a className={`breadth-figure${track.figureSize === 'compact' ? ' breadth-figure-compact' : ''}`} href={track.figure} target="_blank" rel="noreferrer"><Image src={track.figure} alt={track.figureAlt ?? track.title} width={962} height={641} /><span data-lang="en">{track.figureCaption} ↗</span><span data-lang="zh">{track.figureCaptionZh} ↗</span></a>}
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading compact"><div><h2 data-lang="en">Education.</h2><h2 data-lang="zh">教育背景。</h2></div></div>
          <AppointmentList items={education} />
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading compact"><div><h2 data-lang="en">Experience.</h2><h2 data-lang="zh">工作经历。</h2></div></div>
          <AppointmentList items={experience} />
        </section>

        <section className="section methods-section">
          <div className="section-heading compact"><div><h2 data-lang="en">Open research software.</h2><h2 data-lang="zh">开源科研软件。</h2></div></div>
          <div className="methods-grid">
            {openTools.map((tool) => (
              <div key={tool.code}>
                <span><span data-lang="en">{tool.code}</span><span data-lang="zh">{tool.codeZh}</span></span><h3 data-lang="en">{tool.title}</h3><h3 data-lang="zh">{tool.titleZh}</h3><p data-lang="en">{tool.description}</p><p data-lang="zh">{tool.descriptionZh}</p><ExternalLink href={tool.href} childrenZh="查看代码仓库">View repository</ExternalLink>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow accent"><span data-lang="en">CONTACT</span><span data-lang="zh">联系方式</span></p><h2 data-lang="en">I’d be glad to hear from you.</h2><h2 data-lang="zh">欢迎联系我。</h2>
          <p data-lang="en">I’m preparing PhD applications for Fall 2027 and welcome conversations with aligned labs.</p><p data-lang="zh">我正在准备 2027 年秋季博士申请，欢迎与研究方向契合的实验室交流。</p>
          <a className="contact-button" href="mailto:yuanyibo@westlake.edu.cn">yuanyibo@westlake.edu.cn <span>↗</span></a>
          <a className="contact-secondary-email" href="mailto:yibo031110@gmail.com"><span data-lang="en">Personal email: yibo031110@gmail.com</span><span data-lang="zh">个人邮箱：yibo031110@gmail.com</span></a>
          <div className="contact-affiliation"><span><span data-lang="en">CURRENT AFFILIATION</span><span data-lang="zh">当前单位</span></span><Image src="/assets/westlake-logo-reverse.png" alt="Westlake University" width={300} height={90} className="contact-affiliation-logo" /></div>
        </section>
        <footer><span>© 2026 Yibo Yuan</span><span><span data-lang="en">Hangzhou, China</span><span data-lang="zh">中国杭州</span></span></footer>
      </main>
    </div>
  );
}
