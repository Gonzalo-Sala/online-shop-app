import { useContext, useEffect, useState } from "react"
import "../styles/CardComponent.css"
import { CartContext } from "../context/CartContext"

export const CardComponent = ({id, image, title, description, price, handlerAdd, handlerRemove }) => {

    const { shoppingList } = useContext(CartContext)
    
    const [added, setAdded] = useState(false)

    const addProduct = () => {
        handlerAdd()
        setAdded(true)
    }

    const removeProduct = () => {
        handlerRemove()
        setAdded(false)
    }

    const checkAdded = () => {
        const bool = shoppingList.some(product => product.id == id)
        setAdded(bool)
    }

    useEffect(() => {
        checkAdded()
    }, [])

    return (
        <>
            <div className="card">
                <img className="card-img" src={image} alt={title} />
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-description">{description}</p>
                    <p className="card-price">${price}</p>

                    {added ?
                        <button type="button" className="remove-button" onClick={removeProduct}>Add to cart</button>
                        :
                        <button type="button" className="add-button" onClick={addProduct}>Remove from cart</button>
                    }
                </div>
            </div>
        </>
    )
}
