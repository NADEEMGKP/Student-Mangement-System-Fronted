
// 30-Jan-2024-8:00 PM-10:00 PM
// INSTALL ==> ES7 React/Redux/GraphQL/React-Native snippet,  THEN ==> rfce

import React from 'react'
import "./AddStudentForm.css" // CSS FILE CONNECT
import Axios from "axios";

export const AddStudentFrom = () => {

  const [maesage, setMessage] = React.useState("")
  const [formData, setFormData] = React.useState({
    rollNo: "",
    name: "",
    age: "",
    city: ""
  });
    function collectData(event)
    {
        // console.log(event.target.value)
        // const {name, value} =  event.target
        // console.log(name, value)
        setFormData({ ...formData,  [event.target.name] : event.target.value })
    }

    async function displayData(event) {
      event.preventDefault();
      // console.log(formData);
     
      const result = await Axios.post("https://student-mangement-system-backend.onrender.com/collect", formData)
      // console.log(result.data)
      setMessage(result.data)
      
      
    }
  
  return (
    <div>
        <div className="container">
        <h2>Student Information</h2>
        <form onSubmit={displayData}>
            <label for="rollNo">Roll Number:</label>
            <input type="text" id="rollNo" name="rollNo"  onChange={collectData}/>

            <label for="age">Age:</label>
            <input type="number" id="age" name="age"  onChange={collectData}/>

            <label for="name">Name:</label>
            <input type="text" id="name" name="name"  onChange={collectData}/>

            <label for="city">City:</label>
            <input type="text" id="city" name="city"  onChange={collectData}/>

            <input type="submit" value="Submit"/>
            {maesage}
        </form>
    </div>
    </div>
  )
}
