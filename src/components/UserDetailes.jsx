import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Avatar from '../assets/images/Avatar.png'


function UserDetails() {

    const parms = useParams();
    const id = parms.id
    const [user, setUser] = useState({});
    const navigate=useNavigate()

    useEffect(() => {
        async function fetchUser() {
            const response = await axios(`https://fakestoreapi.com/users/${id}`);
            setUser(response.data)

        }
        fetchUser()
    }, [id]);

    return (
        <div className="maincard">
            <div className="card">
                <img src={Avatar} alt="" />
                <div className="container1">
                    <h1>
                        {user?.name?.firstname} {user?.name?.lastname}
                    </h1>
                    <div className='user-details'>
                        <p><span className='single-user'>Username:</span> {user.username}</p>
                        <p><span className='single-user'>Email:</span> {user.email}</p>
                        <p><span className='single-user'>Username:</span> {user.phone}</p> 
                        <p><span className='single-user'>Address:</span> {user?.address?.city}</p>
                        <p><span className='single-user'>Street:</span> {user?.address?.street}</p>
                        <p><span className='single-user'>Zipcode:</span> {user?.address?.zipcode}</p>
                    </div>
                    <button onClick={()=>{
                        navigate('/users')
                    }} className='back-btn'>Go back</button>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;

