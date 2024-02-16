import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const StudentList = () => {
  const time = new Date();
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getAllStudent`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.error(err));
  }, []);

  const deleteBtn = (index) => {
    // Remove the card data at the specified index
    const updatedStudent = [...student];
    updatedStudent.splice(index, 1);
    setStudent(updatedStudent);

    // Remove session storage "deleterow" data
    localStorage.removeItem("deletedRow");

    // Add session storage "status" => "rejected"
    localStorage.setItem("status", "Deleted");
  };

  return (
    <div className='p-5'>
      <h1 className='fw-bold'>All Students List</h1>
      <hr />
      {student.map((stu, index) => (
        <div className='card-group' key={index}>
          <div className='card' id='row'>
            <h5 className='card-title'>{`${stu.firstname} ${stu.lastname}`}</h5>
            <p className='card-text'>{stu.email}</p>
            <p className='card-text'>{stu.dob}</p>
            <p className='card-text'>{stu.address}</p>
            <p className='card-text'>{stu.state}</p>
            <button
              className='btn btn-danger btn-xs'
              onClick={() => deleteBtn(index)} // Pass the index to deleteBtn function
            >
              Rejected
            </button>
          </div>
          <div className='card-footer'>
            <small className='text-muted'>{`Last updated ${time} ago`}</small>
          </div>
        </div>
      ))}
    </div>
  );
};
