import { j as jsxRuntimeExports, m as motion, d as ArrowRight, B as BookOpen, z as Calculator, D as Microscope, a as Globe, E as Palette, J as Music, K as Code, O as Trophy, x as useInView } from "./ui-Bam7IDm4.js";
import { r as reactExports, L as Link } from "./vendor-Bh1Zu6gV.js";
import { S as SCHOOL_DIVISIONS } from "./schoolLevels-BLyIlbuz.js";
import { k as kcsPublicImages } from "./kcsPublicImages-BPz6k80a.js";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const AnimSection = ({ children, className = "" }) => {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ref, initial: "hidden", animate: inView ? "visible" : "hidden", variants: stagger, className, children });
};
const programs = [
  {
    id: "kindergarten",
    level: SCHOOL_DIVISIONS[0].levels,
    title: SCHOOL_DIVISIONS[0].title,
    emoji: "🌱",
    tagline: "Nurturing Early Learners",
    color: "from-green-500 to-emerald-600",
    textColor: "text-green-700 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-900/20",
    image: kcsPublicImages.kindergarten,
    description: SCHOOL_DIVISIONS[0].description,
    subjects: ["Early Literacy", "Early Numeracy", "Bible & Chapel", "Creative Play", "Music & Movement", "French Exposure"],
    highlights: ["K3 through K5 progression", "Play-based learning", "Faith and character formation", "Readiness for Grade 1", "Close parent communication", "Safe early-years routines"]
  },
  {
    id: "elementary",
    level: SCHOOL_DIVISIONS[1].levels,
    title: SCHOOL_DIVISIONS[1].title,
    emoji: "📘",
    tagline: "Building Strong Foundations",
    color: "from-kcs-blue-500 to-blue-700",
    textColor: "text-kcs-blue-600 dark:text-kcs-blue-400",
    bg: "bg-kcs-blue-50 dark:bg-kcs-blue-900/20",
    image: kcsPublicImages.elementary,
    description: SCHOOL_DIVISIONS[1].description,
    subjects: ["English Language Arts", "Mathematics", "Science", "Social Studies", "Bible & Chapel", "Art & Music", "Physical Education", "French Language"],
    highlights: ["Grade 1 through Grade 5", "Strong literacy and numeracy", "Daily Bible curriculum", "STEAM integration", "Character education", "After-school programs"]
  },
  {
    id: "middle",
    level: SCHOOL_DIVISIONS[2].levels,
    title: SCHOOL_DIVISIONS[2].title,
    emoji: "🔬",
    tagline: "Growing in Knowledge & Character",
    color: "from-cyan-500 to-kcs-blue-700",
    textColor: "text-kcs-blue-600 dark:text-kcs-blue-400",
    bg: "bg-kcs-blue-50 dark:bg-kcs-blue-900/20",
    image: kcsPublicImages.middleSchool,
    description: SCHOOL_DIVISIONS[2].description,
    subjects: ["Advanced English", "Pre-Algebra & Algebra", "Life & Earth Science", "World History", "Bible Studies", "Visual Arts", "Band & Orchestra", "Computer Science"],
    highlights: ["Pre-AP coursework", "Student government", "Service learning projects", "Sports teams", "Annual science fair", "Leadership retreats"]
  },
  {
    id: "high",
    level: SCHOOL_DIVISIONS[3].levels,
    title: SCHOOL_DIVISIONS[3].title,
    emoji: "🎓",
    tagline: "Ready for the World Stage",
    color: "from-kcs-blue-800 to-kcs-blue-950",
    textColor: "text-kcs-blue-800 dark:text-kcs-blue-300",
    bg: "bg-kcs-blue-100 dark:bg-kcs-blue-900/30",
    image: kcsPublicImages.highSchool,
    description: SCHOOL_DIVISIONS[3].description,
    subjects: ["AP English & Literature", "AP Calculus & Statistics", "AP Biology & Chemistry", "AP World & US History", "AP Economics", "Senior Bible & Ethics", "Journalism & Media", "Coding & AI Fundamentals"],
    highlights: ["10+ AP courses offered", "Dedicated college counselor", "98% college acceptance rate", "SAT/ACT preparation", "Internship programs", "National Honor Society"]
  }
];
const departments = [
  { icon: BookOpen, name: "Language Arts", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
  { icon: Calculator, name: "Mathematics", color: "text-green-600", bg: "bg-green-50 dark:bg-green-900/20" },
  { icon: Microscope, name: "Sciences", color: "text-purple-600", bg: "bg-purple-50 dark:bg-purple-900/20" },
  { icon: Globe, name: "Social Studies", color: "text-orange-600", bg: "bg-orange-50 dark:bg-orange-900/20" },
  { icon: Palette, name: "Visual Arts", color: "text-pink-600", bg: "bg-pink-50 dark:bg-pink-900/20" },
  { icon: Music, name: "Music & Performing", color: "text-indigo-600", bg: "bg-indigo-50 dark:bg-indigo-900/20" },
  { icon: Code, name: "Technology & CS", color: "text-teal-600", bg: "bg-teal-50 dark:bg-teal-900/20" },
  { icon: Trophy, name: "Athletics", color: "text-red-600", bg: "bg-red-50 dark:bg-red-900/20" }
];
const AcademicsPage = () => {
  const [activeTab, setActiveTab] = reactExports.useState("kindergarten");
  const activeProgram = programs.find((p) => p.id === activeTab);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 kcs-gradient overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dots-bg opacity-10", style: { backgroundSize: "40px 40px" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container-custom text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kcs-gold-500/20 border border-kcs-gold-400/30 text-kcs-gold-300 text-sm font-medium mb-5", children: "ACSI Accredited • American Curriculum" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-6xl font-bold font-display text-white mb-5", children: [
          "Academic",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Programs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-kcs-blue-100 max-w-2xl mx-auto", children: "A world-class American curriculum designed to challenge, inspire, and prepare students for excellence at the highest level." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-white dark:bg-kcs-blue-950", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row justify-center gap-3 mb-12", children: programs.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setActiveTab(p.id),
          className: `flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${activeTab === p.id ? `bg-gradient-to-r ${p.color} text-white shadow-kcs` : "bg-gray-100 dark:bg-kcs-blue-900/50 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-kcs-blue-800/50"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: p.emoji }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-tight", children: p.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs ${activeTab === p.id ? "text-white/80" : "text-gray-400"}`, children: p.level })
            ] })
          ]
        },
        p.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "grid lg:grid-cols-2 gap-12 items-start",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: activeProgram.image,
                alt: activeProgram.title,
                className: "w-full h-80 object-cover rounded-3xl shadow-kcs-lg",
                loading: "lazy"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block px-3 py-1.5 rounded-full text-xs font-bold mb-3 ${activeProgram.bg} ${activeProgram.textColor}`, children: activeProgram.level }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold font-display text-kcs-blue-900 dark:text-white mb-2", children: activeProgram.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-gold-600 dark:text-kcs-gold-400 font-semibold mb-4", children: activeProgram.tagline }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 leading-relaxed mb-6", children: activeProgram.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-kcs-blue-900 dark:text-white text-sm mb-3", children: "Core Subjects" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: activeProgram.subjects.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-kcs-gold-500 flex-shrink-0" }),
                    s
                  ] }, s)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-kcs-blue-900 dark:text-white text-sm mb-3", children: "Highlights" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: activeProgram.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-kcs-blue-500 flex-shrink-0" }),
                    h
                  ] }, h)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admissions", className: "btn-primary inline-flex items-center gap-2", children: [
                "Apply for ",
                activeProgram.title,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
              ] })
            ] })
          ]
        },
        activeTab
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-gray-50 dark:bg-kcs-blue-950/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-blue text-sm mb-3", children: "Departments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold font-display text-kcs-blue-900 dark:text-white", children: "Academic Departments" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: departments.map(({ icon: Icon, name, color, bg }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: fadeUp,
          whileHover: { y: -5 },
          className: "p-5 bg-white dark:bg-kcs-blue-900/50 rounded-2xl border border-gray-100 dark:border-kcs-blue-800 hover:shadow-kcs transition-all duration-300 text-center group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 ${bg} rounded-xl flex items-center justify-center mx-auto mb-3`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22, className: color }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white text-sm", children: name })
          ]
        },
        name
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-white dark:bg-kcs-blue-950", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-gold text-sm mb-3", children: "Advanced Placement" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold font-display text-kcs-blue-900 dark:text-white mb-4", children: "AP & Honors Courses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 leading-relaxed mb-6", children: "KCS offers 10+ College Board AP courses, giving high school students the opportunity to earn college credit while building the academic rigor needed for top universities." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
          "AP Calculus AB/BC",
          "AP Biology",
          "AP Chemistry",
          "AP Physics",
          "AP English Literature",
          "AP US History",
          "AP Economics",
          "AP Statistics",
          "AP Computer Science",
          "AP Environmental Science"
        ].map((course) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 py-1.5 border-b border-gray-100 dark:border-gray-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-kcs-gold-500 flex-shrink-0" }),
          course
        ] }, course)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "grid grid-cols-2 gap-4", children: [
        { label: "AP Courses Offered", value: "10+", icon: BookOpen },
        { label: "Average AP Score", value: "3.8", icon: Trophy },
        { label: "College Acceptance", value: "98%", icon: Globe },
        { label: "Merit Scholarships", value: "$2M+", icon: Calculator }
      ].map(({ label, value, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-gradient-to-br from-kcs-blue-50 to-white dark:from-kcs-blue-900/30 dark:to-kcs-blue-900/50 border border-kcs-blue-100 dark:border-kcs-blue-800 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 24, className: "text-kcs-blue-600 dark:text-kcs-blue-400 mx-auto mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold font-display text-kcs-blue-900 dark:text-white", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400 mt-1", children: label })
      ] }, label)) })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 kcs-gradient", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold font-display text-white mb-4", children: "Start Your Academic Journey at KCS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-100 mb-8 max-w-xl mx-auto", children: "Applications are open from K3 through Grade 12. Join a community of learners who dare to excel." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admissions", className: "btn-gold inline-flex items-center gap-2 text-base px-8 py-4 rounded-2xl", children: [
        "Apply Now ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 20 })
      ] })
    ] }) }) }) })
  ] });
};
export {
  AcademicsPage as default
};
