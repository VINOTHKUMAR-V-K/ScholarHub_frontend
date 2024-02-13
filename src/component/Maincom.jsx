import React from 'react'
import Navigation from './Navigation'
import '../style/user.css'
const Maincom = () => {
  return (
    <div className='bgm pt-2'>
       <h1 className='fw-bold head'>Welcome to our Team</h1>
       <Navigation/>
       <blockquote className='fs-4 fw-bold py-5 ' style={{color:"white",fontFamily:"sans-serif"}}>Scholarships empower students to pursue their dreams without financial barriers. They represent opportunities, not just for education, but for growth, innovation, and change. Scholarships are more than just financial aid; they're investments in the future, fostering talent and unlocking the potential of bright minds to shape a better tomorrow.</blockquote>
    </div>
  )
}

export default Maincom