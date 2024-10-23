import React, { useState } from 'react'

function Input() {
    const [data,setData] = useState({
        name :"",
        email:"",
        contactno:""
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
      };

    const postData = async(e) =>{
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:4000/input',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
          
            })
            const result = await response.json()
            alert(result.message)

        }catch(error){
            console.error('Error submitting form:', error);
            alert('Error submitting form');

        }

    }
  return (
    <>
    <div id="form">
        <form action="" method="POST" onSubmit={postData}>

            <input 
            type="text" 
            name="name" 
            placeholder="name" 
            value={data.name}
            onChange={handleInput} />

            <input 
                type='text'
                name='email'
                placeholder='Enter your email'
                
                value={data.email}
                onChange={handleInput}
/>
            <input 
            type="number" 
            name="contactno" 
            placeholder='enter no'
            value={data.contactno}
            onChange={handleInput} />
             <button type="submit">submit</button>
        </form>
    </div>
    </>
  )
}

export default Input
