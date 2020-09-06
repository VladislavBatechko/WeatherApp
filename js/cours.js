let usd = document.querySelector('.usd');
let rub = document.querySelector('.rub');
let euro = document.querySelector('.euro');

function timeout(ms, promise) {
    return new Promise(function(resolve, reject) {
        setInterval(function() {
            reject(new Error("timeout"))
        }, ms)
        promise.then(resolve, reject)
    })
}

timeout(3600000, fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`)
    .then(response => response.json())
    .then(data => {
        let usdValue = data[26].rate;
        let rubValue = data[18].rate;
        let euroValue = data[33].rate;

        usd.innerHTML = usdValue;
        rub.innerHTML = rubValue;
        euro.innerHTML = euroValue;
    })
    .catch(err => console.error('API timeout error')))