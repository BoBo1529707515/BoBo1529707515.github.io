import Image from 'next/image';

const projects = [
  {
    number: '01', status: 'ACTIVE · WESTLAKE',
    title: 'Social need in hypothalamic population dynamics',
    titleZh: '下丘脑群体动力学中的社交需求',
    description: 'I study how isolation and reunion reshape hypothalamic population activity during naturalistic social interaction, combining miniscope calcium imaging with frame-resolved behavioral analysis.',
    descriptionZh: '结合微型显微镜钙成像与逐帧行为分析，研究隔离与重聚如何改变自然社交中的下丘脑神经群体活动。',
    tags: ['Miniscope imaging', 'Neural manifolds', 'Social behavior'],
  },
  {
    number: '02', status: 'VALIDATION IN PROGRESS',
    title: 'A programmable biomimetic social partner',
    titleZh: '可编程仿生社交伙伴：机器鼠',
    description: 'I conceived this research program and initiated its cross-institutional collaboration: a closed-loop robotic mouse for testing whether an artificial partner can regulate social need—and where biological equivalence breaks down.',
    descriptionZh: '我提出并发起跨机构合作，开发闭环机器鼠，用于检验人工伙伴能否调节社交需求，以及它与真实同伴的等价性边界。',
    tags: ['Embodied AI', 'Closed-loop control', 'Rodent behavior'],
    image: '/assets/robotic-mouse.jpg',
  },
  {
    number: '03', status: 'LIVE RESEARCH PROTOTYPE',
    title: 'MORI — family AI with bounded memory',
    titleZh: 'MORI：具有人际边界的家庭 AI',
    description: 'A deployed prototype for long-term family interaction. MORI separates person-specific authority from experiential memory, so accumulated trust or past success cannot silently expand an AI’s role.',
    descriptionZh: '面向长期家庭互动的可用原型：把“对谁拥有什么权限”与经验记忆分开，避免信任和成功经验悄悄扩大 AI 的角色。',
    tags: ['Human–AI interaction', 'Long-term memory', 'Relational authority'],
    href: 'https://mori-family-companion.pages.dev/',
  },
  {
    number: '04', status: 'RESEARCH PROPOSAL',
    title: 'TAS-Gate — authority-aware long-term memory',
    titleZh: 'TAS-Gate：面向授权边界的长期记忆',
    description: 'A structured NLP gate that updates an AI’s action authority only when temporal scope, authorization semantics, and speaker qualification all hold. The method is currently an ongoing research proposal.',
    descriptionZh: '只有当时间覆盖、授权语义与说话人资格同时成立时，才更新 AI 的行为权限；目前处于研究方案与实验设计阶段。',
    tags: ['NLP', 'AI memory', 'Human agency'],
  },
];

const researchTracks = [
  {
    code: 'BCI',
    lab: 'TIML Lab · Prof. Ren Wang',
    title: 'Reliable cross-subject EEG-fNIRS learning',
    titleZh: '跨被试 EEG-fNIRS 学习与可靠融合',
    description: 'Participant-disjoint evaluation, few-shot adaptation, probability calibration, and heterogeneous expert fusion. A frozen three-expert system reached 74.0% participant-equal balanced accuracy on the 26-subject Shin2018-WG benchmark under K=5 per class.',
  },
  {
    code: 'BRAIN DYNAMICS',
    lab: 'AI for Scientific Simulation and Discovery Lab · Prof. Tailin Wu',
    title: 'Physics-informed fMRI dynamics',
    titleZh: '物理启发的 fMRI 动力学',
    description: 'HCP preprocessing, multimodal event regressors, V-JEPA/MAE refactoring, SIREN/INR temporal modeling, and turbulence-oriented visualization for large-scale brain dynamics.',
  },
  {
    code: 'BEHAVIORAL VISION',
    lab: 'Westlake collaboration · Prof. Xiaodong Liu',
    title: 'Constrained 2.5D macaque behavior analysis',
    titleZh: '猕猴行为的受约束 2.5D 分析',
    description: 'SAM2 mask tracking, cage calibration, separate front- and floor-plane trajectory proxies, contact-state handling, and descriptive spatial summaries without frame-level pseudoreplication.',
  },
  {
    code: 'RESEARCH TOOLS',
    lab: 'Systems Social Neuroscience Lab · Prof. Ding Liu',
    title: 'Open experimental systems',
    titleZh: '开放式行为神经科学实验系统',
    description: 'An eight-channel STM32 capacitive lickometer, a programmable three-axis motion platform, long-duration behavioral tracking, and reproducible frame-level research workflows.',
  },
];

const appointments = [
  {
    date: 'AUG 2025 - PRESENT',
    institution: 'Westlake University',
    role: 'Full-time Research Assistant · Professor Ding Liu\'s lab',
    detail: 'Systems social neuroscience, miniscope calcium imaging, naturalistic behavior, and biomimetic social partners.',
    detailZh: null,
    logo: '/assets/westlake-logo.png',
    logoAlt: 'Westlake University logo',
  },
  {
    date: 'NOV 2025 - PRESENT',
    institution: 'Illinois Institute of Technology',
    role: 'Remote Research Collaborator · Prof. Ren Wang',
    detail: 'Trustworthy cross-subject EEG-fNIRS learning, calibration, meta-adaptation, and multimodal fusion.',
    detailZh: null,
    logo: null,
    logoAlt: null,
  },
  {
    date: 'MAR 2026 - PRESENT',
    institution: 'Westlake University',
    role: 'Cross-lab Research Collaborator · Prof. Tailin Wu',
    detail: 'Scientific AI for fMRI dynamics, temporal representation learning, and turbulence-oriented analysis.',
    detailZh: null,
    logo: '/assets/westlake-logo.png',
    logoAlt: 'Westlake University logo',
  },
  {
    date: 'SEP 2021 - JUN 2025',
    institution: "Xi'an Jiaotong University",
    role: 'B.Eng. in Biomedical Engineering',
    detail: 'First year: Chemical Biology in Qian Xuesen Honors College. Subsequently completed a B.Eng. in Biomedical Engineering with training across instrumentation, neural engineering, machine learning, and wet-lab research.',
    detailZh: '大一就读于钱学森荣誉学院化学生物学方向，之后完成生物医学工程工学学士。',
    logo: '/assets/xjtu-logo.png',
    logoAlt: "Xi'an Jiaotong University logo",
  },
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" className="text-link">{children}<span aria-hidden="true"> ↗</span></a>;
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
          <div className="institution-marks" aria-label="Academic affiliations">
            <a href="https://en.westlake.edu.cn/" target="_blank" rel="noreferrer" aria-label="Westlake University website">
              <Image src="/assets/westlake-logo.png" alt="Westlake University" width={260} height={78} className="institution-logo institution-logo-westlake" />
            </a>
            <a href="https://en.xjtu.edu.cn/" target="_blank" rel="noreferrer" aria-label="Xi'an Jiaotong University website">
              <Image src="/assets/xjtu-logo.png" alt="Xi'an Jiaotong University" width={260} height={70} className="institution-logo institution-logo-xjtu" />
            </a>
          </div>
          <p className="profile-bio">I connect social neuroscience, embodied AI, and HCI to study whether artificial partners can meet human social needs.</p>
          <nav className="side-nav" aria-label="Primary navigation">
            <a href="#research">Research</a><a href="#projects">Core projects</a><a href="#breadth">Research breadth</a><a href="#publication">Publication</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
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
          <p className="eyebrow accent">SOCIAL NEUROSCIENCE × ARTIFICIAL COMPANIONS</p>
          <h1>Can artificial social partners satisfy human social need—<em>without overstepping human authority?</em></h1>
          <p className="hero-zh">人工社交伙伴能否满足人的社交需求，同时不越过人类赋予它的权力边界？</p>
          <div className="hero-copy">
            <p>My work follows this question across three levels: the neural dynamics of social need, embodied interaction with biomimetic agents, and the governance of long-term human–AI relationships.</p>
            <p>I build experiments and systems that make the question testable—from miniscope recordings and behavioral pipelines to robotic partners and authority-aware AI memory.</p>
          </div>
          <div className="research-lenses" aria-label="Research framework">
            <div><span className="lens-index">01</span><strong>Mechanism</strong><p>How does the brain represent social deprivation and relief?</p></div>
            <div><span className="lens-index">02</span><strong>Embodiment</strong><p>Which social functions can an artificial partner reproduce?</p></div>
            <div><span className="lens-index">03</span><strong>Authority</strong><p>How should an AI learn from intimacy without acquiring power?</p></div>
          </div>
        </section>

        <section className="section breadth-section" id="breadth">
          <div className="section-heading"><div><p className="eyebrow">RESEARCH BREADTH</p><h2>A broader toolkit for studying brains, behavior, and intelligent systems.</h2></div><p>除核心主线外，我也在脑机接口、科学智能、行为计算机视觉和开放科研工具方向开展合作。</p></div>
          <div className="breadth-grid">
            {researchTracks.map((track) => (
              <article className="breadth-card" key={track.code}>
                <div className="breadth-meta"><span>{track.code}</span><span>{track.lab}</span></div>
                <h3>{track.title}</h3>
                <p className="project-title-zh">{track.titleZh}</p>
                <p>{track.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>One question, four experimental forms.</h2></div><p>四个项目围绕同一个核心：人工社交究竟能替代什么，又不能替代什么。</p></div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card ${project.image ? 'project-card-featured' : ''}`} key={project.number}>
                {project.image && <div className="project-image-wrap"><Image src={project.image} alt="A real mouse interacting with the programmable robotic mouse" width={1600} height={1000} className="project-image" /><span className="image-caption">Real mouse × robotic mouse · validation setup</span></div>}
                <div className="project-body">
                  <div className="project-meta"><span>{project.number}</span><span className="status-badge">{project.status}</span></div>
                  <h3>{project.title}</h3><p className="project-title-zh">{project.titleZh}</p>
                  <p className="project-description">{project.description}</p><p className="project-description-zh">{project.descriptionZh}</p>
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  {project.href && <ExternalLink href={project.href}>Open live prototype</ExternalLink>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section publication-section" id="publication">
          <div className="section-heading compact"><div><p className="eyebrow">PUBLICATION</p><h2>Methods for observing social circuits in action.</h2></div></div>
          <article className="publication-card">
            <div className="publication-year">2026</div>
            <div><p className="publication-state">PUBLISHED · JOURNAL OF VISUALIZED EXPERIMENTS</p><h3>In Vivo Calcium Imaging with a Miniaturized Microscope in the Hypothalamus for Understanding Social Behaviors in Mice</h3><p>Dai et al., including Yibo Yuan · JoVE, issue 229, e70401</p><ExternalLink href="https://doi.org/10.3791/70401">DOI 10.3791/70401</ExternalLink></div>
          </article>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading"><div><p className="eyebrow">EXPERIENCE</p><h2>Research appointments across neuroscience and intelligent systems.</h2></div><p>研究经历集中在一个交叉问题：如何把神经机制、行为测量与人工系统连接起来。</p></div>
          <div className="appointment-list">
            {appointments.map((appointment) => (
              <article className="appointment" key={`${appointment.date}-${appointment.institution}`}>
                <p className="appointment-date">{appointment.date}</p>
                <div className="appointment-content">
                  <div className="appointment-heading">
                    <h3>{appointment.institution}</h3>
                    {appointment.logo && <Image src={appointment.logo} alt={appointment.logoAlt} width={260} height={76} className="appointment-logo" />}
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
          <div className="section-heading compact"><div><p className="eyebrow">OPEN RESEARCH SOFTWARE</p><h2>Tools built for experiments that need to remain inspectable.</h2></div></div>
          <div className="methods-grid">
            <div><span>BEHAVIOR</span><h3>Mouse trajectory tracking</h3><p>Long-duration multi-animal tracking, custom ROIs, temporal and perspective alignment, and experimental contact detection.</p><ExternalLink href="https://github.com/BoBo1529707515/Mouse-trajectory-tracking">View repository</ExternalLink></div>
            <div><span>HARDWARE</span><h3>Open lickometer</h3><p>Eight-channel STM32 firmware and a Python interface for real-time capacitive lick detection and CSV acquisition.</p><ExternalLink href="https://github.com/BoBo1529707515/lickometer">View repository</ExternalLink></div>
            <div><span>MICROSCOPY</span><h3>NeuronTracker</h3><p>GUI-assisted axon-growth tracing with biologically motivated path constraints and calibrated quantitative exports.</p><ExternalLink href="https://github.com/BoBo1529707515/Neural-tract-tracing">View repository</ExternalLink></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow accent">CONTACT</p><h2>Interested in social need, artificial companions, or bounded AI agency?</h2>
          <p>I’m preparing PhD applications for Fall 2027 and welcome conversations with aligned labs.</p>
          <a className="contact-button" href="mailto:yibo031110@gmail.com">yibo031110@gmail.com <span>↗</span></a>
          <div className="contact-affiliation">
            <span>CURRENT AFFILIATION</span>
            <Image src="/assets/westlake-logo-reverse.png" alt="Westlake University" width={300} height={90} className="contact-affiliation-logo" />
          </div>
        </section>
        <footer><span>© 2026 Yibo Yuan</span><span>Built around one research question.</span></footer>
      </main>
    </div>
  );
}
