const api_key = 'NcvxJtlOQd3JLSNfaoewTOzHrzLhtxIEbugLnuWB'
const heroImg = document.getElementById('heroIMG');
const todayDate= document.getElementById('todayDate');
const imgTitle= document.getElementById('imgTitle');
const explanation= document.getElementById('explanation');




async function getHeroImage() {
const url = 'https://api.nasa.gov/planetary/apod'
try {
   const response = await fetch ( url+"?api_key="+api_key, {
        "method":"get",
   })
   const todayData = await response.json();
   console.log(todayData);
   todayData.hdurl;
   heroImg.src = todayData.hdurl;
   todayDate.innerHTML = todayData.date;
   imgTitle.innerHTML = todayData.title;
   explanation.innerHTML = todayData.explanation;
   return todayData; 
}
catch (error){
    throw new Error('Error fetching data:', error);
}
};


getHeroImage()

// .then(todayData => {
//     let date = todayData.date
//     console.log(date);
// })
// .catch(error => {
//     console.error('Error fetching data:', error);
// });

// console.log(todayData)
// console.log(todayData.todayDate)
// console.log(todayData.todayImg)
