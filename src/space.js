import  {objectDate} from './modules/module-1.js'
import {createItems} from './modules/carousel.js'

const api_key = '?api_key=NcvxJtlOQd3JLSNfaoewTOzHrzLhtxIEbugLnuWB'

const heroImg = document.getElementById('heroIMG');
const todayDate= document.getElementById('todayDate');
const imgTitle= document.getElementById('imgTitle');
const explanation= document.getElementById('explanation');
const buttonDate = document.getElementById('button-addon2');
const getDate = document.getElementById('datePicker');
const earthCarousel = document.getElementById('earthCarousel');




(async function getHeroImage() {
const url = 'https://api.nasa.gov/planetary/apod'
try {
   const response = await fetch (url+api_key, {
        "method":"GET",
        
   })

   if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`); 
    }

   const todayData = await response.json();

   if (!todayData || !todayData.hdurl) {
    throw new Error('No data found!');
}

   todayData.hdurl;
   heroImg.src = todayData.hdurl;
   todayDate.innerHTML = todayData.date;
   imgTitle.innerHTML = todayData.title;
   explanation.innerHTML = todayData.explanation;

   getEpicImage('2024-04-10')
   return todayData; 
   
} catch (error) {
    console.error('Error fetching data:', error);
}
})();



async function getEpicImage(date) {
    const url = 'https://api.nasa.gov/EPIC/api/natural/images'
    const imgUrl='https://epic.gsfc.nasa.gov/archive/natural/'
    
    // const dataValue = "2024-04-10";
      
    const dataValue = date;
    console.log(dataValue);
    const dateObj = objectDate(dataValue);
    // console.log(dateObj);
try {
   
    const response = await fetch (url+api_key, {
        "method": "get"
    })
   

    if (!response.ok || response.status === '302'|| response.status === '301') {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const imageData = await response.json();

    if (imageData && imageData.length > 0) {
        let imageInfo = {};
        console.log(imageData);
        console.log(imageData[0]);
        imageData.forEach(element => {
            imageInfo[element.identifier] = element.image;
            let idimg = element.image; 
            let imageSrc = `${imgUrl}${dateObj.year}/${dateObj.month}/${dateObj.day}/png/${idimg}.png`; // Ensure imgUrl and dateObj are defined and correct
            console.log(imageSrc);
            debugger;
            // createItems(imageSrc);  

            const carousel = document.getElementById('carousel-inner');

            const divCarouselItem = document.createElement('div');
            divCarouselItem.classList.add('carousel-item');
            divCarouselItem.classList.add('active');
        
            const imgItem = document.createElement('img');
            imgItem.classList.add('d-block');
            imgItem.classList.add('w-100'); 
            imgItem.alt = imageSrc;
            imgItem.src = imageSrc;
       
            // imgItem.src = imgSrc;
        
            divCarouselItem.appendChild(imgItem);
     
            carousel.appendChild(divCarouselItem);

            // console.log(element.image, element.identifier);
        });
        

    } else {
        throw new Error('No data found!');
    }
        // const imageName = data[0].image;
        // const imageSrc = `${imgUrl}${dateObj.year}/${dateObj.month}/${dateObj.day}/png/${imageName}.png`;
        // document.getElementById("photo").src = imageSrc;
        // console.log(imageSrc);
}
catch (error){
    throw new Error ("Error fetching data!")
}
};


earthCarousel.addEventListener('click', function (event){
    event.preventDefault();
    const clickElement = event.target; 
    if (clickElement.nodeName === 'BUTTON'){
    const dataValue = getDate.value;
    getEpicImage() 
    console.log(dataValue);}
});