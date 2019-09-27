// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	/*third  solution using for loop use reduce helper*/
	return str.split('').reduce((reversed, character)=> {
		return character + reversed; 
		}, '');
	//or 	
	// return str.split('').reduce((rev, char)=> char + rev , '');
	
}

module.exports = reverse;
