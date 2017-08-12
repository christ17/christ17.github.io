$(document).ready(function(){
  $('#diseases-dropdown').click(function(){
    menuResolveConflict('diseases','about');
  });
  $('#about-dropdown').click(function(){
    menuResolveConflict('about','diseases');
  });
  function menuResolveConflict(id1, id2) {
    $('#'+id1+'-dropdown').toggleClass('active-menu');
    if($('#'+id2+'-dropdown').hasClass('active-menu')){
      $('#'+id2+'-dropdown').removeClass('active-menu');
    }
    $('#'+id1+'-menu').toggleClass('display');
    if($('#'+id2+'-menu').hasClass('display')){
      $('#'+id2+'-menu').removeClass('display');
    }
  }
});
