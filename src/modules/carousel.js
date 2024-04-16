export function createItems (imgSrc) {
    const carousel = document.getElementById('carousel-inner');

    const divCarouselItem = document.createElement('div');
    divCarouselItem.classList.add('carousel-item');

    const imgItem = document.createElement('img');
    imgItem.classList.add('d-block');
    imgItem.classList.add('w-100'); 
    // imgItem.src = imgSrc;

    divCarouselItem.appendChild(imgItem);
    imgItem.src = imgSrc;
    carousel.appendChild(divCarouselItem);
}



