class Tim {
  constructor(imeTima) {
    this.imeTima = imeTima;
    this.listaIgraca = [];
    this.brBodova = 0;
    this.brUtakmica = 0;
  }
  dodajIgraca(igrac) {
    this.listaIgraca.push(igrac);
  }
  promenaBodova(bodovi) {
    this.brBodova += bodovi;
  }
  promenaBrUtakmica() {
    this.brUtakmica++;
  }

  prikazTima() {
    let golovi = 0;
    let asistencije = 0;
    let sutevi = 0;

    for (i = 0; i < this.listaIgraca.length; i++) {
      const igrac = this.listaIgraca[i];
      golovi += igrac.statistika.golovi;
      asistencije += igrac.statistika.asistencije;
      sutevi += igrac.statistika.sutevi;
    }
    const prosek = sutovi / this.brUtakmica;

    return{
        golovi,
        sutevi,
        asistencije,
        p7
    }
  }
}

class Igrac {
  constructor(ime, prezime, pozicija, brDresa) {
    this.ime = ime;
    this.prezime = prezime;
    this.pozicija = pozicija;
    this.brDresa = brDresa;
    this.statistika = {
      golovi: 0,
      asistencije: 0,
      sutevi: 0,
    };
  }
  promenaStatistike(golovi, asistencije, sutevi) {
    this.statistika.golovi += golovi;
    this.statistika.asistencije += asistencije;
    this.statistika.sutovi += sutovi;
  }
}



const igrac1 = new Igrac("Maja", "Plojovic", "naprijed", 10);