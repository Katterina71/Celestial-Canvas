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


