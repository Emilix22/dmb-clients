import './App.css'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Form from '../Forms/FormComplaintCar/Form'
import { Routes, Route } from 'react-router-dom'
import ClientSelect from '../ClientSelect/ClientSelect'
import FormHome from '../Forms/FormComplaintHome/FormHome'
import FormOther from '../Forms/FormComplaintOther/FormOther'

function App() {
  
  return (
    <>
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/complaint-car" element={<ClientSelect ruta={'/complaint-car-person'} />} />
      <Route path="/complaint-home" element={<ClientSelect ruta={'/complaint-home-person'} />} />
      <Route path="/complaint-other" element={<ClientSelect ruta={'/complaint-other-person'} />} />
      <Route path="/complaint-car-person" element={<Form />} />
      <Route path="/complaint-home-person" element={<FormHome />} />
      <Route path="/complaint-other-person" element={<FormOther />} />
    </Routes>
    </>
    
  )
}

export default App
