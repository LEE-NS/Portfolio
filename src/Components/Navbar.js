import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faFaceSmile, faFile, faHouse } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div>
            <div id='nav_wrap'>
                <header id='header'>
                    <div className='menu_area'>
                        <div className='menu_area_L'>
                            <div className='home_icon_area' >
                                <a href='#'><FontAwesomeIcon className='home_btn' icon={faHouse} size='lg'/></a>
                            </div>
                        </div>
                    {/* 메뉴 영역 L */}
                        <div className='menu_area_R'>
                            <ul>
                                <li className='about'>
                                    <div className='icon_area'>
                                        <div className='icon_wrap'>
                                            <FontAwesomeIcon className='ctg_icon' icon={faFaceSmile} size='lg' />
                                        </div>
                                        <span className='ctg_name'>About</span>
                                    </div>
                                </li>
                                {/* about btn */}
                                <li className='works'>
                                    <div className='icon_area'>
                                        <div className='icon_wrap'>
                                            <FontAwesomeIcon className='ctg_icon' icon={faFile} size='lg' />
                                        </div>
                                        <span className='ctg_name'>Works</span>
                                    </div>
                                </li>
                                {/* works btn */}
                                <li className='contact'>
                                    <div className='icon_area'>
                                        <div className='icon_wrap'>
                                            <FontAwesomeIcon className='ctg_icon' icon={faAt} size='lg' />
                                        </div>
                                        <span className='ctg_name'>Contact</span>
                                    </div>
                                </li>
                                {/* contact btn */}
                            </ul>
                        </div>
                    {/* 메뉴 영역 R */}
                    </div>    
                </header>
            {/* 상단 fixed 메뉴 영역 */}
            </div>
        </div>
    )
}

export default Navbar