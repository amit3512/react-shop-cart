import React,{useState} from 'react';
import {NavLink} from "react-router-dom";
import './style.css';


const Navbar = () => {

	const [search, setSearch] = useState(false);

	const submitSearch=(e)=>{
		e.preventDefault();
		alert('Searched');
	}

	const openSearch = () => {
		setSearch(!search);

	}
      const searchClass=search?'searchInput active':'searchInput';
	
    return(
		<div className="navbar">
		  <ul className='navbarMenu'>
		   <li><NavLink to="/">React Shopping Cart</NavLink></li>
	       <li><NavLink to="/bachelors">bachelor</NavLink></li>
		   <li><NavLink to="/+2">Intermediate</NavLink></li>
		   <li><NavLink to="/schools">school</NavLink></li>
	       <li><NavLink to="/bachelor/Computer">Computer </NavLink></li>
	       <li><NavLink to="/contactus">Contact Us</NavLink></li>
	       
	      </ul>
	      <div className='search'>
	        
        </div>
	    </div>  

		  
		   
		
		)
}
export default Navbar;
	




	
	        
	    