import "./css/MapItem.css";

function MapItem (props) {
    return (
        <div className = "map-item">
            <p>{props.name}</p>
            <img id = "image" src={process.env.PUBLIC_URL + "/" + props.image} alt = "wine"/>
        </div>
    )
}

export default MapItem;