//Using array methods, you will transform an array of strings into a secret message!

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//This method of an array removes the last string item of the array
secretMessage.pop();
console.log(secretMessage.length);

//This method adds another string to the end of the array
secretMessage.push('anotherOne', 'thisIstheOne','lastOne')
console.log(secretMessage);

//will be changing the word easily in the array to right accessing the index of the array
let changeArrayIndex = secretMessage[7];
console.log(`Viewing the word in the index ${changeArrayIndex}`);
//changing the value in the index
changeArrayIndex = 'right';
console.log(`New word in the array of index 7 is: ${changeArrayIndex}`);

//this array method removes the first array element in the array
secretMessage.shift();
console.log(secretMessage);

// this method of an array will ensure to add Programming to the array as the first element of the array
secretMessage.unshift('Programming');
console.log(secretMessage);

//this method removes strings get, right, the, first, time from the array list and adds know in replace of those words
secretMessage.splice(6, 10, 'know' )
console.log(secretMessage);

//this method prints out the array as a sentence
console.log(secretMessage.join());
