import "./topBanner.scss";
import { Link } from "react-router-dom";

export const TopBanner = () => {
    return (
        <section className="bg-1 h-900x main-slider pos-relative">
            <div className="triangle-up pos-bottom"></div>
            <div className="container h-100">
                <div className="dplay-tbl">
                    <div className="dplay-tbl-cell center-text color-white">
                        <h5><b>BEST IN TOWN</b></h5>
                        <h1 className="mt-30 mb-15 styled-title">Pizza & Pasta</h1>
                        <h5><Link to="/menu" className="btn-primaryc plr-25 see-menu-title"><b>SEE OUR MENU</b></Link></h5>
                    </div>
                </div>
            </div>
        </section>
    )
}