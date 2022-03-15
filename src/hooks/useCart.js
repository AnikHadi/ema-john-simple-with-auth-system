import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";
import useProducts from "./useProducts";

const useCart = () => {

    const { products } = useProducts();
    const [grandTotalQuantity, setGrandTotalQuantity] = useState(10);

    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const strodeCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity0 = savedCart[key];
                    addedProduct.quantity = quantity0;
                    strodeCart.push(addedProduct);
                }
            }
            setCart(strodeCart);
        }
    }, [products])

    return {
        cart,
        setCart,
        grandTotalQuantity,
        setGrandTotalQuantity
    }
}

export default useCart;