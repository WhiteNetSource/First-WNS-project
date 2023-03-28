const API_KEY = "59ee7100f688e04d0065ed70175e08eb";

const weatherIcon = document.querySelector(".weatherIcon");
const weatherTemp = document.querySelector(".weatherTemp");

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&unints=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        weatherTemp.innerText =
          data.name + ", " + parseInt(data.main.temp) + "c";
        //배열의 첫번째요소인 0번! 배열 건들일시 사용법임
        weatherIcon.src =
          "https://openweathermap.org/img/wn/" +
          data.weather[0].icon +
          "@2x.png";
      });
  },
  () => alert("Not allowed!")
);

//const a = async () => {
//const response = await axios.get(url);
//
//console.log(response.data);
//};
