// wikipedia indígenas
function random(min, max){
	min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var Home = {

	mainImages: [
		'https://pib.socioambiental.org/images/povos/76983097518bfcf79468b.jpg',
		'https://pib.socioambiental.org/images/povos/14873561034e42db5ff41c8.jpg',
		'https://pib.socioambiental.org/images/povos/155235493054457896c7136.jpg'
	],

	init: () => {
		Home.mainImage();
	},

	mainImage: () => {
		document.getElementById('main-image').style.backgroundImage = `url('${Home.mainImages[random(0,3)]}')`;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	Home.init();
});