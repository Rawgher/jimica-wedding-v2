$(document).ready(function() {
  if ($(window).width() >= 1025) {
    var cruiseTop1 = $("#cruiseItinerary").offset().top;
    var cruiseTop2 = $("#bookingInfo").offset().top;
    var cruiseTop3 = $("#whatToBring").offset().top;
    var cruiseTop4 = $("#activities").offset().top;

    $(document).scroll(function() {
      var scrollPos = $(document).scrollTop();
      if (scrollPos >= cruiseTop1 && scrollPos < cruiseTop2) {
        $("#list-cruiseItinerary").css("color", "#A20519");
        $("#list-bookingInfo").css("color", "#000");
        $("#list-whatToBring").css("color", "#000");
        $("#list-activities").css("color", "#000");
      } else if (scrollPos >= cruiseTop2 && scrollPos < cruiseTop3) {
        $("#list-cruiseItinerary").css("color", "#000");
        $("#list-bookingInfo").css("color", "#A20519");
        $("#list-whatToBring").css("color", "#000");
        $("#list-activities").css("color", "#000");
      } else if (scrollPos >= cruiseTop3 && scrollPos < cruiseTop4) {
        $("#list-cruiseItinerary").css("color", "#000");
        $("#list-bookingInfo").css("color", "#000");
        $("#list-whatToBring").css("color", "#A20519");
        $("#list-activities").css("color", "#000");
      } else if (scrollPos >= cruiseTop4) {
        $("#list-cruiseItinerary").css("color", "#000");
        $("#list-bookingInfo").css("color", "#000");
        $("#list-whatToBring").css("color", "#000");
        $("#list-activities").css("color", "#A20519");
      }
    });
  }
  // function used to scroll down to the booking info section
  $("#bookingButton").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#bookingInfo").offset().top
      },
      1000
    );
  });

  // function used to scroll down to the what to bring section
  $("#bringButton").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#whatToBring").offset().top
      },
      1000
    );
  });

  // function used to scroll down to the activities section
  $("#activityButton").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#activities").offset().top
      },
      1000
    );
  });
});
