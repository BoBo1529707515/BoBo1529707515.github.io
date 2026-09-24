import Image from 'next/image';
import { FuturePlans } from '../components/FuturePlans';
import { ImageDetails } from '../components/ImageDetails';
import { FigureLightbox } from '../components/FigureLightbox';
import { LanguageToggle } from '../components/LanguageToggle';
import { ProjectGalleryLightbox } from '../components/ProjectGalleryLightbox';
import { MoriProjectLightbox } from '../components/MoriProjectLightbox';
import { TextDetails } from '../components/TextDetails';
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
            <a href="#companions"><span data-lang="en">Selected research</span><span data-lang="zh">代表研究</span></a>
            <a href="#neuroengineering"><span data-lang="en">Experimental &amp; hardware work</span><span data-lang="zh">实验与硬件能力</span></a>
            <a href="#publication"><span data-lang="en">Publication</span><span data-lang="zh">论文发表</span></a>
            <a href="#collaborations"><span data-lang="en">Collaborations</span><span data-lang="zh">合作研究</span></a>
            <a href="#experience"><span data-lang="en">Earlier experience</span><span data-lang="zh">早期经历</span></a>
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
          <p className="hero-identity"><span data-lang="en">Yibo Yuan · Research Assistant, Westlake University</span><span data-lang="zh">袁艺博 · 西湖大学研究助理</span></p>
          <p className="eyebrow accent"><span data-lang="en">SOCIAL NEUROSCIENCE × NON-BIOLOGICAL COMPANIONS</span><span data-lang="zh">社会神经科学 × 非生物陪伴</span></p>
          <h1 data-lang="en">How does social need change when the social partner is <em>artificial?</em></h1>
          <h1 data-lang="zh">当社交伙伴是人工的，<em>社交需求会发生什么变化？</em></h1>
          <div className="hero-copy single" data-lang="en">
            <p>I am a research assistant in Prof. Ding Liu’s Systems Social Neuroscience Lab at Westlake University. I build experimental systems and analyze neural and behavioral data to ask when an artificial partner can meet social needs—and where its limits begin.</p>
            <p>My work connects a robotic-mouse platform, neural population analysis, and human–AI interaction studies. For my PhD, I hope to develop closed-loop neurotechnology and study how artificial partners affect social connection.</p>
          </div>
          <div className="hero-copy single" data-lang="zh">
            <p>我是西湖大学刘鼎教授系统与社会神经科学实验室的研究助理。我搭建实验系统、分析神经与行为数据，研究人工伙伴何时能够满足社交需求，以及这种作用的边界。</p>
            <p>我的工作连接机器鼠平台、神经群体分析和人机交互实验。博士阶段，我希望发展闭环神经技术，并研究人工伙伴如何影响社交连接。</p>
          </div>
          <div className="hero-actions">
            <a href="#companions"><span data-lang="en">Selected research ↓</span><span data-lang="zh">代表研究 ↓</span></a>
            <a href="#neuroengineering"><span data-lang="en">Hands-on work ↓</span><span data-lang="zh">实验与硬件能力 ↓</span></a>
            <a href="/Yibo_Yuan_Academic_CV_2026.pdf" target="_blank" rel="noreferrer"><span data-lang="en">CV ↗</span><span data-lang="zh">简历 ↗</span></a>
            <a href="mailto:yuanyibo@westlake.edu.cn"><span data-lang="en">Email ↗</span><span data-lang="zh">邮箱 ↗</span></a>
          </div>
        </section>

        <section className="section core-program-section" id="companions">
          <div className="section-heading compact"><div><h2 data-lang="en">Selected research.</h2><h2 data-lang="zh">代表研究。</h2></div></div>
          <p className="section-context" data-lang="en">Under the supervision of Prof. Ding Liu in the Systems Social Neuroscience Lab, I study how neural population states, naturalistic behavior, and artificial interactive systems can be combined to understand and regulate social need.</p>
          <p className="section-context" data-lang="zh">在刘鼎教授指导下，我在系统与社会神经科学实验室研究如何结合神经群体状态、自然行为与人工交互系统，理解并调控社交需求。</p>
          <nav className="research-index" aria-label="Research projects">
            <a href="#robotic-mouse"><span>01</span><strong data-lang="en">Build an artificial partner</strong><strong data-lang="zh">搭建人工伙伴</strong><small data-lang="en">Robotic mouse · experimental platform</small><small data-lang="zh">机器鼠 · 实验平台</small></a>
            <a href="#social-need-dynamics"><span>02</span><strong data-lang="en">Measure social states</strong><strong data-lang="zh">测量社交状态</strong><small data-lang="en">Neural populations · naturalistic behavior</small><small data-lang="zh">神经群体 · 自然行为</small></a>
            <a href="#mori"><span>03</span><strong data-lang="en">Study relational boundaries</strong><strong data-lang="zh">研究关系边界</strong><small data-lang="en">MORI · human–AI interaction</small><small data-lang="zh">MORI · 人机交互</small></a>
          </nav>
          <div className="project-list core-project-list">
            {[...coreProjects].sort((a, b) => a.order - b.order).map((project) => (
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
                        : project.id === 'mori'
                        ? <MoriProjectLightbox src={project.image} alt={project.imageAlt ?? project.title} caption={project.imageCaption} captionZh={project.imageCaptionZh} />
                        : <a className="project-primary-media" href={project.image} target="_blank" rel="noreferrer" aria-label={`Open full image for ${project.title}`}>
                          <Image src={project.image} alt={project.imageAlt ?? project.title} width={2000} height={1200} className={`project-primary-image project-primary-image-${project.imageFit ?? 'cover'}`} />
                          <span className="interactive-media-cue"><span data-lang="en">Click to enlarge the study design ↗</span><span data-lang="zh">点击放大研究设计 ↗</span></span>
                          {project.imageCaption && <span className="image-caption" data-lang="en">{project.imageCaption}</span>}
                          {project.imageCaptionZh && <span className="image-caption" data-lang="zh">{project.imageCaptionZh}</span>}
                        </a>
                  )}
                  {project.contribution && <div className="project-narrative"><h4 className="evidence-label"><span data-lang="en">My contribution</span><span data-lang="zh">我的贡献</span></h4><p data-lang="en">{project.contribution}</p>{project.contributionZh && <p data-lang="zh">{project.contributionZh}</p>}</div>}
                  {project.evidence && (
                    <aside className="project-result">
                      <h4 className="evidence-label"><span data-lang="en">{project.evidence.label}</span><span data-lang="zh">{project.evidence.labelZh}</span></h4>
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
                  {project.secondaryImage && project.id !== 'robotic-mouse' && (
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

        <section className="section methods-section" id="neuroengineering">
          <div className="section-heading compact"><div><h2 data-lang="en">Hands-on experimental work.</h2><h2 data-lang="zh">实验与硬件能力。</h2></div></div>
          <TextDetails title="Experimental setup and hardware development" titleZh="实验搭建与硬件开发" label="Experimental setup & build details" labelZh="实验搭建与硬件详情">
          <div className="experimental-evidence">
            <article><h3><span data-lang="en">Design &amp; run experiments</span><span data-lang="zh">设计并实施实验</span></h3><p data-lang="en">Behavioral arena and paradigm design, multi-camera and ultrasonic recording, and robot–mouse pilot experiments. I connect the apparatus to the question being tested.</p><p data-lang="zh">行为场地与范式设计、多相机与超声记录，以及机器鼠互动的探索性实验。让实验装置服务于明确的研究问题。</p><a href="#robotic-mouse"><span data-lang="en">Robotic-mouse project ↑</span><span data-lang="zh">机器鼠项目 ↑</span></a></article>
            <article><h3><span data-lang="en">Build &amp; debug instruments</span><span data-lang="zh">搭建与调试仪器</span></h3><p data-lang="en">Circuit and PCB design, soldering and board bring-up, STM32 acquisition, and bench testing. The ADS1299 case includes a USB-isolation debugging example.</p><p data-lang="zh">电路与 PCB 设计、焊接和上电调试、STM32 采集与台架测试。下方 ADS1299 详情包含 USB 隔离电路的排障案例。</p></article>
            <article><h3><span data-lang="en">Connect hardware to data</span><span data-lang="zh">连接硬件与数据</span></h3><p data-lang="en">An open-source STM32 lickometer, programmable motion tools, and behavioral-video analysis workflows support repeatable experimental measurements.</p><p data-lang="zh">开源 STM32 舔水计、可编程运动工具与行为视频分析流程，为可重复的实验测量提供支持。</p><a href="#tools"><span data-lang="en">Open research tools ↓</span><span data-lang="zh">开源研究工具 ↓</span></a></article>
          </div>
            <div><h3 data-lang="en">Neural and bioimpedance acquisition hardware</h3><h3 data-lang="zh">神经与生物阻抗采集硬件</h3><p data-lang="en">I led the hardware development of a portable eight-channel ADS1299–STM32 EEG acquisition system for the National College Student Biomedical Engineering Innovation Design Competition. For my bachelor’s thesis, supervised by Profs. Xiang Chen and Jin Li, I developed and bench-tested a portable STM32–AD5933 bioimpedance system.</p><p data-lang="zh">我主导全国大学生生物医学工程创新设计竞赛项目中便携式八通道 ADS1299–STM32 脑电采集系统的硬件开发；在陈翔教授和李津教授指导的毕业设计中，我开发并完成了便携式 STM32–AD5933 生物阻抗系统的台架测试。</p></div>
          </TextDetails>
          <div className="hardware-summary">
            <figure><ImageDetails src="/ads1299-board-photo.png"><Image src="/ads1299-board-photo.png" alt="ADS1299 project prototype board" width={1299} height={891} /></ImageDetails><figcaption>ADS1299<br /><span data-lang="en">Click for my contribution &amp; technical details</span><span data-lang="zh">点击查看我的贡献与技术细节</span></figcaption></figure>
            <figure><ImageDetails src="/thesis-ad5933-board.jpeg"><Image src="/thesis-ad5933-board.jpeg" alt="Bachelor’s thesis AD5933 measurement board" width={649} height={531} /></ImageDetails><figcaption><span data-lang="en">AD5933 bachelor’s thesis<br />Click for my contribution &amp; technical details</span><span data-lang="zh">AD5933 毕业设计<br />点击查看我的贡献与技术细节</span></figcaption></figure>
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
            <div><h2 data-lang="en">Selected collaborations.</h2><h2 data-lang="zh">合作研究。</h2></div>
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

        <section className="section experience-section" id="experience">
          <div className="section-heading compact"><div><h2 data-lang="en">Earlier experience.</h2><h2 data-lang="zh">早期经历。</h2></div></div>
          <AppointmentList items={appointments} />
        </section>

        <section className="section methods-section" id="tools">
          <div className="section-heading compact"><div><h2 data-lang="en">Open research tools.</h2><h2 data-lang="zh">开源科研工具。</h2></div></div>
          <div className="methods-grid">
            {openTools.map((tool) => (
              <div key={tool.code}>
                <span><span data-lang="en">{tool.code}</span><span data-lang="zh">{tool.codeZh}</span></span><h3 data-lang="en">{tool.title}</h3><h3 data-lang="zh">{tool.titleZh}</h3><p data-lang="en">{tool.description}</p><p data-lang="zh">{tool.descriptionZh}</p><ExternalLink href={tool.href} childrenZh="查看代码仓库">View repository</ExternalLink>
              </div>
            ))}
          </div>
        </section>

        <FuturePlans social />
        <section className="contact-section" id="contact">
          <p className="eyebrow accent"><span data-lang="en">CONTACT</span><span data-lang="zh">联系方式</span></p><h2 data-lang="en">Contact.</h2><h2 data-lang="zh">联系方式。</h2>
          <p data-lang="en">For PhD and research conversations, email me at the address below.</p><p data-lang="zh">如希望交流博士申请或研究合作，请通过下方邮箱联系我。</p>
          <a className="contact-button" href="mailto:yuanyibo@westlake.edu.cn">yuanyibo@westlake.edu.cn <span>↗</span></a>
          <a className="contact-secondary-email" href="mailto:yibo031110@gmail.com"><span data-lang="en">Personal email: yibo031110@gmail.com</span><span data-lang="zh">个人邮箱：yibo031110@gmail.com</span></a>
          <div className="contact-affiliation"><span><span data-lang="en">CURRENT AFFILIATION</span><span data-lang="zh">当前单位</span></span><Image src="/assets/westlake-logo-reverse.png" alt="Westlake University" width={300} height={90} className="contact-affiliation-logo" /></div>
        </section>
        <footer><span>© 2026 Yibo Yuan</span><span><span data-lang="en">Hangzhou, China</span><span data-lang="zh">中国杭州</span></span></footer>
      </main>
    </div>
  );
}
