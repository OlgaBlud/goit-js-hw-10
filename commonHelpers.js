import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as p}from"./assets/vendor-77e16229.js";const i=document.querySelector("#datetime-picker"),s=document.querySelector("[data-start]"),f=document.querySelector(".timer");s.disabled=!0;let r;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const a=e[0],t=Date.now();a<t?(s.disabled=!0,p.error({title:"Error",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",message:"Please choose a date in the future",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight",iconUrl:"../img/error.svg",theme:"dark"})):(r=a,s.classList.add("active-btn"),s.disabled=!1)}};m(i,v);s.addEventListener("click",h);function h(){s.classList.remove("active-btn"),s.disabled=!0,i.disabled=!0;const e=setInterval(()=>{const a=r-Date.now(),t=S(a),l=t.days.toString().padStart(2,"0"),c=t.hours.toString().padStart(2,"0"),n=t.minutes.toString().padStart(2,"0"),o=t.seconds.toString().padStart(2,"0");f.innerHTML=`<div class="field">
          <span class="value" data-days>${l}</span>
          <span class="label">Days</span>
        </div>
        <div class="field">
          <span class="value" data-hours>${c}</span>
          <span class="label">Hours</span>
        </div>
        <div class="field">
          <span class="value" data-minutes>${n}</span>
          <span class="label">Minutes</span>
        </div>
        <div class="field">
          <span class="value" data-seconds>${o}</span>
          <span class="label">Seconds</span>
        </div>`},1e3);setTimeout(()=>{clearInterval(e),i.disabled=!1},r-Date.now())}function S(e){const n=Math.floor(e/864e5),o=Math.floor(e%864e5/36e5),d=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:n,hours:o,minutes:d,seconds:u}}
//# sourceMappingURL=commonHelpers.js.map
