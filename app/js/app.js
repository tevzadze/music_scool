// import Scene from '../libs/tree/scene';
import $ from 'jquery'
window.jQuery = $
window.$ = $
import 'magnific-popup'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import FontFaceObserver from "fontfaceobserver";
// import imagesLoaded from "imagesLoaded";
// import * as THREE from 'three';


gsap.registerPlugin(ScrollTrigger);


document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	//ampty account
	let coursesCards = document.querySelectorAll('.logon_card')
	let emptyBlock = document.querySelector('.empty')
	if (coursesCards.length > 0) {
		emptyBlock.classList.remove('active')
	}
	//accoun dropdown
	let accountIcon = document.querySelector('.right-part-element:nth-child(2)')
	let dropdown = document.querySelector('.account_dropdown')
	if (accountIcon != null ) {
		accountIcon.addEventListener('click', function (e) {
			e.preventDefault()
			dropdown.classList.toggle('active')

		})
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
	let questions = document.querySelectorAll('.openQuestion')
	let answers = document.querySelectorAll('.contentQuestion')

	for (let i = 0; i < questions.length; i++) {
		questions[i].addEventListener('click', function () {
			answers[i].classList.toggle('active')
			questions[i].classList.toggle('active')
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


	//video play button function
	let playButton = document.querySelectorAll('.play')
	let videos = document.querySelectorAll('video')

	for (let i = 0; i < playButton.length; i++) {
		playButton[i].addEventListener('click', function () {
			videos[i].setAttribute("controls", "controls")
			videos[i].play()
			playButton[i].classList.add('inactive')
		})
	}

	//video scale
	let heroVideo = document.querySelector('.hero-section-video')
	if (document.querySelector('main').classList.contains('home')) {
		gsap.to(heroVideo, {
			scale: 1.2,
			duration: .3,
			scrollTrigger: {
				trigger: heroVideo,
				scrub: true,
				start: 'top bottom',
				end: 'center center',
				// marks: true
			}
		})
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
		if (inViewport(marks, 100, 100) && !marks.classList.contains('visible')) {
			marks.classList.add('visible')
			// console.log('marks move')
		} else if (!inViewport(marks, 100, 100) && marks.classList.contains('visible')) {
			marks.classList.remove('visible')
			// console.log('marks reset')
		}
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

})

// function animscene() {

// 	const scene = new Scene("anim-container");

// 	// helper functions
// 	const MathUtils = {
// 		// map number x from range [a, b] to [c, d]
// 		map: (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c,
// 		// linear interpolation
// 		lerp: (a, b, n) => (1 - n) * a + n * b
// 	};

// 	// body element
// 	const body = document.body;
// 	let IMAGES;

// 	// calculate the viewport size
// 	let winsize;
// 	const calcWinsize = () =>
// 		(winsize = { width: window.innerWidth, height: window.innerHeight });
// 	calcWinsize();
// 	// and recalculate on resize
// 	window.addEventListener("resize", calcWinsize);

// 	window.onbeforeunload = function () {
// 		window.scrollTo(0, 0);
// 	};

// 	// scroll position and update function
// 	let docScroll;
// 	const getPageYScroll = () =>
// 		(docScroll = window.pageYOffset || document.documentElement.scrollTop);
// 	window.addEventListener("scroll", getPageYScroll);

// 	// Item
// 	class Item {
// 		constructor(el, scroll) {
// 			// the .item element
// 			this.scroll = scroll;
// 			this.DOM = { el: el.img };
// 			this.currentScroll = docScroll;
// 			this.animated = false;
// 			this.isBeingAnimatedNow = false;
// 			this.shouldRollBack = false;
// 			this.shouldUnRoll = false;
// 			this.positions = [];

// 			// set the initial values
// 			this.getSize();
// 			this.mesh = scene.createMesh({
// 				width: this.width,
// 				height: this.height,
// 				src: this.src,
// 				image: this.DOM.el,
// 				iWidth: this.DOM.el.width,
// 				iHeight: this.DOM.el.height
// 			});
// 			scene.scene.add(this.mesh);
// 			// use the IntersectionObserver API to check when the element is inside the viewport
// 			// only then the element translation will be updated
// 			this.intersectionRatio;
// 			let options = {
// 				root: null,
// 				rootMargin: "0px",
// 				threshold: [0, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
// 			};
// 			this.observer = new IntersectionObserver(entries => {
// 				entries.forEach(entry => {
// 					this.positions.push(entry.boundingClientRect.y);
// 					let compareArray = this.positions.slice(
// 						this.positions.length - 2,
// 						this.positions.length
// 					);
// 					let down = compareArray[0] > compareArray[1] ? true : false;

// 					this.isVisible = entry.intersectionRatio > 0.0;

// 					this.shouldRollBack = false;
// 					this.shouldUnRoll = false;
// 					if (
// 						entry.intersectionRatio < 0.5 &&
// 						entry.boundingClientRect.y > 0 &&
// 						this.isVisible &&
// 						!down
// 					) {
// 						this.shouldRollBack = true;
// 					}

// 					if (
// 						entry.intersectionRatio > 0.5 &&
// 						entry.boundingClientRect.y > 0 &&
// 						this.isVisible
// 					) {
// 						this.shouldUnRoll = true;
// 					}
// 					console.log(this.isVisible, 'vis');
// 					this.mesh.visible = this.isVisible;
// 				});
// 			}, options);
// 			this.observer.observe(this.DOM.el);
// 			// init/bind events
// 			window.addEventListener("resize", () => this.resize());
// 			this.render(0);
// 		}

// 		getSize() {
// 			// get all the sizes here, bounds and all
// 			const bounds = this.DOM.el.getBoundingClientRect();
// 			const fromTop = bounds.top;
// 			const windowHeight = window.innerHeight;
// 			const withoutHeight = fromTop - windowHeight;
// 			const withHeight = fromTop + bounds.height;
// 			this.insideTop = withoutHeight - docScroll;
// 			this.insideRealTop = fromTop + docScroll;
// 			this.insideBottom = withHeight - docScroll + 50;
// 			this.width = bounds.width;
// 			this.height = bounds.height;
// 			this.left = bounds.left;
// 		}
// 		resize() {
// 			// on resize rest sizes and update the translation value
// 			this.getSize();
// 			this.mesh.scale.set(this.width, this.height, 200);
// 			this.render(this.scroll.renderedStyles.translationY.current);
// 			this.scroll.shouldRender = true;
// 		}

// 		render(currentScroll) {
// 			this.currentScroll = currentScroll;
// 			this.mesh.position.y =
// 				currentScroll + winsize.height / 2 - this.insideRealTop - this.height / 2;
// 			this.mesh.position.x = 0 - winsize.width / 2 + this.left + this.width / 2;

// 		}
// 	}

// 	// SmoothScroll
// 	class SmoothScroll {
// 		constructor() {
// 			this.shouldRender = false;
// 			// the <main> element
// 			this.DOM = { main: document.querySelector("main") };
// 			// the scrollable element
// 			// we translate this element when scrolling (y-axis)
// 			this.DOM.scrollable = this.DOM.main.querySelector("div[data-scroll]");
// 			// the items on the page
// 			this.items = [];

// 			this.createItems();
// 			this.listenMouse()

// 			// here we define which property will change as we scroll the page
// 			// in this case we will be translating on the y-axis
// 			// we interpolate between the previous and current value to achieve the smooth scrolling effect
// 			this.renderedStyles = {
// 				translationY: {
// 					// interpolated value
// 					previous: 0,
// 					// current value
// 					current: 0,
// 					// amount to interpolate
// 					ease: 0.1,
// 					// current value setter
// 					// in this case the value of the translation will be the same like the document scroll
// 					setValue: () => docScroll
// 				}
// 			};
// 			// set the body's height
// 			this.setSize();
// 			// set the initial values
// 			this.update();
// 			// the <main> element's style needs to be modified
// 			this.style();
// 			// init/bind events
// 			this.initEvents();
// 			// start the render loop
// 			requestAnimationFrame(() => this.render());
// 		}

// 		listenMouse() {
// 			document.addEventListener('mousemove', () => {
// 				this.shouldRender = true;
// 			})
// 		}


// 		update() {
// 			// sets the initial value (no interpolation) - translate the scroll value
// 			for (const key in this.renderedStyles) {
// 				this.renderedStyles[key].current = this.renderedStyles[
// 					key
// 				].previous = this.renderedStyles[key].setValue();
// 			}
// 			// translate the scrollable element
// 			this.setPosition();
// 			this.shouldRender = true;
// 		}
// 		setPosition() {
// 			// translates the scrollable element
// 			if (
// 				Math.round(this.renderedStyles.translationY.previous) !==
// 				Math.round(this.renderedStyles.translationY.current) ||
// 				this.renderedStyles.translationY.previous < 10
// 			) {
// 				this.shouldRender = true;
// 				this.DOM.scrollable.style.transform = `translate3d(0,${-1 *
// 					this.renderedStyles.translationY.previous}px,0)`;
// 				// console.log(this.items);
// 				for (const item of this.items) {
// 					// if the item is inside the viewport call it's render function
// 					// this will update the item's inner image translation, based on the document scroll value and the item's position on the viewport
// 					if (item.isVisible || item.isBeingAnimatedNow) {
// 						item.render(this.renderedStyles.translationY.previous);
// 					}
// 				}
// 			}
// 			;
// 			if (scene.targetSpeed > 0.01) this.shouldRender = true;

// 			if (this.shouldRender) {
// 				this.shouldRender = false;
// 				scene.render();
// 			}

// 		}
// 		setSize() {
// 			// set the heigh of the body in order to keep the scrollbar on the page
// 			// console.log(this.DOM.scrollable.scrollHeight, 'HEIGHT');
// 			body.style.height = `${this.DOM.scrollable.scrollHeight}px`;
// 		}

// 		createItems() {
// 			IMAGES.forEach(image => {
// 				if (image.img.classList.contains("js-image")) {
// 					this.items.push(new Item(image, this));
// 				}
// 			});
// 		}

// 		style() {
// 			// the <main> needs to "stick" to the screen and not scroll
// 			// for that we set it to position fixed and overflow hidden
// 			this.DOM.main.style.position = "fixed";
// 			this.DOM.main.style.width = this.DOM.main.style.height = "100%";
// 			this.DOM.main.style.top = this.DOM.main.style.left = 0;
// 			this.DOM.main.style.overflow = "hidden";
// 		}
// 		initEvents() {
// 			// on resize reset the body's height
// 			window.addEventListener("resize", () => this.setSize());
// 		}
// 		render() {
// 			// update the current and interpolated values
// 			for (const key in this.renderedStyles) {
// 				this.renderedStyles[key].current = this.renderedStyles[key].setValue();
// 				this.renderedStyles[key].previous = MathUtils.lerp(
// 					this.renderedStyles[key].previous,
// 					this.renderedStyles[key].current,
// 					this.renderedStyles[key].ease
// 				);
// 			}
// 			// and translate the scrollable element
// 			this.setPosition();

// 			// loop..
// 			requestAnimationFrame(() => this.render());
// 		}
// 	}

// 	/***********************************/
// 	/********** Preload stuff **********/

// 	// const fontParalucent = new FontFaceObserver("laca-text").load()/
// 	// const fontStarling = new FontFaceObserver("operetta-12").load()

// 	// Preload images
// 	const preloadImages = new Promise((resolve, reject) => {
// 		imagesLoaded(document.querySelectorAll("img"), { background: true }, resolve);
// 	});

// 	preloadImages.then(images => {
// 		IMAGES = images.images;
// 	});

// 	const preloadEverything = [preloadImages];

// 	// And then..
// 	Promise.all(preloadEverything).then(() => {
// 		// Remove the loader
// 		document.body.classList.remove("loading");
// 		document.body.classList.add("loaded");
// 		// Get the scroll position
// 		getPageYScroll();
// 		// Initialize the Smooth Scrolling
// 		new SmoothScroll();
// 	});
// }
// animscene()

// function myTry() {
// 	const scene = new THREE.Scene();
// 	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 	const renderer = new THREE.WebGLRenderer();
// 	renderer.setSize(window.innerWidth, window.innerHeight);
// 	document.body.appendChild(renderer.domElement);
// 	let TEXTURE = new THREE.TextureLoader().load('../images/dist/lines3.png');
// 	// let mesh = new Mesh(
// 	// 	new PlaneBufferGeometry(),
// 	// 	new MeshBasicMaterial({ map: TEXTURE })
// 	// )
// 	const geometry = new THREE.PlaneBufferGeometry(5,20,32)
// 	const material = new THREE.MeshBasicMaterial({ map: TEXTURE })
// 	const item = new THREE.Mesh(geometry, material);

// 	scene.add(item);

// 	camera.position.z = 5;
// 	function animate() {
// 		requestAnimationFrame(animate);

// 		// item.rotation.x += 0.01;
// 		// item.rotation.y += 0.01;

// 		renderer.render(scene, camera);

// 	}
// 	animate();

// }
// myTry()