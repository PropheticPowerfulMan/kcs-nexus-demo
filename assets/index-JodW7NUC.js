import { j as jsxRuntimeExports, b as Bell, a1 as CheckCircle2, m as motion, r as Award, ah as MessageSquare, w as Calendar, ab as AlertCircle, ac as BarChart3, a2 as ChevronRight, P as Phone, h as Mail } from "./ui-Bam7IDm4.js";
import { u as useLocation, r as reactExports, L as Link } from "./vendor-Bh1Zu6gV.js";
import { b as useAuthStore, e as useUIStore } from "./index-QZ8_PQE4.js";
import { P as PortalSidebar } from "./PortalSidebar-BG40mUrr.js";
import { g as getLocalizedGreeting, a as getLocalizedPortalDate, P as PortalSectionPanel, S as SuggestionBox, c as announcements, j as aiSignals, s as students, k as attendance, e as assignments, f as events, m as feeAccounts, r as reportCards, i as internalThreads, n as aiRecommendations } from "./schoolEcosystem-DS0iF1Dm.js";
import { R as ResponsiveContainer, A as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, a as Area, b as RadarChart, P as PolarGrid, c as PolarAngleAxis, d as Radar } from "./charts-LyKxUR06.js";
import "./SearchField-CzMASTOO.js";
const children = [
  { id: "1", name: "Elise Kabongo", grade: "Grade 11", avatar: null, gpa: 3.9, attendance: 97, rank: 5 },
  { id: "2", name: "David Kabongo", grade: "Grade 8", avatar: null, gpa: 3.5, attendance: 94, rank: 12 }
];
const performanceHistory = [
  { month: "Sep", elise: 3.2, david: 3 },
  { month: "Oct", elise: 3.4, david: 3.2 },
  { month: "Nov", elise: 3.3, david: 3.1 },
  { month: "Dec", elise: 3.6, david: 3.4 },
  { month: "Jan", elise: 3.5, david: 3.3 },
  { month: "Feb", elise: 3.7, david: 3.6 },
  { month: "Mar", elise: 3.8, david: 3.5 },
  { month: "Apr", elise: 3.9, david: 3.5 }
];
const radarData = [
  { subject: "Math", elise: 92, david: 78 },
  { subject: "Science", elise: 95, david: 82 },
  { subject: "English", elise: 88, david: 75 },
  { subject: "History", elise: 85, david: 90 },
  { subject: "French", elise: 90, david: 72 },
  { subject: "Bible", elise: 97, david: 95 }
];
const recentGrades = [
  { child: "Elise", course: "AP Biology", assessment: "Lab Report", grade: 95, max: 100, date: "Apr 18" },
  { child: "Elise", course: "AP Calculus", assessment: "Quiz #7", grade: 89, max: 100, date: "Apr 17" },
  { child: "David", course: "Pre-Algebra", assessment: "Chapter Test", grade: 83, max: 100, date: "Apr 16" },
  { child: "Elise", course: "English Literature", assessment: "Essay Draft", grade: 91, max: 100, date: "Apr 15" },
  { child: "David", course: "World Geography", assessment: "Map Quiz", grade: 88, max: 100, date: "Apr 14" }
];
const upcomingEvents = [
  { date: "Apr 25", title: "Parent-Teacher Conferences", type: "meeting", desc: "Sign up for your slot online" },
  { date: "May 3", title: "AP Exams Begin (Elise)", type: "exam", desc: "AP Calculus, AP Biology" },
  { date: "May 12", title: "Spring Music Concert", type: "event", desc: "Gymnasium, 6 PM" },
  { date: "May 20", title: "End-of-Year Awards Ceremony", type: "event", desc: "All families invited" }
];
const teacherMessages = [
  {
    id: 1,
    teacher: "Mrs. Diallo",
    subject: "English Literature",
    message: "Elise's essay on The Great Gatsby was outstanding. She demonstrates strong critical thinking.",
    time: "2h ago",
    child: "Elise",
    read: false
  },
  {
    id: 2,
    teacher: "Mr. Belanger",
    subject: "AP Calculus",
    message: "David needs extra practice on fractions. I recommend 30 minutes daily with the AI Tutor.",
    time: "1d ago",
    child: "David",
    read: true
  },
  {
    id: 3,
    teacher: "Dr. Mukendi",
    subject: "AP Biology",
    message: "Elise is performing exceptionally well this semester. Consider entering her into the Science Fair.",
    time: "3d ago",
    child: "Elise",
    read: true
  }
];
const notifications = [
  { id: 1, type: "success", message: "Elise ranked #5 in her class — up from #7 last month!", time: "1h ago" },
  { id: 2, type: "info", message: "Parent-Teacher conferences registration opens tomorrow.", time: "4h ago" },
  { id: 3, type: "warning", message: "David's Math grade dropped below 80% — check with teacher.", time: "2d ago" }
];
const eventTypeColor = {
  meeting: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  exam: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  event: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
};
const getParentSegment = (pathname) => {
  const segment = pathname.split("/").filter(Boolean).at(-1);
  return !segment || segment === "parent" || segment === "dashboard" ? "dashboard" : segment;
};
const parentButton = "rounded-xl bg-kcs-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-kcs-blue-800";
const ParentSectionView = ({ segment, selectedChild }) => {
  const [bookedEvent, setBookedEvent] = reactExports.useState(null);
  const [messageSent, setMessageSent] = reactExports.useState(false);
  const [actionMessage, setActionMessage] = reactExports.useState("");
  const [paidInvoices, setPaidInvoices] = reactExports.useState([]);
  const childKey = selectedChild.name.split(" ")[0].toLowerCase();
  const childFirstName = selectedChild.name.split(" ")[0];
  if (segment === "performance" || segment === "grades") {
    const childReport = reportCards.find((card) => card.student.includes(childFirstName));
    const childGrades = recentGrades.filter((grade) => grade.child === childFirstName);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-3", children: [
        ["GPA", selectedChild.gpa.toFixed(1), "Semester average"],
        ["Attendance", `${selectedChild.attendance}%`, "Family visible"],
        ["Class Rank", `#${selectedChild.rank}`, selectedChild.grade]
      ].map(([label, value, sub]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-gray-400", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-4xl font-bold text-kcs-blue-900 dark:text-white", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: sub })
      ] }, label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1fr_0.9fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: [
              selectedChild.name,
              " Grades"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `${parentButton} w-full sm:w-auto`, onClick: () => setActionMessage(`${selectedChild.name}'s parent copy is ready to download.`), children: "Download parent copy" })
          ] }),
          actionMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-300", children: actionMessage }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-[620px] w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-left text-xs text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-gray-100 dark:border-kcs-blue-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 font-medium", children: "Course" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 font-medium", children: "Assessment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 text-right font-medium", children: "Grade" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 text-right font-medium", children: "Date" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-50 dark:divide-kcs-blue-800/50", children: (childGrades.length ? childGrades : recentGrades.filter((grade) => grade.child === "Elise")).map((grade) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 font-semibold text-kcs-blue-900 dark:text-white", children: grade.course }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-gray-500 dark:text-gray-400", children: grade.assessment }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 text-right font-bold text-kcs-blue-700 dark:text-kcs-blue-300", children: [
                grade.grade,
                "/",
                grade.max
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-right text-gray-500 dark:text-gray-400", children: grade.date })
            ] }, `${grade.course}-${grade.assessment}`)) })
          ] }) }),
          childReport && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 rounded-xl bg-kcs-blue-50 p-4 text-sm text-kcs-blue-800 dark:bg-kcs-blue-900/30 dark:text-kcs-blue-200", children: childReport.teacherComment })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Subject Balance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RadarChart, { data: radarData, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PolarGrid, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PolarAngleAxis, { dataKey: "subject", tick: { fontSize: 11, fill: "#64748b" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Radar, { dataKey: childKey, stroke: "#1d4ed8", fill: "#1d4ed8", fillOpacity: 0.22 })
          ] }) })
        ] })
      ] })
    ] });
  }
  if (segment === "messages") {
    const childMessages = teacherMessages.filter((message) => message.child === childFirstName);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[0.95fr_1.05fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Teacher Threads" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: (childMessages.length ? childMessages : teacherMessages).map((message) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: message.teacher }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-kcs-blue-600 dark:text-kcs-blue-300", children: message.subject })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300", children: message.message }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-gray-400", children: message.time })
        ] }, message.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Write to School" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Homeroom Teacher" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Academic Office" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Finance Office" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Discipline Office" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", value: `Regarding ${selectedChild.name}`, readOnly: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "min-h-36 rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Type parent message..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: parentButton, onClick: () => setMessageSent(true), children: "Send message" }),
          messageSent && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-300", children: "Message saved for school communication and parent history." })
        ] })
      ] })
    ] });
  }
  if (segment === "calendar") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4", children: upcomingEvents.map((event) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-kcs-blue-700 dark:text-kcs-blue-300", children: event.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2 py-1 text-xs font-semibold capitalize ${eventTypeColor[event.type]}`, children: event.type })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-semibold text-kcs-blue-900 dark:text-white", children: event.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-500 dark:text-gray-400", children: event.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-4 w-full rounded-xl border border-kcs-blue-200 px-4 py-2.5 text-sm font-semibold text-kcs-blue-700 hover:bg-kcs-blue-50 dark:border-kcs-blue-700 dark:text-kcs-blue-200 dark:hover:bg-kcs-blue-800", onClick: () => setBookedEvent(event.title), children: bookedEvent === event.title ? "Added to family plan" : "Add / book" })
    ] }, event.title)) });
  }
  if (segment === "finance") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-3", children: feeAccounts.filter((fee) => fee.family === "Kabongo Family").map((fee) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-gray-400", children: fee.invoice }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 font-display text-3xl font-bold text-kcs-blue-900 dark:text-white", children: [
          "$",
          paidInvoices.includes(fee.invoice) ? 0 : fee.balance
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
          fee.student,
          " - due ",
          fee.dueDate
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "mt-4 w-full rounded-xl bg-kcs-gold-500 px-4 py-2.5 text-sm font-bold text-kcs-blue-950 hover:bg-kcs-gold-400",
            onClick: () => {
              setPaidInvoices((items) => items.includes(fee.invoice) ? items : [...items, fee.invoice]);
              setActionMessage(`${fee.invoice} receipt prepared for ${fee.student}.`);
            },
            children: paidInvoices.includes(fee.invoice) ? "Receipt ready" : "Pay / receipt"
          }
        )
      ] }, fee.invoice)) }),
      actionMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-300", children: actionMessage })
    ] });
  }
  if (segment === "profile") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[0.8fr_1.2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: "Kabongo Family" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-600 dark:text-gray-300", children: "Parent portal for Rachel Kabongo, guardian contacts, children, school documents, and communication preferences." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-col gap-2 sm:flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "rounded-xl bg-kcs-blue-700 px-4 py-2.5 text-center text-sm font-semibold text-white", href: "mailto:rachel.kabongo@family.kcs.test", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "rounded-xl border border-gray-200 px-4 py-2.5 text-center text-sm font-semibold text-kcs-blue-700 dark:border-kcs-blue-700 dark:text-kcs-blue-200", href: "tel:+243810000001", children: "Call" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Children & Documents" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: children.map((child) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: child.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
            child.grade,
            " - GPA ",
            child.gpa
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-gray-500 dark:text-gray-400", children: "Documents: report card, transcript request, medical form" })
        ] }, child.id)) })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalSectionPanel, {});
};
const ParentPortal = () => {
  var _a;
  const { user } = useAuthStore();
  const { language } = useUIStore();
  const location = useLocation();
  const activeSegment = getParentSegment(location.pathname);
  const [selectedChild, setSelectedChild] = reactExports.useState(children[0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "portal-shell flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PortalSidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "portal-dashboard-topbar sticky top-0 z-20 border-b px-4 py-3 backdrop-blur-2xl sm:px-6 sm:py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "portal-dashboard-title font-display text-xl font-bold leading-tight sm:text-2xl", children: [
            getLocalizedGreeting(language),
            ", ",
            user == null ? void 0 : user.firstName,
            "!"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-medium text-kcs-blue-700 dark:text-kcs-blue-100", children: getLocalizedPortalDate(language) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col gap-2 sm:flex-row sm:items-center lg:w-auto lg:gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full overflow-hidden rounded-xl border border-gray-200 dark:border-kcs-blue-700 sm:w-auto", children: children.map((child) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setSelectedChild(child),
              className: `flex-1 px-4 py-2 text-sm font-medium transition-colors sm:flex-none ${selectedChild.id === child.id ? "kcs-gradient text-white" : "bg-white dark:bg-kcs-blue-900 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-kcs-blue-800"}`,
              children: child.name.split(" ")[0]
            },
            child.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "rounded-xl bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-kcs-blue-800 dark:text-gray-300 dark:hover:bg-kcs-blue-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 18 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full" })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 sm:p-6 space-y-6", children: activeSegment !== "dashboard" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ParentSectionView, { segment: activeSegment, selectedChild }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PortalSectionPanel, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SuggestionBox, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-3 font-bold text-kcs-blue-900 dark:text-white", children: "School Information" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: announcements.filter((item) => item.audience.includes("parent")).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-kcs-blue-900 dark:text-white", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                item.date,
                " • ",
                item.priority,
                " priority"
              ] })
            ] }, item.id)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-3 font-bold text-kcs-blue-900 dark:text-white", children: "Parent Responsibilities" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 text-sm", children: ["Confirm David math intervention message", "Review updated parent rights and duties", "Upload medical form before May 1", "Book parent-teacher conference slot"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 rounded-xl bg-gray-50 p-3 text-gray-700 dark:bg-kcs-blue-800/30 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 15, className: "mt-0.5 text-kcs-gold-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
            ] }, item)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-3 font-bold text-kcs-blue-900 dark:text-white", children: "Parent AI Assistant" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-relaxed text-gray-600 dark:text-gray-300", children: [
              "Ask about policies, schedules, grades, attendance, and how to support each child at home. Current AI focus: ",
              (_a = aiSignals.find((signal) => signal.roles.includes("parent"))) == null ? void 0 : _a.detail
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-4 w-full rounded-xl bg-kcs-blue-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-kcs-blue-800", children: "Ask Parent AI" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            className: "bg-gradient-to-r from-kcs-blue-900 to-kcs-blue-700 rounded-2xl p-6 text-white",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-2xl font-bold", children: selectedChild.name.split(" ").map((n) => n[0]).join("") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display", children: selectedChild.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-kcs-blue-200", children: [
                    selectedChild.grade,
                    " · KCS Kinshasa"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-kcs-gold-400", children: selectedChild.gpa.toFixed(1) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-kcs-blue-200", children: "GPA" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-green-400", children: [
                    selectedChild.attendance,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-kcs-blue-200", children: "Attendance" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-white", children: [
                    "#",
                    selectedChild.rank
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-kcs-blue-200", children: "Class Rank" })
                ] })
              ] })
            ] })
          },
          selectedChild.id
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
          { label: "Current GPA", value: selectedChild.gpa.toFixed(1), icon: Award, color: "text-kcs-gold-600", bg: "bg-kcs-gold-50 dark:bg-kcs-gold-900/20", sub: "Semester Average" },
          { label: "Attendance Rate", value: `${selectedChild.attendance}%`, icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50 dark:bg-green-900/20", sub: "2 absences this year" },
          { label: "Unread Messages", value: "1", icon: MessageSquare, color: "text-purple-600", bg: "bg-purple-50 dark:bg-purple-900/20", sub: "From teachers" },
          { label: "Upcoming Events", value: "4", icon: Calendar, color: "text-orange-600", bg: "bg-orange-50 dark:bg-orange-900/20", sub: "Next 30 days" }
        ].map(({ label, value, icon: Icon, color, bg, sub }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            className: "bg-white dark:bg-kcs-blue-900/50 rounded-2xl p-5 border border-gray-100 dark:border-kcs-blue-800 hover:shadow-kcs transition-all duration-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 ${bg} rounded-xl flex items-center justify-center mb-3`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, className: color }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold font-display text-kcs-blue-900 dark:text-white", children: value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-gray-600 dark:text-gray-300", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 dark:text-gray-500 mt-0.5", children: sub })
            ]
          },
          label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Live Child Records" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: students.filter((student) => student.parentId === "parent-kabongo").map((student) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: student.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                  student.grade,
                  " ",
                  student.section
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-gray-600 dark:text-gray-300", children: student.aiInsight })
            ] }, student.id)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Attendance Updates" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: attendance.map((record) => {
              const student = students.find((item) => item.id === record.studentId);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-kcs-blue-900 dark:text-white", children: student == null ? void 0 : student.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                    record.date,
                    " • ",
                    record.className
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-kcs-blue-50 px-2.5 py-1 text-xs font-semibold capitalize text-kcs-blue-700 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-300", children: record.status })
              ] }, `${record.studentId}-${record.date}`);
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Upcoming Work & Events" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [...assignments.filter((item) => item.status !== "submitted").slice(0, 3), ...events.filter((item) => item.target.includes("parent")).slice(0, 2)].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-kcs-blue-900 dark:text-white", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                item.due ?? item.date,
                " • ",
                item.subject ?? item.type
              ] })
            ] }, item.id ?? item.title)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Fee Obligations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: feeAccounts.filter((fee) => fee.family === "Kabongo Family").map((fee) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: fee.student }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                  fee.invoice,
                  " • due ",
                  fee.dueDate
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `rounded-full px-2.5 py-1 text-xs font-semibold ${fee.balance === 0 ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"}`, children: [
                "$",
                fee.balance
              ] })
            ] }) }, fee.invoice)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Report Cards" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: reportCards.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: card.student }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-kcs-blue-700 dark:text-kcs-blue-300", children: [
                  card.average,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: [
                card.term,
                " • ",
                card.principalStatus,
                " • ",
                card.download
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300", children: card.teacherComment })
            ] }, card.student)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Private Communication" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              internalThreads.filter((thread) => thread.participants.includes("Rachel Kabongo")).map((thread) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: thread.subject }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-kcs-blue-100 px-2 py-1 text-xs font-semibold text-kcs-blue-700 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-300", children: [
                    thread.unread,
                    " unread"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: thread.channel })
              ] }, thread.subject)),
              aiRecommendations.filter((item) => item.owner === "Parent").map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-kcs-gold-200 bg-kcs-gold-50 p-4 dark:border-kcs-gold-900/40 dark:bg-kcs-gold-900/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-kcs-blue-900 dark:text-white", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-600 dark:text-gray-300", children: item.action })
              ] }, item.title))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 bg-white dark:bg-kcs-blue-900/50 rounded-2xl p-6 border border-gray-100 dark:border-kcs-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "GPA Comparison — Both Children" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-blue text-xs", children: "2025/26 School Year" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: performanceHistory, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "eliseGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: "#1d4ed8", stopOpacity: 0.2 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: "#1d4ed8", stopOpacity: 0 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "davidGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: "#f59e0b", stopOpacity: 0.2 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: "#f59e0b", stopOpacity: 0 })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "rgba(30,58,138,0.1)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", tick: { fontSize: 11, fill: "#94a3b8" }, axisLine: false, tickLine: false }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { domain: [2.5, 4], tick: { fontSize: 11, fill: "#94a3b8" }, axisLine: false, tickLine: false }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { background: "#0f2352", border: "none", borderRadius: "12px", color: "#fff", fontSize: "12px" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "elise", name: "Elise", stroke: "#1d4ed8", strokeWidth: 2.5, fill: "url(#eliseGrad)", dot: { r: 3, fill: "#1d4ed8" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "david", name: "David", stroke: "#f59e0b", strokeWidth: 2.5, fill: "url(#davidGrad)", dot: { r: 3, fill: "#f59e0b" } })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 mt-3 justify-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-1.5 bg-kcs-blue-600 rounded-full inline-block" }),
                " Elise"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-1.5 bg-kcs-gold-500 rounded-full inline-block" }),
                " David"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-kcs-blue-900/50 rounded-2xl p-5 border border-gray-100 dark:border-kcs-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-kcs-blue-900 dark:text-white mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 18, className: "text-kcs-gold-500" }),
              " Notifications"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: notifications.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 p-3 rounded-xl bg-gray-50 dark:bg-kcs-blue-800/50", children: [
              n.type === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 18, className: "text-green-500 flex-shrink-0 mt-0.5" }),
              n.type === "info" && /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 18, className: "text-kcs-blue-500 flex-shrink-0 mt-0.5" }),
              n.type === "warning" && /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 18, className: "text-yellow-500 flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-700 dark:text-gray-300", children: n.message }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-0.5", children: n.time })
              ] })
            ] }, n.id)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-kcs-blue-900/50 rounded-2xl p-6 border border-gray-100 dark:border-kcs-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-kcs-blue-900 dark:text-white flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BarChart3, { size: 18, className: "text-kcs-blue-600 dark:text-kcs-blue-400" }),
                " Recent Grades"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portal/parent/grades", className: "text-xs text-kcs-blue-600 dark:text-kcs-blue-400 font-semibold flex items-center gap-1 hover:gap-1.5", children: [
                "View All ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-xs text-gray-400 dark:text-gray-500 border-b border-gray-100 dark:border-kcs-blue-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 text-left font-medium", children: "Student" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 text-left font-medium", children: "Course" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 text-left font-medium", children: "Assessment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 text-right font-medium", children: "Grade" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 text-right font-medium", children: "Date" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-50 dark:divide-kcs-blue-800/50", children: recentGrades.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-kcs-blue-800/30 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-semibold px-2 py-0.5 rounded-full ${g.child === "Elise" ? "bg-kcs-blue-100 text-kcs-blue-700 dark:bg-kcs-blue-900/30" : "bg-kcs-gold-100 text-kcs-gold-700 dark:bg-kcs-gold-900/30"}`, children: g.child }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-gray-600 dark:text-gray-400", children: g.course }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-gray-500 dark:text-gray-500 text-xs", children: g.assessment }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-bold ${g.grade >= 90 ? "text-green-600 dark:text-green-400" : g.grade >= 80 ? "text-kcs-blue-600 dark:text-kcs-blue-400" : "text-yellow-600 dark:text-yellow-400"}`, children: [
                  g.grade,
                  "%"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-right text-xs text-gray-400", children: g.date })
              ] }, i)) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-kcs-blue-900/50 rounded-2xl p-6 border border-gray-100 dark:border-kcs-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-kcs-blue-900 dark:text-white flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 18, className: "text-purple-500" }),
                " Teacher Messages"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portal/parent/messages", className: "text-xs text-kcs-blue-600 dark:text-kcs-blue-400 font-semibold flex items-center gap-1 hover:gap-1.5", children: [
                "All Messages ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: teacherMessages.map((msg) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `p-4 rounded-xl border transition-all ${!msg.read ? "border-kcs-blue-200 dark:border-kcs-blue-600 bg-kcs-blue-50 dark:bg-kcs-blue-800/30" : "border-gray-100 dark:border-kcs-blue-800 bg-gray-50 dark:bg-kcs-blue-800/10"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm text-kcs-blue-900 dark:text-white", children: msg.teacher }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1.5 text-gray-300 dark:text-gray-600", children: "·" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: msg.subject })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-semibold px-2 py-0.5 rounded-full ${msg.child === "Elise" ? "bg-kcs-blue-100 text-kcs-blue-700 dark:bg-kcs-blue-900/30" : "bg-kcs-gold-100 text-kcs-gold-700 dark:bg-kcs-gold-900/30"}`, children: msg.child }),
                      !msg.read && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-kcs-blue-600 rounded-full" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 dark:text-gray-300 leading-relaxed", children: msg.message }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-1.5", children: msg.time })
                ]
              },
              msg.id
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-kcs-blue-900/50 rounded-2xl p-6 border border-gray-100 dark:border-kcs-blue-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-kcs-blue-900 dark:text-white flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 18, className: "text-orange-500" }),
              " Upcoming Events"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portal/parent/calendar", className: "text-xs text-kcs-blue-600 dark:text-kcs-blue-400 font-semibold flex items-center gap-1 hover:gap-1.5", children: [
              "Full Calendar ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: upcomingEvents.map((event, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-4 rounded-xl border border-gray-100 dark:border-kcs-blue-800 bg-gray-50 dark:bg-kcs-blue-800/20 hover:shadow-md transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-kcs-blue-600 dark:text-kcs-blue-400", children: event.date }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-0.5 rounded-full font-medium capitalize ${eventTypeColor[event.type]}`, children: event.type })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-kcs-blue-900 dark:text-white mb-1", children: event.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: event.desc })
              ]
            },
            i
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-kcs-blue-50 to-kcs-gold-50 dark:from-kcs-blue-900/30 dark:to-kcs-blue-900/20 rounded-2xl p-6 border border-kcs-blue-100 dark:border-kcs-blue-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white mb-4", children: "Quick Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-4", children: [
            { label: "School Office", phone: "+243 81 000 0000", email: "office@kcskinshasa.com", icon: "🏫" },
            { label: "Elise's Counselor", phone: "+243 81 000 0001", email: "counselor@kcskinshasa.com", icon: "👩‍🏫" },
            { label: "IT Support", phone: "+243 81 000 0002", email: "support@kcskinshasa.com", icon: "💻" }
          ].map(({ label, phone, email, icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-kcs-blue-900/50 p-4 rounded-xl border border-gray-100 dark:border-kcs-blue-800 flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-kcs-blue-900 dark:text-white", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${phone}`, className: "flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-kcs-blue-600 mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 11 }),
                " ",
                phone
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${email}`, className: "flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-kcs-blue-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 11 }),
                " ",
                email
              ] })
            ] })
          ] }, label)) })
        ] })
      ] }) })
    ] })
  ] });
};
export {
  ParentPortal as default
};
