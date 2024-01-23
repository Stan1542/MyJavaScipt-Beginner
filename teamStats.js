//We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.
//After we create these data structures in this project, feel free to challenge yourself to gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.

// Creating a data structure to store information about the team.
// Populating Data
const team = {
  // Creating nested objects in an array with player details
  _players: [
    {
      firstName: 'Stanley',
      lastName: 'Mbhalati',
      age: 25
    },
    {
      firstName: 'Chris',
      lastName: 'Evens',
      age: 24
    },
    {
      firstName: 'John',
      lastName: 'Stawert',
      age: 25
    }
  ],
  _games: [
    {
      opponent: '',
      teamPoints: 0,
      opponentPoints: 0
    },
    {
      opponent: '',
      teamPoints: 0,
      opponentPoints: 0
    },
    {
      opponent: '',
      teamPoints: 0,
      opponentPoints: 0
    }
  ],
  // Getting Data
  get players() {
    return this._players; // Returning the data from the players private data structure
  },
  get games() {
    return this._games; // Returning the data from the games private data structure
  },
  // Adding Data
  addPlayer(newFirstName, newLastName, newAge) { // Created a new method that will add new information data
    const newPlayer = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(newPlayer); // Using push method to add the newPlayer to the array
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints){//creating a new method that will take new game scores.
    const newScores = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponenetPoints: newOpponentPoints
    };
     this._games.push(newScores) // using push method to add new scores to the array
  },
};

team.addPlayer('Bugs', 'Bunny', 26); // testing to see if the new player as been added

// Log the updated players array
console.log(team.players);

team.addGame('Titans', 100, 98) //testing to see if the new infomation has been added

// Log the updated players array
console.log(team.games);



