import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'

function EditStudent() {
    const [myRollNo, setMyRollNumber] = useState("");
    const [myName, setMyName] = useState("");
    const [myCity, setMyCity] = useState("");
    const [myAge, setMyAge] = useState("");

    const { id } = useParams()

    useEffect(function () {
        Axios.get(`https://student-mangement-system-backend.onrender.com/read/data/${id}`)
            .then(function (response) {
                const data = response.data[0]; // Assuming there's only one item
                if (data) {
                    setMyRollNumber(data.rollNo);
                    setMyAge(data.age);
                    setMyCity(data.city);
                    setMyName(data.name);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            
    }, [id]);

    function collectData(event) {
        const { name, value } = event.target;
        switch (name) {
            case "rollNo":
                setMyRollNumber(value);
                break;
            case "name":
                setMyName(value);
                break;
            case "age":
                setMyAge(value);
                break;
            case "city":
                setMyCity(value);
                break;
            default:
                break;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const updatedData = {
            rollNo: myRollNo,
            name: myName,
            age: myAge,
            city: myCity
        };
        Axios.put(`https://student-mangement-system-4wt8.onrender.com/update/data/${id}`, updatedData)
            .then(response => {
                console.log("Update successful");
                // Optionally, you can perform additional actions upon successful update
                
            })
            .catch(error => {
                console.error("Error updating data:", error);
                // Handle errors here
            });

            window.location.href = "/students";
    }
    

    return (
        <div className='row'>
            <div className='col-md-6'>
                <form onSubmit={handleSubmit}>
                <label htmlFor="text">ROLL NO:</label>
                    <input type="text" name="rollNo" disabled value={myRollNo} />
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" value={myAge} onChange={collectData} />

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={myName} onChange={collectData} />

                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" value={myCity} onChange={collectData} />

                    <input type="submit" value="UPDATE" />
                </form>
            </div>
        </div>
    );
}

export default EditStudent;
