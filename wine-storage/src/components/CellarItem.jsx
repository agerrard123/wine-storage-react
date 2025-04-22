import './css/CellarItem.css';
import React, { useState } from "react";
import EditWineItem from "./EditWineItem";
import DeleteWineItem from "./DeleteWineItem";

function CellarItem(props) {
    const [wineItem, setWineItem] = useState(props);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [showWineItem, setShowWineItem] = useState(true);

    const openEditDialog = () => {
        setShowEditDialog(true);
    };

    const closeEditDialog = () => {
        setShowEditDialog(false);
    };

    const openDeleteDialog = () => {
        setShowDeleteDialog(true);
    };

    const closeDeleteDialog = () => {
        setShowDeleteDialog(false);
    };

    const hideWineItem = () => {
        setShowWineItem(false);
    };

    const editWineItem = (wine) => {
        setWineItem(wine);
    };

    return (
        <>
            {showWineItem?(
                <div className = "style">
                    {showDeleteDialog?(
                    <DeleteWineItem
                    winery = {wineItem.winery}
                    _id={wineItem._id}
                    closeDeleteDialog = {closeDeleteDialog}
                    hideWineItem = {hideWineItem}
                    />
                    ):("")}
                    
                    {showEditDialog?(
                    <EditWineItem
                    _id={wineItem._id}
                    winery={wineItem.winery}
                    vintage={wineItem.vintage}
                    price={wineItem.price}
                    country={wineItem.country}
                    region={wineItem.region}
                    description={wineItem.description}
                    grape={wineItem.grape}
                    cellarLocation={wineItem.cellarLocation}
                    image={wineItem.image}
                    closeEditDialog = {closeEditDialog}
                    editWineItem = {editWineItem}
                    />
                    ):("")}

                    <section>
                        <img id = "cellar-image" src = {
                            // "https://wine-storage-server.onrender.com/images/"
                            "http://localhost:3001/images/"
                            + wineItem.image} alt = "wine pic"/>
                            
                        <section id = "p-container">
                            <p className = "wine-p-1">
                                Winery: <br/>
                                Vintage: <br/>
                                Price: $<br/>
                                Country: <br/>
                                Region: <br/>
                                Description: <br/>
                                Grape: <br/>
                                Cellar Location: <br/>
                            </p>
                            <p className = "wine-p-2">
                                {wineItem.winery} <br/>
                                {wineItem.vintage} <br/>
                                {wineItem.price} <br/>
                                {wineItem.country} <br/>
                                {wineItem.region} <br/>
                                {wineItem.description} <br/>
                                {wineItem.grape} <br/>
                                {wineItem.cellarLocation} <br/>
                            </p>
                        </section>
                        {/* <div id = "wine-form"><button id="remove-wine-form">Remove Wine</button></div> */}
                        <section id="change-buttons">
                            {/* <a href="#" onClick={openEditDialog} >
                                &#9998;
                            </a> */}
                            <button id="edit-wine-form" onClick = {openEditDialog}>Edit Wine</button>
                            {/* <a href="#" onClick={openDeleteDialog}>
                                &#x2715;
                            </a> */}
                            <button id="remove-wine-form" onClick = {openDeleteDialog}>Delete Wine</button>
                        </section>
                    </section>
                </div>
            ):("")}
        </>
    )
}

export default CellarItem;