import './tags.scss';
import { useEffect, useState } from 'react';

export const Tags = ({ products, filteredProductsHandler }) => {
    const [tags, setTags] = useState([]);
    const [active0, setActive0] = useState("active");
    const [active1, setActive1] = useState("");
    const [active2, setActive2] = useState("");
    const [active3, setActive3] = useState("");
    const [active4, setActive4] = useState("");
    const [active5, setActive5] = useState("");
    const [active6, setActive6] = useState("");
    const [active7, setActive7] = useState("");
    const [active8, setActive8] = useState("");
    const [active9, setActive9] = useState("");

    useEffect(() => {
        products.forEach(product => {
            if (!tags?.includes(product.productTag)) {
                tags.push(product.productTag);
            }
        });

        setTags([...tags]);

        // eslint-disable-next-line
    }, [products]);

    const changeClassHandler0 = (e) => {
        setActive0("active");
        setActive1("");
        setActive2("");
        setActive3("");
        setActive4("");
        setActive5("");
        setActive6("");
        setActive7("");
        setActive8("");
        setActive9("");

        filteredProductsHandler(e.target.innerText);
    }

    const changeClassHandler1 = (e) => {
        setActive0("");
        setActive1("active");
        setActive2("");
        setActive3("");
        setActive4("");
        setActive5("");
        setActive6("");
        setActive7("");
        setActive8("");
        setActive9("");

        filteredProductsHandler(e.target.innerText);
    }

    const changeClassHandler2 = (e) => {
        setActive0("");
        setActive1("");
        setActive2("active");
        setActive3("");
        setActive4("");
        setActive5("");
        setActive6("");
        setActive7("");
        setActive8("");
        setActive9("");

        filteredProductsHandler(e.target.innerText);
    }
    
    const changeClassHandler3 = (e) => {
        setActive0("");
        setActive1("");
        setActive2("");
        setActive3("active");
        setActive4("");
        setActive5("");
        setActive6("");
        setActive7("");
        setActive8("");
        setActive9("");

        filteredProductsHandler(e.target.innerText);
    }

    const changeClassHandler4 = (e) => {
        setActive0("");
        setActive1("");
        setActive2("");
        setActive3("");
        setActive4("active");
        setActive5("");
        setActive6("");
        setActive7("");
        setActive8("");
        setActive9("");

        filteredProductsHandler(e.target.innerText);
    }

    const changeClassHandler5 = (e) => {
        setActive0("");
        setActive1("");
        setActive2("");
        setActive3("");
        setActive4("");
        setActive5("active");
        setActive6("");
        setActive7("");
        setActive8("");
        setActive9("");

        filteredProductsHandler(e.target.innerText);
    }

    const changeClassHandler6 = (e) => {
        setActive0("");
        setActive1("");
        setActive2("");
        setActive3("");
        setActive4("");
        setActive5("");
        setActive6("active");
        setActive7("");
        setActive8("");
        setActive9("");

        filteredProductsHandler(e.target.innerText);
    }

    const changeClassHandler7 = (e) => {
        setActive0("");
        setActive1("");
        setActive2("");
        setActive3("");
        setActive4("");
        setActive5("");
        setActive6("");
        setActive7("active");
        setActive8("");
        setActive9("");

        filteredProductsHandler(e.target.innerText);
    }
    const changeClassHandler8 = (e) => {
        setActive0("");
        setActive1("");
        setActive2("");
        setActive3("");
        setActive4("");
        setActive5("");
        setActive6("");
        setActive7("");
        setActive8("active");
        setActive9("");

        filteredProductsHandler(e.target.innerText);
    }
    const changeClassHandler9 = (e) => {
        setActive0("");
        setActive1("");
        setActive2("");
        setActive3("");
        setActive4("");
        setActive5("");
        setActive6("");
        setActive7("");
        setActive8("");
        setActive9("active");

        filteredProductsHandler(e.target.innerText);
    }
    
    return (
        <div className="row">
            <div className="col-sm-12">
                <ul className="selecton brdr-b-primary mb-70">
                    <li onClick={changeClassHandler0}>
                        <span className={active0}>
                            <b>{tags[0]}</b>
                        </span>
                    </li>
                    <li onClick={changeClassHandler1}>
                        <span className={active1}>
                            <b>{tags[1]}</b>
                        </span>
                    </li>
                    <li onClick={changeClassHandler2}>
                        <span className={active2}>
                            <b>{tags[2]}</b>
                        </span>
                    </li>
                    <li onClick={changeClassHandler3}>
                        <span className={active3}>
                            <b>{tags[3]}</b>
                        </span>
                    </li>
                    <li onClick={changeClassHandler4}>
                        <span className={active4}>
                            <b>{tags[4]}</b>
                        </span>
                    </li>
                    <li onClick={changeClassHandler5}>
                        <span className={active5}>
                            <b>{tags[5]}</b>
                        </span>
                    </li>
                    <li onClick={changeClassHandler6}>
                        <span className={active6}>
                            <b>{tags[6]}</b>
                        </span>
                    </li>
                    <li onClick={changeClassHandler7}>
                        <span className={active7}>
                            <b>{tags[7]}</b>
                        </span>
                    </li>
                    <li onClick={changeClassHandler8}>
                        <span className={active8}>
                            <b>{tags[8]}</b>
                        </span>
                    </li>
                    <li onClick={changeClassHandler9}>
                        <span className={active9}>
                            <b>{tags[9]}</b>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}