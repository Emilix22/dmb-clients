import './App.css'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Form from '../Forms/FormComplaintCar/Form'
import { Routes, Route } from 'react-router-dom'
import ClientSelect from '../ClientSelect/ClientSelect'
import FormHome from '../Forms/FormComplaintHome/FormHome'
import FormCarCompany from '../Forms/FormComplaintCar/FormCarCompany'
import FormHomeCompany from '../Forms/FormComplaintHome/FormHomeCompany'
import FormMoto from '../Forms/FormComplaintMoto/FormMoto'
import FormMotoCompany from '../Forms/FormComplaintMoto/FormMotoCompany'
import FormConsortium from '../Forms/FormComplaintConsortium/FormConsortium'
import FormConsortiumCompany from '../Forms/FormComplaintConsortium/FormConsortiumCompany'
import FormOther from '../Forms/FormComplaintOther/FormOther'
import FormOtherCompany from '../Forms/FormComplaintOther/FormOtherCompany'
import ConfirmEmail from '../Forms/ConfirmEmail'

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/complaint-car" element={<ClientSelect rutaPerson={'/complaint-car-person'} rutaCompany={'/complaint-car-company'} />} />

        <Route path="/complaint-moto" element={<ClientSelect rutaPerson={'/complaint-moto-person'} rutaCompany={'/complaint-moto-company'} />} />

        <Route path="/complaint-home" element={<ClientSelect rutaPerson={'/complaint-home-person'} rutaCompany={'/complaint-home-company'} />} />

        <Route path="/complaint-consortium" element={<ClientSelect rutaPerson={'/complaint-consortium-person'} rutaCompany={'/complaint-consortium-company'} />} />

        <Route path="/complaint-other" element={<ClientSelect rutaPerson={'/complaint-other-person'} rutaCompany={'/complaint-other-company'} />} />

        <Route path="/complaint-car-person" element={<Form />} />
        <Route path="/complaint-car-company" element={<FormCarCompany />} />

        <Route path="/complaint-moto-person" element={<FormMoto />} />
        <Route path="/complaint-moto-company" element={<FormMotoCompany />} />

        <Route path="/complaint-home-person" element={<FormHome />} />
        <Route path="/complaint-home-company" element={<FormHomeCompany />} />

        <Route path="/complaint-consortium-person" element={<FormConsortium />} />
        <Route path="/complaint-consortium-company" element={<FormConsortiumCompany />} />
        
        <Route path="/complaint-other-person" element={<FormOther />} />
        <Route path="/complaint-other-company" element={<FormOtherCompany />} />

        <Route path="/confirm-complaint/:dni" element={<ConfirmEmail />} />
      </Routes>
    </>
    
  )
}

export default App
