import React from 'react'
import './SelectedItemDesc.css'
import { Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux';
import { saveItem} from '../redux/Cart';
import { useNavigate } from 'react-router-dom';

export default function SelectedItemDesc({ selectedItem }) {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  return (
    <div className="container fluid">
      <div className='selected-i-outer'>
        <div className="img-outer">
          <img src={selectedItem.image} width={'300px'} height={'300px'} alt="" />
        </div>
        <div className="description">
          <p className='fs-3 fw-bold'>{selectedItem.title}</p>
          <h5><span className='fs-6 fw-bold'>Rating</span> {selectedItem.rating.rate}<i className='fa fa-star'/></h5>
          <h4>{selectedItem.price} $</h4>
          <p style={{ fontSize: '20px'}}>{selectedItem.description}</p>
          <div className="btn-cart">
            <Button style={{marginRight:'20px'}}
            variant='btn btn-outline-dark' size='sm'
            onClick={()=> dispatch(saveItem(selectedItem))}>add toCart</Button>
            <Button variant='btn btn-outline-dark' size='sm' 
            onClick={()=> navigate('/cart')}>go to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
