import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Headers from './Headers'
import About from './About'
import Projects from './Projects'
import Contacts from './Contacts'
import Form from './Form'

const App = () => {
  return (
    <div>
      <Headers />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path="/form" element={<Form/>} />
        <Route path='/projects' element={<Projects />} />
        <Route path="/contacts" element={<Contacts/>}/> 
      </Routes> 
    </div>
  );
}

export default App;
