fetch("C:\Users\Munevera Plojovic\Desktop\veb ispit\kartica\kar.json")
  .then((response) => response.json())
  .then((data) => {
    const validCardsList = document.getElementById("validCards");
    const invalidCardsList = document.getElementById("invalidCards");

    let validCount = 0;
    let invalidCount = 0;

    data.forEach((card) => {
      if (validateCard(card.broj_kartice)) {
        validCount++;
        const li = document.createElement("li");
        li.textContent = card.broj_kartice;
        validCardsList.appendChild(li);
      } else {
        invalidCount++;
        const li = document.createElement("li");
        li.textContent = card.broj_kartice;
        invalidCardsList.appendChild(li);
      }
    });

    const totalCards = validCount + invalidCount;
    const successRate = ((validCount / totalCards) * 100).toFixed(2);

    console.log("Valid Cards:", validCount);
    console.log("Invalid Cards:", invalidCount);
    console.log("Success Rate:", successRate + "%");
  })
  .catch((error) => console.error("Error:", error));

function validateCard(cardNumber) {
  let sum = 0;
  let doubleUp = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i));

    if (doubleUp) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    doubleUp = !doubleUp;
  }

  return sum % 10 === 0;
}
