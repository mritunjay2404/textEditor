import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(props) {

//  console.log(props);

  return (

    <>
    <header className={`p-3 text bg-${props.mode}`}>
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className={`d-flex align-items-center mb-2 mb-lg-0 text-${props.mode==='light'? 'black':'white'} navbar-brand`}>TextEditor</a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          
          {/* <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li> */}
          <li><Link to='/' className={`nav-link px-2 text-${props.mode==='light'? 'black':'white'}`} >Home</Link></li>
          {/* <li><a href="/about" className="nav-link px-2 text-white">About</a></li> */}
          <li><Link to="/about" className={`nav-link px-2 text-${props.mode==='light'? 'black':'white'}`} >About</Link></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className={`form-control form-control-dark text-bg-${props.mode}`} placeholder="Search..." aria-label="Search" />
        </form>

        <div className="text-end">
        <div className={`form-check form-switch ${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick= {props.toggleMode}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:props.mode ==='light'? 'black':'white'}}>Enable DarkMode</label>
        </div>
          {/* <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button> */}
        </div>
      </div>
    </div>
  </header>
    </>
  )
}

export default Navbar;