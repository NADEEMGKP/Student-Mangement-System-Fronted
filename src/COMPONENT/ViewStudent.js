import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

function ViewStudent() {
  const [viewStudent, setViewStudent] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Axios.get(`https://student-mangement-system-backend.onrender.com/read/data/${id}`)
      .then((response) => {
        setViewStudent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, [id]);

  return (
    <div>
      <table className="table table-success table-hover table-striped-columns text-center">
        <thead>
          <tr>
            <th>ROLL NO</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>CITY</th>
          </tr>
        </thead>
        <tbody>
          {viewStudent.map((student) => (
            <tr key={student.rollNo}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.city}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewStudent;