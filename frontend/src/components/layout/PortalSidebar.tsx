import { NavLink, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, BookOpen, FileText, Calendar, Brain,
  Users, Settings, Bell, ChevronLeft, ChevronRight,
  GraduationCap, BarChart3, MessageSquare, LogOut,
  Shield, Home, UserCheck, ClipboardList, Image, LibraryBig
} from 'lucide-react'
import { useAuthStore } from '@/store/authStore'
import { useUIStore } from '@/store/uiStore'
import type { UserRole } from '@/types'

interface NavItem {
  to: string
  label: string
  icon: React.ElementType
  badge?: number
}

const getNavItems = (role: UserRole, t: (key: string) => string): NavItem[] => {
  const dashboardPath = role === 'admin' ? '/admin' : `/portal/${role}`
  const base: NavItem[] = [
    { to: dashboardPath, label: 'Dashboard', icon: LayoutDashboard },
  ]

  switch (role) {
    case 'student':
      return [
        ...base,
        { to: '/portal/student/grades', label: 'My Grades', icon: BarChart3 },
        { to: '/portal/student/assignments', label: 'Assignments', icon: FileText },
        { to: '/portal/student/timetable', label: 'Timetable', icon: Calendar },
        { to: '/portal/student/ai-tutor', label: 'AI Tutor', icon: Brain },
        { to: '/portal/student/messages', label: 'Messages', icon: MessageSquare },
        { to: '/portal/student/profile', label: 'My Profile', icon: UserCheck },
      ]
    case 'parent':
      return [
        ...base,
        { to: '/portal/parent/performance', label: 'Performance', icon: BarChart3 },
        { to: '/portal/parent/forum', label: 'Parent Forum', icon: MessageSquare },
        { to: '/portal/parent/messages', label: 'Messages', icon: MessageSquare },
        { to: '/portal/parent/calendar', label: 'Calendar', icon: Calendar },
        { to: '/portal/parent/profile', label: 'Profile', icon: UserCheck },
      ]
    case 'teacher':
      return [
        ...base,
        { to: '/portal/teacher/courses', label: 'My Courses', icon: BookOpen },
        { to: '/portal/teacher/students', label: 'Students', icon: Users },
        { to: '/portal/teacher/assignments', label: 'Assignments', icon: FileText },
        { to: '/portal/teacher/grades', label: 'Grade Book', icon: BarChart3 },
        { to: '/portal/teacher/messages', label: 'Messages', icon: MessageSquare },
      ]
    case 'admin':
      return [
        ...base,
        { to: '/admin/students', label: 'Students', icon: GraduationCap },
        { to: '/admin/registry', label: 'Family Registry', icon: LibraryBig },
        { to: '/admin/teachers', label: 'Teachers', icon: Users },
        { to: '/admin/courses', label: 'Courses', icon: BookOpen },
        { to: '/admin/admissions', label: 'Admissions', icon: ClipboardList },
        { to: '/admin/news', label: 'News & Events', icon: FileText },
        { to: '/admin/media', label: 'Media', icon: Image },
        { to: '/admin/forum-insights', label: 'Parent AI Report', icon: Brain },
        { to: '/admin/analytics', label: 'AI Analytics', icon: Brain },
        { to: '/admin/settings', label: 'Settings', icon: Settings },
      ]
    default:
      return base
  }
}

const PortalSidebar = () => {
  const { t } = useTranslation()
  const { user, logout } = useAuthStore()
  const { sidebarCollapsed, toggleSidebarCollapse, unreadCount } = useUIStore()

  if (!user) return null

  const navItems = getNavItems(user.role, t)
  const roleColor = {
    admin: 'bg-purple-600',
    teacher: 'bg-green-600',
    student: 'bg-kcs-blue-600',
    parent: 'bg-orange-500',
  }[user.role]

  const roleName = {
    admin: 'Administrator',
    teacher: 'Teacher',
    student: 'Student',
    parent: 'Parent',
  }[user.role]

  return (
    <motion.aside
      animate={{ width: sidebarCollapsed ? 72 : 260 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="h-screen sticky top-0 flex flex-col bg-white dark:bg-kcs-blue-950 border-r border-gray-100 dark:border-kcs-blue-800 overflow-hidden z-30"
    >
      {/* Logo */}
      <div className="p-4 border-b border-gray-100 dark:border-kcs-blue-800">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl kcs-gradient flex items-center justify-center flex-shrink-0 shadow-kcs">
            <span className="text-white font-bold text-sm font-display">KCS</span>
          </div>
          <AnimatePresence>
            {!sidebarCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="font-bold text-xs leading-tight font-display text-kcs-blue-900 dark:text-white whitespace-nowrap">
                  KCS Nexus
                </p>
                <p className="text-xs text-kcs-gold-600 dark:text-kcs-gold-400 whitespace-nowrap">
                  {roleName} Portal
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
      </div>

      {/* User Profile */}
      <div className={`p-4 border-b border-gray-100 dark:border-kcs-blue-800 ${sidebarCollapsed ? 'items-center' : ''}`}>
        <div className={`flex items-center gap-3 ${sidebarCollapsed ? 'justify-center' : ''}`}>
          <div className={`w-10 h-10 rounded-xl ${roleColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
            {user.firstName?.[0]}{user.lastName?.[0]}
          </div>
          <AnimatePresence>
            {!sidebarCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="min-w-0 flex-1"
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 capitalize truncate">
                  {user.role}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map(({ to, label, icon: Icon, badge }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''} ${sidebarCollapsed ? 'justify-center px-0' : ''}`
            }
            title={sidebarCollapsed ? label : undefined}
          >
            <Icon size={18} className="flex-shrink-0" />
            <AnimatePresence>
              {!sidebarCollapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex-1 whitespace-nowrap"
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>
            {badge && badge > 0 && !sidebarCollapsed && (
              <span className="w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center flex-shrink-0">
                {badge > 99 ? '99+' : badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-3 border-t border-gray-100 dark:border-kcs-blue-800 space-y-1">
        <Link
          to="/"
          className={`sidebar-link ${sidebarCollapsed ? 'justify-center px-0' : ''}`}
          title={sidebarCollapsed ? 'Main Website' : undefined}
        >
          <Home size={18} className="flex-shrink-0" />
          {!sidebarCollapsed && <span>Main Website</span>}
        </Link>
        <button
          onClick={logout}
          className={`sidebar-link w-full text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 ${sidebarCollapsed ? 'justify-center px-0' : ''}`}
          title={sidebarCollapsed ? 'Sign Out' : undefined}
        >
          <LogOut size={18} className="flex-shrink-0" />
          {!sidebarCollapsed && <span>Sign Out</span>}
        </button>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={toggleSidebarCollapse}
        className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 bg-white dark:bg-kcs-blue-800 border border-gray-200 dark:border-kcs-blue-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-kcs-blue-600 dark:hover:text-kcs-blue-300 transition-all duration-200 shadow-sm z-10"
      >
        {sidebarCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>
    </motion.aside>
  )
}

export default PortalSidebar
