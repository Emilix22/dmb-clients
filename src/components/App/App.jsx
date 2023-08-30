import './App.css'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Form from '../Forms/FormComplaintCar/Form'
import { Routes, Route } from 'react-router-dom'
import ClientSelect from '../ClientSelect/ClientSelect'
import FormHome from '../Forms/FormComplaintHome/FormHome'
import FormOther from '../Forms/FormComplaintOther/FormOther'
import FormCarCompany from '../Forms/FormComplaintCar/FormCarCompany'
import FormHomeCompany from '../Forms/FormComplaintHome/FormHomeCompany'

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complaint-car" element={<ClientSelect rutaPerson={'/complaint-car-person'} rutaCompany={'/complaint-home-company'} />} />
        <Route path="/complaint-home" element={<ClientSelect rutaPerson={'/complaint-home-person'} rutaCompany={'/complaint-home-company'} />} />
        <Route path="/complaint-other" element={<ClientSelect rutaPerson={'/complaint-other-person'} />} />

        <Route path="/complaint-car-person" element={<Form />} />
        <Route path="/complaint-car-company" element={<FormCarCompany />} />

        <Route path="/complaint-home-person" element={<FormHome />} />
        <Route path="/complaint-home-company" element={<FormHomeCompany />} />
        
        <Route path="/complaint-other-person" element={<FormOther />} />
      </Routes>
    </>
    
  )
}

export default App
