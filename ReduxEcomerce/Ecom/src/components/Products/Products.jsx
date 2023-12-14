import ProductItem from "../ProductItem/ProductItem"
import { useEffect, useState, useCallback } from 'react';
const Products = () => {

    const [products, setProducts] = useState([])

    const getProducts  = useCallback(async  () => {
        const url = "https://fakestoreapi.com/products"
        const options = {
            method: "GET",
        }
        const response = await fetch(url, options)
        const data =  await response.json()

        const newData = data.map((each) => ({
            id : each.id,
            title : each.title,
            image : each.image,
            price : each.price
        }))
        setProducts(newData)

    }, [] )

    useEffect(() => {
        getProducts()
    }, [getProducts])


    return(
        <div className="container">
            <h2>All products</h2>
            <div className="row">
                {products.map((each) => (
                    <div key={each.id} className="col-md-3">
                        <ProductItem product={each} />
                    </div>
                ))}
            </div>
        </div>
    )

}
export default Products