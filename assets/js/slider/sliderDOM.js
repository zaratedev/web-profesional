
import Slider from './slider';

let slider = new Slider( {
	elements: [
		{
			title: 'Lorem ipsum',
			subtitle: 'Ipsum',
			image: '../public/images/1.jpeg',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem sequi, hic ut, dolore maxime omnis molestias earum recusandae. Commodi est et debitis quis ea numquam eos officia rem incidunt alias.'
		},
		{
			title: 'Lorem ipsum',
			subtitle: 'Ipsum',
			image: '../public/images/3.jpeg',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem sequi, hic ut, dolore maxime omnis molestias earum recusandae. Commodi est et debitis quis ea numquam eos officia rem incidunt alias.'
		}
	],
	animationFunc: function( element ) {
		console.log( element )
	}
});


