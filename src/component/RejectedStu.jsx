import React, { useState, useEffect } from 'react'

export const RejectedStu = () => {
	const time = new Date()
  const [del, setDel] = useState([])

  useEffect(()=>{
    var d = localStorage.getItem("deletedRow")
    setDel(JSON.parse(d))
    console.log(del)
  }, [])
	return (
		<div>
			<div>
				<div className='p-5'>
					<h1 className='fw-bold'>Rejected Students List</h1>
					<hr/>
          {del.map(d =>{
            return (
              <div class="card-group">
              <div class="card">
                <h5 class="card-title">{d.firstname}</h5>
                <p class="card-text">{d.email}</p>
                <p class="card-text">{d.dob}</p>
                <p class="card-text">{d.address}</p>
                <p class="card-text">{d.state}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">
                  {
                  `Last updated ${time} ago`
                }</small>
              </div>
            </div>
            )
          })}
				</div>
			</div>
		</div>
	)
}
