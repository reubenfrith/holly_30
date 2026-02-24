/**
 * Ribbon bow SVG — matches the corner ribbon bows on the party invite.
 * Use `className` for sizing & color (currentColor).
 * Flip/rotate via CSS transforms for different corners.
 */
export default function BowDecoration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 120 110"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Left outer loop */}
      <path d="M60,56 C50,34 10,26 14,48 C18,66 52,64 60,56" />
      {/* Left inner highlight */}
      <path d="M60,56 C52,42 24,36 26,52 C28,64 52,62 60,56" />

      {/* Right outer loop */}
      <path d="M60,56 C70,34 110,26 106,48 C102,66 68,64 60,56" />
      {/* Right inner highlight */}
      <path d="M60,56 C68,42 96,36 94,52 C92,64 68,62 60,56" />

      {/* Center knot */}
      <path d="M53,54 Q60,49 67,54 Q60,61 53,54 Z" fill="currentColor" opacity="0.15" />
      <path d="M53,54 Q60,49 67,54 Q60,61 53,54 Z" />

      {/* Left ribbon tail */}
      <path d="M55,62 C47,76 33,86 25,104" />
      {/* Right ribbon tail */}
      <path d="M65,62 C73,76 87,86 95,104" />

      {/* Left tail ribbon edge */}
      <path d="M52,63 C42,78 28,90 20,108" />
      {/* Right tail ribbon edge */}
      <path d="M68,63 C78,78 92,90 100,108" />
    </svg>
  )
}
