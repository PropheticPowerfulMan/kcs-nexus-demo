import { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Bell, BookOpen, Brain, Calendar, CheckCircle2, ChevronRight,
  Clock, FileText, GraduationCap, MessageSquare, TrendingUp, Users, AlertTriangle, ClipboardCheck
} from 'lucide-react'
import PortalSidebar from '@/components/layout/PortalSidebar'
import PortalSectionPanel from '@/components/shared/PortalSectionPanel'
import { useAuthStore } from '@/store/authStore'
import {
  aiSignals,
  aiRecommendations,
  assignments as ecosystemAssignments,
  attendance as ecosystemAttendance,
  attendanceAnalytics,
  disciplineReports,
  grades as ecosystemGrades,
  gradebookCategories,
  gradingScales,
  internalThreads,
  lmsResources,
  messages as ecosystemMessages,
  reportCards,
  schedules as ecosystemSchedules,
  students as ecosystemStudents,
  subjects,
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

const getTeacherSegment = (pathname: string) => {
  const segment = pathname.split('/').filter(Boolean).at(-1)
  return !segment || segment === 'teacher' || segment === 'dashboard' ? 'dashboard' : segment
}

const statusTone = (value: string) => {
  if (['high', 'absent', 'missing', 'Open'].includes(value)) return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
  if (['medium', 'late', 'pending', 'Pending confirmation'].includes(value)) return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
  return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
}

const TeacherSectionView = ({ segment }: { segment: string }) => {
  const sectionTitles: Record<string, { title: string; subtitle: string; icon: React.ElementType }> = {
    courses: { title: 'My Courses', subtitle: 'Assigned classes, rooms, schedules, and teaching load.', icon: BookOpen },
    students: { title: 'Students', subtitle: 'Academic profile, risk level, strengths, and support needs for each learner.', icon: Users },
    attendance: { title: 'Attendance', subtitle: 'Daily attendance records, class trends, and follow-up signals.', icon: ClipboardCheck },
    assignments: { title: 'Assignments', subtitle: 'Homework status, priorities, missing work, and LMS resources.', icon: FileText },
    grades: { title: 'Grade Book', subtitle: 'Recent scores, grading categories, scale, and release status.', icon: TrendingUp },
    reports: { title: 'Reports', subtitle: 'Report cards, AI comments, exports, and principal approval status.', icon: GraduationCap },
    discipline: { title: 'Detailed Student Discipline Report', subtitle: 'Incident context, action taken, parent contact, and follow-up plan.', icon: AlertTriangle },
    messages: { title: 'Messages', subtitle: 'Teacher inbox, parent threads, and internal coordination messages.', icon: MessageSquare },
  }

  const meta = sectionTitles[segment] ?? sectionTitles.reports
  const Icon = meta.icon
  const superAdminStudentPool = useMemo(() => [
    ...ecosystemStudents,
    {
      id: 'stu-grace',
      name: 'Grace Mwamba',
      grade: 'Grade 10',
      section: 'A',
      parentId: 'parent-mwamba',
      advisor: 'Mrs. Diallo',
      average: 84,
      gpa: 3.3,
      rank: 11,
      attendance: 93,
      risk: 'low',
      strengths: ['Research notes', 'Peer collaboration'],
      weaknesses: ['Lab vocabulary'],
      aiInsight: 'Grace is ready for a science extension project and needs targeted academic vocabulary support.',
    },
    {
      id: 'stu-naomi',
      name: 'Naomi Kanku',
      grade: 'Grade 9',
      section: 'C',
      parentId: 'parent-kanku',
      advisor: 'Dr. Mukendi',
      average: 72,
      gpa: 2.4,
      rank: 24,
      attendance: 84,
      risk: 'high',
      strengths: ['Curiosity', 'Practical labs'],
      weaknesses: ['Attendance rhythm', 'Written explanations'],
      aiInsight: 'Naomi needs an attendance intervention, short written-response practice, and weekly parent check-ins.',
    },
  ], [])

  const [actionMessage, setActionMessage] = useState('')
  const [courses, setCourses] = useState(() =>
    subjects.map((subject) => ({
      ...subject,
      studentIds: subject.className.includes('11') ? ['stu-elise'] : subject.className.includes('8') ? ['stu-david'] : [],
      status: 'active',
    })),
  )
  const [teacherStudents, setTeacherStudents] = useState(() => ecosystemStudents)
  const [attendanceEntries, setAttendanceEntries] = useState(() => ecosystemAttendance)
  const [assignmentList, setAssignmentList] = useState(() => ecosystemAssignments)
  const [gradeEntries, setGradeEntries] = useState(() => ecosystemGrades)
  const [reportList, setReportList] = useState(() => reportCards)
  const [disciplineList, setDisciplineList] = useState(() => disciplineReports)
  const [inbox, setInbox] = useState(() => [
    ...messages.map((message) => ({ ...message, body: message.subject, requiresResponse: message.id === 3 })),
    ...ecosystemMessages.filter((message) => message.toRole === 'teacher').map((message, index) => ({
      id: index + 10,
      from: message.from,
      subject: message.subject,
      body: message.body,
      time: message.requiresResponse ? 'Response needed' : 'FYI',
      requiresResponse: message.requiresResponse,
    })),
  ])

  const [courseDraft, setCourseDraft] = useState({
    name: 'Integrated Science Lab',
    className: 'Grade 10A',
    room: 'Lab 2',
    studentId: superAdminStudentPool[0].id,
  })
  const [selectedStudentId, setSelectedStudentId] = useState(superAdminStudentPool[0].id)
  const [attendanceDraft, setAttendanceDraft] = useState({
    studentId: superAdminStudentPool[0].id,
    date: 'Apr 29',
    status: 'present',
    className: 'Grade 11A',
  })
  const [assignmentDraft, setAssignmentDraft] = useState({
    studentId: superAdminStudentPool[0].id,
    title: 'Exit ticket reflection',
    subject: 'AP Biology',
    due: 'Tomorrow',
    status: 'pending',
    priority: 'medium',
  })
  const [gradeDraft, setGradeDraft] = useState({
    studentId: superAdminStudentPool[0].id,
    subject: 'AP Biology',
    assessment: 'Quick Check',
    score: 88,
    max: 100,
    date: 'Apr 29',
  })
  const [reportDraft, setReportDraft] = useState({
    student: superAdminStudentPool[0].name,
    term: 'Term 3',
    average: 88,
    conduct: 'Good',
    teacherComment: 'Shows steady progress and responds well to targeted feedback.',
  })
  const [disciplineDraft, setDisciplineDraft] = useState({
    studentId: superAdminStudentPool[1].id,
    category: 'Classroom conduct',
    incident: 'Needs a documented follow-up after repeated disruption during group activity.',
    actionTaken: 'Teacher conference completed and behavior target assigned.',
    followUp: 'Review progress in one week with advisor.',
    level: 'medium',
  })
  const [messageDraft, setMessageDraft] = useState({
    to: 'Academic Coordinator',
    subject: 'Student support update',
    body: 'Please review the new intervention note and confirm next steps.',
  })

  const findStudent = (studentId: string) => superAdminStudentPool.find((student) => student.id === studentId)
  const runAction = (message: string) => setActionMessage(message)

  const createCourse = () => {
    const nextCourse = {
      id: `course-${Date.now()}`,
      name: courseDraft.name,
      teacher: 'Dr. Mukendi',
      className: courseDraft.className,
      room: courseDraft.room,
      studentIds: courseDraft.studentId ? [courseDraft.studentId] : [],
      status: 'draft',
    }
    setCourses((current) => [nextCourse, ...current])
    const student = findStudent(courseDraft.studentId)
    if (student && !teacherStudents.some((item) => item.id === student.id)) setTeacherStudents((current) => [student, ...current])
    runAction(`${nextCourse.name} created and prepared for Super Admin sync.`)
  }

  const importStudent = () => {
    const student = findStudent(selectedStudentId)
    if (!student) return
    setTeacherStudents((current) => current.some((item) => item.id === student.id) ? current : [student, ...current])
    runAction(`${student.name} imported from the Super Admin student registry.`)
  }

  const addAttendance = () => {
    const student = findStudent(attendanceDraft.studentId)
    setAttendanceEntries((current) => [{ ...attendanceDraft }, ...current])
    runAction(`${student?.name ?? 'Student'} marked ${attendanceDraft.status}; parent/admin visibility queued.`)
  }

  const createAssignment = () => {
    const student = findStudent(assignmentDraft.studentId)
    setAssignmentList((current) => [{ id: `asg-${Date.now()}`, ...assignmentDraft }, ...current])
    runAction(`${assignmentDraft.title} assigned to ${student?.name ?? 'selected student'}.`)
  }

  const addGrade = () => {
    const student = findStudent(gradeDraft.studentId)
    setGradeEntries((current) => [{ ...gradeDraft, teacher: 'Dr. Mukendi' }, ...current])
    runAction(`${gradeDraft.assessment} saved for ${student?.name ?? 'selected student'} and ready for report cards.`)
  }

  const createReport = () => {
    setReportList((current) => [{ ...reportDraft, principalStatus: 'Pending review', download: 'Draft' }, ...current])
    runAction(`${reportDraft.student}'s report draft created for principal approval.`)
  }

  const createDisciplineReport = () => {
    const student = findStudent(disciplineDraft.studentId)
    setDisciplineList((current) => [{
      id: `disc-${String(current.length + 1).padStart(3, '0')}`,
      studentId: disciplineDraft.studentId,
      student: student?.name ?? 'Selected student',
      date: 'Apr 29',
      level: disciplineDraft.level,
      category: disciplineDraft.category,
      incident: disciplineDraft.incident,
      context: 'Teacher-created record from classroom observation and linked student data.',
      actionTaken: disciplineDraft.actionTaken,
      followUp: disciplineDraft.followUp,
      parentContact: 'Draft message prepared',
      status: 'Open',
    }, ...current])
    runAction(`Detailed discipline report opened for ${student?.name ?? 'selected student'}.`)
  }

  const sendMessage = () => {
    setInbox((current) => [{
      id: Date.now(),
      from: `To ${messageDraft.to}`,
      subject: messageDraft.subject,
      body: messageDraft.body,
      time: 'Just now',
      requiresResponse: false,
    }, ...current])
    runAction(`Message sent to ${messageDraft.to} and logged in the teacher thread.`)
  }

  const inputClass = 'input-kcs py-2 text-sm'
  const panelClass = 'rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50'
  const compactButton = 'rounded-xl bg-kcs-blue-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-kcs-blue-800'

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-kcs-blue-100 bg-white p-5 shadow-sm dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-kcs-blue-50 text-kcs-blue-700 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-300">
              <Icon size={22} />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-kcs-blue-900 dark:text-white">{meta.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{meta.subtitle}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => runAction('Workspace saved locally and queued for backend sync.')} className="btn-primary flex items-center gap-2 py-2 text-sm"><CheckCircle2 size={16} /> Save updates</button>
            <button onClick={() => runAction(`${meta.title} export prepared.`)} className="btn-gold flex items-center gap-2 py-2 text-sm"><FileText size={16} /> Export PDF</button>
          </div>
        </div>
      </div>

      {actionMessage && (
        <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700 dark:border-green-900/40 dark:bg-green-900/20 dark:text-green-300">
          {actionMessage}
        </div>
      )}

      {segment === 'courses' && (
        <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
          <div className={panelClass}>
            <h3 className="font-bold text-kcs-blue-900 dark:text-white">Create a course</h3>
            <div className="mt-4 grid gap-3">
              <input className={inputClass} value={courseDraft.name} onChange={(event) => setCourseDraft((draft) => ({ ...draft, name: event.target.value }))} placeholder="Course name" />
              <input className={inputClass} value={courseDraft.className} onChange={(event) => setCourseDraft((draft) => ({ ...draft, className: event.target.value }))} placeholder="Class / section" />
              <input className={inputClass} value={courseDraft.room} onChange={(event) => setCourseDraft((draft) => ({ ...draft, room: event.target.value }))} placeholder="Room" />
              <select className={inputClass} value={courseDraft.studentId} onChange={(event) => setCourseDraft((draft) => ({ ...draft, studentId: event.target.value }))}>
                {superAdminStudentPool.map((student) => <option key={student.id} value={student.id}>{student.name} - {student.grade}{student.section}</option>)}
              </select>
              <button onClick={createCourse} className={compactButton}>Create course and attach student</button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {courses.map((subject) => (
              <div key={subject.id} className={panelClass}>
                <p className="text-xs font-semibold uppercase text-kcs-blue-500">{subject.className}</p>
                <h3 className="mt-2 font-bold text-kcs-blue-900 dark:text-white">{subject.name}</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{subject.room} - {subject.teacher}</p>
                <p className="mt-3 text-xs font-semibold text-kcs-blue-600 dark:text-kcs-blue-300">{subject.studentIds.length} student(s) attached - {subject.status}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {superAdminStudentPool.slice(0, 3).map((student) => (
                    <button
                      key={student.id}
                      onClick={() => {
                        setCourses((current) => current.map((course) => course.id === subject.id && !course.studentIds.includes(student.id) ? { ...course, studentIds: [...course.studentIds, student.id] } : course))
                        if (!teacherStudents.some((item) => item.id === student.id)) setTeacherStudents((current) => [student, ...current])
                        runAction(`${student.name} attached to ${subject.name}.`)
                      }}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 hover:bg-kcs-blue-50 hover:text-kcs-blue-700 dark:bg-kcs-blue-800/40 dark:text-gray-300"
                    >
                      + {student.name.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {segment === 'students' && (
        <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          <div className={panelClass}>
            <h3 className="font-bold text-kcs-blue-900 dark:text-white">Import from Super Admin registry</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Teacher-created rosters must be based on official school records.</p>
            <div className="mt-4 grid gap-3">
              <select className={inputClass} value={selectedStudentId} onChange={(event) => setSelectedStudentId(event.target.value)}>
                {superAdminStudentPool.map((student) => <option key={student.id} value={student.id}>{student.name} - {student.grade}{student.section} - {student.risk} risk</option>)}
              </select>
              <button onClick={importStudent} className={compactButton}>Add to my students</button>
            </div>
            <div className="mt-5 rounded-xl bg-kcs-blue-50 p-4 text-sm text-kcs-blue-800 dark:bg-kcs-blue-900/30 dark:text-kcs-blue-200">
              {superAdminStudentPool.length} verified students available from the school registry.
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
          {teacherStudents.map((student) => (
            <div key={student.id} className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold text-kcs-blue-900 dark:text-white">{student.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{student.grade}{student.section} - advisor {student.advisor}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusTone(student.risk)}`}>{student.risk} risk</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                <div><p className="font-bold text-kcs-blue-900 dark:text-white">{student.average}%</p><p className="text-xs text-gray-500">Average</p></div>
                <div><p className="font-bold text-kcs-blue-900 dark:text-white">{student.attendance}%</p><p className="text-xs text-gray-500">Attendance</p></div>
                <div><p className="font-bold text-kcs-blue-900 dark:text-white">#{student.rank}</p><p className="text-xs text-gray-500">Rank</p></div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{student.aiInsight}</p>
            </div>
          ))}
          </div>
        </div>
      )}

      {segment === 'attendance' && (
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
            <h3 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Daily Register</h3>
            <div className="mb-4 grid gap-3 rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30">
              <select className={inputClass} value={attendanceDraft.studentId} onChange={(event) => setAttendanceDraft((draft) => ({ ...draft, studentId: event.target.value }))}>
                {teacherStudents.map((student) => <option key={student.id} value={student.id}>{student.name}</option>)}
              </select>
              <div className="grid gap-2 sm:grid-cols-3">
                <input className={inputClass} value={attendanceDraft.date} onChange={(event) => setAttendanceDraft((draft) => ({ ...draft, date: event.target.value }))} />
                <select className={inputClass} value={attendanceDraft.status} onChange={(event) => setAttendanceDraft((draft) => ({ ...draft, status: event.target.value }))}>
                  <option value="present">Present</option>
                  <option value="late">Late</option>
                  <option value="absent">Absent</option>
                </select>
                <button onClick={addAttendance} className={compactButton}>Mark</button>
              </div>
            </div>
            <div className="space-y-3">
              {attendanceEntries.map((record, index) => {
                const student = findStudent(record.studentId)
                return (
                  <div key={`${record.studentId}-${record.date}-${index}`} className="flex items-center justify-between rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30">
                    <div>
                      <p className="text-sm font-semibold text-kcs-blue-900 dark:text-white">{student?.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{record.date} - {record.className}</p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusTone(record.status)}`}>{record.status}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {attendanceAnalytics.map((item) => (
              <div key={item.scope} className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
                <p className="text-sm font-semibold text-kcs-blue-900 dark:text-white">{item.scope}</p>
                <p className="mt-3 font-display text-3xl font-bold text-kcs-blue-900 dark:text-white">{item.present}%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.late}% late - {item.absent}% absent</p>
                <p className="mt-3 text-xs font-semibold capitalize text-kcs-blue-600 dark:text-kcs-blue-300">{item.trend}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {segment === 'assignments' && (
        <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
          <div className={panelClass}>
            <h3 className="font-bold text-kcs-blue-900 dark:text-white">Create assignment</h3>
            <div className="mt-4 grid gap-3">
              <select className={inputClass} value={assignmentDraft.studentId} onChange={(event) => setAssignmentDraft((draft) => ({ ...draft, studentId: event.target.value }))}>
                {teacherStudents.map((student) => <option key={student.id} value={student.id}>{student.name}</option>)}
              </select>
              <input className={inputClass} value={assignmentDraft.title} onChange={(event) => setAssignmentDraft((draft) => ({ ...draft, title: event.target.value }))} />
              <input className={inputClass} value={assignmentDraft.subject} onChange={(event) => setAssignmentDraft((draft) => ({ ...draft, subject: event.target.value }))} />
              <div className="grid gap-2 sm:grid-cols-3">
                <input className={inputClass} value={assignmentDraft.due} onChange={(event) => setAssignmentDraft((draft) => ({ ...draft, due: event.target.value }))} />
                <select className={inputClass} value={assignmentDraft.priority} onChange={(event) => setAssignmentDraft((draft) => ({ ...draft, priority: event.target.value }))}>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <button onClick={createAssignment} className={compactButton}>Assign</button>
              </div>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
          {assignmentList.map((assignment) => {
            const student = findStudent(assignment.studentId)
            return (
              <div key={assignment.id} className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-kcs-blue-900 dark:text-white">{assignment.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{assignment.subject} - {student?.name}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusTone(assignment.status)}`}>{assignment.status}</span>
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">Due: {assignment.due} - Priority: {assignment.priority}</p>
              </div>
            )
          })}
          </div>
        </div>
      )}

      {segment === 'grades' && (
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
            <h3 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Recent Grade Entries</h3>
            <div className="mb-4 grid gap-3 rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30">
              <select className={inputClass} value={gradeDraft.studentId} onChange={(event) => setGradeDraft((draft) => ({ ...draft, studentId: event.target.value }))}>
                {teacherStudents.map((student) => <option key={student.id} value={student.id}>{student.name}</option>)}
              </select>
              <div className="grid gap-2 md:grid-cols-5">
                <input className={inputClass} value={gradeDraft.subject} onChange={(event) => setGradeDraft((draft) => ({ ...draft, subject: event.target.value }))} />
                <input className={inputClass} value={gradeDraft.assessment} onChange={(event) => setGradeDraft((draft) => ({ ...draft, assessment: event.target.value }))} />
                <input className={inputClass} type="number" value={gradeDraft.score} onChange={(event) => setGradeDraft((draft) => ({ ...draft, score: Number(event.target.value) }))} />
                <input className={inputClass} value={gradeDraft.date} onChange={(event) => setGradeDraft((draft) => ({ ...draft, date: event.target.value }))} />
                <button onClick={addGrade} className={compactButton}>Add</button>
              </div>
            </div>
            <div className="space-y-3">
              {gradeEntries.map((grade, index) => {
                const student = findStudent(grade.studentId)
                return (
                  <div key={`${grade.studentId}-${grade.assessment}-${index}`} className="rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30">
                    <p className="text-sm font-semibold text-kcs-blue-900 dark:text-white">{student?.name} - {grade.subject}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{grade.assessment} - {grade.score}/{grade.max} - {grade.date}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
            <h3 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Category Weights</h3>
            <div className="space-y-3">
              {gradebookCategories.map((category) => (
                <div key={category.name}>
                  <div className="flex justify-between text-sm font-semibold text-kcs-blue-900 dark:text-white"><span>{category.name}</span><span>{category.weight}%</span></div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-kcs-blue-800"><div className="h-full bg-kcs-blue-600" style={{ width: `${category.average}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {segment === 'reports' && (
        <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
          <div className={panelClass}>
            <h3 className="font-bold text-kcs-blue-900 dark:text-white">Draft report card</h3>
            <div className="mt-4 grid gap-3">
              <select className={inputClass} value={reportDraft.student} onChange={(event) => setReportDraft((draft) => ({ ...draft, student: event.target.value }))}>
                {teacherStudents.map((student) => <option key={student.id} value={student.name}>{student.name}</option>)}
              </select>
              <div className="grid gap-2 sm:grid-cols-2">
                <input className={inputClass} value={reportDraft.term} onChange={(event) => setReportDraft((draft) => ({ ...draft, term: event.target.value }))} />
                <input className={inputClass} type="number" value={reportDraft.average} onChange={(event) => setReportDraft((draft) => ({ ...draft, average: Number(event.target.value) }))} />
              </div>
              <input className={inputClass} value={reportDraft.conduct} onChange={(event) => setReportDraft((draft) => ({ ...draft, conduct: event.target.value }))} />
              <textarea className={inputClass} value={reportDraft.teacherComment} onChange={(event) => setReportDraft((draft) => ({ ...draft, teacherComment: event.target.value }))} rows={4} />
              <button onClick={createReport} className={compactButton}>Create report draft</button>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
          {reportList.map((card, index) => (
            <div key={card.student} className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold text-kcs-blue-900 dark:text-white">{card.student}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{card.term} - Average {card.average}% - Conduct {card.conduct}</p>
                </div>
                <span className="badge-blue text-xs">{card.principalStatus}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{card.teacherComment}</p>
              <p className="mt-3 text-xs font-semibold text-kcs-blue-600 dark:text-kcs-blue-300">{card.download}</p>
            </div>
          ))}
          </div>
        </div>
      )}

      {segment === 'discipline' && (
        <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          <div className={panelClass}>
            <h3 className="font-bold text-kcs-blue-900 dark:text-white">Open discipline report</h3>
            <div className="mt-4 grid gap-3">
              <select className={inputClass} value={disciplineDraft.studentId} onChange={(event) => setDisciplineDraft((draft) => ({ ...draft, studentId: event.target.value }))}>
                {teacherStudents.map((student) => <option key={student.id} value={student.id}>{student.name}</option>)}
              </select>
              <input className={inputClass} value={disciplineDraft.category} onChange={(event) => setDisciplineDraft((draft) => ({ ...draft, category: event.target.value }))} />
              <textarea className={inputClass} value={disciplineDraft.incident} onChange={(event) => setDisciplineDraft((draft) => ({ ...draft, incident: event.target.value }))} rows={3} />
              <textarea className={inputClass} value={disciplineDraft.actionTaken} onChange={(event) => setDisciplineDraft((draft) => ({ ...draft, actionTaken: event.target.value }))} rows={3} />
              <textarea className={inputClass} value={disciplineDraft.followUp} onChange={(event) => setDisciplineDraft((draft) => ({ ...draft, followUp: event.target.value }))} rows={3} />
              <select className={inputClass} value={disciplineDraft.level} onChange={(event) => setDisciplineDraft((draft) => ({ ...draft, level: event.target.value }))}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <button onClick={createDisciplineReport} className={compactButton}>Create detailed report</button>
            </div>
          </div>
          <div className="space-y-4">
          {disciplineList.map((report) => (
            <article key={report.id} className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase text-kcs-blue-500">{report.id} - {report.date}</p>
                  <h3 className="mt-1 font-display text-xl font-bold text-kcs-blue-900 dark:text-white">{report.student}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{report.category}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusTone(report.level)}`}>{report.level}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusTone(report.status)}`}>{report.status}</span>
                </div>
              </div>
              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                {[
                  ['Incident', report.incident],
                  ['Context', report.context],
                  ['Action taken', report.actionTaken],
                  ['Follow-up plan', report.followUp],
                  ['Parent contact', report.parentContact],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                    <p className="text-xs font-semibold uppercase text-gray-400">{label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{value}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
          </div>
        </div>
      )}

      {segment === 'messages' && (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
            <h3 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Teacher Inbox</h3>
            <div className="space-y-3">
              {inbox.map((message) => (
                <div key={`${message.id}-${message.subject}`} className="rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30">
                  <p className="text-sm font-semibold text-kcs-blue-900 dark:text-white">{message.from}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{message.subject} - {message.time}</p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300">{message.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
            <h3 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Compose and active threads</h3>
            <div className="mb-4 grid gap-3 rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30">
              <input className={inputClass} value={messageDraft.to} onChange={(event) => setMessageDraft((draft) => ({ ...draft, to: event.target.value }))} />
              <input className={inputClass} value={messageDraft.subject} onChange={(event) => setMessageDraft((draft) => ({ ...draft, subject: event.target.value }))} />
              <textarea className={inputClass} value={messageDraft.body} onChange={(event) => setMessageDraft((draft) => ({ ...draft, body: event.target.value }))} rows={3} />
              <button onClick={sendMessage} className={compactButton}>Send message</button>
            </div>
            <div className="space-y-3">
              {internalThreads.map((thread) => (
                <div key={thread.subject} className="rounded-xl bg-gray-50 p-3 dark:bg-kcs-blue-800/30">
                  <p className="text-sm font-semibold text-kcs-blue-900 dark:text-white">{thread.subject}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{thread.channel} - {thread.unread} unread</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

const TeacherPortal = () => {
  const { user } = useAuthStore()
  const location = useLocation()
  const activeSegment = getTeacherSegment(location.pathname)
  const isDashboard = activeSegment === 'dashboard'

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
              <Link to="/portal/teacher/assignments" className="btn-gold text-sm py-2 flex items-center gap-2">
                <Brain size={16} /> AI Insights
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-6">
          {isDashboard && <PortalSectionPanel />}

          {!isDashboard && <TeacherSectionView segment={activeSegment} />}

          {isDashboard && (
            <>
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
            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">Gradebook Categories</h2>
              <div className="space-y-3">
                {gradebookCategories.map((category) => (
                  <div key={category.name} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-kcs-blue-900 dark:text-white">{category.name}</p>
                      <span className="text-xs font-bold text-kcs-blue-700 dark:text-kcs-blue-300">{category.weight}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-kcs-blue-900">
                      <div className="h-full rounded-full bg-kcs-blue-600" style={{ width: `${category.average}%` }} />
                    </div>
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{category.visibility}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">LMS Resources</h2>
              <div className="space-y-3">
                {lmsResources.map((resource) => (
                  <div key={resource.title} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-kcs-blue-900 dark:text-white">{resource.title}</p>
                      <span className="rounded-full bg-kcs-gold-100 px-2 py-1 text-xs font-semibold capitalize text-kcs-blue-800 dark:bg-kcs-gold-900/30 dark:text-kcs-gold-300">{resource.type}</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{resource.subject} • {resource.status}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <h2 className="mb-4 font-bold text-kcs-blue-900 dark:text-white">AI Report Comments</h2>
              <div className="space-y-3">
                {reportCards.map((card) => (
                  <div key={card.student} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-kcs-blue-900 dark:text-white">{card.student}</p>
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{card.principalStatus}</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300">{card.teacherComment}</p>
                  </div>
                ))}
                {aiRecommendations.filter((item) => item.owner === 'Teacher').map((item) => (
                  <div key={item.title} className="rounded-xl border border-kcs-blue-200 bg-kcs-blue-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/30">
                    <p className="text-sm font-semibold text-kcs-blue-900 dark:text-white">{item.title}</p>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">{item.action}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-bold text-kcs-blue-900 dark:text-white">Custom Grading Scale</h2>
              <span className="badge-blue text-xs">Export PDF • Excel • CSV</span>
            </div>
            <div className="grid gap-3 md:grid-cols-4">
              {gradingScales.map((scale) => (
                <div key={scale.letter} className="rounded-xl bg-gray-50 p-4 dark:bg-kcs-blue-800/30">
                  <p className="font-display text-2xl font-bold text-kcs-blue-900 dark:text-white">{scale.letter}</p>
                  <p className="text-xs font-semibold text-kcs-blue-600 dark:text-kcs-blue-300">{scale.range} • GPA {scale.gpa.toFixed(1)}</p>
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{scale.descriptor}</p>
                </div>
              ))}
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
              <Link to="/portal/teacher/assignments" className="btn-gold whitespace-nowrap text-sm py-2.5">
                Open AI Assistant
              </Link>
            </div>
          </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default TeacherPortal
