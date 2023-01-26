import { useState } from "react";
import "./registration.scss";
import { registration, loginUser } from "../../api/user";
import { useSelector, useDispatch } from "react-redux";
import { changeUserData } from "../../features/user/userSlice";
import { useEffect } from "react";

export const Registration = ({ logIn, signUp, showRegisterHandler, showLoginHandler }) => {
    const [showLoader, setShowLoader] = useState(false);
    const dispatch = useDispatch();
    const errors = useSelector(state => state.error.data);
    const loginError = useSelector(state => state.error.loginData);
    const [loginErrors, setLoginErrors] = useState({
        login: "",
        password: ""
    });
    const [login, setLogin] = useState(logIn);
    const [signup, setsignup] = useState(signUp);
    const [registerData] = useState({
        username: "",
        usermail: "",
        password: ""
    });
    const [loginData] = useState({
        usermail: "kimkardashyan@gmail.com",
        password: "kardashyan"
    });

    const loginHandler = (e) => {
        setsignup("signup slide-up");
        setLogin("login");
    }

    const signupHandler = () => {
        setsignup("signup");
        setLogin("login slide-up");
    }

    const chooseRegistrOrLoginHandler = () => {
        if (showLoginHandler) {
            showLoginHandler();
        } else {
            showRegisterHandler();
        }
    }

    const onRegisterChangeHandler = (value, id) => {
        registerData[id] = value;
    }

    const onRegisterSubmitHandler = async (e) => {
        e.preventDefault();
        setShowLoader(true);
        const res = await registration(registerData);

        if (res.status === 200) {
            setShowLoader(false);
            dispatch(changeUserData(res.data));
            showRegisterHandler();
        }
    }

    const onLoginChangeHandler = (value, id) => {
        loginData[id] = value;
    }

    const onLoginSubmitHandler = async (e) => {
        e.preventDefault();
        setShowLoader(true);

        if (loginData.usermail.trim() === "") {
            loginErrors.login = "Field is required";
            setLoginErrors({ ...loginErrors });
            setShowLoader(false);
        } else {
            loginErrors.login = "";
            setLoginErrors({ ...loginErrors });
        }

        if (loginData.password.trim() === "") {
            loginErrors.password = "Field is required";
            setLoginErrors({ ...loginErrors });
            setShowLoader(false);
        } else {
            loginErrors.password = "";
            setLoginErrors({ ...loginErrors });
        }

        if (loginData.usermail && loginData.password) {
            const res = await loginUser(loginData);
            console.log(res);

            if (res.status === 200) {
                setShowLoader(false);
                dispatch(changeUserData(res.data));
                showLoginHandler();
            }
        }
    }

    useEffect(() => {
        setShowLoader(false);
    }, [loginError, errors]);

    return (
        <div className="registration-page" onMouseDown={() => chooseRegistrOrLoginHandler()}>
            <div className="form-structor" onMouseDown={(e) => e.stopPropagation()}>

                <form
                    className={signup}
                    onChange={(e) => onRegisterChangeHandler(e.target.value, e.target.id)}
                    onSubmit={(e) => onRegisterSubmitHandler(e)}
                >
                    <h2 className="form-title" id="signup" onClick={(e) => signupHandler(e)}><span>or</span>Sign up</h2>

                    <div className="form-holder">
                        {errors?.map(error => {
                            if (error.param === "username") {
                                return <label key={error.msg}>{error.msg}</label>
                            }
                            return null
                        })}
                        <input type="text" className="input" id="username" placeholder="Name" />

                        {errors?.map(error => {
                            if (error.param === "usermail") {
                                return <label key={error.msg}>{error.msg}</label>
                            }
                            return null
                        })}
                        <input type="email" className="input" id="usermail" placeholder="Email" />

                        {errors?.map(error => {
                            if (error.param === "password") {
                                return <label key={error.msg}>{error.msg}</label>
                            }
                            return null
                        })}
                        <input type="password" className="input" id="password" placeholder="Password" />
                    </div>

                    <button className="submit-btn">
                        {showLoader ? <span className="spinner spinner-slow"></span> : "Sign up"}
                    </button>
                </form>

                <form
                    className={login}
                    onChange={(e) => onLoginChangeHandler(e.target.value, e.target.id)}
                    onSubmit={(e) => onLoginSubmitHandler(e)}
                >
                    <div className="center">
                        <h2 className="form-title" id="login" onClick={(e) => loginHandler(e)}><span>or</span>Log in</h2>

                        <div className="form-holder">
                            {loginErrors.login ? <label>{loginErrors.login}</label> : null}
                            <input
                                type="email"
                                className="input"
                                id="usermail"
                                placeholder="Email"
                                defaultValue={"kimkardashyan@gmail.com"}
                            />

                            {loginErrors.password ? <label>{loginErrors.password}</label> : null}
                            <input
                                type="password"
                                className="input"
                                id="password"
                                placeholder="Password"
                                defaultValue={"kardashyan"}
                            />
                        </div>
                        {loginError ? <label>Login or password is not correct</label> : null}

                        <button className="submit-btn">
                            {showLoader ? <span className="spinner spinner-slow"></span> : "Log in"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
