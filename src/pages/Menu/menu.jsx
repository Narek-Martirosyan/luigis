import "./menu.scss";
import { TopBannerMenu } from "./TopBannerMenu";
import { Product } from "./Product";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/products";
import { OfferSection } from "./OfferSection";
import { LinkToTags } from "./LinkToTags";

export const Menu = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(res => setProducts(res.data));
    }, []);

    return (
        <>
            <TopBannerMenu />
            <LinkToTags />
            <Product products={products} prod1={"Pizza 24"} prod2={"Pizza 31"} title={"Choose from Pizza"} />
            <OfferSection text={"Add a fresh Salad to your order"} id={"salad"} />
            <Product products={products} prod1={"Salads"} title={"Choose from Salad"} />
            <OfferSection text={"Choos a Sandwiches and Burgers"} id={"Sandwiches_and_Burgers"} />
            <Product products={products} prod1={"Sandwiches and Burgers"} />
            <OfferSection text={"Add a fresh Drinks to your order"} id={"drinks"} />
            <Product products={products} prod1={"Drinks"} title={"Choose from Drinks"} />
            <OfferSection text={"Add a Calzone"} id={"calzone"} />
            <Product products={products} prod1={"Calzone"} title={"Calzone"} />
            <OfferSection text={"Choose a Rolls"} id={"rolls"} />
            <Product products={products} prod1={"Rolls"} title={"Rolls"} />
            <OfferSection text={"Choose a Appetizers"} id={"appetizers"} />
            <Product products={products} prod1={"Appetizers"} title={"Appetizers"} />
            <OfferSection text={"Soups"} id={"soups"} />
            <Product products={products} prod1={"Soups"} title={"Soups"} />
            <OfferSection text={"Add a Pasta to your order"} id={"pasta"} />
            <Product products={products} prod1={"Pasta"} title={"Pasta"} />
        </>
    )
}