import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import {img} from '../components/images/anatomy_human.jpg'
import { FaLungs, FaTooth, FaBone } from 'react-icons/fa';
import StatusCard from './StatusCardsComponent';
import { FaArrowRight } from 'react-icons/fa';
import ActivityChart from './ActivityChartComponent';
import {FaHeart} from 'react-icons/fa'
import { GiLeg } from 'react-icons/gi';


function MainDashboardComponent() {
  return (
    <div>
      <section id='sec1'>
        <article id='art1'>
          <div style={{display:"flex",justifyContent:"space-between",gap:"100px",alignContent:"baseline"}}>  
            <h1 style={{fontFamily:"sans-serif",font:"20px",color:"navy"}}>Dashboard</h1> 
            <p style={{fontSize:'10px',color:"#2E5A88",paddingTop:"17px"}}>This Week <FiChevronDown className="text-xl" /> </p> </div> 
          <section style={{display:"flex",justifyContent:"space-evenly" }}>
           <div>
            {/* <img src={img} alt="description" style={{width:"200px"}}/> */}
              {/* <div className="label heart-label"><FaHeart style={{ color: 'red', marginRight: '6px' }} /> Healthy Heart</div> */}
            <img style={{width:"minWidth",height:"minHeight"}} src="https://t4.ftcdn.net/jpg/06/02/89/31/360_F_602893124_6KrGjeMYJJrbJVQWJRFRgKqodqMcDtdA.jpg" alt=""   />
            
           {/* <div className="label leg-label" style={{border:"2px solid skyblue",borderRadius:"5px",backgroundColor:"skyblue",position:"absolute",top:"400px",left:"150px"}}><GiLeg style={{ color: 'goldenrod' }} /> Healthy Leg </div> */}
           </div>
           <div>
             <StatusCard></StatusCard>
             <p style={{fontSize:'10px',color:"#2E5A88"}}>Details <FaArrowRight /></p>
           </div>
           </section>
           
            <div style={{display:"flex",justifyContent:"space-between",gap:"100px",alignContent:"baseline"}}>  
            <h5 style={{fontFamily:"sans-serif",font:"20px",color:"navy"}}>Activity</h5> 
            <p style={{fontSize:'10px',color:"grey",paddingTop:"17px"}}>3 appointments on this week</p>
             </div> 
          
           <div>
            
            <ActivityChart></ActivityChart>
           </div>
        </article>
      </section>
    </div>
  )
}

export default MainDashboardComponent
