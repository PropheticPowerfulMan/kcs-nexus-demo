import { j as jsxRuntimeExports, m as motion, w as Calendar, C as Clock, d as ArrowRight, R as Radio, V as Video, Q as PlayCircle, W as Eye, _ as Search, x as useInView } from "./ui-Bam7IDm4.js";
import { r as reactExports, L as Link } from "./vendor-Bh1Zu6gV.js";
import { S as SearchField } from "./SearchField-CzMASTOO.js";
import { k as kcsPublicImages } from "./kcsPublicImages-BPz6k80a.js";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const AnimSection = ({ children, className = "" }) => {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ref, initial: "hidden", animate: inView ? "visible" : "hidden", variants: stagger, className, children });
};
const allPosts = [
  {
    id: "1",
    category: "achievement",
    title: "KCS Students Win National Science Olympiad Championship",
    excerpt: "Our talented science team brought home gold at the DRC National Science Olympiad, defeating 35 schools from across the country.",
    date: "April 15, 2026",
    author: "KCS Communications",
    image: kcsPublicImages.qualityEducation,
    readTime: "3 min read",
    views: 1240
  },
  {
    id: "2",
    category: "event",
    title: "Spring Arts Festival 2026 — April 28th",
    excerpt: "Join us for an unforgettable evening celebrating student creativity in music, visual arts, dance, and theater performances.",
    date: "April 10, 2026",
    author: "Arts Department",
    image: kcsPublicImages.springConcert,
    readTime: "2 min read",
    views: 890
  },
  {
    id: "3",
    category: "news",
    title: "KCS Launches AI-Powered KCS Nexus Platform",
    excerpt: "We are proud to unveil KCS Nexus — our revolutionary AI-powered school management and learning platform, the first of its kind in Central Africa.",
    date: "April 5, 2026",
    author: "IT Department",
    image: kcsPublicImages.assembly,
    readTime: "5 min read",
    views: 2100
  },
  {
    id: "4",
    category: "announcement",
    title: "2025–2026 Academic Year Enrollment Now Open",
    excerpt: "Applications for the upcoming academic year are now being accepted. Early applications receive priority placement.",
    date: "March 28, 2026",
    author: "Admissions Office",
    image: kcsPublicImages.campusGlory,
    readTime: "2 min read",
    views: 3200
  },
  {
    id: "5",
    category: "achievement",
    title: "Class of 2026 College Acceptances — Record-Breaking Year",
    excerpt: "100% of our graduating seniors received college acceptances, with 28 students admitted to universities in the US, UK, Canada, and South Africa.",
    date: "March 20, 2026",
    author: "College Counseling",
    image: kcsPublicImages.graduation,
    readTime: "4 min read",
    views: 4500
  },
  {
    id: "6",
    category: "event",
    title: "Annual KCS Sports Day — May 10, 2026",
    excerpt: "Get ready for a full day of athletics, teamwork, and school spirit at our annual Sports Day on the main KCS field.",
    date: "March 15, 2026",
    author: "Athletics Department",
    image: kcsPublicImages.brazzavilleTrip,
    readTime: "2 min read",
    views: 720
  }
];
const upcomingEvents = [
  {
    date: "Apr 28",
    title: "Spring Arts Festival",
    time: "6:00 PM",
    location: "KCS Auditorium",
    type: "cultural",
    liveStreamEnabled: true,
    liveStreamStatus: "live",
    liveStreamPlatform: "YouTube Live",
    liveStreamUrl: "https://www.youtube.com/@kinshasachristianschool",
    coverImage: kcsPublicImages.springConcert
  },
  { date: "May 2", title: "AP Exams Begin", time: "8:00 AM", location: "Testing Center", type: "academic", liveStreamEnabled: false },
  {
    date: "May 10",
    title: "Annual Sports Day",
    time: "8:00 AM",
    location: "Main Field",
    type: "sports",
    liveStreamEnabled: true,
    liveStreamStatus: "scheduled",
    liveStreamPlatform: "KCS Live",
    liveStreamUrl: "https://www.youtube.com/@kinshasachristianschool",
    coverImage: kcsPublicImages.brazzavilleTrip
  },
  { date: "May 20", title: "Parent-Teacher Conference", time: "1:00 PM", location: "Classrooms", type: "academic", liveStreamEnabled: true, liveStreamStatus: "scheduled", liveStreamPlatform: "Zoom Webinar", liveStreamUrl: "https://zoom.us/" },
  { date: "Jun 5", title: "Baccalaureate Service", time: "10:00 AM", location: "School Chapel", type: "spiritual", liveStreamEnabled: true, liveStreamStatus: "scheduled", liveStreamPlatform: "YouTube Live", liveStreamUrl: "https://www.youtube.com/@kinshasachristianschool" },
  { date: "Jun 8", title: "Graduation Ceremony 2026", time: "4:00 PM", location: "KCS Auditorium", type: "academic", liveStreamEnabled: true, liveStreamStatus: "scheduled", liveStreamPlatform: "YouTube Live", liveStreamUrl: "https://www.youtube.com/@kinshasachristianschool" }
];
const liveBroadcasts = upcomingEvents.filter((event) => event.liveStreamEnabled);
const categories = ["all", "news", "event", "announcement", "achievement"];
const categoryColors = {
  all: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  news: "bg-kcs-blue-100 text-kcs-blue-700 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-300",
  event: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  announcement: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  achievement: "bg-kcs-gold-100 text-kcs-gold-700 dark:bg-kcs-gold-900/40 dark:text-kcs-gold-300"
};
const eventTypeColors = {
  cultural: "bg-pink-100 text-pink-700",
  academic: "bg-kcs-blue-100 text-kcs-blue-700",
  sports: "bg-green-100 text-green-700",
  spiritual: "bg-purple-100 text-purple-700"
};
const liveStatusColors = {
  live: "bg-red-600 text-white",
  scheduled: "bg-kcs-gold-400 text-kcs-blue-950",
  ended: "bg-gray-700 text-white",
  cancelled: "bg-gray-200 text-gray-700"
};
const NewsPage = () => {
  const [activeCategory, setActiveCategory] = reactExports.useState("all");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const filtered = allPosts.filter((p) => {
    const matchCategory = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });
  const featured = allPosts[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-20 kcs-gradient overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dots-bg opacity-10", style: { backgroundSize: "40px 40px" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container-custom text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl font-bold font-display text-white mb-4", children: [
          "News &",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Events" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-100 text-lg max-w-xl mx-auto", children: "Stay connected with the latest happenings, achievements, and upcoming events at KCS." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-gray-50 dark:bg-kcs-blue-950/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        variants: fadeUp,
        className: "relative rounded-3xl overflow-hidden shadow-kcs-lg group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: featured.image,
              alt: featured.title,
              className: "w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-kcs-blue-950 via-kcs-blue-950/50 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `badge-gold mb-3 inline-block capitalize`, children: featured.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-white mb-2 leading-tight", children: featured.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-100 mb-4 max-w-2xl line-clamp-2", children: featured.excerpt }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-kcs-blue-200 text-sm flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }),
                " ",
                featured.date
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-kcs-blue-200 text-sm flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14 }),
                " ",
                featured.readTime
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/news/${featured.id}`, className: "ml-auto flex items-center gap-2 btn-gold text-sm py-2 px-5", children: [
                "Read Full Story ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
              ] })
            ] })
          ] })
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-white dark:bg-kcs-blue-950", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimSection, { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "badge-gold mb-3 inline-flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { size: 14 }),
              " Live Broadcasts"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-kcs-blue-900 dark:text-white", children: "Watch KCS Events Live" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-400", children: "Families can join school ceremonies, arts showcases, sports days, chapel services, and selected meetings from anywhere." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex w-fit items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 dark:bg-red-900/20 dark:text-red-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-red-500 animate-pulse" }),
            liveBroadcasts.filter((event) => event.liveStreamStatus === "live").length || 1,
            " active channel"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-3", children: liveBroadcasts.slice(0, 3).map((event) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.article,
          {
            variants: fadeUp,
            className: "overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-kcs dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 overflow-hidden bg-kcs-blue-900", children: [
                event.coverImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: event.coverImage, alt: event.title, className: "h-full w-full object-cover", loading: "lazy" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { size: 42, className: "text-kcs-gold-300" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-kcs-blue-950/75 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 top-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-3 py-1 text-xs font-bold uppercase ${liveStatusColors[event.liveStreamStatus || "scheduled"]}`, children: event.liveStreamStatus === "live" ? "Live now" : event.liveStreamStatus }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 right-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-kcs-gold-300", children: event.liveStreamPlatform }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 line-clamp-1 font-display text-lg font-bold text-white", children: event.title })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 12 }),
                    " ",
                    event.date
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: event.time })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: event.liveStreamUrl,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "flex w-full items-center justify-center gap-2 rounded-xl bg-kcs-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-kcs-blue-800",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(PlayCircle, { size: 16 }),
                      event.liveStreamStatus === "live" ? "Watch live" : "Open stream"
                    ]
                  }
                )
              ] })
            ]
          },
          event.title
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SearchField, { wrapperClassName: "flex-1 max-w-md", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), placeholder: "Search news & events..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setActiveCategory(cat),
            className: `px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 capitalize ${activeCategory === cat ? "bg-kcs-blue-700 text-white shadow-kcs" : "bg-gray-100 dark:bg-kcs-blue-900/30 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-kcs-blue-800/50"}`,
            children: cat
          },
          cat
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimSection, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-5", children: filtered.slice(1).map((post) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.article,
            {
              variants: fadeUp,
              whileHover: { y: -5 },
              className: "bg-white dark:bg-kcs-blue-900/50 rounded-2xl overflow-hidden border border-gray-100 dark:border-kcs-blue-800 shadow-sm hover:shadow-kcs transition-all duration-300 group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: post.image,
                      alt: post.title,
                      className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                      loading: "lazy"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${categoryColors[post.category]}`, children: post.category }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 11 }),
                      " ",
                      post.date
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 11 }),
                      " ",
                      post.views.toLocaleString()
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white mb-2 line-clamp-2 text-sm leading-tight", children: post.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 dark:text-gray-400 text-xs line-clamp-2 mb-3", children: post.excerpt }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: `/news/${post.id}`,
                      className: "text-kcs-blue-600 dark:text-kcs-blue-400 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all",
                      children: [
                        "Read More ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
                      ]
                    }
                  )
                ] })
              ]
            },
            post.id
          )) }),
          filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 text-gray-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 40, className: "mx-auto mb-3 opacity-50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              'No results found for "',
              searchQuery,
              '"'
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 dark:bg-kcs-blue-900/50 rounded-2xl border border-gray-100 dark:border-kcs-blue-800 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 kcs-gradient", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-white flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 18, className: "text-kcs-gold-400" }),
            "Upcoming Events"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-gray-100 dark:divide-kcs-blue-800", children: upcomingEvents.map((event) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 hover:bg-white dark:hover:bg-kcs-blue-800/50 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center min-w-[40px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: event.date.split(" ")[0] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-kcs-blue-700 dark:text-kcs-blue-300 font-display leading-none", children: event.date.split(" ")[1] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white text-sm truncate", children: event.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                event.time,
                " · ",
                event.location
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex flex-wrap gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block text-xs px-2 py-0.5 rounded-full font-medium capitalize ${eventTypeColors[event.type] || "bg-gray-100 text-gray-700"}`, children: event.type }),
                event.liveStreamEnabled && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: event.liveStreamUrl,
                    target: "_blank",
                    rel: "noreferrer",
                    className: `inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold ${liveStatusColors[event.liveStreamStatus || "scheduled"]}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { size: 10 }),
                      event.liveStreamStatus === "live" ? "Live" : "Stream"
                    ]
                  }
                )
              ] })
            ] })
          ] }) }, event.title)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-gray-100 dark:border-kcs-blue-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full text-center text-sm text-kcs-blue-600 dark:text-kcs-blue-400 font-semibold flex items-center justify-center gap-1 hover:gap-2 transition-all", children: [
            "View Full Calendar ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
          ] }) })
        ] }) }) })
      ] })
    ] }) })
  ] });
};
export {
  NewsPage as default
};
