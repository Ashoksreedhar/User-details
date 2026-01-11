import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import User from './components/User'
import UserDetails from './components/UserDetailes'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {


  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={ <About />}/>
            <Route path='/users' element={ <User />}/>
            <Route path='/user/:id' element={<UserDetails/>}/>
        </Routes>
      </BrowserRouter> 
     
    </>
  )
}

export default App
