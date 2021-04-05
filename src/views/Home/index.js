import { Link } from 'wouter';

const Home = () => {

    return(
        <>
            <h1>Busca gifs de tus temáticas favoritas</h1>

            <form>
                <input type='text'/>
                <input type='submit' value='Buscar' />
            </form>

            <Link to='/search/wandavision'>Gifs de wandavision</Link>
            <Link to='/search/perros'>Gifs de perros</Link>
            <Link to='/search/gatos'>Gifs de gatos</Link>
        </>
    )
}

export default Home;