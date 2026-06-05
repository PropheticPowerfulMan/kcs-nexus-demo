import { j as jsxRuntimeExports, m as motion, a4 as Camera, q as Play, a2 as ChevronRight, A as AnimatePresence, X, a5 as Film, x as useInView } from "./ui-Bam7IDm4.js";
import { r as reactExports } from "./vendor-Bh1Zu6gV.js";
import { k as kcsPublicImages } from "./kcsPublicImages-BPz6k80a.js";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};
const AnimSection = ({ children, className = "" }) => {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ref, variants: stagger, initial: "hidden", animate: inView ? "visible" : "hidden", className, children });
};
const categories = ["All", "Campus Life", "Academics", "Sports", "Arts", "Faith", "Events"];
const galleryItems = [
  {
    id: 1,
    title: "Morning Assembly in the Courtyard",
    category: "Faith",
    type: "image",
    image: kcsPublicImages.assembly,
    subtitle: "Students gather for prayer, worship, and announcements every morning.",
    featured: true
  },
  {
    id: 2,
    title: "Robotics and Innovation Lab",
    category: "Academics",
    type: "image",
    image: kcsPublicImages.qualityEducation,
    subtitle: "Hands-on STEM learning with coding, robotics, and prototyping."
  },
  {
    id: 3,
    title: "Varsity Basketball Tournament",
    category: "Sports",
    type: "image",
    image: kcsPublicImages.brazzavilleTrip,
    subtitle: "Competition, discipline, and school spirit in action."
  },
  {
    id: 4,
    title: "Elementary Art Showcase",
    category: "Arts",
    type: "image",
    image: kcsPublicImages.springConcert,
    subtitle: "Creative expression across painting, sculpture, and mixed media."
  },
  {
    id: 5,
    title: "International Day Celebration",
    category: "Events",
    type: "image",
    image: kcsPublicImages.thanksgiving,
    subtitle: "A vibrant celebration of the cultures represented at KCS.",
    featured: true
  },
  {
    id: 6,
    title: "High School Science Fair",
    category: "Academics",
    type: "image",
    image: kcsPublicImages.middleSchool,
    subtitle: "Student-led experiments, inquiry, and presentation excellence."
  },
  {
    id: 7,
    title: "Choir Rehearsal Before Concert Night",
    category: "Arts",
    type: "video",
    image: kcsPublicImages.springConcert,
    subtitle: "Preparing harmonies for the annual spring performance."
  },
  {
    id: 8,
    title: "Library Research Session",
    category: "Campus Life",
    type: "image",
    image: kcsPublicImages.elementaryHome,
    subtitle: "Quiet focus, collaboration, and deep reading across grade levels."
  },
  {
    id: 9,
    title: "Student Leadership Retreat",
    category: "Faith",
    type: "video",
    image: kcsPublicImages.annualRetreat,
    subtitle: "Formation, mentorship, and servant leadership development."
  },
  {
    id: 10,
    title: "Football Training Session",
    category: "Sports",
    type: "image",
    image: kcsPublicImages.brazzavilleTrip,
    subtitle: "Teamwork and athletic excellence on the KCS field."
  },
  {
    id: 11,
    title: "Campus Green Spaces",
    category: "Campus Life",
    type: "image",
    image: kcsPublicImages.campusGlory,
    subtitle: "Safe, beautiful environments designed for growth and connection."
  },
  {
    id: 12,
    title: "Graduation Ceremony Highlights",
    category: "Events",
    type: "video",
    image: kcsPublicImages.graduation,
    subtitle: "A milestone celebration for students and families.",
    featured: true
  }
];
const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [selectedItem, setSelectedItem] = reactExports.useState(null);
  const filteredItems = reactExports.useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);
  const featuredItems = galleryItems.filter((item) => item.featured);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-kcs-blue-950 min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[78vh] overflow-hidden bg-kcs-blue-950 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid grid-cols-3 gap-3 p-3 opacity-25", children: featuredItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-3xl bg-cover bg-center",
          style: { backgroundImage: `url(${item.image})` }
        },
        item.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-kcs-blue-950/95 via-kcs-blue-900/80 to-kcs-gold-900/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dots-bg opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container-custom py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7 }, className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/10 text-sm font-medium text-kcs-gold-300 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 14 }),
          " Life At KCS"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-6xl font-bold font-display leading-tight mb-5", children: [
          "A Gallery Built Around",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-kcs-gold-400", children: "Learning, Faith, and Belonging" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-kcs-blue-100 max-w-2xl mb-8", children: "Explore the rhythm of Kinshasa Christian School through classrooms, competitions, worship, the arts, and the moments that shape student life." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#collection", className: "btn-gold", children: "Browse Collection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#videos", className: "btn-primary bg-white/10 border border-white/15", children: "Watch Highlights" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-gray-50 dark:bg-kcs-blue-900/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "grid lg:grid-cols-4 gap-4", children: [
      { label: "Photos", value: "240+" },
      { label: "Video Stories", value: "18" },
      { label: "Annual Events Covered", value: "32" },
      { label: "Student Moments Captured", value: "1,000+" }
    ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 dark:border-kcs-blue-800 bg-white dark:bg-kcs-blue-900/50 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold font-display text-kcs-blue-900 dark:text-white", children: stat.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400 mt-1", children: stat.label })
    ] }, stat.label)) }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "collection", className: "section-padding bg-white dark:bg-kcs-blue-950", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold font-display text-kcs-blue-900 dark:text-white mb-3", children: "Photo Collection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 dark:text-gray-400 max-w-2xl", children: "Filter by theme to see how KCS blends academic rigor, character formation, and a globally minded campus culture." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setActiveCategory(category),
            className: `px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category ? "kcs-gradient text-white shadow-kcs" : "bg-gray-100 dark:bg-kcs-blue-900/50 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-kcs-blue-800"}`,
            children: category
          },
          category
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: stagger, className: "columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6", children: filteredItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.button,
        {
          variants: fadeUp,
          whileHover: { y: -6 },
          onClick: () => setSelectedItem(item),
          className: "group relative w-full overflow-hidden rounded-3xl bg-white dark:bg-kcs-blue-900/60 border border-gray-100 dark:border-kcs-blue-800 text-left break-inside-avoid shadow-sm hover:shadow-kcs transition-all duration-300",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.title, className: "w-full object-cover transition-transform duration-500 group-hover:scale-105" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white backdrop-blur-md border border-white/10", children: item.category }),
              item.type === "video" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-9 h-9 rounded-full bg-kcs-gold-500 text-kcs-blue-950 flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 16, fill: "currentColor" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-xl font-bold font-display mb-2 leading-tight", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm leading-relaxed", children: item.subtitle })
            ] })
          ] })
        },
        item.id
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "videos", className: "section-padding bg-gray-50 dark:bg-kcs-blue-900/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold font-display text-kcs-blue-900 dark:text-white mb-3", children: "Video Highlights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 dark:text-gray-400 max-w-2xl mx-auto", children: "A short-form look at signature KCS experiences, from worship gatherings to student-led innovation." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-3 gap-6", children: galleryItems.filter((item) => item.type === "video").map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.button,
        {
          variants: fadeUp,
          onClick: () => setSelectedItem(item),
          className: "group overflow-hidden rounded-3xl bg-white dark:bg-kcs-blue-900/50 border border-gray-100 dark:border-kcs-blue-800 text-left hover:shadow-kcs transition-all",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-64 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.title, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-kcs-blue-950/90 via-kcs-blue-950/20 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-16 h-16 rounded-full bg-kcs-gold-500 text-kcs-blue-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 24, fill: "currentColor" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-xl font-bold font-display mb-1", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/75 text-sm", children: item.subtitle })
            ] })
          ] })
        },
        item.id
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-kcs-blue-950 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-gold-300 font-semibold mb-2", children: "Visit In Person" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold font-display mb-3", children: "Experience The Campus Beyond The Screen" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-100", children: "Schedule a guided visit to meet our team, walk the campus, and see the culture of KCS first-hand." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact", className: "btn-gold whitespace-nowrap", children: [
        "Book A Campus Tour ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16, className: "inline ml-1" })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedItem && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 md:p-8",
        onClick: () => setSelectedItem(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto flex h-full max-w-6xl items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.9 },
              onClick: () => setSelectedItem(null),
              className: "absolute right-0 top-0 z-10 w-12 h-12 rounded-full bg-white/10 text-white border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20, scale: 0.96 },
              animate: { opacity: 1, y: 0, scale: 1 },
              exit: { opacity: 0, y: 20, scale: 0.96 },
              transition: { duration: 0.25 },
              onClick: (event) => event.stopPropagation(),
              className: "grid w-full overflow-hidden rounded-[2rem] border border-white/10 bg-kcs-blue-950 lg:grid-cols-[1.35fr_0.65fr]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[320px] bg-black", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: selectedItem.image, alt: selectedItem.title, className: "h-full w-full object-cover" }),
                  selectedItem.type === "video" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-kcs-blue-950/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-20 h-20 rounded-full bg-kcs-gold-500 text-kcs-blue-950 flex items-center justify-center shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 28, fill: "currentColor" }) }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between p-8 text-white", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/10", children: selectedItem.category }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm text-kcs-gold-300", children: [
                        selectedItem.type === "video" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 14 }),
                        selectedItem.type === "video" ? "Video Highlight" : "Photo Story"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold font-display mb-4 leading-tight", children: selectedItem.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-100 leading-relaxed text-base", children: selectedItem.subtitle })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded-2xl border border-white/10 bg-white/5 p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-kcs-blue-100", children: "This gallery item reflects the everyday excellence, warmth, and purpose that define the student experience at KCS." }) })
                ] })
              ]
            }
          )
        ] })
      }
    ) })
  ] });
};
export {
  GalleryPage as default
};
