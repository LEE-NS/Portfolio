import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div>
            <div id='nav_wrap'>
                <header id='header'>
                    <div className='menu_area'>
                        <div className='menu_area_L'>
                            <div className='single_icon_area'>
                                <a href='#'><FontAwesomeIcon className='home_btn' icon={faHouse}/></a>
                            </div>
                        </div>
                    {/* 메뉴 영역 L */}
                        <div className='menu_area_C'>
                            <ul>
                                <li className='about'>
                                    <div className='icon_area'>
                                        <p className='ctg_name'>About</p>
                                    </div>
                                </li>
                                {/* about btn */}
                                <li className='works'>
                                    <div className='icon_area'>
                                        <p className='ctg_name'>Works</p>
                                    </div>
                                </li>
                                {/* works btn */}
                                <li className='contact'>
                                    <div className='icon_area'>
                                        <p className='ctg_name'>Contact</p>
                                    </div>
                                </li>
                                {/* contact btn */}
                            </ul>
                        </div>
                    {/* 메뉴 영역 C */}
                        <div className='menu_area_R'>
                            <div className='single_icon_area'>
                                <FontAwesomeIcon className='night_icon' icon={faMoon} />
                                <FontAwesomeIcon className='day_icon' icon={faSun} />
                            </div>
                        </div>
                    </div>    
                </header>
            {/* 상단 fixed 메뉴 영역 */}
            </div>
        </div>
    )
}

export default Navbar