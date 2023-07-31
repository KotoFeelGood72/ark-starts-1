


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
	if(devStatus) {
		pageWidget(['index']);
		pageWidget(['news']);
		pageWidget(['article']);
		pageWidget(['policy']);
		pageWidget(['shop-cat']);
		pageWidget(['shop']);
		pageWidget(['cart']);
		pageWidget(['order']);
		pageWidget(['products']);
		pageWidget(['props']);
		pageWidget(['checkout']);
		pageWidget(['thanks']);
		getAllClasses('html', '.elements_list');
	}
	if($('.sort-filter select')) {
		selectFilter();
	}

	if($('.products')) {
		singleProductsSlider();
	}
	
	if($('.productCard_slide--img')) {
		productCardSlider();
	}

	if($('.products_quantity')) {
		setupQuantity();
	}

	if($('.cart-item')[0]) {
		removeProducts();
	}

	shopMenu();
	checkColor();
	modal();
});

$(window).on('load', function () {
	updateSizes();
	if(windowWidth < mediaPoint1) {
		mobilePopularSlider();
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



function selectFilter() {
	const select = document.querySelectorAll('.sort-filter select');
	const selectCollection = Array.from(select).map(item => new Choices(item, {
		searchEnabled: false,
		itemSelectText: '',
	}));
	

}


	
function productCardSlider() {
  var cards = document.querySelectorAll('.product-card');

  cards.forEach(function(card) {
    var images = [];
    var img = card.querySelector('.productCard_slide--img img');
    var triggers = card.querySelectorAll('.image-trigger');
    var pagination = card.querySelector('.pagination');

    triggers.forEach(function(trigger, index) {
      var imageURL = trigger.getAttribute('data-index');
      images.push(imageURL);

      trigger.addEventListener('mouseenter', function() {
        img.src = imageURL;
        setActiveBullet(pagination, index); // Устанавливаем активный буллет при наведении на триггер
      });

      trigger.addEventListener('mouseleave', function() {
        img.src = images[0];
        resetActiveBullet(pagination); // Сбрасываем активный буллет при отведении курсора от триггера
      });
    });
		if(pagination) {
			generatePagination(pagination, images, img);
		}
  });

  function generatePagination(pagination, images, img) {
    var paginationHTML = '';
    for (var i = 0; i < images.length; i++) {
      var bulletHTML = '<span class="pagination-bullet" data-index="' + i + '"></span>';
      paginationHTML += bulletHTML;
    }
		if(paginationHTML) {
			pagination.innerHTML = paginationHTML;
			var bullets = pagination.querySelectorAll('.pagination-bullet');
		}
		
    bullets.forEach(function(bullet, index) {
      bullet.addEventListener('mouseenter', function() {
        img.src = images[index];
        setActiveBullet(pagination, index); // Устанавливаем активный буллет при наведении на буллет
      });

      bullet.addEventListener('mouseleave', function() {
        img.src = images[0];
        resetActiveBullet(pagination); // Сбрасываем активный буллет при отведении курсора от буллета
      });

      bullet.addEventListener('click', function() {
        img.src = images[index];
        setActiveBullet(pagination, index); // Устанавливаем активный буллет при клике на буллет
      });
    });

    setActiveBullet(pagination, 0); // Устанавливаем активный буллет по умолчанию
  }

  function setActiveBullet(pagination, activeIndex) {
    var bullets = pagination.querySelectorAll('.pagination-bullet');
    bullets.forEach(function(bullet, index) {
      if (index === activeIndex) {
        bullet.classList.add('active');
      } else {
        bullet.classList.remove('active');
      }
    });
  }

  function resetActiveBullet(pagination) {
    var bullets = pagination.querySelectorAll('.pagination-bullet');
    bullets.forEach(function(bullet) {
      bullet.classList.remove('active');
    });
  }
}

function filteredRow() {
  const filterItems = document.querySelectorAll('.filter-item');

  document.addEventListener('click', (e) => {
    const isFilterItem = e.target.closest('.filter-item');

    if (!isFilterItem) {
      filterItems.forEach((item) => {
        item.classList.remove('active');
      });
    }
  });

  filterItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      let target = e.currentTarget;

      if (e.target.classList.contains('filter_item--head')) {
        if (target.classList.contains('active')) {
          target.classList.remove('active');
        } else {
          filterItems.forEach((item) => {
            item.classList.remove('active');
          });

          target.classList.add('active');
        }
      }
    });
  });
}

filteredRow();

// tabs
function tabs(link, block) {
	let linkSelector = $(link),
		blockSelector = $(block);

	$(linkSelector).on('click', function (e) {
		e.preventDefault();

		let $this = $(this),
			currentData = $(this).data('tab');

		$(blockSelector).removeClass('active_tab');
		$(linkSelector).removeClass('active_tab');

		$(block + '[data-tab="' + currentData + '"]').addClass('active_tab');
		$this.addClass('active_tab');

	});
}

tabs('.delivery_links>li', '.delivery-tabs>li');



function singleProductsSlider() {
	var galleryThumbs = new Swiper(".product_slider--thumb", {
		spaceBetween: 11,
		slidesPerView: 4,
		freeMode: false,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		watchOverflow: true,
		
		navigation: {
			prevEl: '.product-prev',
			nextEl: '.product-next'
		},
		breakpoints: {
			480: {
				direction: "horizontal",
				slidesPerView: 4
			},
			768: {
				direction: "horizontal",
				slidesPerView: 4
			},
			1200: {
				direction: "vertical",
				slidesPerView: 5,
				spaceBetween: 10,
			}
		},
	});
	var galleryTop = new Swiper(".product_slider ", {
		direction: "horizontal",
		spaceBetween: 10,
		navigation: {
			prevEl: '.product-prev',
			nextEl: '.product-next'
		},
		a11y: {
			prevSlideMessage: "Предыдущий слайд",
			nextSlideMessage: "Следущий слайд",
		},
		keyboard: {
			enabled: true,
		},
		thumbs: {
			swiper: galleryThumbs
		}
	});
}

function checkColor() {
	let colorCheck = document.querySelectorAll('.color-item')
	for(let i = 0; i < colorCheck.length; i++) {
		let color = colorCheck[i]
		if(color.style.backgroundColor == 'white') {
			color.classList.add('invert')
		}
	}

}


function shopMenu() {
  let burgerBTN = document.querySelectorAll('.btn-expand');
  let menus = document.querySelectorAll('.menu-expand');

  burgerBTN.forEach((btn, index) => {
    let menu = menus[index];
	
    btn.addEventListener('click', (e) => {
      if (menu.classList.contains('active')) {
        btn.classList.remove('active');
        menu.classList.remove('active');
      } else {
        btn.classList.add('active');
        menu.classList.add('active');
      }
    });
  });

  document.addEventListener('click', (e) => {
    burgerBTN.forEach((btn, index) => {
      let menu = menus[index];
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        btn.classList.remove('active');
        menu.classList.remove('active');
      }
    });
  });
}


function setupQuantity() {
  let quantityBlocks = document.querySelectorAll('.products_quantity');
	
  quantityBlocks.forEach((block) => {
		let qtyNotice = document.querySelector('.qty-notice')
    let minusBtn = block.querySelector('#qty-minus');
    let plusBtn = block.querySelector('#qty-plus');
    let inputField = block.querySelector('#qty-input');

    minusBtn.addEventListener('click', () => {
      let currentValue = parseInt(inputField.value);
			let minVal = inputField.getAttribute('min')
      if (currentValue > minVal) {
        inputField.value = currentValue - 1;
				qtyNotice.classList.remove('active')
      } else {
				qtyNotice.classList.add('active')
			}
    });

    plusBtn.addEventListener('click', () => {
      let currentValue = parseInt(inputField.value);
      inputField.value = currentValue + 1;
			
			qtyNotice.classList.remove('active')
    });
  });
}

function removeProducts() {

	let productsItem = document.querySelectorAll('.cart-item');

	let allClear = document.querySelector('.block_head--title a')


	productsItem.forEach((item) => {
		item.addEventListener('click', (e) => {
			if(e.target.classList.contains('delete-products')) {
				e.target.closest('.cart-item').remove();
				e.preventDefault();
				console.log('Good')
			}
		})
	})



	allClear.addEventListener('click', (e) => {
		e.preventDefault();
		productsItem.forEach((item) => {

			let deleteActive = item.querySelector('input[type="checkbox"]')
			if(deleteActive.checked) {
				deleteActive.parentNode.remove();
			}
		})
	})

}
function mobilePopularSlider() {

	let mobileSLider = new Swiper(".popular-slider", {
		spaceBetween: 20,
		breakpoints: {
			480: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			768: {
				spaceBetween: 20,
				slidesPerView: 2
			},
		},
		pagination: {
			el: '.popular-pagination'
		}
	});
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







const searchInputs = document.querySelectorAll('.search_input');
const resultsContainers = document.querySelectorAll('.search_result');
const hiddenSearchInputs = document.querySelectorAll('.searchHidden');

const showList = (city, search_term, results) => {
  const API_URL = `https://sunbeach.arkada-web-studio.ru/wp-json/wp/v2/${city}?per_page=100`;

  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      results.innerHTML = ""; // Обновление результатов для текущего поля
      data
        .filter((item) => {
          return item.name.toLowerCase().includes(search_term);
        })
        .forEach((e, i) => {
          const li = document.createElement("li");
          li.innerHTML = e.name;
          li.dataset.slug = e.slug;
          results.appendChild(li);
          results.classList.add('active');

          li.addEventListener('click', (e) => {
            const parentContainer = results.closest('.search-city-w');
            const relatedInput = parentContainer.querySelector('.search_input input');
            relatedInput.value = e.target.innerHTML;
            relatedInput.dataset.slug = e.target.dataset.slug;

            const relatedHiddenSearch = parentContainer.querySelector('.seachHidden');
            relatedHiddenSearch.value = e.target.dataset.slug;

            results.classList.remove('active');
          });
        });
    });
};

searchInputs.forEach((searchInput, index) => {
  const relatedResultsContainer = resultsContainers[index];

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      const search_term = event.target.value.toLowerCase();
      const city = event.target.dataset.type;

      if (search_term) {
        showList(city, search_term, relatedResultsContainer);
      } else {
        relatedResultsContainer.innerHTML = "";
        relatedResultsContainer.classList.remove('active');
      }
    });
  }
});









function limitInputLength(input, maxLength) {
	if (input.value.length > maxLength) {
		input.value = input.value.slice(0, maxLength);
	}
}




