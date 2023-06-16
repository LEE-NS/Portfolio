import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Homepage from './Page/Homepage';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';

function App() {
  return (
    <div id='main_wrap'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      <Contact />
    </div>
    /* 이 아래로 Component, Route 가 들어온다 */
  );
}

export default App;

/* 
Welcome 없이 gnb 바로 아래에 사이트 소개를 넣는다

*/
