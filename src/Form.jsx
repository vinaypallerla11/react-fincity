import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'

const Form = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("")
  const navigate = useNavigate();


  
  const formSubmit = async (e) => {
    e.preventDefault();
    const userDetails = {name, link, description}
    console.log(userDetails);
    const url = 'http://localhost:5000/projects/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    };
  
    try {
      const response = await fetch(url, options);
      const responseData = await response.text();
      console.log(response)
      console.log(responseData); 
      alert("Posted data Successfully")
      navigate('/projects')

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
  

  return (
    <div className='container'>
      <h1 className='head3'>Add Project</h1>
      <form onSubmit={formSubmit} className='form-container'>
        <label htmlFor='name'>Project Name</label> <br/>
        <input id='name' type="text" name="name" onChange={(e) => setName(e.target.value)} className='input-container'/> <br/>
        <label htmlFor='link'>Project Link</label> <br/>
        <input id='link' type="text" name="link" onChange={(e) => setLink(e.target.value)} className='input-container'/> <br/>
        <label htmlFor='description'>Descreption</label> <br/>
        <input id='description' type="text" name="description" onChange={(e) => setDescription(e.target.value)} className='input-container'/> <br/>
        <div>
          <button type="submit" className='button-container'>Add</button>
        </div>
      </form > 
    </div>
  );
}

export default Form;
