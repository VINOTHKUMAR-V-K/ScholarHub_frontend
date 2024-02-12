import React from "react";
import { useNavigate } from "react-router-dom";

const StudentDocument = () => {
  let navigate=useNavigate();
  const changeJsx=()=>{
    navigate('/bank')
  }
  return (
    <div className="mt-5 container">
      <div className="container border border-2 border-dark">
        <div className="row">
          <h1 className="text-center fw-bold "> Document Submission </h1>
          <div className="mb-3 col-6">
            <label htmlFor="formFile" className="form-label fw-bold">
              Student ID Proof
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="formFileMultiple" className="form-label fw-bold">
              Aadhar Card
            </label>
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              multiple
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="formFileDisabled" className="form-label fw-bold">
              PAN Card
            </label>
            <input className="form-control" type="file" id="formFileDisabled" />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="formFileSm" className="form-label fw-bold">
              Community Certificate
            </label>
            <input
              className="form-control form-control-sm"
              id="formFileSm"
              type="file"
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="formFileLg" className="form-label fw-bold">
              10th Marksheet
            </label>
            <input
              className="form-control form-control-lg"
              id="formFileLg"
              type="file"
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="formFileLg" className="form-label fw-bold">
              12th Marksheet
            </label>
            <input
              className="form-control form-control-lg"
              id="formFileLg"
              type="file"
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="formFileLg" className="form-label fw-bold">
              UG Marksheet
            </label>
            <input
              className="form-control form-control-lg"
              id="formFileLg"
              type="file"
            />
          </div>
          <div className="col-12 d-flex align-items-center justify-content-center">
            <button type="submit" className="btn btn-primary fs-5 fw-bold" onClick={()=>changeJsx()}>
            Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDocument;