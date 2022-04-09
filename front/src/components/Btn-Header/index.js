/* BTN-HEADER - INDEX.JS */


import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';



export default function Button({ content, path }) {

  return (
    <div className="btn-header">
      <NavLink to={ path } activeClassName="selected">{ content }</NavLink>
    </div>
  )
}

