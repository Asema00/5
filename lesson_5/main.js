//response-ответ от сервера
const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro');

// som.addEventListener('input',() =>{
//     const request = new XMLHttpRequest()
//     request.open("GET","convert.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//     request.addEventListener('load',() =>{
//           const response = JSON.parse(request.response)
//         usd.value = (som.value / response.usd).toFixed(2)
//     })
// })
// usd.addEventListener('input',() =>{
//     const request = new XMLHttpRequest()
//     request.open("GET","convert.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//     request.addEventListener('load',() =>{
//           const response = JSON.parse(request.response)
//         som.value = (som.value * response.usd).toFixed(2)
//     })
// })

//DRY= Don`t repeat yourself
const convert = (elem, target, target2) => {
    elem.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', 'convert.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();
        request.onload = () => {
            const response = JSON.parse(request.response);
            const usdC = response.usd
            const euroC = response.euro
            if (elem === som) {
                target.value = (elem.value / usdC).toFixed(2);
                target2.value = (elem.value / euroC).toFixed(2);
            } else if ( elem === usd ) {
                target.value = (elem.value * euroC).toFixed(2);
                target2.value = ((elem.value * usdC ) / euroC ).toFixed(2)
            } else {
                target.value = ((elem.value * euroC) / usdC).toFixed(2);
                target2.value = (elem.value * euroC).toFixed(2);
            }
            elem.value === '' && (target.value = '');
            elem.value === '' && (target2.value = '');

        };
    };
};
convert(som, usd, euro);
convert(usd, som, euro);
convert(euro, usd, som);
// convert(euro, som, false);




