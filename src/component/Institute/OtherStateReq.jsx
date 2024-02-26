import React,{useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OtherStateReq = () => {
  const navigate = useNavigate()
  const [states, setStates] = useState([])
  

  const handleBack =()=>{
    navigate(`/institution`)
  }
  const indianStates = [
		"Andaman and Nicobar Islands",
		"Andhra Pradesh",
		"Arunachal Pradesh",
		"Assam",
		"Bihar",
		"Chandigarh",
		"Chhattisgarh",
		"Dadra and Nagar Haveli",
		"Daman and Diu",
		"Delhi",
		"Goa",
		"Gujarat",
		"Haryana",
		"Himachal Pradesh",
		"Jammu and Kashmir",
		"Jharkhand",
		"Karnataka",
		"Kerala",
		"Lakshadweep",
		"Madhya Pradesh",
		"Maharashtra",
		"Manipur",
		"Meghalaya",
		"Mizoram",
		"Nagaland",
		"Odisha",
		"Puducherry",
		"Punjab",
		"Rajasthan",
		"Sikkim",
		"Tamil Nadu",
		"Telangana",
		"Tripura",
		"Uttar Pradesh",
		"Uttarakhand",
		"West Bengal"
	]
 
  const handleChange=(e)=>{
     let search=e.target.value
     console.log(search);
    axios.get(`http://localhost:5000/getStates/${search}`)
          .then(res =>setStates(res.data))
          .catch(err  => console.log(err))
          console.log(states);
  }
  const approvedReq = () => {
    const row = document.getElementById(`row`);
    // const rowData = req.filter(item => item._id === id);
    // setStudata(rowData);

    // Store rowData in localStorage
    // localStorage.setItem("approvedRow", JSON.stringify(rowData));
    // localStorage.setItem("status", "Approved");

    // Hide the row
    if (row) {
      row.style.display = 'none';
    }
  }
  return (
    <div className="container-fluid mt-4">
      <button className="btn btn-md btn-info" onClick={handleBack}> <FontAwesomeIcon icon={faArrowLeft} /> Back</button>
      <br />
      <div className="m-0" style={{margin:'auto'}}>
								<label htmlFor="inputState" className="form-label fs-5 fw-bold ">
									State
								</label>
								<select id="inputState" className="form-select border-2 border-dark"
									value={states}
									onChange={handleChange}>
									<option selected>Choose...</option>
									{
									indianStates.map(e => {
										return <option >
											{e}</option>
								})
								} </select>
							</div>
      <br />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="text-dark fs-4 fw-bold">Requests</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {states.map((demoNumber) => (
              <tr key={demoNumber._id} id={`row-${demoNumber._id}`}>
                <td>
                  <h2>{demoNumber.firstname}</h2>
                  <h3> {demoNumber.state}</h3>

                </td>
                <td>
                  <div className="btn-group  gap-1">        
                    <button className="btn btn-md btn-success"><FontAwesomeIcon icon={faEdit} onClick={()=>approvedReq()} /> Approved</button>
                    
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OtherStateReq;
