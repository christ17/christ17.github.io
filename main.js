$(document).ready(function(){
  $(window).scroll(function(){
    var height = $('.header').height();
    if($(this).scrollTop() >= height){
      $(".fixed").addClass("fixed-top");
      $(".body > .content").addClass("fixed-bottom");
    }
    else {
      $(".fixed").removeClass("fixed-top");
      $(".body > .content").removeClass("fixed-bottom");
    }
  });
  $(".toggle-collapse").click(function(){
    $(".fixed li").css("display", "block");
    $("#collapse").slideToggle(800);
  });
});
