import './css/HistoryItem.css';
import {Link} from "react-router-dom";

function HistoryItem(props) {
    return (
        <section id = "wine" class = "style">
            <Link to = {props.href}>
                <img id = "image" src = {process.env.PUBLIC_URL + "/" + props.image} alt = "history pic"/>
            </Link>
            <section id = "p-container">
                <p className = "wine-p-1">
                    Wine Name: <br/>
                    Vintage: <br/>
                    Price: $<br/>
                    Country: <br/>
                    Region: <br/>
                </p>
                <p className = "wine-p-2">
                    {props.name} <br/>
                    {props.vintage} <br/>
                    {props.price} <br/>
                    {props.country} <br/>
                    {props.region} <br/>
                </p>
                </section>
        </section>
    )
}

export default HistoryItem;