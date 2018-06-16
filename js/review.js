$(document).ready(function(){

    if ($('#review_1').is(':checked')){
      $('.map-1').css("display","none");
      $('.map-2').css("display","block");
      $('.map-3').css("display","none");
    }

    $('#review_1').click(function(){
      $('.map-1').css("display","block");
      $('.map-2').css("display","none");
      $('.map-3').css("display","none");
    })

    $('#review_2').click(function(){
      $('.map-1').css("display","none");
      $('.map-2').css("display","block");
      $('.map-3').css("display","none");
    })

    $('#review_3').click(function(){
      $('.map-1').css("display","none");
      $('.map-2').css("display","none");
      $('.map-3').css("display","block");
    })
});

