$(function(){
  $("a[href^='#']:not([href='#'])").click(function(){
    var target = $($(this).attr("href")).offset().top;
    target -=10;
    $("html,body").animate({scrollTop:target},500);
    return false;
  });

  $('.menubutton').on("click",function(){
    $(this).toggleClass('active');
    $('nav').toggleClass('active');
    $('.mask').toggleClass('active');
  });

  const swiper = new Swiper('.swiper',{  
  centeredSlides : true,
  loop: true,
  speed: 800,
  slidesPerView: 5, 
 });
});


