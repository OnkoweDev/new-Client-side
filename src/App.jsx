import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './components/LoginandRegister/Login'
import Register from './components/LoginandRegister/Register'
import Home from './pages/Home'
import './index.css'
import Draft from './pages/Draft';



function App() {


  return (
    <div className="App">
        
    <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/draft' element={<Draft />} />
    </Routes>

    </div>
  )
}

export default App
