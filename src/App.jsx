import React from 'react';
import { Navbar, Home, Signup, LogIn, ViewHSC, CenterHead, Faculty, ConfirmationEMail,ForgatePassword
,ViewAllCourse,Footer,ViewHASC} from './AllComponents.js';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ['/sign-up', '/log-in','/confirmation-email','/forgate-password'];

  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/log-in' element={<LogIn />} />
        <Route path='/center_head' element={<CenterHead />} />
        <Route path='/faculty' element={<Faculty />} />
        <Route path='/confirmation-email' element={<ConfirmationEMail />} />
        <Route path='/forgate-password' element={<ForgatePassword />} />
        <Route path='/view-all-course' element={<ViewAllCourse />} />
        <Route path='/hsc/:courseId' element={<ViewHSC />} />
        <Route path='/hasc/:courseId' element={<ViewHASC />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
