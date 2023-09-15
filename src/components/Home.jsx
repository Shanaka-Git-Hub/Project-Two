import React from 'react';
import './Home.css';
import NavBar from './NavBar';
export default function Home() {
  return (
    <div className='container-fluid border' style={{height:'100vh'}}> 
       <div className="main-outer">
        <NavBar/>
       </div>
    </div>
  )
}
