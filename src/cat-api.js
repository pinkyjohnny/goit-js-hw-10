import axios from "axios";

// let storedBreeds = [];
export function fetchBreeds() {
    return fetch('https://api.thecatapi.com/v1/breeds')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            breeds = data.map(breed => ({
                value: breed.id,
                label: breed.name
            }));
            return breeds;
        })
        .catch(error => {
            console.error('Error fetching breeds:', error);
            return [];
        });
}


axios.defaults.headers.common["x-api-key"] = "live_hQ88dm7IzCk40jg3MehaeP7hXMxhwKiQETP80uI42MLG1z7Xhgjm2az5qKy8qWBQ";

const BASE_URL = 'https://api.thecatapi.com'
const END_POINT = 'v1/breeds'

export function fetchCatByBreed(breedId) {
    const params = new URLSearchParams({
        breed_id: breedId
    });
    const url = `${BASE_URL}${END_POINT}?${params}`
    const options = {
        'x-api-key': 'live_hQ88dm7IzCk40jg3MehaeP7hXMxhwKiQETP80uI42MLG1z7Xhgjm2az5qKy8qWBQ',
    };

    return fetch(url, options).then(res => res.json());
}