import * as Carousel from './modules/carousel.js'
import * as dataNasaAPI from './modules/apiNASA.js'
import * as dataAstronomyAPI from './modules/apiAstronomy.js';




dataNasaAPI.getHeroImage();
dataAstronomyAPI.astronomyAPI();


document.querySelector('.prev').addEventListener('click', Carousel.previouseSlide);
document.querySelector('.next').addEventListener('click',Carousel.nextSlide)

