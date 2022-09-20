import {useEffect, useState} from "react";
import {rocketService} from "../../services";
import {Rocket} from "../rocket/rocket";

const Rockets = () => {

    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        rocketService.getAll().then(rocket => setRockets(rocket.data.filter(rocket => rocket.launch_year !== '2020')))
    },[])

    return (
        <div>
            {
                rockets.map(rocket => <Rocket key={rocket.flight_number} rocket={rocket}/>)
            }
        </div>
    );
};

export {Rockets};