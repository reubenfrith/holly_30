import { useNavigate } from 'react-router-dom'
import BowDecoration from '../components/BowDecoration'

const schedule = [
  { time: '2pm',  event: 'Arrival & Greet' },
  { time: '4pm',  event: 'Outdoor Movie Screening', note: '*' },
  { time: '6pm',  event: 'Murder Mystery Theme Party', highlight: true },
  { time: '8pm',  event: 'Dinner' },
  { time: '9pm',  event: 'Speech & Cake' },
  { time: '10pm', event: 'Party & Karaoke' },
]

// Scattered sparkle positions
const sparkles = [
  { top: '18%', left: '6%',  delay: '0s',    size: '1.1rem' },
  { top: '12%', left: '82%', delay: '1.2s',  size: '0.9rem' },
  { top: '35%', left: '3%',  delay: '0.6s',  size: '0.7rem' },
  { top: '40%', left: '94%', delay: '1.8s',  size: '1rem'   },
  { top: '62%', left: '5%',  delay: '0.3s',  size: '0.8rem' },
  { top: '68%', left: '90%', delay: '1s',    size: '1rem'   },
  { top: '80%', left: '8%',  delay: '1.5s',  size: '0.7rem' },
  { top: '78%', left: '88%', delay: '0.7s',  size: '0.9rem' },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen bg-cream overflow-hidden">

      {/* Scattered sparkles */}
      {sparkles.map((s, i) => (
        <span
          key={i}
          className="pointer-events-none absolute text-burg select-none"
          style={{
            top: s.top, left: s.left, fontSize: s.size,
            animation: `twinkle 3s ease-in-out ${s.delay} infinite`,
          }}
        >
          ✦
        </span>
      ))}

      {/* Corner bow decorations */}
      <BowDecoration className="pointer-events-none absolute top-14 left-0 w-20 h-20 text-burg/50 -rotate-12" />
      <BowDecoration className="pointer-events-none absolute top-14 right-0 w-20 h-20 text-burg/50 rotate-12 scale-x-[-1]" />
      <BowDecoration className="pointer-events-none absolute bottom-0 left-0 w-20 h-20 text-burg/50 rotate-[168deg]" />
      <BowDecoration className="pointer-events-none absolute bottom-0 right-0 w-20 h-20 text-burg/50 -rotate-[168deg] scale-x-[-1]" />

      <div className="relative z-10 max-w-lg mx-auto px-6 pt-24 pb-20 text-center">

          <p className="font-sans text-burg/60 text-xs tracking-[0.35em] uppercase mb-5">
            You are invited to
          </p>

          <h1 className="font-script text-burg leading-none mb-1 whitespace-nowrap" style={{ fontSize: 'clamp(3.5rem, 12vw, 5.5rem)' }}>
            Holly's Sweet 30
          </h1>

          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-px bg-burg/20" />
            <span className="text-burg/40 text-xs">✦</span>
            <div className="flex-1 h-px bg-burg/20" />
          </div>

          {/* Date block */}
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="text-center">
            <p className="font-sans text-burg/70 text-sm">Saturday 2pm</p>
          </div>
          <div className="w-px h-8 bg-burg/30" />
          <div className="text-center">
            <p className="font-serif text-burg font-bold text-3xl leading-none">14</p>
          </div>
          <div className="w-px h-8 bg-burg/30" />
          <div className="text-center">
            <p className="font-sans text-burg/70 text-xs tracking-widest uppercase">March<br/>2026</p>
          </div>
        </div>

        <p className="font-sans text-burg/60 text-sm mb-1">
          1/41 Briggs Street, Mount Waverley
        </p>
        <p className="font-sans text-burg/40 text-xs italic mb-10">
          RSVP by Feb 20th via Facebook Event or SMS
        </p>

        {/* ── SCHEDULE ── */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-burg/20" />
          <span className="text-burg/40 text-xs">✦</span>
          <div className="flex-1 h-px bg-burg/20" />
        </div>

        <h2 className="font-script text-burg mb-6" style={{ fontSize: '2.4rem' }}>
          Schedule of the Day
        </h2>

        <div className="space-y-3 mb-10 text-left">
          {schedule.map(({ time, event, note, highlight }) => (
            <div
              key={time}
              className={`flex items-baseline gap-4 ${highlight ? 'text-burg font-semibold' : 'text-burg/70'}`}
            >
              <span className="font-sans text-sm w-10 shrink-0 tabular-nums">{time}</span>
              <div className="flex-1 h-px border-t border-dashed border-burg/20" />
              <span className="font-sans text-sm text-right">
                {event}
                {note && <span className="text-burg/40 text-xs">{note}</span>}
              </span>
            </div>
          ))}
        </div>

        <p className="font-sans text-burg/40 text-xs italic mb-1">
          * Activity may change indoors depending on the weather
        </p>

        {/* ── DRESS CODE ── */}
        <div className="flex items-center gap-4 mt-10 mb-6">
          <div className="flex-1 h-px bg-burg/20" />
          <span className="text-burg/40 text-xs">✦</span>
          <div className="flex-1 h-px bg-burg/20" />
        </div>

        <h2 className="font-script text-burg mb-5" style={{ fontSize: '2.4rem' }}>
          What to Wear
        </h2>

        <div className="text-left rounded-xl border border-burg/15 bg-burg/[0.03] p-5 mb-10 space-y-3">
          <p className="font-sans text-burg/70 text-sm leading-relaxed">
            Chill during the day — come as you are if you like. But when the murder mystery begins at <span className="font-semibold text-burg">6pm</span>, it's time to dress the part.
          </p>
          <p className="font-sans text-burg/70 text-sm leading-relaxed">
            Think <span className="font-semibold text-burg">Vegas glam, casino chic</span> — glamourous, polished, and a little dangerous. Let your character be your inspiration.
          </p>
          <div className="pt-2 border-t border-burg/10 flex flex-wrap gap-x-3 gap-y-1">
            {['Gold', 'Silver', 'Red', 'Black', 'Brown'].map(c => (
              <span key={c} className="font-sans text-burg/40 text-xs tracking-wide">{c}</span>
            ))}
          </div>
        </div>

        {/* ── QUICK NAV ── */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-burg/20" />
          <span className="text-burg/40 text-xs">✦</span>
          <div className="flex-1 h-px bg-burg/20" />
        </div>

        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => navigate('/drinks')}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-burg/30
                       font-sans text-xs tracking-widest uppercase text-burg/60 hover:text-burg
                       hover:border-burg/60 hover:bg-burg/5 transition-all duration-200"
          >
            🍸 Drinks
          </button>
          <button
            onClick={() => navigate('/dinner')}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-burg/30
                       font-sans text-xs tracking-widest uppercase text-burg/60 hover:text-burg
                       hover:border-burg/60 hover:bg-burg/5 transition-all duration-200"
          >
            🍽️ Dinner
          </button>
        </div>

        {/* ── MYSTERY CTA — the dramatic dark portal ── */}
        <p className="font-sans text-burg/35 text-xs tracking-[0.3em] uppercase mb-3">
          But wait, there's more...
        </p>

        <button
          onClick={() => navigate('/mystery')}
          className="group w-full relative overflow-hidden rounded-xl px-6 py-6 text-center
                     border border-casino-gold/40 hover:border-casino-gold
                     transition-all duration-300 hover:-translate-y-0.5
                     hover:shadow-xl hover:shadow-black/30"
          style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #1C1008 50%, #0D0D0D 100%)' }}
        >
          {/* Shimmer on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)' }} />

          {/* Corner suits */}
          <span className="absolute top-3 left-3 text-casino-gold/25 group-hover:text-casino-gold/60 text-base transition-colors">♠</span>
          <span className="absolute top-3 right-3 text-casino-red/25 group-hover:text-casino-red/60 text-base transition-colors">♥</span>
          <span className="absolute bottom-3 left-3 text-casino-gold/25 group-hover:text-casino-gold/60 text-base transition-colors">♦</span>
          <span className="absolute bottom-3 right-3 text-casino-red/25 group-hover:text-casino-red/60 text-base transition-colors">♣</span>

          <div className="relative">
            <p className="font-sans text-casino-gold/50 text-xs tracking-[0.3em] uppercase mb-2">
              Casino Murder Mystery Party
            </p>
            <p className="font-script text-casino-gold group-hover:text-casino-gold-light transition-colors"
               style={{ fontSize: '2.2rem', lineHeight: 1.2 }}>
              Thirty, Thrills &amp; Terror
            </p>
            <p className="font-sans text-casino-cream/35 text-xs mt-2 mb-4 italic">
              The stakes are high. The secrets are deadly.
            </p>
            <div className="inline-flex items-center gap-2 text-casino-gold/50 group-hover:text-casino-gold text-xs tracking-widest uppercase transition-colors">
              Discover your character
              <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </button>

      </div>
    </div>
  )
}
