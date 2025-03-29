import './css/HistoryItem.css';

function HistoryItem(props) {
    return (
        <section id = "wine" class = "style">
            <a href = "history01.jsx"><img id = "image" src = {process.env.PUBLIC_URL + "/" + props.image} alt = "history pic"/></a>
            <p>
                Wine Name: {props.name} <br/>
                Vintage: {props.vintage} <br/>
                Price: ${props.price} <br/>
                Country: {props.country} <br/>
                Region: {props.region} <br/>
            </p>
        </section>
    )
}

export default HistoryItem;