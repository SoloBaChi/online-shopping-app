import React from "react";
import { NavLink } from 'react-router-dom';
require('../login.css');

export default function UserLogin(propd){
	return(
		<div className="login-section">
		 <form className="login-form-group">
		  <label htmlFor="email">Email: <span>&#10045;</span></label>
		  <input 
		  type="email"
		  />
		  <label htmlFor="password">Password: <span>&#10045;</span></label>
		  <input
		  type="password"
		  />
		  <button type="submit">Login</button>
		  <p>Don't have an account yet click <NavLink to="/signup"> here to signup</NavLink></p>
		 </form>
		</div>
		);
}