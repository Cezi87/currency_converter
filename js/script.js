{
    const welcome = () => {
        console.log("Welcome to all developers!");
    }

    welcome();

    const initForm = () => {

        const formElement = document.querySelector(".js-form");
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const rateEur = 4.64;
            const rateRsd = 0.039;
            const rateUsd = 4.16;

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

            resultElement.innerHTML = `${result.toFixed(2)} ${currency}`;
        });

        formElement.addEventListener("reset", (event) => {
            resultElement.innerHTML = '';
        });
    }
    initForm();
}