

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD8HAo5CKnGXVBB0AzZXCQVKGedgyAOHF4",
    authDomain: "moodcast-dc7df.firebaseapp.com",
    databaseURL: "https://moodcast-dc7df.firebaseio.com",
    storageBucket: "moodcast-dc7df.appspot.com",
    messagingSenderId: "695358282175"
  };

  firebase.initializeApp(config);

var database = firebase.database();

      firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    console.log('displayName' + displayName);
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
});

// --------------------------------------------------------------
//var userId = firebase.auth().currentUser;
console.log('firebase.User ' + firebase.User);
console.log('firebase.displayName' + firebase.displayName);
// At the initial load, get a snapshot of the current data.
//database.ref('/users/' + userId).on("value", function(snapshot) {

  //console.log(snapshot.val());

  


  // If any errors are experienced, log them to console.
//}, function(errorObject) {
 // console.log("The read failed: " + errorObject.code);
//});

// --------------------------------------------------------------

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
        console.log(response.name);

         var searchName = $('#selectedLocation').val().trim().toLowerCase();
         var name = response.name.toLowerCase();


         //use underscore to compare entered name and search result
         var nameTest = _.isEqual(searchName, name);

        //conditional to check it the response name matches the entered name
        if(!nameTest) {
        alert('invalid city, please try again');
      }

         // This conditional triggers when the rendered city name matches the city name entered
      else {

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

      // Save the new city in Firebase
       // database.ref('/users/' + userId).push({
       // name: response.name,
      //  });
      }

  
        })
      //function for AJAX 404
      .fail(function(error) {
        alert('Invalid city, please try again');
      });
      }); 

   $('button').on('click', function() {
   
    console.log($(this).attr('id'));


    //database.ref()push({})
   })
