import { useState, useRef, useEffect } from 'react'
import { characters, disambiguations } from '../data/characters'

// ── Fine line: Ribbon Bow ──────────────────────────────────────────────
function Bow({ className = '' }) {
  return (
    <svg viewBox="0 0 200 108" className={className} fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* Left loop */}
      <path stroke="currentColor" strokeWidth="1.1"
        d="M 100 52 C 86 38, 56 18, 32 25 C 12 31, 6 52, 22 63 C 42 78, 84 66, 100 52 Z" />
      {/* Right loop */}
      <path stroke="currentColor" strokeWidth="1.1"
        d="M 100 52 C 114 38, 144 18, 168 25 C 188 31, 194 52, 178 63 C 158 78, 116 66, 100 52 Z" />
      {/* Left tail — two ribbon edges */}
      <path stroke="currentColor" strokeWidth="1"
        d="M 94 57 C 80 72, 60 86, 44 104" />
      <path stroke="currentColor" strokeWidth="1"
        d="M 100 60 C 88 75, 70 90, 58 108" />
      {/* Right tail */}
      <path stroke="currentColor" strokeWidth="1"
        d="M 106 57 C 120 72, 140 86, 156 104" />
      <path stroke="currentColor" strokeWidth="1"
        d="M 100 60 C 112 75, 130 90, 142 108" />
      {/* Center knot */}
      <ellipse stroke="currentColor" strokeWidth="1.2"
        cx="100" cy="52" rx="7" ry="8.5" />
    </svg>
  )
}

// ── Fine line: Cocktail Glass ──────────────────────────────────────────
function CocktailGlass({ className = '' }) {
  return (
    <svg viewBox="0 0 68 108" className={className} fill="none" stroke="currentColor"
      strokeWidth="0.85" strokeLinecap="round" strokeLinejoin="round">
      {/* Rim */}
      <line x1="4" y1="16" x2="64" y2="16" />
      {/* Bowl — martini V */}
      <line x1="4"  y1="16" x2="34" y2="60" />
      <line x1="64" y1="16" x2="34" y2="60" />
      {/* Stem */}
      <line x1="34" y1="60" x2="34" y2="90" />
      {/* Base */}
      <line x1="16" y1="90" x2="52" y2="90" />
      {/* Garnish pick */}
      <line x1="18" y1="16" x2="46" y2="30" />
      {/* Olive */}
      <circle cx="46" cy="31" r="5" />
      {/* Liquid surface */}
      <line x1="12" y1="28" x2="56" y2="28" strokeOpacity="0.35" />
    </svg>
  )
}

// ── Fine line: Die ─────────────────────────────────────────────────────
function FineDie({ value = 5, className = '' }) {
  const dots = {
    1: [[42, 42]],
    2: [[27, 27], [57, 57]],
    3: [[27, 27], [42, 42], [57, 57]],
    4: [[27, 27], [57, 27], [27, 57], [57, 57]],
    5: [[27, 27], [57, 27], [42, 42], [27, 57], [57, 57]],
    6: [[27, 21], [57, 21], [27, 42], [57, 42], [27, 63], [57, 63]],
  }
  return (
    <svg viewBox="0 0 84 84" className={className} fill="none" stroke="currentColor"
      strokeWidth="0.85" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="5" width="74" height="74" rx="13" />
      {dots[value].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4.5" fill="currentColor" stroke="none" />
      ))}
    </svg>
  )
}

// ── Fine line: Single playing card ────────────────────────────────────
function FineCard({ suit = '♠', value = 'A', red = false, style = {} }) {
  const ink = red ? '#C41E3A' : 'currentColor'
  return (
    <svg viewBox="0 0 52 80" fill="none" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <rect x="1.5" y="1.5" width="49" height="77" rx="4.5"
        stroke="currentColor" strokeWidth="0.85" />
      {/* Top-left */}
      <text x="6" y="14" fontFamily="Georgia,serif" fontSize="9" fill={ink} fontWeight="400">{value}</text>
      <text x="6.5" y="24" fontFamily="Georgia,serif" fontSize="9" fill={ink}>{suit}</text>
      {/* Centre */}
      <text x="26" y="46" fontFamily="Georgia,serif" fontSize="21" textAnchor="middle" fill={ink}>{suit}</text>
      {/* Bottom-right (rotated) */}
      <g transform="rotate(180 26 40.5)">
        <text x="6" y="14" fontFamily="Georgia,serif" fontSize="9" fill={ink} fontWeight="400">{value}</text>
        <text x="6.5" y="24" fontFamily="Georgia,serif" fontSize="9" fill={ink}>{suit}</text>
      </g>
    </svg>
  )
}

// ── Fanned playing cards ───────────────────────────────────────────────
function FannedCards() {
  const cards = [
    { suit: '♠', value: 'K',  red: false, rotate: -20, tx: -52 },
    { suit: '♥', value: 'Q',  red: true,  rotate: -10, tx: -26 },
    { suit: '♦', value: 'A',  red: true,  rotate:   0, tx:   0 },
    { suit: '♣', value: 'J',  red: false, rotate:  10, tx:  26 },
    { suit: '♠', value: '10', red: false, rotate:  20, tx:  52 },
  ]
  return (
    <div className="relative flex justify-center" style={{ height: 80, width: 140 }}>
      {cards.map((card, i) => (
        <div key={i} className="absolute" style={{
          width: 44, height: 68,
          bottom: 0,
          left: '50%',
          marginLeft: -22,
          zIndex: i + 1,
          transform: `rotate(${card.rotate}deg) translateX(${card.tx}px)`,
          transformOrigin: '50% 95%',
        }}>
          <FineCard {...card} style={{ width: '100%', height: '100%', color: 'rgba(212,175,55,0.5)' }} />
        </div>
      ))}
    </div>
  )
}

// ── Gold rule divider ──────────────────────────────────────────────────
function GoldRule() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-px bg-casino-gold/15" />
      <span className="text-casino-gold/25 text-[9px] tracking-[0.55em]">♠ ♥ ♦ ♣</span>
      <div className="flex-1 h-px bg-casino-gold/15" />
    </div>
  )
}

// ── Main page ──────────────────────────────────────────────────────────
export default function MurderMystery() {
  const [inputValue, setInputValue]     = useState('')
  const [result, setResult]             = useState(null)   // 'found' | 'notFound' | 'disambiguate'
  const [character, setCharacter]       = useState(null)
  const [disambigOptions, setDisambigOptions] = useState([])
  const [animKey, setAnimKey]           = useState(0)
  const inputRef                        = useRef(null)
  const resultRef                       = useRef(null)

  function revealCharacter(char) {
    setCharacter(char)
    setResult('found')
    setAnimKey(k => k + 1)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const key = inputValue.toLowerCase().trim()
    if (characters[key]) { revealCharacter(characters[key]); return }
    if (disambiguations[key]) {
      setDisambigOptions(disambiguations[key])
      setCharacter(null)
      setResult('disambiguate')
      return
    }
    setCharacter(null)
    setResult('notFound')
  }

  function handleReset() {
    setInputValue('')
    setResult(null)
    setCharacter(null)
    setDisambigOptions([])
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  useEffect(() => {
    if (result) {
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80)
    }
  }, [result, animKey])

  return (
    <div className="relative min-h-screen bg-casino-black overflow-hidden">

      {/* ── BACKGROUND ── */}
      {/* Barely-there gold warmth at crown */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 40% at 50% -5%, rgba(212,175,55,0.05) 0%, transparent 60%)',
      }} />
      {/* Deep shadow at base */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(ellipse 60% 35% at 50% 110%, rgba(0,0,0,0.5) 0%, transparent 65%)',
      }} />
      {/* Single giant watermark suit — very faint */}
      <div className="pointer-events-none absolute select-none"
        style={{ color: 'rgba(255,255,255,0.012)', fontSize: '30rem', lineHeight: 1, bottom: '-5rem', right: '-5rem' }}>
        ♠
      </div>

      {/* ── HERO ── */}
      <div className="relative z-10 text-center px-4 pt-14 pb-8">

        {/* Bow */}
        <div className="flex justify-center mb-7">
          <Bow className="w-36 text-casino-gold/45" />
        </div>

        {/* Eyebrow */}
        <p className="font-sans text-casino-gold/60 text-[9px] tracking-[0.7em] uppercase mb-5">
          Casino Murder Mystery
        </p>

        {/* Title */}
        <h1
          className="font-script text-casino-gold leading-none mb-3"
          style={{
            fontSize: 'clamp(3.4rem, 12vw, 6.5rem)',
            textShadow: '0 0 60px rgba(212,175,55,0.28), 0 0 120px rgba(212,175,55,0.08)',
          }}
        >
          Thirty, Thrills &amp; Terror
        </h1>

        {/* Date */}
        <p className="font-sans text-casino-cream/55 text-[9px] tracking-[0.4em] uppercase mb-10">
          Saturday 14 March 2026 &nbsp;·&nbsp; 6 pm
        </p>

        {/* Fine line illustration triptych */}
        <div className="flex items-end justify-center gap-10 mb-10">
          <CocktailGlass className="w-10 h-auto text-casino-gold/40" />
          <FannedCards />
          <FineDie value={5} className="w-10 h-10 text-casino-gold/40" />
        </div>

        <GoldRule />

        {/* ── CHARACTER LOOKUP ── */}
        <div className="max-w-md mx-auto mt-9 px-4">
          <p className="font-sans text-casino-cream/55 text-[9px] tracking-[0.4em] uppercase mb-6">
            Enter your first name to reveal your character
          </p>

          {/* Warning — no emoji, editorial left-border style */}
          <div className="border-l border-casino-red/40 pl-4 mb-6 text-left">
            <p className="font-sans text-casino-cream/65 text-xs leading-relaxed">
              <span className="text-casino-cream/85 font-medium">Your eyes only.</span>{' '}
              Please look up only your own name — seeing someone else's character spoils the mystery for everyone.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex gap-0">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder="Your first name..."
              className="flex-1 bg-transparent border border-casino-cream/20 border-r-0 px-4 py-3
                         font-sans text-casino-cream placeholder-casino-cream/35 text-sm
                         focus:outline-none focus:border-casino-gold/45
                         transition-colors"
            />
            <button type="submit"
              className="border border-casino-gold/45 hover:border-casino-gold/75
                         text-casino-gold/85 hover:text-casino-gold
                         font-sans font-normal text-[10px] tracking-[0.35em] uppercase
                         px-5 py-3
                         transition-all duration-200">
              Reveal
            </button>
          </form>

          {/* ── RESULTS — directly below form ── */}
          {result && (
            <div ref={resultRef} className="mt-6 text-left">

              {/* Not found */}
              {result === 'notFound' && (
                <div className="border border-casino-red/30 p-5 text-center">
                  <p className="text-casino-cream/80 font-serif text-base mb-2">Name not found</p>
                  <p className="font-sans text-casino-cream/65 text-xs leading-relaxed mb-3">
                    Just enter your first name — no surname needed.
                  </p>
                  <p className="font-sans text-casino-gold/55 text-[10px] tracking-[0.2em]">
                    e.g. <span className="text-casino-gold/80 font-medium">Reuben</span>, <span className="text-casino-gold/80 font-medium">Holly</span>, <span className="text-casino-gold/80 font-medium">Jess</span>
                  </p>
                </div>
              )}

              {/* Disambiguation */}
              {result === 'disambiguate' && (
                <div className="border border-casino-gold/25 p-5">
                  <p className="font-sans text-casino-gold/60 text-[9px] tracking-[0.4em] uppercase mb-5 text-center">
                    Which one are you?
                  </p>
                  <div className="flex flex-col gap-2">
                    {disambigOptions.map(opt => (
                      <button
                        key={opt.key}
                        onClick={() => revealCharacter(characters[opt.key])}
                        className="w-full text-left border border-casino-cream/15 hover:border-casino-gold/40
                                   text-casino-cream/75 hover:text-casino-cream/95
                                   font-sans text-sm py-3 px-5
                                   transition-all duration-200"
                      >
                        {opt.label}
                        <span className="text-casino-gold/55 ml-2 text-xs">
                          — {characters[opt.key]?.characterName}
                        </span>
                      </button>
                    ))}
                  </div>
                  <button onClick={handleReset}
                    className="mt-4 w-full text-casino-cream/40 hover:text-casino-cream/60
                               font-sans text-[10px] tracking-widest uppercase py-2 transition-colors text-center">
                    Go back
                  </button>
                </div>
              )}

              {/* Character card */}
              {result === 'found' && character && (
                <div key={animKey}
                  style={{
                    animation: 'revealCard 0.5s ease-out forwards',
                    border: '1px solid rgba(212,175,55,0.45)',
                    background: 'rgba(10,8,5,0.96)',
                    boxShadow: '0 0 40px rgba(212,175,55,0.12), 0 0 80px rgba(212,175,55,0.05)',
                  }}
                >
                  {/* Gold top bar */}
                  <div style={{ height: 2, background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.7), transparent)' }} />

                  {/* Header */}
                  <div className="border-b border-casino-gold/20 p-6 text-center">
                    <p className="font-sans text-casino-gold/55 text-[9px] tracking-[0.4em] uppercase mb-3">
                      Your character this evening
                    </p>
                    <h2 className="font-serif text-casino-gold font-normal leading-tight mb-2"
                      style={{ fontSize: 'clamp(1.8rem, 6vw, 2.6rem)' }}>
                      {character.characterName}
                    </h2>
                    <p className="font-sans text-casino-cream/60 text-[10px] tracking-[0.3em] uppercase">
                      {character.role}
                    </p>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-5">
                    <p className="font-sans text-casino-cream/70 text-sm leading-relaxed text-center">
                      Your backstory, objectives, and secrets are all inside your character sheet.
                      Download it below — and keep it to yourself.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 pt-1">
                      <a
                        href={`${import.meta.env.BASE_URL}character/${character.pdfFile}`}
                        download={character.pdfFile}
                        type="application/pdf"
                        className="flex-1 flex items-center justify-center gap-2
                                   bg-casino-gold hover:bg-casino-gold/90 text-casino-black
                                   font-sans font-medium text-[10px] tracking-[0.35em] uppercase
                                   px-5 py-3.5 transition-all duration-200"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Character Sheet
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── CRIME SCENE BRIEF ── */}
      <div className="relative z-10 max-w-xl mx-auto px-5 pb-8">
        <div className="relative p-7 sm:p-10 text-center"
          style={{ border: '1px solid rgba(212,175,55,0.13)' }}
        >
          {/* Inner frame line */}
          <div className="absolute inset-[6px] pointer-events-none"
            style={{ border: '1px solid rgba(212,175,55,0.05)' }} />

          {/* Corner bracket ornaments */}
          {['tl','tr','bl','br'].map(pos => (
            <svg key={pos} viewBox="0 0 14 14"
              className="absolute w-3.5 h-3.5 text-casino-gold/25"
              fill="none" stroke="currentColor" strokeWidth="0.9"
              style={{
                top:    pos.startsWith('t') ? 3  : 'auto',
                bottom: pos.startsWith('b') ? 3  : 'auto',
                left:   pos.endsWith('l')   ? 3  : 'auto',
                right:  pos.endsWith('r')   ? 3  : 'auto',
              }}
            >
              <path d={
                pos === 'tl' ? 'M 7 1 L 1 1 L 1 7' :
                pos === 'tr' ? 'M 7 1 L 13 1 L 13 7' :
                pos === 'bl' ? 'M 7 13 L 1 13 L 1 7' :
                               'M 7 13 L 13 13 L 13 7'
              } />
            </svg>
          ))}

          {/* Quote */}
          <p className="font-serif text-casino-cream/80 text-base sm:text-lg italic leading-relaxed mb-7">
            "The stakes are high.<br />
            The secrets are deadly.<br />
            And someone won't make it to the final hand."
          </p>

          <GoldRule />

          <div className="text-left space-y-3 mt-6">
            <p className="font-sans text-casino-gold/60 text-[9px] uppercase tracking-[0.55em]">
              Dress Code
            </p>
            <p className="font-sans text-casino-cream/75 text-sm leading-relaxed">
              Chill during the day — but when the mystery begins, transform.
              Think <span className="text-casino-gold/90">Vegas glam</span>,{' '}
              <span className="text-casino-gold/90">casino chic</span> — let your character inspire you.
            </p>
            <p className="font-sans text-casino-cream/55 text-sm leading-relaxed italic">
              Glamorous, polished, and a little{' '}
              <span className="text-casino-red/75">dangerous</span>.
            </p>
            <div className="pt-3 flex flex-wrap gap-x-4 gap-y-1">
              {['Gold', 'Silver', 'Red', 'Black', 'Brown'].map(c => (
                <span key={c}
                  className="font-sans text-casino-cream/40 text-[9px] tracking-[0.3em] uppercase">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
