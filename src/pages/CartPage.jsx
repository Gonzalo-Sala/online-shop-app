import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Swal from "sweetalert2"

export const CartPage = () => {

  const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext)

  const calculateTotal = () => {
    return shoppingList.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
  }

  const handlePurchase = () => {
    const productsPurchased = shoppingList.map(product => `${product.title} x ${product.quantity}`).join(`\n`)
    Swal.fire({
      icon: "success",
      title: "Purchase completed successfully",
      html: `<p>You purchased: </p> <pre>${productsPurchased}</pre>`
    })
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Cant</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map(product => (
            <tr key={product.id}>
              <th scope="row">{product.title}</th>
              <td>${product.price}</td>
              <td>
                <button className="btn btn-outline-primary" onClick={() => decrementQuantity(product.id)}>-</button>
                <button className="btn btn-primary">{product.quantity}</button>
                <button className="btn btn-outline-primary" onClick={() => incrementQuantity(product.id)}>+</button>
              </td>
              <td><button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Remove</button></td>
            </tr>
          ))}
          <tr>
            <th><b>TOTAL: </b></th>
            <td></td>
            <td></td>
            <td><b>${calculateTotal()}</b></td>
          </tr>
        </tbody>
      </table>

      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button" onClick={handlePurchase}>Purchase</button>
      </div>
    </>
  )
}
