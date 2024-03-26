class Player {
  constructor(firstName, lastName, position, jerseyNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.jerseyNumber = jerseyNumber;
    this.statistics = {
      goals: 0,
      assists: 0,
      shots: 0,
    };
  }

  updateStatistics(goals = 0, assists = 0, shots = 0) {
    this.statistics.goals += goals;
    this.statistics.assists += assists;
    this.statistics.shots += shots;
  }
}

class Team {
  constructor(name) {
    this.name = name;
    this.players = [];
    this.points = 0;
    this.gamesPlayed = 0;
  }

  addPlayer(player) {
    this.players.push(player);
  }

  updatePoints(points) {
    this.points += points;
  }

  updateGamesPlayed() {
    this.gamesPlayed++;
  }

  getStatistics() {
    let goals = 0;
    let assists = 0;
    let shots = 0;

    for (const player of this.players) {
      goals += player.statistics.goals;
      assists += player.statistics.assists;
      shots += player.statistics.shots;
    }

    const averageShotsPerGame = shots / this.gamesPlayed;

    return {
      goals,
      assists,
      shots,
      averageShotsPerGame,
    };
  }
}

// Kreiranje igrača
const player1 = new Player("John", "Doe", "Forward", 10);
const player2 = new Player("Jane", "Doe", "Midfielder", 7);

// Dodavanje statistika igračima
player1.updateStatistics(2, 1, 5);
player2.updateStatistics(1, 2, 3);

// Kreiranje tima
const team = new Team("Red Team");

// Dodavanje igrača u tim
team.addPlayer(player1);
team.addPlayer(player2);

// Ažuriranje statistika tima
team.updatePoints(3); // Dodaj bodove
team.updateGamesPlayed(); // Povećaj broj odigranih utakmica

// Prikaz statistika tima preko HTML-a
const teamStatsContainer = document.getElementById("teamStats");
const teamStatistics = team.getStatistics();

teamStatsContainer.innerHTML = `
    <h2>${team.name} Statistics</h2>
    <p>Goals: ${teamStatistics.goals}</p>
    <p>Assists: ${teamStatistics.assists}</p>
    <p>Shots: ${teamStatistics.shots}</p>
    <p>Average Shots Per Game: ${teamStatistics.averageShotsPerGame}</p>
`;
