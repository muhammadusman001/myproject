import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewProducts() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();
  const styles = {
    paper: {
        
        height: 500,
        padding:"38px",
        backgroundImage: `url(${"https://img.freepik.com/free-vector/product-display-background-with-light-frame_1017-31892.jpg?size=626&ext=jpg"})`
    }
  };

  return (
    <div style={styles.paper}>
      <Grid container spacing={3}>
        <Grid item xs={12}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={7}>
          <TextField
            fullWidth
            variant="standard"
            label="name"
            value={name}
            onChange={(res) => setName(res.target.value)}
          />

          <TextField
            fullWidth
            variant="standard"
            label="Price"
            value={price}
            onChange={(res) => setPrice(res.target.value)}
          />
        </Grid>

        <Grid item xs={12}></Grid>
        <Grid item xs={2}></Grid>

        <Grid item xs={10}>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              axios
                .post("http://localhost:4000/api/products", { name, price })
                .then((res) => {
                  navigate("/products");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Add New
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default NewProducts;