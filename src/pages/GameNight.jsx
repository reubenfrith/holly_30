import { useState, useRef, useEffect } from "react";
import { characters, disambiguations } from "../data/characters";
import { objectives, ENVELOPE_B_PASSWORD } from "../data/objectives";

// ── Gold rule divider ──────────────────────────────────────────────────────────
function GoldRule() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-px bg-casino-gold/15" />
      <span className="text-casino-gold/25 text-[9px] tracking-[0.55em]">
        ♠ ♥ ♦ ♣
      </span>
      <div className="flex-1 h-px bg-casino-gold/15" />
    </div>
  );
}

// ── Lock icon ──────────────────────────────────────────────────────────────────
function LockIcon({ open = false, className = "" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {open ? (
        <>
          <rect x="3" y="11" width="18" height="11" rx="2" strokeWidth={1.5} />
          <path
            strokeWidth={1.5}
            strokeLinecap="round"
            d="M7 11V6.5a5 5 0 0 1 9.5-2"
          />
        </>
      ) : (
        <>
          <rect x="3" y="11" width="18" height="11" rx="2" strokeWidth={1.5} />
          <path
            strokeWidth={1.5}
            strokeLinecap="round"
            d="M7 11V7a5 5 0 0 1 10 0v4"
          />
        </>
      )}
    </svg>
  );
}

// ── Objective list item ────────────────────────────────────────────────────────
function ObjectiveItem({ text, index }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="shrink-0 mt-0.5 w-5 h-5 rounded-full border border-casino-gold/30
                       flex items-center justify-center
                       font-sans text-[9px] text-casino-gold/60"
      >
        {index + 1}
      </span>
      <span className="font-sans text-casino-cream/80 text-sm leading-relaxed">
        {text}
      </span>
    </li>
  );
}

// ── Envelope A card ────────────────────────────────────────────────────────────
function EnvelopeA({ objectiveList }) {
  return (
    <div
      style={{
        border: "1px solid rgba(212,175,55,0.35)",
        background: "rgba(212,175,55,0.03)",
        animation: "revealCard 0.45s ease-out forwards",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          height: 2,
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)",
        }}
      />

      {/* Header */}
      <div className="border-b border-casino-gold/20 px-6 py-4 flex items-center gap-3">
        <span
          className="shrink-0 w-8 h-8 rounded-full border border-casino-gold/45
                         flex items-center justify-center
                         font-serif text-casino-gold text-base font-normal"
        >
          A
        </span>
        <div>
          <p className="font-sans text-casino-gold/75 text-xs font-medium tracking-widest uppercase">
            Envelope A
          </p>
          <p className="font-sans text-casino-cream/45 text-[10px] tracking-wider">
            Open now — your objectives for the evening
          </p>
        </div>
      </div>

      {/* Objectives */}
      <ul className="px-6 py-5 space-y-4">
        {objectiveList.map((text, i) => (
          <ObjectiveItem key={i} text={text} index={i} />
        ))}
      </ul>
    </div>
  );
}

// ── Envelope B card ────────────────────────────────────────────────────────────
function EnvelopeB({ objectiveList }) {
  const [passwordInput, setPasswordInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordInput === ENVELOPE_B_PASSWORD) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setShaking(true);
      setPasswordInput("");
      setTimeout(() => setShaking(false), 500);
    }
  }

  if (unlocked) {
    return (
      <div
        style={{
          border: "1px solid rgba(212,175,55,0.35)",
          background: "rgba(212,175,55,0.03)",
          animation: "revealCard 0.55s ease-out forwards",
        }}
      >
        <div
          style={{
            height: 2,
            background:
              "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)",
          }}
        />

        <div className="border-b border-casino-gold/20 px-6 py-4 flex items-center gap-3">
          <span
            className="shrink-0 w-8 h-8 rounded-full border border-casino-gold/45
                           flex items-center justify-center
                           font-serif text-casino-gold text-base font-normal"
          >
            B
          </span>
          <div className="flex-1">
            <p className="font-sans text-casino-gold/75 text-xs font-medium tracking-widest uppercase">
              Envelope B
            </p>
            <p className="font-sans text-casino-cream/45 text-[10px] tracking-wider">
              Post-murder objectives — unlocked
            </p>
          </div>
          <LockIcon open className="w-4 h-4 text-casino-gold/50" />
        </div>

        <ul className="px-6 py-5 space-y-4">
          {objectiveList.map((text, i) => (
            <ObjectiveItem key={i} text={text} index={i} />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      style={{
        border: "1px solid rgba(196,30,58,0.35)",
        background: "rgba(196,30,58,0.03)",
      }}
    >
      <div
        style={{
          height: 2,
          background:
            "linear-gradient(90deg, transparent, rgba(196,30,58,0.5), transparent)",
        }}
      />

      {/* Header */}
      <div className="border-b border-casino-red/20 px-6 py-4 flex items-center gap-3">
        <span
          className="shrink-0 w-8 h-8 rounded-full border border-casino-red/40
                         flex items-center justify-center
                         font-serif text-casino-red/80 text-base font-normal"
        >
          B
        </span>
        <div className="flex-1">
          <p className="font-sans text-casino-red/70 text-xs font-medium tracking-widest uppercase">
            Envelope B
          </p>
          <p className="font-sans text-casino-cream/35 text-[10px] tracking-wider">
            Do not open until after the murder
          </p>
        </div>
        <LockIcon className="w-4 h-4 text-casino-red/40" />
      </div>

      {/* Body */}
      <div className="px-6 py-5 text-center space-y-4">
        <p className="font-serif text-casino-cream/50 text-sm italic leading-relaxed">
          "This envelope contains your objectives for after the murder.
          <br />
          The password will be announced when the time comes."
        </p>

        <form onSubmit={handleSubmit} className="flex gap-0 mt-2">
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => {
              setPasswordInput(e.target.value);
              setError(false);
            }}
            placeholder="Enter password..."
            autoComplete="off"
            className="flex-1 bg-transparent border border-casino-cream/15 border-r-0 px-4 py-2.5
                       font-sans text-casino-cream/80 placeholder-casino-cream/25 text-sm
                       focus:outline-none focus:border-casino-gold/35
                       transition-colors"
            style={shaking ? { animation: "shake 0.4s ease-out" } : {}}
          />
          <button
            type="submit"
            className="border border-casino-red/40 hover:border-casino-red/60
                       text-casino-red/70 hover:text-casino-red/90
                       font-sans text-[10px] tracking-[0.3em] uppercase
                       px-4 py-2.5 transition-all duration-200"
          >
            Unlock
          </button>
        </form>

        {error && (
          <p className="font-sans text-casino-red/70 text-[10px] tracking-wider">
            Incorrect password — wait for the host's announcement.
          </p>
        )}
      </div>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────────
function GameNight() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null); // 'found' | 'notFound' | 'noObjectives' | 'disambiguate'
  const [character, setCharacter] = useState(null);
  const [objectiveData, setObjectiveData] = useState(null);
  const [disambigOptions, setDisambigOptions] = useState([]);
  const [animKey, setAnimKey] = useState(0);
  const inputRef = useRef(null);
  const resultRef = useRef(null);

  // eslint-disable-next-line no-unused-vars
  function revealCharacter(char, _key) {
    const obj = objectives[char.pdfFile] ?? null;
    setCharacter(char);
    setObjectiveData(obj);
    setResult(obj ? "found" : "noObjectives");
    setAnimKey((k) => k + 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const key = inputValue.toLowerCase().trim();
    if (characters[key]) {
      revealCharacter(characters[key], key);
      return;
    }
    if (disambiguations[key]) {
      setDisambigOptions(disambiguations[key]);
      setCharacter(null);
      setObjectiveData(null);
      setResult("disambiguate");
      return;
    }
    setCharacter(null);
    setObjectiveData(null);
    setResult("notFound");
  }

  function handleReset() {
    setInputValue("");
    setResult(null);
    setCharacter(null);
    setObjectiveData(null);
    setDisambigOptions([]);
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  useEffect(() => {
    if (result) {
      setTimeout(
        () =>
          resultRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          }),
        80,
      );
    }
  }, [result, animKey]);

  return (
    <div className="relative min-h-screen bg-casino-black overflow-hidden">
      {/* ── BACKGROUND ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% -5%, rgba(212,175,55,0.05) 0%, transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 35% at 50% 110%, rgba(0,0,0,0.5) 0%, transparent 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute select-none"
        style={{
          color: "rgba(255,255,255,0.012)",
          fontSize: "30rem",
          lineHeight: 1,
          bottom: "-5rem",
          right: "-5rem",
        }}
      >
        ♦
      </div>

      {/* ── HERO ── */}
      <div className="relative z-10 text-center px-4 pt-16 pb-8">
        <p className="font-sans text-casino-gold/55 text-[9px] tracking-[0.7em] uppercase mb-4">
          Murder in Sin City
        </p>

        <h1
          className="font-script text-casino-gold leading-none mb-3"
          style={{
            fontSize: "clamp(2.6rem, 9vw, 5rem)",
            textShadow:
              "0 0 60px rgba(212,175,55,0.28), 0 0 120px rgba(212,175,55,0.08)",
          }}
        >
          Your Objectives
        </h1>

        <p className="font-sans text-casino-cream/45 text-[9px] tracking-[0.4em] uppercase mb-8">
          Envelope A · Envelope B
        </p>

        <GoldRule />

        {/* ── LOOKUP ── */}
        <div className="max-w-md mx-auto mt-9 px-4">
          <p className="font-sans text-casino-cream/50 text-[9px] tracking-[0.4em] uppercase mb-5">
            Enter your name to retrieve your mission
          </p>

          <form onSubmit={handleSubmit} className="flex gap-0">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Your name..."
              className="flex-1 bg-transparent border border-casino-cream/20 border-r-0 px-4 py-3
                         font-sans text-casino-cream placeholder-casino-cream/30 text-sm
                         focus:outline-none focus:border-casino-gold/45
                         transition-colors"
            />
            <button
              type="submit"
              className="border border-casino-gold/45 hover:border-casino-gold/70
                         text-casino-gold/80 hover:text-casino-gold
                         font-sans font-normal text-[10px] tracking-[0.35em] uppercase
                         px-5 py-3 transition-all duration-200"
            >
              Find
            </button>
          </form>

          {/* ── RESULTS ── */}
          {result && (
            <div ref={resultRef} className="mt-6 text-left space-y-4">
              {/* Not found */}
              {result === "notFound" && (
                <div className="border border-casino-red/30 p-5 text-center">
                  <p className="text-casino-cream/80 font-serif text-base mb-2">
                    Name not found
                  </p>
                  <p className="font-sans text-casino-cream/55 text-xs leading-relaxed">
                    Just enter your first name — no surname needed.
                  </p>
                </div>
              )}

              {/* Disambiguation */}
              {result === "disambiguate" && (
                <div className="border border-casino-gold/25 p-5">
                  <p className="font-sans text-casino-gold/55 text-[9px] tracking-[0.4em] uppercase mb-4 text-center">
                    Which one are you?
                  </p>
                  <div className="flex flex-col gap-2">
                    {disambigOptions.map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() =>
                          revealCharacter(characters[opt.key], opt.key)
                        }
                        className="w-full text-left border border-casino-cream/15 hover:border-casino-gold/40
                                   text-casino-cream/70 hover:text-casino-cream/90
                                   font-sans text-sm py-3 px-5
                                   transition-all duration-200"
                      >
                        {opt.label}
                        <span className="text-casino-gold/50 ml-2 text-xs">
                          — {characters[opt.key]?.characterName}
                        </span>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleReset}
                    className="mt-4 w-full text-casino-cream/35 hover:text-casino-cream/55
                               font-sans text-[10px] tracking-widest uppercase py-2 transition-colors text-center"
                  >
                    Go back
                  </button>
                </div>
              )}

              {/* Character found — objectives available */}
              {result === "found" && character && objectiveData && (
                <div key={animKey} className="space-y-4">
                  {/* Character name banner */}
                  <div
                    className="text-center py-4 border border-casino-gold/20"
                    style={{ background: "rgba(212,175,55,0.04)" }}
                  >
                    <p className="font-sans text-casino-gold/50 text-[9px] tracking-[0.4em] uppercase mb-1">
                      Playing as
                    </p>
                    <h2
                      className="font-serif text-casino-gold font-normal"
                      style={{ fontSize: "clamp(1.4rem, 5vw, 1.9rem)" }}
                    >
                      {character.characterName}
                    </h2>
                    <p className="font-sans text-casino-cream/45 text-[10px] tracking-[0.25em] uppercase mt-1">
                      {character.role}
                    </p>
                  </div>

                  <EnvelopeA objectiveList={objectiveData.envelopeA} />
                  <EnvelopeB objectiveList={objectiveData.envelopeB} />

                  <button
                    onClick={handleReset}
                    className="w-full text-casino-cream/30 hover:text-casino-cream/50
                               font-sans text-[10px] tracking-widest uppercase py-2 transition-colors text-center"
                  >
                    Look up a different name
                  </button>
                </div>
              )}

              {/* Character found — objectives not yet loaded */}
              {result === "noObjectives" && character && (
                <div key={animKey} className="space-y-4">
                  <div
                    className="text-center py-4 border border-casino-gold/20"
                    style={{ background: "rgba(212,175,55,0.04)" }}
                  >
                    <p className="font-sans text-casino-gold/50 text-[9px] tracking-[0.4em] uppercase mb-1">
                      Playing as
                    </p>
                    <h2
                      className="font-serif text-casino-gold font-normal"
                      style={{ fontSize: "clamp(1.4rem, 5vw, 1.9rem)" }}
                    >
                      {character.characterName}
                    </h2>
                    <p className="font-sans text-casino-cream/45 text-[10px] tracking-[0.25em] uppercase mt-1">
                      {character.role}
                    </p>
                  </div>

                  <div
                    className="border border-casino-gold/20 p-6 text-center"
                    style={{ background: "rgba(212,175,55,0.02)" }}
                  >
                    <p className="font-sans text-casino-gold/55 text-[9px] tracking-[0.4em] uppercase mb-3">
                      Coming soon
                    </p>
                    <p className="font-sans text-casino-cream/60 text-sm leading-relaxed">
                      Objectives for{" "}
                      <span className="text-casino-cream/85">
                        {character.characterName}
                      </span>{" "}
                      will be available closer to the night. Check back soon.
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="w-full text-casino-cream/30 hover:text-casino-cream/50
                               font-sans text-[10px] tracking-widest uppercase py-2 transition-colors text-center"
                  >
                    Go back
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── FOOTER NOTE ── */}
      {!result && (
        <div className="relative z-10 max-w-sm mx-auto px-6 pb-12 text-center">
          <GoldRule />
          <p className="font-sans text-casino-cream/30 text-[10px] leading-relaxed mt-5 tracking-wide">
            Envelope A — read at the start of the evening.
            <br />
            Envelope B — unlocked when the murder happens.
          </p>
        </div>
      )}
    </div>
  );
}

function FillerGameNight() {
  return (
    <div className="relative min-h-screen bg-casino-black overflow-hidden">
      {/* ── BACKGROUND ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% -5%, rgba(212,175,55,0.05) 0%, transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 35% at 50% 110%, rgba(0,0,0,0.5) 0%, transparent 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute select-none"
        style={{
          color: "rgba(255,255,255,0.012)",
          fontSize: "30rem",
          lineHeight: 1,
          bottom: "-5rem",
          right: "-5rem",
        }}
      >
        ♦
      </div>

      {/* ── HERO ── */}
      <div className="relative z-10 text-center px-4 pt-16 pb-8">
        <p className="font-sans text-casino-gold/55 text-[9px] tracking-[0.7em] uppercase mb-4">
          Murder in Sin City
        </p>

        <h1
          className="font-script text-casino-gold leading-none mb-3"
          style={{
            fontSize: "clamp(2.6rem, 9vw, 5rem)",
            textShadow:
              "0 0 60px rgba(212,175,55,0.28), 0 0 120px rgba(212,175,55,0.08)",
          }}
        >
          Coming Soon
        </h1>
      </div>
    </div>
  );
}

export { GameNight, FillerGameNight };
