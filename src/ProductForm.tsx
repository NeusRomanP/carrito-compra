import './ProductForm.css'
export function ProductForm() {
  return (
    <form>
      <p>Agrega los productos al carro de compra</p>
      <div className='form-items'>
        <div className='inputs'>
          <input type="number" placeholder="Cantidad" id='amount' />
          <input type="text" placeholder="ID del Producto" id='productId' />
        </div>
        <button type="submit">Agregar</button>
      </div>
    </form>
  )
}