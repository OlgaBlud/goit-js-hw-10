/* empty css                      */import{f}from"./assets/vendor-2b44ac2e.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c=document.querySelector("#datetime-picker"),r=document.querySelector("[data-start]"),p=document.querySelector(".timer");r.disabled=!0;let l;const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(s){const n=s[0],o=Date.now();n<o?(r.disabled=!0,window.alert("Please choose a date in the future")):(l=n,r.classList.add("active-btn"),r.disabled=!1)}};f(c,m);r.addEventListener("click",h);function h(){r.classList.remove("active-btn"),r.disabled=!0,c.disabled=!0;const s=setInterval(()=>{const n=l-Date.now(),o=y(n),i=o.days.toString().padStart(2,"0"),e=o.hours.toString().padStart(2,"0"),t=o.minutes.toString().padStart(2,"0"),a=o.seconds.toString().padStart(2,"0");p.innerHTML=`<div class="field">
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
          <span class="value" data-seconds>${a}</span>
          <span class="label">Seconds</span>
        </div>`,console.log(i,e,t,a)},1e3);setTimeout(()=>{clearInterval(s),c.disabled=!1},l-Date.now())}function y(s){const t=Math.floor(s/864e5),a=Math.floor(s%864e5/36e5),d=Math.floor(s%864e5%36e5/6e4),u=Math.floor(s%864e5%36e5%6e4/1e3);return{days:t,hours:a,minutes:d,seconds:u}}
//# sourceMappingURL=commonHelpers.js.map
