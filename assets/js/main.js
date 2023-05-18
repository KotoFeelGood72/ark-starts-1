


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
	modal();
	loadVisibleContent();
	if(windowWidth < mediaPoint1) {
		shareOpen();
	}


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



// $(document).ready(function() {
// 	const btns = document.querySelectorAll('.btn')

// 	btns.forEach(el => {
// 			el.addEventListener('click', function(e) {
// 					let
// 							size = Math.max(this.offsetWidth, this.offsetHeight),
// 							x = e.offsetX - size / 2,
// 							y = e.offsetY - size / 2,
// 							wave = this.querySelector('.wave')

// 					if (!wave) {
// 							wave = document.createElement('span')
// 							wave.className = 'wave'
// 					}
// 					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
// 					this.appendChild(wave)
// 			})
// 	})
// })



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
	document.body.classList.add('fixed')
	popup.classList.add('active')
}

function isRemove(popup) {
	popup.classList.remove('active')
	document.body.classList.remove('fixed')
}








$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})






const aboutSlider = new Swiper('.about_slider', {
	navigation: {
		nextEl: '.about-next',
		prevEl: '.about-prev'
	},
	pagination: {
		el: '.about-pagination'
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 2.8,
			spaceBetween: 40,
		} 
	}
})

const educationSlider = new Swiper('.education_slider', {
	navigation: {
		nextEl: '.ed-next',
		prevEl: '.ed-prev'
	},
	pagination: {
		el: '.ed-pagination'
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 40,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		1200: {
			slidesPerView: 'auto',
			spaceBetween: 40,
		} 
	}
})


const reviewsSlider = new Swiper('.reviews_slider', {
	navigation: {
		nextEl: '.reviews-next',
		prevEl: '.reviews-prev'
	},
	pagination: {
		el: '.rev-pagination'
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 2,
			spaceBetween: 30,
		} 
	}
})


function shareOpen() {
	const share = document.querySelector('.social-popup')
	share.addEventListener('click', (e) => {
		if(share.classList.contains('active')) {
			share.classList.remove('active')
		} else {
			share.classList.add('active')
		}
	})
}

function loadVisibleContent() {
  let seoBlocks = document.querySelectorAll(".reviews_slide");

  Array.from(seoBlocks).forEach((seoBlock) => {
    let loadMoreButton = seoBlock.querySelector(".loadmore_txt");
    let smallBlock = seoBlock.querySelector(".reviews_txt");

		let countTxt = smallBlock.innerHTML.split(' ').join('').length 

		if(countTxt <= 210) {
			loadMoreButton.style.display = 'none'
		} else {
			loadMoreButton.style.display = 'flex'
		}
    smallBlock.classList.remove("visible");
		
    loadMoreButton.addEventListener("click", function () {
      if (smallBlock.classList.contains("visible")) {
        smallBlock.classList.remove("visible");
        loadMoreButton.querySelector("p").innerHTML = "Показать больше";
      } else {
        smallBlock.classList.add("visible");
        loadMoreButton.querySelector("p").innerHTML = "Скрыть";
      }
    });
  });
}



window.onscroll = function showHeader() {
	var header = document.querySelector('.header');
	if(window.pageYOffset > 100){
			header.classList.add('fixed');
	} else{
			header.classList.remove('fixed');
	}
}

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










































