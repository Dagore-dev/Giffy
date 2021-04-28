import { Redirect } from 'wouter';
import {Helmet} from 'react-helmet';

import useSingleGif from 'hooks/useSingleGif';
import Gif from 'components/Gif';

export default function Detail( { params } ) {
    
    const { gif, isLoading, isError } = useSingleGif( { id: params.id } );
    const title = gif ? gif.title : 'Giffy';


    if(isLoading) return (
        <>
            <Helmet>
                <title>Cargando ...</title>
            </Helmet>
            <h2>Cargando ...</h2>
        </>
    )
    if(isError) return <Redirect to='/NotFound' />
    if(!gif) return null

    return  (
        <>
            <Helmet>
                <title>{title} | Giffy</title>
            </Helmet>
            <Gif {...gif} />
        </>
    )
}