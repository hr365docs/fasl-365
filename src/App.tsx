import { useState, type ReactNode } from 'react'
import Footer from './Footer'
import Classes from './Classes'
import Glance from './Glance'

const clientLogos: { src: string; alt: string; className?: string }[] = [
  { src: 'https://www.apps365.com/wp-content/uploads/2024/06/logo10-1.webp', alt: 'Client logo' },
  { src: 'https://www.apps365.com/wp-content/uploads/2026/07/Aleska.webp', alt: 'Aleska' },
  { src: 'https://www.apps365.com/wp-content/uploads/2024/06/01.webp', alt: 'Client logo' },
  { src: 'https://ik.imagekit.io/apps365/Client-Logo/Michelin.webp', alt: 'Michelin' },
  { src: 'https://ik.imagekit.io/apps365/Client-Logo/SYDNEY.webp', alt: 'Sydney' },
  { src: 'https://ik.imagekit.io/apps365/Client-Logo/Starkey.webp', alt: 'Starkey' },
  { src: 'https://ik.imagekit.io/apps365/Client-Logo/Dunbradsttreet.webp', alt: 'Dun & Bradstreet' },
  { src: 'https://www.apps365.com/wp-content/uploads/2024/06/logo7-1.webp', alt: 'Client logo' },
  { src: 'https://www.apps365.com/wp-content/uploads/2024/06/logo9-1.webp', alt: 'Client logo' },
  { src: 'https://ik.imagekit.io/cubiclogics/Client-logos/Heading.svg', alt: 'Client logo' },
  { src: 'https://ik.imagekit.io/cubiclogics/Client-logos/New.svg', alt: 'Client logo' },
  { src: 'https://www.apps365.com/wp-content/uploads/2026/07/Daimler-image1.webp', alt: 'Daimler' },
  { src: 'https://www.apps365.com/wp-content/uploads/2025/11/DP-World.webp', alt: 'DP World' },
  { src: 'https://ik.imagekit.io/cubiclogics/Client-logos/siemens.svg', alt: 'Siemens', className: 'siemens' },
  { src: 'https://ik.imagekit.io/cubiclogics/Client-logos/TUc.svg', alt: 'Client logo' },
  { src: 'https://www.apps365.com/wp-content/uploads/2025/10/OEB_Logo.svg', alt: 'OEB' },
  { src: 'https://ik.imagekit.io/cubiclogics/Client-logos/Nassr.svg', alt: 'Al Nassr' },
  { src: 'https://www.apps365.com/wp-content/uploads/2024/06/logo6-1.webp', alt: 'Client logo' },
  { src: 'https://www.apps365.com/wp-content/uploads/2025/11/NSW.webp', alt: 'Government of New South Wales' },
]

function LogoSlider() {
  return (
    <div className="logo-slider-wrapper" aria-label="Selected clients from the wider Cubic Logics ecosystem">
      <div className="logo-slider">
        {[0, 1].map(copy => clientLogos.map(l => (
          <div className={`logo-item${l.className ? ` ${l.className}` : ''}`} key={`${copy}-${l.src}`} aria-hidden={copy === 1 || undefined}>
            <img src={l.src} alt={copy === 1 ? '' : l.alt} loading="lazy" decoding="async" />
          </div>
        )))}
      </div>
    </div>
  )
}

type IconName ='cap' | 'people' | 'clipboard' | 'spark' | 'chart' | 'book' | 'check' | 'shield'
function Icon({ name }: { name: IconName }) {
  const p: Record<IconName, ReactNode> = {
    cap: <><path d="m3 10 9-5 9 5-9 5-9-5Z" /><path d="M7 12.5V17c3.2 2.4 6.8 2.4 10 0v-4.5M21 10v6" /></>,
    people: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2.5" /><path d="M3.5 20c.5-5 3-7 5.5-7s5 2 5.5 7M14 14c3.7-.7 6 1.2 6.5 5" /></>,
    clipboard: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4.5V3h6v1.5M9 10h6M9 14h6M9 18h4" /></>,
    spark: <><path d="m12 2 1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2Z" /><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" /></>,
    chart: <><path d="M4 20V8M10 20V4M16 20v-7M22 20H2" /></>,
    book: <><path d="M3 5c4-1 7 .3 9 2v14c-2-1.7-5-3-9-2V5Zm18 0c-4-1-7 .3-9 2v14c2-1.7 5-3 9-2V5Z" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 2.6 2.6L16.5 9" /></>,
    shield: <><path d="M12 2 4.5 5v6c0 5.1 3.2 8.6 7.5 11 4.3-2.4 7.5-5.9 7.5-11V5L12 2Z" /><path d="m8.5 12 2.3 2.3 4.7-4.8" /></>
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{p[name]}</svg>
}

const subjects = [['English', 'E', '2 teachers', '4 courses', '70%', '69%'], ['Music', 'M', '1 teacher', '4 courses', '76%', '93%'], ['Geography / History', 'G', '2 teachers', '4 courses', '66%', '89%'], ['Maths', 'M', '2 teachers', '5 courses', '34%', '43%'], ['Art & Design Technology', 'A', '1 teacher', '4 courses', '68%', '80%']]
const features: [IconName, string, string][] = [['book', 'Classes & subjects', 'Every grade split into subjects, with completion tracked per class.'], ['chart', 'Attendance & performance', 'Daily attendance and average scores across classes and subjects.'], ['clipboard', 'Assessments', 'Assignments, deadlines and submissions in one clear queue.'], ['spark', 'AI-assisted review', 'Submissions flagged for AI review, so support reaches students first.'], ['people', 'Learning groups', 'Group learners by high, medium or support needs for targeted teaching.'], ['check', 'Approvals & moderation', 'Review and approve course content before it reaches learners.']]
const faqs = [['What is Fasl365?', 'Fasl365 is a school platform that brings classes, subjects, attendance, assessments, approvals and AI-assisted review into one live view.'], ['Which grade levels can it manage?', 'The brochure groups grades by Primary, Middle, Secondary and Senior phases, with students, subjects and teachers visible at a glance.'], ['What can school leaders see on the dashboard?', 'Flagged submissions, students needing attention, overdue work, attendance, learning groups and deadlines are brought together in one place.'], ['How does AI-assisted review work?', 'Submissions can be flagged for AI review so teachers and support teams can prioritise where attention is needed first.'], ['Does Fasl365 cover assessments and moderation?', 'Yes. The platform brings assignments, deadlines and submissions into one queue and supports course-content approvals and moderation.'], ['Who provides Fasl365?', 'Fasl365 is built by Cubic Logics and is available through Vodafone.']]
const portfolioStories = [
  ['Alesha S', 'Director of Marketing, HammKlein & Hoffman', 'United States', 'My first experience with Helpdesk365 was excellent. The team made setting up our new employee directory easy.'],
  ['Ahmed A', 'IT Officer, HanmiGlobal Saudi', 'Saudi Arabia', 'Helpdesk365 has been a great fit for our support operations. Its interface is easy to use.'],
  ['Andreas C', 'ICT Manager', 'California', 'Helpdesk365 integrates effortlessly with Microsoft Teams and SharePoint.'],
]

function App() {
  const [menu, setMenu] = useState(false), [faq, setFaq] = useState<number | null>(0)
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><a href="#top" className="brand" aria-label="Fasl365 home"><img src="/fasl365-mark.svg" alt="" /><span>Fasl365</span></a><button className="menu-toggle" aria-expanded={menu} onClick={() => setMenu(!menu)}><span /><span /><span /><b className="sr-only">Menu</b></button><nav className={menu ? 'open' : ''}><a href="#platform">Platform</a><a href="#subjects">Subjects</a><a href="#features">Features</a><a href="#faq">FAQ</a><a className="nav-cta" href="mailto:info@fasl365.com">Talk to us</a></nav></header>
    <main id="main">
      <section className="hero" id="top"><svg className="hero-burst" viewBox="0 0 400 400" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round"><path d="M200 8 252 98 350 60 322 162 410 214 318 258 330 360 238 322 200 410 162 322 70 360 82 258-10 214 78 162 50 60 148 98Z" /><path d="M200 70 238 138 306 112 288 180 346 214 286 246 296 312 232 288 200 350 168 288 104 312 114 246 54 214 112 180 94 112 162 138Z" /></svg><div className="hero-copy"><p className="hero-logo"><img src="/fasl365-mark-white.svg" alt="" /><span>Fasl365</span></p><h1>A parent’s trust.<br />A school’s promise.</h1><div className="promise">Fasl365 keeps both.</div><p className="hero-text">Fasl365 gives schools one place to manage every grade level: classes, subjects, assessments, attendance and AI-assisted review. Built by Cubic Logics and available through Vodafone.</p><div className="hero-actions"><a className="button primary" href="mailto:info@fasl365.com">Book a conversation <span>↗</span></a><a className="text-link" href="#platform">Explore the platform ↓</a></div></div></section>
      <section className="trust-strip"><div><span>Parent</span><blockquote>“I trusted you with my child.”</blockquote><blockquote className="ar" lang="ar" dir="rtl">«لقد ائتمنتك على طفلي.»</blockquote></div><div><span>School</span><blockquote>“We trusted Fasl365 to help us keep that promise.”</blockquote><blockquote className="ar" lang="ar" dir="rtl">«لقد وثقنا في Fasl365 لمساعدتنا على الوفاء بذلك الوعد.»</blockquote></div></section>
      <Classes />
      <Glance />
      <section className="section subjects-section" id="subjects"><div className="center-heading"><p className="eyebrow red">Subjects in every class</p><h2>Progress you can see,<br /><em>class by class.</em></h2><p>Each subject shows its teachers, courses, average score and completion.</p></div><div className="subject-grid">{subjects.map((s, i) => <article className="subject-card" key={s[0]}><div className={'subject-art art-' + i}><span>{s[1]}</span><i /><i /></div><div className="subject-body"><h3>{s[0]}</h3><p>{s[2]} · {s[3]}</p><div><span>Avg score <b>{s[4]}</b></span><span>Completion <b>{s[5]}</b></span></div><progress max="100" value={parseInt(s[5])}>{s[5]}</progress></div></article>)}</div></section>
      <section className="section feature-section" id="features"><div className="section-heading"><div><p className="eyebrow red">One connected platform</p><h2>Built around the way<br /><em>schools actually work.</em></h2></div><p>Leaders, teachers and administrators share one live view, so every decision is backed by current school data.</p></div><div className="feature-grid">{features.map((f, i) => <article key={f[1]}><div className="feat-top"><span><Icon name={f[0]} /></span><em>{String(i + 1).padStart(2, "0")}</em></div><h3>{f[1]}</h3><p>{f[2]}</p><i className="feat-arrow" aria-hidden="true">→</i></article>)}</div></section>
      <section className="section partner-block" aria-labelledby="partner-title"><div className="center-heading"><p className="eyebrow red">Partners behind Fasl365</p><h2 id="partner-title">Built by experts,<br /><em>delivered by trusted partners.</em></h2><p>Created by Cubic Logics and brought to schools through Vodafone.</p></div><div className="partner-section"><div className="partner-card vodafone"><p>Available through</p><h2><span>◉</span> vodafone</h2><p>Fasl365 reaches schools with Vodafone, bringing Cubic Logics’ school platform to more classrooms.</p></div><div className="partner-card cubic"><p>Built by</p><h2>CUBIC<span>◈</span></h2><p>Microsoft 365-native software from Cubic Logics, with a wider portfolio including CLM365, HR365, LMS365, Helpdesk365 and Asset365.</p></div></div></section>

      <section className="section common-proof-section" aria-labelledby="common-proof-title"><div className="common-proof-head"><p className="eyebrow red">A worldwide Microsoft 365 community</p><h2 id="common-proof-title">Trusted by <em>12,100+ deployments</em><br />from 172 countries</h2><p>Shared trust and recognition across the wider Cubic Logics product ecosystem.</p></div><div className="recognition-strip" aria-label="Company recognition"><div className="recognition-group"><img src="https://ik.imagekit.io/apps365/Trusted-by-logos/soc.webp" alt="AICPA SOC" loading="lazy" /><img src="https://ik.imagekit.io/apps365/Trusted-by-logos/Compliant.webp" alt="SOC 2 Type II Compliant" loading="lazy" /><img src="https://ik.imagekit.io/apps365/Trusted-by-logos/ISO.webp" alt="ISO 27001:2022 Certified" loading="lazy" /><img src="https://ik.imagekit.io/apps365/Trusted-by-logos/microsoft-Certified-App.webp" alt="Microsoft Certified App" loading="lazy" /></div><span className="recognition-divider" aria-hidden="true" /><div className="recognition-group"><img src="https://www.apps365.com/wp-content/uploads/2025/03/CoreHR_HighPerformer_HighPerformer.svg" alt="G2 High Performer" loading="lazy" /><img src="https://www.apps365.com/wp-content/uploads/2025/03/CustomerSelf-Service_MomentumLeader_Leader.svg" alt="G2 Momentum Leader" loading="lazy" /><img src="https://www.apps365.com/wp-content/uploads/2025/03/CustomerSelf-Service_BestSupport_QualityOfSupport.svg" alt="G2 Best Support" loading="lazy" /></div><span className="recognition-divider" aria-hidden="true" /><div className="recognition-group"><img className="wide" src="https://ik.imagekit.io/cubiclogics/Badge/Microsoft-Azure-New.webp" alt="Available on Microsoft Azure Marketplace" loading="lazy" /><img src="https://ik.imagekit.io/apps365/Trusted-by-logos/Great_place_%20to_work_sep_2025-26.webp" alt="Great Place to Work Certified 2025-26" loading="lazy" /></div></div><LogoSlider /></section>
      <section className="section stories-section" aria-labelledby="stories-title"><div className="stories-heading"><div><p className="eyebrow">Cubic Logics customer stories</p><h2 id="stories-title">Trusted beyond <br />the classroom.</h2></div><p>Feedback from Helpdesk365 customers in the wider Cubic Logics Microsoft 365 portfolio. These are portfolio testimonials, not Fasl365 product claims.</p></div><div className="story-grid">{portfolioStories.map(s => <article key={s[0]}><div className="story-top"><div className="story-product">Helpdesk365</div><div className="stars" aria-label="5 out of 5 stars">★★★★★</div></div><blockquote>“{s[3]}”</blockquote><footer className="story-person"><span className="story-avatar">{s[0].split(" ").map(x => x[0]).join("")}</span><div><h3>{s[0]}</h3><p className="story-role">{s[1]}</p><p className="story-place">{s[2]}</p></div></footer></article>)}</div></section>
      <section className="section faq-section" id="faq"><div className="faq-title"><p className="eyebrow red">Questions, answered</p><h2>Frequently asked questions</h2></div><div className="faq-list">{faqs.map((f, i) => <div className={'faq-item ' + (faq === i ? 'active' : '')} key={f[0]}><h3><button onClick={() => setFaq(faq === i ? null : i)} aria-expanded={faq === i}><span>{String(i + 1).padStart(2, '0')}</span>{f[0]}<i>{faq === i ? '−' : '+'}</i></button></h3><div className="faq-answer"><p>{f[1]}</p></div></div>)}</div></section>
      <section className="cta-section"><div className="cta-copy"><p className="eyebrow">A clearer view starts here</p><h2>Bring your whole school<br /><em>onto one screen.</em></h2><p>Talk to the Fasl365 team about your grades, classes and school workflows.</p><div className="cta-actions"><a className="button magenta" href="mailto:info@fasl365.com">Contact Fasl365 <span>↗</span></a><a className="cta-ghost" href="#platform">Explore the platform</a></div><ul className="cta-points"><li>Classes &amp; subjects</li><li>Attendance</li><li>AI-assisted review</li></ul></div><div className="cta-motif" aria-hidden="true"><svg className="cta-burst" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"><path d="M200 8 252 98 350 60 322 162 410 214 318 258 330 360 238 322 200 410 162 322 70 360 82 258-10 214 78 162 50 60 148 98Z" /><path d="M200 70 238 138 306 112 288 180 346 214 286 246 296 312 232 288 200 350 168 288 104 312 114 246 54 214 112 180 94 112 162 138Z" /></svg><span><Icon name="cap" /></span></div></section>
    </main>
    <Footer />
  </>
}
export default App
