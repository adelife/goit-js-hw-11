import{i as l,S as u}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",m="41911500-2109ce3c8bb16633259977e96",h=document.querySelector(".gallery"),i=document.querySelector(".search-form");document.querySelector(".search-input");document.querySelector(".start-btn");i.addEventListener("submit",d);function d(o){o.preventDefault(),o.target.elements.value,g().then(t=>{t.hits.lenght||l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),h.innerHTML=p(t.hits),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),i.reset()}).catch(L)}const y=`${f}?key=${m}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`;function g(o){return fetch(y).then(t=>{if(!t.ok)throw new Errow(t.statusText);return t.json()})}function p(o){return o.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:r,comments:n,downloads:c})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${a}"
    />
    <p class= "gallery-descr">Likes: ${e} Views: ${r} Comments: ${n}</span> Downloads:${c}</p>
  </a>
</li>
  `).join("")}function L(o){alert("Error")}
//# sourceMappingURL=commonHelpers.js.map
