import "./menuSection.scss";
import { Link } from 'react-router-dom';
import headingLogo from './img/heading_logo.png';
import { Tags } from "./Tags";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCartCounter } from "../../../features/user/userSlice";
import { addToCart, removeCard } from "../../../api/products";

export const MenuSection = ({ products }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const img = "https://rae-pizza.onrender.com/";
    const cart = useSelector(state => state.user.cart);
    const cartCounter = useSelector(state => state.user.cartCounter);
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");

    useEffect(() => {
        setFilteredProducts(products?.filter(product => product.productTag === "Pizza 24").slice(0, 8));
    }, [products]);

    const filteredProductsHandler = (tagname) => {
        setFilteredProducts(products?.filter(product => product.productTag === tagname).slice(0, 8));
    }

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
        <section>
            <div className="container">
                <div className="heading">
                    <img className="heading-img" src={headingLogo} alt="logo" />
                    <h2 className="styled-title for-today-title">Our Menu For Today</h2>
                </div>

                <Tags products={products} filteredProductsHandler={filteredProductsHandler} />

                <div className="row">

                    {filteredProducts?.map(product => (
                        <div className="col-md-6 food-menu pizza" key={product._id + product.productNameEng}>
                            <div className="sided-90x mb-30 ">
                                <div className="s-left">
                                    <img className="br-3" src={img + product?.productImage} alt="Menu" />
                                </div>

                                <div className="s-right">
                                    <h5 className="mb-10"><b>{product?.productNameEng}</b><b
                                        className="color-primary float-right">֏{product?.productPrice}</b>
                                    </h5>
                                    <span className="btn-brdr-primary plr-5 h-white float-right small-add">
                                        {cart.includes(product._id) ?
                                            <span onClick={(e) => removeCartHandler(e, product._id)}>Added</span> :
                                            <span onClick={(e) => loaderHandler(e, product._id)}>Add to cart</span>}
                                    </span>
                                    <p className="pr-70">{product?.productNameEngDescription}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>{/* row */}

                <h6 className="center-text mt-40 mt-sm-20 mb-30">
                    <Link to="/menu" className="btn-primaryc plr-25">
                        <b>SEE OUR MENU</b>
                    </Link>
                </h6>
            </div> {/* container */}
        </section>
    )
}
