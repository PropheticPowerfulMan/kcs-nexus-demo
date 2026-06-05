import { j as jsxRuntimeExports, aa as Brain, b as Bell, r as Award, a1 as CheckCircle2, a0 as FileText, T as TrendingUp, m as motion, ab as AlertCircle, ac as BarChart3, a2 as ChevronRight, C as Clock, w as Calendar } from "./ui-Bam7IDm4.js";
import { u as useLocation, r as reactExports, L as Link } from "./vendor-Bh1Zu6gV.js";
import { b as useAuthStore, e as useUIStore } from "./index-QZ8_PQE4.js";
import { P as PortalSidebar } from "./PortalSidebar-BG40mUrr.js";
import { g as getLocalizedGreeting, a as getLocalizedPortalDate, P as PortalSectionPanel, S as SuggestionBox, s as students, b as academicContext, c as announcements, d as grades, e as assignments$1, f as events, r as reportCards, t as transcripts, l as lmsResources, i as internalThreads, h as attendanceAnalytics } from "./schoolEcosystem-DS0iF1Dm.js";
import { R as ResponsiveContainer, A as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, a as Area } from "./charts-LyKxUR06.js";
import "./SearchField-CzMASTOO.js";
const performanceData = [
  { month: "Sep", gpa: 3.2 },
  { month: "Oct", gpa: 3.4 },
  { month: "Nov", gpa: 3.3 },
  { month: "Dec", gpa: 3.6 },
  { month: "Jan", gpa: 3.5 },
  { month: "Feb", gpa: 3.7 },
  { month: "Mar", gpa: 3.8 },
  { month: "Apr", gpa: 3.9 }
];
const subjectGrades = [
  { subject: "Math", grade: 92, letter: "A-" },
  { subject: "English", grade: 88, letter: "B+" },
  { subject: "Science", grade: 95, letter: "A" },
  { subject: "History", grade: 85, letter: "B" },
  { subject: "French", grade: 90, letter: "A-" },
  { subject: "Bible", grade: 97, letter: "A+" }
];
const assignments = [
  { id: 1, title: "AP Calculus Problem Set #8", course: "Mathematics", due: "Tomorrow, 11:59 PM", status: "pending", priority: "high" },
  { id: 2, title: "Essay: The Congo Independence Movement", course: "History", due: "Apr 25, 11:59 PM", status: "pending", priority: "medium" },
  { id: 3, title: "Science Lab Report — Photosynthesis", course: "Biology", due: "Apr 23", status: "submitted", priority: "low" },
  { id: 4, title: "French Oral Presentation", course: "French", due: "Apr 22", status: "graded", priority: "low" }
];
const schedule = [
  { time: "7:45 AM", subject: "Bible & Devotions", room: "Homeroom", teacher: "Mrs. Smith" },
  { time: "8:15 AM", subject: "AP Calculus", room: "Room 204", teacher: "Mr. Belanger" },
  { time: "9:15 AM", subject: "English Literature", room: "Room 110", teacher: "Mrs. Diallo" },
  { time: "10:15 AM", subject: "AP Biology", room: "Lab 3", teacher: "Dr. Mukendi" },
  { time: "11:30 AM", subject: "Lunch Break", room: "Cafeteria", teacher: "" },
  { time: "12:30 PM", subject: "World History", room: "Room 305", teacher: "Mr. Rivera" },
  { time: "1:30 PM", subject: "French Language", room: "Room 108", teacher: "Mrs. Nkosi" },
  { time: "2:30 PM", subject: "Free Study / AI Tutor", room: "Library", teacher: "" }
];
const notifications = [
  { id: 1, type: "warning", message: "AP Calculus exam scheduled for May 3rd — 2 weeks away", time: "2h ago" },
  { id: 2, type: "success", message: "French Oral Presentation graded: 90/100 — Excellent!", time: "5h ago" },
  { id: 3, type: "info", message: "Parent-Teacher Conference: May 20th, 1 PM — Parent notified", time: "1d ago" }
];
const statusColors = {
  pending: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  submitted: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  graded: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  late: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
};
const priorityColors = {
  high: "border-l-red-500",
  medium: "border-l-yellow-500",
  low: "border-l-green-500"
};
const getStudentSegment = (pathname) => {
  const segment = pathname.split("/").filter(Boolean).at(-1);
  return !segment || segment === "student" || segment === "dashboard" ? "dashboard" : segment;
};
const studentActionButton = "rounded-xl bg-kcs-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-kcs-blue-800 disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-kcs-blue-800";
const StudentSectionView = ({ segment }) => {
  const [localAssignments, setLocalAssignments] = reactExports.useState(assignments);
  const [messageSent, setMessageSent] = reactExports.useState(false);
  const [actionMessage, setActionMessage] = reactExports.useState("");
  if (segment === "grades") {
    const reportCard = reportCards.find((card) => card.student === "Elise Kabongo");
    const transcript = transcripts.find((item) => item.student === "Elise Kabongo");
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-gray-400", children: "Final Average" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 font-display text-4xl font-bold text-kcs-blue-900 dark:text-white", children: [
            (reportCard == null ? void 0 : reportCard.average) ?? 0,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-gray-600 dark:text-gray-300", children: [
            reportCard == null ? void 0 : reportCard.term,
            " - ",
            reportCard == null ? void 0 : reportCard.principalStatus
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-gray-400", children: "Transcript" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 font-display text-3xl font-bold text-kcs-blue-900 dark:text-white", children: [
            "GPA ",
            transcript == null ? void 0 : transcript.cumulativeGpa
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-gray-600 dark:text-gray-300", children: [
            transcript == null ? void 0 : transcript.credits,
            " credits - ",
            transcript == null ? void 0 : transcript.status
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-gray-400", children: "Teacher Comment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300", children: reportCard == null ? void 0 : reportCard.teacherComment })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1.1fr_0.9fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Current Grades" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `${studentActionButton} w-full sm:w-auto`, onClick: () => setActionMessage("Report card download prepared for your student file."), children: "Download report card" })
          ] }),
          actionMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-300", children: actionMessage }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-[620px] w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-left text-xs text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-gray-100 dark:border-kcs-blue-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 font-medium", children: "Subject" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 font-medium", children: "Latest assessment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 text-right font-medium", children: "Score" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 text-right font-medium", children: "Letter" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-50 dark:divide-kcs-blue-800/50", children: subjectGrades.map((grade) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 font-semibold text-kcs-blue-900 dark:text-white", children: grade.subject }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-gray-500 dark:text-gray-400", children: ((_a = grades.find((item) => item.subject.includes(grade.subject) || grade.subject.includes(item.subject))) == null ? void 0 : _a.assessment) ?? "Quarter grade" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 text-right font-bold text-kcs-blue-700 dark:text-kcs-blue-300", children: [
                  grade.grade,
                  "/100"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-300", children: grade.letter }) })
              ] }, grade.subject);
            }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "GPA Trend" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: performanceData, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "rgba(148,163,184,0.18)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", tick: { fontSize: 11, fill: "#94a3b8" }, axisLine: false, tickLine: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { domain: [2.5, 4], tick: { fontSize: 11, fill: "#94a3b8" }, axisLine: false, tickLine: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { background: "#0f2352", border: "none", borderRadius: "12px", color: "#fff", fontSize: "12px" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "gpa", stroke: "#1d4ed8", strokeWidth: 2.5, fill: "#dbeafe" })
          ] }) })
        ] })
      ] })
    ] });
  }
  if (segment === "assignments") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Assignment Center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Submit work, track deadlines, and keep teachers updated." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `${studentActionButton} w-full sm:w-auto`,
              onClick: () => {
                const nextAssignment = {
                  id: Date.now(),
                  title: "Uploaded student file",
                  course: "Teacher review",
                  due: "Submitted now",
                  status: "submitted",
                  priority: "low"
                };
                setLocalAssignments((items) => [nextAssignment, ...items]);
                setActionMessage("File uploaded and added to the assignment center for teacher review.");
              },
              children: "Upload new file"
            }
          )
        ] }),
        actionMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-300", children: actionMessage })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 lg:grid-cols-2", children: localAssignments.map((assignment) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50 border-l-4 ${priorityColors[assignment.priority]}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: assignment.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
              assignment.course,
              " - ",
              assignment.due
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-fit rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${statusColors[assignment.status]}`, children: assignment.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-col gap-2 sm:flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: studentActionButton,
              disabled: assignment.status === "submitted" || assignment.status === "graded",
              onClick: () => {
                setLocalAssignments((items) => items.map((item) => item.id === assignment.id ? { ...item, status: "submitted" } : item));
                setActionMessage(`${assignment.title} submitted successfully.`);
              },
              children: "Submit work"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-kcs-blue-700 transition-colors hover:bg-kcs-blue-50 dark:border-kcs-blue-700 dark:text-kcs-blue-200 dark:hover:bg-kcs-blue-800",
              onClick: () => {
                setLocalAssignments((items) => items.map((item) => item.id === assignment.id ? { ...item, status: "graded" } : item));
                setActionMessage(`${assignment.title} marked as reviewed.`);
              },
              children: "Mark reviewed"
            }
          )
        ] })
      ] }, assignment.id)) })
    ] });
  }
  if (segment === "timetable") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1fr_0.8fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Full Timetable" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: schedule.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl border p-4 ${index === 1 ? "border-kcs-blue-300 bg-kcs-blue-50 dark:border-kcs-blue-600 dark:bg-kcs-blue-800/50" : "border-gray-100 bg-gray-50 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-gray-400", children: item.time }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-semibold text-kcs-blue-900 dark:text-white", children: item.subject }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
            item.room,
            item.teacher ? ` - ${item.teacher}` : ""
          ] })
        ] }, `${item.time}-${item.subject}`)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Events Connected to Schedule" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: events.filter((item) => item.target.includes("student")).map((event) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: event.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
            event.date,
            " - ",
            event.type
          ] })
        ] }, event.title)) })
      ] })
    ] });
  }
  if (segment === "messages") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[0.9fr_1.1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Inbox" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: internalThreads.slice(0, 4).map((thread) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full rounded-xl bg-gray-50 p-4 text-left transition-colors hover:bg-kcs-blue-50 dark:bg-kcs-blue-800/30 dark:hover:bg-kcs-blue-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: thread.subject }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-kcs-blue-100 px-2 py-1 text-xs font-semibold text-kcs-blue-700 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-300", children: thread.unread })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: [
            thread.channel,
            " - ",
            thread.participants.join(", ")
          ] })
        ] }, thread.subject)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "New Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Academic Office" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Mrs. Diallo - English" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Mr. Belanger - AP Calculus" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Subject" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "min-h-36 rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Write your message..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: studentActionButton, onClick: () => setMessageSent(true), children: "Send message" }),
          messageSent && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-300", children: "Message prepared and saved in the portal thread." })
        ] })
      ] })
    ] });
  }
  if (segment === "profile") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[0.8fr_1.2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-kcs-blue-100 text-xl font-bold text-kcs-blue-700 dark:bg-kcs-blue-800 dark:text-kcs-blue-200", children: "EK" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: "Elise Kabongo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Grade 11 A - Student ID stu-elise" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300", children: students[0].aiInsight })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Profile Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: [
          ["Guardian", "Rachel Kabongo"],
          ["Email", "elise.kabongo@student.kcs.test"],
          ["Homeroom", "Grade 11 - Room 204"],
          ["Counselor", "Mrs. Diallo"],
          ["Learning plan", "AP STEM track"],
          ["Documents", "Transcript, Medical form, Photo ID"]
        ].map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-gray-400", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-semibold text-kcs-blue-900 dark:text-white", children: value })
        ] }, label)) })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalSectionPanel, {});
};
const StudentPortal = () => {
  const { user } = useAuthStore();
  const { language } = useUIStore();
  const location = useLocation();
  const activeSegment = getStudentSegment(location.pathname);
  const [activeView, setActiveView] = reactExports.useState("dashboard");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "portal-shell flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PortalSidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "portal-dashboard-topbar sticky top-0 z-20 border-b px-4 py-3 backdrop-blur-2xl sm:px-6 sm:py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "portal-dashboard-title font-display text-xl font-bold leading-tight sm:text-2xl", children: [
            getLocalizedGreeting(language),
            ", ",
            user == null ? void 0 : user.firstName,
            "!"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-medium text-kcs-blue-700 dark:text-kcs-blue-100", children: getLocalizedPortalDate(language) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-2 sm:w-auto sm:gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portal/student/ai-tutor", className: "btn-gold flex flex-1 items-center justify-center gap-2 py-2 text-sm sm:flex-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 16 }),
            " AI Tutor"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "rounded-xl bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-kcs-blue-800 dark:text-gray-300 dark:hover:bg-kcs-blue-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 18 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full text-xs" })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 p-4 sm:p-6", children: activeSegment !== "dashboard" ? /* @__PURE__ */ jsxRuntimeExports.jsx(StudentSectionView, { segment: activeSegment }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PortalSectionPanel, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SuggestionBox, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-3 font-bold text-kcs-blue-900 dark:text-white", children: "Academic Identity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: [
              students[0].name,
              " • ",
              students[0].grade,
              " ",
              students[0].section,
              " • ",
              academicContext.term
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs leading-relaxed text-gray-500 dark:text-gray-400", children: students[0].aiInsight })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-3 font-bold text-kcs-blue-900 dark:text-white", children: "School Alerts" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: announcements.filter((item) => item.audience.includes("student")).slice(0, 3).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-3 text-sm dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: item.date })
            ] }, item.id)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-3 font-bold text-kcs-blue-900 dark:text-white", children: "AI Learning Coach" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-relaxed text-gray-600 dark:text-gray-300", children: [
              "Build a study plan, revise difficult topics, generate practice questions, and prepare for ",
              academicContext.nextExamWindow,
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portal/student/ai-tutor", className: "mt-4 inline-flex w-full justify-center rounded-xl bg-kcs-blue-700 px-4 py-3 text-sm font-semibold text-white hover:bg-kcs-blue-800", children: "Open AI Tutor" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
          { label: "Current GPA", value: "3.9", sub: "+0.1 this semester", icon: Award, color: "text-kcs-gold-600", bg: "bg-kcs-gold-50 dark:bg-kcs-gold-900/20" },
          { label: "Attendance", value: "97%", sub: "2 absences this year", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50 dark:bg-green-900/20" },
          { label: "Assignments Due", value: "2", sub: "This week", icon: FileText, color: "text-orange-600", bg: "bg-orange-50 dark:bg-orange-900/20" },
          { label: "Rank", value: "#5", sub: "Out of 112 students", icon: TrendingUp, color: "text-kcs-blue-600", bg: "bg-kcs-blue-50 dark:bg-kcs-blue-900/20" }
        ].map(({ label, value, sub, icon: Icon, color, bg }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            className: "bg-white dark:bg-kcs-blue-900/50 rounded-2xl p-5 border border-gray-100 dark:border-kcs-blue-800 hover:shadow-kcs transition-all duration-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 ${bg} rounded-xl flex items-center justify-center`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, className: color }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold font-display text-kcs-blue-900 dark:text-white", children: value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-gray-600 dark:text-gray-300", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 dark:text-gray-500 mt-0.5", children: sub })
            ]
          },
          label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Latest Teacher Updates" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: grades.filter((grade) => grade.studentId === "stu-elise").slice(0, 3).map((grade) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-kcs-blue-900 dark:text-white", children: grade.subject }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                grade.assessment,
                " • ",
                grade.score,
                "/",
                grade.max,
                " • ",
                grade.teacher
              ] })
            ] }, `${grade.subject}-${grade.assessment}`)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Deadlines" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: assignments$1.filter((item) => item.studentId === "stu-elise").map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-kcs-blue-900 dark:text-white", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold capitalize text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", children: item.status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                item.subject,
                " • ",
                item.due
              ] })
            ] }, item.id)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Calendar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: events.filter((item) => item.target.includes("student")).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-kcs-blue-900 dark:text-white", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                item.date,
                " • ",
                item.type
              ] })
            ] }, item.title)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Report Card" }),
            reportCards.filter((card) => card.student === "Elise Kabongo").map((card) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-3xl font-bold text-kcs-blue-900 dark:text-white", children: [
                card.average,
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                card.term,
                " • ",
                card.principalStatus
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300", children: card.teacherComment })
            ] }, card.student))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Transcript" }),
            transcripts.filter((item) => item.student === "Elise Kabongo").map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: item.years }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: [
                item.credits,
                " credits • GPA ",
                item.cumulativeGpa
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs font-semibold text-green-600 dark:text-green-300", children: item.status })
            ] }, item.student))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Learning Resources" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: lmsResources.filter((item) => item.audience.includes("student")).slice(0, 2).map((resource) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-kcs-blue-900 dark:text-white", children: resource.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs capitalize text-gray-500 dark:text-gray-400", children: [
                resource.type,
                " • ",
                resource.subject
              ] })
            ] }, resource.title)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Messages" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: internalThreads.filter((thread) => thread.participants.includes("Rachel Kabongo") || thread.participants.includes("Administration")).slice(0, 2).map((thread) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-kcs-blue-900 dark:text-white", children: thread.subject }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                thread.channel,
                " • ",
                thread.unread,
                " unread"
              ] })
            ] }, thread.subject)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 bg-white dark:bg-kcs-blue-900/50 rounded-2xl p-6 border border-gray-100 dark:border-kcs-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "GPA Trend This Year" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-blue text-xs", children: "Grade 11 — 2025/26" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: performanceData, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "gpagradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: "#1d4ed8", stopOpacity: 0.2 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: "#1d4ed8", stopOpacity: 0 })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "rgba(30,58,138,0.1)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", tick: { fontSize: 11, fill: "#94a3b8" }, axisLine: false, tickLine: false }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { domain: [2.5, 4], tick: { fontSize: 11, fill: "#94a3b8" }, axisLine: false, tickLine: false }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Tooltip,
                {
                  contentStyle: { background: "#0f2352", border: "none", borderRadius: "12px", color: "#fff", fontSize: "12px" },
                  formatter: (value) => [`GPA: ${value}`, ""]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "gpa", stroke: "#1d4ed8", strokeWidth: 2.5, fill: "url(#gpagradient)", dot: { r: 4, fill: "#1d4ed8" } })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-kcs-blue-900/50 rounded-2xl p-5 border border-gray-100 dark:border-kcs-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-kcs-blue-900 dark:text-white mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 18, className: "text-kcs-gold-500" }),
              " Notifications"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: notifications.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 p-3 rounded-xl bg-gray-50 dark:bg-kcs-blue-800/50", children: [
              n.type === "warning" && /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { size: 18, className: "text-yellow-500 flex-shrink-0 mt-0.5" }),
              n.type === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 18, className: "text-green-500 flex-shrink-0 mt-0.5" }),
              n.type === "info" && /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 18, className: "text-kcs-blue-500 flex-shrink-0 mt-0.5" }),
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
                " Current Grades"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portal/student/grades", className: "text-xs text-kcs-blue-600 dark:text-kcs-blue-400 font-semibold flex items-center gap-1 hover:gap-1.5", children: [
                "Full Report ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: subjectGrades.map(({ subject, grade, letter }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300 w-20 flex-shrink-0", children: subject }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2 bg-gray-100 dark:bg-kcs-blue-800 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  animate: { width: `${grade}%` },
                  transition: { duration: 1, delay: 0.2 },
                  className: `h-full rounded-full ${grade >= 90 ? "bg-green-500" : grade >= 80 ? "bg-kcs-blue-500" : grade >= 70 ? "bg-yellow-500" : "bg-red-500"}`
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-bold w-8 text-center px-1.5 py-0.5 rounded-md ${grade >= 90 ? "bg-green-100 text-green-700 dark:bg-green-900/30" : grade >= 80 ? "bg-kcs-blue-100 text-kcs-blue-700 dark:bg-kcs-blue-900/30" : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30"}`, children: letter })
            ] }, subject)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-kcs-blue-900/50 rounded-2xl p-6 border border-gray-100 dark:border-kcs-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-kcs-blue-900 dark:text-white flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 18, className: "text-orange-500" }),
                " Assignments"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portal/student/assignments", className: "text-xs text-kcs-blue-600 dark:text-kcs-blue-400 font-semibold flex items-center gap-1 hover:gap-1.5", children: [
                "View All ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: assignments.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `p-4 rounded-xl border-l-4 ${priorityColors[a.priority]} bg-gray-50 dark:bg-kcs-blue-800/50 border border-gray-100 dark:border-transparent`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-kcs-blue-900 dark:text-white truncate", children: a.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: a.course }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-1 text-xs text-gray-400", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11 }),
                      " ",
                      a.due
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 capitalize ${statusColors[a.status]}`, children: a.status })
                ] })
              },
              a.id
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-kcs-blue-900/50 rounded-2xl p-6 border border-gray-100 dark:border-kcs-blue-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-kcs-blue-900 dark:text-white flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 18, className: "text-purple-500" }),
              " Today's Schedule"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portal/student/timetable", className: "text-xs text-kcs-blue-600 dark:text-kcs-blue-400 font-semibold flex items-center gap-1 hover:gap-1.5", children: [
              "Full Timetable ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-3", children: schedule.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `p-3 rounded-xl border ${i === 1 ? "border-kcs-blue-300 bg-kcs-blue-50 dark:bg-kcs-blue-800/50 dark:border-kcs-blue-600" : "border-gray-100 dark:border-kcs-blue-800 bg-gray-50 dark:bg-kcs-blue-800/20"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 dark:text-gray-500 mb-0.5", children: item.time }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-semibold ${i === 1 ? "text-kcs-blue-700 dark:text-kcs-blue-300" : "text-kcs-blue-900 dark:text-white"}`, children: item.subject }),
                item.teacher && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: item.teacher }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 dark:text-gray-500", children: item.room }),
                i === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mt-1 text-xs bg-kcs-blue-200 dark:bg-kcs-blue-700 text-kcs-blue-700 dark:text-kcs-blue-200 px-2 py-0.5 rounded-full font-medium", children: "Current" })
              ]
            },
            i
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Attendance Analytics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-gold text-xs", children: "Visible to parents and staff" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-3", children: attendanceAnalytics.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: item.scope }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-2xl font-bold text-kcs-blue-700 dark:text-kcs-blue-300", children: [
              item.present,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
              item.late,
              "% late • ",
              item.absent,
              "% absent • ",
              item.trend
            ] })
          ] }, item.scope)) })
        ] })
      ] }) })
    ] })
  ] });
};
export {
  StudentPortal as default
};
