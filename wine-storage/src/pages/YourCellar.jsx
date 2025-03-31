import './css/YourCellar.css';
import Charcuterie from "../images/wine-charcudery.jpg";
import CellarItem from "../components/CellarItem";

function YourCellar() {
    return (
        <>
            <div id = "img-div" className = "picture">
                <section>
                    <img id = "image" src = {Charcuterie} alt = "wine charcuterie"/>
                    <div id = "img-div-header">
                        <h3>Welcome to your wine cellar!</h3>
                        <p>Add wines that you wish to store in your cellar here!</p>
                    </div>
                </section>
            </div>
            <div id = "wine-form"><button id="add-wine-form">Use this form to add wine to your cellar</button></div>
            <div id = "wine-list" className = "blocks">
                <CellarItem
                    image = "images/wine01.jpg"
                    winery = "Gundlach Bundschu"
                    vintage = "2010"
                    price = "40.00"
                    country = "United States"
                    region = "California"
                    description = "Red Wine"
                    grape = "Cabernet Sauvignon"
                    location = "A1"/>
                <CellarItem
                    image = "images/wine01.jpg"
                    winery = "Gundlach Bundschu"
                    vintage = "2010"
                    price = "40.00"
                    country = "United States"
                    region = "California"
                    description = "Red Wine"
                    grape = "Cabernet Sauvignon"
                    location = "A1"/>
                <CellarItem
                    image = "images/wine01.jpg"
                    winery = "Gundlach Bundschu"
                    vintage = "2010"
                    price = "40.00"
                    country = "United States"
                    region = "California"
                    description = "Red Wine"
                    grape = "Cabernet Sauvignon"
                    location = "A1"/>
                <CellarItem
                    image = "images/wine01.jpg"
                    winery = "Gundlach Bundschu"
                    vintage = "2010"
                    price = "40.00"
                    country = "United States"
                    region = "California"
                    description = "Red Wine"
                    grape = "Cabernet Sauvignon"
                    location = "A1"/>
                <CellarItem
                    image = "images/wine01.jpg"
                    winery = "Gundlach Bundschu"
                    vintage = "2010"
                    price = "40.00"
                    country = "United States"
                    region = "California"
                    description = "Red Wine"
                    grape = "Cabernet Sauvignon"
                    location = "A1"/>
                <CellarItem
                    image = "images/wine01.jpg"
                    winery = "Gundlach Bundschu"
                    vintage = "2010"
                    price = "40.00"
                    country = "United States"
                    region = "California"
                    description = "Red Wine"
                    grape = "Cabernet Sauvignon"
                    location = "A1"/>
            </div>
        </>
    );
}

export default YourCellar;