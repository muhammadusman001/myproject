import { Box, Button, Grid } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const SingleProduct = ({ product, onDelete }) => {
  const id = product._id;
  const navigate = useNavigate();
  const handeldelete = () => {
    axios
      .delete("http://localhost:4000/api/products/" + id)
      .then((res) => {
        onDelete();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Grid item xs={6} md={4} lg={3}>
      <h1 style={{color:"white"}}>{product.name}</h1>

      <p style={{color:"white"}}>{product.price}</p>
      <Box>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => navigate("/products/update/" + id)}
        >
          Edit
        </Button>
        <Button color="primary" variant="contained" onClick={handeldelete}>
          Delete
        </Button>
      </Box>
      <hr />
    </Grid>
  );
};

export default SingleProduct