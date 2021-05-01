
import './styles.css';
import Gif from 'components/Gif';


export default function ListOfGifs ( { gifs, keyword } ) {

    return(
        <>
            <h1>{ keyword }</h1>
            <div className='ListOfGifs'>
                {gifs.map(({ id, title, url }) => <Gif key={id} id={id} title={title} url={url}/>)}
            </div>
        </>
    )
}