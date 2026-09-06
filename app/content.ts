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
    order: 1,
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
      'Using data from the lab’s published Nature study, I independently developed a registration-free way to compare population states across days by measuring each session relative to its own baseline. I combined this measure with cross-validated decoding, motion controls, circular shifts, and permutation tests, and built a semantic-segmentation workflow for reliable frame-level contact measurement when low-resolution video and identity switching limited DeepLabCut.',
    contributionZh:
      '我基于实验室已发表 Nature 论文所使用的数据，独立提出并实现了一种无需跨日逐细胞配准的比较方法：让每个 session 都相对于自身基线进行量化。我进一步结合交叉验证解码、运动控制、循环时移与置换检验，并针对低画质与身份互换限制 DeepLabCut 的问题，开发了用于逐帧接触量化的语义分割流程。',
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
      rawFigure: {
        label: 'RAW CALCIUM RECORDING',
        labelZh: '原始钙成像记录',
        image: '/assets/miniscope-raw-calcium-field.png',
        imageAlt: 'Representative raw miniscope calcium-imaging field from an MPN recording',
        caption:
          'A representative raw miniscope calcium-imaging frame from the MPN recording. It is the image-level starting point from which neuronal fluorescence time series are extracted and assembled into the population-activity matrix used in the analyses below.',
        captionZh:
          'MPN 微型显微镜记录中的一帧代表性原始钙成像视野。后续分析从这一图像层面的原始记录中提取各神经元的荧光时间序列，并组成下方分析所使用的神经群体活动矩阵。',
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
    statusLabel: 'IN DEVELOPMENT',
    statusLabelZh: '开发中',
    title: 'A social robotic mouse for decomposing social cues',
    titleZh: '用于拆解社交线索的社交机器鼠',
    description:
      'Can a mouse’s social need be relieved by something that moves, touches, and responds like another mouse—but is not one?',
    descriptionZh:
      '一个会移动、触摸并回应的小鼠形态伙伴，能否缓解真实小鼠的社交需求？',
    contribution: 'I conceived the project and initiated its cross-institutional collaboration. I designed the behavioral arena, cue-decomposition and reunion-probe paradigms, and ran the experiments; I also built the sound-attenuated multi-camera and ultrasonic recording platform, together with the robot’s perception, planning, and host-side control system. The platform lets us vary movement, touch, temperature, odor, and responsiveness independently, and use controlled contact to study how social need accumulates and decays.',
    contributionZh: '我提出这一项目并发起跨机构合作，设计行为学场地、社会线索拆解与重聚检验范式，并亲自完成实验；同时搭建静音、多相机与超声同步记录平台，以及机器鼠的感知、规划和上位机控制系统。这个平台使我们能够分别控制运动、触摸、温度、气味与响应性，并用可控接触研究社交需求如何积累和衰减。',
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
      'An AI companion might one day take on a role resembling a family elder, remembering shared history and becoming involved in people’s relationships. What may it keep, and with whom may it share those memories? Could conversations become a digital inheritance? I designed MORI to study where people draw these boundaries and to inform companion agents with clearly defined permissions. Like my robotic-mouse research, it asks what an artificial social partner can provide, here focusing on the authority people are willing to grant it.',
    descriptionZh:
      '未来，长期陪伴的 AI 可能承担类似家庭长辈的角色，记得共同经历，也越来越深入地参与人们的社交。它可以保存哪些记忆、向谁分享？沟通记录是否会成为一种数字遗产？我设计 MORI 实验，研究用户如何划定这些边界，并据此发展权限清晰的陪伴智能体。它与机器鼠研究关心的是同一个问题：人工伙伴能提供怎样的社交陪伴；MORI 进一步追问，人们愿意赋予它哪些权力。',
    contribution: 'I conceived and led this 105-participant study, creating a fixed 20-year relationship narrative in which people repeatedly judged six distinct AI powers under four governance arrangements. I am first author on the manuscript, currently under review at ACM CHI, and I am continuing the project’s next phase in collaboration with rednote.',
    contributionZh: '我独立提出并主导了这项 105 人研究：设计固定的 20 年关系叙事，让参与者在四种治理安排下反复判断六类不同的 AI 权力。论文已投稿 CHI，由我担任第一作者；目前，我正与小红书合作推进项目的下一阶段。',
    tags: ['Human–AI interaction', 'Long-term memory', 'Relational authority'],
    tagsZh: ['人机交互', '长期记忆', '关系权力'],
    image: '/assets/mori-study-design.png',
    imageAlt: 'MORI study design with baseline and post judgments across a fixed 20-year family narrative',
    imageCaption: 'MORI study design · six powers across a fixed 20-year relationship narrative · open full figure',
    imageCaptionZh: 'MORI 实验流程 · 固定 20 年关系叙事中的六类权力判断 · 点击查看原图',
    imageLayout: 'wide',
    imageFit: 'contain',
    evidence: {
      label: 'Finding',
      labelZh: '发现',
      observation: 'Participants did not simply give AI more or less autonomy. Relationship context shifted different powers in different—and sometimes opposing—directions; memory-sharing authority showed one of the largest changes in attitude.',
      observationZh: '参与者并不会整体性地扩大或限制 AI 权力。关系情境使不同权力出现差异化、甚至方向相反的调整，其中信息分享权是态度变化最大的维度之一。',
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
      {
        id: 'tas-gate',
        label: 'TAS-Gate — computational extension',
        labelZh: 'TAS-Gate：面向更高情商 AI 的计算延伸',
        status: 'building',
        statusLabel: 'BUILDING',
        statusLabelZh: '开发中',
        summary: 'Building on MORI, I separate long-term memory into two asymmetric components: experience memory uses success, praise, and trust to improve behavior, while rule memory changes only through valid authorization.',
        summaryZh: '基于 MORI 对权力差异的发现，将规则记忆与经验记忆非对称分离，使 AI 能从成功、表扬和信任中学习，却不会将其误认为扩大权限的授权。',
      },
    ],
    links: [{ label: 'Open study prototype', labelZh: '打开实验测试', href: 'https://mori-family-memory.pages.dev/', type: 'demo' }],
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
      'With Prof. Ren Wang, I develop participant-disjoint evaluation, few-shot adaptation, probability calibration, and heterogeneous expert fusion for robust multimodal decoding. I also discuss the computational design of TAS-Gate, which separates authorization rules from experiential memory in long-term AI.',
    descriptionZh: '我与王韧教授合作开展跨被试多模态解码，研究被试隔离评估、少样本适应、概率校准与异构专家融合，并讨论 TAS-Gate 中授权规则与经验记忆分离的计算设计。',
  },
  {
    code: 'WESTLAKE · CROSS-LAB AI',
    codeZh: '西湖大学 · 跨实验室 AI 合作',
    lab: 'Through Systems Social Neuroscience Lab · Prof. Tailin Wu · Mentor: Tengfei Xu',
    labZh: '经系统与社会神经科学实验室合作 · 吴泰霖教授 · 徐腾飞指导',
    title: 'Learning and validating singular dynamics in the brain',
    titleZh: '学习并验证大脑中的奇点动力学',
    description:
      'I test whether generative models can recover singular structures in large-scale brain dynamics, using open analysis tools from Prof. Pulin Gong’s group at the University of Sydney for validation.',
    descriptionZh: '我测试生成模型能否恢复大尺度脑动力学中的奇点结构，并使用悉尼大学 Pulin Gong 教授团队的开源分析工具进行验证。',
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
      'Designed IIR/FIR filters, analyzed time- and frequency-domain EEG features with MNE, and supported PCA/ICA and CNN-LSTM fatigue-model development.',
    detailZh: '设计 IIR/FIR 滤波器，使用 MNE 分析脑电时域与频域特征，并参与 PCA、ICA 与 CNN-LSTM 疲劳模型开发。',
    logo: '/assets/zhentec-logo.png',
    logoAlt: 'Zhen Tec logo',
    href: 'https://zhentecbci.com/',
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
      'I led alumni liaison across biomedical and electrical engineering, supported a Technology and Finance forum, and proposed a hospital-university translational project. Together, we have built an active community of nearly 3,000 members, primarily highly educated professionals.',
    detailZh: '我负责生物医学工程和电气工程校友联络，协助举办科技金融论坛，并提出院校转化合作项目。我们共同组织了一个近 3,000 人、以高学历专业人士为主的活跃医工交叉社群。',
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
    description: 'Long-duration tracking, custom ROIs, temporal alignment, and high-throughput semantic-segmentation-based contact detection.',
    descriptionZh: '支持长时程追踪、自定义场地、时间对齐与基于语义分割的高通量接触检测。',
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
