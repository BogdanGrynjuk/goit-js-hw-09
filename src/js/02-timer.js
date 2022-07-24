import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('button[data-start]');
const spanDays = document.querySelector('span[data-days]');
const spanHours = document.querySelector('span[data-hours]');
const spanMinutes = document.querySelector('span[data-minutes]');
const spanSeconds = document.querySelector('span[data-seconds]');
let selectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);   

    if (selectedDates[0].getTime() <= Date.now()) {
      alert("Please choose a date in the future");
      return;
    }

    btnStart.disabled = false;
    selectedDate = selectedDates[0].getTime();
  },
};

flatpickr("#datetime-picker", options);

btnStart.disabled = true;

btnStart.addEventListener('click', onClickStart);

function onClickStart() {
  
  const inervalId = setInterval(() => {
    const deltaTime = selectedDate - Date.now();

    if (deltaTime <= 1000) {
      btnStart.disabled = true;
      clearInterval(inervalId);
    }

    spanSeconds.textContent = addLeadingZero(convertMs(deltaTime).seconds);
    spanMinutes.textContent = addLeadingZero(convertMs(deltaTime).minutes);;
    spanHours.textContent = addLeadingZero(convertMs(deltaTime).hours);
    spanDays.textContent = addLeadingZero(convertMs(deltaTime).days);    
  }, 1000);  
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

