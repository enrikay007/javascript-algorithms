// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
// {} ()
function maxChar(str) {
const charMap =	{}
let max = 0;
let maxChar = '';


for (let char1 of str){
	if (charMap[char1]){
	charMap[char1]++;	
	} else {
		charMap [char1] = 1;
	}
}

for (let char1 in charMap){
	if (charMap[char1] > max) {
		max = charMap[char1]; // key
		maxChar = char1;	//value
	}
		
	
}
 return maxChar;

}
module.exports = maxChar; 