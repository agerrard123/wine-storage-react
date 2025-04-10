import './css/CellarItem.css';

function CellarItem(props) {
    return (
        <>
            <section className = "style">
                <img id = "cellar-image" src = {
                    "https://wine-storage-server.onrender.com/images/"
                    // "http://localhost:3001/images/"
                    + props.image} alt = "wine pic"/>
                    
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
                        {props.winery} <br/>
                        {props.vintage} <br/>
                        {props.price} <br/>
                        {props.country} <br/>
                        {props.region} <br/>
                        {props.description} <br/>
                        {props.grape} <br/>
                        {props.cellarLocation} <br/>
                    </p>
                </section>
                <div id = "wine-form"><button id="remove-wine-form">Remove Wine</button></div>
            </section>
        </>
    )
}

export default CellarItem;