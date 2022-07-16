"use strict";
/* Sankar Blagodirov am6354 */

var form = document.getElementById("search-form");
var resultDiv = document.getElementById("result");
form.addEventListener("submit", function(event) {
	resultDiv.innerHTML = '';
	event.preventDefault();
	var movie = this.query.value;
	console.log(movie);
	if (movie != '') {
		fetchMovies(movie);
	} else {
		alert("Please enter a value");
	}
});

function fetchMovies(movieTitle) {
	// Objekt för att hantera AJAX
	var omdbAPI = new XMLHttpRequest();
	// Den URL vi ska använda oss av (obs. att denna har förvalt "the revenant")
	var omdbURL = "http://www.omdbapi.com/?s=" + movieTitle + "&type=movie&apikey=7c75e03b";
	// Vad vill vi göra när vi fått ett svar?
	omdbAPI.addEventListener("load", function() {
		// Konvertera resultatet från JSON
		var result = JSON.parse(this.responseText);
		// Skriv ut resultatet
		console.log(result);
		if (result.Response == "False") {
			alert(result.Error);
		} else {
			console.log(result.Search.length);
			result.Search.map(function(movie) {
				if (movie.Poster != "N/A") {
					resultDiv.innerHTML += `
                        <div class="card">
                            <img src="${movie.Poster}">
                                <div class="container">
                                    <h4><b>${movie.Title}</b></h4>
                                    <p>${movie.Year}</p>
                                </div>
                        </div>`;
				} else {
					resultDiv.innerHTML += `
                        <div class="card">
                            <div class="container">
                                <h4><b>${movie.Title}</b></h4>
                                <p>${movie.Year}</p>
                            </div>
                        </div>`;}
			});
		}
	});
	// Ange vilken metod (get) samt URL vi ska skicka med
	omdbAPI.open("get", omdbURL, true);
	// Skicka förfrågan
	omdbAPI.send();
}