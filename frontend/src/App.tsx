import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Admin } from './pages/Admin'
import { HotelOwner } from './pages/HotelOwner'
import { Client } from './pages/Client'
import { Signup } from './pages/signup/Signup'
import { Signin } from './pages/signin/Signin'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>

          <Route path="/admin" element={<Admin/>}/>
          <Route path="/hotelowner" element={<HotelOwner/>}/>
          <Route path="/client" element={<Client/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
