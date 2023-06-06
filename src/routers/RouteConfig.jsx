import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage/DashboardPage'
import Project4Page from '../pages/ProjectsPage/Project4Page'
import Project3Page from '../pages/ProjectsPage/Project3Page'
import Project2Page from '../pages/ProjectsPage/Project2Page'
import Project1Page from '../pages/ProjectsPage/Project1Page'

const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage />}/>
        <Route path='/projects'>
          <Route path='e-has' element={<Project4Page />} />
          <Route path='persani' element={<Project3Page />} />
          <Route path='ourgym' element={<Project2Page />} />
          <Route path='angkutaja' element={<Project1Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteConfig