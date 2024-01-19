import{i as l,S as u}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",m="41911500-2109ce3c8bb16633259977e96",h=document.querySelector(".gallery"),i=document.querySelector(".search-form");document.querySelector(".search-input");document.querySelector(".start-btn");i.addEventListener("submit",d);function d(n){n.preventDefault(),n.target.elements.value,p().then(t=>{t.hits.lenght||l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),h.innerHTML=y(t.hits),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),i.reset()}).catch(g)}function p(n){const t=`${f}?key=${m}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`;return fetch(t).then(o=>{if(!o.ok)throw new Errow(o.statusText);return o.json()})}function y(n){return n.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:r,comments:s,downloads:c})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src=="${t}"
      alt="${a}"
    />
    <p class= "gallery-descr">Likes: ${e} Views: ${r} Comments: ${s}</span> Downloads:${c}</p>
  </a>
</li>
  `).join("")}function g(n){alert("Error")}
//# sourceMappingURL=commonHelpers.js.map
