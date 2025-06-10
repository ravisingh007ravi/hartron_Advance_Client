import React from 'react';
import { Navbar, Home, Signup, LogIn, ViewCourse, CenterHead, Faculty } from './AllComponents.js';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ['/sign-up', '/log-in'];

  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/log-in' element={<LogIn />} />
        <Route path='/courses/:courseId' element={<ViewCourse />} />
        <Route path='/center_head' element={<CenterHead />} />
        <Route path='/faculty' element={<Faculty />} />
      </Routes>
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
