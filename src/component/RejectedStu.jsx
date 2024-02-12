import React from 'react'

export const RejectedStu = () => {
    const time= new Date()
  return (
    <div>
         <div>
         <div className='p-5'> 
           <h1 className='fw-bold'>Rejected Students List</h1>
           <hr />
                <div class="card-group">
				<div class="card">
					<h5 class="card-title">Vinothkumar</h5>
					<p class="card-text">email</p>
                    <p class="card-text">DOB</p>
                    <p class="card-text">Address</p>
                    <p class="card-text">State</p>
				</div>
				<div class="card-footer">
					<small class="text-muted">{`Last updated ${time} ago`}</small>
				</div>
			</div>
		</div>
    </div>
    </div>
  )
}
