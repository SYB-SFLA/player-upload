/* BUTTON - INDEX.JS */

import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';

export default function Button({ content, path }) {
  return (
    <div className="button">
      <NavLink to={path}>{content}</NavLink>
    </div>
  )
}

