import {useEffect, useState} from 'react';

import getGifs from '../../services/getGifs';
import Gif from '../Gif';

const ListOfGifs = ( {params} ) => {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);

    getGifs( {keyword} )
      .then(gifsURL => {
        setGifs(gifsURL);
        setLoading(false);
      });
  },[keyword])

  if(loading) return <h2>Cargando ...</h2>

  return(
    <h2>
      {gifs.map(({ id, title, url }) => <Gif key={id} id={id} title={title} url={url}/>)}
    </h2>
  )
}

export default ListOfGifs;