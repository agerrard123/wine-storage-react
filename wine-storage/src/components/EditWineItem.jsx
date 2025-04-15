import "./css/Dialog.css";
import React, { useState } from "react";

const EditWineItem = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");
  
    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const onSubmit = async(event) => {
        event.preventDefault();
        setResult("Sending...");
    
        const formData = new FormData(event.target);
        console.log(...formData);
        console.log("What is the id " + props._id);
        if (props._id) {
            console.log("i made it");
            const response = await fetch(
                `http://localhost:3001/api/wines/${props._id}`,{
                method:"PUT",
                body:formData
            });

            if(response.status === 200){
                setResult("Wine editted successfully");
                event.target.reset();
                props.closeEditDialog();
                props.editWineItem(await response.json());
            }
            else {
                setResult("Error editting your wine");
            }
        } else {
            setResult("Error: Wine ID is undefined");
        }
    };

    return (
        <div id="edit-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick = {props.closeEditDialog}>&times;</span>
                    <h2 id = "form-dialog-head">Edit Your Wine Item</h2>
                    <form id="edit-property-form" onSubmit = {onSubmit}>
                        <section id = "columns">
                            <div id = "form-container">
                                <p id = "form-p-1">
                                    <label htmlFor="winery">Winery: </label> <br/> <br/>
                                    <label htmlFor="vintage">Vintage: </label> <br/> <br/>
                                    <label htmlFor="price">Price: $</label> <br/> <br/>
                                    <label htmlFor="country">Country: </label> <br/> <br/>
                                    <label htmlFor="region">Region: </label> <br/> <br/>
                                    <label htmlFor="description">Description: </label> <br/> <br/>
                                    <label htmlFor="grape">Grape: </label> <br/> <br/>
                                    <label htmlFor="cellarLocation">Cellar Location: </label> <br/> <br/>
                                </p>
                                <p id = "form-p-2">
                                    <input type="text" id="winery" name="winery" defaultValue={props.winery} required min="3"></input> <br/> <br/>
                                    <input type="number" id="vintage" name="vintage" defaultValue={props.vintage} min="1900" required></input> <br/> <br/>
                                    <input type="number" id="price" name="price" defaultValue={props.price} min="0" required></input> <br/> <br/>
                                    <input type="text" id="country" name="country" defaultValue={props.country} min="3" required></input> <br/> <br/>
                                    <input type="text" id="region" name="region" defaultValue={props.region} min="3" required></input> <br/> <br/>
                                    <input type="text" id="description" name="description" defaultValue={props.description} min="3" required></input> <br/> <br/>
                                    <input type="text" id="grape" name="grape" defaultValue={props.grape} min="3" required></input> <br/> <br/>
                                    <input type="text" id="cellarLocation" name="cellarLocation" defaultValue={props.cellarLocation} min="2" required></input> <br/> <br/>
                                </p>
                                
                            </div>
                            <section className="upload-image">
                                <p id="img-upload">
                                    <label id = "img-text" htmlFor="img">Upload Image: </label>
                                    <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage}/>
                                </p>
                                <div>
                                    <p id="img-prev-section">
                                        {prevSrc!==""?
                                        (<img id = "img-prev" src={prevSrc} alt= "new pic"></img>):
                                        (<img id="img-prev" src = {
                                            // "https://wine-storage-server.onrender.com/images/"
                                            "http://localhost:3001/images/"
                                            + props.image} alt="placeholder" />)
                                        } 
                                    </p>
                                </div> 
                                <p id = "result">{result}</p>
                            </section>
                        </section>
                        <p id = "submit">
                            <button type="submit">Submit</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditWineItem;