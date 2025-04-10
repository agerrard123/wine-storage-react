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
        
        const response = await fetch("http://localhost:3001/api/wines", {
            "method":"POST",
            "body":formData
        });

        if(response.status === 200){
            setResult("Wine added successfully");
            event.target.reset();
            props.closeAddDialog();
        } else {
            setResult("Error adding wine");
        }
    };

    return (
        <div id="add-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick = {props.closeAddDialog}>&times;</span>
                    <form id="add-property-form" onSubmit = {addToServer}>
                        <h3>Add a New Wine to Your Cellar</h3>

                        <p>
                            <label htmlFor="winery">Winery: </label>
                            <input type="text" id="winery" name="winery" required min="3"></input>
                        </p>

                        <p>
                            <label htmlFor="vintage">Vintage: </label>
                            <input type="number" id="vintage" name="vintage" min="1900" required></input>
                        </p>

                        <p>
                            <label htmlFor="price">Price: </label>
                            <input type="number" id="price" name="price" min="0" required></input>
                        </p>

                        <p>
                            <label htmlFor="country">Country: </label>
                            <input type="text" id="country" name="country" min="3" required></input>
                        </p>

                        <p>
                            <label htmlFor="region">Region: </label>
                            <input type="text" id="region" name="region" min="3" required></input>
                        </p>

                        <p>
                            <label htmlFor="description">Description: </label>
                            <input type="text" id="description" name="description" min="3" required></input>
                        </p>

                        <p>
                            <label htmlFor="grape">Grape: </label>
                            <input type="text" id="grape" name="grape" min="3" required></input>
                        </p>

                        <p>
                            <label htmlFor="cellarLocation">Cellar Location: </label>
                            <input type="text" id="cellarLocation" name="cellarLocation" min="2" required></input>
                        </p>

                        <section className="columns">
                            <div>
                                <p id="img-prev-section">
                                    {prevSrc!==""?
                                    (<img id = "img-prev" src={prevSrc} alt= "new pic"></img>):
                                    ("")
                                    } 
                                </p>
                            </div> 
                            <p id="img-upload">
                                <label htmlFor="img">Upload Image: </label>
                                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage}/>
                            </p>
                        </section>

                        <p>
                            <button type="submit">Submit</button>
                        </p>
                        <p>{result}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddWine;