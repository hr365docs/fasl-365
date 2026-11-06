type LinkItem = { label: string; href: string; external?: boolean }
type Group = { heading: string; items?: LinkItem[]; lines?: string[] }

const columns: Group[][] = [
  [{
    heading: 'Platform', items: [
      { label: 'Classes & subjects', href: '#platform' },
      { label: 'Attendance & performance', href: '#platform' },
      { label: 'Assessments', href: '#features' },
      { label: 'AI-assisted review', href: '#features' },
      { label: 'Learning groups', href: '#features' },
      { label: 'Approvals & moderation', href: '#features' },
    ],
  }],
  [
    { heading: 'Explore', items: [{ label: 'School dashboard', href: '#platform' }, { label: 'Subjects', href: '#subjects' }, { label: 'Features', href: '#features' }] },
    { heading: 'Help', items: [{ label: 'FAQ', href: '#faq' }] },
  ],
  [
    { heading: 'Company', items: [{ label: 'About Cubic Logics', href: 'https://www.cubiclogics.com/', external: true }, { label: 'Contact', href: 'mailto:info@fasl365.com' }] },
    { heading: 'Customer', items: [{ label: 'Support', href: 'mailto:info@fasl365.com' }, { label: 'Book a conversation', href: 'mailto:info@fasl365.com' }] },
  ],
  [
    { heading: 'USA', lines: ['8, The Green, #11736', 'Dover, DE – 19901'] },
    { heading: 'Canada', lines: ['325, Front St W, #300, Toronto,', 'ON – M5V 2Y1'] },
    { heading: 'UAE', lines: ['PO Box 342001', 'IFZA Business Park, Dubai'] },
  ],
]

type Badge = { src: string; alt: string; wide?: boolean }
const badgeGroups: Badge[][] = [
  [
    { src: 'https://ik.imagekit.io/apps365/Trusted-by-logos/soc.webp', alt: 'AICPA SOC' },
    { src: 'https://ik.imagekit.io/cubiclogics/Badge/SOC-2.png', alt: 'SOC 2 Compliant' },
    { src: 'https://ik.imagekit.io/apps365/Trusted-by-logos/ISO.webp', alt: 'ISO 27001' },
    { src: 'https://ik.imagekit.io/cubiclogics/Badge/Certified.png', alt: 'Microsoft Certified' },
  ],
  [
    { src: 'https://ik.imagekit.io/cubiclogics/New%20badges/roi.png', alt: 'G2 Best ROI' },
    { src: 'https://ik.imagekit.io/cubiclogics/New%20badges/Momentum.png', alt: 'G2 Momentum Leader' },
    { src: 'https://ik.imagekit.io/cubiclogics/New%20badges/Support.png', alt: 'G2 Best Support' },
  ],
  [
    { src: 'https://ik.imagekit.io/cubiclogics/Badge/Available.png', alt: 'Microsoft Azure Marketplace', wide: true },
    { src: 'https://ik.imagekit.io/cubiclogics/Badge/Great-Place-To-Work-image_Size.png', alt: 'Great Place to Work' },
  ],
]

const socials: { label: string; href: string; viewBox: string; d: string }[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/cubiclogics/', viewBox: '0 0 320 512', d: 'M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/cubiclogics/', viewBox: '0 0 448 512', d: 'M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z' },
  { label: 'X', href: 'https://x.com/cubiclogics', viewBox: '0 0 512 512', d: 'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z' },
  { label: 'Instagram', href: 'https://www.instagram.com/cubic.logics/', viewBox: '0 0 448 512', d: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' },
  { label: 'YouTube', href: 'https://www.youtube.com/@hr365', viewBox: '0 0 576 512', d: 'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-container">
        {columns.map((col, i) => (
          <div className="footer-column" key={i}>
            {col.map((g, j) => (
              <div key={g.heading}>
                <h3 className={'footer-heading' + (j > 0 ? ' footer-heading-spaced' : '')}>{g.heading}</h3>
                {g.items && (
                  <ul className="footer-list">
                    {g.items.map(it => (
                      <li className="footer-list-item" key={it.label}>
                        <a className="footer-link" href={it.href} {...(it.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{it.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
                {g.lines?.map(l => <p className="footer-address-text" key={l}>{l}</p>)}
              </div>
            ))}
          </div>
        ))}
        <div className="footer-column footer-column-wide">
          <a href="#top" className="footer-brand-container" aria-label="Fasl365 home">
            <img src="/fasl365-mark-white.svg" alt="" className="footer-logo-img" />
            <span>Fasl365</span>
          </a>
          <p className="footer-tagline">One platform for the whole school: classes, subjects, assessments, attendance and AI-assisted review, built by Cubic Logics.</p>
        </div>
      </div>

      <div className="footer-badge-section">
        {badgeGroups.map((group, i) => (
          <div className="footer-badge-row" key={i}>
            {i > 0 && <div className="footer-divider" />}
            <div className="footer-badge-group">{group.map(b => <img key={b.alt} src={b.src} alt={b.alt} loading="lazy" className={b.wide ? "footer-badge-img-wide" : "footer-badge-img"} />)}</div>
          </div>
        ))}
      </div>

      <div className="footer-bottom-bar">
        <p className="footer-copyright">© 2026 – <a href="#top">Fasl365</a>. <a href="https://www.cubiclogics.com/" target="_blank" rel="noopener noreferrer">Cubic Logics</a>.</p>
        <div className="footer-social-icons">
          {socials.map(s => (
            <a key={s.label} href={s.href} className="footer-icon" aria-label={s.label} target="_blank" rel="noopener noreferrer">
              <svg viewBox={s.viewBox} fill="currentColor" aria-hidden="true"><path d={s.d} /></svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
