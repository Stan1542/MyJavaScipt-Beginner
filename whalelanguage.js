//Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.
//Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

//creating a variable that will equal to a phase I want
const input = 'How are you doing';

//creating a an array that will store vowles inside because whales speak in vowels
const vowels = ['a', 'e', 'i','o','u'];

//creating an empty array that store the vowels
const resultArray = [];

//creating a loop to iterate through each letter of the variable input
for(let i = 0; i < input.length; i++){
 // console.log(input[i]);
 // Check if the current letter is 'e'
 if (input.toLowerCase() === 'e'){
  // Double the 'e' and add it to the resultArray twice
  resultArray.push(input[i]);
  resultArray.push(input[i]);
 }
 else if (input.toLowerCase === 'u'){
 resultArray.push(input[i]);
 resultArray.push(input[i]);
 }
 for(let j = 0; j < vowels.length; j++){
      // console.log(`Outer Iterator: ${i}, Inner Iterator: ${j}`);
      // console.log(vowels[j]);

       if(input[i].toLowerCase() === vowels[j]){
        console.log(`Letter ${input[i]} at position ${i} matches with ${vowels[j]} at position ${j}`);
        // Add the matching letter to the resultArray
        resultArray.push(input[i]);
       }
 }
}
console.log(resultArray);
//currently outputs an array of characters to produce a proper whale language as we capitalize the array of elements and put them togther as one string
const resultString = resultArray.join('').toUpperCase();

console.log(resultString)