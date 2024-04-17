import * as Carousel from './modules/carousel.js'
import * as dataNasaAPI from './modules/apiNASA.js'
import * as dataAstronomyAPI from './modules/apiAstronomy.js';
import * as DOM from './modules/dom.js';
import  {currentDateAndTime} from './modules/module-1.js';




dataNasaAPI.getHeroImage();
dataAstronomyAPI.astronomyAPI();
dataAstronomyAPI.planetaryPositions()

dataAstronomyAPI.initializeWidgets();

setTimeout(function() {
    Carousel.spinning(false);
}, 3000);

DOM.dateMoonPhase.value = currentDateAndTime();


document.querySelector('.prev').addEventListener('click', Carousel.previousSlide);
document.querySelector('.next').addEventListener('click',Carousel.nextSlide)

DOM.stopBtn.addEventListener('click', function(e){
    Carousel.spinning(true)
});

