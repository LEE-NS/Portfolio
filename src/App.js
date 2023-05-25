import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Homepage from './Page/Homepage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
    /* 이 아래로 Component들이 들어온다. 또는 Route들 */
  );
}

export default App;

/* 
Welcome 컴포넌트는 화면 전체를 가려야 한다. 페이지로 만들어야 하나?

*/
