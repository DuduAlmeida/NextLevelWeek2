
const convertHourToMinutes = (time:string) => {
    
    const [hour, minutes] = time.split(':').map(Number);    //Transforma um array de números
    const timeInMinutes = (hour * 60 ) + minutes;

    return timeInMinutes;
}

export default convertHourToMinutes;