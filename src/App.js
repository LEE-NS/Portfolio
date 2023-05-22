import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faFaceSmile, faFile, faHouse } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div>
      <div id='wrap'>
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
                <li className='works'>
                  <div className='icon_area'>
                    <div className='icon_wrap'>
                      <FontAwesomeIcon className='ctg_icon' icon={faFile} size='lg' />
                    </div>
                    <span className='ctg_name'>Works</span>
                  </div>                  
                </li>
                <li className='contact'>
                  <div className='icon_area'>
                    <div className='icon_wrap'>
                      <FontAwesomeIcon className='ctg_icon' icon={faAt} size='lg' />
                    </div>
                    <span className='ctg_name'>Contact</span>
                  </div>
                </li>
              </ul>
            </div>
            {/* 메뉴 영역 R */}
          </div>    
        </header>
        {/* 상단 fixed 메뉴 영역 */}
      </div>
    </div>
    /* 이 아래로 Component들이 들어온다. 또는 Route들 */
  );
}

export default App;

/* 
페이지 하나에 여러 컴포넌트가 재랜더링 - 리액트의 방식

*/