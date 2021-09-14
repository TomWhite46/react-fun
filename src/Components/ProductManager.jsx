import {useState} from "react";
import Basket from './Basket';
import Product from './Product';

const ProductManager = () => {
    const[products, setProducts] = useState([{"i":0, "nm": "Tomatoes","price": 100, "count":0},{"i":1,"nm": "Sausages","price": 300,"count":0},{"i":2,"nm": "Nice Crispy Bacon","price": 200,"count":0}]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    

    const addItem = (i) => {
        let _products = products;
        setTotalPrice(totalPrice*1 + products[i].price);
        setTotalItems(totalItems+1);
        _products[i].count++;
        setProducts(_products);
    };

    const removeItem = (i) => {
        let _products = products;
        setTotalPrice(totalPrice*1 - products[i].price);
        setTotalItems(totalItems-1);
        _products[i].count--;
        setProducts(_products);
    }

    const removeAll = (i) => {
        let _products = products;
        setTotalPrice(totalPrice - (products[i].price * products[i].count));
        setTotalItems(totalItems-products[i].count);
        _products[i].count = 0;
        setProducts([..._products]);
    }

    const addProduct = (e) => {
        e.preventDefault();
        const {productName, productPrice} = e.target;
        const newItem = {"i":products.length, "nm": productName.value,"price": productPrice.value*1, "count":0};
        setProducts([...products, newItem]);
    }

    const deleteProduct = (i) => {
        const _products = [...products];
        setTotalPrice(totalPrice - (products[i].price * products[i].count));
        setTotalItems(totalItems-products[i].count);
        _products.splice(i,1);
        setProducts(_products);
    }

    let basket = "";

    if (totalItems > 0) {
        basket =
        <>
            <h2>Your basket:</h2>
            <p>Total items in basket: {totalItems} | Total price: £{totalPrice/100}</p>
            {products.map((item,index)=>{item.i=index;
            return item}).filter(item => item.count !== 0).map(({i, nm, count, price}) => <Basket key={i} i={i} nm={nm} count={count} price={price} addItem={addItem} removeItem={removeItem} removeAll={removeAll}/>)}
        </>
    } else {
        basket=<h2>Your basket is empty!</h2>
    }

    return (
        <>  
                <div className="row">
                    <div className="column products">
                        <h2>Our products:</h2>
                        {
                            products.map(({nm, price}, i) => <Product key={i} i={i} nm={nm} price={price} addItem={addItem} deleteProduct={deleteProduct}/>)
                        }
                        </div>
                    <div className="column request" >
                        <h2>Request new items here!</h2>
                        <form id="addProduct" onSubmit={(e)=>addProduct(e)}>
                            <label for="productName">Product: </label>
                            <input type="text" id="productName" name="productName" required/>
                            <br/>
                            <label for="productPrice">Price: </label>
                            <input type="number" id="productPrice" name="productPrice" required/>
                            <br/>
                            <button>Submit</button>
                        </form>
                    </div>
                    <div className="column basket">
                    {
                        basket
                    }
                    </div>
                </div>
        </>
    )


}
export default ProductManager;