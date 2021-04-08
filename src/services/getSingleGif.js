import { apiKey, apiURL } from './settings';

export default function getSingleGif  ( params ) {
    const api = `${apiURL}/${params.id}?api_key=${apiKey}`;

    try{
        return fetch(api)
            .then(res => res.json())
        
            .then(res => {
                const { data } = res;
                const { title, id } = data;
                const { url } = data.images.downsized_medium;
                return {title, id, url}
            })
            
    }
    catch(e){
        return Promise.reject(e);
    } 
}