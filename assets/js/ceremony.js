$(document).ready(function() {
  var ceremonyTop1 = $("#dayOfItinerary").offset().top;
  var ceremonyTop2 = $("#bridalParty").offset().top;
  var ceremonyTop3 = $("#gettingThere").offset().top;

  $(document).scroll(function() {
    var scrollPos = $(document).scrollTop();
    if (scrollPos >= ceremonyTop1 && scrollPos < ceremonyTop2) {
      $("#list-dayOfItinerary").css("color", "#A20519");
      $("#list-bridalParty").css("color", "#000");
      $("#list-gettingThere").css("color", "#000");
    } else if (scrollPos >= ceremonyTop2 && scrollPos < ceremonyTop3) {
      $("#list-dayOfItinerary").css("color", "#000");
      $("#list-bridalParty").css("color", "#A20519");
      $("#list-gettingThere").css("color", "#000");
    } else if (scrollPos >= ceremonyTop3) {
      $("#list-dayOfItinerary").css("color", "#000");
      $("#list-bridalParty").css("color", "#000");
      $("#list-gettingThere").css("color", "#A20519");
    }
  });
});
