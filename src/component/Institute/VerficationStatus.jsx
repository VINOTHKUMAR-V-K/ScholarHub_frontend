import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
//import axios from "axios";
const VerficationStatus = () => {
  const time = new Date()
const [store, setStore] = useState([])
  const navigate = useNavigate()

  const handleBack =()=>{
    navigate(`/institution`)
  }
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
				{store.map(e=>{
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
        })}
			</div>
		</div>
  );
};

export default VerficationStatus;
