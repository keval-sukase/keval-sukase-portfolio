import { useState } from 'react'
import { profile } from '../data/portfolio.js'

const links = [
  ['Home', '/#home'],
  ['About', '/#about'],
  ['Services', '/#services'],
  ['Projects', '/#projects'],
  ['Experience', '/#experience'],
]

function Navbar({ activePage = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="/" aria-label={`${profile.name}, home`}>
          <span className="brand-mark" aria-hidden="true">K</span>
          <span>Keval Sukase</span>
        </a>
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
      </nav>
    </header>
  )
}

export default Navbar
