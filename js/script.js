let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.64;
let rateRSD = 0.039;
let rateUSD = 4.16;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;
            
        case "RSD":
            result = amount / rateRSD;
            break;

        case "USD":
            result = amount / rateUSD;
            break;
    }
    
    resultElement.innerHTML = result.toFixed(2);
});