"use strict";


var form = document.getElementById("search-form");
var resultDiv = document.getElementById("result");

form.addEventListener("submit", function (event) {
    resultDiv.innerHTML = '';
    //var cNode = resultDiv.cloneNode(false);
   // resultDiv.parentNode.replaceChild(cNode, resultDiv);

    event.preventDefault();

    var movie = this.query.value;
    console.log(movie);

    if(movie != '') {
        fetchMovies(movie); 
    } else {
    alert("Please enter a value");
}

});


function fetchMovies(movieTitle){

// Objekt för att hantera AJAX
var omdbAPI = new XMLHttpRequest();
// Den URL vi ska använda oss av (obs. att denna har förvalt "the revenant")
var omdbURL = "http://www.omdbapi.com/?s="+movieTitle+"&type=movie&apikey=c9e4eec1";

// Vad vill vi göra när vi fått ett svar?
omdbAPI.addEventListener("load", function() {
    // Konvertera resultatet från JSON
    var result = JSON.parse(this.responseText);
    // Skriv ut resultatet
    console.log(result);

    

    if (result.Response == "False"){
        alert(result.Error);
    }else{

        console.log(result.Search.length)
        for (let i = 0; i < result.Search.length; i++) {
            resultDiv.innerHTML += result.Search[i].Title +" "+ result.Search[i].Year + "<br>";
            
         }
        
    }
});

// Ange vilken metod (get) samt URL vi ska skicka med
omdbAPI.open("get", omdbURL, true);
// Skicka förfrågan
omdbAPI.send();

}