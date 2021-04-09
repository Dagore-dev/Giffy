import { Link } from 'wouter';

import 'components/Gif/styles.css';

export default function Gif ( { title, id, url } ) {

    return(
        <div className='Gif'>
            <Link to={`/gif/${id}`}>
                <h4> {title} </h4>
                <img loading='lazy' src={url} alt={title} />
            </Link>
        </div>
    )
}
