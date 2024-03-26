class Tim {
    constructor(ime) {
        this.ime = ime;
        this.bodovi = 0;
        this.pobede = 0;
        this.nereseno = 0;
        this.izgubljene = 0;
    }
}

let timovi = [];

function recordMatch() {
    const team1Name = document.getElementById("team1").value;
    const team2Name = document.getElementById("team2").value;
    const result1 = parseInt(document.getElementById("result1").value);
    const result2 = parseInt(document.getElementById("result2").value);

    let team1 = timovi.find(tim => tim.ime === team1Name);
    let team2 = timovi.find(tim => tim.ime === team2Name);

    if (!team1) {
        team1 = new Tim(team1Name);
        timovi.push(team1);
    }

    if (!team2) {
        team2 = new Tim(team2Name);
        timovi.push(team2);
    }

    if (result1 > result2) {
        team1.bodovi += 3;
        team1.pobede++;
        team2.izgubljene++;
    } else if (result1 < result2) {
        team2.bodovi += 3;
        team2.pobede++;
        team1.izgubljene++;
    } else {
        team1.bodovi++;
        team2.bodovi++;
        team1.nereseno++;
        team2.nereseno++;
    }

    updateTable();
}

function updateTable() {
    const teamsContainer = document.getElementById("teamsContainer");
    teamsContainer.innerHTML = "";
    timovi.forEach(team => {
        const teamDiv = document.createElement("div");
        teamDiv.innerHTML = `
            <p>${team.ime}</p>
            <p>Bodovi: ${team.bodovi}</p>
            <p>Pobede: ${team.pobede}</p>
            <p>Nerešeno: ${team.nereseno}</p>
            <p>Izgubljene: ${team.izgubljene}</p>
        `;
        teamsContainer.appendChild(teamDiv);
    });
}

function endOfSeason() {
    const sortedTeams = timovi.slice().sort((a, b) => {
        if (a.bodovi !== b.bodovi) {
            return b.bodovi - a.bodovi;
        } else if (a.pobede !== b.pobede) {
            return b.pobede - a.pobede;
        } else {
            return (b.nereseno - a.nereseno);
        }
    });

    const winnersList = document.getElementById("winnersList");
    winnersList.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        const team = sortedTeams[i];
        const listItem = document.createElement("li");
        listItem.textContent = `${i + 1}. ${team.ime}`;
        if (i === 0) {
            listItem.classList.add("gold");
        } else if (i === 1) {
            listItem.classList.add("silver");
        } else if (i === 2) {
            listItem.classList.add("bronze");
        }
        winnersList.appendChild(listItem);
    }
}
