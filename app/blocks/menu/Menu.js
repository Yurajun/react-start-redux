import React from 'react';
import {Link}from 'react-router';

 const Menu = () => {

	return (
		<div>
			<Link to='/'>Tracks</Link>
			<Link to='/about'>About</Link>
		</div>
	);
};

export default Menu;
