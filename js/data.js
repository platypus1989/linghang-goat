// Team GOAT · 领航十一期 · 期末展示数据
// 所有内容集中放在这里，便于现场前最后微调

window.SITE_DATA = {
  team: {
    name: "Team GOAT",
    cohort: "领航十一期",
    year: "2026",
    semester: "2025 秋 — 2026 春",
  },

  hero: {
    titleEN: "Navigating the AI Era",
    titleZH: "领航",
    subtitleZH: "在 AI 加速变化的时代，我们一起寻找自己的方向",
    body: "这一学期，我们聊的不只是 AI。\n我们聊的是：当世界快速变化时，如何继续成长，如何彼此支持，如何找到自己的航向。",
    cta: "Start the Journey",
  },

  // Journey timeline — 7 节点对应一年活动主线
  journey: [
    {
      phase: "Phase 01",
      date: "Sep — Oct",
      title: "初识",
      titleEN: "First Encounters",
      desc: "10 位来自 Pinterest、Instagram、Amazon、ByteDance、OpenAI、Waymo、Google、DeepMind、Palo Alto Networks、Apple/Perplexity 的同行者，第一次坐到同一张桌子前。",
    },
    {
      phase: "Phase 02",
      date: "Oct 25",
      title: "Stay in the market",
      titleEN: "Career & The AI Wave",
      desc: "导师 James 用 39 年的职场经验提醒我们：「不要因为坏老板而走，要因为更大的舞台而走。」跳槽不是逃离，而是重新校准。",
    },
    {
      phase: "Phase 03",
      date: "Nov — Dec",
      title: "个人品牌 = 利他",
      titleEN: "Personal Brand",
      desc: "Kai 分享 Google Shopping Ads 从内部小项目到百亿业务的故事。我们慢慢理解：真正的品牌不是包装自己，而是让别人因为你被托举。",
    },
    {
      phase: "Phase 04",
      date: "Jan 18",
      title: "好协作 ≠ 讲和气",
      titleEN: "Team Collaboration",
      desc: "DRI、Credit、跨组冲突、Passive-aggressive、负面反馈——把模糊的「人事」拆成可执行的「机制」。",
    },
    {
      phase: "Phase 05",
      date: "Feb — Mar",
      title: "晋升前一级",
      titleEN: "Leadership & Promotion",
      desc: "晋升是对已有表现的认可，而不是一次跃迁的起点。在被宣布之前，先按下一级标准工作。",
    },
    {
      phase: "Phase 06",
      date: "Apr 18",
      title: "AI 浪潮下的人",
      titleEN: "Reflection",
      desc: "AI 在把「执行」商品化，「判断」却在升值。我们重新思考自己在这个时代的位置——以及未来要靠什么不被替代。",
    },
    {
      phase: "Phase 07",
      date: "May 2026",
      title: "继续出发",
      titleEN: "Graduation",
      desc: "带着这一年的答案，也带着新的问题。下一站，我们换个山头继续走。",
    },
  ],

  // 10 位成员 spotlight（按现场分享顺序）
  members: [
    {
      name: "Leo",
      nameZH: "黎想",
      photo: "images/members/leo.jpg",
      role: "Staff PM, Ads",
      company: "Pinterest",
      tag: "Connector",
      keyword: "Long-term Connection",
      takeaway: "这一年最大的转变，是从「个体探索」走向「群体校准」。每个月一次的固定对话，让信任有了厚度——这本身就是长期价值。",
      next: "Build durable relationships that outlast any single role or company.",
    },
    {
      name: "Iris",
      nameZH: "翟秋晨",
      photo: "images/members/iris.jpg",
      role: "Engineering Manager",
      company: "Instagram",
      tag: "Leader",
      keyword: "Manager's POV",
      takeaway: "做 Manager 之后，我才真正理解：很多冲突不是能力问题，是没人愿意先说清楚 DRI。把「人事」翻译成机制，是这一年最大的收获。",
      next: "Bring clarity to the messy middle — where most teams actually live.",
    },
    {
      name: "Yali",
      nameZH: "万雅莉",
      photo: "images/members/yali.jpg",
      role: "Principal Applied Scientist",
      company: "Amazon",
      tag: "Builder",
      keyword: "Compound Brand",
      takeaway: "个人品牌不是包装自己，而是让别人真实受益。一次 tech talk、一篇有判断的文章——这些复利会在你需要的时候出现。",
      next: "Compound visible value — internally and externally.",
    },
    {
      name: "Jay",
      nameZH: "欧肖泽",
      photo: "images/members/jay.jpg",
      role: "Hardware Engineering Lead",
      company: "ByteDance",
      tag: "Explorer",
      keyword: "Cross-domain",
      takeaway: "作为组里唯一做硬件的人，我反而看到了 AI 浪潮下不同行业共同的焦虑和共同的机会。Stay in the market 不只是软件人的事。",
      next: "Bridge hardware and AI — where most of the real-world value will land.",
    },
    {
      name: "Shanshan",
      nameZH: "倪姗姗",
      photo: "images/members/shanshan.jpg",
      role: "Staff SWE, Frontend",
      company: "OpenAI",
      tag: "Storyteller",
      keyword: "Human × AI",
      takeaway: "AI 不是替代工具，它让我重新思考：什么样的产品体验真正需要人的判断、审美和同理心。",
      next: "Build interfaces that make AI feel useful, trustworthy, and human.",
    },
    {
      name: "Charlie",
      nameZH: "何唐从睿",
      photo: "images/members/charlie.jpg",
      role: "Staff SWE",
      company: "Waymo",
      tag: "Explorer",
      keyword: "Calibrated Judgment",
      takeaway: "自动驾驶教会我：把不确定性变成可执行的判断，才是工程师真正的核心能力。这一年，我把这种思维带回到了职业选择本身。",
      next: "Engineer better decisions — for systems, and for myself.",
    },
    {
      name: "Shiyu",
      nameZH: "黄诗禹",
      photo: "images/members/shiyu.jpg",
      role: "Staff Research Eng",
      company: "Google DeepMind",
      tag: "Explorer",
      keyword: "Re-calibration",
      takeaway: "项目像一面镜子，帮我打开了心态，重新校准位置。年中从 Google Search 内部转岗到 DeepMind，做 LLM post-training——我应该更早一点做这个决定。",
      next: "Push at the frontier — and bring others along.",
    },
    {
      name: "David",
      nameZH: "陆松",
      photo: "images/members/david.jpg",
      role: "Staff Research Eng",
      company: "Google",
      tag: "Builder",
      keyword: "Long-cycle Bets",
      takeaway: "投资和职业一样：真正的复利来自长周期。这一年我们讨论房产、股票、AI 赛道，本质都是在练习「在不确定中下注」。",
      next: "Place fewer, deeper, longer bets.",
    },
    {
      name: "Henry",
      nameZH: "张浩喆",
      photo: "images/members/henry.jpg",
      role: "Principal Security Researcher",
      company: "Palo Alto Networks",
      tag: "Leader",
      keyword: "Trust at Scale",
      takeaway: "做 Security 让我意识到：AI 越普及，「可信任」就越稀缺。技术之外，建立信任是这个时代最被低估的核心能力。",
      next: "Make AI systems—and the people behind them—worthy of trust.",
    },
    {
      name: "Chuan",
      nameZH: "汪川",
      photo: "images/members/chuan.jpg",
      role: "MTS / EM",
      company: "Apple → Perplexity",
      tag: "Builder",
      keyword: "I'm not alone",
      takeaway: "在苹果近 7 年后，我加入了 Perplexity 的 Query Understanding 团队——人生第一次进创业公司。AI 焦虑反而在和大家交流后被缓解了——意识到 I am not alone，并发现了很多值得去解决的问题。",
      next: "Build at the edge — with people who care about the same questions.",
    },
  ],

  mentors: {
    title: "感谢我们的导师",
    subtitle: "这一年的每一次校准，都离不开你们给出的经验、视角和耐心。",
    note: "谢谢你们把真实的职业经验带到桌面上，也谢谢你们提醒我们：成长不是被推着往前走，而是在关键时刻看清方向。",
    people: [
      {
        name: "李峻",
        line: "谢谢你把复杂问题拆开，让我们看到更清晰的职业坐标。",
      },
      {
        name: "李啸虎",
        line: "谢谢你用长期视角提醒我们，选择不只看当下，也看复利。",
      },
      {
        name: "James Wu",
        line: "谢谢你把真实的职场判断带进讨论，让我们学会重新校准舞台。",
      },
      {
        name: "Kai",
        line: "谢谢你让我们看见利他的力量：真正的影响力，是让别人因为你被托举。",
      },
    ],
  },

  // Ask Our Semester
  askSemester: {
    title: "Ask Our Semester",
    subtitle: "如果把这一学期的讨论变成一个 AI memory，它会怎么回答？",
    placeholder: "Ask something like: How do we grow in the AI era?",
    suggestions: [
      {
        q: "AI 会取代我们的工作吗？",
        a: "AI 会改变很多工作的形态，但「执行」被商品化的同时，「判断」「品味」「连接真实世界」的能力在升值。这一学期我们最锋利的一句概括来自 4 月那场圆桌：「AI 在把执行商品化，但判断在升值。」真正被替代的，是那些拒绝重新校准自己定位的人；真正受益的，是把 AI 嵌进真实流程的人。",
      },
      {
        q: "如何在变化中保持竞争力？",
        a: "我们的共识是：Stay in the market，不是一直面试。每年和 4–5 家公司聊一聊、保持手感、保持人脉、保持对行业的判断。比「被动等到必须跳」时更从容。竞争力不来自一次性的努力，而来自持续保持在场。",
      },
      {
        q: "mentorship 最大的价值是什么？",
        a: "不是某一句金句、也不是某一次「高人指路」，而是当你迷茫时，有一群同辈愿意把还没答案的问题拿出来一起讨论——「I'm not alone」本身就是力量。导师告诉你梯子在哪里；同辈让你知道这条路有人和你一起爬。",
      },
      {
        q: "这一学期最重要的共同记忆是什么？",
        a: "不是某一个研讨会，而是那种「组员先讲真实案例、导师再补刀」的节奏——以及聚餐、Hiking、跨组联谊里那些「愿意把还没答案的问题拿出来」的瞬间。深度对话很少发生在会议室，更多发生在山路上、餐桌边。",
      },
    ],
  },

  reflection: {
    keywords: [
      "Stay in the market",
      "利他",
      "DRI",
      "Credit 可分享",
      "Readiness",
      "判断升值",
      "Connect the dots",
      "Trust",
      "Long-term",
      "I'm not alone",
      "Connection",
      "Calibration",
    ],
    quote: "没人知道 AI 会把行业带去哪里。但至少这一学期，我们不是一个人在摸索。",
  },

  closing: {
    titleEN: "The journey continues.",
    titleZH: "领航不是答案的终点，而是下一段旅程的开始。",
    credit: "Made by 领航十一期 · Team GOAT · 2026",
  },
};
