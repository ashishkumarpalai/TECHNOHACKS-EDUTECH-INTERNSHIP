document.getElementById("convert").addEventListener("click", function () {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from").value;
    const toCurrency = document.getElementById("to").value;

    fetch(`https://v6.exchangerate-api.com/v6/6c823642f4165827564b53e1/latest/${fromCurrency}`)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            const exchangeRate = data.conversion_rates[toCurrency];
            if (exchangeRate) {
                console.log(exchangeRate)
                const convertedAmount = (amount * exchangeRate).toFixed(2);
                document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
            } else {
                document.getElementById("result").textContent = "Invalid currency selection.";
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            document.getElementById("result").textContent = "Error fetching data.";
        });
});
