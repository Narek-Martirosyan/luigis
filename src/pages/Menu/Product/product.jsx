import { useEffect, useState, useRef } from "react";
import "./product.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeCartCounter } from "../../../features/user/userSlice";
import { addToCart, removeCard } from "../../../api/products";

export const Product = ({ products, prod1, prod2, title }) => {
    const [prodName, setProdName] = useState([]);
    const img = "https://rae-pizza-server.herokuapp.com/";
    const cart = useSelector(state => state.user.cart);
    const cartCounter = useSelector(state => state.user.cartCounter);
    const dispatch = useDispatch()
    const token = localStorage.getItem("token");

    useEffect(() => {
        setProdName(products?.filter(product => product.productTag === prod1 || product.productTag === prod2));
    }, [products]);

    const loaderHandler = async (e, id) => {
        if (token) {
            e.target.innerHTML = "";
            e.target.className = "spinner spc spinner-slow";

            const res = await addToCart(id);
            if (res.statusText === "OK") {
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
        e.target.className = "spinner spc spinner-slow";

        const res = await removeCard(id);
        if (res.statusText === "OK") {
            e.target.innerHTML = "Add to cart"
            dispatch(changeCartCounter(!cartCounter));
            e.target.className = "";
        }
    }

    return (
        <section className="story-area left-text center-sm-text">
            <div className="container">

                <div className="heading">
                    <h2 className="styled-title h2-titles">{title}</h2>
                </div>

                <div className="row">
                    {prodName?.map(product => (
                        <div className="col-lg-3 col-md-4  col-sm-6 mb-30" key={product._id + product.productNameArm}>
                            <div className="center-text mb-30">
                                <div className="ïmg-200x mlr-auto pos-relative img-parent">
                                    <img
                                        src={img + product.productImage}
                                        alt={product?.productNameEng}
                                        className="seller-pizza"
                                    />
                                    <div className="pizza-description">
                                        <h6>{product?.productNameEngDescription}</h6>
                                    </div>
                                </div>

                                <h5>{product?.productNameEng}</h5>
                                <h4 className="color-primary"><b>֏{product?.productPrice}</b></h4>

                                <h6 className="mt-20 btn-parent">
                                    <span className="btn-brdr-primary plr-25 h-white a.h-white">
                                        {cart.includes(product._id) ?
                                            <span onClick={(e) => removeCartHandler(e, product._id)}>Added</span> :
                                            <span onClick={(e) => loaderHandler(e, product._id)}>
                                                Add to cart
                                            </span>}


                                    </span>
                                </h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}