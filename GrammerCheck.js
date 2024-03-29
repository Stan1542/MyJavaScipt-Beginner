//In this project, you’ll use what you know about iterating over arrays to gather information and improve the quality of a paragraph
let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

//console.log(storyWords)
console.log(storyWords.join(' '));

let count = 0;
// Iterate over the storyWords array using forEach
storyWords.forEach(function(word){
  // Increment count for each word
  count++;
});
console.log(`The number of words are: ${count}`);

storyWords = storyWords.filter(function(word){
   // Return true if the word is NOT equal to unnecessaryWord
 return word !== unnecessaryWord;
});
console.log(storyWords.join(' '))

//ressigning the word to a method called map with a callback function
storyWords = storyWords.map(function(word){
 if (word === misspelledWord){
  return 'beautiful';
 }else{
  return word;
 }
});
console.log(storyWords.join(' '));

//this function call back and method will find the bad word in the array and return the index number of the bad word
const badWordIndex = storyWords.findIndex(function(word){
  return word === badWord;
});
console.log('The bad word is: ', badWordIndex);

//replacing the bad word
storyWords[badWordIndex] = 'really';
console.log(storyWords.join(' '));

//we using the every method to make sure every word in the array is less then or equal to 10
const lengthCheck = storyWords.every(function(word){
  return word.length <= 10;
});
console.log(lengthCheck)

// Find words longer than 10 characters using the filter method
const longWord = storyWords.filter(function(word){
   return word.length > 10;
});

// Assuming there is only one word longer than 10 characters
if (longWord.lenght > 0){
  // Replace the first long word with a shorter word
  const replacement = 'stunning';
  storyWords[storyWords.indexOf(longWord[0])] = replacement;
}

// Log the modified story
console.log(storyWords.join(' '));









