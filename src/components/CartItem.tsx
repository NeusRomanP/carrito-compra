import CartProduct from "../interfaces/CartProduct";
import "./CartItem.css"

type Props = {
  product: CartProduct;
}
export function CartItem({product}: Props) {
  return (
    <article className="product">
      <span className="amount">
        {product.amount}
      </span>
      <span title={product.title} className="title">
        {product.title}
      </span>
      <span className="unit-price">
        ${product.price}
      </span>
      <span className="total-price">
        ${product.price * product.amount}
      </span>
    </article>
  )
}