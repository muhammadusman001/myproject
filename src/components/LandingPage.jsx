import React from 'react';
const styles = {
    paper: {
    
         height: 567,
         padding:"5px",
        backgroundImage: `url(${"https://3.bp.blogspot.com/-G_1RTAzMZe4/XH6kc8ZROxI/AAAAAAABFbw/3KoUyt1jtlUWQQkmeHWR7gqIQXyBiEhbwCHMYCw/s1600/black-background-wood-%25E2%259D%25A4-4k-hd-desktop-wallpaper-for-4k-ultra-hd.jpg"})`
    }
};
 
      
const LandingPage = () => {
    

    return ( 
        <div style={styles.paper} >
        <h1 style={{color:"white"}}>Welcome to MuSa Shop:</h1>

        </div>
     );
}
 
export default LandingPage;