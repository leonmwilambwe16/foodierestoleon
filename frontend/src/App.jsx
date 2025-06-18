
import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Homepage from '../src/pages/Homepage.jsx'
import Contact from './pages/Contact.jsx'
import Food from './pages/Food.jsx'
import Signup from '../src/Components/signup.jsx';
import Login from '../src/Components/Login.jsx';
import CartPage from './pages/CartPage.jsx';

import { CartProvider } from './context/CartContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import Dashboard from './pages/Dashboard.jsx';

function App() {
 

  return (
    <AuthProvider>
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Homepage />} />
          <Route path='/food' element={<Food />} />
           <Route path='/cart' element={<CartPage />} />
           <Route path='/signup' element={<Signup />} />
           <Route path='/login' element={<Login />} />
           <Route path='/dashboard/*' element={<Dashboard/>} />

        </Routes>
        <Contact />
      </BrowserRouter>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;


