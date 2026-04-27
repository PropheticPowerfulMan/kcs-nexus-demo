import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Menu, X, Sun, Moon, Globe, Bell, ChevronDown,
  GraduationCap, BookOpen, Users, Home, Phone, Image, Newspaper, LogIn
} from 'lucide-react'
import { useUIStore } from '@/store/uiStore'
import { useAuthStore } from '@/store/authStore'

const Header = () => {
  const { t, i18n } = useTranslation()
  const { theme, toggleTheme, language, setLanguage, unreadCount } = useUIStore()
  const { isAuthenticated, user } = useAuthStore()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [academicsOpen, setAcademicsOpen] = useState(false)
  const [portalOpen, setPortalOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const toggleLanguage = () => {
    const next = language === 'en' ? 'fr' : 'en'
    setLanguage(next)
    i18n.changeLanguage(next)
  }

  const isHomePage = location.pathname === '/'

  const navItems = [
    { to: '/', label: t('nav.home'), icon: Home },
    { to: '/about', label: t('nav.about'), icon: Users },
    { to: '/academics', label: t('nav.academics'), icon: GraduationCap },
    { to: '/news', label: t('nav.news'), icon: Newspaper },
    { to: '/admissions', label: t('nav.admissions'), icon: BookOpen },
    { to: '/gallery', label: t('nav.gallery'), icon: Image },
    { to: '/contact', label: t('nav.contact'), icon: Phone },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHomePage
          ? 'bg-white/95 dark:bg-kcs-blue-950/95 backdrop-blur-md shadow-kcs border-b border-gray-100 dark:border-kcs-blue-800'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center shadow-kcs group-hover:shadow-kcs-lg transition-all duration-300 p-1.5">
              <img src="/images/kcs-logo.png" alt="Kinshasa Christian School" className="h-full w-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <p className={`font-bold text-sm leading-tight font-display transition-colors duration-300 ${
                scrolled || !isHomePage
                  ? 'text-kcs-blue-900 dark:text-white'
                  : 'text-white'
              }`}>
                Kinshasa Christian
              </p>
              <p className={`text-xs font-medium transition-colors duration-300 ${
                scrolled || !isHomePage
                  ? 'text-kcs-gold-600 dark:text-kcs-gold-400'
                  : 'text-kcs-gold-300'
              }`}>
                Letting Our Light Shine
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-kcs-blue-600 dark:text-kcs-blue-300 bg-kcs-blue-50 dark:bg-kcs-blue-900/30'
                      : scrolled || !isHomePage
                      ? 'text-gray-700 dark:text-gray-300 hover:text-kcs-blue-700 dark:hover:text-kcs-blue-300 hover:bg-gray-100 dark:hover:bg-kcs-blue-900/20'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                scrolled || !isHomePage
                  ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-kcs-blue-900/20'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Globe size={16} />
              <span className="hidden sm:inline">{language.toUpperCase()}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                scrolled || !isHomePage
                  ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-kcs-blue-900/20'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Notifications (when logged in) */}
            {isAuthenticated && (
              <Link
                to="/portal/notifications"
                className={`relative p-2 rounded-lg transition-all duration-200 ${
                  scrolled || !isHomePage
                    ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-kcs-blue-900/20'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <Bell size={18} />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </Link>
            )}

            {/* Auth Button */}
            {isAuthenticated ? (
              <Link
                to={`/portal/${user?.role}`}
                className="hidden sm:flex items-center gap-2 btn-primary text-sm py-2"
              >
                <div className="w-6 h-6 rounded-full bg-kcs-gold-400 flex items-center justify-center text-kcs-blue-900 text-xs font-bold">
                  {user?.firstName?.[0]}{user?.lastName?.[0]}
                </div>
                <span>{t('nav.dashboard')}</span>
              </Link>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Link to="/login" className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  scrolled || !isHomePage
                    ? 'text-kcs-blue-700 dark:text-kcs-blue-300 hover:bg-kcs-blue-50 dark:hover:bg-kcs-blue-900/20'
                    : 'text-white hover:bg-white/10'
                }`}>
                  <LogIn size={16} />
                  {t('nav.login')}
                </Link>
                <Link to="/admissions" className="btn-gold text-sm py-2">
                  {t('nav.applyNow')}
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
                scrolled || !isHomePage
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-kcs-blue-900/20'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white dark:bg-kcs-blue-950 border-t border-gray-100 dark:border-kcs-blue-800 overflow-hidden"
          >
            <div className="container-custom py-4 space-y-1">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-kcs-blue-700 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-kcs-blue-50 dark:hover:bg-kcs-blue-900/20'
                    }`
                  }
                >
                  <Icon size={18} />
                  {label}
                </NavLink>
              ))}

              <div className="pt-3 mt-3 border-t border-gray-100 dark:border-kcs-blue-800 flex gap-2">
                {isAuthenticated ? (
                  <Link to={`/portal/${user?.role}`} className="flex-1 btn-primary text-center text-sm py-2.5">
                    {t('nav.dashboard')}
                  </Link>
                ) : (
                  <>
                    <Link to="/login" className="flex-1 btn-primary text-center text-sm py-2.5">
                      {t('nav.login')}
                    </Link>
                    <Link to="/admissions" className="flex-1 btn-gold text-center text-sm py-2.5">
                      {t('nav.applyNow')}
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
