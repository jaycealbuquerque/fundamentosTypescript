type AccountInfo = {
  id: number
  name: string
  email?: string
}

const account: AccountInfo = {
  id: 123,
  name: 'jeyce'
}

type CharInfo = {
  nickname: string;
  level: number;
}

const char: CharInfo = {
  nickname: 'jay',
  level: 100
}

// intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  name: 'jeyce',
  id: 124,
  nickname: 'jay',
  level: 100
}
