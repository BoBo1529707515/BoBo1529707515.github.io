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
    rawFigure?: {
      label: string;
      labelZh: string;
      image: string;
      imageAlt: string;
      caption: string;
      captionZh: string;
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
  href?: string;
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
    order: 2,
    tier: 'core',
    status: 'completed',
    statusLabel: 'NOV 2025 — MAR 2026',
    statusLabelZh: '2025 年 11 月—2026 年 3 月',
    title: 'Neural representation and computational modeling of social need',
    titleZh: '社交需求的神经表征与计算建模',
    description:
      'How does the MPN population state change as social need builds during isolation and is relieved at reunion?',
    descriptionZh:
      '随着社交需求在隔离中积累、又在重聚时得到缓解，MPN 神经群体状态如何变化？',
    contribution:
      'I worked with data from the lab’s published Nature study. To compare recordings across days without matching every neuron, I developed a measure that uses each session’s own baseline. I checked it with decoding and control analyses. When low-resolution video and identity switches made contact hard to measure with DeepLabCut, I built a segmentation-based tracking workflow.',
    contributionZh:
      '我分析的是实验室已发表 Nature 论文中的数据。不同天记录到的神经元难以一一对应，我就尝试以每次记录自身的基线为参照，比较群体状态，并用解码和对照分析来检验。行为视频也有难点：画质低、两只小鼠容易被认错。为此，我做了一套基于语义分割的追踪流程，逐帧测量接触。',
    tags: ['Miniscope imaging', 'Population geometry', 'Social homeostasis'],
    tagsZh: ['微型显微镜成像', '神经群体几何', '社交稳态'],
    image: '/assets/social-need-neural-state.png',
    imageAlt: 'Preliminary neural state displacement from baseline across isolation durations and reunion',
    imageCaption: 'How MPN population activity changes when mice reunite after different periods of isolation',
    imageCaptionZh: '隔离不同时长后再重聚，MPN 神经群体活动如何变化',
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
          'I started with a practical question: how could I compare recordings from different days without matching every neuron? My approach was to measure each session against its own baseline, then compare how far the population state moved.',
        bridgeZh:
          '我的问题更具体：不同天记录到的神经元无法一一对应，还能比较群体活动吗？我尝试让每次记录都以自己的基线为参照，再比较群体状态偏离基线的程度。',
        citation: 'Liu et al. · Nature 640 · 2025 · Fig. 2c',
        href: 'https://doi.org/10.1038/s41586-025-08617-8',
      },
      rawFigure: {
        label: 'RAW CALCIUM RECORDING',
        labelZh: '原始钙成像记录',
        image: '/assets/miniscope-raw-calcium-field.png',
        imageAlt: 'Representative raw miniscope calcium-imaging field from an MPN recording',
        caption:
          'A raw frame from an MPN miniscope recording. I work with the fluorescence traces extracted from these images to study how neurons change together.',
        captionZh:
          'MPN 微型显微镜记录中的一帧原始图像。我的分析使用从这些图像中提取的荧光曲线，观察神经元的活动如何一起变化。',
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
    order: 1,
    tier: 'core',
    status: 'pilot',
    statusLabel: 'IN DEVELOPMENT',
    statusLabelZh: '开发中',
    title: 'Building a robotic social partner for mice',
    titleZh: '给小鼠做一个机器伙伴',
    description:
      'Can a mouse’s social need be relieved by something that moves, touches, and responds like another mouse—but is not one?',
    descriptionZh:
      '一个会移动、触摸并回应的小鼠形态伙伴，能否缓解真实小鼠的社交需求？',
    contribution: 'I proposed this project and brought the collaborators together. I design the experiments, build the arena and recording setup, and work on the robot’s perception, planning, and host-side control. We are testing the prototype and working toward changing movement, touch, warmth, smell, and responsiveness one at a time.',
    contributionZh: '这个课题是我提出的，合作也是我联系起来的。我负责实验设计、场地与记录装置的搭建，以及机器鼠的感知、规划和上位机控制。我们正在测试原型，希望能分别改变它的动作、触碰、温度、气味和回应方式。',
    tags: ['Embodied AI', 'Programmable touch', 'Social homeostasis'],
    tagsZh: ['具身智能', '可编程触摸', '社交稳态'],
    image: '/assets/robotic-mouse-prototype.png',
    imageAlt: 'Physical prototype of the biomimetic robotic mouse on a laboratory bench',
    imageCaption: 'Current robotic mouse prototype',
    imageCaptionZh: '当前机器鼠实物原型',
    imageLayout: 'side',
    imageFit: 'cover',
    secondaryImage: '/assets/robotic-mouse-system.png',
    secondaryImageAlt: 'Robotic mouse motor layout and programmable movement states',
    secondaryImageCaption: 'Programmable morphology and movement states · controlled social-cue platform · open full figure',
    secondaryImageCaptionZh: '可编程形态与运动状态 · 可控社会线索平台',
    evidence: {
      label: 'Current stage · since March 2026', labelZh: '当前阶段 · 始于 2026 年 3 月',
      observation: 'The prototype is built, and pilot interactions are underway. Next comes testing whether contact with the robot changes social need; neural feedback is a longer-term goal.',
      observationZh: '原型已经搭起来，也开始了探索性互动。接下来要检验的是：与机器鼠接触，是否真的改变了社交需求。用神经信号反馈控制机器鼠，是更后面的目标。',
      lastVerified: '2026-09',
    },
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
    statusLabel: 'UNDER REVIEW · ACM CHI 2027',
    statusLabelZh: 'ACM CHI 2027 · 在审',
    title: 'MORI — relational power in long-term human–AI companionship',
    titleZh: 'MORI：长期人机陪伴关系中的权力边界',
    description:
      'If an AI has been part of your family for years, should it remember everything? Share a memory with someone else? Step into an argument? In MORI, I ask where people draw these lines, and what makes them change their minds.',
    descriptionZh:
      '如果一个 AI 已经在你家里生活了很多年，它该记住所有事情吗？能把你的回忆告诉别人吗？该不该介入一次家庭争吵？在 MORI 中，我想知道人们会把界线画在哪里，又为什么改变主意。',
    contribution: 'I designed and led a study with 105 participants, using a fictional family story spanning 20 years. Participants judged six AI powers under four governance arrangements. The first-author manuscript is under review at ACM CHI 2027, and I am working with rednote on the next phase.',
    contributionZh: '我提出、设计并主导了这项 105 人研究，让参与者跟随一个跨越 20 年的虚构家庭故事，在四种治理安排下判断六类 AI 权力。一作稿件正在 ACM CHI 2027 审稿，我也正与小红书合作推进下一阶段。',
    tags: ['Human–AI interaction', 'Long-term memory', 'Relational authority'],
    tagsZh: ['人机交互', '长期记忆', '关系权力'],
    image: '/assets/mori-relational-power-overview.png',
    imageAlt: 'Six domains of MORI relational power alongside a family network with MORI as a relational hub',
    imageCaption: 'MORI research framework · six relational powers and AI as a family relational hub',
    imageCaptionZh: 'MORI 研究框架 · 六类关系权力与作为家庭关系枢纽的 AI',
    imageLayout: 'wide',
    imageFit: 'contain',
    evidence: {
      label: 'Finding',
      labelZh: '发现',
      observation: 'People did not give AI more freedom across the board. A change in the relationship could make them more open to one power and less open to another. Sharing memories was among the powers where attitudes shifted most.',
      observationZh: '人们并不是一概给 AI 更多或更少的自由。关系变了，他们可能更愿意交出某一种权力，却收回另一种。对于能不能分享记忆，态度变化尤其明显。',
      lastVerified: '2026-09',
    },
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
    ],
    links: [{ label: 'Open study prototype', labelZh: '打开实验测试', href: 'https://mori-family-memory.pages.dev/', type: 'demo' }],
  },
  {
    id: 'reground',
    order: 4,
    tier: 'core',
    status: 'active',
    statusLabel: 'FIRST AUTHOR · ICLR 2027 UNDER REVIEW',
    statusLabelZh: '第一作者 · ICLR 2027 在审',
    title: 'ReGround — reusing experience under changing authority',
    titleZh: 'ReGround：权限变化后的经验重用',
    description: 'An AI may learn a useful way to help, then lose permission to use it. What should it keep, and what should it change? In ReGround, we study how agents can reuse experience without assuming that past success gives them permission to act.',
    descriptionZh: 'AI 学会了一种有用的做法，后来却不再被允许这样做。哪些经验该保留，哪些做法要改变？在 ReGround 中，我们研究如何让 AI 继续利用经验，却不把过去的成功当成行动授权。',
    tags: ['Human–AI collaboration', 'Agent memory', 'Authority-aware planning'],
    tagsZh: ['人机协作', '智能体记忆', '权限约束规划'],
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
      'With Prof. Ren Wang, I study how EEG–fNIRS models can work for a new participant with little calibration data. I work on few-shot adaptation, combining models, and testing on participants kept separate from training. We also collaborate on ReGround, listed above.',
    descriptionZh: '我与王韧教授合作，研究 EEG–fNIRS 模型如何用少量校准数据适应新被试。我做少样本适应、模型融合，并在与训练集分开的被试上评估效果。我们也合作开展了上面的 ReGround 项目。',
  },
  {
    code: 'WESTLAKE · CROSS-LAB AI',
    codeZh: '西湖大学 · 跨实验室 AI 合作',
    lab: 'Through Systems Social Neuroscience Lab · Prof. Tailin Wu · Mentor: Tengfei Xu',
    labZh: '经系统与社会神经科学实验室合作 · 吴泰霖教授 · 徐腾飞指导',
    title: 'AI-based generative modeling and validation of cortical turbulence',
    titleZh: '基于 AI 的大脑皮层湍流生成建模与验证',
    description:
      'With Prof. Tailin Wu and Tengfei Xu, I ask whether generative models reproduce the phase singularities and turbulence-like dynamics seen in cortical activity. I compare these patterns using BrainVortexToolbox, developed by Prof. Pulin Gong’s group at the University of Sydney.',
    descriptionZh: '在吴泰霖教授和徐腾飞博士指导下，我研究生成模型能否重现皮层活动中的相位奇点与类湍流变化。我使用悉尼大学 Pulin Gong 教授团队的 BrainVortexToolbox，对这些模式进行比较。',
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
      'I work on tracking macaques from video and calibrating the cage geometry to describe where they move. The analysis uses plane-specific trajectory estimates rather than full 3D reconstruction.',
      descriptionZh: '我做视频中的猕猴追踪，并结合笼体几何标定分析它们在哪里活动。目前按不同平面估计轨迹，不是完整的三维重建。',
  },
  {
    code: 'RESEARCH TOOLS',
    codeZh: '实验工具',
    lab: 'Systems Social Neuroscience Lab · Prof. Ding Liu',
    labZh: '系统与社会神经科学实验室 · 刘鼎教授',
    title: 'Tools I build for the lab',
    titleZh: '我给实验室做的工具',
    description: 'I build tools for our experiments: an eight-channel STM32 lickometer, a programmable motion platform, and software for long video recordings and frame-by-frame behavior analysis.',
    descriptionZh: '我也给实验室做工具：八通道 STM32 舔舐计、可编程运动平台，以及处理长视频、逐帧分析行为的软件。',
    logo: '/assets/ding-liu-lab-logo.png',
    logoAlt: 'Ding Liu Lab logo',
  },
];

export const appointments: Appointment[] = [
  {
    date: 'JUN 2024 - JUL 2024',
    dateZh: '2024 年 6—7 月',
    institution: 'Zhen Tec Technology Inc.',
    institutionZh: '臻泰智能',
    role: 'EEG Data Analyst',
    roleZh: '脑电数据分析实习生',
    detail:
      'Supported EEG data acquisition, designed IIR/FIR filters, analyzed time- and frequency-domain features with MNE, and contributed to PCA/ICA and CNN-LSTM fatigue-model development.',
    detailZh: '参与 EEG 数据采集，设计 IIR/FIR 滤波器，使用 MNE 分析脑电时域与频域特征，并参与 PCA、ICA 与 CNN-LSTM 疲劳模型开发。',
    logo: '/assets/zhentec-logo.png',
    logoAlt: 'Zhen Tec logo',
    href: 'https://zhentecbci.com/',
    logoScale: 'large',
  },
  {
    date: 'JAN 2024 - PRESENT',
    dateZh: '2024 年 1 月—至今',
    institution: 'Medical and Engineering Innovators',
    institutionZh: '医工学人',
    role: 'Council Member · External Relations',
    roleZh: '理事会成员 · 对外联络',
    detail:
      'I bring biomedical and electrical engineering alumni together, helped organize a Technology and Finance forum, and proposed a hospital–university collaboration. Our community now has nearly 3,000 members.',
    detailZh: '我负责联系生物医学工程和电气工程领域的校友，协助举办科技金融论坛，也提出过医院与高校的合作项目。这个社群现在有近 3,000 位成员。',
    logo: '/assets/medical-engineering-innovators-logo.png',
    logoAlt: 'Medical and Engineering Innovators logo',
    href: 'https://yigongxueren.com/',
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
    date: 'JAN 2022 - OCT 2022',
    dateZh: '2022 年 1—10 月',
    institution: "Institute of Mitochondrial Biomedicine, Xi'an Jiaotong University",
    institutionZh: '西安交通大学线粒体生物医学研究所',
    role: 'Lab Member · XJTU iGEM',
    roleZh: '实验室成员 · 西安交通大学 iGEM 团队',
    detail:
      'Under the supervision of Prof. Dan Tan, I contributed to engineering synthetic E. coli strains for soil improvement through plasmid design and optimization in SnapGene, PCR/RT-PCR, nucleic-acid purification, Western blotting, electrophoresis, and literature analysis. The team received a 2022 iGEM Gold Medal.',
    detailZh: '在谭丹教授指导下，我参与用于土壤改良的工程化大肠杆菌菌株开发，开展质粒设计与 SnapGene 优化、PCR/RT-PCR、核酸纯化、Western blot、电泳及文献分析；团队获得 2022 年 iGEM 金奖。',
    logo: '/assets/xjtu-logo.png',
    logoAlt: "Xi'an Jiaotong University logo",
    href: 'https://en.xjtu.edu.cn/',
  },
];

export const sidebarTimeline: SidebarTimelineGroup[] = [
  {
    label: 'Academic Path',
    labelZh: '个人经历',
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
        role: 'Research Assistant',
        roleZh: '研究助理',
        note: 'Systems Social Neuroscience Lab',
        noteZh: '系统与社会神经科学实验室',
        date: '2025 — Present',
        dateZh: '2025—至今',
        logo: '/assets/westlake-mark.png',
        logoAlt: 'Westlake University',
        href: 'https://en.westlake.edu.cn/faculty/ding-liu.html',
      },
    ],
  },
];

export const publications: Publication[] = [
  {
    year: '2026',
    state: 'MANUSCRIPT UNDER REVIEW · ICLR 2027',
    stateZh: '在审稿件 · ICLR 2027',
    title: 'Re-Grounding Relational Experience under Changing Authority',
    titleZh: '权限变化下关系经验的重新落地',
    authors: 'Yibo Yuan, Sichaon Wang, Yang Su, Ren Wang. First-author manuscript.',
    authorsZh: '袁艺博（Yibo Yuan）、Sichaon Wang、Yang Su、Ren Wang。第一作者稿件。',
    selfAuthor: 'Yibo Yuan',
    selfAuthorZh: '袁艺博（Yibo Yuan）',
  },
  {
    year: '2026',
    state: 'MANUSCRIPT UNDER REVIEW · ACM CHI 2027',
    stateZh: '在审稿件 · ACM CHI 2027',
    title: 'MORI: Relational Power in Long-Term Human–AI Companionship',
    titleZh: 'MORI：长期人机陪伴关系中的权力边界',
    authors: 'Yibo Yuan, Sichao Wang, Ding Liu. First-author manuscript under review at ACM CHI 2027 (CCF-A).',
    authorsZh: '袁艺博、Sichao Wang、刘鼎。第一作者稿件正在 ACM CHI 2027 审稿（CCF-A）。',
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
    description: 'Track mice in long videos, define the arena, align recordings, and measure contact frame by frame using segmentation.',
    descriptionZh: '追踪长视频中的小鼠，自定义场地、对齐记录，并用分割结果逐帧测量接触。',
    href: 'https://github.com/BoBo1529707515/Mouse-trajectory-tracking',
  },
  {
    code: 'HARDWARE',
    codeZh: '实验硬件',
    title: 'Open lickometer',
    titleZh: '开源舔舐计',
    description: 'An eight-channel STM32 lick detector with a Python interface to view events in real time and save them as CSV files.',
    descriptionZh: '八通道 STM32 舔舐检测装置，配有 Python 界面，可实时查看事件并保存为 CSV 文件。',
    href: 'https://github.com/BoBo1529707515/lickometer',
  },
  {
    code: 'MICROSCOPY',
    codeZh: '显微成像',
    title: 'NeuronTracker',
    titleZh: '神经突起追踪工具',
    description: 'A graphical tool for tracing axon growth, with path constraints and calibrated measurements that can be exported.',
    descriptionZh: '用图形界面追踪轴突生长，加入路径约束，并导出经过标定的测量结果。',
    href: 'https://github.com/BoBo1529707515/Neural-tract-tracing',
  },
];
