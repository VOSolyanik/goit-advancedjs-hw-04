import{a as w,i as p,S as b}from"./assets/vendor-CMB7Fqvg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const S=async(e,r,s=15)=>{const l=new URLSearchParams({key:"48213456-ebc0266b477643e50c8486310",q:e.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:s});return w("https://pixabay.com/api/",{params:l}).then(t=>{if(t.status!==200)throw new Error(t.status);return t.data}).then(t=>({results:t.hits,total:t.totalHits}))},v=({webformatURL:e,largeImageURL:r,tags:s,likes:l,views:t,comments:o,downloads:a})=>`<li class="gallery-item">
    <a class="gallery-link" href=${r}>
      <img class="gallery-image" src="${e}" alt="${s}" loading="lazy" />
      <ul class="gallery-item-info">
        <li>
          <p>Likes</p>
          <p>${l}</p>
        </li>
        <li>
          <p>Views</p>
          <p>${t}</p>
        </li>
        <li>
          <p>Comments</p>
          <p>${o}</p>
        </li>
        <li>
          <p>Downloads</p>
          <p>${a}</p>
        </li>
      </ul>
    </a>
  </li>`,y=(e,r)=>{if(!r)return e.innerHTML="";const s=r.map(l=>v(l)).join("");e.insertAdjacentHTML("beforeend",s),P(e,2)},P=(e,r)=>{const{height:s}=e.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:s*r,behavior:"smooth"})},u=e=>{p.error({message:e,position:"topRight"})},E=e=>{p.info({message:e,position:"topRight"})},i=(e,r)=>{r?e.classList.remove("hidden"):e.classList.add("hidden")},f=document.querySelector(".search-form"),c=document.querySelector(".load-more"),d=document.querySelector(".loader"),h=document.querySelector(".gallery"),q=new b(".gallery a.gallery-link",{captionDelay:250,overlayOpacity:.8}),m=15;let n=1,g="";const O=async e=>{e.preventDefault(),g=e.target.elements.search.value,n=1,y(h),await L(n),f.reset()},$=async()=>{n+=1,await L(n)},L=async e=>{i(d,!0),i(c,!1);try{const{results:r,total:s}=await S(g,e,m);r.length?(y(h,r),q.refresh(),m*e<s?i(c,!0):e!==1&&E("We're sorry, but you've reached the end of search results.")):u("Sorry, there are no more images to load!")}catch{u("Sorry, something went wrong. Please try again later!")}finally{i(d,!1)}};f.addEventListener("submit",O);c.addEventListener("click",$);
//# sourceMappingURL=index.js.map
