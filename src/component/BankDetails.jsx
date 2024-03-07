import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosClient from '../axiosClient'

const BankDetails = () => {
  const [bankname, setBankName] = useState('')
  const [accountNum, setAccountNum] = useState('')
  const [accholname, setAccHolName] = useState('')
  const [ifsc, setIfsc] = useState('')
  const [micr, setMicr] = useState('')
  const [branchname, setBranchName] = useState('')
  const [bank,setBank]=useState([])
  const navigate=useNavigate()
  const Changebankname=(e)=>{
    setBankName(e.target.value)
  }
  const changeAccNum=(e)=>{
    setAccountNum(e.target.value)
  }
  const ChangeAccHol=(e)=>{
    setAccHolName(e.target.value)
  }
  const Changeifsc=(e)=>{
    setIfsc(e.target.value)
  }
  const ChangeMicr=(e)=>{
    setMicr(e.target.value)
  }
  const ChangebranchName=(e)=>{
    setBranchName(e.target.value)
  }
 const bankDetail=()=>{
  const data={
    bankname:bankname,
    accountno:accountNum,
    accountantname:accholname,
    IFSC:ifsc,
    MICR:micr,
    branchname:branchname
  }
  axiosClient.post("/bankdetails",data)
  .then(res=>setBank(res.data))
  .catch((err)=>console.log(err||"server error"))
 console.log(bank);
 localStorage.setItem("status","Request sended")
 alert("You Request has been sended...")
 navigate("/home")

}
  

  return (
    <div>
            <div className="mt-5 container">
      <div className="regform p-3 border border-2 border-dark">
        <div className="container regback">
          <form className="row g-3 regback-to">
            <h1 className="text-center fs-2 fw-bold">Bank Details</h1>
            <div className="col-md-6">
              <label
                htmlFor="inputFirstName"
                className="form-label fs-5 fw-bold"
              >
                Bank Name
              </label>
              <input
                type="text"
                className="form-control border-2 border-dark"
                value={bankname}
                onChange={Changebankname}
              />
            </div>
            <div className="col-md-6">
              <label
                htmlFor="inputLastName"
                className="form-label fs-5 fw-bold"
              >
               Account Number
              </label>
              <input
                type="text"
                className="form-control border-2 border-dark"
                value={accountNum}
                onChange={changeAccNum}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label fs-5 fw-bold">
               Account Holder Name
              </label>
              <input
                type="tel"
                className="form-control border-2 border-dark"
                value={accholname}
                onChange={ChangeAccHol}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label fs-5 fw-bold ">
                IFSC Code
              </label>
              <input
                type="text"
                className="form-control border-2 border-dark"
                value={ifsc}
                onChange={Changeifsc}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label fs-5 fw-bold ">
                MICR Code
              </label>
              <input
                type="text"
                className="form-control border-2 border-dark"
                value={micr}
                onChange={ChangeMicr}
              />
            </div>
            <div className="col-8 col-xs-12 col-lg-8">
              <label htmlFor="10thPercentage" className="form-label fs-5 fw-bold">
                Branch Name
              </label>
              <input
                type="text"
                className="form-control border-2 border-dark"
                value={branchname}
                onChange={ChangebranchName}
              />
            </div>
        

            <div className="col-12 d-flex align-items-center justify-content-center">
              <button type="submit" className="btn btn-primary fs-5 fw-bold" onClick={bankDetail}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BankDetails