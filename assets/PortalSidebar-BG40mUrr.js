import { j as jsxRuntimeExports, a as Globe, S as Sun, M as Moon, X, c as Menu, A as AnimatePresence, m as motion, a2 as ChevronRight, aC as ChevronLeft, aD as LayoutDashboard, G as GraduationCap, U as Users, ai as FileSpreadsheet, aq as Megaphone, ap as ClipboardCheck, ak as AlertTriangle, B as BookOpen, $ as ClipboardList, aE as WalletCards, a0 as FileText, I as Image, aa as Brain, v as Shield, aw as Settings, aF as LibraryBig, ah as MessageSquare, ac as BarChart3, w as Calendar, av as UserCheck, H as Home, aG as LogOut } from "./ui-Bam7IDm4.js";
import { u as useLocation, f as useNavigate, r as reactExports, L as Link, N as NavLink } from "./vendor-Bh1Zu6gV.js";
import { u as useTranslation, b as useAuthStore, e as useUIStore } from "./index-QZ8_PQE4.js";
const getNavItems = (role, t) => {
  const dashboardPath = role === "admin" ? "/admin" : `/portal/${role}`;
  const base = [
    { to: dashboardPath, label: t("portalNav.dashboard"), icon: LayoutDashboard }
  ];
  switch (role) {
    case "student":
      return [
        ...base,
        { to: "/portal/student/grades", label: t("portalNav.myGrades"), icon: BarChart3 },
        { to: "/portal/student/assignments", label: t("portalNav.assignments"), icon: FileText },
        { to: "/portal/student/timetable", label: t("portalNav.timetable"), icon: Calendar },
        { to: "/portal/student/ai-tutor", label: t("portalNav.aiTutor"), icon: Brain },
        { to: "/portal/student/forum", label: t("portalNav.studentForum"), icon: MessageSquare },
        { to: "/portal/student/messages", label: t("portalNav.messages"), icon: MessageSquare },
        { to: "/portal/student/profile", label: t("portalNav.myProfile"), icon: UserCheck }
      ];
    case "parent":
      return [
        ...base,
        { to: "/portal/parent/performance", label: t("portalNav.performance"), icon: BarChart3 },
        { to: "/portal/parent/forum", label: t("portalNav.parentForum"), icon: MessageSquare },
        { to: "/portal/parent/messages", label: t("portalNav.messages"), icon: MessageSquare },
        { to: "/portal/parent/calendar", label: t("portalNav.calendar"), icon: Calendar },
        { to: "/portal/parent/finance", label: t("portalNav.fees"), icon: WalletCards },
        { to: "/portal/parent/profile", label: t("portalNav.profile"), icon: UserCheck }
      ];
    case "teacher":
      return [
        ...base,
        { to: "/portal/teacher/courses", label: t("portalNav.myCourses"), icon: BookOpen },
        { to: "/portal/teacher/students", label: t("portalNav.students"), icon: Users },
        { to: "/portal/teacher/attendance", label: t("portalNav.attendance"), icon: ClipboardCheck },
        { to: "/portal/teacher/assignments", label: t("portalNav.assignments"), icon: FileText },
        { to: "/portal/teacher/grades", label: t("portalNav.gradebook"), icon: BarChart3 },
        { to: "/portal/teacher/reports", label: t("portalNav.reports"), icon: FileSpreadsheet },
        { to: "/portal/teacher/discipline", label: t("portalNav.disciplineReport"), icon: AlertTriangle },
        { to: "/portal/teacher/messages", label: t("portalNav.messages"), icon: MessageSquare }
      ];
    case "staff":
      return [
        ...base,
        { to: "/portal/staff/records", label: t("portalNav.records"), icon: LibraryBig },
        { to: "/portal/staff/admissions", label: t("portalNav.admissions"), icon: ClipboardList },
        { to: "/portal/staff/announcements", label: t("portalNav.announcements"), icon: Megaphone },
        { to: "/portal/staff/reports", label: t("portalNav.reports"), icon: FileSpreadsheet },
        { to: "/portal/staff/finance", label: t("portalNav.feeTracking"), icon: WalletCards },
        { to: "/portal/staff/messages", label: t("portalNav.messages"), icon: MessageSquare, badge: 12 },
        { to: "/portal/staff/permissions", label: t("portalNav.permissions"), icon: Shield }
      ];
    case "admin":
      return [
        ...base,
        { to: "/admin/students", label: t("portalNav.students"), icon: GraduationCap },
        { to: "/admin/parents", label: t("portalNav.parents"), icon: Users },
        { to: "/admin/transcripts", label: t("portalNav.transcripts"), icon: FileSpreadsheet },
        { to: "/admin/communications", label: t("portalNav.communications"), icon: Megaphone },
        { to: "/admin/staff-attendance", label: t("portalNav.staffAttendance"), icon: ClipboardCheck },
        { to: "/admin/discipline", label: t("portalNav.discipline"), icon: AlertTriangle },
        { to: "/admin/teachers", label: t("portalNav.teachers"), icon: Users },
        { to: "/admin/courses", label: t("portalNav.courses"), icon: BookOpen },
        { to: "/admin/admissions", label: t("portalNav.admissions"), icon: ClipboardList },
        { to: "/admin/finance", label: t("portalNav.finance"), icon: WalletCards },
        { to: "/admin/reports", label: t("portalNav.reports"), icon: FileSpreadsheet },
        { to: "/admin/news", label: t("portalNav.newsEvents"), icon: FileText },
        { to: "/admin/media", label: t("portalNav.media"), icon: Image },
        { to: "/admin/forum-insights", label: t("portalNav.parentAiReport"), icon: Brain },
        { to: "/admin/student-forum-insights", label: t("portalNav.studentAiReport"), icon: Shield },
        { to: "/admin/analytics", label: t("portalNav.aiAnalytics"), icon: Brain },
        { to: "/admin/settings", label: t("portalNav.settings"), icon: Settings }
      ];
    default:
      return base;
  }
};
const PortalSidebar = () => {
  var _a, _b, _c, _d;
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const mobileSidebarRef = reactExports.useRef(null);
  const mobileSidebarButtonRef = reactExports.useRef(null);
  const { user, logout } = useAuthStore();
  const {
    sidebarCollapsed,
    sidebarOpen,
    theme,
    toggleTheme,
    language,
    setLanguage,
    toggleSidebar,
    toggleSidebarCollapse,
    setSidebarOpen
  } = useUIStore();
  reactExports.useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname, setSidebarOpen]);
  reactExports.useEffect(() => {
    return () => {
      setSidebarOpen(false);
      document.body.style.overflow = "";
    };
  }, [setSidebarOpen]);
  reactExports.useEffect(() => {
    if (!sidebarOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const closeOnOutsidePointer = (event) => {
      const eventPath = event.composedPath();
      if (mobileSidebarRef.current && eventPath.includes(mobileSidebarRef.current) || mobileSidebarButtonRef.current && eventPath.includes(mobileSidebarButtonRef.current)) {
        return;
      }
      setSidebarOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("pointerdown", closeOnOutsidePointer, true);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("pointerdown", closeOnOutsidePointer, true);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [sidebarOpen, setSidebarOpen]);
  if (!user) return null;
  const navItems = getNavItems(user.role, t);
  const currentLanguage = (i18n.resolvedLanguage || i18n.language || language).startsWith("fr") ? "fr" : "en";
  const nextLanguage = currentLanguage === "en" ? "fr" : "en";
  const toggleLanguage = () => {
    setLanguage(nextLanguage);
    void i18n.changeLanguage(nextLanguage);
  };
  const roleColor = {
    admin: "bg-purple-600",
    staff: "bg-slate-700",
    teacher: "bg-green-600",
    student: "bg-kcs-blue-600",
    parent: "bg-orange-500"
  }[user.role];
  const roleName = {
    admin: t("roles.admin"),
    staff: t("roles.staff"),
    teacher: t("roles.teacher"),
    student: t("roles.student"),
    parent: t("roles.parent")
  }[user.role];
  const renderNavigation = (isMobile = false) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: `${isMobile ? "min-h-0 flex-1 space-y-1 overflow-y-auto px-3 py-2" : "flex-1 space-y-1 overflow-y-auto p-3"}`, children: navItems.map(({ to, label, icon: Icon, badge }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      NavLink,
      {
        to,
        end: to === (user.role === "admin" ? "/admin" : `/portal/${user.role}`),
        onClick: (event) => {
          event.preventDefault();
          setSidebarOpen(false);
          document.body.style.overflow = "";
          navigate(to);
        },
        className: ({ isActive }) => `sidebar-link ${isMobile ? "sidebar-link-mobile" : ""} ${isActive ? "active" : ""} ${!isMobile && sidebarCollapsed ? "justify-center px-0" : ""}`,
        title: !isMobile && sidebarCollapsed ? label : void 0,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, className: "flex-shrink-0" }),
          (isMobile || !sidebarCollapsed) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1 truncate", children: label }),
          badge && badge > 0 && (isMobile || !sidebarCollapsed) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-xs text-white", children: badge > 99 ? "99+" : badge })
        ]
      },
      to
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: isMobile ? "nexus-mobile-menu-actions" : "space-y-1 border-t border-gray-100 p-3 dark:border-kcs-blue-800", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: toggleLanguage,
          className: isMobile ? "nexus-mobile-action" : `sidebar-link w-full ${!sidebarCollapsed ? "" : "justify-center gap-1 px-0"}`,
          title: !isMobile && sidebarCollapsed ? nextLanguage === "fr" ? "Français" : "English" : void 0,
          "aria-label": t("common.language"),
          children: !isMobile && sidebarCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: nextLanguage.toUpperCase() }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 18, className: "flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: nextLanguage.toUpperCase() })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: toggleTheme,
          className: isMobile ? "nexus-mobile-action" : `sidebar-link w-full ${!sidebarCollapsed ? "" : "justify-center px-0"}`,
          title: !isMobile && sidebarCollapsed ? theme === "dark" ? t("common.lightMode") : t("common.darkMode") : void 0,
          children: [
            theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 18, className: "flex-shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 18, className: "flex-shrink-0" }),
            (isMobile || !sidebarCollapsed) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: theme === "dark" ? t("common.lightMode") : t("common.darkMode") })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/",
          onClick: () => isMobile && setSidebarOpen(false),
          className: isMobile ? "nexus-mobile-action" : `sidebar-link ${!sidebarCollapsed ? "" : "justify-center px-0"}`,
          title: !isMobile && sidebarCollapsed ? t("common.mainWebsite") : void 0,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Home, { size: 18, className: "flex-shrink-0" }),
            (isMobile || !sidebarCollapsed) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("common.mainWebsite") })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => {
            setSidebarOpen(false);
            logout();
            navigate("/login", { replace: true });
          },
          className: isMobile ? "nexus-mobile-action nexus-mobile-action-danger" : `sidebar-link w-full text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 ${!sidebarCollapsed ? "" : "justify-center px-0"}`,
          title: !isMobile && sidebarCollapsed ? t("nav.logout") : void 0,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 18, className: "flex-shrink-0" }),
            (isMobile || !sidebarCollapsed) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("nav.logout") })
          ]
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-x-0 top-0 z-50 px-2.5 pt-[max(0.625rem,env(safe-area-inset-top))] sm:px-4 lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nexus-mobile-dashboard-bar flex min-h-14 items-center justify-between gap-2 rounded-[24px] border px-2.5 py-2 sm:rounded-[28px] sm:px-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", onClick: () => setSidebarOpen(false), className: "flex min-w-0 flex-1 items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full kcs-gradient shadow-kcs ring-2 ring-white/80 dark:ring-kcs-blue-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-bold text-white", children: "KCS" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate font-display text-[13px] font-bold leading-tight text-kcs-blue-900 dark:text-white sm:text-sm", children: "KCS Nexus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-[11px] font-semibold leading-tight text-kcs-gold-700 dark:text-kcs-gold-300 sm:text-xs", children: roleName })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: toggleLanguage,
            className: "flex h-10 flex-shrink-0 items-center justify-center gap-1 rounded-full border border-kcs-blue-100 bg-white/70 px-2 text-kcs-blue-700 shadow-sm transition-colors hover:bg-kcs-blue-50 dark:border-white/10 dark:bg-kcs-blue-900/45 dark:text-kcs-blue-100 dark:hover:bg-kcs-blue-800",
            "aria-label": t("common.language"),
            title: nextLanguage === "fr" ? "Français" : "English",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 16 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: nextLanguage.toUpperCase() })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: toggleTheme,
            className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-kcs-blue-100 bg-white/70 text-kcs-blue-700 shadow-sm transition-colors hover:bg-kcs-blue-50 dark:border-white/10 dark:bg-kcs-blue-900/45 dark:text-kcs-blue-100 dark:hover:bg-kcs-blue-800",
            "aria-label": theme === "dark" ? t("common.lightMode") : t("common.darkMode"),
            title: theme === "dark" ? t("common.lightMode") : t("common.darkMode"),
            children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 18 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            ref: mobileSidebarButtonRef,
            onClick: toggleSidebar,
            className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-kcs-blue-700 text-white shadow-kcs transition-colors hover:bg-kcs-blue-800 dark:bg-kcs-gold-600 dark:text-kcs-blue-950 dark:hover:bg-kcs-gold-500",
            "aria-label": sidebarOpen ? t("common.close") : t("nav.portal"),
            children: sidebarOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 20 })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "nexus-mobile-menu-overlay fixed inset-x-0 bottom-0 z-[60] bg-kcs-blue-950/45 p-3 backdrop-blur-sm lg:hidden",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.08 },
        onPointerDown: () => setSidebarOpen(false),
        onClick: () => setSidebarOpen(false),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.aside,
          {
            ref: mobileSidebarRef,
            className: "nexus-mobile-menu-panel nexus-glass-rail flex w-[min(calc(100vw-1.5rem),372px)] flex-col overflow-hidden rounded-[26px] border shadow-2xl shadow-kcs-blue-950/24",
            initial: { x: "-100%" },
            animate: { x: 0 },
            exit: { x: "-100%" },
            transition: { duration: 0.16, ease: "easeOut" },
            onPointerDown: (event) => event.stopPropagation(),
            onClick: (event) => event.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-10 border-b border-gray-100 bg-white/42 p-3 backdrop-blur-xl dark:border-kcs-blue-800 dark:bg-kcs-blue-950/42", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-2 h-1 w-10 rounded-full bg-kcs-blue-200 dark:bg-kcs-blue-700", "aria-hidden": "true" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[24px] border border-white/70 bg-white/60 p-3 shadow-inner shadow-white/40 backdrop-blur-xl dark:border-white/10 dark:bg-kcs-blue-900/40 dark:shadow-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${roleColor} text-sm font-bold text-white ring-4 ring-white dark:ring-kcs-blue-950`, children: [
                    (_a = user.firstName) == null ? void 0 : _a[0],
                    (_b = user.lastName) == null ? void 0 : _b[0]
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "truncate text-sm font-semibold text-gray-900 dark:text-white", children: [
                      user.firstName,
                      " ",
                      user.lastName
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-xs capitalize text-gray-500 dark:text-gray-400", children: user.role })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setSidebarOpen(false),
                      className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-kcs-blue-100 bg-white/80 text-kcs-blue-700 shadow-sm transition hover:bg-kcs-blue-50 dark:border-white/10 dark:bg-kcs-blue-900/70 dark:text-kcs-blue-100 dark:hover:bg-kcs-blue-800",
                      "aria-label": t("common.close"),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
                    }
                  )
                ] }) })
              ] }),
              renderNavigation(true)
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.aside,
      {
        animate: { width: sidebarCollapsed ? 72 : 260 },
        initial: { width: 0, opacity: 0 },
        exit: { width: 0, opacity: 0 },
        transition: { duration: 0.3, ease: "easeInOut" },
        className: "nexus-glass-rail sticky top-0 z-30 hidden h-screen flex-col overflow-hidden border-r lg:flex",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${sidebarCollapsed ? "px-3 py-4" : "p-4"} border-b border-gray-100 dark:border-kcs-blue-800`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex ${sidebarCollapsed ? "flex-col items-center gap-3" : "items-center gap-2"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/",
                className: `flex min-w-0 items-center gap-3 ${sidebarCollapsed ? "flex-none justify-center" : "flex-1"}`,
                title: sidebarCollapsed ? "KCS Nexus" : void 0,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl kcs-gradient shadow-kcs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold text-sm font-display", children: "KCS" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !sidebarCollapsed && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -10 },
                      animate: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: -10 },
                      transition: { duration: 0.2 },
                      className: "overflow-hidden",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-xs leading-tight font-display text-kcs-blue-900 dark:text-white whitespace-nowrap", children: "KCS Nexus" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-kcs-gold-600 dark:text-kcs-gold-400 whitespace-nowrap", children: roleName })
                      ]
                    }
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: toggleTheme,
                className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/70 text-kcs-blue-700 shadow-sm transition-colors hover:bg-kcs-blue-50 dark:border-white/10 dark:bg-kcs-blue-900/45 dark:text-kcs-blue-200 dark:hover:bg-kcs-blue-800",
                "aria-label": theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre",
                title: theme === "dark" ? "Mode clair" : "Mode sombre",
                children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 18 })
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `border-b border-white/60 p-4 dark:border-white/10 ${sidebarCollapsed ? "items-center" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-3 rounded-[22px] border border-white/60 bg-white/50 p-2.5 backdrop-blur-xl dark:border-white/10 dark:bg-kcs-blue-900/30 ${sidebarCollapsed ? "justify-center" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-10 h-10 rounded-xl ${roleColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`, children: [
              (_c = user.firstName) == null ? void 0 : _c[0],
              (_d = user.lastName) == null ? void 0 : _d[0]
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !sidebarCollapsed && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -10 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -10 },
                className: "min-w-0 flex-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-gray-900 dark:text-white truncate", children: [
                    user.firstName,
                    " ",
                    user.lastName
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400 capitalize truncate", children: user.role })
                ]
              }
            ) })
          ] }) }),
          renderNavigation(),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: toggleSidebarCollapse,
              className: "absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 bg-white dark:bg-kcs-blue-800 border border-gray-200 dark:border-kcs-blue-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-kcs-blue-600 dark:hover:text-kcs-blue-300 transition-all duration-200 shadow-sm z-10",
              children: sidebarCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 12 })
            }
          )
        ]
      }
    ) })
  ] });
};
export {
  PortalSidebar as P
};
