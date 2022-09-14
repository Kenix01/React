export  default function Character(props){
    let {item:character} = props;
    console.log(props);
    return (<div>
        <h2>ID:{character.id} -- {character.name}</h2>
        <img src={character.image} alt="Rick"/>
        <p> Status-{character.status}</p>
        <p> Species-{character.species}</p>
        <p> Gender-{character.gender}</p>
    </div>)
}