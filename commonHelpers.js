/* empty css                      */import{f,i as p}from"./assets/vendor-77e16229.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=document.querySelector("#datetime-picker"),a=document.querySelector("[data-start]"),m=document.querySelector(".timer");a.disabled=!0;let l;const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(s){const o=s[0],r=Date.now();o<r?(a.disabled=!0,p.error({title:"Error",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",message:"Please choose a date in the future",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight",iconUrl:"../img/error.svg"})):(l=o,a.classList.add("active-btn"),a.disabled=!1)}};f(c,h);a.addEventListener("click",g);function g(){a.classList.remove("active-btn"),a.disabled=!0,c.disabled=!0;const s=setInterval(()=>{const o=l-Date.now(),r=v(o),i=r.days.toString().padStart(2,"0"),e=r.hours.toString().padStart(2,"0"),t=r.minutes.toString().padStart(2,"0"),n=r.seconds.toString().padStart(2,"0");m.innerHTML=`<div class="field">
          <span class="value" data-days>${i}</span>
          <span class="label">Days</span>
        </div>
        <div class="field">
          <span class="value" data-hours>${e}</span>
          <span class="label">Hours</span>
        </div>
        <div class="field">
          <span class="value" data-minutes>${t}</span>
          <span class="label">Minutes</span>
        </div>
        <div class="field">
          <span class="value" data-seconds>${n}</span>
          <span class="label">Seconds</span>
        </div>`,console.log(i,e,t,n)},1e3);setTimeout(()=>{clearInterval(s),c.disabled=!1},l-Date.now())}function v(s){const t=Math.floor(s/864e5),n=Math.floor(s%864e5/36e5),d=Math.floor(s%864e5%36e5/6e4),u=Math.floor(s%864e5%36e5%6e4/1e3);return{days:t,hours:n,minutes:d,seconds:u}}
//# sourceMappingURL=commonHelpers.js.map
