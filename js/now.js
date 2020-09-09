let nameNow = document.querySelector('.name_now');
let descNow = document.querySelector('.desc_now');
let tempNow = document.querySelector('.temp_now');
let windNow = document.querySelector('.wind_now');
let notification = document.querySelector('.notification');

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError)
} else {
    notification.style.display = "block";
    notification.innerHtml = "<p>Browser dont support geolocation</p>";
}

function setPosition(position) {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude

    getWeather(latitude, longitude)
}

function showError(error) {
    console.error(error)
    notification.style.display = "block";
    notification.innerHTML = `<p>You block geolocation</p>`;
}

function getWeather(latitude, longitude) {
    fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8ed307bae80f252b06143842c1af3f3e`
        )
        .then((response) => response.json())
        .then((data) => {
            let nameNowValue = data["name"]
            let tempNowValue = data["main"]["temp"]
            tempNowValue = tempNowValue.toFixed() - 273
            let descNowValue = data["weather"][0]["description"]
            let windNowValue = data["wind"]["speed"]
            nameNow.innerHTML = nameNowValue
            tempNow.innerHTML = "Temperature now" + " " + tempNowValue + "C"
            descNow.innerHTML = descNowValue
            windNow.innerHTML = "Windspeed now" + " " + windNowValue + "m/s"
        })
        .catch((err) => console.error(err))
}