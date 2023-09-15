import React from 'react'
import NavBar from './NavBar'
import {useSelector,useDispatch} from 'react-redux';
import { decrementQty, incrementQty } from '../redux/Cart';

export default function ItemCart() {
    const item=useSelector(state=> state.items);
    const dispatch=useDispatch();
  return (
    <div>
        <NavBar/>
        <table className='table table-hover' style={{marginTop:'60px'}}>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    item.map((e,index)=>{
                        return(
                            <tr key={index}>
                                <td><img src={e.img} width={'100px'} height={'100px'} alt="" /></td>
                                <td>{e.name.substring(0,12)}</td>
                                <td>
                                    <div className='d-flex'>
                                        <div className='border' style={{width:'30px',height:'30px'}}>
                                      <button className='btn btn-dark fw-bold'
                                      onClick={()=> dispatch(incrementQty(e))}>+</button>
                                    </div>
                                    <div style={{width:'50px',height:'30px'}}
                                    className='d-flex align-items-center justify-content-center'>
                                      <span className='fw-bold'>{e.qty}</span>
                                    </div>
                                    <div style={{width:'30px',height:'30px'}}>
                                      <button className='btn btn-dark fw-bold'
                                      onClick={()=> dispatch(decrementQty(e))}>-</button>
                                    </div>
                                    </div>                                    
                                   </td>
                                <td>{e.total} $</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
