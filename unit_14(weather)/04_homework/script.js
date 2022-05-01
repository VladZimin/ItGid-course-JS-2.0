// Данные для get запроса и список город (где id - ключ)
const param = {
    url: 'https://api.openweathermap.org/data/2.5/',
    appId: '5b3fafb8c8bec837c1f412a52b1f935a',
}
const cities = {
    1486209: 'Екатеринбург',
    1492663: 'Серов',
    1490624: 'Сургут',
    1502026: 'Красноярск',
    1512569: 'Ташкент'
}

// получаю необходимые HTML элементы
let icon = document.querySelector('.icon')
let degrees = document.querySelector('.degrees')
let nameCity = document.querySelector('.nameCity')
let feelsLike = document.querySelector('.feelsLike')
let minTemp = document.querySelector('.minTemp')
let maxTemp = document.querySelector('.maxTemp')
let speedWind = document.querySelector('.speedWind')

// создаю элемент select, добавляю класс, добавляю элемент в начало страницы и на событие onchange вещаю fn getWeather
let select = document.createElement('select')
select.classList.add('select')
document.querySelector('body').prepend(select)
select.onchange = getWeather

//в цикле перебираю массив городов, создаю option для селекта.
for (let key in cities) {
    let option = document.createElement('option')
    option.value = key
    option.textContent = cities[key]
    select.append(option)
}

// Отображение погода. Данные полученные в качестве параметра присваиваются элементам на странице
function showWeather(data) {
    nameCity.textContent = ''
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    degrees.innerHTML = `${Math.round(data.main.temp)}&deg;`
    nameCity.textContent = data.name
    feelsLike.innerHTML = `${Math.round(data.main.feels_like)}&deg;`
    minTemp.innerHTML = `${Math.round(data.main.temp_min)}&deg;`
    maxTemp.innerHTML = `${Math.round(data.main.temp_max)}&deg;`
    speedWind.textContent = `${data.wind.speed} М/С`
    console.log(data)
}
// Отправляем get запрос, в качестве ответа приходит массив с необходимы данными, которые передаем функции showWeather
function getWeather() {
    fetch(`${param.url}weather?id=${select.value}&units=metric&APPID=${param.appId}`)
        .then(weather => weather.json()).then(showWeather)
}
getWeather()