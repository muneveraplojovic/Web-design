// class Tim {
//   constructor(ime) {
//     return {
//       ime,
//       lista: [],
//       bodovi: 0,
//       brUtakmica: 0,
//       dodajIgraca: function (igrac) {
//         lista.push(igrac);
//       },
//       promenaBodova: function (bodovi) {
//         bodovi += bodovi;
//       },
//       promenaBrUtakmica: function () {
//         brUtakmica++;
//       },
//       prikazStatistike: function () {
//         let golovi = 0;
//         let asistencije = 0;
//         let sutovi = 0;
//         for (i = 0; i < lista.length; i++) {
//           const igraci = lista[i];
//         }
//         golovi += statistika.golovi;
//         asistencije += statistika.asistencije;
//         sutovi += statistika.sutovi;

//         const prosek = sutovi / brUtakmica;
//         return {
//           golovi,
//           asistencije,
//           sutovi,
//           prosek,
//         };
//       },
//     };
//   }
// }

// class Igrac {
//   constructor(ime, prezime, pozicija, brDresa) {
//     return {
//       ime,
//       prezime,
//       pozicija,
//       brDresa,
//       statistika: {
//         golovi: 0,
//         asistencije: 0,
//         sutovi: 0,
//       },
//       promeniStatistiku: function () {
//         golovi += golovi;
//         asistencije += asistencije;
//         sutovi += sutovi;
//       },
//     };
//   }
// }

class Tim {
  constructor(ime) {
    this.ime = ime;
    this.lista = [];
    this.bodovi = 0;
    this.brUtakmica = 0;
  }
  addPlayer(igrac) {
    this.lista.push(igrac);
  }
  updateBodovi(bodovi) {
    this.bodovi += bodovi;
  }
  updateBrUtakmica() {
    this.brUtakmica++;
  }
  getSatatistiku() {
    let golovi = 0;
    let asistencije = 0;
    let sutovi = 0;

    for (i = 0; i < this.lista.length; i++) {
      const igrac = this.lista[i];
      golovi += igrac.golovi;
      asistencije += igrac.asistencije;
      sutovi += igrac.sutovi;
    }
    const prosek = sutovi / this.brUtakmica;
    return {
      golovi,
      asistencije,
      sutovi,
      prosek,
    };
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
      sutovi: 0,
    };
  }

  promeniStatistiku(golovi, asistencije, sutovi) {
    this.golovi += golovi;
    this.asistencije += asistencije;
    this.sutovi += sutovi;
  }
}

