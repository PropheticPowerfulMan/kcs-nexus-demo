import { useMemo, useState, type Dispatch, type SetStateAction } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight, BookOpen, Brain,
  AlertTriangle, CheckCircle2, Clock3, FileText, GraduationCap, Mail, Megaphone, MessageSquare, Phone, Radio, Shield, UserPlus, Users, Video
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
  announcements,
  attendance,
  auditLogs,
  communicationFlows,
  disciplineReports,
  feeAccounts,
  financeReadiness,
  grades,
  messages,
  reportCards,
  rolePermissions,
  scheduleConflicts,
  sensitiveActions,
  staffOperations,
  students,
  subjects,
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

const adminRosterSeed = [
  { id: 'adm-001', name: 'Anne Itela Mouyeke', grade: 'Grade 11', section: 'A', parent: 'Beatrice Itela', parentEmail: 'beatrice.itela@kcs.test', parentPhone: '+243 810 100 001', status: 'Active', gpa: 3.7, attendance: 94, discipline: 'Clear' },
  { id: 'adm-002', name: 'Assimbo Loango Grace', grade: 'Grade 11', section: 'A', parent: 'Moise Loango', parentEmail: 'moise.loango@kcs.test', parentPhone: '+243 810 100 002', status: 'Active', gpa: 3.5, attendance: 92, discipline: 'Monitored' },
  { id: 'adm-003', name: 'Beni Amisi Ali', grade: 'Grade 9', section: 'B', parent: 'Sarah Amisi', parentEmail: 'sarah.amisi@kcs.test', parentPhone: '+243 810 100 003', status: 'Active', gpa: 3.1, attendance: 88, discipline: 'Open' },
  { id: 'adm-004', name: 'Daniella Sambu', grade: 'Grade 10', section: 'A', parent: 'Joel Sambu', parentEmail: 'joel.sambu@kcs.test', parentPhone: '+243 810 100 004', status: 'Active', gpa: 3.8, attendance: 96, discipline: 'Clear' },
  { id: 'adm-005', name: 'Eliane Kazadi Mbuyi', grade: 'Grade 12', section: 'A', parent: 'Rachel Kazadi', parentEmail: 'rachel.kazadi@kcs.test', parentPhone: '+243 810 100 005', status: 'Graduation track', gpa: 3.9, attendance: 97, discipline: 'Clear' },
  ...students.map((student, index) => ({
    id: student.id,
    name: student.name,
    grade: student.grade,
    section: student.section,
    parent: student.parentId === 'parent-kabongo' ? 'Rachel Kabongo' : 'Parent record pending',
    parentEmail: `${student.name.toLowerCase().replace(/\s+/g, '.')}@family.kcs.test`,
    parentPhone: `+243 810 200 00${index + 1}`,
    status: 'Active',
    gpa: student.gpa,
    attendance: student.attendance,
    discipline: student.risk === 'low' ? 'Clear' : 'Monitored',
  })),
]

type AdminStudentRecord = (typeof adminRosterSeed)[number]

type AdminAdmissionRequest = {
  id: string
  applicationNumber: string
  studentName: string
  firstName: string
  lastName: string
  dateOfBirth: string
  nationality: string
  gradeApplying: string
  previousSchool: string
  languages: string
  parentName: string
  parentEmail: string
  parentPhone: string
  relationship: string
  address: string
  occupation: string
  notes: string
  documents: string[]
  status: 'SUBMITTED' | 'UNDER_REVIEW' | 'INTERVIEW_SCHEDULED' | 'ACCEPTED' | 'REJECTED'
  submittedAt: string
}

const ADMIN_ADMISSIONS_STORAGE_KEY = 'kcs-admin-admission-submissions'
const ADMIN_ROSTER_STORAGE_KEY = 'kcs-admin-official-roster'

const admissionSeed: AdminAdmissionRequest[] = admissionsQueue.map((item, index) => ({
  id: `seed-adm-${index + 1}`,
  applicationNumber: `KCS-SEED-${index + 1}`,
  studentName: item.name,
  firstName: item.name.split(' ')[0] ?? item.name,
  lastName: item.name.split(' ').slice(1).join(' ') || 'Applicant',
  dateOfBirth: '2012-01-01',
  nationality: 'Congolese',
  gradeApplying: item.grade,
  previousSchool: 'Previous school pending verification',
  languages: 'English, French',
  parentName: `${item.name.split(' ')[0]} Parent`,
  parentEmail: `${item.name.toLowerCase().replace(/\W+/g, '.')}@family.kcs.test`,
  parentPhone: `+243 810 300 00${index + 1}`,
  relationship: 'Guardian',
  address: 'Kinshasa, DRC',
  occupation: 'Pending',
  notes: 'Seed application available for Super Admin workflow preview.',
  documents: ['Application form', 'Transcript'],
  status: item.status === 'Accepted' ? 'ACCEPTED' : item.status === 'Under Review' ? 'UNDER_REVIEW' : 'SUBMITTED',
  submittedAt: new Date(2026, 3, 22 - index).toISOString(),
}))

const readStoredAdmissions = () => {
  if (typeof window === 'undefined') return admissionSeed
  try {
    const stored = JSON.parse(window.localStorage.getItem(ADMIN_ADMISSIONS_STORAGE_KEY) || '[]') as AdminAdmissionRequest[]
    const storedIds = new Set(stored.map((item) => item.applicationNumber))
    return [...stored, ...admissionSeed.filter((item) => !storedIds.has(item.applicationNumber))]
  } catch {
    return admissionSeed
  }
}

const readStoredRoster = () => {
  if (typeof window === 'undefined') return adminRosterSeed
  try {
    const stored = JSON.parse(window.localStorage.getItem(ADMIN_ROSTER_STORAGE_KEY) || '[]') as AdminStudentRecord[]
    return stored.length ? stored : adminRosterSeed
  } catch {
    return adminRosterSeed
  }
}

const saveAdmissions = (items: AdminAdmissionRequest[]) => {
  if (typeof window !== 'undefined') window.localStorage.setItem(ADMIN_ADMISSIONS_STORAGE_KEY, JSON.stringify(items))
}

const saveRoster = (items: AdminStudentRecord[]) => {
  if (typeof window !== 'undefined') window.localStorage.setItem(ADMIN_ROSTER_STORAGE_KEY, JSON.stringify(items))
}

const createStudentFromAdmission = (application: AdminAdmissionRequest): AdminStudentRecord => ({
  id: `adm-approved-${application.applicationNumber}`,
  name: application.studentName,
  grade: application.gradeApplying,
  section: 'A',
  parent: application.parentName,
  parentEmail: application.parentEmail,
  parentPhone: application.parentPhone,
  status: 'Active',
  gpa: 0,
  attendance: 100,
  discipline: 'Clear',
})

const staffSeed = [
  { id: 'staff-001', name: 'Dr. Mukendi', role: 'Science Teacher', department: 'High School', status: 'Present', time: '7:12 AM' },
  { id: 'staff-002', name: 'Mrs. Diallo', role: 'English Teacher', department: 'High School', status: 'Present', time: '7:18 AM' },
  { id: 'staff-003', name: 'Mr. Belanger', role: 'Math Teacher', department: 'Middle School', status: 'Late', time: '7:51 AM' },
  { id: 'staff-004', name: 'Registrar Office', role: 'Registrar', department: 'Administration', status: 'Present', time: '7:05 AM' },
  { id: 'staff-005', name: 'Discipline Office', role: 'Discipline Lead', department: 'Student Life', status: 'Absent', time: '-' },
]

const getAdminSegment = (pathname: string) => {
  const segment = pathname.split('/').filter(Boolean).at(-1)
  return !segment || segment === 'admin' || segment === 'dashboard' ? 'dashboard' : segment
}

const pillTone = (value: string) => {
  if (['Open', 'Absent', 'Urgent', 'high', 'Documents Missing', 'pending'].includes(value)) return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
  if (['Monitored', 'Late', 'Draft', 'medium', 'Under Review', 'partially paid'].includes(value)) return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
  return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
}

const adminButton = 'rounded-xl bg-kcs-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-kcs-blue-800'
const adminOutlineButton = 'rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-kcs-blue-700 transition-colors hover:bg-kcs-blue-50 dark:border-kcs-blue-700 dark:text-kcs-blue-200 dark:hover:bg-kcs-blue-800'

const AdminSectionView = ({
  segment,
  officialRoster,
  setOfficialRoster,
  admissionRequests,
  setAdmissionRequests,
}: {
  segment: string
  officialRoster: AdminStudentRecord[]
  setOfficialRoster: Dispatch<SetStateAction<AdminStudentRecord[]>>
  admissionRequests: AdminAdmissionRequest[]
  setAdmissionRequests: Dispatch<SetStateAction<AdminAdmissionRequest[]>>
}) => {
  const [selectedStudent, setSelectedStudent] = useState(officialRoster[0] ?? adminRosterSeed[0])
  const [selectedStaff, setSelectedStaff] = useState(staffSeed[0])
  const [sentNotice, setSentNotice] = useState('')
  const [newStudent, setNewStudent] = useState({
    name: '',
    grade: 'Grade 9',
    section: 'A',
    parent: '',
    parentEmail: '',
    parentPhone: '',
  })

  const registerOfficialStudent = () => {
    if (!newStudent.name.trim() || !newStudent.parent.trim()) return
    const record: AdminStudentRecord = {
      id: `manual-${Date.now()}`,
      name: newStudent.name.trim(),
      grade: newStudent.grade,
      section: newStudent.section,
      parent: newStudent.parent.trim(),
      parentEmail: newStudent.parentEmail.trim() || `${newStudent.parent.toLowerCase().replace(/\W+/g, '.')}@family.kcs.test`,
      parentPhone: newStudent.parentPhone.trim() || '+243 810 000 000',
      status: 'Active',
      gpa: 0,
      attendance: 100,
      discipline: 'Clear',
    }
    setOfficialRoster((items) => {
      const next = [record, ...items]
      saveRoster(next)
      return next
    })
    setSelectedStudent(record)
    setNewStudent({ name: '', grade: 'Grade 9', section: 'A', parent: '', parentEmail: '', parentPhone: '' })
  }

  const updateAdmissionStatus = (application: AdminAdmissionRequest, status: AdminAdmissionRequest['status']) => {
    setAdmissionRequests((items) => {
      const next = items.map((item) => item.applicationNumber === application.applicationNumber ? { ...item, status } : item)
      saveAdmissions(next)
      return next
    })

    if (status === 'ACCEPTED') {
      const approvedStudent = createStudentFromAdmission({ ...application, status })
      setOfficialRoster((items) => {
        if (items.some((item) => item.id === approvedStudent.id || item.name === approvedStudent.name)) return items
        const next = [approvedStudent, ...items]
        saveRoster(next)
        return next
      })
      setSelectedStudent(approvedStudent)
    }
  }

  const grade9to12 = useMemo(
    () => officialRoster.filter((student) => ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'].includes(student.grade)),
    [officialRoster]
  )

  if (segment === 'students') {
    return (
      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-bold text-kcs-blue-900 dark:text-white">Detailed Student Directory</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Official roster, parent contacts, attendance, GPA, and discipline status.</p>
            </div>
            <button className={adminButton} onClick={registerOfficialStudent}><UserPlus size={16} className="inline" /> Register student</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[860px] w-full text-sm">
              <thead className="text-left text-xs text-gray-400">
                <tr className="border-b border-gray-100 dark:border-kcs-blue-800">
                  <th className="pb-3 font-medium">Student</th>
                  <th className="pb-3 font-medium">Grade</th>
                  <th className="pb-3 font-medium">Parent</th>
                  <th className="pb-3 text-right font-medium">GPA</th>
                  <th className="pb-3 text-right font-medium">Attendance</th>
                  <th className="pb-3 text-right font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-kcs-blue-800/50">
                {officialRoster.map((student) => (
                  <tr key={student.id}>
                    <td className="py-3 font-semibold text-kcs-blue-900 dark:text-white">{student.name}</td>
                    <td className="py-3 text-gray-500 dark:text-gray-400">{student.grade} {student.section}</td>
                    <td className="py-3 text-gray-500 dark:text-gray-400">{student.parent}</td>
                    <td className="py-3 text-right font-bold text-kcs-blue-700 dark:text-kcs-blue-300">{student.gpa}</td>
                    <td className="py-3 text-right text-gray-600 dark:text-gray-300">{student.attendance}%</td>
                    <td className="py-3 text-right"><button className="rounded-lg bg-kcs-blue-50 px-3 py-1.5 text-xs font-semibold text-kcs-blue-700 hover:bg-kcs-blue-100 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-200" onClick={() => setSelectedStudent(student)}>Open</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
          <h2 className="font-bold text-kcs-blue-900 dark:text-white">Student & Parent Record</h2>
          <div className="mt-4 rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
            <p className="font-display text-2xl font-bold text-kcs-blue-900 dark:text-white">{selectedStudent.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{selectedStudent.grade} {selectedStudent.section} - {selectedStudent.status}</p>
          </div>
          <div className="mt-4 space-y-3 text-sm">
            {[
              ['Parent', selectedStudent.parent],
              ['Email', selectedStudent.parentEmail],
              ['Phone', selectedStudent.parentPhone],
              ['Discipline', selectedStudent.discipline],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">{label}</p>
                <p className="mt-1 font-semibold text-kcs-blue-900 dark:text-white">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <button className={adminButton}>Save record</button>
            <button className={adminOutlineButton}>Contact parent</button>
          </div>
          <div className="mt-6 rounded-2xl border border-kcs-blue-100 bg-kcs-blue-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/30">
            <h3 className="font-bold text-kcs-blue-900 dark:text-white">Register Student + Parent</h3>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">This official registry feeds teacher, parent, student, finance, attendance, and report-card modules.</p>
            <div className="mt-4 grid gap-3">
              <input value={newStudent.name} onChange={(event) => setNewStudent((item) => ({ ...item, name: event.target.value }))} className="rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white" placeholder="Student full name" />
              <div className="grid gap-3 sm:grid-cols-2">
                <select value={newStudent.grade} onChange={(event) => setNewStudent((item) => ({ ...item, grade: event.target.value }))} className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white">
                  {['K3', 'K4', 'K5', 'Kindergarten', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'].map((grade) => <option key={grade}>{grade}</option>)}
                </select>
                <select value={newStudent.section} onChange={(event) => setNewStudent((item) => ({ ...item, section: event.target.value }))} className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white">
                  {['A', 'B', 'C', 'D'].map((section) => <option key={section}>{section}</option>)}
                </select>
              </div>
              <input value={newStudent.parent} onChange={(event) => setNewStudent((item) => ({ ...item, parent: event.target.value }))} className="rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white" placeholder="Parent / guardian full name" />
              <input value={newStudent.parentEmail} onChange={(event) => setNewStudent((item) => ({ ...item, parentEmail: event.target.value }))} className="rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white" placeholder="Parent email" />
              <input value={newStudent.parentPhone} onChange={(event) => setNewStudent((item) => ({ ...item, parentPhone: event.target.value }))} className="rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white" placeholder="Parent phone" />
              <button className={adminButton} onClick={registerOfficialStudent}>Create official record</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (segment === 'transcripts') {
    return (
      <div className="space-y-6">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-bold text-kcs-blue-900 dark:text-white">Grade 9-12 Transcript Center</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Generate official transcripts using GPA, credits, report cards, and approval status.</p>
            </div>
            <button className={adminButton}>Batch export PDF</button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {grade9to12.map((student) => {
            const transcript = transcripts.find((item) => item.student === student.name)
            const report = reportCards.find((item) => item.student === student.name)
            return (
              <div key={student.id} className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-kcs-blue-900 dark:text-white">{student.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{student.grade} {student.section}</p>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${pillTone(transcript?.status ?? 'Draft')}`}>{transcript?.status ?? 'Draft'}</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30"><p className="font-bold text-kcs-blue-900 dark:text-white">{student.gpa}</p><p className="text-xs text-gray-400">GPA</p></div>
                  <div className="rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30"><p className="font-bold text-kcs-blue-900 dark:text-white">{transcript?.credits ?? 0}</p><p className="text-xs text-gray-400">Credits</p></div>
                  <div className="rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30"><p className="font-bold text-kcs-blue-900 dark:text-white">{report?.average ?? student.gpa * 25}</p><p className="text-xs text-gray-400">Avg</p></div>
                </div>
                <button className="mt-4 w-full rounded-xl bg-kcs-gold-500 px-4 py-2.5 text-sm font-bold text-kcs-blue-950 hover:bg-kcs-gold-400">Generate transcript</button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  if (segment === 'communications') {
    return (
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
          <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Communication Flows</h2>
          <div className="space-y-3">
            {communicationFlows.map((flow) => (
              <div key={flow.trigger} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                <p className="font-semibold text-kcs-blue-900 dark:text-white">{flow.trigger}</p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{flow.update}</p>
                <p className="mt-2 text-xs font-semibold text-kcs-gold-600 dark:text-kcs-gold-300">{flow.notification}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
          <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Send School Communication</h2>
          <div className="grid gap-3">
            <select className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white">
              <option>All parents, students, teachers, and staff</option>
              <option>Parents only</option>
              <option>Grade 9-12 families</option>
              <option>Staff only</option>
            </select>
            <input className="rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white" placeholder="Subject" />
            <textarea className="min-h-36 rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white" placeholder="Email, SMS, and portal message..." />
            <button className={adminButton} onClick={() => setSentNotice('Communication queued for email, SMS, and in-site inbox.')}>Send communication</button>
            {sentNotice && <p className="rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-300">{sentNotice}</p>}
          </div>
        </div>
      </div>
    )
  }

  if (segment === 'staff-attendance') {
    return (
      <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-bold text-kcs-blue-900 dark:text-white">Staff Attendance</h2>
            <button className={adminButton}>Export daily sheet</button>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {staffSeed.map((staff) => (
              <button key={staff.id} className="rounded-xl bg-gray-50 p-4 text-left transition-colors hover:bg-kcs-blue-50 dark:bg-kcs-blue-800/30 dark:hover:bg-kcs-blue-800" onClick={() => setSelectedStaff(staff)}>
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-kcs-blue-900 dark:text-white">{staff.name}</p>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${pillTone(staff.status)}`}>{staff.status}</span>
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{staff.role} - {staff.department} - {staff.time}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
          <h2 className="font-bold text-kcs-blue-900 dark:text-white">Selected Staff Member</h2>
          <div className="mt-4 rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
            <p className="font-display text-2xl font-bold text-kcs-blue-900 dark:text-white">{selectedStaff.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{selectedStaff.role} - {selectedStaff.department}</p>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Arrival: {selectedStaff.time}. Status: {selectedStaff.status}.</p>
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {['Present', 'Late', 'Absent'].map((status) => <button key={status} className={adminOutlineButton}>{status}</button>)}
          </div>
        </div>
      </div>
    )
  }

  if (segment === 'discipline') {
    return (
      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-bold text-kcs-blue-900 dark:text-white">Discipline Reports</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Aligned with teacher reports, parent contact, actions, and follow-up dates.</p>
            </div>
            <button className={adminButton}>Create report</button>
          </div>
          <div className="space-y-3">
            {disciplineReports.map((report) => (
              <div key={report.id} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-semibold text-kcs-blue-900 dark:text-white">{report.student}</p>
                  <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${pillTone(report.status)}`}>{report.status}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-kcs-blue-700 dark:text-kcs-blue-300">{report.category} - {report.date}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{report.incident}</p>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Parent contact: {report.parentContact}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
          <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Detailed Report Builder</h2>
          <div className="grid gap-3">
            <select className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white">
              {officialRoster.map((student) => <option key={student.id}>{student.name}</option>)}
            </select>
            <input className="rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white" placeholder="Incident category" />
            <textarea className="min-h-28 rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white" placeholder="Incident details, context, action taken, follow-up..." />
            <button className={adminButton}>Save discipline report</button>
          </div>
        </div>
      </div>
    )
  }

  if (segment === 'teachers') {
    return (
      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
          <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Teachers & Load</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {staffLoad.map((teacher) => (
              <div key={teacher.teacher} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-kcs-blue-900 dark:text-white">{teacher.teacher}</p>
                  <span className="rounded-full bg-kcs-blue-100 px-2.5 py-1 text-xs font-semibold text-kcs-blue-700 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-300">{teacher.load}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">AI support: {teacher.aiSupport}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
          <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Staff Operations</h2>
          <div className="space-y-3">
            {staffOperations.map((item) => (
              <div key={item.function} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                <div className="flex items-center justify-between"><p className="font-semibold text-kcs-blue-900 dark:text-white">{item.function}</p><span className="font-bold text-kcs-blue-700 dark:text-kcs-blue-300">{item.value}</span></div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.metric} - {item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (segment === 'courses') {
    return (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {subjects.map((subject) => (
          <div key={subject.id} className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
            <p className="font-display text-xl font-bold text-kcs-blue-900 dark:text-white">{subject.name}</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{subject.className} - {subject.room}</p>
            <p className="mt-3 text-sm font-semibold text-kcs-blue-700 dark:text-kcs-blue-300">{subject.teacher}</p>
            <button className="mt-4 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-kcs-blue-700 hover:bg-kcs-blue-50 dark:border-kcs-blue-700 dark:text-kcs-blue-200 dark:hover:bg-kcs-blue-800">Edit course</button>
          </div>
        ))}
      </div>
    )
  }

  if (segment === 'admissions') {
    return (
      <div className="space-y-6">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-bold text-kcs-blue-900 dark:text-white">Online Admissions Approval Desk</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Every online submission lands here for Super Admin approval, rejection, or conversion into the official registry.</p>
            </div>
            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700 dark:bg-red-900/30 dark:text-red-300">
              {admissionRequests.filter((item) => item.status === 'SUBMITTED' || item.status === 'UNDER_REVIEW').length} pending decisions
            </span>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {admissionRequests.map((item) => (
            <div key={item.applicationNumber} className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-semibold text-kcs-blue-900 dark:text-white">{item.studentName}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.gradeApplying} - {item.applicationNumber}</p>
                </div>
                <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${pillTone(item.status)}`}>{item.status.replace('_', ' ')}</span>
              </div>
              <div className="mt-4 space-y-2 rounded-xl bg-gray-50 p-4 text-sm dark:bg-kcs-blue-800/30">
                <p className="font-semibold text-kcs-blue-900 dark:text-white">{item.parentName}</p>
                <p className="text-gray-500 dark:text-gray-400">{item.parentEmail} - {item.parentPhone}</p>
                <p className="text-gray-500 dark:text-gray-400">Previous school: {item.previousSchool}</p>
                <p className="text-gray-500 dark:text-gray-400">Docs: {item.documents?.length ? item.documents.join(', ') : 'Pending document review'}</p>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <button className={adminOutlineButton} onClick={() => updateAdmissionStatus(item, 'UNDER_REVIEW')}>Review</button>
                <button className={adminOutlineButton} onClick={() => updateAdmissionStatus(item, 'INTERVIEW_SCHEDULED')}>Interview</button>
                <button className="rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-700" onClick={() => updateAdmissionStatus(item, 'ACCEPTED')}>Approve + create student</button>
                <button className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700" onClick={() => updateAdmissionStatus(item, 'REJECTED')}>Refuse</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (segment === 'finance') {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          {feeAccounts.map((fee) => (
            <div key={fee.invoice} className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="flex items-center justify-between gap-3"><p className="font-semibold text-kcs-blue-900 dark:text-white">{fee.invoice}</p><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${pillTone(fee.status)}`}>{fee.status}</span></div>
              <p className="mt-3 font-display text-3xl font-bold text-kcs-blue-900 dark:text-white">${fee.balance}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{fee.family} - last payment ${fee.lastPayment}</p>
              <button className="mt-4 w-full rounded-xl bg-kcs-gold-500 px-4 py-2.5 text-sm font-bold text-kcs-blue-950 hover:bg-kcs-gold-400">Receipt / statement</button>
            </div>
          ))}
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {financeReadiness.map((item) => (
            <div key={item.feature} className="rounded-xl bg-green-50 p-4 dark:bg-green-900/10"><p className="font-semibold text-green-800 dark:text-green-300">{item.feature}</p><p className="mt-1 text-sm text-green-700 dark:text-green-400">{item.note}</p></div>
          ))}
        </div>
      </div>
    )
  }

  if (segment === 'reports') {
    return (
      <div className="grid gap-6 xl:grid-cols-3">
        {[
          ['Enrollment report', 'Students, admissions, grade growth, family status'],
          ['Academic report', 'Grades, report cards, transcripts, risk flags'],
          ['Operations report', 'Finance, staff attendance, discipline, communications'],
        ].map(([title, detail]) => (
          <div key={title} className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
            <FileText className="text-kcs-blue-600 dark:text-kcs-blue-300" />
            <p className="mt-4 font-display text-xl font-bold text-kcs-blue-900 dark:text-white">{title}</p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{detail}</p>
            <button className="mt-4 w-full rounded-xl bg-kcs-blue-700 px-4 py-2.5 text-sm font-semibold text-white">Generate report</button>
          </div>
        ))}
      </div>
    )
  }

  if (segment === 'news' || segment === 'media') {
    return (
      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
          <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">{segment === 'news' ? 'News & Events Publishing' : 'Media & Live Broadcasts'}</h2>
          <div className="space-y-3">
            {liveEventControls.map((event) => (
              <div key={event.title} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                <div className="flex items-center justify-between gap-3"><p className="font-semibold text-kcs-blue-900 dark:text-white">{event.title}</p><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${event.status === 'Live now' ? 'bg-red-600 text-white' : 'bg-kcs-gold-100 text-kcs-blue-800 dark:bg-kcs-gold-900/30 dark:text-kcs-gold-300'}`}>{event.status}</span></div>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{event.platform} - {event.audience}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
          <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Publish Item</h2>
          <div className="grid gap-3">
            <input className="rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white" placeholder="Title" />
            <textarea className="min-h-32 rounded-xl border border-gray-200 px-4 py-3 text-sm dark:border-kcs-blue-700 dark:bg-kcs-blue-950 dark:text-white" placeholder="Details, audience, media notes..." />
            <button className={adminButton}>Publish</button>
          </div>
        </div>
      </div>
    )
  }

  if (segment === 'analytics') {
    return (
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
          <h2 className="mb-5 font-bold text-kcs-blue-900 dark:text-white">AI Analytics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={enrollmentTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.15)" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: '#0f2352', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '12px' }} />
              <Area type="monotone" dataKey="students" stroke="#1d4ed8" fill="#dbeafe" strokeWidth={2.5} />
              <Area type="monotone" dataKey="applications" stroke="#f59e0b" fill="#fef3c7" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-3">
          {aiSignals.concat(aiRecommendations.map((item) => ({ title: item.title, detail: item.action, severity: item.impact, roles: [item.owner] }))).map((signal) => (
            <div key={`${signal.title}-${signal.severity}`} className="rounded-2xl border border-gray-100 bg-white p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <p className="font-semibold text-kcs-blue-900 dark:text-white">{signal.title}</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{signal.detail}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (segment === 'settings') {
    return (
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
          <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Role Permissions</h2>
          <div className="space-y-3">
            {Object.entries(rolePermissions).map(([role, permissions]) => (
              <div key={role} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                <p className="font-semibold capitalize text-kcs-blue-900 dark:text-white">{role === 'admin' ? 'Super Admin' : role}</p>
                <div className="mt-2 flex flex-wrap gap-2">{permissions.map((permission) => <span key={permission} className="rounded-full bg-white px-2.5 py-1 text-xs text-gray-600 dark:bg-kcs-blue-900/60 dark:text-gray-300">{permission}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
          <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Audit & Sensitive Actions</h2>
          <div className="space-y-3">
            {[...sensitiveActions.map((item) => ({ title: item.action, detail: `${item.requester} - ${item.status}`, tone: item.risk })), ...auditLogs.map((log) => ({ title: log.action, detail: `${log.actor} - ${log.target} - ${log.time}`, tone: 'Audit' }))].map((item) => (
              <div key={`${item.title}-${item.detail}`} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                <div className="flex items-center justify-between gap-3"><p className="font-semibold text-kcs-blue-900 dark:text-white">{item.title}</p><span className="rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-300">{item.tone}</span></div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return <PortalSectionPanel />
}

const AdminDashboard = () => {
  const { user } = useAuthStore()
  const location = useLocation()
  const activeSegment = getAdminSegment(location.pathname)
  const [officialRoster, setOfficialRoster] = useState<AdminStudentRecord[]>(readStoredRoster)
  const [admissionRequests, setAdmissionRequests] = useState<AdminAdmissionRequest[]>(readStoredAdmissions)
  const pendingAdmissions = admissionRequests.filter((item) => item.status === 'SUBMITTED' || item.status === 'UNDER_REVIEW')

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

        <div className="space-y-6 p-4 sm:p-6">
          {activeSegment !== 'dashboard' ? (
            <AdminSectionView
              segment={activeSegment}
              officialRoster={officialRoster}
              setOfficialRoster={setOfficialRoster}
              admissionRequests={admissionRequests}
              setAdmissionRequests={setAdmissionRequests}
            />
          ) : (
            <>
          <PortalSectionPanel />

          <div className="grid grid-cols-2 gap-4 xl:grid-cols-5">
            {[
              { label: 'Official Registry', value: String(officialRoster.length), icon: GraduationCap, tone: 'bg-kcs-blue-50 text-kcs-blue-700 dark:bg-kcs-blue-900/30 dark:text-kcs-blue-300', sub: 'students controlled by Super Admin' },
              { label: 'Faculty Members', value: '64', icon: Users, tone: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300', sub: '92% retention' },
              { label: 'Open Applications', value: String(pendingAdmissions.length), icon: FileText, tone: 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300', sub: 'approval or refusal required' },
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
                {admissionRequests.slice(0, 5).map((item) => (
                  <div key={item.applicationNumber} className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/20">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-kcs-blue-900 dark:text-white">{item.studentName}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.gradeApplying} - {item.parentName}</p>
                      </div>
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${pillTone(item.status)}`}>
                        {item.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
                      <Clock3 size={12} /> Submitted {new Date(item.submittedAt).toLocaleDateString()}
                    </div>
                    {(item.status === 'SUBMITTED' || item.status === 'UNDER_REVIEW') && (
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <button className="rounded-lg bg-green-600 px-3 py-2 text-xs font-bold text-white" onClick={() => {
                          const approvedStudent = createStudentFromAdmission({ ...item, status: 'ACCEPTED' })
                          setAdmissionRequests((items) => {
                            const next = items.map((application) => application.applicationNumber === item.applicationNumber ? { ...application, status: 'ACCEPTED' as const } : application)
                            saveAdmissions(next)
                            return next
                          })
                          setOfficialRoster((records) => {
                            if (records.some((record) => record.id === approvedStudent.id || record.name === approvedStudent.name)) return records
                            const next = [approvedStudent, ...records]
                            saveRoster(next)
                            return next
                          })
                        }}>Approve</button>
                        <button className="rounded-lg bg-red-600 px-3 py-2 text-xs font-bold text-white" onClick={() => setAdmissionRequests((items) => {
                          const next = items.map((application) => application.applicationNumber === item.applicationNumber ? { ...application, status: 'REJECTED' as const } : application)
                          saveAdmissions(next)
                          return next
                        })}>Refuse</button>
                      </div>
                    )}
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
                {officialRoster.slice(0, 6).map((student) => (
                  <div key={student.id} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-kcs-blue-900 dark:text-white">{student.name}</p>
                      <span className={`rounded-full px-2 py-1 text-xs font-semibold ${pillTone(student.discipline)}`}>{student.discipline}</span>
                    </div>
                    <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">{student.grade} {student.section} - GPA {student.gpa} - attendance {student.attendance}% - parent: {student.parent}</p>
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
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard
