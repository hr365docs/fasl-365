const GREEN = '#4b8b2c', AMBER = '#ec9a0b', RED = '#e00000', GREY = '#d0d0d0'

const donut = (segs: [number, string][]) => {
  const total = segs.reduce((a, [v]) => a + v, 0)
  let acc = 0
  const stops = segs.filter(([v]) => v > 0).map(([v, c]) => {
    const from = (acc / total) * 100
    acc += v
    return `${c} ${from}% ${(acc / total) * 100}%`
  })
  return { background: `conic-gradient(${stops.join(', ')})` }
}

const initials = (n: string) => n.split(/[\s-]+/).map(x => x[0]).join('').slice(0, 2)

const metrics = [
  { label: 'Students', value: '17', note: 'of 60 seats · 28% full', tone: '#5a2548' },
  { label: 'Avg score', value: '46%', delta: '-18', note: 'vs last week', tone: RED },
  { label: 'Completion', value: '52%', note: 'average course progress', tone: '#12808f' },
  { label: 'Attendance', value: '93%', note: '9 of 17 in school today', tone: GREEN },
  { label: 'Teachers', value: '4', note: 'plus 1 instructor, 1 admin', tone: AMBER },
  { label: 'To review', value: '4', note: '0 course approvals', tone: RED },
]

const attendance: [string, number, string][] = [['Present', 6, GREEN], ['Late', 3, AMBER], ['Absent', 0, RED], ['Not scanned', 8, GREY]]
const groups: [string, number, string][] = [['High', 3, GREEN], ['Medium', 5, AMBER], ['Needs support', 9, RED]]

const deadlines = [
  { d: '24', m: 'Oct', title: 'Linear Equations Worksheet', sub: 'Class 8A · Algebra Foundation', done: 4, of: 11, tag: 'Overdue' },
  { d: '2', m: 'Nov', title: 'States of Matter Report', sub: 'Class 8A · Matter and Energy', done: 2, of: 11, tag: 'Overdue' },
  { d: '4', m: 'Nov', title: "Newton's Laws Problem Set", sub: 'Class 10A · Forces and Motion', done: 0, of: 6, tag: 'Overdue' },
]

const top = [['Mei Lin Tan', 'Class 10A', 93], ['Noor Al-Thanii', 'Class 8A', 91], ['Hamad Al-Marri', 'Class 10A', 88]] as const

function Legend({ rows }: { rows: [string, number, string][] }) {
  return <ul className="g-legend">{rows.map(([l, v, c]) => <li key={l}><i style={{ background: c }} />{l} <b>{v}</b></li>)}</ul>
}

export default function Glance() {
  return (
    <section className="section dashboard-section glance-section" id="dashboard" aria-labelledby="glance-title">
      <div className="dash-intro">
        <p className="eyebrow">School dashboard</p>
        <h2 id="glance-title">See what needs attention, <em>right now.</em></h2>
        <p>Flagged submissions, students who need attention, overdue work and attendance, with learning groups and deadlines in one place.</p>
      </div>

      <div className="glance">
        <div className="g-panel">
          <h3 className="g-title">School at a glance</h3>
          <div className="g-metrics">
            {metrics.map(m => (
              <div className="g-metric" style={{ borderLeftColor: m.tone }} key={m.label}>
                <span>{m.label}</span>
                <b>{m.value}{m.delta && <em><i>▼</i>{m.delta}</em>}</b>
                <small>{m.note}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="g-row g-row-4">
          <div className="g-panel">
            <h3 className="g-title">Attendance today</h3>
            <div className="g-donut-wrap">
              <div className="g-donut" style={donut(attendance.map(([, v, c]) => [v, c]))}><span><b>9/17</b><small>in school</small></span></div>
              <Legend rows={attendance} />
            </div>
          </div>
          <div className="g-panel">
            <h3 className="g-title">Learning groups</h3>
            <div className="g-donut-wrap">
              <div className="g-donut" style={donut(groups.map(([, v, c]) => [v, c]))}><span><b>46%</b><small>average score</small></span></div>
              <Legend rows={groups} />
            </div>
          </div>
          <div className="g-panel">
            <h3 className="g-title">Upcoming deadlines</h3>
            <div className="g-deadlines">
              {deadlines.map(d => (
                <div className="g-deadline" key={d.title}>
                  <time><b>{d.d}</b>{d.m}</time>
                  <div>
                    <strong>{d.title}</strong>
                    <small>{d.sub}</small>
                    <div className="g-bar"><i style={{ width: (d.done / d.of) * 100 + '%', background: '#12808f' }} /></div>
                    <small>{d.done} of {d.of} submitted</small>
                  </div>
                  <span className={'g-pill ' + (d.tag === 'Today' ? 'warn' : 'bad')}>{d.tag}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="g-panel">
            <h3 className="g-title">Top performers</h3>
            <ol className="g-top">
              {top.map(([n, c, s], i) => (
                <li key={n}><em>{i + 1}</em><i>{initials(n)}</i>
                  <div><b>{n} <small>{c}</small></b><div className="g-bar thick"><i style={{ width: s + '%', background: GREEN }} /></div></div>
                  <strong>{s}%</strong></li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
