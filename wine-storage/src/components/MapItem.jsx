import "./css/MapItem.css";

function MapItem (props) {
    return (
        <section>
            <div className = "map-nav">
                <p>{props.number}</p>
                <p>{props.letter}</p>
            </div>
            <div>
                <p>{props.name}</p>
                <img id = "image" src={process.env.PUBLIC_URL + "/" + props.image} alt = "wine image"/>
            </div>
        </section>
    )
}

export default MapItem;