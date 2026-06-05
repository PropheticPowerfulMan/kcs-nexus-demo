import { j as jsxRuntimeExports, m as motion, h as Mail, g as MapPin, P as Phone, C as Clock, a1 as CheckCircle2, p as Send, x as useInView } from "./ui-Bam7IDm4.js";
import { r as reactExports } from "./vendor-Bh1Zu6gV.js";
import { u as useForm, t, o as objectType, s as stringType } from "./types-Dln92dkD.js";
import { c as contactAPI } from "./index-QZ8_PQE4.js";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const AnimSection = ({ children, className = "" }) => {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ref, initial: "hidden", animate: inView ? "visible" : "hidden", variants: fadeUp, className, children });
};
const contactSchema = objectType({
  name: stringType().min(2, "Name is required"),
  email: stringType().email("Valid email required"),
  phone: stringType().optional(),
  subject: stringType().min(2, "Subject is required"),
  message: stringType().min(10, "Please provide more detail")
});
const SCHOOL_CONTACT_EMAIL = "kinshasachristianschool@gmail.com";
const buildContactMailtoHref = (values) => {
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "Not provided"}`,
    "",
    values.message
  ].join("\n");
  return `mailto:${SCHOOL_CONTACT_EMAIL}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
};
const ContactPage = () => {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [manualEmailHref, setManualEmailHref] = reactExports.useState("");
  const [sending, setSending] = reactExports.useState(false);
  const form = useForm({
    resolver: t(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });
  const onSubmit = async (values) => {
    var _a, _b, _c;
    setSending(true);
    setManualEmailHref("");
    try {
      const response = await contactAPI.send(values);
      if (!((_c = (_b = (_a = response.data) == null ? void 0 : _a.data) == null ? void 0 : _b.emailDelivery) == null ? void 0 : _c.sent)) {
        setManualEmailHref(buildContactMailtoHref(values));
      }
      setSubmitted(true);
      form.reset();
    } catch {
      setManualEmailHref(buildContactMailtoHref(values));
      setSubmitted(true);
      form.reset();
    } finally {
      setSending(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white dark:bg-kcs-blue-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-kcs-blue-950 pb-16 pt-28 text-white sm:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hero-overlay" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dots-bg opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7 }, className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-sm text-kcs-gold-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14 }),
          " Contact KCS"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-4 text-3xl font-bold font-display leading-tight sm:text-4xl md:text-6xl", children: "Let's Start A Conversation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-base leading-relaxed text-kcs-blue-100 sm:text-lg", children: "Reach the admissions office, leadership team, or support staff. We respond promptly and can help you plan a visit, application, or transfer." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gray-50 py-12 dark:bg-kcs-blue-900/20 sm:py-16 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-custom grid gap-6 lg:grid-cols-[0.95fr_1.05fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimSection, { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white p-4 shadow-kcs dark:bg-kcs-blue-900/50 dark:border dark:border-kcs-blue-800 sm:rounded-3xl sm:p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-5 text-xl font-bold font-display text-kcs-blue-900 dark:text-white sm:text-2xl", children: "Contact Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
            { icon: MapPin, title: "Campus Address", body: "Avenue de la Republique n° 1, Macampagne, Ngaliema, Kinshasa, DRC, Ref. 80 jours" },
            { icon: Phone, title: "Phone", body: "+243 895 326 011 / +243 994 645 735" },
            { icon: Mail, title: "Email", body: "kinshasachristianschool@gmail.com" },
            { icon: Clock, title: "Office Hours", body: "Monday to Friday, 7:30 AM to 4:30 PM" }
          ].map((item) => {
            const Icon = item.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 gap-3 rounded-2xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30 sm:gap-4 sm:p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-kcs-blue-100 text-kcs-blue-700 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-300 sm:h-11 sm:w-11 sm:rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 break-words text-sm leading-relaxed text-gray-500 dark:text-gray-400", children: item.body })
              ] })
            ] }, item.title);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-kcs dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50 sm:rounded-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "iframe",
          {
            title: "KCS Campus Map",
            src: "https://www.google.com/maps?q=Kinshasa%2C%20DR%20Congo&z=12&output=embed",
            className: "h-[240px] w-full sm:h-[340px]",
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-100 bg-white p-4 shadow-kcs dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50 sm:rounded-3xl sm:p-6 md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-kcs-blue-900 dark:text-white sm:text-2xl", children: "Send A Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-500 dark:text-gray-400", children: "Use the form below for admissions inquiries, partnership requests, or general questions." })
        ] }),
        submitted && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800 dark:border-green-900/40 dark:bg-green-900/20 dark:text-green-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 18, className: "mt-0.5 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Message sent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Our team will get back to you shortly." }),
            manualEmailHref && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: manualEmailHref, className: "mt-2 inline-flex text-sm font-bold underline", children: "Open email backup" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-300", children: "Full Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...form.register("name"), className: "input-kcs", placeholder: "Your full name" }),
              form.formState.errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-500", children: form.formState.errors.name.message })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-300", children: "Email Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...form.register("email"), className: "input-kcs", placeholder: "name@email.com" }),
              form.formState.errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-500", children: form.formState.errors.email.message })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-300", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...form.register("phone"), className: "input-kcs", placeholder: "Optional" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-300", children: "Subject" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...form.register("subject"), className: "input-kcs", placeholder: "How can we help?" }),
              form.formState.errors.subject && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-500", children: form.formState.errors.subject.message })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-300", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { ...form.register("message"), className: "input-kcs min-h-[160px] resize-y", placeholder: "Tell us more about your request..." }),
            form.formState.errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-500", children: form.formState.errors.message.message })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: sending, className: "btn-gold inline-flex w-full items-center justify-center gap-2 disabled:opacity-60 sm:w-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 }),
            " ",
            sending ? "Sending..." : "Send Message"
          ] })
        ] })
      ] }) })
    ] }) })
  ] });
};
export {
  ContactPage as default
};
