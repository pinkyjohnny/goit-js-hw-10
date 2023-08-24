import axios from "axios";
import { fetchCatByBreed } from "./cat-api";
import { fetchBreeds } from "./cat-api";

axios.defaults.headers.common["x-api-key"] = "live_hQ88dm7IzCk40jg3MehaeP7hXMxhwKiQETP80uI42MLG1z7Xhgjm2az5qKy8qWBQ";


const breedSelect = document.querySelector('.breed-select');

breedSelect.addEventListener('click', onBreedSelectClick);

function onBreedSelectClick(evt) {
    fetchBreeds()
}


function renderCatBreeds(breedId, breedName) {
    breedSelect.innerHTML = `<option value="${breedId}">${breedName}</option>`
}

renderCatBreeds()





























// const url = `https://api.thecatapi.com/v1/breeds`;
// const api_key = "live_hQ88dm7IzCk40jg3MehaeP7hXMxhwKiQETP80uI42MLG1z7Xhgjm2az5qKy8qWBQ"
// let storedBreeds = []

// fetch(url, {
//     headers: {
//         'x-api-key': api_key
//     }
// })
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {

//         //filter to only include those with an `image` object
//         data = data.filter(img => img.image?.url != null)

//         storedBreeds = data;

//         for (let i = 0; i < storedBreeds.length; i++) {
//             const breed = storedBreeds[i];
//             let option = document.createElement('option');

//             //skip any breeds that don't have an image
//             if (!breed.image) continue

//             //use the current array index
//             option.value = i;
//             option.innerHTML = `${breed.name}`;
//             document.querySelector('.breed-select').appendChild(option);

//         }
//         //show the first breed by default
//         showBreedImage(0)
//     })
//     .catch(function (error) {
//         console.log(error);
//     });














// function templateCat(obj) {
//     return ``
// }

// function renderCat(catBreed) {
//     const markup = templateCat(catBreed)

// }






















// function onLoadPage() {
//     fetchBreeds().then(data => {
//         breeds = data.map(breed => ({
//             value: breed.id,
//             label: breed.name
//         }));
//         return breeds;
//     })
//         .catch(error => {
//             console.error('Error fetching breeds:', error);
//             return [];
//         });

// }

// onLoadPage()







































// const url = `https://api.thecatapi.com/v1/breeds`;
// const api_key = "DEMO_API_KEY"
// let storedBreeds = []

// const breedSelect = document.querySelector('.breed-select');

// breedSelect.addEventListener('input', onBreedSelect);

// function onBreedSelect() {
//     fetch(url, {
//         headers: {
//             'x-api-key': api_key
//         }
//     })
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             data = data.filter(img => img.image?.url != null)

//             storedBreeds = data;

//             for (let i = 0; i < storedBreeds.length; i++) {
//                 const breed = storedBreeds[i];
//                 let option = document.createElement('option');

//                 //skip any breeds that don't have an image
//                 if (!breed.image) continue

//                 //use the current array index
//                 option.value = i;
//                 option.innerHTML = `${breed.name}`;
//                 document.getElementById('breed_selector').appendChild(option);

//             }
//             //show the first breed by default
//             showBreedImage(0)
//         })
//         .catch(function (error) {
//             console.log(error);
//         });

// }

// // fetchCatByBreed(breedId) {

// // }



// fetch(url, {
//     headers: {
//         'x-api-key': api_key
//     }
// })
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         data = data.filter(img => img.image?.url != null)

//         storedBreeds = data;

//         for (let i = 0; i < storedBreeds.length; i++) {
//             const breed = storedBreeds[i];
//             let option = document.createElement('option');

//             //skip any breeds that don't have an image
//             if (!breed.image) continue

//             //use the current array index
//             option.value = i;
//             option.innerHTML = `${breed.name}`;
//             document.getElementById('breed_selector').appendChild(option);

//         }
//         //show the first breed by default
//         showBreedImage(0)
//     })
//     .catch(function (error) {
//         console.log(error);
//     });






// function showBreedImage(index) {
//     document.getElementById("breed_image").src = storedBreeds[index].image.url;

//     document.getElementById("breed_json").textContent = storedBreeds[index].temperament


//     document.getElementById("wiki_link").href = storedBreeds[index].wikipedia_url
//     document.getElementById("wiki_link").innerHTML = storedBreeds[index].wikipedia_url
// }









































// const refs = {
//     breedSelect: document.querySelector('.breed-select')
// }


// refs.breedSelect.addEventListener('input', onBreedSelect);

// function onBreedSelect(evt) {
//     evt.preventDefolt();
//     const query = evt.target.value;
//     console.log(query);
//     fetchBreeds()
// }