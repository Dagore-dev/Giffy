

import ListOfGifs from 'components/ListOfGifs';
import useGifs from 'hooks/useGifs';

export default function SearchResults ( {params} ) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs( { keyword } );

  function handleNextPage () {
    setPage(prevPage => prevPage + 1)
  }

  return <>
    {loading 
    ? <h2>Cargando ...</h2>
    : <ListOfGifs gifs={gifs}/>}

    <button onClick={handleNextPage}>Next page</button>
  </>
}
