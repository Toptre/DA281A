"use strict";
/* Här kan ni placera ert namn och dator-id. */

/**
 * Uppgift 1
 * =========
 */

function max(a, b){
    if(a < b){
        console.log(b);
    }else{
        console.log(a);
    }
}

function min(a, b){
    if(a > b){
        console.log(b);
    }else{
        console.log(a);
    }
}

/**
 * Uppgift 2
 * =========
 */

 var testArray = range(10);
 console.log(testArray);
 
 function range(n){
     
     var array = [];
     
     for(var i = 0; i < n; i++){
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

 function sum(ar){
     var sum = 0;
     for (var i = 0; i < ar.length; i++){
        sum += ar[i];
     }
     return sum;
 }
 /**
 * Uppgift 4
 * =========
 */ 
  

function countCharacter(str, c){
    var matchChar = 0;
    for (var i = 0; i <str.length; i++) {
        if(str.charAt(i) == c){
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
    palindrome("sirap - paris"); // skickar tillbaka "true"
    palindrome("lorem ipsum");

   function palindrome(pStr){
    var revStr="";
    for(var i=pStr.length; i >= 0;i--) {
        
    }   
       if(pStr.reverse()==pStr){
           return true;
       } else {
           return false;
       }
   }