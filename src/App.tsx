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
    const totalAmount = cartProduct ? cartProduct.amount + amount : amount;

    if (totalAmount <= 99 && totalAmount >= 1) {
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
  }

  const decreaseAmount = (id: number) => {
    setProducts(
      products.map(p => {
        if (id === p.id) {
          p.amount--;
        }
        return p;
      }).filter(p => p.amount > 0)
    )
  }

  const increaseAmount = (id: number) => {
    setProducts(
      products.map(p => {
        if (id === p.id && p.amount < 99) {
          p.amount++;
        }
        return p;
      })
    )
  }

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <>
      <main>
        <ProductForm addProduct={addProduct}/>
        <ProductsCart products={products}
                      decreaseAmount={decreaseAmount}
                      increaseAmount={increaseAmount}/>
      </main>
    </>
  )
}

export default App
