
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const BASE_URL= "https://pixabay.com/api/";
const API_KEY = "41911500-2109ce3c8bb16633259977e96";

const container = document.querySelector('.gallery');
const form = document.querySelector('.search-form');
const input= document.querySelector('.search-input');
const startBtn= document.querySelector('.start-btn');

const url = `${BASE_URL}?key=41911500-2109ce3c8bb16633259977e96&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`;


form.addEventListener('submit', handleSearch)

function handleSearch(event){
    event.preventDefault();
    container.innerHTML = '';
    const inputValue = event.target.elements.input.value;
    fetchImage(inputValue)
    .then(data => {
        if(!data.hits.lenght){
            iziToast.error({
                title: 'Error',
                message:
                  'Sorry, there are no images matching your search query. Please try again!',
              });
        }
        container.innerHTML= ('beforeend', createMarkup(data.hits));
        const refreshPage = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
          });
          refreshPage.refresh();
          form.reset();
        })
    .catch(onFetchError)
}

function fetchImage(name){
    return fetch(`${url}}`).then((resp)=> {
        if(!resp.ok){
            throw new Errow(resp.statusText);
        }
        return resp.json();
    })
    
}

function createMarkup(arr) {
  return arr
    .map(
      ({ webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads, }) => `
  <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src=="${webformatURL}"
      alt="${tags}"
    />
    <p class= "gallery-descr">Likes: ${likes} Views: ${views} Comments: ${comments}</span> Downloads:${downloads}</p>
  </a>
</li>
  `
    )
    .join('');
}

function onFetchError(error){
    alert("Error")
}
    