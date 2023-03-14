


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: black'].join(';');
var message = 'Developed by KotoFeelGood Arkada-Studio https://arkada-web.ru/';
console.info('%c%s', styles, message);



$(document).ready(function() {
	const btns = document.querySelectorAll('.btn')

	btns.forEach(el => {
			el.addEventListener('click', function(e) {
					let
							size = Math.max(this.offsetWidth, this.offsetHeight),
							x = e.offsetX - size / 2,
							y = e.offsetY - size / 2,
							wave = this.querySelector('.wave')
	
					// Create an element if it doesn't exist
					if (!wave) {
							wave = document.createElement('span')
							wave.className = 'wave'
					}
					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
					this.appendChild(wave)
			})
	})
})



// const btnSubmit = document.querySelectorAll('button[type="submit"]')
// Array.from(btnSubmit).map((item) => {
// 	item.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		succes('.succes')
// 	})
// })


// function allDefautAnim(bottom = false, start = '-=30% center', end = 'bottom') {
// 	const paralaxWrapper = Array.from(document.querySelectorAll('.sec_anim')).map(function(el) {
// 		const arr = Array.from(el.querySelectorAll('.el_anim')).map(function (item, index) {
// 			const tl = gsap.timeline();
// 			ScrollTrigger.create({
// 				animation: tl,
// 				trigger: el,
// 				start: start,
// 				end: end,
// 				ease: 'none',
// 			})
// 			tl.fromTo(item, {
// 				y: 100, 
// 				duration: .4,
// 				autoAlpha: 0,
// 			}, {
// 				y: 0,
// 				autoAlpha: 1,
// 				delay: 0.1 + (0.1 * index),
// 			});
// 		});
// 	});
// }

// function popupForms(pr) {

// 	let popupForms = document.querySelector('.callback')
// 	let popupFormsTrigger = document.querySelectorAll('.btn_popup')
// 	let popupFormsClose = document.querySelectorAll('.remove_popup')
// 	let popupFormsSubmit = popupForms.querySelector('button[type="submit"]')
// 	const burgerPopup = document.querySelector('.burger')
	
// 	Array.from(popupFormsTrigger).map((item) => {
// 		item.addEventListener('click', () => {
// 			popupForms.classList.add('active');
// 			win.style.overflow = "hidden";
// 			win.style.paddingRight = pr; 
// 			burgerPopup.classList.remove('active')
// 		})
// 	})


// 	Array.from(popupFormsClose).map((item) => {
// 		item.addEventListener('click', () => {
// 			popupForms.classList.remove('active')
// 			win.style.overflow = "";
// 			win.style.paddingRight = ""; 
// 		})
// 	})

// 	popupFormsSubmit.addEventListener('click', () => {
// 		popupForms.classList.remove('active')
// 		win.style.overflow = "";
// 		win.style.paddingRight = ""; 
// 		succes('.succes')
// 	})
// }








$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})



async function maps(street, city, size) {

	function init() {
		const geocoder = ymaps.geocode(`${street} ${city}`);
		geocoder.then(
			async function (res) {
				var myMapMobile = await new ymaps.Map('map', {
						center: res.geoObjects.get(0).geometry.getCoordinates(),
						zoom: 16,
					}, {
						searchControlProvider: 'yandex#search'
					}),
					myPlacemark = new ymaps.Placemark(myMapMobile.getCenter(), {
						balloonContent: `${street} ${city}`
					}, {
						iconLayout: 'default#image',
						iconImageHref: '/i/global/map.svg',
						iconImageSize: size,
						iconImageOffset: [-5, -38]
					});

				myMapMobile.geoObjects
					.add(myPlacemark)
				myMapMobile.behaviors.disable('scrollZoom')
			}
		);
	}
	await ymaps.ready(init);

}

















































