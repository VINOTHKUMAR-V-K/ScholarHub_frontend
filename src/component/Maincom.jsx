import React, { useState } from 'react'
import Navigation from './Navigation'
import { useNavigate } from 'react-router-dom'
import '../style/user.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
const Maincom = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/')
    localStorage.removeItem("status")
  };
  return (
    <div className='bgm pt-2'>
                 <div className='d-flex align-items-end justify-content-end'>
                 <button className="btn btn-md btn-light border border-2 border-dark ms-3  logout-button" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    Logout
                  </button>
                 </div>

       <h1 className='fw-bold head'>Welcome to our Team</h1>
       <Navigation/>
       <blockquote className='fs-4 fw-bold py-5 ' style={{color:"white",fontFamily:"sans-serif"}}>Scholarships empower students to pursue their dreams without financial barriers. They represent opportunities, not just for education, but for growth, innovation, and change. Scholarships are more than just financial aid; they're investments in the future, fostering talent and unlocking the potential of bright minds to shape a better tomorrow.</blockquote>
    </div>
  )
}

export default Maincom
