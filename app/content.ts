// Public website content only. Keep unpublished or unapproved material outside
// this application until it is cleared for public release.

export type ProjectStatus = 'active' | 'pilot' | 'prototype' | 'proposal' | 'published';
export type ModuleStatus = 'live' | 'pilot' | 'building' | 'planned' | 'published';
export type MediaSize = 'hero' | 'standard' | 'compact';

export type ProjectLink = {
  label: string;
  href: string;
  type: 'demo' | 'paper' | 'repository' | 'poster' | 'protocol';
};

export type EvidenceItem = {
  label: string;
  labelZh: string;
  observation: string;
  observationZh: string;
  boundary: string;
  boundaryZh: string;
  lastVerified: string;
};

export type ProjectModule = {
  id: string;
  label: string;
  labelZh: string;
  status: ModuleStatus;
  statusLabel: string;
  summary: string;
  summaryZh: string;
};

export type ResearchProject = {
  id: string;
  order: number;
  tier: 'core' | 'foundation';
  status: ProjectStatus;
  statusLabel: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  contribution?: string;
  contributionZh?: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  evidence?: EvidenceItem;
  modules?: ProjectModule[];
  links?: ProjectLink[];
};

export type ResearchTrack = {
  code: string;
  lab: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  logo?: string;
  logoAlt?: string;
  logoScale?: 'large';
  logoTheme?: 'dark';
  figure?: string;
  figureAlt?: string;
  figureCaption?: string;
  figureSize?: MediaSize;
};

export type Appointment = {
  date: string;
  institution: string;
  role: string;
  detail: string;
  detailZh?: string;
  logo?: string;
  logoAlt?: string;
  href?: string;
  logoScale?: 'large';
  logoTheme?: 'dark';
};

export type SidebarTimelineItem = {
  institution: string;
  role: string;
  note?: string;
  date: string;
  logo: string;
  logoAlt: string;
  logoVariant?: 'crest-left';
  href?: string;
};

export type SidebarTimelineGroup = {
  label: string;
  items: SidebarTimelineItem[];
};

export type Publication = {
  year: string;
  state: string;
  title: string;
  authors: string;
  href: string;
  linkLabel: string;
};

export type OpenTool = {
  code: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  href: string;
};

export const coreProjects: ResearchProject[] = [
  {
    id: 'robotic-mouse',
    order: 1,
    tier: 'core',
    status: 'pilot',
    statusLabel: 'PILOT · SYSTEM VALIDATION',
    title: 'A programmable biomimetic social partner',
    titleZh: '可编程仿生社交伙伴：机器鼠',
    description:
      'A closed-loop robotic mouse for testing whether a non-biological partner can regulate social need—and for locating the point at which biological equivalence breaks down.',
    descriptionZh:
      '通过闭环机器鼠检验非生物伙伴能否调节社交需求，并定位人工伙伴与真实同伴之间的生物等价性边界。',
    contribution: 'Research concept and cross-institutional collaboration initiated by Yibo Yuan.',
    contributionZh: '研究构想与跨机构合作由袁艺博提出并发起。',
    tags: ['Embodied AI', 'Closed-loop control', 'Social homeostasis'],
    image: '/assets/robotic-mouse.jpg',
    imageAlt: 'A real mouse beside the programmable robotic mouse in a behavioral arena',
    imageCaption: 'Behavioral validation setup · real mouse × machine mouse',
    evidence: {
      label: 'Preliminary observation',
      labelZh: '初步观察',
      observation:
        'Pilot data show measurable, repeated near-target investigation of a stationary machine-mouse prototype.',
      observationZh: '初步数据表明，小鼠会对静态机器鼠原型产生可测量、反复出现的近距离探索。',
      boundary: 'This establishes behavioral feasibility—not yet social-need relief.',
      boundaryZh: '目前结果证明行为范式可行，但尚不能证明机器鼠满足了社交需求。',
      lastVerified: '2026-08',
    },
    modules: [
      {
        id: 'embodiment',
        label: 'Embodiment',
        labelZh: '具身线索',
        status: 'building',
        statusLabel: 'BUILDING',
        summary: 'Surface, odor, motion, and interaction contingency.',
        summaryZh: '逐步拆解表面、气味、运动与互动响应性。',
      },
      {
        id: 'behavioral-evidence',
        label: 'Behavioral evidence',
        labelZh: '行为证据',
        status: 'pilot',
        statusLabel: 'PILOT',
        summary: 'Approach, proximity, withdrawal, and post-exposure social behavior.',
        summaryZh: '量化接近、邻近、撤离及暴露后的真实社交行为。',
      },
      {
        id: 'social-need-test',
        label: 'Substitution test',
        labelZh: '需求替代检验',
        status: 'planned',
        statusLabel: 'NEXT',
        summary: 'Artificial-partner exposure followed by a standardized real-mouse probe.',
        summaryZh: '机器鼠暴露后，以标准化真鼠测试剩余社交需求。',
      },
    ],
  },
  {
    id: 'mori',
    order: 2,
    tier: 'core',
    status: 'prototype',
    statusLabel: 'LIVE PROTOTYPE · HUMAN–AI',
    title: 'MORI — a long-term AI companion with relational boundaries',
    titleZh: 'MORI：具有关系边界的长期 AI 伙伴',
    description:
      'A working prototype for studying how people grant, maintain, and revoke authority as an AI becomes part of a long-term relationship.',
    descriptionZh:
      '通过可用原型研究：当 AI 逐渐进入长期关系时，人们如何赋予、维持和撤回它的行为权限。',
    contribution: 'Concept, system design, and research framing led by Yibo Yuan.',
    contributionZh: '由袁艺博主导概念提出、系统设计与研究问题构建。',
    tags: ['Human–AI interaction', 'Long-term memory', 'Relational authority'],
    modules: [
      {
        id: 'relationship-memory',
        label: 'Relationship memory',
        labelZh: '关系记忆',
        status: 'live',
        statusLabel: 'LIVE',
        summary: 'Persistent preferences, trust, experience, and relationship context.',
        summaryZh: '持续保存偏好、信任、经验与关系情境。',
      },
      {
        id: 'authority-memory',
        label: 'Authority memory',
        labelZh: '权限记忆',
        status: 'building',
        statusLabel: 'PROTOTYPE',
        summary: 'Explicit action rights remain separate from accumulated experience.',
        summaryZh: '把明确的行为权限与累积经验分开保存。',
      },
      {
        id: 'human-study',
        label: 'Human decisions',
        labelZh: '人的社会决策',
        status: 'planned',
        statusLabel: 'STUDY DESIGN',
        summary: 'Experiments on when people grant, preserve, or revoke AI authority.',
        summaryZh: '研究人何时赋权、保留权限或撤回 AI 的权限。',
      },
    ],
    links: [{ label: 'Open live prototype', href: 'https://mori-family-companion.pages.dev/', type: 'demo' }],
  },
];

export const foundationProjects: ResearchProject[] = [
  {
    id: 'social-need-dynamics',
    order: 1,
    tier: 'foundation',
    status: 'active',
    statusLabel: 'ACTIVE · WESTLAKE',
    title: 'Social need in hypothalamic population dynamics',
    titleZh: '下丘脑群体动力学中的社交需求',
    description:
      'I study how isolation and reunion reshape hypothalamic population activity during naturalistic social interaction, combining miniscope calcium imaging with frame-resolved behavioral analysis.',
    descriptionZh: '结合微型显微镜钙成像与逐帧行为分析，研究隔离与重聚如何改变自然社交中的下丘脑神经群体活动。',
    tags: ['Miniscope imaging', 'Neural manifolds', 'Social behavior'],
  },
  {
    id: 'tas-gate',
    order: 2,
    tier: 'foundation',
    status: 'proposal',
    statusLabel: 'RESEARCH PROPOSAL',
    title: 'TAS-Gate — authority-aware long-term memory',
    titleZh: 'TAS-Gate：面向授权边界的长期记忆',
    description:
      'A structured NLP gate that updates an AI’s action authority only when temporal scope, authorization semantics, and speaker qualification all hold.',
    descriptionZh: '只有当时间覆盖、授权语义与说话人资格同时成立时，系统才更新 AI 的行为权限。',
    tags: ['NLP', 'AI memory', 'Human agency'],
  },
];

export const researchTracks: ResearchTrack[] = [
  {
    code: 'BCI',
    lab: 'TIML Lab · Prof. Ren Wang',
    title: 'Reliable cross-subject EEG-fNIRS learning',
    titleZh: '跨被试 EEG-fNIRS 学习与可靠融合',
    description:
      'Participant-disjoint evaluation, few-shot adaptation, probability calibration, and heterogeneous expert fusion for robust multimodal decoding.',
    descriptionZh: '围绕跨被试多模态解码，开展被试隔离评估、少样本适应、概率校准与异构专家融合。',
  },
  {
    code: 'BRAIN DYNAMICS',
    lab: 'AI for Scientific Simulation and Discovery Lab · Prof. Tailin Wu',
    title: 'Physics-informed fMRI dynamics',
    titleZh: '物理启发的 fMRI 动力学',
    description:
      'HCP preprocessing, temporal representation learning, implicit neural representations, and turbulence-oriented visualization for large-scale brain dynamics.',
    descriptionZh: '面向大尺度脑动力学，开展 HCP 预处理、时间表征学习、隐式神经表示与湍流可视化。',
    logo: '/assets/tailin-wu-lab-logo.png',
    logoAlt: 'AI for Scientific Simulation and Discovery Lab logo',
    figure: '/assets/tailin-wu-phase-gradient.png',
    figureAlt: 'Phase-gradient direction and magnitude visualization on an fMRI-derived cortical map',
    figureCaption: 'Phase-gradient analysis · open full figure',
    figureSize: 'compact',
  },
  {
    code: 'BEHAVIORAL VISION',
    lab: 'Westlake collaboration · Prof. Xiaodong Liu',
    title: 'Constrained 2.5D macaque behavior analysis',
    titleZh: '猕猴行为的受约束 2.5D 分析',
    description:
      'Mask tracking, cage calibration, plane-specific trajectory proxies, contact-state handling, and descriptive spatial analysis.',
    descriptionZh: '结合掩膜追踪、笼体标定、分平面轨迹代理与接触状态处理，进行稳健的描述性空间分析。',
  },
  {
    code: 'RESEARCH TOOLS',
    lab: 'Systems Social Neuroscience Lab · Prof. Ding Liu',
    title: 'Open experimental systems',
    titleZh: '开放式行为神经科学实验系统',
    description:
      'An eight-channel STM32 lickometer, a programmable motion platform, long-duration tracking, and reproducible frame-level workflows.',
    descriptionZh: '开发八通道 STM32 舔舐计、可编程运动平台、长时程追踪与可复现逐帧分析流程。',
    logo: '/assets/ding-liu-lab-logo.png',
    logoAlt: 'Ding Liu Lab logo',
  },
];

export const appointments: Appointment[] = [
  {
    date: 'AUG 2025 - PRESENT',
    institution: 'Westlake University',
    role: "Full-time Research Assistant · Professor Ding Liu's lab",
    detail: 'Systems social neuroscience, miniscope calcium imaging, naturalistic behavior, and biomimetic social partners.',
    detailZh: '从事系统与社交神经科学、微型显微镜钙成像、自然社交行为和仿生社交伙伴研究。',
    logo: '/assets/ding-liu-lab-logo.png',
    logoAlt: 'Ding Liu Lab logo',
  },
  {
    date: 'NOV 2025 - PRESENT',
    institution: 'Illinois Institute of Technology',
    role: 'Remote Research Collaborator · Prof. Ren Wang',
    detail: 'Trustworthy cross-subject EEG-fNIRS learning, calibration, meta-adaptation, and multimodal fusion.',
    detailZh: '研究可信的跨被试 EEG-fNIRS 学习、概率校准、元适应与多模态融合。',
    logo: '/assets/illinois-tech-logo.svg',
    logoAlt: 'Illinois Tech logo',
    href: 'https://www.iit.edu/',
  },
  {
    date: 'MAR 2026 - PRESENT',
    institution: 'Westlake University',
    role: 'Cross-lab Research Collaborator · Prof. Tailin Wu',
    detail: 'Scientific AI for fMRI dynamics, temporal representation learning, and turbulence-oriented analysis.',
    detailZh: '开展面向 fMRI 动力学、时间表征学习与湍流分析的科学智能研究。',
    logo: '/assets/tailin-wu-lab-logo.png',
    logoAlt: 'AI for Scientific Simulation and Discovery Lab logo',
  },
  {
    date: 'SEP 2021 - JUN 2025',
    institution: "Xi'an Jiaotong University",
    role: 'B.Eng. in Biomedical Engineering',
    detail:
      'First year: Chemical Biology in Qian Xuesen Honors College. Subsequently completed a B.Eng. in Biomedical Engineering with training across instrumentation, neural engineering, machine learning, and wet-lab research.',
    detailZh: '大一就读于钱学森荣誉学院化学生物学方向，之后完成生物医学工程工学学士。',
    logo: '/assets/xjtu-logo.png',
    logoAlt: "Xi'an Jiaotong University logo",
  },
  {
    date: 'JUN 2024 - JUL 2024',
    institution: 'Zhen Tec Technology Inc.',
    role: 'EEG Data Analyst',
    detail:
      'Designed IIR/FIR filters, analyzed time- and frequency-domain EEG features with MNE, and supported PCA/ICA and CNN-LSTM fatigue-model development.',
    detailZh: '设计 IIR/FIR 滤波器，使用 MNE 分析脑电时域与频域特征，并参与 PCA、ICA 与 CNN-LSTM 疲劳模型开发。',
    logo: '/assets/zhentec-logo.png',
    logoAlt: 'Zhen Tec logo',
    href: 'https://zhentecbci.com/',
    logoScale: 'large',
  },
  {
    date: 'MAY 2023 - JUN 2023',
    institution: "The First Affiliated Hospital of Xi'an Jiaotong University",
    role: 'Clinical Laboratory Intern',
    detail:
      'Observed rehabilitation and medical-imaging workflows, assisted routine clinical tasks, and evaluated usability constraints in rehabilitation and portable imaging equipment.',
    detailZh: '观察康复与医学影像工作流程，协助常规临床任务，并分析康复设备和便携式影像设备的可用性约束。',
    logo: '/assets/xjtu-first-affiliated-hospital-logo.png',
    logoAlt: "The First Affiliated Hospital of Xi'an Jiaotong University logo",
    href: 'http://www.en.jdyfy.com/Cooperation___Exchange/Medical_Cooperation.htm',
    logoScale: 'large',
  },
  {
    date: 'JAN 2024 - 2025',
    institution: 'Medical and Engineering Innovators',
    role: 'Council Member · External Relations',
    detail:
      'Led alumni liaison across biomedical and electrical engineering, supported a Technology and Finance forum, and proposed a hospital-university translational project.',
    detailZh: '负责生物医学工程和电气工程校友联络，协助举办科技金融论坛，并提出院校转化合作项目。',
    logo: '/assets/medical-engineering-innovators-logo.png',
    logoAlt: 'Medical and Engineering Innovators logo',
    href: 'https://yigongxueren.com/',
  },
];

export const sidebarTimeline: SidebarTimelineGroup[] = [
  {
    label: 'Academic Path',
    items: [
      {
        institution: "Xi'an Jiaotong University",
        role: 'Chemical Biology',
        note: 'Qian Xuesen Honors College',
        date: '2021 — 2022',
        logo: '/assets/xjtu-logo.png',
        logoAlt: "Xi'an Jiaotong University",
        logoVariant: 'crest-left',
        href: 'https://en.xjtu.edu.cn/',
      },
      {
        institution: "Xi'an Jiaotong University",
        role: 'B.Eng. Biomedical Engineering',
        date: '2022 — 2025',
        logo: '/assets/xjtu-logo.png',
        logoAlt: "Xi'an Jiaotong University",
        logoVariant: 'crest-left',
        href: 'https://en.xjtu.edu.cn/',
      },
      {
        institution: 'Westlake University',
        role: 'Research Assistant · Social Neuroscience',
        date: '2025 — Present',
        logo: '/assets/westlake-mark.png',
        logoAlt: 'Westlake University',
        href: 'https://en.westlake.edu.cn/',
      },
    ],
  },
];

export const publications: Publication[] = [
  {
    year: '2026',
    state: 'PUBLISHED · JOURNAL OF VISUALIZED EXPERIMENTS',
    title: 'In Vivo Calcium Imaging with a Miniaturized Microscope in the Hypothalamus for Understanding Social Behaviors in Mice',
    authors: 'Dai et al., including Yibo Yuan · JoVE, issue 229, e70401',
    href: 'https://doi.org/10.3791/70401',
    linkLabel: 'DOI 10.3791/70401',
  },
];

export const openTools: OpenTool[] = [
  {
    code: 'BEHAVIOR',
    title: 'Mouse trajectory tracking',
    titleZh: '小鼠轨迹追踪',
    description: 'Long-duration multi-animal tracking, custom ROIs, temporal alignment, and experimental contact detection.',
    descriptionZh: '支持长时程多动物追踪、自定义场地、时间对齐与实验接触检测。',
    href: 'https://github.com/BoBo1529707515/Mouse-trajectory-tracking',
  },
  {
    code: 'HARDWARE',
    title: 'Open lickometer',
    titleZh: '开源舔舐计',
    description: 'Eight-channel STM32 firmware and a Python interface for real-time capacitive lick detection and CSV acquisition.',
    descriptionZh: '八通道 STM32 固件与 Python 界面，用于实时电容舔舐检测和 CSV 采集。',
    href: 'https://github.com/BoBo1529707515/lickometer',
  },
  {
    code: 'MICROSCOPY',
    title: 'NeuronTracker',
    titleZh: '神经突起追踪工具',
    description: 'GUI-assisted axon-growth tracing with biologically motivated path constraints and calibrated exports.',
    descriptionZh: '结合生物学路径约束与标定导出的 GUI 辅助轴突生长追踪工具。',
    href: 'https://github.com/BoBo1529707515/Neural-tract-tracing',
  },
];
