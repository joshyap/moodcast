
// This is our API key
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    // Here we are building the URL we need to query the database
    //var queryURL = "http://api.openweathermap.org/data/2.5/weather?" + "q=Bujumbura,Burundi&units=imperial&appid=" + APIKey;
    //var searchLocation = $("#selectedLocation").val().trim();
    var searchLocation = "houston";
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?" + "q=" + searchLocation + "&units=imperial&appid=" + APIKey;
//start of button
$("#btnSelectLocation").on("click", function(event) {
  event.preventDefault();
  searchLocation = $("#selectedLocation").val().trim();
  //console.log("Location: " + searchLocation);
  queryURL = "http://api.openweathermap.org/data/2.5/weather?" + "q=" + searchLocation + "&units=imperial&appid=" + APIKey;
  //console.log(queryURL);
//});
/*
          $(".city").html("<h1>" + response.name + " Weather Details</h1>");
          console.log("City: " + response.name);
          $(".wind").html("Wind Speed: " + response.wind.speed);
          console.log("Wind speed: " + response.wind.speed);
          $(".humidity").html("Humidity: " + response.main.humidity);
          console.log("Humidity: " + response.main.humidity);
          $(".temp").html("Temperature (F) " + response.main.temp);
          console.log("Temperature: " + response.main.temp);
*/
//end of button
    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) {
        // Log the queryURL
        console.log(queryURL);
        // Log the resulting object
        console.log(response);
        // Transfer content to HTML
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").html("Wind Speed: " + response.wind.speed);
        $(".humidity").html("Humidity: " + response.main.humidity);
        $(".temp").html("Temperature (F): " + response.main.temp);
        $(".rain").html("Precipitation: " + response.weather[0].main);
        // Log the data in the console as well
        //console.log("Wind Speed: " + response.wind.speed);
        //console.log("Humidity: " + response.main.humidity);
        //console.log("Temperature (F): " + response.main.temp);
  
        });
      }); 






var headerColor = Math.floor(Math.random() * 7)+1;

if (headerColor === 1) {
  $(".header").css("background", "rgba(101, 44, 144, 1)");
  $(".show-left-drawer").css("background", "rgba(101, 44, 144, 1)");
  //$(".depth").css("color", "rgba(101, 44, 144, 1)")
}
else if (headerColor === 2) {
  $(".header").css("background", "rgba(0, 167, 157, 1)");
  $(".show-left-drawer").css("background", "rgba(0, 167, 157, 1)");
  //$(".depth").css("color", "rgba(0, 167, 157, 1)")
}
else if (headerColor === 3) {
  $(".header").css("background", "rgba(212, 20, 90, 0.7)");
  $(".show-left-drawer").css("background", "rgba(212, 20, 90, 0.7)");
  //$(".depth").css("color", "rgba(212, 20, 90, 0.7)")
}
else if (headerColor === 4) {
  $(".header").css("background", "rgba(147, 39, 143, 1)");
  $("#title").css("color", "333");
  $("#slogan").css("color", "333");
  $(".show-left-drawer").css("background", "rgba(147, 39, 143, 1)");
 // $(".depth").css("color", "rgba(147, 39, 143, 1)")
}
else if (headerColor === 5) {
 $(".header").css("background", "rgba(158, 0, 93, 1)");
 $(".show-left-drawer").css("background", "rgba(158, 0, 93, 1)");
 //$(".depth").css("color", "rgba(158, 0, 93, 1)")
}
else if (headerColor === 6) {
 $(".header").css("background", "rgba(253, 185, 19, 1)");
 $(".show-left-drawer").css("background", "rgba(253, 185, 19, 1)");
// $(".depth").css("color", "rgba(253, 185, 19, 1)")
}
else if (headerColor === 7) {
 $(".header").css("background", "rgba(43, 57, 144, 1)");
 $(".show-left-drawer").css("background", "rgba(43, 57, 144, 1)");
// $(".depth").css("color", "rgba(43, 57, 144, 1)")
}




function moods (){

  $(".mood-buttons").toggle();
  $(".search").toggle();
  $(".main-table").toggle()

  $(".show-left-drawer").on("click", function(){
   // $(".main-table").toggle();
  $(".main-table").velocity({translateX:['5%', '-100%']});

});


    $("#weather").click(function(){
      $(".weather-selector").show(500);
      $(".mood-buttons").hide(500);
      $(".search").hide(500);
      //$("#box").html("");
        //$("#box").append($(".weather-selector"));
    });
    $("#mood-button").click(function(){
       $(".mood-buttons").show(500);
      $(".weather-selector").hide(500);
      $(".search").hide(500);
      //$("#box").html("");
      //$("#box").append($(".mood-buttons"));
    });
    $("#custom-search").click(function(){
      $(".search").show(500);
      $(".mood-buttons").hide(500);
      $(".weather-selector").hide(500);
      //$("#box").html("");
      //$("#box").append($(".search"));
    })

};

moods();




