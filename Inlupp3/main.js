"use strict";
/* Här kan ni placera ert namn och dator-id. */

/**
 * Uppgift 1
 * =========
 */
var buttonSuccess = document.getElementById("success");
var buttonError = document.getElementById("error");
var buttonInfo = document.getElementById("info");

buttonSuccess.addEventListener("click", function(event){

    document.getElementById("message-box").className = "success";

});
buttonError.addEventListener("click", function(event){

    document.getElementById("message-box").className = "error";

});
buttonInfo.addEventListener("click", function(event){

    document.getElementById("message-box").className = "info";

});


/**
 * Uppgift 2
 * =========
 */

 var buttonAddToList = document.getElementById("add-item");
 

 buttonAddToList.addEventListener("click", function(event){

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

 buttonDeleteItem.addEventListener("click", function(event){

    list.removeChild(list.lastElementChild);

 });
 /**
 * Uppgift 3
 * =========
 */

  var buttons = document.getElementsByClassName("remove-list-item");
  // Gå igenom alla knappar och lägg till ett klick-event
  for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {

        var cnfm = confirm.apply("Are u sure?");
        if(cnfm=="ok"){
            this.removeParent(this);
        }
          
      });
  }