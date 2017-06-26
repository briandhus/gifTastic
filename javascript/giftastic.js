var topics = ["pittsburgh steelers", "golden state warriors", "pittsburgh penguins", "oakland a's"];

// make new team buttons
function renderButtons() {
	// clear the buttons id
	$('#team-buttons').empty();

	for (var i = 0; i < topics.length; i++) {
	
	var teamButton = $('<button>');

	teamButton.addClass('team');

	teamButton.attr('data-name', topics[i]);

	teamButton.text(topics[i]);

	$('#team-buttons').append(teamButton);

	}
}

function displayGif() {

	// create var to hold my search topic
	var team = $(this).attr('data-name');

	// var query url
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + team + "&api_key=8df1405d48504daea0219eb92ae41def&limit=10";

	// ajax call
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {

		var teamDiv = $("div class='team-gif'");

		var rating = response.Rated;
        var ratingParagraph = $('<p>').text('Rating: ' + rating);

        teamDiv.append(ratingParagraph);

		var gif = response.fixed_height;
		var gifShow = $('<img>').attr('src', gif);

		teamDiv.append(gifShow);
		
		// var results = response.data;

		// for (var i = 0; i < results.length; i++) {

		// 	var teamDiv = $("<div class='team'>");

		// 	var rating = results[i].rating;

		// 	var ratingParagraph = $('<p>' + rating + '</p>');

		// 	var teamDiv = results
		$('#gif-drop').prepend(teamDiv);


	})

}

renderButtons();



