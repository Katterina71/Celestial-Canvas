import * as Carousel from './modules/carousel.js'
import * as dataNasaAPI from './modules/apiNASA.js'
import * as dataAstronomyAPI from './modules/apiAstronomy.js';
import * as DOM from './modules/dom.js';
import  {currentDateAndTime} from './modules/module-1.js';




dataNasaAPI.getHeroImage();
DOM.dateMoonPhase.value = currentDateAndTime()[0];
DOM.dateCelestialObjects.value = currentDateAndTime()[0];
DOM.timeCelestialObjects.value = currentDateAndTime()[1];

// DOM.dateStartCelestialEvent.value = currentDateAndTime()[0];
// DOM.dateEndCelestialEvent.value = currentDateAndTime()[0];
// DOM.timeCelestialEvent.value = currentDateAndTime()[1];



dataAstronomyAPI.initializeWidgets();
dataAstronomyAPI.planetaryPositions();
// dataAstronomyAPI.celestialEvents();

setTimeout(function() {
    Carousel.spinning(false);
}, 3000);



document.querySelector('.prev').addEventListener('click', Carousel.previousSlide);
document.querySelector('.next').addEventListener('click',Carousel.nextSlide)

DOM.stopBtn.addEventListener('click', function(e){
    Carousel.spinning(true)
});

DOM.btnMoonPhase.addEventListener('click',Carousel.createMoonWidget)
DOM.btnCelestialObjects.addEventListener('click',Carousel.generateCelestialBody);
// DOM.btnCelestialEvent.addEventListener('click',dataAstronomyAPI.celestialEvents)