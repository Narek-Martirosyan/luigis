import './home.scss';
import { TopBanner } from './TopBanner';
import { StoryArea } from './StoryArea';
import { BestSellers } from './BestSellers';
import { MenuSection } from './MenuSection';
import { getProducts } from '../../api/products';
import { useEffect, useState } from 'react';

export const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(res => setProducts(res.data));
    }, []);

    return (
        <>
            <TopBanner />
            <StoryArea />
            <BestSellers products={products} />
            <MenuSection products={products} />
        </>
    )
}
