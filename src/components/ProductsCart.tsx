import CartProduct from "../interfaces/CartProduct";
import { CartItem } from "./CartItem";
import './ProductsCart.css'

type Props = {
  products: CartProduct[];
  decreaseAmount: (id: number) => void;
  increaseAmount: (id: number) => void;
}
export function ProductsCart({products, decreaseAmount, increaseAmount}: Props) {
  return (
    <section className="cart">
      <h2>Productos del carrito</h2>
      { products.length ?
        products.map(product => (
          <CartItem product={product}
                    decreaseAmount={decreaseAmount}
                    increaseAmount={increaseAmount}
                    key={product.id}/>
        )) :
        (
          <p>El carrito està vacío</p>
        )
      }
      <article className="totals">
        <strong>
          Total productos:
          <span>
            {products.reduce((acc, item) => acc + item.amount, 0)}
          </span>
        </strong>
        <strong>
          Total precio:
          <span>$
            {
              products.reduce((acc, item) => acc + (item.amount * item.price), 0).toFixed(2)
            }
          </span>
        </strong>
      </article>
    </section>
  )
}