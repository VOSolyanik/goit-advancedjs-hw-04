import{a as w,i as p,S as b}from"./assets/vendor-CMB7Fqvg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const S=async(t,r,s=15)=>{const a=new URLSearchParams({key:"48213456-ebc0266b477643e50c8486310",q:t.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:s});return w("https://pixabay.com/api/",{params:a}).then(e=>{if(e.status!==200)throw new Error(e.status);return e.data}).then(e=>({results:e.hits,total:e.totalHits}))},v=({webformatURL:t,largeImageURL:r,tags:s,likes:a,views:e,comments:o,downloads:l})=>`<li class="gallery-item">
    <a class="gallery-link" href=${r}>
      <img class="gallery-image" src="${t}" alt="${s}" loading="lazy" />
      <ul class="gallery-item-info">
        <li>
          <p>Likes</p>
          <p>${a}</p>
        </li>
        <li>
          <p>Views</p>
          <p>${e}</p>
        </li>
        <li>
          <p>Comments</p>
          <p>${o}</p>
        </li>
        <li>
          <p>Downloads</p>
          <p>${l}</p>
        </li>
      </ul>
    </a>
  </li>`,y=(t,r)=>{if(!r)return t.innerHTML="";const s=r.map(a=>v(a)).join("");t.insertAdjacentHTML("beforeend",s),P(t,2)},P=(t,r)=>{const{height:s}=t.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:s*r,behavior:"smooth"})},u=t=>{p.error({message:t,position:"topRight"})},E=t=>{p.info({message:t,position:"topRight"})},n=(t,r)=>{r?t.classList.remove("hidden"):t.classList.add("hidden")},f=document.querySelector(".search-form"),c=document.querySelector(".load-more"),d=document.querySelector(".loader"),g=document.querySelector(".gallery"),q=new b(".gallery a.gallery-link",{captionDelay:250,overlayOpacity:.8}),m=15;let i=1,h="";const O=async t=>{t.preventDefault(),h=t.target.elements.search.value,i=1,y(g),await L(i),f.reset()},$=async()=>{i+=1,await L(i)},L=async t=>{n(d,!0),n(c,!1);try{const{results:r,total:s}=await S(h,t,m);r.length?(y(g,r),q.refresh(),m*t<s?n(c,!0):E("We're sorry, but you've reached the end of search results.")):u("Sorry, there are no more images to load!")}catch{u("Sorry, something went wrong. Please try again later!")}finally{n(d,!1)}};f.addEventListener("submit",O);c.addEventListener("click",$);
//# sourceMappingURL=index.js.map
