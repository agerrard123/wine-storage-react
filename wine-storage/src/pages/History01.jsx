import './css/History01.css';
import hist01pic from "../images/history01.jpg";

function History01() {
    return (
        <section class = "tasting-notes">
            <div class = "bottle-img">
                <img id = "image" src = {hist01pic} alt = "history01 pic"/>
            </div>
            <div>
                <h2>Vernaccia Tasting Notes</h2>
                <button id = "add-tasting-notes">Click me to add tasting notes!</button>
            </div>
        </section>
    )
}

export default History01;