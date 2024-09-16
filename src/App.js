import { useEffect, useState } from 'react';
import './App.css';


function App() {
 const [products, setProducts] = useState([])
 const url = "http://localhost:3000/products"

 useEffect(async () => {
  const res = await fetch(url);
  const data = await res.json()
  setProducts(data)

  console.log(products)
 }, [])

 return (
  <div className="App">
   <h1>Lista de produtos</h1>
  </div>
 );
}

export default App;
