import { useState } from 'react'

type Grade = { name: string; phase: 'Primary' | 'Middle' | 'Secondary' | 'Senior'; n: number; teacher: string; students: number; subjects: number; teachers: number; score: number; att: number; trend: number; live?: boolean }

// Totals match the summary cards: 327 students, 109 class subjects, avg score 74%, attendance 94%
const grades: Grade[] = [
  { name: 'Grade 1', phase: 'Primary', n: 1, teacher: 'Emily Watson', students: 24, subjects: 6, teachers: 8, score: 82, att: 96, trend: 3 },
  { name: 'Grade 2', phase: 'Primary', n: 2, teacher: 'Daniel Brooks', students: 26, subjects: 6, teachers: 8, score: 78, att: 95, trend: 1 },
  { name: 'Grade 3', phase: 'Primary', n: 3, teacher: 'Sara Al Mansoori', students: 25, subjects: 7, teachers: 9, score: 85, att: 97, trend: 4 },
  { name: 'Grade 4', phase: 'Primary', n: 4, teacher: 'James Carter', students: 28, subjects: 7, teachers: 10, score: 71, att: 93, trend: -2 },
  { name: 'Grade 5', phase: 'Primary', n: 5, teacher: 'Fatima Rahman', students: 27, subjects: 8, teachers: 11, score: 76, att: 94, trend: 2 },
  { name: 'Grade 6', phase: 'Middle', n: 6, teacher: 'Michael Chen', students: 29, subjects: 8, teachers: 11, score: 68, att: 91, trend: -3 },
  { name: 'Grade 7', phase: 'Middle', n: 7, teacher: 'Aisha Karim', students: 30, subjects: 10, teachers: 13, score: 73, att: 92, trend: 1 },
  { name: 'Grade 8', phase: 'Middle', n: 8, teacher: 'Priya Nair', students: 28, subjects: 11, teachers: 14, score: 80, att: 95, trend: 5, live: true },
  { name: 'Grade 9', phase: 'Secondary', n: 9, teacher: 'Omar Haddad', students: 27, subjects: 11, teachers: 14, score: 66, att: 90, trend: -1 },
  { name: 'Grade 10', phase: 'Secondary', n: 10, teacher: 'Layla Hassan', students: 26, subjects: 11, teachers: 14, score: 72, att: 93, trend: 2, live: true },
  { name: 'Grade 11', phase: 'Senior', n: 11, teacher: 'Ryan Patel', students: 29, subjects: 12, teachers: 15, score: 71, att: 94, trend: 0 },
  { name: 'Grade 12', phase: 'Senior', n: 12, teacher: 'Noura Al Suwaidi', students: 28, subjects: 12, teachers: 15, score: 70, att: 96, trend: 3 },
]

const scoreTone = (s: number) => (s >= 80 ? 'good' : s >= 70 ? 'ok' : 'low')
 
const tabs: { label: string; test: (g: Grade) => boolean }[] = [
  { label: 'All', test: () => true },
  { label: 'Primary 1–5', test: g => g.phase === 'Primary' },
  { label: 'Middle 6–8', test: g => g.phase === 'Middle' },
  { label: 'Secondary 9–10', test: g => g.phase === 'Secondary' },
  { label: 'Senior 11–12', test: g => g.phase === 'Senior' },
]

const summary = [
  { title: 'Classes', tone: 'red', stats: [['12', 'Grades'], ['327', 'Students']], note: 'Primary, Middle, Secondary and Senior', icon: <><path d="m3 10 9-5 9 5-9 5-9-5Z" /><path d="M7 12.5V17c3.2 2.4 6.8 2.4 10 0v-4.5M21 10v6" /></> },
  { title: 'Subjects', tone: 'plum', stats: [['21', 'Subjects'], ['109', 'Class subjects']], note: 'Each class is divided into subjects', icon: <path d="M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4Zm3 0v14" /> },
  { title: 'Teachers', tone: 'teal', stats: [['44', 'Teachers']], note: 'Open a subject to see its teachers', icon: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2.5" /><path d="M3.5 20c.5-5 3-7 5.5-7s5 2 5.5 7M14 14c3.7-.7 6 1.2 6.5 5" /></> },
  { title: 'School at a glance', tone: 'amber', stats: [['74%', 'Avg score'], ['94%', 'Attendance']], note: 'Across all 12 classes', icon: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /> },
]

const visibleTabs = tabs.filter(t => grades.some(t.test))

const initials = (n: string) => n.split(' ').map(x => x[0]).join('')

export default function Classes() {
  const [tab, setTab] = useState(0)
  const shown = grades.filter(visibleTabs[tab].test)
  return (
    <section className="section classes-section" id="platform" aria-labelledby="classes-title">
      <div className="classes-heading">
        <p className="eyebrow red">Class by class</p>
        <h2 id="classes-title">Every class, <em>one clear view.</em></h2>
      </div>

      <div className="classes-view">
        <div className="classes-banner">
          <span className="classes-crumb">⌂ Home</span>
          <h3>Classes</h3>
          <p>Grade 1 to Grade 12 · Fasl Demo School · 2026–27</p>
        </div>

        <div className="classes-summary">
          {summary.map(s => (
            <article className={'summary-card ' + s.tone} key={s.title}>
              <div className="summary-top"><span>{s.title}</span>
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
              </div>
              <div className="summary-stats">{s.stats.map(([v, l]) => <div key={l}><b>{v}</b><small>{l}</small></div>)}</div>
              <p>{s.note}</p>
            </article>
          ))}
        </div>

        <div className="classes-tabs" role="tablist" aria-label="Filter by phase">
          {visibleTabs.map((t, i) => <button key={t.label} role="tab" aria-selected={tab === i} className={tab === i ? 'active' : ''} onClick={() => setTab(i)}>{t.label}</button>)}
        </div>

        <div className="class-grid">
          {shown.map(g => (
            <article className={'class-card' + (g.live ? ' live' : '')} key={g.name}>
              <header><strong>{g.name}</strong><span>{g.phase}</span></header>
              <div className="class-body">
                <div className="class-teacher"><i>{initials(g.teacher)}</i><div><b>{g.teacher}</b><small>Class teacher</small></div></div>
                <div className="class-stats">
                  <div><b>{g.students}</b><small>Students</small></div>
                  <div><b>{g.subjects}</b><small>Subjects</small></div>
                  <div><b>{g.teachers}</b><small>Teachers</small></div>
                </div>
                <div className="class-score-row">
                  <small>Avg score</small>
                  <b className={'tone-' + scoreTone(g.score)}>{g.score}%</b>
                  <em className={g.trend > 0 ? 'up' : g.trend < 0 ? 'down' : 'flat'} aria-label={`${g.trend > 0 ? 'up' : g.trend < 0 ? 'down' : 'no change'} ${Math.abs(g.trend)} points this term`}>
                    {g.trend > 0 ? '▲' : g.trend < 0 ? '▼' : '–'} {Math.abs(g.trend)}%
                  </em>
                </div>
                <div className={'class-bar tone-' + scoreTone(g.score)}><i style={{ width: g.score + '%' }} /></div>
                <div className="class-meta">
                  <span className={'class-att' + (g.att >= 95 ? ' high' : '')}>Attendance {g.att}%</span>
                  {g.live && <span className="class-live"><i aria-hidden="true" />Live</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
