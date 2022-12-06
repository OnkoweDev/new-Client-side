import { Routes, Route } from 'react-router-dom'
// import "./asset/js/bootstrap.min.js"
// import "./asset/js/bootstrap.js"
 import "./asset/css/bootstrap.min.css"

import Login from './components/LoginandRegister/Login'
import Register from './components/LoginandRegister/Register'
// import Sidebar from './components/SideBar/Sidebar'
import Sidebar from './components/SideBar2/Sidebar'
import Home from './pages/Home'



function App() {


  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/sidebar' element={<Sidebar/>}/> */}
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/home' element={<Home/>}/>
    </Routes>

    </div>
  )
}

export default App
