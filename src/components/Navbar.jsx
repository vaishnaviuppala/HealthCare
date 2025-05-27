import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaTachometerAlt } from 'react-icons/fa';
import { FaHistory } from 'react-icons/fa';
import { FaCalendarCheck } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import { FaClipboardCheck } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';
import {FaLifeRing, FaCog} from 'react-icons/fa'

function Navbar() {
  return (
  <div>
    <p style={{color:"grey", paddingRight:"60px"}}> General </p>
  <ul style={{display:"inline-block", listStyleType:"none",alignItems:"self-start",alignContent:"baseline"}}>
       
  <li><FaTachometerAlt size={15} style={{color:"grey"}} /> <Link to="/dashboard" onClick={(e)=>{e.preventDefault();}} style={{color:"gray",textDecoration:"none"}}>Dashboard</Link></li><br/>
  <li><FaHistory size={15} style={{color:"grey"}} /> <Link to="/history" onClick={(e)=>{e.preventDefault();}} style={{color:"gray",textDecoration:"none"}}>History</Link></li><br/>
  <li><FaRegCalendarAlt size={15} color="grey"/> <Link to="/calendar" onClick={(e)=>{e.preventDefault();}} style={{color:"gray",textDecoration:"none"}}>Calendar</Link></li><br/>
  <li><FaCalendarCheck size={15} color="grey"/> <Link to="appointments" onClick={(e)=>{e.preventDefault();}} style={{color:"gray",textDecoration:"none"}}>Appointments</Link></li><br/>
  <li><FaChartBar size={15} color="grey"/> <Link to="/statistics" onClick={(e)=>{e.preventDefault();}} style={{color:"gray",textDecoration:"none"}}>Statistics</Link></li><br/>
  <li><Link to="/test" onClick={(e)=>{e.preventDefault();}} style={{color:"gray",textDecoration:"none",paddingRight:"100px"}}>Tools</Link></li><br/>
  <li><FaComments size={15} color="grey"/> <Link to="/chat" onClick={(e)=>{e.preventDefault();}} style={{color:"gray",textDecoration:"none"}}>Chat</Link></li><br/>
  <li><FaLifeRing size={15} color="gray"/> <Link to="/support" onClick={(e)=>{e.preventDefault();}} style={{color:"gray",textDecoration:"none"}}>Support</Link></li><br/>
  <li style={{paddingTop:"100px"}}><FaCog size={15} color="grey" /> <Link to="/setting" onClick={(e)=>{e.preventDefault();}} style={{color:"gray",textDecoration:"none"}}>Setting</Link></li>
  </ul>
  </div>
  )
}

export default Navbar
