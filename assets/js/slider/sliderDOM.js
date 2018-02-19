
import Slider from './slider';

let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-title");
let sliderSubTitle = document.querySelector("#slider-subtitle");
let sliderImage = document.querySelector("#slider-image");

let textContent = document.querySelector("#slider-text-content");

let slider = new Slider( {
	elements: [
		{
			title: 'Lorem ipsum',
			subtitle: 'Ipsum',
			image: '../public/images/1.jpeg',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem sequi, hic ut, dolore maxime omnis molestias earum recusandae. Commodi est et debitis quis ea numquam eos officia rem incidunt alias.'
		},
		{
			title: 'Lorem ipsum 2',
			subtitle: 'Ipsum',
			image: '../public/images/3.jpeg',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem sequi, hic ut, dolore maxime omnis molestias earum recusandae. Commodi est et debitis quis ea numquam eos officia rem incidunt alias.'
		}
	],
	animationFunc: function( element ) {
		textContent.classList.add("hide");
		sliderImage.classList.add("hide");

		setTimeout( function () {
			sliderTitle.innerHTML = element.title;
			sliderSubTitle.innerHTML = element.subtitle;
			sliderImage.src = element.image;
			sliderText.innerHTML = element.text;

			textContent.classList.remove("hide");
			sliderImage.classList.remove("hide");

		}, 600);

	},
	speed: 5000
});

slider.play();
