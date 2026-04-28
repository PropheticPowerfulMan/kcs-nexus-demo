import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import ProtectedRoute from '@/components/shared/ProtectedRoute'
import HomePage from '@/pages/Home'
import AboutPage from '@/pages/About'
import AcademicsPage from '@/pages/Academics'
import NewsPage from '@/pages/News'
import AdmissionsPage from '@/pages/Admissions'
import GalleryPage from '@/pages/Gallery'
import ContactPage from '@/pages/Contact'
import LoginPage from '@/pages/Auth/Login'
import StudentPortal from '@/pages/StudentPortal'
import AITutorPage from '@/pages/StudentPortal/AITutor'
import StudentForumPage from '@/pages/StudentForum'
import ParentPortal from '@/pages/ParentPortal'
import ParentForumPage from '@/pages/ParentForum'
import TeacherPortal from '@/pages/TeacherPortal'
import AdminDashboard from '@/pages/Admin'
import SchoolRegistryPage from '@/pages/Admin/SchoolRegistry'
import ForumInsightsPage from '@/pages/Admin/ForumInsights'
import StudentForumInsightsPage from '@/pages/Admin/StudentForumInsights'
import NotFoundPage from '@/pages/NotFound'
import { useAuthStore } from '@/store/authStore'

const PortalRedirect = () => {
  const { user, isAuthenticated } = useAuthStore()

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />
  }

  return <Navigate to={user.role === 'admin' ? '/admin' : `/portal/${user.role}`} replace />
}

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/portal"
          element={
            <ProtectedRoute>
              <PortalRedirect />
            </ProtectedRoute>
          }
        />

        <Route
          path="/portal/notifications"
          element={
            <ProtectedRoute>
              <PortalRedirect />
            </ProtectedRoute>
          }
        />

        <Route
          path="/portal/student"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentPortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal/student/dashboard"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentPortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal/student/ai-tutor"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <AITutorPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal/student/forum"
          element={
            <ProtectedRoute allowedRoles={['student', 'admin']}>
              <StudentForumPage />
            </ProtectedRoute>
          }
        />
        {['grades', 'assignments', 'timetable', 'messages', 'profile'].map((segment) => (
          <Route
            key={segment}
            path={`/portal/student/${segment}`}
            element={
              <ProtectedRoute allowedRoles={['student']}>
                <StudentPortal />
              </ProtectedRoute>
            }
          />
        ))}

        <Route
          path="/portal/parent"
          element={
            <ProtectedRoute allowedRoles={['parent']}>
              <ParentPortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal/parent/dashboard"
          element={
            <ProtectedRoute allowedRoles={['parent']}>
              <ParentPortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal/parent/forum"
          element={
            <ProtectedRoute allowedRoles={['parent', 'admin']}>
              <ParentForumPage />
            </ProtectedRoute>
          }
        />
        {['performance', 'messages', 'calendar', 'profile', 'grades'].map((segment) => (
          <Route
            key={segment}
            path={`/portal/parent/${segment}`}
            element={
              <ProtectedRoute allowedRoles={['parent']}>
                <ParentPortal />
              </ProtectedRoute>
            }
          />
        ))}

        <Route
          path="/portal/teacher"
          element={
            <ProtectedRoute allowedRoles={['teacher']}>
              <TeacherPortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal/teacher/dashboard"
          element={
            <ProtectedRoute allowedRoles={['teacher']}>
              <TeacherPortal />
            </ProtectedRoute>
          }
        />
        {['courses', 'students', 'assignments', 'grades', 'messages'].map((segment) => (
          <Route
            key={segment}
            path={`/portal/teacher/${segment}`}
            element={
              <ProtectedRoute allowedRoles={['teacher']}>
                <TeacherPortal />
              </ProtectedRoute>
            }
          />
        ))}

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/portal/admin" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/dashboard" element={<Navigate to="/admin" replace />} />
        <Route
          path="/admin/registry"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <SchoolRegistryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/forum-insights"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <ForumInsightsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/student-forum-insights"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <StudentForumInsightsPage />
            </ProtectedRoute>
          }
        />
        {['students', 'teachers', 'courses', 'admissions', 'news', 'media', 'analytics', 'settings'].map((segment) => (
          <Route
            key={segment}
            path={`/admin/${segment}`}
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        ))}

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
