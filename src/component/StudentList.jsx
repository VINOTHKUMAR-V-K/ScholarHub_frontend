import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const StudentList = () => {
    const time= new Date()
    const [student,setStudent]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/getAllStudent`)
        .then((res)=>setStudent(res.data))
        .catch((err)=>err)
    })
		return (
        <div className='p-5'> 
           <h1 className='fw-bold'>All Students List</h1>
           <hr />
			{student.map(stu=>{
                return <div class="card-group">
				<div class="card">
					<h5 class="card-title">{`${stu.firstname} ${stu.lastname}`}</h5>
					<p class="card-text">{stu.email}</p>
                    <p class="card-text">{stu.dob}</p>
                    <p class="card-text">{stu.address}</p>
                    <p class="card-text">{stu.state}</p>
				</div>
				<div class="card-footer">
					<small class="text-muted">{`Last updated ${time} ago`}</small>
				</div>
			</div>
            })}
		</div>

	)
}
