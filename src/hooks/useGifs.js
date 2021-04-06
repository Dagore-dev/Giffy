import {useState, useEffect} from 'react';

import getGifs from '../services/getGifs';

export default function useGifs ( { keyword } = { keyword: null } ) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    setLoading(true);

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'Bienvenido';

    getGifs( { keyword: keywordToUse } )
      .then(gifsURL => {
        setGifs(gifsURL);
        setLoading(false);
        localStorage.setItem('lastKeyword', keyword);
      });
  },[keyword])

  return { loading, gifs }
}