import {Outlet, Link} from "react-router-dom";
import {useState} from "react";
import './css/Navigation.css';

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav id="main-nav">
            <div id = "toggle-nav" onClick = {toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className = {menuOpen ? "" : "hide-small"}>
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