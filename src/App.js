
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home";
import "./index.css"
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import Forgot from "./Pages/auth/Forgot";
import Reset from "./Pages/auth/Reset";
import SideBar from "./components/siderbar/SideBar";
import Layout from "./components/layout/Layout";
import AddProduct from "./Pages/addProduct/AfddProduct";
import Dashboard from "./Pages/dashboard/Dashboard";
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoginStatus } from "./services/authService";
import { SET_LOGIN } from "./redux/features/auth/authSlice";
import ProductDetail from "./components/product/productDetail/PfroductDetail";
import EditProduct from "./Pages/editProduct/EditProduct";
import Profile from "./Pages/profile/Profile";
import EditProfile from "./Pages/profile/EditProfile";
import Contact from "./Pages/contact/Contact";
axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const loginStatus = async()=>{
    const status=  await  getLoginStatus();
    dispatch(SET_LOGIN(status));
  }
  useEffect(()=>{
    loginStatus();
    // eslint-disable-next-line
  },[])
  return (
   <BrowserRouter>
    <ToastContainer/>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgot" element={<Forgot/>}/>
      <Route path="/resetpassword/:resetToken" element={<Reset/>}/>

      
      <Route path="/dashboard" element={
        <SideBar>
          <Layout>
            <Dashboard/>
          </Layout>
        </SideBar>
      }/>
      <Route path="/add-product" element={
        <SideBar>
          <Layout>
            <AddProduct/>
          </Layout>
        </SideBar>
      }/>
      <Route
        path="/product-detail/:id"
        element={
          <SideBar>
          <Layout>
            <ProductDetail/>
          </Layout>
        </SideBar>
        }
      />
      <Route
        path="/edit-product/:id"
        element={
          <SideBar>
          <Layout>
            <EditProduct/>
          </Layout>
        </SideBar>
        }
      />
      <Route
        path="/profile"
        element={
          <SideBar>
          <Layout>
            <Profile/>
          </Layout>
        </SideBar>
        }
      />
      <Route
        path="/edit-profile"
        element={
          <SideBar>
          <Layout>
            <EditProfile/>
          </Layout>
        </SideBar>
        }
      />
      <Route
        path="/contact-us"
        element={
          <SideBar>
          <Layout>
            <Contact/>
          </Layout>
        </SideBar>
        }
      />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
