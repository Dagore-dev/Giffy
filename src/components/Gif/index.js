import React from 'react';
import { Link } from 'wouter';

import 'components/Gif/styles.css';

function Gif ( { title, id, url } ) {

    return(
        <div className='gif'>
            <Link to={`/gif/${id}`}>
                <h4 className='gif__title'> {title} </h4>
                <img loading='lazy' className='gif__img' src={url} alt={title} />
            </Link>
        </div>
    )
}

export default React.memo(Gif);