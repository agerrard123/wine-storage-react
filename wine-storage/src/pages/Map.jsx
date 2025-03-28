import MapItem from '../components/MapItem';
import './css/Map.css';

function Map() {
    return (
        <>
            <section className = "rows">
                <p id = "empty"></p>
                <p id = "map-nav">1</p>
                <p id = "map-nav">2</p>
                <p id = "map-nav">3</p>
                <p id = "map-nav">4</p>
                <p id = "map-nav">A</p>
                <MapItem
                    name = "Gundlach Bundschu"
                    image="images/wine01.jpg"/>
                <MapItem
                    name = "Rutherford"
                    image="images/wine02.jpg"/>
                <MapItem
                    name = "Cabernet Sauvignon"
                    image="images/wine03.jpg"/>
                <MapItem
                    name = "Pinot Noir"
                    image="images/wine04.jpg"/>
                <p id = "map-nav">B</p>
                <MapItem
                    name = "Pinot Noir"
                    image="images/wine05.jpg"/>
                <MapItem
                    name = "Meadowcroft"
                    image="images/wine06.jpg"/>
                <MapItem
                    name = "Zinfandel"
                    image="images/wine07.jpg"/>
                <MapItem
                    name = "Reserve"
                    image="images/wine08.jpg"/>
                <p id = "map-nav">C</p>
                <MapItem
                    name = "Grenache Rose"
                    image="images/wine09.jpg"/>
                <MapItem
                    name = "Ritual"
                    image="images/wine10.jpg"/>
                <MapItem
                    name = "Chateau Du Pape"
                    image="images/wine11.jpg"/>
                <MapItem
                    name = "Cavaliere"
                    image="images/wine12.jpg"/>
            </section>
        </>
    );
}

export default Map;