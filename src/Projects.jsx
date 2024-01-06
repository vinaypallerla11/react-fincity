import React, { useState, useEffect } from 'react';
import './Projects.css'

const Projects = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/projects/');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <h1 className='head2'>Projects</h1>
      <div>
        <div>
          {data ? (
            <ul className=''>
              {data.map(item => (
                <div className='total-content'>
                  <div className='text-content'>
                    <li key={item.id} className='heading'>{item.name}</li>
                    <li key={item.id} className='inner-container'>{item.description}</li>
                    <button className='button'>View Projects</button>
                  </div>
                  <img key={item.id} src={item.link} alt="avathar" className='image-container'/>
                </div>  
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;