import { useState } from 'react';
import { useLocation } from 'wouter';

import useGifs from 'hooks/useGifs';
import ListOfGifs from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingsSearches';


export default function Home () {
    const [keyword, setKeyword] = useState('');
    const [, push] = useLocation();
    const { gifs } = useGifs();

    const handleSubmit = (e) => {
        e.preventDefault();
        push(`/search/${keyword}`);
    }

    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' placeholder='Busca gifs aquí' value={keyword}/>
                <input type='submit' value='Buscar' />
            </form>

            <h2>Última búsqueda</h2>

            <ListOfGifs gifs={gifs} />
            
            <TrendingSearches />
        </>
    )
}
