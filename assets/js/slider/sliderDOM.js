
import Slider from './slider';
import elements from './elements';
import Preloader from '../preloader/preloader';

let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-title");
let sliderSubTitle = document.querySelector("#slider-subtitle");
let sliderImage = document.querySelector("#slider-image");
let textContent = document.querySelector("#slider-text-content");
let sliderWeb = document.querySelector("#slider-web");

let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");

let slider = new Slider( {
	elements,
	animationFunc: function( element ) {
		textContent.classList.add("hide");
		sliderImage.classList.add("hide");

		setTimeout( function () {
			sliderTitle.innerHTML = element.title;
			sliderSubTitle.innerHTML = element.subtitle;
			sliderImage.src = element.image;
			sliderText.innerHTML = element.text;
			sliderWeb.innerHTML = element.site;
			sliderWeb.href = element.url;

			textContent.classList.remove("hide");
			sliderImage.classList.remove("hide");

		}, 600);

	},
	speed: 7000
});

slider.play();


leftArrow.addEventListener('click', slider.prev);
rightArrow.addEventListener('click', slider.next);

const imagePaths = elements.map( el => el.image );

Preloader.preloadImages({
	images: imagePaths,
	completed: function(){
		document.querySelector(".controls").style.display = "block";
	}
});
