// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

// (function() {
// 	var json;
// 	$.getJSON("http://www.mattbowytz.com/simple_api.json", "data=all", function(data) {
// 		json = data;
// 		console.log(json);
// 	});
//
// 	console.log(json);
// 	console.log('Keepin\'n it clean with an external script!');
// })();

var search_suggestions;

function predictive_search() {
	console.log(search_suggestions);
}

$(function () {
	$.getJSON("http://www.mattbowytz.com/simple_api.json", "data=all", function(data) {
		search_suggestions = data.data.interests;
		search_suggestions.push.apply(search_suggestions, data.data.programming);
		console.log("Suggestions ready");
	});
	$(".flexsearch-input").keyup(predictive_search);
});
