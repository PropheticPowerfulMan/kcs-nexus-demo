import { j as jsxRuntimeExports, ag as Plus, p as Send, aa as Brain, m as motion, i as MessageCircle, a6 as ShieldCheck, U as Users } from "./ui-Bam7IDm4.js";
import { r as reactExports } from "./vendor-Bh1Zu6gV.js";
import { P as PortalSidebar } from "./PortalSidebar-BG40mUrr.js";
import { b as useAuthStore } from "./index-QZ8_PQE4.js";
const initialPosts = [
  {
    id: "1",
    title: "Traffic and morning drop-off coordination",
    category: "Transport",
    content: "Several families are arriving late because the gate queue moves slowly after 7:20. Could we test staggered drop-off windows?",
    sentiment: "concerned",
    priority: "elevated",
    author: "Marie Kabongo",
    comments: [{ id: "c1", author: "Joel Mbuyi", content: "I agree. A separate lane for kindergarten families would help." }]
  },
  {
    id: "2",
    title: "Thank you for the science fair preparation",
    category: "Academics",
    content: "The teachers did an excellent job helping students prepare. The communication was clear and encouraging.",
    sentiment: "positive",
    priority: "normal",
    author: "Aline Tshimanga",
    comments: []
  }
];
const ParentForumPage = () => {
  const { user } = useAuthStore();
  const [posts, setPosts] = reactExports.useState(initialPosts);
  const [draft, setDraft] = reactExports.useState({ title: "", category: "Academics", content: "" });
  const [commentDrafts, setCommentDrafts] = reactExports.useState({});
  const report = reactExports.useMemo(() => {
    const urgent = posts.filter((post) => post.priority === "urgent").length;
    const concerned = posts.filter((post) => post.sentiment.includes("concern")).length;
    return {
      sentiment: urgent ? "high concern" : concerned ? "mixed but manageable" : "stable",
      summary: `${posts.length} active parent threads, ${concerned} concern signals, ${urgent} urgent threads.`
    };
  }, [posts]);
  const createPost = (event) => {
    event.preventDefault();
    if (!draft.title || !draft.content) return;
    const lower = `${draft.title} ${draft.content}`.toLowerCase();
    const urgent = ["urgent", "unsafe", "security", "danger"].some((word) => lower.includes(word));
    const concerned = ["problem", "late", "concern", "worried"].some((word) => lower.includes(word));
    setPosts((current) => [{
      id: crypto.randomUUID(),
      ...draft,
      sentiment: urgent ? "high-concern" : concerned ? "concerned" : "neutral",
      priority: urgent ? "urgent" : concerned ? "elevated" : "normal",
      author: `${(user == null ? void 0 : user.firstName) ?? "Parent"} ${(user == null ? void 0 : user.lastName) ?? ""}`.trim(),
      comments: []
    }, ...current]);
    setDraft({ title: "", category: "Academics", content: "" });
  };
  const addComment = (postId) => {
    const content = commentDrafts[postId];
    if (!content) return;
    setPosts((current) => current.map((post) => post.id === postId ? { ...post, comments: [...post.comments, { id: crypto.randomUUID(), author: (user == null ? void 0 : user.firstName) ?? "Parent", content }] } : post));
    setCommentDrafts((current) => ({ ...current, [postId]: "" }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "portal-shell flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PortalSidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-20 border-b border-gray-100 bg-white/85 px-6 py-4 backdrop-blur-md dark:border-kcs-blue-800 dark:bg-kcs-blue-950/85", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-kcs-blue-900 dark:text-white", children: "Parent Forum" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "A moderated space for parent conversations, watched by AI for decision support." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 p-6 xl:grid-cols-[0.85fr_1.35fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: createPost, className: "rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "text-kcs-blue-600", size: 20 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-kcs-blue-900 dark:text-white", children: "Start a Discussion" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: draft.title, onChange: (event) => setDraft({ ...draft, title: event.target.value }), placeholder: "Discussion title", className: "input-kcs mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: draft.category, onChange: (event) => setDraft({ ...draft, category: event.target.value }), className: "input-kcs mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Academics" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Transport" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Safety" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Communication" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Events" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: draft.content, onChange: (event) => setDraft({ ...draft, content: event.target.value }), placeholder: "Share your question, idea, or concern", className: "input-kcs min-h-32 resize-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-primary mt-4 inline-flex w-full items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 }),
              " Publish"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-kcs-blue-100 bg-kcs-blue-50 p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-kcs-blue-800 dark:text-kcs-blue-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 18 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold", children: "AI Conversation Monitor" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-kcs-blue-900 dark:text-kcs-blue-100", children: report.summary }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs font-semibold uppercase tracking-wide text-kcs-blue-600 dark:text-kcs-blue-300", children: [
              "Current pulse: ",
              report.sentiment
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "space-y-4", children: posts.map((post, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.article,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: index * 0.04 },
            className: "rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex flex-wrap items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-kcs-blue-600 dark:text-kcs-blue-300", children: post.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-bold text-kcs-blue-900 dark:text-white", children: post.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-400", children: [
                    "Started by ",
                    post.author
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-3 py-1 text-xs font-semibold ${post.priority === "urgent" ? "bg-red-100 text-red-700" : post.priority === "elevated" ? "bg-kcs-gold-100 text-kcs-gold-700" : "bg-green-100 text-green-700"}`, children: post.priority })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-gray-600 dark:text-gray-300", children: post.content }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-4 text-xs text-gray-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 14 }),
                  " ",
                  post.comments.length,
                  " comments"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 14 }),
                  " AI: ",
                  post.sentiment
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 14 }),
                  " Parent visible"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2", children: [
                post.comments.map((comment) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-gray-50 p-3 text-sm dark:bg-kcs-blue-800/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-kcs-blue-900 dark:text-white", children: [
                    comment.author,
                    ": "
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: comment.content })
                ] }, comment.id)),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: commentDrafts[post.id] ?? "", onChange: (event) => setCommentDrafts({ ...commentDrafts, [post.id]: event.target.value }), placeholder: "Reply to this discussion", className: "input-kcs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => addComment(post.id), className: "rounded-xl bg-kcs-blue-700 px-4 text-white hover:bg-kcs-blue-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 }) })
                ] })
              ] })
            ]
          },
          post.id
        )) })
      ] })
    ] })
  ] });
};
export {
  ParentForumPage as default
};
