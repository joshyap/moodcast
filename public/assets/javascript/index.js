var headerColor = Math.floor(Math.random() * 7)+1;

if (headerColor === 1) {
  $(".header").css("background", "rgba(101, 44, 144, 1)");
  $(".show-left-drawer").css("background", "rgba(101, 44, 144, 1)");
  $(".main-table").css("background", "rgba(101, 44, 144, 1)")
}
else if (headerColor === 2) {
  $(".header").css("background", "rgba(0, 167, 157, 1)");
  $(".show-left-drawer").css("background", "rgba(0, 167, 157, 1)");
  $(".main-table").css("background", "rgba(0, 167, 157, 1)")
}
else if (headerColor === 3) {
  $(".header").css("background", "rgba(212, 20, 90, 0.7)");
  $(".show-left-drawer").css("background", "rgba(212, 20, 90, 0.7)");
  $(".main-table").css("background", "rgba(212, 20, 90, 0.7)")
}
else if (headerColor === 4) {
  $(".header").css("background", "rgba(147, 39, 143, 1)");
  $("#title").css("color", "333");
  $("#slogan").css("color", "333");
  $(".show-left-drawer").css("background", "rgba(147, 39, 143, 1)");
  $(".main-table").css("background", "rgba(147, 39, 143, 1)")
}
else if (headerColor === 5) {
 $(".header").css("background", "rgba(158, 0, 93, 1)");
 $(".show-left-drawer").css("background", "rgba(158, 0, 93, 1)");
 $(".main-table").css("background", "rgba(158, 0, 93, 1)")
}
else if (headerColor === 6) {
 $(".header").css("background", "rgba(253, 185, 19, 1)");
 $(".show-left-drawer").css("background", "rgba(253, 185, 19, 1)");
 $(".main-table").css("background", "rgba(253, 185, 19, 1)")
}
else if (headerColor === 7) {
 $(".header").css("background", "rgba(43, 57, 144, 1)");
 $(".show-left-drawer").css("background", "rgba(43, 57, 144, 1)");
 $(".main-table").css("background", "rgba(43, 57, 144, 1)")
}


  $('#menu').click(function(){
    $(this).toggleClass('open');
  });



function moods (){

  var mainTable = $(".main-table")

  $(".mood-buttons").toggle();
  $(".search").toggle();
  

  $("#menu").on("click", function(){
    mainTable.velocity({translateX:['5%', '-100%']});

    $(".main-table").toggleClass("hidden");
  
  });

    

    $("#weather").click(function(){
      $(".mood-buttons").hide(500);
      $(".search").hide(500);
      $(".weather-selector").show(500);
      //$("#box").html("");
        //$("#box").append($(".weather-selector"));
    });
    $("#mood-button").click(function(){
      $(".weather-selector").hide(500);
      $(".search").hide(500);
      setTimeout(function(){
       $(".mood-buttons").show(500);
      }, 300);
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




