import { useEffect, useState } from 'react';

import useGlobalGifs from '../../hooks/useGlobalGifs';
import getSingleGif from '../../services/getSingleGif';
import Gif from '../../components/Gif';

export default function Detail( { params } ) {
    
    const gifs = useGlobalGifs();
    const gif = gifs.find(singleGif => singleGif.id === params.id);
    const [gifRequired, setGifRequired] = useState();

    useEffect(() => {
        getSingleGif(params)
            .then(res => setGifRequired(res))
    },[params])

    return gif !== undefined ?  <Gif {...gif} /> : <Gif {...gifRequired} />
}