
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';

import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import boots_banner from './Components/Assets/banner_mens.png'
import apparels_banner from './Components/Assets/banner_women.png'
import ContactUs from './Pages/ContactUs';
import Payment from './Components/Payment/Payment';
import Login from './Pages/Login';
import SearchBar from './Components/SearchBar/SearchBar';
import ProductDisplay from './Components/ProductDisplay/ProductDisplay';


function App() {
  
  return ( 
    <div>
      <BrowserRouter>
      <Navbar/>
      <SearchBar/>
      
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/boots' element={<ShopCategory  banner={boots_banner} category="boots"/>}/>
        <Route path='/apparels' element={<ShopCategory  banner={apparels_banner} category="apparels"/>}/>
        
        <Route exact path="/" component={SearchBar} />
        <Route path="product" component={ProductDisplay}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
      
        <Route path="product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/payment' element={<Payment/>}/>



      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
