import { externalProfiles, profile } from '../data/portfolio.js'
import { FaBriefcase, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const profileIcons = {
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
  Naukri: FaBriefcase,
}

function Footer() {
  const profiles = Object.entries(externalProfiles).filter(([, url]) => url)

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <a className="brand footer-brand" href="/">
          <span className="brand-mark" aria-hidden="true">K</span>
          <span>{profile.name}</span>
        </a>
        <div className="footer-contact-links">
          <a className="footer-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="footer-resume" href="/resume.pdf" download="Keval-Sukase-Resume.pdf">
            Download Resume
          </a>
          {profiles.length > 0 && (
            <nav className="footer-profiles" aria-label="Professional profiles">
              {profiles.map(([name, url]) => {
                const Icon = profileIcons[name]

                return (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} profile (opens in a new tab)`}
                    title={name}
                  >
                    {Icon && <Icon aria-hidden="true" focusable="false" />}
                    <span>{name}</span>
                  </a>
                )
              })}
            </nav>
          )}
        </div>
        <p>Building useful software, one thoughtful solution at a time.</p>
        <span className="footer-copyright">© {new Date().getFullYear()} {profile.name}</span>
      </div>
    </footer>
  )
}

export default Footer
