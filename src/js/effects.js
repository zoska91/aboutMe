const start = setTimeout(() => {
  $(".icons").addClass("on-effect");
  $(".links").addClass("on-effect");
  $(".header-button").addClass("on-effect");
}, 200);

$(document).on("scroll", function() {
  const WindowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();

  //header

  if (scrollValue < WindowHeight / 2) $(".header-button").addClass("on-effect");
  else $(".header-button").removeClass("on-effect");

  if (scrollValue < WindowHeight / 2) $(".icons").addClass("on-effect");
  else $(".icons").removeClass("on-effect");

  if (scrollValue < WindowHeight / 2) $(".links").addClass("on-effect");
  else $(".icons").removeClass("on-effect");

  //aboutMe
  const articleFromTop = $("article").offset().top;
  if (scrollValue > articleFromTop - WindowHeight)
    $("article").addClass("on-effect");
  else $("article").removeClass("on-effect");

  const photoFromTop = $(".photo").offset().top;
  if (scrollValue > photoFromTop - WindowHeight)
    $(".photo").addClass("on-effect");
  else $(".photo").removeClass("on-effect");

  //projects
  const filtersFromTop = $(".filters").offset().top;
  if (scrollValue > filtersFromTop - WindowHeight)
    $(".filters").addClass("on-effect");
  else $(".filters").removeClass("on-effect");

  $(function() {
    const projects = [...document.querySelectorAll(".project")];

    $.each(projects, function(index, place) {
      const projectPlaceFromTop = $(this).offset().top;
      const projectPlaceHeight = $(this).outerHeight();

      if (scrollValue > projectPlaceFromTop - WindowHeight) {
        $(this).addClass("on-effect");
      }
    });
  });
});
