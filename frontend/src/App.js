import './App.css';

import { ToastContainer } from 'react-toastify';
import About from './Componenets/About';
import Home from './Componenets/Home';
import { Route, Routes } from "react-router-dom"
import Layout from './Componenets/Layout';
import Contact from './Componenets/Contact';
import AboutH from './Componenets/AboutH';
import ServMain from './Componenets/ServMain';
import BookMain from './Componenets/BookMain';
import TeamMain from './Componenets/TeamMain';
import TestMain from './Componenets/TestMain';
import Error from './Componenets/Error';
import GetQuote from './Componenets/GetQuote';
import Signup from './Componenets/Signup';
import Login from './Componenets/Login';
import UserTable from './Componenets/UserTable';
import UserView from './Componenets/UserView';
import UserEdit from './Componenets/UserEdit';
import AdminDashboard from './Componenets/AdminDashboard';
import Cart from './Componenets/Cart';
import Checkout from './Componenets/Checkout';
import ProductTable from './Componenets/ProductTable';
import ProductView from './Componenets/ProductView';
import ProductEdit from './Componenets/ProductEdit';
import ProductAdd from './Componenets/ProductAdd';
import ProductPage from './Componenets/ProductPage';
import MechanicTable from './Componenets/MechanicTable';
import MechanicView from './Componenets/MechanicView';
import MechanicEdit from './Componenets/MechanicEdit';
import MechanicAdd from './Componenets/MechanicAdd';
import ScrollToTop from './Componenets/ScrollToTop';
import { CartProvider } from './Componenets/CartProvider';
function App() {
  return (
    <>
    <CartProvider>
    <ScrollToTop />
      <Routes>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Signup' element={<Signup/>}></Route>
          <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/AboutH' element={<AboutH />}></Route>
          <Route path='/BookMain' element={<BookMain />}></Route>
          
          <Route path='/TestMain' element={<TestMain />}></Route>
          <Route path='/ServMain' element={<ServMain />}></Route>
          <Route path='/Error' element={<Error />}></Route>
          <Route path='/GetQuote' element={<GetQuote/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
          <Route path='/Checkout' element={<Checkout/>}></Route>
          <Route path='/UserTable' element={<UserTable/>}></Route>
          <Route path='/UserEdit/:id' element={<UserEdit/>}></Route>
          <Route path='/UserView/:id' element={<UserView/>}></Route>
          <Route path='/AdminDashboard' element={<AdminDashboard/>}></Route>
          <Route path='/ProductTable' element={<ProductTable/>}></Route>
          <Route path='/ProductView/:id' element={<ProductView/>}></Route>
          <Route path='/ProductEdit/:id' element={<ProductEdit/>}></Route>
          <Route path='/ProductAdd' element={<ProductAdd/>}></Route>
          <Route path='/ProductPage' element={<ProductPage/>}></Route>
        {/* ---------- */}
        <Route path='/MechanicTable' element={<MechanicTable/>}></Route>
          <Route path='/MechanicView/:id' element={<MechanicView/>}></Route>
          <Route path='/MechanicEdit/:id' element={<MechanicEdit/>}></Route>
          <Route path='/MechanicAdd' element={<MechanicAdd/>}></Route>
          <Route path='/TeamMain' element={<TeamMain />}></Route>
        </Route>

      </Routes>
      <ToastContainer/>
      </CartProvider>
    </>
  );
}

export default App;
