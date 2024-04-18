
export function objectDate (dateString) {
    let parts = dateString.split("-");
    let dateObject = {
        year: parts[0],
        month: parts[1],
        day: parts[2]
    };
    return dateObject;
}

export function currentDateAndTime (){
let currentDateAndTime = [];
const now = new Date();
let day = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();

const formattedMonth = month < 10 ? `0${month}` : month;
const formattedDay = day < 10 ? `0${day}` : day;

 currentDateAndTime[0] = `${year}-${formattedMonth}-${formattedDay}`;

const hours = now.getHours();         
const minutes = now.getMinutes();     
const seconds = now.getSeconds();     

const formattedHours = hours.toString().padStart(2, '0');
const formattedMinutes = minutes.toString().padStart(2, '0');
const formattedSeconds = seconds.toString().padStart(2, '0');

currentDateAndTime[1] = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

return currentDateAndTime;
}


