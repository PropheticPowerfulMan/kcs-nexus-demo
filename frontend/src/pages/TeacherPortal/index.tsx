import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Bell, BookOpen, Brain, Calendar, CheckCircle2, ChevronRight,
  Clock, FileText, GraduationCap, MessageSquare, TrendingUp, Users
} from 'lucide-react'
import PortalSidebar from '@/components/layout/PortalSidebar'
import { useAuthStore } from '@/store/authStore'
import {
  aiSignals,
  assignments as ecosystemAssignments,
  attendance as ecosystemAttendance,
  grades as ecosystemGrades,
  messages as ecosystemMessages,
  schedules as ecosystemSchedules,
  students as ecosystemStudents,
} from '@/data/schoolEcosystem'

const todayClasses = [
  { time: '7:45 AM', course: 'Grade 11 AP Biology', room: 'Lab 3', students: 24 },
  { time: '9:15 AM', course: 'Grade 10 Biology', room: 'Room 204', students: 28 },
  { time: '11:00 AM', course: 'Grade 9 General Science', room: 'Lab 1', students: 31 },
  { time: '1:30 PM', course: 'Teacher Mentorship Block', room: 'Faculty Lounge', students: 6 },
]

const gradingQueue = [
  { id: 1, title: 'AP Biology Lab Reports', className: 'Grade 11', pending: 18, due: 'Today' },
  { id: 2, title: 'Genetics Quiz', className: 'Grade 10', pending: 27, due: 'Tomorrow' },
  { id: 3, title: 'Science Fair Proposal', className: 'Grade 9', pending: 11, due: 'Apr 24' },
]

const studentAlerts = [
  { student: 'Naomi K.', note: 'Attendance dropped to 84% over the last 3 weeks.', severity: 'high' },
  { student: 'Jordan M.', note: 'Strong performance growth. Candidate for science fair coaching.', severity: 'positive' },
  { student: 'David K.', note: 'Needs intervention in algebra foundations impacting science assessments.', severity: 'medium' },
]

const messages = [
  { id: 1, from: 'Admissions Office', subject: 'Prospective Family Shadow Day', time: '35m ago' },
  { id: 2, from: 'Principal Carter', subject: 'Faculty meeting agenda for Friday', time: '2h ago' },
  { id: 3, from: 'Parent of Elise K.', subject: 'Question about AP exam preparation', time: '5h ago' },
]

const TeacherPortal = () => {
  const { user } = useAuthStore()

  return (
    <div className="portal-shell flex">
      <PortalSidebar />

      <main>
        <div className="sticky top-0 z-20 border-b border-gray-100 bg-white/85 px-6 py-4 backdrop-blur-md dark:border-kcs-blue-800 dark:bg-kcs-blue-950/85">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-xl font-bold text-kcs-blue-900 dark:text-white">
                Faculty Dashboard, {user?.firstName}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Today&apos;s overview for teaching, assessment, and student support.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/portal/teacher/messages" className="btn-primary text-sm py-2">
                Inbox
              </Link>
              <Link to="/portal/student/ai-tutor" className="btn-gold text-sm py-2 flex items-center gap-2">
                <Brain size={16} /> AI Insights
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-6">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-3 font-bold text-kcs-blue-900 dark:text-white">Teacher Command Center</h2>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                Attendance, grades, assignments, behavior notes, parent communication, and AI support are connected to parent, student, staff, and Super Admin dashboards.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-3 font-bold text-kcs-blue-900 dark:text-white">AI Teaching Assistant</h2>
              <div className="grid gap-2 text-sm">
                {['Generate lesson plan', 'Create quiz', 'Detect struggling students', 'Draft report-card comments'].map((item) => (
                  <button key={item} className="rounded-xl bg-gray-50 px-3 py-2 text-left font-semibold text-kcs-blue-900 hover:bg-kcs-blue-50 dark:bg-kcs-blue-800/30 dark:text-white">
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-3 font-bold text-kcs-blue-900 dark:text-white">Cross-role Alerts</h2>
              <div className="space-y-2">
                {aiSignals.filter((signal) => signal.roles.includes('teacher')).map((signal) => (
                  <div key={signal.title} className="rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30">
                    <p className="text-sm font-semibold text-kcs-blue-900 dark:text-white">{signal.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{signal.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { label: 'Classes Today', value: '4', sub: '83 students total', icon: Calendar, tone: 'bg-kcs-blue-50 text-kcs-blue-700 dark:bg-kcs-blue-900/30 dark:text-kcs-blue-300' },
              { label: 'Pending Grades', value: '56', sub: 'Across 3 assessments', icon: FileText, tone: 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' },
              { label: 'At-Risk Students', value: '3', sub: 'Require follow-up', icon: Bell, tone: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300' },
              { label: 'Average Class Score', value: '87%', sub: '+4% vs last month', icon: TrendingUp, tone: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50"
                >
                  <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${item.tone}`}>
                    <Icon size={18} />
                  </div>
                  <p className="font-display text-2xl font-bold text-kcs-blue-900 dark:text-white">{item.value}</p>
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-300">{item.label}</p>
                  <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">{item.sub}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Attendance Taken</h2>
              <div className="space-y-3">
                {ecosystemAttendance.map((record) => {
                  const student = ecosystemStudents.find((item) => item.id === record.studentId)
                  return (
                    <div key={`${record.studentId}-${record.date}`} className="rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30">
                      <p className="text-sm font-semibold text-kcs-blue-900 dark:text-white">{student?.name}</p>
                      <p className="text-xs capitalize text-gray-500 dark:text-gray-400">{record.status} • visible to parents and admin</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Recent Grade Entries</h2>
              <div className="space-y-3">
                {ecosystemGrades.slice(0, 4).map((grade) => (
                  <div key={`${grade.studentId}-${grade.assessment}`} className="rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30">
                    <p className="text-sm font-semibold text-kcs-blue-900 dark:text-white">{grade.subject}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{grade.assessment} • {grade.score}% • parent/student updated</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Submitted Work</h2>
              <div className="space-y-3">
                {ecosystemAssignments.filter((item) => item.status === 'submitted' || item.status === 'missing').map((item) => (
                  <div key={item.id} className="rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30">
                    <p className="text-sm font-semibold text-kcs-blue-900 dark:text-white">{item.title}</p>
                    <p className="text-xs capitalize text-gray-500 dark:text-gray-400">{item.status} • {item.subject}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Schedule Alerts</h2>
              <div className="space-y-3">
                {ecosystemSchedules.filter((item) => item.role === 'teacher').map((item) => (
                  <div key={`${item.time}-${item.title}`} className="rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30">
                    <p className="text-sm font-semibold text-kcs-blue-900 dark:text-white">{item.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.time} • {item.room}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white">
                  <Calendar size={18} className="text-kcs-blue-500" /> Today&apos;s Schedule
                </h2>
                <span className="badge-blue text-xs">Biology Department</span>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {todayClasses.map((item, index) => (
                  <div key={item.time} className={`rounded-xl border p-4 ${index === 0 ? 'border-kcs-blue-300 bg-kcs-blue-50 dark:border-kcs-blue-600 dark:bg-kcs-blue-800/40' : 'border-gray-100 bg-gray-50 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/20'}`}>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{item.time}</p>
                    <p className="mt-1 font-semibold text-kcs-blue-900 dark:text-white">{item.course}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.room}</p>
                    <p className="mt-2 text-xs font-medium text-kcs-blue-700 dark:text-kcs-blue-300">{item.students} students</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white">
                <MessageSquare size={18} className="text-kcs-gold-500" /> Messages
              </h2>
              <div className="space-y-3">
                {messages.map((message) => (
                  <div key={message.id} className="rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/40">
                    <p className="text-sm font-semibold text-kcs-blue-900 dark:text-white">{message.from}</p>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">{message.subject}</p>
                    <p className="mt-1 text-xs text-gray-400">{message.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white">
                  <CheckCircle2 size={18} className="text-green-500" /> Grading Queue
                </h2>
                <Link to="/portal/teacher/grades" className="flex items-center gap-1 text-xs font-semibold text-kcs-blue-600 dark:text-kcs-blue-400">
                  Grade Book <ChevronRight size={14} />
                </Link>
              </div>
              <div className="space-y-3">
                {gradingQueue.map((task) => (
                  <div key={task.id} className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/20">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-kcs-blue-900 dark:text-white">{task.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{task.className}</p>
                      </div>
                      <span className="badge-gold text-xs">{task.pending} pending</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
                      <Clock size={12} /> Due {task.due}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white">
                  <Users size={18} className="text-purple-500" /> Student Support Alerts
                </h2>
                <Link to="/portal/teacher/students" className="flex items-center gap-1 text-xs font-semibold text-kcs-blue-600 dark:text-kcs-blue-400">
                  Student List <ChevronRight size={14} />
                </Link>
              </div>
              <div className="space-y-3">
                {studentAlerts.map((alert) => (
                  <div key={alert.student} className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/20">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <p className="font-semibold text-kcs-blue-900 dark:text-white">{alert.student}</p>
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${alert.severity === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' : alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'}`}>
                        {alert.severity}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-300">{alert.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-gradient-to-r from-kcs-blue-900 to-kcs-blue-700 p-6 text-white dark:border-kcs-blue-800">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold text-kcs-gold-300">AI Classroom Assistant</p>
                <h2 className="font-display text-2xl font-bold">Generate intervention plans, revision exercises, and parent summaries faster.</h2>
              </div>
              <Link to="/portal/student/ai-tutor" className="btn-gold whitespace-nowrap text-sm py-2.5">
                Open AI Assistant
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default TeacherPortal
