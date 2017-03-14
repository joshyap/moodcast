var iframe_base = '<iframe width="560" height="315" src="https://www.youtube.com/embed/';
var iframe_id = 'dQw4w9WgXcQ"';
var iframe_end = ' frameborder="0" allowfullscreen></iframe>';
var iframe_url = iframe_base + iframe_id + iframe_end;

//weather variables



function updateVideo() {
		$("#iframe_container").html(iframe_base + iframe_id + iframe_end);
}

$("#happy").on("click", function() {
	iframe_id = 'y6Sxv-sUYtM?list=PLZQHnEifrGpRWR0oW9y-4HRdg9Z1Cdbp6"';
	console.log("button being clicked");
  updateVideo();
})


$("#sad").on("click", function() {
	iframe_id = 'Gxx6K5tIuOc?list=PLwa6-OCGmiO05hPneVQqXWv_yRg_CI3PC"';
  updateVideo();
})

$("#angry").on("click", function() {
	ifram_id = '77tvDMkc9eE?list=PLclxqlStifc4RjX5KM3NlIyn3RyN3aydk"';
  updateVideo();
})

$("#relaxing").on("click", function() {
  iframe_id = 'fnW2uLwHAas?list=PL7dWoRZfPDhp9Zh9hGlAM6uYn7QYz9zE-"';
  updateVideo();
})

$("#dance").on("click", function() {
	iframe_id = 'kOkQ4T5WO9E?list=RDQM2ZztqzFH5LM"';
	updateVideo();
})

$("#time-to-sleep").on("click", function() {
	iframe_id = 'aNzCDt2eidg?list=PLAkMrOCkO6bs-aETthIFdzqoxnEX72d6H"'
  	updateVideo();
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