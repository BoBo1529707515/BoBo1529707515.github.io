// Public website content only. Keep unpublished or unapproved material outside
// this application until it is cleared for public release.

export type ProjectStatus = 'active' | 'completed' | 'pilot' | 'prototype' | 'proposal' | 'published';
export type ModuleStatus = 'live' | 'pilot' | 'building' | 'planned' | 'published';
export type MediaSize = 'hero' | 'standard' | 'compact';

export type ProjectLink = {
  label: string;
  labelZh: string;
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
  statusLabelZh: string;
  summary: string;
  summaryZh: string;
};

export type ResearchProject = {
  id: string;
  order: number;
  tier: 'core' | 'foundation';
  status: ProjectStatus;
  statusLabel: string;
  statusLabelZh: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  contribution?: string;
  contributionZh?: string;
  tags: string[];
  tagsZh: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  imageCaptionZh?: string;
  imageLayout?: 'side' | 'wide';
  imageFit?: 'cover' | 'contain';
  figureDetails?: {
    eyebrow: string;
    eyebrowZh: string;
    title: string;
    titleZh: string;
    origin?: {
      label: string;
      labelZh: string;
      title: string;
      titleZh: string;
      image: string;
      imageAlt: string;
      body: string;
      bodyZh: string;
      bridge: string;
      bridgeZh: string;
      citation: string;
      href: string;
    };
    detailFigure?: {
      image: string;
      imageAlt: string;
      caption: string;
      captionZh: string;
    };
    methods: string[];
    methodsZh: string[];
    reading: string;
    readingZh: string;
  };
  secondaryImage?: string;
  secondaryImageAlt?: string;
  secondaryImageCaption?: string;
  secondaryImageCaptionZh?: string;
  evidence?: EvidenceItem;
  modules?: ProjectModule[];
  links?: ProjectLink[];
};

export type ResearchTrack = {
  code: string;
  codeZh: string;
  lab: string;
  labZh: string;
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
  figureCaptionZh?: string;
  figureSize?: MediaSize;
};

export type Appointment = {
  date: string;
  dateZh: string;
  institution: string;
  institutionZh: string;
  role: string;
  roleZh: string;
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
  institutionZh: string;
  role: string;
  roleZh: string;
  note?: string;
  noteZh?: string;
  date: string;
  dateZh: string;
  logo: string;
  logoAlt: string;
  logoVariant?: 'crest-left';
  href?: string;
};

export type SidebarTimelineGroup = {
  label: string;
  labelZh: string;
  items: SidebarTimelineItem[];
};

export type Publication = {
  year: string;
  state: string;
  stateZh: string;
  title: string;
  titleZh: string;
  authors: string;
  authorsZh: string;
  selfAuthor: string;
  selfAuthorZh: string;
  href?: string;
  linkLabel?: string;
  linkLabelZh?: string;
};

export type OpenTool = {
  code: string;
  codeZh: string;
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
    status: 'completed',
    statusLabel: 'NOV 2025 — MAR 2026',
    statusLabelZh: '2025 年 11 月—2026 年 3 月',
    title: 'Neural representation and computational modeling of social need',
    titleZh: '社交需求的神经表征与计算建模',
    description:
      'I combine miniscope calcium imaging with frame-resolved contact behavior to study how isolation and reunion reshape medial preoptic nucleus (MPN) population dynamics.',
    descriptionZh:
      '结合微型显微镜钙成像与逐帧接触行为，研究隔离与重聚如何重塑内侧视前核（MPN）的神经群体动力学。',
    contribution:
      'Using data from the lab’s published Nature study, I independently designed and implemented a registration-free population-state framework. By quantifying standardized displacement from each session’s initial state, I enabled cross-day comparison of event sensitivity and related MPN population sensitivity to behaviorally inferred social need, using cross-validated decoding, motion controls, circular shifts, and permutation tests. I also developed a high-throughput semantic-segmentation workflow to achieve robust frame-level contact quantification when low-resolution video and identity switching limited DeepLabCut.',
    contributionZh:
      '我基于实验室已发表 Nature 论文所使用的数据，独立提出并实现了无需跨日逐细胞配准的神经群体状态分析框架。通过量化神经群体相对于各次实验初始状态的标准化偏离，我实现了事件敏感性的跨日比较，并结合交叉验证解码、运动控制、循环时移与置换检验，揭示 MPN 神经群体敏感性与行为推断的社交需求之间的关系。针对低画质和身份互换导致 DeepLabCut 表现不稳定的问题，我还开发了以语义分割为核心的高通量流程，实现稳健的逐帧接触行为量化。',
    tags: ['Miniscope imaging', 'Population geometry', 'Social homeostasis'],
    tagsZh: ['微型显微镜成像', '神经群体几何', '社交稳态'],
    image: '/assets/social-need-neural-state.png',
    imageAlt: 'Preliminary neural state displacement from baseline across isolation durations and reunion',
    imageCaption: 'Neural-state displacement across isolation durations · click for methods and reading guide',
    imageCaptionZh: '不同隔离时长下的神经状态位移 · 点击查看方法与读图说明',
    imageLayout: 'wide',
    imageFit: 'contain',
    figureDetails: {
      eyebrow: 'HOW THIS FIGURE WAS MADE',
      eyebrowZh: '图表方法',
      title: 'Neural-state displacement from baseline',
      titleZh: '神经群体状态相对基线的位移',
      origin: {
        label: 'SCIENTIFIC ORIGIN',
        labelZh: '科学起点',
        title: 'From an opponent MPN circuit to a cross-day population state',
        titleZh: '从 MPN 对立环路到可跨日比较的神经群体状态',
        image: '/assets/nature-mpn-opponent-populations.png',
        imageAlt: 'MPN isolation and reunion neuronal populations reported by Liu and colleagues in Nature',
        body:
          'In Liu et al., Nature (2025), Prof. Ding Liu and colleagues identified two opposing neuronal populations in the medial preoptic nucleus. MPN¹ˢᵒˡᵃᵗⁱᵒⁿ neurons were active when the partner was absent and suppressed after reunion, whereas MPNᴿᵉᵘⁿⁱᵒⁿ neurons showed the reverse pattern. The strength of MPN¹ˢᵒˡᵃᵗⁱᵒⁿ activity tracked social rebound, establishing a circuit-level basis for social need and satiety.',
        bodyZh:
          '刘鼎及其合作者发表于 Nature（2025）的研究在内侧视前核中鉴定出两类响应相反的神经元群体：伴侣离开时活跃、重聚后受抑制的 MPNᴵˢᵒˡᵃᵗⁱᵒⁿ 神经元，以及在重聚时被激活的 MPNᴿᵉᵘⁿⁱᵒⁿ 神经元。MPNᴵˢᵒˡᵃᵗⁱᵒⁿ 的活动强度随社交反弹变化，为社交需求与社交饱足提供了环路层面的基础。',
        bridge:
          'This finding created the biological starting point for my project, but also exposed a computational gap: without cell-by-cell registration across days, how can full-population dynamics be compared across sessions and isolation durations? I addressed this by expressing every session relative to its own baseline geometry, yielding the registration-free displacement measure shown here.',
        bridgeZh:
          '这一发现构成了本项目的生物学起点，同时也留下一个计算问题：在缺少跨日逐细胞配准时，如何比较不同 session、不同隔离时长下的完整神经群体动力学？因此，我将每个 session 表示为相对其自身基线几何的偏离，由此建立了图中无需跨日配准的群体状态位移指标。',
        citation: 'Liu et al. · Nature 640 · 2025 · Fig. 2c',
        href: 'https://doi.org/10.1038/s41586-025-08617-8',
      },
      detailFigure: {
        image: '/assets/social-need-state-trajectory-day3.png',
        imageAlt: 'Representative three-dimensional MPN population-state trajectory from a Day 3 reunion session',
        caption:
          'Representative within-session neural-state trajectory. Calcium activity from 131 MPN neurons was projected into a three-dimensional PCA space, visualizing the transition from isolation through reunion and contact to re-isolation. Cross-day inference is based separately on baseline-normalized displacement and permutation statistics.',
        captionZh:
          '代表性单次实验神经状态轨迹。将 131 个 MPN 神经元的钙活动投影到三维 PCA 空间，展示从隔离、重聚与接触到再次隔离的状态演化；跨日推断则由基线标准化位移与置换统计独立支持。',
      },
      methods: [
        'I aligned each session’s frame-resolved MPN calcium activity (ΔF/F) to its reunion onset, so t = 0 marks the start of reunion and negative time marks the preceding isolation period.',
        'Within each session, I fitted PCA to the complete neural time series and retained up to 10 components. Each session was analysed in its own state space, so the comparison does not require cell-by-cell registration across days.',
        'I defined the baseline centroid from the pre-reunion window (−300 to 0 s; −120 to 0 s if too few frames were available), calculated each frame’s Euclidean distance from that centroid, and z-scored the distance using the baseline distance distribution.',
        'I averaged values in 2-s bins, retained bins with at least three frames, and applied Gaussian smoothing (σ = 1.5 bins). Sessions passing baseline-drift, cross-validated baseline-versus-social decoding, and touch-bout quality controls were grouped by isolation day; lines show the across-session mean and shading shows ± SEM.',
      ],
      methodsZh: [
        '我将每个 session 的逐帧 MPN 钙活动（ΔF/F）对齐到其重聚起点，因此 t = 0 表示重聚开始，负时间表示此前的隔离期。',
        '在每个 session 内部，我对完整神经时间序列拟合 PCA，并保留最多 10 个主成分。每个 session 均在自身的状态空间中独立分析，因此跨日比较不依赖逐细胞配准。',
        '我以重聚前窗口（优先使用 −300 至 0 秒；帧数不足时回退至 −120 至 0 秒）定义基线质心，计算每一帧到该质心的欧氏距离，再依据基线期距离分布进行 z 标准化。',
        '我按 2 秒分箱，每箱至少保留 3 帧，并进行高斯平滑（σ = 1.5 个时间箱）。通过基线漂移、基线与社交状态交叉验证解码、接触片段数量三项质控的 session 按隔离天数聚合；实线为 session 间均值，阴影为 ± SEM。',
      ],
      reading:
        'How to read it: a value of 3 means that the population state is three baseline standard deviations farther from its baseline centroid than typical baseline fluctuation. Day 0/1/3/5 denote isolation conditions and n denotes retained sessions. Grey, green, and purple backgrounds mark isolation, reunion, and re-isolation; red and purple dashed lines mark reunion onset and median offset. The rise after t = 0 quantifies population-level sensitivity to reunion, while the subsequent trajectory tracks how that displacement evolves.',
      readingZh:
        '读图方式：纵轴为 3，表示当前群体状态相对基线质心的距离，比基线期的典型波动高 3 个标准差。Day 0/1/3/5 表示不同隔离条件，n 表示质控后纳入的 session 数；灰、绿、紫色背景分别代表隔离、重聚与再次隔离，红、紫虚线分别标记重聚起点和重聚结束时间中位数。t = 0 后的上升量化神经群体对重聚事件的敏感性，后续轨迹展示这种偏离如何随重聚过程演化。',
    },
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
        statusLabelZh: '开源流程',
        summary: 'Semantic segmentation enables efficient contact quantification across irregular arenas and heterogeneous video quality.',
        summaryZh: '以语义分割高效量化接触行为，适应不规则场地与不同画质。',
      },
      {
        id: 'registration-free-geometry',
        label: 'Cross-day population comparison',
        labelZh: '跨日群体比较',
        status: 'live',
        statusLabel: 'METHOD',
        statusLabelZh: '分析方法',
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
    statusLabelZh: '预实验 · 系统验证',
    title: 'A programmable robotic mouse for decomposing social need',
    titleZh: '机器鼠：拆解社交需求的可编程仿生伙伴',
    description:
      'A standardized artificial social stimulus for isolating how motion, touch, temperature, odor, and responsiveness contribute to social-need regulation. The same platform provides calibrated contact inputs for modeling how social need accumulates, decays, and is relieved.',
    descriptionZh:
      '将运动、触摸、温度、气味与互动响应性拆解为可控变量；同时以可标定的接触输入，研究社交需求如何积累、衰减与缓解。',
    contribution: 'I conceived the research program, designed the cue-decomposition and reunion-probe paradigms, initiated the cross-institutional collaboration, built the behavioral arena, and personally conducted the behavioral experiments. I built the high-throughput, sound-attenuated platform supporting simultaneous multi-camera video and ultrasonic recording. I was responsible for the robotic mouse’s perception and planning layers, developing the host-side control software, serial communication interface, real-time semantic segmentation, skeletal tracking, behavior classification, and ROI-constrained visual redirection. I co-developed the PPO-based locomotion strategy with our collaborators, who implemented the embedded lower-level controller. I also translated experimental requirements into iterative refinements of the robot’s morphology, skin material, movement, and operating noise.',
    contributionZh: '我提出了机器鼠研究计划，设计社会线索拆解与重聚检验范式，发起跨机构合作，搭建行为学场地，并亲自完成行为实验。我搭建了支持多相机同时拍摄与超声记录的高通量静音行为平台。我负责机器鼠的感知层和规划层，开发上位机控制软件、串口通信接口、实时语义分割、骨架追踪、行为分类以及 ROI 约束下的视觉重定向。我与合作方共同开发基于 PPO 的类小鼠运动策略，由合作方实现下位机及底层控制。同时，我将实验需求转化为设计约束，推动机器鼠在形态、表面皮肤材料、运动表现和运行噪声方面进行多轮改进。',
    tags: ['Embodied AI', 'Programmable touch', 'Social homeostasis'],
    tagsZh: ['具身智能', '可编程触摸', '社交稳态'],
    image: '/assets/robotic-mouse-prototype.png',
    imageAlt: 'Physical prototype of the biomimetic robotic mouse on a laboratory bench',
    imageCaption: 'Current physical prototype · programmable biomimetic robotic mouse · open full image',
    imageCaptionZh: '当前机器鼠原型 · 可编程仿生社会刺激 · 点击查看原图',
    imageLayout: 'side',
    imageFit: 'cover',
    secondaryImage: '/assets/robotic-mouse-system.png',
    secondaryImageAlt: 'Robotic mouse motor layout and programmable movement states',
    secondaryImageCaption: 'Programmable morphology and movement states · controlled social-cue platform · open full figure',
    secondaryImageCaptionZh: '可编程形态与运动状态 · 可控社会线索平台',
    modules: [
      {
        id: 'embodiment',
        label: 'Cue decomposition',
        labelZh: '社会线索拆解',
        status: 'building',
        statusLabel: 'BUILDING',
        statusLabelZh: '开发中',
        summary: 'Motion, touch, temperature, odor, morphology, and interaction contingency.',
        summaryZh: '逐步拆解运动、触摸、温度、气味、形态与互动响应性。',
      },
      {
        id: 'controlled-touch',
        label: 'Controlled touch and accumulation',
        labelZh: '可控触摸与需求积累',
        status: 'building',
        statusLabel: 'TOOL + MODEL',
        statusLabelZh: '工具与模型',
        summary: 'Contact count, timing, duration, and tactile properties become calibrated inputs for comparing accumulation models.',
        summaryZh: '将接触次数、时机、持续时间与触觉属性作为可标定输入，比较不同的需求积累模型。',
      },
      {
        id: 'social-need-test',
        label: 'Reunion probe',
        labelZh: '重聚检验',
        status: 'planned',
        statusLabel: 'NEXT',
        statusLabelZh: '下一阶段',
        summary: 'Artificial-partner exposure followed by a standardized real-mouse probe.',
        summaryZh: '机器鼠暴露后，以标准化真鼠测试剩余社交需求。',
      },
    ],
  },
  {
    id: 'mori',
    order: 3,
    tier: 'core',
    status: 'prototype',
    statusLabel: 'SUBMITTED TO CHI',
    statusLabelZh: '已投稿 CHI',
    title: 'MORI — relational power in long-term human–AI companionship',
    titleZh: 'MORI：长期人机陪伴关系中的权力边界',
    description:
      'A 105-participant study of how people revise distinct AI powers as an artificial companion enters a long-term relationship and supports loneliness-related needs.',
    descriptionZh:
      '通过 105 人实验研究：当人工伙伴进入长期关系并回应孤独相关需求时，人们如何调整不同类型的 AI 权力。',
    contribution: 'I independently conceived and led this study, designing its fixed 20-year relationship narrative, six power dimensions, four governance arrangements, and three-stage judgment protocol for 105 participants. The manuscript has been submitted to CHI with me as first author, and I am continuing to advance the project’s next phase in collaboration with rednote.',
    contributionZh: '我独立提出并完整主导了这项研究，为 105 名参与者设计固定的 20 年关系叙事、六类权力维度、四种治理安排与三阶段判断流程。论文已投稿 CHI，由我担任第一作者；目前，我正与小红书合作推进项目的下一阶段。',
    tags: ['Human–AI interaction', 'Long-term memory', 'Relational authority'],
    tagsZh: ['人机交互', '长期记忆', '关系权力'],
    image: '/assets/mori-study-design.png',
    imageAlt: 'MORI study design with baseline and post judgments across a fixed 20-year family narrative',
    imageCaption: 'MORI study design · six powers across a fixed 20-year relationship narrative · open full figure',
    imageCaptionZh: 'MORI 实验流程 · 固定 20 年关系叙事中的六类权力判断 · 点击查看原图',
    imageLayout: 'wide',
    imageFit: 'contain',
    modules: [
      {
        id: 'human-study',
        label: 'Human study',
        labelZh: '人类参与者实验',
        status: 'live',
        statusLabel: 'N=105',
        statusLabelZh: 'N=105',
        summary: 'A fixed 20-year relationship narrative measures six powers under four governance arrangements across three judgment stages.',
        summaryZh: '在固定的 20 年关系叙事中，跨三次判断测量四种治理安排下的六类权力。',
      },
      {
        id: 'power-specific-change',
        label: 'Power-specific change',
        labelZh: '权力特异性变化',
        status: 'live',
        statusLabel: 'PRELIMINARY',
        statusLabelZh: '初步结果',
        summary: 'Relationship context produces different—and sometimes opposing—revisions across powers; memory-sharing authority shows one of the largest attitude shifts.',
        summaryZh: '关系情境会使不同权力出现差异化、甚至方向相反的调整；其中信息分享权是态度变化最大的维度之一。',
      },
      {
        id: 'tas-gate',
        label: 'TAS-Gate — computational extension',
        labelZh: 'TAS-Gate：面向更高情商 AI 的计算延伸',
        status: 'building',
        statusLabel: 'BUILDING',
        statusLabelZh: '开发中',
        summary: 'Because authority is power-specific, rule memory and experience memory remain asymmetric: success, praise, or trust can improve behavior without silently expanding permission.',
        summaryZh: '基于 MORI 对权力差异的发现，将规则记忆与经验记忆非对称分离，使 AI 能从成功、表扬和信任中学习，却不会将其误认为扩大权限的授权。',
      },
    ],
    links: [{ label: 'Open live prototype', labelZh: '打开在线原型', href: 'https://mori-family-companion.pages.dev/', type: 'demo' }],
  },
];

export const researchTracks: ResearchTrack[] = [
  {
    code: 'BCI',
    codeZh: '脑机接口',
    lab: 'TIML Lab · Prof. Ren Wang',
    labZh: 'TIML 实验室 · 王韧教授',
    title: 'Reliable cross-subject EEG-fNIRS learning',
    titleZh: '跨被试 EEG-fNIRS 学习与可靠融合',
    description:
      'Participant-disjoint evaluation, few-shot adaptation, probability calibration, and heterogeneous expert fusion for robust multimodal decoding.',
    descriptionZh: '围绕跨被试多模态解码，开展被试隔离评估、少样本适应、概率校准与异构专家融合。',
  },
  {
    code: 'WESTLAKE · CROSS-LAB AI',
    codeZh: '西湖大学 · 跨实验室 AI 合作',
    lab: 'Through Systems Social Neuroscience Lab · Prof. Tailin Wu · Mentor: Tengfei Xu',
    labZh: '经系统与社会神经科学实验室合作 · 吴泰霖教授 · 徐腾飞指导',
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
    figureCaptionZh: '相位梯度分析 · 点击查看原图',
    figureSize: 'compact',
  },
  {
    code: 'BEHAVIORAL VISION',
    codeZh: '行为视觉',
    lab: 'Westlake collaboration · Prof. Xiaodong Liu',
    labZh: '西湖大学合作 · 刘晓东教授',
    title: 'Constrained 2.5D macaque behavior analysis',
    titleZh: '猕猴行为的受约束 2.5D 分析',
    description:
      'Mask tracking, cage calibration, plane-specific trajectory proxies, contact-state handling, and descriptive spatial analysis.',
    descriptionZh: '结合掩膜追踪、笼体标定、分平面轨迹代理与接触状态处理，进行稳健的描述性空间分析。',
  },
  {
    code: 'RESEARCH TOOLS',
    codeZh: '实验工具',
    lab: 'Systems Social Neuroscience Lab · Prof. Ding Liu',
    labZh: '系统与社会神经科学实验室 · 刘鼎教授',
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
    dateZh: '2025 年 8 月至今',
    institution: 'Westlake University',
    institutionZh: '西湖大学',
    role: 'Full-time Research Assistant · Systems Social Neuroscience Lab · Prof. Ding Liu',
    roleZh: '全职研究助理 · 系统与社会神经科学实验室 · 刘鼎教授',
    detail: 'A unified program on how embodied and virtual non-biological partners may satisfy social need: neural representation, programmable social cues, long-term AI companionship, and relational authority.',
    detailZh: '围绕“非生物伙伴如何满足社交需求”开展统一研究：涵盖神经表征、可编程社会线索、长期 AI 陪伴与关系权力边界。',
    logo: '/assets/ding-liu-lab-logo.png',
    logoAlt: 'Ding Liu Lab logo',
  },
  {
    date: 'NOV 2025 - PRESENT',
    dateZh: '2025 年 11 月至今',
    institution: 'Illinois Institute of Technology',
    institutionZh: '伊利诺伊理工学院',
    role: 'Remote Research Collaborator · Prof. Ren Wang',
    roleZh: '远程研究合作者 · 王韧教授',
    detail: 'Trustworthy cross-subject EEG-fNIRS learning, calibration, meta-adaptation, and multimodal fusion.',
    detailZh: '研究可信的跨被试 EEG-fNIRS 学习、概率校准、元适应与多模态融合。',
    logo: '/assets/illinois-tech-logo.svg',
    logoAlt: 'Illinois Tech logo',
    href: 'https://www.iit.edu/',
  },
  {
    date: 'SEP 2021 - JUN 2025',
    dateZh: '2021 年 9 月—2025 年 6 月',
    institution: "Xi'an Jiaotong University",
    institutionZh: '西安交通大学',
    role: 'B.Eng. in Biomedical Engineering',
    roleZh: '生物医学工程工学学士',
    detail:
      'First year: Chemical Biology in Qian Xuesen Honors College. Subsequently completed a B.Eng. in Biomedical Engineering with training across instrumentation, neural engineering, machine learning, and wet-lab research.',
    detailZh: '大一就读于钱学森荣誉学院化学生物学方向，之后完成生物医学工程工学学士。',
    logo: '/assets/xjtu-logo.png',
    logoAlt: "Xi'an Jiaotong University logo",
  },
  {
    date: 'JUN 2024 - JUL 2024',
    dateZh: '2024 年 6—7 月',
    institution: 'Zhen Tec Technology Inc.',
    institutionZh: '臻泰智能',
    role: 'EEG Data Analyst',
    roleZh: '脑电数据分析实习生',
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
    dateZh: '2023 年 5—6 月',
    institution: "The First Affiliated Hospital of Xi'an Jiaotong University",
    institutionZh: '西安交通大学第一附属医院',
    role: 'Clinical Laboratory Intern',
    roleZh: '临床检验实习生',
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
    dateZh: '2024 年 1 月—2025 年',
    institution: 'Medical and Engineering Innovators',
    institutionZh: '医工学人',
    role: 'Council Member · External Relations',
    roleZh: '理事会成员 · 对外联络',
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
    labelZh: '学术经历',
    items: [
      {
        institution: "Xi'an Jiaotong University",
        institutionZh: '西安交通大学',
        role: 'Chemical Biology',
        roleZh: '化学生物学',
        note: 'Qian Xuesen Honors College',
        noteZh: '钱学森荣誉学院',
        date: '2021 — 2022',
        dateZh: '2021—2022',
        logo: '/assets/xjtu-logo.png',
        logoAlt: "Xi'an Jiaotong University",
        logoVariant: 'crest-left',
        href: 'https://en.xjtu.edu.cn/',
      },
      {
        institution: "Xi'an Jiaotong University",
        institutionZh: '西安交通大学',
        role: 'B.Eng. Biomedical Engineering',
        roleZh: '生物医学工程工学学士',
        note: 'Medical Electronics & Information',
        noteZh: '医学电子信息方向',
        date: '2022 — 2025',
        dateZh: '2022—2025',
        logo: '/assets/xjtu-logo.png',
        logoAlt: "Xi'an Jiaotong University",
        logoVariant: 'crest-left',
        href: 'https://en.xjtu.edu.cn/',
      },
      {
        institution: 'Westlake University',
        institutionZh: '西湖大学',
        role: 'Research Assistant · Social Neuroscience',
        roleZh: '研究助理 · 社会神经科学',
        date: '2025 — Present',
        dateZh: '2025—至今',
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
    state: 'MANUSCRIPT UNDER REVIEW',
    stateZh: '在审稿件',
    title: 'MORI: Relational Power in Long-Term Human–AI Companionship',
    titleZh: 'MORI：长期人机陪伴关系中的权力边界',
    authors: 'Yibo Yuan, Sichao Wang, Ding Liu. Manuscript submitted to ACM CHI, 2026.',
    authorsZh: '袁艺博、Sichao Wang、刘鼎。已投稿 ACM CHI，2026。',
    selfAuthor: 'Yibo Yuan',
    selfAuthorZh: '袁艺博',
  },
  {
    year: '2026',
    state: 'PUBLISHED · JOURNAL OF VISUALIZED EXPERIMENTS',
    stateZh: '已发表 · Journal of Visualized Experiments',
    title: 'In Vivo Calcium Imaging with a Miniaturized Microscope in the Hypothalamus for Understanding Social Behaviors in Mice',
    titleZh: '利用微型显微镜开展下丘脑在体钙成像以研究小鼠社会行为',
    authors: 'Dai, Y. Y., Wei, C., Yuan, Y., Rahman, M. M., & Liu, D. (2026). Journal of Visualized Experiments, (229), e70401.',
    authorsZh: 'Dai, Y. Y., Wei, C., Yuan, Y., Rahman, M. M., & Liu, D.（2026）。Journal of Visualized Experiments，（229），e70401。',
    selfAuthor: 'Yuan, Y.',
    selfAuthorZh: 'Yuan, Y.',
    href: 'https://doi.org/10.3791/70401',
    linkLabel: 'DOI 10.3791/70401',
    linkLabelZh: 'DOI 10.3791/70401',
  },
];

export const openTools: OpenTool[] = [
  {
    code: 'BEHAVIOR',
    codeZh: '行为分析',
    title: 'Mouse trajectory tracking',
    titleZh: '小鼠轨迹追踪',
    description: 'Long-duration multi-animal tracking, custom ROIs, temporal alignment, and experimental contact detection.',
    descriptionZh: '支持长时程多动物追踪、自定义场地、时间对齐与实验接触检测。',
    href: 'https://github.com/BoBo1529707515/Mouse-trajectory-tracking',
  },
  {
    code: 'HARDWARE',
    codeZh: '实验硬件',
    title: 'Open lickometer',
    titleZh: '开源舔舐计',
    description: 'Eight-channel STM32 firmware and a Python interface for real-time capacitive lick detection and CSV acquisition.',
    descriptionZh: '八通道 STM32 固件与 Python 界面，用于实时电容舔舐检测和 CSV 采集。',
    href: 'https://github.com/BoBo1529707515/lickometer',
  },
  {
    code: 'MICROSCOPY',
    codeZh: '显微成像',
    title: 'NeuronTracker',
    titleZh: '神经突起追踪工具',
    description: 'GUI-assisted axon-growth tracing with biologically motivated path constraints and calibrated exports.',
    descriptionZh: '结合生物学路径约束与标定导出的 GUI 辅助轴突生长追踪工具。',
    href: 'https://github.com/BoBo1529707515/Neural-tract-tracing',
  },
];
