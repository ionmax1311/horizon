

$(document).mouseup(function (e) {
    var container = $(".policy");
    if (container.has(e.target).length === 0) {
        container.fadeOut("slow");
        $('body').css('overflow-y', 'auto');
    }
});

$(".footer__policy-link").click(function () {
    $(".policy").fadeIn("slow");
    $('body').css('overflow-y', 'hidden');

});
$(".policy-close, .close-link-policy").click(function (event) {

    $(".policy").fadeOut("slow");
    $('body').css('overflow-y', 'auto');

});


$(".popup-close").click(function () {
    $(".popup-ver").fadeOut("slow");
    $("#errorLead").css('display', 'none');

});


/*-------hamburger------*/

var api = $('#but-menu');
api.click( function () {
  if($('.hamburger').hasClass('is-active')){
    $('.menu-wrap').css('display', 'none');
    // $('body').css('overflow-y', 'hidden');
    $('.hamburger').removeClass('is-active')
  }

  else {
   $('.menu-wrap').css('display', 'block');
   $('.hamburger').addClass('is-active');
 }
})


/*--------------scroll --------------*/

$("a.menu-link, a.logo-link").click(function() {
  $('.menu-wrap').css('display', 'none');
  $('.hamburger').removeClass('is-active')
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top - 60 + "px"
  }, {
    duration: 500,
    easing: "swing"
  });
  return false;
});


/*-------form -------------*/


$(".close-link-form").click(function(event) { 

  $(".form-popup").fadeOut("slow");


});

$(".button").click(function() { 
 // $('a.close').on('click', true);

  $(".form-popup").fadeIn("slow");

});


$(".presentation").click(function() { 
  $(".form-button").text("Запросить презентацию");

});

$(".profit .button").click(function() { 
  $(".form-button").text("Узнать подробнее");

});

$(".button-consultation").click(function() { 
  $(".form-button").text("Заказать консультацию");

});

$(".quarters .button").click(function() { 

  $(".form-button").text("Узнать стоимость");

});

// $(function() {
//     $(".quarters-item").click(function() {
//         $("q.uarters-item").removeClass("flat-big");         
//         $(this).toggleClass("flat-big");
//     })
// });