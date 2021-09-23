// interfaces serve so para objetos
// preferencialmente objetos mais complexo
//  para objetos pequenos e simples e preferencia usar type aliases
interface Game {
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[]

  // assinatura do metodo
  getSimilars?: (title: string) => void
}

const tlou: Game = {
  title: 'the last of us',
  description: 'the best game in the world',
  genre: 'action',
  getSimilars: (title: string) => {
    console.log(`similar games to ${title}: uncharted, a plague tale, metro`)
  }
}

console.log(tlou.genre)
if (tlou.getSimilars) {
  tlou.getSimilars(tlou.title)
}

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const lefbehind: DLC = {
  title: 'the last of us - left behind',
  description: 'you play as ellie before the original game',
  genre: 'action',
  platform: ['ps4'],
  originalGame: tlou,
  newContent: ['3 hour story', 'new charaters']
}


class CreateGame implements Game {
  title: string
  description: string
  genre: string

  constructor(t: string, d: string, g: string) {
    this.title = t
    this.description = d
    this.genre = g
  }
}