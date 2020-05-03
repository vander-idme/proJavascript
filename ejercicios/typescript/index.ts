// TIPOS BASICOS

// Boolean
let muted: boolean = true
muted = false

// Numeros
let numerador: number = 42
let denomidanor: number = 2
let resultado = numerador / denomidanor

// String
let nombre: string = 'Vander'
let saludo = `Me llamo ${nombre}`

// Arreglo
let people: string[] = []
people = ['Isabel', 'Nicole', 'Raul']

  // people.push("2000")

// arreglo que permite dos tipos de variables
let peopleAndNumbers: Array< string | number > = []
peopleAndNumbers.push('Vander')
peopleAndNumbers.push('23')
console.log(peopleAndNumbers)

// Enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul"
}

let colorFavorito: Color = Color.Rojo
console.log(`Mi color favorito es ${colorFavorito}`)

// Any
let comodin: any = "Joker"
console.log(comodin)

comodin = { type: 'Wildcard'}
console.log(comodin)

// Object
let someObject: object = { type: "Wildcard" }
const person = {
  name: 'Vander',
  edad: 23
}

let persons = []
persons.push(person)
persons.push("Zhaida")

console.log(persons)

// TUPLAS
let x: [string, number]
x = ["Hello", 10]

// x = [10, "Hello"]

console.log(x[0].substring(1))
// console.log(x[1].substring(1)) // error, en un numero no hay substring