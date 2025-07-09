import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loading:false,
    totalCartPrice:0,
    carts:[{
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'men\'s clothing',
        quantity:1,
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: {
          rate: 3.9,
          count: 120
        }
      }],
    error:""
}

const cartSlice = createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
     addToCart:(state,action)=>{
      let newcart = {...action.payload};
      newcart.quantity=1
      state.carts.push(newcart)
      
     },
     removeFromCart:(state,action)=>{
        let newcart  = state.carts.filter(cart=>cart.id !== action.payload);
        
        // state.carts.concat(newcart);
        state.carts = newcart;
        // console.log("after remove",JSON.parse(JSON.stringify(state.carts)));
        // console.log("new cart",JSON.parse(JSON.stringify(newcart)));
     },
     incrementQuantity:(state,action)=>{
       state.carts = state.carts.map(cart=>{
        if(cart.id === action.payload){
          cart.quantity = cart.quantity+1;
          
          return cart
        }
        return cart
       })
       
     },
     decrementQuantity:(state,action)=>{
        state.carts = state.carts.map(cart=>{
        if(cart.id === action.payload){
          cart.quantity = cart.quantity-1;
          return cart
        }
        return cart
       })
     }
    },
    // extraReducers(builder){

    // }
})
export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity} = cartSlice.actions
export default cartSlice.reducer