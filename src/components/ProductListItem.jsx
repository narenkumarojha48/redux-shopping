import { useDispatch } from "react-redux";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { addToCart } from '../redux/cartSlice';

const ProductListItem = ({product}) => {
  const dispatch = useDispatch();
  function handleAdd(prod){
    dispatch(addToCart(prod))
  }
  return (
    <div className="productlistitem">
      <Card sx={{ maxWidth: 345, height: 500 }}>
        <CardMedia
          sx={{ height: 200, width: 300, objectFit: "center" }}
          image={product.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {product.description.slice(1, 100)}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=>handleAdd(product)}>Add to cart</Button>
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </div>
  );
}

export default ProductListItem