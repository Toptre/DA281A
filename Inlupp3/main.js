"use strict";
/* Sankar Blagodirov am6354 */

/**
 * Uppgift 1
 * =========
 */
var buttonSuccess = document.getElementById("success");
var buttonError = document.getElementById("error");
var buttonInfo = document.getElementById("info");

buttonSuccess.addEventListener("click", function (event) {

    document.getElementById("message-box").className = "success";

});
buttonError.addEventListener("click", function (event) {

    document.getElementById("message-box").className = "error";

});
buttonInfo.addEventListener("click", function (event) {

    document.getElementById("message-box").className = "info";

});


/**
 * Uppgift 2
 * =========
 */

var buttonAddToList = document.getElementById("add-item");


buttonAddToList.addEventListener("click", function (event) {

    var node = document.createElement('li');

    node.appendChild(document.createTextNode(prompt("Enter item to add to list")));
    document.getElementById("items").appendChild(node);




});
/**
* Uppgift 3
* =========
*/
var list = document.getElementById("items");
var buttonDeleteItem = document.getElementById("delete-item");

buttonDeleteItem.addEventListener("click", function (event) {

    list.removeChild(list.lastElementChild);

});
/**
* Uppgift 4
* =========
*/

var buttons = document.getElementsByClassName("remove-list-item");
// Gå igenom alla knappar och lägg till ett klick-event
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        var cnfm = confirm("Are u sure?");
        if (cnfm == true) {
            this.parentNode.remove();
        }

    });
}

/**
* Uppgift 5
* =========
*/
var form = document.getElementById("apply-for-pet");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var firstName = this.firstname.value;
    var lastName = this.lastname.value;
    var age = this.age.value;
    var emailAdress = this.email.value;
    var pet = this.pet.value;

    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(emailAdress);
    console.log(pet);

    if (!firstName || !lastName || !emailAdress || !age) {
        alert("All fields are required.");
        
    } else if (firstName.length > 50) {
        alert("The firstname is too long!");

    } else if (lastName.length > 50) {
        alert("The lastname is too long!");

    } else if (isNaN(age) || age < 0) {
        alert("The age is not a number!");

    } else if (emailAdress.length > 50) {
        alert("The email is too long!");

    } else if (!pet) {
        alert("You must select a pet!");

    } else {
        event.target.submit();

    }


    /*
    Förnamn - får endast innehålla 0 till 50 bokstäver
Efternamn - får endast innehålla 0 till 50 bokstäver
Ålder - måste vara en siffra (number) och vara mer än 0
Epost - får endast innehålla 0 till 50 bokstäver
Husdjur - ett husdjur måste vara valt*/




});
