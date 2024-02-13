import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ReqStdDetails = () => {
  const navigate = useNavigate()
  const [req, setReq] = useState([]);
  const [studata, setStudata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/getAllStudent")
      .then((res) => setReq(res.data))
      .catch((err) => console.error(err));
  }, [])

  const handleBack = () => {
    navigate(`/institution`)
  }

  const approvedReq = (id) => {
    const row = document.getElementById(`row-${id}`);
    const rowData = req.filter(item => item._id === id);
    setStudata(rowData);

    // Store rowData in localStorage
    localStorage.setItem("approvedRow", JSON.stringify(rowData));
    localStorage.setItem("status", "Approved");

    // Hide the row
    if (row) {
      row.style.display = 'none';
    }
  }

  const deleteReq = (id) => {
    const row = document.getElementById(`row-${id}`);
    const rowData = req.filter(item => item._id === id);
    setStudata(rowData);

    // Store rowData in localStorage
    localStorage.setItem("deletedRow", JSON.stringify(rowData));
    localStorage.setItem("status", "Deleted");

    // Remove the row from the UI
    setReq(prevReq => prevReq.filter(item => item._id !== id));
  }

  return (
    <div className="container-fluid mt-4">
      <button className="btn btn-md btn-info" onClick={handleBack}> <FontAwesomeIcon icon={faArrowLeft} /> Back</button>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="text-dark fs-4 fw-bold">Requests</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {req.map((demoNumber) => (
              <tr key={demoNumber._id} id={`row-${demoNumber._id}`}>
                <td>
                  <h3>{demoNumber.firstname}</h3>
                </td>
                <td>
                  <div className="btn-group gap-1">
                    <button className="btn btn-md btn-success" onClick={() => approvedReq(demoNumber._id)}><FontAwesomeIcon icon={faEdit} /> Approved</button>
                    <button className="btn btn-md btn-danger" onClick={() => deleteReq(demoNumber._id)}><FontAwesomeIcon icon={faTrash} /> Delete</button>
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

export default ReqStdDetails;
