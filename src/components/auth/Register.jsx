import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const styles = {
  paper: {
    height: 500,
    padding: "38px",
    backgroundImage: `url(${"https://media.istockphoto.com/photos/dark-black-and-blue-grungy-wall-background-for-display-or-montage-of-picture-id1150477705?k=20&m=1150477705&s=612x612&w=0&h=Yrqw1w6bEJ40kZFTSovkLtu4VE52zLgl-n6AE1t2BuM="})`,
  },
};

const Register = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("@gmail.com");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const handleRegister = () => {
    axios
      .post("http://localhost:4000/api/users/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.res.data, {
          position: toast.POSITION.TOP_LEFT,
        });
      });
  };

  return (
    <div style={styles.paper}>
      <Card
        style={{
          width: "250px",
          p: "150px",
          marginTop: "120px",
          marginLeft: "5in",
        }}
      >
        <CardContent>
          <TextField
            label="name"
            variant="standard"
            required
            fullWidth
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <TextField
            label="email"
            variant="standard"
            required
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <TextField
            label="password"
            type="password"
            fullWidth
            variant="standard"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={handleRegister}
            >
              Register
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};
export default Register;
