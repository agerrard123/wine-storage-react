import './css/WineHistory.css';
import SpilledWine from "../images/spilled-wine.jpg";
import HistoryItem from '../components/HistoryItem';

function WineHistory() {
    return (
        <>
            <div id = "img-div" className = "picture">
                <section>
                    <img id = "image" src = {SpilledWine} alt = "spilled wine"/>
                    <div id = "img-div-header">
                        <h3>Welcome to your wine history!</h3>
                        <p>Click on each wine to view or add tasting notes from your experience!</p>
                    </div>
                </section>
            </div>
            <div className = "blocks">
                <HistoryItem
                    href = "history01"
                    image = "images/history01.jpg"
                    name = "Vernaccia"
                    vintage = "2022"
                    price = "51.00"
                    country = "Italy"
                    region = "Toscana"/>
                <HistoryItem
                    href = "history02"
                    image = "images/history02.jpg"
                    name = "Keever"
                    vintage = "2021"
                    price = "40.00"
                    country = "United States"
                    region = "California"/>
                <HistoryItem
                    href = "history03"
                    image = "images/history03.jpg"
                    name = "Star Vineyard"
                    vintage = "2021"
                    price = "57.60"
                    country = "United States"
                    region = "California"/>
            </div>
        </>
    )
};

export default WineHistory;