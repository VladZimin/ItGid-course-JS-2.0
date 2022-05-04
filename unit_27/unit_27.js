
// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/
const param = {
    url: 'http://getpost.itgid.info/index2.php',
    key: '7859d9d42a8834141d529577207c9596'
}

function t1() {
    let  req1 =  fetch(`${param.url}?auth=${param.key}&action=1`)
        .then(response => response.text())

    let  req2 =  fetch(`${param.url}?auth=${param.key}&action=2&name=Vlad`)
        .then(response => response.text())

    Promise.all([req1,req2])
        .then(data => document.querySelector('.out-1').textContent = `1) ${data[0]}    2) ${data[1]}`)
}

document.querySelector('.b-1').addEventListener('click', t1)

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

function t2() {
    let  req1 =  fetch(`${param.url}?auth=${param.key}&action=3&num1=5&num2=10`)
        .then(response => response.text())

    let  req2 =  fetch(`${param.url}?auth=${param.key}&action=4&num1=5&num2=10`)
        .then(response => response.text())

    Promise.all([req1,req2])
        .then(data => document.querySelector('.out-2').textContent = `1) ${data[0]}    2) ${data[1]}`)
}

document.querySelector('.b-2').addEventListener('click', t2)


// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
    let  req1 =  fetch(`${param.url}?auth=${param.key}&action=5`)
        .then(response => response.text())

    let  req2 =  fetch(`${param.url}?auth=${param.key}&action=6&num1=5&num2=777`)
        .then(response => response.text())

    Promise.all([req1,req2])
        .then(data => document.querySelector('.out-3').textContent = `1) ${data[0]}    2) ${data[1]}`)
}

document.querySelector('.b-3').addEventListener('click', t3)


// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
    let  req1 =  fetch(`${param.url}?auth=${param.key}&action=7`)
        .then(response => response.text())

    let  req2 =  fetch(`${param.url}?auth=${param.key}&action=8&year=1997`)
        .then(response => response.text())

    Promise.all([req1,req2])
        .then(data => document.querySelector('.out-4').textContent = `1) ${data[0]}    2) ${data[1]}`)
}

document.querySelector('.b-4').addEventListener('click', t4)

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
    let  req1 =  fetch(param.url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: `auth=${param.key}&action=1`
    })
        .then(response => response.text())

    let  req2 =  fetch(param.url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: `auth=${param.key}&action=2&name=Vladislav`
    })
        .then(response => response.text())

    Promise.all([req1,req2])
        .then(data => document.querySelector('.out-5').textContent = `1) ${data[0]}    2) ${data[1]}`)
}

document.querySelector('.b-5').addEventListener('click', t5)

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
    let  req1 =  fetch(param.url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: `auth=${param.key}&action=3&num1=11&num2=22`
    })
        .then(response => response.text())

    let  req2 =  fetch(param.url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: `auth=${param.key}&action=4&num1=11&num2=22`
    })
        .then(response => response.text())

    Promise.all([req1,req2])
        .then(data => document.querySelector('.out-6').textContent = `1) ${data[0]}    2) ${data[1]}`)
}

document.querySelector('.b-6').addEventListener('click', t6)


// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
    let  req1 =  fetch(param.url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: `auth=${param.key}&action=5`
    })
        .then(response => response.text())

    let  req2 =  fetch(param.url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: `auth=${param.key}&action=6&num1=11&num2=22`
    })
        .then(response => response.text())

    Promise.all([req1,req2])
        .then(data => document.querySelector('.out-7').textContent = `1) ${data[0]}    2) ${data[1]}`)
}

document.querySelector('.b-7').addEventListener('click', t7)

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {
    let  req1 =  fetch(param.url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: `auth=${param.key}&action=7`
    })
        .then(response => response.text())

    let  req2 =  fetch(param.url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: `auth=${param.key}&action=8&year=1997`
    })
        .then(response => response.text())

    Promise.all([req1,req2])
        .then(data => document.querySelector('.out-8').textContent = `1) ${data[0]}    2) ${data[1]}`)
}

document.querySelector('.b-8').addEventListener('click', t8)

