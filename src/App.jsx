import './App.css'
import Hijo from './Hijo'
import { useState } from 'react';


function App() {
    
    const [ producto, setProducto ] = useState('');

  return (
    <>
      <Hijo producto={producto} setProducto={setProducto} />
    </>
  );
}

export default App
