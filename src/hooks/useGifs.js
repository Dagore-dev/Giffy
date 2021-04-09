import {useState, useEffect, useContext} from 'react';

import getGifs from 'services/getGifs';
import GifContext from 'context/GifsContext'

export default function useGifs ( { keyword } = { keyword: null } ) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifContext);

  useEffect(function () {
    setLoading(true);

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'Bienvenido';

    getGifs( { keyword: keywordToUse } )
      .then(gifsURL => {
        setGifs(gifsURL);
        setLoading(false);
        localStorage.setItem('lastKeyword', keyword);
      });
  },[keyword, setGifs])

  return { loading, gifs }
}