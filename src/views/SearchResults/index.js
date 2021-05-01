import { useEffect, useRef, useCallback } from 'react';
import debounce from 'just-debounce-it';
import {Helmet} from 'react-helmet';

import ListOfGifs from 'components/ListOfGifs';
import useGifs from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';


export default function SearchResults ( {params} ) {
  const { keyword } = params;
  const externalRef = useRef();
  const { loading, gifs, setPage } = useGifs( { keyword } );
  const { isNearScreen } = useNearScreen( { externalRef: loading ? null : externalRef, distance: '100px', once: false } );

  const debounceHandleNextPage =  useCallback(() => debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ),[setPage])

  const title = `Resultados para "${keyword}"`;

  useEffect(function () {
    if(isNearScreen) debounceHandleNextPage();
  },[isNearScreen, debounceHandleNextPage])

  return <>
    {loading 
    ? <h2>Cargando ...</h2>
    : <>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={title}></meta>
        </Helmet>

        <ListOfGifs gifs={gifs} keyword={keyword}/>

        <div id='visor' ref={externalRef}></div>
      </>
    }
  </>
}
