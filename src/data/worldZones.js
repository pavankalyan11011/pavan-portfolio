export const MAP = {
  width: 1600,
  height: 1200,
  tile: 40,
}

export const worldZones = [
  {
    id: 'about',
    label: 'Bio Lab',
    x: 180,
    y: 160,
    w: 120,
    h: 100,
    color: '#f85888',
    pokemon: {
      name: 'Loremon',
      type: 'Psychic',
      emoji: '🔮',
      cry: 'Loremon used ORIGIN STORY!',
      desc: 'Holds the trainer\'s backstory and bio data.',
    },
  },
  {
    id: 'stacks',
    label: 'Type Dojo',
    x: 1300,
    y: 160,
    w: 120,
    h: 100,
    color: '#f08030',
    pokemon: {
      name: 'Stackizard',
      type: 'Fire',
      emoji: '🔥',
      cry: 'Stackizard used DUAL TYPE!',
      desc: 'Guardian of Java & MERN loadouts.',
    },
  },
  {
    id: 'skills',
    label: 'Party Grove',
    x: 160,
    y: 920,
    w: 130,
    h: 110,
    color: '#f8d030',
    pokemon: {
      name: 'Partynite',
      type: 'Electric',
      emoji: '⚡',
      cry: 'Partynite used SKILL SYNC!',
      desc: 'Knows every move in the dev party.',
    },
  },
  {
    id: 'experience',
    label: 'Quest Hall',
    x: 1320,
    y: 900,
    w: 130,
    h: 110,
    color: '#c03028',
    pokemon: {
      name: 'Questachu',
      type: 'Fighting',
      emoji: '⚔️',
      cry: 'Questachu used WORK EXP!',
      desc: 'Stores all completed quest logs.',
    },
  },
  {
    id: 'work',
    label: 'World Forge',
    x: 720,
    y: 120,
    w: 140,
    h: 110,
    color: '#b8a038',
    pokemon: {
      name: 'Buildosaur',
      type: 'Rock',
      emoji: '🏔️',
      cry: 'Buildosaur used DEPLOY!',
      desc: 'Protects the worlds you\'ve built.',
    },
  },
  {
    id: 'contact',
    label: 'Trade Post',
    x: 720,
    y: 980,
    w: 140,
    h: 110,
    color: '#6890f0',
    pokemon: {
      name: 'Mailwing',
      type: 'Flying',
      emoji: '📨',
      cry: 'Mailwing used SEND REQUEST!',
      desc: 'Carries messages to the trainer.',
    },
  },
]

/** Catch rates per ball index (0, 1, 2) — third ball always catches */
export const CATCH_RATES = [0.45, 0.7, 1.0]

export const PLAYER_SPEED = 5
export const INTERACT_RADIUS = 70
