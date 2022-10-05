import './footer.scss';
import logo from './img/logo-white.png';
import { Link } from 'react-router-dom';
import { BsPinterest, BsFacebook, BsTwitter, BsLinkedin, BsGithub, BsFillCartCheckFill } from 'react-icons/bs';

export const Footer = () => {
    return (
        <footer className="pb-50  pt-70 pos-relative">
            <div className="pos-top triangle-bottom"></div>
            <div className="container-fluid">
                <Link to="/"><img src={logo} alt="Logo" /></Link>

                <div className="pt-30">
                    <p className="underline-secondary"><b>Address:</b></p>
                    <p>Armenia, Yerevan, Republic Square 1/1</p>
                </div>

                <div className="pt-30">
                    <p className="underline-secondary mb-10"><b>Phone:</b></p>
                    <a href="tel:+374 93 044 899 ">+374 93 044 899 </a>
                </div>

                <div className="pt-30">
                    <p className="underline-secondary mb-10"><b>Email:</b></p>
                    <a href="mailto:narekmartirosyan@gmail.com"> narekmartirosyan@gmail.com</a>
                </div>

                <ul className="icon mt-30">
                    <li>
                        <a href='https://www.pinterest.com/' target={"_blank"} rel="noreferrer">
                            <BsPinterest />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/narek.martirosyan.399' target={"_blank"} rel="noreferrer">
                            <BsFacebook />
                        </a>
                    </li>
                    <li>
                        <a href='https://twitter.com/narek______' target={"_blank"} rel="noreferrer">
                            <BsTwitter />
                        </a>
                    </li>
                    <li>
                        <a href='https://narek-martirosyan.github.io/home/' target={"_blank"} rel="noreferrer">
                            <BsGithub />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/narekmartiros/' target={"_blank"} rel="noreferrer">
                            <BsLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href='https://narek-martirosyan.github.io/ledress/' target={"_blank"} rel="noreferrer">
                            <BsFillCartCheckFill />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}