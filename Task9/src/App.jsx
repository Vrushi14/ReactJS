import react from 'react';
import Person from './components/Person';
import Product from './components/Product';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="Vrushiii" age="21" />
      <Product name="Sneakers" price="$6000" />
    </div>
  );
}

export default App;