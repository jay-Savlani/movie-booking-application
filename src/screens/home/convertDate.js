import { keyframes } from "@emotion/react";

const convertDate = (date) => {
    const newDate = new Date(date);
    // const month = newDate.getMonth() + 1;
    // const year = newDate.getFullYear();
    // const day = newDate.
    // return `${day}/${month}/${year}`;
    
    return newDate.toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'

    });
}

const doesDateExists = (start, end, key) => {
    let startDate = new Date(start);
    let endDate = new Date(end);
    let keyDate = new Date(key);
    if((keyDate.getTime() <= endDate.getTime() && keyDate.getTime() >= startDate.getTime()))
        return true;
    else
        return false;

}


export {convertDate, doesDateExists};