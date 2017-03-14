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

  var mainTable = $(".main-table")

  $(".mood-buttons").toggle();
  $(".search").toggle();
  

  $(".show-left-drawer").on("click", function(){
   // $(".main-table").toggle();
   
      mainTable.velocity({translateX:['5%', '-100%']});
    
      
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




