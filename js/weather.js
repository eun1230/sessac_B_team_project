const weatherButton = document.getElementById('weatherbutton');
const modalCloseButton = document.getElementById('modalclosebutton');
const modal = document.getElementById('modalcontainer');

const button = document.querySelector('.weatherbutton');
const API_KEY = 'f63752187839787153e6df04805b5f9b';
const tempSection = document.querySelector('.temperature');
const placeSection = document.querySelector('.place');
const descSection = document.querySelector('.description');
const iconSection = document.querySelector('.icon');
const maxSection = document.querySelector('.maxtemp');
const minSection = document.querySelector('.mintemp');

weatherButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
  navigator.geolocation.getCurrentPosition(success);
});
// 성공하면 position을 찍는다
// const success = (position) => {
//   console.log(position);
// };
success = (position) => {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  getWeather(latitude, longitude);
  // 함수명은 getWeather이며 latitude, longitude 두개의 매개변수가 전달
};
fail = () => {
  alert('좌표를 받아올 수 없음');
};

getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const temperature = json.main.temp;
      const temperatureMax = json.main.temp_max;
      const temperatureMin = json.main.temp_min;

      const place = json.name;
      const description = json.weather[0].description;
      const icon = json.weather[0].icon;
      const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      let today = new Date();
      let month = today.getMonth() + 1;
      let date = today.getDate();
      let monthDate = document.querySelector('.monthdate');

      monthDate.innerText = month + '.' + date;
      tempSection.innerText = temperature + ' °C';
      placeSection.innerText = place;
      descSection.innerText = description;
      iconSection.setAttribute('src', iconURL);
      //   HTML쓸 때는 ''안에 쓰고 변수만 그대로
      minSection.innerHTML =
        '<img src="../img/low.png" style="width: 30px">' +
        temperatureMin +
        ' °C';
      maxSection.innerHTML =
        '<img src="../img/HIGH.png" style="width: 30px">' +
        temperatureMax +
        ' °C';
    });
  modalCloseButton.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
};
