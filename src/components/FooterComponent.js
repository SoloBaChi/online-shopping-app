import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {

	return(
		<div className="footer-wrapper">
		 <footer className="footer-section">
		  <ul>
		    <li><NavLink to="/">Home</NavLink></li>
		    <li><NavLink to="/aboutus">About Us</NavLink></li>
		    <li><NavLink to="#">Contact Us</NavLink></li>
		    <li><NavLink to="#">FAQ</NavLink></li>
		  </ul>
		  <p><small>Powered by codeblaze academy &copy; 2022</small></p>
		 </footer>
		</div>
		);
}
export default Footer;