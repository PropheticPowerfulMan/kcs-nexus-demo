import { j as jsxRuntimeExports, G as GraduationCap, U as Users, a0 as FileText, aa as Brain, R as Radio, m as motion, v as Shield, h as Mail, P as Phone, V as Video, ar as Clock3, B as BookOpen, as as ArrowUpRight, ak as AlertTriangle, _ as Search, am as Trash2, X, at as UserPlus, au as CalendarDays, ac as BarChart3, aj as Download, ai as FileSpreadsheet, a1 as CheckCircle2 } from "./ui-Bam7IDm4.js";
import { u as useLocation, r as reactExports } from "./vendor-Bh1Zu6gV.js";
import { P as PortalSidebar } from "./PortalSidebar-BG40mUrr.js";
import { g as getLocalizedGreeting, a as getLocalizedPortalDate, P as PortalSectionPanel, S as SuggestionBox, B as studentTrackingProfiles, z as rolePermissions, j as aiSignals, C as sensitiveActions, m as feeAccounts, r as reportCards, t as transcripts, x as communicationFlows, n as aiRecommendations, y as financeReadiness, v as staffOperations, A as auditLogs, w as scheduleConflicts, D as performanceTrend, d as grades, k as attendance, p as disciplineReports, s as students, o as subjects } from "./schoolEcosystem-DS0iF1Dm.js";
import { b as useAuthStore, e as useUIStore, r as registryAPI, s as studentsAPI, g as getAssetUrl } from "./index-QZ8_PQE4.js";
import { a as SCHOOL_LEVELS, S as SCHOOL_DIVISIONS } from "./schoolLevels-BLyIlbuz.js";
import { R as ResponsiveContainer, A as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, a as Area, B as BarChart, e as Bar } from "./charts-LyKxUR06.js";
import "./SearchField-CzMASTOO.js";
const enrollmentTrend = [
  { month: "Sep", students: 472, applications: 68 },
  { month: "Oct", students: 478, applications: 74 },
  { month: "Nov", students: 481, applications: 71 },
  { month: "Dec", students: 483, applications: 79 },
  { month: "Jan", students: 489, applications: 83 },
  { month: "Feb", students: 496, applications: 91 },
  { month: "Mar", students: 503, applications: 96 },
  { month: "Apr", students: 511, applications: 102 }
];
const departmentPerformance = [
  { name: "Elementary", score: 91 },
  { name: "Middle", score: 88 },
  { name: "High", score: 93 },
  { name: "Admissions", score: 84 },
  { name: "Support", score: 89 }
];
const admissionsQueue = [
  { name: "Amani M.", grade: "Grade 6", status: "Interview Scheduled", date: "Apr 22" },
  { name: "Lydia T.", grade: "Grade 10", status: "Under Review", date: "Apr 21" },
  { name: "Joel B.", grade: "Grade 2", status: "Documents Missing", date: "Apr 20" },
  { name: "Nathan S.", grade: "Grade 11", status: "Accepted", date: "Apr 18" }
];
const riskAlerts = [
  { title: "Attendance risk cluster", description: "7 students in Grade 8 crossed the 85% threshold this month.", level: "high" },
  { title: "Admissions response time", description: "Average review cycle slipped to 6.2 days. Goal is under 5 days.", level: "medium" },
  { title: "Teacher capacity opportunity", description: "High school math section demand suggests adding one more instructor next term.", level: "positive" }
];
const staffLoad = [
  { teacher: "Dr. Mukendi", load: "5 sections", aiSupport: "High" },
  { teacher: "Mrs. Diallo", load: "4 sections", aiSupport: "Medium" },
  { teacher: "Mr. Belanger", load: "5 sections", aiSupport: "Medium" },
  { teacher: "Mrs. Nkosi", load: "3 sections", aiSupport: "Low" }
];
const recentActivity = [
  "24 new admission documents uploaded this week.",
  "AI tutor sessions increased by 38% among Grade 11 students.",
  "Parent conference booking reached 82% completion.",
  "News post on science fair produced 1,240 page views in 48 hours."
];
const SCHOOL_NAME = "Kinshasa Christian School";
const SCHOOL_LOGO_SRC = getAssetUrl("images/kcs-logo.png");
const SCHOOL_SEAL_SRC = getAssetUrl("images/kcs.jpg");
const liveEventControls = [
  { title: "Spring Arts Festival", status: "Live now", platform: "YouTube Live", audience: "312 viewers", nextStep: "Monitor comments and stream health" },
  { title: "Annual Sports Day", status: "Scheduled", platform: "KCS Live", audience: "May 10, 8:00 AM", nextStep: "Confirm camera crew and field audio" },
  { title: "Graduation Ceremony 2026", status: "Scheduled", platform: "YouTube Live", audience: "Jun 8, 4:00 PM", nextStep: "Publish family access link" }
];
const adminRosterSeed = [
  { id: "adm-001", name: "Anne Itela Mouyeke", grade: "Grade 11", section: "A", parent: "Beatrice Itela", parentEmail: "beatrice.itela@kcs.test", parentPhone: "+243 810 100 001", status: "Active", gpa: 3.7, attendance: 94, discipline: "Clear" },
  { id: "adm-002", name: "Assimbo Loango Grace", grade: "Grade 11", section: "A", parent: "Moise Loango", parentEmail: "moise.loango@kcs.test", parentPhone: "+243 810 100 002", status: "Active", gpa: 3.5, attendance: 92, discipline: "Monitored" },
  { id: "adm-003", name: "Beni Amisi Ali", grade: "Grade 9", section: "B", parent: "Sarah Amisi", parentEmail: "sarah.amisi@kcs.test", parentPhone: "+243 810 100 003", status: "Active", gpa: 3.1, attendance: 88, discipline: "Open" },
  { id: "adm-004", name: "Daniella Sambu", grade: "Grade 10", section: "A", parent: "Joel Sambu", parentEmail: "joel.sambu@kcs.test", parentPhone: "+243 810 100 004", status: "Active", gpa: 3.8, attendance: 96, discipline: "Clear" },
  { id: "adm-005", name: "Eliane Kazadi Mbuyi", grade: "Grade 12", section: "A", parent: "Rachel Kazadi", parentEmail: "rachel.kazadi@kcs.test", parentPhone: "+243 810 100 005", status: "Graduation track", gpa: 3.9, attendance: 97, discipline: "Clear" },
  ...students.map((student, index) => ({
    id: student.id,
    name: student.name,
    grade: student.grade,
    section: student.section,
    parent: student.parentId === "parent-kabongo" ? "Rachel Kabongo" : "Parent record pending",
    parentEmail: `${student.name.toLowerCase().replace(/\s+/g, ".")}@family.kcs.test`,
    parentPhone: `+243 810 200 00${index + 1}`,
    status: "Active",
    gpa: student.gpa,
    attendance: student.attendance,
    discipline: student.risk === "low" ? "Clear" : "Monitored"
  }))
];
const createAdminStudentDraft = (grade = "Grade 1", section = "") => ({
  name: "",
  studentNumber: "",
  grade,
  section,
  email: ""
});
const splitPersonName = (value = "") => {
  const parts = value.trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] ?? "",
    lastName: parts.slice(1).join(" ")
  };
};
const createAdminStudentEditForm = (student) => ({
  firstName: splitPersonName(student == null ? void 0 : student.name).firstName,
  lastName: splitPersonName(student == null ? void 0 : student.name).lastName,
  studentNumber: (student == null ? void 0 : student.studentNumber) ?? "",
  email: (student == null ? void 0 : student.email) ?? "",
  grade: (student == null ? void 0 : student.grade) ?? "Grade 1",
  section: (student == null ? void 0 : student.section) ?? "",
  status: (student == null ? void 0 : student.status) ?? "Active"
});
const createAdminParentEditForm = (parent) => ({
  firstName: splitPersonName(parent == null ? void 0 : parent.name).firstName,
  lastName: splitPersonName(parent == null ? void 0 : parent.name).lastName,
  email: (parent == null ? void 0 : parent.email) === "Email non renseigne" ? "" : (parent == null ? void 0 : parent.email) ?? "",
  phone: (parent == null ? void 0 : parent.phone) === "Telephone non renseigne" ? "" : (parent == null ? void 0 : parent.phone) ?? ""
});
const ADMIN_ADMISSIONS_STORAGE_KEY = "kcs-admin-admission-submissions";
const ADMIN_ROSTER_STORAGE_KEY = "kcs-admin-official-roster";
const CLASS_SECTIONS = ["", "A", "B", "C", "D"];
const formatClassName = (grade, section) => [grade, section].filter(Boolean).join(" ");
const sectionLabel = (section) => section || "No section";
const getDivisionForGrade = (grade) => {
  return SCHOOL_DIVISIONS.find((division) => {
    if (division.id === "kindergarten") return ["K3", "K4", "K5", "Kindergarten"].includes(grade);
    if (division.id === "elementary") return ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"].includes(grade);
    if (division.id === "middle") return ["Grade 6", "Grade 7", "Grade 8"].includes(grade);
    return ["Grade 9", "Grade 10", "Grade 11", "Grade 12"].includes(grade);
  }) ?? SCHOOL_DIVISIONS[0];
};
const scoreTone = (value, type) => {
  const threshold = type === "gpa" ? [2.5, 3.3] : [88, 94];
  if (value < threshold[0]) return "text-red-700 dark:text-red-300";
  if (value < threshold[1]) return "text-yellow-700 dark:text-yellow-300";
  return "text-green-700 dark:text-green-300";
};
const getStudentRisk = (student) => {
  if (student.attendance < 88 || student.gpa < 2.5 || ["Open", "Monitored"].includes(student.discipline)) return "Needs action";
  if (student.attendance < 94 || student.gpa < 3.2) return "Watch";
  return "On track";
};
const extractStudentApiMessage = (error, fallback) => {
  var _a;
  const responseData = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a.data;
  return (responseData == null ? void 0 : responseData.message) || (responseData == null ? void 0 : responseData.error) || (responseData == null ? void 0 : responseData.details) || (error == null ? void 0 : error.message) || fallback;
};
const adminRosterSegments = /* @__PURE__ */ new Set(["students", "parents", "transcripts", "reports"]);
const getAdminRoster = () => studentsAPI.getAll(void 0, {
  headers: {
    "x-skip-auth-logout": "true"
  }
});
const apiProfileToRosterRecord = (profile) => {
  var _a, _b, _c, _d, _e;
  const parentLink = (_a = profile.parentLinks) == null ? void 0 : _a[0];
  const parent = parentLink == null ? void 0 : parentLink.parent;
  const fullName = [(_b = profile.user) == null ? void 0 : _b.firstName, (_c = profile.user) == null ? void 0 : _c.lastName].filter(Boolean).join(" ") || profile.studentNumber || "Unnamed student";
  const managingApp = typeof profile.managingApp === "string" ? profile.managingApp : Array.isArray(profile.externalIds) ? ((_d = profile.externalIds.find((item) => typeof (item == null ? void 0 : item.appSlug) === "string")) == null ? void 0 : _d.appSlug) ?? null : null;
  return {
    id: profile.id,
    name: fullName,
    studentNumber: profile.studentNumber,
    email: ((_e = profile.user) == null ? void 0 : _e.email) ?? "",
    grade: profile.grade,
    section: profile.section ?? "",
    parent: parent ? [parent.firstName, parent.lastName].filter(Boolean).join(" ") : "Parent record pending",
    parentEmail: (parent == null ? void 0 : parent.email) ?? `${fullName.toLowerCase().replace(/\W+/g, ".")}@family.kcs.test`,
    parentPhone: (parent == null ? void 0 : parent.phone) ?? "+243 810 000 000",
    status: profile.status === "active" ? "Active" : profile.status,
    gpa: Number(profile.gpa ?? 0),
    attendance: Number(profile.attendanceRate ?? 100),
    discipline: "Clear",
    syncSource: profile.syncSource === "orbit" ? "orbit" : "local",
    managingApp,
    isEditable: true,
    isDeletable: typeof profile.isDeletable === "boolean" ? profile.isDeletable : true
  };
};
const transcriptCoursePlan = {
  "Grade 9": ["English 9", "Algebra I", "Biology", "World History", "Physical Education", "French"],
  "Grade 10": ["English 10", "Geometry", "Chemistry", "African & World Studies", "ICT", "Fine Arts"],
  "Grade 11": ["English Literature", "Algebra II / Pre-Calculus", "Physics", "Economics", "Research Seminar", "Elective"],
  "Grade 12": ["English 12", "Calculus / Statistics", "Environmental Science", "Government", "College Prep Seminar", "Elective"]
};
const letterFromAverage = (average) => {
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
};
const gpaFromAverage = (average) => Number(Math.min(4, Math.max(0, average / 25)).toFixed(2));
const buildOfficialTranscript = (student) => {
  const gradeOrder = ["Grade 9", "Grade 10", "Grade 11", "Grade 12"];
  const currentIndex = Math.max(0, gradeOrder.indexOf(student.grade));
  const baseline = Math.round((student.gpa || 3) * 25);
  const rows = gradeOrder.map((grade, gradeIndex) => {
    const publishedReport = reportCards.find((item) => item.student === student.name && gradeIndex === currentIndex);
    const yearlyAverage = Math.max(58, Math.min(99, Math.round((publishedReport == null ? void 0 : publishedReport.average) ?? baseline - (currentIndex - gradeIndex) * 2 + (student.attendance >= 94 ? 1 : -1))));
    const credits = gradeIndex <= currentIndex ? 6 : 0;
    const courses = transcriptCoursePlan[grade].map((course, courseIndex) => {
      const courseAverage = Math.max(55, Math.min(100, yearlyAverage + (courseIndex % 3 - 1) * 3));
      return {
        course,
        credit: gradeIndex <= currentIndex ? 1 : 0,
        average: courseAverage,
        letter: letterFromAverage(courseAverage),
        gpa: gpaFromAverage(courseAverage)
      };
    });
    return {
      grade,
      year: `${2022 + gradeIndex}-${2023 + gradeIndex}`,
      courses,
      credits,
      average: yearlyAverage,
      annualGpa: gpaFromAverage(yearlyAverage),
      status: gradeIndex <= currentIndex ? "Completed" : "Projected"
    };
  });
  const earnedRows = rows.filter((row) => row.credits > 0);
  const totalCredits = earnedRows.reduce((sum, row) => sum + row.credits, 0);
  const cumulativeGpa = totalCredits ? Number((earnedRows.reduce((sum, row) => sum + row.annualGpa * row.credits, 0) / totalCredits).toFixed(2)) : 0;
  const cumulativeAverage = earnedRows.length ? Math.round(earnedRows.reduce((sum, row) => sum + row.average, 0) / earnedRows.length) : 0;
  return {
    student,
    rows,
    totalCredits,
    cumulativeGpa,
    cumulativeAverage,
    classRank: student.gpa >= 3.7 ? "Top 10%" : student.gpa >= 3.2 ? "Upper half" : "In progress",
    generatedAt: (/* @__PURE__ */ new Date()).toLocaleDateString(),
    graduationStatus: totalCredits >= 24 ? "Graduation requirement met" : `${24 - totalCredits} credits remaining`
  };
};
const admissionSeed = admissionsQueue.map((item, index) => ({
  id: `seed-adm-${index + 1}`,
  applicationNumber: `KCS-SEED-${index + 1}`,
  studentName: item.name,
  firstName: item.name.split(" ")[0] ?? item.name,
  lastName: item.name.split(" ").slice(1).join(" ") || "Applicant",
  dateOfBirth: "2012-01-01",
  nationality: "Congolese",
  gradeApplying: item.grade,
  previousSchool: "Previous school pending verification",
  languages: "English, French",
  parentName: `${item.name.split(" ")[0]} Parent`,
  parentEmail: `${item.name.toLowerCase().replace(/\W+/g, ".")}@family.kcs.test`,
  parentPhone: `+243 810 300 00${index + 1}`,
  relationship: "Guardian",
  address: "Kinshasa, DRC",
  occupation: "Pending",
  notes: "Seed application available for Super Admin workflow preview.",
  documents: ["Application form", "Transcript"],
  status: item.status === "Accepted" ? "ACCEPTED" : item.status === "Under Review" ? "UNDER_REVIEW" : "SUBMITTED",
  submittedAt: new Date(2026, 3, 22 - index).toISOString()
}));
const readStoredAdmissions = () => {
  if (typeof window === "undefined") return admissionSeed;
  try {
    const stored = JSON.parse(window.localStorage.getItem(ADMIN_ADMISSIONS_STORAGE_KEY) || "[]");
    const storedIds = new Set(stored.map((item) => item.applicationNumber));
    return [...stored, ...admissionSeed.filter((item) => !storedIds.has(item.applicationNumber))];
  } catch {
    return admissionSeed;
  }
};
const readStoredRoster = () => {
  if (typeof window === "undefined") return [];
  try {
    const stored = JSON.parse(window.localStorage.getItem(ADMIN_ROSTER_STORAGE_KEY) || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
};
const saveAdmissions = (items) => {
  if (typeof window !== "undefined") window.localStorage.setItem(ADMIN_ADMISSIONS_STORAGE_KEY, JSON.stringify(items));
};
const saveRoster = (items) => {
  if (typeof window !== "undefined") window.localStorage.setItem(ADMIN_ROSTER_STORAGE_KEY, JSON.stringify(items));
};
const createStudentFromAdmission = (application) => ({
  id: `adm-approved-${application.applicationNumber}`,
  name: application.studentName,
  studentNumber: application.applicationNumber,
  grade: application.gradeApplying,
  section: "",
  parent: application.parentName,
  parentEmail: application.parentEmail,
  parentPhone: application.parentPhone,
  status: "Active",
  gpa: 0,
  attendance: 100,
  discipline: "Clear"
});
const staffSeed = [
  { id: "staff-001", name: "Dr. Mukendi", role: "Science Teacher", department: "High School", status: "Present", time: "7:12 AM" },
  { id: "staff-002", name: "Mrs. Diallo", role: "English Teacher", department: "High School", status: "Present", time: "7:18 AM" },
  { id: "staff-003", name: "Mr. Belanger", role: "Math Teacher", department: "Middle School", status: "Late", time: "7:51 AM" },
  { id: "staff-004", name: "Registrar Office", role: "Registrar", department: "Administration", status: "Present", time: "7:05 AM" },
  { id: "staff-005", name: "Discipline Office", role: "Discipline Lead", department: "Student Life", status: "Absent", time: "-" }
];
const getAdminSegment = (pathname) => {
  const segment = pathname.split("/").filter(Boolean).at(-1);
  if (!segment || segment === "admin" || segment === "dashboard") return "dashboard";
  if (segment === "student") return "students";
  if (segment === "parent") return "parents";
  return segment;
};
const pillTone = (value) => {
  if (["Open", "Absent", "Urgent", "high", "Documents Missing", "pending", "Needs action"].includes(value)) return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";
  if (["Monitored", "Late", "Draft", "medium", "Under Review", "partially paid", "Watch"].includes(value)) return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";
  return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
};
const adminButton = "rounded-xl bg-kcs-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-kcs-blue-800";
const adminOutlineButton = "rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-kcs-blue-700 transition-colors hover:bg-kcs-blue-50 dark:border-kcs-blue-700 dark:text-kcs-blue-200 dark:hover:bg-kcs-blue-800";
const reportCadenceLabels = {
  daily: "Journalier",
  weekly: "Hebdomadaire",
  monthly: "Mensuel",
  annual: "Annuel"
};
const reportCategoryLabels = {
  enrollment: "Inscriptions",
  academic: "Academique",
  operations: "Operations",
  executive: "Rapport complet"
};
const buildReportWindow = (cadence) => {
  const end = /* @__PURE__ */ new Date();
  const start = new Date(end);
  if (cadence === "daily") start.setDate(end.getDate() - 1);
  if (cadence === "weekly") start.setDate(end.getDate() - 7);
  if (cadence === "monthly") start.setMonth(end.getMonth() - 1);
  if (cadence === "annual") start.setFullYear(end.getFullYear() - 1);
  return {
    start,
    end,
    label: `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`
  };
};
const escapeExportCell = (value) => `"${String(value).replace(/"/g, '""')}"`;
const escapeHtml = (value) => String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const downloadExportFile = (filename, content, type) => {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};
const buildReportRows = (category, cadence, officialRoster, admissionRequests) => {
  const averageAttendance = Math.round(officialRoster.reduce((sum, student) => sum + student.attendance, 0) / Math.max(officialRoster.length, 1));
  const averageGpa = (officialRoster.reduce((sum, student) => sum + student.gpa, 0) / Math.max(officialRoster.length, 1)).toFixed(2);
  const needsAction = officialRoster.filter((student) => getStudentRisk(student) === "Needs action").length;
  const pendingAdmissions = admissionRequests.filter((item) => item.status === "SUBMITTED" || item.status === "UNDER_REVIEW").length;
  const acceptedAdmissions = admissionRequests.filter((item) => item.status === "ACCEPTED").length;
  const openDiscipline = disciplineReports.filter((report) => report.status !== "Closed").length;
  const unpaidInvoices = feeAccounts.filter((fee) => fee.status !== "paid").length;
  const cadenceNote = reportCadenceLabels[cadence].toLowerCase();
  const rows = [];
  if (category === "enrollment" || category === "executive") {
    rows.push(
      { section: "Inscriptions", metric: "Effectif officiel", value: officialRoster.length, detail: `${officialRoster.length} élèves actifs dans le registre super administrateur.`, action: "Vérifier les nouvelles admissions et les classes incomplètes." },
      { section: "Inscriptions", metric: "Dossiers en attente", value: pendingAdmissions, detail: `${pendingAdmissions} demandes necessitent une decision sur la periode ${cadenceNote}.`, action: "Prioriser les dossiers soumis ou en revue." },
      { section: "Inscriptions", metric: "Admissions acceptées", value: acceptedAdmissions, detail: `${acceptedAdmissions} candidats ont déjà été acceptés dans le cycle actuel.`, action: "Confirmer la création des dossiers officiels." }
    );
  }
  if (category === "academic" || category === "executive") {
    rows.push(
      { section: "Académique", metric: "GPA moyen", value: averageGpa, detail: `Moyenne académique globale calculée sur ${officialRoster.length} dossiers.`, action: "Examiner les classes et matières sous la moyenne." },
      { section: "Académique", metric: "Assiduité moyenne", value: `${averageAttendance}%`, detail: `Présence moyenne pour le rapport ${cadenceNote}.`, action: "Déclencher un suivi parent pour les présences inférieures à 88%." },
      { section: "Académique", metric: "Élèves à risque", value: needsAction, detail: `${needsAction} élèves combinent risque académique, présence ou discipline.`, action: "Assigner un plan de soutien et une date de suivi." }
    );
  }
  if (category === "operations" || category === "executive") {
    rows.push(
      { section: "Operations", metric: "Rapports discipline ouverts", value: openDiscipline, detail: `${openDiscipline} rapports demandent encore une resolution administrative.`, action: "Valider les contacts parents et les mesures correctives." },
      { section: "Opérations", metric: "Factures non soldées", value: unpaidInvoices, detail: `${unpaidInvoices} comptes financiers ne sont pas entièrement soldés.`, action: "Envoyer les relevés et organiser les relances." },
      { section: "Operations", metric: "Alertes IA", value: aiSignals.length, detail: `${aiSignals.length} signaux IA alimentent ce rapport detaille.`, action: "Revoir les recommandations prioritaires avec les responsables." }
    );
  }
  return rows;
};
const buildAuthenticityCode = (value) => {
  const checksum = Array.from(value).reduce((hash, char) => (hash << 5) - hash + char.charCodeAt(0) >>> 0, 2166136261);
  return checksum.toString(36).toUpperCase().padStart(7, "0").slice(0, 7);
};
const buildAdminParentRecords = (roster) => {
  const groups = /* @__PURE__ */ new Map();
  for (const student of roster) {
    const keySource = student.parentEmail || student.parentPhone || student.parent || "Parent record pending";
    const key = keySource.trim().toLowerCase();
    groups.set(key, [...groups.get(key) ?? [], student]);
  }
  return Array.from(groups.entries()).map(([key, familyStudents]) => {
    const firstStudent = familyStudents[0];
    const classes = Array.from(new Set(familyStudents.map((student) => formatClassName(student.grade, student.section)).filter(Boolean))).sort();
    const sources = new Set(familyStudents.map((student) => student.syncSource ?? "local"));
    const syncSource = sources.size > 1 ? "mixed" : sources.values().next().value ?? "local";
    const needsAction = familyStudents.some((student) => getStudentRisk(student) !== "On track");
    const identifierType = "orbitId";
    return {
      id: key,
      displayId: void 0,
      name: firstStudent.parent || "Parent record pending",
      email: firstStudent.parentEmail || "Email non renseigne",
      phone: firstStudent.parentPhone || "Telephone non renseigne",
      students: familyStudents.sort((left, right) => left.name.localeCompare(right.name)),
      studentCount: familyStudents.length,
      classes,
      syncSource,
      status: needsAction ? "Suivi requis" : "Actif",
      identifierType
    };
  }).sort((left, right) => left.name.localeCompare(right.name));
};
const buildAdminParentRecordsFromDirectory = (directory, roster) => {
  var _a;
  if (!((_a = directory == null ? void 0 : directory.parents) == null ? void 0 : _a.length)) return buildAdminParentRecords(roster);
  const studentsById = new Map(roster.map((student) => [student.id, student]));
  return directory.parents.map((parent) => {
    var _a2, _b;
    const linkedStudents = (parent.studentIds ?? []).map((studentId) => studentsById.get(studentId)).filter((student) => Boolean(student)).sort((left, right) => left.name.localeCompare(right.name));
    const classes = Array.from(new Set(linkedStudents.map((student) => formatClassName(student.grade, student.section)).filter(Boolean))).sort();
    const needsAction = linkedStudents.some((student) => getStudentRisk(student) !== "On track");
    const displayId = parent.displayId || ((_b = (_a2 = parent.externalIds) == null ? void 0 : _a2.find((item) => item.externalId)) == null ? void 0 : _b.externalId) || parent.id;
    const identifierType = "orbitId";
    return {
      id: parent.id,
      displayId,
      name: parent.fullName || "Parent record pending",
      email: parent.email || "Email non renseigne",
      phone: parent.phone || "Telephone non renseigne",
      students: linkedStudents,
      studentCount: linkedStudents.length,
      classes,
      syncSource: directory.source === "orbit" ? "orbit" : "local",
      status: linkedStudents.length === 0 ? "Sans enfant rattache" : needsAction ? "Suivi requis" : "Actif",
      identifierType
    };
  }).sort((left, right) => left.name.localeCompare(right.name));
};
const buildAdminReportDocument = (title, periodLabel, rows, category, cadence) => {
  const generatedAt = (/* @__PURE__ */ new Date()).toLocaleString();
  const generatedIso = (/* @__PURE__ */ new Date()).toISOString();
  const authenticityCode = buildAuthenticityCode(`${title}|${periodLabel}|${generatedIso}|${rows.map((row) => `${row.section}:${row.metric}:${row.value}`).join("|")}`);
  const documentId = `KCS-${category.toUpperCase()}-${cadence.toUpperCase()}-${generatedIso.slice(0, 10).replace(/-/g, "")}-${authenticityCode}`;
  const criticalActions = rows.filter((row) => /risque|ouverts|attente|non soldées/i.test(`${row.metric} ${row.detail}`)).length;
  const logoUrl = typeof window === "undefined" ? SCHOOL_SEAL_SRC : new URL(SCHOOL_SEAL_SRC, window.location.origin).href;
  const escapedRows = rows.map((row) => `
    <tr>
      <td><strong>${escapeHtml(row.section)}</strong></td>
      <td>${escapeHtml(row.metric)}</td>
      <td class="value">${escapeHtml(row.value)}</td>
      <td>${escapeHtml(row.detail)}</td>
      <td>${escapeHtml(row.action)}</td>
    </tr>
  `).join("");
  const securityMarks = [
    "Reference unique",
    "Horodatage serveur navigateur",
    "Controle de coherence",
    "Usage Super Admin"
  ];
  const escapedSecurityMarks = securityMarks.map((mark) => `<span>${escapeHtml(mark)}</span>`).join("");
  const escapedControls = rows.map((row, index) => `
    <div class="control-card">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${escapeHtml(row.metric)}</strong>
      <p>${escapeHtml(row.action)}</p>
    </div>
  `).join("");
  return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <style>
    @page { size: A4 landscape; margin: 14mm; }
    * { box-sizing: border-box; }
    html,
    body {
      width: 100%;
      min-height: 100%;
    }
    body {
      margin: 0;
      color: #0f2352;
      font-family: Arial, Helvetica, sans-serif;
      background: #ffffff;
    }
    .sheet {
      position: relative;
      min-height: 100vh;
      padding: 28px;
      border-top: 12px solid #004080;
      overflow: hidden;
    }
    .watermark-layer {
      position: absolute;
      inset: 0;
      z-index: 0;
      overflow: hidden;
      pointer-events: none;
    }
    .watermark-logo {
      position: absolute;
      left: 50%;
      top: 290px;
      z-index: 0;
      width: 520px;
      height: 520px;
      object-fit: contain;
      opacity: 0.045;
      transform: translate(-50%, -50%) rotate(-8deg);
      filter: grayscale(100%);
      pointer-events: none;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .sheet > :not(.watermark-layer) { position: relative; z-index: 1; }
    .masthead {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      padding-bottom: 20px;
      border-bottom: 3px solid #d8a11d;
    }
    .brand { display: flex; align-items: center; gap: 16px; }
    .logo-frame {
      width: 86px;
      height: 86px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 3px solid #d8a11d;
      border-radius: 999px;
      background: #ffffff;
      box-shadow: 0 0 0 5px #f8fbff, 0 0 0 6px #dbe3ef;
      overflow: hidden;
      flex: 0 0 86px;
    }
    .logo {
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      display: block;
      object-fit: contain;
      object-position: center;
      border-radius: 999px;
    }
    .school { margin: 0; color: #004080; font-size: 25px; line-height: 1.1; }
    .tagline { margin: 5px 0 0; color: #64748b; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }
    .badge {
      min-width: 230px;
      border-radius: 8px;
      background: #0f2352;
      color: #ffffff;
      padding: 14px 18px;
      text-align: right;
      border-bottom: 4px solid #d8a11d;
    }
    .badge strong { display: block; color: #f5c542; font-size: 13px; text-transform: uppercase; }
    .badge span { display: block; margin-top: 4px; font-size: 12px; }
    .badge small { display: block; margin-top: 8px; color: #dbeafe; font-size: 10px; font-weight: 700; letter-spacing: 0.08em; }
    h1 { margin: 24px 0 8px; font-size: 22px; line-height: 1.25; color: #0f2352; }
    .security-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 18px 0 0;
      padding: 9px;
      border: 1px solid #c7d2fe;
      border-left: 6px solid #004080;
      background: repeating-linear-gradient(135deg, #eef6ff 0, #eef6ff 8px, #ffffff 8px, #ffffff 16px);
    }
    .security-strip span {
      border: 1px solid #bfdbfe;
      border-radius: 999px;
      background: #ffffff;
      padding: 5px 9px;
      color: #0f2352;
      font-size: 9px;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .meta-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 12px;
      margin: 18px 0 22px;
    }
    .meta-card {
      border: 1px solid #dbe3ef;
      border-left: 5px solid #d8a11d;
      border-radius: 8px;
      padding: 11px 12px;
      background: #f8fbff;
    }
    .meta-card span { display: block; color: #64748b; font-size: 10px; font-weight: 700; text-transform: uppercase; }
    .meta-card strong { display: block; margin-top: 4px; color: #0f2352; font-size: 13px; }
    .overview {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 14px;
      margin: 0 0 18px;
    }
    .panel {
      border: 1px solid #dbe3ef;
      border-radius: 8px;
      background: #ffffff;
      padding: 14px;
    }
    .panel h2 {
      margin: 0 0 8px;
      color: #004080;
      font-size: 13px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .panel p { margin: 0; color: #334155; font-size: 11px; line-height: 1.55; }
    .assurance-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }
    .assurance {
      min-height: 64px;
      border: 1px solid #dbe3ef;
      border-radius: 8px;
      padding: 9px;
      background: #f8fbff;
    }
    .assurance strong { display: block; color: #0f2352; font-size: 11px; }
    .assurance span { display: block; margin-top: 5px; color: #64748b; font-size: 9px; line-height: 1.35; }
    .section-title {
      margin: 18px 0 8px;
      color: #004080;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    table { width: 100%; border-collapse: collapse; margin-top: 12px; }
    th, td { border: 1px solid #dbe3ef; padding: 10px; text-align: left; vertical-align: top; font-size: 11px; line-height: 1.35; }
    th { background: #004080; color: #ffffff; font-size: 10px; letter-spacing: 0.05em; text-transform: uppercase; }
    tr:nth-child(even) td { background: #f8fbff; }
    .value { color: #004080; font-size: 16px; font-weight: 800; white-space: nowrap; }
    .control-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin-top: 10px;
    }
    .control-card {
      border: 1px solid #dbe3ef;
      border-radius: 8px;
      padding: 10px;
      background: #ffffff;
    }
    .control-card span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 999px;
      background: #0f2352;
      color: #f5c542;
      font-size: 9px;
      font-weight: 900;
    }
    .control-card strong { display: block; margin-top: 8px; color: #0f2352; font-size: 11px; }
    .control-card p { margin: 5px 0 0; color: #475569; font-size: 10px; line-height: 1.4; }
    .signature-row {
      display: grid;
      grid-template-columns: 1fr 1fr 0.7fr;
      gap: 36px;
      margin-top: 32px;
    }
    .signature {
      border-top: 1px solid #94a3b8;
      padding-top: 8px;
      color: #475569;
      font-size: 11px;
      font-weight: 700;
    }
    .stamp {
      min-height: 86px;
      border: 2px solid #d8a11d;
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #004080;
      font-size: 10px;
      font-weight: 900;
      text-align: center;
      text-transform: uppercase;
      transform: rotate(-6deg);
    }
    .footer {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      margin-top: 24px;
      padding-top: 12px;
      border-top: 1px solid #dbe3ef;
      color: #64748b;
      font-size: 10px;
    }
    @media print {
      body { margin: 0; }
      .sheet { min-height: auto; padding: 0; border-top-width: 8px; }
      .watermark-logo { top: 275px; width: 500px; height: 500px; opacity: 0.04; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <main class="sheet">
    <div class="watermark-layer" aria-hidden="true">
      <img class="watermark-logo" src="${escapeHtml(logoUrl)}" alt="">
    </div>
    <header class="masthead">
      <section class="brand">
        <div class="logo-frame">
          <img class="logo" src="${escapeHtml(logoUrl)}" alt="Logo ${escapeHtml(SCHOOL_NAME)}">
        </div>
        <div>
          <p class="school">${escapeHtml(SCHOOL_NAME)}</p>
          <p class="tagline">Official Super Admin Report</p>
        </div>
      </section>
      <aside class="badge">
        <strong>Document officiel</strong>
        <span>Dashboard Super Administrateur</span>
        <small>${escapeHtml(documentId)}</small>
      </aside>
    </header>

    <h1>${escapeHtml(title)}</h1>
    <section class="security-strip">${escapedSecurityMarks}</section>
    <section class="meta-grid">
      <div class="meta-card"><span>Periode</span><strong>${escapeHtml(periodLabel)}</strong></div>
      <div class="meta-card"><span>Frequence</span><strong>${escapeHtml(reportCadenceLabels[cadence])}</strong></div>
      <div class="meta-card"><span>Type</span><strong>${escapeHtml(reportCategoryLabels[category])}</strong></div>
      <div class="meta-card"><span>Generation</span><strong>${escapeHtml(generatedAt)}</strong></div>
      <div class="meta-card"><span>Authenticite</span><strong>${escapeHtml(authenticityCode)}</strong></div>
    </section>

    <section class="overview">
      <div class="panel">
        <h2>Resume executif</h2>
        <p>Ce rapport consolide ${escapeHtml(rows.length)} indicateurs pour la période ${escapeHtml(periodLabel)}. Il met en évidence les données du registre, les points de suivi opérationnel et les actions administratives à traiter. Les priorités signalées ci-dessous servent de base aux contrôles de direction et aux décisions du Super Administrateur.</p>
      </div>
      <div class="panel">
        <h2>Surete documentaire</h2>
        <div class="assurance-grid">
          <div class="assurance"><strong>ID</strong><span>${escapeHtml(documentId)}</span></div>
          <div class="assurance"><strong>Alertes</strong><span>${escapeHtml(criticalActions)} controle(s) a surveiller.</span></div>
          <div class="assurance"><strong>Statut</strong><span>Document confidentiel, usage administratif interne.</span></div>
        </div>
      </div>
    </section>

    <p class="section-title">Indicateurs detailles</p>
    <table>
      <thead>
        <tr>
          <th>Section</th>
          <th>Indicateur</th>
          <th>Valeur</th>
          <th>Detail</th>
          <th>Action recommandee</th>
        </tr>
      </thead>
      <tbody>${escapedRows}</tbody>
    </table>

    <p class="section-title">Plan de controle et d'authenticite</p>
    <section class="control-grid">${escapedControls}</section>

    <section class="signature-row">
      <div class="signature">Direction / Super Administrateur</div>
      <div class="signature">Cachet de l'ecole</div>
      <div class="stamp">Verifie<br>${escapeHtml(authenticityCode)}</div>
    </section>
    <footer class="footer">
      <span>${escapeHtml(SCHOOL_NAME)} - Rapport genere depuis KCS Nexus - ${escapeHtml(documentId)}</span>
      <span>Confidentiel - authenticite: ${escapeHtml(authenticityCode)}</span>
    </footer>
  </main>
  <script>
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
        window.focus();
        window.print();
      });
    }

    window.addEventListener('load', function () {
      setTimeout(printWhenReady, 250);
    });
  <\/script>
</body>
</html>`;
};
const exportAdminReport = (category, cadence, format, officialRoster, admissionRequests) => {
  const rows = buildReportRows(category, cadence, officialRoster, admissionRequests);
  const period = buildReportWindow(cadence);
  const title = `${SCHOOL_NAME} - ${reportCategoryLabels[category]} - ${reportCadenceLabels[cadence]}`;
  const filename = `kcs-${category}-${cadence}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}`;
  if (format === "csv") {
    const csv = [
      ["Section", "Indicateur", "Valeur", "Detail", "Action"].map(escapeExportCell).join(","),
      ...rows.map((row) => [row.section, row.metric, row.value, row.detail, row.action].map(escapeExportCell).join(","))
    ].join("\n");
    downloadExportFile(`${filename}.csv`, csv, "text/csv;charset=utf-8");
    return;
  }
  const html = buildAdminReportDocument(title, period.label, rows, category, cadence);
  if (format === "excel") {
    downloadExportFile(`${filename}.xls`, html, "application/vnd.ms-excel;charset=utf-8");
    return;
  }
  const printWindow = window.open("", "_blank", "width=1100,height=800");
  if (!printWindow) return;
  printWindow.document.write(html);
  printWindow.document.close();
};
const openPrintableDocument = (html) => {
  const printWindow = window.open("", "_blank", "width=1100,height=820");
  if (!printWindow) return;
  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
};
const buildOfficialTranscriptPrintHtml = (transcript) => {
  const logoUrl = typeof window === "undefined" ? SCHOOL_SEAL_SRC : new URL(SCHOOL_SEAL_SRC, window.location.origin).href;
  const documentId = `KCS-TR-${Date.now().toString(36).toUpperCase()}`;
  const generatedAt = (/* @__PURE__ */ new Date()).toLocaleString();
  const courseRows = transcript.rows.flatMap((year) => year.courses.map((course, courseIndex) => `
    <tr>
      <td>${courseIndex === 0 ? `${escapeHtml(year.year)}<br><strong>${escapeHtml(year.grade)}</strong><br><small>${escapeHtml(year.status)}</small>` : ""}</td>
      <td>${escapeHtml(course.course)}</td>
      <td>${escapeHtml(course.credit)}</td>
      <td>${escapeHtml(course.average)}%</td>
      <td>${escapeHtml(course.letter)}</td>
      <td>${escapeHtml(course.gpa)}</td>
    </tr>
  `)).join("");
  const yearCards = transcript.rows.map((year) => `
    <div class="box">
      <span>${escapeHtml(year.grade)} - ${escapeHtml(year.year)}</span>
      <strong>${escapeHtml(year.average)}%</strong>
      <small>GPA ${escapeHtml(year.annualGpa)} - Credits ${escapeHtml(year.credits)} - ${escapeHtml(year.status)}</small>
    </div>
  `).join("");
  const controls = [
    ["Credit audit", `${transcript.totalCredits}/24 credits earned against graduation pathway.`],
    ["GPA method", "Annual GPA is calculated from bulletin averages, then weighted by earned credits."],
    ["Academic standing", `${transcript.classRank}; current graduation review: ${transcript.graduationStatus}.`],
    ["Integrity seal", `Generated by Super Admin registry with document ID ${documentId}.`]
  ].map(([title, text]) => `<div class="control"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(text)}</span></div>`).join("");
  return `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(SCHOOL_NAME)} Transcript</title><style>
    body { margin: 0; background: #eef4fb; color: #0f172a; font-family: Arial, sans-serif; }
    .sheet { min-height: 100vh; padding: 26px; background: #fff; border-top: 10px solid #004080; position: relative; overflow: hidden; }
    .watermark { position: absolute; top: 255px; left: 50%; width: 540px; height: 540px; transform: translateX(-50%); object-fit: contain; opacity: .045; }
    header { display: flex; justify-content: space-between; gap: 18px; border-bottom: 1px solid #dbe4f0; padding-bottom: 18px; position: relative; z-index: 1; }
    .brand { display: flex; align-items: center; gap: 14px; }
    .logo { width: 72px; height: 72px; object-fit: contain; border: 1px solid #dbe4f0; border-radius: 16px; padding: 6px; background: white; }
    .school { margin: 0; color: #004080; font-size: 20px; font-weight: 900; }
    .tag { margin: 4px 0 0; color: #64748b; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .14em; }
    .badge { border: 1px solid #c8a64d; border-radius: 18px; padding: 12px 14px; color: #004080; text-align: right; font-size: 12px; background: #fffaf0; }
    h1 { margin: 24px 0 6px; color: #004080; font-size: 28px; }
    .subtitle { margin: 0 0 18px; color: #475569; }
    .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; position: relative; z-index: 1; }
    .box, .control { border: 1px solid #dbe4f0; border-radius: 16px; background: #f8fbff; padding: 12px; }
    .box span, .control span { display: block; color: #64748b; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; }
    .box strong { display: block; margin-top: 6px; color: #004080; font-size: 20px; }
    .box small, .control small { display: block; margin-top: 5px; color: #64748b; font-size: 11px; line-height: 1.45; text-transform: none; letter-spacing: 0; }
    .control strong { display: block; margin-bottom: 6px; color: #004080; }
    .panel { margin-top: 18px; border: 1px solid #dbe4f0; border-radius: 18px; padding: 16px; background: rgba(248,251,255,.86); position: relative; z-index: 1; }
    .panel h2 { margin: 0 0 10px; color: #004080; font-size: 15px; }
    table { width: 100%; border-collapse: collapse; font-size: 11px; position: relative; z-index: 1; }
    th { background: #004080; color: white; text-align: left; padding: 9px; }
    td { border-bottom: 1px solid #e2e8f0; padding: 9px; vertical-align: top; }
    .signatures { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 26px; position: relative; z-index: 1; }
    .signature { min-height: 76px; border-top: 1px solid #94a3b8; padding-top: 8px; color: #475569; font-size: 11px; font-weight: 800; }
    .stamp { border: 2px solid #d8a11d; border-radius: 999px; min-height: 76px; display: flex; align-items: center; justify-content: center; color: #004080; font-size: 10px; font-weight: 900; text-align: center; transform: rotate(-5deg); }
    footer { display: flex; justify-content: space-between; gap: 16px; margin-top: 22px; border-top: 1px solid #dbe4f0; padding-top: 12px; color: #64748b; font-size: 10px; }
    @media print { body { background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; } .sheet { padding: 0; border-top-width: 8px; } .watermark { top: 300px; } }
  </style></head><body><main class="sheet">
    <img class="watermark" src="${escapeHtml(logoUrl)}" alt="">
    <header>
      <section class="brand"><img class="logo" src="${escapeHtml(logoUrl)}" alt="Logo ${escapeHtml(SCHOOL_NAME)}"><div><p class="school">${escapeHtml(SCHOOL_NAME)}</p><p class="tag">Official Academic Transcript</p></div></section>
      <aside class="badge"><strong>Document officiel</strong><br>${escapeHtml(documentId)}<br>${escapeHtml(generatedAt)}</aside>
    </header>
    <h1>${escapeHtml(transcript.student.name)}</h1>
    <p class="subtitle">ID: ${escapeHtml(transcript.student.studentNumber ?? transcript.student.id)} - Grade: ${escapeHtml(transcript.student.grade)}${transcript.student.section ? ` ${escapeHtml(transcript.student.section)}` : ""} - Parent: ${escapeHtml(transcript.student.parent)} - Generated: ${escapeHtml(generatedAt)}</p>
    <section class="grid">
      <div class="box"><span>Cumulative GPA</span><strong>${escapeHtml(transcript.cumulativeGpa)}</strong><small>4.0 scale</small></div>
      <div class="box"><span>Cumulative Average</span><strong>${escapeHtml(transcript.cumulativeAverage)}%</strong><small>Weighted academic view</small></div>
      <div class="box"><span>Credits Earned</span><strong>${escapeHtml(transcript.totalCredits)}/24</strong><small>Graduation credit audit</small></div>
      <div class="box"><span>Standing</span><strong>${escapeHtml(transcript.classRank)}</strong><small>${escapeHtml(transcript.graduationStatus)}</small></div>
    </section>
    <section class="panel"><h2>Academic Course Record</h2><table><thead><tr><th>Year / Grade</th><th>Course</th><th>Credit</th><th>Average</th><th>Letter</th><th>GPA</th></tr></thead><tbody>${courseRows}</tbody></table></section>
    <section class="panel"><h2>Annual Summary</h2><div class="grid">${yearCards}</div></section>
    <section class="panel"><h2>Controls, Method and Administrative Notes</h2><div class="grid">${controls}</div></section>
    <section class="signatures"><div class="signature">Registrar / Records Office</div><div class="signature">Direction / Super Administrateur</div><div class="stamp">Verified<br>${escapeHtml(documentId)}</div></section>
    <footer><span>${escapeHtml(SCHOOL_NAME)} - KCS Nexus official transcript</span><span>Confidential academic document - ${escapeHtml(documentId)}</span></footer>
  </main><script>window.addEventListener('load',function(){setTimeout(function(){window.focus();window.print();},250);});<\/script></body></html>`;
};
const printOfficialTranscript = (transcript) => {
  openPrintableDocument(buildOfficialTranscriptPrintHtml(transcript));
};
const printAcademicWorkflowDocument = (item) => {
  const logoUrl = typeof window === "undefined" ? SCHOOL_SEAL_SRC : new URL(SCHOOL_SEAL_SRC, window.location.origin).href;
  const documentId = `KCS-AC-${Date.now().toString(36).toUpperCase()}`;
  const isReportCard = Boolean(item.term);
  const detailRows = [
    ["Student", item.student],
    ["Document type", isReportCard ? "Report card" : "Transcript summary"],
    ["Period", item.term ?? item.years],
    ["Academic result", isReportCard ? `${item.average}% average` : `${item.credits} credits - GPA ${item.cumulativeGpa}`],
    ["Status", item.principalStatus ?? item.status],
    ["Conduct / Review", item.conduct ?? "Academic registry review"],
    ["Comment", item.teacherComment ?? "Generated from the Super Admin academic workflow registry."]
  ].map(([label, value]) => `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join("");
  openPrintableDocument(`<!doctype html><html><head><meta charset="utf-8"><title>KCS Academic Document</title><style>
    body { margin:0; background:#eef4fb; color:#0f172a; font-family:Arial,sans-serif; }
    .sheet { min-height:100vh; padding:28px; background:#fff; border-top:10px solid #004080; position:relative; overflow:hidden; }
    .watermark { position:absolute; top:210px; left:50%; transform:translateX(-50%); width:480px; height:480px; object-fit:contain; opacity:.045; }
    header { display:flex; justify-content:space-between; gap:18px; border-bottom:1px solid #dbe4f0; padding-bottom:18px; position:relative; z-index:1; }
    .brand { display:flex; align-items:center; gap:14px; }
    img.logo { width:68px; height:68px; object-fit:contain; border:1px solid #dbe4f0; border-radius:16px; padding:6px; }
    .school { margin:0; color:#004080; font-size:20px; font-weight:900; }
    .tag { margin:4px 0 0; color:#64748b; font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:.14em; }
    .badge { border:1px solid #c8a64d; border-radius:18px; padding:12px 14px; color:#004080; text-align:right; font-size:12px; background:#fffaf0; }
    h1 { color:#004080; margin:24px 0 10px; }
    .panel { border:1px solid #dbe4f0; border-radius:18px; background:#f8fbff; padding:16px; position:relative; z-index:1; }
    table { width:100%; border-collapse:collapse; font-size:12px; }
    th { width:210px; text-align:left; color:#004080; padding:11px; border-bottom:1px solid #e2e8f0; }
    td { padding:11px; border-bottom:1px solid #e2e8f0; }
    .notes { margin-top:18px; display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
    .note { border:1px solid #dbe4f0; border-radius:16px; padding:12px; background:white; }
    .note strong { color:#004080; display:block; margin-bottom:6px; }
    footer { margin-top:24px; border-top:1px solid #dbe4f0; padding-top:12px; color:#64748b; font-size:10px; display:flex; justify-content:space-between; }
    @media print { body { background:#fff; -webkit-print-color-adjust:exact; print-color-adjust:exact; } .sheet { padding:0; border-top-width:8px; } }
  </style></head><body><main class="sheet">
    <img class="watermark" src="${escapeHtml(logoUrl)}" alt="">
    <header><section class="brand"><img class="logo" src="${escapeHtml(logoUrl)}" alt="Logo ${escapeHtml(SCHOOL_NAME)}"><div><p class="school">${escapeHtml(SCHOOL_NAME)}</p><p class="tag">${isReportCard ? "Official Report Card" : "Academic Transcript Summary"}</p></div></section><aside class="badge"><strong>Document officiel</strong><br>${escapeHtml(documentId)}<br>${escapeHtml((/* @__PURE__ */ new Date()).toLocaleString())}</aside></header>
    <h1>${escapeHtml(item.student)}</h1>
    <section class="panel"><table><tbody>${detailRows}</tbody></table></section>
    <section class="notes"><div class="note"><strong>Validation</strong><span>Reviewed through KCS Nexus academic workflow.</span></div><div class="note"><strong>Archive</strong><span>For student file, parent communication, and school leadership follow-up.</span></div><div class="note"><strong>Integrity</strong><span>Document ID ${escapeHtml(documentId)} with KCS official branding.</span></div></section>
    <footer><span>${escapeHtml(SCHOOL_NAME)} - KCS Nexus academic document</span><span>${escapeHtml(documentId)}</span></footer>
  </main><script>window.addEventListener('load',function(){setTimeout(function(){window.focus();window.print();},250);});<\/script></body></html>`);
};
const AdminSectionView = ({
  segment,
  officialRoster,
  setOfficialRoster,
  admissionRequests,
  setAdmissionRequests
}) => {
  var _a;
  const [selectedStudent, setSelectedStudent] = reactExports.useState(officialRoster[0] ?? adminRosterSeed[0]);
  const [viewingStudent, setViewingStudent] = reactExports.useState(null);
  const [selectedStaff, setSelectedStaff] = reactExports.useState(staffSeed[0]);
  const [selectedParent, setSelectedParent] = reactExports.useState(null);
  const [editingParent, setEditingParent] = reactExports.useState(null);
  const [parentEditForm, setParentEditForm] = reactExports.useState(() => createAdminParentEditForm(null));
  const [savingParentEdit, setSavingParentEdit] = reactExports.useState(false);
  const [sentNotice, setSentNotice] = reactExports.useState("");
  const [studentQuery, setStudentQuery] = reactExports.useState("");
  const [parentQuery, setParentQuery] = reactExports.useState("");
  const [divisionFilter, setDivisionFilter] = reactExports.useState("All");
  const [gradeFilter, setGradeFilter] = reactExports.useState("All");
  const [classSuffixFilter, setClassSuffixFilter] = reactExports.useState("All");
  const [familyFilter, setFamilyFilter] = reactExports.useState("All");
  const [studentNotice, setStudentNotice] = reactExports.useState("");
  const [parentNotice, setParentNotice] = reactExports.useState("");
  const [apiSynced, setApiSynced] = reactExports.useState(false);
  const [sharedDirectory, setSharedDirectory] = reactExports.useState(null);
  const [showCreateStudent, setShowCreateStudent] = reactExports.useState(false);
  const [selectedTranscriptId, setSelectedTranscriptId] = reactExports.useState("");
  const [reportCadence, setReportCadence] = reactExports.useState("weekly");
  const [reportCategory, setReportCategory] = reactExports.useState("executive");
  const [editingStudent, setEditingStudent] = reactExports.useState(null);
  const [studentEditForm, setStudentEditForm] = reactExports.useState(() => createAdminStudentEditForm(null));
  const [savingStudentEdit, setSavingStudentEdit] = reactExports.useState(false);
  const [newFamily, setNewFamily] = reactExports.useState({
    parent: "",
    parentEmail: "",
    parentPhone: "",
    advisor: "",
    students: [createAdminStudentDraft()]
  });
  const shouldLoadRoster = adminRosterSegments.has(segment);
  const refreshOfficialRoster = async () => {
    var _a2, _b;
    const [response, directoryResponse] = await Promise.all([
      getAdminRoster(),
      registryAPI.getDirectory().catch(() => null)
    ]);
    const directory = (_a2 = directoryResponse == null ? void 0 : directoryResponse.data) == null ? void 0 : _a2.data;
    if (directory == null ? void 0 : directory.parents) {
      setSharedDirectory(directory);
    }
    const profiles = (_b = response.data) == null ? void 0 : _b.data;
    if (!Array.isArray(profiles)) {
      const fallbackRoster = readStoredRoster();
      const roster = fallbackRoster.length > 0 ? fallbackRoster : adminRosterSeed;
      setOfficialRoster(roster);
      setSelectedStudent((current) => roster.find((item) => item.id === (current == null ? void 0 : current.id)) ?? roster[0] ?? adminRosterSeed[0]);
      setViewingStudent(null);
      setApiSynced(false);
      return [];
    }
    const apiRoster = profiles.map(apiProfileToRosterRecord);
    setOfficialRoster(apiRoster);
    saveRoster(apiRoster);
    setSelectedStudent((current) => apiRoster.find((item) => item.id === (current == null ? void 0 : current.id)) ?? apiRoster[0] ?? adminRosterSeed[0]);
    setViewingStudent((current) => current ? apiRoster.find((item) => item.id === current.id) ?? null : null);
    setApiSynced(true);
    return apiRoster;
  };
  reactExports.useEffect(() => {
    if (!shouldLoadRoster) {
      setStudentNotice("");
      return;
    }
    let mounted = true;
    Promise.all([
      getAdminRoster(),
      registryAPI.getDirectory().catch(() => null)
    ]).then(([response, directoryResponse]) => {
      var _a2, _b;
      const profiles = (_a2 = response.data) == null ? void 0 : _a2.data;
      if (!mounted) return;
      const directory = (_b = directoryResponse == null ? void 0 : directoryResponse.data) == null ? void 0 : _b.data;
      if (directory == null ? void 0 : directory.parents) {
        setSharedDirectory(directory);
      }
      if (!Array.isArray(profiles)) {
        const fallbackRoster = readStoredRoster();
        const roster = fallbackRoster.length > 0 ? fallbackRoster : adminRosterSeed;
        setOfficialRoster(roster);
        setSelectedStudent((current) => roster.find((item) => item.id === (current == null ? void 0 : current.id)) ?? roster[0] ?? adminRosterSeed[0]);
        setViewingStudent(null);
        setApiSynced(false);
        return;
      }
      const apiRoster = profiles.map(apiProfileToRosterRecord);
      setOfficialRoster(apiRoster);
      saveRoster(apiRoster);
      setSelectedStudent((current) => apiRoster.find((item) => item.id === (current == null ? void 0 : current.id)) ?? apiRoster[0] ?? adminRosterSeed[0]);
      setApiSynced(true);
    }).catch(() => {
      const fallbackRoster = readStoredRoster();
      const roster = fallbackRoster.length > 0 ? fallbackRoster : adminRosterSeed;
      setOfficialRoster(roster);
      setSelectedStudent((current) => roster.find((item) => item.id === (current == null ? void 0 : current.id)) ?? roster[0] ?? adminRosterSeed[0]);
      setViewingStudent(null);
      setSharedDirectory(null);
      setApiSynced(false);
      setStudentNotice("La synchronisation du registre est indisponible. Vérifiez que KCS Orbit API est bien lancé pour voir les élèves provenant des autres applications.");
    });
    return () => {
      mounted = false;
    };
  }, [setOfficialRoster, shouldLoadRoster]);
  const registerOfficialStudent = async () => {
    var _a2, _b, _c, _d, _e;
    const readyStudents = newFamily.students.filter((student) => student.name.trim());
    if (readyStudents.length === 0 || !newFamily.parent.trim()) {
      setStudentNotice("Le parent et au moins un élève sont requis avant l’enregistrement.");
      return;
    }
    const duplicateStudentNumbers = readyStudents.map((student) => student.studentNumber.trim()).filter(Boolean).filter((studentNumber, index, values) => values.indexOf(studentNumber) !== index);
    if (duplicateStudentNumbers.length > 0) {
      setStudentNotice(`Doublon détecté dans la saisie. Numéro d’élève répété: ${Array.from(new Set(duplicateStudentNumbers)).join(", ")}`);
      return;
    }
    const duplicateStudentEmails = readyStudents.map((student) => student.email.trim().toLowerCase()).filter(Boolean).filter((email, index, values) => values.indexOf(email) !== index);
    if (duplicateStudentEmails.length > 0) {
      setStudentNotice(`Doublon détecté dans la saisie. Email élève répété: ${Array.from(new Set(duplicateStudentEmails)).join(", ")}`);
      return;
    }
    const [parentFirst, ...parentLastParts] = newFamily.parent.trim().split(/\s+/);
    const parentEmail = newFamily.parentEmail.trim() || `${newFamily.parent.toLowerCase().replace(/\W+/g, ".")}@family.kcs.test`;
    const parentPhone = newFamily.parentPhone.trim() || "+243 810 000 000";
    const fallbackTimestamp = Date.now().toString().slice(-5);
    const localRecords = readyStudents.map((student, index) => {
      const studentNumber = student.studentNumber.trim() || `KCS-${student.grade.replace(/\D/g, "").padStart(2, "0") || "00"}-${fallbackTimestamp}${index + 1}`;
      return {
        id: `manual-${Date.now()}-${index}`,
        name: student.name.trim(),
        studentNumber,
        grade: student.grade,
        section: student.section,
        parent: newFamily.parent.trim(),
        parentEmail,
        parentPhone,
        status: "Active",
        gpa: 0,
        attendance: 100,
        discipline: "Clear",
        advisor: newFamily.advisor.trim() || "Advisor pending"
      };
    });
    let finalRecords = localRecords;
    try {
      const response = await studentsAPI.create({
        parent: {
          firstName: parentFirst,
          lastName: parentLastParts.join(" ") || "Guardian",
          email: parentEmail,
          phone: parentPhone,
          relationship: "Parent"
        },
        students: readyStudents.map((student, index) => {
          const [firstName, ...lastParts] = student.name.trim().split(/\s+/);
          const studentNumber = localRecords[index].studentNumber;
          return {
            firstName,
            lastName: lastParts.join(" ") || "Student",
            studentNumber,
            grade: student.grade,
            section: student.section,
            email: student.email.trim() || `${studentNumber.toLowerCase()}@students.kcs.local`
          };
        })
      });
      const profiles = (_b = (_a2 = response.data) == null ? void 0 : _a2.data) == null ? void 0 : _b.students;
      if (Array.isArray(profiles) && profiles.length > 0) {
        finalRecords = profiles.map(apiProfileToRosterRecord);
      }
      setApiSynced(true);
      const temporaryCredentials = (_d = (_c = response.data) == null ? void 0 : _c.data) == null ? void 0 : _d.temporaryCredentials;
      const credentialSummary = [
        ((_e = temporaryCredentials == null ? void 0 : temporaryCredentials.parent) == null ? void 0 : _e.temporaryPassword) ? `Parent: ${temporaryCredentials.parent.username} / ${temporaryCredentials.parent.temporaryPassword}` : null,
        ...((temporaryCredentials == null ? void 0 : temporaryCredentials.students) ?? []).filter((credential) => credential.temporaryPassword).map((credential) => `${credential.studentId}: ${credential.username} / ${credential.temporaryPassword}`)
      ].filter(Boolean).join(" | ");
      setStudentNotice(`Famille enregistrée avec ${finalRecords.length} élève(s). Accès temporaires: ${credentialSummary || "déjà définis"}. Format commun: KCS-123456, à changer à la première connexion.`);
    } catch (error) {
      setStudentNotice(extractStudentApiMessage(error, "Impossible d’enregistrer cette famille pour le moment."));
      return;
    }
    const refreshedRoster = await refreshOfficialRoster();
    const focusStudent = refreshedRoster.find((student) => finalRecords.some((record) => record.studentNumber === student.studentNumber)) ?? refreshedRoster[0] ?? finalRecords[0];
    setSelectedStudent(focusStudent);
    setDivisionFilter(getDivisionForGrade(focusStudent.grade).id);
    setGradeFilter(focusStudent.grade);
    setClassSuffixFilter(focusStudent.section || "All");
    setNewFamily({ parent: "", parentEmail: "", parentPhone: "", advisor: "", students: [createAdminStudentDraft()] });
  };
  const openEditStudent = (student) => {
    setViewingStudent(null);
    setEditingStudent(student);
    setStudentEditForm(createAdminStudentEditForm(student));
    setStudentNotice("");
  };
  const saveEditedStudent = async () => {
    var _a2;
    if (!editingStudent) return;
    const normalizedName = `${studentEditForm.firstName} ${studentEditForm.lastName}`.trim();
    if (!normalizedName) {
      setStudentNotice("Le prénom et le nom de l’élève sont obligatoires pour enregistrer les modifications.");
      return;
    }
    if (!studentEditForm.studentNumber.trim()) {
      setStudentNotice("Le numéro d’élève est obligatoire pour empêcher les doublons.");
      return;
    }
    setSavingStudentEdit(true);
    try {
      const response = await studentsAPI.update(editingStudent.id, {
        firstName: studentEditForm.firstName.trim(),
        lastName: studentEditForm.lastName.trim() || "Student",
        email: studentEditForm.email.trim() || void 0,
        studentNumber: studentEditForm.studentNumber.trim(),
        grade: studentEditForm.grade,
        section: studentEditForm.section,
        status: studentEditForm.status
      });
      const roster = await refreshOfficialRoster();
      const updatedStudent = roster.find((student) => student.id === editingStudent.id) ?? null;
      if (updatedStudent) {
        setSelectedStudent(updatedStudent);
        if ((viewingStudent == null ? void 0 : viewingStudent.id) === updatedStudent.id) {
          setViewingStudent(updatedStudent);
        }
      }
      setEditingStudent(null);
      setStudentNotice(((_a2 = response.data) == null ? void 0 : _a2.message) || `${normalizedName} a été mis à jour avec succès.`);
    } catch (error) {
      setStudentNotice(extractStudentApiMessage(error, "Impossible de modifier cet élève pour le moment."));
    } finally {
      setSavingStudentEdit(false);
    }
  };
  const deleteOfficialStudent = async (student) => {
    var _a2;
    if (!student.isDeletable) {
      setStudentNotice(`L’élève ${student.name} est géré par ${student.managingApp || "une autre application"} et doit être supprimé dans son système source.`);
      return;
    }
    const confirmed = window.confirm(`Supprimer ${student.name} du registre officiel ?`);
    if (!confirmed) return;
    try {
      const response = await studentsAPI.delete(student.id);
      await refreshOfficialRoster();
      setStudentNotice(((_a2 = response.data) == null ? void 0 : _a2.message) || `${student.name} a été supprimé du registre officiel.`);
    } catch (error) {
      setStudentNotice(extractStudentApiMessage(error, `Impossible de supprimer ${student.name} pour le moment.`));
      return;
    }
  };
  const openEditParent = (parent) => {
    setSelectedParent(null);
    setEditingParent(parent);
    setParentEditForm(createAdminParentEditForm(parent));
    setParentNotice("");
  };
  const saveEditedParent = async () => {
    var _a2;
    if (!editingParent) return;
    const normalizedName = `${parentEditForm.firstName} ${parentEditForm.lastName}`.trim();
    if (!normalizedName) {
      setParentNotice("Le prénom et le nom du parent sont obligatoires pour enregistrer les modifications.");
      return;
    }
    setSavingParentEdit(true);
    try {
      const response = await registryAPI.updateEntity("parent", editingParent.id, {
        firstName: parentEditForm.firstName.trim(),
        lastName: parentEditForm.lastName.trim() || "Parent",
        email: parentEditForm.email.trim() || void 0,
        phone: parentEditForm.phone.trim() || null
      }, editingParent.identifierType);
      const roster = await refreshOfficialRoster();
      const refreshedParents = buildAdminParentRecordsFromDirectory(sharedDirectory, roster);
      const updatedParent = refreshedParents.find((parent) => parent.id === editingParent.id) ?? null;
      setEditingParent(null);
      if (updatedParent) {
        setSelectedParent(updatedParent);
      }
      setParentNotice(((_a2 = response.data) == null ? void 0 : _a2.message) || `${normalizedName} a été mis à jour avec succès.`);
    } catch (error) {
      setParentNotice(extractStudentApiMessage(error, "Impossible de modifier ce parent pour le moment."));
    } finally {
      setSavingParentEdit(false);
    }
  };
  const deleteParentRecord = async (parent) => {
    var _a2;
    const confirmed = window.confirm(`Supprimer ${parent.name} du registre parent ?`);
    if (!confirmed) return;
    try {
      const response = await registryAPI.deleteEntity("parent", parent.id, parent.identifierType);
      await refreshOfficialRoster();
      setSelectedParent((current) => (current == null ? void 0 : current.id) === parent.id ? null : current);
      setEditingParent((current) => (current == null ? void 0 : current.id) === parent.id ? null : current);
      setParentNotice(((_a2 = response.data) == null ? void 0 : _a2.message) || `${parent.name} a été supprimé du registre parent.`);
    } catch (error) {
      setParentNotice(extractStudentApiMessage(error, `Impossible de supprimer ${parent.name} pour le moment.`));
    }
  };
  const openCreateStudentForm = () => {
    const updateDraftClass = (grade, section = "") => {
      setNewFamily((item) => ({
        ...item,
        students: item.students.map((student, index) => index === 0 ? { ...student, grade, section } : student)
      }));
    };
    if (gradeFilter !== "All") {
      updateDraftClass(gradeFilter);
    } else if (divisionFilter !== "All") {
      const division = SCHOOL_DIVISIONS.find((item) => item.id === divisionFilter);
      const firstGrade = (division == null ? void 0 : division.id) === "kindergarten" ? "K3" : (division == null ? void 0 : division.id) === "elementary" ? "Grade 1" : (division == null ? void 0 : division.id) === "middle" ? "Grade 6" : (division == null ? void 0 : division.id) === "high" ? "Grade 9" : "Grade 1";
      updateDraftClass(firstGrade);
    }
    setShowCreateStudent((value) => !value);
  };
  const updateAdmissionStatus = (application, status) => {
    setAdmissionRequests((items) => {
      const next = items.map((item) => item.applicationNumber === application.applicationNumber ? { ...item, status } : item);
      saveAdmissions(next);
      return next;
    });
    if (status === "ACCEPTED") {
      const approvedStudent = createStudentFromAdmission({ ...application });
      setOfficialRoster((items) => {
        if (items.some((item) => item.id === approvedStudent.id || item.name === approvedStudent.name)) return items;
        return [approvedStudent, ...items];
      });
      setSelectedStudent(approvedStudent);
    }
  };
  const grade9to12 = reactExports.useMemo(
    () => officialRoster.filter((student) => ["Grade 9", "Grade 10", "Grade 11", "Grade 12"].includes(student.grade)),
    [officialRoster]
  );
  const transcriptStudent = grade9to12.find((student) => student.id === selectedTranscriptId) ?? grade9to12[0] ?? officialRoster[0] ?? adminRosterSeed[0];
  const officialTranscript = buildOfficialTranscript(transcriptStudent);
  const filteredRoster = reactExports.useMemo(() => {
    const query = studentQuery.trim().toLowerCase();
    return officialRoster.filter((student) => divisionFilter === "All" || getDivisionForGrade(student.grade).id === divisionFilter).filter((student) => gradeFilter === "All" || student.grade === gradeFilter).filter((student) => classSuffixFilter === "All" || student.section === classSuffixFilter).filter((student) => familyFilter === "All" || student.parent === familyFilter).filter((student) => {
      if (!query) return true;
      const className = formatClassName(student.grade, student.section) || "Non assignée";
      const divisionTitle = getDivisionForGrade(student.grade).title;
      return [student.name, student.studentNumber, student.email, student.grade, student.section, className, divisionTitle, student.parent, student.parentEmail, student.parentPhone, student.status].filter(Boolean).join(" ").toLowerCase().includes(query);
    }).sort((a, b) => SCHOOL_LEVELS.indexOf(a.grade) - SCHOOL_LEVELS.indexOf(b.grade) || a.section.localeCompare(b.section) || a.name.localeCompare(b.name));
  }, [classSuffixFilter, divisionFilter, familyFilter, gradeFilter, officialRoster, studentQuery]);
  const familyDirectory = reactExports.useMemo(() => {
    return Array.from(new Set(officialRoster.map((student) => student.parent).filter(Boolean))).sort((left, right) => left.localeCompare(right));
  }, [officialRoster]);
  const rosterByClass = reactExports.useMemo(() => {
    return filteredRoster.reduce((groups, student) => {
      const key = formatClassName(student.grade, student.section);
      groups[key] = [...groups[key] ?? [], student];
      return groups;
    }, {});
  }, [filteredRoster]);
  const rosterByFamily = reactExports.useMemo(() => {
    return filteredRoster.reduce((groups, student) => {
      const key = student.parent || "Parent record pending";
      groups[key] = [...groups[key] ?? [], student];
      return groups;
    }, {});
  }, [filteredRoster]);
  const parentRecords = reactExports.useMemo(() => buildAdminParentRecordsFromDirectory(sharedDirectory, officialRoster), [officialRoster, sharedDirectory]);
  const filteredParents = reactExports.useMemo(() => {
    const query = parentQuery.trim().toLowerCase();
    if (!query) return parentRecords;
    return parentRecords.filter((parent) => [
      parent.displayId,
      parent.name,
      parent.email,
      parent.phone,
      parent.status,
      parent.syncSource,
      parent.classes.join(" "),
      parent.students.map((student) => `${student.name} ${student.studentNumber ?? ""}`).join(" ")
    ].join(" ").toLowerCase().includes(query));
  }, [parentQuery, parentRecords]);
  reactExports.useMemo(() => {
    return SCHOOL_DIVISIONS.map((division) => {
      const divisionStudents = officialRoster.filter((student) => getDivisionForGrade(student.grade).id === division.id);
      const averageAttendance = divisionStudents.length ? Math.round(divisionStudents.reduce((sum, student) => sum + student.attendance, 0) / divisionStudents.length) : 0;
      return { ...division, students: divisionStudents.length, averageAttendance };
    });
  }, [officialRoster]);
  reactExports.useMemo(() => {
    const knownTrend = performanceTrend.map((item) => {
      const exact = item[selectedStudent.name.split(" ")[0]];
      if (typeof exact === "number") return { month: item.month, score: exact };
      const baseline = Math.round((selectedStudent.gpa || 2.8) * 25);
      const monthIndex = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"].indexOf(item.month);
      return { month: item.month, score: Math.max(55, Math.min(99, baseline - 5 + monthIndex + (selectedStudent.attendance >= 94 ? 2 : -2))) };
    });
    return knownTrend;
  }, [selectedStudent]);
  grades.filter((grade) => grade.studentId === selectedStudent.id || selectedStudent.name.includes("Elise") && grade.studentId === "stu-elise" || selectedStudent.name.includes("David") && grade.studentId === "stu-david");
  attendance.filter((item) => item.studentId === selectedStudent.id || selectedStudent.name.includes("Elise") && item.studentId === "stu-elise" || selectedStudent.name.includes("David") && item.studentId === "stu-david");
  disciplineReports.find((item) => item.studentId === selectedStudent.id || item.student === selectedStudent.name);
  const selectedInsight = students.find((item) => item.id === selectedStudent.id || item.name === selectedStudent.name);
  if (segment === "parents") {
    const totalLinkedStudents = parentRecords.reduce((sum, parent) => sum + parent.studentCount, 0);
    const parentsWithAlerts = parentRecords.filter((parent) => parent.status === "Suivi requis").length;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-kcs-blue-600 dark:text-kcs-blue-300", children: "SAVANEX shared registry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: "Parents" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 max-w-3xl text-sm text-gray-500 dark:text-gray-400", children: "Annuaire des parents responsables, construit depuis les familles et les élèves synchronisés dans KCS Nexus." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-fit rounded-full px-3 py-1.5 text-xs font-bold ${apiSynced ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"}`, children: apiSynced ? "Synchronise Orbit" : "Mode local" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-4", children: [
        { label: "Parents visibles", value: filteredParents.length, detail: `${((_a = sharedDirectory == null ? void 0 : sharedDirectory.counts) == null ? void 0 : _a.parents) ?? parentRecords.length} au total partage`, icon: Users },
        { label: "Enfants lies", value: totalLinkedStudents, detail: "dans le registre officiel", icon: GraduationCap },
        { label: "Classes couvertes", value: Array.from(new Set(parentRecords.flatMap((parent) => parent.classes))).length, detail: "via les familles", icon: BookOpen },
        { label: "Suivi requis", value: parentsWithAlerts, detail: "au moins un enfant a surveiller", icon: AlertTriangle }
      ].map(({ label, value, detail, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, className: "mb-3 text-kcs-blue-600 dark:text-kcs-blue-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs font-semibold uppercase tracking-wide text-gray-400", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: detail })
      ] }, label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 dark:border-kcs-blue-700 dark:bg-kcs-blue-950", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 16, className: "text-gray-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: parentQuery, onChange: (event) => setParentQuery(event.target.value), className: "w-full bg-transparent text-sm outline-none dark:text-white", placeholder: "Rechercher parent, email, telephone, enfant ou classe..." })
        ] }),
        parentNotice ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 rounded-xl bg-kcs-blue-50 p-3 text-sm font-semibold text-kcs-blue-800 dark:bg-kcs-blue-950 dark:text-kcs-blue-100", children: parentNotice }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-gray-100 px-5 py-4 dark:border-kcs-blue-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Liste officielle des parents" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Vue semblable a SAVANEX : responsable, contacts, enfants rattaches, classes et statut de suivi." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-x-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-[900px] w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500 dark:bg-kcs-blue-950 dark:text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 font-semibold", children: "Parent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 font-semibold", children: "ID parent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 font-semibold", children: "Contact" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 font-semibold", children: "Enfants" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 font-semibold", children: "Classes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 font-semibold", children: "Source" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-right font-semibold", children: "Action" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-100 dark:divide-kcs-blue-800/70", children: filteredParents.map((parent) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "transition-colors hover:bg-gray-50 dark:hover:bg-kcs-blue-800/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: parent.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: parent.status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 font-mono text-xs text-gray-600 dark:text-gray-300", children: parent.displayId || parent.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-4 text-xs text-gray-500 dark:text-gray-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: parent.email }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: parent.phone })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-4 text-gray-700 dark:text-gray-200", children: [
                parent.studentCount,
                " enfant(s)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-gray-700 dark:text-gray-200", children: parent.classes.join(", ") || "Non assignee" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-kcs-blue-50 px-2.5 py-1 text-xs font-bold uppercase text-kcs-blue-700 dark:bg-kcs-blue-800 dark:text-kcs-blue-100", children: parent.syncSource }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "rounded-lg border border-kcs-blue-200 px-3 py-2 text-xs font-bold text-kcs-blue-700 hover:bg-kcs-blue-50 dark:border-kcs-blue-700 dark:text-kcs-blue-200 dark:hover:bg-kcs-blue-800", onClick: () => setSelectedParent(parent), children: "Voir" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "rounded-lg border border-amber-200 px-3 py-2 text-xs font-bold text-amber-700 hover:bg-amber-50 dark:border-amber-700 dark:text-amber-200 dark:hover:bg-amber-900/20", onClick: () => openEditParent(parent), children: "Modifier" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "rounded-lg border border-red-100 px-3 py-2 text-red-600 hover:bg-red-50 dark:border-red-900/40 dark:hover:bg-red-900/20", onClick: () => deleteParentRecord(parent), "aria-label": `Delete ${parent.name}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 15 }) })
              ] }) })
            ] }, parent.id)) })
          ] }),
          filteredParents.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 text-sm font-semibold text-yellow-800 dark:text-yellow-300", children: "Aucun parent ne correspond aux filtres en cours." })
        ] })
      ] }),
      selectedParent && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-kcs-blue-950/75 p-4 backdrop-blur-sm", role: "dialog", "aria-modal": "true", "aria-label": "Fiche parent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl dark:border-kcs-blue-800 dark:bg-kcs-blue-900", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-kcs-blue-600 dark:text-kcs-blue-300", children: "Consultation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: "Fiche parent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Contact familial, enfants rattaches et classes synchronisees." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setSelectedParent(null), className: "inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-kcs-blue-700 hover:bg-kcs-blue-50 dark:border-kcs-blue-700 dark:text-kcs-blue-100 dark:hover:bg-kcs-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 }),
            "Fermer"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => openEditParent(selectedParent), className: "rounded-xl border border-amber-200 px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-50 dark:border-amber-700 dark:text-amber-200 dark:hover:bg-amber-900/20", children: "Modifier" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => deleteParentRecord(selectedParent), className: "rounded-xl border border-red-100 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 dark:border-red-900/40 dark:hover:bg-red-900/20", children: "Supprimer" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 xl:grid-cols-[0.85fr_1.15fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "rounded-2xl border border-kcs-blue-100 bg-kcs-blue-50 p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-950/55", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-kcs-blue-600 dark:text-kcs-blue-300", children: "Responsable" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-2 font-display text-xl font-bold text-kcs-blue-900 dark:text-white", children: selectedParent.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-3", children: [
              ["ID parent", selectedParent.displayId || selectedParent.id],
              ["Email", selectedParent.email],
              ["Telephone", selectedParent.phone],
              ["Enfants", String(selectedParent.studentCount)],
              ["Classes", selectedParent.classes.join(", ") || "Non assignee"],
              ["Statut", selectedParent.status]
            ].map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white p-4 dark:bg-kcs-blue-900/70", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-gray-400", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 break-words text-sm font-semibold text-kcs-blue-900 dark:text-white", children: value })
            ] }, label)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: selectedParent.students.map((student) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-950/45", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: student.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: [
                  student.studentNumber ?? "ID non renseigne",
                  " - ",
                  formatClassName(student.grade, student.section) || "Non assignee"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-fit rounded-full px-2.5 py-1 text-xs font-bold ${pillTone(getStudentRisk(student))}`, children: getStudentRisk(student) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid gap-2 sm:grid-cols-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white p-3 dark:bg-kcs-blue-900/70", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: "Presence" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `font-bold ${scoreTone(student.attendance, "attendance")}`, children: [
                  student.attendance,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white p-3 dark:bg-kcs-blue-900/70", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: "GPA" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-bold ${scoreTone(student.gpa, "gpa")}`, children: student.gpa })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white p-3 dark:bg-kcs-blue-900/70", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: "Discipline" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-kcs-blue-900 dark:text-white", children: student.discipline })
              ] })
            ] })
          ] }, student.id)) })
        ] })
      ] }) }),
      editingParent && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-kcs-blue-950/75 p-4 backdrop-blur-sm", role: "dialog", "aria-modal": "true", "aria-label": "Modifier parent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "w-full max-w-xl rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl dark:border-kcs-blue-800 dark:bg-kcs-blue-900", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-kcs-blue-600 dark:text-kcs-blue-300", children: "Gestion parent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: "Modifier le parent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Mettre a jour le nom et les contacts du responsable familial." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setEditingParent(null), className: "inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-kcs-blue-700 hover:bg-kcs-blue-50 dark:border-kcs-blue-700 dark:text-kcs-blue-100 dark:hover:bg-kcs-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 }),
            "Fermer"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-950/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wide text-kcs-blue-700 dark:text-kcs-blue-200", children: "Identité du parent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid gap-3 md:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1 text-xs font-semibold text-gray-500 dark:text-gray-300", children: [
                "Prénom",
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: parentEditForm.firstName, onChange: (event) => setParentEditForm((current) => ({ ...current, firstName: event.target.value })), className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Prénom du parent" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1 text-xs font-semibold text-gray-500 dark:text-gray-300", children: [
                "Nom / postnom",
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: parentEditForm.lastName, onChange: (event) => setParentEditForm((current) => ({ ...current, lastName: event.target.value })), className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Nom ou postnom du parent" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-950/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wide text-kcs-blue-700 dark:text-kcs-blue-200", children: "Coordonnées" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid gap-3 md:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1 text-xs font-semibold text-gray-500 dark:text-gray-300", children: [
                "Email",
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: parentEditForm.email, onChange: (event) => setParentEditForm((current) => ({ ...current, email: event.target.value })), className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Email du parent" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1 text-xs font-semibold text-gray-500 dark:text-gray-300", children: [
                "Téléphone",
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: parentEditForm.phone, onChange: (event) => setParentEditForm((current) => ({ ...current, phone: event.target.value })), className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Téléphone du parent" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap justify-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setEditingParent(null), className: "rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50 dark:border-kcs-blue-700 dark:text-gray-300 dark:hover:bg-kcs-blue-800", children: "Annuler" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => void saveEditedParent(), disabled: savingParentEdit, className: "rounded-xl bg-kcs-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-kcs-blue-800 disabled:cursor-not-allowed disabled:opacity-60", children: savingParentEdit ? "Enregistrement..." : "Enregistrer" })
        ] })
      ] }) })
    ] });
  }
  if (segment === "students") {
    const activeStudents = filteredRoster.filter((student) => student.status.toLowerCase() === "active").length;
    const classesCovered = Object.keys(rosterByClass).length;
    const familiesCovered = Object.keys(rosterByFamily).length;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-kcs-blue-600 dark:text-kcs-blue-300", children: "SAVANEX shared registry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: "Élèves" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 max-w-3xl text-sm text-gray-500 dark:text-gray-400", children: "Liste officielle lisible par classe et par famille, alimentée par SAVANEX via Orbit." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-3 py-1.5 text-xs font-bold ${apiSynced ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"}`, children: apiSynced ? "Synchronisé Orbit" : "Mode local" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: `${adminButton} inline-flex items-center gap-2`, onClick: openCreateStudentForm, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 16 }),
            " Ajouter un élève"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-4", children: [
        { label: "Élèves visibles", value: filteredRoster.length, detail: `${activeStudents} actifs`, icon: GraduationCap },
        { label: "Classes couvertes", value: classesCovered, detail: "selon les filtres", icon: BookOpen },
        { label: "Familles liées", value: familiesCovered, detail: "parents responsables", icon: Users },
        { label: "À suivre", value: filteredRoster.filter((student) => getStudentRisk(student) !== "On track").length, detail: "présence, discipline ou moyenne", icon: AlertTriangle }
      ].map(({ label, value, detail, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, className: "mb-3 text-kcs-blue-600 dark:text-kcs-blue-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs font-semibold uppercase tracking-wide text-gray-400", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: detail })
      ] }, label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 lg:grid-cols-[minmax(0,1.2fr)_180px_180px_220px] lg:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 dark:border-kcs-blue-700 dark:bg-kcs-blue-950", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 16, className: "text-gray-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: studentQuery, onChange: (event) => setStudentQuery(event.target.value), className: "w-full bg-transparent text-sm outline-none dark:text-white", placeholder: "Rechercher élève, ID, parent ou classe..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: gradeFilter, onChange: (event) => {
            setGradeFilter(event.target.value);
            setClassSuffixFilter("All");
          }, className: "rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "All" }),
            SCHOOL_LEVELS.map((grade) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: grade }, grade))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: classSuffixFilter, onChange: (event) => {
            setClassSuffixFilter(event.target.value);
          }, className: "rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "Tous les suffixes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Sans suffixe" }),
            CLASS_SECTIONS.filter(Boolean).map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: section, children: [
              "Suffixe ",
              section
            ] }, section))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: familyFilter, onChange: (event) => setFamilyFilter(event.target.value), className: "rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "All" }),
            familyDirectory.map((familyName) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: familyName }, familyName))
          ] })
        ] }),
        showCreateStudent && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-5 rounded-2xl border border-kcs-blue-100 bg-kcs-blue-50 p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/30", onSubmit: (event) => {
          event.preventDefault();
          registerOfficialStudent();
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Nouvelle famille" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: "Même logique que SAVANEX : un parent, un ou plusieurs élèves, et les accès temporaires générés ensemble." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "w-fit rounded-lg px-3 py-1.5 text-xs font-bold text-kcs-blue-700 hover:bg-white dark:text-kcs-blue-200 dark:hover:bg-kcs-blue-800", onClick: () => setShowCreateStudent(false), children: "Close" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: newFamily.parent, onChange: (event) => setNewFamily((item) => ({ ...item, parent: event.target.value })), className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Parent / guardian full name", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: newFamily.parentEmail, onChange: (event) => setNewFamily((item) => ({ ...item, parentEmail: event.target.value })), className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Parent email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: newFamily.parentPhone, onChange: (event) => setNewFamily((item) => ({ ...item, parentPhone: event.target.value })), className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Parent phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: newFamily.advisor, onChange: (event) => setNewFamily((item) => ({ ...item, advisor: event.target.value })), className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Advisor, optional" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-kcs-blue-900 dark:text-white", children: "Élèves liés" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "rounded-lg border border-kcs-blue-200 px-3 py-2 text-xs font-bold text-kcs-blue-700 hover:bg-white dark:border-kcs-blue-700 dark:text-kcs-blue-200 dark:hover:bg-kcs-blue-800", onClick: () => setNewFamily((item) => {
                var _a2, _b;
                return { ...item, students: [...item.students, createAdminStudentDraft((_a2 = item.students[0]) == null ? void 0 : _a2.grade, (_b = item.students[0]) == null ? void 0 : _b.section)] };
              }), children: "Ajouter un enfant" })
            ] }),
            newFamily.students.map((student, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-white/70 bg-white/70 p-3 dark:border-kcs-blue-800 dark:bg-kcs-blue-950/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold uppercase tracking-wide text-kcs-blue-700 dark:text-kcs-blue-200", children: [
                  "Élève ",
                  index + 1
                ] }),
                newFamily.students.length > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-xs font-bold text-red-600 dark:text-red-300", onClick: () => setNewFamily((item) => ({ ...item, students: item.students.filter((_student, studentIndex) => studentIndex !== index) })), children: "Retirer" }) : null
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: student.name, onChange: (event) => setNewFamily((item) => ({ ...item, students: item.students.map((draft, studentIndex) => studentIndex === index ? { ...draft, name: event.target.value } : draft) })), className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Student full name", required: true }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: student.studentNumber, onChange: (event) => setNewFamily((item) => ({ ...item, students: item.students.map((draft, studentIndex) => studentIndex === index ? { ...draft, studentNumber: event.target.value } : draft) })), className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Student number, optional" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: student.email, onChange: (event) => setNewFamily((item) => ({ ...item, students: item.students.map((draft, studentIndex) => studentIndex === index ? { ...draft, email: event.target.value } : draft) })), className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Student email, optional" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: student.grade, onChange: (event) => setNewFamily((item) => ({ ...item, students: item.students.map((draft, studentIndex) => studentIndex === index ? { ...draft, grade: event.target.value } : draft) })), className: "rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", children: SCHOOL_LEVELS.map((grade) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: grade }, grade)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: student.section, onChange: (event) => setNewFamily((item) => ({ ...item, students: item.students.map((draft, studentIndex) => studentIndex === index ? { ...draft, section: event.target.value } : draft) })), className: "rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", children: CLASS_SECTIONS.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: section, children: sectionLabel(section) }, section || "none")) })
              ] })
            ] }, `new-family-student-${index}`))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3 sm:flex sm:flex-wrap sm:items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: `${adminButton} w-full sm:w-auto`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 16, className: "inline" }),
              " Enregistrer la famille"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-kcs-blue-700 dark:text-kcs-blue-200", children: [
              "Élèves prêts: ",
              newFamily.students.filter((student) => student.name.trim()).length
            ] })
          ] }),
          studentNotice && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 rounded-xl bg-white p-3 text-sm font-semibold text-kcs-blue-800 dark:bg-kcs-blue-950 dark:text-kcs-blue-100", children: studentNotice })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-gray-100 px-5 py-4 dark:border-kcs-blue-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Liste officielle des élèves" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Même logique que SAVANEX : élève, ID, classe, parent responsable, statut et action." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-x-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-[980px] w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500 dark:bg-kcs-blue-950 dark:text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 font-semibold", children: "Élève" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 font-semibold", children: "ID élève" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 font-semibold", children: "Classe" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 font-semibold", children: "Parent responsable" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 font-semibold", children: "Contact" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 font-semibold", children: "Statut" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-right font-semibold", children: "Action" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-100 dark:divide-kcs-blue-800/70", children: filteredRoster.map((student) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: `transition-colors ${selectedStudent.id === student.id ? "bg-kcs-blue-50 dark:bg-kcs-blue-800/40" : "hover:bg-gray-50 dark:hover:bg-kcs-blue-800/20"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "text-left", onClick: () => {
                setSelectedStudent(student);
                setViewingStudent(student);
              }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: student.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: student.status })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 font-mono text-xs text-gray-600 dark:text-gray-300", children: student.studentNumber ?? "Non renseigné" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-gray-700 dark:text-gray-200", children: formatClassName(student.grade, student.section) || "Non assignée" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-gray-700 dark:text-gray-200", children: student.parent || "Aucun parent lié" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-4 text-xs text-gray-500 dark:text-gray-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: student.parentEmail || "Email non renseigné" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: student.parentPhone || "Téléphone non renseigné" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-xs font-bold ${pillTone(getStudentRisk(student))}`, children: getStudentRisk(student) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "rounded-lg border border-kcs-blue-200 px-3 py-2 text-xs font-bold text-kcs-blue-700 hover:bg-kcs-blue-50 dark:border-kcs-blue-700 dark:text-kcs-blue-200 dark:hover:bg-kcs-blue-800", onClick: () => {
                  setSelectedStudent(student);
                  setViewingStudent(student);
                }, children: "Voir" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: `rounded-lg px-3 py-2 text-xs font-bold ${student.isEditable ? "border border-amber-200 text-amber-700 hover:bg-amber-50 dark:border-amber-700 dark:text-amber-200 dark:hover:bg-amber-900/20" : "cursor-not-allowed border border-gray-200 text-gray-400 dark:border-kcs-blue-800 dark:text-gray-500"}`, onClick: () => openEditStudent(student), children: "Modifier" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "rounded-lg border border-red-100 px-3 py-2 text-red-600 hover:bg-red-50 dark:border-red-900/40 dark:hover:bg-red-900/20", onClick: () => deleteOfficialStudent(student), "aria-label": `Delete ${student.name}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 15 }) })
              ] }) })
            ] }, student.id)) })
          ] }),
          filteredRoster.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 text-sm font-semibold text-yellow-800 dark:text-yellow-300", children: "Aucun élève ne correspond aux filtres en cours." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 xl:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-kcs-blue-600 dark:text-kcs-blue-300", children: "Classement" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-bold text-kcs-blue-900 dark:text-white", children: "Groupement par classe" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-kcs-blue-50 px-3 py-1 text-xs font-bold text-kcs-blue-700 dark:bg-kcs-blue-800 dark:text-kcs-blue-100", children: [
              classesCovered,
              " classes"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-3", children: Object.entries(rosterByClass).map(([className, classStudents]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: className || "Non assignée" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                classStudents.length,
                " élève(s)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-gray-500 dark:text-gray-400", children: [
              "Familles : ",
              Array.from(new Set(classStudents.map((student) => student.parent))).join(", ")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-gray-700 dark:text-gray-200", children: classStudents.map((student) => student.name).join(", ") })
          ] }, className)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-kcs-blue-600 dark:text-kcs-blue-300", children: "Familles" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-bold text-kcs-blue-900 dark:text-white", children: "Groupement par famille" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-200", children: [
              familiesCovered,
              " groupes"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-3", children: Object.entries(rosterByFamily).map(([familyName, familyStudents]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: familyName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                familyStudents.length,
                " élève(s)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-gray-500 dark:text-gray-400", children: [
              "Classes : ",
              Array.from(new Set(familyStudents.map((student) => formatClassName(student.grade, student.section)))).join(", ")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-gray-700 dark:text-gray-200", children: familyStudents.map((student) => student.name).join(", ") })
          ] }, familyName)) })
        ] })
      ] }),
      viewingStudent && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-kcs-blue-950/75 p-4 backdrop-blur-sm", role: "dialog", "aria-modal": "true", "aria-label": "Fiche élève", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl dark:border-kcs-blue-800 dark:bg-kcs-blue-900", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-kcs-blue-600 dark:text-kcs-blue-300", children: "Consultation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: "Fiche individuelle élève" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Identité, classe, parent responsable et suivi administratif." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setViewingStudent(null), className: "inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-kcs-blue-700 hover:bg-kcs-blue-50 dark:border-kcs-blue-700 dark:text-kcs-blue-100 dark:hover:bg-kcs-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 }),
            "Fermer"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2", children: [
            ["ID élève", viewingStudent.studentNumber ?? "Non renseigné"],
            ["Nom complet", viewingStudent.name],
            ["Classe", formatClassName(viewingStudent.grade, viewingStudent.section) || "Non assignée"],
            ["Statut", viewingStudent.status],
            ["Parent responsable", viewingStudent.parent || "Aucun parent lié"],
            ["Email parent", viewingStudent.parentEmail || "Non renseigné"],
            ["Téléphone parent", viewingStudent.parentPhone || "Non renseigné"],
            ["Conseiller", viewingStudent.advisor ?? (selectedInsight == null ? void 0 : selectedInsight.advisor) ?? "Non assigné"],
            ["Présence", `${viewingStudent.attendance}%`],
            ["GPA", String(viewingStudent.gpa)],
            ["Discipline", viewingStudent.discipline],
            ["Suivi", getStudentRisk(viewingStudent)]
          ].map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-950/45", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-gray-400", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 break-words text-sm font-semibold text-kcs-blue-900 dark:text-white", children: value })
          ] }, label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "rounded-2xl border border-kcs-blue-100 bg-kcs-blue-50 p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-950/55", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-kcs-blue-600 dark:text-kcs-blue-300", children: "Résumé" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-2 font-display text-xl font-bold text-kcs-blue-900 dark:text-white", children: viewingStudent.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: viewingStudent.studentNumber ?? "ID non renseigné" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-xs font-bold ${pillTone(getStudentRisk(viewingStudent))}`, children: getStudentRisk(viewingStudent) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white p-4 dark:bg-kcs-blue-900/70", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-gray-400", children: "Famille" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-semibold text-kcs-blue-900 dark:text-white", children: viewingStudent.parent || "Aucun parent lié" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: viewingStudent.parentEmail || "Email non renseigné" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: viewingStudent.parentPhone || "Téléphone non renseigné" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white p-4 dark:bg-kcs-blue-900/70", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-gray-400", children: "Classe" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-semibold text-kcs-blue-900 dark:text-white", children: formatClassName(viewingStudent.grade, viewingStudent.section) || "Non assignée" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: getDivisionForGrade(viewingStudent.grade).title })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white p-4 text-center dark:bg-kcs-blue-900/70", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `font-display text-xl font-bold ${scoreTone(viewingStudent.attendance, "attendance")}`, children: [
                    viewingStudent.attendance,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-400", children: "Présence" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white p-4 text-center dark:bg-kcs-blue-900/70", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-display text-xl font-bold ${scoreTone(viewingStudent.gpa, "gpa")}`, children: viewingStudent.gpa }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-400", children: "GPA" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "rounded-xl bg-kcs-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-kcs-blue-800", onClick: () => setViewingStudent(null), children: "Retour à la liste" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: `rounded-xl px-4 py-2.5 text-sm font-semibold ${viewingStudent.isEditable ? "border border-amber-200 text-amber-700 hover:bg-amber-50 dark:border-amber-700 dark:text-amber-200 dark:hover:bg-amber-900/20" : "cursor-not-allowed border border-gray-200 text-gray-400 dark:border-kcs-blue-800 dark:text-gray-500"}`, onClick: () => openEditStudent(viewingStudent), children: "Modifier" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 dark:border-red-900/40 dark:hover:bg-red-900/20", onClick: () => {
                const target = viewingStudent;
                setViewingStudent(null);
                deleteOfficialStudent(target);
              }, children: "Supprimer" })
            ] })
          ] })
        ] })
      ] }) }),
      editingStudent && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-kcs-blue-950/75 p-4 backdrop-blur-sm", role: "dialog", "aria-modal": "true", "aria-label": "Modifier élève", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "w-full max-w-2xl rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl dark:border-kcs-blue-800 dark:bg-kcs-blue-900", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-300", children: "Modification" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: "Modifier l’élève" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Le système bloque les doublons de numéro et d’email avant d’enregistrer." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setEditingStudent(null), className: "rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-kcs-blue-700 hover:bg-kcs-blue-50 dark:border-kcs-blue-700 dark:text-kcs-blue-100 dark:hover:bg-kcs-blue-800", children: "Fermer" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-950/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wide text-kcs-blue-700 dark:text-kcs-blue-200", children: "Identité de l’élève" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid gap-3 md:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1 text-xs font-semibold text-gray-500 dark:text-gray-300", children: [
                "Prénom",
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: studentEditForm.firstName, onChange: (event) => setStudentEditForm((current) => ({ ...current, firstName: event.target.value })), className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Prénom de l’élève" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1 text-xs font-semibold text-gray-500 dark:text-gray-300", children: [
                "Nom / postnom",
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: studentEditForm.lastName, onChange: (event) => setStudentEditForm((current) => ({ ...current, lastName: event.target.value })), className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Nom ou postnom de l’élève" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1 text-xs font-semibold text-gray-500 dark:text-gray-300 md:col-span-2", children: [
                "Email élève",
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: studentEditForm.email, onChange: (event) => setStudentEditForm((current) => ({ ...current, email: event.target.value })), className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Email élève, optionnel" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-950/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wide text-kcs-blue-700 dark:text-kcs-blue-200", children: "Classe et dossier" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid gap-3 md:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1 text-xs font-semibold text-gray-500 dark:text-gray-300", children: [
                "Numéro d’élève",
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: studentEditForm.studentNumber, onChange: (event) => setStudentEditForm((current) => ({ ...current, studentNumber: event.target.value })), className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Numéro d’élève" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1 text-xs font-semibold text-gray-500 dark:text-gray-300", children: [
                "Statut",
                /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: studentEditForm.status, onChange: (event) => setStudentEditForm((current) => ({ ...current, status: event.target.value })), className: "rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", children: ["Active", "Inactive", "Suspended"].map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: status }, status)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1 text-xs font-semibold text-gray-500 dark:text-gray-300", children: [
                "Niveau",
                /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: studentEditForm.grade, onChange: (event) => setStudentEditForm((current) => ({ ...current, grade: event.target.value })), className: "rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", children: SCHOOL_LEVELS.map((grade) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: grade }, grade)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1 text-xs font-semibold text-gray-500 dark:text-gray-300", children: [
                "Suffixe / section",
                /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: studentEditForm.section, onChange: (event) => setStudentEditForm((current) => ({ ...current, section: event.target.value })), className: "rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", children: CLASS_SECTIONS.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: section, children: sectionLabel(section) }, section || "none")) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-950/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wide text-kcs-blue-700 dark:text-kcs-blue-200", children: "Famille liée" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid gap-3 md:grid-cols-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white p-3 text-sm dark:bg-kcs-blue-900/70", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: "Parent responsable" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-semibold text-kcs-blue-900 dark:text-white", children: editingStudent.parent || "Aucun parent lié" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white p-3 text-sm dark:bg-kcs-blue-900/70", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: "Téléphone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-semibold text-kcs-blue-900 dark:text-white", children: editingStudent.parentPhone || "Non renseigné" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white p-3 text-sm dark:bg-kcs-blue-900/70", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 break-words font-semibold text-kcs-blue-900 dark:text-white", children: editingStudent.parentEmail || "Non renseigné" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "rounded-xl bg-kcs-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-kcs-blue-800 disabled:opacity-60", onClick: () => void saveEditedStudent(), disabled: savingStudentEdit, children: savingStudentEdit ? "Enregistrement..." : "Enregistrer les modifications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-kcs-blue-700 hover:bg-kcs-blue-50 dark:border-kcs-blue-700 dark:text-kcs-blue-100 dark:hover:bg-kcs-blue-800", onClick: () => setEditingStudent(null), children: "Annuler" })
        ] })
      ] }) })
    ] });
  }
  if (segment === "transcripts") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: SCHOOL_LOGO_SRC, alt: `${SCHOOL_NAME} logo`, className: "h-12 w-12 rounded-xl object-contain ring-1 ring-kcs-blue-100 dark:ring-kcs-blue-800" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: [
              SCHOOL_NAME,
              " Transcript Center"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Official high-school transcript generated from Grade 9-12 bulletin averages, credits, GPA, rank, and graduation status." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2 sm:flex sm:flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `${adminButton} w-full sm:w-auto`, onClick: () => printOfficialTranscript(officialTranscript), children: "Print official transcript" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `${adminOutlineButton} w-full sm:w-auto`, onClick: () => {
            var _a2;
            return setSelectedTranscriptId(((_a2 = grade9to12[0]) == null ? void 0 : _a2.id) ?? "");
          }, children: "Reset selection" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[0.9fr_1.1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Eligible Students" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Only Grade 9 to Grade 12 students appear here because official transcripts begin in high school." })
          ] }),
          grade9to12.map((student) => {
            const transcript = transcripts.find((item) => item.student === student.name);
            const generated = buildOfficialTranscript(student);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: `w-full rounded-2xl border bg-white p-5 text-left transition-colors hover:border-kcs-blue-200 hover:bg-kcs-blue-50 dark:bg-kcs-blue-900/50 dark:hover:bg-kcs-blue-900 ${transcriptStudent.id === student.id ? "border-kcs-blue-400 ring-2 ring-kcs-blue-100 dark:border-kcs-blue-400 dark:ring-kcs-blue-900" : "border-gray-100 dark:border-kcs-blue-800"}`, onClick: () => setSelectedTranscriptId(student.id), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: student.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
                    formatClassName(student.grade, student.section),
                    " - ",
                    student.studentNumber ?? "No student number"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-xs font-semibold ${pillTone((transcript == null ? void 0 : transcript.status) ?? generated.graduationStatus)}`, children: (transcript == null ? void 0 : transcript.status) ?? generated.graduationStatus })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-3 gap-2 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-kcs-blue-900 dark:text-white", children: generated.cumulativeGpa }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: "Cum. GPA" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-kcs-blue-900 dark:text-white", children: generated.totalCredits }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: "Credits" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-kcs-blue-900 dark:text-white", children: [
                    generated.cumulativeAverage,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: "Average" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-4 inline-flex w-full justify-center rounded-xl bg-kcs-gold-500 px-4 py-2.5 text-sm font-bold text-kcs-blue-950 hover:bg-kcs-gold-400", children: "Generate transcript" })
            ] }, student.id);
          })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: SCHOOL_LOGO_SRC, alt: "", "aria-hidden": "true", className: "pointer-events-none absolute right-6 top-28 hidden h-48 w-48 object-contain opacity-[0.04] sm:block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-gray-100 pb-5 dark:border-kcs-blue-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 sm:gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-kcs-blue-100 bg-white p-2 shadow-sm dark:border-kcs-blue-800 dark:bg-kcs-blue-950 sm:h-20 sm:w-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: SCHOOL_LOGO_SRC, alt: `${SCHOOL_NAME} logo`, className: "h-full w-full object-contain" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wide text-kcs-gold-600 dark:text-kcs-gold-300", children: "Official Academic Transcript" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-xl font-bold text-kcs-blue-900 dark:text-white sm:text-2xl", children: SCHOOL_NAME }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Grade 9-12 cumulative high-school record" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-kcs-blue-50 p-4 text-sm dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-kcs-blue-900 dark:text-white", children: officialTranscript.student.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-gray-600 dark:text-gray-300", children: [
                "ID: ",
                officialTranscript.student.studentNumber ?? officialTranscript.student.id
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-300", children: [
                "Generated: ",
                officialTranscript.generatedAt
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-3 md:grid-cols-4", children: [
            ["Cumulative GPA", officialTranscript.cumulativeGpa],
            ["Cumulative Average", `${officialTranscript.cumulativeAverage}%`],
            ["Credits Earned", `${officialTranscript.totalCredits}/24`],
            ["Class Standing", officialTranscript.classRank]
          ].map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-gray-400", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-bold text-kcs-blue-900 dark:text-white", children: value })
          ] }, label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-4 md:hidden", children: officialTranscript.rows.map((year) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gray-100 bg-gray-50 p-3 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: year.grade }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                  year.year,
                  " - ",
                  year.status
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-white px-2.5 py-1 text-xs font-bold text-kcs-blue-700 dark:bg-kcs-blue-900 dark:text-kcs-blue-200", children: [
                "GPA ",
                year.annualGpa
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: year.courses.map((course) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-white p-3 text-sm dark:bg-kcs-blue-900/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: course.course }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-kcs-blue-700 dark:text-kcs-blue-300", children: course.letter })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: [
                "Credit ",
                course.credit,
                " - Average ",
                course.average,
                "% - GPA ",
                course.gpa
              ] })
            ] }, `${year.grade}-${course.course}`)) })
          ] }, year.grade)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 hidden overflow-x-auto md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-[760px] w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-left text-xs uppercase tracking-wide text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-gray-100 dark:border-kcs-blue-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 font-semibold", children: "Year / Grade" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 font-semibold", children: "Course" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 text-right font-semibold", children: "Credit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 text-right font-semibold", children: "Average" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 text-right font-semibold", children: "Letter" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 text-right font-semibold", children: "GPA" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-50 dark:divide-kcs-blue-800/60", children: officialTranscript.rows.flatMap((year) => year.courses.map((course, courseIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 font-semibold text-kcs-blue-900 dark:text-white", children: courseIndex === 0 ? `${year.year} - ${year.grade}` : "" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-gray-600 dark:text-gray-300", children: course.course }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-right text-gray-600 dark:text-gray-300", children: course.credit }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 text-right font-semibold text-kcs-blue-900 dark:text-white", children: [
                course.average,
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-right font-semibold text-kcs-blue-900 dark:text-white", children: course.letter }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-right text-gray-600 dark:text-gray-300", children: course.gpa })
            ] }, `${year.grade}-${course.course}`))) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-3 md:grid-cols-2", children: officialTranscript.rows.map((year) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: year.grade }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-xs font-bold ${pillTone(year.status)}`, children: year.status })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-gray-600 dark:text-gray-300", children: [
              "Bulletin average: ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                year.average,
                "%"
              ] }),
              " - Annual GPA: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: year.annualGpa }),
              " - Credits: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: year.credits })
            ] })
          ] }, year.grade)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-xl border border-green-100 bg-green-50 p-4 dark:border-green-900/40 dark:bg-green-900/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-green-800 dark:text-green-300", children: officialTranscript.graduationStatus }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-green-700 dark:text-green-400", children: "Standard calculation: annual bulletin average to letter grade to 4.0 GPA conversion, weighted by high-school credits from Grade 9 through Grade 12." })
          ] })
        ] })
      ] })
    ] });
  }
  if (segment === "communications") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[0.9fr_1.1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Communication Flows" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: communicationFlows.map((flow) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: flow.trigger }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-300", children: flow.update }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs font-semibold text-kcs-gold-600 dark:text-kcs-gold-300", children: flow.notification })
        ] }, flow.trigger)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Send School Communication" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "All parents, students, teachers, and staff" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Parents only" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Grade 9-12 families" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Staff only" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Subject" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "min-h-36 rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Email, SMS, and portal message..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: adminButton, onClick: () => setSentNotice("Communication queued for email, SMS, and in-site inbox."), children: "Send communication" }),
          sentNotice && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-300", children: sentNotice })
        ] })
      ] })
    ] });
  }
  if (segment === "staff-attendance") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1fr_0.8fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Staff Attendance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: adminButton, children: "Export daily sheet" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2", children: staffSeed.map((staff) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "rounded-xl bg-gray-50 p-4 text-left transition-colors hover:bg-kcs-blue-50 dark:bg-kcs-blue-800/30 dark:hover:bg-kcs-blue-800", onClick: () => setSelectedStaff(staff), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: staff.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-xs font-semibold ${pillTone(staff.status)}`, children: staff.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: [
            staff.role,
            " - ",
            staff.department,
            " - ",
            staff.time
          ] })
        ] }, staff.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Selected Staff Member" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: selectedStaff.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
            selectedStaff.role,
            " - ",
            selectedStaff.department
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm text-gray-600 dark:text-gray-300", children: [
            "Arrival: ",
            selectedStaff.time,
            ". Status: ",
            selectedStaff.status,
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-2 sm:grid-cols-3", children: ["Present", "Late", "Absent"].map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: adminOutlineButton, children: status }, status)) })
      ] })
    ] });
  }
  if (segment === "discipline") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1fr_0.9fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Discipline Reports" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Aligned with teacher reports, parent contact, actions, and follow-up dates." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: adminButton, children: "Create report" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: disciplineReports.map((report) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: report.student }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${pillTone(report.status)}`, children: report.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm font-semibold text-kcs-blue-700 dark:text-kcs-blue-300", children: [
            report.category,
            " - ",
            report.date
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-600 dark:text-gray-300", children: report.incident }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-gray-500 dark:text-gray-400", children: [
            "Parent contact: ",
            report.parentContact
          ] })
        ] }, report.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Detailed Report Builder" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", children: officialRoster.map((student) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: student.name }, student.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Incident category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "min-h-28 rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Incident details, context, action taken, follow-up..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: adminButton, children: "Save discipline report" })
        ] })
      ] })
    ] });
  }
  if (segment === "teachers") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1fr_0.9fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Teachers & Load" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2", children: staffLoad.map((teacher) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: teacher.teacher }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-kcs-blue-100 px-2.5 py-1 text-xs font-semibold text-kcs-blue-700 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-300", children: teacher.load })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-gray-500 dark:text-gray-400", children: [
            "AI support: ",
            teacher.aiSupport
          ] })
        ] }, teacher.teacher)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Staff Operations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: staffOperations.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: item.function }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-kcs-blue-700 dark:text-kcs-blue-300", children: item.value })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: [
            item.metric,
            " - ",
            item.status
          ] })
        ] }, item.function)) })
      ] })
    ] });
  }
  if (segment === "courses") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4", children: subjects.map((subject) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-bold text-kcs-blue-900 dark:text-white", children: subject.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: [
        subject.className,
        " - ",
        subject.room
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm font-semibold text-kcs-blue-700 dark:text-kcs-blue-300", children: subject.teacher }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-4 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-kcs-blue-700 hover:bg-kcs-blue-50 dark:border-kcs-blue-700 dark:text-kcs-blue-200 dark:hover:bg-kcs-blue-800", children: "Edit course" })
    ] }, subject.id)) });
  }
  if (segment === "admissions") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Online Admissions Approval Desk" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Every online submission lands here for Super Admin approval, rejection, or conversion into the official registry." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700 dark:bg-red-900/30 dark:text-red-300", children: [
          admissionRequests.filter((item) => item.status === "SUBMITTED" || item.status === "UNDER_REVIEW").length,
          " pending decisions"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: admissionRequests.map((item) => {
        var _a2;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: item.studentName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
                item.gradeApplying,
                " - ",
                item.applicationNumber
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${pillTone(item.status)}`, children: item.status.replace("_", " ") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2 rounded-xl bg-gray-50 p-4 text-sm dark:bg-kcs-blue-800/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: item.parentName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-500 dark:text-gray-400", children: [
              item.parentEmail,
              " - ",
              item.parentPhone
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-500 dark:text-gray-400", children: [
              "Previous school: ",
              item.previousSchool
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-500 dark:text-gray-400", children: [
              "Docs: ",
              ((_a2 = item.documents) == null ? void 0 : _a2.length) ? item.documents.join(", ") : "Pending document review"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-2 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: adminOutlineButton, onClick: () => updateAdmissionStatus(item, "UNDER_REVIEW"), children: "Review" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: adminOutlineButton, onClick: () => updateAdmissionStatus(item, "INTERVIEW_SCHEDULED"), children: "Interview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-700", onClick: () => updateAdmissionStatus(item, "ACCEPTED"), children: "Approve + create student" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700", onClick: () => updateAdmissionStatus(item, "REJECTED"), children: "Refuse" })
          ] })
        ] }, item.applicationNumber);
      }) })
    ] });
  }
  if (segment === "finance") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-3", children: feeAccounts.map((fee) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: fee.invoice }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-xs font-semibold ${pillTone(fee.status)}`, children: fee.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 font-display text-3xl font-bold text-kcs-blue-900 dark:text-white", children: [
          "$",
          fee.balance
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
          fee.family,
          " - last payment $",
          fee.lastPayment
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-4 w-full rounded-xl bg-kcs-gold-500 px-4 py-2.5 text-sm font-bold text-kcs-blue-950 hover:bg-kcs-gold-400", children: "Receipt / statement" })
      ] }, fee.invoice)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-3", children: financeReadiness.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-green-50 p-4 dark:bg-green-900/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-green-800 dark:text-green-300", children: item.feature }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-green-700 dark:text-green-400", children: item.note })
      ] }, item.feature)) })
    ] });
  }
  if (segment === "reports") {
    const reportRows = buildReportRows(reportCategory, reportCadence, officialRoster, admissionRequests);
    const reportWindow = buildReportWindow(reportCadence);
    const reportStats = [
      { label: "Periode", value: reportCadenceLabels[reportCadence], detail: reportWindow.label, icon: CalendarDays },
      { label: "Indicateurs", value: String(reportRows.length), detail: reportCategoryLabels[reportCategory], icon: BarChart3 },
      { label: "Élèves à risque", value: String(officialRoster.filter((student) => getStudentRisk(student) === "Needs action").length), detail: "académique, présence ou discipline", icon: AlertTriangle },
      { label: "Exports", value: "PDF XLS CSV", detail: "telechargement ou impression", icon: Download }
    ];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-kcs-blue-700 dark:text-kcs-blue-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 20 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wide", children: "Super Admin Reports" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: "Rapports detailles exportables" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 max-w-3xl text-sm text-gray-500 dark:text-gray-400", children: "Générer des rapports journaliers, hebdomadaires, mensuels ou annuels avec les données d'inscriptions, d'académique, d'opérations, de finances, de discipline et d'alertes IA." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2 xl:min-w-[520px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400", children: [
            "Frequence",
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: reportCadence, onChange: (event) => setReportCadence(event.target.value), className: "mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold normal-case tracking-normal text-kcs-blue-900 dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", children: Object.entries(reportCadenceLabels).map(([value, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value, children: label }, value)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400", children: [
            "Type de rapport",
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: reportCategory, onChange: (event) => setReportCategory(event.target.value), className: "mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold normal-case tracking-normal text-kcs-blue-900 dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", children: Object.entries(reportCategoryLabels).map(([value, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value, children: label }, value)) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4", children: reportStats.map((item) => {
        const Icon = item.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-kcs-blue-50 text-kcs-blue-700 dark:bg-kcs-blue-900/30 dark:text-kcs-blue-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: item.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-gray-600 dark:text-gray-300", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-400 dark:text-gray-500", children: item.detail })
        ] }, item.label);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1.25fr_0.75fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-kcs-blue-900 dark:text-white", children: [
                reportCategoryLabels[reportCategory],
                " - ",
                reportCadenceLabels[reportCadence]
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
                "Periode couverte: ",
                reportWindow.label
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-fit rounded-full bg-kcs-gold-100 px-3 py-1.5 text-xs font-bold text-kcs-blue-900 dark:bg-kcs-gold-900/30 dark:text-kcs-gold-200", children: "Pret pour audit" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-mx-1 overflow-x-auto px-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-gray-100 text-left text-sm dark:divide-kcs-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 pr-4", children: "Section" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 pr-4", children: "Indicateur" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 pr-4", children: "Valeur" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 pr-4", children: "Action recommandee" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-100 dark:divide-kcs-blue-800", children: reportRows.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-4 font-semibold text-kcs-blue-900 dark:text-white", children: row.section }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 pr-4 text-gray-600 dark:text-gray-300", children: [
                row.metric,
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-400", children: row.detail })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-4 font-display text-lg font-bold text-kcs-blue-800 dark:text-kcs-blue-200", children: row.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-4 text-gray-600 dark:text-gray-300", children: row.action })
            ] }, `${row.section}-${row.metric}`)) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Exporter le rapport" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: `Le PDF s'ouvre en impression afin de choisir "Enregistrer en PDF"; Excel et CSV sont téléchargés directement.` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: `${adminButton} flex items-center justify-center gap-2`, onClick: () => exportAdminReport(reportCategory, reportCadence, "pdf", officialRoster, admissionRequests), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 16 }),
                " PDF"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: `${adminOutlineButton} flex items-center justify-center gap-2`, onClick: () => exportAdminReport(reportCategory, reportCadence, "excel", officialRoster, admissionRequests), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { size: 16 }),
                " Excel"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: `${adminOutlineButton} flex items-center justify-center gap-2`, onClick: () => exportAdminReport(reportCategory, reportCadence, "csv", officialRoster, admissionRequests), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 16 }),
                " CSV"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Contenu inclus" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-3", children: ["Registre officiel des élèves", "Admissions et décisions", "Notes, présences et risques", "Finances, discipline et audit IA"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 16, className: "mt-0.5 text-green-600 dark:text-green-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-gray-700 dark:text-gray-200", children: item })
            ] }, item)) })
          ] })
        ] })
      ] })
    ] });
  }
  if (segment === "news" || segment === "media") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1fr_0.9fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: segment === "news" ? "News & Events Publishing" : "Media & Live Broadcasts" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: liveEventControls.map((event) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: event.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-xs font-semibold ${event.status === "Live now" ? "bg-red-600 text-white" : "bg-kcs-gold-100 text-kcs-blue-800 dark:bg-kcs-gold-900/30 dark:text-kcs-gold-300"}`, children: event.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-gray-500 dark:text-gray-400", children: [
            event.platform,
            " - ",
            event.audience
          ] })
        ] }, event.title)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Publish Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "min-h-32 rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white", placeholder: "Details, audience, media notes..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: adminButton, children: "Publish" })
        ] })
      ] })
    ] });
  }
  if (segment === "analytics") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1.2fr_0.8fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-5 font-bold text-kcs-blue-900 dark:text-white", children: "AI Analytics" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: enrollmentTrend, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "rgba(148,163,184,0.15)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", tick: { fontSize: 11, fill: "#94a3b8" }, axisLine: false, tickLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: { fontSize: 11, fill: "#94a3b8" }, axisLine: false, tickLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { background: "#0f2352", border: "none", borderRadius: "12px", color: "#fff", fontSize: "12px" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "students", stroke: "#1d4ed8", fill: "#dbeafe", strokeWidth: 2.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "applications", stroke: "#f59e0b", fill: "#fef3c7", strokeWidth: 2.5 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: aiSignals.concat(aiRecommendations.map((item) => ({ title: item.title, detail: item.action, severity: item.impact, roles: [item.owner] }))).map((signal) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: signal.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-300", children: signal.detail })
      ] }, `${signal.title}-${signal.severity}`)) })
    ] });
  }
  if (segment === "settings") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[0.9fr_1.1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Role Permissions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: Object.entries(rolePermissions).map(([role, permissions]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold capitalize text-kcs-blue-900 dark:text-white", children: role === "admin" ? "Super Admin" : role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-2", children: permissions.map((permission) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-white px-2.5 py-1 text-xs text-gray-600 dark:bg-kcs-blue-900/60 dark:text-gray-300", children: permission }, permission)) })
        ] }, role)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Audit & Sensitive Actions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [...sensitiveActions.map((item) => ({ title: item.action, detail: `${item.requester} - ${item.status}`, tone: item.risk })), ...auditLogs.map((log) => ({ title: log.action, detail: `${log.actor} - ${log.target} - ${log.time}`, tone: "Audit" }))].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-300", children: item.tone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: item.detail })
        ] }, `${item.title}-${item.detail}`)) })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalSectionPanel, {});
};
const AdminDashboard = () => {
  const { user } = useAuthStore();
  const { language } = useUIStore();
  const location = useLocation();
  const activeSegment = getAdminSegment(location.pathname);
  const [officialRoster, setOfficialRoster] = reactExports.useState(readStoredRoster);
  const [admissionRequests, setAdmissionRequests] = reactExports.useState(readStoredAdmissions);
  const pendingAdmissions = admissionRequests.filter((item) => item.status === "SUBMITTED" || item.status === "UNDER_REVIEW");
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
            " - A high-level operational view of academics, admissions, staff load, and AI-driven risk monitoring."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-fit rounded-2xl border border-white/60 bg-white/65 px-4 py-2 text-sm font-semibold text-kcs-blue-800 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-kcs-blue-900/45 dark:text-kcs-blue-100", children: "Live snapshot • 2025/26 cycle" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 p-4 sm:p-6", children: activeSegment !== "dashboard" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        AdminSectionView,
        {
          segment: activeSegment,
          officialRoster,
          setOfficialRoster,
          admissionRequests,
          setAdmissionRequests
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PortalSectionPanel, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SuggestionBox, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 xl:grid-cols-5", children: [
          { label: "Official Registry", value: String(officialRoster.length), icon: GraduationCap, tone: "bg-kcs-blue-50 text-kcs-blue-700 dark:bg-kcs-blue-900/30 dark:text-kcs-blue-300", sub: "students controlled by Super Admin" },
          { label: "Faculty Members", value: "64", icon: Users, tone: "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300", sub: "92% retention" },
          { label: "Open Applications", value: String(pendingAdmissions.length), icon: FileText, tone: "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", sub: "approval or refusal required" },
          { label: "AI Risk Alerts", value: "10", icon: Brain, tone: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300", sub: "3 high severity" },
          { label: "Live Events", value: "4", icon: Radio, tone: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300", sub: "1 currently live" }
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-kcs-blue-700 dark:text-kcs-blue-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 19 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wide", children: "Suivi unitaire intelligent" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: "Chaque eleve suivi individuellement" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 max-w-4xl text-sm text-gray-500 dark:text-gray-400", children: "Consolidation académique, préférence scientifique/non-scientifique, discipline, présence, prédiction, recommandations et alertes parent e-mail/SMS." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 text-center text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-red-50 px-3 py-2 text-red-700 dark:bg-red-900/20 dark:text-red-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-black", children: studentTrackingProfiles.filter((profile) => profile.prediction === "critical").length }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "critiques" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-yellow-50 px-3 py-2 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-black", children: studentTrackingProfiles.filter((profile) => profile.prediction === "warning").length }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "alertes" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-green-50 px-3 py-2 text-green-700 dark:bg-green-900/20 dark:text-green-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-black", children: studentTrackingProfiles.filter((profile) => profile.prediction === "strong" || profile.prediction === "stable").length }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "stables" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 xl:grid-cols-3", children: studentTrackingProfiles.slice(0, 6).map((profile) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: profile.student.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: [
                    profile.student.grade,
                    " ",
                    profile.student.section,
                    " - ",
                    ((_a = profile.parent) == null ? void 0 : _a.name) ?? "Parent pending"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `rounded-full px-2.5 py-1 text-xs font-black ${profile.prediction === "critical" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" : profile.prediction === "warning" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"}`, children: [
                  profile.riskScore,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-3 gap-2 text-center text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white p-2 dark:bg-kcs-blue-900/60", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-kcs-blue-900 dark:text-white", children: profile.scienceAverage ?? "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "Science" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white p-2 dark:bg-kcs-blue-900/60", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-kcs-blue-900 dark:text-white", children: profile.nonScienceAverage ?? "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "Non-science" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white p-2 dark:bg-kcs-blue-900/60", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-kcs-blue-900 dark:text-white", children: profile.disciplineOpen }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "Discipline" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-kcs-blue-800 dark:bg-kcs-blue-900/60 dark:text-kcs-blue-100", children: profile.preference }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs leading-relaxed text-gray-600 dark:text-gray-300", children: profile.recommendation }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-2 text-[11px] font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 rounded-full px-2.5 py-1 ${profile.alerts.email ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-200" : "bg-gray-100 text-gray-500 dark:bg-kcs-blue-900/50 dark:text-gray-400"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 12 }),
                  " Email"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 rounded-full px-2.5 py-1 ${profile.alerts.sms ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200" : "bg-gray-100 text-gray-500 dark:bg-kcs-blue-900/50 dark:text-gray-400"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 12 }),
                  " SMS"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-kcs-gold-100 px-2.5 py-1 text-kcs-blue-800 dark:bg-kcs-gold-900/30 dark:text-kcs-gold-200", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 12 }),
                  " Rapport"
                ] })
              ] })
            ] }, profile.student.id);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1.4fr_0.9fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Enrollment and Applications Trend" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-blue text-xs", children: "Rolling 8 months" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 290, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: enrollmentTrend, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "studentsFill", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: "#1d4ed8", stopOpacity: 0.25 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: "#1d4ed8", stopOpacity: 0 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "applicationsFill", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: "#f59e0b", stopOpacity: 0.25 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: "#f59e0b", stopOpacity: 0 })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "rgba(148,163,184,0.15)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", tick: { fontSize: 11, fill: "#94a3b8" }, axisLine: false, tickLine: false }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: { fontSize: 11, fill: "#94a3b8" }, axisLine: false, tickLine: false }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { background: "#0f2352", border: "none", borderRadius: "12px", color: "#fff", fontSize: "12px" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "students", stroke: "#1d4ed8", fill: "url(#studentsFill)", strokeWidth: 2.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "applications", stroke: "#f59e0b", fill: "url(#applicationsFill)", strokeWidth: 2.5 })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Department Health Score" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "AI synthesized" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 290, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: departmentPerformance, layout: "vertical", margin: { left: 10, right: 10 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "rgba(148,163,184,0.15)", horizontal: false }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { type: "number", hide: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { dataKey: "name", type: "category", tick: { fill: "#94a3b8", fontSize: 11 }, axisLine: false, tickLine: false, width: 80 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { background: "#0f2352", border: "none", borderRadius: "12px", color: "#fff", fontSize: "12px" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "score", fill: "#1d4ed8", radius: [8, 8, 8, 8], barSize: 20 })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Event Live Broadcasts" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { size: 18, className: "text-red-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: liveEventControls.map((event) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: event.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-xs font-semibold ${event.status === "Live now" ? "bg-red-600 text-white" : "bg-kcs-gold-100 text-kcs-blue-800 dark:bg-kcs-gold-900/30 dark:text-kcs-gold-300"}`, children: event.status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-gray-500 dark:text-gray-400", children: [
                event.platform,
                " • ",
                event.audience
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300", children: event.nextStep })
            ] }, event.title)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Admissions Queue" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-gold text-xs", children: "Priority review" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: admissionRequests.slice(0, 5).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: item.studentName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
                    item.gradeApplying,
                    " - ",
                    item.parentName
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-xs font-semibold ${pillTone(item.status)}`, children: item.status.replace("_", " ") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-1 text-xs text-gray-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock3, { size: 12 }),
                " Submitted ",
                new Date(item.submittedAt).toLocaleDateString()
              ] }),
              (item.status === "SUBMITTED" || item.status === "UNDER_REVIEW") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-lg bg-green-600 px-3 py-2 text-xs font-bold text-white", onClick: () => {
                  const approvedStudent = createStudentFromAdmission({ ...item });
                  setAdmissionRequests((items) => {
                    const next = items.map((application) => application.applicationNumber === item.applicationNumber ? { ...application, status: "ACCEPTED" } : application);
                    saveAdmissions(next);
                    return next;
                  });
                  setOfficialRoster((records) => {
                    if (records.some((record) => record.id === approvedStudent.id || record.name === approvedStudent.name)) return records;
                    return [approvedStudent, ...records];
                  });
                }, children: "Approve" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-lg bg-red-600 px-3 py-2 text-xs font-bold text-white", onClick: () => setAdmissionRequests((items) => {
                  const next = items.map((application) => application.applicationNumber === item.applicationNumber ? { ...application, status: "REJECTED" } : application);
                  saveAdmissions(next);
                  return next;
                }), children: "Refuse" })
              ] })
            ] }, item.applicationNumber)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "AI Risk & Opportunity Signals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 18, className: "text-kcs-gold-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: riskAlerts.map((alert) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: alert.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-xs font-semibold ${alert.level === "high" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" : alert.level === "medium" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"}`, children: alert.level })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed text-gray-600 dark:text-gray-300", children: alert.description })
            ] }, alert.title)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Teacher Load Snapshot" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 18, className: "text-purple-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: staffLoad.map((staff) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: staff.teacher }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: staff.load })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 dark:text-gray-400", children: "AI support level" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-kcs-blue-600 dark:text-kcs-blue-400", children: staff.aiSupport })
              ] })
            ] }, staff.teacher)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-gray-100 bg-gradient-to-r from-kcs-blue-900 to-kcs-blue-700 p-6 text-white dark:border-kcs-blue-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-sm font-semibold text-kcs-gold-300", children: "Operational Pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "This week's strongest signals point to steady enrollment growth and higher AI engagement in senior grades." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5", children: recentActivity.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 text-sm text-kcs-blue-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 16, className: "mt-0.5 flex-shrink-0 text-kcs-gold-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
          ] }, item)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1fr_1fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Role Permissions Matrix" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-blue text-xs", children: "Super Admin control" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: Object.entries(rolePermissions).map(([role, permissions]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold capitalize text-kcs-blue-900 dark:text-white", children: role === "admin" ? "Super Admin" : role }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-kcs-blue-600 dark:text-kcs-blue-300", children: [
                  permissions.length,
                  " permissions"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: permissions.slice(0, 5).map((permission) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-white px-2.5 py-1 text-xs text-gray-600 dark:bg-kcs-blue-900/60 dark:text-gray-300", children: permission }, permission)) })
            ] }, role)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Interconnected System Signals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-gold text-xs", children: "Data driven" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: aiSignals.map((signal) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: signal.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300", children: signal.severity })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300", children: signal.detail }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-gray-400", children: [
                "Visible to: ",
                signal.roles.join(", ")
              ] })
            ] }, signal.title)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Sensitive Action Approvals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-gold text-xs", children: "Super Admin only" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: sensitiveActions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: item.action }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-300", children: item.risk })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: item.requester }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs font-semibold text-kcs-blue-600 dark:text-kcs-blue-300", children: item.status })
            ] }, item.action)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Finance Control" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-blue text-xs", children: "Invoices • receipts • exports" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: feeAccounts.map((fee) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: fee.invoice }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-kcs-blue-700 dark:text-kcs-blue-300", children: [
                  "$",
                  fee.balance
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: [
                fee.family,
                " • ",
                fee.status,
                " • last payment $",
                fee.lastPayment
              ] })
            ] }, fee.invoice)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Report Cards & Transcripts" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-gold text-xs", children: "Principal workflow" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [...reportCards, ...transcripts].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: item.student }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: [
                  item.term ?? item.years,
                  " ? ",
                  item.principalStatus ?? item.status
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => printAcademicWorkflowDocument(item), className: "inline-flex w-fit items-center justify-center rounded-lg border border-kcs-blue-200 px-3 py-2 text-xs font-bold text-kcs-blue-700 hover:bg-kcs-blue-50 dark:border-kcs-blue-700 dark:text-kcs-blue-200 dark:hover:bg-kcs-blue-900", children: "Print PDF" })
            ] }) }, `${item.student}-${item.term ?? item.years}`)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1.2fr_0.8fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Interdependence Engine" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-blue text-xs", children: "Notifications and RBAC" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2", children: communicationFlows.map((flow) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: flow.trigger }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-600 dark:text-gray-300", children: flow.update }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-gray-400", children: [
                "Recipients: ",
                flow.recipients.join(", ")
              ] })
            ] }, flow.trigger)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "AI Governance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-gold text-xs", children: "Usage and recommendations" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              aiRecommendations.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: [
                  item.owner,
                  ": ",
                  item.title
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-600 dark:text-gray-300", children: item.action }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs font-semibold text-kcs-gold-600 dark:text-kcs-gold-300", children: item.impact })
              ] }, `${item.owner}-${item.title}`)),
              financeReadiness.slice(1).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-green-100 bg-green-50 p-4 dark:border-green-900/30 dark:bg-green-900/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-800 dark:text-green-300", children: item.feature }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-green-700 dark:text-green-400", children: item.note })
              ] }, item.feature))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Student Risk Control" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: officialRoster.slice(0, 6).map((student) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: student.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2 py-1 text-xs font-semibold ${pillTone(student.discipline)}`, children: student.discipline })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-gray-600 dark:text-gray-300", children: [
                formatClassName(student.grade, student.section),
                " - GPA ",
                student.gpa,
                " - attendance ",
                student.attendance,
                "% - parent: ",
                student.parent
              ] })
            ] }, student.id)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Staff Operations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: staffOperations.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: item.function }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-kcs-blue-700 dark:text-kcs-blue-300", children: item.value })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: [
                item.metric,
                " • ",
                item.status
              ] })
            ] }, item.function)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold text-kcs-blue-900 dark:text-white", children: "Sensitive Audit Logs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: auditLogs.map((log) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: log.action }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-gray-500 dark:text-gray-400", children: [
                log.actor,
                " • ",
                log.target
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-400", children: log.time })
            ] }, `${log.actor}-${log.time}`)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Schedule Conflict Control" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-blue text-xs", children: "Teacher • room • class timetable" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2", children: scheduleConflicts.map((conflict) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: conflict.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300", children: conflict.severity })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-gray-600 dark:text-gray-300", children: conflict.detail }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-gray-400", children: [
              "Notify: ",
              conflict.affected.join(", ")
            ] })
          ] }, conflict.title)) })
        ] })
      ] }) })
    ] })
  ] });
};
export {
  AdminDashboard as default
};
