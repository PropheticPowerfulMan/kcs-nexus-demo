import { j as jsxRuntimeExports, m as motion, d as ArrowRight, q as Play, U as Users, r as Award, s as Star, a as Globe, t as ChevronDown, B as BookOpen, u as Heart, v as Shield, Z as Zap, T as TrendingUp, w as Calendar, x as useInView } from "./ui-Bam7IDm4.js";
import { L as Link, r as reactExports } from "./vendor-Bh1Zu6gV.js";
import { S as SCHOOL_DIVISIONS } from "./schoolLevels-BLyIlbuz.js";
import { k as kcsPublicImages } from "./kcsPublicImages-BPz6k80a.js";
import { u as useTranslation } from "./index-QZ8_PQE4.js";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};
const slideIn = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -60 : 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
});
const AnimatedSection = ({ children, className = "" }) => {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      initial: "hidden",
      animate: isInView ? "visible" : "hidden",
      variants: staggerContainer,
      className,
      children
    }
  );
};
const stats = [
  { value: "K3-G12", label: "Christian Education", icon: Users },
  { value: "17", label: "Levels Offered", icon: Award },
  { value: "2", label: "Official Phones", icon: Star },
  { value: "DRC", label: "Kinshasa Campus", icon: Globe }
];
const programs = [
  {
    level: SCHOOL_DIVISIONS[0].levels,
    title: "Kindergarten",
    desc: SCHOOL_DIVISIONS[0].description,
    color: "from-kcs-gold-500 to-kcs-blue-500",
    icon: "✦",
    highlights: ["Early Literacy", "Faith Formation", "Creative Play", "Character Growth"]
  },
  {
    level: SCHOOL_DIVISIONS[1].levels,
    title: "Elementary",
    desc: SCHOOL_DIVISIONS[1].description,
    color: "from-kcs-blue-600 to-blue-700",
    icon: "✦",
    highlights: ["Core Academics", "Bible Learning", "Moral Integrity", "Love of Learning"]
  },
  {
    level: `${SCHOOL_DIVISIONS[2].levels}, ${SCHOOL_DIVISIONS[3].levels}`,
    title: "Middle & High School",
    desc: "Equipping students from Grade 6 through Grade 12 with rigorous academics, biblical principles, spiritual maturity, and servant leadership.",
    color: "from-kcs-blue-800 to-kcs-blue-950",
    icon: "✦",
    highlights: ["Leadership", "Academic Rigor", "Spiritual Maturity", "Future Readiness"]
  }
];
const values = [
  { icon: Heart, title: "Faith", desc: "Spiritual life is prioritized through prayer, Bible studies, services, and mentorship.", color: "text-red-500", bg: "bg-red-50 dark:bg-red-900/20" },
  { icon: Award, title: "Excellence", desc: "KCS commits to high standards in hiring, teaching, care, and performance.", color: "text-kcs-gold-600", bg: "bg-kcs-gold-50 dark:bg-kcs-gold-900/20" },
  { icon: Shield, title: "Biblical Worldview", desc: "Learning is grounded in Scripture and a Christian understanding of life and conduct.", color: "text-kcs-blue-600", bg: "bg-kcs-blue-50 dark:bg-kcs-blue-900/20" },
  { icon: Zap, title: "Critical Thinking", desc: "Students are encouraged to grow academically, creatively, socially, and spiritually.", color: "text-purple-600", bg: "bg-purple-50 dark:bg-purple-900/20" },
  { icon: TrendingUp, title: "Leadership", desc: "The school helps raise the next generation of compassionate leaders.", color: "text-green-600", bg: "bg-green-50 dark:bg-green-900/20" },
  { icon: Globe, title: "Service", desc: "KCS encourages mercy, compassion, community service, and love for others.", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20" }
];
const testimonials = [
  {
    quote: "KCS is dedicated to helping students grow academically, socially, and spiritually in a nurturing Christian environment.",
    name: "KCS Students",
    role: "Shaping the future, one student at a time",
    initials: "MK"
  },
  {
    quote: "We are committed to excellence, from hiring qualified Christian educators to how we measure instruction and care.",
    name: "Our Team",
    role: "We are committed to excellence",
    initials: "JM"
  },
  {
    quote: "Our mission is to prepare children for a competitive world while helping them show compassion and mercy.",
    name: "Our Mission",
    role: "Raising the next generation of leaders",
    initials: "AD"
  }
];
const latestNews = [
  {
    category: "Event",
    title: "USA Trip",
    date: "KCS Event",
    image: kcsPublicImages.usaTripCopy,
    excerpt: "Staff and students explored cultural exchange, educational growth, and renowned academic institutions in the USA."
  },
  {
    category: "Event",
    title: "Brazzaville Trip",
    date: "KCS Event",
    image: kcsPublicImages.brazzavilleTrip,
    excerpt: "KCS students proudly brought home the trophy at the sports and arts festival in Brazzaville."
  },
  {
    category: "Community",
    title: "Legacy Day",
    date: "KCS Service",
    image: kcsPublicImages.community,
    excerpt: "Students serve the community through street clean-up initiatives and visits to orphanages."
  }
];
const HomePage = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
          style: {
            backgroundImage: `url('${kcsPublicImages.assembly}')`
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hero-overlay" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { rotate: 360 },
            transition: { duration: 40, repeat: Infinity, ease: "linear" },
            className: "absolute -top-20 -right-20 w-96 h-96 border border-white/5 rounded-full"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { rotate: -360 },
            transition: { duration: 60, repeat: Infinity, ease: "linear" },
            className: "absolute -bottom-20 -left-20 w-[500px] h-[500px] border border-white/5 rounded-full"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 right-1/4 w-2 h-2 bg-kcs-gold-400 rounded-full animate-float" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 right-1/3 w-1 h-1 bg-white/60 rounded-full animate-float-delay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 left-1/4 w-3 h-3 bg-kcs-gold-300/60 rounded-full animate-float" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 container-custom pt-28 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.2 },
            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kcs-gold-500/20 border border-kcs-gold-400/30 text-kcs-gold-300 text-sm font-medium mb-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-kcs-gold-400 rounded-full animate-pulse" }),
              "Kinshasa Christian School - Macampagne, Ngaliema"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.3 },
            className: "text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white leading-tight mb-6",
            children: [
              "Welcome to",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Kinshasa Christian" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "School"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.5 },
            className: "text-xl text-kcs-blue-100 leading-relaxed mb-8 max-w-2xl",
            children: "We are committed to help raise the next generation of leaders through quality Christian education, biblical values, compassion, and academic excellence."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.7 },
            className: "flex flex-wrap gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/admissions",
                  className: "flex items-center gap-2 btn-gold text-base px-8 py-4 rounded-2xl",
                  children: [
                    "Enroll Now",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 20 })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/academics",
                  className: "flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 text-base",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 16 }),
                    "Explore Programs"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.9 },
            className: "flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10",
            children: stats.map(({ value, label, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, className: "text-kcs-gold-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-white font-display", children: value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-200 text-xs", children: label })
              ] })
            ] }, label))
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          animate: { y: [0, 8, 0] },
          transition: { duration: 2, repeat: Infinity },
          className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 28 })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-gray-50 dark:bg-kcs-blue-950/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-blue text-sm mb-3", children: "Academic Excellence" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-bold font-display text-kcs-blue-900 dark:text-white mb-4", children: [
          "World-Class Academic",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-blue", children: "Programs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto", children: "A comprehensive Christian education from K3 through Grade 12, designed for academic growth, spiritual maturity, and strong moral character." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: programs.map((program, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: fadeUp,
          whileHover: { y: -8 },
          className: "github-glass dark:github-glass-dark relative group overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-kcs-lg",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-2 bg-gradient-to-r ${program.color}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", children: program.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${program.color} text-white mb-3`, children: program.level }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold font-display text-kcs-blue-900 dark:text-white mb-2", children: program.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5", children: program.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: program.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-kcs-gold-500 flex-shrink-0" }),
                h
              ] }, h)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/academics",
                  className: "inline-flex items-center gap-2 mt-6 text-kcs-blue-600 dark:text-kcs-blue-300 font-semibold text-sm hover:gap-3 transition-all duration-200",
                  children: [
                    "Learn More ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
                  ]
                }
              )
            ] })
          ]
        },
        program.title
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-white dark:bg-kcs-blue-950", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: slideIn("left"), className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden shadow-kcs-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: kcsPublicImages.qualityEducation,
              alt: "KCS Students",
              className: "w-full h-[480px] object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-kcs-blue-950/60 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "public-image-caption p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-kcs-gold-500 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 20, className: "text-kcs-blue-950" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold text-sm", children: "Spiritual Life at KCS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-200 text-xs", children: "Prayer, Bible studies, mentorship" })
            ] })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            animate: { y: [0, -8, 0] },
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            className: "github-glass dark:github-glass-dark absolute -top-6 -right-6 rounded-2xl p-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-kcs-blue-700 dark:text-white font-display", children: "KCS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Letting Our" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Light Shine" })
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: slideIn("right"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-gold text-sm mb-3", children: "Our Purpose" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl font-bold font-display text-kcs-blue-900 dark:text-white mb-4", children: [
          "Transforming Lives Through",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Faith & Learning" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 leading-relaxed mb-6", children: "Kinshasa Christian School provides a nurturing environment where students grow academically, socially, and spiritually. The school empowers young minds through faith-based education, critical thinking, creativity, and Christian values." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 mb-8", children: [
          { label: "Mission", text: "Raise the next generation of leaders with compassion and mercy" },
          { label: "Vision", text: "Equip passionate, independent, life-long learners with a biblical worldview" }
        ].map(({ label, text }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "github-glass dark:github-glass-dark p-4 rounded-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-kcs-gold-600 dark:text-kcs-gold-400 uppercase tracking-wider mb-1", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: text })
        ] }, label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "btn-primary inline-flex items-center gap-2", children: [
          "Learn More About KCS ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-gradient-to-br from-kcs-blue-950 to-kcs-blue-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kcs-gold-500/20 border border-kcs-gold-400/30 text-kcs-gold-300 text-sm font-medium mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 14 }),
          "Core Values"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold font-display text-white mb-4", children: "What Drives Everything We Do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-200 text-lg max-w-2xl mx-auto", children: "Six pillars that define the KCS experience and shape our students for a lifetime." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: values.map(({ icon: Icon, title, desc, color, bg }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: fadeUp,
          whileHover: { y: -5 },
          className: "group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22, className: color }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white font-display mb-2", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-200 text-sm leading-relaxed", children: desc })
          ]
        },
        title
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-white dark:bg-kcs-blue-950", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-gradient-to-br from-kcs-blue-700 to-kcs-blue-950 p-10 md:p-16 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-60 h-60 bg-kcs-gold-500/10 rounded-full translate-y-1/2 -translate-x-1/2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 grid lg:grid-cols-2 gap-10 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kcs-gold-500/20 border border-kcs-gold-400/30 text-kcs-gold-300 text-sm font-medium mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 14 }),
            "KCS Nexus Platform"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-4xl font-bold font-display text-white mb-4", children: [
            "Connected School Life",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-kcs-gold-300", children: "for KCS" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-100 leading-relaxed mb-6", children: "KCS Nexus brings the school community together with admissions, announcements, events, galleries, portals, and digital learning tools for students, parents, and teachers." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8", children: [
            { title: "Announcements", desc: "Important school updates", icon: "✦" },
            { title: "Calendar", desc: "Events and activities", icon: "✦" },
            { title: "Portals", desc: "Student, parent, teacher access", icon: "✦" }
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-white/10 border border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: item.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold text-sm", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-200 text-xs mt-0.5", children: item.desc })
          ] }, item.title)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", className: "btn-gold inline-flex items-center gap-2", children: [
            "Access Portal ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-72 h-72", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-kcs-gold-400/10 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 rounded-full bg-kcs-gold-400/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-7xl", children: "🧠" }) }),
          ["📚", "🎓", "🔬", "📊"].map((emoji, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              animate: { rotate: 360 },
              transition: { duration: 8 + i * 2, repeat: Infinity, ease: "linear" },
              className: "absolute inset-0",
              style: { transformOrigin: "center" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl",
                  style: {
                    top: `${[0, 35, 70, 35][i]}%`,
                    left: `${[35, 70, 35, 0][i]}%`
                  },
                  children: emoji
                }
              )
            },
            i
          ))
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-gray-50 dark:bg-kcs-blue-950/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex items-center justify-between mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-blue text-sm mb-2", children: "Stay Informed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-display text-kcs-blue-900 dark:text-white", children: "Latest News & Events" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/news",
            className: "hidden sm:flex items-center gap-2 text-kcs-blue-600 dark:text-kcs-blue-300 font-semibold hover:gap-3 transition-all",
            children: [
              "View All ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: latestNews.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          variants: fadeUp,
          whileHover: { y: -5 },
          className: "github-glass dark:github-glass-dark group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-kcs-lg",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: item.image,
                  alt: item.title,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-blue", children: item.category }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 12 }),
                item.date
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white mb-2 leading-tight line-clamp-2", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4", children: item.excerpt }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/news",
                  className: "inline-flex items-center gap-1.5 text-kcs-blue-600 dark:text-kcs-blue-400 text-sm font-semibold hover:gap-2.5 transition-all",
                  children: [
                    "Read More ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
                  ]
                }
              )
            ] })
          ]
        },
        item.title
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-white dark:bg-kcs-blue-950", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-gold text-sm mb-3", children: "Testimonials" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold font-display text-kcs-blue-900 dark:text-white", children: "Voices from Our Community" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: testimonials.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: fadeUp,
          whileHover: { y: -5 },
          className: "github-glass dark:github-glass-dark p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-kcs",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 16, className: "text-kcs-gold-400 fill-kcs-gold-400" }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5 italic", children: [
              '"',
              item.quote,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl kcs-gradient flex items-center justify-center text-white font-bold text-sm", children: item.initials }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white text-sm", children: item.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: item.role })
              ] })
            ] })
          ]
        },
        item.name
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 bg-gradient-to-r from-kcs-blue-800 via-kcs-blue-700 to-kcs-blue-900 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dots-bg opacity-20", style: { backgroundSize: "40px 40px" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container-custom text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold font-display text-white mb-5", children: "Begin Your KCS Journey Today" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-kcs-blue-100 mb-10 max-w-xl mx-auto", children: "Online registration is available for families who want their children to grow in faith, knowledge, character, and service." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admissions", className: "btn-gold text-base px-10 py-4 rounded-2xl flex items-center gap-2", children: [
                "Enroll Now ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 20 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "border-2 border-white/40 hover:border-white text-white font-semibold px-10 py-4 rounded-2xl text-base transition-all duration-300 hover:bg-white/10", children: "Contact Admissions" })
            ] })
          ]
        }
      ) })
    ] })
  ] });
};
export {
  HomePage as default
};
