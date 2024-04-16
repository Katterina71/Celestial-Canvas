
export function objectDate (dateString) {
    let parts = dateString.split("-");
    let dateObject = {
        year: parts[0],
        month: parts[1],
        day: parts[2]
    };
    return dateObject;
}