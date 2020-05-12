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

class Field {
  errors: string[]
  input: HTMLInputElement

  constructor(input: HTMLInputElement) {
    this.input = input
    this.errors = []

    let errorMessage = document.createElement('p')
    errorMessage.className = 'text-danger'
    this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling)

    this.input.addEventListener('input', () => {
      this.errors = []
      this.validate()
      errorMessage.innerText = this.errors[0] || ''
    })
  }

  validate() { }
}

function RequiredFieldDecorator(field: Field): Field {
  let validate = field.validate
  field.validate = function() {
    validate()
    let value = field.input.value
    if(!value) {
      field.errors.push("Requerido")
    }
  }
  return field
}

function EmailFieldDecorator(field: Field): Field {
  let validate = field.validate
  field.validate = function() {
    validate()
    let value = field.input.value
    if(value.indexOf('@') === -1) {
      field.errors.push("Email!")
    }
  }
  return field
}

let field: Field = new Field(document.querySelector('#email'))
field = RequiredFieldDecorator(field)
field = EmailFieldDecorator(field)

