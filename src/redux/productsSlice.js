import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

const initialState={
    loading:false,
    products:[],
    error:""
}
const url = "https://fakestoreapi.com/products"
export const fetchProducts=createAsyncThunk("productsfetch",async()=>{
    try{
         const res = await fetch(url);
         const data = await res.json();
         return data;
    }catch(err){
        return err.message;
    }
 
})
const productsSlice = createSlice({
    name:"productsSlice",
    initialState,
    reducers:{
        getProducts:(state,action)=>{
            state.products=action.payload
            // return state;
        }
    },
    extraReducers(builder){
        builder.addCase(fetchProducts.pending,(state,action)=>{
          state.loading=true;
        //   return state
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.products=action.payload
            // return state
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
            // return state
        })
    }
})
export const {getProducts} = productsSlice.actions;
export default productsSlice.reducer;