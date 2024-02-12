import React from 'react'
import '../style/user.css';
import { useNavigate } from 'react-router-dom';

const AdminDemo = () => {
    const navigate=useNavigate();
    const allStu=()=>{
       navigate(`/stulist`)
    }
    const approvedStu=()=>{
        navigate(`/approved`)
     }
     const RejectedStu=()=>{
        navigate(`/reject`)
     }
     
	return (
		<div>
			<div className='bgm'>
              <div className='d-flex justify-content-evenly bg-dark '>
                 <button className='rounded-3 cmc border-0' onClick={()=>allStu()}>All Students</button>
                 <button className='rounded-3 cmc' onClick={()=>approvedStu()}>Approved Students</button>
                 <button className='rounded-3 cmc' onClick={()=>RejectedStu()}>Rejected Students</button>
              </div>
				<h1 className='fw-bold head'>Welcome to our Team</h1>

				<blockquote className='fs-4 fw-bold text-danger py-5 '>Scholarships empower students to pursue their dreams without financial barriers. They represent opportunities, not just for education, but for growth, innovation, and change. Scholarships are more than just financial aid; they're investments in the future, fostering talent and unlocking the potential of bright minds to shape a better tomorrow.</blockquote>
			</div>
		</div>
	)
}

export default AdminDemo
