"use strict";
/* Här kan ni placera ert namn och dator-id. */

/**
 * Uppgift 1
 * =========
 */

function max(a, b) {
    if (a < b) {
        console.log(b);
    } else {
        console.log(a);
    }
}

function min(a, b) {
    if (a > b) {
        console.log(b);
    } else {
        console.log(a);
    }
}

/**
 * Uppgift 2
 * =========
 */

var testArray = range(10);
console.log(testArray);

function range(n) {

    var array = [];

    for (var i = 0; i < n; i++) {
        array.push(i);
    }

    return array;

}
/**
 * Uppgift 3
 * =========
 */
var numbers = [5, 10, 15, 20, 25];
var sumOfNumbers = sum(numbers);
console.log(sumOfNumbers);

function sum(ar) {
    var sum = 0;
    for (var i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}
/**
* Uppgift 4
* =========
*/


function countCharacter(str, c) {
    var matchChar = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == c) {
            matchChar++;
        }

    }
    return matchChar;
}

var testString1 = "Jane Doe";
var testString2 = "Abracadabra";

console.log(countCharacter(testString1, "e")); // => 2
console.log(countCharacter(testString2, "a")); // => 4 (obs. litet "a")

/**
* Uppgift 5
* =========
*/

function palindrome(pStr) {
    var revStr = "";
    for (var i = pStr.length - 1; i >= 0; i--) {
        revStr += pStr[i];

    }
    if (revStr == pStr) {
        return true;
    } else {
        return false;
    }
}

/**
* Uppgift 6
* =========
*/
var person = { firstname: "sankar", lastname: "Blagodirov", age: 29, family: ["Emma", "Alexander"] };
/**
* Uppgift 7
* =========
*/

function printPerson(person) {
    console.log("Fullname:", person.firstname, person.lastname, "Age:", person.age);
    console.log("Family members:");
    for (var i = 0; i < person.family.length; i++) {
        console.log(person.family[i]);
    }
}

printPerson(person);
/**
* Uppgift 8
* =========
*/
function createBox(height, width){
    return{height:height, width:width};
    
}

var box = createBox(15, 20);
// Skriv ut attributen
console.log(box.height); // skickar tillbaka 15
console.log(box.width); 

/**
* Uppgift 9
* =========
*/
function Triangle(height, width){
    return{
        height:height, 
        width:width,
    area:function(){
        return this.height*this.width/2;

    }
};
    
}
var tri = Triangle(12, 14);

console.log(tri.height); // skickar tillbaka 12
console.log(tri.width); // skickar tillbaka 14
// Observera att vi anropar "area()"
console.log(tri.area());

/**
* Uppgift 10
* =========
*/

function attributes(obj){

    var attrArray = [];
    for(var attribute in obj){
        attrArray.push(attribute);
    }
    return attrArray;


}

var testObject1 = {
    width: 15,
    height: 20
};

var attrsFromObject1 = attributes(testObject1);
console.log(attrsFromObject1); // skickar tillbaka ["width", "height"]

var testObject2 = {
    a: 1,
    b: 2,
    c: 3
};

var attrsFromObject2 = attributes(testObject2);
console.log(attrsFromObject2)