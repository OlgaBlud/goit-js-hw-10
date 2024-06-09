import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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

    if (selectedTime < currentTime) {
      startTimerBtn.disabled = true;

      iziToast.error({
        title: 'Error',
        titleColor: '#fff',
        titleSize: '16px',
        titleLineHeight: '1.5',
        message: 'Please choose a date in the future',
        messageColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '1.5',
        backgroundColor: '#ef4040',
        position: 'topRight',
        iconUrl: '../img/error.svg',
        theme: 'dark',
      });
    } else {
      userSelectedDate = selectedTime;
      startTimerBtn.classList.add('active-btn');
      startTimerBtn.disabled = false;
    }
  },
};

flatpickr(timeInput, options);

startTimerBtn.addEventListener('click', setTimerOnStartTimerBtn);
function setTimerOnStartTimerBtn() {
  startTimerBtn.classList.remove('active-btn');
  startTimerBtn.disabled = true;
  timeInput.disabled = true;

  const intervalId = setInterval(() => {
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
    // console.log(days, hours, minutes, seconds);
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
