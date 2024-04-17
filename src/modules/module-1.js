
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
debugger;
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const formattedMonth = month < 10 ? `0${month}` : month;
const formattedDay = day < 10 ? `0${day}` : day;

const currentDate = `${year}-${formattedMonth}-${formattedDay}`;

return currentDate;
}