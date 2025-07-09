import { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { addToCart,removeFromCart,incrementQuantity,decrementQuantity } from '../redux/cartSlice';
import { useDispatch,useSelector } from "react-redux";

const CartItem = ({cart}) => {
    const[quantity,setQuantity] = useState(1);
    const dispatch = useDispatch();
  return (
    <div className='cartitem'>
     
      <div>
        <img src={cart.image} alt="cart images" width={50} height={50} />
      </div>
      <div>{cart.title?.slice(1, 50)}</div>
      <div>{cart.price}</div>
      <div className="quantity">
        <IconButton
          variant="contained"
          size="small"
          onClick={() => {
            setQuantity((prev) => Number(prev) - 1);
            dispatch(decrementQuantity(cart.id))
          }}
        >
          -
        </IconButton>
        <input
          type="text"
          name="quantity"
          value={quantity}
          onChange={(e) => {
             setQuantity(e.target.value);
            
          }}
        />
        <IconButton
          variant="contained"
          size="small"
          onClick={() => {
            setQuantity((prev) => Number(prev) + 1);
            dispatch(incrementQuantity(cart.id))
          }}
        >
          +
        </IconButton>
         <div>
       
      </div>
      </div>
       <IconButton aria-label="delete" 
       onClick={()=>dispatch(removeFromCart(cart.id))}
       size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
    </div>
  );
}

export default CartItem