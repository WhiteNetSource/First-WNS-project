import "./App.css";
import spaceLogo from "./images/space.png";

function App() {
  return (
    <div className=" bg-red-100 min-h-screen">
      <header className="bg-blue-100 h-12 md:h-20">
        <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
          <div>
            <img className="w-12" src={spaceLogo} alt="space" />
          </div>
          <ul className="flex gap-2 md:gap-8 text-xs md:text-base">
            <li className="bg-indigo-300 btn-style">Introduce</li>
            <li className="bg-purple-300 btn-style">Portfolio</li>
            <li className="bg-blue-300 btn-style">contact me</li>
          </ul>
        </div>
      </header>
      <main>
        <div className="bg-green-100 max-2-screen-xl mx-auto h-96 flex justify-center items-center">
          여기에 나를 소개하는 내용을 적으면 됩니다.
        </div>
        <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cold-3 lg:grid-cold-4 justify-items-center gap-8 py-8">
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 rounded-xl">
              플잭 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2 ">플잭 제목</div>
            <div className="mt-2 mx-2">플젝 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 rounded-xl">
              플잭 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2 ">플잭 제목</div>
            <div className="mt-2 mx-2">플젝 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 rounded-xl">
              플잭 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2 ">플잭 제목</div>
            <div className="mt-2 mx-2">플젝 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 rounded-xl">
              플잭 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2 ">플잭 제목</div>
            <div className="mt-2 mx-2">플젝 설명</div>
          </li>
        </ul>
        <div className="bg-gray-100 max-x-screen-xl mx-auto h-96 flex justify-center items-center">
          내연락처
        </div>
        <footer className="max-w-screen-xl mx-auto flex justify-end py-1 md:py-2">
          2023, Designed by, WNS
        </footer>
      </main>
    </div>
  );
}

export default App;
