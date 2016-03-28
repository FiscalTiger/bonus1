/*
	This script uses jquery to suggest searches to the users based off what they
	have typed into the search bar
*/

var search_suggestions;

// Display the correct search suggestions
function predictive_search() {
	var hide_list = true;
	var search_text = $(this).val();
	var i;
	$(".search-suggestion").remove();
	for(i = 0; i < search_suggestions.length; i++) {
		if(search_text !== "" && search_suggestions[i].toLowerCase().indexOf(search_text.toLowerCase()) > -1) {
			//create the html for search suggestion
			var suggestion_html =
				$("<li class=\"search-suggestion\"><a class=\"search-suggestion\" href=\"http://www.google.com/search?q=" +
				search_suggestions[i] + "\">" + search_suggestions[i] + "</a></li>");
			console.log(suggestion_html);
			$(".search-suggestions-wrapper ul").append(suggestion_html);
			hide_list = false;
		}
	}

	// Hide list if there aren't any suggestions to show
	// else show the list
	if(hide_list) {
		$(".search-suggestions").hide();
	} else {
		$(".search-suggestions").show();
	}
}

$(function () {
	// Get the search suggestions from simple_api.json
	$.getJSON("http://www.mattbowytz.com/simple_api.json", "data=all", function(data) {
		search_suggestions = data.data.interests;
		search_suggestions.push.apply(search_suggestions, data.data.programming);

		console.log("Suggestions ready");
	});
	// make google search from current input
	$(".flexsearch-submit").click(function() {
		var search_text = $(".flexsearch-input").val();
		window.location.href='http://www.google.com/search?q=' + search_text;
		return false;
	});

	//event handler to come up with search suggestions
	$(".flexsearch-input").keyup(predictive_search);
});
