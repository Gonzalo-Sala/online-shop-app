import { ProductContext } from './ProductContext'
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

export const ProductProvider = ({ children }) => {

    const urlBase = "https://fakestoreapi.com/products"

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const data = await fetch(urlBase)
            const json = await data.json()
            setProducts(json)
        } catch (error) {
            Swal.fire(
                {
                    icon: "error",
                    title: "¡Error!",
                    text: "There was a problem loading the products"
                }
            )
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <>
            <ProductContext.Provider value={{products}}>
                {children}
            </ProductContext.Provider>
        </>
    )
}
