// type alieses
// pode descrever  um objeto mais tmb um conjunto pequeto de tipos primitivos
// funciona para objetos e tipos primitivos

type Uid = number | string | undefined

function logDetails(uid: Uid, item: string) {
  console.log(`a product ${uid} has a title as ${item}`)
}

function logInfo(uid: Uid, user: string) {
  console.log(`a product ${uid} has a title as ${user}`)
}

logDetails(123, 'sapato')
logDetails('123', 'sapato')

logInfo(123, 'willian')
logInfo('123', 'willian')


// type aliases
type Plataform = 'windows' | 'linux' | 'mac'

function renderPlataform(plataform: Plataform) {
  return plataform
}

renderPlataform('mac')