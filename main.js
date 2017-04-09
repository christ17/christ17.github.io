$(document).ready(function(){
  $(".toggle-collapse").click(function(){
    $("#collapse").slideToggle(800);
    $(".fixed li").css("display", "block");
  });
});
