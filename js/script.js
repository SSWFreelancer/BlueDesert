$(document).ready(function (event) {
   $('.slider-wrapper').slick({
      arrows: true,
      dots: false,
      autoplay:false,
      infinite:false,
      slidesToShow: 1,
      fade:true,
      adaptiveHeight:true,
      touchThreshold:50,
      speed: 600,    
      prevArrow:'.slider-arrowprev',
      nextArrow:'.slider-arrownext',
   }); 
   $('.vacancies__link').click(function(e){
      e.preventDefault();
      var vacancy = $(this).closest('.vacancies__item').attr('data-vacancy')
      $('.vacancy-descr').removeClass('active');
      $('.vacancy-descr[data-vacancy='+vacancy+']').addClass('active')
   });
   $('.header__burger').click(function(e){
      $(this).toggleClass('active');
      $('.menu').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.menu__link').click(function(e){
      $(this).parent().toggleClass('active');
      $(this).parent().find('ul').toggleClass('active');
   });
   $('.menu__sublist a').click(function(e){
      $('.header__burger, .menu').removeClass('active');
      $('body').removeClass('lock');
   });


   $(window).trigger('resize');
});
$(window).resize(function() {
   $('.benefits__download').each(function(e){
      $(this).parent().parent().css('margin-bottom', $(this).height()/2 + 110);
      $(this).css('margin-top', -$(this).height()/2 + 25);
   });
});

function readURL(input) {
   if (input.files && input.files[0]) {
       var reader = new FileReader();
       reader.onload = function (e) {
           $('.vacancy-descr__upload label span').html(input.files[0].name);
       };
       reader.readAsDataURL(input.files[0]);
   }
};
