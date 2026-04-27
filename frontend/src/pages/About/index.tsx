import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { 
  ArrowRight, Heart, Award, Shield, Zap, TrendingUp, Globe,
  GraduationCap, Users, BookOpen, Lightbulb, MapPin
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const AnimSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </motion.div>
  )
}

const leadership = [
  {
    name: 'Dr. Samuel Watkins',
    title: 'Head of School',
    bio: '25+ years in international education. Passionate about transforming African education through Christian values.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    initials: 'SW',
  },
  {
    name: 'Dr. Grace Mwamba',
    title: 'Academic Director',
    bio: 'Former professor at University of Kinshasa. Leads our curriculum development and academic excellence initiatives.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    initials: 'GM',
  },
  {
    name: 'Mr. David Okonkwo',
    title: 'Dean of Students',
    bio: 'Dedicated to student wellbeing and leadership development. Champion of student government and extracurriculars.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    initials: 'DO',
  },
  {
    name: 'Mrs. Amelia Chen',
    title: 'Admissions Director',
    bio: 'Guides families through the KCS admissions journey with warmth and expertise across three continents.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    initials: 'AC',
  },
]

const faculty = [
  { name: 'Mr. Thomas Belanger', dept: 'Mathematics & Sciences', exp: '18 years', flag: '🇺🇸' },
  { name: 'Mrs. Fatima Diallo', dept: 'English Language Arts', exp: '14 years', flag: '🇸🇳' },
  { name: 'Dr. Pierre Lukusa', dept: 'History & Social Studies', exp: '20 years', flag: '🇨🇩' },
  { name: 'Ms. Sarah Johnson', dept: 'Arts & Music', exp: '12 years', flag: '🇬🇧' },
  { name: 'Mr. Carlos Rivera', dept: 'Physical Education', exp: '10 years', flag: '🇲🇽' },
  { name: 'Mrs. Josephine Nkosi', dept: 'French & Languages', exp: '16 years', flag: '🇿🇦' },
]

const milestones = [
  { year: 'Faith', event: 'Spiritual Life', desc: 'Daily prayer, services, Bible studies, and mentorship support student growth.' },
  { year: 'Vision', event: 'Biblical Worldview', desc: 'KCS equips children to become passionate, independent, life-long learners.' },
  { year: 'Mission', event: 'Leadership', desc: 'The school helps raise leaders prepared for a competitive world with compassion and mercy.' },
  { year: 'Team', event: 'Excellence', desc: 'KCS values qualified Christian educators and high standards of care and instruction.' },
  { year: 'Service', event: 'Community', desc: 'Students are encouraged to live out love, compassion, and service to others.' },
  { year: 'Future', event: 'KCS Nexus', desc: 'Digital tools connect families, students, teachers, and school information.' },
]

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative py-24 bg-gradient-to-br from-kcs-blue-950 via-kcs-blue-900 to-kcs-blue-800 overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-10" style={{ backgroundSize: '40px 40px' }} />
        <div className="relative container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kcs-gold-500/20 border border-kcs-gold-400/30 text-kcs-gold-300 text-sm font-medium mb-5">
              Kinshasa, DRC - Letting Our Light Shine
            </span>
            <h1 className="text-5xl md:text-6xl font-bold font-display text-white mb-5">
              About{' '}
              <span className="text-gradient-gold">KCS</span>
            </h1>
            <p className="text-xl text-kcs-blue-100 max-w-3xl mx-auto leading-relaxed">
              KCS provides a nurturing Christian environment where students grow
              academically, socially, and spiritually.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STORY & MISSION ────────────────────────────────────────────────── */}
      <section className="section-padding bg-white dark:bg-kcs-blue-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimSection>
              <motion.div variants={fadeUp}>
                <span className="badge-blue text-sm mb-3">Our Story</span>
                <h2 className="text-4xl font-bold font-display text-kcs-blue-900 dark:text-white mb-5">
                  A Legacy Built on{' '}
                  <span className="text-gradient-blue">Faith & Purpose</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Kinshasa Christian School prioritizes the spiritual development of students
                  through prayer, services, Bible studies, and mentorship programs.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  KCS is committed to excellence in teaching and care while helping children
                  become compassionate leaders ready to transform society with a biblical worldview.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Users, label: 'KCS Students', sub: 'Academic, social, spiritual growth' },
                    { icon: GraduationCap, label: 'Life-long Learners', sub: 'Passionate and independent' },
                    { icon: Globe, label: 'Biblical Worldview', sub: 'Ready to transform society' },
                    { icon: Award, label: 'Excellence', sub: 'High standards in education and care' },
                  ].map(({ icon: Icon, label, sub }) => (
                    <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-kcs-blue-900/30">
                      <div className="w-9 h-9 rounded-lg bg-kcs-blue-100 dark:bg-kcs-blue-800 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-kcs-blue-600 dark:text-kcs-blue-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-kcs-blue-900 dark:text-white text-sm">{label}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimSection>

            <AnimSection>
              <motion.div variants={fadeUp} className="relative">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80"
                  alt="KCS Campus"
                  className="w-full rounded-3xl shadow-kcs-lg object-cover h-[500px]"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-kcs-blue-900 rounded-2xl p-5 shadow-kcs-lg border border-gray-100 dark:border-kcs-blue-800 max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl kcs-gradient-gold flex items-center justify-center">
                      <BookOpen size={22} className="text-kcs-blue-900" />
                    </div>
                    <div>
                      <p className="font-bold text-kcs-blue-900 dark:text-white">American Curriculum</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Faith-based learning with a biblical worldview</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ── MISSION, VISION, VALUES ─────────────────────────────────────── */}
      <section className="section-padding bg-gray-50 dark:bg-kcs-blue-950/50">
        <div className="container-custom">
          <AnimSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-4xl font-bold font-display text-kcs-blue-900 dark:text-white">
                Mission, Vision & Values
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Heart,
                  title: 'Our Mission',
                  color: 'text-red-500',
                  bg: 'bg-red-50 dark:bg-red-900/20',
                  border: 'border-red-100 dark:border-red-800/30',
                  text: 'To provide an exceptional American education rooted in Christian values, empowering students in Kinshasa and across the Congo to become servant leaders who transform their communities and the world.',
                },
                {
                  icon: Lightbulb,
                  title: 'Our Vision',
                  color: 'text-kcs-gold-600',
                  bg: 'bg-kcs-gold-50 dark:bg-kcs-gold-900/20',
                  border: 'border-kcs-gold-100 dark:border-kcs-gold-800/30',
                  text: 'To be the leading international school in Central Africa, recognized for academic excellence, spiritual depth, and the development of globally-minded leaders who make a lasting impact.',
                },
                {
                  icon: MapPin,
                  title: 'Our Promise',
                  color: 'text-kcs-blue-600',
                  bg: 'bg-kcs-blue-50 dark:bg-kcs-blue-900/20',
                  border: 'border-kcs-blue-100 dark:border-kcs-blue-800/30',
                  text: 'Every student who walks through our doors receives a world-class education, personalized care, and the tools to succeed at the highest levels — academically, professionally, and spiritually.',
                },
              ].map(({ icon: Icon, title, color, bg, border, text }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className={`p-8 rounded-3xl bg-white dark:bg-kcs-blue-900/50 border ${border} shadow-sm`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center mb-5`}>
                    <Icon size={26} className={color} />
                  </div>
                  <h3 className="text-xl font-bold font-display text-kcs-blue-900 dark:text-white mb-3">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── LEADERSHIP ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-white dark:bg-kcs-blue-950">
        <div className="container-custom">
          <AnimSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="badge-gold text-sm mb-3">Our Team</span>
              <h2 className="text-4xl font-bold font-display text-kcs-blue-900 dark:text-white">
                Leadership Team
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
                Experienced, passionate educators dedicated to the KCS mission.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((person) => (
                <motion.div
                  key={person.name}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="group text-center bg-gray-50 dark:bg-kcs-blue-900/50 rounded-3xl p-6 border border-gray-100 dark:border-kcs-blue-800 hover:shadow-kcs transition-all duration-300"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full rounded-2xl object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-2xl kcs-gradient flex items-center justify-center text-white font-bold text-xl hidden">
                      {person.initials}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-lg bg-kcs-gold-400 flex items-center justify-center">
                      <Shield size={14} className="text-kcs-blue-900" />
                    </div>
                  </div>
                  <h3 className="font-bold text-kcs-blue-900 dark:text-white text-sm mb-0.5">{person.name}</h3>
                  <p className="text-kcs-blue-600 dark:text-kcs-blue-400 text-xs font-medium mb-3">{person.title}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{person.bio}</p>
                </motion.div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── FACULTY ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50 dark:bg-kcs-blue-950/50">
        <div className="container-custom">
          <AnimSection>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="badge-blue text-sm mb-3">Faculty</span>
              <h2 className="text-4xl font-bold font-display text-kcs-blue-900 dark:text-white">
                Expert Educators
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
                Over 80 certified teachers from around the world, bringing global perspectives to the classroom.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {faculty.map((member) => (
                <motion.div
                  key={member.name}
                  variants={fadeUp}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-kcs-blue-900/50 rounded-2xl border border-gray-100 dark:border-kcs-blue-800 hover:shadow-kcs transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl kcs-gradient flex items-center justify-center text-xl flex-shrink-0">
                    {member.flag}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-kcs-blue-900 dark:text-white text-sm truncate">{member.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{member.dept}</p>
                    <p className="text-xs text-kcs-gold-600 dark:text-kcs-gold-400 font-medium">{member.exp} experience</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-8">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                And <span className="font-bold text-kcs-blue-900 dark:text-white">70+ more</span> passionate educators across all departments.
              </p>
            </motion.div>
          </AnimSection>
        </div>
      </section>

      {/* ── HISTORY TIMELINE ────────────────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-br from-kcs-blue-950 to-kcs-blue-900">
        <div className="container-custom">
          <AnimSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kcs-gold-500/20 border border-kcs-gold-400/30 text-kcs-gold-300 text-sm font-medium mb-4">
                Our Journey
              </span>
              <h2 className="text-4xl font-bold font-display text-white">
                KCS Through the Years
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-kcs-blue-700" />
              <div className="space-y-10">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    variants={fadeUp}
                    className={`relative flex items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${i % 2 === 0 ? 'pr-10 text-right' : 'pl-10'}`}>
                      <div className={`inline-block p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm ${i % 2 === 0 ? 'ml-auto' : ''} max-w-xs`}>
                        <p className="text-kcs-gold-400 font-bold text-lg font-display">{m.year}</p>
                        <p className="text-white font-semibold mb-1">{m.event}</p>
                        <p className="text-kcs-blue-200 text-sm">{m.desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-kcs-gold-400 border-4 border-kcs-blue-900 z-10" />
                    <div className="w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-kcs-blue-950">
        <div className="container-custom text-center">
          <AnimSection>
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-bold font-display text-kcs-blue-900 dark:text-white mb-4">
                Become Part of the KCS Story
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                Join our community of learners, leaders, and believers. Your chapter in the KCS story starts with an application.
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/admissions" className="btn-primary flex items-center gap-2">
                  Apply Now <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-kcs-blue-200 dark:border-kcs-blue-700 text-kcs-blue-700 dark:text-kcs-blue-300 font-semibold hover:bg-kcs-blue-50 dark:hover:bg-kcs-blue-900/20 transition-all duration-200">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </AnimSection>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
