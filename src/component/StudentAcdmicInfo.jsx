import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../axiosClient";

const StudentAcdmicInfo = () => {
        const [insname,setInsname]=useState("")
        const [insid,setInsid]=useState("")
        const [sturegno,setSturegno]=useState("")
        const [degree,setDegree]=useState("")
        const [course,setCourse]=useState("")
        const [sslc,setSslc]=useState("")
        const [hsc,setHsc]=useState("")
        const [ug,setUg]=useState("")
        const [acadamic,setAcadamic]=useState([])
       const navigate=useNavigate()
        const changeInsname=(e)=>{
          setInsname(e.target.value)
        }
        const changeInsid=(e)=>{
          setInsid(e.target.value)
        }
        const changeRegno=(e)=>{
          setSturegno(e.target.value)
        }
        const changeDegree=(e)=>{
          setDegree(e.target.value)
        }
        const changeCourse=(e)=>{
          setCourse(e.target.value)
        }
        const changeSSLC=(e)=>{
          setSslc(e.target.value)
        }
        const changeHsc=(e)=>{
          setHsc(e.target.value)
        }
        const changeUg=(e)=>{
          setUg(e.target.value)
        }
     const postAcadamic=()=>{
      const data={
        institutionname: insname,
        institutionmainId: insid,
        Student_register_number:sturegno,
        degree:degree,
        course:course,
        sslc_percentage:sslc,
        hsc_percentage:hsc,
        ug_cgpa:ug
      }
      axiosClient.post("/acdamicDetails",data)
      .then(res=>setAcadamic(res.data.result))
      .catch(err=>console.log(err||"server error"))
      console.log(acadamic);
      navigate('/documentsubmission')
     }

  return (
    <div className="mt-5 container">
      <div className="regform p-3 border border-2 border-dark">
        <div className="container regback">
          <form className="row g-3 regback-to">
            <h1 className="text-center fs-2 fw-bold">Acdamic Details</h1>
            <div className="col-md-6">
              <label
                htmlFor="inputFirstName"
                className="form-label fs-5 fw-bold"
              >
                Institution Name
              </label>
              <input
                type="text"
                className="form-control border-2 border-dark"
                value={insname}
                onChange={changeInsname}

              />
            </div>
            <div className="col-md-6">
              <label
                htmlFor="inputLastName"
                className="form-label fs-5 fw-bold"
              >
                Institution main ID
              </label>
              <input
                type="text"
                value={insid}
                onChange={changeInsid}

                className="form-control border-2 border-dark"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label fs-5 fw-bold">
                Student Register Number
              </label>
              <input
                type="tel"
                value={sturegno}
                onChange={changeRegno}

                className="form-control border-2 border-dark"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label fs-5 fw-bold ">
                Degree
              </label>
              <select
                id="Degree"
                value={degree}
                onChange={changeDegree}

                className="form-select border-2 border-dark"
              >
                <option selected>Choose...</option>
                <option>BE</option>
                <option>Bsc</option>
                <option>ME</option>
                <option>MSc</option>
                <option>BCom</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="Course" className="form-label fs-5 fw-bold ">
                Course
              </label>
              <select
                id="inputState"
                value={course}
                onChange={changeCourse}
                className="form-select border-2 border-dark"
              >
                <option selected>Choose...</option>
                <option>civil</option>
                <option>CSE</option>
                <option>ECE</option>
                <option>Mech</option>
                <option>AI/ML</option>
              </select>
            </div>
            <div className="col-8 col-xs-12 col-lg-8">
              <label htmlFor="10thPercentage" className="form-label fs-5 fw-bold">
                10th Percentage
              </label>
              <input
                type="text"
                value={sslc}
                onChange={changeSSLC}
                className="form-control border-2 border-dark"
              />
            </div>
            <div className="col-6 col-xs-12 col-lg-6">
              <label
                htmlFor="12thPercentage"
                className="form-label fs-5 fw-bold"
              >
              12th Percentage
              </label>
              <input
                type="text"
                value={hsc}
                onChange={changeHsc}
                className="form-control border-2 border-dark"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="UG CGPA" className="form-label fs-5 fw-bold">
                UG CGPA
              </label>
              <input
                type="text"
                value={ug}
                onChange={changeUg}
                className="form-control border-2 border-dark"
                id="inputCity"
              />
            </div>
        
            <div className="col-12 d-flex align-items-center justify-content-center">
              <button type="submit" className="btn btn-primary fs-5 fw-bold" onClick={postAcadamic}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentAcdmicInfo;