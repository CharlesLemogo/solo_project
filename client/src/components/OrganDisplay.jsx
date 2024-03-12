import React, { useEffect } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const OrganDisplay = (props) => {
    const {position, setPosition} = props;
    useEffect(() => {
        axios.get('http://localhost:8000/api/position')
        .then((res) => {
            setPosition(res.data.allpositions)
        })
        .catch((err) => console.log(err));        
    }, [])

  return (
        <div class="container overflow-hidden text-center">
            <div class="row gx-5">
                        <div class="col">
                            <div class="p-3">
                            <Link to="/orgs/jobs/new">
                                <button type="button" class="btn btn-primary"><h3>List a New Position</h3></button>
                            </Link>
                            
                            </div>
                            <div class="p-3  border border-primary" style={{maxWidth: '71.5vh'}}>
                                <span>
                                <h3>Positions To Fill</h3>
                                {position && position.map((position, index) => {
                                    return (
                                    <tr key={index}>
                                        <p>{position.name}</p>
                                        <p>{position.description}</p>
                                        <p>{position.skills}</p>
                                    </tr>
                                    );
                                })}
                                </span>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3 ">
                                <h1 class="bg-secondary">Available Devs</h1>
                            </div>
                            <div class="p-3">Available Devs</div>
                            <div class="p-3">Available Devs</div>
                        </div>
                </div>
        </div>
    
  )
}

export default OrganDisplay;