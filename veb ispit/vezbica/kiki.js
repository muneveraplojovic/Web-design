class Knjiga {
  constructor(naslov, autor, brStranica) {
    this.naslov = naslov;
    this.autor = autor;
    this.brStranica = brStranica;
    this.trStranica = 0;
  }

  procitaneStrane(strana) {
    if (strana < 0 || strana > this.brStranica) {
      console.log("greska");
      return;
    }
    this.trStranica = strana;
  }
}

class Citalac {
  constructor(ime) {
    this.ime = ime;
    this.listaOmiljenihKnjiga = [];
  }
  dodajOmiljenuKnjigu(knjiga) {
    this.listaOmiljenihKnjiga.push(knjiga);
  }
  oznaceneProcitaneStranica(knjiga, strana) {
    knjiga.procitaneStrane(strana);
  }
}

class Biblioteka {
  constructor() {
    this.listaKnjiga = [];
  }
  dodajKnjige(knjiga) {
    this.listaKnjiga.push(knjiga);
  }
  pretraga(trazeno) {
    const pretraga = this.listaKnjiga.filter((knjiga) => {
      knjiga.naslov.toLowerCase().includes(trazeno.naslov.toLowerCase()) ||
        knjiga.autor.toLowerCase().includes(trazeno.autor.toLowerCase());
    });
    return pretraga;
  }

  prikazKnjiga(knjiga) {
    console.log(`${knjiga.naslov}`);
    console.log(`${knjiga.autor}`);
    console.log(`${knjiga.brStrana}`);
  }
}

const knjiga1 = new Knjiga("Knjiga1", "Autor1", 123);
const knjiga2 = new Knjiga("Knjiga2", "Autor2", 456);
const knjiga3 = new Knjiga("Knjiga3", "Autor3", 789);

const citalac1 = new Citalac("Munevera");
const citalac2 = new Citalac("Ermin");
const citalac3 = new Citalac("Semir");

const biblioteka = new Biblioteka();

biblioteka.dodajKnjige(knjiga1);
biblioteka.dodajKnjige(knjiga2);
biblioteka.dodajKnjige(knjiga3);

citalac1.dodajOmiljenuKnjigu(book3);
citalac2.dodajOmiljenuKnjigu(book2);
citalac3.dodajOmiljenuKnjigu(book1);

citalac1.oznaceneProcitaneStranica(book1, 120);
citalac2.oznaceneProcitaneStranica(book2, 100);
citalac3.oznaceneProcitaneStranica(book3, 20);

biblioteka.informacijeKnjige(book1);
biblioteka.informacijeKnjige(book2);
biblioteka.informacijeKnjige(book3);

biblioteka.pretragaKnjiga("knjiga 2");

const dostupneKnjige = document.getElementById("dostupneKnjige");
biblioteka.listaKnjiga.forEach((knjiga) => {
  const lista = document.createElement("li");
  lista.textContent = `${knjiga.naslov} od ${knjiga.autor}`;
  dostupneKnjige.appendChild(li);
});

const listaCitalaca = document.getElementById("citaoci");
const lis = document.createElement("li");
lis.textContent = `${citalac.ime}`;
listaCitalaca.appendChild(li);
