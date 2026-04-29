import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  LayoutDashboard, BarChart3, FileText, Calendar, Brain,
  Bell, BookOpen, TrendingUp, Award, Clock, CheckCircle2,
  AlertCircle, ChevronRight, MessageSquare, User
} from 'lucide-react'
import { useAuthStore } from '@/store/authStore'
import PortalSidebar from '@/components/layout/PortalSidebar'
import PortalSectionPanel from '@/components/shared/PortalSectionPanel'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar
} from 'recharts'
import {
  academicContext,
  announcements as ecosystemAnnouncements,
  assignments as ecosystemAssignments,
  attendanceAnalytics,
  events as ecosystemEvents,
  grades as ecosystemGrades,
  internalThreads,
  lmsResources,
  reportCards,
  students as ecosystemStudents,
  transcripts,
} from '@/data/schoolEcosystem'

const performanceData = [
  { month: 'Sep', gpa: 3.2 },
  { month: 'Oct', gpa: 3.4 },
  { month: 'Nov', gpa: 3.3 },
  { month: 'Dec', gpa: 3.6 },
  { month: 'Jan', gpa: 3.5 },
  { month: 'Feb', gpa: 3.7 },
  { month: 'Mar', gpa: 3.8 },
  { month: 'Apr', gpa: 3.9 },
]

const subjectGrades = [
  { subject: 'Math', grade: 92, letter: 'A-' },
  { subject: 'English', grade: 88, letter: 'B+' },
  { subject: 'Science', grade: 95, letter: 'A' },
  { subject: 'History', grade: 85, letter: 'B' },
  { subject: 'French', grade: 90, letter: 'A-' },
  { subject: 'Bible', grade: 97, letter: 'A+' },
]

const assignments = [
  { id: 1, title: 'AP Calculus Problem Set #8', course: 'Mathematics', due: 'Tomorrow, 11:59 PM', status: 'pending', priority: 'high' },
  { id: 2, title: 'Essay: The Congo Independence Movement', course: 'History', due: 'Apr 25, 11:59 PM', status: 'pending', priority: 'medium' },
  { id: 3, title: 'Science Lab Report — Photosynthesis', course: 'Biology', due: 'Apr 23', status: 'submitted', priority: 'low' },
  { id: 4, title: 'French Oral Presentation', course: 'French', due: 'Apr 22', status: 'graded', priority: 'low' },
]

const schedule = [
  { time: '7:45 AM', subject: 'Bible & Devotions', room: 'Homeroom', teacher: 'Mrs. Smith' },
  { time: '8:15 AM', subject: 'AP Calculus', room: 'Room 204', teacher: 'Mr. Belanger' },
  { time: '9:15 AM', subject: 'English Literature', room: 'Room 110', teacher: 'Mrs. Diallo' },
  { time: '10:15 AM', subject: 'AP Biology', room: 'Lab 3', teacher: 'Dr. Mukendi' },
  { time: '11:30 AM', subject: 'Lunch Break', room: 'Cafeteria', teacher: '' },
  { time: '12:30 PM', subject: 'World History', room: 'Room 305', teacher: 'Mr. Rivera' },
  { time: '1:30 PM', subject: 'French Language', room: 'Room 108', teacher: 'Mrs. Nkosi' },
  { time: '2:30 PM', subject: 'Free Study / AI Tutor', room: 'Library', teacher: '' },
]

const notifications = [
  { id: 1, type: 'warning', message: 'AP Calculus exam scheduled for May 3rd — 2 weeks away', time: '2h ago' },
  { id: 2, type: 'success', message: 'French Oral Presentation graded: 90/100 — Excellent!', time: '5h ago' },
  { id: 3, type: 'info', message: 'Parent-Teacher Conference: May 20th, 1 PM — Parent notified', time: '1d ago' },
]

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  submitted: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  graded: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  late: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
}

const priorityColors: Record<string, string> = {
  high: 'border-l-red-500',
  medium: 'border-l-yellow-500',
  low: 'border-l-green-500',
}

const StudentPortal = () => {
  const { user } = useAuthStore()
  const [activeView, setActiveView] = useState<'dashboard' | 'grades' | 'assignments' | 'schedule' | 'ai-tutor'>('dashboard')

  return (
    <div className="portal-shell flex">
      <PortalSidebar />

      <main>
        {/* Top Bar */}
        <div className="sticky top-0 z-20 bg-white/80 dark:bg-kcs-blue-950/80 backdrop-blur-md border-b border-gray-100 dark:border-kcs-blue-800 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold font-display text-kcs-blue-900 dark:text-white">
                Good morning, {user?.firstName}! 👋
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/portal/student/ai-tutor" className="btn-gold text-sm py-2 flex items-center gap-2">
                <Brain size={16} /> AI Tutor
              </Link>
              <div className="relative">
                <button className="p-2 rounded-xl bg-gray-100 dark:bg-kcs-blue-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-kcs-blue-700 transition-colors">
                  <Bell size={18} />
                  <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full text-xs" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <PortalSectionPanel />

          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-3 font-bold text-kcs-blue-900 dark:text-white">Academic Identity</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {ecosystemStudents[0].name} • {ecosystemStudents[0].grade} {ecosystemStudents[0].section} • {academicContext.term}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{ecosystemStudents[0].aiInsight}</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-3 font-bold text-kcs-blue-900 dark:text-white">School Alerts</h2>
              <div className="space-y-2">
                {ecosystemAnnouncements.filter((item) => item.audience.includes('student')).slice(0, 3).map((item) => (
                  <div key={item.id} className="rounded-xl bg-gray-50 p-3 text-sm dark:bg-kcs-blue-800/30">
                    <p className="font-semibold text-kcs-blue-900 dark:text-white">{item.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-3 font-bold text-kcs-blue-900 dark:text-white">AI Learning Coach</h2>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                Build a study plan, revise difficult topics, generate practice questions, and prepare for {academicContext.nextExamWindow}.
              </p>
              <Link to="/portal/student/ai-tutor" className="mt-4 inline-flex w-full justify-center rounded-xl bg-kcs-blue-700 px-4 py-3 text-sm font-semibold text-white hover:bg-kcs-blue-800">
                Open AI Tutor
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Current GPA', value: '3.9', sub: '+0.1 this semester', icon: Award, color: 'text-kcs-gold-600', bg: 'bg-kcs-gold-50 dark:bg-kcs-gold-900/20' },
              { label: 'Attendance', value: '97%', sub: '2 absences this year', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/20' },
              { label: 'Assignments Due', value: '2', sub: 'This week', icon: FileText, color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-900/20' },
              { label: 'Rank', value: '#5', sub: 'Out of 112 students', icon: TrendingUp, color: 'text-kcs-blue-600', bg: 'bg-kcs-blue-50 dark:bg-kcs-blue-900/20' },
            ].map(({ label, value, sub, icon: Icon, color, bg }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-kcs-blue-900/50 rounded-2xl p-5 border border-gray-100 dark:border-kcs-blue-800 hover:shadow-kcs transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center`}>
                    <Icon size={20} className={color} />
                  </div>
                </div>
                <p className="text-2xl font-bold font-display text-kcs-blue-900 dark:text-white">{value}</p>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-300">{label}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Latest Teacher Updates</h2>
              <div className="space-y-3">
                {ecosystemGrades.filter((grade) => grade.studentId === 'stu-elise').slice(0, 3).map((grade) => (
                  <div key={`${grade.subject}-${grade.assessment}`} className="rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30">
                    <p className="text-sm font-semibold text-kcs-blue-900 dark:text-white">{grade.subject}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{grade.assessment} • {grade.score}/{grade.max} • {grade.teacher}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Deadlines</h2>
              <div className="space-y-3">
                {ecosystemAssignments.filter((item) => item.studentId === 'stu-elise').map((item) => (
                  <div key={item.id} className="rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-kcs-blue-900 dark:text-white">{item.title}</p>
                      <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold capitalize text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">{item.status}</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.subject} • {item.due}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Calendar</h2>
              <div className="space-y-3">
                {ecosystemEvents.filter((item) => item.target.includes('student')).map((item) => (
                  <div key={item.title} className="rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30">
                    <p className="text-sm font-semibold text-kcs-blue-900 dark:text-white">{item.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.date} • {item.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Report Card</h2>
              {reportCards.filter((card) => card.student === 'Elise Kabongo').map((card) => (
                <div key={card.student} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                  <p className="font-display text-3xl font-bold text-kcs-blue-900 dark:text-white">{card.average}%</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{card.term} • {card.principalStatus}</p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300">{card.teacherComment}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Transcript</h2>
              {transcripts.filter((item) => item.student === 'Elise Kabongo').map((item) => (
                <div key={item.student} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                  <p className="font-semibold text-kcs-blue-900 dark:text-white">{item.years}</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{item.credits} credits • GPA {item.cumulativeGpa}</p>
                  <p className="mt-2 text-xs font-semibold text-green-600 dark:text-green-300">{item.status}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Learning Resources</h2>
              <div className="space-y-3">
                {lmsResources.filter((item) => item.audience.includes('student')).slice(0, 2).map((resource) => (
                  <div key={resource.title} className="rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30">
                    <p className="text-sm font-semibold text-kcs-blue-900 dark:text-white">{resource.title}</p>
                    <p className="text-xs capitalize text-gray-500 dark:text-gray-400">{resource.type} • {resource.subject}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Messages</h2>
              <div className="space-y-3">
                {internalThreads.filter((thread) => thread.participants.includes('Rachel Kabongo') || thread.participants.includes('Administration')).slice(0, 2).map((thread) => (
                  <div key={thread.subject} className="rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30">
                    <p className="text-sm font-semibold text-kcs-blue-900 dark:text-white">{thread.subject}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{thread.channel} • {thread.unread} unread</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Performance Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-kcs-blue-900/50 rounded-2xl p-6 border border-gray-100 dark:border-kcs-blue-800">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-kcs-blue-900 dark:text-white">GPA Trend This Year</h2>
                <span className="badge-blue text-xs">Grade 11 — 2025/26</span>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="gpagradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1d4ed8" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#1d4ed8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(30,58,138,0.1)" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                  <YAxis domain={[2.5, 4.0]} tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: '#0f2352', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                    formatter={(value: number) => [`GPA: ${value}`, '']}
                  />
                  <Area type="monotone" dataKey="gpa" stroke="#1d4ed8" strokeWidth={2.5} fill="url(#gpagradient)" dot={{ r: 4, fill: '#1d4ed8' }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Notifications */}
            <div className="bg-white dark:bg-kcs-blue-900/50 rounded-2xl p-5 border border-gray-100 dark:border-kcs-blue-800">
              <h2 className="font-bold text-kcs-blue-900 dark:text-white mb-4 flex items-center gap-2">
                <Bell size={18} className="text-kcs-gold-500" /> Notifications
              </h2>
              <div className="space-y-3">
                {notifications.map((n) => (
                  <div key={n.id} className="flex gap-3 p-3 rounded-xl bg-gray-50 dark:bg-kcs-blue-800/50">
                    {n.type === 'warning' && <AlertCircle size={18} className="text-yellow-500 flex-shrink-0 mt-0.5" />}
                    {n.type === 'success' && <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-0.5" />}
                    {n.type === 'info' && <Bell size={18} className="text-kcs-blue-500 flex-shrink-0 mt-0.5" />}
                    <div>
                      <p className="text-xs text-gray-700 dark:text-gray-300">{n.message}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Subject Grades */}
            <div className="bg-white dark:bg-kcs-blue-900/50 rounded-2xl p-6 border border-gray-100 dark:border-kcs-blue-800">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-kcs-blue-900 dark:text-white flex items-center gap-2">
                  <BarChart3 size={18} className="text-kcs-blue-600 dark:text-kcs-blue-400" /> Current Grades
                </h2>
                <Link to="/portal/student/grades" className="text-xs text-kcs-blue-600 dark:text-kcs-blue-400 font-semibold flex items-center gap-1 hover:gap-1.5">
                  Full Report <ChevronRight size={14} />
                </Link>
              </div>
              <div className="space-y-3">
                {subjectGrades.map(({ subject, grade, letter }) => (
                  <div key={subject} className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-20 flex-shrink-0">{subject}</span>
                    <div className="flex-1 h-2 bg-gray-100 dark:bg-kcs-blue-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${grade}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full rounded-full ${
                          grade >= 90 ? 'bg-green-500' : grade >= 80 ? 'bg-kcs-blue-500' : grade >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                      />
                    </div>
                    <span className={`text-xs font-bold w-8 text-center px-1.5 py-0.5 rounded-md ${
                      grade >= 90 ? 'bg-green-100 text-green-700 dark:bg-green-900/30' :
                      grade >= 80 ? 'bg-kcs-blue-100 text-kcs-blue-700 dark:bg-kcs-blue-900/30' :
                      'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30'
                    }`}>
                      {letter}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Assignments */}
            <div className="bg-white dark:bg-kcs-blue-900/50 rounded-2xl p-6 border border-gray-100 dark:border-kcs-blue-800">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-kcs-blue-900 dark:text-white flex items-center gap-2">
                  <FileText size={18} className="text-orange-500" /> Assignments
                </h2>
                <Link to="/portal/student/assignments" className="text-xs text-kcs-blue-600 dark:text-kcs-blue-400 font-semibold flex items-center gap-1 hover:gap-1.5">
                  View All <ChevronRight size={14} />
                </Link>
              </div>
              <div className="space-y-3">
                {assignments.map((a) => (
                  <div
                    key={a.id}
                    className={`p-4 rounded-xl border-l-4 ${priorityColors[a.priority]} bg-gray-50 dark:bg-kcs-blue-800/50 border border-gray-100 dark:border-transparent`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-kcs-blue-900 dark:text-white truncate">{a.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{a.course}</p>
                        <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-400">
                          <Clock size={11} /> {a.due}
                        </div>
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 capitalize ${statusColors[a.status]}`}>
                        {a.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="bg-white dark:bg-kcs-blue-900/50 rounded-2xl p-6 border border-gray-100 dark:border-kcs-blue-800">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-kcs-blue-900 dark:text-white flex items-center gap-2">
                <Calendar size={18} className="text-purple-500" /> Today's Schedule
              </h2>
              <Link to="/portal/student/timetable" className="text-xs text-kcs-blue-600 dark:text-kcs-blue-400 font-semibold flex items-center gap-1 hover:gap-1.5">
                Full Timetable <ChevronRight size={14} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {schedule.map((item, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl border ${
                    i === 1 ? 'border-kcs-blue-300 bg-kcs-blue-50 dark:bg-kcs-blue-800/50 dark:border-kcs-blue-600' :
                    'border-gray-100 dark:border-kcs-blue-800 bg-gray-50 dark:bg-kcs-blue-800/20'
                  }`}
                >
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">{item.time}</p>
                  <p className={`text-sm font-semibold ${i === 1 ? 'text-kcs-blue-700 dark:text-kcs-blue-300' : 'text-kcs-blue-900 dark:text-white'}`}>
                    {item.subject}
                  </p>
                  {item.teacher && <p className="text-xs text-gray-500 dark:text-gray-400">{item.teacher}</p>}
                  <p className="text-xs text-gray-400 dark:text-gray-500">{item.room}</p>
                  {i === 1 && (
                    <span className="inline-block mt-1 text-xs bg-kcs-blue-200 dark:bg-kcs-blue-700 text-kcs-blue-700 dark:text-kcs-blue-200 px-2 py-0.5 rounded-full font-medium">
                      Current
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-bold text-kcs-blue-900 dark:text-white">Attendance Analytics</h2>
              <span className="badge-gold text-xs">Visible to parents and staff</span>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {attendanceAnalytics.map((item) => (
                <div key={item.scope} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                  <p className="font-semibold text-kcs-blue-900 dark:text-white">{item.scope}</p>
                  <p className="mt-2 text-2xl font-bold text-kcs-blue-700 dark:text-kcs-blue-300">{item.present}%</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.late}% late • {item.absent}% absent • {item.trend}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default StudentPortal
