import { Box, Fab, Grid } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import SingleProduct from "./SingleProduct";
const styles = {
  paper: {
      height: 500,
      padding:"38px",
      backgroundImage: `url(${"https://3.bp.blogspot.com/-G_1RTAzMZe4/XH6kc8ZROxI/AAAAAAABFbw/3KoUyt1jtlUWQQkmeHWR7gqIQXyBiEhbwCHMYCw/s1600/black-background-wood-%25E2%259D%25A4-4k-hd-desktop-wallpaper-for-4k-ultra-hd.jpg"})`
  }
};

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const navigate = useNavigate();
  const getData = () => {
    axios
      .get("http://localhost:4000/api/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {});
  };

  React.useEffect(getData, []);

  return (
    <div style={styles.paper}>
      <h1 style={{color:"white"}}>Products:</h1>
      <Box sx={{ position: "absolute", bottom: "5%", right: "5%" }}>
        {localStorage.getItem("token") && (
           <Fab
           color="primary"
           variant="circular"
           onClick={() => navigate("/products/new")}
         >
           <AddIcon />
         </Fab>
        )}
       
      </Box>
      {products.length === 0 ? (
        <p>There are no products</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <SingleProduct key={index} product={product} onDelete={getData} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Products;


