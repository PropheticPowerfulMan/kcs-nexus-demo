import { j as jsxRuntimeExports, aq as Megaphone, aa as Brain, U as Users, ah as MessageSquare, $ as ClipboardList, a6 as ShieldCheck, m as motion, a0 as FileText, b as Bell, ak as AlertTriangle, T as TrendingUp } from "./ui-Bam7IDm4.js";
import { u as useLocation, L as Link, r as reactExports } from "./vendor-Bh1Zu6gV.js";
import { P as PortalSidebar } from "./PortalSidebar-BG40mUrr.js";
import { q as messages, j as aiSignals, g as getLocalizedGreeting, b as academicContext, a as getLocalizedPortalDate, P as PortalSectionPanel, S as SuggestionBox, v as staffOperations, c as announcements, m as feeAccounts, r as reportCards, w as scheduleConflicts, x as communicationFlows, y as financeReadiness, z as rolePermissions, A as auditLogs, s as students, p as disciplineReports } from "./schoolEcosystem-DS0iF1Dm.js";
import { b as useAuthStore, e as useUIStore } from "./index-QZ8_PQE4.js";
import { R as ResponsiveContainer, B as BarChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, e as Bar } from "./charts-LyKxUR06.js";
import "./SearchField-CzMASTOO.js";
const attendanceSummary = [
  { label: "Elementary", attendance: 96 },
  { label: "Middle", attendance: 91 },
  { label: "High", attendance: 94 },
  { label: "Staff", attendance: 98 }
];
const getStaffSegment = (pathname) => {
  const segment = pathname.split("/").filter(Boolean).at(-1);
  return !segment || segment === "staff" || segment === "dashboard" ? "dashboard" : segment;
};
const staffButton = "rounded-xl bg-kcs-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-kcs-blue-800";
const statusTone = (value) => {
  if (["Open", "pending", "Action needed", "high"].includes(value)) return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";
  if (["Monitored", "partially paid", "medium", "Needs review"].includes(value)) return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";
  return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
};
const StaffSectionView = ({ segment }) => {
  const [selectedRecord, setSelectedRecord] = reactExports.useState(students[0]);
  const [announcementSent, setAnnouncementSent] = reactExports.useState(false);
  const [messageSent, setMessageSent] = reactExports.useState(false);
  if (segment === "records") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1.05fr_0.95fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Student & Parent Records" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Search, review, and update official family records." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: staffButton, children: "Register student" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-[720px] w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-left text-xs text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-gray-100 dark:border-kcs-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 font-medium", children: "Student" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 font-medium", children: "Grade" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 font-medium", children: "Advisor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 text-right font-medium", children: "Attendance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 text-right font-medium", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-50 dark:divide-kcs-blue-800/50", children: students.map((student) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 font-semibold text-kcs-blue-900 dark:text-white", children: student.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 text-gray-500 dark:text-gray-400", children: [
              student.grade,
              " ",
              student.section
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-gray-500 dark:text-gray-400", children: student.advisor }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 text-right font-bold text-kcs-blue-700 dark:text-kcs-blue-300", children: [
              student.attendance,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-lg bg-kcs-blue-50 px-3 py-1.5 text-xs font-semibold text-kcs-blue-700 hover:bg-kcs-blue-100 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-200", onClick: () => setSelectedRecord(student), children: "Open" }) })
          ] }, student.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Selected Record" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: selectedRecord.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
            selectedRecord.grade,
            " ",
            selectedRecord.section,
            " - ",
            selectedRecord.advisor
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300", children: selectedRecord.aiInsight })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-3 sm:grid-cols-2", children: ["Parent contacts", "Medical form", "Academic flags", "Documents"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-xl border border-gray-100 px-4 py-3 text-left text-sm font-semibold text-kcs-blue-900 hover:bg-kcs-blue-50 dark:border-kcs-blue-800 dark:text-white dark:hover:bg-kcs-blue-800", children: item }, item)) })
      ] })
    ] });
  }
  if (segment === "admissions") {
    const admissionQueue = [
      { family: "Mbuyi Family", student: "Amani Mbuyi", grade: "Grade 9", stage: "Interview scheduled", owner: "Registrar Office" },
      { family: "Nsimba Family", student: "Joelle Nsimba", grade: "Grade 6", stage: "Documents pending", owner: "Admissions Office" },
      { family: "Kanku Family", student: "Samuel Kanku", grade: "Grade 10", stage: "Placement review", owner: "Academic Coordinator" }
    ];
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 lg:grid-cols-3", children: admissionQueue.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-gray-400", children: item.family }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-xl font-bold text-kcs-blue-900 dark:text-white", children: item.student }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: [
        item.grade,
        " - ",
        item.owner
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-4 inline-flex rounded-full bg-kcs-blue-100 px-3 py-1 text-xs font-semibold text-kcs-blue-700 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-300", children: item.stage }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: staffButton, children: "Update stage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-kcs-blue-700 hover:bg-kcs-blue-50 dark:border-kcs-blue-700 dark:text-kcs-blue-200 dark:hover:bg-kcs-blue-800", children: "Schedule interview" })
      ] })
    ] }, item.student)) });
  }
  if (segment === "announcements") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[0.85fr_1.15fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Recent Announcements" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: announcements.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
            item.date,
            " - ",
            item.audience.join(", ")
          ] })
        ] }, item.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Compose Announcement" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Announcement title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Parents, students, teachers, staff" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Parents only" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Staff only" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "High School" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "min-h-36 rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Write announcement..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: staffButton, onClick: () => setAnnouncementSent(true), children: "Publish announcement" }),
          announcementSent && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-300", children: "Announcement queued for portal, email, and SMS communication." })
        ] })
      ] })
    ] });
  }
  if (segment === "reports") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50 xl:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Report Card Workflow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2", children: reportCards.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: card.student }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2 py-1 text-xs font-semibold ${statusTone(card.principalStatus)}`, children: card.principalStatus })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-gray-500 dark:text-gray-400", children: [
            card.term,
            " - ",
            card.average,
            "% - ",
            card.download
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-3 rounded-xl bg-kcs-blue-700 px-4 py-2 text-sm font-semibold text-white", children: "Export report" })
        ] }, card.student)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "AI Reports" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ["Attendance risk digest", "Discipline summary", "Finance follow-up CSV", "Academic intervention list"].map((report) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-left text-sm font-semibold text-kcs-blue-900 hover:bg-kcs-blue-50 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30 dark:text-white dark:hover:bg-kcs-blue-800", children: report }, report)) })
      ] })
    ] });
  }
  if (segment === "finance") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: feeAccounts.map((fee) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: fee.family }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-xs font-semibold ${statusTone(fee.status)}`, children: fee.status })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 font-display text-3xl font-bold text-kcs-blue-900 dark:text-white", children: [
        "$",
        fee.balance
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
        fee.student,
        " - ",
        fee.invoice
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-4 w-full rounded-xl bg-kcs-gold-500 px-4 py-2.5 text-sm font-bold text-kcs-blue-950 hover:bg-kcs-gold-400", children: "Send finance notice" })
    ] }, fee.invoice)) });
  }
  if (segment === "messages") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[0.9fr_1.1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Staff Inbox" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: messages.map((message) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: message.subject }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
            message.from,
            " - ",
            message.toRole
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-600 dark:text-gray-300", children: message.body })
        ] }, message.subject)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Send Communication" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "All parents" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Selected student family" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "All teachers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Staff team" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Subject" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "min-h-36 rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Email, SMS, and portal message..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: staffButton, onClick: () => setMessageSent(true), children: "Send communication" }),
          messageSent && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-300", children: "Communication prepared for portal, email, and SMS channels." })
        ] })
      ] })
    ] });
  }
  if (segment === "permissions") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[0.8fr_1.2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Staff Permissions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: rolePermissions.staff.map((permission) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-kcs-blue-50 px-3 py-1 text-xs font-semibold text-kcs-blue-700 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-300", children: permission }, permission)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Audit Log" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: auditLogs.map((log) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: log.action }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
            log.actor,
            " - ",
            log.target,
            " - ",
            log.time
          ] })
        ] }, `${log.actor}-${log.time}`)) })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2", children: disciplineReports.map((report) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: report.student }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-xs font-semibold ${statusTone(report.status)}`, children: report.status })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm font-semibold text-kcs-blue-700 dark:text-kcs-blue-300", children: [
      report.category,
      " - ",
      report.date
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-600 dark:text-gray-300", children: report.incident }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 rounded-xl bg-gray-50 p-3 text-xs text-gray-500 dark:bg-kcs-blue-800/30 dark:text-gray-400", children: report.actionTaken })
  ] }, report.id)) });
};
const StaffPortal = () => {
  const { user } = useAuthStore();
  const { language } = useUIStore();
  const location = useLocation();
  const activeSegment = getStaffSegment(location.pathname);
  const staffMessages = messages.filter((message) => message.toRole === "staff");
  const staffSignals = aiSignals.filter((signal) => signal.roles.includes("staff"));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "portal-shell flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PortalSidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "portal-dashboard-topbar sticky top-0 z-20 border-b px-4 py-3 backdrop-blur-2xl sm:px-6 sm:py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "portal-dashboard-title font-display text-xl font-bold leading-tight sm:text-2xl", children: [
            getLocalizedGreeting(language),
            ", ",
            user == null ? void 0 : user.firstName
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm font-medium text-kcs-blue-700 dark:text-kcs-blue-100", children: [
            getLocalizedPortalDate(language),
            " - ",
            academicContext.year,
            " - ",
            academicContext.term,
            " - records, communication, admissions, discipline, and reports."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portal/staff/announcements", className: "btn-primary flex items-center gap-2 py-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { size: 16 }),
            " Send Announcement"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portal/staff/reports", className: "btn-gold flex items-center gap-2 py-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 16 }),
            " AI Report"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 p-4 sm:p-6", children: activeSegment !== "dashboard" ? /* @__PURE__ */ jsxRuntimeExports.jsx(StaffSectionView, { segment: activeSegment }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PortalSectionPanel, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SuggestionBox, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 xl:grid-cols-4", children: [
          { label: "Student Records", value: "511", sub: "18 changed today", icon: Users, tone: "bg-kcs-blue-50 text-kcs-blue-700 dark:bg-kcs-blue-900/30 dark:text-kcs-blue-300" },
          { label: "Pending Messages", value: "12", sub: "Parents and staff", icon: MessageSquare, tone: "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" },
          { label: "Admissions Tasks", value: "9", sub: "3 interviews pending", icon: ClipboardList, tone: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" },
          { label: "Audit Items", value: "3", sub: "Sensitive changes", icon: ShieldCheck, tone: "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300" }
        ].map((item) => {
          const Icon = item.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 18 },
              animate: { opacity: 1, y: 0 },
              className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${item.tone}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: item.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-gray-600 dark:text-gray-300", children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-400 dark:text-gray-500", children: item.sub })
              ]
            },
            item.label
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1.2fr_0.8fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "School-wide Attendance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-blue text-xs", children: "Today" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: attendanceSummary, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "rgba(148,163,184,0.15)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "label", tick: { fontSize: 11, fill: "#94a3b8" }, axisLine: false, tickLine: false }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: { fontSize: 11, fill: "#94a3b8" }, axisLine: false, tickLine: false }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { background: "#0f2352", border: "none", borderRadius: "12px", color: "#fff", fontSize: "12px" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "attendance", fill: "#1d4ed8", radius: [8, 8, 0, 0] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-4 flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 18, className: "text-kcs-gold-500" }),
              " Staff AI Tools"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ["Generate official letter", "Draft targeted announcement", "Summarize discipline report", "Export attendance risk CSV"].map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-left text-sm font-semibold text-kcs-blue-900 transition-colors hover:bg-kcs-blue-50 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30 dark:text-white dark:hover:bg-kcs-blue-800", children: tool }, tool)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-4 flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 18, className: "text-kcs-blue-500" }),
              " Operational Workload"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: staffOperations.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: item.function }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-kcs-blue-700 dark:text-kcs-blue-300", children: item.value })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: item.metric }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs font-semibold text-kcs-gold-600 dark:text-kcs-gold-300", children: item.status })
            ] }, item.function)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-4 flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 18, className: "text-orange-500" }),
              " Targeted Announcements"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: announcements.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: [
                item.date,
                " • ",
                item.audience.join(", ")
              ] })
            ] }, item.id)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-4 flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertTriangle, { size: 18, className: "text-red-500" }),
              " AI Risk Signals"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: staffSignals.map((signal) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: signal.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300", children: signal.severity })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300", children: signal.detail })
            ] }, signal.title)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Fee Tracking" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: feeAccounts.map((fee) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: fee.family }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-xs font-semibold ${fee.status === "paid" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"}`, children: fee.status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: [
                fee.student,
                " • balance $",
                fee.balance,
                " • ",
                fee.invoice
              ] })
            ] }, fee.invoice)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Report Card Workflow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: reportCards.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: card.student }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-kcs-blue-600 dark:text-kcs-blue-300", children: card.principalStatus })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: [
                card.term,
                " • ",
                card.download
              ] })
            ] }, card.student)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Schedule Conflicts" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: scheduleConflicts.map((conflict) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: conflict.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-300", children: conflict.severity })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300", children: conflict.detail })
            ] }, conflict.title)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1.2fr_0.8fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Cross-module Notifications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2", children: communicationFlows.map((flow) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: flow.trigger }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-600 dark:text-gray-300", children: flow.update }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs font-semibold text-kcs-gold-600 dark:text-kcs-gold-300", children: flow.notification })
            ] }, flow.trigger)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Payment Integration Readiness" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: financeReadiness.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: item.feature }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-300", children: item.status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-gray-500 dark:text-gray-400", children: item.note })
            ] }, item.feature)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-4 flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 18, className: "text-purple-500" }),
              " Messages Requiring Action"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: staffMessages.map((message) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: message.subject }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: message.from }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-700 dark:text-gray-300", children: message.body })
            ] }, message.subject)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-4 flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 18, className: "text-green-500" }),
              " Permissions & Audit"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex flex-wrap gap-2", children: rolePermissions.staff.map((permission) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-kcs-blue-50 px-3 py-1 text-xs font-semibold text-kcs-blue-700 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-300", children: permission }, permission)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: auditLogs.map((log) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-xl bg-gray-50 p-3 text-sm dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 15, className: "mt-0.5 text-kcs-gold-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: log.action }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                  log.actor,
                  " • ",
                  log.target,
                  " • ",
                  log.time
                ] })
              ] })
            ] }, `${log.actor}-${log.time}`)) })
          ] })
        ] })
      ] }) })
    ] })
  ] });
};
export {
  StaffPortal as default
};
