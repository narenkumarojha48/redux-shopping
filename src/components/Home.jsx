import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts,getProducts } from "../redux/productsSlice";
import Cart from "./Cart";

import ProductList from "./ProductList";
const Home = () => {
    // const dispatch = useDispatch();
    // const products = useSelector(state=>state.products.products);
    
  return (
    <section className="maincontainer">
       <Cart/>
       <ProductList/>
    </section>
  )
}

export default Home