// implementacion del decorator mediante monkey patching

// class MacbookPro {
//   memory: number
//   constructor() {
//     this.memory = 8
//   }
//   cost() {
//     return 2399
//   }
// }

// function withMemory(amount: any, computer: MacbookPro) {
//   let cost = computer.cost()
//   computer.cost = function() {
//     let memoryCost = Math.max((amount - 8) * 25, 0)
//     return cost + memoryCost
//   }
// }

// let mac = new MacbookPro()
// console.log(mac.cost())
// withMemory(32, mac)
// console.log(mac.cost())

// Ejemplo de la clase

