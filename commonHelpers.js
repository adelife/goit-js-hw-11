import{i as u,S as f}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y="https://pixabay.com/api/",d="41911500-2109ce3c8bb16633259977e96",m=document.querySelector(".gallery"),l=document.querySelector(".search-form");document.querySelector(".search-input");document.querySelector(".start-btn");const i=document.querySelector(".loader");i.style.display="none";l.addEventListener("submit",h);function h(n){n.preventDefault(),i.style.display="block";const o=n.target.elements.query.value;p(o).then(t=>{i.style.display="none",t.hits.length||u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),m.innerHTML=g(t.hits),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),l.reset()}).catch(S)}function p(n){const o=`${y}?key=${d}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`;return fetch(o).then(t=>{if(!t.ok)throw new Errow(t.statusText);return t.json()})}function g(n){return n.map(({webformatURL:o,largeImageURL:t,tags:s,likes:e,views:r,comments:a,downloads:c})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${s}"
    />
    <p class= "gallery-descr">• Likes: ${e} • Views: ${r} • Comments: ${a} •</span> Downloads:${c}</p>
  </a>
</li>
  `).join("")}function S(n){alert("Error")}
//# sourceMappingURL=commonHelpers.js.map
