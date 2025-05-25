import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/projects" element={<Projects />} />  
      </Routes>
      <Footer/>
    </>
  )
}

export default App
