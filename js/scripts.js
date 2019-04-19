var title = $('#title');
var subtitle = $('#subtitle');
var action = $('#action');
var up = $(".backToTop");
var mission = $("#mission");
var events = $("#events");
var eventsList = $(".event");

$(document).ready(function() {
  title.hide();
  subtitle.hide();
  action.hide();
  up.hide();
  eventsList.hide();

  title.fadeIn(500);
  subtitle.fadeIn(1500);
  action.fadeIn(2000);

  up.click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
  });
});

$(document).on('scroll', function() {
  if ($(this).scrollTop() >= mission.position().top - 100) {
    up.fadeIn(1000);
  } else {
    up.fadeOut(1000);
  }

  if ($(this).scrollTop() >= events.position().top - 500) {
     $.each(eventsList, function(i, val){
       eventsList.eq(i).fadeIn(1500 * (i+1));
     })
  }
})
