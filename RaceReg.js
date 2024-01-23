let raceNumber = Math.floor(Math.random() * 1000);

const regEarly = false;

const age = 20;

if( age >= 18 && regEarly){
  raceNumber += 1000; 
}

if (age >= 18 && regEarly) {
  raceNumber += 1000;
  console.log(`Your race number is ${raceNumber} and you will race at 9:30 am.`);
} else if (age >= 18 || regEarly) {
  console.log(`Your race number is ${raceNumber} and you will race at 11:00 am.`);
} else {
  console.log(`Your race number is ${raceNumber} and you will race at 12:30 pm.`);
}
