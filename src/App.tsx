import { ProductForm } from './ProductForm'
import { useState, useEffect } from 'react'
import './App.css'
import Product from './interfaces/Product';

function App() {
  const [products, setProducts] = useState<any>([]);

  const addProduct = (product: Product) => {
    setProducts((prevProducts: Product[]) => [...prevProducts, product]);
  }

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <>
      <ProductForm addProduct={addProduct}/>
    </>
  )
}

export default App
