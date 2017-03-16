var iframe_base = '<iframe width="560" height="315" src="https://www.youtube.com/embed/';
var iframe_id = 'dQw4w9WgXcQ"';
var iframe_end = ' frameborder="0" allowfullscreen></iframe>';
var iframe_url = iframe_base + iframe_id + iframe_end;
var spotify_embed = '<iframe src="https://embed.spotify.com/?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A2PXdUld4Ueio2pHcB6sM8j" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';

//weather variables


/*
var yt_base = 'https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=';
var yt_key = 'AIzaSyAQXaaSnC8R-r-AQn4Utmj4jbVW61EmXfo';
var yt_url = yt_base + yt_key;

$.ajax({
      url: yt_base,
      method: "GET"
    }).done(function(response) {
    	console.log('successful ajax request');

    });
*/

function updateYoutube() {
	iframe_url = iframe_base + iframe_id + iframe_end;
	console.log("new iframe embed: " + iframe_url);
	$("#player").empty();
	$("#player").html(iframe_url);
}

function updateSpotify() {
	//$("#player").empty();
	//$("#player").html(spotify_embed);
}


function updateTemp() {
	var intTemp = $(".temp").val().trim();
	console.log(intTemp);
}

$("#happy").on("click", function() {
	console.log('happy button press');
	//iframe_id = 'y6Sxv-sUYtM?list=PLZQHnEifrGpRWR0oW9y-4HRdg9Z1Cdbp6"';
	$('.youtube').html('<iframe src="https://embed.spotify.com/?uri=spotify:user:spotify:playlist:2PXdUld4Ueio2pHcB6sM8j" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
  	//updateSpotify();
})


$("#sad").on("click", function() {
	console.log('sad button press');
	$('.youtube').html('<iframe src="https://embed.spotify.com/?uri=spotify:user:spotify:playlist:5eSMIpsnkXJhXEPyRQCTSc" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
  //updateSpotify();
})

$("#angry").on("click", function() {
	console.log('angry button press');
	$('.youtube').html('<iframe src="https://embed.spotify.com/?uri=spotify:user:spotify:playlist:5Z9xJvDtHpB6m5zHgJC5zR" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
  //updateSpotify();
})

$("#relaxing").on("click", function() {
	console.log('relaxing button press');
  $('.youtube').html('<iframe src="https://embed.spotify.com/?uri=spotify:user:spotify:playlist:3InXOgDxJPeA05l6rQyDoe" width="300" height="380" frameborder="0" allowtransparency="true"></iframe');
  //updateSpotify();
})

$("#dance").on("click", function() {
	console.log('dance button press');
	$('.youtube').html('<iframe src="https://embed.spotify.com/?uri=spotify:user:sonymusicdenmark:playlist:10Yf6R2nSqXd3Puzvue5Gy" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
	//updateSpotify();
})

$("#time-to-sleep").on("click", function() {
	console.log('time to sleep button press');
	$('.youtube').html('<iframe src="https://embed.spotify.com/?uri=spotify:user:spotify:playlist:5HY9yBxrUMhng4sRgA9Xcg" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
  	//updateSpotify();
})



//stuff from background-image.js
/*
var backgroundImages = [{
	number: 1, 
	mood: "happy", 
	url: "https://www.youtube.com/watch?v=y6Sxv-sUYtM&list=PLZQHnEifrGpRWR0oW9y-4HRdg9Z1Cdbp6",
}, {
	number: 2, 
	mood: "sad", 
	url: "https://www.youtube.com/watch?v=Gxx6K5tIuOc&list=PLwa6-OCGmiO05hPneVQqXWv_yRg_CI3PC", 
}, {
	number: 3
	mood: "angry",
	url: "https://www.youtube.com/watch?v=77tvDMkc9eE&list=PLclxqlStifc4RjX5KM3NlIyn3RyN3aydk", 
}, {
	number: 4
	mood: "relaxing",
	url: "https://www.youtube.com/watch?v=fnW2uLwHAas&list=PL7dWoRZfPDhp9Zh9hGlAM6uYn7QYz9zE-",
}, {
	number: 5
	mood: "dance",
	url: "https://www.youtube.com/watch?v=kOkQ4T5WO9E&list=RDQM2ZztqzFH5LM",
}, {
	number: 6
	mood: "time to sleep",
	url: "https://www.youtube.com/watch?v=aNzCDt2eidg&list=PLAkMrOCkO6bs-aETthIFdzqoxnEX72d6H",
}, {
	number: 7
	mood: "rain, misty, cloudy",
	url: "https://www.youtube.com/watch?v=jX6kn9_U8qk",
}, {
	number: 8
	mood: "snow",
	url: "https://www.youtube.com/watch?v=SMfB1REALp4",
}, {
	number: 9
	mood: "clear",
	url: "https://www.youtube.com/watch?v=2eN58_TDA2I",
}, {
	number: 10
	mood: "thunderstorm",
	url: "https://www.youtube.com/watch?v=nDq6TstdEi8",
},{
	number: 11
	mood: "hot: temperature is 100 or higher",
	url: "https://www.youtube.com/watch?v=Wd2qRSzCj84",
}, {
	number: 11
	mood: "warm: temperature is 60 to 89",
	url: "https://www.youtube.com/watch?v=tSU_NlNHP0c",
}, {
	number: 12
	mood: "cool: temperature is 33 to 59",
	url: "https://www.youtube.com/watch?v=g04EtOyVeHY",
}, {
	number: 13
	mood: "cold: temperature is 32 or below",
	url: "https://www.youtube.com/watch?v=gpW7iYfuGDU",
}];
*/