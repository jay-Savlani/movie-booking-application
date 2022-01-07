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

export {convertDate};