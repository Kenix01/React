import {useEffect, useState} from "react";
import {userServices} from "../../services";
import {User} from "../User/User";
import {UserDetails} from "../User-details/User-details";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] =useState([]);

    const showUser = (obj) => {
        setUser(obj);
    }

    useEffect(() => {
        userServices.getAll().then(value => setUsers(value.data))
    },[]);

    return (
        <div>
            {
            users.map(user => <User key={user.id} user={user} showUser={showUser}/>)
            }
            {
                user && <UserDetails key={user.id} user={user}/>
            }
        </div>
    );
};

export {Users};