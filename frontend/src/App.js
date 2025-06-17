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
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/AboutH' element={<AboutH />}></Route>
          <Route path='/BookMain' element={<BookMain />}></Route>
          <Route path='/TeamMain' element={<TeamMain />}></Route>
          <Route path='/TestMain' element={<TestMain />}></Route>
          <Route path='/ServMain' element={<ServMain />}></Route>
          <Route path='/Error' element={<Error />}></Route>
          <Route path='/GetQuote' element={<GetQuote/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Signup' element={<Signup/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
          <Route path='/Checkout' element={<Checkout/>}></Route>
          <Route path='/UserTable' element={<UserTable/>}></Route>
          <Route path='/UserEdit/:id' element={<UserEdit/>}></Route>
          <Route path='/UserView/:id' element={<UserView/>}></Route>
          <Route path='/AdminDashboard' element={<AdminDashboard/>}></Route>
        </Route>
      </Routes>
      <ToastContainer/>
    </>
  );
}

export default App;
