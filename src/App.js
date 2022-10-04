import React from 'react';
import TopMenu from './components/TopMenu';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Products from './components/products/Products';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';
import NewProducts from './components/products/NewProducts';
import UpdateProducts from './components/products/UpdateProducts';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  

function App() {
  return (
    <Router>
       <div>
       <ToastContainer />
     <TopMenu/>   

</div>
<Routes>   
     
<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Register/>} /> 
        <Route path="/" element={<LandingPage/>} />
        <Route path="/products/update/:id" element={<UpdateProducts/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/new" element={<NewProducts/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

    </Router>
    
    
  );
}

export default App;
