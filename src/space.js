import  {objectDate} from './modules/module-1.js'

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
        "method":"get",
   })

   if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`); 
    }

   const todayData = await response.json();

   if (todayData.length>0) {
 
   todayData.hdurl;
   heroImg.src = todayData.hdurl;
   todayDate.innerHTML = todayData.date;
   imgTitle.innerHTML = todayData.title;
   explanation.innerHTML = todayData.explanation;

   return todayData; 
   }
   else {
    throw new Error ('No data found!')
   }
}
catch (error){
    throw new Error('Error fetching data:', error);
}
})();



(async function getEpicImage() {
    const url = 'https://api.nasa.gov/EPIC/api/natural/images'
    const imgUrl='https://epic.gsfc.nasa.gov/archive/natural/'
    const dataValue = getDate.value;
    console.log(dataValue);
    const dateObj = objectDate("2024-04-10");
    console.log(dateObj);
try {
    const response = await fetch (url+api_key, {
        "method": "get"
    })

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data && data.length > 0) {
        const imageName = data[0].image;
        const imageSrc = `${imgUrl}${dateObj.year}/${dateObj.month}/${dateObj.day}/png/${imageName}.png`;
        document.getElementById("photo").src = imageSrc;
        console.log(imageSrc);
    } else {
        console.log('No data found~');
    }

}
catch (error){
    throw new Error ("Error fetching data!")
}

})();

document.addEventListener('click', getEpicImage);