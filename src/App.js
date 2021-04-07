import { Link, Route } from 'wouter';

import './App.css';
import {GifContextProvider} from './context/GifsContext';
import SearchResults from './views/SearchResults';
import Home from './views/Home';
import Detail from './views/Detail';

function App() {

  return (

    <div className='App'>
        <section className='App-content'>

          <Link to='/'>
            <img className='App-logo' alt='Giffy logo' src='/logo.png' ></img>
          </Link>
          
          <GifContextProvider>

            <Route component={SearchResults} path='/search/:keyword' />

            <Route component={Detail} path='/gif/:id'/>

            <Route component={Home} path='/'/>   

          </GifContextProvider>

        </section>
      </div>
   
  );
}

export default App;
