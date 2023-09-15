import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { useEffect } from 'react';

function NavBar() {
  const navigate=useNavigate();
  const item=useSelector(state=> state.items)
  return (
    <Nav
     className='justify-content-center border bg-success' style={{height:'60px'}}
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <div className='w-100 d-flex justify-content-around'>
        <div className="d-flex align-items-center justify-content-center">
          <h5 style={{margin:'0',padding:'0'}}>LA COLLECTION</h5>
        </div>
         <div className="d-flex align-items-center justify-content-around">
         <Nav.Item>
        <Nav.Link onClick={()=> navigate('/')} style={{color:'white'}}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=> navigate('/products')}style={{color:'white'}}>Products</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" style={{color:'white'}}>About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled style={{color:'white'}}>
          Contact
        </Nav.Link>
      </Nav.Item>
      </div>
      <div className="w-25 h-100 d-flex align-items-center justify-content-around">
          <Button size='sm' variant='btn btn-outline-dark'><i className='fa fa-sign-in'/> Login</Button>
          <Button size='sm' variant='btn btn-outline-dark'><i className='fa fa-user-plus'/> Register</Button>
          <Button size='sm' 
          onClick={()=>{
            navigate('/cart')
          }}variant='btn btn-outline-dark'><i className='fa fa-shopping-cart'/> Cart  <span style={{color:'white'}}>({item.length})</span></Button>
      </div>
      </div>
      
    </Nav>
  );
}

export default NavBar;