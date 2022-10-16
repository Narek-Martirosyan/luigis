import "./checkout.scss";
import paypal from "./img/paypal.png"
import visa from "./img/visa.png";
import master from "./img/master.png";
import idram from "./img/idram.jpg";
import master2 from "./img/master2.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Checkout = () => {
    const [cardData] = useState({
        cardholdername: "Kim Kardashan",
        cardnumber: "1234567891234567",
        expiry_date_month: "05",
        expiry_date_year: "2023",
        cvv: "583",
        pp: "",
        cd: "on"
    });
    const [error, setError] = useState(false);
    const [loader, setLoader] = useState(false);
    const [accept, setAccept] = useState(false);
    const navigate = useNavigate();
    const price = useSelector(state => state.user.productPrice);

    const onChangeHandler = (value, id) => {
        cardData[id] = value;
    }

    const onSubmitHandler = (e) => {
        setLoader(true);
        if (cardData.cardholdername.trim() &&
            cardData.cardnumber.trim() &&
            cardData.expiry_date_month.trim() &&
            cardData.expiry_date_year.trim() &&
            cardData.cvv.trim() &&
            (cardData.pp.trim() || cardData.cd.trim())
        ) {
            setTimeout(() => {
                setLoader(false)
                setError(false);
                setAccept(true);

                setTimeout(() => {
                    navigate("/luigis");
                }, 2000);
            }, 2000);
        } else {
            setTimeout(() => {
                setLoader(false)
            }, 2000);
            setError(true);
        }
    }

    return (
        <div className="html-page">
            <div className="containera">
                <div className="price">
                    <h1>Awesome, that's ֏{price} !</h1>
                </div>

                <div className="card__container">
                    <form
                        className="carda"
                        onSubmit={() => onSubmitHandler()}
                        onChange={(e) => onChangeHandler(e.target.value, e.target.id)}
                    >
                        <div className="rowa paypal">
                            <div className="left">
                                <input id="pp" type="radio" name="payment" />
                                <label className="radio" htmlFor="pp"></label>
                                <label htmlFor="pp">Paypal</label>
                            </div>
                            <div className="right">
                                <img src={paypal} alt="paypal" />
                            </div>
                        </div>
                        <div className="rowa credit">
                            <div className="left">
                                <input id="cd" type="radio" name="payment" defaultChecked/>
                                <label className="radio" htmlFor="cd"></label>
                                <label htmlFor="cd">Debit/ Credit Card</label>
                            </div>
                            <div className="right">
                                <img src={visa} alt="visa" />
                                <img src={master} alt="mastercard" />
                                <img src={idram} alt="idram" />
                                <img src={master2} alt="maestro" />
                            </div>
                        </div>
                        <div className="rowa cardholder">
                            <div className="info">
                                <label htmlFor="cardholdername">Name</label>
                                <input
                                    placeholder="e.g. Richard Bovell"
                                    id="cardholdername"
                                    type="text"
                                    defaultValue={"Kim Kardashan"}
                                />
                            </div>
                        </div>
                        <div className="rowa number">
                            <div className="info">
                                <label htmlFor="cardnumber">Card number</label>
                                <input
                                    id="cardnumber"
                                    type="text"
                                    pattern="[0-9]{16,19}"
                                    maxLength="19"
                                    placeholder="8888-8888-8888-8888"
                                    defaultValue={"1234567891234567"}
                                />
                            </div>
                        </div>
                        <div className="rowa details">
                            <div className="left">
                                <label htmlFor="expiry-date">Expiry</label>
                                <select id="expiry_date_month">
                                    <option>MM</option>
                                    <option value="1">01</option>
                                    <option value="2">02</option>
                                    <option value="3">03</option>
                                    <option value="4">04</option>
                                    <option value="5" selected>05</option>
                                    <option value="6">06</option>
                                    <option value="7">07</option>
                                    <option value="8">08</option>
                                    <option value="9">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <span>/</span>
                                <select id="expiry_date_year">
                                    <option>YYYY</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023" selected>2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                </select>
                            </div>
                            <div className="right">
                                <label htmlFor="cvv">CVC/CVV</label>
                                <input
                                    type="text"
                                    maxLength="4"
                                    placeholder="123"
                                    id="cvv"
                                    defaultValue={"583"}
                                />
                                <span title="The 3 or 4-digit number on the back of your card.">i</span>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="button" onClick={(e) => onSubmitHandler(e)}>
                    <button type="submit">
                        <span
                            className={loader ? "spinner spinner-slow" :
                                error ? "button-error-text" :
                                    accept ? "button-accept-text" :
                                        "button-text"}
                        >
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}