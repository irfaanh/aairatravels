import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router'
import UserHome from '../Route/UserHome'
import ServicePage from '../Route/ServicePage'
import PackagePage from '../Route/PakagePage'
import ContactSection from '../Route/ContactSection'
import WhatsAppIcon from '../Pages/UserPage/WhatsAppIcon.Jsx'

const Router = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/'>
                <Route
                path='' 
                element={<UserHome/>}/>
                <Route path='/allservices'
                element={<ServicePage/>}/>
                <Route path='/packages'
                element={<PackagePage/>}/>
                <Route path='/contact'
                element={<ContactSection/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router