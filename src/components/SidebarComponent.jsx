import React from 'react'
import Sidebar from './Sidebar.css'
import { type } from '@testing-library/user-event/dist/type'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import History from './History'
import Calendar from './Calendar'
import Appointments from './Appointments'
import Chat from './Chat'
import Setting from './Setting'
import Test from './Test'
import Statistics from './Statistics'
import Support from './Support'
import MainDashboardComponent from './MainDashboardComponent'
import MainCalendarComponent from './MainCalendarComponent'

function SidebarComponent() {
  return (
    <div>
      <section id='sec2'>
       
        <article id='art2'>
          <BrowserRouter>
          <Navbar />
          <Routes>General
            <Route path="/dashboard" element={<Dashboard/>} > Dashboard</Route> 
           <Route path="/history" element={<History/>} >History</Route>
            <Route path="/calendar" element={<Calendar/>}>Calendar</Route>
            <Route path="/appointments" element={<Appointments/>} >Appointments</Route>
            <Route path="/statistics" element={<Statistics/>} >Statistics</Route>
            <Route path="/test" element={<Test/>}>Test</Route>
            <Route path="/chat" element={<Chat/>} >Chat</Route>
            <Route path="/support" element={<Support/>} >Support</Route>
            <Route path="/setting" element={<Setting/>}>Setting</Route> 
          </Routes>
          </BrowserRouter> 
        </article>
        <article id='art3'>
         <MainDashboardComponent></MainDashboardComponent>
         </article>
         <article id='art4'>
         <MainCalendarComponent></MainCalendarComponent>
         </article>
      </section>
    </div>
  )
}

export default SidebarComponent
