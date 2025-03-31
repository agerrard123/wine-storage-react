import MapItem from '../components/MapItem';
import MapNav from '../components/MapNav';
import './css/Map.css';

function Map() {
    return (
        <>
            <section className = "rows">
                <MapNav/>
                <MapNav
                    name = "1"/>
                <MapNav
                    name = "2"/>
                <MapNav
                    name = "3"/>
                <MapNav
                    name = "4"/>
                <MapNav
                    name = "A"/>
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
                <MapNav
                    name = "B"/>
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
                <MapNav
                    name = "C"/>
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