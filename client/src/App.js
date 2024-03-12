// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react'
import './App.css';
import Main from './views/Main';
import OrganRegister from './components/OrganRegister'
import Form from './views/Form';
import Present from './views/Present';
import OrgHomes from './views/OrgHomes';
import OrganLogin from './components/OrganLogin';
import PositionForm from './components/PositionForm';

function App() {
  const [user, setUser] = useState([]);

  const [position, setPosition] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main /> } path='/' default/>
          <Route element={<OrganRegister user={user} setUser={setUser}/> } path='/orgs/register' default/>
          <Route element={<Form /> } path='/devs/login' />
          <Route element={<OrganLogin /> } path='/orgs/login' />
          <Route element={<OrgHomes /> } path='/orgs/dashboard' />
          <Route element={<PositionForm position={position} setPosition={setPosition}/> } path='/orgs/jobs/new' />
          <Route element={<Present /> } path='/devs/skills/languages' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
