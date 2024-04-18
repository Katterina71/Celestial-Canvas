import * as DOM from './dom.js'
import * as dataAstronomyAPI from './apiAstronomy.js';
import {celestialBodiesArr} from './celestialBodies.js'

let run = true;

export function createItems (imgSrc,active) {
    const carousel = document.getElementById('carousel-inner');

    const divCarouselItem = document.createElement('div');
    divCarouselItem.classList.add('carousel-item');

    if (active=== true){ 
        divCarouselItem.classList.add('active');
    }

    const imgItem = document.createElement('img');
    imgItem.classList.add('d-block');
    imgItem.classList.add('w-100'); 
   
    imgItem.src = imgSrc;

    divCarouselItem.appendChild(imgItem);

    carousel.appendChild(divCarouselItem);
}


export function nextSlide(){
    const allDivs = document.querySelectorAll('.carousel-item');
    const divActive = Array.from(allDivs).find((div) => div.classList.contains('active'))
    divActive.classList.remove('active');
    
    const divPrev = divActive.previousElementSibling;
    if (divPrev) {
        divPrev.classList.add('active');
    }
    else {
        allDivs[allDivs.length-1].classList.add('active') 
    }
}

export function previousSlide(){

    const allDivs = document.querySelectorAll('.carousel-item');

    const divActive = Array.from(allDivs).find((div) => div.classList.contains('active'))
    divActive.classList.remove('active');
    
    const divNext = divActive.nextElementSibling;
    if (divNext) {
        divNext.classList.add('active');
    }
    else {
        allDivs[0].classList.add('active') 
    }
}


function changeIMG(){
    if (run === true) {
    const allDivs = document.querySelectorAll('.carousel-item');

    const divActive = Array.from(allDivs).find((div) => div.classList.contains('active'))
    divActive.classList.remove('active');
    
    const divNext = divActive.nextElementSibling;
    if (divNext) {
        divNext.classList.add('active');
    }
    else {
        allDivs[0].classList.add('active') 
    }

    setTimeout(function() {
        changeIMG()
    }, 150);
}
}

export function spinning(stop){
    if (stop===true) return run=false;
    else changeIMG();
}

export function moonPhase(srcMoon){
    const imgMoon = document.createElement('img');
    imgMoon.src = srcMoon;
    DOM.moonWidget.appendChild(imgMoon);
}


export function getValueMoonPhase(){
    let getValue = {
    date : DOM.dateMoonPhase.value,
    latitude : parseFloat(DOM.latitudeMoonPhase.value),
    longitude : parseFloat(DOM.longitudeMoonPhase.value)
};
    return getValue
}

function clear (object) {
    object.remove();
}

export function createMoonWidget (){
  
    clear(DOM.moonWidget.firstChild);
    dataAstronomyAPI.initializeWidgets();
}

export function listOfBodies (index, bodyName, element){
    const optionBody = document.createElement('option');
    optionBody.value = index;
    optionBody.innerHTML = bodyName;
    element.appendChild(optionBody);
} 

export function getCelestialObjects(){
    
    let getValue = {
    date : DOM.dateCelestialObjects.value,
    latitude : parseFloat(DOM.latitudeCelestialObjects.value),
    longitude : parseFloat(DOM.longitudeCelestialObjects.value),
    time: DOM.timeCelestialObjects.value,
    name : DOM.celestialObjects.options[DOM.celestialObjects.selectedIndex].text
};
    return getValue;
}

export function generateCelestialBody(){
 
        if (DOM.celestialBodyInfo.hasChildNodes()) {

    
                while (DOM.celestialBodyInfo.firstChild) {
                    DOM.celestialBodyInfo.removeChild(DOM.celestialBodyInfo.firstChild);
                }
     
            
        }
        if (DOM.bodyImg && DOM.bodyImg.firstChild) {
            clear(DOM.bodyImg.firstChild);
        }
    dataAstronomyAPI.bodyData();
} 



export function addCelestialBodyInfo(bodyData){
    const header = document.createElement('h2');
    header.textContent = bodyData.name;

    const fromEarthKm = document.createElement('p');
    fromEarthKm.textContent = "From Earth km: "+ bodyData.fromEarthKm;

    const fromEarthAu = document.createElement('p');
    fromEarthAu.textContent = "From Earth au: "+bodyData.fromEarthAu;

    const constellation = document.createElement('p');
    constellation.textContent = "Constellation: "+ bodyData.constellation;


    DOM.celestialBodyInfo.appendChild(header);
    DOM.celestialBodyInfo.appendChild(fromEarthKm);
    DOM.celestialBodyInfo.appendChild(fromEarthAu);
    DOM.celestialBodyInfo.appendChild(constellation);

   
    const imgBody = document.createElement('img');
    const imgSrc = celestialBodiesArr.find(element => element.name === bodyData.name)
    imgBody.src = imgSrc.src;
    imgBody.classList.add('imgCelestialBody')

    DOM.bodyImg.appendChild(imgBody);

}


export function getValueEvents() {

    let getValue = {
        fromDate : DOM.dateStartCelestialEvent.value,
        toDate : DOM.dateEndCelestialEvent.value,
        latitude : parseFloat(DOM.latitudeCelestialEvent.value),
        longitude : parseFloat(DOM.longitudeCelestialEvent.value),
        time: DOM.timeCelestialEvent.value,
        bodyId : DOM.celestialEvent.options[DOM.celestialEvent.selectedIndex].text
    };
        return getValue;
}


