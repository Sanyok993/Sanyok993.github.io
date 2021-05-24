
window.onload = function() {

	$(document).ready(function() {

		$(".header-top__menu-burger").click(function(event) {
			$(".header-top__menu-burger").toggleClass("active");
			$(".header-top__header-burger-menu").toggleClass("show_block");
			$("body").toggleClass("lock");
		});

	});

	$(window).resize(function(event) {
		adaptive_function();
	});

	function adaptive_header(w, h) {
		if (w <= 992) {
			if(!$(".header-top__column_move-one").hasClass("done")){
				$(".header-top__column_move-one").addClass("done").appendTo($(".header-top__header-burger-menu-wrap"));
			}
			if(!$(".header-top__column_move-two").hasClass("done")){
				$(".header-top__column_move-two").addClass("done").appendTo($(".header-top__header-burger-menu-wrap"));
			}
		} else {
			if($(".header-top__column_move-one").hasClass("done")){
				$(".header-top__column_move-one").removeClass("done").prependTo($(".container_flex"));
			}
			if($(".header-top__column_move-two").hasClass("done")){
				$(".header-top__column_move-two").removeClass("done").appendTo($(".container_flex"));
				$(".header-top__menu-burger").appendTo($(".container_flex"));
			}
		}
	}

	function adaptive_function() {
		var w = $(window).outerWidth();
		var h = $(window).outerHeight();
		adaptive_header(w, h);
	}

	adaptive_function();

	// Инициализация
	$('#calendar').datepicker({
		dateFormat: 'dd / mm / yyyy'
	})

		$('#calendar').focus(function() {
			$('.calendar-wrap').children('span').css({
				'transform' : 'translateY(-50%) rotate(0deg)'
			})
		})

	$('#calendar').blur(function() {
		$('.calendar-wrap').children('span').css({
			'transform' : 'translateY(-50%) rotate(180deg)'
		})
	})

	$('.form-book__select-input').on('focus', function() {
		$('.select-form').removeClass('hide-select-form');
		$('.input-select-wrap').children('span').css({
			'transform' : 'translateY(-50%) rotate(0deg)'
		})
	})

	$('.select-form').children('li').on('click', function(event) {
		// console.log($(this).text());

			$('.form-book__select-input').val($(this).text());
			$('.select-form').addClass('hide-select-form');
			$('.input-select-wrap').children('span').css({
				'transform' : 'translateY(-50%) rotate(180deg)'
			})

	})

	$(document).mouseup(function (e){
		var div = $(".form-book__select-input"); 
		if (!div.is(e.target) && div.has(e.target).length === 0) { 
			$('.select-form').addClass('hide-select-form');
			$('.input-select-wrap').children('span').css({
				'transform' : 'translateY(-50%) rotate(180deg)'
			})
		}
	});

	// $('.form-book__select-input').on('blur', function() {
	// 	$('.select-form').addClass('hide-select-form');
	// })

	// Плавная прокрутка
	$(function(){
	  $('a[href^="#"]:not(a[href="#"])').on('click', function(event) {
	    // отменяем стандартное действие
	    event.preventDefault();
	    
	    var sc = $(this).attr("href"),
	        dn = $(sc).offset().top;
	    
	    // * sc - в переменную заносим информацию о том, к какому блоку надо перейти
	    // * dn - определяем положение блока на странице
	    
	    
	    $('html, body').animate({scrollTop: dn}, 1000);
	    
	    /*
	    * 1000 скорость перехода в миллисекундах
	    */
	  });
	});

	//image open
	$('.image-wrap__item').click(function(event){	// Событие клика на маленькое изображение
		  	event.preventDefault();
		  	var img = $(event.target).children('img');	// Получаем изображение, на которое кликнули
			var src = img.attr('src'); // Достаем из этого изображения путь до картинки
			$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
							 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
							 "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
							 "</div>"); 
			$(".popup").fadeIn(800); // Медленно выводим изображение
			$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
				$(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
				setTimeout(function() {	// Выставляем таймер
				  $(".popup").remove(); // Удаляем разметку всплывающего окна
				}, 800);
			});
		});
};