$(document).ready(function(){
  var collapsed = true;
  $("#menu").click(function(){
    if(collapsed == true){
      $("#menu-collapse").css("display", "block");
      $("#menu > span").attr('class', 'fa fa-close');
      collapsed = false;
    }
    else {
      $("#menu-collapse").css("display", "none");
      $("#menu > span").attr('class', 'fa fa-bars');
      collapsed = true;
    }
  });
  $("nav > ul > li > a").click(function(){
    $("#menu-collapse").css("display", "none");
    $("#menu > span").attr('class', 'fa fa-bars');
    collapsed = true;
  });
});
