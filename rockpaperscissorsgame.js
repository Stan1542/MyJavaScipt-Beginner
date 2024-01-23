//This game teachs you about functions
console.log('hi');
//User input
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if(userInput === 'rock' || userInput === 'paper'|| userInput === 'scissors'){
    return userInput;
  }
  else{
    console.log("Error please enter the correct options!!");
  }

}



//computer makes a choice on the generating of random outputs
const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
   
   switch(randomNum){
    case 0:  return 'rock';
    case 1: return 'paper';
    case 2: return 'scissors'

    default: console.log('Unexpected number generated')
   }
}


//this function checks whether outcome is a win or a lose or a tie
const determineWinner = (userChoice, computerChoice) => {
  //if user wins with a cheat code
  if(userChoice === 'bomb'){
    return 'You win with a secret cheat code!!'
  }
   
   if (userChoice === computerChoice){
    return 'Tie';
   }
   else if(userChoice === 'paper' && computerChoice === 'rock'){
     return 'YOU WIN!!';
   }
   else if(userChoice === 'rock' && computerChoice === 'scissors'){
    return 'YOU WIN!!';
   }
   else if(userChoice === 'scissors' && computerChoice === 'paper'){
    return 'YOU WIN!!';
   }
   else{
    return 'YOU LOSE!!'
   }
}


//this funcction implements all the functions together
const playGame = () => {
   const userChoice = getUserChoice('rock', 'paper', 'scissors');
   const computerChoice = getComputerChoice();

   console.log(userChoice);
   console.log(computerChoice);

   console.log(determineWinner(userChoice, computerChoice));
}

playGame();

















