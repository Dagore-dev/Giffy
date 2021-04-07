const apiKey = 'QNZXR0lqOh2HB7pPLAUUCM7pQhC5GVRv' ;

export default function getSingleGif  ( params ) {
    const apiURL = `https://api.giphy.com/v1/gifs/${params.id}?api_key=${apiKey}`;

    try{
        return fetch(apiURL)
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