"use strict";
/* Sankar Blagodirov am6354 */

/**
 * Uppgift 1
 * =========
 */
console.log(5 * 2 < 12);
console.log(55 > 22);
console.log(16 / 4 == 4);
console.log(8 + 2 <= 128);
console.log(32 * 8 != 255);
/**
 * Uppgift 2
 * =========
 * 
 */
var str1 = "Tisdag";
var str2 = "Hamburgare";
var str3 = "I'll be back";

console.log(str1.substring(0, 3))
console.log(str2.substring(3, 10))
console.log(str3.substring(5, 12))


/**
 * Uppgift 3
 * =========
 */

var str4 = "It's Learning";
var str5 = "JavaScript: The Good Parts";

console.log(str4.substring(5, 13).toUpperCase());
console.log(str5.substring(16, 26).toLowerCase());

/**
 * Uppgift 4
 * =========
 */

var numbers = [128, 256, 512, 1024, 2048];
var sumOfNumbers = 0;
for (var i = 0; i < numbers.length; i++) {
    sumOfNumbers = +numbers[i];
}
console.log(sumOfNumbers);
var avgNumber = sumOfNumbers / numbers.length;
console.log(avgNumber);
numbers.push(avgNumber);
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

/**
 * Uppgift 5
 * =========
  */

var countries = ["Sweden", "Denmark", "Finland", "Norway"];
console.log(countries[1].substring(0, 3));
var charSum = 0;
for (var i = 0; i < countries.length; i++) {
    charSum = +countries[i].length;
}
console.log(charSum);
var avgChar = charSum / countries.length;
console.log(avgChar);

/**
* Uppgift 6
* =========
*/
var values = [3, 5, "Jane", true, 144, false];
values.reverse();
for (var i = 0; i < values.length; i++) {
	console.log(values[i]);
}

/**
* Uppgift 7
* =========
*/

var names = ["Jane", "Joe", "Eliza"];
var ages = [21, 34, 22];
var hasPet = [true, false, true];
var multipleArrays = names.concat(ages, hasPet);
console.log(multipleArrays);


/**
* Uppgift 8
* =========
*/

var actors = ["Sherlock", "Watson", "Bo"];
console.log(actors.join(" - "));

/**
* Uppgift 9
* =========
*/

if (amount < 50) {
	console.log("Less then 50!");
} else if (amount >= 50 && amount <= 65) {
	console.log("Optimal range for the amount!");
} else {
	console.log("Too much!");
}
/**
* Uppgift 10
* =========
*/
var gran = "";
for (var i = 0; i < 8; i++) {
    gran = gran + "#";
    console.log(gran);
}
