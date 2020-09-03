let button = document.querySelector('.button');
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');
let wind = document.querySelector('.wind');
let inputValue = document.querySelector('.inputValue');
button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=8ed307bae80f252b06143842c1af3f3e')
        .then(response => response.json())
        .then(data => {
            let nameValue = data['name'];
            let tempValue = data['main']['temp'];
            tempValue = tempValue.toFixed() - 273;
            let descValue = data['weather'][0]['description'];
            let windValue = data['wind']['speed'];
            name.innerHTML = nameValue;
            temp.innerHTML = 'Temperature now' + ' ' + tempValue + 'C';
            desc.innerHTML = descValue;
            wind.innerHTML = 'Windspeed now' + ' ' + windValue + 'm/s';
        })
        .catch(err => console.error('Wrong city name!'))
})