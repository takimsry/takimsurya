import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage/DashboardPage'
import ProjectPage from '../pages/ProjectsPage/ProjectPage'

const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage />}/>
        <Route path='/projects/:projectId' element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteConfig