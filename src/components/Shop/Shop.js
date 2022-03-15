import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    // All product state
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch("./products.JSON")
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data)
    //             setDisplayProduct(data)
    //         });
    // }, [])

    const { products, displayProduct, setDisplayProduct } = useProducts();
    const { cart, setCart } = useCart();
    const navigate = useNavigate();

    const reviewBtnHandler = () => {
        navigate("/review", {
            replace: true,
        });
    }

    // Shopping Cart state
    // const [cart, setCart] = useState([]);
    const cartBtnHandle = (product) => {
        const newCart = [...cart, product]
        addToDb(product.key)
        setCart(newCart)
    }

    // useEffect(() => {
    //     if (products.length) {
    //         const savedCart = getStoredCart();
    //         const strodeCart = [];
    //         for (const key in savedCart) {
    //             const addedProduct = products.find(product => product.key === key);
    //             if(addedProduct) {
    //                 const quantity0 = savedCart[key];
    //                 addedProduct.quantity = quantity0;
    //                 strodeCart.push(addedProduct);
    //             }
    //         }
    //         setCart(strodeCart);
    //     }
    // }, [products])

    // Search input

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(matchProducts);
    }


    return (
        <div>
            <div className='search-input'>
                <input onChange={handleSearch} className='form-control' type="text" placeholder='type here to search' />
            </div>
            <div className='shop'>
                <div className='shop-details'>
                    {
                        displayProduct.map(pd => <Product
                            product={pd}
                            key={pd.key}
                            cartBtnHandle={cartBtnHandle}
                        ></Product>)
                    }
                </div>

                <div className='shop-order-summary'>
                    <Cart
                        cart={cart}
                    ></Cart>
                    <button onClick={reviewBtnHandler}> Review your order</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;