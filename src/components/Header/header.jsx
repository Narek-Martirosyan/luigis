import './header.scss';
import logo from "./img/logo-white.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Registration } from '../../pages/Registration';
import { MdLogout } from "react-icons/md";
import { changeCart } from '../../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const token = localStorage.getItem("token");
    const reduxToken = useSelector(state => state.user.token);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    const showRegisterHandler = () => {
        setShowRegister(!showRegister);
    }

    const showLoginHandler = () => {
        setShowLogin(!showLogin);
    }

    const logoutHandler = () => {
        Swal.fire({
            title: 'Are you sure? :(',
            text: "You want to log out :(",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out :(',
            cancelButtonText: "No, I'm staying :)"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("token");
                dispatch(changeCart([]));
                navigate(pathname);
                setShowMenu(false);
            }
        });
    }

    useEffect(() => {
        setShowMenu(false);
    }, [pathname]);

    // useEffect(() => {
    //     if (!reduxToken) {
    //         localStorage.removeItem("token");
    //         navigate(pathname);
    //     }
    // }, []);

    return (
        <header>
            <div className="container">
                <Link to="/" className="logo"><img src={logo} alt="Logo" /></Link>

                <div className="right-area">
                    {token ?
                        <h6>
                            <span
                                className="plr-20 color-white btn-fill-primary me-1 ordernow"
                                onClick={() => navigate("/cart")}
                            >Order now</span>
                            <span
                                className="plr-20 color-white btn-fill-primary logout"
                                onClick={logoutHandler}
                            >Logout <MdLogout className='logout-icon' /></span>
                        </h6> :
                        <h6>
                            <span
                                className="plr-20 color-white btn-fill-primary me-1"
                                onClick={() => showLoginHandler()}
                            >Login</span>

                            <span
                                className="plr-20 color-white btn-fill-primary"
                                onClick={() => showRegisterHandler()}
                            >Sign Up</span>
                        </h6>
                    }
                </div>

                {showRegister ? <Registration
                    logIn={"login slide-up"}
                    signUp={"signup"}
                    showRegisterHandler={showRegisterHandler}
                /> : null}

                {showLogin ? <Registration
                    logIn={"login"}
                    signUp={"signup slide-up"}
                    showLoginHandler={showLoginHandler}
                /> : null}

                <span className="menu-nav-icon" data-menu="#main-menu" onClick={() => setShowMenu(!showMenu)}>
                    <i className="ion-navicon"><GiHamburgerMenu /></i>
                </span>

                <ul className={showMenu ? "main-menu visible-menu font-mountainsre" :
                    "main-menu font-mountainsre"} id="main-menu"
                >
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="about_us">ABOUT US</Link></li>
                    <li><Link to="menu">MENU</Link></li>
                    <li><Link to="cart">CART</Link></li>
                    <li><Link to="contact">CONTACT</Link></li>
                    {token && <li><span onClick={logoutHandler} className="logout">LOGOUT</span></li>}
                </ul>

                <div className="clearfix"></div>
            </div>
        </header>
    )
}