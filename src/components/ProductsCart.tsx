import CartProduct from "../interfaces/CartProduct";
import { CartItem } from "./CartItem";
import './ProductsCart.css'

type Props = {
  products: CartProduct[];
}
export function ProductsCart({products}: Props) {
  return (
    <section className="">
      {
        products.map(product => (
          <CartItem product={product} key={product.id}/>
        ))
      }
    </section>
  )
}