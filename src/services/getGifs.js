import { apiKey, apiURL } from './settings';

export default async function getGifs ( { keyword = 'wandavision' } = {} ) {
    const api = `${apiURL}/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=es`;

    try{
        return await fetch(api)
          .then(res => res.json())
          
          .then(res => {
            const { data } = res;
            const gifs = data.map(gif => {
                const { title, id } = gif;
                const { url } = gif.images.downsized_medium;
                return {title, id , url};
            });

          return gifs;
        })
      }
      catch(e){
        return Promise.reject(e);
      }
}
