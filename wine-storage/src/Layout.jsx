import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
    return (
        <>
            <div id = "content">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}

export default Layout;