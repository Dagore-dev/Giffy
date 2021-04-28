import React, {Suspense} from 'react';
import { Link, Route } from 'wouter';

import './normalize.css';
import './App.css';
import {GifContextProvider} from './context/GifsContext';
import NotFound from 'views/NotFound';

const SearchResultsPage = React.lazy(() => import('views/SearchResults'));
const DetailPage = React.lazy(() => import('views/Detail'));
const HomePage = React.lazy(() => import('views/Home'));

function App() {

  return (

    <div className='App'>
        <Suspense fallback='Cargando...'>
          <section className='App-content'>

            <Link to='/'>
              <img className='App-logo' alt='Giffy logo' src='/logo.png' ></img>
            </Link>
            
            <GifContextProvider>

              <Route component={SearchResultsPage} path='/search/:keyword' />

              <Route component={DetailPage} path='/gif/:id'/>

              <Route component={HomePage} path='/'/> 

              <Route component={NotFound} path='/NotFound' />  

            </GifContextProvider>

          </section>
        </Suspense>
      </div>
   
  );
}

export default App;
