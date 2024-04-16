import  {objectDate} from './modules/module-1.js'
import {createItems} from './modules/carousel.js'

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
                createItems(imageSrc,true);  
            }
            else { createItems(imageSrc,false); }
            
        }
        
    } else {
        throw new Error('No data found!');
    }

}
catch (error){
    throw new Error ("Error fetching data!")
}
};




const btn =document.getElementById('clickme');
btn.addEventListener('click', function(event){
    console.log('hello! you click me!')
    event.preventDefault();

    const allDivs = document.querySelectorAll('.carousel-item');
    allDivs.forEach(div => {
        console.log(div);
    });
})


    // const images = document.getElementsByClassName('.d-block');
    // let currentIndex = 0;

    // function showImage(index) {
    //     debugger;
    //     images.forEach(image => {
    //         let parentElement = image.parentElement;
    //          parentElement.classList.remove('active');
    //        });
    //     let parentElement = images[index].parentElement;
    //     parentElement.classList.add('active');
    // }
    // carouselImg.addEventListener('click', function(event){
    //     console.log('click');
    // })
    let currentIndex = 0;

    document.querySelector('.prev').addEventListener('click', function() {
     
        const allDivs = document.querySelectorAll('.carousel-item');
        console.log(allDivs);

        const divActive = Array.from(allDivs).find((div) => div.classList.contains('active'))
        console.log(divActive);

        divActive.classList.remove('active');
        
        const divPrev = divActive.previousElementSibling;

        if (divPrev) {
            divPrev.classList.add('active');
        }
        else {
            allDivs[allDivs.length-1].classList.add('active') 
        }

        });
  

  


    document.querySelector('.next').addEventListener('click', function() {
        console.log('Oh, you click prev')
    
        const allDivs = document.querySelectorAll('.carousel-item');
        console.log(allDivs);

        const divActive = Array.from(allDivs).find((div) => div.classList.contains('active'))
        console.log(divActive);

        divActive.classList.remove('active');
        
        const divNext = divActive.nextElementSibling;

        if (divNext) {
            divNext.classList.add('active');
        }
        else {
            allDivs[0].classList.add('active') 
        }


       
        console.log(divNext);
    });
