
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Component/Pages/Homepage'
import Login from './Component/Pages/Login'
import Signup from './Component/Pages/Signup'

function App() {
  return (
  <>
   <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
   </Routes>
  
  </>
  )
}


export default App
