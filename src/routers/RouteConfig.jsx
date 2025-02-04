import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage/DashboardPage'
import ProjectPage from '../pages/ProjectPage/ProjectPage'
import ScrollToTop from '../hooks/scrollToTop';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const RouteConfig = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<DashboardPage />}/>
        <Route path='/projects/:projectId' element={<ProjectPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteConfig