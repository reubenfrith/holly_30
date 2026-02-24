import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/drinks', label: 'Drinks' },
  { path: '/dinner', label: 'Dinner' },
  { path: '/mystery', label: 'Mystery' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isMystery = location.pathname === '/mystery'

  if (isMystery) {
    // Dark casino navbar for the mystery page
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-casino-black/90 border-b border-casino-gold/30"
           style={{ backdropFilter: 'blur(10px)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="font-serif text-casino-gold font-semibold text-base tracking-widest uppercase hover:text-casino-gold-light transition-colors">
              ♦ Holly's 30th
            </Link>
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map(({ path, label }) => (
                <Link key={path} to={path}
                  className={`font-sans text-xs tracking-[0.18em] uppercase transition-colors ${
                    location.pathname === path
                      ? 'text-casino-gold border-b border-casino-gold pb-0.5'
                      : 'text-casino-cream/50 hover:text-casino-gold'
                  }`}>
                  {label}
                </Link>
              ))}
            </div>
            <button className="md:hidden text-casino-cream/60 hover:text-casino-gold p-1"
                    onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-casino-black border-t border-casino-gold/20">
            {navLinks.map(({ path, label }) => (
              <Link key={path} to={path} onClick={() => setMenuOpen(false)}
                className={`block px-6 py-3 font-sans text-xs tracking-widest uppercase border-b border-casino-gold/10 ${
                  location.pathname === path ? 'text-casino-gold' : 'text-casino-cream/50 hover:text-casino-gold'
                }`}>
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    )
  }

  // Cream/burgundy navbar for birthday pages
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 border-b border-burg/15"
         style={{ backdropFilter: 'blur(10px)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link to="/"
            className="font-script text-burg text-2xl hover:text-burg-mid transition-colors leading-none pt-1">
            Holly's 30th
          </Link>
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(({ path, label }) => (
              <Link key={path} to={path}
                className={`font-sans text-xs tracking-[0.18em] uppercase transition-colors ${
                  location.pathname === path
                    ? 'text-burg border-b border-burg pb-0.5'
                    : 'text-burg/50 hover:text-burg'
                }`}>
                {label}
              </Link>
            ))}
          </div>
          <button className="md:hidden text-burg/60 hover:text-burg p-1"
                  onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-burg/15">
          {navLinks.map(({ path, label }) => (
            <Link key={path} to={path} onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 font-sans text-xs tracking-widest uppercase border-b border-burg/10 ${
                location.pathname === path ? 'text-burg' : 'text-burg/50 hover:text-burg'
              }`}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
