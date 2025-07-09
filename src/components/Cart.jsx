
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import CartItem from "./CartItem";
const Cart = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const { carts, totalCartPrice } = useSelector((state) => state.carts);

  function paymentButtonText() {
    if (carts.length > 0) {
      return location.pathname === "/payment"
        ? "Go Back to Cart"
        : "Proceed Payment";
    }
    return "Add Items";
  }
  console.log(location.pathname);
  return (
    <div>
      <div className="cartcontainer">
        <h1 className="cartheading">My Cart</h1>

        {carts.length > 0
          ? carts?.map((cart) => (
              <>
                <CartItem cart={cart} />
              </>
            ))
          : "No Items in your cart"}
        <div className="carttotal">
          <Button variant="outlined">Total ${totalCartPrice.toFixed(2)}</Button>
          <Button
            variant="contained"
            onClick={() => {
              if (location.pathname === "/" && carts.length > 0) {
                navigate("payment");
              } else {
                navigate("/");
              }
            }}
          >
            {paymentButtonText()}
          </Button>
        </div>
      </div>
     
    </div>
  );
};

export default Cart;
