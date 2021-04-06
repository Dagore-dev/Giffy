import { Link, Route } from 'wouter';

import './App.css';
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
        
        <Route component={SearchResults} path='/search/:keyword' />

        <Route component={Detail} path='/gif/:id'/>

        <Route component={Home} path='/'/>   

      </section>
    </div>
  );
}

export default App;
