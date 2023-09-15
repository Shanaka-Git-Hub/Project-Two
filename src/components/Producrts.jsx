import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import './Products.css'
import { Button } from 'react-bootstrap';
import Items from './Items';

export default function Producrts() {
  const [item,setItems]=useState([]);
  const [filter,setFilter]=useState([]);
  let componentMounted=true;
  useEffect(()=>{

    const getProducts=async()=>{
      const respons= await fetch('http://fakestoreapi.com/products');
      if(componentMounted){
      setItems(await respons.clone().json());
      setFilter(await respons.json());
      }
      return()=>{
        componentMounted=false;
      }
    }
    getProducts();
  },[])
  const filterProduct=(cat)=>{
     const updatedList=item.filter((e)=> e.category===cat);
     setFilter(updatedList);
  }
  return (
    <div className='container-fluid border' style={{height:'100vh'}}> 
    <div className="item-outer">
      <div className='nav'>
         <NavBar/>
      </div>
     <div className="header">
      <h1>Latest Products</h1>
     </div>
     <div className="btn-bar">
        <Button  style={{marginRight:'5px'}} onClick={()=> setFilter(item)} variant='btn btn-outline-dark' size='sm'>All</Button>
        <Button  style={{marginRight:'5px'}} onClick={()=> filterProduct(`men's clothing`)}variant='btn btn-outline-dark' size='sm'>Men's Clothing</Button>
        <Button  style={{marginRight:'5px'}} onClick={()=> filterProduct(`women's clothing`)}variant='btn btn-outline-dark' size='sm'>Women's Clothing</Button>
        <Button  style={{marginRight:'5px'}} onClick={()=> filterProduct(`jewelery`)}variant='btn btn-outline-dark' size='sm'>Jewelery</Button>
        <Button  style={{marginRight:'5px'}} onClick={()=> filterProduct(`electronics`)}variant='btn btn-outline-dark' size='sm'>Electronics</Button>
      </div>
      <div className="items">
        {
          filter.map((e,index)=>{
            return(
              <Items key={index} product={e}/>
            )
          })
        }
      </div>
    </div>
 </div>
  )
}
