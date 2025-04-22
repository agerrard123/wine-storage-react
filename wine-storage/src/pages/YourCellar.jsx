import './css/YourCellar.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import Charcuterie from "../images/wine-charcudery.jpg";
import CellarItem from "../components/CellarItem";
import AddWine from "../components/AddWine";

const YourCellar = () => {
    const [wineItems, setWineItem] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(() => {
        (async() => {
            const response = await axios.get(
                // "https://wine-storage-server.onrender.com/api/wines"
                "http://localhost:3001/api/wines"
            );
            setWineItem(response.data);
        })();
    }, []);

    const openAddDialog = () => {
        setShowAddDialog(true);
    }

    const closeAddDialog = () => {
        setShowAddDialog(false);
    }

    const updateWine = (wine) => {
        setWineItem((wines)=>[...wines, wine]);
    };

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
            <div id = "wine-form"><button id="add-wine-form" onClick = {openAddDialog}>Use this form to add wine to your cellar</button></div>

            {showAddDialog?(<AddWine 
                            closeAddDialog = {closeAddDialog}
                            updateWine = {updateWine}
                            />) : ("")}

            <div id = "wine-list" className = "blocks">
                {wineItems.map((wineInfo) => (
                    <CellarItem
                        _id = {wineInfo._id}
                        image = {wineInfo.image}
                        winery = {wineInfo.winery}
                        vintage = {wineInfo.vintage}
                        price = {wineInfo.price}
                        country = {wineInfo.country}
                        region = {wineInfo.region}
                        description = {wineInfo.description}
                        grape = {wineInfo.grape}
                        cellarLocation = {wineInfo.cellarLocation} />
                ))}
            </div>
        </>
    );
}

export default YourCellar;