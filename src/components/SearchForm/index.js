import React, { useState } from 'react';
import { useLocation } from 'wouter';

import './styles.css';

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
        <form className='form' onSubmit={handleSubmit}>
            <input className='form__text' onChange={handleChange} type='text' placeholder='Busca gifs aquí' value={keyword}/>
            <input className='form__button' type='submit' value='Buscar' />
        </form>
    )
}

export default React.memo(SearchForm);