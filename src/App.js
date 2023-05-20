import './App.css';

function App() {
  return (
    <div>
      <div id='wrap'>
        <header id='header'>
          <div className='menu_area'>
            <div className='menu_area_L'>
              <p className='home_btn'>go home - 페이지 최상단으로 이동</p>
            </div>
            {/* 메뉴 영역 L */}
            <div className='menu_area_R'>
              <ul>
                <li className='about'>
                  <span className='ctg_icon'>about 아이콘</span>
                  <span className='ctg_name'>About</span>
                </li>
                <li className='works'>
                  <span className='ctg_icon'>works 아이콘</span>
                  <span className='ctg_name'>Works</span>
                </li>
                <li className='contact'>
                  <span className='ctg_icon'>contact 아이콘</span>
                  <span className='ctg_name'>Contact</span>
                </li>
              </ul>
            </div>
            {/* 메뉴 영역 R */}
          </div>    
        </header>
        {/* 상단 fixed 메뉴 영역 */}
      </div>
    </div>
  );
}

export default App;

/* 
페이지 하나에 여러 컴포넌트가 재랜더링 - 리액트의 방식

*/