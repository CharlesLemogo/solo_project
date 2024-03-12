import React from 'react'
import OrganHome from '../components/OrganHome'
import OrganDisplay from '../components/OrganDisplay';
import { useState } from 'react'

const OrgHomes = () => {
    const [position, setPosition] = useState([]);
  return (
    <div>
        <OrganHome/>
        <OrganDisplay position={position} setPosition={setPosition}/>
    </div>
  )
}

export default OrgHomes;