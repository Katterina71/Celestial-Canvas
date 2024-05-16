import  {objectDate} from './module-1.js'
import * as Carousel from './carousel.js'
import * as DOM from './dom.js'

const api_key = '?api_key=NcvxJtlOQd3JLSNfaoewTOzHrzLhtxIEbugLnuWB'

export async function getHeroImage() {
    const url = 'https://api.nasa.gov/planetary/apod'
    try {
       const response = await fetch (url+api_key, {
            "method":"GET",
            
       })
    
       if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`); 
        }
    
       const todayData = await response.json();
    
    //    if (!todayData || !todayData.hdurl) {
    //     throw new Error('No data found!');
    // }
    
    //    todayData.hdurl;
    //    DOM.heroImg.src = todayData.hdurl;
    //    DOM.todayDate.innerHTML = todayData.date;
    //    DOM.imgTitle.innerHTML = todayData.title;
    //    DOM.explanation.innerHTML = todayData.explanation;
    //    DOM.copyright.innerHTML = todayData.copyright;

     
    if (!todayData || !todayData.url ) {
        throw new Error('No data found!');
    }
    
       todayData.url;
       if(todayData.url.includes(".jpg")){
            DOM.heroImg[1].style.display="none"
            DOM.heroImg[0].src = todayData.url;
        }else{
            DOM.heroImg[1].src = todayData.url;
           DOM.heroImg[0].style.display="none"

       }
       DOM.todayDate.innerHTML = todayData.date;
       DOM.imgTitle.innerHTML = todayData.title;
       DOM.explanation.innerHTML = todayData.explanation;
       DOM.copyright.innerHTML = todayData.copyright;
    
       getEpicImage()
       return todayData; 
       
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    };


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
                
                if (i == "0") { Carousel.createItems(imageSrc,true);   }
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