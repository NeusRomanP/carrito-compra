import CartProduct from "../interfaces/CartProduct";
import "./CartItem.css"

type Props = {
  product: CartProduct;
}
export function CartItem({product}: Props) {
  return (
    <article className="product">
      <span className="amount">
        <button className="remove"><span>-</span></button>
        <span>x{product.amount}</span>
        <button className="add"><span>+</span></button>
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
      <span className="image">
        <div className="image-container">
          <img src={product.image} alt={product.title} />
        </div>
      </span>
    </article>
  )
}