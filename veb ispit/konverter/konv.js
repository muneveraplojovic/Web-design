document.addEventListener("DOMContentLoaded", function() {
    fetchExchangeRates();
    
    document.getElementById("convertBtn").addEventListener("click", convertToEUR);
});

function fetchExchangeRates() {
    fetch("https://open.er-api.com/v6/latest/USD")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch exchange rates");
            }
            return response.json();
        })
        .then(data => {
            const exchangeRates = data.rates;
            const currencies = ["EUR", "RSD", "AUD"];

            const exchangeRatesTable = document.getElementById("exchangeRates");

            currencies.forEach(currency => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${currency}</td>
                    <td>${exchangeRates[currency]}</td>
                `;
                exchangeRatesTable.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error fetching exchange rates:", error.message);
        });
}

function convertToEUR() {
    const rsdAmountInput = document.getElementById("rsdAmount");
    const resultDiv = document.getElementById("result");
    const rsdAmount = parseFloat(rsdAmountInput.value);

    if (isNaN(rsdAmount) || rsdAmount <= 0) {
        resultDiv.textContent = "Invalid amount. Please enter a valid number.";
        return;
    }

    fetch("https://open.er-api.com/v6/latest/USD")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch exchange rates");
            }
            return response.json();
        })
        .then(data => {
            const eurExchangeRate = data.rates["EUR"];
            const eurAmount = rsdAmount / eurExchangeRate;
            resultDiv.textContent = `${rsdAmount} RSD is approximately ${eurAmount.toFixed(2)} EUR`;
        })
        .catch(error => {
            console.error("Error converting to EUR:", error.message);
        });
}
