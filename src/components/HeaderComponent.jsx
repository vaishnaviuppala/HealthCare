import React from 'react'
import Header from './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaBell } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { FaPlusSquare } from 'react-icons/fa'


function HeaderComponent() {
  return (
    <div>
      <section id='s1'>
        <article id='ar1'>
             <h2 className="text-info bold">Health<span className="text-dark">care.</span></h2>
              <p style={{border:'2px solid grey',width:"40%",marginRight:"30%",display:"flex"}}><FaSearch style={{fontSize:"32px",color:"grey"}} /><input  placeholder=' Search' style={{border:'none',width:'90%'}}/><FaBell style={{color:"navy",fontSize:"32px"}}/> </p>
              <article id='child_ar1'>
               <p><img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt="Man Avatar" width={50} height={50} /></p>
              <p> <FaPlusSquare style={{ color: 'navy',fontSize:'40px',backgroundColor:'white',marginRight:"8px",marginLeft:"8px"}}/> </p>
              </article>
        </article>
      </section>
    </div>
  )
}

export default HeaderComponent
