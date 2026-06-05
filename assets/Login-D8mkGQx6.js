import { j as jsxRuntimeExports, a6 as ShieldCheck, m as motion, h as Mail, a7 as Lock, a8 as EyeOff, W as Eye, L as LogIn, a9 as KeyRound, X, a1 as CheckCircle2, p as Send } from "./ui-Bam7IDm4.js";
import { f as useNavigate, r as reactExports, L as Link } from "./vendor-Bh1Zu6gV.js";
import { u as useForm, t, o as objectType, s as stringType, Z as ZodIssueCode } from "./types-Dln92dkD.js";
import { b as useAuthStore, d as authAPI, A as API_BASE } from "./index-QZ8_PQE4.js";
const loginSchema = objectType({
  email: stringType().min(1, "Email or access code is required"),
  password: stringType().min(6, "Password must be at least 6 characters")
});
const resetSchema = objectType({
  email: stringType().optional(),
  token: stringType().optional(),
  password: stringType().optional(),
  confirmPassword: stringType().optional()
}).superRefine((value, ctx) => {
  var _a, _b;
  if (!((_a = value.token) == null ? void 0 : _a.trim())) {
    if (!((_b = value.email) == null ? void 0 : _b.trim()) || !stringType().email().safeParse(value.email).success) {
      ctx.addIssue({ code: ZodIssueCode.custom, message: "Enter a valid email address", path: ["email"] });
    }
    return;
  }
  if (!value.password || value.password.length < 8) {
    ctx.addIssue({ code: ZodIssueCode.custom, message: "Password must be at least 8 characters", path: ["password"] });
  }
  if (value.password !== value.confirmPassword) {
    ctx.addIssue({ code: ZodIssueCode.custom, message: "Passwords do not match", path: ["confirmPassword"] });
  }
});
const demoAccounts = [
  { email: "superadmin@kcsnexus.com", password: "SuperAdmin123!", role: "admin", firstName: "Super", lastName: "Admin", label: "Super admin" },
  { email: "staff@kcsnexus.edu", password: "password123", role: "staff", firstName: "Miriam", lastName: "Office", label: "Administrative staff" },
  { email: "student@kcsnexus.edu", password: "password123", role: "student", firstName: "Grace", lastName: "Mwamba", label: "Student demo" },
  { email: "parent@kcsnexus.edu", password: "password123", role: "parent", firstName: "Rachel", lastName: "Kabongo", label: "Parent demo" },
  { email: "teacher@kcsnexus.edu", password: "password123", role: "teacher", firstName: "Daniel", lastName: "Mukendi", label: "Teacher demo" },
  { email: "admin@kcsnexus.edu", password: "password123", role: "admin", firstName: "Sarah", lastName: "Carter", label: "Admin demo" }
];
const superAdminAliases = ["superadmin@kcsnexus.com", "superadmin@kcsnexus.edu", "admin@kcsnexus.com"];
const superAdminPasswords = ["SuperAdmin123!", "password123"];
const superAdminAccount = demoAccounts[0];
const findDemoAccount = (values) => {
  const email = values.email.trim().toLowerCase();
  const password = values.password.trim();
  if (superAdminAliases.includes(email) && superAdminPasswords.includes(password)) {
    return superAdminAccount;
  }
  return demoAccounts.find((account) => account.email.toLowerCase() === email && account.password === password);
};
const buildDemoUser = (account) => ({
  id: account.role + "-demo",
  email: account.email,
  accessCode: `ACC-${account.role.slice(0, 3).toUpperCase()}-DEMO`,
  firstName: account.firstName,
  lastName: account.lastName,
  role: account.role,
  createdAt: (/* @__PURE__ */ new Date()).toISOString(),
  updatedAt: (/* @__PURE__ */ new Date()).toISOString()
});
const getLoginErrorMessage = (err) => {
  var _a, _b;
  if ((_b = (_a = err == null ? void 0 : err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) {
    return `API error: ${err.response.data.message}. For the Super Admin demo, use superadmin@kcsnexus.com / SuperAdmin123!.`;
  }
  if ((err == null ? void 0 : err.code) === "ERR_NETWORK" || (err == null ? void 0 : err.message) === "Network Error") {
    return `Network error: KCS Nexus cannot reach its API (${API_BASE}). Start the KCS Nexus backend, then verify that EDUPAY_API_URL points to EduPay API and SAVANEX_API_URL points to SAVANEX so credentials created in the other applications are accepted.`;
  }
  if ((err == null ? void 0 : err.code) === "ECONNABORTED") {
    return `Network error: the connection to KCS Nexus API (${API_BASE}) timed out. Verify that KCS Nexus Backend, EduPay API, SAVANEX, and KCS Orbit are running.`;
  }
  if (err == null ? void 0 : err.message) {
    return `Error: ${err.message}. For the Super Admin demo, use superadmin@kcsnexus.com / SuperAdmin123!.`;
  }
  return "Login failed. Use one of the demo accounts or connect the backend auth service.";
};
const LoginPage = () => {
  const navigate = useNavigate();
  const { login, logout, user, isAuthenticated, setLoading, isLoading } = useAuthStore();
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [errorMessage, setErrorMessage] = reactExports.useState("");
  const [resetOpen, setResetOpen] = reactExports.useState(false);
  const [resetMessage, setResetMessage] = reactExports.useState("");
  const [resetError, setResetError] = reactExports.useState("");
  const [resetSubmitting, setResetSubmitting] = reactExports.useState(false);
  const form = useForm({
    resolver: t(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const resetForm = useForm({
    resolver: t(resetSchema),
    defaultValues: {
      email: "",
      token: "",
      password: "",
      confirmPassword: ""
    }
  });
  reactExports.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const resetToken = params.get("resetToken");
    if (resetToken) {
      resetForm.setValue("token", resetToken);
      setResetOpen(true);
    }
  }, [resetForm]);
  const resolveDestination = (role) => {
    return role === "admin" ? "/admin" : `/portal/${role}`;
  };
  const handleDemoLogin = (user2) => {
    logout();
    login(user2, "demo-access-token", "demo-refresh-token");
    navigate(resolveDestination(user2.role), { replace: true });
  };
  const handleApiLogin = async (values) => {
    var _a;
    const response = await authAPI.login(values.email.trim(), values.password);
    const data = (_a = response.data) == null ? void 0 : _a.data;
    if (!(data == null ? void 0 : data.user) || !(data == null ? void 0 : data.token) || !(data == null ? void 0 : data.refreshToken)) {
      throw new Error("Invalid authentication response");
    }
    logout();
    login(data.user, data.token, data.refreshToken);
    navigate(resolveDestination(data.user.role), { replace: true });
  };
  const enterSuperAdmin = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      await handleApiLogin({ email: superAdminAccount.email, password: superAdminAccount.password });
    } catch {
      handleDemoLogin(buildDemoUser(superAdminAccount));
    } finally {
      setLoading(false);
    }
  };
  const onSubmit = async (values) => {
    setLoading(true);
    setErrorMessage("");
    try {
      await handleApiLogin(values);
    } catch (err) {
      const demoAccount = findDemoAccount(values);
      if (demoAccount) {
        handleDemoLogin(buildDemoUser(demoAccount));
      } else {
        setErrorMessage(getLoginErrorMessage(err));
      }
    } finally {
      setLoading(false);
    }
  };
  const openPasswordReset = () => {
    resetForm.setValue("email", form.getValues("email") || "");
    setResetMessage("");
    setResetError("");
    setResetOpen(true);
  };
  const handlePasswordReset = async (values) => {
    var _a, _b, _c;
    setResetSubmitting(true);
    setResetMessage("");
    setResetError("");
    try {
      if ((_a = values.token) == null ? void 0 : _a.trim()) {
        await authAPI.resetPassword(values.token.trim(), values.password || "");
        setResetMessage("Password updated. You can sign in with the new password.");
        resetForm.reset({ email: values.email, token: "", password: "", confirmPassword: "" });
        window.history.replaceState({}, document.title, window.location.pathname);
      } else {
        await authAPI.forgotPassword((values.email || "").trim());
        setResetMessage("If this account exists, a secure reset link has been sent.");
      }
    } catch (err) {
      setResetError(((_c = (_b = err == null ? void 0 : err.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message) || "Password reset is temporarily unavailable.");
    } finally {
      setResetSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-hidden bg-kcs-blue-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(29,78,216,0.28),transparent_35%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dots-bg opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container-custom flex min-h-screen items-center justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden flex-col justify-between border-r border-white/10 p-10 text-white lg:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-sm text-kcs-gold-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 14 }),
            " Secure Access"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-8 text-4xl font-bold font-display leading-tight", children: "Enter The Digital Campus Of KCS Nexus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-kcs-blue-100", children: "Access role-based dashboards for students, parents, teachers, and school leadership with AI-powered workflows built into the experience." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: demoAccounts.map((account) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              form.setValue("email", account.email);
              form.setValue("password", account.password);
            },
            className: "flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left transition-colors hover:bg-white/10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: account.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-kcs-blue-200", children: account.email })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-kcs-gold-400 px-3 py-1 text-xs font-semibold text-kcs-blue-950", children: "Quick Fill" })
            ]
          },
          account.email
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "public-auth-panel p-8 md:p-10",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl kcs-gradient text-sm font-bold text-white shadow-kcs", children: "KCS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-bold text-kcs-blue-900 dark:text-white", children: "Kinshasa Christian School" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-kcs-gold-600 dark:text-kcs-gold-400", children: "Nexus Platform" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold font-display text-kcs-blue-900 dark:text-white", children: "Sign In" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-500 dark:text-gray-400", children: "Use your email, access code, or one of the demo accounts." })
            ] }),
            errorMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-300", children: errorMessage }),
            isAuthenticated && user && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 rounded-2xl border border-kcs-blue-200 bg-kcs-blue-50 px-4 py-3 text-sm text-kcs-blue-800 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/30 dark:text-kcs-blue-200", children: [
              "Active session: ",
              user.firstName,
              " ",
              user.lastName,
              " (",
              user.role,
              "). Choose a demo account below to replace this session."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-300", children: "Email or access code" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16, className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...form.register("email"), className: "input-kcs pl-11", placeholder: "name@kcsnexus.edu or ACC-ADM-SUPER1" })
                ] }),
                form.formState.errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-500", children: form.formState.errors.email.message })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-300", children: "Password" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 16, className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      ...form.register("password"),
                      type: showPassword ? "text" : "password",
                      className: "input-kcs pl-11 pr-11",
                      placeholder: "Enter your password"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShowPassword((current) => !current),
                      className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-kcs-blue-600",
                      children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 16 })
                    }
                  )
                ] }),
                form.formState.errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-500", children: form.formState.errors.password.message })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-1 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-gray-500 dark:text-gray-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "accent-kcs-blue-600" }),
                  " Remember me"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: openPasswordReset, className: "font-medium text-kcs-blue-600 dark:text-kcs-blue-400", children: "Forgot password?" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: isLoading, className: "btn-primary flex w-full items-center justify-center gap-2 py-3 disabled:opacity-60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { size: 16 }),
                " ",
                isLoading ? "Signing in..." : "Sign In"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-6 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-gray-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-gray-200 dark:bg-kcs-blue-800" }),
              "Demo access",
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-gray-200 dark:bg-kcs-blue-800" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 grid grid-cols-2 gap-2 lg:hidden", children: demoAccounts.slice(0, 4).map((account) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  form.setValue("email", account.email);
                  form.setValue("password", account.password);
                },
                className: "rounded-xl border border-kcs-blue-100 bg-kcs-blue-50/75 px-3 py-2 text-left text-xs font-semibold text-kcs-blue-900 transition-colors hover:bg-white/80 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/40 dark:text-white",
                children: account.label
              },
              account.email
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: enterSuperAdmin,
                className: "flex w-full items-center justify-center gap-3 rounded-2xl border border-kcs-gold-300 bg-kcs-gold-400 px-4 py-3 font-semibold text-kcs-blue-950 transition-colors hover:bg-kcs-gold-500",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 18 }),
                  "Enter as Super Admin"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 text-center text-sm text-gray-500 dark:text-gray-400", children: [
              "Need admission support? ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admissions", className: "font-semibold text-kcs-blue-600 dark:text-kcs-blue-400", children: "Start your application" })
            ] })
          ] })
        }
      )
    ] }) }),
    resetOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-kcs-blue-950/75 p-4 backdrop-blur-sm", role: "dialog", "aria-modal": "true", "aria-label": "Password reset", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        className: "public-auth-panel w-full max-w-md rounded-2xl p-6 shadow-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-kcs-blue-100 text-kcs-blue-700 dark:bg-kcs-blue-900 dark:text-kcs-blue-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { size: 20 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-bold text-kcs-blue-900 dark:text-white", children: "Reset password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Enter your email to receive a secure link, or paste the token from the link to set a new password." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setResetOpen(false),
                className: "rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-kcs-blue-700 dark:hover:bg-kcs-blue-900",
                "aria-label": "Close password reset",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
              }
            )
          ] }),
          resetMessage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-900/20 dark:text-emerald-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle2, { size: 17, className: "mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: resetMessage })
          ] }),
          resetError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-300", children: resetError }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: resetForm.handleSubmit(handlePasswordReset), className: "mt-5 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-300", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16, className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...resetForm.register("email"), className: "input-kcs pl-11", placeholder: "name@kcsnexus.edu" })
              ] }),
              resetForm.formState.errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-500", children: resetForm.formState.errors.email.message })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-300", children: "Reset token" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...resetForm.register("token"), className: "input-kcs", placeholder: "Paste token from email link" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-300", children: "New password" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...resetForm.register("password"), type: "password", className: "input-kcs", placeholder: "8+ characters" }),
                resetForm.formState.errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-500", children: resetForm.formState.errors.password.message })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-300", children: "Confirm" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...resetForm.register("confirmPassword"), type: "password", className: "input-kcs", placeholder: "Repeat password" }),
                resetForm.formState.errors.confirmPassword && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-500", children: resetForm.formState.errors.confirmPassword.message })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: resetSubmitting, className: "btn-primary flex w-full items-center justify-center gap-2 py-3 disabled:opacity-60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 }),
              " ",
              resetSubmitting ? "Processing..." : "Continue"
            ] })
          ] })
        ]
      }
    ) })
  ] });
};
export {
  LoginPage as default
};
