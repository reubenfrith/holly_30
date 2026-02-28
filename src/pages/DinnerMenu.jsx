import dinnerMenu from "../data/dinnerMenu.json";
import BowDecoration from "../components/BowDecoration";

const sparkles = [
  { top: "22%", left: "5%", delay: "0.4s" },
  { top: "50%", left: "3%", delay: "1.3s" },
  { top: "72%", left: "6%", delay: "0.7s" },
  { top: "22%", left: "92%", delay: "1s" },
  { top: "48%", left: "94%", delay: "0.2s" },
  { top: "74%", left: "90%", delay: "1.7s" },
];

export default function DinnerMenu() {
  return (
    <div className="relative min-h-screen bg-cream overflow-hidden">
      {sparkles.map((s, i) => (
        <span
          key={i}
          className="pointer-events-none absolute text-burg text-sm select-none"
          style={{
            top: s.top,
            left: s.left,
            animation: `twinkle 3s ease-in-out ${s.delay} infinite`,
          }}
        >
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
        <h1
          className="font-script text-burg mb-1"
          style={{ fontSize: "clamp(3rem, 10vw, 4.5rem)" }}
        >
          Food Scene
        </h1>
        <div className="flex items-center gap-4 mt-4 mb-10">
          <div className="flex-1 h-px bg-burg/20" />
          <span className="text-burg/30 text-xs">✦</span>
          <div className="flex-1 h-px bg-burg/20" />
        </div>

        {/* Table illustration */}
        <div className="flex justify-center gap-4 text-3xl opacity-60 mb-10">
          🛎️ 🍽️ 🥩
        </div>

        {/* Menu courses */}
        <div className="space-y-10">
          {dinnerMenu.map((section, idx) => (
            <div key={section.course}>
              <h2 className="font-serif text-burg font-bold text-base tracking-[0.3em] uppercase mb-4">
                ~{section.course}~
              </h2>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <p
                    key={item.name}
                    className="font-sans text-burg/75 text-sm italic leading-relaxed"
                  >
                    {item.name}
                    {item.description && (
                      <span className="text-burg/50 not-italic">
                        {" "}
                        — {item.description}
                      </span>
                    )}
                  </p>
                ))}
              </div>
              {idx < dinnerMenu.length - 1 && (
                <div className="flex items-center gap-4 mt-8">
                  <div className="flex-1 h-px bg-burg/15" />
                  <span className="text-burg/25 text-xs">✦</span>
                  <div className="flex-1 h-px bg-burg/15" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-12 mb-6">
          <div className="flex-1 h-px bg-burg/20" />
          <span className="text-burg/30 text-xs">✦</span>
          <div className="flex-1 h-px bg-burg/20" />
        </div>

        <p className="font-sans text-burg/40 text-xs italic leading-relaxed">
          As we are keeping the food simple, we encourage you to bring along any
          snacks or food to share, or anything for your own special dietary
          requirements.
        </p>
        <p className="font-sans text-burg/40 text-xs italic leading-relaxed mt-1">
          *Menu subject to change.
        </p>
      </div>
    </div>
  );
}
