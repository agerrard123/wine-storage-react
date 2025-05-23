import "./css/Dialog.css";
import React, { useState } from "react";

const DeleteWineItem = (props) => {
    const [result, setResult] = useState("");

    const deleteWineItem = async() => {
        const response = await fetch(
            `https://wine-storage-server.onrender.com/api/wines/${props._id}`, {
            // `http://localhost:3001/api/wines/${props._id}`,{
            method:"DELETE"
        });

        if(response.status === 200){
            setResult("Wine deleted successfully");
            props.closeDeleteDialog();
            props.hideWineItem();
        } else {
            setResult("Sorry, we couldn't delete your wine");
        }
    };

    return (
        <div id="delete-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick = {props.closeDeleteDialog}
                    >
                        &times;
                    </span>
                    <div id="delete-content">
                        <h3 id = "delete-message">Are you sure you want to delete the {props.winery}?</h3>
                        <section>
                            <button id = "delete-buttons" onClick = {props.closeDeleteDialog}>No</button>            
                            <button id = "delete-buttons" onClick={deleteWineItem}>Yes</button>
                        </section>
                        <span>{result}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteWineItem;