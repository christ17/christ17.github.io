var slideIndex = 1;
$(document).ready(function(){
  $(window).scroll(function(){
    var height = $("[class$='header-section']").height();
    if($(this).scrollTop() >= height){
      $("#navbar").css("position", "fixed");
      $('a[href="#donate"]').css({"position": "fixed", "top": "67vh"});
      $(".body").css("margin-top", "100px");
    }
    else {
      $("#navbar").css("position", "relative");
      $('a[href="#donate"]').css({"position": "absolute", "top": "167vh"});
      $(".body").css("margin-top", "0px");
    }
    if($("#opportunities-menu").css("display") == "block"){
      var margin = parseInt($(".body").css("margin-top"));
      margin += $("#opportunities-menu").outerHeight();
      $(".body").css("margin-top", margin+"px");
    }
  });
  $('a[href^="#"]').click(function(event) {
    var target = $(this.getAttribute('href'));
    event.preventDefault();
    $('html, body').animate({scrollTop: target.offset().top - 100}, 800);
  });
  $("#menu-button").click(function(){
    if($("#menu-button > i").hasClass("fa-bars")) {
      toggleMenu("fa-bars", "fa-times");
    }
    else {
      toggleMenu("fa-times", "fa-bars");
    }
  });
  $("#opportunities-dropdown").click(function(){
    var margin = parseInt($(".body").css("margin-top"));
    if($("#opportunities-menu").css("display") == "none"){
      $("#opportunities-menu").css("display", "block");
      margin += $("#opportunities-menu").outerHeight();
    }
    else {
      $("#opportunities-menu").css("display", "none");
      margin -= $("#opportunities-menu").outerHeight();
    }
    $(".body").css("margin-top", margin+"px");
  });
  $("#slide-left").click(function(){
    slider(-1);
  });
  $("#slide-right").click(function(){
    slider(1);
  });
});
function toggleMenu(current, desired) {
  $("#menu-button > i").removeClass(current);
  $("#menu-button > i").addClass(desired);
  $("#navbar > .container > nav"). toggleClass("display-menu");
};
function slider(value) {
  $("#mission > div:nth-child(" + (2 + slideIndex) + ")").css("display", "none");
  slideIndex += value;
  if(slideIndex == 0) slideIndex = 4;
  else if(slideIndex == 5) slideIndex = 1;
  $("#mission > div:nth-child(" + (2 + slideIndex) + ")").css("display", "block");
}
