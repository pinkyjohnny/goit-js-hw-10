
import Notiflix from 'notiflix'; ``
const refs = {
    select: document.querySelector('.breed-select'),
    catCard: document.querySelector('.cat-info'),

}

const BASE_URL = `https://api.thecatapi.com/v1/`
const url = `${BASE_URL}breeds`;
const api_key = "live_hQ88dm7IzCk40jg3MehaeP7hXMxhwKiQETP80uI42MLG1z7Xhgjm2az5qKy8qWBQ"
let storedBreeds = []

export function fetchBreeds() {
    return fetch(url, {
        headers: {
            'x-api-key': api_key,
        }
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('error')
            }

        })
        .catch(error => {
            Notiflix.Report.failure(
                'ERROR',
                'Oops! Something went wrong! Try reloading the page!',
                'Okay',);
            loader.classList.add('ishidden');
        });


}


export function fetchCatByBreed(breeId) {
    return fetch(`${BASE_URL}images/search?breed_ids=${breeId}`, {
        headers: {
            'x-api-key': api_key,
        }
    })
        .then((response) => {
            if (response.ok) {
                return response.json();

            } else {
                throw new Error('error')
            }

        })
        .catch(error => {
            Notiflix.Report.failure(
                'ERROR',
                'Oops! Something went wrong! Try reloading the page!',
                'Okay',);
            loader.classList.add('ishidden');
        });
}

