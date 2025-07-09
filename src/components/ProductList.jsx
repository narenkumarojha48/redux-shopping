
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import Grid from '@mui/material/Grid';
import { fetchProducts,getProducts } from "../redux/productsSlice";
import ProductListItem from "./ProductListItem";
const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="productlist">
      <Grid container spacing={2}>
        {products?.map((product) => (
          <>
            <Grid size={{ xs: 6, md: 3 }}>
              <ProductListItem key={product.id} product={product} />
            </Grid>
          </>
        ))}
      </Grid>
    </div>
  );
}

export default ProductList