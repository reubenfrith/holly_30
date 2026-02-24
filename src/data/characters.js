// Keyed by guest first name (lowercase).
// Multiple guests can share the same character (same pdfFile).
// Guests with the same first name are handled via `disambiguations` below.
export const characters = {
  reuben:   { characterName: 'Bobby Flynn',          role: 'Casino Owner',            pdfFile: 'Bobby.pdf' },
  holly:    { characterName: 'Alanna Flynn',          role: "Casino Owner's Wife",     pdfFile: 'Alanna.pdf' },
  callan:   { characterName: 'Senator Justice',       role: 'US Senator',              pdfFile: 'Senator.pdf' },
  ryan:     { characterName: 'Paul Piano',            role: 'Lounge Singer',           pdfFile: 'Paul.pdf' },
  terry:    { characterName: 'Elvis',                 role: 'Elvis Impersonator',      pdfFile: 'Elvis.pdf' },
  oliver:   { characterName: 'Jim Beam',              role: 'Bartender',               pdfFile: 'Jim.pdf' },
  jefferson:{ characterName: 'Hot-Slot Sal',          role: 'Gambler',                 pdfFile: 'Sal.pdf' },
  hansol:   { characterName: 'Hot-Slot Sal',          role: 'Gambler',                 pdfFile: 'Sal.pdf' },
  issy:     { characterName: 'Jacquelyn Justice',     role: "Senator's Wife",          pdfFile: 'Jacquelyn.pdf' },
  kyle:     { characterName: 'Hustling Hailey',       role: 'Gambler',                 pdfFile: 'Hailey.pdf' },
  jessa:    { characterName: 'Hustling Hailey',       role: 'Gambler',                 pdfFile: 'Hailey.pdf' },
  liam:     { characterName: 'Agent Avery',           role: 'FBI Agent',               pdfFile: 'Avery.pdf' },
  serena:   { characterName: 'Agent Avery',           role: 'FBI Agent',               pdfFile: 'Avery.pdf' },
  aaron:    { characterName: 'Jack Black',            role: 'Card Dealer',             pdfFile: 'Jack.pdf' },
  lucinda:  { characterName: 'Madison Flynn',         role: 'Floor Manager',           pdfFile: 'Madison.pdf' },
  ricardo:  { characterName: 'Mo',                    role: 'Security Staff',          pdfFile: 'Mo.pdf' },
  martin:   { characterName: 'Madison Flynn',         role: 'Floor Manager',           pdfFile: 'Madison.pdf' },
  amanda:   { characterName: 'Colleen Candy',         role: 'A Classy Call Girl',      pdfFile: 'Colleen.pdf' },
  denny:    { characterName: 'Security Sam',          role: 'Security Manager',        pdfFile: 'Sam.pdf' },
  caitlin:  { characterName: 'Lucy Legs',             role: 'Showgirl',                pdfFile: 'Lucy.pdf' },
  floyd:    { characterName: 'Lucy Legs',             role: 'Showgirl',                pdfFile: 'Lucy.pdf' },
  joo:      { characterName: 'Vivienne Royale',       role: 'Gambler',                 pdfFile: 'Vivienne.pdf' },
  bryan:    { characterName: 'Full House Frank',      role: 'Gambler',                 pdfFile: 'Frank.pdf' },
  rhea:     { characterName: 'Diamond',               role: 'Entertainer',             pdfFile: 'Diamond.pdf' },
  cody:     { characterName: 'Dirty Dave',            role: 'Card Dealer',             pdfFile: 'Dealer.pdf' },
  jessj:    { characterName: 'Mimi Martini',          role: 'Cocktail Waitress',       pdfFile: 'Mimi.pdf' },
  lachlan:  { characterName: 'Cole Conway',           role: 'Sports Book Manager',     pdfFile: 'Cole.pdf' },
  mia:      { characterName: 'Candice',                    role: 'Call Girl',          pdfFile: 'Candice.pdf' },
  carly:    { characterName: 'Jamie Journalist',      role: 'Reporter',                pdfFile: 'Jamie.pdf' },
  michael:  { characterName: 'Ace High',              role: 'Gambler',                 pdfFile: 'Ace.pdf' },
  tanya:    { characterName: 'Ace High',              role: 'Gambler',                 pdfFile: 'Ace.pdf' },
}

// For guests who share a first name, typing their name shows these options.
// Label matches how they appear on the guest list.
export const disambiguations = {
  jess: [
    { label: 'Jess A', key: 'jessa' },
    { label: 'Jess J', key: 'jessj' },
  ],
}
