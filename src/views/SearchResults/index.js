import { useEffect, useRef, useCallback } from 'react';
import debounce from 'just-debounce-it';

import ListOfGifs from 'components/ListOfGifs';
import useGifs from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';

export default function SearchResults ( {params} ) {
  const { keyword } = params;
  const externalRef = useRef();
  const { loading, gifs, setPage } = useGifs( { keyword } );
  const { isNearScreen } = useNearScreen( { externalRef: loading ? null : externalRef, distance: '300px', once: false } );
//eslint-disable-next-line
  const debounceHandleNextPage =  useCallback(
    debounce( () => setPage(prevPage => prevPage + 1), 1000 )
  )

  useEffect(function () {
    if(isNearScreen) debounceHandleNextPage();
  },[isNearScreen, debounceHandleNextPage])

  return <>
    {loading 
    ? <h2>Cargando ...</h2>
    : <>
      <ListOfGifs gifs={gifs}/>
      <span ref={externalRef}></span>
    </>}

  </>
}
