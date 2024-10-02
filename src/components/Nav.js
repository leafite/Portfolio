import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [hover, setHover] = useState(0);

    const menuItems = [
        { name: 'Home', link: '/' , id: 'Home'},
        { name: 'About', link: '/about' , id: 'About'},
        { name: 'Projects', link: '/projects' , id: 'Projects'},
        { name: 'Contact', link: '/contact' , id: 'Contact'},
        { name: 'Resume', link: '/resume' , id: 'Resume'}
    ];

    const handleClick = (index) => {
        setHover(index);
    };

    const sliderPosition = `${(hover / menuItems.length) * 98}%`;

    return(
        <div className='navbar'>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={item.id} className={item.id} onClick={() => handleClick(index)}>
                        <NavLink 
                            to={item.link} 
                            className="navbar-item" 
                            >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
                <span 
                    className='slider' 
                    style={{ left: sliderPosition }} // Use calculated position
                ></span>
            </ul>
        </div>
    );
};

export default Nav;