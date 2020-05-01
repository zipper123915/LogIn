import axios from '../plugins/axios';


export async function getCountries() {
    try {
        const response = await axios.get('/location/get-countries');

        return response;

    } catch (error) {
        return Promise.reject(error);
    }
}

export async function getCitiesByCountryIndex(index) {
    try {
        return await axios.get(`location/get-cities/${index}`);

    } catch (error) {
        return Promise.reject(error);
    }
}

export function getElementIndex(obj, element) {

    for(let key in obj) {

        if (obj[key] === element) return key;
    }
}
