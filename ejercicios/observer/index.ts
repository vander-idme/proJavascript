interface Observer {
  update: (data: any) => void
}

interface Subject {
  subscribe: (observer: Observer) => void,
  unsubscribe: (observer: Observer) => void
}

class BitcoinPrice implements Subject {
  observers: Observer[] = []

  constructor() {
    const elemento: HTMLInputElement = document.querySelector("#value")
    elemento.addEventListener('input', () => {
      this.notify(elemento.value)
    })
  }

  subscribe (observer: Observer) {
    this.observers.push(observer)
  }

  unsubscribe (observer: Observer) {
    const index = this.observers.findIndex(obs => {
      return obs === observer
    })

    this.observers.splice(index, 1)
  }

  notify(data: any) {
    this.observers.forEach(observer => observer.update(data))
  }
}

class PriceDisplay implements Observer{
  private elemento: HTMLElement

  constructor() {
    this.elemento = document.querySelector("#price")
  }

  update(data: any) {
    this.elemento.innerText = data
  }
}

const value = new BitcoinPrice()
const display = new PriceDisplay()

value.subscribe(display)

setTimeout(()=>{
  value.unsubscribe(display)
},5000)