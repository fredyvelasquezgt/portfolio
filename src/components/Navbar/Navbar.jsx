/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react';

export function Navbar() {
  return (
    <div className="topnav" id="myTopnav" data-testid="nav1">
      <a href="#home" className="active">Home</a>

      <a href="#contact">Contact</a>
      <a href="#skills">Skills</a>
      <a href="#proyectos">Proyectos</a>
      <a href="https://github.com/fredyvelasquezgt" target="_blank" rel="noreferrer">Github</a>
      <a href="https://twitter.com/kentuckymaizena" target="_blank" rel="noreferrer">Twitter</a>
      <a href="" className="icon" onClick="myFunction()">
        <i className="fa fa-bars" />
      </a>
    </div>
  );
}

export default Navbar;
