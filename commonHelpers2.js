import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as n}from"./assets/vendor-77e16229.js";const a="/goit-js-hw-10/assets/success-286069d5.svg",u="/goit-js-hw-10/assets/error-40fa32d5.svg",o=document.querySelector(".form");o.addEventListener("submit",m);function m(r){r.preventDefault();const s=Number(o.delay.value),e=o.state.value;if(s<=0){n.warning(i("warning")),o.reset();return}f({delayMs:s,stateValue:e}).then(t=>n.success(i("success",t))).catch(t=>n.error(i("error",t))),o.reset()}function f({delayMs:r,stateValue:s}){return new Promise((e,c)=>{setTimeout(()=>{s==="fulfilled"?e(r):c(r)},r)})}function i(r,s=0){const e={theme:"dark",position:"topRight",messageColor:"#ffffff"};switch(r){case"success":return{title:"OK",message:`Fulfilled promise in ${s}ms`,backgroundColor:"#59a10d",iconUrl:a,...e};case"error":return{title:"Error",message:`Rejected promise in ${s}ms`,backgroundColor:"#ef4040",iconUrl:u,...e};case"warning":return{title:"Caution",message:"Make choice more than 0",backgroundColor:"#ffa000",...e};default:return{title:"Error",message:"Unknown problem",backgroundColor:"#ef4040",...e}}}
//# sourceMappingURL=commonHelpers2.js.map
