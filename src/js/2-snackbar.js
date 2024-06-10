// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
const formElem = document.querySelector('.form');
formElem.addEventListener('submit', onNotificationBtnSubmit);
function onNotificationBtnSubmit(event) {
  event.preventDefault();
  const delayMs = Number(formElem.delay.value) * 1000;
  const stateValue = formElem.state.value;
  //   console.log(delayMs, stateValue);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateValue === 'fulfilled') {
        resolve(delayMs);
      } else {
        reject(delayMs);
      }
    }, delayMs);
  });
  console.log(promise);
  promise
    .then(delayMs => console.log(`✅ Fulfilled promise in ${delayMs}ms`))
    .catch(error => {
      console.log(`❌ Rejected promise in ${delayMs}ms`);
    });
  formElem.reset();
}
// `✅ Fulfilled promise in ${delay}ms`
// `❌ Rejected promise in ${delay}ms`
