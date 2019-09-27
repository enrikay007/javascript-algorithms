// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	let counter = 0;
// you can use string or you can use arrays but lets use arrays to make things clearer
//const checker = "aeiou"
const checker = ['a','e','i','o','u']

for (let char of str.toLowerCase()){	
if (checker.includes(char)){
	counter++;
}
}
return counter;
}

module.exports = vowels;
