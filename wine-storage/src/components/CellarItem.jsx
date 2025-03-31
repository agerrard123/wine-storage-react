import './css/CellarItem.css';

function CellarItem(props) {
    return (
        <>
            <section className = "style">
                <img id = "image" src={process.env.PUBLIC_URL + "/" + props.image} alt = "wine pic"/>
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
                        {props.location} <br/>
                    </p>
                </section>
                <div id = "wine-form"><button id="remove-wine-form">Remove Wine</button></div>
            </section>
        </>
    )
}

export default CellarItem;