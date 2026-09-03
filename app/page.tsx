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
  type ProjectModule,
} from './content';

function ExternalLink({ href, children, childrenZh }: { href: string; children: React.ReactNode; childrenZh?: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" className="text-link"><span data-lang="en">{children}</span>{childrenZh && <span data-lang="zh">{childrenZh}</span>}<span aria-hidden="true"> ↗</span></a>;
}

function ProjectModules({ modules }: { modules: ProjectModule[] }) {
  return (
    <div className="project-modules" aria-label="Project modules / 项目模块">
      {modules.map((module) => (
        <div className="project-module" key={module.id}>
          <div className="project-module-meta"><span data-lang="en">{module.statusLabel}</span><span data-lang="zh">{module.statusLabelZh}</span></div>
          <h4><span data-lang="en">{module.label}</span><span data-lang="zh">{module.labelZh}</span></h4>
          <p data-lang="en">{module.summary}</p>
          <p data-lang="zh">{module.summaryZh}</p>
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
            <p className="eyebrow"><span data-lang="en">RESEARCHER · BUILDER</span><span data-lang="zh">研究者 · 开发者</span></p>
            <h2 className="profile-name">Yibo Yuan</h2>
            <p className="profile-role" data-lang="en">Research Assistant<br />Westlake University</p>
            <p className="profile-role" data-lang="zh">研究助理<br />西湖大学</p>
          </div>
          <p className="profile-bio" data-lang="en">I study whether embodied and virtual non-biological partners can alleviate loneliness and satisfy social need—and where their biological and relational limits begin.</p>
          <p className="profile-bio" data-lang="zh">我研究具身与虚拟的非生物伙伴能否缓解孤独、满足社交需求，以及它们的生物学与关系边界从何处开始。</p>
          <div className="rail-timeline" aria-label="Research and education timeline">
            {sidebarTimeline.map((group) => (
              <section className="rail-timeline-group" key={group.label}>
                <div className="rail-timeline-title"><h3><span data-lang="en">{group.label}</span><span data-lang="zh">{group.labelZh}</span></h3><span /></div>
                <div className="rail-timeline-items">
                  {group.items.map((item) => {
                    const content = (
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
                      ? <a className="rail-timeline-item" href={item.href} target="_blank" rel="noreferrer" key={`${group.label}-${item.institution}-${item.date}`}>{content}</a>
                      : <div className="rail-timeline-item" key={`${group.label}-${item.institution}-${item.date}`}>{content}</div>;
                  })}
                </div>
              </section>
            ))}
          </div>
          <nav className="side-nav" aria-label="Primary navigation">
            <a href="#research"><span data-lang="en">Research question</span><span data-lang="zh">研究问题</span></a>
            <a href="#companions"><span data-lang="en">Core program</span><span data-lang="zh">核心研究</span></a>
            <a href="#publication"><span data-lang="en">Publication</span><span data-lang="zh">论文发表</span></a>
            <a href="#collaborations"><span data-lang="en">Collaborations</span><span data-lang="zh">合作项目</span></a>
            <a href="#experience"><span data-lang="en">Experience</span><span data-lang="zh">个人经历</span></a>
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
          <h1 data-lang="en">What makes a non-biological agent a <em>meaningful social companion?</em></h1>
          <h1 data-lang="zh">什么使一个非生物智能体成为<em>真正有意义的社会伙伴？</em></h1>
          <div className="hero-copy" data-lang="en">
            <p>I study whether—and under what conditions—embodied and virtual artificial partners can alleviate loneliness and satisfy social need. The central question is which social functions can be substituted and which remain uniquely biological.</p>
            <p>Across mice and humans, I connect neural representations of social need with programmable social stimuli, long-term AI companionship, and experiments on relational authority.</p>
          </div>
          <div className="hero-copy" data-lang="zh">
            <p>我研究具身与虚拟的人工伙伴是否、以及在什么条件下能够缓解孤独并满足社交需求。核心问题是：哪些社会功能可以被替代，哪些仍然依赖真实生物。</p>
            <p>我从小鼠到人类，将社交需求的神经表征、可编程社会刺激、长期 AI 陪伴和关系权力实验连接为同一条研究主线。</p>
          </div>
          <div className="research-lenses" aria-label="Research framework">
            <div><span className="lens-index">01</span><strong data-lang="en">Need</strong><strong data-lang="zh">需求</strong><p data-lang="en">How do deprivation and relief emerge in brain and behavior?</p><p data-lang="zh">剥夺与缓解如何在大脑和行为中产生？</p></div>
            <div><span className="lens-index">02</span><strong data-lang="en">Substitution</strong><strong data-lang="zh">替代</strong><p data-lang="en">Which social functions can embodied or conversational agents reproduce?</p><p data-lang="zh">具身或对话式智能体能够复制哪些社会功能？</p></div>
            <div><span className="lens-index">03</span><strong data-lang="en">Boundaries</strong><strong data-lang="zh">边界</strong><p data-lang="en">Where does biological equivalence fail, and what authority should an AI have?</p><p data-lang="zh">生物学等效性在哪里失效，AI 又应拥有何种权力？</p></div>
          </div>
        </section>

        <section className="section core-program-section" id="companions">
          <div className="section-heading">
            <div><p className="eyebrow"><span data-lang="en">SYSTEMS SOCIAL NEUROSCIENCE LAB · WESTLAKE</span><span data-lang="zh">西湖大学 · 系统与社会神经科学实验室</span></p><h2 data-lang="en">One question, three connected research programs.</h2><h2 data-lang="zh">一个问题，三个彼此相连的研究方向。</h2></div>
            <p data-lang="en">From neural representations of social need, to robotic mice and controlled touch, to long-term AI companionship: testing whether non-biological partners can satisfy social need, and where substitution fails or oversteps.</p>
            <p data-lang="zh">从社交需求的神经表征，到机器鼠与可控触摸，再到长期 AI 陪伴：检验非生物伙伴能否满足社交需求，以及这种替代在哪里失效或越界。</p>
          </div>
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
                  {project.contribution && (
                    <div className="contribution-note"><span><span data-lang="en">MY CONTRIBUTION</span><span data-lang="zh">我的贡献</span></span><p data-lang="en">{project.contribution}</p>{project.contributionZh && <p data-lang="zh">{project.contributionZh}</p>}</div>
                  )}
                  {project.evidence && (
                    <aside className="evidence-note">
                      <div className="evidence-heading"><span><span data-lang="en">{project.evidence.label}</span><span data-lang="zh">{project.evidence.labelZh}</span></span><span>{project.evidence.lastVerified}</span></div>
                      <p data-lang="en">{project.evidence.observation}</p>
                      <p data-lang="zh">{project.evidence.observationZh}</p>
                    </aside>
                  )}
                  <div className="tag-row" data-lang="en">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="tag-row" data-lang="zh">{project.tagsZh.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  {project.links?.map((link) => <ExternalLink href={link.href} childrenZh={link.labelZh} key={link.href}>{link.label}</ExternalLink>)}
                  {project.modules && <ProjectModules modules={project.modules} />}
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
          <div className="section-heading compact"><div><p className="eyebrow"><span data-lang="en">PUBLICATIONS &amp; MANUSCRIPTS</span><span data-lang="zh">论文与在审稿件</span></p><h2 data-lang="en">Research in review and in publication.</h2><h2 data-lang="zh">正在同行评审与已经发表的研究。</h2></div></div>
          {publications.map((publication) => (
            <article className="publication-card" key={publication.title}>
              <div className="publication-year">{publication.year}</div>
              <div><p className="publication-state"><span data-lang="en">{publication.state}</span><span data-lang="zh">{publication.stateZh}</span></p><h3 data-lang="en">{publication.title}</h3><h3 data-lang="zh">{publication.titleZh}</h3><p data-lang="en">{publication.authors}</p><p data-lang="zh">{publication.authorsZh}</p>{publication.href && publication.linkLabel && <ExternalLink href={publication.href} childrenZh={publication.linkLabelZh}>{publication.linkLabel}</ExternalLink>}</div>
            </article>
          ))}
        </section>

        <section className="section breadth-section" id="collaborations">
          <div className="section-heading">
            <div><p className="eyebrow"><span data-lang="en">SUPPORTING COLLABORATIONS</span><span data-lang="zh">支持性合作</span></p><h2 data-lang="en">Methods that expand how I study brains, behavior, and intelligent systems.</h2><h2 data-lang="zh">拓展我研究大脑、行为与智能系统的方法。</h2></div>
            <p data-lang="en">These collaborations add BCI, scientific AI, behavioral vision, and experimental-systems expertise without competing with the central non-biological-companionship program.</p>
            <p data-lang="zh">这些合作提供脑机接口、科学智能、行为视觉与实验系统能力，但不与“非生物陪伴”主线争夺首页重心。</p>
          </div>
          <div className="breadth-grid">
            {researchTracks.map((track) => (
              <article className="breadth-card" key={track.code}>
                <div className="breadth-meta"><span><span data-lang="en">{track.code}</span><span data-lang="zh">{track.codeZh}</span></span><span><span data-lang="en">{track.lab}</span><span data-lang="zh">{track.labZh}</span></span></div>
                {track.logo && <span className={`breadth-logo-frame${track.logoTheme === 'dark' ? ' logo-surface-dark' : ''}${track.logoScale === 'large' ? ' breadth-logo-frame-large' : ''}${track.logoScale === 'prominent' ? ' breadth-logo-frame-prominent' : ''}`}><Image src={track.logo} alt={track.logoAlt ?? track.lab} width={320} height={96} className="breadth-logo" /></span>}
                <h3 data-lang="en">{track.title}</h3><h3 data-lang="zh">{track.titleZh}</h3>
                <p data-lang="en">{track.description}</p><p data-lang="zh">{track.descriptionZh}</p>
                {track.figure && <a className={`breadth-figure${track.figureSize === 'compact' ? ' breadth-figure-compact' : ''}`} href={track.figure} target="_blank" rel="noreferrer"><Image src={track.figure} alt={track.figureAlt ?? track.title} width={962} height={641} /><span data-lang="en">{track.figureCaption} ↗</span><span data-lang="zh">{track.figureCaptionZh} ↗</span></a>}
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading"><div><p className="eyebrow"><span data-lang="en">EXPERIENCE</span><span data-lang="zh">个人经历</span></p><h2 data-lang="en">From clinical observation to neural data and intelligent systems.</h2><h2 data-lang="zh">从临床观察到神经数据与智能系统。</h2></div><p data-lang="en">Together, these experiences provide the neuroscience, engineering, and HCI foundation for studying non-biological companionship.</p><p data-lang="zh">这些经历共同提供研究非生物陪伴所需的神经科学、工程与人机交互基础。</p></div>
          <div className="appointment-list">
            {appointments.map((appointment) => (
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
        </section>

        <section className="section methods-section">
          <div className="section-heading compact"><div><p className="eyebrow"><span data-lang="en">SELECTED OPEN RESEARCH SOFTWARE</span><span data-lang="zh">精选开源科研软件</span></p><h2 data-lang="en">Tools built for experiments that need to remain inspectable.</h2><h2 data-lang="zh">为需要可检查、可复现的实验而构建的工具。</h2></div></div>
          <div className="methods-grid">
            {openTools.map((tool) => (
              <div key={tool.code}>
                <span><span data-lang="en">{tool.code}</span><span data-lang="zh">{tool.codeZh}</span></span><h3 data-lang="en">{tool.title}</h3><h3 data-lang="zh">{tool.titleZh}</h3><p data-lang="en">{tool.description}</p><p data-lang="zh">{tool.descriptionZh}</p><ExternalLink href={tool.href} childrenZh="查看代码仓库">View repository</ExternalLink>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow accent"><span data-lang="en">CONTACT</span><span data-lang="zh">联系方式</span></p><h2 data-lang="en">Interested in social need, non-biological companions, or bounded AI agency?</h2><h2 data-lang="zh">如果你也关注社交需求、非生物陪伴或具有边界的 AI 能动性，欢迎联系。</h2>
          <p data-lang="en">I’m preparing PhD applications for Fall 2027 and welcome conversations with aligned labs.</p><p data-lang="zh">我正在准备 2027 年秋季博士申请，欢迎与研究方向契合的实验室交流。</p>
          <a className="contact-button" href="mailto:yuanyibo@westlake.edu.cn">yuanyibo@westlake.edu.cn <span>↗</span></a>
          <a className="contact-secondary-email" href="mailto:yibo031110@gmail.com"><span data-lang="en">Personal email: yibo031110@gmail.com</span><span data-lang="zh">个人邮箱：yibo031110@gmail.com</span></a>
          <div className="contact-affiliation"><span><span data-lang="en">CURRENT AFFILIATION</span><span data-lang="zh">当前单位</span></span><Image src="/assets/westlake-logo-reverse.png" alt="Westlake University" width={300} height={90} className="contact-affiliation-logo" /></div>
        </section>
        <footer><span>© 2026 Yibo Yuan</span><span data-lang="en">Built around one research question.</span><span data-lang="zh">围绕一个研究问题构建。</span></footer>
      </main>
    </div>
  );
}
