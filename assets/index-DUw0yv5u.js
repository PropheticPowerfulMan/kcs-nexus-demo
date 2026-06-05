import { j as jsxRuntimeExports, m as motion, U as Users, G as GraduationCap, a as Globe, r as Award, B as BookOpen, u as Heart, y as Lightbulb, g as MapPin, v as Shield, d as ArrowRight, x as useInView } from "./ui-Bam7IDm4.js";
import { L as Link, r as reactExports } from "./vendor-Bh1Zu6gV.js";
import { k as kcsPublicImages } from "./kcsPublicImages-BPz6k80a.js";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};
const AnimSection = ({ children, className = "" }) => {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ref, initial: "hidden", animate: inView ? "visible" : "hidden", variants: stagger, className, children });
};
const leadership = [
  {
    name: "Dr. Samuel Watkins",
    title: "Head of School",
    bio: "25+ years in international education. Passionate about transforming African education through Christian values.",
    image: kcsPublicImages.founder,
    initials: "SW"
  },
  {
    name: "Dr. Grace Mwamba",
    title: "Academic Director",
    bio: "Former professor at University of Kinshasa. Leads our curriculum development and academic excellence initiatives.",
    image: kcsPublicImages.teachers,
    initials: "GM"
  },
  {
    name: "Mr. David Okonkwo",
    title: "Dean of Students",
    bio: "Dedicated to student wellbeing and leadership development. Champion of student government and extracurriculars.",
    image: kcsPublicImages.campusGlory,
    initials: "DO"
  },
  {
    name: "Mrs. Amelia Chen",
    title: "Admissions Director",
    bio: "Guides families through the KCS admissions journey with warmth and expertise across three continents.",
    image: kcsPublicImages.about,
    initials: "AC"
  }
];
const faculty = [
  { name: "Mr. Thomas Belanger", dept: "Mathematics & Sciences", exp: "18 years", flag: "US" },
  { name: "Mrs. Fatima Diallo", dept: "English Language Arts", exp: "14 years", flag: "SN" },
  { name: "Dr. Pierre Lukusa", dept: "History & Social Studies", exp: "20 years", flag: "CD" },
  { name: "Ms. Sarah Johnson", dept: "Arts & Music", exp: "12 years", flag: "GB" },
  { name: "Mr. Carlos Rivera", dept: "Physical Education", exp: "10 years", flag: "MX" },
  { name: "Mrs. Josephine Nkosi", dept: "French & Languages", exp: "16 years", flag: "ZA" }
];
const milestones = [
  { year: "Faith", event: "Spiritual Life", desc: "Daily prayer, services, Bible studies, and mentorship support student growth." },
  { year: "Vision", event: "Biblical Worldview", desc: "KCS equips children to become passionate, independent, life-long learners." },
  { year: "Mission", event: "Leadership", desc: "The school helps raise leaders prepared for a competitive world with compassion and mercy." },
  { year: "Team", event: "Excellence", desc: "KCS values qualified Christian educators and high standards of care and instruction." },
  { year: "Service", event: "Community", desc: "Students are encouraged to live out love, compassion, and service to others." },
  { year: "Future", event: "KCS Nexus", desc: "Digital tools connect families, students, teachers, and school information." }
];
const storyStats = [
  { icon: Users, label: "KCS Students", sub: "Academic, social, spiritual growth" },
  { icon: GraduationCap, label: "Life-long Learners", sub: "Passionate and independent" },
  { icon: Globe, label: "Biblical Worldview", sub: "Ready to transform society" },
  { icon: Award, label: "Excellence", sub: "High standards in education and care" }
];
const missionCards = [
  {
    icon: Heart,
    title: "Our Mission",
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-100 dark:border-red-800/30",
    text: "To provide an exceptional American education rooted in Christian values, empowering students in Kinshasa and across the Congo to become servant leaders who transform their communities and the world."
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    color: "text-kcs-gold-600",
    bg: "bg-kcs-gold-50 dark:bg-kcs-gold-900/20",
    border: "border-kcs-gold-100 dark:border-kcs-gold-800/30",
    text: "To be the leading international school in Central Africa, recognized for academic excellence, spiritual depth, and the development of globally-minded leaders who make a lasting impact."
  },
  {
    icon: MapPin,
    title: "Our Promise",
    color: "text-kcs-blue-600",
    bg: "bg-kcs-blue-50 dark:bg-kcs-blue-900/20",
    border: "border-kcs-blue-100 dark:border-kcs-blue-800/30",
    text: "Every student who walks through our doors receives a world-class education, personalized care, and the tools to succeed at the highest levels - academically, professionally, and spiritually."
  }
];
const AboutPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-kcs-blue-950 via-kcs-blue-900 to-kcs-blue-800 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dots-bg opacity-10", style: { backgroundSize: "40px 40px" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container-custom text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-5 inline-flex items-center gap-2 rounded-full border border-kcs-gold-400/30 bg-kcs-gold-500/20 px-4 py-2 text-sm font-medium text-kcs-gold-300", children: "Kinshasa, DRC - Letting Our Light Shine" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mb-5 text-5xl font-bold font-display text-white md:text-6xl", children: [
          "About ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "KCS" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto max-w-3xl text-xl leading-relaxed text-kcs-blue-100", children: "KCS provides a nurturing Christian environment where students grow academically, socially, and spiritually." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-white dark:bg-kcs-blue-950", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-blue mb-3 text-sm", children: "Our Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-5 text-4xl font-bold font-display text-kcs-blue-900 dark:text-white", children: [
          "A Legacy Built on ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-blue", children: "Faith & Purpose" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 leading-relaxed text-gray-600 dark:text-gray-300", children: "Kinshasa Christian School prioritizes the spiritual development of students through prayer, services, Bible studies, and mentorship programs." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 leading-relaxed text-gray-600 dark:text-gray-300", children: "KCS is committed to excellence in teaching and care while helping children become compassionate leaders ready to transform society with a biblical worldview." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: storyStats.map(({ icon: Icon, label, sub }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-900/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-kcs-blue-100 dark:bg-kcs-blue-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, className: "text-kcs-blue-600 dark:text-kcs-blue-300" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-kcs-blue-900 dark:text-white", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: sub })
          ] })
        ] }, label)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: kcsPublicImages.spiritualLife,
            alt: "KCS Campus",
            className: "h-[500px] w-full rounded-3xl object-cover shadow-kcs-lg",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-6 -left-6 max-w-xs rounded-2xl border border-gray-100 bg-white p-5 shadow-kcs-lg dark:border-kcs-blue-800 dark:bg-kcs-blue-900", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl kcs-gradient-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 22, className: "text-kcs-blue-900" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "American Curriculum" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Faith-based learning with a biblical worldview" })
          ] })
        ] }) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-gray-50 dark:bg-kcs-blue-950/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "mb-14 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold font-display text-kcs-blue-900 dark:text-white", children: "Mission, Vision & Values" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12 grid gap-6 md:grid-cols-3", children: missionCards.map(({ icon: Icon, title, color, bg, border, text }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: fadeUp,
          className: `rounded-3xl border bg-white p-8 shadow-sm dark:bg-kcs-blue-900/50 ${border}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${bg}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 26, className: color }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-xl font-bold font-display text-kcs-blue-900 dark:text-white", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed text-gray-600 dark:text-gray-300", children: text })
          ]
        },
        title
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-white dark:bg-kcs-blue-950", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mb-14 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-gold mb-3 text-sm", children: "Our Team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold font-display text-kcs-blue-900 dark:text-white", children: "Leadership Team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-gray-500 dark:text-gray-400", children: "Experienced, passionate educators dedicated to the KCS mission." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4", children: leadership.map((person) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: fadeUp,
          whileHover: { y: -6 },
          className: "group rounded-3xl border border-gray-100 bg-gray-50 p-6 text-center transition-all duration-300 hover:shadow-kcs dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto mb-4 h-24 w-24", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: person.image, alt: person.name, className: "h-full w-full rounded-2xl object-cover", loading: "lazy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-lg bg-kcs-gold-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 14, className: "text-kcs-blue-900" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-0.5 text-sm font-bold text-kcs-blue-900 dark:text-white", children: person.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-medium text-kcs-blue-600 dark:text-kcs-blue-400", children: person.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed text-gray-500 dark:text-gray-400", children: person.bio })
          ]
        },
        person.name
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-gray-50 dark:bg-kcs-blue-950/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-blue mb-3 text-sm", children: "Faculty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold font-display text-kcs-blue-900 dark:text-white", children: "Expert Educators" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-gray-500 dark:text-gray-400", children: "Over 80 certified teachers from around the world, bringing global perspectives to the classroom." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3", children: faculty.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: fadeUp,
          className: "flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-kcs dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl kcs-gradient text-sm font-bold text-white", children: member.flag }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm font-semibold text-kcs-blue-900 dark:text-white", children: member.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: member.dept }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-medium text-kcs-gold-600 dark:text-kcs-gold-400", children: [
                member.exp,
                " experience"
              ] })
            ] })
          ]
        },
        member.name
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-gradient-to-br from-kcs-blue-950 to-kcs-blue-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mb-14 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-4 inline-flex items-center gap-2 rounded-full border border-kcs-gold-400/30 bg-kcs-gold-500/20 px-4 py-2 text-sm font-medium text-kcs-gold-300", children: "Our Journey" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold font-display text-white", children: "KCS Through the Years" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 h-full w-0.5 -translate-x-px bg-kcs-blue-700" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: milestones.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: `relative flex items-center ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-1/2 ${i % 2 === 0 ? "pr-10 text-right" : "pl-10"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `inline-block max-w-xs rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm ${i % 2 === 0 ? "ml-auto" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold font-display text-kcs-gold-400", children: m.year }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 font-semibold text-white", children: m.event }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-kcs-blue-200", children: m.desc })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-kcs-blue-900 bg-kcs-gold-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/2" })
        ] }, m.year)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-20 dark:bg-kcs-blue-950", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-3xl font-bold font-display text-kcs-blue-900 dark:text-white", children: "Become Part of the KCS Story" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mb-8 max-w-xl text-gray-600 dark:text-gray-400", children: "Join our community of learners, leaders, and believers. Your chapter in the KCS story starts with an application." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admissions", className: "btn-primary flex items-center gap-2", children: [
          "Apply Now ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "flex items-center gap-2 rounded-xl border-2 border-kcs-blue-200 px-6 py-3 font-semibold text-kcs-blue-700 transition-all duration-200 hover:bg-kcs-blue-50 dark:border-kcs-blue-700 dark:text-kcs-blue-300 dark:hover:bg-kcs-blue-900/20", children: "Contact Us" })
      ] })
    ] }) }) }) })
  ] });
};
export {
  AboutPage as default
};
