import './css/Review.css';

function Review(props) {
    return (
        <section id = "reviews-background" className = "column">
            <div class="bottle-img">
                <img id = "image" src = {process.env.PUBLIC_URL + "/" + props.image} alt = "review pic"/>
            </div>
            <div>
                <h3>{props.name}</h3>
                <p>
                    {props.paragraph1} <br/>
                    <br/>
                    {props.paragraph2} <br/>
                    <br/>
                    {props.paragraph3} <br/>
                    <br/>
                    Rating: {props.rating}
                </p>
            </div>
        </section>
    )
}

export default Review;