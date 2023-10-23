import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Project from './component/Project';
import Experience from './component/Experience';

import Skills from './component/Skills';
import Resume from './component/Resume';
import Contact from './component/Contact';





function App() {
  return (
    <>
    {/* {<Navb/>} */}
    <Router> 
   <Routes>
    {/* <Route path="/" element={<Navb/>}></Route> */}
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/project" element={<Project/>}></Route>
    <Route path="/experience" element={<Experience/>}></Route>
    <Route path="/skills" element={<Skills/>}></Route>
    <Route path="/resume" element={<Resume/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>



    {/* <Route path="/education" element={<Education/>}></Route> */}



   </Routes>
   
   </Router>
   </>
  );
}

export default App;
