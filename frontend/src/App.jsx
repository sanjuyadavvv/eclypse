import React from 'react'
import Home from './Components/Home'
import Bottom from './Components/Bottom'
import Section3 from './Components/Section3'
import Section4 from './Components/Section4'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import CheckOut from './Components/CheckOut'
import NavBar from './Components/NavBar'

const App = () => {
  return (
   
  
<BrowserRouter>
<NavBar/>
<Routes>
  <Route path='/' element={<Home/>}/>

   <Route path='/checkout' element={<CheckOut/>}/>



    </Routes>

    </BrowserRouter>
      
  
  )
}

export default App
