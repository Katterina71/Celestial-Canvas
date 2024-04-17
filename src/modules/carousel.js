import * as DOM from './dom.js'

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

export function previouseSlide(){

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