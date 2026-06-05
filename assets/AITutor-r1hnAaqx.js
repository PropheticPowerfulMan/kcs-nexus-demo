import { j as jsxRuntimeExports, aa as Brain, ad as RefreshCw, m as motion, y as Lightbulb, ae as Copy, af as ThumbsUp, o as Loader2, p as Send } from "./ui-Bam7IDm4.js";
import { r as reactExports } from "./vendor-Bh1Zu6gV.js";
import { b as useAuthStore, f as aiAPI } from "./index-QZ8_PQE4.js";
import { P as PortalSidebar } from "./PortalSidebar-BG40mUrr.js";
const generateId = () => Math.random().toString(36).substring(2, 9);
const subjects = [
  { id: "math", name: "Mathematics", emoji: "📐" },
  { id: "science", name: "Science", emoji: "🔬" },
  { id: "english", name: "English", emoji: "📝" },
  { id: "history", name: "History", emoji: "🌍" },
  { id: "french", name: "French", emoji: "🇫🇷" },
  { id: "bible", name: "Bible & Ethics", emoji: "✝️" }
];
const quickPrompts = {
  math: [
    "Explain how to solve quadratic equations",
    "What is the derivative of x²?",
    "Help me understand integration",
    "Generate a practice problem on trigonometry"
  ],
  science: [
    "Explain photosynthesis step by step",
    "How does DNA replication work?",
    "What is Newton's second law?",
    "Generate a quiz on cell biology"
  ],
  english: [
    "Help me write a thesis statement",
    "Explain the themes in To Kill a Mockingbird",
    "How do I analyze literary devices?",
    "Review my essay introduction"
  ],
  history: [
    "Explain the causes of WWI",
    "What was the significance of the Berlin Conference?",
    "Describe the Civil Rights Movement",
    "Timeline of African independence movements"
  ],
  french: [
    'Conjugate the verb "avoir" in all tenses',
    "Explain French gender rules",
    "How do I use the subjunctive?",
    "Practice conversation in French"
  ],
  bible: [
    "Explain the Sermon on the Mount",
    "What are the fruits of the Spirit?",
    "How does Christianity view leadership?",
    "Key themes in the book of Proverbs"
  ]
};
const AITutorPage = () => {
  var _a;
  const { user } = useAuthStore();
  const [selectedSubject, setSelectedSubject] = reactExports.useState(null);
  const [messages, setMessages] = reactExports.useState([]);
  const [input, setInput] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [sessionStarted, setSessionStarted] = reactExports.useState(false);
  const messagesEndRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a2;
    (_a2 = messagesEndRef.current) == null ? void 0 : _a2.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const startSession = (subjectId) => {
    setSelectedSubject(subjectId);
    setSessionStarted(true);
    const subject = subjects.find((s) => s.id === subjectId);
    setMessages([
      {
        id: generateId(),
        role: "assistant",
        content: `Welcome, ${user == null ? void 0 : user.firstName}! I'm your AI Tutor for **${subject == null ? void 0 : subject.name}**. I'm here to help you understand concepts, solve problems, and prepare for exams.

You can:
• Ask me to explain any concept
• Request step-by-step problem solving
• Ask for practice exercises
• Get help preparing for tests

What would you like to work on today?`,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        subject: subjectId
      }
    ]);
  };
  const sendMessage = async (messageText) => {
    var _a2, _b;
    const text = messageText || input.trim();
    if (!text || isLoading) return;
    const userMessage = {
      id: generateId(),
      role: "user",
      content: text,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    try {
      const subject = subjects.find((s) => s.id === selectedSubject);
      const response = await aiAPI.tutor(
        (subject == null ? void 0 : subject.name) || "General",
        text,
        user == null ? void 0 : user.id
      );
      const aiContent = ((_b = (_a2 = response.data) == null ? void 0 : _a2.data) == null ? void 0 : _b.response) || "I apologize, I encountered an issue. Please try rephrasing your question.";
      const assistantMessage = {
        id: generateId(),
        role: "assistant",
        content: aiContent,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        subject: selectedSubject || void 0
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const fallbackContent = getFallbackTutorResponse(text, selectedSubject || "");
      setMessages((prev) => [
        ...prev,
        {
          id: generateId(),
          role: "assistant",
          content: fallbackContent,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }
      ]);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        var _a3;
        return (_a3 = inputRef.current) == null ? void 0 : _a3.focus();
      }, 100);
    }
  };
  const getFallbackTutorResponse = (question, subject) => {
    var _a2;
    const q = question.toLowerCase();
    if (q.includes("quadratic") || subject === "math" && q.includes("equation")) {
      return `**Solving Quadratic Equations** 📐

A quadratic equation has the form: **ax² + bx + c = 0**

**Method 1: Quadratic Formula**
x = (-b ± √(b² - 4ac)) / 2a

**Example:** Solve x² - 5x + 6 = 0
• a = 1, b = -5, c = 6
• x = (5 ± √(25 - 24)) / 2
• x = (5 ± 1) / 2
• **x = 3 or x = 2** ✅

**Method 2: Factoring**
x² - 5x + 6 = (x - 3)(x - 2) = 0

Would you like me to give you a practice problem?`;
    }
    if (q.includes("photosynthesis")) {
      return `**Photosynthesis Explained** 🔬

Photosynthesis is the process plants use to convert sunlight into food.

**The Equation:**
6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂

**Two Stages:**
1. **Light Reactions** (in Thylakoids)
   • Capture light energy
   • Split water molecules
   • Produce ATP and NADPH

2. **Calvin Cycle** (in Stroma)
   • Uses ATP and NADPH
   • Fixes CO₂ into glucose

**Key factors that affect rate:**
• Light intensity
• CO₂ concentration
• Temperature

Shall I generate some practice questions on this?`;
    }
    return `Great question! Let me help you with that.

This is a topic in **${((_a2 = subjects.find((s) => s.id === subject)) == null ? void 0 : _a2.name) || "your subject"}** that's important for your studies.

Here's how I'd approach this:

1. **First**, let's understand the core concept
2. **Then**, we'll look at examples
3. **Finally**, we'll practice together

Could you give me a bit more detail about what specifically you're struggling with? That way I can give you the most targeted explanation. 💡`;
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  const copyMessage = (content) => {
    navigator.clipboard.writeText(content);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "portal-shell flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PortalSidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex flex-col !overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-kcs-blue-950 border-b border-gray-100 dark:border-kcs-blue-800 px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl kcs-gradient flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 20, className: "text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold text-kcs-blue-900 dark:text-white font-display", children: "AI Tutor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: selectedSubject ? `Session: ${(_a = subjects.find((s) => s.id === selectedSubject)) == null ? void 0 : _a.name}` : "Personalized AI-powered learning support" })
          ] })
        ] }),
        sessionStarted && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              setSessionStarted(false);
              setSelectedSubject(null);
              setMessages([]);
            },
            className: "flex items-center gap-2 text-sm text-gray-500 hover:text-kcs-blue-600 dark:text-gray-400 dark:hover:text-kcs-blue-300 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 16 }),
              " New Session"
            ]
          }
        )
      ] }) }),
      !sessionStarted ? (
        /* Subject Selection */
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-4", children: "🧠" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold font-display text-kcs-blue-900 dark:text-white mb-2", children: [
              "Welcome to AI Tutor, ",
              user == null ? void 0 : user.firstName,
              "!"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 dark:text-gray-400", children: "Choose a subject to start a personalized learning session." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-4", children: subjects.map((subject) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              whileHover: { y: -4, scale: 1.02 },
              whileTap: { scale: 0.98 },
              onClick: () => startSession(subject.id),
              className: "p-6 bg-white dark:bg-kcs-blue-900/50 rounded-2xl border-2 border-gray-100 dark:border-kcs-blue-800 hover:border-kcs-blue-400 dark:hover:border-kcs-blue-500 hover:shadow-kcs transition-all duration-300 text-center group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3", children: subject.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-kcs-blue-900 dark:text-white group-hover:text-kcs-blue-700 dark:group-hover:text-kcs-blue-300 transition-colors", children: subject.name })
              ]
            },
            subject.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-5 rounded-2xl bg-kcs-blue-50 dark:bg-kcs-blue-900/30 border border-kcs-blue-100 dark:border-kcs-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-kcs-blue-900 dark:text-white mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { size: 18, className: "text-kcs-gold-500" }),
              " What can AI Tutor do?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
              "✅ Explain complex concepts step-by-step",
              "✅ Generate personalized practice problems",
              "✅ Review and improve your essays",
              "✅ Prepare targeted quiz questions",
              "✅ Provide study strategies",
              "✅ Answer questions in English or French"
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: item }, item)) })
          ] })
        ] }) })
      ) : (
        /* Chat Interface */
        /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-6 space-y-4", children: [
            messages.map((msg) => {
              var _a2;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${msg.role === "user" ? "kcs-gradient text-white" : "bg-kcs-blue-100 dark:bg-kcs-blue-800"}`, children: msg.role === "user" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold", children: (_a2 = user == null ? void 0 : user.firstName) == null ? void 0 : _a2[0] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 18, className: "text-kcs-blue-600 dark:text-kcs-blue-300" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[80%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col gap-1`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `rounded-2xl px-5 py-4 text-sm leading-relaxed ${msg.role === "user" ? "kcs-gradient text-white rounded-tr-sm" : "bg-white dark:bg-kcs-blue-900/50 text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-kcs-blue-800 rounded-tl-sm"}`,
                          style: { whiteSpace: "pre-line" },
                          children: msg.content
                        }
                      ),
                      msg.role === "assistant" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 px-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            onClick: () => copyMessage(msg.content),
                            className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",
                            title: "Copy",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 13 })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-gray-400 hover:text-green-500 transition-colors", title: "Helpful", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, { size: 13 }) })
                      ] })
                    ] })
                  ]
                },
                msg.id
              );
            }),
            isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-kcs-blue-100 dark:bg-kcs-blue-800 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 18, className: "text-kcs-blue-600 dark:text-kcs-blue-300" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-kcs-blue-900/50 border border-gray-100 dark:border-kcs-blue-800 rounded-2xl rounded-tl-sm px-5 py-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Loader2, { size: 16, className: "animate-spin text-kcs-blue-600 dark:text-kcs-blue-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-500 dark:text-gray-400", children: "AI Tutor is thinking..." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: messagesEndRef })
          ] }),
          messages.length <= 1 && selectedSubject && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-400 dark:text-gray-500 mb-2 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { size: 12 }),
              " Suggested topics:"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: (quickPrompts[selectedSubject] || []).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => sendMessage(p),
                disabled: isLoading,
                className: "text-xs px-3 py-2 bg-kcs-blue-50 dark:bg-kcs-blue-900/30 text-kcs-blue-700 dark:text-kcs-blue-300 rounded-xl hover:bg-kcs-blue-100 dark:hover:bg-kcs-blue-800/50 transition-colors border border-kcs-blue-100 dark:border-kcs-blue-800 disabled:opacity-50",
                children: p
              },
              p
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white dark:bg-kcs-blue-950 border-t border-gray-100 dark:border-kcs-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  ref: inputRef,
                  value: input,
                  onChange: (e) => setInput(e.target.value),
                  onKeyDown: handleKeyDown,
                  placeholder: "Ask your AI Tutor anything... (Enter to send, Shift+Enter for new line)",
                  rows: 2,
                  className: "flex-1 px-4 py-3 rounded-xl bg-gray-50 dark:bg-kcs-blue-900/50 border border-gray-200 dark:border-kcs-blue-700 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kcs-blue-500 resize-none",
                  disabled: isLoading
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => sendMessage(),
                  disabled: !input.trim() || isLoading,
                  className: "w-12 h-12 rounded-xl kcs-gradient flex items-center justify-center text-white disabled:opacity-50 hover:shadow-kcs transition-all duration-200 hover:scale-105 active:scale-95 flex-shrink-0",
                  children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader2, { size: 18, className: "animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 18 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-2 text-center", children: "AI Tutor uses OpenAI to provide personalized academic support." })
          ] })
        ] })
      )
    ] })
  ] });
};
export {
  AITutorPage as default
};
