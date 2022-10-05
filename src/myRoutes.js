import { Route, Routes } from 'react-router-dom';
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { Menu } from './pages/Menu';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Contact } from './pages/Contact';
import { About } from './pages/Cart/About';

export const MyRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about_us' element={<About />} />
            </Route>
                <Route path='/checkout' element={<Checkout />} />
        </Routes>
    )
}