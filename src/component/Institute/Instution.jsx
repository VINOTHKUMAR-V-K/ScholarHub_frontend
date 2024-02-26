import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import '../../style/user.css'
const Instution = () => {
  // const [reqstddel, setreqstddel] = useState('')
  const navigate = useNavigate();


  const chnageLoc = () => {
    navigate(`/RequestStatus`);
  };

  const changeOtherState = () => {
    navigate(`/OtherStateReq`);
  };

  const changeScholorReq = () => {
    navigate(`/scholorshipreq`);
  };

  const changeVerfiStatus = () => {
    navigate(`/verifystatus`);
  };



  const handleLogout = () => {
    navigate('/')
    localStorage.clear()
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <button style={{color:'red'}} className="btn btn-md btn-outline-light border border-2 fs-4 border-dark ms-2 me-4 logout-button" >
                    {localStorage.getItem('user')}
                  </button>
              <a className="navbar-brand fw-bold">Institution Panel</a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active fw-bold " aria-current="page">
                      Home
                    </a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                  <button className="btn btn-md btn-light border border-2 border-dark ms-3  logout-button" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    Logout
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="institudeHome bgm pt-4">
        <div className="container">
          <div className="container">
            <div className="row gap-2">
              <div
                className="bg-dark text-light col-md-3 col-sm-12 col-lg-3 col-xs-12 border border-2 border-info d-flex align-items-center justify-content-center fs-5 fw-bold"
                style={{ height: "25vh" }}
                onClick={chnageLoc}
              >
                Request Student Details
              </div>
              <div
                className="bg-dark text-light col-md-3 col-sm-12 col-lg-3 col-xs-12 border border-2 border-info d-flex align-items-center justify-content-center fs-5 fw-bold"
                style={{ height: "25vh" }}
                onClick={changeScholorReq}
              >
                Scholorship Requests
              </div>
              <div
                className="bg-dark text-light col-md-3 col-sm-12 col-lg-3 col-xs-12 border border-2 border-info d-flex align-items-center justify-content-center fs-5 fw-bold"
                style={{ height: "25vh" }}
                onClick={changeVerfiStatus}
              >
                Verification Status
              </div>
              <div
                className="bg-dark text-light col-md-3 col-sm-12 col-lg-3 col-xs-12 border border-2 border-info d-flex align-items-center justify-content-center fs-5 fw-bold"
                style={{ height: "25vh" }}
                onClick={changeOtherState}
              >
                Other State Student Request
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instution;
