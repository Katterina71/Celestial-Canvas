import  {objectDate} from './modules/module-1.js'
import * as Carousel from './modules/carousel.js'

const api_key = '?api_key=NcvxJtlOQd3JLSNfaoewTOzHrzLhtxIEbugLnuWB'

const heroImg = document.getElementById('heroIMG');
const todayDate= document.getElementById('todayDate');
const imgTitle= document.getElementById('imgTitle');
const explanation= document.getElementById('explanation');
const carouselImg = document.getElementById('carousel-inner');

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

   getEpicImage()
   return todayData; 
   
} catch (error) {
    console.error('Error fetching data:', error);
}
})();



async function getEpicImage() {
    const url = 'https://api.nasa.gov/EPIC/api/natural/images'
    const imgUrl='https://epic.gsfc.nasa.gov/archive/natural/'
   
try {
   
    let response = await fetch (url+api_key, {
        "method": "get"
    })

    if (!response.ok || response.status === '302'|| response.status === '301') {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let imageData = await response.json();

    const dataValue = imageData[0].date.split(" ");
    const dateObj = objectDate(dataValue[0]);
   
    // earthCarousel.getElementsByTagName('p').innerHTML = dataValue[0].date;
    const text = earthCarousel.querySelector('.text')
    text.innerHTML = imageData[0].caption;

    if (imageData && imageData.length > 0) {
      
        // imageData.forEach(element => {
        //     imageInfo[element.identifier] = element.image;
        //     let idimg = element.image; 
        //     let imageSrc = `${imgUrl}${dateObj.year}/${dateObj.month}/${dateObj.day}/png/${idimg}.png`; // Ensure imgUrl and dateObj are defined and correct
        //     createItems(imageSrc);  
        // });

        for (let i in imageData){
            
            let imageSrc = `${imgUrl}${dateObj.year}/${dateObj.month}/${dateObj.day}/png/${imageData[i].image}.png`; // Ensure imgUrl and dateObj are defined and correct
            
            if (i == "0") {
                Carousel.createItems(imageSrc,true);  
            }
            else { Carousel.createItems(imageSrc,false); }
            
        }
        
    } else {
        throw new Error('No data found!');
    }

}
catch (error){
    throw new Error ("Error fetching data!")
}
};



document.querySelector('.prev').addEventListener('click', Carousel.previouseSlide);
document.querySelector('.next').addEventListener('click',Carousel.nextSlide)