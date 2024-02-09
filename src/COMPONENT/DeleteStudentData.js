
import React from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios';


function DeleteStudentData()
{
    const [message, setMessage]  = React.useState("")
    const {id} = useParams()
    // console.log(id)
    Axios.delete(`https://student-mangement-system-backend.onrender.com/delete/data/${id}`)
    .then(function(output)
    {
        // console.log(output.data)
        setMessage(output.data)
    })
    .catch(function(error)
    {
        console.log(error)
    })
  return (
    <div>
        {message}
    </div>
  )
}

export default DeleteStudentData