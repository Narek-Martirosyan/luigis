import "./cart.scss";
import { CartTopSection } from "./CartTopSection";
import { useSelector, useDispatch } from "react-redux";
import { removeCard } from "../../api/products";
import { changeCartCounter, changeUserCart, changeProductPrice } from "../../features/user/userSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
    const cart = useSelector(state => state.user.userCart);
    const imgURL = "https://rae-pizza-server.herokuapp.com/";
    const cartcounter = useSelector(state => state.user.cartCounter);
    const dispatch = useDispatch();
    const [priceList, setPriceList] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const navigate = useNavigate();

    const removeProduct = async (e, id) => {
        e.target.innerHTML = "";
        e.target.className = "spinner cart spinner-slow";
        const res = await removeCard(id);

        if (res.statusText === "OK") {
            dispatch(changeCartCounter(!cartcounter));
            e.target.className = "";
        }
    }

    useEffect(() => {
        priceList.splice(0);
        cart.forEach(product => {
            priceList.push(product.productPrice * product.quantity);
        });
        setPriceList([...priceList]);
    }, [cart]);

    useEffect(() => {
        let res = priceList.reduce((aggr, value) => {
            return aggr + value;
        }, 0);

        setSubtotal(res);
    }, [priceList]);

    useEffect(() => {
        setTax(Math.floor(subtotal * 5 / 100));
    }, [subtotal]);

    useEffect(() => {
        dispatch(changeProductPrice(subtotal + tax + 500));
    }, [tax]);

    const changeQuantityHandler = (quantity, id) => {
        dispatch(changeUserCart({ quantity, id }));
    }

    return (
        <div>
            <CartTopSection />

            <div className="shopping-cart">

                <div className="column-labels">
                    <label className="product-image">Image</label>
                    <label className="product-details">Product</label>
                    <label className="product-price">Price</label>
                    <label className="product-quantity">Quantity</label>
                    <label className="product-removal">Remove</label>
                    <label className="product-line-price">Total</label>
                </div>

                {cart?.map(product => (
                    <div className="product" key={product.productNameArm + product._id + product.productNameEng}>
                        <div className="product-image">
                            <img src={imgURL + product?.productImage} />
                        </div>
                        <div className="product-details">
                            <div className="product-title">{product?.productNameEng}</div>
                            <p className="product-description">{product?.productNameEngDescription}</p>
                        </div>
                        <div className="product-price">{product?.productPrice}</div>
                        <div className="product-quantity">
                            <input
                                type="number"
                                defaultValue="1"
                                min="1"
                                onChange={(e) => changeQuantityHandler(e.target.value, product._id)}
                            />
                        </div>
                        <div className="product-removal">
                            <button className="remove-product" onClick={(e) => removeProduct(e, product._id)}>
                                Remove
                            </button>
                        </div>
                        <div className="product-line-price">{product.productPrice * product.quantity}</div>
                    </div>
                ))}

                <div className="totals">
                    <div className="totals-item">
                        <label>Subtotal</label>
                        <div className="totals-value" id="cart-subtotal">{subtotal}</div>
                    </div>
                    <div className="totals-item">
                        <label>Tax (5%)</label>
                        <div className="totals-value" id="cart-tax">{tax}</div>
                    </div>
                    <div className="totals-item">
                        <label>Shipping</label>
                        <div className="totals-value" id="cart-shipping">500</div>
                    </div>
                    <div className="totals-item totals-item-total">
                        <label>Grand Total</label>
                        <div className="totals-value" id="cart-total">
                            <strong>
                                {subtotal + tax + 500}
                            </strong>
                        </div>
                    </div>
                </div>

                <button className="checkout" onClick={() => navigate("/checkout")}>Checkout</button>

            </div>
        </div>
    )
}