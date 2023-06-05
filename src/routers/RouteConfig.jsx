import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage/DashboardPage'

const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteConfig