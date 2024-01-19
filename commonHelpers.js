import{i as l,S as u}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",m="41911500-2109ce3c8bb16633259977e96",h=document.querySelector(".gallery"),a=document.querySelector(".search-form");document.querySelector(".search-input");document.querySelector(".start-btn");a.addEventListener("submit",d);function d(n){n.preventDefault();const o=n.target.elements.query.value;y(o).then(t=>{t.hits.lenght||l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),h.innerHTML=p(t.hits),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),a.reset()}).catch(g)}function y(n){const o=`${f}?key=${m}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`;return fetch(o).then(t=>{if(!t.ok)throw new Errow(t.statusText);return t.json()})}function p(n){return n.map(({webformatURL:o,largeImageURL:t,tags:s,likes:e,views:r,comments:i,downloads:c})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${s}"
    />
    <p class= "gallery-descr">Likes: ${e} Views: ${r} Comments: ${i}</span> Downloads:${c}</p>
  </a>
</li>
  `).join("")}function g(n){alert("Error")}
//# sourceMappingURL=commonHelpers.js.map
