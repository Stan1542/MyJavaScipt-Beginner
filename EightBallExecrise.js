let userName = 'Stan';

userName ? console.log(`Hello ${userName}!`) :
console.log('Hello!');

const userQuestion = console.log("What is Magic Eight Ball");

let randomNumber = Math.floor(Math.random()*8)

let eightBall = " ";

if (randomNumber === 0){
  eightBall = 'It us certain';
}
else if (randomNumber === 1){
  eightBall = 'It is decidedly so';
}
else if (randomNumber === 2){
  eightBall = 'Reply hazy try again';
}
else if (randomNumber === 3 ){
  eightBall = 'Cannot predict now';
}
else if (randomNumber === 4){
  eightBall = 'Do not count on it';
}
else if (randomNumber === 5){
  eightBall = 'My sources say no';
}
else if(randomNumber === 6){
  eightBall = 'Outlook not so good';
}
else if (randomNumber === 7){
  eightBall = 'Signs point to yes';
}
else{
  console.log("Invalid number!")
}

console.log(eightBall);


