class Goods2 extends Goods{
    constructor (name, amount, image, count, out, sale = false) {
        super(name, amount, image, count, out)
        this.sale = sale
    }
    draw () {
        let saleStr = ''
        this.sale ? saleStr = 'Да' : saleStr = 'Нет'
        document.querySelector(this.out).innerHTML += `<div>
            <img src='${this.image}'>
            <p>Наименование: ${this.name}</p>
            <p>Цена: ${this.amount}р.</p>
            <p>Остаток на складе: ${this.count}шт.</p>
            <p>Участие в распродаже: ${saleStr}</p>
        </div>`
    }
}