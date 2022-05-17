export const timer = (deadline) => {
    const dateDiv = document.querySelector('.countdown');
    const timerDays = dateDiv.querySelector('.count.count_1 span');
    const timerHours = dateDiv.querySelector('.count.count_2 span');
    const timerMinutes = dateDiv.querySelector('.count.count_3 span');
    const timerSeconds = dateDiv.querySelector('.count.count_4 span');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor((timeRemaining / 3600) / 24);
        let hours = Math.floor((timeRemaining / 3600) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        if (hours < 10) {
            hours = `0${hours}`;
        }

        return {
            timeRemaining,
            days,
            hours,
            minutes,
            seconds
        };
    };

    const updateClock = () => {
        let getTime = getTimeRemaining();
        
        timerDays.textContent = getTime.days;
        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;

        if (getTime.timeRemaining <= 0) {
            timerDays.textContent = '00';
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
            clearInterval(intervalId);
        }
    };

    let intervalId = setInterval(updateClock, 500); 

    updateClock();
}