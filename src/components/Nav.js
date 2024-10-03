import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../App';

const Nav = () => {
    const [hover, setHover] = useState(0);
    const {theme, toggleTheme} = useContext(ThemeContext);

    const menuItems = [
        { name: 'Home', link: '/' , id: 'Home'},
        { name: 'About', link: '/about' , id: 'About'},
        { name: 'Porfolio', link: '/portfolio' , id: 'Portfolio'},
        { name: 'Contact', link: '/connect' , id: 'Contact'},
    ];

    const handleClick = (index) => {
        setHover(index);
    };

    const sliderPosition = `${(hover * (97 / menuItems.length))}%`;

    return(
        <>
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
        <div className='switch'>
                <ReactSwitch 
                    onChange={toggleTheme} // Toggle theme on switch change
                    checked={theme === 'dark'} // Switch is checked when theme is dark
                    onColor="#696969"
                    offColor="#ececec"
                    checkedIcon={<img src='/assets/dark.ico' alt='dark mode' style={{height: '100%', width: '100%'}} />}
                    uncheckedIcon={<img src='/assets/light.ico' alt='light mode' style={{height: '100%', width: '100%'}} />}
                />
            </div>
        </>
    );
};

export default Nav;