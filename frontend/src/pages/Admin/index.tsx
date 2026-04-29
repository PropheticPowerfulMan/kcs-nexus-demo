import { motion } from 'framer-motion'
import {
  ArrowUpRight, BookOpen, Brain,
  Clock3, FileText, GraduationCap, Radio, Users, Video
} from 'lucide-react'
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer,
  Tooltip, XAxis, YAxis
} from 'recharts'
import PortalSidebar from '@/components/layout/PortalSidebar'
import PortalSectionPanel from '@/components/shared/PortalSectionPanel'
import { useAuthStore } from '@/store/authStore'
import {
  aiRecommendations,
  aiSignals,
  auditLogs,
  communicationFlows,
  feeAccounts,
  financeReadiness,
  reportCards,
  rolePermissions,
  scheduleConflicts,
  sensitiveActions,
  staffOperations,
  students,
  transcripts,
} from '@/data/schoolEcosystem'

const enrollmentTrend = [
  { month: 'Sep', students: 472, applications: 68 },
  { month: 'Oct', students: 478, applications: 74 },
  { month: 'Nov', students: 481, applications: 71 },
  { month: 'Dec', students: 483, applications: 79 },
  { month: 'Jan', students: 489, applications: 83 },
  { month: 'Feb', students: 496, applications: 91 },
  { month: 'Mar', students: 503, applications: 96 },
  { month: 'Apr', students: 511, applications: 102 },
]

const departmentPerformance = [
  { name: 'Elementary', score: 91 },
  { name: 'Middle', score: 88 },
  { name: 'High', score: 93 },
  { name: 'Admissions', score: 84 },
  { name: 'Support', score: 89 },
]

const admissionsQueue = [
  { name: 'Amani M.', grade: 'Grade 6', status: 'Interview Scheduled', date: 'Apr 22' },
  { name: 'Lydia T.', grade: 'Grade 10', status: 'Under Review', date: 'Apr 21' },
  { name: 'Joel B.', grade: 'Grade 2', status: 'Documents Missing', date: 'Apr 20' },
  { name: 'Nathan S.', grade: 'Grade 11', status: 'Accepted', date: 'Apr 18' },
]

const riskAlerts = [
  { title: 'Attendance risk cluster', description: '7 students in Grade 8 crossed the 85% threshold this month.', level: 'high' },
  { title: 'Admissions response time', description: 'Average review cycle slipped to 6.2 days. Goal is under 5 days.', level: 'medium' },
  { title: 'Teacher capacity opportunity', description: 'High school math section demand suggests adding one more instructor next term.', level: 'positive' },
]

const staffLoad = [
  { teacher: 'Dr. Mukendi', load: '5 sections', aiSupport: 'High' },
  { teacher: 'Mrs. Diallo', load: '4 sections', aiSupport: 'Medium' },
  { teacher: 'Mr. Belanger', load: '5 sections', aiSupport: 'Medium' },
  { teacher: 'Mrs. Nkosi', load: '3 sections', aiSupport: 'Low' },
]

const recentActivity = [
  '24 new admission documents uploaded this week.',
  'AI tutor sessions increased by 38% among Grade 11 students.',
  'Parent conference booking reached 82% completion.',
  'News post on science fair produced 1,240 page views in 48 hours.',
]

const liveEventControls = [
  { title: 'Spring Arts Festival', status: 'Live now', platform: 'YouTube Live', audience: '312 viewers', nextStep: 'Monitor comments and stream health' },
  { title: 'Annual Sports Day', status: 'Scheduled', platform: 'KCS Live', audience: 'May 10, 8:00 AM', nextStep: 'Confirm camera crew and field audio' },
  { title: 'Graduation Ceremony 2026', status: 'Scheduled', platform: 'YouTube Live', audience: 'Jun 8, 4:00 PM', nextStep: 'Publish family access link' },
]

const AdminDashboard = () => {
  const { user } = useAuthStore()

  return (
    <div className="portal-shell flex">
      <PortalSidebar />

      <main>
        <div className="sticky top-0 z-20 border-b border-gray-100 bg-white/85 px-6 py-4 backdrop-blur-md dark:border-kcs-blue-800 dark:bg-kcs-blue-950/85">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="font-display text-xl font-bold text-kcs-blue-900 dark:text-white">
                Executive Dashboard, {user?.firstName}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                A high-level operational view of academics, admissions, staff load, and AI-driven risk monitoring.
              </p>
            </div>
            <div className="rounded-2xl bg-kcs-blue-50 px-4 py-2 text-sm font-medium text-kcs-blue-700 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-300">
              Live snapshot • 2025/26 cycle
            </div>
          </div>
        </div>

        <div className="space-y-6 p-6">
          <PortalSectionPanel />

          <div className="grid grid-cols-2 gap-4 xl:grid-cols-5">
            {[
              { label: 'Total Students', value: '511', icon: GraduationCap, tone: 'bg-kcs-blue-50 text-kcs-blue-700 dark:bg-kcs-blue-900/30 dark:text-kcs-blue-300', sub: '+8 this month' },
              { label: 'Faculty Members', value: '64', icon: Users, tone: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300', sub: '92% retention' },
              { label: 'Open Applications', value: '102', icon: FileText, tone: 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300', sub: '31 priority cases' },
              { label: 'AI Risk Alerts', value: '10', icon: Brain, tone: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300', sub: '3 high severity' },
              { label: 'Live Events', value: '4', icon: Radio, tone: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300', sub: '1 currently live' },
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

          <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-bold text-kcs-blue-900 dark:text-white">Enrollment and Applications Trend</h2>
                <span className="badge-blue text-xs">Rolling 8 months</span>
              </div>
              <ResponsiveContainer width="100%" height={290}>
                <AreaChart data={enrollmentTrend}>
                  <defs>
                    <linearGradient id="studentsFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1d4ed8" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#1d4ed8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="applicationsFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.15)" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: '#0f2352', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '12px' }} />
                  <Area type="monotone" dataKey="students" stroke="#1d4ed8" fill="url(#studentsFill)" strokeWidth={2.5} />
                  <Area type="monotone" dataKey="applications" stroke="#f59e0b" fill="url(#applicationsFill)" strokeWidth={2.5} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-bold text-kcs-blue-900 dark:text-white">Department Health Score</h2>
                <span className="text-xs text-gray-400">AI synthesized</span>
              </div>
              <ResponsiveContainer width="100%" height={290}>
                <BarChart data={departmentPerformance} layout="vertical" margin={{ left: 10, right: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.15)" horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} width={80} />
                  <Tooltip contentStyle={{ background: '#0f2352', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '12px' }} />
                  <Bar dataKey="score" fill="#1d4ed8" radius={[8, 8, 8, 8]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-bold text-kcs-blue-900 dark:text-white">Event Live Broadcasts</h2>
                <Video size={18} className="text-red-500" />
              </div>
              <div className="space-y-3">
                {liveEventControls.map((event) => (
                  <div key={event.title} className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-kcs-blue-900 dark:text-white">{event.title}</p>
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${event.status === 'Live now' ? 'bg-red-600 text-white' : 'bg-kcs-gold-100 text-kcs-blue-800 dark:bg-kcs-gold-900/30 dark:text-kcs-gold-300'}`}>
                        {event.status}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{event.platform} • {event.audience}</p>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300">{event.nextStep}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-bold text-kcs-blue-900 dark:text-white">Admissions Queue</h2>
                <span className="badge-gold text-xs">Priority review</span>
              </div>
              <div className="space-y-3">
                {admissionsQueue.map((item) => (
                  <div key={item.name} className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/20">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-kcs-blue-900 dark:text-white">{item.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.grade}</p>
                      </div>
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${item.status === 'Accepted' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : item.status === 'Documents Missing' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' : item.status === 'Interview Scheduled' ? 'bg-kcs-blue-100 text-kcs-blue-700 dark:bg-kcs-blue-900/30 dark:text-kcs-blue-300' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'}`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
                      <Clock3 size={12} /> Updated {item.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-bold text-kcs-blue-900 dark:text-white">AI Risk & Opportunity Signals</h2>
                <Brain size={18} className="text-kcs-gold-500" />
              </div>
              <div className="space-y-3">
                {riskAlerts.map((alert) => (
                  <div key={alert.title} className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/20">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <p className="font-semibold text-kcs-blue-900 dark:text-white">{alert.title}</p>
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${alert.level === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' : alert.level === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'}`}>
                        {alert.level}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-300">{alert.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-bold text-kcs-blue-900 dark:text-white">Teacher Load Snapshot</h2>
                <BookOpen size={18} className="text-purple-500" />
              </div>
              <div className="space-y-3">
                {staffLoad.map((staff) => (
                  <div key={staff.teacher} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/20">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-kcs-blue-900 dark:text-white">{staff.teacher}</p>
                      <span className="text-xs text-gray-400">{staff.load}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400">AI support level</span>
                      <span className="font-semibold text-kcs-blue-600 dark:text-kcs-blue-400">{staff.aiSupport}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-gradient-to-r from-kcs-blue-900 to-kcs-blue-700 p-6 text-white dark:border-kcs-blue-800">
            <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
              <div>
                <p className="mb-2 text-sm font-semibold text-kcs-gold-300">Operational Pulse</p>
                <h2 className="font-display text-2xl font-bold">This week&apos;s strongest signals point to steady enrollment growth and higher AI engagement in senior grades.</h2>
              </div>
              <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                {recentActivity.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-kcs-blue-100">
                    <ArrowUpRight size={16} className="mt-0.5 flex-shrink-0 text-kcs-gold-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-bold text-kcs-blue-900 dark:text-white">Role Permissions Matrix</h2>
                <span className="badge-blue text-xs">Super Admin control</span>
              </div>
              <div className="space-y-3">
                {Object.entries(rolePermissions).map(([role, permissions]) => (
                  <div key={role} className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold capitalize text-kcs-blue-900 dark:text-white">{role === 'admin' ? 'Super Admin' : role}</p>
                      <span className="text-xs font-semibold text-kcs-blue-600 dark:text-kcs-blue-300">{permissions.length} permissions</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {permissions.slice(0, 5).map((permission) => (
                        <span key={permission} className="rounded-full bg-white px-2.5 py-1 text-xs text-gray-600 dark:bg-kcs-blue-900/60 dark:text-gray-300">
                          {permission}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-bold text-kcs-blue-900 dark:text-white">Interconnected System Signals</h2>
                <span className="badge-gold text-xs">Data driven</span>
              </div>
              <div className="space-y-3">
                {aiSignals.map((signal) => (
                  <div key={signal.title} className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-kcs-blue-900 dark:text-white">{signal.title}</p>
                      <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">{signal.severity}</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300">{signal.detail}</p>
                    <p className="mt-2 text-xs text-gray-400">Visible to: {signal.roles.join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-bold text-kcs-blue-900 dark:text-white">Sensitive Action Approvals</h2>
                <span className="badge-gold text-xs">Super Admin only</span>
              </div>
              <div className="space-y-3">
                {sensitiveActions.map((item) => (
                  <div key={item.action} className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-kcs-blue-900 dark:text-white">{item.action}</p>
                      <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-300">{item.risk}</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{item.requester}</p>
                    <p className="mt-2 text-xs font-semibold text-kcs-blue-600 dark:text-kcs-blue-300">{item.status}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-bold text-kcs-blue-900 dark:text-white">Finance Control</h2>
                <span className="badge-blue text-xs">Invoices • receipts • exports</span>
              </div>
              <div className="space-y-3">
                {feeAccounts.map((fee) => (
                  <div key={fee.invoice} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-kcs-blue-900 dark:text-white">{fee.invoice}</p>
                      <span className="text-sm font-bold text-kcs-blue-700 dark:text-kcs-blue-300">${fee.balance}</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{fee.family} • {fee.status} • last payment ${fee.lastPayment}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-bold text-kcs-blue-900 dark:text-white">Report Cards & Transcripts</h2>
                <span className="badge-gold text-xs">Principal workflow</span>
              </div>
              <div className="space-y-3">
                {[...reportCards, ...transcripts].map((item: any) => (
                  <div key={`${item.student}-${item.term ?? item.years}`} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                    <p className="font-semibold text-kcs-blue-900 dark:text-white">{item.student}</p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      {item.term ?? item.years} • {item.principalStatus ?? item.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-bold text-kcs-blue-900 dark:text-white">Interdependence Engine</h2>
                <span className="badge-blue text-xs">Notifications and RBAC</span>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {communicationFlows.map((flow) => (
                  <div key={flow.trigger} className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30">
                    <p className="font-semibold text-kcs-blue-900 dark:text-white">{flow.trigger}</p>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">{flow.update}</p>
                    <p className="mt-2 text-xs text-gray-400">Recipients: {flow.recipients.join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-bold text-kcs-blue-900 dark:text-white">AI Governance</h2>
                <span className="badge-gold text-xs">Usage and recommendations</span>
              </div>
              <div className="space-y-3">
                {aiRecommendations.map((item) => (
                  <div key={`${item.owner}-${item.title}`} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                    <p className="font-semibold text-kcs-blue-900 dark:text-white">{item.owner}: {item.title}</p>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">{item.action}</p>
                    <p className="mt-2 text-xs font-semibold text-kcs-gold-600 dark:text-kcs-gold-300">{item.impact}</p>
                  </div>
                ))}
                {financeReadiness.slice(1).map((item) => (
                  <div key={item.feature} className="rounded-xl border border-green-100 bg-green-50 p-4 dark:border-green-900/30 dark:bg-green-900/10">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-300">{item.feature}</p>
                    <p className="mt-1 text-xs text-green-700 dark:text-green-400">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Student Risk Control</h2>
              <div className="space-y-3">
                {students.map((student) => (
                  <div key={student.id} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-kcs-blue-900 dark:text-white">{student.name}</p>
                      <span className={`rounded-full px-2 py-1 text-xs font-semibold ${student.risk === 'low' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'}`}>{student.risk}</span>
                    </div>
                    <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">{student.aiInsight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Staff Operations</h2>
              <div className="space-y-3">
                {staffOperations.map((item) => (
                  <div key={item.function} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-kcs-blue-900 dark:text-white">{item.function}</p>
                      <span className="font-bold text-kcs-blue-700 dark:text-kcs-blue-300">{item.value}</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{item.metric} • {item.status}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Sensitive Audit Logs</h2>
              <div className="space-y-3">
                {auditLogs.map((log) => (
                  <div key={`${log.actor}-${log.time}`} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                    <p className="font-semibold text-kcs-blue-900 dark:text-white">{log.action}</p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{log.actor} • {log.target}</p>
                    <p className="mt-1 text-xs text-gray-400">{log.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-bold text-kcs-blue-900 dark:text-white">Schedule Conflict Control</h2>
              <span className="badge-blue text-xs">Teacher • room • class timetable</span>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {scheduleConflicts.map((conflict) => (
                <div key={conflict.title} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-kcs-blue-900 dark:text-white">{conflict.title}</p>
                    <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">{conflict.severity}</span>
                  </div>
                  <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">{conflict.detail}</p>
                  <p className="mt-2 text-xs text-gray-400">Notify: {conflict.affected.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard
