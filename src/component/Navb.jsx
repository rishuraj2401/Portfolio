import React from 'react'
import { Link } from 'react-router-dom'
function Navb() {
  const mystyle={
    color:"#f1d328" ,
    fontWeight:"bold", 
    // textShadow: "0.2vw 0.2vw 0.6vw #012E40",
    fontSize:"1.1em"
    } 
  
  return (
    
    <>
<div className="nav" style={{zIndex:5}}>
<nav className="navbar navbar-expand-lg navbar-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link" to="/" style={mystyle}>Home</Link>
      <Link className="nav-item nav-link " to="/about"style={mystyle}>About</Link>
      <Link className="nav-item nav-link" to="/skills"style={mystyle}>Skills</Link>

      <Link className="nav-item nav-link" to="/project"style={mystyle}>Project</Link>
      <Link className="nav-item nav-link" to="/experience"style={mystyle}>Experience</Link>
      <Link className="nav-item nav-link" to="/resume"style={mystyle}>Resume</Link> 
      <Link className="nav-item nav-link" to="/contact"style={mystyle}>Contact</Link> 

    </div>
  </div>
</nav>
</div>
 
    </>
  )
}

export default Navb