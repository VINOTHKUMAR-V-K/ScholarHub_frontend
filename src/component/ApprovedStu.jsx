import React, {useEffect, useState} from 'react'

const ApprovedStu = () => {
	const time = new Date()
	const [store, setStore] = useState([])
	useEffect(() => {
		var e = localStorage.getItem("approvedRow")
		setStore(JSON.parse(e))
		console.log(store);
	}, [])
   
	return (
		<div>
			<div className='p-5'>
				<h1 className='fw-bold'>Approved Students List</h1>
				<hr/>
				{store && store.length>0?store.map(e=>{
          return (
            <div class="card-group">
					<div class="card">
						<h5 class="card-title">{`${e.firstname} ${e.lastname}`}</h5>
						<p class="card-text">{e.email}</p>
						<p class="card-text">{e.dob}</p>
						<p class="card-text">{e.address}</p>
						<p class="card-text">{e.state}</p>
					</div>
					<div class="card-footer">
						<small class="text-muted">
							{
							`Last updated ${time} ago`
						}</small>
					</div>
				</div>
          )
        }):  <h1 style={{color:'red',margin:'auto' ,fontWeight:'bolder'}}>No Result found</h1>}
			</div>
		</div>
	)
}

export default ApprovedStu
