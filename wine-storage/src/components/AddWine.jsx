import "./css/AddWine.css";
import "./css/Dialog.css";
import React, {useState} from "react";

const AddWine = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const addToServer = async (event) => {
        event.preventDefault(); //stops us from going to another page or refreshing
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log(...formData);
        
        const response = await fetch(
            "https://wine-storage-server.onrender.com/images/", {
            // "http://localhost:3001/api/wines", {
            "method":"POST",
            "body":formData
        });

        if(response.status === 200){
            setResult("Wine added successfully");
            event.target.reset();
            props.closeAddDialog();
            props.updateWine(await response.json());
        } else {
            setResult("Error adding wine");
        }
    };

    return (
        <div id="add-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick = {props.closeAddDialog}>&times;</span>
                    <h2 id = "form-dialog-head">Add a New Wine to Your Cellar</h2>
                    <form id="add-property-form" onSubmit = {addToServer}>
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
                                    <input type="text" id="winery" name="winery" required min="3"></input> <br/> <br/>
                                    <input type="number" id="vintage" name="vintage" min="1900" required></input> <br/> <br/>
                                    <input type="number" id="price" name="price" min="0" required></input> <br/> <br/>
                                    <input type="text" id="country" name="country" min="3" required></input> <br/> <br/>
                                    <input type="text" id="region" name="region" min="3" required></input> <br/> <br/>
                                    <input type="text" id="description" name="description" min="3" required></input> <br/> <br/>
                                    <input type="text" id="grape" name="grape" min="3" required></input> <br/> <br/>
                                    <input type="text" id="cellarLocation" name="cellarLocation" min="2" required></input> <br/> <br/>
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
                                        (<img id="img-prev" src="https://placehold.co/150x200/white/brown" alt="placeholder" />)
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

export default AddWine;