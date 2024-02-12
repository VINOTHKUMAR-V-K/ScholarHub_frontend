import React, {useState} from 'react'
import '../style/user.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserDemo() {
	const [name, setName] = useState("")
	const [mail, setMail] = useState("");
	const [roll, setRoll] = useState("")
	const [pass, setPass] = useState("")
	const [logUser, setLogUser] = useState([]);
	const [postUser, setPostUser] = useState([]);
    const navigate=useNavigate();
	const targetName = (e) => {
		setName(e.target.value)
	}
	const targetMail = (e) => {
		setMail(e.target.value)
	}
	const targetPass = (e) => {
		setPass(e.target.value)
	}
	const targetRoll = (e) => {
		setRoll(e.target.value)
	}
	const loginApi = (e) => {
		e.preventDefault();
		const data = {
			email: mail,
			password: pass
		}
		axios.post("http://localhost:5000/loginUser", data).then((res) => {
			setLogUser(res.data.user)
			console.log(logUser.roll);
			if (logUser.roll == "Admin") {
                alert("login success")
                 navigate('/adminportal')
            }else if(logUser.roll == "Student"){
                alert("login success")
                navigate('/home')
            }else if(logUser.roll == "Super Admin"){
                alert("login success")
                navigate('/home')
            }
				
			
		}).catch((err) => err || "login failed")
		console.log(logUser)
	}
	const signinApi = () => {
		const data = {
			username: name,
			email: mail,
			roll: roll,
			password: pass
		}
		axios.post("http://localhost:5000/postUser", data).then((res) => setPostUser(res.data.users), alert("register success")).catch((err) => err || "register failed")
		console.log(postUser);
	}
	return (
		<div>
			<div className="container1">
				<div className="wrap">
					<input type="checkbox" id="form_switch"
						style={
							{display: "none"}
						}/>
					<div className="flipcard">
						<div className="flipcard-inner">
							<div className="flipcard-front">
								<form className="login-form" action="">
									<div className="form-header">
										<h3 className="log">Login Form</h3>
									</div>

									<div className="form-group">
										<input type='email' className="form-input"
											value={mail}
											onChange={targetMail}
											placeholder="email@example.com"/>
									</div>

									<div className="form-group">
										<input type="password" className="form-input"
											value={pass}
											onChange={targetPass}
											placeholder="password"/>
									</div>

									<div className="form-group">
										<button className="form-button" type="submit"
											onClick={loginApi}>Login</button>
									</div>
									<div className="form-footer">
										Don't have an account?
										<label className="label-highlight" for="form_switch">
											Sign Up
										</label>
									</div>
								</form>
							</div>
							<div className="flipcard-back">
								<form className="login-form" action="">
									<div className="form-header">
										<h3>Signup Form</h3>
										<p>Register for a new account</p>
									</div>
									<div className="form-group">
										<input type="text" className="form-input" name="username"
											onChange={targetName}
											value={name}
											placeholder="Enter a username"/>
									</div>

									<select 
										value={roll} 
										onChange={targetRoll}

										className="form-select border-2 border-dark form-input">
                                            <option value="select position">selecet position</option>
										<option value={'Student'}>Student</option>
										<option value={'Admin'}>Admin</option>
                                        <option value={"Super Admin"}>Super Admin</option>
									</select>
									{/*   */}
									<div className="form-group">
										<input type="email" className="form-input"
											onChange={targetMail}
											value={mail}
											name="email"
											placeholder="email@example.com"/>
									</div>

									<div className="form-group">
										<input type="password" className="form-input" name="password"
											onChange={targetPass}
											value={pass}
											placeholder="Password"/>
									</div>

									<div className="form-group">
										<button className="form-button form-button-register"
											onClick={signinApi}
											type="submit">Signup</button>
									</div>
									<div className="form-footer">
										Already have an account?
										<label className="label-highlight" for="form_switch">
											Login</label>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default UserDemo
