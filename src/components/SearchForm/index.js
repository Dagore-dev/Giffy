import React, { useState } from 'react';
import { useLocation } from 'wouter';

function SearchForm () {
    const [keyword, setKeyword] = useState('');
    const [, push] = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        push(`/search/${keyword}`);
    }

    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' placeholder='Busca gifs aquí' value={keyword}/>
            <input type='submit' value='Buscar' />
        </form>
    )
}

export default React.memo(SearchForm);