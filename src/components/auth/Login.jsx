import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button, TextField } from "@mui/material";
import axios from "axios"
const styles = {
  paper: {
      
      height: 500,
      padding:"38px",
      backgroundImage: `url(${"https://media.istockphoto.com/photos/dark-black-and-blue-grungy-wall-background-for-display-or-montage-of-picture-id1150477705?k=20&m=1150477705&s=612x612&w=0&h=Yrqw1w6bEJ40kZFTSovkLtu4VE52zLgl-n6AE1t2BuM="})`
  }
};


const Login = (props) => {
  const [email, setEmail] = React.useState("@gmail.com");
  const [password, setPassword] = React.useState("");

  const handlelogin = () => {
    axios
      .post("http://localhost:4000/api/users/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data);
        window.location.reload();
        window.location.href = "/";
      })
      .catch((err) => {
        console.log("error");
      });
  };

  
  return (
    <div style={styles.paper}>
    <Card  style={{width:"250px",p:"150px",marginTop: "120px",marginLeft:"5in"}}>
      <CardContent  >
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
        <Button variant="contained" color="primary" onClick={handlelogin}>
          Login
        </Button>
        </CardActions>
      </CardContent>
    </Card>
    </div>
  );
};
export default Login;
