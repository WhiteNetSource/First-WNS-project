import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(10);

  const onClickAdd = () => {
    setCount(count + 1);
  };
  const onClickSubtract = () => {
    setCount(count - 1);
  };

  if (count < 0) {
    alert(`${count}의 값이 0보다 작을 수 없습니다.`);
    return;
  }

  //onClick={() => console.log("clicked")} 화살표 함수 인풋 아웃풋

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <div>{count}</div>
      <button
        className="bg-green-300 p-4 w-12 h-12 rounded-full"
        onClick={onClickAdd}
      >
        +
      </button>
      <button
        className="bg-red-300 p-4 w-12 h-12 rounded-full mt-[10px]"
        onClick={onClickSubtract}
      >
        -
      </button>
    </div>
  );
};

export default App;
