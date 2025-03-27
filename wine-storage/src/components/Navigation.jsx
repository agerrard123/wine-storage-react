import {Outlet, Link} from "react-router-dom";
import './css/Navigation.css';

function Navigation() {
    return (
        <nav id="main-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Your Cellar</Link></li>
                <li><Link to="/blog">Map</Link></li>
                <li><Link to="/blog">Wine History</Link></li>
                <li><Link to="/blog">Reviews & Ratings</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;