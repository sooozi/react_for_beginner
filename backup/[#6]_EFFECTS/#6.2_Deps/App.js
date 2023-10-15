 // import Button from './Button';
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  //input을 위한 새로운 state 만들기
  const [keyword, setKeyword] = useState();
  const onClick = () => setValue((prev) => prev + 1);
  //새로운 함수 추가
  //input에 입력하고 onChange가 발생하면
  //여기서 그 event를 받고 텍스트를 가져온다.
  const onChange = (event) => setKeyword(event.target.value);
  //=> input에 텍스트를 입력할 때마다 호출!
  //=> 이럴때 useEffect를 사용해야함!!!!!!!!!!!!!!!!!!!!

  //처음에만 호출
  useEffect(() => {
    console.log("run only once.");
  }, []);
  //keyword가 변할 때만 호출
  useEffect(() => {
    if(keyword !== "") {
      console.log("Search For", keyword);
    }
  }, [keyword]);
  //keyword, counter 둘 중 하나가 변할 때 호출
  useEffect(() => {
    if(keyword !== "") {
      console.log("keyword and counter", keyword);
    }
  }, [keyword, counter]);

  return (
    <div className="App">
      {/* value : state와 연결 */}
      {/* onChange(이벤트 리스너): 바뀌는 것 감지 */}
      <input value={keyword} onChange={onChange} type="text" placeholder='Search here...'></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>this</button>
      {/* <Button text="click me!"></Button> */}
    </div>
  );
}

export default App;

