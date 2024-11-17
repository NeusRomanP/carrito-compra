import { ProductForm } from './components/ProductForm'
import { useState, useEffect } from 'react'
import './App.css'
import Product from './interfaces/Product';
import CartProduct from './interfaces/CartProduct';
import { ProductsCart } from './components/ProductsCart';

function App() {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const addProduct = (product: Product, amount: number) => {
    const cartProduct = products.find(p => p.id === product.id);

    if (cartProduct) {
      setProducts((prevProducts: CartProduct[]) => {
        return prevProducts.map(p => {
          return p.id === product.id
            ? {...product, amount: cartProduct.amount + amount} 
            : p;
        });
      });
    } else {
      setProducts((prevProducts: CartProduct[]) => {
        return [...prevProducts, {...product, amount: amount}];
      });
    }
  }

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <>
      <main>
        <ProductForm addProduct={addProduct}/>
        <ProductsCart products={products} />
      </main>
    </>
  )
}

export default App
