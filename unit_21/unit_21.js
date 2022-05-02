
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

let out1 = document.querySelector('.out-1')
function t1() {
    out1.textContent += 'touch '
}

document.querySelector('.div-1').addEventListener('touchstart', t1, {passive: true})

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let out2 = document.querySelector('.out-2')
let count2 = 0
function t2() {
    count2++
    out2.textContent = `${count2}`
}

document.querySelector('.div-2').addEventListener('touchstart', t2, {passive: true})


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */
let div31 = document.querySelector('.div-3_1')
let div32 = document.querySelector('.div-3_2')
let out3 = document.querySelector('.out-3')
function t3() {
    if (this === div31 ) {
        out3.textContent = 1
    } else if (this === div32) {
        out3.textContent = 2
    }
}

div31.addEventListener('touchstart', t3, {passive: true})
div32.addEventListener('touchstart', t3, {passive: true})


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

let out4 = document.querySelector('.out-4')
let div4 = document.querySelector('.div-4')
function t41() {
    div4.addEventListener('touchstart', t4, {passive: true})

}
function t4() {
    out4.textContent += 'touch '
}

document.querySelector('.b-4').addEventListener('click', t41, {passive: true})

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    div4.removeEventListener('touchstart', t4)
}

document.querySelector('.b-5').addEventListener('click', t5, {passive: true})

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

let out6 = document.querySelector('.out-6')
function t6() {
    out6.textContent += 'touchend '
}

document.querySelector('.div-4').addEventListener('touchend', t6, {passive: true})


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */
let div7 = document.querySelector('.div-7')
function t7() {
    div7.style.backgroundColor = 'red'
}

div7.addEventListener('touchstart', t7, {passive: true})

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

let a8=['red', 'green', 'blue', 'orange', 'pink', 'yellow']
let div8 = document.querySelector('.div-8')
function t8() {
    let rand = Math.floor(Math.random() * a8.length)
    div8.style.backgroundColor = a8[rand]
}

div8.addEventListener('touchstart', t8, {passive: true})


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

let out9 = document.querySelector('.out-9')
function t9(event) {
    out9.textContent = `${event.touches.length}`
}

document.querySelector('.div-9').addEventListener('touchstart', t9, {passive: true})

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let div10 = document.querySelector('.div-10')
let w = div10.offsetWidth
function t10() {
    this.style.width = `${w++}px`
}

div10.addEventListener('touchmove', t10, {passive: true})

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

let out11 = document.querySelector('.out-11')
function t11(event) {
    let radiusX = event.touches[0].radiusX
    let radiusY = event.touches[0].radiusY
    out11.textContent = `radiusX = ${radiusX}; radiusY = ${radiusY};`
    console.log(event)
}

document.querySelector('.div-11').addEventListener('touchstart', t11, {passive: true})

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let imgMax = document.querySelector('.img-12-max')
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
// next.onclick = nextFunction;
next.addEventListener('touchstart', nextFunction, {passive: true})


const prev = document.querySelector('.prev');
// prev.onclick = prevFunction;
prev.addEventListener('touchstart', prevFunction, {passive: true})

const reset = document.querySelector('.reset');
reset.addEventListener('touchstart', resetFunction, {passive: true})

function nextFunction() {
    count + 1 < images.length ? count++ : count = 0
    images.forEach( item => item.classList.remove('active-img'))

    images[count].classList.add('active-img')
    imgMax.src = images[count].src
}

function prevFunction() {
    count > 0 ? count-- : count = images.length - 1
    images.forEach( item => item.classList.remove('active-img'))

    images[count].classList.add('active-img')
    imgMax.src = images[count].src
}

function resetFunction() {
    count = 0
    images.forEach( item => item.classList.remove('active-img'))
    images[count].classList.add('active-img')
    imgMax.src = images[count].src
}


