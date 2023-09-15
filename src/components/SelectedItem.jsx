import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import './SelectedItem.css';
import { useParams } from 'react-router-dom';
import SelectedItemDesc from './SelectedItemDesc';

export default function SelectedItem() {
  const [item,setItem]=useState([]);
  const {id}=useParams();
  useEffect(()=>{
    fetch('http://fakestoreapi.com/products')
    .then(resp=> resp.json())
    .then(json=> setItem(json))
  },[])
  return (
    <div className='container-fluid border' style={{height:'100vh'}}> 
     <div style={{marginBottom:'20px'}}>
       <NavBar/>
      </div>
      <div className="selected-item-outer">
         {
          item.map((e,index)=>{
            if(id==e.id){
           return(
            <SelectedItemDesc key={index} selectedItem={e}/>
           )
            }
          })
         }
      </div>
    </div>
  )
}
