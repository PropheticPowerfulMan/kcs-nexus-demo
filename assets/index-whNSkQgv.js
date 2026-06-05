import { j as jsxRuntimeExports, m as motion, s as Star, d as ArrowRight, G as GraduationCap, $ as ClipboardList, a0 as FileText, U as Users, a1 as CheckCircle2, A as AnimatePresence, n as User, a2 as ChevronRight, a3 as Upload, x as useInView } from "./ui-Bam7IDm4.js";
import { r as reactExports } from "./vendor-Bh1Zu6gV.js";
import { u as useForm, t, o as objectType, s as stringType, e as enumType } from "./types-Dln92dkD.js";
import { a as SCHOOL_LEVELS, S as SCHOOL_DIVISIONS } from "./schoolLevels-BLyIlbuz.js";
import { u as useTranslation, a as admissionsAPI } from "./index-QZ8_PQE4.js";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};
const AnimSection = ({ children, className = "" }) => {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ref, variants: stagger, initial: "hidden", animate: inView ? "visible" : "hidden", className, children });
};
const steps = [
  { num: 1, title: "Submit Application", desc: "Complete the online form with student and family details.", icon: ClipboardList },
  { num: 2, title: "Document Review", desc: "Our admissions team reviews transcripts, recommendation letters, and required documents.", icon: FileText },
  { num: 3, title: "Entrance Assessment", desc: "Scheduled assessment in English, Math, and general knowledge for new students.", icon: GraduationCap },
  { num: 4, title: "Parent Interview", desc: "A meeting with the Principal and Admissions Director to discuss school fit and expectations.", icon: Users },
  { num: 5, title: "Admission Decision", desc: "You will receive a decision within 5-10 business days via email.", icon: CheckCircle2 },
  { num: 6, title: "Enrollment & Registration", desc: "Complete enrollment forms, pay registration fees, and join the KCS family!", icon: Star }
];
const requirements = [
  "Completed online application form",
  "Birth certificate",
  "Previous school transcript",
  "Parent or guardian contact information",
  "Requested class level",
  "Additional comments for the admissions team"
];
const programs = SCHOOL_DIVISIONS.map((division, index) => ({
  name: division.title,
  grades: division.levels,
  age: index === 0 ? "Early learners" : index === 1 ? "Primary learners" : index === 2 ? "Adolescents" : "Teens",
  tuition: index === 0 ? "Faith & readiness" : index === 1 ? "Strong foundation" : index === 2 ? "Knowledge & character" : "Future readiness",
  spots: [8, 12, 6, 10][index]
}));
const STEPS = ["Student", "Parent", "Documents", "Review"];
const DOCUMENT_FIELDS = [
  { key: "birthCertificate", label: "Birth Certificate" },
  { key: "transcript", label: "Previous School Transcript" },
  { key: "additional", label: "Additional Required Documents" }
];
const studentSchema = objectType({
  firstName: stringType().min(2, "Required"),
  lastName: stringType().min(2, "Required"),
  gender: enumType(["female", "male"], { required_error: "Select gender" }),
  dateOfBirth: stringType().min(1, "Required"),
  nationality: stringType().min(2, "Required"),
  applyingGrade: stringType().min(1, "Select a grade"),
  currentSchool: stringType().min(2, "Required"),
  languages: stringType().optional()
});
const parentSchema = objectType({
  parentName: stringType().min(2, "Required"),
  relationship: stringType().min(2, "Required"),
  email: stringType().email("Valid email required"),
  phone: stringType().min(8, "Valid phone required"),
  address: stringType().min(5, "Required"),
  occupation: stringType().optional()
});
const SCHOOL_ADMISSIONS_EMAIL = "kinshasachristianschool@gmail.com";
const ADMIN_ADMISSIONS_STORAGE_KEY = "kcs-admin-admission-submissions";
const isStaticAdmissionsSite = true;
const buildAdmissionEmailBody = (applicationNumber, studentData, parentData, notes, documents) => {
  const documentNames = Object.values(documents).filter(Boolean).map((file) => file == null ? void 0 : file.name).join(", ") || "No documents attached online";
  return [
    `New KCS online admission application: ${applicationNumber}`,
    "",
    "STUDENT INFORMATION",
    `First name: ${studentData.firstName}`,
    `Last name: ${studentData.lastName}`,
    `Gender: ${studentData.gender}`,
    `Date of birth: ${studentData.dateOfBirth}`,
    `Nationality: ${studentData.nationality}`,
    `Grade applying: ${studentData.applyingGrade}`,
    `Previous/current school: ${studentData.currentSchool}`,
    `Languages spoken: ${studentData.languages || "Not provided"}`,
    "",
    "PARENT / GUARDIAN INFORMATION",
    `Name: ${parentData.parentName}`,
    `Relationship: ${parentData.relationship}`,
    `Email: ${parentData.email}`,
    `Phone: ${parentData.phone}`,
    `Address: ${parentData.address}`,
    `Occupation: ${parentData.occupation || "Not provided"}`,
    "",
    "NOTES",
    notes || "Not provided",
    "",
    "DOCUMENTS",
    documentNames
  ].join("\n");
};
const buildAdmissionMailtoHref = (applicationNumber, studentData, parentData, notes, documents) => {
  const subject = `New KCS online admission - ${applicationNumber} - ${studentData.firstName} ${studentData.lastName}`;
  const body = buildAdmissionEmailBody(applicationNumber, studentData, parentData, notes, documents);
  return `mailto:${SCHOOL_ADMISSIONS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
const saveApplicationForAdmin = (applicationNumber, studentData, parentData, notes, documents) => {
  if (typeof window === "undefined") return;
  const existing = JSON.parse(window.localStorage.getItem(ADMIN_ADMISSIONS_STORAGE_KEY) || "[]");
  const nextApplication = {
    id: applicationNumber,
    applicationNumber,
    firstName: studentData.firstName,
    lastName: studentData.lastName,
    studentName: `${studentData.firstName} ${studentData.lastName}`,
    dateOfBirth: studentData.dateOfBirth,
    gender: studentData.gender,
    nationality: studentData.nationality,
    gradeApplying: studentData.applyingGrade,
    previousSchool: studentData.currentSchool,
    languages: studentData.languages ?? "",
    parentName: parentData.parentName,
    parentEmail: parentData.email,
    parentPhone: parentData.phone,
    relationship: parentData.relationship,
    address: parentData.address,
    occupation: parentData.occupation ?? "",
    notes,
    documents: Object.values(documents).filter(Boolean).map((file) => file == null ? void 0 : file.name),
    status: "SUBMITTED",
    submittedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  const withoutDuplicate = existing.filter((item) => item.applicationNumber !== applicationNumber);
  window.localStorage.setItem(ADMIN_ADMISSIONS_STORAGE_KEY, JSON.stringify([nextApplication, ...withoutDuplicate]));
};
const sendAdmissionFallbackEmail = async (applicationNumber, studentData, parentData, notes, documents) => {
  const fallbackData = new FormData();
  fallbackData.append("_subject", `New KCS online admission - ${applicationNumber} - ${studentData.firstName} ${studentData.lastName}`);
  fallbackData.append("_template", "table");
  fallbackData.append("_captcha", "false");
  fallbackData.append("_replyto", parentData.email);
  fallbackData.append("_autoresponse", `Thank you for applying to Kinshasa Christian School. Your application ID is ${applicationNumber}.`);
  fallbackData.append("Application number", applicationNumber);
  fallbackData.append("Student first name", studentData.firstName);
  fallbackData.append("Student last name", studentData.lastName);
  fallbackData.append("Student gender", studentData.gender);
  fallbackData.append("Date of birth", studentData.dateOfBirth);
  fallbackData.append("Nationality", studentData.nationality);
  fallbackData.append("Grade applying", studentData.applyingGrade);
  fallbackData.append("Previous/current school", studentData.currentSchool);
  fallbackData.append("Languages spoken", studentData.languages ?? "Not provided");
  fallbackData.append("Parent/guardian name", parentData.parentName);
  fallbackData.append("Relationship", parentData.relationship);
  fallbackData.append("Parent email", parentData.email);
  fallbackData.append("Parent phone", parentData.phone);
  fallbackData.append("Address", parentData.address);
  fallbackData.append("Occupation", parentData.occupation ?? "Not provided");
  fallbackData.append("Notes", notes || "Not provided");
  Object.entries(documents).forEach(([key, file]) => {
    if (file) fallbackData.append(`Document provided - ${key}`, file.name);
  });
  const response = await fetch(`https://formsubmit.co/ajax/${SCHOOL_ADMISSIONS_EMAIL}`, {
    method: "POST",
    body: fallbackData,
    headers: { Accept: "application/json" }
  });
  if (!response.ok) throw new Error("Fallback email service failed");
  return response.json();
};
const AdmissionsPage = () => {
  const { t: t$1 } = useTranslation();
  const [activeStep, setActiveStep] = reactExports.useState("Student");
  const [studentData, setStudentData] = reactExports.useState(null);
  const [parentData, setParentData] = reactExports.useState(null);
  const [documents, setDocuments] = reactExports.useState({});
  const [notes, setNotes] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [submitError, setSubmitError] = reactExports.useState("");
  const [submitWarning, setSubmitWarning] = reactExports.useState("");
  const [applicationId, setApplicationId] = reactExports.useState("");
  const [manualEmailHref, setManualEmailHref] = reactExports.useState("");
  const stepIdx = STEPS.indexOf(activeStep);
  const studentForm = useForm({ resolver: t(studentSchema) });
  const parentForm = useForm({ resolver: t(parentSchema) });
  const handleStudentSubmit = (data) => {
    setStudentData(data);
    setActiveStep("Parent");
  };
  const handleParentSubmit = (data) => {
    setParentData(data);
    setActiveStep("Documents");
  };
  const handleDocumentChange = (key, files) => {
    setDocuments((current) => ({ ...current, [key]: (files == null ? void 0 : files[0]) ?? null }));
  };
  const handleFinalSubmit = async () => {
    var _a, _b, _c, _d, _e;
    if (!studentData || !parentData) return;
    setSubmitting(true);
    setSubmitError("");
    setSubmitWarning("");
    setManualEmailHref("");
    try {
      const applicationNumber = `KCS-${Date.now().toString().slice(-6)}`;
      if (isStaticAdmissionsSite) {
        await sendAdmissionFallbackEmail(applicationNumber, studentData, parentData, notes, documents);
        saveApplicationForAdmin(applicationNumber, studentData, parentData, notes, documents);
        setApplicationId(applicationNumber);
        setSubmitWarning("Application sent to the school email. Uploaded file names were included; large documents should also be sent directly to the admissions office if requested.");
        setManualEmailHref(buildAdmissionMailtoHref(applicationNumber, studentData, parentData, notes, documents));
        setSubmitted(true);
        return;
      }
      const formData = new FormData();
      formData.append("firstName", studentData.firstName);
      formData.append("lastName", studentData.lastName);
      formData.append("dateOfBirth", studentData.dateOfBirth);
      formData.append("gender", studentData.gender);
      formData.append("nationality", studentData.nationality);
      formData.append("gradeApplying", studentData.applyingGrade);
      formData.append("previousSchool", studentData.currentSchool);
      formData.append("languages", studentData.languages ?? "");
      formData.append("parentName", parentData.parentName);
      formData.append("relationship", parentData.relationship);
      formData.append("parentEmail", parentData.email);
      formData.append("parentPhone", parentData.phone);
      formData.append("address", parentData.address);
      formData.append("occupation", parentData.occupation ?? "");
      formData.append("notes", notes);
      Object.values(documents).forEach((file) => {
        if (file) formData.append("documents", file);
      });
      const response = await admissionsAPI.create(formData);
      const savedApplicationNumber = ((_b = (_a = response.data) == null ? void 0 : _a.data) == null ? void 0 : _b.applicationNumber) || applicationNumber;
      const emailSent = (_e = (_d = (_c = response.data) == null ? void 0 : _c.data) == null ? void 0 : _d.emailDelivery) == null ? void 0 : _e.sent;
      if (!emailSent) {
        try {
          await sendAdmissionFallbackEmail(savedApplicationNumber, studentData, parentData, notes, documents);
          setSubmitWarning("Application saved. The school mail server needs SMTP configuration, so a backup email notification was sent to the school address.");
        } catch (fallbackError) {
          console.error("Admission backup email failed after API submission:", fallbackError);
          setSubmitWarning(`Application saved successfully, but the email notification could not be sent automatically. Please contact the school at ${SCHOOL_ADMISSIONS_EMAIL} with your application number.`);
          setManualEmailHref(buildAdmissionMailtoHref(savedApplicationNumber, studentData, parentData, notes, documents));
        }
      }
      saveApplicationForAdmin(savedApplicationNumber, studentData, parentData, notes, documents);
      setApplicationId(savedApplicationNumber);
      setSubmitted(true);
    } catch (error) {
      const fallbackApplicationNumber = `KCS-${Date.now().toString().slice(-6)}`;
      try {
        await sendAdmissionFallbackEmail(fallbackApplicationNumber, studentData, parentData, notes, documents);
        saveApplicationForAdmin(fallbackApplicationNumber, studentData, parentData, notes, documents);
        setApplicationId(fallbackApplicationNumber);
        setSubmitWarning("The live admissions API was unavailable, so the application was sent directly to the school email using the backup channel.");
        setManualEmailHref(buildAdmissionMailtoHref(fallbackApplicationNumber, studentData, parentData, notes, documents));
        setSubmitted(true);
      } catch {
        console.error("Admission submission failed:", error);
        setManualEmailHref(buildAdmissionMailtoHref(fallbackApplicationNumber, studentData, parentData, notes, documents));
        setSubmitError(`We could not send the application automatically. Please email the school directly at ${SCHOOL_ADMISSIONS_EMAIL} or try again in a few minutes.`);
      }
    } finally {
      setSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-kcs-blue-950 min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-kcs-blue-900 text-white py-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dots-bg opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hero-overlay" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container-custom text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kcs-gold-500/20 text-kcs-gold-300 text-sm font-medium mb-6 border border-kcs-gold-500/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14 }),
          " ",
          t$1("admissionsPublic.heroBadge")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-6xl font-bold font-display mb-4", children: [
          t$1("admissionsPublic.heroTitle"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-kcs-gold-400", children: t$1("admissionsPublic.heroTitleHighlight") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-200 text-lg max-w-2xl mx-auto mb-8", children: t$1("admissionsPublic.heroSubtitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 justify-center flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#apply", className: "btn-gold", children: [
            t$1("admissionsPublic.applyNow"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "inline ml-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#programs", className: "btn-primary bg-white/10 border border-white/20", children: t$1("admissionsPublic.viewPrograms") })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "programs", className: "section-padding bg-gray-50 dark:bg-kcs-blue-900/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold font-display text-kcs-blue-900 dark:text-white mb-3", children: t$1("admissionsPublic.programsTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 dark:text-gray-400", children: t$1("admissionsPublic.programsSubtitle") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: programs.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "card-hover bg-white dark:bg-kcs-blue-900 rounded-2xl p-6 text-center border border-gray-100 dark:border-kcs-blue-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 kcs-gradient rounded-2xl flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 24, className: "text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white mb-1", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
          p.grades,
          " · ",
          p.age
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-gray-100 dark:border-kcs-blue-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-kcs-blue-700 dark:text-kcs-blue-300", children: p.tuition }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: t$1("admissionsPublic.spotsRemaining", { count: p.spots }) })
        ] })
      ] }, p.name)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-white dark:bg-kcs-blue-950", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold font-display text-kcs-blue-900 dark:text-white mb-3", children: t$1("admissionsPublic.processTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 dark:text-gray-400", children: t$1("admissionsPublic.processSubtitle") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: steps.map(({ num, title, desc, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl kcs-gradient flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22, className: "text-white" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-kcs-gold-600 dark:text-kcs-gold-400 mb-0.5", children: t$1("admissionsPublic.stepLabel", { num }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white mb-1", children: t$1(`admissionsPublic.steps.${num}.title`, title) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400 leading-relaxed", children: t$1(`admissionsPublic.steps.${num}.desc`, desc) })
        ] })
      ] }, num)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-kcs-blue-900 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold font-display mb-4", children: t$1("admissionsPublic.requirementsTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-200 mb-6", children: t$1("admissionsPublic.requirementsSubtitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: requirements.map((req, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 18, className: "text-kcs-gold-400 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-kcs-blue-100", children: t$1(`admissionsPublic.requirements.${index}`, req) })
        ] }, req)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "public-admissions-dates glass-card rounded-2xl p-6 bg-white/5 border border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: t$1("admissionsPublic.keyDatesTitle") }),
        [0, 1, 2, 3, 4].map((index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-2.5 border-b border-white/10 last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-kcs-blue-200 text-sm", children: t$1(`admissionsPublic.keyDates.${index}.label`) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "public-date-value text-kcs-gold-400 font-semibold text-sm", children: t$1(`admissionsPublic.keyDates.${index}.date`) })
        ] }, index))
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "apply", className: "section-padding bg-gray-50 dark:bg-kcs-blue-900/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold font-display text-kcs-blue-900 dark:text-white mb-3", children: t$1("admissionsPublic.applicationTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 dark:text-gray-400", children: t$1("admissionsPublic.applicationSubtitle") })
      ] }),
      submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          className: "bg-white dark:bg-kcs-blue-900/50 rounded-2xl p-10 text-center border border-gray-100 dark:border-kcs-blue-800 shadow-kcs",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 40, className: "text-green-600" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold font-display text-kcs-blue-900 dark:text-white mb-2", children: "Application Submitted!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 dark:text-gray-400 mb-4", children: "Thank you for applying to KCS. We will be in touch within 5–10 business days." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-block bg-kcs-blue-50 dark:bg-kcs-blue-900/30 rounded-xl px-6 py-3 border border-kcs-blue-100 dark:border-kcs-blue-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Your Application ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-kcs-blue-700 dark:text-kcs-blue-300 tracking-wider", children: applicationId })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-4", children: "Save this ID to track your application status." }),
            submitWarning && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl rounded-xl border border-yellow-200 bg-yellow-50 px-4 py-3 text-sm text-yellow-800 dark:border-yellow-900/40 dark:bg-yellow-900/20 dark:text-yellow-200", children: submitWarning }),
            manualEmailHref && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: manualEmailHref,
                className: "mt-4 inline-flex items-center justify-center rounded-xl bg-kcs-blue-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-kcs-blue-800",
                children: "Open email manually"
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-kcs-blue-900/50 rounded-2xl border border-gray-100 dark:border-kcs-blue-800 shadow-kcs overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex border-b border-gray-100 dark:border-kcs-blue-800", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              if (i < stepIdx) setActiveStep(s);
            },
            className: `flex-1 py-4 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${s === activeStep ? "text-kcs-blue-700 dark:text-kcs-blue-300 border-b-2 border-kcs-blue-600 bg-kcs-blue-50/50 dark:bg-kcs-blue-800/30" : i < stepIdx ? "text-green-600 dark:text-green-400" : "text-gray-400 dark:text-gray-500"}`,
            children: [
              i < stepIdx ? /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold", children: i + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: s })
            ]
          },
          s
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
          activeStep === "Student" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.form,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -20 },
              onSubmit: studentForm.handleSubmit(handleStudentSubmit),
              className: "space-y-5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-kcs-blue-900 dark:text-white flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 18, className: "text-kcs-blue-600" }),
                  " Student Information"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5", children: "First Name *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...studentForm.register("firstName"), className: "input-kcs", placeholder: "e.g. Grace" }),
                    studentForm.formState.errors.firstName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: studentForm.formState.errors.firstName.message })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5", children: "Last Name *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...studentForm.register("lastName"), className: "input-kcs", placeholder: "e.g. Mutombo" }),
                    studentForm.formState.errors.lastName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: studentForm.formState.errors.lastName.message })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5", children: "Date of Birth *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", ...studentForm.register("dateOfBirth"), className: "input-kcs" }),
                    studentForm.formState.errors.dateOfBirth && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: studentForm.formState.errors.dateOfBirth.message })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5", children: "Gender *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { ...studentForm.register("gender"), className: "input-kcs", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select..." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "female", children: "Female" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "male", children: "Male" })
                    ] }),
                    studentForm.formState.errors.gender && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: studentForm.formState.errors.gender.message })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5", children: "Nationality *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...studentForm.register("nationality"), className: "input-kcs", placeholder: "e.g. Congolese" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5", children: "Applying for Grade *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { ...studentForm.register("applyingGrade"), className: "input-kcs", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select grade..." }),
                      SCHOOL_LEVELS.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: g, children: g }, g))
                    ] }),
                    studentForm.formState.errors.applyingGrade && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: studentForm.formState.errors.applyingGrade.message })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5", children: "Current School *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...studentForm.register("currentSchool"), className: "input-kcs", placeholder: "School name" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5", children: "Languages Spoken" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...studentForm.register("languages"), className: "input-kcs", placeholder: "e.g. English, French, Lingala" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "btn-primary flex items-center gap-2", children: [
                  "Next: Parent Info ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
                ] }) })
              ]
            },
            "student"
          ),
          activeStep === "Parent" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.form,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -20 },
              onSubmit: parentForm.handleSubmit(handleParentSubmit),
              className: "space-y-5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-kcs-blue-900 dark:text-white flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 18, className: "text-kcs-blue-600" }),
                  " Parent / Guardian Information"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5", children: "Full Name *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...parentForm.register("parentName"), className: "input-kcs", placeholder: "Parent full name" }),
                    parentForm.formState.errors.parentName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: parentForm.formState.errors.parentName.message })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5", children: "Relationship to Student *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { ...parentForm.register("relationship"), className: "input-kcs", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select..." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Father" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Mother" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Guardian" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5", children: "Email Address *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", ...parentForm.register("email"), className: "input-kcs", placeholder: "parent@email.com" }),
                    parentForm.formState.errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: parentForm.formState.errors.email.message })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5", children: "Phone Number *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...parentForm.register("phone"), className: "input-kcs", placeholder: "+243 81 000 0000" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5", children: "Home Address *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...parentForm.register("address"), className: "input-kcs", placeholder: "Full address in Kinshasa" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5", children: "Occupation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...parentForm.register("occupation"), className: "input-kcs", placeholder: "e.g. Engineer" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setActiveStep("Student"), className: "btn-primary bg-gray-100 dark:bg-kcs-blue-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200", children: "Back" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "btn-primary flex items-center gap-2", children: [
                    "Next: Documents ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
                  ] })
                ] })
              ]
            },
            "parent"
          ),
          activeStep === "Documents" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-kcs-blue-900 dark:text-white flex items-center gap-2 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 18, className: "text-kcs-blue-600" }),
              " Upload Documents"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: DOCUMENT_FIELDS.map((doc) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 rounded-xl border-2 border-dashed border-gray-200 dark:border-kcs-blue-700 hover:border-kcs-blue-400 dark:hover:border-kcs-blue-500 transition-colors group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 20, className: "text-gray-400 group-hover:text-kcs-blue-500 transition-colors" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm text-gray-700 dark:text-gray-300", children: doc.label }),
                    documents[doc.key] && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-kcs-blue-600 dark:text-kcs-blue-300", children: (_a = documents[doc.key]) == null ? void 0 : _a.name })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "cursor-pointer text-xs font-semibold text-kcs-blue-600 dark:text-kcs-blue-400 hover:underline", children: [
                  "Upload PDF / JPG",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "file",
                      accept: ".pdf,.jpg,.jpeg,.png",
                      className: "hidden",
                      onChange: (event) => handleDocumentChange(doc.key, event.target.files)
                    }
                  )
                ] })
              ] }, doc.key);
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5", children: "Additional comments" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  value: notes,
                  onChange: (event) => setNotes(event.target.value),
                  className: "input-kcs min-h-28 resize-y",
                  placeholder: "Anything the admissions team should know?"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-3", children: "* Documents can also be submitted in person at the KCS Admissions Office." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveStep("Parent"), className: "btn-primary bg-gray-100 dark:bg-kcs-blue-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200", children: "Back" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveStep("Review"), className: "btn-primary flex items-center gap-2", children: [
                "Review Application ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
              ] })
            ] })
          ] }, "docs"),
          activeStep === "Review" && studentData && parentData && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-kcs-blue-900 dark:text-white mb-5", children: "Review & Submit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-6 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-gray-50 dark:bg-kcs-blue-800/30 border border-gray-100 dark:border-kcs-blue-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-sm text-kcs-blue-900 dark:text-white mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 14 }),
                  " Student"
                ] }),
                [
                  ["Name", `${studentData.firstName} ${studentData.lastName}`],
                  ["Gender", studentData.gender],
                  ["DOB", studentData.dateOfBirth],
                  ["Nationality", studentData.nationality],
                  ["Applying For", studentData.applyingGrade],
                  ["Current School", studentData.currentSchool]
                ].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs py-1 border-b border-gray-100 dark:border-kcs-blue-700 last:border-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 dark:text-gray-400", children: k }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-700 dark:text-gray-300", children: v })
                ] }, k))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-gray-50 dark:bg-kcs-blue-800/30 border border-gray-100 dark:border-kcs-blue-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-sm text-kcs-blue-900 dark:text-white mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 14 }),
                  " Parent"
                ] }),
                [
                  ["Name", parentData.parentName],
                  ["Relationship", parentData.relationship],
                  ["Email", parentData.email],
                  ["Phone", parentData.phone]
                ].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs py-1 border-b border-gray-100 dark:border-kcs-blue-700 last:border-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 dark:text-gray-400", children: k }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-700 dark:text-gray-300", children: v })
                ] }, k))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 rounded-xl bg-kcs-blue-50 dark:bg-kcs-blue-900/30 border border-kcs-blue-100 dark:border-kcs-blue-800 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-3 cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", required: true, className: "mt-0.5 w-4 h-4 accent-kcs-blue-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-600 dark:text-gray-300", children: [
                "I confirm that all information provided is accurate and complete. I agree to the KCS",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/about", className: "text-kcs-blue-600 dark:text-kcs-blue-400 underline", children: "Terms & Conditions" }),
                " and",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/about", className: "text-kcs-blue-600 dark:text-kcs-blue-400 underline", children: "Privacy Policy" }),
                "."
              ] })
            ] }) }),
            submitError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-300", children: submitError }),
            manualEmailHref && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: manualEmailHref,
                className: "mb-4 inline-flex rounded-xl bg-kcs-blue-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-kcs-blue-800",
                children: "Open email manually"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveStep("Documents"), className: "btn-primary bg-gray-100 dark:bg-kcs-blue-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200", children: "Back" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleFinalSubmit, disabled: submitting, className: "btn-gold flex items-center gap-2 disabled:opacity-60", children: [
                submitting ? "Submitting..." : "Submit Application",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
              ] })
            ] })
          ] }, "review")
        ] }) })
      ] })
    ] }) }) })
  ] });
};
export {
  AdmissionsPage as default
};
