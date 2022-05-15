import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {

	return(
		<div className="header-wrapper">
		 <header className="nav-section">
		 <a href="#navbar-menu" className="menu-toggle" id="navbar-toggle" aria-label="Open Main Menu">
           <span className="sr-only">Open Main Menu</span>
           <span className="fa fa-bars" aria-hidden="true"></span>
		 </a>
		   <nav className="navbar-menu" id="navbar-menu">
		   <a href="#navbar-toggle" className="menu-close" aria-label="Close Main Menu">
		   <span className="sr-only">Close Main Menu</span>
           <span className="fa fa-times" aria-hidden="true"></span>
		   </a>
		     <ul>
		      <li><h1><a href="#">Site Logo</a></h1></li>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/cart">Cart</NavLink></li>
              <li><NavLink to="/products">Products</NavLink></li>
              <li><NavLink to="/aboutus">About us</NavLink></li>
		     </ul>
		   </nav>
		   <a href="#navbar-toggle" className="backdrop" hidden aria-hidden="true" tabIndex="-1"></a>
		 </header>
		</div>
		);
}
export default Header;