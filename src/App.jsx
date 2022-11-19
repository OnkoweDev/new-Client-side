import { Routes, Route } from 'react-router-dom'
import Login from './components/LoginandRegister/Login'
import Register from './components/LoginandRegister/Register'



function App() {


  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>

    </div>
  )
}

export default App
