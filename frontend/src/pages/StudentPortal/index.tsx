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
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar
} from 'recharts'

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
    <div className="flex h-screen bg-gray-50 dark:bg-kcs-blue-950 overflow-hidden">
      <PortalSidebar />

      <main className="flex-1 overflow-y-auto">
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
        </div>
      </main>
    </div>
  )
}

export default StudentPortal
