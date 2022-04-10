// challenge 1 ..  reverse a string .
//return a string in reverseNumber.
function reverseString(str) {
	return str.split("").reverse().join("");
}

//  call function
const output = reverseString("hello");

console.log(output);
