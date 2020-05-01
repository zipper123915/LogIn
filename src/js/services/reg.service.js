import axios from '../plugins/axios';

/**
 *
 * @param {Object} data
 * @return {Promise<T>}
 */

export async function reg( data ) {
    try {
        const response = await axios.post('/auth/signup', JSON.stringify(data));

        if (response.error) return Promise.reject('Error');
        return response;

    } catch (error) {
        return Promise.reject(error);
    }
}
