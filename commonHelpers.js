import{i as u,S as f}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",a=document.querySelector(".gallery"),l=document.querySelector(".search-form");document.querySelector(".search-input");document.querySelector(".start-btn");const h=`${m}?key=41911500-2109ce3c8bb16633259977e96&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`;l.addEventListener("submit",d);function d(o){o.preventDefault(),a.innerHTML="",o.target.elements.input.value,p().then(t=>{t.hits.lenght||u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a.innerHTML=y(t.hits),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),l.reset()}).catch(g)}function p(o){return fetch(`${h}}`).then(t=>{if(!t.ok)throw new Errow(t.statusText);return t.json()})}function y(o){return o.map(({webformatURL:t,largeImageURL:i,tags:s,likes:e,views:r,comments:n,downloads:c})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src=="${t}"
      alt="${s}"
    />
    <p class= "gallery-descr">Likes: ${e} Views: ${r} Comments: ${n}</span> Downloads:${c}</p>
  </a>
</li>
  `).join("")}function g(o){alert("Error")}
//# sourceMappingURL=commonHelpers.js.map
