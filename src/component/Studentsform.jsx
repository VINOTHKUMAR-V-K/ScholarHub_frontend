import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Studentsform = () => {
	const [fname, setFname] = useState('')
	const [lname, setLname] = useState('')
	const [email, setEmail] = useState('')
	const [dob, setDob] = useState('')
	const [address, setAddress] = useState('')
	const [add, setAdd] = useState('')
	const [city, setCity] = useState('')
	const [states, setStates] = useState('')
	const [zip, setZip] = useState('')
	const [basic, setBasic] = useState([])
  let navigate=useNavigate()
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
	];

	const changeFname = (e) => {
		setFname(e.target.value)
	}
	const changeLname = (e) => {
		setLname(e.target.value)
	}
	const changeMail = (e) => {
		setEmail(e.target.value)
	}
	const changeDob = (e) => {
		setDob(e.target.value)
	}
	const changeAdd = (e) => {
		setAddress(e.target.value)
	}
	const changeAdd2 = (e) => {
		setAdd(e.target.value)
	}
	const changeCity = (e) => {
		setCity(e.target.value)
	}
	const changeState = (e) => {
		setStates(e.target.value)
	}
	const changeZip = (e) => {
		setZip(e.target.value)
	}

	const postBasic = () => {
		const data = {
			firstname: fname,
			lastname: lname,
			email: email,
			dob: dob,
			address: address,
			address2: add,
			city: city,
			state: states,
			zip: zip
		}
		axios.post("http://localhost:5000/basicdemo", data).then(res => setBasic(res.data)).catch(err => console.log("details error"))

		console.log(basic);
    navigate('/studentAcdemic')
	}
	return (
		<div className="container-fluid mt-5">
			<div className="container">
				<div className="regform p-3 border border-2 border-dark">
					<div className="container regback">
						<form className="row g-3 regback-to">
							<h1 className="text-center fs-2 fw-bold">Basic Details</h1>
							<div className="col-md-6">
								<label htmlFor="inputFirstName" className="form-label fs-5 fw-bold">
									First Name
								</label>
								<input type="text" className="form-control border-2 border-dark" id="inputFirstName"
									value={fname}
									onChange={changeFname}/>
							</div>
							<div className="col-md-6">
								<label htmlFor="inputLastName" className="form-label fs-5 fw-bold">
									Last Name
								</label>
								<input type="text" className="form-control border-2 border-dark" id="inputLastName"
									value={lname}
									onChange={changeLname}/>
							</div>
							<div className="col-md-6">
								<label htmlFor="inputEmail4" className="form-label fs-5 fw-bold">
									Email
								</label>
								<input type="email" className="form-control border-2 border-dark" id="inputEmail4"
									value={email}
									onChange={changeMail}/>
							</div>
							<div className="col-md-6">
								<label htmlFor="inputDateOfBirth" className="form-label fs-5 fw-bold">
									Date of Birth
								</label>
								<input type="date" className="form-control border-2 border-dark" id="inputDateOfBirth"
									value={dob}
									onChange={changeDob}/>
							</div>

							<div className="col-12">
								<label htmlFor="inputAddress" className="form-label fs-5 fw-bold">
									Address
								</label>
								<input type="text" className="form-control border-2 border-dark" id="inputAddress" placeholder="1234 Main St"
									value={address}
									onChange={changeAdd}/>
							</div>
							<div className="col-12">
								<label htmlFor="inputAddress2" className="form-label fs-5 fw-bold">
									Address 2
								</label>
								<input type="text" className="form-control border-2 border-dark" id="inputAddress2"
									value={add}
									placeholder="Apartment, studio, or floor"
									onChange={changeAdd2}/>
							</div>
							<div className="col-md-6">
								<label htmlFor="inputCity" className="form-label fs-5 fw-bold">
									City
								</label>
								<input type="text" className="form-control border-2 border-dark" id="inputCity"
									value={city}
									onChange={changeCity}/>
							</div>
							<div className="col-md-4">
								<label htmlFor="inputState" className="form-label fs-5 fw-bold ">
									State
								</label>
								<select id="inputState" className="form-select border-2 border-dark"
									value={states}
									onChange={changeState}>
									<option selected>Choose...</option>
									{
									indianStates.map(e => {
										return <option value={e}>
											{e}</option>
								})
								} </select>
							</div>
							<div className="col-md-2">
								<label htmlFor="inputZip" className="form-label fs-5 fw-bold">
									Zip
								</label>
								<input type="text" className="form-control border-2 border-dark" id="inputZip"
									value={zip}
									onChange={changeZip}/>
							</div>

							<div className="col-12 d-flex align-items-center justify-content-center">
								<button type="submit" className="btn btn-primary fs-5 fw-bold"
									onClick={postBasic}>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Studentsform;
