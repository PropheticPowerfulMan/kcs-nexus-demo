import { b as Bell, v as Shield, a0 as FileText, aj as Download, w as Calendar, aa as Brain, av as UserCheck, ah as MessageSquare, a1 as CheckCircle2, aw as Settings, $ as ClipboardList, B as BookOpen, U as Users, j as jsxRuntimeExports, ax as MessageSquareText, ay as LockKeyhole, p as Send, a6 as ShieldCheck, az as Printer, _ as Search, aA as Filter, aB as UserRoundSearch, au as CalendarDays, W as Eye } from "./ui-Bam7IDm4.js";
import { u as useLocation, r as reactExports } from "./vendor-Bh1Zu6gV.js";
import { S as SearchField } from "./SearchField-CzMASTOO.js";
import { b as useAuthStore, e as useUIStore, g as getAssetUrl } from "./index-QZ8_PQE4.js";
const sectionMap = {
  students: {
    title: "Student Management",
    description: "Create, edit, suspend, and review student accounts, class placement, risks, attendance, and family links.",
    icon: Users,
    primaryAction: "Create student",
    secondaryAction: "Export students",
    items: ["Elise Kabongo - Grade 11A - active", "David Kabongo - Grade 8B - intervention watch", "Grace Mwamba - Grade 10A - active"]
  },
  teachers: {
    title: "Teacher Management",
    description: "Manage teacher profiles, assigned classes, subjects, schedules, workload, and activity monitoring.",
    icon: UserCheck,
    primaryAction: "Add teacher",
    secondaryAction: "Review workload",
    items: ["Dr. Mukendi - AP Biology - 5 sections", "Mr. Belanger - Mathematics - schedule conflict check", "Mrs. Diallo - English - report comments pending"]
  },
  courses: {
    title: "Classes, Subjects & Schedules",
    description: "Configure academic years, terms, classes, sections, subjects, periods, rooms, and timetable conflicts.",
    icon: BookOpen,
    primaryAction: "Create subject",
    secondaryAction: "Check conflicts",
    items: ["Grade 11A - AP Calculus - Room 204", "Grade 8B - Pre-Algebra - Room 202", "Grade 11A - AP Biology - Lab 3"]
  },
  admissions: {
    title: "Admissions Operations",
    description: "Track applications, interviews, missing documents, acceptance decisions, and family onboarding.",
    icon: ClipboardList,
    primaryAction: "Review application",
    secondaryAction: "Export queue",
    items: ["Amani M. - Interview scheduled", "Lydia T. - Under review", "Joel B. - Documents missing"]
  },
  news: {
    title: "Announcements & Events",
    description: "Publish targeted school announcements, emergency alerts, events, policy updates, and communications.",
    icon: Bell,
    primaryAction: "Publish announcement",
    secondaryAction: "Schedule alert",
    items: ["Exam schedules published - parents/students/teachers", "Parent duties policy updated - parents", "Emergency drill reminder - all users"]
  },
  media: {
    title: "Media Library",
    description: "Manage photos, videos, galleries, homepage media, and communication assets.",
    icon: FileText,
    primaryAction: "Upload media",
    secondaryAction: "Organize gallery",
    items: ["Science fair gallery - 24 assets", "Campus life video - ready for review", "Admissions hero image - published"]
  },
  analytics: {
    title: "System Analytics & AI Usage",
    description: "Monitor AI usage, academic trends, risk indicators, engagement, admissions, attendance, and teacher activity.",
    icon: Brain,
    primaryAction: "Generate AI report",
    secondaryAction: "Export analytics",
    items: ["AI tutor sessions +38%", "Grade 8 attendance risk cluster", "Parent conference completion 82%"]
  },
  settings: {
    title: "Permissions & Platform Settings",
    description: "Configure role permissions, sensitive action approvals, security rules, finance settings, and audit policies.",
    icon: Settings,
    primaryAction: "Update permissions",
    secondaryAction: "View audit log",
    items: ["Super Admin - full access", "Staff - records and communication permissions", "Sensitive updates require approval"]
  },
  "forum-insights": {
    title: "Parent AI Report",
    description: "AI summary of parent forum sentiment, urgent issues, duties, policy questions, and response needs.",
    icon: Brain,
    primaryAction: "Review report",
    secondaryAction: "Assign follow-up",
    items: ["Safety supervision question - urgent", "Weekly communication digest requested", "Transport policy clarity needed"]
  },
  "student-forum-insights": {
    title: "Student AI Report",
    description: "AI summary of student voice, academic concerns, discipline signals, support needs, and wellbeing patterns.",
    icon: Shield,
    primaryAction: "Review signal",
    secondaryAction: "Notify coordinator",
    items: ["Study group request - Grade 10/11", "Exam stress trend rising", "Counselor check-in recommended"]
  },
  grades: {
    title: "Grades & Performance",
    description: "Review scores, averages, teacher feedback, strengths, weaknesses, trends, and policy-based ranking.",
    icon: CheckCircle2,
    primaryAction: "Open report",
    secondaryAction: "Download PDF",
    items: ["AP Biology - 95%", "AP Calculus - 89%", "English Literature - 91%"]
  },
  assignments: {
    title: "Assignments & Homework",
    description: "Track pending, submitted, graded, and missing work with deadlines and teacher feedback.",
    icon: FileText,
    primaryAction: "Create assignment",
    secondaryAction: "Export tasks",
    items: ["AP Calculus Problem Set #8 - due tomorrow", "Biology Lab Report - submitted", "Fraction Fluency Practice - missing"]
  },
  timetable: {
    title: "Timetable & Schedule",
    description: "Daily and weekly schedule with class periods, rooms, teachers, conflicts, and affected-user notifications.",
    icon: Calendar,
    primaryAction: "View week",
    secondaryAction: "Notify changes",
    items: ["8:15 AM - AP Calculus - Room 204", "10:15 AM - AP Biology - Lab 3", "2:30 PM - AI Tutor block - Library"]
  },
  messages: {
    title: "Messages & Responses",
    description: "Read internal messages, parent replies, student communications, and items requiring a response.",
    icon: MessageSquare,
    primaryAction: "Compose message",
    secondaryAction: "Mark all read",
    items: ["Parent follow-up required", "Principal meeting agenda", "Admissions office shadow day"]
  },
  profile: {
    title: "Profile & Documents",
    description: "Manage personal profile, required documents, contact details, security, and notification preferences.",
    icon: UserCheck,
    primaryAction: "Update profile",
    secondaryAction: "Upload document",
    items: ["Emergency contact verified", "Medical form pending", "Notification preference: email and portal"]
  },
  performance: {
    title: "Child Performance",
    description: "Parent view of child progress, grades, attendance, teacher comments, obligations, and AI recommendations.",
    icon: Brain,
    primaryAction: "Ask Parent AI",
    secondaryAction: "Book meeting",
    items: ["Elise - strong AP Biology progress", "David - math intervention recommended", "Parent response required tonight"]
  },
  calendar: {
    title: "Calendar & Meetings",
    description: "Academic calendar, exam schedules, events, parent-teacher meetings, and school deadlines.",
    icon: Calendar,
    primaryAction: "Book slot",
    secondaryAction: "Sync calendar",
    items: ["Apr 25 - Parent-teacher conferences", "May 3 - AP exams begin", "May 12 - Spring music concert"]
  },
  records: {
    title: "Administrative Records",
    description: "Manage student, parent, teacher, document, attendance, discipline, and official school records.",
    icon: FileText,
    primaryAction: "Create record",
    secondaryAction: "Export CSV",
    items: ["18 student records updated", "4 discipline cases monitored", "9 fee follow-ups pending"]
  },
  reports: {
    title: "Reports & Exports",
    description: "Generate official reports, PDF letters, Excel/CSV exports, summaries, and AI operational recommendations.",
    icon: Download,
    primaryAction: "Generate report",
    secondaryAction: "Export data",
    items: ["School-wide attendance summary", "Admission statistics", "Parent engagement report"]
  },
  finance: {
    title: "Fee Tracking & Payments",
    description: "Track invoices, balances, receipts, payment status, parent obligations, exports, and future mobile money or card integration.",
    icon: FileText,
    primaryAction: "Create invoice",
    secondaryAction: "Export finance report",
    items: ["Kabongo Family - partial balance", "Mbuyi Family - payment pending", "Mobile money integration prepared"]
  },
  permissions: {
    title: "Staff Permissions",
    description: "Review allowed operations for office functions and sensitive workflows requiring approval.",
    icon: Shield,
    primaryAction: "Request approval",
    secondaryAction: "View policy",
    items: ["records:read", "announcements:write", "reports:export"]
  },
  announcements: {
    title: "Communication Center",
    description: "Send announcements to parents, students, teachers, staff, selected classes, or emergency groups.",
    icon: Bell,
    primaryAction: "Send announcement",
    secondaryAction: "Preview recipients",
    items: ["Emergency drill reminder", "Exam schedule update", "Parent duties policy notice"]
  }
};
const getSegment = (pathname) => pathname.split("/").filter(Boolean).at(-1) ?? "";
const PortalSectionPanel = () => {
  const location = useLocation();
  const [actionMessage, setActionMessage] = reactExports.useState("");
  const section = reactExports.useMemo(() => {
    const segment = getSegment(location.pathname);
    if (["admin", "student", "parent", "teacher", "staff", "dashboard"].includes(segment)) return null;
    return sectionMap[segment] ?? null;
  }, [location.pathname]);
  if (!section) return null;
  const Icon = section.icon;
  const runAction = (label) => {
    setActionMessage(`${label} prepared. In production this action is secured, logged, and synced to the affected dashboards.`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "nexus-glass-card rounded-2xl p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/70 bg-white/60 text-kcs-blue-700 shadow-inner shadow-white/50 backdrop-blur-xl dark:border-white/10 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-300 dark:shadow-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-kcs-blue-900 dark:text-white", children: section.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 max-w-3xl text-sm leading-relaxed text-gray-600 dark:text-gray-300", children: section.description })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => runAction(section.primaryAction), className: "btn-primary flex items-center gap-2 py-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 16 }),
          " ",
          section.primaryAction
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => runAction(section.secondaryAction), className: "btn-gold flex items-center gap-2 py-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 16 }),
          " ",
          section.secondaryAction
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SearchField, { placeholder: `Search ${section.title.toLowerCase()}`, inputClassName: "text-sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 sm:grid-cols-3", children: ["Loading state ready", "Error handling ready", "Audit trail ready"].map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-white/60 bg-white/50 px-3 py-2 text-xs font-semibold text-gray-600 backdrop-blur-xl dark:border-white/10 dark:bg-kcs-blue-800/30 dark:text-gray-300", children: status }, status)) })
    ] }),
    actionMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-900/40 dark:bg-green-900/20 dark:text-green-300", children: actionMessage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-3 md:grid-cols-3", children: section.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-white/60 bg-white/50 p-4 text-sm text-gray-700 shadow-inner shadow-white/40 backdrop-blur-xl dark:border-white/10 dark:bg-kcs-blue-800/30 dark:text-gray-300 dark:shadow-none", children: item }, item)) })
  ] });
};
function getUserDisplayName(user) {
  return [user == null ? void 0 : user.firstName, user == null ? void 0 : user.lastName].filter(Boolean).join(" ").trim() || "KCS";
}
function getLocalizedGreeting(language, date = /* @__PURE__ */ new Date()) {
  const hour = date.getHours();
  if (language === "fr") {
    if (hour < 12) return "Bonjour";
    if (hour < 18) return "Bon apres-midi";
    return "Bonsoir";
  }
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}
function getLocalizedPortalDate(language, date = /* @__PURE__ */ new Date()) {
  return date.toLocaleDateString(language === "fr" ? "fr-FR" : "en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
const STORAGE_KEY = "kcs-nexus-anonymous-suggestions-v1";
const SCHOOL_NAME = "Kinshasa Christian School";
const SCHOOL_LOGO_SRC = getAssetUrl("images/kcs-logo.png");
function readSuggestions() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}
function writeSuggestions(records) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records.slice(0, 300)));
}
function escapeHtml(value) {
  return String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function normalizeText(value) {
  return String(value ?? "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}
function suggestionMatchesDateRange(record, dateFrom, dateTo) {
  const timestamp = new Date(record.createdAt).getTime();
  if (Number.isNaN(timestamp)) return false;
  const min = dateFrom ? (/* @__PURE__ */ new Date(`${dateFrom}T00:00:00`)).getTime() : Number.NEGATIVE_INFINITY;
  const max = dateTo ? (/* @__PURE__ */ new Date(`${dateTo}T23:59:59`)).getTime() : Number.POSITIVE_INFINITY;
  return timestamp >= min && timestamp <= max;
}
function openSuggestionPrintWindow(html) {
  const printWindow = window.open("", "_blank", "width=1100,height=800");
  if (!printWindow) return;
  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();
}
function printSuggestionReport(records, scopeLabel) {
  const logoUrl = typeof window === "undefined" ? SCHOOL_LOGO_SRC : new URL(SCHOOL_LOGO_SRC, window.location.origin).href;
  const generatedAt = (/* @__PURE__ */ new Date()).toLocaleString();
  const documentId = `KCS-SUG-${Date.now().toString(36).toUpperCase()}`;
  const categoryCounts = records.reduce((acc, record) => {
    acc[record.category] = (acc[record.category] || 0) + 1;
    return acc;
  }, {});
  const rows = records.map((record, index) => `
    <tr>
      <td>${index + 1}</td>
      <td><strong>${escapeHtml(record.id)}</strong><br><small>${escapeHtml(new Date(record.createdAt).toLocaleString())}</small></td>
      <td>${escapeHtml(record.category)}</td>
      <td>${escapeHtml(record.anonymousRole)}</td>
      <td>${escapeHtml(record.message)}</td>
      <td>${escapeHtml(record.privateIdentity.fullName)}<br><small>${escapeHtml(record.privateIdentity.email)} - ${escapeHtml(record.privateIdentity.role)}</small></td>
    </tr>
  `).join("");
  const chips = Object.entries(categoryCounts).map(([category, count]) => `<span>${escapeHtml(category)}: <strong>${count}</strong></span>`).join("");
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>Rapport suggestions KCS</title><style>
    * { box-sizing: border-box; }
    html, body { width: 100%; min-height: 100%; }
    body { margin: 0; background: #eef4fb; color: #0f172a; font-family: Arial, sans-serif; }
    .sheet { min-height: 100vh; padding: 26px; border-top: 10px solid #004080; background: #fff; position: relative; overflow: hidden; }
    .watermark { position: absolute; inset: 190px auto auto 50%; width: 470px; height: 470px; transform: translateX(-50%); opacity: .045; object-fit: contain; }
    header { display: flex; justify-content: space-between; gap: 18px; border-bottom: 1px solid #dbe4f0; padding-bottom: 18px; position: relative; z-index: 1; }
    .brand { display: flex; align-items: center; gap: 14px; }
    .logo { width: 66px; height: 66px; object-fit: contain; border: 1px solid #dbe4f0; border-radius: 16px; padding: 6px; background: white; }
    .school { margin: 0; color: #004080; font-weight: 900; font-size: 20px; }
    .tag { margin: 4px 0 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .12em; }
    .badge { border: 1px solid #c8a64d; border-radius: 18px; padding: 12px 14px; color: #004080; font-size: 12px; text-align: right; }
    h1 { color: #004080; margin: 24px 0 8px; font-size: 28px; }
    .scope { color: #475569; margin: 0 0 18px; }
    .metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 18px 0; position: relative; z-index: 1; }
    .metric { border: 1px solid #dbe4f0; border-radius: 16px; padding: 12px; background: #f8fbff; }
    .metric span { display: block; color: #64748b; font-size: 11px; text-transform: uppercase; font-weight: 800; }
    .metric strong { display: block; color: #004080; font-size: 20px; margin-top: 6px; }
    .chips { display: flex; flex-wrap: wrap; gap: 8px; margin: 14px 0 20px; }
    .chips span { border: 1px solid #dbe4f0; border-radius: 999px; padding: 7px 10px; background: #f8fbff; font-size: 12px; }
    table { border-collapse: collapse; width: 100%; font-size: 11px; position: relative; z-index: 1; }
    th { background: #004080; color: white; text-align: left; padding: 9px; }
    td { border-bottom: 1px solid #e2e8f0; padding: 9px; vertical-align: top; }
    footer { display: flex; justify-content: space-between; gap: 16px; margin-top: 24px; border-top: 1px solid #dbe4f0; padding-top: 12px; color: #64748b; font-size: 10px; }
    @media print { body { background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; } .sheet { padding: 0; border-top-width: 8px; } }
  </style></head><body><main class="sheet">
    <img class="watermark" src="${escapeHtml(logoUrl)}" alt="">
    <header>
      <section class="brand"><img class="logo" src="${escapeHtml(logoUrl)}" alt="Logo ${escapeHtml(SCHOOL_NAME)}"><div><p class="school">${escapeHtml(SCHOOL_NAME)}</p><p class="tag">Rapport officiel des suggestions</p></div></section>
      <aside class="badge"><strong>Document confidentiel</strong><br>${escapeHtml(documentId)}<br>${escapeHtml(generatedAt)}</aside>
    </header>
    <h1>Registre super admin des suggestions</h1>
    <p class="scope">Filtre analytique: ${escapeHtml(scopeLabel || "Toutes les suggestions")} - Generation: ${escapeHtml(generatedAt)}</p>
    <section class="metrics">
      <div class="metric"><span>Total</span><strong>${records.length}</strong></div>
      <div class="metric"><span>Categories</span><strong>${Object.keys(categoryCounts).length}</strong></div>
      <div class="metric"><span>Roles</span><strong>${new Set(records.map((r) => r.anonymousRole)).size}</strong></div>
      <div class="metric"><span>Canal</span><strong>Confidentiel</strong></div>
    </section>
    <section class="chips">${chips || "<span>Aucune categorie</span>"}</section>
    <table><thead><tr><th>#</th><th>ID / Date</th><th>Categorie</th><th>Role anonyme</th><th>Suggestion</th><th>Identite super admin</th></tr></thead><tbody>${rows || '<tr><td colspan="6">Aucune suggestion pour ce filtre.</td></tr>'}</tbody></table>
    <footer><span>${escapeHtml(SCHOOL_NAME)} - KCS Nexus - ${escapeHtml(documentId)}</span><span>Rapport conforme a la charte administrative KCS</span></footer>
  </main><script>
    function printWhenReady() {
      var images = Array.prototype.slice.call(document.images || []);
      var pending = images.filter(function (image) { return !image.complete; });
      var waitForImages = pending.map(function (image) {
        return new Promise(function (resolve) {
          image.onload = resolve;
          image.onerror = resolve;
        });
      });
      Promise.all(waitForImages).then(function () {
        requestAnimationFrame(function () {
          window.focus();
          window.print();
        });
      });
    }
    if (document.readyState === 'complete') {
      setTimeout(printWhenReady, 350);
    } else {
      window.addEventListener('load', function () { setTimeout(printWhenReady, 350); });
    }
  <\/script></body></html>`;
  openSuggestionPrintWindow(html);
}
function SuggestionBox() {
  const { user } = useAuthStore();
  const { language } = useUIStore();
  const [category, setCategory] = reactExports.useState("wellbeing");
  const [message, setMessage] = reactExports.useState("");
  const [sent, setSent] = reactExports.useState(false);
  const [revealedId, setRevealedId] = reactExports.useState(null);
  const [records, setRecords] = reactExports.useState(readSuggestions);
  const [query, setQuery] = reactExports.useState("");
  const [categoryFilter, setCategoryFilter] = reactExports.useState("all");
  const [identityFilter, setIdentityFilter] = reactExports.useState("all");
  const [roleFilter, setRoleFilter] = reactExports.useState("all");
  const [dateFromFilter, setDateFromFilter] = reactExports.useState("");
  const [dateToFilter, setDateToFilter] = reactExports.useState("");
  const isAdmin = (user == null ? void 0 : user.role) === "admin";
  const labels = reactExports.useMemo(() => ({
    title: language === "fr" ? "Boîte à suggestions" : "Suggestion box",
    subtitle: language === "fr" ? "Le message reste anonyme dans le suivi normal, mais il arrive dans le registre confidentiel du super admin." : "The normal view stays anonymous, while the super admin receives the confidential registry.",
    send: language === "fr" ? "Envoyer en anonymat" : "Send anonymously",
    sent: language === "fr" ? "Suggestion enregistree dans le canal confidentiel du super admin." : "Suggestion saved in the super admin confidential channel.",
    audit: language === "fr" ? "Registre super admin des suggestions" : "Super admin suggestion registry",
    reveal: language === "fr" ? "Voir identite" : "Reveal identity"
  }), [language]);
  const categories = reactExports.useMemo(() => Array.from(new Set(records.map((record) => record.category))).sort(), [records]);
  const identities = reactExports.useMemo(() => Array.from(new Map(records.map((record) => [record.privateIdentity.userId, record.privateIdentity])).values()).sort((left, right) => left.fullName.localeCompare(right.fullName, "fr", { sensitivity: "base" })), [records]);
  const roles = reactExports.useMemo(() => Array.from(new Set(records.map((record) => record.anonymousRole))).sort(), [records]);
  const filteredRecords = reactExports.useMemo(() => {
    const tokens = normalizeText(query).split(/\s+/).filter(Boolean);
    return records.filter((record) => {
      if (categoryFilter !== "all" && record.category !== categoryFilter) return false;
      if (identityFilter !== "all" && record.privateIdentity.userId !== identityFilter) return false;
      if (roleFilter !== "all" && record.anonymousRole !== roleFilter) return false;
      if (!suggestionMatchesDateRange(record, dateFromFilter, dateToFilter)) return false;
      if (tokens.length === 0) return true;
      const haystack = normalizeText([
        record.id,
        record.category,
        record.message,
        record.anonymousRole,
        record.privateIdentity.fullName,
        record.privateIdentity.email,
        record.privateIdentity.role,
        record.privateIdentity.userId,
        new Date(record.createdAt).toLocaleString()
      ].join(" "));
      return tokens.every((token) => haystack.includes(token));
    });
  }, [categoryFilter, dateFromFilter, dateToFilter, identityFilter, query, records, roleFilter]);
  const reportScopeLabel = reactExports.useMemo(() => {
    var _a;
    const parts = [
      query.trim() ? `Recherche: ${query.trim()}` : "",
      categoryFilter !== "all" ? `Categorie: ${categoryFilter}` : "Toutes categories",
      identityFilter !== "all" ? `Auteur/parent: ${((_a = identities.find((item) => item.userId === identityFilter)) == null ? void 0 : _a.fullName) ?? identityFilter}` : "Tous auteurs/parents",
      roleFilter !== "all" ? `Role: ${roleFilter}` : "Tous roles",
      dateFromFilter || dateToFilter ? `Periode: ${dateFromFilter || "debut"} - ${dateToFilter || "aujourd hui"}` : "Toute periode"
    ].filter(Boolean);
    return parts.join(" | ");
  }, [categoryFilter, dateFromFilter, dateToFilter, identities, identityFilter, query, roleFilter]);
  const submit = () => {
    const cleanMessage = message.trim();
    if (!cleanMessage || !user) return;
    const next = {
      id: `SUG-${Date.now().toString(36).toUpperCase()}`,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      category,
      message: cleanMessage,
      anonymousRole: user.role,
      privateIdentity: {
        userId: user.id,
        fullName: getUserDisplayName(user),
        email: user.email,
        role: user.role
      }
    };
    const nextRecords = [next, ...records];
    writeSuggestions(nextRecords);
    setRecords(nextRecords);
    setMessage("");
    setSent(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-white/12 bg-kcs-blue-950/70 p-5 text-white shadow-[0_24px_70px_rgba(0,27,54,0.28)] backdrop-blur-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-kcs-gold-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquareText, { size: 16 }),
          " ",
          labels.title
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-3xl text-sm leading-relaxed text-kcs-blue-100", children: labels.subtitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-fit items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs font-bold text-cyan-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LockKeyhole, { size: 14 }),
        " Private seal"
      ] })
    ] }),
    !isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3 lg:grid-cols-[220px_1fr_auto]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: category, onChange: (event) => setCategory(event.target.value), className: "rounded-xl border border-white/10 bg-kcs-blue-950/95 px-3 py-3 text-sm text-white outline-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "wellbeing", children: "Wellbeing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "discipline", children: "Discipline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "teaching", children: "Teaching" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "finance", children: "Finance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "safety", children: "Safety" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: "Other" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          value: message,
          onChange: (event) => setMessage(event.target.value),
          className: "min-h-24 rounded-xl border border-white/10 bg-white/10 px-3 py-3 text-sm text-white outline-none placeholder:text-kcs-blue-200",
          placeholder: language === "fr" ? "Écrivez librement votre suggestion..." : "Write your suggestion freely..."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: submit, className: "inline-flex items-center justify-center gap-2 rounded-xl bg-kcs-gold-400 px-4 py-3 text-sm font-black text-kcs-blue-950 transition-colors hover:bg-kcs-gold-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 }),
        " ",
        labels.send
      ] })
    ] }),
    sent && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 rounded-xl border border-emerald-300/20 bg-emerald-400/10 px-3 py-2 text-sm font-semibold text-emerald-100", children: labels.sent }),
    isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-sm font-bold text-cyan-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 16 }),
          " ",
          labels.audit
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => printSuggestionReport(filteredRecords, reportScopeLabel),
            className: "inline-flex w-fit items-center gap-2 rounded-xl border border-kcs-gold-300/30 bg-kcs-gold-300/12 px-4 py-2.5 text-sm font-bold text-kcs-gold-100 hover:bg-kcs-gold-300/18",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 16 }),
              " Imprimer / PDF"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:grid-cols-2 xl:grid-cols-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-kcs-blue-200" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: query,
              onChange: (event) => setQuery(event.target.value),
              className: "w-full rounded-xl border border-white/10 bg-white/10 py-3 pl-10 pr-3 text-sm text-white outline-none placeholder:text-kcs-blue-200",
              placeholder: "Recherche fine: ID, texte, role, identite, email, date..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Filter, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-kcs-blue-200" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: categoryFilter, onChange: (event) => setCategoryFilter(event.target.value), className: "w-full rounded-xl border border-white/10 bg-kcs-blue-950/95 py-3 pl-10 pr-3 text-sm text-white outline-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "Toutes categories" }),
            categories.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item, children: item }, item))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserRoundSearch, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-kcs-blue-200" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: identityFilter, onChange: (event) => setIdentityFilter(event.target.value), className: "w-full rounded-xl border border-white/10 bg-kcs-blue-950/95 py-3 pl-10 pr-3 text-sm text-white outline-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "Tous parents/auteurs" }),
            identities.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item.userId, children: item.fullName }, item.userId))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-kcs-blue-200" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: roleFilter, onChange: (event) => setRoleFilter(event.target.value), className: "w-full rounded-xl border border-white/10 bg-kcs-blue-950/95 py-3 pl-10 pr-3 text-sm text-white outline-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "Tous roles" }),
            roles.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item, children: item }, item))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-kcs-blue-200" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: dateFromFilter, onChange: (event) => setDateFromFilter(event.target.value), className: "w-full rounded-xl border border-white/10 bg-kcs-blue-950/95 py-3 pl-10 pr-3 text-sm text-white outline-none [color-scheme:dark]", "aria-label": "Date de debut" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-kcs-blue-200" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: dateToFilter, onChange: (event) => setDateToFilter(event.target.value), className: "w-full rounded-xl border border-white/10 bg-kcs-blue-950/95 py-3 pl-10 pr-3 text-sm text-white outline-none [color-scheme:dark]", "aria-label": "Date de fin" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-kcs-blue-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          filteredRecords.length,
          " suggestion(s) affichee(s) sur ",
          records.length,
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setQuery("");
              setCategoryFilter("all");
              setIdentityFilter("all");
              setRoleFilter("all");
              setDateFromFilter("");
              setDateToFilter("");
            },
            className: "rounded-lg border border-white/10 px-3 py-1.5 text-xs font-bold text-cyan-100 hover:bg-white/10",
            children: "Reinitialiser les filtres"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-white/10 bg-white/5 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-kcs-blue-200", children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black", children: records.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-white/10 bg-white/5 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-kcs-blue-200", children: "Filtrees" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black", children: filteredRecords.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-white/10 bg-white/5 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-kcs-blue-200", children: "Categories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black", children: categories.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-white/10 bg-white/5 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-kcs-blue-200", children: "Roles" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black", children: roles.length })
        ] })
      ] }),
      filteredRecords.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-kcs-blue-100", children: "No suggestion recorded for this filter." }) : filteredRecords.map((record) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-white/10 bg-white/5 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold uppercase tracking-[0.14em] text-kcs-gold-300", children: [
            record.id,
            " - ",
            new Date(record.createdAt).toLocaleString(),
            " - ",
            record.anonymousRole,
            " - ",
            record.category
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setRevealedId(revealedId === record.id ? null : record.id), className: "inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-bold text-cyan-100 hover:bg-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 14 }),
            " ",
            labels.reveal
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-white", children: record.message }),
        revealedId === record.id && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 rounded-lg border border-red-300/20 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-100", children: [
          record.privateIdentity.fullName,
          " - ",
          record.privateIdentity.email,
          " - ",
          record.privateIdentity.role,
          " - ",
          record.privateIdentity.userId
        ] })
      ] }, record.id))
    ] })
  ] });
}
const rolePermissions = {
  admin: ["*"],
  staff: ["records:read", "announcements:write", "admissions:manage", "reports:export", "messages:send"],
  teacher: ["attendance:write", "grades:write", "assignments:write", "comments:write", "classes:read"],
  parent: ["children:read", "messages:reply", "documents:upload", "meetings:book"],
  student: ["own:read", "assignments:submit", "ai:tutor", "messages:read"]
};
const academicContext = {
  year: "2025/26",
  term: "Term 3",
  nextExamWindow: "May 3 - May 17"
};
const parents = [
  { id: "parent-kabongo", name: "Rachel Kabongo", studentIds: ["stu-elise", "stu-david"], email: "rachel.kabongo@kcs.local", phone: "+243812450221" },
  { id: "parent-mbuyi", name: "Mireille Mbuyi", studentIds: ["stu-amani"], email: "mireille.mbuyi@kcs.local", phone: "+243899120882" },
  { id: "parent-ilunga", name: "Patrick Ilunga", studentIds: ["stu-naomi"], email: "patrick.ilunga@kcs.local", phone: "+243843774101" },
  { id: "parent-kalala", name: "Claire Kalala", studentIds: ["stu-sarah"], email: "claire.kalala@kcs.local", phone: "+243815330477" },
  { id: "parent-banza", name: "Beatrice Banza", studentIds: ["stu-joel"], email: "beatrice.banza@kcs.local", phone: "+243817444909" }
];
const students = [
  {
    id: "stu-elise",
    name: "Elise Kabongo",
    grade: "Grade 11",
    section: "A",
    parentId: "parent-kabongo",
    advisor: "Dr. Mukendi",
    average: 92,
    gpa: 3.9,
    rank: 5,
    attendance: 97,
    risk: "low",
    strengths: ["Biology analysis", "Essay structure", "Independent study habits"],
    weaknesses: ["Timed calculus drills"],
    aiInsight: "Elise is on an upward trend. Maintain AP revision blocks and add timed calculus practice twice per week."
  },
  {
    id: "stu-david",
    name: "David Kabongo",
    grade: "Grade 8",
    section: "B",
    parentId: "parent-kabongo",
    advisor: "Mr. Belanger",
    average: 78,
    gpa: 3.1,
    rank: 18,
    attendance: 89,
    risk: "medium",
    strengths: ["Class participation", "History recall", "Oral presentations"],
    weaknesses: ["Fractions", "Homework consistency"],
    aiInsight: "David needs a parent-teacher follow-up and a 20-minute daily math routine for the next 14 days."
  },
  {
    id: "stu-amani",
    name: "Amani Mbuyi",
    grade: "Grade 10",
    section: "A",
    parentId: "parent-mbuyi",
    advisor: "Mrs. Diallo",
    average: 64,
    gpa: 2,
    rank: 31,
    attendance: 72,
    risk: "high",
    strengths: ["Oral participation"],
    weaknesses: ["Attendance consistency", "Exam readiness"],
    aiInsight: "Amani needs a coordinated attendance and academic support plan this week."
  },
  {
    id: "stu-naomi",
    name: "Naomi Ilunga",
    grade: "Grade 7",
    section: "A",
    parentId: "parent-ilunga",
    advisor: "Mrs. Nkosi",
    average: 82,
    gpa: 3,
    rank: 12,
    attendance: 91,
    risk: "low",
    strengths: ["Reading comprehension"],
    weaknesses: ["Science lab vocabulary"],
    aiInsight: "Naomi is stable; keep vocabulary reinforcement inside science lessons."
  },
  {
    id: "stu-sarah",
    name: "Sarah Kalala",
    grade: "Grade 6",
    section: "",
    parentId: "parent-kalala",
    advisor: "Dr. Mukendi",
    average: 76,
    gpa: 2.5,
    rank: 20,
    attendance: 88,
    risk: "low",
    strengths: ["Steady improvement"],
    weaknesses: ["Writing structure"],
    aiInsight: "Sarah is improving; weekly writing practice should lift her next report."
  },
  {
    id: "stu-joel",
    name: "Joel Banza",
    grade: "Grade 10",
    section: "B",
    parentId: "parent-banza",
    advisor: "Mr. Belanger",
    average: 61,
    gpa: 1.8,
    rank: 34,
    attendance: 74,
    risk: "high",
    strengths: ["Practical projects"],
    weaknesses: ["Homework completion", "Attendance"],
    aiInsight: "Joel should be escalated to the academic coordinator and family follow-up queue."
  }
];
const subjects = [
  { id: "math-11", name: "AP Calculus", teacher: "Mr. Belanger", className: "Grade 11A", room: "Room 204" },
  { id: "bio-11", name: "AP Biology", teacher: "Dr. Mukendi", className: "Grade 11A", room: "Lab 3" },
  { id: "eng-11", name: "English Literature", teacher: "Mrs. Diallo", className: "Grade 11A", room: "Room 110" },
  { id: "math-8", name: "Pre-Algebra", teacher: "Mr. Belanger", className: "Grade 8B", room: "Room 202" }
];
const grades = [
  { studentId: "stu-elise", subject: "AP Biology", assessment: "Lab Report", score: 95, max: 100, date: "Apr 18", teacher: "Dr. Mukendi" },
  { studentId: "stu-elise", subject: "AP Calculus", assessment: "Quiz #7", score: 89, max: 100, date: "Apr 17", teacher: "Mr. Belanger" },
  { studentId: "stu-david", subject: "Pre-Algebra", assessment: "Chapter Test", score: 76, max: 100, date: "Apr 16", teacher: "Mr. Belanger" },
  { studentId: "stu-elise", subject: "English Literature", assessment: "Essay Draft", score: 91, max: 100, date: "Apr 15", teacher: "Mrs. Diallo" },
  { studentId: "stu-david", subject: "World Geography", assessment: "Map Quiz", score: 88, max: 100, date: "Apr 14", teacher: "Mrs. Nkosi" }
];
const gradebookCategories = [
  { name: "Homework", weight: 15, average: 86, visibility: "Parents and students" },
  { name: "Quizzes", weight: 20, average: 88, visibility: "Parents and students" },
  { name: "Tests", weight: 25, average: 84, visibility: "Parents and students after teacher release" },
  { name: "Exams", weight: 30, average: 91, visibility: "Term report only until approved" },
  { name: "Participation", weight: 10, average: 94, visibility: "Teacher and admin" }
];
const attendance = [
  { studentId: "stu-elise", date: "Apr 22", status: "present", className: "Grade 11A" },
  { studentId: "stu-david", date: "Apr 22", status: "late", className: "Grade 8B" },
  { studentId: "stu-david", date: "Apr 19", status: "absent", className: "Grade 8B" }
];
const attendanceAnalytics = [
  { scope: "Grade 11A", present: 96, late: 3, absent: 1, trend: "stable" },
  { scope: "Grade 8B", present: 89, late: 7, absent: 4, trend: "needs follow-up" },
  { scope: "High School", present: 94, late: 4, absent: 2, trend: "improving" }
];
const assignments = [
  { id: "asg-1", studentId: "stu-elise", title: "AP Calculus Problem Set #8", subject: "AP Calculus", due: "Tomorrow", status: "pending", priority: "high" },
  { id: "asg-2", studentId: "stu-elise", title: "Biology Lab Report", subject: "AP Biology", due: "Apr 23", status: "submitted", priority: "low" },
  { id: "asg-3", studentId: "stu-david", title: "Fraction Fluency Practice", subject: "Pre-Algebra", due: "Tonight", status: "missing", priority: "high" },
  { id: "asg-4", studentId: "stu-david", title: "Geography Map Corrections", subject: "World Geography", due: "Apr 25", status: "pending", priority: "medium" }
];
const lmsResources = [
  { title: "AP Biology meiosis explainer", type: "video", subject: "AP Biology", audience: ["student", "parent"], status: "published" },
  { title: "Fraction fluency worksheet", type: "file", subject: "Pre-Algebra", audience: ["student", "parent"], status: "assigned" },
  { title: "Exam revision discussion", type: "discussion", subject: "AP Calculus", audience: ["student"], status: "open" }
];
const scheduleConflicts = [
  { title: "Room 204 double-booking risk", detail: "AP Calculus and Grade 10 Biology overlap on Friday period 2.", severity: "medium", affected: ["teacher", "staff", "admin"] },
  { title: "AP exam timetable adjustment", detail: "Grade 11A Biology lab must move before the AP exam window.", severity: "high", affected: ["student", "parent", "teacher", "staff"] }
];
const announcements = [
  { id: "ann-1", title: "Exam schedules published", audience: ["parent", "student", "teacher", "staff"], priority: "high", date: "Apr 22" },
  { id: "ann-2", title: "Parent rights and duties policy updated", audience: ["parent", "staff", "admin"], priority: "medium", date: "Apr 21" },
  { id: "ann-3", title: "Emergency drill on Friday", audience: ["parent", "student", "teacher", "staff"], priority: "high", date: "Apr 20" }
];
const communicationFlows = [
  { trigger: "Grade entered", update: "Student and parent dashboard refresh", notification: "Grade alert if score is below 70%", recipients: ["student", "parent", "teacher"] },
  { trigger: "Attendance marked late/absent", update: "Attendance analytics and child record update", notification: "Parent absence alert", recipients: ["parent", "staff", "admin"] },
  { trigger: "Assignment published", update: "Student workload and parent deadlines update", notification: "Homework due reminder", recipients: ["student", "parent"] },
  { trigger: "Schedule changed", update: "Timetable and room schedule update", notification: "Affected user alert", recipients: ["student", "parent", "teacher", "staff"] },
  { trigger: "Academic risk detected", update: "AI recommendation generated", notification: "Coordinator and family follow-up", recipients: ["parent", "teacher", "staff", "admin"] }
];
const events = [
  { date: "Apr 25", title: "Parent-Teacher Conferences", type: "meeting", target: ["parent", "teacher", "staff"] },
  { date: "May 3", title: "AP Exams Begin", type: "exam", target: ["student", "parent", "teacher"] },
  { date: "May 12", title: "Spring Music Concert", type: "event", target: ["parent", "student", "staff"] }
];
const messages = [
  { from: "Mr. Belanger", toRole: "parent", subject: "David math intervention", body: "Please confirm tonight that David completes Fraction Fluency Practice.", requiresResponse: true },
  { from: "Admissions Office", toRole: "staff", subject: "Three interviews need scheduling", body: "New family interviews are pending office confirmation.", requiresResponse: true },
  { from: "Academic Coordinator", toRole: "teacher", subject: "Risk review", body: "Please review students below 80% before Friday.", requiresResponse: false }
];
const internalThreads = [
  { subject: "David intervention plan", participants: ["Mr. Belanger", "Rachel Kabongo", "Academic Coordinator"], unread: 2, channel: "Private teacher-parent thread" },
  { subject: "Emergency drill logistics", participants: ["Administration", "Teachers", "Staff"], unread: 0, channel: "Targeted announcement" },
  { subject: "Fee balance reminder", participants: ["Finance Office", "Rachel Kabongo"], unread: 1, channel: "Finance message" }
];
const aiSignals = [
  { title: "Academic risk detected", detail: "David Kabongo combines missing work with attendance decline.", severity: "medium", roles: ["admin", "staff", "teacher", "parent"] },
  { title: "Schedule impact", detail: "AP exam window affects Grade 11 parent meetings and teacher assessment deadlines.", severity: "high", roles: ["admin", "staff", "teacher", "parent", "student"] },
  { title: "Parent engagement opportunity", detail: "Conference completion is 82%; communications office should send targeted reminders.", severity: "low", roles: ["admin", "staff"] }
];
const aiRecommendations = [
  { owner: "Parent", title: "David math routine", action: "20 minutes of fraction practice for 14 days, then reassess.", impact: "Reduce medium academic risk" },
  { owner: "Teacher", title: "Grade 8 support group", action: "Group David with two peers for targeted algebra practice.", impact: "Improve homework completion" },
  { owner: "Staff", title: "Attendance escalation", action: "Send weekly attendance digest to families below 90%.", impact: "Lower absence trend" },
  { owner: "Super Admin", title: "Policy approval", action: "Approve updated parent duties policy before publication.", impact: "Protect sensitive workflow" }
];
const reportCards = [
  { student: "Elise Kabongo", term: "Term 3", average: 92, conduct: "Excellent", teacherComment: "Elise shows mature independence and high analytical skill.", principalStatus: "Approved", download: "PDF ready" },
  { student: "David Kabongo", term: "Term 3", average: 78, conduct: "Good", teacherComment: "David participates well and needs consistency in homework.", principalStatus: "Pending review", download: "Draft" }
];
const disciplineReports = [
  {
    id: "disc-001",
    studentId: "stu-david",
    student: "David Kabongo",
    date: "Apr 22",
    level: "medium",
    category: "Homework consistency",
    incident: "Repeated missing math practice affected readiness for science group work.",
    context: "Third missing assignment in two weeks, combined with one late arrival on Apr 22.",
    actionTaken: "Restorative meeting with advisor, parent message drafted, daily planner check assigned.",
    followUp: "Review completion log on Apr 29 and escalate to academic coordinator if no improvement.",
    parentContact: "Pending confirmation",
    status: "Open"
  },
  {
    id: "disc-002",
    studentId: "stu-elise",
    student: "Elise Kabongo",
    date: "Apr 18",
    level: "low",
    category: "Classroom leadership",
    incident: "Peer lab group conflict resolved after guided discussion.",
    context: "Student accepted feedback and helped reset lab roles before submission.",
    actionTaken: "Teacher conference and positive leadership note.",
    followUp: "Monitor collaboration during next AP Biology lab.",
    parentContact: "Not required",
    status: "Resolved"
  }
];
const transcripts = [
  { student: "Elise Kabongo", years: "2023-2026", credits: 24, cumulativeGpa: 3.8, status: "Ready for export" },
  { student: "David Kabongo", years: "2025-2026", credits: 8, cumulativeGpa: 3.1, status: "In progress" }
];
const feeAccounts = [
  { family: "Kabongo Family", student: "Elise Kabongo", invoice: "KCS-INV-2026-041", balance: 420, status: "partially paid", dueDate: "May 5", lastPayment: 600 },
  { family: "Kabongo Family", student: "David Kabongo", invoice: "KCS-INV-2026-042", balance: 0, status: "paid", dueDate: "May 5", lastPayment: 980 },
  { family: "Mbuyi Family", student: "Amani Mbuyi", invoice: "KCS-INV-2026-043", balance: 1120, status: "pending", dueDate: "May 10", lastPayment: 0 }
];
const financeReadiness = [
  { feature: "Invoices and receipts", status: "Ready", note: "PDF-ready records for finance office and parents" },
  { feature: "Mobile money integration", status: "Prepared", note: "Architecture reserved for future provider connection" },
  { feature: "Card payment integration", status: "Prepared", note: "Payment status can sync back to parent obligations" }
];
const auditLogs = [
  { actor: "Super Admin", action: "Updated parent duties policy", target: "Parent Portal", time: "Apr 22, 9:14 AM" },
  { actor: "Mr. Belanger", action: "Entered Pre-Algebra grade", target: "David Kabongo", time: "Apr 22, 8:40 AM" },
  { actor: "Registrar Office", action: "Approved admission document", target: "Amani M.", time: "Apr 21, 3:12 PM" }
];
const sensitiveActions = [
  { action: "Publish final report cards", requester: "Academic Coordinator", status: "Awaiting Super Admin approval", risk: "high" },
  { action: "Change grading scale", requester: "Registrar Office", status: "Requires audit note", risk: "high" },
  { action: "Waive finance balance", requester: "Finance Office", status: "Rejected pending documentation", risk: "critical" }
];
const staffOperations = [
  { function: "Registrar", metric: "Student record updates", value: 18, status: "On track" },
  { function: "Accountant", metric: "Fee follow-ups", value: 9, status: "Needs review" },
  { function: "Discipline Office", metric: "Open behavior cases", value: 4, status: "Monitored" },
  { function: "Communications", metric: "Unread parent replies", value: 12, status: "Action needed" }
];
const performanceTrend = [
  { month: "Sep", Elise: 84, David: 75 },
  { month: "Oct", Elise: 87, David: 77 },
  { month: "Nov", Elise: 88, David: 74 },
  { month: "Dec", Elise: 90, David: 80 },
  { month: "Jan", Elise: 89, David: 78 },
  { month: "Feb", Elise: 91, David: 81 },
  { month: "Mar", Elise: 92, David: 79 },
  { month: "Apr", Elise: 92, David: 78 }
];
const scienceSubjectTerms = ["biology", "science", "chemistry", "physics", "lab", "calculus", "math", "algebra"];
const subjectDomain = (subject) => {
  const normalized = subject.toLowerCase();
  return scienceSubjectTerms.some((term) => normalized.includes(term)) ? "scientific" : "non_scientific";
};
const averageScores = (scores) => {
  if (!scores.length) return null;
  return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
};
const predictionTone = (riskScore) => {
  if (riskScore >= 72) return "critical";
  if (riskScore >= 48) return "warning";
  if (riskScore <= 20) return "strong";
  return "stable";
};
const buildStudentTrackingProfile = (student) => {
  const studentGrades = grades.filter((grade) => grade.studentId === student.id);
  const scientificScores = studentGrades.filter((grade) => subjectDomain(grade.subject) === "scientific").map((grade) => Math.round(grade.score / grade.max * 100));
  const nonScientificScores = studentGrades.filter((grade) => subjectDomain(grade.subject) === "non_scientific").map((grade) => Math.round(grade.score / grade.max * 100));
  const scienceAverage = averageScores(scientificScores);
  const nonScienceAverage = averageScores(nonScientificScores);
  const studentAttendance = attendance.filter((record) => record.studentId === student.id);
  const lateCount = studentAttendance.filter((record) => record.status === "late").length;
  const absentCount = studentAttendance.filter((record) => record.status === "absent").length;
  const studentDiscipline = disciplineReports.filter((report) => report.studentId === student.id);
  const openDiscipline = studentDiscipline.filter((report) => report.status !== "Resolved" && report.status !== "Closed").length;
  const missingAssignments = assignments.filter((assignment) => assignment.studentId === student.id && assignment.status === "missing").length;
  const parent = parents.find((item) => item.id === student.parentId);
  const riskScore = Math.min(100, Math.max(
    0,
    (100 - student.average) * 0.34 + (100 - student.attendance) * 0.28 + openDiscipline * 18 + absentCount * 10 + lateCount * 5 + missingAssignments * 12 + (student.risk === "high" ? 16 : student.risk === "medium" ? 8 : 0)
  ));
  const preference = scienceAverage !== null && nonScienceAverage !== null ? scienceAverage >= nonScienceAverage + 4 ? "Scientific preference" : nonScienceAverage >= scienceAverage + 4 ? "Non-scientific preference" : "Balanced preference" : scienceAverage !== null ? "Scientific preference" : nonScienceAverage !== null ? "Non-scientific preference" : "Insufficient evidence";
  const recommendations = [
    student.average < 70 ? "Open a weekly academic intervention plan with the advisor." : "Maintain enrichment tasks and monitor the next assessment window.",
    student.attendance < 88 ? "Send an attendance digest to the parent and require a daily check-in." : "Keep regular attendance monitoring active.",
    openDiscipline > 0 ? "Schedule restorative discipline follow-up and record parent confirmation." : "Reinforce positive conduct notes in the student file.",
    preference === "Scientific preference" ? "Offer science lab extension, AP/STEM pathway guidance, and project mentorship." : preference === "Non-scientific preference" ? "Offer humanities, arts, languages, leadership, and presentation pathway guidance." : "Use mixed STEM/humanities projects before assigning a pathway."
  ];
  return {
    student,
    parent,
    scienceAverage,
    nonScienceAverage,
    preference,
    disciplineOpen: openDiscipline,
    disciplineTotal: studentDiscipline.length,
    absences: absentCount,
    lates: lateCount,
    missingAssignments,
    riskScore: Math.round(riskScore),
    prediction: predictionTone(riskScore),
    recommendation: recommendations[0],
    recommendations,
    alerts: {
      email: Boolean(parent == null ? void 0 : parent.email) && riskScore >= 48,
      sms: Boolean(parent == null ? void 0 : parent.phone) && (riskScore >= 48 || absentCount > 0 || openDiscipline > 0),
      report: riskScore >= 20 || studentDiscipline.length > 0
    },
    timeline: [
      ...studentGrades.map((grade) => ({ date: grade.date, type: "Grade", label: `${grade.subject}: ${Math.round(grade.score / grade.max * 100)}%` })),
      ...studentAttendance.map((record) => ({ date: record.date, type: "Attendance", label: `${record.status} - ${record.className}` })),
      ...studentDiscipline.map((report) => ({ date: report.date, type: "Discipline", label: `${report.category}: ${report.status}` }))
    ]
  };
};
const studentTrackingProfiles = students.map(buildStudentTrackingProfile).sort((left, right) => right.riskScore - left.riskScore);
export {
  auditLogs as A,
  studentTrackingProfiles as B,
  sensitiveActions as C,
  performanceTrend as D,
  PortalSectionPanel as P,
  SuggestionBox as S,
  getLocalizedPortalDate as a,
  academicContext as b,
  announcements as c,
  grades as d,
  assignments as e,
  events as f,
  getLocalizedGreeting as g,
  attendanceAnalytics as h,
  internalThreads as i,
  aiSignals as j,
  attendance as k,
  lmsResources as l,
  feeAccounts as m,
  aiRecommendations as n,
  subjects as o,
  disciplineReports as p,
  messages as q,
  reportCards as r,
  students as s,
  transcripts as t,
  gradebookCategories as u,
  staffOperations as v,
  scheduleConflicts as w,
  communicationFlows as x,
  financeReadiness as y,
  rolePermissions as z
};
