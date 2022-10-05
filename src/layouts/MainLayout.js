import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
    return (
        <>
            <Header />
            <div style={{ minHeight: "180vh" }}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}