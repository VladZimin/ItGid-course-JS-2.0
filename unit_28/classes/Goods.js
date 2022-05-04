class Goods {
    constructor (name, amount, image, count, out) {
        this.name = name
        this.amount = amount
        this.image = image
        this.count = count
        this.out = out
    }
    draw () {
        document.querySelector(this.out).innerHTML += `<div>
            <img src='${this.image}'>
            <p>Наименование: ${this.name}</p>
            <p>Цена: ${this.amount}р.</p>
            <p>Остаток на складе: ${this.count}шт.</p>
        </div>`
    }
}