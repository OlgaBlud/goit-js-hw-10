import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import successIcon from '../img/success.svg';
import errorIcon from '../img/error.svg';

const formElem = document.querySelector('.form');
formElem.addEventListener('submit', onNotificationBtnSubmit);

const makePromise = ({ delayMs, stateValue }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateValue === 'fulfilled') {
        resolve(delayMs);
      } else {
        reject(delayMs);
      }
    }, delayMs);
  });
};

function onNotificationBtnSubmit(event) {
  event.preventDefault();

  const delayMs = Number(formElem.delay.value) * 1000;
  if (delayMs < 0) {
    iziToast.warning({
      title: 'Caution',
      message: `Make choice more than 0`,
      backgroundColor: '#ffa000',
      iconUrl: successIcon,
      theme: 'dark',
      position: 'topRight',
      messageColor: '#ffffff',
    });
    formElem.reset();
    return;
  }

  const stateValue = formElem.state.value;
  const promise = makePromise({ delayMs, stateValue });
  promise
    // .then(delayMs => console.log(`✅ Fulfilled promise in ${delayMs}ms`))
    // .catch(delayMs => console.log(`❌ Rejected promise in ${delayMs}ms`));
    .then(delayMs =>
      iziToast.success({
        title: 'OK',
        message: `Fulfilled promise in ${delayMs}ms`,
        backgroundColor: '#59a10d',
        iconUrl: successIcon,
        theme: 'dark',
        position: 'topRight',
        messageColor: '#ffffff',
      })
    )
    .catch(delayMs =>
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${delayMs}ms`,
        backgroundColor: '#ef4040',
        iconUrl: errorIcon,
        theme: 'dark',
        position: 'topRight',
        messageColor: '#ffffff',
      })
    );

  /* const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateValue === 'fulfilled') {
        resolve(delayMs);
      } else {
        reject(delayMs);
      }
    }, delayMs);
  });

  promise
    .then(delayMs => console.log(`✅ Fulfilled promise in ${delayMs}ms`))
    .catch(error => {
      console.log(`❌ Rejected promise in ${delayMs}ms`);
    }); */

  formElem.reset();
}

// const iziToastMessages = {
//   successMessage: delayMs => ({
//     title: 'OK',
//     message: `Fulfilled promise in ${delayMs}ms`,
//     backgroundColor: '#59a10d',
//     iconUrl: successIcon,
//     theme: 'dark',
//     position: 'topRight',
//     messageColor: '#ffffff',
//   }),
//   errorMessage: delayMs => ({
//     title: 'Error',
//     message: `Rejected promise in ${delayMs}ms`,
//     backgroundColor: '#ef4040',
//     iconUrl: errorIcon,
//     theme: 'dark',
//     position: 'topRight',
//     messageColor: '#ffffff',
//   }),
//   warningMessage: delayMs => ({
//     title: 'Caution',
//     message: `Make choice more than 0`,
//     backgroundColor: '#ffa000',
//     iconUrl: successIcon,
//     theme: 'dark',
//     position: 'topRight',
//     messageColor: '#ffffff',
//   }),
// };
