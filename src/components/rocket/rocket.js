const Rocket = ({rocket}) => {
    return (
        <div>
            <h1>{rocket.mission_name}</h1>
            <p><strong>{rocket.launch_year}</strong></p>
            <img src={rocket.links.mission_patch_small}/>
        </div>
    );
};

export {Rocket};