import react  from 'react';
import Person from './Components/Person';
import Product from './Components/Product';
import './App.css';

function App() {
  return (
    <div>
      <Person name="Vrushangi" age="20" />
      <Product name="Laptop" price="$1200" />

      <Person name="Ankita" age="19" />
      <Product name="Mobile" price="$500" />
    </div>
  );
}

export default App;