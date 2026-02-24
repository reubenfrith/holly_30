import { useState, useRef } from 'react'
import { characters } from '../data/characters'

// ── Fanned playing cards ──────────────────────────────────────────────
function FannedCards() {
  const cards = [
    { suit: '♠', value: 'K',  red: false, rotate: -24, tx: -56 },
    { suit: '♥', value: 'Q',  red: true,  rotate: -12, tx: -28 },
    { suit: '♦', value: 'A',  red: true,  rotate:   0, tx:   0 },
    { suit: '♣', value: 'J',  red: false, rotate:  12, tx:  28 },
    { suit: '♠', value: '10', red: false, rotate:  24, tx:  56 },
  ]
  return (
    <div className="relative flex justify-center" style={{ height: '100px' }}>
      {cards.map((card, i) => (
        <div
          key={i}
          className="absolute flex flex-col rounded shadow-2xl"
          style={{
            width: 52, height: 78,
            background: '#FAFAF6',
            border: '1px solid rgba(210,200,188,0.7)',
            transform: `rotate(${card.rotate}deg) translateX(${card.tx}px)`,
            zIndex: i + 1,
            transformOrigin: '50% 92%',
            bottom: 0,
            padding: '4px 5px',
          }}
        >
          {/* Top-left pip */}
          <div style={{
            color: card.red ? '#C41E3A' : '#111',
            fontSize: 9, fontWeight: 700, lineHeight: 1.25, fontFamily: 'serif',
          }}>
            {card.value}<br />{card.suit}
          </div>
          {/* Centre suit */}
          <div style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: card.red ? '#C41E3A' : '#111', fontSize: '1.35rem',
          }}>
            {card.suit}
          </div>
          {/* Bottom-right pip (rotated) */}
          <div style={{
            color: card.red ? '#C41E3A' : '#111',
            fontSize: 9, fontWeight: 700, lineHeight: 1.25, fontFamily: 'serif',
            transform: 'rotate(180deg)',
          }}>
            {card.value}<br />{card.suit}
          </div>
        </div>
      ))}
    </div>
  )
}

// ── SVG dice face ─────────────────────────────────────────────────────
function Die({ value, className = '' }) {
  const pips = {
    1: [[50, 50]],
    2: [[30, 30], [70, 70]],
    3: [[30, 30], [50, 50], [70, 70]],
    4: [[30, 30], [70, 30], [30, 70], [70, 70]],
    5: [[30, 30], [70, 30], [50, 50], [30, 70], [70, 70]],
    6: [[30, 22], [70, 22], [30, 50], [70, 50], [30, 78], [70, 78]],
  }
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <rect x="3" y="3" width="94" height="94" rx="16"
            fill="#FAFAF6" stroke="rgba(200,188,175,0.5)" strokeWidth="1.5" />
      {pips[value].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="8.5" fill="#C41E3A" />
      ))}
    </svg>
  )
}

// ── Suit-row divider ──────────────────────────────────────────────────
function SuitRow() {
  const row = ['♠','♥','♦','♣','♠','♥','♦','♣']
  return (
    <div className="flex items-center justify-center gap-2.5">
      <div className="flex-1 max-w-[60px] h-px bg-casino-gold/20" />
      {row.map((s, i) => (
        <span key={i} className="text-xs select-none"
          style={{ color: s === '♥' || s === '♦' ? 'rgba(196,30,58,0.45)' : 'rgba(212,175,55,0.38)' }}>
          {s}
        </span>
      ))}
      <div className="flex-1 max-w-[60px] h-px bg-casino-gold/20" />
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────
export default function MurderMystery() {
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState(null)
  const [character, setCharacter] = useState(null)
  const [animKey, setAnimKey] = useState(0)
  const inputRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    const key = inputValue.toLowerCase().trim()
    const found = Object.entries(characters).find(
      ([k]) => k.toLowerCase() === key
    )?.[1]
    if (found) {
      setCharacter(found)
      setResult('found')
      setAnimKey(k => k + 1)
    } else {
      setCharacter(null)
      setResult('notFound')
    }
  }

  function handleReset() {
    setInputValue('')
    setResult(null)
    setCharacter(null)
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  return (
    <div className="relative min-h-screen bg-casino-black overflow-hidden">

      {/* ── BACKGROUND ATMOSPHERE ── */}

      {/* Crimson spotlight from above */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(ellipse 90% 50% at 50% -5%, rgba(196,30,58,0.30) 0%, transparent 65%)',
      }} />
      {/* Subtle gold warmth at bottom */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(ellipse 70% 40% at 50% 110%, rgba(212,175,55,0.08) 0%, transparent 60%)',
      }} />

      {/* Giant watermark suits */}
      <div className="pointer-events-none absolute select-none text-white/[0.022]"
           style={{ fontSize: '26rem', lineHeight: 1, bottom: '-3rem', left: '-3rem' }}>♠</div>
      <div className="pointer-events-none absolute select-none"
           style={{ fontSize: '20rem', lineHeight: 1, top: '25%', right: '-4rem',
                    color: 'rgba(196,30,58,0.04)' }}>♥</div>
      <div className="pointer-events-none absolute select-none text-casino-gold/[0.025]"
           style={{ fontSize: '13rem', lineHeight: 1, top: '55%', left: '-1.5rem' }}>♣</div>

      {/* Floating accent suits */}
      {[
        { s: '♦', l: '7%',  t: '20%', d: '0s',   dur: '4.5s', c: 'rgba(212,175,55,0.08)' },
        { s: '♠', l: '87%', t: '16%', d: '1.3s',  dur: '5.2s', c: 'rgba(255,255,255,0.06)' },
        { s: '♥', l: '5%',  t: '58%', d: '0.7s',  dur: '4s',   c: 'rgba(196,30,58,0.08)' },
        { s: '♣', l: '89%', t: '62%', d: '1.9s',  dur: '3.8s', c: 'rgba(255,255,255,0.05)' },
      ].map((x, i) => (
        <span key={i} className="pointer-events-none absolute select-none text-3xl"
          style={{ left: x.l, top: x.t, color: x.c,
                   animation: `floatSuit ${x.dur} ease-in-out ${x.d} infinite` }}>
          {x.s}
        </span>
      ))}

      {/* ── HERO ── */}
      <div className="relative z-10 text-center px-4 pt-20 pb-8">

        <p className="font-sans text-casino-gold/55 text-xs tracking-[0.5em] uppercase mb-5">
          Casino Murder Mystery Party
        </p>

        <h1
          className="font-script text-casino-gold leading-none mb-3"
          style={{
            fontSize: 'clamp(3.8rem, 13vw, 7rem)',
            textShadow: '0 0 50px rgba(212,175,55,0.55), 0 0 100px rgba(212,175,55,0.18)',
          }}
        >
          Thirty, Thrills &amp; Terror
        </h1>

        <p className="font-sans text-casino-cream/30 text-xs tracking-[0.28em] uppercase mb-10">
          Saturday 6pm · 14 March 2026
        </p>

        {/* Fanned playing cards */}
        <FannedCards />

        {/* Martini + dice row */}
        <div className="flex items-center justify-center gap-5 mt-7 mb-8">
          <Die value={6} className="w-10 h-10 opacity-85" />
          <span className="text-4xl opacity-70">🍸</span>
          <span className="text-3xl opacity-60">🎲</span>
          <Die value={4} className="w-10 h-10 opacity-85" />
        </div>

        <SuitRow />

        {/* ── CHARACTER LOOKUP — right under the title ── */}
        <div className="max-w-md mx-auto mt-8 px-4">
          <p className="font-sans text-casino-cream/45 text-xs tracking-[0.3em] uppercase mb-4">
            Enter your name to reveal your character
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder="Your name..."
              className="flex-1 bg-casino-deep border border-casino-cream/15 rounded-lg px-4 py-3
                         font-sans text-casino-cream placeholder-casino-cream/25 text-sm
                         focus:outline-none focus:border-casino-gold/50 focus:ring-1 focus:ring-casino-gold/20
                         transition-colors"
            />
            <button type="submit"
              className="bg-casino-red hover:bg-casino-red/80 text-white font-sans font-semibold
                         text-sm tracking-wider uppercase px-6 py-3 rounded-lg
                         border border-casino-red/50 hover:shadow-lg hover:shadow-casino-red/25
                         transition-all duration-200">
              Reveal
            </button>
          </form>
        </div>
      </div>

      {/* ── CRIME SCENE BRIEF ── */}
      <div className="relative z-10 max-w-xl mx-auto px-5 pb-8">
        <div
          className="relative rounded-sm p-6 sm:p-9 text-center"
          style={{
            background: 'linear-gradient(160deg, #0f0f0f 0%, #140c02 100%)',
            border: '1px solid rgba(245,240,232,0.12)',
          }}
        >
          {/* Double-line inset frame */}
          <div className="absolute inset-[7px] rounded-sm pointer-events-none"
               style={{ border: '1px solid rgba(245,240,232,0.05)' }} />

          {/* Corner suit badges */}
          {[['♠','gold',true,true],['♥','red',true,false],['♦','gold',false,true],['♣','red',false,false]].map(([s,c,t,l], i) => (
            <span key={i} className="absolute text-sm" style={{
              color: c === 'red' ? 'rgba(196,30,58,0.45)' : 'rgba(212,175,55,0.4)',
              top: t ? 10 : 'auto', bottom: t ? 'auto' : 10,
              left: l ? 13 : 'auto', right: l ? 'auto' : 13,
            }}>{s}</span>
          ))}

          {/* Scene-setter quote */}
          <p className="font-serif text-casino-cream/75 text-base sm:text-lg italic leading-relaxed mb-5">
            "The stakes are high.<br />
            The secrets are deadly.<br />
            And someone... won't make it to the final hand."
          </p>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-casino-red/20" />
            <span className="text-casino-red/40 text-xs">♥</span>
            <div className="flex-1 h-px bg-casino-red/20" />
          </div>

          <div className="text-left space-y-2">
            <p className="font-sans text-casino-cream/35 text-xs">
              <span className="text-casino-cream/55 uppercase tracking-widest font-semibold">Dress Code —</span>{' '}
              Vegas Glam / Casino Chic / Based On Your Character
            </p>
            <p className="font-sans text-casino-cream/30 text-xs italic">
              Think <span className="text-casino-gold/55">glamorous</span>,{' '}
              <span className="text-casino-gold/55">polished</span>, and a little{' '}
              <span className="text-casino-red/55">dangerous</span>
            </p>
            <p className="font-sans text-casino-cream/20 text-xs">
              Suggested palette: Gold · Silver · Red · Black · Brown
            </p>
          </div>
        </div>
      </div>

      {/* ── CHARACTER LOOKUP ── */}
      <div className="relative z-10 max-w-xl mx-auto px-5 pb-20">

        {/* Not found */}
        {result === 'notFound' && (
          <div className="bg-casino-red/10 border border-casino-red/30 rounded-lg p-4 text-center mb-6">
            <p className="text-casino-red font-serif text-base mb-0.5">Name not found</p>
            <p className="font-sans text-casino-cream/40 text-xs">
              That name isn't on the guest list — ask the host!
            </p>
          </div>
        )}

        {/* Character card */}
        {result === 'found' && character && (
          <div key={animKey} className="border border-casino-gold/30 rounded-xl overflow-hidden"
               style={{ animation: 'revealCard 0.5s ease-out forwards', background: '#111' }}>

            <div className="bg-gradient-to-r from-casino-felt/80 to-casino-deep border-b border-casino-gold/20 p-5 sm:p-7">
              <p className="font-sans text-casino-gold/50 text-xs tracking-[0.25em] uppercase mb-1">
                Your character for this evening
              </p>
              <h2 className="font-serif text-casino-gold text-2xl sm:text-3xl font-bold mb-1">
                {character.characterName}
              </h2>
              <p className="font-sans text-casino-cream/50 text-sm italic">"{character.alias}"</p>
            </div>

            <div className="p-5 sm:p-7 space-y-5">
              <div>
                <p className="font-sans text-casino-gold/50 text-xs tracking-[0.2em] uppercase mb-2">Your Story</p>
                <p className="font-sans text-casino-cream/65 text-sm leading-relaxed">{character.backstory}</p>
              </div>

              <div>
                <p className="font-sans text-casino-gold/50 text-xs tracking-[0.2em] uppercase mb-2">Your Objectives</p>
                <ul className="space-y-1.5">
                  {character.objectives.map((obj, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="text-casino-gold/60 shrink-0 mt-0.5 text-sm">♦</span>
                      <span className="font-sans text-casino-cream/65 text-sm leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-black/40 border border-casino-red/20 rounded-lg p-4">
                <p className="font-sans text-casino-red/60 text-xs tracking-[0.2em] uppercase mb-2 flex items-center gap-1.5">
                  <span>🔒</span> Your Secret — eyes only
                </p>
                <p className="font-sans text-casino-cream/55 text-sm leading-relaxed italic">{character.secrets}</p>
              </div>

              <div className="bg-casino-gold/5 border border-casino-gold/20 rounded-lg p-4">
                <p className="font-serif text-casino-gold text-base font-semibold mb-1.5">Your Mission</p>
                <p className="font-sans text-casino-cream/55 text-sm leading-relaxed">
                  Play your role, guard your secrets, pursue your objectives — and find out who killed Victor Ashworth before the inspector pieces it together. Good luck,{' '}
                  <span className="text-casino-gold">{character.characterName}</span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <a href={`/characters/${character.pdfFile}`} download
                  className="flex-1 flex items-center justify-center gap-2
                             bg-casino-gold hover:bg-casino-gold-light text-casino-black
                             font-sans font-semibold text-xs tracking-widest uppercase
                             px-5 py-3 rounded-lg transition-all duration-200">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Character Sheet
                </a>
                <button onClick={handleReset}
                  className="border border-casino-cream/15 hover:border-casino-cream/30
                             text-casino-cream/40 hover:text-casino-cream/60
                             font-sans text-xs px-5 py-3 rounded-lg transition-all duration-200">
                  Look up another
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
