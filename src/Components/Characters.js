import Character from "./Character";
import {useState} from "react";

export default function Characters(){
    let [characters, setCharacters] = useState([])

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacters(value.results);
        });


    return (<div>
        {characters.map((character) => (<Character item={character}/>))}
    </div>)
}