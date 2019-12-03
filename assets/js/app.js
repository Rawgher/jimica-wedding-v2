// function used to scroll down to the love story section
$("#loveButton").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#loveStory").offset().top
    },
    1000
  );
});
