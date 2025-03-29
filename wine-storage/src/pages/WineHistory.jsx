import './css/WineHistory.css';
import SpilledWine from "../images/spilled-wine.jpg";

function WineHistory() {
    return (
        <>
            <div id = "img-div" class = "picture">
                <section id = "pic" class = "vineyard">
                    <img id = "image" src = {SpilledWine} alt = "spilled wine"/>
                    <div id = "img-div-header">
                        <h3>Welcome to your wine history!</h3>
                        <p>Click on each wine to view or add tasting notes from your experience!</p>
                    </div>
                </section>
            </div>
        </>
    )
};

export default WineHistory;