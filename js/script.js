{
  const welcome = () => {
    console.log("Welcome to all developers!");
  };

  welcome();

  const calculateResult = (amount, currency) => {
    const rateEur = 4.64;
    const rateRsd = 0.039;
    const rateUsd = 4.16;

    switch (currency) {
      case "EUR":
        return amount / rateEur;

      case "RSD":
        return amount / rateRsd;

      case "USD":
        return amount / rateUsd;
    }
  };

  const updateResultText = (result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${result.toFixed(2)} ${currency}`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const amount = +amountElement.value;
    const currency = currencyElement.value;

    let result = calculateResult(amount, currency);

    updateResultText(result, currency);
  };

  const initForm = () => {
    const formElement = document.querySelector(".js-form");
    const resultElement = document.querySelector(".js-result");

    formElement.addEventListener("submit", onFormSubmit);

    formElement.addEventListener("reset", (event) => {
      resultElement.innerHTML = "";
    });
  };
  initForm();
}
