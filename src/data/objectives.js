// ── ENVELOPE B PASSWORD ───────────────────────────────────────────────────────
// Change this before the party — announce it when the murder happens (lights go off).
export const ENVELOPE_B_PASSWORD = 'paramount'

// ── OBJECTIVES ────────────────────────────────────────────────────────────────
// Keyed by pdfFile (the unique character identifier from characters.js).
// This way multiple guests sharing the same character automatically share objectives.
//
// envelopeA — objectives for the START of the party (shown immediately)
// envelopeB — objectives for AFTER the murder (password-gated)
//
// Add entries here as you receive objective sheets from the game materials.

export const objectives = {

  'Bobby.pdf': {
    envelopeA: [
      'Welcome every guest personally — you are the proud host of this casino anniversary. Make a big entrance.',
      'Discreetly investigate whether any guests know about the recent thefts at the Paramount.',
      'Work the room. Flatter Senator Justice — his political connections are worth more than gold.',
      'If anyone digs into your past dealings, change the subject immediately. Smile. Offer a drink.',
    ],
    envelopeB: [
      'Someone has been murdered at YOUR casino. This is a disaster for the Paramount\'s reputation.',
      'Cooperate with Agent Avery\'s investigation — but protect the casino\'s image above all else.',
      'Retrieve Exhibit C from your envelope and study it carefully. Use the information wisely.',
      'Identify who had motive — and decide whether their reasons are more dangerous than the murder itself.',
    ],
  },

  // ─── Add more characters below as objectives become available ───
  // 'Alanna.pdf': { envelopeA: [...], envelopeB: [...] },
  // 'Senator.pdf': { envelopeA: [...], envelopeB: [...] },
  // ...
}
