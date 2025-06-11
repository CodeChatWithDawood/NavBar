import React from 'react';

export default function Colorchanger(props) {
  return (
    <div className="dropdown" data-bs-theme-light>
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonLight" data-bs-toggle="dropdown" aria-expanded="false">
    Default dropdown
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonLight">
    <li><a className="dropdown-item active" href="/">Choose color</a></li>
    <li><a className="dropdown-item" href="/" onClick={(e)=>{ e.preventDefault(); props.changer("yellow")}}>Yellow</a></li>
    <li><a className="dropdown-item" href="/" onClick={(e)=>{e.preventDefault(); props.changer("green")}}>Green</a></li>
    <li><a className="dropdown-item" href="/" onClick={(e)=>{e.preventDefault(); props.changer("purple")}}>Purple</a></li>
  
  </ul>
</div>
  );}
