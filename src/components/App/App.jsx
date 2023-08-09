import './App.css'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Form from '../Forms/FormComplaintCar/Form'
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/complaint-car" element={<Form />} />
    </Routes>
    </>
    
  )
}

export default App
