// tipos typescript


// boolean (true / false)
let isOpen: boolean
isOpen = true

// string
let message: string
message = `foo ${isOpen}`

// number
let total: number
total = 1248

// array
let items: string[]
items = ['foo', 'bar']

// notação generic
let values: Array<number>
values = [1, 2, 3]

// tuple
let title: [number, string]
title = [1, 'ola']

// enum
enum color {
  white = '#fff',
  black = '#000'
}

// any (pode ser atribuido qualquer tipo)
let coisa: any
coisa = 11

// void (tipar função que nao tem retorno)

function exemple(): void {

}

// null | unefined
type bla = string | undefined

// never (nunca vai ter um retorno)
function error(): never {
  throw new Error('error');
}

// object (tudo aquilo que nao é string, arry, booleano, numero)
let cart: object

cart = {
  name: 'jeyce'
}


















