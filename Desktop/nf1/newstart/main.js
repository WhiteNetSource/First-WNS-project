let observer = new IntersectionObserver((e) => {
  e.forEach((박스) => {
    if (박스.isIntersecting) {
      //박스가 보일때 true,안보일때는 false됨
      박스.target.style.opacity = 1;
      박스.target.style.transform = "rotate(0deg)";
    } else {
      박스.target.style.transform = "rotate(0deg)";
    }
  });
});
//observe 함수는 내가 원하는 html를 감시해줄 수 있다. 특정html요소사 화면에 등장하는지 감시해줌
//감시할거를 찾아서 저기 넣으면 된다.
//감시할거 찾고 싶으면
let div = document.querySelectorAll("div");
//위 변수로 저장해서
observer.observe(div[0]); //alt+shift로 복사하깅~
observer.observe(div[1]);
observer.observe(div[2]);
observer.observe(div[3]);
//div 찾은 거 중에 0번째 감시
//1번 코드로 가서{}에 감시중 박스가 화면에 등장하면 려기 코드 실행해줌
