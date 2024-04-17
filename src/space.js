import * as Carousel from './modules/carousel.js'
import * as dataNasaAPI from './modules/apiNASA.js'
import * as dataAstronomyAPI from './modules/apiAstronomy.js';
import * as DOM from './modules/dom.js';




dataNasaAPI.getHeroImage();
dataAstronomyAPI.astronomyAPI();
setTimeout(function() {
    Carousel.spinning(false);
}, 3000);

document.querySelector('.prev').addEventListener('click', Carousel.previouseSlide);
document.querySelector('.next').addEventListener('click',Carousel.nextSlide)
debugger
DOM.stopBtn.addEventListener('click', function(e){
    Carousel.spinning(true)
});