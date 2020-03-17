/*
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  modatDialog = document.querySelector('modal__dialog')


  const switchModal = () => {
    modal.classList.toggle('modal--visible');}

    modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
    });  
    closeBtn.addEventListener('click', switchModal)
    document.addEventListener('keyup', function(event) {
      if(event.keyCode===27){
        modal.classList.remove('modal--visible');
      }
    })
    document.addEventListener('click', function(event) {
      let x = event.target.classList[1];
      if (x==='modal--visible'){
        switchModal();
      };
    });

  });
  */
$(document).ready(function () {
  var modal = $('.modal')
      modalBtn = $('[data-toggle=modal]');
      closeBtn = $('.modal__close');


  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.removeClass('modal--visible');
  });
  document.addEventListener('keyup', function(event) {
    if(event.keyCode===27){
      modal.removeClass('modal--visible');
    }
  })
  $(document).mouseup(function (e){ 
    var modalDialog = $('.modal__dialog');
		if (!modalDialog.is(e.target) && modalDialog.has(e.target).length === 0) { // и не по его дочерним элементам
      modal.removeClass('modal--visible'); // скрываем его
		}
	});
  $('.button').mouseup(function() { this.blur() });

  var btn = $('.button__scroll-up');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('button__scroll-up--show');
    } else {
      btn.removeClass('button__scroll-up--show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    })


    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination')

    next.css('left', prev.width() + 10 + bullets.width() + 10);
    bullets.css('left' , prev.width() + 10)

    new WOW().init();

});



