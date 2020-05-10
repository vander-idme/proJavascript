// TIPOS BASICOS

// // Boolean
// let muted: boolean = true
// muted = false

// // Numeros
// let numerador: number = 42
// let denomidanor: number = 2
// let resultado = numerador / denomidanor

// // String
// let nombre: string = 'Vander'
// let saludo = `Me llamo ${nombre}`

// // Arreglo
// let people: string[] = []
// people = ['Isabel', 'Nicole', 'Raul']

//   // people.push("2000")

// // arreglo que permite dos tipos de variables
// let peopleAndNumbers: Array< string | number > = []
// peopleAndNumbers.push('Vander')
// peopleAndNumbers.push('23')
// console.log(peopleAndNumbers)

// // Enum
// enum Color {
//   Rojo = "Rojo",
//   Verde = "Verde",
//   Azul = "Azul"
// }

// let colorFavorito: Color = Color.Rojo
// console.log(`Mi color favorito es ${colorFavorito}`)

// // Any
// let comodin: any = "Joker"
// console.log(comodin)

// comodin = { type: 'Wildcard'}
// console.log(comodin)

// // Object
// let someObject: object = { type: "Wildcard" }
// const person = {
//   name: 'Vander',
//   edad: 23
// }

// let persons = []
// persons.push(person)
// persons.push("Zhaida")

// console.log(persons)

// // TUPLAS
// let x: [string, number]
// x = ["Hello", 10]

// // x = [10, "Hello"]

// console.log(x[0].substring(1))
// // console.log(x[1].substring(1)) // error, en un numero no hay substring

// FUNCIONES EN TYPE SCRIPT

//podemos ser explicitos en los parametros
// function addNumbers(a: number, b: number) {
//   return a + b
// }

// console.log(addNumbers(1,2))

// // y podemos ser aun mas explicitos con el tipo de retorno de la funcion
// function addNumbers2(a: number, b: number): string {
//   return a + '' + b
// }

// let concat = addNumbers2(2,2)
// console.log(concat)
// console.log(typeof(concat))

// function concatenacion(a: string, b: string): string {
//   return a + b
// }

// let concat2 = concatenacion("2","2")
// console.log(concat2)
// console.log(typeof(concat2))

// // funciones que retornan funciones

// function createAdder(a: number): (number) => number{
//   return function(b: number) {
//     return b + a
//   }
// }

// const addFour = createAdder(4)
// const fourPlusSix = addFour(6)

// // otra forma de declarar funciones que retornan funciones
// let myAdd:(a: number, b: number) => number =
//   function(x: number, y:number): number {return x + y}
//     /*Traduccion de lo de alli arriba:
//       myAdd es una funcion anonima que recibe dos numeros y retorna un numeros
//       let myAdd                                             <- Javascript
//       let myAdd: let myAdd:(a: number, b: number) => number <- Typescript

//       y es igual a la funcion anonima que recibe dos numeros y retorna un numero
//       = function(x,y) {return x+y}                          <- Javascript
//       = function(x: number, y:number): number {return x + y}<- Typescript
//     */

// console.log('myAdd: ' + myAdd)
// console.log('myAdd(2,3): ' + myAdd(2,3))


// // funciones con parametros opcionales
// function fullName(firstName: string, lastName?: string): string {
//   return `${firstName} ${lastName}`
// }

// const vander = fullName('Vander', 'Idme')
// const zhaida = fullName('Zhaida') //el valor que no le pasamos sera tomado por undefined

// //funciones con parametros con valor por omision(por default)
// function fullName2(firstName: string, lastName: string = "Smith"): string {
//   return `${firstName} ${lastName}`
// }

// const agente = fullName2("Agente")

// console.log(vander)
// console.log(zhaida)
// console.log(agente)

// INTERFACES
enum Color {
  rojo = "Rojo",
  azul = "Azul"
}


interface Rectangulo {
  ancho: number,
  alto: number
  color?: Color //propiedad que puede ser obviada
}

const rect: Rectangulo = {
  ancho: 12,
  alto: 4,
  color: Color.azul
}

function calcularArea(r: Rectangulo): number {
  return r.alto * r.ancho
}

const areaRect = calcularArea(rect)
console.log(areaRect)

rect.toString = function() {
  return this.color?`Un rectangulo color ${this.color}`: `Un rectangulo`
}

console.log(rect)
console.log(rect.toString())

interface Cuadrado {
  lado: number
}

const cuadro: Cuadrado = {
  lado: 12
}

console.log(`Este es mi cuadrado: ${cuadro.lado}`)

console.log(`Este es mi cuadrado: ${cuadro.lado}`)
