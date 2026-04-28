import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  AlertTriangle, Bell, Brain, ClipboardList, FileText, Megaphone,
  MessageSquare, ShieldCheck, TrendingUp, Users
} from 'lucide-react'
import {
  Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis
} from 'recharts'
import PortalSidebar from '@/components/layout/PortalSidebar'
import PortalSectionPanel from '@/components/shared/PortalSectionPanel'
import { useAuthStore } from '@/store/authStore'
import {
  academicContext, aiSignals, announcements, auditLogs,
  messages, rolePermissions, staffOperations
} from '@/data/schoolEcosystem'

const attendanceSummary = [
  { label: 'Elementary', attendance: 96 },
  { label: 'Middle', attendance: 91 },
  { label: 'High', attendance: 94 },
  { label: 'Staff', attendance: 98 },
]

const StaffPortal = () => {
  const { user } = useAuthStore()
  const staffMessages = messages.filter((message) => message.toRole === 'staff')
  const staffSignals = aiSignals.filter((signal) => signal.roles.includes('staff'))

  return (
    <div className="portal-shell flex">
      <PortalSidebar />

      <main>
        <div className="sticky top-0 z-20 border-b border-gray-100 bg-white/85 px-6 py-4 backdrop-blur-md dark:border-kcs-blue-800 dark:bg-kcs-blue-950/85">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="font-display text-xl font-bold text-kcs-blue-900 dark:text-white">
                Staff Operations, {user?.firstName}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {academicContext.year} • {academicContext.term} • records, communication, admissions, discipline, and reports.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link to="/portal/staff/announcements" className="btn-primary flex items-center gap-2 py-2 text-sm">
                <Megaphone size={16} /> Send Announcement
              </Link>
              <Link to="/portal/staff/reports" className="btn-gold flex items-center gap-2 py-2 text-sm">
                <Brain size={16} /> AI Report
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-6">
          <PortalSectionPanel />

          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {[
              { label: 'Student Records', value: '511', sub: '18 changed today', icon: Users, tone: 'bg-kcs-blue-50 text-kcs-blue-700 dark:bg-kcs-blue-900/30 dark:text-kcs-blue-300' },
              { label: 'Pending Messages', value: '12', sub: 'Parents and staff', icon: MessageSquare, tone: 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' },
              { label: 'Admissions Tasks', value: '9', sub: '3 interviews pending', icon: ClipboardList, tone: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' },
              { label: 'Audit Items', value: '3', sub: 'Sensitive changes', icon: ShieldCheck, tone: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300' },
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

          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-bold text-kcs-blue-900 dark:text-white">School-wide Attendance</h2>
                <span className="badge-blue text-xs">Today</span>
              </div>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={attendanceSummary}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.15)" />
                  <XAxis dataKey="label" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: '#0f2352', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '12px' }} />
                  <Bar dataKey="attendance" fill="#1d4ed8" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white">
                <Brain size={18} className="text-kcs-gold-500" /> Staff AI Tools
              </h2>
              <div className="space-y-3">
                {['Generate official letter', 'Draft targeted announcement', 'Summarize discipline report', 'Export attendance risk CSV'].map((tool) => (
                  <button key={tool} className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-left text-sm font-semibold text-kcs-blue-900 transition-colors hover:bg-kcs-blue-50 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30 dark:text-white dark:hover:bg-kcs-blue-800">
                    {tool}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white">
                <FileText size={18} className="text-kcs-blue-500" /> Operational Workload
              </h2>
              <div className="space-y-3">
                {staffOperations.map((item) => (
                  <div key={item.function} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-kcs-blue-900 dark:text-white">{item.function}</p>
                      <span className="font-bold text-kcs-blue-700 dark:text-kcs-blue-300">{item.value}</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{item.metric}</p>
                    <p className="mt-2 text-xs font-semibold text-kcs-gold-600 dark:text-kcs-gold-300">{item.status}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white">
                <Bell size={18} className="text-orange-500" /> Targeted Announcements
              </h2>
              <div className="space-y-3">
                {announcements.map((item) => (
                  <div key={item.id} className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30">
                    <p className="font-semibold text-kcs-blue-900 dark:text-white">{item.title}</p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{item.date} • {item.audience.join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white">
                <AlertTriangle size={18} className="text-red-500" /> AI Risk Signals
              </h2>
              <div className="space-y-3">
                {staffSignals.map((signal) => (
                  <div key={signal.title} className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/30">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-kcs-blue-900 dark:text-white">{signal.title}</p>
                      <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">{signal.severity}</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300">{signal.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white">
                <MessageSquare size={18} className="text-purple-500" /> Messages Requiring Action
              </h2>
              <div className="space-y-3">
                {staffMessages.map((message) => (
                  <div key={message.subject} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                    <p className="font-semibold text-kcs-blue-900 dark:text-white">{message.subject}</p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{message.from}</p>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{message.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 flex items-center gap-2 font-bold text-kcs-blue-900 dark:text-white">
                <ShieldCheck size={18} className="text-green-500" /> Permissions & Audit
              </h2>
              <div className="mb-4 flex flex-wrap gap-2">
                {rolePermissions.staff.map((permission) => (
                  <span key={permission} className="rounded-full bg-kcs-blue-50 px-3 py-1 text-xs font-semibold text-kcs-blue-700 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-300">
                    {permission}
                  </span>
                ))}
              </div>
              <div className="space-y-3">
                {auditLogs.map((log) => (
                  <div key={`${log.actor}-${log.time}`} className="flex items-start gap-3 rounded-xl bg-gray-50 p-3 text-sm dark:bg-kcs-blue-800/30">
                    <TrendingUp size={15} className="mt-0.5 text-kcs-gold-500" />
                    <div>
                      <p className="font-semibold text-kcs-blue-900 dark:text-white">{log.action}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{log.actor} • {log.target} • {log.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default StaffPortal
