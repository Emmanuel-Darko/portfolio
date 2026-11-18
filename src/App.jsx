import { useEffect, useRef, useState } from 'react'
import ProjectCard from './ProjectCard.jsx'

const resumeUrl = '/files/emmanuel-ofosu-darko-frontend-resume.pdf'

const projects = [
  {
    name: 'ChopTime',
    category: 'Food delivery · Marketplace',
    theme: 'chop',
    artLabel: 'CHOPTIME / DELIVERY',
    description: 'A food delivery marketplace with distinct customer, vendor, rider, and admin workflows, plus live rider location and delivery maps.',
    tags: ['React', 'TypeScript', 'Supabase', 'Leaflet'],
    links: [{ label: 'Live demo', href: 'https://choptimegh.netlify.app/' }],
  },
  {
    name: 'KODETECHGH',
    category: 'Commerce · Multi-vendor',
    theme: 'kode',
    artLabel: 'KODETECH / MARKETPLACE',
    description: 'A Ghana-focused storefront with product discovery, vendor onboarding and dashboards, inventory controls, order management, and Hubtel Mobile Money checkout.',
    tags: ['Nuxt', 'Vue', 'TypeScript', 'Supabase', 'Hubtel'],
    links: [{ label: 'Live demo', href: 'https://kodetechgh.com/' }],
  },
  {
    name: 'COP CM Attendance',
    category: 'Community · Attendance',
    theme: 'attendance',
    artLabel: 'CM / CHECK-IN',
    description: 'An attendance and member-management platform with session check-in, QR scanning, teams, visitor and children records, and admin workflows.',
    tags: ['Nuxt', 'Vue', 'Supabase', 'QR scanning'],
  },
  {
    name: 'COP Dues Tracker',
    category: 'Church finance · Administration',
    theme: 'dues',
    artLabel: 'COP / DUES TRACKER',
    description: 'A church officer dues tool for managing officers, recording weekly payments, checking paid and unpaid status, and exporting annual summaries.',
    tags: ['Nuxt 4', 'Supabase', 'Tailwind CSS', 'PDF and CSV reports'],
  },
  {
    name: 'TAS-FORCE',
    category: 'Membership · Public verification',
    theme: 'tasforce',
    artLabel: 'TAS-FORCE / MEMBERS',
    description: 'A membership platform for registration, administrator review, digital membership cards, and public QR and barcode verification.',
    tags: ['Nuxt', 'PostgreSQL', 'Drizzle', 'QR codes'],
    links: [{ label: 'Live demo', href: 'https://tas-force.netlify.app/' }],
  },
  {
    name: 'MobiBoss',
    category: 'Fintech · Mobile and web',
    theme: 'mobi',
    artLabel: 'MOBIBOSS / AGENT POS',
    description: 'A mobile-money agent POS and web platform with assisted USSD flows, carrier SMS parsing, transaction ledgers, shift reconciliation, subscriptions, and referrals.',
    tags: ['Flutter', 'Kotlin', 'Nuxt', 'Supabase'],
    links: [{ label: 'Web demo', href: 'https://mobiboss.kodetechgh.com/' }],
  },
  {
    name: 'Wedding Website',
    category: 'Personal project · Event experience',
    theme: 'wedding',
    artLabel: 'EVENT / DETAILS',
    description: 'A responsive event website concept bringing programme details, an RSVP interface, a gallery layout, and gift information into one experience.',
    tags: ['Nuxt', 'Vue', 'Responsive UI'],
  },
]

const experience = [
  {
    role: 'Frontend Engineer',
    company: 'Hubtel',
    context: 'Full-time · Remote',
    dates: 'Nov 2023 — Present',
    detail: 'Build Vue/Nuxt and TypeScript product interfaces, integrate backend APIs, manage frontend state, and track events across digital products.',
  },
  {
    role: 'Frontend JavaScript Developer',
    company: 'Christ for Youth International',
    context: 'Remote',
    dates: 'Aug 2023 — Dec 2023',
    detail: 'Built React and Next.js features for camp registration and payments, integrating with the organization’s existing API platform.',
  },
  {
    role: 'Vue.js Instructor',
    company: 'Maxim Nyansa IT Solutions',
    context: 'Volunteer',
    dates: 'Oct 2023 — Present',
    detail: 'Teach JavaScript, Vue.js, and Nuxt.js frontend development to aspiring software engineers.',
  },
  {
    role: 'Frontend Engineer',
    company: 'Trinity Software Center',
    context: 'Internship · Remote',
    dates: 'Jul 2023 — Dec 2023',
    detail: 'Developed the Nuxt.js frontend for an inventory tracking system.',
  },
  {
    role: 'IT Officer',
    company: 'Henkoq Ventures Limited',
    context: 'Onsite',
    dates: 'Jan 2021 — Mar 2023',
    detail: 'Developed a WordPress e-commerce site that complemented traditional sales channels and nearly doubled sales revenue.',
  },
]

const skills = [
  { label: 'Front end', items: 'React · TypeScript · JavaScript · Vue.js · Nuxt.js · Next.js · HTML · CSS/SCSS' },
  { label: 'Interfaces', items: 'Responsive UI · Product workflows · Application state · REST APIs · GraphQL' },
  { label: 'Data and tools', items: 'Supabase · PostgreSQL · MySQL · Firebase · Node.js · Git · Vitest' },
]

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
    <path d="M3.5 12.5 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const navItems = [
    ['Work', '#work'],
    ['Experience', '#experience'],
    ['Skills', '#skills'],
    ['Education', '#education'],
    ['Contact', '#contact'],
  ]

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Emmanuel Ofosu Darko, home">
          <span className="wordmark__mark">ED</span>
          <span>Emmanuel Darko</span>
        </a>
        <button
          ref={menuButtonRef}
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
        <nav id="primary-navigation" className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href={resumeUrl} download>Résumé <ArrowIcon /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow"><span className="status-dot" /> Front-end engineer · Ghana</p>
            <h1 id="hero-title">Thoughtful interfaces.<br /><em>Useful products.</em></h1>
            <p className="hero__intro">I’m Emmanuel, a front-end engineer who turns complex product ideas into clear, responsive web experiences.</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="mailto:darkoemmanuelofosu@gmail.com">Get in touch <ArrowIcon /></a>
            </div>
            <div className="hero__meta"><span>React · TypeScript · Vue · Nuxt</span></div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-art__orbit hero-art__orbit--one" />
            <div className="hero-art__orbit hero-art__orbit--two" />
            <div className="hero-art__core"><span>ED</span></div>
            <div className="hero-chip hero-chip--react"><b>R</b> React</div>
            <div className="hero-chip hero-chip--ts"><b>TS</b> TypeScript</div>
            <div className="hero-chip hero-chip--vue"><b>V</b> Vue / Nuxt</div>
            <div className="hero-art__caption">Design-minded<br />engineering</div>
          </div>
        </section>

        <section className="work-section section-wrap section-space" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div><p className="eyebrow">Selected work</p><h2 id="work-title">Products I’ve helped bring to life</h2></div>
            <p className="section-heading__aside">A selection of commerce, community, logistics, and fintech experiences.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
          </div>
        </section>

        <section className="experience-section section-space" id="experience" aria-labelledby="experience-title">
          <div className="section-wrap experience-layout">
            <div className="section-heading section-heading--stacked">
              <p className="eyebrow">Experience</p>
              <h2 id="experience-title">Built with teams,<br />for real people.</h2>
              <p className="section-heading__aside">From product teams to mentoring, I value clear communication and practical delivery.</p>
            </div>
            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-item" key={`${item.company}-${item.role}`}>
                  <div className="experience-item__date">{item.dates}</div>
                  <div>
                    <h3>{item.role}</h3>
                    <p className="experience-item__company">{item.company} <span>· {item.context}</span></p>
                    <p className="experience-item__detail">{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-wrap section-space" id="skills" aria-labelledby="about-title">
          <div className="about-copy">
            <p className="eyebrow">How I work</p>
            <h2 id="about-title">Good software feels clear before it feels clever.</h2>
            <p>I care about the details that help people move through a product with confidence: readable interfaces, useful feedback, reliable states, and thoughtful behavior on every screen size.</p>
          </div>
          <div className="about-details">
            <div className="skills-list" aria-label="Technical skills">
              {skills.map((group) => <div className="skill-row" key={group.label}><h3>{group.label}</h3><p>{group.items}</p></div>)}
            </div>
          </div>
        </section>

        <section className="education-section section-space" id="education" aria-labelledby="education-title">
          <div className="section-wrap education-layout">
            <div>
              <p className="eyebrow">Education</p>
              <h2 id="education-title">A foundation for<br />building useful things.</h2>
            </div>
            <div className="education-block">
              <article>
                <h3>BSc, Computer Engineering</h3>
                <p>Kwame Nkrumah University of Science and Technology · 2019</p>
              </article>
              <article>
                <h3>Software Engineering Bootcamp</h3>
                <p>Maxim Nyansa IT Solutions · Vue.js, Node.js, Agile development · 2023</p>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-wrap contact-inner">
            <div>
              <p className="eyebrow">Have a product to build?</p>
              <h2 id="contact-title">Let’s make it<br /><em>useful.</em></h2>
            </div>
            <div className="contact-actions">
              <a className="button button--light" href="mailto:darkoemmanuelofosu@gmail.com">Email Emmanuel <ArrowIcon /></a>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/emmanuel-darko" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
                <a href="https://github.com/Emmanuel-Darko" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
                <a href={resumeUrl} download>Download résumé <ArrowIcon /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#top"><span className="wordmark__mark">ED</span><span>Emmanuel Darko</span></a>
        <p>Designed and built with care · © {new Date().getFullYear()} Emmanuel Ofosu Darko</p>
        <a href="#top" className="back-to-top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
