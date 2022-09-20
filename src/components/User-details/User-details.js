const UserDetails = ({user}) => {
    return (
        <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone} -- {user.website}</p>
        </div>
    );
};

export {UserDetails};