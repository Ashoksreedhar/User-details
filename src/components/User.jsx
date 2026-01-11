import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import Avatar from '../assets/images/Avatar.png'

const User = () => {
    const [users, setUsers] = useState([]);
    const navigate=useNavigate();


    useEffect(() => {
        async function fetchUser() {
            const response = await fetch("https://fakestoreapi.com/users")
            const data = await response.json();
            setUsers(data)
            console.log(data);

        }
        fetchUser()
    }, [])

    return (
        <ul className='userlist'>
            {
                users.map((user) => {
                    return (
                        <li key={user.id} className='usercard'>
                            <img src={Avatar} />
                            <div className='container '>
                                <h1>{user.name.firstname} {user.name.lastname}</h1>
                                <p>{user.email}</p>
                                <button onClick={()=>{
                                    navigate(`/user/${user.id}`)
                                }} className="view-btn">View More</button>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default User;