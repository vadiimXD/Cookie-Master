import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { AuthContextProvider } from './contexts/AuthContext'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import Register from './components/register/Register'

function App() {

  return (
    <AuthContextProvider>
      <Header />
      <Routes>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Footer />
    </AuthContextProvider>
  )

}

export default App
