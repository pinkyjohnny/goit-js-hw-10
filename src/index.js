import { fetchCatByBreed } from "./cat-api";
import { fetchBreeds } from "./cat-api";
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css';
import '/src/common.css'


const refs = {
    breedSelect: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    catInfo: document.querySelector('.cat-info'),
    error: document.querySelector('.error'),
}


refs.breedSelect.classList.add('is-hidden');
refs.error.classList.add('is-hidden');

fetchBreeds().then(data => {
    renderCatBreeds(data)
    refs.loader.classList.add('is-hidden')
    refs.breedSelect.classList.remove('is-hidden')
})


refs.breedSelect.addEventListener('change', onBreedSelectClick);

function onBreedSelectClick(evt) {
    refs.catInfo.innerHTML = '';
    refs.loader.classList.remove('is-hidden')
    const selectBreedId = evt.target.value
    fetchCatByBreed(selectBreedId).then(data => {
        renderCatCard(data)
        refs.loader.classList.add('is-hidden')
    })

}

function renderCatCard(arr) {
    const markupCat = arr.map(breed => `<img src="${breed.url}" alt="${breed.breeds[0].name}" width=600>
      <h2>${breed.breeds[0].name}</h2>
      <p>${breed.breeds[0].description}</p>
      <p>${breed.breeds[0].temperament}</p>`).join('')
    refs.catInfo.innerHTML = markupCat;
}


function renderCatBreeds(arr) {
    const markup = arr.map(cat => `<option value=${cat.id}><span>${cat.name}</span></option>`).join('')
    refs.breedSelect.innerHTML = markup;
    new SlimSelect({
        select: refs.breedSelect
    })
}
















































