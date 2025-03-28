import "./css/MapSection.css";
import MapItem from "./MapItem"

function MapSection() {
    return (
        <section className = "rows">
            <MapItem/>
            <MapItem
                number = "1"/>
            <MapItem
                number = "2"/>
            <MapItem
                number = "3"/>
            <MapItem
                number = "4"/>
            <MapItem
                letter = "A"/>
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
            <MapItem
                letter = "B"/>
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
            <MapItem
                letter = "C"/>
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
    )
}

export default MapSection;