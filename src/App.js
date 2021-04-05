import { Route } from 'wouter';

import './App.css';
import ListOfGifs from './components/ListOfGifs';
import Home from './views/Home';

function App() {

  return (
    <div className='App'>
      <section className='App-content'>

        <Route component={ListOfGifs} path='/search/:keyword' />

        <Route component={Home} path='/'/>   

      </section>
    </div>
  );
}

export default App;
