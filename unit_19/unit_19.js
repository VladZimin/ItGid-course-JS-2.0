
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

let out1 = document.querySelector('.out-1')
function t1() {
    out1.textContent = this.textContent
}

document.querySelector('.div-1').onclick = t1

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

let out2 = document.querySelector('.out-2')
function t2(e) {
    out2.textContent = e.altKey
    return e.altKey
}

document.querySelector('.div-2').onclick = t2

// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;
let out3 = document.querySelector('.out-3')
let div3 =document.querySelector('.div-3')
function t3() {
    w3 += 5
    div3.style.width = `${w3}px`
    out3.textContent = w3
}

div3.onclick = t3


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

let out4 = document.querySelector('.out-4')
function t4() {
    out4.textContent = this.textContent
}

document.querySelector('.div-4').ondblclick = t4

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

let div5 =document.querySelector('.div-5')
function t5() {
    div5.classList.toggle('active')
}

div5.ondblclick = t5

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

let div6 =document.querySelector('.div-6')
let ul6 =document.querySelector('.ul-6')
function t6() {
    ul6.classList.toggle('hide')
}

div6.ondblclick = t6


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

let div7 = document.querySelector('.div-7')
function t7(e) {
    e.preventDefault()
    div7.classList.toggle('active')
}

div7.oncontextmenu = t7

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

let ch8 = document.querySelector('.ch-8')
function t8() {
    if (ch8.checked)  document.oncontextmenu = (e) => e.preventDefault()
}

ch8.onchange = t8

// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

let div9 = document.querySelector('.div-9')
function t9(e) {
    e.preventDefault()
    div9.children[0].src = 'img/2.png'
}

div9.oncontextmenu = t9


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

let div10 = document.querySelector('.div-10')
function t10() {
    div10.children[0].src = 'img/2.png'
}

div10.onmouseenter = t10

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

let div11 = document.querySelector('.div-11')
function t11(e) {
    console.log(e)
    if (e.type === 'mouseenter') {
        div11.children[0].src = 'img/2.png'
    } else {
        div11.children[0].src = 'img/1.png'
    }
}

div11.onmouseenter = t11
div11.onmouseleave = t11

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

let div12 = document.querySelector('.div-12')

div12.onmousedown = () => {
    div12.classList.add('active')
}


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

let div13 = document.querySelector('.div-13')

div13.onmousedown = () => {
    div13.classList.add('active')
}

div13.onmouseup = () => {
    div13.classList.remove('active')
}


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

let div14 = document.querySelector('.div-14')
function t14() {
    div14.classList.add('active')
}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

let div15 = document.querySelector('.div-15')
function t15() {
    this.textContent = parseInt(this.textContent) + 1
}

div15.onmousemove = t15

// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

let div16 = document.querySelector('.div-16')
let width = div16.offsetWidth
function t16() {
    div16.style.width = `${width++}px`
    }

div16.onmousemove = t16

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
    div16.onmousemove = t16
}
function t17Off() {
    div16.onmousemove = null
}

document.querySelector('.b-17_off').onclick = t17Off
document.querySelector('.b-17_on').onclick = t17On

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

let div18 = document.querySelector('.div-18')
function t18() {
    div18.textContent = div18.offsetWidth
}

div18.onmouseenter = t18

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

let div19 = document.querySelector('.div-19')
function t19() {
    div19.textContent = `${div19.classList}`
}

div19.onmouseout = t19

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

let pr20 = document.querySelector('progress')
function t20() {
    pr20.value < 100 && pr20.value++
}

pr20.onmousemove = t20