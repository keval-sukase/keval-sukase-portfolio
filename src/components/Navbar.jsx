import { useState } from 'react'
import { FaBriefcase, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { externalProfiles, profile } from '../data/portfolio.js'

const profileIcons = {
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
  Naukri: FaBriefcase,
}

function isValidProfileUrl(url) {
  if (typeof url !== 'string') return false

  try {
    const parsedUrl = new URL(url)
    return parsedUrl.protocol === 'https:' || parsedUrl.protocol === 'http:'
  } catch {
    return false
  }
}

const links = [
  ['Home', '/#home'],
  ['About', '/#about'],
  ['Services', '/#services'],
  ['Projects', '/#projects'],
  ['Experience', '/#experience'],
]

function Navbar({ activePage = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const profiles = Object.entries(externalProfiles).filter(
    ([name, url]) => profileIcons[name] && isValidProfileUrl(url),
  )

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="/" aria-label={`${profile.name}, home`}>
          <span className="brand-mark" aria-hidden="true">K</span>
          <span>Keval Sukase</span>
        </a>
        <div className="navbar-end">
          <div
            id="primary-navigation"
            className={`nav-links${menuOpen ? ' is-open' : ''}`}
          >
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                aria-current={activePage === 'home' && label === 'Home' ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="/contact"
              aria-current={activePage === 'contact' ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <a className="button button-small button-primary nav-cta" href="/contact">
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </a>
          </div>
          {profiles.length > 0 && (
            <nav className="header-profiles" aria-label="Professional profiles">
              {profiles.map(([name, url]) => {
                const Icon = profileIcons[name]

                return (
                  <a
                    className="header-profile-link"
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} profile (opens in a new tab)`}
                    title={name}
                  >
                    <Icon aria-hidden="true" focusable="false" />
                  </a>
                )
              })}
            </nav>
          )}
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
