// challenge 1 ..  reverse a string .
//return a string in reverseNumber.
function reverseString(str) {
	//	return str.split("").reverse().join("");

	//////////////////////

	// let revString = "";
	// for (let i = str.lenght - 1; i >= 0; i--) {
	// 	//	revString = revString + str[i];
	// 	console.log(i);
	// }
	// return revString;
	///////////////////
	let revString = "";
	for (let i = 0; i <= str.length - 1; i++) {
		revString = str[i] + revString;
	}
	return revString;
}

//  call function
const output = reverseString("hello");

console.log(output);
