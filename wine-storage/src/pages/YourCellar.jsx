import './css/YourCellar.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import Charcuterie from "../images/wine-charcudery.jpg";
import CellarItem from "../components/CellarItem";

function YourCellar() {
    const [wineItems, setWineItem] = useState([]);

    useEffect(() => {
        (async() => {
            const response = await axios.get(
                "https://wine-storage-server.onrender.com/api/wines"
            );
            setWineItem(response.data);
        })();
    }, []);

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
                {wineItems.map((wineInfo) => {
                    return <CellarItem
                        image = {wineInfo.image}
                        winery = {wineInfo.winery}
                        vintage = {wineInfo.vintage}
                        price = {wineInfo.price}
                        country = {wineInfo.country}
                        region = {wineInfo.region}
                        description = {wineInfo.description}
                        grape = {wineInfo.grape}
                        cellarLocation = {wineInfo.cellarLocation} />;
                })};
            </div>
        </>
    );
}

export default YourCellar;