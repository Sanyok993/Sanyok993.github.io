
window.onload = function() {


// let price = document.getElementsByClassName("price")[0],
//     burger = document.getElementsByClassName("header_burger")[0],
//     wrap = document.getElementsByClassName("header_body")[0];


// window.addEventListener("resize", function() {
//         console.log(innerWidth);
//         // console.log(innerHeight);
// 		if(innerWidth < 768) {
// 			wrap.insertBefore(price, burger);
// 		} else {
// 			wrap.insertBefore(burger, price);
// }
//     }, false);


$(document).ready(function() {
	$(".header-top__menu-burger").click(function(event) {
		$(".header-top__menu-burger").toggleClass("active");
		// $("body").toggleClass("lock");
	})
})

$(document).ready(function() {
	// $(".block_title").click(function(event) {
	// 	$(this).toggleClass("displayNone displayBlock").find(".show_menu_body").slideToggle(300);
	// });

	$(".header-top__menu-burger").click(function(event) {
		$(".header-top__header-burger-menu").toggleClass("show_block");
	});

	// $(".block_title").click(function(event) {
	// 	$(".show_menu_body").toggleClass("show_block");	
	// }).children().click(function(event){        // вешаем на потомков
 //        event.stopPropagation();   // предотвращаем всплытие
 //    });;
	// $(".block_title").click(function(event) {
	// 	$(".block_title").toggleClass("show_arrow_bottom");
	// }).children().click(function(event){        // вешаем на потомков
 //        event.stopPropagation();   // предотвращаем всплытие
 //    });;
});

// $(window).resize(function(event) {
// 	var w = $(window).outerWidth();
// 	// var w = $(window).outerHeight();
// 	if (w < 1300) {
// 		$(".link_c").css({
// 			"width": w /8+(30),
// 			"height": w /8+(30)
// 		});
// 	} else {
// 		$(".link_c").css({
// 			"width": "200",
// 			"height": "200"
// 		});
// 	}
// })
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
};