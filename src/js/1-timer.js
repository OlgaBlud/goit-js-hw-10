import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  timeInput: document.querySelector('#datetime-picker'),
  startTimerBtn: document.querySelector('[data-start]'),
  timer: document.querySelector('.timer'),
  daysElem: document.querySelector('[data-days]'),
  hoursElem: document.querySelector('[data-hours]'),
  minutesElem: document.querySelector('[data-minutes]'),
  secondsElem: document.querySelector('[data-seconds]'),
};

const errorMsgObj = {
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
};

refs.startTimerBtn.disabled = true;
let userSelectedDate = '';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedTime = selectedDates[0];
    const currentTime = Date.now();

    if (selectedTime < currentTime) {
      refs.startTimerBtn.disabled = true;
      refs.startTimerBtn.classList.remove('active-btn');
      iziToast.error(errorMsgObj);
    } else {
      userSelectedDate = selectedTime;
      refs.startTimerBtn.classList.add('active-btn');
      refs.startTimerBtn.disabled = false;
    }
  },
};

flatpickr(refs.timeInput, options);

refs.startTimerBtn.addEventListener('click', setTimerOnStartBtn);
function setTimerOnStartBtn() {
  refs.startTimerBtn.classList.remove('active-btn');
  refs.startTimerBtn.disabled = true;
  refs.timeInput.disabled = true;

  const intervalId = setInterval(() => {
    const leftDurationMs = userSelectedDate - Date.now();
    const leftTime = convertMs(leftDurationMs);
    refs.daysElem.textContent = addLeadingZero(leftTime.days);
    refs.hoursElem.textContent = addLeadingZero(leftTime.hours);
    refs.minutesElem.textContent = addLeadingZero(leftTime.minutes);
    refs.secondsElem.textContent = addLeadingZero(leftTime.seconds);
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
    refs.timeInput.disabled = false;
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
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
