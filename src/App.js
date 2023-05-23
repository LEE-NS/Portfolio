import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Homepage from './Page/Homepage';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div>
      <Welcome />
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
페이지 하나에 여러 컴포넌트가 재랜더링 - 리액트의 방식

*/