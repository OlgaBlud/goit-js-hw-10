import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const timeInput = document.querySelector('#datetime-picker');
const startTimerBtn = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');

startTimerBtn.disabled = true;
let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedTime = selectedDates[0];
    const currentTime = Date.now();
    // const diffTime = selectedTime - currentTime;
    // console.log(currentTime);
    // console.log(selectedTime);
    // console.log(diffTime);
    if (selectedTime < currentTime) {
      startTimerBtn.disabled = true;
      window.alert('Please choose a date in the future');
    } else {
      userSelectedDate = selectedTime;
      startTimerBtn.classList.add('active-btn');
      startTimerBtn.disabled = false;

      //   console.log(userSelectedDate);
    }
  },
};

flatpickr(timeInput, options);

startTimerBtn.addEventListener('click', setTimerOnStartTimerBtn);
function setTimerOnStartTimerBtn() {
  //   console.log('click');
  startTimerBtn.classList.remove('active-btn');
  startTimerBtn.disabled = true;
  timeInput.disabled = true;

  const intervalId = setInterval(() => {
    // console.log(userSelectedDate - Date.now());
    const leftDurationMs = userSelectedDate - Date.now();
    const leftTime = convertMs(leftDurationMs);
    const days = leftTime.days.toString().padStart(2, '0');
    const hours = leftTime.hours.toString().padStart(2, '0');
    const minutes = leftTime.minutes.toString().padStart(2, '0');
    const seconds = leftTime.seconds.toString().padStart(2, '0');

    timer.innerHTML = `<div class="field">
          <span class="value" data-days>${days}</span>
          <span class="label">Days</span>
        </div>
        <div class="field">
          <span class="value" data-hours>${hours}</span>
          <span class="label">Hours</span>
        </div>
        <div class="field">
          <span class="value" data-minutes>${minutes}</span>
          <span class="label">Minutes</span>
        </div>
        <div class="field">
          <span class="value" data-seconds>${seconds}</span>
          <span class="label">Seconds</span>
        </div>`;
    console.log(days, hours, minutes, seconds);
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
    timeInput.disabled = false;
  }, userSelectedDate - Date.now());
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
