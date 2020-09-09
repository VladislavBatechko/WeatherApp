let button = document.querySelector('.button');
let div = document.querySelector('.city_temp');
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');
let wind = document.querySelector('.wind');
let inputValue = document.querySelector('.inputValue');

button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=8ed307bae80f252b06143842c1af3f3e')
        .then(response => response.json())
        .then(data => {
            let weatherBlock = document.createElement('div');
            let pName = document.createElement('p');
            let pTemp = document.createElement('p');
            let pWind = document.createElement('p');
            let pDesc = document.createElement('p');
            let back = document.createElement('button');

            let nameValue = data['name'];
            pName.innerHTML = nameValue;
            let tempValue = data['main']['temp'];
            tempValue = tempValue.toFixed() - 273;
            pTemp.innerHTML = 'Temperature now' + ' ' + tempValue + 'C';
            let descValue = data['weather'][0]['description'];
            pDesc.innerHTML = descValue;
            let windValue = data['wind']['speed'];
            pWind.innerHTML = 'Windspeed now' + ' ' + windValue + 'm/s';

            back.className = 'back';
            back.innerHTML = 'X'

            div.append(weatherBlock);
            weatherBlock.append(pName, pTemp, pWind, pDesc, back);

            back.addEventListener('click', getElement);

            function getElement(e) {
                e.target.parentElement.remove();
            }
            pName.addEventListener('click', changeName);

            function changeName(e) {

                e.target.remove();
                let inputRename = document.createElement('input');
                inputRename.setAttribute('type', 'text')
                inputRename.className = 'inputValue';

                let inputResubmit = document.createElement('input');
                inputResubmit.setAttribute('type', 'submit');
                inputResubmit.setAttribute('value', 'Submit');
                inputResubmit.className = 'button';

                weatherBlock.append(inputRename, inputResubmit);



            }
        })
        .catch(err => console.error('Wrong city name!'))
})