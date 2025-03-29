import './css/History02.css';
import hist02pic from "../images/history02.jpg";

function History02() {
    return (
        <section class = "tasting-notes">
            <div class = "bottle-img">
                <img id = "image" src = {hist02pic} alt = "history02 pic"/>
            </div>
            <div>
                <h2>Keever Tasting Notes</h2>
                <button id = "add-tasting-notes">Click me to add tasting notes!</button>
            </div>
        </section>
    )
}

export default History02;