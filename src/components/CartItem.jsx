import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ cart }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  return (
    <div className="cartitem">
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
            let qty = quantity - 1;
            if (qty >= 1) {
              setQuantity(qty);
              dispatch(decrementQuantity({ id: cart.id, qty: qty }));
            }
            // setQuantity((prev) => Number(prev) - 1);
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
            let qty = quantity + 1;
            if (qty <= 5) {
              setQuantity(qty);
              // setQuantity((prev) => Number(prev) + 1);
              dispatch(incrementQuantity({ id: cart.id, qty: qty }));
            }
            return;
          }}
        >
          +
        </IconButton>
        <div></div>
      </div>
      <IconButton
        aria-label="delete"
        onClick={() => dispatch(removeFromCart(cart.id))}
        size="large"
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default CartItem;
