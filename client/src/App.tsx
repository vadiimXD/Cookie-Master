import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { AuthContextProvider } from './contexts/AuthContext'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import Register from './components/register/Register'
import Login from './components/login/Login'

function App() {

  return (
    <AuthContextProvider>
      <Header />
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<h1>home</h1>}></Route>
        <Route path='*' element={<h1>404 NOT FOUND!!!</h1>}></Route>
      </Routes>
      <Footer />
    </AuthContextProvider>
  )

}

export default App
