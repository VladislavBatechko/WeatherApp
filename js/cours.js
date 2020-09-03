fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
    .then(response => response.json(0))
    .then(data => {
        console.log(data)
            // let usdValue = data['name'];
            // let rubValue = data['main']['temp'];
        let euroValue = data['buy'];

        // usd.innerHTML = usdValue;
        // rub.innerHTML = rubValue;
        euro.innerHTML = euroValue;
    })
    .catch(err => console.error('smt Error'))