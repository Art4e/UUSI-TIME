'use strict';
// document.querySelector('.menu-up__burger').addEventListener('click', function (ev) {
// 	ev.preventDefault();
// 	if (this.classList.contains('is-active')) {
// 		this.classList.remove('is-active');
// 		document.querySelector('.menu-down__nav').classList.remove('is-active');
// 	} else {
// 		this.classList.add('is-active');
// 		document.querySelector('.menu-down__nav').classList.add('is-active');
// 	};
// });
// document.querySelector('.footer__burger').addEventListener('click', function (ev) {
// 	ev.preventDefault();
// 	if (this.classList.contains('is-active')) {
// 		this.classList.remove('is-active');
// 		document.querySelector('.footer__nav').classList.remove('is-active');
// 	} else {
// 		this.classList.add('is-active');
// 		document.querySelector('.footer__nav').classList.add('is-active');
// 	};
// });

$(document).ready(function() {
	$('.menu-up__burger').click(function(event){
		$('.menu-down__nav').toggleClass('is-active')
	});
	$('.footer__burger').click(function(event){
		$('.footer__nav').toggleClass('is-active')
	});


	$('.blog').slick({
		arrows:true,
		slidesToShow:3,
		responsive:[
			{
				breakpoint: 930,
					settings: {
						dots:false,
						slidesToShow: 2,
						arrows:true
					}
			},
			{
				breakpoint: 600,
					settings: {
						dots:false,
						slidesToShow: 1,
						arrows:true
					}
			}
		]

	});
});