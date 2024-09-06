import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { AuthContextProvider } from './context/AuthContext'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
function App() {

  return (
    <AuthContextProvider>
      <Header />
      <Routes>
        <Route></Route>
      </Routes>
      <Footer />
    </AuthContextProvider>
  )

}

export default App
