import React, { useState } from 'react'
import '../App.css';
import SignUp from '../components/SignUp';

const Main = () => {
    const [user, setUser] = useState([]);

    return (
        <div>
            <SignUp user={user} setUser={setUser}/>
        </div>
    )
}

export default Main;