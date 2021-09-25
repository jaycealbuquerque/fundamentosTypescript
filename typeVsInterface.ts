// type alias

// definição
type GameT = {
  title: string;
};

type DLCT = {
  extra: string;
};

// intersection 
type GameCollectionT = GameT & DLCT & { content: boolean };

// implements
class CreateGameT implements GameCollectionT {
}

// declarar função
type getSimilarsT = (title: string) => void;

// ====================== DIFERENÇAS ========================

// permite declarar tipos primitivos
type IDT = String | number

// pode declarar tupla nomalmente
type TupleT = [number, number];

[1, 2, 3] as TupleT;

// apenas uma declaração por escopo
type JQueryT = { a: string }
type JQueryT = { b: string }

// mais recomendado na maioria das vezes
// REACT - Props


// ============================== INTERFACES ==============================================================


// definição

interface IGame {
  title: string;
}

interface Idlc {
  extra: string;
}

// interseção | extend
interface IGameCollection extends IGame, Idlc { }

// implements
class CreateGame implements IGameCollection { }

// declara função
interface getSimilars {
  (title: string): void;
}

// ============================ DIFERENÇAS ============================
interface ID extends number { }

// não consigo definir tuplas na interface
interface Tuple {
  0: number
  1: number
}

[1, 2, 3, 4, 'sass'] as Tuple;

// pode ter multiplas declarações e ele une de mesmo nome

interface JQuery {
  a: string
}

interface JQuery {
  b: string
}

const $: JQuery = {
  a: 'hey',
  b: 'hou'
}

// vantegem: quando tiver criando libs, prefira interfaces, porque são mais extensiveis!

// crinando objetos/classes (POO) 




























