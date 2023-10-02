const BASE_URL = "https://api.thecatapi.com/v1/";
const API_KEY = "live_oGWsUT7QjZhcPPEwtstxrxM2xJEeFHFqgOyte2dKQbNnkuCIlsEPHLTzwsjSjOuX";

export function fetchBreeds() {
    return fetch(`${BASE_URL}breeds?key=${API_KEY}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
}

export function fetchCatPhoto() {
    return fetch(`${BASE_URL}images/search?breed_ids=${breedId}&api_key=${API_KEY}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
    } )
}
