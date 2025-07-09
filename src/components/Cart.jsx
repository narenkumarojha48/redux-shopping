import React, { useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { Link,useNavigate,Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import CartItem from './CartItem';
const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const carts = useSelector((state) => state.carts.carts);
   let totalCartPrice = carts.reduce((acc,curr)=>(acc+curr.price*curr.quantity),0)
  return (
    <div>
    <div className="cartcontainer">
      <h1 className="cartheading">My Cart</h1>
      {carts?.map((cart) => (
        <>
          <CartItem cart={cart} />
        </>
      ))}
      <div className="carttotal">
        <Button variant="outlined">Total ${totalCartPrice.toFixed(2)}</Button>
        <Button variant="contained" onClick={()=>navigate("payment")}>Proceed Payment</Button>
      </div>
      
    </div>
    {/* <Outlet/> */}
    </div>
  );
}

export default Cart