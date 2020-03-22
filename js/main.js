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
      successModal = $('.success')
      successClose = $('.success__close')

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
  
  successClose.on('click', function () {
    successModal.removeClass('success--visible');
  });
  document.addEventListener('keyup', function(event) {
    if(event.keyCode===27){
      successModal.removeClass('success--visible');
    }
  })
  $(document).mouseup(function (e){ 
    var successDialog = $('.success__dialog');
		if (!successDialog.is(e.target) && successDialog.has(e.target).length === 0) { // и не по его дочерним элементам
      successModal.removeClass('success--visible'); // скрываем его
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

    //Валидация формы

    $('.modal__form').validate({
      errorClass: "invalid",
      rules: {
        // simple rule, converted to {required:true}
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userPhone: 'required',
        // compound rule
        userEmail: {
          required: true,
          email: true
        }
      },
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя не короче 2 букв",
          maxlength: "Имя не длиннее 15 букв"
      },
        userPhone: "Телефон обязателен",
        userEmail: {
        required: "Email обязательно",
        email: "Введите в формате: name@domain.com"
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            successModal.addClass('success--visible');
            $(form)[0].reset();
            modal.removeClass('modal--visible');
          },
          error: function (response) {
            console.log('Ошибка запроса ' + response);
            }
        });
      }
    });
    //И снова здарова
    
    $('.footer__form').validate({
      rules: {
        // simple rule, converted to {required:true}
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userPhone: 'required',
        // compound rule
        userEmail: {
          required: true,
          email: true
        }
      },
      errorClass: "invalid",
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя не короче 2 букв",
          maxlength: "Имя не длиннее 15 букв"
      },
        userPhone: "Телефон обязателен",
        userEmail: {
        required: "Email обязательно",
        email: "Введите в формате: name@domain.com"
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            successModal.addClass('success--visible');
            $(form)[0].reset();
            console.log(userName);
          }
        });
      }
    });
    $('.control__form').validate({
      rules: {
        // simple rule, converted to {required:true}
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userPhone: 'required',
        // compound rule
        userEmail: {
          required: true,
          email: true
        }
      },
      errorClass: "invalid",
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя не короче 2 букв",
          maxlength: "Имя не длиннее 15 букв"
      },
        userPhone: "Телефон обязателен",
        userEmail: {
        required: "Email обязательно",
        email: "Введите в формате: name@domain.com"
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            successModal.addClass('success--visible');
            $(form)[0].reset();
          }
        });
      }
    });

    //Маска для телефона

    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(___) ___-__-__"});

});



