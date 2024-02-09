import React from 'react'
import Axios from 'axios';
import { Link, Outlet } from 'react-router-dom';


function ReadStudentData() {
    const [completeReadData, setCompleteReadData] = React.useState([])
    React.useEffect(function () {
        Axios.get("https://student-mangement-system-backend.onrender.com/read")
            .then(function (output) {
                // console.log(output.data)
                setCompleteReadData(output.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    },[])

    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <table className="table table-success table-hover table-striped-columns text-center">
                        <thead>
                            <tr>
                                <th>ROLL NO</th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>CITY</th>
                                <th>ACTION</th>
                                <th>ACTION</th>
                                <th>ACTION</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {completeReadData.map(function (i) {
                                return (
                                    <tr key={i.rollNo}>
                                        <td>{i.rollNo}</td>
                                        <td>{i.name}</td>
                                        <td>{i.age}</td>
                                        <td>{i.city}</td>
                                        <td><Link className='btn btn-outline-primary' to="/add">ADD</Link></td>
                                        <td><Link className='btn btn-outline-primary' to={`/students/${i.rollNo}`}>VIEW</Link></td>
                                        <td><Link className='btn btn-outline-success' to={`/students/edit/${i.rollNo}`}>EDIT</Link></td>
                                        <td><Link className='btn btn-outline-danger' to= {`/students/delete/${i.rollNo}`} >DELETE</Link></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <Outlet/>
                </div>
            </div>
        </div>


    )
}

export default ReadStudentData