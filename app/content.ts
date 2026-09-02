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
  imageLayout?: 'side' | 'wide';
  imageFit?: 'cover' | 'contain';
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
  logoScale?: 'large' | 'prominent' | 'fit-wide';
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
  logoScale?: 'large' | 'prominent' | 'fit-wide';
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
    id: 'social-need-dynamics',
    order: 1,
    tier: 'core',
    status: 'active',
    statusLabel: 'ACTIVE · NEURAL MECHANISM',
    title: 'Neural representation and computational modeling of social need',
    titleZh: '社交需求的神经表征与计算建模',
    description:
      'I combine miniscope calcium imaging with frame-resolved contact behavior to study how isolation and reunion reshape medial preoptic nucleus (MPN) population dynamics.',
    descriptionZh:
      '结合微型显微镜钙成像与逐帧接触行为，研究隔离与重聚如何重塑内侧视前核（MPN）的神经群体动力学。',
    contribution:
      'Developed a registration-free population-geometry framework for comparing recordings across days, together with cross-validated decoding, motion controls, and circular-shift and permutation tests.',
    contributionZh:
      '针对缺少跨日神经元配准的问题，开发无需逐细胞配准的群体几何分析框架，并结合交叉验证解码、运动控制及时移与置换检验。',
    tags: ['Miniscope imaging', 'Population geometry', 'Social homeostasis'],
    image: '/assets/social-need-neural-state.png',
    imageAlt: 'Preliminary neural state displacement from baseline across isolation durations and reunion',
    imageCaption: 'Preliminary population-level visualization · reunion-evoked neural-state displacement across isolation durations · open full figure',
    imageLayout: 'wide',
    imageFit: 'contain',
    evidence: {
      label: 'Current evidence',
      labelZh: '当前证据',
      observation:
        'Behaviorally inferred social need covaries with MPN population sensitivity across isolation and reunion conditions.',
      observationZh: '行为推断的社交需求与不同隔离和重聚条件下 MPN 神经群体的敏感性协变。',
      lastVerified: '2026-09',
    },
    modules: [
      {
        id: 'behavior-pipeline',
        label: 'Contact behavior at scale',
        labelZh: '高通量接触行为量化',
        status: 'live',
        statusLabel: 'OPEN WORKFLOW',
        summary: 'Semantic segmentation enables efficient contact quantification across irregular arenas and heterogeneous video quality.',
        summaryZh: '以语义分割高效量化接触行为，适应不规则场地与不同画质。',
      },
      {
        id: 'registration-free-geometry',
        label: 'Cross-day population comparison',
        labelZh: '跨日群体比较',
        status: 'live',
        statusLabel: 'METHOD',
        summary: 'Population geometry compares neural states without requiring cell-by-cell registration across days.',
        summaryZh: '无需跨日逐细胞配准，即可比较不同条件下的神经群体状态。',
      },
    ],
  },
  {
    id: 'robotic-mouse',
    order: 2,
    tier: 'core',
    status: 'pilot',
    statusLabel: 'PILOT · SYSTEM VALIDATION',
    title: 'A programmable robotic mouse for decomposing social need',
    titleZh: '机器鼠：拆解社交需求的可编程仿生伙伴',
    description:
      'A standardized artificial social stimulus for isolating how motion, touch, temperature, odor, and responsiveness contribute to social-need regulation—and where biological equivalence breaks down.',
    descriptionZh:
      '将运动、触摸、温度、气味与互动响应性拆解为可控变量，检验非生物伙伴能否调节社交需求，并定位人工伙伴与真实同伴之间的等价性边界。',
    contribution: 'Research concept, experimental program, and cross-institutional collaboration initiated by Yibo Yuan.',
    contributionZh: '研究构想、实验体系与跨机构合作由袁艺博提出并发起。',
    tags: ['Embodied AI', 'Closed-loop control', 'Social homeostasis'],
    image: '/assets/robotic-mouse-prototype.png',
    imageAlt: 'Physical prototype of the biomimetic robotic mouse on a laboratory bench',
    imageCaption: 'Current physical prototype · programmable biomimetic robotic mouse · open full image',
    imageLayout: 'side',
    imageFit: 'cover',
    modules: [
      {
        id: 'embodiment',
        label: 'Embodiment',
        labelZh: '具身线索',
        status: 'building',
        statusLabel: 'BUILDING',
        summary: 'Motion, touch, temperature, odor, morphology, and interaction contingency.',
        summaryZh: '逐步拆解运动、触摸、温度、气味、形态与互动响应性。',
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
        label: 'Reunion probe',
        labelZh: '重聚检验',
        status: 'planned',
        statusLabel: 'NEXT',
        summary: 'Artificial-partner exposure followed by a standardized real-mouse probe.',
        summaryZh: '机器鼠暴露后，以标准化真鼠测试剩余社交需求。',
      },
    ],
  },
  {
    id: 'controlled-touch',
    order: 3,
    tier: 'core',
    status: 'prototype',
    statusLabel: 'PROTOTYPE · CONTROLLED STIMULUS',
    title: 'Controlled touch as a tool for modeling social-need accumulation',
    titleZh: '可控触摸：研究社交需求积累的实验工具',
    description:
      'A programmable embodied platform turns the number, timing, duration, and tactile properties of contact into calibrated inputs for asking how social need accumulates, decays, and is relieved.',
    descriptionZh:
      '通过可编程具身平台，将接触次数、时机、持续时间与触觉属性转化为可标定输入，用于研究社交需求如何积累、衰减与缓解。',
    contribution:
      'Designed the experimental tool and modeling framework linking controlled social contact to leaky-integrator, state-space, and attractor-based accounts of social need.',
    contributionZh:
      '设计可控触摸实验工具，并将社会接触输入与泄漏积分、状态空间及吸引子等社交需求模型相连接。',
    tags: ['Programmable touch', 'Computational modeling', 'Experimental systems'],
    image: '/assets/robotic-mouse-system.png',
    imageAlt: 'Robotic mouse motor layout and programmable movement states',
    imageCaption: 'Programmable morphology and movement states · a platform for controlled social cues · open full figure',
    imageLayout: 'wide',
    imageFit: 'contain',
    modules: [
      {
        id: 'calibrated-inputs',
        label: 'Calibrated social inputs',
        labelZh: '可标定的社会输入',
        status: 'building',
        statusLabel: 'BUILDING',
        summary: 'Contact count, timing, duration, tactile properties, and responsive motion become independently controllable variables.',
        summaryZh: '独立控制接触次数、时机、持续时间、触觉属性与响应性运动。',
      },
      {
        id: 'accumulation-models',
        label: 'Accumulation models',
        labelZh: '需求积累模型',
        status: 'planned',
        statusLabel: 'ANALYSIS PLAN',
        summary: 'Compare leaky-integrator, hidden-state, attractor, and social-avoidance accounts of accumulation and relief.',
        summaryZh: '比较泄漏积分、隐状态、吸引子与社交回避模型对需求积累和缓解的解释。',
      },
    ],
  },
  {
    id: 'mori',
    order: 4,
    tier: 'core',
    status: 'prototype',
    statusLabel: 'CHI STUDY · N=105',
    title: 'MORI — relational power in long-term human–AI companionship',
    titleZh: 'MORI：长期人机陪伴关系中的权力边界',
    description:
      'A 105-participant study of how people revise distinct AI powers as an artificial companion enters a long-term relationship and supports loneliness-related needs.',
    descriptionZh:
      '通过 105 人实验研究：当人工伙伴进入长期关系并回应孤独相关需求时，人们如何调整不同类型的 AI 权力。',
    contribution: 'Study concept, experimental design, research framing, and cross-sector collaboration led by Yibo Yuan; ongoing collaboration with Xiaohongshu.',
    contributionZh: '由袁艺博主导研究构想、实验设计、问题构建与产学合作，目前与小红书持续合作。',
    tags: ['Human–AI interaction', 'Long-term memory', 'Relational authority'],
    modules: [
      {
        id: 'human-study',
        label: 'Human study',
        labelZh: '人类参与者实验',
        status: 'live',
        statusLabel: 'N=105',
        summary: 'A fixed 20-year relationship narrative measures six powers under four governance arrangements across three judgment stages.',
        summaryZh: '在固定的 20 年关系叙事中，跨三次判断测量四种治理安排下的六类权力。',
      },
      {
        id: 'power-specific-change',
        label: 'Power-specific change',
        labelZh: '权力特异性变化',
        status: 'live',
        statusLabel: 'PRELIMINARY',
        summary: 'Relationship context produces different—and sometimes opposing—revisions across powers; memory-sharing authority shows one of the largest attitude shifts.',
        summaryZh: '关系情境会使不同权力出现差异化、甚至方向相反的调整；其中信息分享权是态度变化最大的维度之一。',
      },
      {
        id: 'tas-gate',
        label: 'TAS-Gate — computational extension',
        labelZh: 'TAS-Gate：面向更高情商 AI 的计算延伸',
        status: 'building',
        statusLabel: 'BUILDING',
        summary: 'Because authority is power-specific, rule memory and experience memory remain asymmetric: success, praise, or trust can improve behavior without silently expanding permission.',
        summaryZh: '基于 MORI 对权力差异的发现，将规则记忆与经验记忆非对称分离，使 AI 能从成功、表扬和信任中学习，却不会将其误认为扩大权限的授权。',
      },
    ],
    links: [{ label: 'Open live prototype', href: 'https://mori-family-companion.pages.dev/', type: 'demo' }],
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
    code: 'WESTLAKE · CROSS-LAB AI',
    lab: 'Through Systems Social Neuroscience Lab · Prof. Tailin Wu · Mentor: Tengfei Xu',
    title: 'Learning and validating singular dynamics in the brain',
    titleZh: '学习并验证大脑中的奇点动力学',
    description:
      'Scientific AI for learning whether generative models can represent singular structures in large-scale brain dynamics, with validation using open tools developed by Prof. Pulin Gong’s group at the University of Sydney.',
    descriptionZh: '尝试让生成模型理解大尺度脑动力学中的奇点结构，并使用悉尼大学 Pulin Gong 教授团队的开源工具进行验证。',
    logo: '/assets/tailin-wu-lab-logo.png',
    logoAlt: 'AI for Scientific Simulation and Discovery Lab logo',
    logoScale: 'prominent',
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
    role: 'Full-time Research Assistant · Systems Social Neuroscience Lab · Prof. Ding Liu',
    detail: 'A unified program on how embodied and virtual non-biological partners may satisfy social need: neural representation, programmable social cues, long-term AI companionship, and relational authority.',
    detailZh: '围绕“非生物伙伴如何满足社交需求”开展统一研究：涵盖神经表征、可编程社会线索、长期 AI 陪伴与关系权力边界。',
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
        note: 'Medical Electronics & Information',
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
