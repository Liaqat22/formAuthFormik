import './App.css';
import {  Typography } from "@mui/material"
import AllProducts from './pages/AllProducts';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import AddProduct from './pages/AddProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditProduct from './pages/EditProduct';



function App() {
  return (
    < >
      <Typography variant="h5" sx={{textAlign:"center" , fontWeight:"bold"}} className='mt-3'>
        React App with Tanstack query
        </Typography>
        <ToastContainer />
     <Routes>
      <Route path='/' element = { <AllProducts/>}/>
      <Route path='/addproduct' element = { <AddProduct/>}/>
      <Route path='/editproduct/:pid' element = { <EditProduct/>}/>
      <Route path='/productDetails/:pid' element = { <ProductDetails/>}/>
      <Route path="*" element={<div>Page Not Found</div>} />

     </Routes>
     
    </>
  );
}

export default App;
