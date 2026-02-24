import drinksMenu from '../data/drinksMenu.json'
import BowDecoration from '../components/BowDecoration'

const sparkles = [
  { top: '20%', left: '4%',  delay: '0s'   },
  { top: '45%', left: '2%',  delay: '1.1s' },
  { top: '70%', left: '5%',  delay: '0.5s' },
  { top: '20%', left: '93%', delay: '0.8s' },
  { top: '50%', left: '95%', delay: '1.6s' },
  { top: '75%', left: '91%', delay: '0.3s' },
]

export default function DrinksMenu() {
  return (
    <div className="relative min-h-screen bg-cream overflow-hidden">

      {sparkles.map((s, i) => (
        <span key={i} className="pointer-events-none absolute text-burg text-sm select-none"
          style={{ top: s.top, left: s.left, animation: `twinkle 3s ease-in-out ${s.delay} infinite` }}>
          ✦
        </span>
      ))}

      <BowDecoration className="pointer-events-none absolute top-14 left-0 w-16 h-16 text-burg/40 -rotate-12" />
      <BowDecoration className="pointer-events-none absolute top-14 right-0 w-16 h-16 text-burg/40 rotate-12 scale-x-[-1]" />

      <div className="relative z-10 max-w-lg mx-auto px-6 pt-24 pb-20 text-center">

        {/* Header */}
        <p className="font-sans text-burg/50 text-xs tracking-[0.3em] uppercase mb-3">
          Holly's 30th
        </p>
        <h1 className="font-script text-burg mb-1" style={{ fontSize: 'clamp(3rem, 10vw, 4.5rem)' }}>
          Cocktails &amp; Mocktail
        </h1>
        <div className="flex items-center gap-4 mt-4 mb-10">
          <div className="flex-1 h-px bg-burg/20" />
          <span className="text-burg/30 text-xs">✦</span>
          <div className="flex-1 h-px bg-burg/20" />
        </div>

        {/* Cocktail glass illustrations row */}
        <div className="flex justify-center gap-6 text-3xl opacity-60 mb-10">
          🍸 🥂 🍹
        </div>

        {/* Menu sections */}
        {drinksMenu.map((section) => (
          <div key={section.category} className="space-y-8">
            {section.items.map((drink) => (
              <div key={drink.name} className="text-center">
                <h3 className="font-serif text-burg font-bold text-lg tracking-wide uppercase mb-1">
                  {drink.name}
                </h3>
                {drink.tags && (
                  <p className="font-sans text-burg/50 text-xs tracking-[0.2em] uppercase mb-1">
                    {drink.tags}
                  </p>
                )}
                <p className="font-sans text-burg/70 text-sm leading-relaxed">
                  {drink.description}
                </p>
              </div>
            ))}
          </div>
        ))}

        {/* Bottom decorative row */}
        <div className="flex items-center gap-4 mt-12 mb-6">
          <div className="flex-1 h-px bg-burg/20" />
          <span className="text-burg/30 text-xs">✦</span>
          <div className="flex-1 h-px bg-burg/20" />
        </div>

        <div className="flex justify-center gap-6 text-3xl opacity-60 mb-4">
          🍾 🥃 🫧
        </div>

        <p className="font-sans text-burg/35 text-xs italic">
          We encourage you to bring along any drinks you wish to share!
        </p>

      </div>
    </div>
  )
}
