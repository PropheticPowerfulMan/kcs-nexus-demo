import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Eye, EyeOff, Lock, LogIn, Mail, ShieldCheck } from 'lucide-react'
import { authAPI } from '@/services/api'
import { useAuthStore } from '@/store/authStore'
import type { User, UserRole } from '@/types'

const loginSchema = z.object({
  email: z.string().email('Valid email required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginFormValues = z.infer<typeof loginSchema>

type DemoAccount = {
  email: string
  role: UserRole
  firstName: string
  lastName: string
}

const demoAccounts: DemoAccount[] = [
  { email: 'student@kcsnexus.edu', role: 'student', firstName: 'Grace', lastName: 'Mwamba' },
  { email: 'parent@kcsnexus.edu', role: 'parent', firstName: 'Rachel', lastName: 'Kabongo' },
  { email: 'teacher@kcsnexus.edu', role: 'teacher', firstName: 'Daniel', lastName: 'Mukendi' },
  { email: 'admin@kcsnexus.edu', role: 'admin', firstName: 'Sarah', lastName: 'Carter' },
]

const buildDemoUser = (account: DemoAccount): User => ({
  id: account.role + '-demo',
  email: account.email,
  firstName: account.firstName,
  lastName: account.lastName,
  role: account.role,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
})

const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { login, isAuthenticated, setLoading, isLoading } = useAuthStore()
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true })
    }
  }, [isAuthenticated, navigate])

  const resolveDestination = (role: UserRole) => {
    const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname
    if (from) return from
    return role === 'admin' ? '/admin' : `/portal/${role}`
  }

  const handleSuccessfulLogin = (user: User) => {
    login(user, 'demo-access-token', 'demo-refresh-token')
    navigate(resolveDestination(user.role), { replace: true })
  }

  const onSubmit = async (values: LoginFormValues) => {
    setLoading(true)
    setErrorMessage('')

    try {
      const response = await authAPI.login(values.email, values.password)
      const data = response.data?.data
      if (!data?.user || !data?.token || !data?.refreshToken) {
        throw new Error('Invalid authentication response')
      }
      login(data.user, data.token, data.refreshToken)
      navigate(resolveDestination(data.user.role), { replace: true })
    } catch {
      const demoAccount = demoAccounts.find((account) => account.email === values.email)
      if (demoAccount) {
        handleSuccessfulLogin(buildDemoUser(demoAccount))
      } else {
        setErrorMessage('Login failed. Use one of the demo accounts or connect the backend auth service.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-kcs-blue-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(29,78,216,0.28),transparent_35%)]" />
      <div className="absolute inset-0 dots-bg opacity-30" />

      <div className="relative container-custom flex min-h-screen items-center justify-center py-16">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr]">
          <div className="hidden flex-col justify-between border-r border-white/10 p-10 text-white lg:flex">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-sm text-kcs-gold-300">
                <ShieldCheck size={14} /> Secure Access
              </span>
              <h1 className="mt-8 text-4xl font-bold font-display leading-tight">
                Enter The Digital Campus Of KCS Nexus
              </h1>
              <p className="mt-4 max-w-md text-kcs-blue-100">
                Access role-based dashboards for students, parents, teachers, and school leadership with AI-powered workflows built into the experience.
              </p>
            </div>
            <div className="space-y-4">
              {demoAccounts.map((account) => (
                <button
                  key={account.email}
                  type="button"
                  onClick={() => {
                    form.setValue('email', account.email)
                    form.setValue('password', 'password123')
                  }}
                  className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left transition-colors hover:bg-white/10"
                >
                  <div>
                    <p className="font-semibold capitalize">{account.role} demo</p>
                    <p className="text-sm text-kcs-blue-200">{account.email}</p>
                  </div>
                  <span className="rounded-full bg-kcs-gold-400 px-3 py-1 text-xs font-semibold text-kcs-blue-950">Quick Fill</span>
                </button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 dark:bg-kcs-blue-950/95 md:p-10"
          >
            <div className="mx-auto max-w-md">
              <Link to="/" className="inline-flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl kcs-gradient text-sm font-bold text-white shadow-kcs">KCS</div>
                <div>
                  <p className="font-display text-sm font-bold text-kcs-blue-900 dark:text-white">Kinshasa Christian School</p>
                  <p className="text-xs text-kcs-gold-600 dark:text-kcs-gold-400">Nexus Platform</p>
                </div>
              </Link>

              <div className="mt-10 mb-8">
                <h2 className="text-3xl font-bold font-display text-kcs-blue-900 dark:text-white">Sign In</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Use your KCS credentials or one of the demo accounts.
                </p>
              </div>

              {errorMessage && (
                <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-300">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-300">Email</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input {...form.register('email')} className="input-kcs pl-11" placeholder="name@kcsnexus.edu" />
                  </div>
                  {form.formState.errors.email && <p className="mt-1 text-xs text-red-500">{form.formState.errors.email.message}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-gray-600 dark:text-gray-300">Password</label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      {...form.register('password')}
                      type={showPassword ? 'text' : 'password'}
                      className="input-kcs pl-11 pr-11"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((current) => !current)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-kcs-blue-600"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {form.formState.errors.password && <p className="mt-1 text-xs text-red-500">{form.formState.errors.password.message}</p>}
                </div>

                <div className="flex items-center justify-between pt-1 text-sm">
                  <label className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <input type="checkbox" className="accent-kcs-blue-600" /> Remember me
                  </label>
                  <button type="button" className="font-medium text-kcs-blue-600 dark:text-kcs-blue-400">
                    Forgot password?
                  </button>
                </div>

                <button type="submit" disabled={isLoading} className="btn-primary flex w-full items-center justify-center gap-2 py-3 disabled:opacity-60">
                  <LogIn size={16} /> {isLoading ? 'Signing in...' : 'Sign In'}
                </button>
              </form>

              <div className="my-6 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-gray-400">
                <div className="h-px flex-1 bg-gray-200 dark:bg-kcs-blue-800" />
                Or continue with
                <div className="h-px flex-1 bg-gray-200 dark:bg-kcs-blue-800" />
              </div>

              <button
                type="button"
                onClick={() => handleSuccessfulLogin(buildDemoUser(demoAccounts[0]))}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/40 dark:text-white dark:hover:bg-kcs-blue-800/40"
              >
                <span className="text-lg">G</span>
                Sign in with Google
              </button>

              <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                Need admission support? <Link to="/admissions" className="font-semibold text-kcs-blue-600 dark:text-kcs-blue-400">Start your application</Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
