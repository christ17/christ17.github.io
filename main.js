$(document).ready(function(){
  $(".toggle-collapse").click(function(){
    $("#collapse").toggle(800);
    $(".fixed li").css("display", "block");
  });
});
