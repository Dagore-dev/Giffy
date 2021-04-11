import {useState, useEffect, useContext} from 'react';

import getGifs from 'services/getGifs';
import GifContext from 'context/GifsContext'

const initialPage = 0;

export default function useGifs ( { keyword } = { keyword: null } ) {
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);
  const [page, setPage] = useState(initialPage);
  const { gifs, setGifs } = useContext(GifContext);
  
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'Bienvenido';

  useEffect(function () {
    setLoading(true);

    getGifs( { keyword: keywordToUse } )
      .then(gifsURL => {
        setGifs(gifsURL);
        setLoading(false);
        localStorage.setItem('lastKeyword', keyword);
      });
  },[keyword, keywordToUse, setGifs])

  useEffect(function (){
    if(page === initialPage) return

    setLoadingPage(true);

    getGifs( { keyword: keywordToUse, page } )
      .then(nextGifts => {
        setGifs(prevGifs => prevGifs.concat(nextGifts));
        setLoadingPage(false);
      })
  },[keywordToUse, setGifs, page])

  return { loading, loadingPage, setPage, gifs }
}