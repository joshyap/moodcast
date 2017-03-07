queryUrl = "https://api.spotify.comb/v1/search?type=playlist";

Api = "2bb4d7d3f26f40008212fca437a98adf";

function spotifyAPI () {
	$.ajax({
		url: queryUrl,
		method: "GET"
	})
	.done(function(response) {
		console.log(response);
	})
}
