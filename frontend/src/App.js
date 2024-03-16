import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './Pages/Cart'; 

import ShopCatagory from './Pages/ShopCatagory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Shop from './Pages/Shop';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png'



function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Navbar></Navbar>

        <Routes>
          <Route path='/'element={<Shop/>}></Route>
          <Route path='/men'element={<ShopCatagory catagory="men" banner ={men_banner}/>}></Route>
          <Route path='/women'element={<ShopCatagory catagory="women" banner ={women_banner}/>}></Route>
          <Route path='/kids'element={<ShopCatagory catagory="kid" banner ={kid_banner}/>}></Route>
          <Route path='/product'element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
