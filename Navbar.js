import React from 'react'
import PropTypes from 'prop-types';
// yahan props pass karnay hotay hain  
export default function Navbar(props) {
  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.Home }</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.About}</a>
        </li>
        
      </ul>
      {/* <form className="d-flex" role="search">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
       </form>*/}
       <div className={`form-check form-switch text-${props.mode==='light' ? 'dark':'light'}`}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" forHtml="switchCheckDefault" >{`${props.mode} mode enable`}</label>
</div>
    </div>
  </div>
</nav>
  );
}

Navbar.propTypes={
  title:PropTypes.string.isRequired,
  About:PropTypes.string.isRequired,
  Home:PropTypes.string.isRequired
}

Navbar.defaultProps={
  title:'Title Here',
  About:'here is About',
  Home:'here is home'
}