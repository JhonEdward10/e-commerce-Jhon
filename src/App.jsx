import './App.css'
import { Routes, Route } from 'react-router-dom'
import CartScreen from './component/cart/CartScreen'
import HomeScreen from './component/home/HomeScreen'
import LoginScreen from './component/login/LoginScreen'
import ProtectedRoute from './component/protedRoute/ProtectedRoute'
import PurchaseScreen from './component/purchaseScreen/PurchaseScreen'
import HeaderScreen from './component/shared/HeaderScreen'
import ProductScreen from './component/products/ProductScreen'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'
import { useEffect } from 'react'
import FooterScreen from './component/shared/FooterScreen'
import axios from 'axios'

function App() {

  // useEffect(() => {

  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'

  //   const newUser = {
  //     firstName: "Edward",
  //     lastName: "Mendez",
  //     email: "edwardtovar10@gmail.com",
  //     password: "pass1234",
  //     phone: "3124358872",
  //     role: "admin"
  //   }
    
  //   axios.post(URL, newUser)
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log(err.data))

  // },[])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  },[])

  return (

    <div className="App">
      <HeaderScreen />
      <main className='main'>
      <Routes>

        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        
        <Route element={<ProtectedRoute />}>
          <Route path='/cart' element={<CartScreen />}/>
          <Route path='/purchase' element={<PurchaseScreen />}/>
        </Route>

        <Route path='/product/:id' element={<ProductScreen />}/>
        
      </Routes>
      </main>
      <FooterScreen />
    </div>
  )
}

export default App
