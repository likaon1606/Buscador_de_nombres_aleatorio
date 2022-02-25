import React, {useState} from 'react';
import users from '../users.json';

const getRandom = () => Math.floor(Math.random() * users.length);

const User = () => {
    const [ user, setUser ] = useState(users[getRandom()]);
    
    const changeUser = () =>{
        const random = getRandom();
        setUser(users[random]);
    };

    return (
        <div className='card'>
            <h1>{user.name.title} {user.name.first} {user.name.last}</h1>
            <img src={user.picture.large} alt=""/>
             <ul>
            <li><i className="fa-solid fa-envelope"></i>{user.email}</li>
            <li><i className="fa-solid fa-phone"></i> {user.phone}</li>
            <li><i className="fa-solid fa-location-dot"></i> {user.location.country}. {user.location.state}, {user.location.city}</li>
            </ul>
            <button onClick={changeUser}><i class="fa-solid fa-arrows-rotate"></i></button>
            
        </div>
    );
};
export default User;