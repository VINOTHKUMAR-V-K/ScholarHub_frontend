import React, { useState } from "react";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";
import "../style/user.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import slide1 from "../Assets/Website-banner-buddy4study-enrol-abroad-international-admission-support-initiative_iU39Ik.webp";
import slide2 from "../Assets/Website-banner-career-assessment-test_18WGnK.webp";
import slide3 from "../Assets/Website-banner-disha-scholarship-program_z4IQxx.webp";
const Maincom = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("status");
    localStorage.clear();
  };
  return (
    <div className="bgm pt-2">
      <div className="d-flex align-items-end justify-content-between">
        <button className="btn btn-md btn-outline-light border border-2 fs-4 border-dark ms-2 me-4 logout-button">
          {localStorage.getItem("user")}
        </button>

        <button
          className="btn btn-md btn-outline-light border border-2 fs-4 border-dark ms-2 me-4 logout-button"
          onClick={handleLogout}
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
          Logout
        </button>
      </div>
      <br />

      <h1 className="fw-bold head">Welcome to our Team</h1>
      <Navigation />
      <br />
      <q
        className="fs-3 fw-bold py-5 type"
        style={{
          color: "white",
          fontFamily: "sans-serif",
          width: "70%",
          margin: "auto",
        }}
      >
        Scholarships empower students to pursue their dreams without financial
        barriers. They represent opportunities, not just for education, but for
        growth, innovation, and change. Scholarships are more than just
        financial aid; they're investments in the future, fostering talent and
        unlocking the potential of bright minds to shape a better tomorrow.
      </q>

      <div>
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <br /> <br />
          <div
            class="carousel-inner"
            style={{ width: "80%", margin: "auto", height: "50vh" }}
          >
            <div class="carousel-item active">
              <img src={slide1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={slide2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={slide3} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Maincom;
