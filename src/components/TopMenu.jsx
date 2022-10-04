import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    color: "white",
    padding: "5px",
  },
}));

const TopMenu = () => {
  const handleLogOut = () => {
    {
      localStorage.removeItem("token");
      window.location.reload();
      window.location.href="/";
    }
  };

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="inherit" >
          <Link to="/" className={classes.container}>
            Home
          </Link>
        </Typography>
        <Typography variant="inherit">
          <Link to="/products" className={classes.container}>
            Products
          </Link>
        </Typography>
        <Typography variant="inherit">
          <Link to="/contactus" className={classes.container}>
            ContactUs
          </Link>
        </Typography>
        {!localStorage.getItem("token")?<><Typography variant="inherit">
            <Link to="/login"  className={classes.container}>
              Login
            </Link>
          </Typography>
          <Typography variant="inherit" >
            <Link to="/register" className={classes.container}>
              Register
            </Link>
          </Typography></> :  <Typography variant="inherit" >
            <Link to="" className={classes.container} onClick={handleLogOut}>
              LogOut
            </Link>
          </Typography>}
         
         
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
