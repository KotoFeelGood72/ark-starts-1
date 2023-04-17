


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
	modal();
	
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	if(windowWidth > mediaPoint1) {
		// smoothScroll();
		initRevSliders();
	} else {
		deleteBrSlideTxt();
		destroyRevSliders();
		showMoreText();
	}
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function hasScrollbar(el) {
	return el.scrollHeight > el.clientHeight;
}

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {
}

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



function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: black'].join(';');
var message = 'Developed by KotoFeelGood Arkada-Studio https://arkada-web.ru/';
console.info('%c%s', styles, message);







let randomAlert = true
const btnSubmit = document.querySelectorAll('input[type="submit"]')
Array.from(btnSubmit).map((item) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();

		if(randomAlert) {
			succes('.success')
			randomAlert = false
		} else {
			failed('.failed')
			randomAlert = true
		}
	})
})


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



function modal() {
	let popup = document.querySelectorAll('.popup')
	let btnArray = document.querySelectorAll('.trigger')
	
	btnArray.forEach((el) => {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			let path = e.currentTarget.dataset.target
			popup.forEach((el) => {
				if(el.dataset.id == path) {
					isOpen(el)
				}
			})
			
		})
	})
	

	popup.forEach((pop) => {
		let remove = pop.querySelectorAll('.remove')
		remove.forEach(el => {
			el.addEventListener('click', (e) => {
				isRemove(pop);
			})
		});
	})
}



function isOpen(popup) {
	popup.classList.add('active')
}

function isRemove(popup) {
	popup.classList.remove('active')
}







$(document).ready(function()  {
	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})





let revSliders = [];

function initRevSliders() {
  document.querySelectorAll('.reviews_slider').forEach(item => { 
		const revSlider = new Swiper(item, {
      spaceBetween: 30,
      speed: 700,
			grabCursor: true,
      navigation: {
				nextEl: '.next',
        prevEl: '.prev',
      },
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
					freeMode: false,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
					freeMode: false,
				},
				1024: {
					slidesPerView: 'auto',
					spaceBetween: 30
				}
			}
    });
    revSliders.push(revSlider);
  });
}

	function destroyRevSliders() {
		revSliders.forEach(item => {
			if (item !== null) {
				item.destroy();
			}
		});
		revSliders = [];
	}

	function deleteBrSlideTxt() {
		let txt = document.querySelectorAll('.reviews-txt')

		txt.forEach(el => {
			el.innerHTML = el.innerHTML.replace(/<br\s*\/?>/mg,"");
		});


	}

	function showMoreText() {
		let showMoreBlock = document.querySelectorAll('.showMoreBlock')
		Array.from(showMoreBlock).map((item) => {
			let showMoreBtn = item.querySelector('.showMoreBtn')
			let showMoreTxt = item.querySelector('.showMoreTxt')
	
			showMoreBtn.addEventListener('click', function() {
				showMoreTxt.classList.toggle('visible')
				if (showMoreTxt.classList.contains('visible')) {
					this.innerHTML = 'Скрыть';
				} else {
					this.innerHTML = 'Показать больше';
				}
			})
		})
	}

	$(window).on("scroll", function () {
		var scrolled = $(this).scrollTop();
		if( scrolled > 107 ) {
				$('.header').addClass('fixed');
		}   
		if( scrolled <= 107 ) {     
				$('.header').removeClass('fixed');
		}
	});

const menuLinks = document.querySelectorAll('nav li a');
function highlightActiveMenuItem() {
  const scrollPosition = window.scrollY;
  menuLinks.forEach((link) => {
    const targetElement = document.querySelector(link.hash);
    if (targetElement.offsetTop <= scrollPosition + 200 && targetElement.offsetTop + targetElement.offsetHeight > scrollPosition + 200) {
      link.closest('li').classList.add('active');
    } else {
      link.closest('li').classList.remove('active');
    }
  });
}

window.addEventListener('load', highlightActiveMenuItem);
window.addEventListener('scroll', highlightActiveMenuItem);

function smoothScrollTo(target) {
  const startPosition = window.pageYOffset;
  const targetPosition = target.offsetTop;
  const distance = targetPosition - startPosition;
  const duration = 500;
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const scrollY = startPosition + distance * (progress / duration);
    window.scrollTo(0, scrollY);
    if (progress < duration) window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}
menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.hash);
    smoothScrollTo(target);
  });
});
	


AOS.init({
  // Global settings:
  disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});





















































