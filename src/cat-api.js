
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
        .catch(function (error) {
            console.log(error);
        })


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
        .catch(function (error) {
            console.log(error);
        })
}

// const BASE_URL = 'https://api.thecatapi.com'
// const END_POINT = '/v1/images/search'

// export function fetchCatByBreed(breedId) {
//     const params = new URLSearchParams({
//         breed_id: breedId
//     });
//     const url = `${BASE_URL}${END_POINT}?${params}`
//     const options = {
//         'x-api-key': 'live_hQ88dm7IzCk40jg3MehaeP7hXMxhwKiQETP80uI42MLG1z7Xhgjm2az5qKy8qWBQ',
//     };

//     return fetch(url, options).then(res => res.json());
// }




































//

// fetchCatByBreed()







































// let storedBreeds = [];
// export function fetchBreeds() {
//     return fetch('https://api.thecatapi.com/v1/breeds')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             storedBreeds = data.map(breed => ({
//                 value: breed.id,
//                 label: breed.name
//             }));
//             return breeds;
//         })
//         .catch(error => {
//             console.error('Error fetching breeds:', error);
//             return [];
//         });
// }