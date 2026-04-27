import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Mail, Phone, Plus, Search, UserRound, Users } from 'lucide-react'
import PortalSidebar from '@/components/layout/PortalSidebar'
import { SCHOOL_LEVELS } from '@/constants/schoolLevels'

const initialFamilies = [
  {
    id: '1',
    studentNumber: 'KCS-1108',
    grade: 'Grade 11',
    section: 'A',
    student: { firstName: 'Elise', lastName: 'Kabongo', email: 'elise.kabongo@students.kcs.local' },
    parents: [{ relation: 'Mother', parent: { firstName: 'Marie', lastName: 'Kabongo', email: 'marie.kabongo@email.com', phone: '+243 81 000 4101' } }],
  },
  {
    id: '2',
    studentNumber: 'KCS-0804',
    grade: 'Grade 8',
    section: 'B',
    student: { firstName: 'David', lastName: 'Kabongo', email: 'david.kabongo@students.kcs.local' },
    parents: [{ relation: 'Mother', parent: { firstName: 'Marie', lastName: 'Kabongo', email: 'marie.kabongo@email.com', phone: '+243 81 000 4101' } }],
  },
  {
    id: '3',
    studentNumber: 'KCS-0407',
    grade: 'K4',
    section: 'A',
    student: { firstName: 'Amani', lastName: 'Mbuyi', email: 'amani.mbuyi@students.kcs.local' },
    parents: [{ relation: 'Father', parent: { firstName: 'Joel', lastName: 'Mbuyi', email: 'joel.mbuyi@email.com', phone: '+243 82 000 2204' } }],
  },
]

const SchoolRegistryPage = () => {
  const [families, setFamilies] = useState(initialFamilies)
  const [query, setQuery] = useState('')
  const [form, setForm] = useState({
    studentFirst: '',
    studentLast: '',
    studentNumber: '',
    grade: '',
    section: 'A',
    parentFirst: '',
    parentLast: '',
    parentEmail: '',
    parentPhone: '',
    relation: 'Parent',
  })

  const filteredFamilies = families.filter((family) => {
    const haystack = `${family.student.firstName} ${family.student.lastName} ${family.studentNumber} ${family.grade} ${family.parents.map((item) => `${item.parent.firstName} ${item.parent.lastName}`).join(' ')}`.toLowerCase()
    return haystack.includes(query.toLowerCase())
  })

  const registerFamily = (event: FormEvent) => {
    event.preventDefault()
    if (!form.studentFirst || !form.studentLast || !form.studentNumber || !form.parentEmail) return

    setFamilies((current) => [
      {
        id: crypto.randomUUID(),
        studentNumber: form.studentNumber,
        grade: form.grade || 'Unassigned',
        section: form.section,
        student: {
          firstName: form.studentFirst,
          lastName: form.studentLast,
          email: `${form.studentNumber.toLowerCase()}@students.kcs.local`,
        },
        parents: [{
          relation: form.relation,
          parent: {
            firstName: form.parentFirst,
            lastName: form.parentLast,
            email: form.parentEmail,
            phone: form.parentPhone,
          },
        }],
      },
      ...current,
    ])
    setForm({ studentFirst: '', studentLast: '', studentNumber: '', grade: '', section: 'A', parentFirst: '', parentLast: '', parentEmail: '', parentPhone: '', relation: 'Parent' })
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-kcs-blue-950">
      <PortalSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-20 border-b border-gray-100 bg-white/85 px-6 py-4 backdrop-blur-md dark:border-kcs-blue-800 dark:bg-kcs-blue-950/85">
          <h1 className="font-display text-xl font-bold text-kcs-blue-900 dark:text-white">Family and Student Registry</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Central registration for every parent and student in the school.</p>
        </div>

        <div className="grid gap-6 p-6 xl:grid-cols-[0.85fr_1.35fr]">
          <form onSubmit={registerFamily} className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-kcs-blue-50 text-kcs-blue-700 dark:bg-kcs-blue-900/40 dark:text-kcs-blue-300">
                <Plus size={20} />
              </div>
              <div>
                <h2 className="font-bold text-kcs-blue-900 dark:text-white">Register a Family</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Creates the parent, student, and family link.</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ['studentFirst', 'Student first name'],
                ['studentLast', 'Student last name'],
                ['studentNumber', 'Student number'],
                ['parentFirst', 'Parent first name'],
                ['parentLast', 'Parent last name'],
                ['parentEmail', 'Parent email'],
                ['parentPhone', 'Parent phone'],
              ].map(([key, label]) => (
                <input
                  key={key}
                  value={form[key as keyof typeof form]}
                  onChange={(event) => setForm({ ...form, [key]: event.target.value })}
                  placeholder={label}
                  className="input-kcs"
                />
              ))}
              <select value={form.grade} onChange={(event) => setForm({ ...form, grade: event.target.value })} className="input-kcs">
                <option value="">Select level</option>
                {SCHOOL_LEVELS.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              <select value={form.section} onChange={(event) => setForm({ ...form, section: event.target.value })} className="input-kcs">
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
              <select value={form.relation} onChange={(event) => setForm({ ...form, relation: event.target.value })} className="input-kcs">
                <option>Parent</option>
                <option>Mother</option>
                <option>Father</option>
                <option>Guardian</option>
              </select>
            </div>
            <button type="submit" className="btn-primary mt-5 inline-flex w-full items-center justify-center gap-2">
              <Plus size={18} /> Register Family
            </button>
          </form>

          <section className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Students', value: families.length, icon: BookOpen },
                { label: 'Parent links', value: families.reduce((sum, item) => sum + item.parents.length, 0), icon: Users },
                { label: 'Grades covered', value: new Set(families.map((item) => item.grade)).size, icon: UserRound },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
                  <Icon size={18} className="mb-3 text-kcs-blue-600" />
                  <p className="font-display text-2xl font-bold text-kcs-blue-900 dark:text-white">{value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/50">
              <div className="mb-4 flex items-center gap-3 rounded-xl bg-gray-50 px-3 py-2 dark:bg-kcs-blue-800/40">
                <Search size={18} className="text-gray-400" />
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search student, parent, grade, or number" className="w-full bg-transparent text-sm outline-none dark:text-white" />
              </div>

              <div className="space-y-3">
                {filteredFamilies.map((family, index) => (
                  <motion.div
                    key={family.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                    className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-kcs-blue-800 dark:bg-kcs-blue-800/20"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-bold text-kcs-blue-900 dark:text-white">{family.student.firstName} {family.student.lastName}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{family.studentNumber} · {family.grade} · Section {family.section}</p>
                      </div>
                      <span className="badge-blue">Active</span>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {family.parents.map(({ parent, relation }) => (
                        <div key={`${family.id}-${parent.email}`} className="rounded-xl bg-white p-3 text-sm dark:bg-kcs-blue-900/50">
                          <p className="font-semibold text-kcs-blue-900 dark:text-white">{parent.firstName} {parent.lastName} <span className="text-xs font-normal text-gray-400">({relation})</span></p>
                          <p className="mt-1 flex items-center gap-1.5 text-xs text-gray-500"><Mail size={12} /> {parent.email}</p>
                          <p className="mt-1 flex items-center gap-1.5 text-xs text-gray-500"><Phone size={12} /> {parent.phone || 'No phone recorded'}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default SchoolRegistryPage
