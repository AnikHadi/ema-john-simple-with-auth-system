import { useEffect, useState } from "react"

const useProducts = () => {
    const [displayProduct, setDisplayProduct] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setDisplayProduct(data);
        })
    } , [])

    return {
        products,
        displayProduct,
        setDisplayProduct
    }
}

export default useProducts;
