const header = document.querySelector("[data-header]");
const languageToggle = document.querySelector("[data-lang-toggle]");

function syncHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

const copy = {
  zh: {
    pageTitle: "Pedestrian Workshop",
    navProject: "项目",
    navExperience: "体验",
    navResearch: "研究",
    navTeam: "团队",
    navFuture: "未来",
    heroEyebrow: "XR 交互艺术 · 京剧 · 中国山水画",
    heroCn: "身体为笔，身段成景",
    heroCopy:
      "一个将京剧程式化身段转译为中国山水画意象的沉浸式交互项目。观众以身体参与创作，在动作捕捉、实时生成与传统美学之间，生成属于自己的山水。",
    heroExperience: "进入体验叙事",
    heroResearch: "查看研究框架",
    intro:
      "本项目以京剧四大行当“生、旦、净、丑”的经典身段为输入，以中国山水画中的山、水、云、树、鹤等视觉意象为输出，建立“动作-角色-山水意象”的跨媒介映射逻辑。",
    factMediumTerm: "核心媒介",
    factMediumValue: "动作捕捉 + XR",
    factAestheticTerm: "美学关键词",
    factAestheticValue: "写意 / 留白",
    factExperienceTerm: "公众体验",
    factExperienceValue: "以身体动作实时生成绘画",
    projectEyebrow: "当前项目",
    projectTitle: "从表演到山水",
    conceptTitle: "项目理念",
    conceptOne:
      "京剧和中国山水画都依赖高度凝练的符号系统。它们不直接复制现实，而是在身段、笔墨、留白与意象之间表达精神状态。项目试图把这种难以被初学者直接理解的审美经验转化为可参与、可反馈、可生成的互动过程。",
    conceptTwo:
      "在体验中，观众不再只是观看传统艺术，而是通过模仗京剧身段触发视觉生成。身体成为画笔，动作成为山水，传统美学被转化为一种当代的、可感知的文化交互。",
    projectCaption: "“动作-角色-山水意象”对应逻辑：从京剧行当特征与身段语义出发，转译为山水画元素。",
    experienceEyebrow: "交互体验",
    experienceTitle: "观众如何参与一幅山水的生成",
    experienceIntro: "体验路径应尽量清晰，让第一次接触京剧的观众也能理解：选择角色、学习动作、触发意象、共同生成画面。",
    stepOneTitle: "选择行当",
    stepOneText: "观众从生、旦、净、丑四类京剧角色中选择一个入口，进入对应的动作与视觉系统。",
    stepTwoTitle: "学习身段",
    stepTwoText: "系统引导观众完成云手、顺风旗、山膀等代表性动作，降低专业表演门槛。",
    stepThreeTitle: "触发山水",
    stepThreeText: "MediaPipe 骨骼识别与 TouchDesigner 实时生成系统将动作转译为山、水、云、树、鹤等图像元素。",
    stepFourTitle: "共同成画",
    stepFourText: "不同观众与动作组合逐渐生成一幅独特山水，使传统艺术从观看对象转化为参与过程。",
    userFlowCaption: "用户交互流程：动作捕捉、语义映射、实时绘制与现场参与共同构成观众生成山水的路径。",
    systemTitle: "从身体数据到水墨意象",
    captureTitle: "捕捉",
    captureText: "摄像头捕捉观众身体动作，骨骼追踪系统提取姿态特征。",
    mappingTitle: "映射",
    mappingText: "基于京剧专家访谈与动作语义分析，建立“动作-角色-山水意象”映射。",
    generationTitle: "生成",
    generationText: "在 XR 空间中实时生成水墨视觉元素，让观众看到动作的文化转译结果。",
    researchEyebrow: "研究框架",
    researchTitle: "传统美学的可视化研究",
    xieyiTitle: "写意",
    xieyiText: "关注艺术如何超越具体形似，表达主体精神、情绪与意境。",
    liubaiTitle: "留白",
    liubaiText: "将空白视为主动生成的诗性空间，而非画面缺失。",
    bodyInteractionTitle: "身体交互",
    bodyInteractionText: "通过身体参与降低传统符号系统的理解门槛，使观众从被动观看转为主动生成。",
    evaluationTitle: "文化传播评估",
    evaluationText: "未来可结合问卷、访谈与行为数据，研究观众是否真正理解传统美学概念。",
    roleCaption: "四大行当与代表性动作库。",
    costumeCaption: "京剧服饰纹样中的植物、动物、山水与宗教图像语义。",
    recognitionEyebrow: "成果",
    recognitionTitle: "成果与展演",
    aranyaTitle: "阿那亚戏剧节 · 科技单元",
    aranyaText: "项目入选阿那亚戏剧节科技单元，并面向超过千名观众进行公开展示与体验反馈收集。",
    chinavisTitle: "ChinaVis 2026 数据可视化竞赛 · 一等奖作品",
    chinavisText:
      "项目荣获 ChinaVis 2026 数据可视化竞赛“一等奖作品”。ChinaVis，即中国可视化与可视分析大会，是国内可视化与可视分析领域的重要学术与实践交流平台。",
    carouselPrompt: "点击图片查看下一张",
    teamEyebrow: "团队",
    teamTitle: "路人工坊",
    teamQuote: "“每一个路过的人，都可以来玩两下。”",
    teamIntroTitle: "跨界的艺术科技团队",
    teamIntroOne:
      "路人工坊，由香港岭南大学徐娴教授领衔，成员共 4 人，均为中央戏剧学院硕士研究生。我们是一支跨界的艺术科技团队，致力于打破“专业技能”与“日常感知”之间的围墙，通过文化转译的形式，探索跨文化跨领域融合的可能性。",
    teamIntroTwo:
      "在我们的创作中，京剧不是高文化门槛的艺术，绘画不是艺术馆的静物，科技不是冰冷的代码。我们将三者融合为可触摸、可进入、可被文化感知的装置现场-每个“路人”，都可以随时走进来，在交互中完成一次艺术的对话。我们不要求观众懂戏剧，不需要会操作设备，甚至不需要“准备好参与”。只要你路过，作品就在等你。",
    xuRole: "香港岭南大学助理教授、博士生导师",
    xuBioOne: "香港科技大学博士毕业；中央戏剧学院硕士研究生毕业；牛津、剑桥大学访问学者；ACM CHI、ACM CSCW 等主要国际会议副主席。",
    xuBioTwo: "研究领域：艺术科技、数据可视化、人机交互、人工智能电影等。",
    xuLink: "个人主页：xxuxian.github.io",
    xuLi1: "在 ACM CHI、ACM SIGGRAPH、ACM Multimedia、IEEE VIS 和 IEEE VR 等顶级期刊发表了数十篇艺术科技领域论文。",
    xuLi2: "创作艺术作品在 ACM SIGGRAPH、ICRA 艺术项目和亚洲数字艺术节上展出。",
    xuLi3: "设计研发基于 VR 的教育项目和论文获 IEEE VR 2025 最佳论文荣誉奖。",
    xuLi4: "首届香港科技大学人工智能电影节联合发起人。",
    xuLi5: "电视剧《你和我的倾城时光》--东方卫视和浙江卫视全国最高收视率的电视剧编剧。",
    jiRole: "香港岭南大学博士在读；中央戏剧学院硕士研究生毕业",
    jiBio: "研究领域：艺术科技、情感可视化、戏剧教育。",
    jiLi1: "《脑电波艺术与情绪交互装置》展出于香港演艺学院赛马会剧场，担任导演、演员。",
    jiLi2: "阿那亚戏剧节候鸟 300：《Mr.B》制作人、演员。",
    jiLi3: "乌镇杯戏剧新生活大赛：《只因为，爱》导演、编剧。",
    jiLi4: "爱奇艺漫改舞台剧一等奖、最佳作品：《黑执事》导演。",
    jiLi5: "乡村戏剧节：《我们》导演、演员。",
    jiLi6: "中央戏剧学院第一届青年戏剧节：多幕剧《猫的天空》演员。",
    jiLi7: "第三届全国中小学戏剧展演优秀作品表演奖等。",
    jiLi8: "2023 年入选国家艺术基金培训项目----大湾区创意艺术管理和领导人才培训。",
    jiLi9: "中国东方演艺集团“高参小”项目科研课题组项目成员。",
    jiLi10: "《从悲剧的卡塔西斯角度谈人类情感反映》发表于《戏剧之家》等。",
    wangRole: "中央戏剧学院硕士",
    wangLi1:
      "VR 叙事体验作品《Love That Defies Mortality》（改编自昆曲《牡丹亭》）收录于 ACM SIGGRAPH 2025（国际计算机协会图形学与人机交互领域顶会），并在第四届东亚古籍数字人文国际论坛中获得“最佳古意新诠”奖。",
    wangLi2: "襄阳市管家巷大型实景演艺幻城舞台影像设计。",
    wangLi3: "AI 影像作品《记忆风谷》入围第十八届中央戏剧学院学生影像展竞赛单元。",
    wangLi4: "海报作品《惊蛰春耕图》发表于《光明日报》。",
    wangLi5: "传统戏剧当代传承中心京剧《虹霓关》《生死恨》摄影指导。",
    wangLi6: "话剧《东边坡上的今夜酒与明月诗》剧照摄影。",
    wangLi7: "互动影游 / 腾讯短剧《反转 21 克》，电视剧《都挺好》《欢乐颂》《相逢时节》《亲爱的生命》《亲爱的你在哪里》，网剧《乐游原》等剪辑师。",
    shiRole: "中央戏剧学院硕士",
    shiLi1: "交互舞剧作品《Thunderstorm（雷雨）》（收录于 CHI 2026 国际人机交互领域顶会）。",
    shiLi2: "VR 叙事体验作品《Nora》（收录于 SIGGRAPH ASIA 2025 国际计算机协会图形学与人机交互领域顶会）。",
    shiLi3: "音乐剧《到延安三千里》主创，数字技术。",
    shiLi4: "数字戏剧《梦·蝶》主创，数字技术。",
    shiLi5: "海报作品《春之序幕》《江畔独步寻花》发表于《光明日报》纸媒。",
    shiLi6: "京剧《虹霓关》《生死恨》海报设计。",
    shiLi7: "偶剧《我不是达芬奇》《新骑鹅旅行记》多媒体设计、海报设计。",
    shiLi8: "中央戏剧学院在研院级学生项目《京剧动作捕捉数据的语义化建构及应用研究》。",
    shiLi9: "参与国家重点研发计划“文化科技与现代服务业”专项项目课题“孪生数字人标准体系与伦理规范”，参与撰写《中国数字人产业报告》。",
    futureEyebrow: "研究展望",
    futureTitle: "未来研究",
    futureLi1: "从单一姿态识别发展到连续动作语法识别",
    futureLi2: "建立京剧动作语义库与山水意象数据库",
    futureLi3: "研究无专业背景观众对写意与留白的理解变化",
    futureLi4: "持续扩展为工作坊、展演、教学与研究合作平台",
  },
  en: {
    pageTitle: "Pedestrian Workshop",
    navProject: "Project",
    navExperience: "Experience",
    navResearch: "Research",
    navTeam: "Team",
    navFuture: "Future",
    heroEyebrow: "XR Interactive Art · Peking Opera · Chinese Landscape Painting",
    heroCn: "Body as brush, gesture as landscape",
    heroCopy:
      "An immersive interactive project that translates codified Peking Opera gestures into Chinese landscape imagery. Audiences create through bodily movement, generating personal landscapes through motion capture, real-time visuals, and traditional aesthetics.",
    heroExperience: "Enter the Experience",
    heroResearch: "View Research Framework",
    intro:
      "The project uses classic gestures from the four Peking Opera role types, Sheng, Dan, Jing, and Chou, as input, and visual motifs from Chinese landscape painting, including mountains, water, clouds, trees, and cranes, as output. It builds a cross-media mapping between movement, role, and landscape imagery.",
    factMediumTerm: "Core Medium",
    factMediumValue: "Motion Capture + XR",
    factAestheticTerm: "Aesthetic Focus",
    factAestheticValue: "Xieyi / Liubai",
    factExperienceTerm: "Public Experience",
    factExperienceValue: "Real-time painting through gesture",
    projectEyebrow: "Current Project",
    projectTitle: "From Performance to Landscape",
    conceptTitle: "Concept",
    conceptOne:
      "Peking Opera and Chinese landscape painting both rely on highly condensed symbolic systems. Rather than copying reality directly, they express states of mind through gesture, brushwork, negative space, and imagery. The project transforms this aesthetic experience, often difficult for beginners to access, into an interactive process that can be entered, felt, and generated.",
    conceptTwo:
      "In the experience, audiences do not merely watch traditional art. By imitating Peking Opera gestures, they trigger visual generation. The body becomes the brush, movement becomes landscape, and traditional aesthetics become a contemporary, perceivable form of cultural interaction.",
    projectCaption: "Movement-role-landscape imagery mapping: Peking Opera role traits and gesture semantics are translated into elements of Chinese landscape painting.",
    experienceEyebrow: "Interactive Experience",
    experienceTitle: "How Audiences Participate in Generating a Landscape",
    experienceIntro: "The experience path is designed to be clear enough for first-time audiences to understand: choose a role, learn a gesture, trigger imagery, and collectively generate a scene.",
    stepOneTitle: "Choose a Role Type",
    stepOneText: "Audiences choose one of the four Peking Opera role types, Sheng, Dan, Jing, or Chou, as an entry into the corresponding movement and visual system.",
    stepTwoTitle: "Learn Gestures",
    stepTwoText: "The system guides participants through representative gestures such as Cloud Hands, Human Flag, and Mountain Arm, lowering the threshold of professional performance.",
    stepThreeTitle: "Trigger Landscape Imagery",
    stepThreeText: "MediaPipe skeleton tracking and TouchDesigner real-time generation translate movement into visual elements such as mountains, water, clouds, trees, and cranes.",
    stepFourTitle: "Co-create the Painting",
    stepFourText: "Different audiences and movement combinations gradually form a unique landscape, turning traditional art from an object of viewing into a participatory process.",
    userFlowCaption: "User interaction flow: motion capture, semantic mapping, real-time drawing, and on-site participation together form the path through which audiences generate landscapes.",
    systemTitle: "From Body Data to Ink Imagery",
    captureTitle: "Capture",
    captureText: "A camera captures audience movement, and skeleton tracking extracts posture features.",
    mappingTitle: "Mapping",
    mappingText: "Based on Peking Opera expert interviews and gesture semantic analysis, the system builds a movement-role-landscape imagery mapping.",
    generationTitle: "Generation",
    generationText: "Ink-style visual elements are generated in real time within an XR space, allowing audiences to see the cultural translation of their movements.",
    researchEyebrow: "Research Framework",
    researchTitle: "Visualizing Traditional Aesthetics",
    xieyiTitle: "Xieyi",
    xieyiText: "Explores how art moves beyond literal likeness to express spirit, emotion, and atmosphere.",
    liubaiTitle: "Liubai",
    liubaiText: "Treats blank space as an active poetic field rather than an absence in the image.",
    bodyInteractionTitle: "Embodied Interaction",
    bodyInteractionText: "Uses bodily participation to lower the barrier to traditional symbolic systems, shifting audiences from passive viewing to active generation.",
    evaluationTitle: "Cultural Communication Evaluation",
    evaluationText: "Future studies may combine questionnaires, interviews, and behavioral data to examine whether audiences truly understand traditional aesthetic concepts.",
    roleCaption: "Four Peking Opera role types and their representative gesture library.",
    costumeCaption: "Plant, animal, landscape, and religious image semantics in Peking Opera costume patterns.",
    recognitionEyebrow: "Recognition",
    recognitionTitle: "Awards and Exhibitions",
    aranyaTitle: "Aranya Theater Festival · Technology Section",
    aranyaText: "The project was selected for the Technology Section of Aranya Theater Festival and publicly presented to more than a thousand visitors, collecting audience feedback through live experience.",
    chinavisTitle: "ChinaVis 2026 Visualization Competition · First Prize",
    chinavisText:
      "The project won First Prize in the ChinaVis 2026 Visualization Competition. ChinaVis, the China Visualization and Visual Analytics Conference, is a major academic and practice-oriented platform in visualization and visual analytics in China.",
    carouselPrompt: "Click the image to view the next one",
    teamEyebrow: "Team",
    teamTitle: "Luren Workshop",
    teamQuote: "\"Every passerby can come and play for a while.\"",
    teamIntroTitle: "An Interdisciplinary Art-Tech Team",
    teamIntroOne:
      "Luren Workshop is led by Prof. XU Xian from Lingnan University, Hong Kong. The team has four members, all master's students from the Central Academy of Drama. We are an interdisciplinary art-tech team dedicated to breaking down the wall between professional skill and everyday perception, exploring the possibilities of cross-cultural and cross-disciplinary integration through cultural translation.",
    teamIntroTwo:
      "In our practice, Peking Opera is not an art form locked behind a high cultural threshold, painting is not a still object inside a museum, and technology is not cold code. We bring the three together into an installation site that can be touched, entered, and culturally perceived. Every passerby can step in at any time and complete an artistic dialogue through interaction. We do not require audiences to understand theater, operate equipment, or even be prepared to participate. If you pass by, the work is already waiting for you.",
    xuRole: "Assistant Professor and PhD Supervisor, Lingnan University, Hong Kong",
    xuBioOne: "PhD graduate of the Hong Kong University of Science and Technology; master's graduate of the Central Academy of Drama; visiting scholar at Oxford and Cambridge; Associate Chair of major international conferences including ACM CHI and ACM CSCW.",
    xuBioTwo: "Research areas include art technology, data visualization, human-computer interaction, and AI cinema.",
    xuLink: "Personal website: xxuxian.github.io",
    xuLi1: "Published dozens of papers in art technology at leading venues including ACM CHI, ACM SIGGRAPH, ACM Multimedia, IEEE VIS, and IEEE VR.",
    xuLi2: "Creative works have been exhibited at ACM SIGGRAPH, ICRA art programs, and the Asia Digital Art Exhibition.",
    xuLi3: "Designed and developed a VR-based education project and paper that received an IEEE VR 2025 Best Paper Honorable Mention.",
    xuLi4: "Co-founder of the first Hong Kong University of Science and Technology AI Film Festival.",
    xuLi5: "Screenwriter of Our Glamorous Time, a TV drama with top national ratings on Dragon TV and Zhejiang TV.",
    jiRole: "PhD student at Lingnan University, Hong Kong; master's graduate of the Central Academy of Drama",
    jiBio: "Research areas include art technology, affective visualization, and theater education.",
    jiLi1: "Director and performer of Brainwave Art and Emotional Interaction Installation, exhibited at the Hong Kong Academy for Performing Arts Jockey Club Amphitheatre.",
    jiLi2: "Producer and performer of Mr.B at Migratory Birds 300, Aranya Theater Festival.",
    jiLi3: "Director and playwright of Just Because, Love for the Wuzhen Cup Theater New Life Competition.",
    jiLi4: "Director of Black Butler, winner of the iQIYI comic-adapted stage play First Prize and Best Work.",
    jiLi5: "Director and performer of We at the Village Theater Festival.",
    jiLi6: "Performer in the multi-act play Cat's Sky at the first Central Academy of Drama Youth Theater Festival.",
    jiLi7: "Recipient of performance honors including the Outstanding Work Performance Award at the Third National Primary and Secondary School Theater Showcase.",
    jiLi8: "Selected for the 2023 National Arts Fund training program for creative arts management and leadership talent in the Greater Bay Area.",
    jiLi9: "Research team member of the China Oriental Performing Arts Group \"High-Level Participation in Primary Schools\" project.",
    jiLi10: "Published On Human Emotional Reflection from the Perspective of Tragic Catharsis in Theater House and other venues.",
    wangRole: "Master's graduate, Central Academy of Drama",
    wangLi1:
      "VR narrative experience Love That Defies Mortality, adapted from the Kunqu opera The Peony Pavilion, was selected for ACM SIGGRAPH 2025 and won the Best Reinterpretation of Classical Spirit Award at the Fourth East Asian Digital Humanities Forum on Ancient Books.",
    wangLi2: "Stage video designer for the large-scale site-specific performance project in Guanjiaxiang, Xiangyang.",
    wangLi3: "AI video work Valley of Memory was shortlisted for the competition section of the 18th Central Academy of Drama Student Film Exhibition.",
    wangLi4: "Poster work Spring Plowing at Jingzhe was published in Guangming Daily.",
    wangLi5: "Director of photography for the contemporary inheritance center's Peking Opera productions Hongniguan and Shengsihen.",
    wangLi6: "Stage still photographer for Tonight's Wine and Moonlit Poetry on the Eastern Slope.",
    wangLi7: "Editor for the interactive film-game / Tencent short drama Reverse 21 Grams, TV dramas including All Is Well, Ode to Joy, Ray of Light, Beloved Life, and Dear Where Are You, and web dramas including Wonderland of Love.",
    shiRole: "Master's graduate, Central Academy of Drama",
    shiLi1: "Interactive dance theater work Thunderstorm, selected for CHI 2026, a top international venue in human-computer interaction.",
    shiLi2: "VR narrative experience Nora, selected for SIGGRAPH Asia 2025, a leading international venue in computer graphics and human-computer interaction.",
    shiLi3: "Core creator for digital technology in the musical Three Thousand Miles to Yan'an.",
    shiLi4: "Core creator for digital technology in the digital theater work Dream · Butterfly.",
    shiLi5: "Poster works Prelude to Spring and Walking Alone by the Riverside Looking for Flowers were published in the print edition of Guangming Daily.",
    shiLi6: "Poster designer for the Peking Opera productions Hongniguan and Shengsihen.",
    shiLi7: "Multimedia and poster designer for the puppet theater works I Am Not Da Vinci and The New Wonderful Adventures of Nils.",
    shiLi8: "Participant in the Central Academy of Drama student research project Semantic Construction and Application Research of Peking Opera Motion Capture Data.",
    shiLi9: "Participated in the National Key R&D Program project on cultural technology and modern services, contributing to the subtopic Standard System and Ethical Norms for Digital Human Twins and to the China Digital Human Industry Report.",
    futureEyebrow: "Research Outlook",
    futureTitle: "Future Research",
    futureLi1: "Develop from single-pose recognition toward continuous movement grammar recognition",
    futureLi2: "Build a Peking Opera gesture semantic library and a landscape imagery database",
    futureLi3: "Study how audiences without professional backgrounds understand Xieyi and Liubai",
    futureLi4: "Continue expanding into workshops, performances, education, and research collaboration",
  },
};

const textBindings = [
  [".nav a[href='#project']", "navProject"],
  [".nav a[href='#experience']", "navExperience"],
  [".nav a[href='#research']", "navResearch"],
  [".nav a[href='#team']", "navTeam"],
  [".nav a[href='#future']", "navFuture"],
  [".hero .eyebrow", "heroEyebrow"],
  [".hero-cn", "heroCn"],
  [".hero-copy", "heroCopy"],
  [".hero-actions .primary", "heroExperience"],
  [".hero-actions .ghost", "heroResearch"],
  [".intro-grid > p", "intro"],
  [".facts div:nth-child(1) dt", "factMediumTerm"],
  [".facts div:nth-child(1) dd", "factMediumValue"],
  [".facts div:nth-child(2) dt", "factAestheticTerm"],
  [".facts div:nth-child(2) dd", "factAestheticValue"],
  [".facts div:nth-child(3) dt", "factExperienceTerm"],
  [".facts div:nth-child(3) dd", "factExperienceValue"],
  ["#project .section-head .eyebrow", "projectEyebrow"],
  ["#project .section-head h2", "projectTitle"],
  ["#project .text-block h3", "conceptTitle"],
  ["#project .text-block p:nth-of-type(1)", "conceptOne"],
  ["#project .text-block p:nth-of-type(2)", "conceptTwo"],
  ["#project figcaption", "projectCaption"],
  ["#experience .section-head .eyebrow", "experienceEyebrow"],
  ["#experience .section-head h2", "experienceTitle"],
  ["#experience .section-head p:not(.eyebrow)", "experienceIntro"],
  [".steps article:nth-child(1) h3", "stepOneTitle"],
  [".steps article:nth-child(1) p", "stepOneText"],
  [".steps article:nth-child(2) h3", "stepTwoTitle"],
  [".steps article:nth-child(2) p", "stepTwoText"],
  [".steps article:nth-child(3) h3", "stepThreeTitle"],
  [".steps article:nth-child(3) p", "stepThreeText"],
  [".steps article:nth-child(4) h3", "stepFourTitle"],
  [".steps article:nth-child(4) p", "stepFourText"],
  [".inline-figure figcaption", "userFlowCaption"],
  ["#system .section-head h2", "systemTitle"],
  [".spec-list div:nth-child(1) strong", "captureTitle"],
  [".spec-list div:nth-child(1) p", "captureText"],
  [".spec-list div:nth-child(2) strong", "mappingTitle"],
  [".spec-list div:nth-child(2) p", "mappingText"],
  [".spec-list div:nth-child(3) strong", "generationTitle"],
  [".spec-list div:nth-child(3) p", "generationText"],
  ["#research .section-head .eyebrow", "researchEyebrow"],
  ["#research .section-head h2", "researchTitle"],
  [".research-grid article:nth-child(1) h3", "xieyiTitle"],
  [".research-grid article:nth-child(1) p", "xieyiText"],
  [".research-grid article:nth-child(2) h3", "liubaiTitle"],
  [".research-grid article:nth-child(2) p", "liubaiText"],
  [".research-grid article:nth-child(3) h3", "bodyInteractionTitle"],
  [".research-grid article:nth-child(3) p", "bodyInteractionText"],
  [".research-grid article:nth-child(4) h3", "evaluationTitle"],
  [".research-grid article:nth-child(4) p", "evaluationText"],
  [".research-figures figure:nth-child(1) figcaption", "roleCaption"],
  [".research-figures figure:nth-child(2) figcaption", "costumeCaption"],
  ["#recognition .section-head .eyebrow", "recognitionEyebrow"],
  ["#recognition .section-head h2", "recognitionTitle"],
  [".timeline article:nth-child(1) h3", "aranyaTitle"],
  [".timeline article:nth-child(1) > p", "aranyaText"],
  [".timeline article:nth-child(2) h3", "chinavisTitle"],
  [".timeline article:nth-child(2) > p", "chinavisText"],
  ["#team .section-head .eyebrow", "teamEyebrow"],
  ["#team .section-head h2", "teamTitle"],
  ["#team .section-head p:not(.eyebrow)", "teamQuote"],
  [".team-intro h3", "teamIntroTitle"],
  [".team-intro p:nth-of-type(1)", "teamIntroOne"],
  [".team-intro p:nth-of-type(2)", "teamIntroTwo"],
  [".member-card:nth-child(1) .role", "xuRole"],
  [".member-card:nth-child(1) p:nth-of-type(2)", "xuBioOne"],
  [".member-card:nth-child(1) p:nth-of-type(3)", "xuBioTwo"],
  [".member-card:nth-child(1) .profile-link a", "xuLink"],
  [".member-card:nth-child(1) li:nth-child(1)", "xuLi1"],
  [".member-card:nth-child(1) li:nth-child(2)", "xuLi2"],
  [".member-card:nth-child(1) li:nth-child(3)", "xuLi3"],
  [".member-card:nth-child(1) li:nth-child(4)", "xuLi4"],
  [".member-card:nth-child(1) li:nth-child(5)", "xuLi5"],
  [".member-card:nth-child(2) .role", "jiRole"],
  [".member-card:nth-child(2) p:nth-of-type(2)", "jiBio"],
  [".member-card:nth-child(2) li:nth-child(1)", "jiLi1"],
  [".member-card:nth-child(2) li:nth-child(2)", "jiLi2"],
  [".member-card:nth-child(2) li:nth-child(3)", "jiLi3"],
  [".member-card:nth-child(2) li:nth-child(4)", "jiLi4"],
  [".member-card:nth-child(2) li:nth-child(5)", "jiLi5"],
  [".member-card:nth-child(2) li:nth-child(6)", "jiLi6"],
  [".member-card:nth-child(2) li:nth-child(7)", "jiLi7"],
  [".member-card:nth-child(2) li:nth-child(8)", "jiLi8"],
  [".member-card:nth-child(2) li:nth-child(9)", "jiLi9"],
  [".member-card:nth-child(2) li:nth-child(10)", "jiLi10"],
  [".member-card:nth-child(3) .role", "wangRole"],
  [".member-card:nth-child(3) li:nth-child(1)", "wangLi1"],
  [".member-card:nth-child(3) li:nth-child(2)", "wangLi2"],
  [".member-card:nth-child(3) li:nth-child(3)", "wangLi3"],
  [".member-card:nth-child(3) li:nth-child(4)", "wangLi4"],
  [".member-card:nth-child(3) li:nth-child(5)", "wangLi5"],
  [".member-card:nth-child(3) li:nth-child(6)", "wangLi6"],
  [".member-card:nth-child(3) li:nth-child(7)", "wangLi7"],
  [".member-card:nth-child(4) .role", "shiRole"],
  [".member-card:nth-child(4) li:nth-child(1)", "shiLi1"],
  [".member-card:nth-child(4) li:nth-child(2)", "shiLi2"],
  [".member-card:nth-child(4) li:nth-child(3)", "shiLi3"],
  [".member-card:nth-child(4) li:nth-child(4)", "shiLi4"],
  [".member-card:nth-child(4) li:nth-child(5)", "shiLi5"],
  [".member-card:nth-child(4) li:nth-child(6)", "shiLi6"],
  [".member-card:nth-child(4) li:nth-child(7)", "shiLi7"],
  [".member-card:nth-child(4) li:nth-child(8)", "shiLi8"],
  [".member-card:nth-child(4) li:nth-child(9)", "shiLi9"],
  ["#future .eyebrow", "futureEyebrow"],
  ["#future h2", "futureTitle"],
  [".future-list li:nth-child(1)", "futureLi1"],
  [".future-list li:nth-child(2)", "futureLi2"],
  [".future-list li:nth-child(3)", "futureLi3"],
  [".future-list li:nth-child(4)", "futureLi4"],
];

function getInitialLanguage() {
  try {
    return localStorage.getItem("site-language") === "en" ? "en" : "zh";
  } catch {
    return "zh";
  }
}

let currentLanguage = getInitialLanguage();
const carouselRenderers = [];

function translate(key) {
  return copy[currentLanguage][key] || copy.zh[key] || "";
}

function setStoredLanguage(language) {
  try {
    localStorage.setItem("site-language", language);
  } catch {
    // Ignore storage errors on local file previews.
  }
}

const carouselSets = {
  aranya: [
    {
      src: "./assets/course-representative.png",
      title: {
        zh: "阿那亚现场体验",
        en: "Aranya On-site Experience",
      },
      alt: "Participants learning and performing gestures in the installation space.",
    },
    {
      src: "./assets/aranya-team.jpg",
      title: {
        zh: "路人工坊团队合照",
        en: "Luren Workshop Team Photo",
      },
      alt: "Luren Workshop team group photo at Aranya Theater Festival.",
    },
    {
      src: "./assets/aranya-live-6.jpg",
      title: {
        zh: "观众参与互动演示",
        en: "Audience Interaction Demonstration",
      },
      alt: "Audience watching an interaction demonstration at Aranya Theater Festival.",
    },
    {
      src: "./assets/aranya-live-4.jpg",
      title: {
        zh: "阿那亚戏剧节现场",
        en: "Aranya Theater Festival Site",
      },
      alt: "Aerial view of the Aranya Theater Festival site.",
    },
    {
      src: "./assets/aranya-live-3.jpg",
      title: {
        zh: "项目介绍与分享",
        en: "Project Presentation",
      },
      alt: "Project presentation at Aranya Theater Festival.",
    },
    {
      src: "./assets/aranya-live-5.jpg",
      title: {
        zh: "数字戏剧展演现场",
        en: "Digital Theater Showcase Site",
      },
      alt: "On-site installation area at Aranya Theater Festival.",
    },
  ],
  chinavis: [
    {
      src: "./assets/chinavis-work-poster.png",
      title: {
        zh: "一等奖作品展示海报",
        en: "First Prize Project Poster",
      },
      alt: "Body as Brush, Gesture as Landscape ChinaVis award project poster.",
    },
    {
      src: "./assets/chinavis-2026-site.png",
      title: {
        zh: "ChinaVis 2026 大会页面",
        en: "ChinaVis 2026 Conference Page",
      },
      alt: "ChinaVis 2026 conference website screenshot.",
    },
  ],
};

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const setName = carousel.dataset.carousel || "aranya";
  const items = carouselSets[setName] || carouselSets.aranya;
  let index = 0;

  const image = carousel.querySelector("[data-carousel-image]");
  const title = carousel.querySelector("[data-carousel-title]");
  const number = carousel.querySelector("[data-carousel-index]");
  const total = carousel.querySelector("[data-carousel-total]");

  function render() {
    const item = items[index];
    image.src = item.src;
    image.alt = item.alt;
    title.textContent = item.title[currentLanguage];
    number.textContent = String(index + 1);

    if (total) {
      total.textContent = String(items.length);
    }
  }

  carousel.addEventListener("click", () => {
    index = (index + 1) % items.length;
    render();
  });

  carouselRenderers.push(render);
  render();
});

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = translate("pageTitle");

  textBindings.forEach(([selector, key]) => {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = translate(key);
    }
  });

  document.querySelectorAll("[data-carousel-prompt]").forEach((prompt) => {
    prompt.textContent = translate("carouselPrompt");
  });

  carouselRenderers.forEach((render) => render());

  if (languageToggle) {
    languageToggle.textContent = language === "zh" ? "EN" : "中";
    languageToggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
  }

  setStoredLanguage(language);
}

languageToggle?.addEventListener("click", () => {
  applyLanguage(currentLanguage === "zh" ? "en" : "zh");
});

applyLanguage(currentLanguage);
