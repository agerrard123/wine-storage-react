import {Outlet, Link} from "react-router-dom";
import './css/Navigation.css';

function Navigation() {
    return (
        <nav id="main-nav">
            <div id = "toggle-nav">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cellar">Your Cellar</Link></li>
                <li><Link to="/map">Map</Link></li>
                <li><Link to="/history">Wine History</Link></li>
                <li><Link to="/reviews&ratings">Reviews & Ratings</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;