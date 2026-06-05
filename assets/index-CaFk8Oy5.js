import { j as jsxRuntimeExports, a0 as FileText, ai as FileSpreadsheet, aj as Download, _ as Search, T as TrendingUp, ak as AlertTriangle, b as Bell, al as Sparkles, ag as Plus, am as Trash2, ac as BarChart3, aa as Brain, an as TrendingDown, ao as Wand2, a1 as CheckCircle2, y as Lightbulb, ah as MessageSquare, G as GraduationCap, ap as ClipboardCheck, U as Users, B as BookOpen, m as motion, a2 as ChevronRight, w as Calendar } from "./ui-Bam7IDm4.js";
import { r as reactExports, u as useLocation, L as Link } from "./vendor-Bh1Zu6gV.js";
import { P as PortalSidebar } from "./PortalSidebar-BG40mUrr.js";
import { g as getLocalizedGreeting, a as getLocalizedPortalDate, P as PortalSectionPanel, S as SuggestionBox, o as subjects, s as students, k as attendance, e as assignments, d as grades, r as reportCards, p as disciplineReports, q as messages$1, h as attendanceAnalytics, i as internalThreads, u as gradebookCategories } from "./schoolEcosystem-DS0iF1Dm.js";
import { R as ResponsiveContainer, B as BarChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, e as Bar, f as Cell, A as AreaChart, a as Area } from "./charts-LyKxUR06.js";
import { b as useAuthStore, e as useUIStore, s as studentsAPI } from "./index-QZ8_PQE4.js";
import "./SearchField-CzMASTOO.js";
const assignmentTypes = ["homework", "quiz", "test", "exam", "project", "participation"];
const terms = ["Term 1", "Term 2", "Final"];
const scoreScales = [20, 100, 50];
const defaultPointsByType = {
  homework: 20,
  quiz: 20,
  test: 100,
  exam: 100,
  project: 100,
  participation: 10
};
const defaultCategories = [
  { id: "homework", name: "Homework", weight: 15 },
  { id: "quiz", name: "Quiz", weight: 20 },
  { id: "test", name: "Test", weight: 25 },
  { id: "exam", name: "Exam", weight: 30 },
  { id: "participation", name: "Participation", weight: 10 }
];
const defaultAssignments = [
  { id: "gb-lab", title: "Lab Report", type: "project", category: "test", maxPoints: 100, date: "2026-04-18", term: "Term 2", description: "Research, evidence, and lab conclusion." },
  { id: "gb-quiz", title: "Genetics Quiz", type: "quiz", category: "quiz", maxPoints: 20, date: "2026-04-22", term: "Term 2", description: "Fast check on heredity vocabulary." },
  { id: "gb-homework", title: "Problem Set", type: "homework", category: "homework", maxPoints: 50, date: "2026-04-25", term: "Term 2", description: "Independent practice submitted online." },
  { id: "gb-exam", title: "Unit Exam", type: "exam", category: "exam", maxPoints: 100, date: "2026-05-03", term: "Final", description: "Cumulative unit performance." },
  { id: "gb-participation", title: "Seminar", type: "participation", category: "participation", maxPoints: 10, date: "2026-05-08", term: "Final", description: "Discussion preparedness and collaboration." }
];
const buildInitialScores = (students2) => {
  const scores = {};
  students2.forEach((student, index) => {
    defaultAssignments.forEach((assignment, assignmentIndex) => {
      const baseline = student.average ?? 82;
      const drift = (index % 5 - 2) * 3 + assignmentIndex * 2;
      const missing = index % 9 === 0 && assignmentIndex === 2;
      const score = Math.round(Math.max(48, Math.min(100, baseline + drift)) / 100 * assignment.maxPoints);
      scores[`${assignment.id}:${student.id}`] = missing ? "" : String(score);
    });
  });
  return scores;
};
const buildMissingScoreCells = (assignments2, students2, existingScores) => {
  const next = { ...existingScores };
  students2.forEach((student) => {
    assignments2.forEach((assignment) => {
      const key = `${assignment.id}:${student.id}`;
      if (next[key] === void 0) next[key] = "";
    });
  });
  return next;
};
const toneForScore = (score) => {
  if (score === null) return "bg-gray-50 text-gray-400 dark:bg-kcs-blue-950 dark:text-gray-500";
  if (score < 65) return "bg-red-50 text-red-700 ring-red-100 dark:bg-red-900/20 dark:text-red-300 dark:ring-red-900/40";
  if (score < 78) return "bg-yellow-50 text-yellow-700 ring-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-300 dark:ring-yellow-900/40";
  if (score >= 90) return "bg-green-50 text-green-700 ring-green-100 dark:bg-green-900/20 dark:text-green-300 dark:ring-green-900/40";
  return "bg-kcs-blue-50 text-kcs-blue-700 ring-kcs-blue-100 dark:bg-kcs-blue-900/30 dark:text-kcs-blue-200 dark:ring-kcs-blue-800";
};
const parseScore = (value, maxPoints) => {
  const normalized = value.trim().toUpperCase();
  if (!normalized || normalized === "E" || normalized === "I") return null;
  if (normalized === "U" || normalized === "M") return 0;
  const numeric = Number(normalized);
  if (!Number.isFinite(numeric)) return null;
  return Math.max(0, Math.min(100, numeric / Math.max(maxPoints, 1) * 100));
};
const formatPercent = (value) => value === null ? "I" : `${Math.round(value)}%`;
const AdvancedGradebook = ({ courses, students: students2, selectedCourseId, onSelectCourse, onAction }) => {
  const [assignments2, setAssignments] = reactExports.useState(defaultAssignments);
  const [categories, setCategories] = reactExports.useState(defaultCategories);
  const [scores, setScores] = reactExports.useState(() => buildInitialScores(students2));
  const [comments, setComments] = reactExports.useState({});
  const [term, setTerm] = reactExports.useState("Term 2");
  const [scale, setScale] = reactExports.useState(100);
  const [query, setQuery] = reactExports.useState("");
  const [bulkValue, setBulkValue] = reactExports.useState("");
  const [selectedAssignmentId, setSelectedAssignmentId] = reactExports.useState(defaultAssignments[0].id);
  const [draft, setDraft] = reactExports.useState({
    title: "Concept Check",
    type: "quiz",
    category: "quiz",
    maxPoints: 20,
    date: "2026-05-12",
    description: "Short standards-aligned formative assessment."
  });
  const selectedCourse = courses.find((course) => course.id === selectedCourseId) ?? courses[0];
  const courseStudents = reactExports.useMemo(() => {
    var _a;
    const roster = ((_a = selectedCourse == null ? void 0 : selectedCourse.studentIds) == null ? void 0 : _a.length) ? selectedCourse.studentIds.map((id) => students2.find((student) => student.id === id)).filter(Boolean) : students2;
    return roster.filter((student) => `${student.name} ${student.grade} ${student.section}`.toLowerCase().includes(query.toLowerCase()));
  }, [query, selectedCourse, students2]);
  const visibleAssignments = assignments2.filter((assignment) => assignment.term === term || term === "Final");
  const scoreKey = (assignmentId, studentId) => `${assignmentId}:${studentId}`;
  const getRawScore = (assignmentId, studentId) => scores[scoreKey(assignmentId, studentId)] ?? "";
  const getScore = (assignment, studentId) => parseScore(getRawScore(assignment.id, studentId), assignment.maxPoints);
  reactExports.useEffect(() => {
    setScores((current) => buildMissingScoreCells(assignments2, courseStudents, current));
  }, [assignments2, courseStudents]);
  const getCategoryAverage = (studentId, categoryId) => {
    const categoryAssignments = visibleAssignments.filter((assignment) => assignment.category === categoryId);
    const values = categoryAssignments.map((assignment) => getScore(assignment, studentId)).filter((value) => value !== null);
    if (!values.length) return null;
    return values.reduce((sum, value) => sum + value, 0) / values.length;
  };
  const getWeightedAverage = (studentId) => {
    let weighted = 0;
    let activeWeight = 0;
    categories.forEach((category) => {
      const average = getCategoryAverage(studentId, category.id);
      if (average !== null) {
        weighted += average * category.weight;
        activeWeight += category.weight;
      }
    });
    return activeWeight ? weighted / activeWeight : null;
  };
  const studentAnalytics = courseStudents.map((student) => {
    const average = getWeightedAverage(student.id);
    const missing = visibleAssignments.filter((assignment) => !getRawScore(assignment.id, student.id).trim()).length;
    const projected = average === null ? null : Math.max(0, Math.min(100, average + (student.attendance && student.attendance > 94 ? 2 : -3) - missing * 2));
    const risk = average === null || projected === null || missing >= 2 || projected < 70 ? "high" : average < 78 || projected < 80 ? "medium" : "low";
    return { student, average, missing, projected, risk };
  });
  const classAverage = studentAnalytics.filter((item) => item.average !== null).reduce((sum, item) => sum + (item.average ?? 0), 0) / Math.max(1, studentAnalytics.filter((item) => item.average !== null).length);
  const atRiskCount = studentAnalytics.filter((item) => item.risk !== "low").length;
  const missingCount = studentAnalytics.reduce((sum, item) => sum + item.missing, 0);
  const topStudent = [...studentAnalytics].filter((item) => item.average !== null).sort((a, b) => (b.average ?? 0) - (a.average ?? 0))[0];
  const getAssignmentAverage = (assignment) => {
    const values = courseStudents.map((student) => getScore(assignment, student.id)).filter((value) => value !== null);
    if (!values.length) return null;
    return values.reduce((sum, value) => sum + value, 0) / values.length;
  };
  const distribution = [
    { band: "90-100", count: studentAnalytics.filter((item) => (item.average ?? 0) >= 90).length, color: "#22c55e" },
    { band: "80-89", count: studentAnalytics.filter((item) => (item.average ?? 0) >= 80 && (item.average ?? 0) < 90).length, color: "#2563eb" },
    { band: "70-79", count: studentAnalytics.filter((item) => (item.average ?? 0) >= 70 && (item.average ?? 0) < 80).length, color: "#f59e0b" },
    { band: "<70", count: studentAnalytics.filter((item) => (item.average ?? 0) < 70 || item.average === null).length, color: "#ef4444" }
  ];
  const trendData = [
    { month: "Jan", average: Math.max(58, Math.round(classAverage - 6)) },
    { month: "Feb", average: Math.max(58, Math.round(classAverage - 3)) },
    { month: "Mar", average: Math.round(classAverage - 1) },
    { month: "Apr", average: Math.round(classAverage) },
    { month: "May", average: Math.min(98, Math.round(classAverage + 2)) }
  ];
  const addAssignment = () => {
    const nextAssignment = {
      id: `gb-${Date.now()}`,
      title: draft.title.trim() || "New Assignment",
      type: draft.type,
      category: draft.category,
      maxPoints: Math.max(1, Number(draft.maxPoints) || scale),
      date: draft.date,
      term,
      description: draft.description
    };
    setAssignments((current) => [...current, nextAssignment]);
    setScores((current) => buildMissingScoreCells([nextAssignment], courseStudents, current));
    setSelectedAssignmentId(nextAssignment.id);
    onAction(`${nextAssignment.title} ${nextAssignment.type} added to ${(selectedCourse == null ? void 0 : selectedCourse.name) ?? "Gradebook"}; averages will recalculate automatically as scores are entered.`);
  };
  const deleteAssignment = (assignmentId) => {
    setAssignments((current) => current.filter((assignment) => assignment.id !== assignmentId));
    setScores((current) => {
      const next = { ...current };
      Object.keys(next).forEach((key) => {
        if (key.startsWith(`${assignmentId}:`)) delete next[key];
      });
      return next;
    });
    onAction("Assignment deleted, calculations refreshed, and audit event recorded.");
  };
  const updateScore = (assignmentId, studentId, value) => {
    setScores((current) => ({ ...current, [scoreKey(assignmentId, studentId)]: value }));
  };
  const applyBulkScore = () => {
    if (!selectedAssignmentId) return;
    setScores((current) => {
      const next = { ...current };
      courseStudents.forEach((student) => {
        next[scoreKey(selectedAssignmentId, student.id)] = bulkValue;
      });
      return next;
    });
    onAction("Bulk grade entry applied, real-time sync events queued, and audit trail updated.");
  };
  const suggestGrade = (assignment, student) => {
    const average = getWeightedAverage(student.id) ?? student.average ?? classAverage;
    return String(Math.round(Math.max(0, Math.min(100, average + 2)) / 100 * assignment.maxPoints));
  };
  const generateFeedback = (student) => {
    var _a;
    const analytics = studentAnalytics.find((item) => item.student.id === student.id);
    const average = (analytics == null ? void 0 : analytics.average) ?? student.average ?? 0;
    const message = average >= 88 ? `${student.name} demonstrates strong mastery and should receive enrichment through advanced application tasks.` : average >= 70 ? `${student.name} is progressing, with the greatest gains likely from targeted practice on ${((_a = student.weaknesses) == null ? void 0 : _a[0]) ?? "current unit skills"}.` : `${student.name} needs immediate support, missing-work recovery, and a parent-teacher intervention plan this week.`;
    setComments((current) => ({ ...current, [`feedback:${student.id}`]: message }));
    onAction(`AI feedback generated for ${student.name}.`);
  };
  const exportGradebook = (format) => {
    onAction(`${format} export prepared with gradebook table, report-card comments, and audit metadata.`);
  };
  const updateCategoryWeight = (categoryId, weight) => {
    setCategories((current) => current.map((category) => category.id === categoryId ? { ...category, weight: Math.max(0, weight) } : category));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 xl:grid-cols-[1fr_0.9fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wide text-kcs-blue-600 dark:text-kcs-blue-300", children: "AI Gradebook Command Center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: (selectedCourse == null ? void 0 : selectedCourse.name) ?? "Gradebook" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-2xl text-sm text-gray-600 dark:text-gray-300", children: "Spreadsheet entry, weighted categories, predictive risk detection, report-card comments, and synchronized parent/student/admin visibility." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => exportGradebook("PDF"), className: "rounded-xl bg-kcs-blue-700 px-3 py-2 text-sm font-semibold text-white hover:bg-kcs-blue-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 15, className: "mr-1 inline" }),
              " PDF"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => exportGradebook("Excel"), className: "rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-kcs-blue-700 hover:bg-kcs-blue-50 dark:border-kcs-blue-700 dark:text-kcs-blue-200 dark:hover:bg-kcs-blue-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { size: 15, className: "mr-1 inline" }),
              " Excel"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => exportGradebook("CSV"), className: "rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-kcs-blue-700 hover:bg-kcs-blue-50 dark:border-kcs-blue-700 dark:text-kcs-blue-200 dark:hover:bg-kcs-blue-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 15, className: "mr-1 inline" }),
              " CSV"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-3 lg:grid-cols-[1fr_0.7fr_0.7fr_1fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-kcs py-2 text-sm", value: selectedCourse == null ? void 0 : selectedCourse.id, onChange: (event) => onSelectCourse(event.target.value), children: courses.map((course) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: course.id, children: [
            course.gradeLevels[0],
            " - ",
            course.name
          ] }, course.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-kcs py-2 text-sm", value: term, onChange: (event) => setTerm(event.target.value), children: terms.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: item }, item)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-kcs py-2 text-sm", value: scale, onChange: (event) => setScale(Number(event.target.value)), children: scoreScales.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: item, children: [
            item,
            "-point scale"
          ] }, item)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 dark:border-kcs-blue-700 dark:bg-kcs-blue-950", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 16, className: "text-gray-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full bg-transparent text-sm outline-none dark:text-white", value: query, onChange: (event) => setQuery(event.target.value), placeholder: "Search students" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 lg:grid-cols-4 xl:grid-cols-2", children: [
        { label: "Class average", value: `${Math.round(classAverage)}%`, icon: TrendingUp, tone: "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300" },
        { label: "At risk", value: String(atRiskCount), icon: AlertTriangle, tone: "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300" },
        { label: "Missing work", value: String(missingCount), icon: Bell, tone: "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300" },
        { label: "Top performer", value: (topStudent == null ? void 0 : topStudent.student.name.split(" ")[0]) ?? "None", icon: Sparkles, tone: "bg-kcs-blue-50 text-kcs-blue-700 dark:bg-kcs-blue-900/30 dark:text-kcs-blue-200" }
      ].map((item) => {
        const Icon = item.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${item.tone}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: item.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-gray-500 dark:text-gray-400", children: item.label })
        ] }, item.label);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[0.9fr_1.1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Create task" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-kcs-blue-50 px-3 py-1 text-xs font-bold text-kcs-blue-700 dark:bg-kcs-blue-900/30 dark:text-kcs-blue-200", children: "RBAC: teacher classes only" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-kcs py-2 text-sm", value: draft.title, onChange: (event) => setDraft((item) => ({ ...item, title: event.target.value })), placeholder: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                className: "input-kcs py-2 text-sm",
                value: draft.type,
                onChange: (event) => {
                  const type = event.target.value;
                  setDraft((item) => ({
                    ...item,
                    type,
                    category: type,
                    maxPoints: defaultPointsByType[type]
                  }));
                },
                children: assignmentTypes.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item, children: item }, item))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-kcs py-2 text-sm", value: draft.category, onChange: (event) => setDraft((item) => ({ ...item, category: event.target.value })), children: categories.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item.id, children: item.name }, item.id)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-kcs py-2 text-sm", type: "number", min: 1, value: draft.maxPoints, onChange: (event) => setDraft((item) => ({ ...item, maxPoints: Number(event.target.value) })) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-kcs py-2 text-sm", type: "date", value: draft.date, onChange: (event) => setDraft((item) => ({ ...item, date: event.target.value })) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "input-kcs min-h-20 py-2 text-sm", value: draft.description, onChange: (event) => setDraft((item) => ({ ...item, description: event.target.value })) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: addAssignment, className: "rounded-xl bg-kcs-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-kcs-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16, className: "mr-1 inline" }),
            " Add task"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Category weighting" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-3 sm:grid-cols-2", children: categories.map((category) => {
          const categoryValues = studentAnalytics.map(({ student }) => getCategoryAverage(student.id, category.id)).filter((value) => value !== null);
          const categoryAverage = categoryValues.length ? Math.round(categoryValues.reduce((sum, value) => sum + value, 0) / categoryValues.length) : 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: category.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-kcs-blue-700 dark:text-kcs-blue-200", children: [
                categoryAverage,
                "% avg"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "h-2 flex-1 accent-kcs-blue-700", type: "range", min: 0, max: 60, value: category.weight, onChange: (event) => updateCategoryWeight(category.id, Number(event.target.value)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-16 rounded-lg border border-gray-200 px-2 py-1 text-right text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", type: "number", value: category.weight, onChange: (event) => updateCategoryWeight(category.id, Number(event.target.value)) })
            ] })
          ] }, category.id);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-gray-100 bg-white dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 border-b border-gray-100 p-4 dark:border-kcs-blue-800 lg:flex-row lg:items-center lg:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Live spreadsheet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Sticky roster, editable cells, comments, missing detection, weighted final average, and predictive final grade." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-kcs py-2 text-sm", value: selectedAssignmentId, onChange: (event) => setSelectedAssignmentId(event.target.value), children: visibleAssignments.map((assignment) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: assignment.id, children: assignment.title }, assignment.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-kcs w-24 py-2 text-sm", value: bulkValue, onChange: (event) => setBulkValue(event.target.value), placeholder: "Score" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: applyBulkScore, className: "rounded-xl bg-kcs-blue-700 px-3 py-2 text-sm font-semibold text-white hover:bg-kcs-blue-800", children: "Bulk apply" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-[680px] overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[1280px] border-separate border-spacing-0 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "sticky top-0 z-20 bg-gray-50 text-xs uppercase text-gray-500 shadow-sm dark:bg-kcs-blue-900 dark:text-gray-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "sticky left-0 z-30 w-64 bg-gray-50 px-4 py-3 text-left dark:bg-kcs-blue-900", children: "Student" }),
          visibleAssignments.map((assignment) => /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "min-w-36 border-l border-gray-100 px-3 py-3 text-center dark:border-kcs-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-bold text-kcs-blue-900 dark:text-white", children: assignment.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block normal-case text-gray-400", children: [
              assignment.type,
              " - ",
              assignment.maxPoints,
              " pts"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => deleteAssignment(assignment.id), className: "mt-1 inline-flex items-center gap-1 text-[11px] font-bold normal-case text-red-500 hover:text-red-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 }),
              " Delete"
            ] })
          ] }, assignment.id)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "min-w-32 border-l border-gray-100 px-3 py-3 text-center dark:border-kcs-blue-800", children: "Average" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "min-w-32 border-l border-gray-100 px-3 py-3 text-center dark:border-kcs-blue-800", children: "Prediction" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "min-w-40 border-l border-gray-100 px-3 py-3 text-left dark:border-kcs-blue-800", children: "AI status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
          studentAnalytics.map(({ student, average, missing, projected, risk }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "sticky left-0 z-10 border-t border-gray-100 bg-white px-4 py-3 dark:border-kcs-blue-800 dark:bg-kcs-blue-900", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: student.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                student.grade,
                student.section,
                " - ",
                student.advisor ?? "Advisor pending"
              ] })
            ] }),
            visibleAssignments.map((assignment) => {
              const normalized = getScore(assignment, student.id);
              return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border-l border-t border-gray-100 px-3 py-3 dark:border-kcs-blue-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    className: `mx-auto w-20 rounded-lg px-2 py-2 text-center text-sm font-bold outline-none ring-1 transition-colors focus:ring-2 focus:ring-kcs-blue-400 ${toneForScore(normalized)}`,
                    value: getRawScore(assignment.id, student.id),
                    onChange: (event) => updateScore(assignment.id, student.id, event.target.value),
                    placeholder: "I"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-md bg-gray-100 px-2 py-1 text-[11px] font-bold text-gray-600 hover:bg-kcs-blue-50 dark:bg-kcs-blue-800 dark:text-gray-300", onClick: () => updateScore(assignment.id, student.id, suggestGrade(assignment, student)), children: "AI" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-md bg-gray-100 px-2 py-1 text-[11px] font-bold text-gray-600 hover:bg-kcs-blue-50 dark:bg-kcs-blue-800 dark:text-gray-300", onClick: () => setComments((current) => ({ ...current, [scoreKey(assignment.id, student.id)]: current[scoreKey(assignment.id, student.id)] || "Teacher note pending." })), children: "Note" })
                ] })
              ] }) }, `${student.id}-${assignment.id}`);
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border-l border-t border-gray-100 px-3 py-3 text-center dark:border-kcs-blue-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex min-w-20 justify-center rounded-lg px-3 py-2 text-sm font-bold ring-1 ${toneForScore(average)}`, children: formatPercent(average) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border-l border-t border-gray-100 px-3 py-3 text-center dark:border-kcs-blue-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex min-w-20 justify-center rounded-lg px-3 py-2 text-sm font-bold ring-1 ${toneForScore(projected)}`, children: formatPercent(projected) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border-l border-t border-gray-100 px-3 py-3 dark:border-kcs-blue-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `w-fit rounded-full px-2.5 py-1 text-xs font-bold ${risk === "high" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" : risk === "medium" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"}`, children: [
                risk,
                " risk"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                missing,
                " missing"
              ] })
            ] }) })
          ] }, student.id)),
          studentAnalytics.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50 font-bold text-kcs-blue-900 dark:bg-kcs-blue-800/30 dark:text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "sticky left-0 z-10 border-t border-gray-100 bg-gray-50 px-4 py-3 dark:border-kcs-blue-800 dark:bg-kcs-blue-800", children: "Class average" }),
            visibleAssignments.map((assignment) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border-l border-t border-gray-100 px-3 py-3 text-center dark:border-kcs-blue-800", children: formatPercent(getAssignmentAverage(assignment)) }, `average-${assignment.id}`)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border-l border-t border-gray-100 px-3 py-3 text-center dark:border-kcs-blue-800", children: formatPercent(studentAnalytics.some((item) => item.average !== null) ? classAverage : null) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border-l border-t border-gray-100 px-3 py-3 text-center dark:border-kcs-blue-800", children: formatPercent(studentAnalytics.some((item) => item.projected !== null) ? studentAnalytics.reduce((sum, item) => sum + (item.projected ?? 0), 0) / Math.max(1, studentAnalytics.filter((item) => item.projected !== null).length) : null) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border-l border-t border-gray-100 px-3 py-3 text-xs text-gray-500 dark:border-kcs-blue-800 dark:text-gray-300", children: "Auto-calculated" })
          ] }),
          !studentAnalytics.length && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: visibleAssignments.length + 4, className: "px-4 py-10 text-center text-sm text-gray-500 dark:text-gray-400", children: "Select a class with students from the Super Admin registry to start entering grades." }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1fr_0.9fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "mb-4 flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BarChart3, { size: 18 }),
            " Class distribution"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: distribution, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "rgba(148,163,184,0.18)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "band", tick: { fontSize: 11, fill: "#94a3b8" }, axisLine: false, tickLine: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { allowDecimals: false, tick: { fontSize: 11, fill: "#94a3b8" }, axisLine: false, tickLine: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { background: "#0f2352", border: "none", borderRadius: "12px", color: "#fff", fontSize: "12px" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "count", radius: [8, 8, 0, 0], children: distribution.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.color }, entry.band)) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "mb-4 flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 18 }),
            " Performance trend"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: trendData, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "rgba(148,163,184,0.18)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", tick: { fontSize: 11, fill: "#94a3b8" }, axisLine: false, tickLine: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { domain: [50, 100], tick: { fontSize: 11, fill: "#94a3b8" }, axisLine: false, tickLine: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { background: "#0f2352", border: "none", borderRadius: "12px", color: "#fff", fontSize: "12px" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "average", stroke: "#2563eb", strokeWidth: 2.5, fill: "#dbeafe" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 18 }),
          " AI insights dashboard"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-kcs-blue-50 p-4 text-sm text-kcs-blue-900 dark:bg-kcs-blue-900/30 dark:text-kcs-blue-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: "Natural-language analysis" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1", children: [
              "The class is trending toward ",
              Math.round(classAverage + 2),
              "%. ",
              atRiskCount,
              " student(s) need intervention before the final window, mostly due to missing assignments and weak category averages."
            ] })
          ] }),
          studentAnalytics.filter((item) => item.risk !== "low").slice(0, 4).map(({ student, average, projected, missing }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gray-100 p-4 dark:border-kcs-blue-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: student.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: [
                    "Current ",
                    formatPercent(average),
                    " - projected ",
                    formatPercent(projected),
                    " - ",
                    missing,
                    " missing"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { size: 18, className: "text-red-500" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm text-gray-600 dark:text-gray-300", children: [
                "Recommendation: assign personalized practice on ",
                ((_a = student.weaknesses) == null ? void 0 : _a[0]) ?? "foundational skills",
                ", notify parents, and review the next two submissions manually."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => generateFeedback(student), className: "mt-3 rounded-lg bg-kcs-blue-700 px-3 py-2 text-xs font-bold text-white hover:bg-kcs-blue-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Wand2, { size: 13, className: "mr-1 inline" }),
                " Generate feedback"
              ] })
            ] }, student.id);
          }),
          courseStudents.slice(0, 2).map((student) => comments[`feedback:${student.id}`] && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-green-50 p-4 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold", children: [
              student.name,
              " report-card comment"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: comments[`feedback:${student.id}`] })
          ] }, `feedback-${student.id}`))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-3", children: [
      { icon: CheckCircle2, title: "Real-time sync", text: "Grade saves queue updates for student, parent, and admin dashboards with audit metadata." },
      { icon: Lightbulb, title: "Intelligent suggestions", text: "AI grade suggestions use the learner trend, current category strength, and class baseline." },
      { icon: AlertTriangle, title: "Smart alerts", text: "Failing, sudden drops, missing work, and projected-risk patterns are surfaced before report cards." }
    ].map((item) => {
      const Icon = item.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, className: "text-kcs-blue-600 dark:text-kcs-blue-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-bold text-kcs-blue-900 dark:text-white", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-600 dark:text-gray-300", children: item.text })
      ] }, item.title);
    }) })
  ] });
};
const todayClasses = [
  { time: "7:45 AM", course: "Grade 11 AP Biology", room: "Lab 3", students: 24 },
  { time: "9:15 AM", course: "Grade 10 Biology", room: "Room 204", students: 28 },
  { time: "11:00 AM", course: "Grade 9 General Science", room: "Lab 1", students: 31 },
  { time: "1:30 PM", course: "Teacher Mentorship Block", room: "Faculty Lounge", students: 6 }
];
const gradingQueue = [
  { id: 1, title: "AP Biology Lab Reports", className: "Grade 11", pending: 18, due: "Today" },
  { id: 2, title: "Genetics Quiz", className: "Grade 10", pending: 27, due: "Tomorrow" },
  { id: 3, title: "Science Fair Proposal", className: "Grade 9", pending: 11, due: "Apr 24" }
];
const studentAlerts = [
  { student: "Naomi K.", note: "Attendance dropped to 84% over the last 3 weeks.", severity: "high" },
  { student: "Jordan M.", note: "Strong performance growth. Candidate for science fair coaching.", severity: "positive" },
  { student: "David K.", note: "Needs intervention in algebra foundations impacting science assessments.", severity: "medium" }
];
const messages = [
  { id: 1, from: "Admissions Office", subject: "Prospective Family Shadow Day", time: "35m ago" },
  { id: 2, from: "Principal Carter", subject: "Faculty meeting agenda for Friday", time: "2h ago" },
  { id: 3, from: "Parent of Elise K.", subject: "Question about AP exam preparation", time: "5h ago" }
];
const getTeacherSegment = (pathname) => {
  const segment = pathname.split("/").filter(Boolean).at(-1);
  return !segment || segment === "teacher" || segment === "dashboard" ? "dashboard" : segment;
};
const statusTone = (value) => {
  if (["high", "absent", "missing", "Open"].includes(value)) return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";
  if (["medium", "late", "pending", "Pending confirmation"].includes(value)) return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";
  return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
};
const gradeOptions = ["K4", "K3", "K5", "Kindergarten", "1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade", "6th Grade", "7th Grade", "8th Grade", "9th Grade", "10th Grade", "11th Grade", "12th Grade"];
const inferGradeLabel = (className) => {
  if (className.includes("12")) return "12th Grade";
  if (className.includes("11")) return "11th Grade";
  if (className.includes("10")) return "10th Grade";
  if (className.includes("9")) return "9th Grade";
  if (className.includes("8")) return "8th Grade";
  return className;
};
const gradingScaleRows = [
  ["99", "100", "A+"],
  ["94", "98", "A"],
  ["92", "93", "A-"],
  ["90", "91", "B+"],
  ["84", "89", "B"],
  ["82", "83", "B-"],
  ["80", "81", "C+"],
  ["72", "79", "C"],
  ["70", "71", "C-"],
  ["68", "69", "D+"],
  ["62", "67", "D"],
  ["60", "61", "D-"],
  ["0", "60", "F"]
];
const toClassKey = (grade, section = "") => `${grade}${section}`.replace(/\s+/g, "").toLowerCase();
const mapRegistryStudent = (student, index) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const firstName = ((_b = (_a = student.user) == null ? void 0 : _a.firstName) == null ? void 0 : _b.trim()) ?? "";
  const lastName = ((_d = (_c = student.user) == null ? void 0 : _c.lastName) == null ? void 0 : _d.trim()) ?? "";
  const name = `${firstName} ${lastName}`.trim() || student.studentNumber || `Student ${index + 1}`;
  return {
    id: student.id,
    name,
    grade: student.grade,
    section: student.section ?? "",
    parentId: ((_f = (_e = student.parentLinks) == null ? void 0 : _e[0]) == null ? void 0 : _f.parentId) ?? ((_i = (_h = (_g = student.parentLinks) == null ? void 0 : _g[0]) == null ? void 0 : _h.parent) == null ? void 0 : _i.id),
    advisor: "School registry",
    average: Math.round((student.gpa ?? 0) * 20) || void 0,
    gpa: student.gpa ?? void 0,
    rank: index + 1,
    attendance: student.attendanceRate ?? void 0,
    risk: student.status === "active" ? "low" : "medium",
    strengths: [],
    weaknesses: [],
    aiInsight: `${name} is loaded from the Super Admin student registry for ${student.grade}${student.section ?? ""}.`
  };
};
const TeacherSectionView = ({ segment }) => {
  const sectionTitles = {
    courses: { title: "My Courses", subtitle: "Assigned classes, rooms, schedules, and teaching load.", icon: BookOpen },
    students: { title: "Students", subtitle: "Academic profile, risk level, strengths, and support needs for each learner.", icon: Users },
    attendance: { title: "Attendance", subtitle: "Daily attendance records, class trends, and follow-up signals.", icon: ClipboardCheck },
    assignments: { title: "Assignments", subtitle: "Homework status, priorities, missing work, and LMS resources.", icon: FileText },
    grades: { title: "Gradebook", subtitle: "Assignments, final grades, averages, medians, legend, and grading scale.", icon: TrendingUp },
    "report-card": { title: "Gradebook", subtitle: "Assignments, final grades, averages, medians, legend, and grading scale.", icon: TrendingUp },
    reports: { title: "Reports", subtitle: "Report cards, AI comments, exports, and principal approval status.", icon: GraduationCap },
    discipline: { title: "Detailed Student Discipline Report", subtitle: "Incident context, action taken, parent contact, and follow-up plan.", icon: AlertTriangle },
    messages: { title: "Messages", subtitle: "Teacher inbox, parent threads, and internal coordination messages.", icon: MessageSquare }
  };
  const meta = sectionTitles[segment] ?? sectionTitles.reports;
  const Icon = meta.icon;
  const [superAdminStudentPool, setSuperAdminStudentPool] = reactExports.useState([]);
  const [registryStatus, setRegistryStatus] = reactExports.useState("loading");
  const getRosterForClass = (className) => superAdminStudentPool.filter((student) => toClassKey(student.grade, student.section) === toClassKey(className) || inferGradeLabel(`${student.grade}${student.section}`) === className);
  const [actionMessage, setActionMessage] = reactExports.useState("");
  const [courses, setCourses] = reactExports.useState(
    () => subjects.map((subject, index) => {
      const gradeLevel = inferGradeLabel(subject.className);
      return {
        ...subject,
        abbreviation: subject.name.split(" ").map((word) => word[0]).join("").slice(0, 6).toUpperCase(),
        creditHours: index === 1 ? 4 : index === 0 ? 3 : 2,
        gradeLevels: [gradeLevel],
        studentIds: [],
        status: "active"
      };
    })
  );
  const [courseTab, setCourseTab] = reactExports.useState("setup");
  const [courseSearch, setCourseSearch] = reactExports.useState("");
  const [editingCourseId, setEditingCourseId] = reactExports.useState(null);
  const [selectedEnrollmentCourseId, setSelectedEnrollmentCourseId] = reactExports.useState(subjects[0].id);
  const [selectedGradebookCourseId, setSelectedGradebookCourseId] = reactExports.useState(subjects[1].id);
  const [gradebookColumnsByCourse, setGradebookColumnsByCourse] = reactExports.useState({});
  const [gradebookScores, setGradebookScores] = reactExports.useState({});
  const [teacherStudents, setTeacherStudents] = reactExports.useState(() => students);
  const [attendanceEntries, setAttendanceEntries] = reactExports.useState(() => attendance);
  const [assignmentList, setAssignmentList] = reactExports.useState(() => assignments);
  const [gradeEntries, setGradeEntries] = reactExports.useState(() => grades);
  const [reportList, setReportList] = reactExports.useState(() => reportCards);
  const [disciplineList, setDisciplineList] = reactExports.useState(() => disciplineReports);
  const [reportCardStudentId, setReportCardStudentId] = reactExports.useState("");
  const [reportCardTerm, setReportCardTerm] = reactExports.useState("Term 3");
  const [reportCardRows, setReportCardRows] = reactExports.useState(
    () => subjects.slice(0, 4).map((subject, index) => ({
      id: subject.id,
      course: subject.name,
      teacher: subject.teacher,
      coefficient: index === 1 ? 2 : 1,
      points: index === 0 ? 89 : index === 1 ? 95 : index === 2 ? 91 : 76,
      maxPoints: 100,
      comment: index === 1 ? "Excellent lab reasoning" : index === 3 ? "Needs steady homework rhythm" : "Good progress"
    }))
  );
  const [generatedReportCards, setGeneratedReportCards] = reactExports.useState([]);
  const [inbox, setInbox] = reactExports.useState(() => [
    ...messages.map((message) => ({ ...message, body: message.subject, requiresResponse: message.id === 3 })),
    ...messages$1.filter((message) => message.toRole === "teacher").map((message, index) => ({
      id: index + 10,
      from: message.from,
      subject: message.subject,
      body: message.body,
      time: message.requiresResponse ? "Response needed" : "FYI",
      requiresResponse: message.requiresResponse
    }))
  ]);
  const [courseDraft, setCourseDraft] = reactExports.useState({
    name: "Integrated Science Lab",
    abbreviation: "ISL",
    creditHours: 1,
    className: "Grade 10A",
    room: "Lab 2",
    gradeLevels: ["10th Grade"],
    studentId: ""
  });
  const [selectedStudentId, setSelectedStudentId] = reactExports.useState("");
  const [attendanceDraft, setAttendanceDraft] = reactExports.useState({
    studentId: "",
    date: "Apr 29",
    status: "present",
    className: "Grade 11A"
  });
  const [assignmentDraft, setAssignmentDraft] = reactExports.useState({
    studentId: "",
    title: "Exit ticket reflection",
    subject: "AP Biology",
    due: "Tomorrow",
    status: "pending",
    priority: "medium"
  });
  const [gradeDraft, setGradeDraft] = reactExports.useState({
    studentId: "",
    subject: "AP Biology",
    assessment: "Quick Check",
    score: 88,
    max: 100,
    date: "Apr 29"
  });
  const [reportDraft, setReportDraft] = reactExports.useState({
    student: "",
    term: "Term 3",
    average: 88,
    conduct: "Good",
    teacherComment: "Shows steady progress and responds well to targeted feedback."
  });
  const [disciplineDraft, setDisciplineDraft] = reactExports.useState({
    studentId: "",
    category: "Classroom conduct",
    incident: "Needs a documented follow-up after repeated disruption during group activity.",
    actionTaken: "Teacher conference completed and behavior target assigned.",
    followUp: "Review progress in one week with advisor.",
    level: "medium"
  });
  const [messageDraft, setMessageDraft] = reactExports.useState({
    to: "Academic Coordinator",
    subject: "Student support update",
    body: "Please review the new intervention note and confirm next steps."
  });
  const [gradebookColumnDraft, setGradebookColumnDraft] = reactExports.useState({
    title: "Homework",
    type: "Assignment",
    date: "04/30/2026",
    maxPoints: 100
  });
  const findStudent = (studentId) => superAdminStudentPool.find((student) => student.id === studentId);
  const runAction = (message) => setActionMessage(message);
  reactExports.useEffect(() => {
    let active = true;
    const loadStudents = async () => {
      var _a;
      setRegistryStatus("loading");
      try {
        const response = await studentsAPI.getAll();
        const registryStudents = (((_a = response.data) == null ? void 0 : _a.data) ?? []).map(mapRegistryStudent);
        if (!active) return;
        setSuperAdminStudentPool(registryStudents);
        setRegistryStatus("ready");
      } catch {
        if (!active) return;
        setSuperAdminStudentPool([]);
        setRegistryStatus("error");
      }
    };
    loadStudents();
    return () => {
      active = false;
    };
  }, []);
  reactExports.useEffect(() => {
    setCourses((current) => current.map((course) => ({
      ...course,
      studentIds: getRosterForClass(course.className || course.gradeLevels[0]).map((student) => student.id)
    })));
  }, [superAdminStudentPool]);
  reactExports.useEffect(() => {
    const firstStudent = superAdminStudentPool[0];
    if (!firstStudent) return;
    setSelectedStudentId((current) => current || firstStudent.id);
    setReportCardStudentId((current) => current || firstStudent.id);
    setTeacherStudents((current) => current.length ? current : superAdminStudentPool);
    setAttendanceDraft((draft) => ({ ...draft, studentId: draft.studentId || firstStudent.id }));
    setAssignmentDraft((draft) => ({ ...draft, studentId: draft.studentId || firstStudent.id }));
    setGradeDraft((draft) => ({ ...draft, studentId: draft.studentId || firstStudent.id }));
    setReportDraft((draft) => ({ ...draft, student: draft.student || firstStudent.name }));
    setDisciplineDraft((draft) => {
      var _a;
      return { ...draft, studentId: draft.studentId || ((_a = superAdminStudentPool[1]) == null ? void 0 : _a.id) || firstStudent.id };
    });
    setCourseDraft((draft) => ({ ...draft, studentId: draft.studentId || firstStudent.id }));
  }, [superAdminStudentPool]);
  const reportCardStudent = findStudent(reportCardStudentId);
  const reportCardAverage = reactExports.useMemo(() => {
    const totalWeightedPoints = reportCardRows.reduce((sum, row) => sum + row.points / Math.max(row.maxPoints, 1) * 100 * row.coefficient, 0);
    const totalCoefficient = reportCardRows.reduce((sum, row) => sum + row.coefficient, 0);
    return totalCoefficient ? Number((totalWeightedPoints / totalCoefficient).toFixed(2)) : 0;
  }, [reportCardRows]);
  const reportCardMention = reportCardAverage >= 90 ? "Excellent" : reportCardAverage >= 80 ? "Very Good" : reportCardAverage >= 70 ? "Satisfactory" : reportCardAverage >= 60 ? "Needs Support" : "Intervention Required";
  const reportCardDecision = reportCardAverage >= 70 ? "Promote academic momentum" : "Create support plan before final approval";
  const updateReportCardRow = (rowId, field, value) => {
    setReportCardRows((current) => current.map((row) => row.id === rowId ? { ...row, [field]: value } : row));
  };
  const addReportCardCourse = () => {
    setReportCardRows((current) => [
      ...current,
      {
        id: `rc-${Date.now()}`,
        course: "New Course",
        teacher: "Dr. Mukendi",
        coefficient: 1,
        points: 0,
        maxPoints: 100,
        comment: "Teacher comment pending"
      }
    ]);
    runAction("New report-card course row added.");
  };
  const toggleCourseGrade = (grade) => {
    setCourseDraft((draft) => ({ ...draft, gradeLevels: [grade], className: grade }));
  };
  const resetCourseDraft = () => {
    var _a;
    const firstStudentId = ((_a = superAdminStudentPool[0]) == null ? void 0 : _a.id) ?? "";
    setEditingCourseId(null);
    setCourseDraft({
      name: "Integrated Science Lab",
      abbreviation: "ISL",
      creditHours: 1,
      className: "Grade 10A",
      room: "Lab 2",
      gradeLevels: ["10th Grade"],
      studentId: firstStudentId
    });
  };
  const generateReportCard = () => {
    const studentName = (reportCardStudent == null ? void 0 : reportCardStudent.name) ?? "Selected student";
    const summary = `${studentName} earned ${reportCardAverage}% for ${reportCardTerm}. Mention: ${reportCardMention}. Decision: ${reportCardDecision}.`;
    const nextReport = {
      id: `rc-final-${Date.now()}`,
      student: studentName,
      term: reportCardTerm,
      average: reportCardAverage,
      mention: reportCardMention,
      rows: reportCardRows,
      summary
    };
    setGeneratedReportCards((current) => [nextReport, ...current]);
    setReportList((current) => [{
      student: studentName,
      term: reportCardTerm,
      average: reportCardAverage,
      conduct: reportCardMention,
      teacherComment: summary,
      principalStatus: "Pending review",
      download: "Report card draft"
    }, ...current]);
    runAction(`${studentName}'s report card was generated with an automatic ${reportCardAverage}% average.`);
  };
  const createCourse = () => {
    const selectedGrade = courseDraft.gradeLevels[0] ?? "10th Grade";
    const roster = getRosterForClass(courseDraft.className || selectedGrade);
    const nextCourse = {
      id: editingCourseId ?? `course-${Date.now()}`,
      name: courseDraft.name,
      abbreviation: courseDraft.abbreviation,
      creditHours: courseDraft.creditHours,
      teacher: "Dr. Mukendi",
      className: selectedGrade,
      room: courseDraft.room,
      gradeLevels: [selectedGrade],
      studentIds: roster.map((student) => student.id),
      status: editingCourseId ? "updated" : "draft"
    };
    setCourses((current) => editingCourseId ? current.map((course) => course.id === editingCourseId ? { ...course, ...nextCourse } : course) : [nextCourse, ...current]);
    setTeacherStudents((current) => {
      const existingIds = new Set(current.map((student) => student.id));
      return [...roster.filter((student) => !existingIds.has(student.id)), ...current];
    });
    setSelectedGradebookCourseId(nextCourse.id);
    runAction(`${nextCourse.name} ${editingCourseId ? "updated" : "created"} for ${selectedGrade}; ${roster.length} official student(s) were enrolled and sent to Grade Book.`);
    setEditingCourseId(null);
  };
  const editCourse = (courseId) => {
    var _a;
    const course = courses.find((item) => item.id === courseId);
    if (!course) return;
    setEditingCourseId(course.id);
    setCourseDraft({
      name: course.name,
      abbreviation: course.abbreviation,
      creditHours: course.creditHours,
      className: course.className,
      room: course.room,
      gradeLevels: course.gradeLevels,
      studentId: course.studentIds[0] ?? ((_a = superAdminStudentPool[0]) == null ? void 0 : _a.id) ?? ""
    });
    runAction(`${course.name} loaded for editing.`);
  };
  const deleteCourse = (courseId) => {
    var _a;
    const course = courses.find((item) => item.id === courseId);
    setCourses((current) => current.filter((item) => item.id !== courseId));
    if (editingCourseId === courseId) resetCourseDraft();
    if (selectedEnrollmentCourseId === courseId) setSelectedEnrollmentCourseId(((_a = courses.find((item) => item.id !== courseId)) == null ? void 0 : _a.id) ?? "");
    runAction(`${(course == null ? void 0 : course.name) ?? "Subject"} removed from this teacher workspace.`);
  };
  const filteredCourses = courses.filter((course) => {
    const searchable = `${course.gradeLevels.join(" ")} ${course.name} ${course.abbreviation} ${course.room}`.toLowerCase();
    return searchable.includes(courseSearch.toLowerCase());
  });
  const selectedEnrollmentCourse = courses.find((course) => course.id === selectedEnrollmentCourseId) ?? courses[0];
  const totalEnrollment = courses.reduce((sum, course) => sum + course.studentIds.length, 0);
  const totalCreditHours = courses.reduce((sum, course) => sum + course.creditHours, 0);
  const coveredGrades = Array.from(new Set(courses.flatMap((course) => course.gradeLevels))).length;
  const openCourseEnrollment = (courseId) => {
    const course = courses.find((item) => item.id === courseId);
    setSelectedEnrollmentCourseId(courseId);
    setCourseTab("enrollment");
    runAction(`${(course == null ? void 0 : course.name) ?? "Subject"} enrollment opened.`);
  };
  const selectedGradebookCourse = courses.find((course) => course.id === selectedGradebookCourseId) ?? courses[0];
  const gradebookColumns = selectedGradebookCourse ? gradebookColumnsByCourse[selectedGradebookCourse.id] ?? [] : [];
  const gradebookStudents = (selectedGradebookCourse == null ? void 0 : selectedGradebookCourse.studentIds.map((studentId) => findStudent(studentId)).filter((student) => Boolean(student))) ?? [];
  const getGradebookScoreKey = (columnId, studentId) => `${selectedGradebookCourse == null ? void 0 : selectedGradebookCourse.id}-${columnId}-${studentId}`;
  const normalizeGradebookEntry = (value, maxPoints) => {
    const normalized = value.trim().toUpperCase();
    if (!normalized || normalized === "E" || normalized === "I") return null;
    if (normalized === "U") return 0;
    const numeric = Number(normalized);
    if (!Number.isFinite(numeric)) return null;
    return Math.max(0, Math.min(100, numeric / Math.max(maxPoints, 1) * 100));
  };
  const getFinalGrade = (studentId) => {
    const countedScores = gradebookColumns.map((column) => normalizeGradebookEntry(gradebookScores[getGradebookScoreKey(column.id, studentId)] ?? "", column.maxPoints)).filter((score) => score !== null);
    if (!countedScores.length) return null;
    return Math.round(countedScores.reduce((sum, score) => sum + score, 0) / countedScores.length);
  };
  const gradebookValues = gradebookStudents.map((student) => getFinalGrade(student.id)).filter((score) => score !== null);
  const gradebookAverage = gradebookValues.length ? Math.round(gradebookValues.reduce((sum, score) => sum + score, 0) / gradebookValues.length) : 0;
  const gradebookMedian = gradebookValues.length ? [...gradebookValues].sort((a, b) => a - b)[Math.floor(gradebookValues.length / 2)] : 0;
  const updateGradebookScore = (columnId, studentId, score) => {
    setGradebookScores((current) => ({ ...current, [getGradebookScoreKey(columnId, studentId)]: score }));
  };
  const createGradebookColumn = () => {
    const title = gradebookColumnDraft.title.trim();
    if (!title) {
      runAction("Add a column name before creating a gradebook column.");
      return;
    }
    const nextColumn = {
      id: `gb-${Date.now()}`,
      title,
      type: gradebookColumnDraft.type.trim() || "Assignment",
      date: gradebookColumnDraft.date.trim() || "04/30/2026",
      maxPoints: Math.max(1, Number(gradebookColumnDraft.maxPoints) || 100)
    };
    setGradebookColumnsByCourse((current) => ({
      ...current,
      [selectedGradebookCourse.id]: [...current[selectedGradebookCourse.id] ?? [], nextColumn]
    }));
    setGradebookColumnDraft((draft) => ({ ...draft, title: "", maxPoints: 100 }));
    runAction(`${nextColumn.title} column added. Final grades will recalculate automatically.`);
  };
  const deleteGradebookColumn = (columnId) => {
    setGradebookColumnsByCourse((current) => ({
      ...current,
      [selectedGradebookCourse.id]: (current[selectedGradebookCourse.id] ?? []).filter((column) => column.id !== columnId)
    }));
    setGradebookScores((current) => {
      const next = { ...current };
      Object.keys(next).forEach((key) => {
        if (key.includes(`-${columnId}-`)) delete next[key];
      });
      return next;
    });
    runAction("Gradebook column removed and final grades recalculated.");
  };
  const importStudent = () => {
    const student = findStudent(selectedStudentId);
    if (!student) return;
    setTeacherStudents((current) => current.some((item) => item.id === student.id) ? current : [student, ...current]);
    runAction(`${student.name} imported from the Super Admin student registry.`);
  };
  const addAttendance = () => {
    const student = findStudent(attendanceDraft.studentId);
    setAttendanceEntries((current) => [{ ...attendanceDraft }, ...current]);
    runAction(`${(student == null ? void 0 : student.name) ?? "Student"} marked ${attendanceDraft.status}; parent/admin visibility queued.`);
  };
  const createAssignment = () => {
    const student = findStudent(assignmentDraft.studentId);
    setAssignmentList((current) => [{ id: `asg-${Date.now()}`, ...assignmentDraft }, ...current]);
    runAction(`${assignmentDraft.title} assigned to ${(student == null ? void 0 : student.name) ?? "selected student"}.`);
  };
  const createReport = () => {
    setReportList((current) => [{ ...reportDraft, principalStatus: "Pending review", download: "Draft" }, ...current]);
    runAction(`${reportDraft.student}'s report draft created for principal approval.`);
  };
  const createDisciplineReport = () => {
    const student = findStudent(disciplineDraft.studentId);
    setDisciplineList((current) => [{
      id: `disc-${String(current.length + 1).padStart(3, "0")}`,
      studentId: disciplineDraft.studentId,
      student: (student == null ? void 0 : student.name) ?? "Selected student",
      date: "Apr 29",
      level: disciplineDraft.level,
      category: disciplineDraft.category,
      incident: disciplineDraft.incident,
      context: "Teacher-created record from classroom observation and linked student data.",
      actionTaken: disciplineDraft.actionTaken,
      followUp: disciplineDraft.followUp,
      parentContact: "Draft message prepared",
      status: "Open"
    }, ...current]);
    runAction(`Detailed discipline report opened for ${(student == null ? void 0 : student.name) ?? "selected student"}.`);
  };
  const sendMessage = () => {
    setInbox((current) => [{
      id: Date.now(),
      from: `To ${messageDraft.to}`,
      subject: messageDraft.subject,
      body: messageDraft.body,
      time: "Just now",
      requiresResponse: false
    }, ...current]);
    runAction(`Message sent to ${messageDraft.to} and logged in the teacher thread.`);
  };
  const inputClass = "input-kcs py-2 text-sm";
  const panelClass = "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50";
  const compactButton = "rounded-xl bg-kcs-blue-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-kcs-blue-800";
  if (segment === "grades") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-kcs-blue-100 bg-white p-5 shadow-sm dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-kcs-blue-50 text-kcs-blue-700 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-kcs-blue-900 dark:text-white", children: meta.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300", children: "AI-powered grade entry, weighted calculations, predictive risk, parent/student sync, and report-card automation." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => runAction("Gradebook saved locally and queued for backend sync."), className: "btn-primary flex items-center gap-2 py-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 16 }),
            " Save updates"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => runAction("Advanced gradebook export prepared."), className: "btn-gold flex items-center gap-2 py-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 16 }),
            " Export PDF"
          ] })
        ] })
      ] }) }),
      actionMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 dark:border-green-900/40 dark:bg-green-900/20 dark:text-green-300", children: actionMessage }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AdvancedGradebook,
        {
          courses,
          students: superAdminStudentPool,
          selectedCourseId: selectedGradebookCourseId,
          onSelectCourse: setSelectedGradebookCourseId,
          onAction: runAction
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-kcs-blue-100 bg-white p-5 shadow-sm dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-kcs-blue-50 text-kcs-blue-700 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-kcs-blue-900 dark:text-white", children: meta.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300", children: meta.subtitle })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => runAction("Workspace saved locally and queued for backend sync."), className: "btn-primary flex items-center gap-2 py-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 16 }),
          " Save updates"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => runAction(`${meta.title} export prepared.`), className: "btn-gold flex items-center gap-2 py-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 16 }),
          " Export PDF"
        ] })
      ] })
    ] }) }),
    actionMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700 dark:border-green-900/40 dark:bg-green-900/20 dark:text-green-300", children: actionMessage }),
    segment === "courses" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-kcs-blue-100 bg-white shadow-sm dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-gray-100 px-5 pt-5 dark:border-kcs-blue-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase text-kcs-blue-500", children: "Kinshasa Christian School" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-kcs-blue-900 dark:text-white", children: "Subject Setup" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "2025-2026, Second Semester Q4. Tell the system what subjects you teach and which grades are enrolled." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex rounded-xl bg-gray-100 p-1 dark:bg-kcs-blue-800/40", children: [
            { id: "setup", label: "Subject Setup" },
            { id: "enrollment", label: "Subject Enrollment" }
          ].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setCourseTab(tab.id),
              className: `rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${courseTab === tab.id ? "bg-white text-kcs-blue-800 shadow-sm dark:bg-kcs-blue-950 dark:text-white" : "text-gray-500 hover:text-kcs-blue-700 dark:text-gray-300"}`,
              children: tab.label
            },
            tab.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-3 pb-5 sm:grid-cols-2 xl:grid-cols-4", children: [
          { label: "Subjects", value: courses.length, sub: "active workspace" },
          { label: "Enrollment", value: totalEnrollment, sub: "student seats" },
          { label: "Credit Hours", value: totalCreditHours, sub: "teaching load" },
          { label: "Grade Coverage", value: coveredGrades, sub: "grade levels" }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 px-4 py-3 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: item.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-gray-600 dark:text-gray-300", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 dark:text-gray-500", children: item.sub })
        ] }, item.label)) })
      ] }),
      courseTab === "setup" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 p-5 xl:grid-cols-[0.8fr_1.2fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-kcs-blue-900 dark:text-white", children: editingCourseId ? "Edit subject" : "Add a subject that you teach" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Fill in the fields below. Grades can be selected in bulk like a school SIS." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1 text-xs font-semibold text-gray-500 dark:text-gray-400", children: [
              "Subject name",
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, value: courseDraft.name, onChange: (event) => setCourseDraft((draft) => ({ ...draft, name: event.target.value })) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1 text-xs font-semibold text-gray-500 dark:text-gray-400", children: [
                "Abbreviation",
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, value: courseDraft.abbreviation, onChange: (event) => setCourseDraft((draft) => ({ ...draft, abbreviation: event.target.value })) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1 text-xs font-semibold text-gray-500 dark:text-gray-400", children: [
                "Credit Hours",
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, type: "number", min: 0, value: courseDraft.creditHours, onChange: (event) => setCourseDraft((draft) => ({ ...draft, creditHours: Number(event.target.value) })) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1 text-xs font-semibold text-gray-500 dark:text-gray-400", children: [
                "Room",
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, value: courseDraft.room, onChange: (event) => setCourseDraft((draft) => ({ ...draft, room: event.target.value })) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white px-3 py-2 text-xs font-semibold text-gray-600 dark:bg-kcs-blue-950/40 dark:text-gray-300", children: [
                "Auto enrollment",
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-lg font-bold text-kcs-blue-900 dark:text-white", children: getRosterForClass(courseDraft.className || courseDraft.gradeLevels[0]).length }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-normal text-gray-400", children: "official student(s) in selected class" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-gray-500 dark:text-gray-400", children: "Which class do you teach the subject for?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 rounded-xl border border-gray-100 bg-white p-3 dark:border-kcs-blue-800 dark:bg-kcs-blue-950/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3", children: gradeOptions.map((grade) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex min-w-0 items-center gap-2 text-xs font-medium text-gray-700 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "h-4 w-4 flex-shrink-0 border-gray-300 text-kcs-blue-700 focus:ring-kcs-blue-500", type: "radio", name: "course-grade", checked: courseDraft.gradeLevels[0] === grade, onChange: () => toggleCourseGrade(grade) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 break-words leading-snug", children: grade })
              ] }, grade)) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: createCourse, className: compactButton, children: editingCourseId ? "Save subject" : "Add subject" }),
              editingCourseId && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: resetCourseDraft, className: "rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 dark:border-kcs-blue-700 dark:text-gray-300 dark:hover:bg-kcs-blue-800/40", children: "Cancel edit" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "relative block sm:w-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, value: courseSearch, onChange: (event) => setCourseSearch(event.target.value), placeholder: "Search" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-gray-500 dark:text-gray-400", children: [
              filteredCourses.length,
              " subject(s)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-xl border border-gray-100 dark:border-kcs-blue-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[820px] text-left text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50 text-xs uppercase text-gray-500 dark:bg-kcs-blue-800/40 dark:text-gray-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3", children: "Grade" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3", children: "Subject" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3", children: "Abbreviation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3", children: "Cr. Hours" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3", children: "Enrollment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3", children: "Edit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3", children: "Delete" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-100 dark:divide-kcs-blue-800", children: filteredCourses.map((subject) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: subject.gradeLevels.join(", ") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 font-semibold text-kcs-blue-900 dark:text-white", children: subject.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: subject.abbreviation }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: subject.creditHours }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openCourseEnrollment(subject.id), className: "rounded-full bg-kcs-blue-50 px-3 py-1 text-xs font-bold text-kcs-blue-700 transition-colors hover:bg-kcs-blue-700 hover:text-white dark:bg-kcs-blue-900/40 dark:text-kcs-blue-200", children: [
                subject.studentIds.length,
                " enrolled"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => editCourse(subject.id), className: "rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700 transition-colors hover:bg-kcs-blue-100 hover:text-kcs-blue-800 dark:bg-kcs-blue-800/40 dark:text-gray-200", children: "Edit" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => deleteCourse(subject.id), className: "rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600 transition-colors hover:bg-red-600 hover:text-white dark:bg-red-900/20 dark:text-red-300", children: "Delete" }) })
            ] }, subject.id)) })
          ] }) })
        ] })
      ] }),
      courseTab === "enrollment" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 p-5 lg:grid-cols-2", children: [
        selectedEnrollmentCourse && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 rounded-xl border border-kcs-blue-100 bg-kcs-blue-50 p-4 dark:border-kcs-blue-700 dark:bg-kcs-blue-900/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase text-kcs-blue-500", children: "Selected subject enrollment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-kcs-blue-900 dark:text-white", children: selectedEnrollmentCourse.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-600 dark:text-gray-300", children: [
              selectedEnrollmentCourse.gradeLevels.join(", "),
              " - ",
              selectedEnrollmentCourse.studentIds.length,
              " enrolled - ",
              superAdminStudentPool.length - selectedEnrollmentCourse.studentIds.length,
              " available"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => editCourse(selectedEnrollmentCourse.id), className: "rounded-xl bg-white px-4 py-2 text-sm font-semibold text-kcs-blue-700 shadow-sm hover:bg-kcs-blue-100 dark:bg-kcs-blue-950 dark:text-kcs-blue-200", children: "Edit selected subject" })
        ] }) }),
        courses.map((subject) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl border p-4 ${(selectedEnrollmentCourse == null ? void 0 : selectedEnrollmentCourse.id) === subject.id ? "border-kcs-blue-300 bg-white shadow-sm dark:border-kcs-blue-600 dark:bg-kcs-blue-900/40" : "border-gray-100 bg-gray-50 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase text-kcs-blue-500", children: subject.gradeLevels.join(", ") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-1 font-bold text-kcs-blue-900 dark:text-white", children: subject.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                subject.abbreviation,
                " - ",
                subject.creditHours,
                " credit hour(s) - ",
                subject.room
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "badge-blue text-xs", children: [
              subject.studentIds.length,
              " enrolled"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: superAdminStudentPool.map((student) => {
            const enrolled = subject.studentIds.includes(student.id);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  setCourses((current) => current.map((course) => course.id === subject.id ? { ...course, studentIds: enrolled ? course.studentIds.filter((id) => id !== student.id) : [...course.studentIds, student.id] } : course));
                  if (!enrolled && !teacherStudents.some((item) => item.id === student.id)) setTeacherStudents((current) => [student, ...current]);
                  runAction(`${student.name} ${enrolled ? "removed from" : "enrolled in"} ${subject.name}.`);
                },
                className: `rounded-full px-3 py-1 text-xs font-semibold ${enrolled ? "bg-kcs-blue-700 text-white" : "bg-white text-gray-700 hover:bg-kcs-blue-50 hover:text-kcs-blue-700 dark:bg-kcs-blue-950/50 dark:text-gray-300"}`,
                children: [
                  enrolled ? "✓" : "+",
                  " ",
                  student.name
                ]
              },
              student.id
            );
          }) })
        ] }, subject.id))
      ] })
    ] }) }),
    segment === "students" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[0.8fr_1.2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: panelClass, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Import from Super Admin registry" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Teacher-created rosters must be based on official school records." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: inputClass, value: selectedStudentId, onChange: (event) => setSelectedStudentId(event.target.value), children: superAdminStudentPool.map((student) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: student.id, children: [
            student.name,
            " - ",
            student.grade,
            student.section,
            " - ",
            student.risk,
            " risk"
          ] }, student.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: importStudent, className: compactButton, children: "Add to my students" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-xl bg-kcs-blue-50 p-4 text-sm text-kcs-blue-800 dark:bg-kcs-blue-900/30 dark:text-kcs-blue-200", children: [
          superAdminStudentPool.length,
          " verified students available from the school registry."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 lg:grid-cols-2", children: teacherStudents.map((student) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white", children: student.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
              student.grade,
              student.section,
              " - advisor ",
              student.advisor
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `rounded-full px-3 py-1 text-xs font-semibold ${statusTone(student.risk ?? "low")}`, children: [
            student.risk ?? "low",
            " risk"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-3 gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-kcs-blue-900 dark:text-white", children: [
              student.average,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Average" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-kcs-blue-900 dark:text-white", children: [
              student.attendance,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Attendance" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-kcs-blue-900 dark:text-white", children: [
              "#",
              student.rank
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Rank" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300", children: student.aiInsight })
      ] }, student.id)) })
    ] }),
    segment === "attendance" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[1fr_1.2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Daily Register" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 grid gap-3 rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: inputClass, value: attendanceDraft.studentId, onChange: (event) => setAttendanceDraft((draft) => ({ ...draft, studentId: event.target.value })), children: teacherStudents.map((student) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: student.id, children: student.name }, student.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2 sm:grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, value: attendanceDraft.date, onChange: (event) => setAttendanceDraft((draft) => ({ ...draft, date: event.target.value })) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: inputClass, value: attendanceDraft.status, onChange: (event) => setAttendanceDraft((draft) => ({ ...draft, status: event.target.value })), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "present", children: "Present" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "late", children: "Late" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "absent", children: "Absent" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: addAttendance, className: compactButton, children: "Mark" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: attendanceEntries.map((record, index) => {
          const student = findStudent(record.studentId);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-kcs-blue-900 dark:text-white", children: student == null ? void 0 : student.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                record.date,
                " - ",
                record.className
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusTone(record.status)}`, children: record.status })
          ] }, `${record.studentId}-${record.date}-${index}`);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-3", children: attendanceAnalytics.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-kcs-blue-900 dark:text-white", children: item.scope }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 font-display text-3xl font-bold text-kcs-blue-900 dark:text-white", children: [
          item.present,
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
          item.late,
          "% late - ",
          item.absent,
          "% absent"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs font-semibold capitalize text-kcs-blue-600 dark:text-kcs-blue-300", children: item.trend })
      ] }, item.scope)) })
    ] }),
    segment === "assignments" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[0.85fr_1.15fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: panelClass, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Create assignment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: inputClass, value: assignmentDraft.studentId, onChange: (event) => setAssignmentDraft((draft) => ({ ...draft, studentId: event.target.value })), children: teacherStudents.map((student) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: student.id, children: student.name }, student.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, value: assignmentDraft.title, onChange: (event) => setAssignmentDraft((draft) => ({ ...draft, title: event.target.value })) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, value: assignmentDraft.subject, onChange: (event) => setAssignmentDraft((draft) => ({ ...draft, subject: event.target.value })) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2 sm:grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, value: assignmentDraft.due, onChange: (event) => setAssignmentDraft((draft) => ({ ...draft, due: event.target.value })) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: inputClass, value: assignmentDraft.priority, onChange: (event) => setAssignmentDraft((draft) => ({ ...draft, priority: event.target.value })), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "low", children: "Low" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "medium", children: "Medium" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "high", children: "High" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: createAssignment, className: compactButton, children: "Assign" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 lg:grid-cols-2", children: assignmentList.map((assignment) => {
        const student = findStudent(assignment.studentId);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white", children: assignment.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
                assignment.subject,
                " - ",
                student == null ? void 0 : student.name
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusTone(assignment.status)}`, children: assignment.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm text-gray-600 dark:text-gray-300", children: [
            "Due: ",
            assignment.due,
            " - Priority: ",
            assignment.priority
          ] })
        ] }, assignment.id);
      }) })
    ] }),
    segment === "grades" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: panelClass, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-kcs-blue-900 dark:text-white", children: "Gradebook" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Learn more about Useful Tools, Copying Grades and General Setup for the Gradebook." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3 lg:grid-cols-[1fr_1.4fr_0.6fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1 text-xs font-semibold text-gray-500 dark:text-gray-400", children: [
            "Semester",
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: inputClass, defaultValue: "2025-2026, SECOND SEMESTER Q4 2025-2026", children: /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "2025-2026, SECOND SEMESTER Q4 2025-2026" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1 text-xs font-semibold text-gray-500 dark:text-gray-400", children: [
            "Subject",
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: inputClass, value: selectedGradebookCourse == null ? void 0 : selectedGradebookCourse.id, onChange: (event) => setSelectedGradebookCourseId(event.target.value), children: courses.map((course) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: course.id, children: [
              "(",
              course.gradeLevels[0],
              ") ",
              course.name,
              " - ",
              course.abbreviation
            ] }, course.id)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 px-4 py-3 text-center dark:bg-kcs-blue-800/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: gradebookStudents.length }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-gray-500 dark:text-gray-400", children: "Students" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3 rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30 lg:grid-cols-[1fr_0.8fr_0.8fr_0.5fr_auto]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: inputClass,
              value: gradebookColumnDraft.title,
              onChange: (event) => setGradebookColumnDraft((draft) => ({ ...draft, title: event.target.value })),
              placeholder: "Column name"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: inputClass,
              value: gradebookColumnDraft.type,
              onChange: (event) => setGradebookColumnDraft((draft) => ({ ...draft, type: event.target.value })),
              placeholder: "Assignment"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: inputClass,
              value: gradebookColumnDraft.date,
              onChange: (event) => setGradebookColumnDraft((draft) => ({ ...draft, date: event.target.value })),
              placeholder: "04/30/2026"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: inputClass,
              type: "number",
              min: 1,
              value: gradebookColumnDraft.maxPoints,
              onChange: (event) => setGradebookColumnDraft((draft) => ({ ...draft, maxPoints: Number(event.target.value) })),
              placeholder: "100"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: createGradebookColumn, className: compactButton, children: "Add column" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-gray-100 bg-white dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 border-b border-gray-100 p-4 dark:border-kcs-blue-800 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase text-kcs-blue-500", children: "Students" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-kcs-blue-900 dark:text-white", children: selectedGradebookCourse ? `(${selectedGradebookCourse.gradeLevels[0]}) ${selectedGradebookCourse.name} - ${selectedGradebookCourse.abbreviation}` : "Select a course" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: "Students are loaded from the class selected when the course is created." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 text-xs font-semibold text-gray-500 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-gray-100 px-3 py-1 dark:bg-kcs-blue-800/50", children: "Show full name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-gray-100 px-3 py-1 dark:bg-kcs-blue-800/50", children: "Show columns" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-gray-100 px-3 py-1 dark:bg-kcs-blue-800/50", children: "Hide columns" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[1040px] text-left text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50 text-xs uppercase text-gray-500 dark:bg-kcs-blue-800/40 dark:text-gray-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Student" }),
            gradebookColumns.map((column) => /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "px-3 py-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-bold text-kcs-blue-900 dark:text-white", children: column.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block normal-case text-gray-400", children: [
                "(",
                column.type,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block normal-case text-gray-400", children: column.date }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => deleteGradebookColumn(column.id), className: "mt-2 text-[11px] font-semibold normal-case text-red-500 hover:text-red-600", children: "Remove" })
            ] }, column.id)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "px-4 py-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-bold text-kcs-blue-900 dark:text-white", children: "Final Grade" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block normal-case text-gray-400", children: "(Final Grade)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-gray-100 dark:divide-kcs-blue-800", children: [
            gradebookStudents.map((student) => {
              const finalGrade = getFinalGrade(student.id);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-gray-700 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "max-w-[190px] truncate px-4 py-3 font-semibold text-kcs-blue-900 dark:text-white", title: student.name, children: student.name }),
                gradebookColumns.map((column) => {
                  const score = gradebookScores[getGradebookScoreKey(column.id, student.id)] ?? "";
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      className: "mx-auto block w-20 rounded-lg border border-gray-200 bg-white px-2 py-2 text-center text-sm font-semibold text-kcs-blue-900 focus:border-kcs-blue-500 focus:outline-none focus:ring-2 focus:ring-kcs-blue-100 dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white",
                      value: score,
                      onChange: (event) => updateGradebookScore(column.id, student.id, event.target.value),
                      placeholder: "I"
                    }
                  ) }, `${student.id}-${column.id}`);
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-24 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center text-sm font-bold text-kcs-blue-900 dark:border-kcs-blue-700 dark:bg-kcs-blue-900 dark:text-white", children: finalGrade === null ? "I" : `${finalGrade} / 100` }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs", children: finalGrade === null ? "No counted grades" : "Auto-calculated" })
              ] }, student.id);
            }),
            !gradebookStudents.length && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: gradebookColumns.length + 3, className: "px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400", children: "Select or create a course with a class roster to populate the Gradebook." }) }),
            gradebookStudents.length > 0 && gradebookColumns.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 3, className: "px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400", children: "Create the first grade column above. Final Grade will calculate automatically after scores are entered." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50 font-bold text-kcs-blue-900 dark:bg-kcs-blue-800/30 dark:text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "Average / Total" }),
              gradebookColumns.map((column) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: "I" }, `avg-${column.id}`)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-center", children: [
                gradebookAverage,
                " / 100"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50 font-bold text-kcs-blue-900 dark:bg-kcs-blue-800/30 dark:text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "Median / Total" }),
              gradebookColumns.map((column) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: "I" }, `median-${column.id}`)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-center", children: [
                gradebookMedian,
                " / 100"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: panelClass, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Legend" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid gap-2 text-sm text-gray-600 dark:text-gray-300", children: ["<Leave Blank> - Grade will not be counted.", "0 (zero) - Grade will be counted as zero.", "E - Excused absence, grade will not be counted.", "U - Unexcused absence, grade will be counted as zero.", "I - Incomplete, grade will not be counted."].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: item }, item)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: panelClass, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Grading scale" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300", children: gradingScaleRows.map(([from, to, letter]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            from,
            " to ",
            to,
            " gets ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-kcs-blue-900 dark:text-white", children: letter })
          ] }, `${from}-${to}-${letter}`)) })
        ] })
      ] })
    ] }),
    segment === "report-card" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[0.8fr_1.2fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: panelClass, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Bulletin setup" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: inputClass, value: reportCardStudentId, onChange: (event) => setReportCardStudentId(event.target.value), children: teacherStudents.map((student) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: student.id, children: [
              student.name,
              " - ",
              student.grade,
              student.section
            ] }, student.id)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, value: reportCardTerm, onChange: (event) => setReportCardTerm(event.target.value) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 rounded-xl bg-gray-50 p-4 text-center dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-3xl font-bold text-kcs-blue-900 dark:text-white", children: [
                  reportCardAverage,
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Average" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-bold text-kcs-blue-900 dark:text-white", children: reportCardMention }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Mention" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-bold text-kcs-blue-900 dark:text-white", children: reportCardRows.length }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Courses" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: generateReportCard, className: compactButton, children: "Generate report card" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: addReportCardCourse, className: "rounded-xl border border-kcs-blue-200 px-4 py-2 text-sm font-semibold text-kcs-blue-700 hover:bg-kcs-blue-50 dark:border-kcs-blue-700 dark:text-kcs-blue-200 dark:hover:bg-kcs-blue-900/40", children: "Add course row" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: panelClass, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-kcs-blue-900 dark:text-white", children: [
                reportCardStudent == null ? void 0 : reportCardStudent.name,
                " report card"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
                reportCardTerm,
                " - weighted automatic calculation"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-3 py-1 text-xs font-semibold ${statusTone(reportCardAverage >= 70 ? "low" : "high")}`, children: reportCardDecision })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[760px] text-left text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-gray-100 text-xs uppercase text-gray-400 dark:border-kcs-blue-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 pr-3", children: "Course" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 pr-3", children: "Points" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 pr-3", children: "Max" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 pr-3", children: "Coef." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 pr-3", children: "Average" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3", children: "Comment" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-100 dark:divide-kcs-blue-800", children: reportCardRows.map((row) => {
              const courseAverage = Number((row.points / Math.max(row.maxPoints, 1) * 100).toFixed(1));
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, value: row.course, onChange: (event) => updateReportCardRow(row.id, "course", event.target.value) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, type: "number", min: 0, value: row.points, onChange: (event) => updateReportCardRow(row.id, "points", Number(event.target.value)) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, type: "number", min: 1, value: row.maxPoints, onChange: (event) => updateReportCardRow(row.id, "maxPoints", Number(event.target.value)) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, type: "number", min: 1, value: row.coefficient, onChange: (event) => updateReportCardRow(row.id, "coefficient", Number(event.target.value)) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `rounded-full px-3 py-1 text-xs font-semibold ${statusTone(courseAverage >= 70 ? "low" : "high")}`, children: [
                  courseAverage,
                  "%"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, value: row.comment, onChange: (event) => updateReportCardRow(row.id, "comment", event.target.value) }) })
              ] }, row.id);
            }) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: panelClass, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase text-gray-400", children: "Teacher narrative" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300", children: [
            reportCardStudent == null ? void 0 : reportCardStudent.name,
            " is currently at ",
            reportCardAverage,
            "% with a ",
            reportCardMention.toLowerCase(),
            " standing. The next step is to keep the strongest courses visible while targeting the lowest course for intervention."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: panelClass, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase text-gray-400", children: "Parent-ready summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300", children: [
            "Overall average: ",
            reportCardAverage,
            "%. Mention: ",
            reportCardMention,
            ". Decision: ",
            reportCardDecision,
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: panelClass, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase text-gray-400", children: "Approval flow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300", children: "Teacher draft to academic coordinator review to Super Admin approval to parent/student publication." })
        ] })
      ] }),
      generatedReportCards.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: panelClass, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Generated report cards" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-3 lg:grid-cols-2", children: generatedReportCards.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: card.student }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                card.term,
                " - ",
                card.rows.length,
                " courses"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "badge-blue text-xs", children: [
              card.average,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300", children: card.summary })
        ] }, card.id)) })
      ] })
    ] }),
    segment === "reports" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[0.85fr_1.15fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: panelClass, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Draft report card" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: inputClass, value: reportDraft.student, onChange: (event) => setReportDraft((draft) => ({ ...draft, student: event.target.value })), children: teacherStudents.map((student) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: student.name, children: student.name }, student.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, value: reportDraft.term, onChange: (event) => setReportDraft((draft) => ({ ...draft, term: event.target.value })) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, type: "number", value: reportDraft.average, onChange: (event) => setReportDraft((draft) => ({ ...draft, average: Number(event.target.value) })) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, value: reportDraft.conduct, onChange: (event) => setReportDraft((draft) => ({ ...draft, conduct: event.target.value })) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: inputClass, value: reportDraft.teacherComment, onChange: (event) => setReportDraft((draft) => ({ ...draft, teacherComment: event.target.value })), rows: 4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: createReport, className: compactButton, children: "Create report draft" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 lg:grid-cols-2", children: reportList.map((card, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white", children: card.student }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
              card.term,
              " - Average ",
              card.average,
              "% - Conduct ",
              card.conduct
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-blue text-xs", children: card.principalStatus })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300", children: card.teacherComment }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs font-semibold text-kcs-blue-600 dark:text-kcs-blue-300", children: card.download })
      ] }, card.student)) })
    ] }),
    segment === "discipline" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[0.8fr_1.2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: panelClass, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Open discipline report" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: inputClass, value: disciplineDraft.studentId, onChange: (event) => setDisciplineDraft((draft) => ({ ...draft, studentId: event.target.value })), children: teacherStudents.map((student) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: student.id, children: student.name }, student.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, value: disciplineDraft.category, onChange: (event) => setDisciplineDraft((draft) => ({ ...draft, category: event.target.value })) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: inputClass, value: disciplineDraft.incident, onChange: (event) => setDisciplineDraft((draft) => ({ ...draft, incident: event.target.value })), rows: 3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: inputClass, value: disciplineDraft.actionTaken, onChange: (event) => setDisciplineDraft((draft) => ({ ...draft, actionTaken: event.target.value })), rows: 3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: inputClass, value: disciplineDraft.followUp, onChange: (event) => setDisciplineDraft((draft) => ({ ...draft, followUp: event.target.value })), rows: 3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: inputClass, value: disciplineDraft.level, onChange: (event) => setDisciplineDraft((draft) => ({ ...draft, level: event.target.value })), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "low", children: "Low" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "medium", children: "Medium" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "high", children: "High" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: createDisciplineReport, className: compactButton, children: "Create detailed report" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: disciplineList.map((report) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold uppercase text-kcs-blue-500", children: [
              report.id,
              " - ",
              report.date
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-xl font-bold text-kcs-blue-900 dark:text-white", children: report.student }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: report.category })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusTone(report.level)}`, children: report.level }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-3 py-1 text-xs font-semibold ${statusTone(report.status)}`, children: report.status })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-4 lg:grid-cols-2", children: [
          ["Incident", report.incident],
          ["Context", report.context],
          ["Action taken", report.actionTaken],
          ["Follow-up plan", report.followUp],
          ["Parent contact", report.parentContact]
        ].map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase text-gray-400", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300", children: value })
        ] }, label)) })
      ] }, report.id)) })
    ] }),
    segment === "messages" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Teacher Inbox" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: inbox.map((message) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-kcs-blue-900 dark:text-white", children: message.from }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
            message.subject,
            " - ",
            message.time
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300", children: message.body })
        ] }, `${message.id}-${message.subject}`)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Compose and active threads" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 grid gap-3 rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, value: messageDraft.to, onChange: (event) => setMessageDraft((draft) => ({ ...draft, to: event.target.value })) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClass, value: messageDraft.subject, onChange: (event) => setMessageDraft((draft) => ({ ...draft, subject: event.target.value })) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: inputClass, value: messageDraft.body, onChange: (event) => setMessageDraft((draft) => ({ ...draft, body: event.target.value })), rows: 3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: sendMessage, className: compactButton, children: "Send message" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: internalThreads.map((thread) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-kcs-blue-900 dark:text-white", children: thread.subject }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
            thread.channel,
            " - ",
            thread.unread,
            " unread"
          ] })
        ] }, thread.subject)) })
      ] })
    ] })
  ] });
};
const TeacherDashboardHome = () => {
  const metricCards = [
    { label: "Assigned Students", value: "83", sub: "Across 4 active classes", icon: Users, tone: "bg-kcs-blue-50 text-kcs-blue-700 dark:bg-kcs-blue-900/30 dark:text-kcs-blue-300" },
    { label: "Pending Actions", value: "56", sub: "Grades, comments, follow-ups", icon: FileText, tone: "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" },
    { label: "Risk Alerts", value: "3", sub: "AI intervention required", icon: AlertTriangle, tone: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300" },
    { label: "Class Average", value: "87%", sub: "+4% vs last month", icon: TrendingUp, tone: "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300" }
  ];
  const quickActions = [
    { to: "/portal/teacher/attendance", label: "Take Attendance", icon: ClipboardCheck },
    { to: "/portal/teacher/grades", label: "Open Gradebook", icon: TrendingUp },
    { to: "/portal/teacher/assignments", label: "Create Assignment", icon: FileText },
    { to: "/portal/teacher/messages", label: "Notify Parents", icon: MessageSquare }
  ];
  const aiTools = [
    ["Lesson plan", "Create a differentiated 45-minute lesson from today schedule."],
    ["Quiz builder", "Generate questions from the current subject and class level."],
    ["Smart feedback", "Improve comments for report cards and parent meetings."],
    ["Risk intervention", "Suggest support plans for struggling students."],
    ["Meeting summary", "Prepare parent-teacher conference notes."]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "overflow-hidden rounded-2xl border border-kcs-blue-100 bg-white shadow-sm dark:border-kcs-blue-800 dark:bg-kcs-blue-950", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 p-6 xl:grid-cols-[1.35fr_0.65fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.18em] text-kcs-gold-600 dark:text-kcs-gold-400", children: "AI Teacher Command Center" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl font-bold text-kcs-blue-950 dark:text-white", children: "Manage classes, grades, attendance, assignments, parents, and interventions from one intelligent cockpit." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 dark:text-gray-300", children: "KCS Nexus connects every teacher action to student, parent, staff, and Super Admin dashboards while surfacing predictive academic risk and next-best actions." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4", children: quickActions.map((action) => {
          const Icon = action.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: action.to, className: "flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 text-sm font-semibold text-kcs-blue-900 transition-colors hover:border-kcs-blue-200 hover:bg-kcs-blue-50 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/40 dark:text-white dark:hover:bg-kcs-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-white text-kcs-blue-700 shadow-sm dark:bg-kcs-blue-950 dark:text-kcs-blue-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 17 }) }),
            action.label
          ] }, action.to);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-kcs-blue-100 bg-kcs-blue-50 p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-kcs-blue-700 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 22 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-kcs-blue-950 dark:text-white", children: "AI readiness score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Live classroom intelligence" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between text-xs font-semibold text-kcs-blue-900 dark:text-kcs-blue-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Automation coverage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "91%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 overflow-hidden rounded-full bg-white dark:bg-kcs-blue-950", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-kcs-gold-400", style: { width: "91%" } }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-2 text-xs text-gray-600 dark:text-gray-300", children: ["3 students need intervention", "18 grades can be batch-entered", "4 parent updates are ready", "2 schedule conflicts prevented"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-lg bg-white/80 px-3 py-2 dark:bg-kcs-blue-950/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 14, className: "text-green-500" }),
          item
        ] }, item)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 lg:grid-cols-4", children: metricCards.map((item, index) => {
      const Icon = item.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * 0.04 },
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1.15fr_0.85fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Live Class Performance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Distribution by grading category with parent/student sync status." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portal/teacher/grades", className: "btn-primary flex items-center gap-2 py-2 text-sm", children: [
            "Gradebook ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 15 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 lg:grid-cols-2", children: gradebookCategories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: category.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-kcs-blue-700 dark:text-kcs-blue-300", children: [
              category.weight,
              "% weight"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-3 overflow-hidden rounded-full bg-white dark:bg-kcs-blue-950", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-kcs-blue-600", style: { width: `${category.average}%` } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              category.average,
              "% class average"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: category.visibility })
          ] })
        ] }, category.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "AI Teacher Assistant" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Generate and improve teaching work instantly." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 20, className: "text-kcs-gold-500" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2", children: aiTools.map(([title, detail]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "rounded-xl border border-gray-100 bg-gray-50 p-3 text-left transition-colors hover:border-kcs-blue-200 hover:bg-kcs-blue-50 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30 dark:hover:bg-kcs-blue-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-kcs-blue-900 dark:text-white", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: detail })
        ] }, title)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-4 flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 18, className: "text-kcs-blue-500" }),
          " Daily And Weekly Schedule"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: todayClasses.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl border p-4 ${index === 0 ? "border-kcs-blue-300 bg-kcs-blue-50 dark:border-kcs-blue-600 dark:bg-kcs-blue-800/40" : "border-gray-100 bg-gray-50 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/20"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-gray-400 dark:text-gray-500", children: item.time }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-kcs-blue-700 dark:text-kcs-blue-300", children: [
              item.students,
              " students"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-semibold text-kcs-blue-900 dark:text-white", children: item.course }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
            item.room,
            " - no conflict detected"
          ] })
        ] }, item.time)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 18, className: "text-green-500" }),
            " Action Queue"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portal/teacher/assignments", className: "text-xs font-semibold text-kcs-blue-600 dark:text-kcs-blue-400", children: "Open tasks" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          gradingQueue.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: task.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                task.className,
                " - due ",
                task.due
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-gold text-xs", children: task.pending })
          ] }) }, task.id)),
          assignments.filter((item) => item.status === "missing").map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-red-100 bg-red-50 p-4 dark:border-red-900/30 dark:bg-red-900/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-red-700 dark:text-red-300", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-red-600/80 dark:text-red-200/80", children: [
              "Missing assignment detection - ",
              item.subject
            ] })
          ] }, item.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertTriangle, { size: 18, className: "text-red-500" }),
            " Student Risk Radar"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portal/teacher/students", className: "text-xs font-semibold text-kcs-blue-600 dark:text-kcs-blue-400", children: "Student profiles" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: studentAlerts.map((alert) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: alert.student }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-xs font-semibold ${alert.severity === "high" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" : alert.severity === "medium" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"}`, children: alert.severity })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed text-gray-600 dark:text-gray-300", children: alert.note })
        ] }, alert.student)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[0.85fr_1.15fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Ecosystem Sync" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
          ["Grades", "Student and parent dashboards update after teacher release.", "Ready"],
          ["Attendance", "Absent and late statuses trigger parent notifications.", "Live"],
          ["Assignments", "Class tasks sync across student portals and reports.", "Synced"],
          ["Comments", "Teacher notes follow permission rules before publishing.", "Protected"]
        ].map(([label, detail, status]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-300", children: status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: detail })
        ] }, label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Communication, Audit, And Security" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Teacher-only access, logged actions, and cross-role communication." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portal/teacher/messages", className: "btn-gold flex items-center gap-2 py-2 text-sm", children: [
            "Messages ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 15 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: messages.map((message) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-kcs-blue-900 dark:text-white", children: message.from }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-600 dark:text-gray-300", children: message.subject }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-400", children: message.time })
          ] }, message.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
            "Teacher can access assigned classes only",
            "Grade changes are recorded in audit logs",
            "Parent-visible updates require release status",
            "AI suggestions never overwrite teacher judgment"
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 rounded-xl bg-gray-50 p-3 text-xs text-gray-600 dark:bg-kcs-blue-800/40 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 15, className: "mt-0.5 flex-shrink-0 text-green-500" }),
            item
          ] }, item)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-gray-100 bg-gradient-to-r from-kcs-blue-900 to-kcs-blue-700 p-6 text-white dark:border-kcs-blue-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-sm font-semibold text-kcs-gold-300", children: "Next-generation teaching layer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Generate interventions, grade faster, detect risk earlier, and keep families informed." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portal/teacher/grades", className: "btn-gold whitespace-nowrap text-sm py-2.5", children: "Open Gradebook" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portal/teacher/reports", className: "rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10", children: "Build Reports" })
      ] })
    ] }) })
  ] });
};
const TeacherPortal = () => {
  const { user } = useAuthStore();
  const { language } = useUIStore();
  const location = useLocation();
  const activeSegment = getTeacherSegment(location.pathname);
  const isDashboard = activeSegment === "dashboard";
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
            " - Today's overview for teaching, assessment, and student support."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 sm:gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portal/teacher/messages", className: "btn-primary text-sm py-2", children: "Inbox" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portal/teacher/assignments", className: "btn-gold text-sm py-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 16 }),
            " AI Insights"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 p-6", children: [
        isDashboard && /* @__PURE__ */ jsxRuntimeExports.jsx(PortalSectionPanel, {}),
        isDashboard && /* @__PURE__ */ jsxRuntimeExports.jsx(SuggestionBox, {}),
        !isDashboard && /* @__PURE__ */ jsxRuntimeExports.jsx(TeacherSectionView, { segment: activeSegment }),
        isDashboard && /* @__PURE__ */ jsxRuntimeExports.jsx(TeacherDashboardHome, {}),
        false
      ] })
    ] })
  ] });
};
export {
  TeacherPortal as default
};
