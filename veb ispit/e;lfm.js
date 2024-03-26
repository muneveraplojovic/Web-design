const tabelaValuta = document.getElementById("tabela-valuta");
const inputIznos = document.getElementById("iznos");
const prikazaniIznos = document.getElementById("konvertovan-iznos");

// Dohvatanje podataka o kursu
fetch("https://open.er-api.com/v6/latest/USD")
  .then(response => response.json())
  .then(data => {
    const kursevi = data.rates;
    const valute = ['EUR', 'RSD', 'AUD'];

    valute.forEach(valuta => {
      const kurs = kursevi[valuta];
      const red = `<tr><td>${valuta}</td><td>${kurs}</td></tr>`;
      tabelaValuta.innerHTML += red;
    });
  })
  .catch(greska => console.error('Došlo je do greške:', greska));

// Event listener za promenu input polja
inputIznos.addEventListener("input", function() {
  const iznos = inputIznos.value;
  if (!iznos || isNaN(iznos) || iznos <= 0) {
    prikazaniIznos.textContent = "Neispravan unos. Molimo unesite validan iznos.";
    return;
  }

  // Konvertovanje iz RSD u EUR
  fetch("https://open.er-api.com/v6/latest/USD")
    .then(response => response.json())
    .then(data => {
      const kursEUR = data.rates['EUR'];
      const iznosEUR = iznos / kursEUR;
      prikazaniIznos.textContent = `EUR: ${iznosEUR.toFixed(2)}`;
    })
    .catch(greska => console.error('Došlo je do greške:', greska));
});
