//The program will determine the actual and ideal hours of sleep for each night of the last week.
//Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

//this function should accept an arugement that will determine the number of hourse some has slept in each day of the week
const getSleepHours = (day) => {
  if ( day === 'monday'){
    return 8;
  }
  else if(day === 'tuesday'){
    return 7;
  }
   else if(day === 'wednesday'){
    return 6;
  }
   else if(day === 'thursday'){
    return 5;
  }
   else if(day === 'friday'){
    return 4;
  }
   else if(day === 'saturday'){
    return 3;
  }
  else if(day === 'sunday'){
    return 2;
  }
  else {
    return 'error number of hours of sleep';
  }
}

//this function gets the total days of the sleep hours in each day of the week
const getActualSleepHours = () => {
  let sumofSleepHours = 0;
  let daysofWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  for(let i = 0; i < daysofWeek.length; i++){
    sumofSleepHours += getSleepHours(daysofWeek[i]);
  }
  return sumofSleepHours;
}

//this function will suggest the number of sleep hours recomended to someone
const getIdealSleepHours = () =>{
  const idealHours = 7;
  return idealHours * 7;
}

console.log(getActualSleepHours());
console.log(getIdealSleepHours())

//this function will calculate the sleep debt the amount of sleep that the person still has to cover
const calculateSleepDebt = () =>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  let sleepDebt = Math.abs(actualSleepHours - idealSleepHours);
  
  if (actualSleepHours === idealSleepHours){
    console.log('You have ' + sleepDebt + ' hours of sleep this the perfect amount of time of sleep.');
  }
  else if(actualSleepHours > idealSleepHours){
    console.log('You have ' + sleepDebt + ' hours of sleep this is more time of sleep then recommended/required.');
  }
  else if(actualSleepHours < idealSleepHours){
    console.log('You have ' + sleepDebt + ' hours of sleep this is less amount of sleep then recommended/required please get some rest.');
  }
  else{
    console.log("Error in getting actual sleep hours and ideal hours!!.");
  }
}
calculateSleepDebt();