import  {objectDate} from './modules/module-1.js'
import * as Carousel from './modules/carousel.js'

const api_key = '?api_key=NcvxJtlOQd3JLSNfaoewTOzHrzLhtxIEbugLnuWB'

const applicationId = '13c7d002-5b9b-40d8-8f6a-6c9536be08ab';
const applicationSecret = '120c5b697566ac3fb25846278a74edc030675916824c3d15d622683a9721035271e158040b1f9c6feef4d7c4c19f302fa241fcd3453a94aef03fcae57fff9f3c097687787497fc2520314d9f5d28a1e51c6942290b94abbdf99f52a1bb7d13017aab7b48e72a4f89153365b43486fd16';
const authString = btoa(`${applicationId}:${applicationSecret}`);


const astronomy_api_key = "13c7d002-5b9b-40d8-8f6a-6c9536be08ab";

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
   
    const text = earthCarousel.querySelector('.text')
    text.innerHTML = `${imageData[0].caption}. Data: ${imageData[0].date}`;

    if (imageData && imageData.length > 0) {

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

(async function astronomyAPI (){ 
const url = 'https://api.astronomyapi.com/api/v2/bodies';
fetch(url, {
    method: 'GET',
    headers: {
        'Authorization': `Basic ${authString}`
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Fetch error:', error));
})();

document.querySelector('.prev').addEventListener('click', Carousel.previouseSlide);
document.querySelector('.next').addEventListener('click',Carousel.nextSlide)

