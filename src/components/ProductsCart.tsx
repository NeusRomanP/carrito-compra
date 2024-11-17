import CartProduct from "../interfaces/CartProduct";
import { CartItem } from "./CartItem";
import './ProductsCart.css'

type Props = {
  products: CartProduct[];
}
export function ProductCart({products}: Props) {
  return (
    <section>
      {
        products.map(product => (
          <CartItem product={product} key={product.id}/>
        ))
      }
    </section>
  )
}