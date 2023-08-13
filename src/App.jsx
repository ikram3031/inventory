import { useState } from 'react'
import NavBar from './Components/sections/NavBar/navBar';
import SideBar from './Components/sections/SideBar/sideBar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Products from './Pages/Products/Products';
import AddProduct from './Pages/Products/Add Product/AddProducts';
import Layout from './Components/Layout';

function App() {
  // const Layout = withOutLoginLayout;

  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        
        <Route path='/login' element={<Login />} />
        <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/add-product' element={<AddProduct />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
