var topics = ["pittsburgh steelers", "golden state warriors", "pittsburgh penguins", "oakland a's"];

// var searchQuery = '';

renderButtons();

// make new team buttons
function renderButtons() {

	// clear the buttons id
	$('#team-buttons').empty();
	// iterate through buttons
	for (var i = 0; i < topics.length; i++) {
		// make buttons to hold the team names
		var teamButton = $('<button>');

		teamButton.addClass('new-teams');
		//  get the attributes
		teamButton.attr('data-name', topics[i]);

		teamButton.text(topics[i]);
		// display the team buttons
		$('#team-buttons').append(teamButton);

	}
	
}

// $(document).on('click', '.gif-btn', function() {

//   var term = $(this).attr('data-topic');

//   searchQuery = term.split(' ').join('+');

//   displayGif();
// });

// button for adding the user input team names
$("#add-team").on("click", function(event){

		event.preventDefault();
		
		var userInput = $("#team-input").val().trim();
		
		topics.push(userInput);
		
		renderButtons();
});

function displayGif() {

	// create var to hold my search topic
	var team = $(this).attr("data-name");

	// console.log(this);
	
	// var query url
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + team + "&api_key=8df1405d48504daea0219eb92ae41def&limit=10";
	console.log('queryURL', queryURL);
	// ajax call
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {

		$('#gif-drop').empty();

		var results = response.data;

		for (var i = 0; i < results.length; i++) {
			
		
			// create div to display our search items
			var teamDiv = $("<img data-state='still'>");

			// grab and display rating
	        var rating = $('<p>').text('Rating: ' + results[i].rating);

	        // grab and display gifs
			teamDiv.attr('src', results[i].images.fixed_height_still.url)
			teamDiv.attr('data-animate', results[i].images.fixed_height.url);
			teamDiv.attr('data-still', results[i].images.fixed_height_still.url);
			teamDiv.attr('class', 'gif img-responsive');
			
			
			$('#gif-drop').prepend(rating, teamDiv);
		}

	})

}

// function for on click event for starting and stopping gifs

$(document).on('click', '.gif-img', function() {

  var state = $(this).attr('data-state');

  if (state === 'still') {

    $(this).attr('src', $(this).attr('data-animate'));

    $(this).attr('data-state', 'animate');
    
  } else {

    $(this).attr('src', $(this).attr('data-still'));

    $(this).attr('data-state', 'still');
    
  }
});


displayGif();





