"use strict";

/*
function teste(valueA){
	var valueB = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1];
	return valueA + valueB;
}

console.log(teste(2));
*/

function test(valueA) {
	var valueB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

	return valueA + valueB;
}
console.log(test(2));
