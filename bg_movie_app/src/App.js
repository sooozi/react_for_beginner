//#7.5 React Router
//리액트 라우터 사용 방법
//사이트에서 임포트 가져오기
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  //라우터 컴포넌트 만들어주기
  return (
    <Router>
      {/* switch는 라우터를 찾아줌 */}
      <Routes>
        {/* home으로 가는 라우터 렌더링 */}
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
