import './css/HistoryItem.css';
import {Link} from "react-router-dom";

function HistoryItem(props) {
    return (
        <section id = "wine" class = "style">
            <Link to = {props.href}>
                <img id = "image" src = {process.env.PUBLIC_URL + "/" + props.image} alt = "history pic"/>
            </Link>
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