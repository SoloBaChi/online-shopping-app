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
              <li><a href="/">Home</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/cart">Cart</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/aboutus">Aboutus</a></li>
		     </ul>
		   </nav>
		   <a href="#navbar-toggle" className="backdrop" hidden aria-hidden="true" tabIndex="-1"></a>
		 </header>
		</div>
		);
}
export default Header;