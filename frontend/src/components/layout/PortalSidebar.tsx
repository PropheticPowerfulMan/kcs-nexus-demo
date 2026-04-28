import { useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, BookOpen, FileText, Calendar, Brain,
  Users, Settings, Bell, ChevronLeft, ChevronRight,
  GraduationCap, BarChart3, MessageSquare, LogOut,
  Shield, Home, UserCheck, ClipboardList, Image, LibraryBig, Menu, X
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
        { to: '/portal/student/forum', label: 'Student Forum', icon: MessageSquare },
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
        { to: '/admin/student-forum-insights', label: 'Student AI Report', icon: Shield },
        { to: '/admin/analytics', label: 'AI Analytics', icon: Brain },
        { to: '/admin/settings', label: 'Settings', icon: Settings },
      ]
    default:
      return base
  }
}

const PortalSidebar = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const { user, logout } = useAuthStore()
  const {
    sidebarCollapsed,
    sidebarOpen,
    toggleSidebar,
    toggleSidebarCollapse,
    setSidebarOpen,
  } = useUIStore()

  useEffect(() => {
    setSidebarOpen(false)
  }, [location.pathname, setSidebarOpen])

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

  const renderNavigation = (isMobile = false) => (
    <>
      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {navItems.map(({ to, label, icon: Icon, badge }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => isMobile && setSidebarOpen(false)}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''} ${!isMobile && sidebarCollapsed ? 'justify-center px-0' : ''}`
            }
            title={!isMobile && sidebarCollapsed ? label : undefined}
          >
            <Icon size={18} className="flex-shrink-0" />
            {(isMobile || !sidebarCollapsed) && (
              <span className="flex-1 whitespace-nowrap">{label}</span>
            )}
            {badge && badge > 0 && (isMobile || !sidebarCollapsed) && (
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {badge > 99 ? '99+' : badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="space-y-1 border-t border-gray-100 p-3 dark:border-kcs-blue-800">
        <Link
          to="/"
          onClick={() => isMobile && setSidebarOpen(false)}
          className={`sidebar-link ${!isMobile && sidebarCollapsed ? 'justify-center px-0' : ''}`}
          title={!isMobile && sidebarCollapsed ? 'Main Website' : undefined}
        >
          <Home size={18} className="flex-shrink-0" />
          {(isMobile || !sidebarCollapsed) && <span>Main Website</span>}
        </Link>
        <button
          onClick={() => {
            setSidebarOpen(false)
            logout()
          }}
          className={`sidebar-link w-full text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 ${!isMobile && sidebarCollapsed ? 'justify-center px-0' : ''}`}
          title={!isMobile && sidebarCollapsed ? 'Sign Out' : undefined}
        >
          <LogOut size={18} className="flex-shrink-0" />
          {(isMobile || !sidebarCollapsed) && <span>Sign Out</span>}
        </button>
      </div>
    </>
  )

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-gray-100 bg-white/95 px-4 backdrop-blur-md dark:border-kcs-blue-800 dark:bg-kcs-blue-950/95 lg:hidden">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl kcs-gradient shadow-kcs">
            <span className="font-display text-sm font-bold text-white">KCS</span>
          </div>
          <div className="min-w-0">
            <p className="truncate font-display text-sm font-bold text-kcs-blue-900 dark:text-white">
              KCS Nexus
            </p>
            <p className="truncate text-xs text-kcs-gold-600 dark:text-kcs-gold-400">
              {roleName} Portal
            </p>
          </div>
        </Link>
        <button
          onClick={toggleSidebar}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-kcs-blue-50 text-kcs-blue-700 transition-colors hover:bg-kcs-blue-100 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-200 dark:hover:bg-kcs-blue-800"
          aria-label={sidebarOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-kcs-blue-950/45 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.08 }}
            onClick={() => setSidebarOpen(false)}
          >
            <motion.aside
              className="flex h-full w-[min(82vw,320px)] flex-col overflow-hidden border-r border-gray-100 bg-white shadow-2xl dark:border-kcs-blue-800 dark:bg-kcs-blue-950"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.16, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="border-b border-gray-100 p-4 dark:border-kcs-blue-800">
                <div className="flex items-center gap-3">
                  <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${roleColor} text-sm font-bold text-white`}>
                    {user.firstName?.[0]}{user.lastName?.[0]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="truncate text-xs capitalize text-gray-500 dark:text-gray-400">
                      {user.role}
                    </p>
                  </div>
                </div>
              </div>
              {renderNavigation(true)}
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

    <motion.aside
      animate={{ width: sidebarCollapsed ? 72 : 260 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="sticky top-0 z-30 hidden h-screen flex-col overflow-hidden border-r border-gray-100 bg-white dark:border-kcs-blue-800 dark:bg-kcs-blue-950 lg:flex"
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

      {renderNavigation()}

      {/* Collapse Toggle */}
      <button
        onClick={toggleSidebarCollapse}
        className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 bg-white dark:bg-kcs-blue-800 border border-gray-200 dark:border-kcs-blue-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-kcs-blue-600 dark:hover:text-kcs-blue-300 transition-all duration-200 shadow-sm z-10"
      >
        {sidebarCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>
    </motion.aside>
    </>
  )
}

export default PortalSidebar
