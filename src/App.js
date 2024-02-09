// npx create-react-app student-fronted
// npm install react-router-dom

import './App.css';
import { AddStudentFrom } from './COMPONENT/AddStudentFrom';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import ReadStudentData from './COMPONENT/ReadStudentData';
import ViewStudent from './COMPONENT/ViewStudent';
import DeleteStudentData from './COMPONENT/DeleteStudentData';
import EditStudent from './COMPONENT/EditStudent';

function App() {
  return (
    <div>
      {/* <AddStudentFrom/> */}

      <BrowserRouter>
      <Link to="/add">ADD STUDENT</Link>
      <Routes>
        <Route path="/add" element={<AddStudentFrom/>}></Route>
        <Route path="/students" element={<ReadStudentData/>}></Route>
        <Route path="/students/:id" element={<ViewStudent/>} />
        <Route path="/students/delete/:id" element={<DeleteStudentData/>} />
        <Route path="/students/edit/:id" element={<EditStudent/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;


// http://localhost:3000/students
// http://localhost:3000