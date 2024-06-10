import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import successIcon from '../img/success.svg';
import errorIcon from '../img/error.svg';

const formElem = document.querySelector('.form');
formElem.addEventListener('submit', onNotificationBtnSubmit);

function onNotificationBtnSubmit(event) {
  event.preventDefault();

  const delayMs = Number(formElem.delay.value);
  const stateValue = formElem.state.value;

  if (delayMs < 0) {
    iziToast.warning(getMessageObj('warning'));
    formElem.reset();
    return;
  }

  const promise = makePromise({ delayMs, stateValue });
  promise
    .then(delayMs => iziToast.success(getMessageObj('success', delayMs)))
    .catch(delayMs => iziToast.error(getMessageObj('error', delayMs)));

  formElem.reset();
}

function makePromise({ delayMs, stateValue }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateValue === 'fulfilled') {
        resolve(delayMs);
      } else {
        reject(delayMs);
      }
    }, delayMs);
  });
}

function getMessageObj(messageState, delayMs = 0) {
  const commonSettings = {
    theme: 'dark',
    position: 'topRight',
    messageColor: '#ffffff',
  };
  switch (messageState) {
    case 'success':
      return {
        title: 'OK',
        message: `Fulfilled promise in ${delayMs}ms`,
        backgroundColor: '#59a10d',
        iconUrl: successIcon,
        ...commonSettings,
      };
    case 'error':
      return {
        title: 'Error',
        message: `Rejected promise in ${delayMs}ms`,
        backgroundColor: '#ef4040',
        iconUrl: errorIcon,
        ...commonSettings,
      };
    case 'warning':
      return {
        title: 'Caution',
        message: 'Make choice more than 0',
        backgroundColor: '#ffa000',
        ...commonSettings,
      };
    default:
      return {
        title: 'Error',
        message: 'Unknown problem',
        backgroundColor: '#ef4040',
        ...commonSettings,
      };
  }
}
