  //setup an on click event to sign out the user
 $('#sign-out').on('click', function() {
   console.log('working');
   firebase.auth().signOut();
   var href = 'index.html';
   window.location = href;
 })



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
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;

   // var user = firebase.auth().currentUser.displayName;
   // console.log('displayName 2 ' + user);

   // At the initial load, get a snapshot of the current data.
   database.ref('/users/' + displayName).on("value", function(snapshot) {

   console.log('value added ' + snapshot.val());

  //If any errors are experienced, log them to console.
   }, function(errorObject) {
          console.log("The read failed: " + errorObject.code);
      });

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
    var temperature = 0;
    queryURL = "http://api.openweathermap.org/data/2.5/weather?" + "q=" + searchLocation + "&units=imperial&appid=" + APIKey;

      function checkTemperature() {
        if (temperature < 39) {
          console.log("temp lower than 39");
          $(".youtube").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/gpW7iYfuGDU?autoplay=1" frameborder="0" allowfullscreen></iframe>');
        } else if (temperature > 40 && temperature < 60) {
          console.log('temp greater than 40 and less than 60');
          $(".youtube").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/g04EtOyVeHY?autoplay=1" frameborder="0" allowfullscreen></iframe>');
        } else if (temperature > 59 && temperature < 90) {
          console.log('temp greater than 59 and less than 90');
          $(".youtube").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/tSU_NlNHP0c?autoplay=1" frameborder="0" allowfullscreen></iframe>');
        } else if (temperature > 90) {
          console.log('temp greater than 90');
          $(".youtube").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/Wd2qRSzCj84?autoplay=1" frameborder="0" allowfullscreen></iframe>');
        }
      }

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) {
        console.log(queryURL);
        console.log(response);

         var searchName = $('#selectedLocation').val().trim().toLowerCase();
         var name = response.name.toLowerCase();

        var temp = response.main.temp;
        console.log('temp ' + temp);

        var prec = response.weather[0].main;
        console.log('precipitation ' + prec);

        var lati = response.coord.lat;
        console.log('latitude ' + lati);

        var long = response.coord.lon;
        console.log('longitude ' + long);

        temperature = response.main.temp;
        //create a temporary object to hold new playlist data

        var newPlaylist = {
          city: name,
          temperature: temp,
          precipitation: prec,
          latitude: lati,
          longitude: long
        }

         //use underscore to compare entered name and search result
         var nameTest = _.isEqual(searchName, name);


         //conditional to check it the response name matches the entered name
         if(!nameTest) {
            $(".main-table").toggleClass("hidden");
            $("#alert-modal").modal("show");
            //alert('invalid city, please try again');
         }

         // This conditional triggers when the rendered city name matches the city name entered
         else {
                  checkTemperature();

              // Transfer content to HTML
              $(".city").html("<h1>" + response.name + " Weather Details</h1>");
              $(".wind").html("Wind Speed: " + response.wind.speed);
              $(".humidity").html("Humidity: " + response.main.humidity);
              $(".temp").html("Temperature (F): " + response.main.temp);
              $(".rain").html("Precipitation: " + response.weather[0].main);

              // Save the new city in Firebase
              database.ref('/users/' + displayName).push(newPlaylist);
         } 

         //function for AJAX 404       
      }).fail(function(error) {
        //modal goes here
        $(".main-table").toggleClass("hidden");
        $("#alert-modal").modal("show");
        //alert('Invalid city, please try again');
         });
  }); 

   
 //set up an event to append the data to the screen when a child is added to the database
 database.ref('/users/' + displayName).on('child_added', function(childSnapshot) {

  //store everything into variables
  var city = childSnapshot.val().city;
  var temp = childSnapshot.val().temperature;
  var prec = childSnapshot.val().precipitation;
  var lat = childSnapshot.val().latitude;
  var lon = childSnapshot.val().longitude;


  //append the user data to the table
  $('.table').append('<tr><td>' + city + '</td><td>' + temp + '</td><td>' + prec + '</td><td>'
   + lat + '</td><td>' + lon + '</td></tr>');

 })

  } else {
    // User is signed out.
    // ...
  }
});

//   $('button').on('click', function() {   
//    console.log($(this).attr('id'));
 //  })

