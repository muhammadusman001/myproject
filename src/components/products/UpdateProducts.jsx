import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProducts() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/products/${id}`)
      .then((res) => {
        setName(res.data.name);
        setPrice(res.data.price);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
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
                .put(`http://localhost:4000/api/products/${id}`, {
                  name,
                  price,
                })
                .then((res) => {
                  navigate("/products");
                })
                .catch((err) => {
                  console.log(err.message);
                });
            }}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default UpdateProducts;