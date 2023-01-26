import "./bestSellers.scss";
import headingLogo from './img/heading_logo.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { shuffle } from "../../../components/ShuffleArray";
import { addToCart, removeCard } from "../../../api/products";
import { useSelector, useDispatch } from "react-redux";
import { changeCartCounter } from "../../../features/user/userSlice";

export const BestSellers = ({ products }) => {
    const [pizza, setPizza] = useState([]);
    const img = "https://rae-pizza.onrender.com/";
    const cart = useSelector(state => state.user.cart);
    const cartCounter = useSelector(state => state.user.cartCounter);
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");

    useEffect(() => {
        let prod = products?.filter(product => product.productTag.toLowerCase() === "pizza 24".toLowerCase() ||
            product.productTag.toLowerCase() === "Pizza 31".toLowerCase());

        setPizza(shuffle(prod).slice(0, 8));
    }, [products]);

    const loaderHandler = async (e, id) => {
        if (token) {
            e.target.innerHTML = "";
            e.target.className = "spinner spinner-slow";

            const res = await addToCart(id);
            if (res.status === 200) {
                e.target.innerHTML = "Added"
                dispatch(changeCartCounter(!cartCounter));
                e.target.className = "";
            } else {
                e.target.innerHTML = "Something went wrong"
                e.target.className = "";
            }
        } else {
            alert("You are unauthorized please first login");
        }
    }

    const removeCartHandler = async (e, id) => {
        e.target.innerHTML = "";
        e.target.className = "spinner spinner-slow";

        const res = await removeCard(id);
        if (res.status === 200) {
            e.target.innerHTML = "Add to cart"
            dispatch(changeCartCounter(!cartCounter));
            e.target.className = "";
        }
    }

    return (
        <section className="story-area bg-seller color-white pos-relative">
            <div className="pos-bottom triangle-up"></div>
            <div className="pos-top triangle-bottom"></div>

            <div className="container">
                <div className="heading">
                    <img className="heading-img" src={headingLogo} alt="heading logo" />
                    <h2 className="styled-title bestsellers-title">Top 8 Best Sellers</h2>
                </div>

                <div className="row">
                    {pizza?.map(product => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-30" key={product._id}>
                            <div className="center-text mb-30">
                                <div className="ïmg-200x mlr-auto pos-relative img-parent">
                                    <img src={img + product.productImage} alt="seller" className="seller-pizza" />
                                    <div className="pizza-description">
                                        <h6>{product?.productNameEngDescription}</h6>
                                    </div>
                                </div>

                                <h5 className="">{product?.productNameEng}</h5>
                                <h4><b>֏{product?.productPrice}</b></h4>

                                <h6 className="mt-20">
                                    <span className="btn-brdr-primary plr-25 h-white" >
                                        {cart.includes(product._id) ?
                                            <span onClick={(e) => removeCartHandler(e, product._id)}>Added</span> :
                                            <span onClick={(e) => loaderHandler(e, product._id)}>Add to cart</span>}
                                    </span>
                                </h6>
                            </div>
                        </div>
                    ))}
                </div>

                <h6 className="center-text mt-40 mt-sm-20 mb-30">
                    <Link to="/menu" className="btn-primaryc plr-25">
                        <b>SEE OUR MENU</b>
                    </Link>
                </h6>
            </div>{/* container */}
        </section>
    )
}