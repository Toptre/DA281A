"use strict";
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