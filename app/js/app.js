import $ from 'jquery'
window.jQuery = $
window.$ = $
import 'magnific-popup'
import 'slick-carousel'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);


require('~/app/js/jquery.malihu.PageScroll2id.min.js')

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

	$("a[href*='#signup']").mPageScroll2id({
		offset: 100
	});
	
	// owl-carousel
	$('.slick-carousel').slick({
		infinite: true,
		autoplay: true,
  		autoplaySpeed: 3500,
		prevArrow: `<div class="students-main-review-content-text-bottom-switch_prev">
						<img src="images/dist/students-arrow.svg" alt="arrow">
						<span class="subtitle-1">Previous</span>
					</div>`,
		nextArrow: `<div class="students-main-review-content-text-bottom-switch_next">
						<span class="subtitle-1">Next</span>
						<img src="images/dist/students-arrow.svg" alt="arrow">
					</div>`
	});

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
			let parenDiv = playButton[i].parentElement
			
			let videoDiv = parenDiv.querySelector('video')
			console.log(videoDiv)
			videoDiv.setAttribute("controls", "controls")
			videoDiv.play()
			playButton[i].classList.add('inactive')
		})
		videos[i].onended = () => {
			videos[i].load()
			videos[i].removeAttribute("controls", "controls")
			playButton[i].classList.remove('inactive')
		}
	}

	//enroll-sctoll-button

	// let enrollLink = document.querySelector('.enrollButton')
	// if (enrollLink) {
	// 	enrollLink.addEventListener("click", clickHandler);
	// }
	// function clickHandler(e) {
	// 	e.preventDefault();
	// 	const href = this.getAttribute("href");
	// 	const offsetTop = document.querySelector(href).offsetTop;

	// 	scroll({
	// 		top: offsetTop,
	// 		behavior: "smooth"
	// 	});
	// }


	// about video
	let video = document.querySelector('.video-popup video')
	let watchWideo = document.querySelector('.watch-video')

	if(watchWideo) {
		watchWideo.addEventListener('click', () => {
			video.play()
			if (window.innerWidth < 480) {
				video.webkitEnterFullscreen()
			}
		})
	}


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
			mainClass: 'my-mfp-slide-bottom',
			callbacks: {
				close: function () {
					if(video) {
						video.pause()
					}
				}
				// e.t.c.
			}
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
