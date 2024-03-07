import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import axiosClient from "../../axiosClient";

const ScholorshipReq = () => {
  const navigate = useNavigate();
  const [scholor, setScholor] = useState([]);

  useEffect(() => {
    axiosClient.get("/getAllAcadamic")
      .then((res) => setScholor(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleBack = () => {
    navigate(`/institution`);
  }

  const approvedReq = (demoNumber) => {
    // Store rowData in localStorage
    localStorage.setItem("approvedRow", JSON.stringify(demoNumber));

    // Remove the row from the UI
    setScholor(prevScholor => prevScholor.filter(item => item !== demoNumber));
  }

  const deleteReq = (demoNumber) => {
    // Store rowData in localStorage
    localStorage.setItem("deletedRow", JSON.stringify(demoNumber));

    // Remove the row from the UI
    setScholor(prevScholor => prevScholor.filter(item => item !== demoNumber));
  }

  return (
    <div className="container-fluid mt-4">
      <button className="btn btn-md btn-info" onClick={handleBack}> <FontAwesomeIcon icon={faArrowLeft} /> Back</button>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="text-dark fs-4 fw-bold">Scholorship Requests</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {scholor.map((demoNumber) => (
              <tr key={demoNumber}>
                <td>
                  <h3>{demoNumber.Student_register_number}</h3>
                </td>
                <td>
                  <div className="btn-group gap-1">
                    
                    <button className="btn btn-md btn-success" onClick={() => approvedReq(demoNumber)}><FontAwesomeIcon icon={faEdit} /> Approved</button>
                    <button className="btn btn-md btn-danger" onClick={() => deleteReq(demoNumber)}><FontAwesomeIcon icon={faTrash} /> Delete</button>
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

export default ScholorshipReq;
