import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import { LoginSignup } from './Pages/LoginSignup';
import { Product } from  './Pages/Product';
import { ShopCategory } from './Pages/ShopCategory';
import { Shop } from './Pages/Shop';
import { Cart } from './Pages/Cart';
import { Footer } from './Component/Footer/Footer';
import men_banner from './Component/assest/banner_mens.png'
import women_banner from './Component/assest/banner_women.png'
import kid_banner from './Component/assest/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
           <Navbar/>    
                <Routes>
        <Route path='/shop' element={ <Shop/> }/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/product' element={  <Product/>    } >
        <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart/> }/>
        <Route path='/login' element={<LoginSignup/>}/>
              </Routes> 
              <Footer/>   
      </BrowserRouter>
    </div>
  );
}
export default App;
