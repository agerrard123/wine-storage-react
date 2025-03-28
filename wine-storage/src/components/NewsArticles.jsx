import "./css/NewsArticles.css";

function NewsArticles(props) {
    return (
        <section id = "news-articles" className="news-style">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <img id = "image" src={process.env.PUBLIC_URL + "/" + props.image} alt = "news articles"/>
        </section>
    )
}

export default NewsArticles;