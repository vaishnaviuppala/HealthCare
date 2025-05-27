import React from 'react'
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'
import {GiTooth,GiMuscleUp} from 'react-icons/gi'
import { MdHealthAndSafety } from 'react-icons/md'
import {AiFillEye} from 'react-icons/ai'
import {FaHeartbeat, FaUserMd} from 'react-icons/fa'

function MainCalendarComponent() {
  return (
    <div>
      <section id='sec1'>
        <article id='art1'>
             <div style={{display:"flex",justifyContent:"space-between",gap:"100px",alignContent:"baseline"}}>  
            <h6 style={{fontFamily:"sans-serif",font:"20px",color:"navy"}}>October 2021</h6> 
            <p style={{fontSize:'10px',color:"navy"}}><FaArrowLeft style={{marginRight:"10px"}}/><FaArrowRight/></p>
             </div>   
             <div>
              <table className='table-auto w-full border border-grey-0'>
                <tr className='bg-gray-0'>
                 <td className='border px-4 py-1' style={{color:"navy"}}>Mon</td>
                <td className='border px-4 py-1' style={{color:"navy",backgroundColor:"lightgray"}}>Tues</td>
                <td className='border px-4 py-1' style={{color:"navy"}}>Wed</td>
                <td className='border px-4 py-1' style={{color:"navy"}}>Thurs</td>
                <td className='border px-4 py-1' style={{color:"navy"}}>Fri</td>
                <td className='border px-4 py-1' style={{color:"navy"}}>Sat</td>
                <td className='border px-4 py-1' style={{color:"gray"}}>Sun</td></tr>
                <tr className='bg-gray-0'>
                <td className='border px-4 py-1' style={{color:"navy"}}>25</td>
                <td className='border px-4 py-1' style={{color:"navy",backgroundColor:"lightgray"}}>26</td>
                <td className='border px-4 py-1' style={{color:"navy"}}>27</td>
                <td className='border px-4 py-1' style={{color:"navy"}}>28</td>
                <td className='border px-4 py-1' style={{color:"navy"}}>29</td>
                <td className='border px-4 py-1' style={{color:"navy"}}>30</td>
                <td className='border px-4 py-1' style={{color:"gray"}}>31</td></tr>
                <tr className='bg-gray-0'>
                <td className='border px-4 py-1' style={{color:"navy"}}>10:00</td>
                <td className='border px-4 py-1' style={{color:"navy",backgroundColor:"lightgray"}}>08:00</td>
                <td className='border px-4 py-1' style={{color:"navy"}} >12:00</td>
                <td className='border px-4 py-1' style={{color:"navy"}} >10:00</td>
                <td className='border px-4 py-1' style={{color:"navy"}}>--</td>
                <td className='border px-4 py-1' style={{backgroundColor:"#77a1b5",borderRadius:"10px",color:"white"}}>12:00</td>
                <td className='border px-3 py-1' style={{backgroundColor:"#77a1b5",borderRadius:"10px",color:"white"}}>09:00</td></tr>
                <tr className='bg-gray-0'>
                <td className='border px-4 py-1' style={{color:"navy"}}>11:00</td>
                <td className='border px-4 py-1' style={{backgroundColor:"darkblue",borderRadius:"10px",color:"white"}}>09:00</td>
                <td className='border px-4 py-1' style={{color:"navy"}}>--</td>
                <td className='border px-4 py-1' style={{backgroundColor:"#77a1b5",borderRadius:"10px",color:"white"}}>11:00</td>
                <td className='border px-4 py-1' style={{color:"navy"}}>14:00</td>
                <td className='border px-4 py-1' style={{color:"navy"}}>14:00</td>
                <td className='border px-4 py-1' style={{color:"gray"}}>10:00</td></tr>
                <tr className='bg-gray-0'>
                <td className='border px-4 py-1' style={{color:"navy"}}>12:00</td>
                <td className='border px-4 py-1' style={{color:"navy",backgroundColor:"lightgray"}}>10:00</td>
                <td className='border px-4 py-1' style={{color:"navy"}}>13:00</td>
                <td className='border px-4 py-1' style={{color:"navy"}}>--</td>
                <td className='border px-4 py-1' style={{color:"navy"}}>16:00</td>
                <td className='border px-4 py-1' style={{color:"navy"}}>15:00</td>
                <td className='border px-4 py-1' style={{color:"gray"}}>11:00</td></tr>
              </table>
             </div> <br />
             <section style={{display:"flex",justifyContent:"space-evenly"}}>
              <div style={{backgroundColor:"navy",color:"white",borderRadius:"10px",padding:"3px"}}><h6>Dentist <GiTooth title="Tooth Icon"/></h6>
              <p>09:-11:00 <br></br> Dr.Cameron Williamson</p>
              </div>
              <div style={{backgroundColor:"#77a1b5",borderRadius:"10px",padding:"3px",color:"navy"}}><h6>Physiotherapy Appointment <GiMuscleUp title="Hand Muscle Icon" style={{color:"lightbrown"}}/></h6>
              <p>11:00-12:00 <br /> Dr.Kevin Djones </p>
              </div>
             </section> 
             <h5 style={{color:"navy",alignContent:"flex-start"}}>The Upcomming Schedule</h5>
             <p style={{fontSize:'15px',color:"#2E5A88"}}>On Thursday</p>
             <section style={{display:"flex",justifyContent:"space-evenly"}}>
              <div style={{backgroundColor:"#77a1b5",borderRadius:"10px",padding:"3px",color:"navy"}}><p>Health checkup complete   <MdHealthAndSafety/> <br /> 11:00 AM</p></div>
             <div style={{backgroundColor:"#77a1b5",borderRadius:"10px",padding:"3px",color:"navy"}}><p>Ophthalmologist   <AiFillEye/> <br /> 14:00 PM</p></div></section>
            <p style={{fontSize:'15px',color:"#2E5A88"}}>On Saturday</p>
            <section style={{display:"flex",justifyContent:"space-evenly"}}>
              <div style={{backgroundColor:"#77a1b5",borderRadius:"10px",padding:"3px",color:"navy"}}><p>Cardiologist   <FaHeartbeat/> <br /> 12:00 AM</p></div>
             <div style={{backgroundColor:"#77a1b5",borderRadius:"10px",padding:"3px",color:"navy"}}><p>Neurologist   <FaUserMd/> <br /> 16:00 PM</p></div></section>
        </article>

      </section>
      
    </div>
  )
}

export default MainCalendarComponent
