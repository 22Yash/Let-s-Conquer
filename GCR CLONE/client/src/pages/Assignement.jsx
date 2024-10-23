import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import LeftBar from '../component/LeftBar';

function Assignement() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    file: null, // New state for file
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleFileChange = (e) => {
    setStudent({ ...student, file: e.target.files[0] }); // Set the uploaded file
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, file } = student;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('file', file); // Append the file to FormData

    try {
      const res = await fetch("http://localhost:3000/submit", {
        method: "POST",
        body: formData, // Use formData directly
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (res.status !== 201) {
        window.alert(data.message || "Invalid data");
      } else {
        window.alert("Appointment successfully created");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div id="Assignement" className='flex flex-col'>
        <div id="first">
          <Navbar />
        </div>
        <div id="second" className='flex flex-row'>
          <LeftBar />
          <div id="class" className='bg-white w-full h-[700px] pl-[40px]'>
            <h1 className='text-[50px]'>Assignment 6 Submission</h1>
            <h3>Jessica Falcao • Oct 10</h3>
            <form onSubmit={PostData}> {/* Use onSubmit instead of method="POST" */}
              <input 
                type='text'
                name='name'   
                placeholder='Enter your name'
                className='border-2 border-slate-300 p-[10px] mt-[30px]'
                value={student.name}
                onChange={handleInput}
              />
              <input 
                type='text'
                name='email'  
                placeholder='Enter your email'
                className='border-2 border-slate-300 p-[10px] mt-[30px]'
                value={student.email}
                onChange={handleInput}
              />
              <input 
                type="file" 
                accept=".pdf" // Only allow PDF uploads
                className='border-2 border-slate-300 p-[10px] mt-[30px]'
                onChange={handleFileChange} // Handle file change
              />
              <button
                type="submit" // Use type="submit" for button
                className="bg-[#f86f2d] text-white p-[10px] rounded-[10px] lg:p-[20px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Assignement;
