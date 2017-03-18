var iframe_base = '<iframe width="560" height="315" src="https://www.youtube.com/embed/';
var iframe_id = 'dQw4w9WgXcQ"';
var iframe_end = ' frameborder="0" allowfullscreen></iframe>';
var iframe_url = iframe_base + iframe_id + iframe_end;
var spotify_embed = '<iframe src="https://embed.spotify.com/?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A2PXdUld4Ueio2pHcB6sM8j" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';

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

$("#happy").on("click", function(event) {
	event.preventDefault();
	console.log('happy button press');
	//iframe_id = 'y6Sxv-sUYtM?list=PLZQHnEifrGpRWR0oW9y-4HRdg9Z1Cdbp6"';
	$('#player').html('<iframe src="https://embed.spotify.com/?uri=spotify:user:spotify:playlist:2PXdUld4Ueio2pHcB6sM8j" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
  	//updateSpotify();
})


$("#sad").on("click", function(event) {
	event.preventDefault();
	console.log('sad button press');
	$('#player').html('<iframe src="https://embed.spotify.com/?uri=spotify:user:spotify:playlist:5eSMIpsnkXJhXEPyRQCTSc" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
  //updateSpotify();
})

$("#angry").on("click", function(event) {
	event.preventDefault();
	console.log('angry button press');
	$('#player').html('<iframe src="https://embed.spotify.com/?uri=spotify:user:spotify:playlist:5Z9xJvDtHpB6m5zHgJC5zR" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
  //updateSpotify();
})

$("#relaxing").on("click", function(event) {
	event.preventDefault();
	console.log('relaxing button press');
  $('#player').html('<iframe src="https://embed.spotify.com/?uri=spotify:user:spotify:playlist:3InXOgDxJPeA05l6rQyDoe" width="300" height="380" frameborder="0" allowtransparency="true"></iframe');
  //updateSpotify();
})

$("#dance").on("click", function(event) {
	event.preventDefault();
	console.log('dance button press');
	$('#player').html('<iframe src="https://embed.spotify.com/?uri=spotify:user:sonymusicdenmark:playlist:10Yf6R2nSqXd3Puzvue5Gy" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
	//updateSpotify();
})

$("#time-to-sleep").on("click", function(event) {
	event.preventDefault();
	console.log('time to sleep button press');
	$('#player').html('<iframe src="https://embed.spotify.com/?uri=spotify:user:spotify:playlist:5HY9yBxrUMhng4sRgA9Xcg" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
  	//updateSpotify();
})



//start youtube search

$("#customSearch").on('click', function(event) {
	event.preventDefault();
  console.log('search button press');
  search();
})
  // Search for a specified string.
function search() {
  //$('.youtube').html('<iframe src="https://embed.spotify.com/?uri=spotify:user:spotify:playlist:5HY9yBxrUMhng4sRgA9Xcg" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
  //clear past results
  //$("#player").empty();

  //get form input
  q = $("#userSearch").val().trim();

  //run get request 
  $.get(
    "https://www.googleapis.com/youtube/v3/search",{
      part: 'snippet, id',
      q: q,
      type: 'video',
      key: 'AIzaSyAQXaaSnC8R-r-AQn4Utmj4jbVW61EmXfo'},
      function(data) {
        var nextPageToken = data.nextPageToken;
        var previousPageToken = data.previousPageToken;
        console.log(data);

        $.each(data.items, function(i, item) {
          var output = getOutput(item);

          //display results
          $("#player").html(output);

        });

        //var buttons = getButtons(previousPageToken, nextPageToken);

        //display buttons
        //$('#buttons').append(buttons);


      }
  ); 

  function getOutput(item) {
    var videoId = item.id.videoId;
    var title = item.snippet.title;
    var description = item.snippet.description;
    var thumb = item.snippet.thumbnails.high.url;
    var channelTitle = item.snippet.channelTitle;
    var videoDate = item.snippet.publishedAt;

//$('.youtube').html('<iframe src="https://embed.spotify.com/?uri=spotify:user:spotify:playlist:5HY9yBxrUMhng4sRgA9Xcg" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');

    // build output stream
    var output = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '?autoplay=1" frameborder="0" allowfullscreen></iframe>'; 
    /*
    var output = '<li>' + 
    '<div class = "list-left">' +
    '<img src="' + thumb + '">' +
    '</div>' +
    '<div class="list-right">' +
    '<h3>' + title + '</h3>' +
    '<small>By <span class="cTitle">' + channelTitle + '</span> on ' + videoDate + '</small>' +
    '<p>' + description + '</p>' +
    '</div>' +
    '</li>' +
    '<div class="clearfix"></div>' +
    '';
*/
    return output;
  };
};
  
// end youtube api search