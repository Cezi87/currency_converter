let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEur = 4.64;
let rateRsd = 0.039;
let rateUsd = 4.16;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEur;
            break;

        case "RSD":
            result = amount / rateRsd;
            break;

        case "USD":
            result = amount / rateUsd;
            break;
    }

    resultElement.innerHTML = result.toFixed(2);
});

formElement.addEventListener("reset", (event) => {
    resultElement.innerHTML = '';
});