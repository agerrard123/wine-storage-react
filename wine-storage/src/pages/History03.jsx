import './css/History03.css';
import hist03pic from "../images/history03.jpg";

function History03() {
    return (
        <section class = "tasting-notes">
            <div class = "bottle-img">
                <img id = "image" src = {hist03pic} alt = "history03 pic"/>
            </div>
            <div>
                <h2>Star Vineyard Tasting Notes</h2>
                <button id = "add-tasting-notes">Click me to add tasting notes!</button>
            </div>
        </section>
    )
}

export default History03;