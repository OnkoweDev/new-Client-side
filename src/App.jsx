import { Routes, Route } from 'react-router-dom'
import Login from './components/LoginandRegister/Login'
import Register from './components/LoginandRegister/Register'
import Sidebar from './components/SideBar/Sidebar'



function App() {


  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
    </Routes>

    </div>
  )
}

export default App
