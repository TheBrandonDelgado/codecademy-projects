const team = {
    _players: [
      {
        firstName: "George",
        lastName: "Washington",
        age: 22
      },
      {
        firstName: "Bill",
        lastName: "Clinton",
        age: 34
      },
      {
        firstName: "Gerald",
        lastName: "Ford",
        age: 54
      }
    ],
    _games: [
      {
        opponent: "Wild Boars",
        teamPoints: 33,
        opponentPoint: 12
      },
      {
        opponent: "Masqueraders",
        teamPoints: 11,
        opponentPoints: 45
      },
      {
        opponent: "Bulls",
        teamPoints: 84,
        opponentPoints: 32
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      const player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
  
      this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
  
      this._games.push(game);
    }
  };
  
  team.addPlayer("Bugs", "Bunny", 76);
  team.addGame("Titans", 100, 98);
  
  console.log(team.players);
  console.log(team.games);