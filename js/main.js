var swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
  });

$(function(){
  //modal pop-up
  $('.modal_close, .modal_close2').click(function(){
    $('#modal, .modal_box').fadeOut(400);
  });
})
  