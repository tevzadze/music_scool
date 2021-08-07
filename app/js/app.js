import $ from 'jquery'
window.jQuery = $
window.$ = $
import 'magnific-popup'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);


document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	//empty account
	let coursesCards = document.querySelectorAll('.logon_card')
	let emptyBlock = document.querySelector('.empty')
	if (coursesCards.length > 0) {
		emptyBlock.classList.remove('active')
	}
	//accoun dropdown
	let accountIcon = document.querySelector('.hm-inner-icon')
	let dropdown = document.querySelector('.account_dropdown')
	if (accountIcon != null) {
		accountIcon.addEventListener('click', function (e) {
			e.preventDefault()
			dropdown.classList.toggle('active')

		})
		$(document).bind('click', function (e) {
			if (!$(e.target).parents().hasClass('hm-inner') && dropdown.classList.contains('active')) {
				dropdown.classList.remove('active')
			};
		});
	}

	//preloader function
	let preloader = document.querySelector('.preloader')

	window.onload = function () {
		setTimeout(function () {
			document.body.classList.add('loaded2');
			setTimeout(function () {
				preloader.remove()
			}, 300)
		}, 1200);
	}


	//offset from bottom of viewport
	function inViewport(item, min, max) {
		let y = item.getBoundingClientRect().top
		let itemHeight = item.getBoundingClientRect().height
		let wh = window.innerHeight
		let bot = (-(y - wh)) - itemHeight / 2
		let top = y + itemHeight / 2

		if (bot > min & top > max) {
			return true
		} else {
			return false
		}
	}

	//faq function


	//footer open function
	let footerOpen = document.querySelectorAll('.openFooter')
	let footerClose = document.querySelectorAll('.contentFooter')

	for (let i = 0; i < footerOpen.length; i++) {
		footerOpen[i].addEventListener('click', function () {
			footerClose[i].classList.toggle('active')
			footerOpen[i].classList.toggle('active')
		})
	}

	//open chars

	function openOsChars() {
		let osButtons = document.querySelectorAll('.os span')
		let osWrappers = document.querySelectorAll('.os-list')
		let closeButton = document.querySelectorAll('.os-list .close')
		for (let i = 0; i < osButtons.length; i++) {
			osButtons[i].addEventListener('click', function () {

				if (!osButtons[i].classList.contains('active')) {
					for (let i = 0; i < osButtons.length; i++) {
						osWrappers[i].classList.remove('active')
						osButtons[i].classList.remove('active')
					}
					osWrappers[i].classList.add('active')
					osButtons[i].classList.add('active')
				} else {
					for (let i = 0; i < osButtons.length; i++) {
						osWrappers[i].classList.remove('active')
						osButtons[i].classList.remove('active')
					}
				}
			})
			closeButton[i].addEventListener('click', function () {
				osButtons[i].classList.remove('active')
				osWrappers[i].classList.remove('active')
			})
		}
	}
	openOsChars()
	
	let questions = document.querySelectorAll('.openQuestion')
	let answers = document.querySelectorAll('.contentQuestion')

	for (let i = 0; i < questions.length; i++) {
		questions[i].addEventListener('click', function () {
			answers[i].classList.toggle('active')
			questions[i].classList.toggle('active')
		})
	}



	//video play button function
	let playButton = document.querySelectorAll('.play')
	let videos = document.querySelectorAll('video')

	for (let i = 0; i < playButton.length; i++) {
		playButton[i].addEventListener('click', function () {
			videos[i].setAttribute("controls", "controls")
			videos[i].play()
			playButton[i].classList.add('inactive')
		})
		videos[i].onended = () => {
			// console.log('finish')
			videos[i].load()
			videos[i].removeAttribute("controls", "controls")
			playButton[i].classList.remove('inactive')
		}
	}

	//enroll-sctoll-button

	let enrollLink = document.querySelector('.enrollButton')
	if (enrollLink) {
		enrollLink.addEventListener("click", clickHandler);
	}
	function clickHandler(e) {
		e.preventDefault();
		const href = this.getAttribute("href");
		const offsetTop = document.querySelector(href).offsetTop;

		scroll({
			top: offsetTop,
			behavior: "smooth"
		});
	}



	//inview animations
	let marks = document.querySelector('.advantages-section-pics')
	let nameIsStan = document.querySelector('.story-section-text')
	let myStory = document.querySelector('.roll-block')
	let cariculum = document.querySelectorAll('.lesson-section-main-element')

	window.addEventListener('scroll', function () {
		//cariculum animation 
		if (!document.querySelector('main').classList.contains('home')) {
			return;
		}
		for (let i = 0; i < 2; i++) {

			if (inViewport(cariculum[i], -200, -200)) {
				cariculum[i].classList.add('visible')
			} else if (cariculum[i].classList.contains('visible')) {
				cariculum[i].classList.remove('visible')
			}
		}
		// my name is..
		if (inViewport(nameIsStan, -200, -200) && !myStory.classList.contains('visible')) {
			myStory.classList.add('visible')
			// console.log('adddded')
		} else if (!inViewport(nameIsStan, -220, -220) && myStory.classList.contains('visible')) {
			myStory.classList.remove('visible')
		}

		//Big marks
		// if (inViewport(marks, 100, 100) && !marks.classList.contains('visible')) {
		// 	marks.classList.add('visible')
		// 	// console.log('marks move')
		// } else if (!inViewport(marks, 100, 100) && marks.classList.contains('visible')) {
		// 	marks.classList.remove('visible')
		// 	// console.log('marks reset')
		// }
	})

	//popup function



	if ($('.popup-with-move-anim').length > 0) {
		$('.popup-with-move-anim').magnificPopup({
			type: 'inline',

			fixedContentPos: true,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: true,
			preloader: false,

			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-slide-bottom'
		});
	}

	$('#small-dialog .button-wrapper').on("click", function () {
		// preventDefault();
		$.magnificPopup.close();
	});

	//lesson page, all cours show

	let courseButton = document.querySelector('.courses-sidebar-toggler')
	let courseList = document.querySelector('.lesson-left')

	if (courseButton != null) {
		courseButton.addEventListener('click', () => {
			courseList.classList.toggle('active')
			courseButton.classList.toggle('active')
			document.body.classList.toggle('modal-active');
		})
	}

})
