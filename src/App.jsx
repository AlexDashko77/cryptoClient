import NavBar from "./Components/NavBar"
import {Routes, Route} from 'react-router-dom'
import Rates from "./Pages/Rates"
import { useEffect, useState } from "react"
import Exchange from "./Pages/Exchange"
import Registration from "./Pages/Registration"
import Login from "./Pages/Login"
import rates from "./Store/rates"
import requests from "./Store/requests"
import Requests from "./Pages/Requests"
import AdminPanel from "./Pages/AdminPanel"
import { Observer, observer } from "mobx-react-lite"
import user from "./Store/user"
import PaymentWindow from "./Pages/PaymentWindow"
import Support from "./Pages/Support"
import Footer from "./Components/Footer"
import PhoneMenu from "./Pages/PhoneMenu"

const App = observer(() => {
  const [language, setLanguage] = useState(false)

  useEffect(() => {
    rates.fetchRates()
    console.log(localStorage);
  }, [])


  useEffect(() => {
    const preventSwipeUp = event => {
      if (event.touches[0].clientY < startY) {
        event.preventDefault();
      }
    };

    const startY = window.innerHeight - 1; 

    window.addEventListener('touchmove', preventSwipeUp, { passive: false });

    return () => {
      window.removeEventListener('touchmove', preventSwipeUp);
    };
  }, []);

  return (
    <>
      <NavBar language={language} setLanguage={setLanguage}/>
      <div className="wrapper">
         <Routes>
         <Route path="/" element={<Rates language={language}/>}/>
         <Route path="/rates" element={<Rates language={language}/>}/>
         <Route path="/exchange" element={<Exchange language={language}/>}/>
         <Route path="/requests" element={<Requests language={language}/>}/>
         <Route path="/registration" element={<Registration language={language} title={language ? 'Регистрация' :'Registration'}/>}/>
         <Route path="/login" element={<Login language={language} title={language ? 'Авторизация' : 'Login'}/>}/>
         <Route path="/admin" element={<AdminPanel language={language}/>}/>
         <Route path="/payment" element={<PaymentWindow language={language}/>}/>
         <Route path="/support" element={<Support language={language}/>}/>
         <Route path="/phoneMenu" element={<PhoneMenu language={language} setLanguage={setLanguage}/>}/>
       </Routes>
       </div>
       <Footer/>
    </>
   
  )
})
export default App