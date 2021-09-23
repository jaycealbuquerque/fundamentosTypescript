// classes abstratas 
// não pode criar objetos apartir dela
// podem ser extendidas
// são interessantes quando queremos criar modelos para outras classes

abstract class UserAccount {
  // public é default
  public name: string

  // pode chamar dentro da classe ou  da classe que estar extendendo
  // não da pra chamar fora da classe
  protected age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  logDetails(): void {
    console.log(`the player ${this.name} is  ${this.age} year old.`)
  }


}

class CharAccount extends UserAccount {
  // so poder ser chamada na classe que foi criada
  private nickname: string
  readonly level: number

  constructor(nickname: string, level: number, name: string, age: number) {
    super(name, age)
    this.nickname = nickname
    this.level = level
  }

  // metodo get é chamado como se fosse uma propriedade, mais ele é uma função com mais informação
  get getLevel() {
    console.log('--------GET----------')
    return this.level
  }

  // não permitir alterar o valor de uma propriedade com modificador readonly
  set setNick(nick: string) {
    this.nickname = nick
  }

  logCharDetails(): void {
    console.log(
      `The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`
    )
  }

}


// classe não pode ser instanciada porque é uma classe abstrata
// const jeyce = new UserAccount('jeyce', 27)



const john = new CharAccount('johnmaster', 80, 'john', 45)
console.log(john)
console.log(john.level)
john.logDetails()
john.logCharDetails()

// metodo get é chamado como se fosse uma propriedade, mais ele é uma função com mais informação 
console.log(john.getLevel)

// o metodo set não é chamado como uma função
john.setNick = 'john Doe'
console.log(john)



