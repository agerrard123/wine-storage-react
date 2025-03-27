import "./css/HomeDescription.css";

function HomeDescription(props) {
    return (
        <section>
            <img src = {process.env.PUBLIC_URL + "/" + props.image} alt = "grapes"/>
            <p>{props.description}</p>
        </section>
    )
}

export default HomeDescription;