import CartProduct from "../interfaces/CartProduct";
import { CartItem } from "./CartItem";
import './ProductsCart.css'

type Props = {
  products: CartProduct[];
}
export function ProductsCart({products}: Props) {
  return (
    <section className="cart">
      <h2>Productos del carrito</h2>
      { products.length ?
        products.map(product => (
          <CartItem product={product} key={product.id}/>
        )) :
        (
          <p>El carrito està vacío</p>
        )
      }
    </section>
  )
}