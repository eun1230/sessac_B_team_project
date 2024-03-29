let mypagenav = document.querySelectorAll('.mypagenav_acc');
// 네브바
for (let i = 0; i < mypagenav.length; i++) {
  mypagenav[i].addEventListener('click', function () {
    for (let j = 0; j < mypagenav.length; j++) {
      mypagenav[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}

let reservbutton = document.querySelector('.reservation');
reservbutton.addEventListener('click', (e) => {
  e.style.display = 'block';
  // $(e.target).css('display', 'block');
});

// 펫 사진 등록하면 미리보기 되도록
function showimg() {
  let newImg = document.querySelector('.showpetimg').lastElementChild;
  newImg.style.visibility = 'visible';
}

function loadFile(input) {
  let file = input.files[0];

  let newImg = document.createElement('img');
  newImg.setAttribute('class', 'img');

  newImg.src = URL.createObjectURL(file);

  // 새로 저장될 이미지의 크기
  newImg.style.width = '100px';
  newImg.style.height = '100px';
  newImg.style.objectFit = 'contain';
  newImg.style.marginleft = '20px';
  newImg.style.marginbottom = '20px';

  // 이미지가 뒤에 추가되도록
  let container = document.querySelector('.showpetimg');
  container.append(newImg);
}
function dishos() {
  document.querySelector('.myhospital').style.display = 'block';
  document.querySelector('.myplace').style.display = 'none';
  document.querySelector('.mysalon').style.display = 'none';
  document.querySelector('.mypost').style.display = 'none';
  document.querySelector('.mycomment').style.display = 'none';
  document.querySelector('.inquirysection').style.display = 'none';
  document.querySelector('.anichange').style.display = 'none';
  document.querySelector('.pwchange').style.display = 'none';
  document.querySelector('.alarmsetting').style.display = 'none';
}
function disrepl() {
  document.querySelector('.myhospital').style.display = 'none';
  document.querySelector('.myplace').style.display = 'block';
  document.querySelector('.mysalon').style.display = 'none';
  document.querySelector('.mypost').style.display = 'none';
  document.querySelector('.mycomment').style.display = 'none';
  document.querySelector('.inquirysection').style.display = 'none';
  document.querySelector('.anichange').style.display = 'none';
  document.querySelector('.pwchange').style.display = 'none';
  document.querySelector('.alarmsetting').style.display = 'none';
}
function dissal() {
  document.querySelector('.myhospital').style.display = 'none';
  document.querySelector('.myplace').style.display = 'none';
  document.querySelector('.mysalon').style.display = 'block';
  document.querySelector('.mypost').style.display = 'none';
  document.querySelector('.mycomment').style.display = 'none';
  document.querySelector('.inquirysection').style.display = 'none';
  document.querySelector('.anichange').style.display = 'none';
  document.querySelector('.pwchange').style.display = 'none';
  document.querySelector('.alarmsetting').style.display = 'none';
}
function dispos() {
  document.querySelector('.myhospital').style.display = 'none';
  document.querySelector('.myplace').style.display = 'none';
  document.querySelector('.mysalon').style.display = 'none';
  document.querySelector('.mypost').style.display = 'block';
  document.querySelector('.mycomment').style.display = 'none';
  document.querySelector('.inquirysection').style.display = 'none';
  document.querySelector('.anichange').style.display = 'none';
  document.querySelector('.pwchange').style.display = 'none';
  document.querySelector('.alarmsetting').style.display = 'none';
}
function discomme() {
  document.querySelector('.myhospital').style.display = 'none';
  document.querySelector('.myplace').style.display = 'none';
  document.querySelector('.mysalon').style.display = 'none';
  document.querySelector('.mypost').style.display = 'none';
  document.querySelector('.mycomment').style.display = 'block';
  document.querySelector('.inquirysection').style.display = 'none';
  document.querySelector('.anichange').style.display = 'none';
  document.querySelector('.pwchange').style.display = 'none';
  document.querySelector('.alarmsetting').style.display = 'none';
}
function disinq() {
  document.querySelector('.myhospital').style.display = 'none';
  document.querySelector('.myplace').style.display = 'none';
  document.querySelector('.mysalon').style.display = 'none';
  document.querySelector('.mypost').style.display = 'none';
  document.querySelector('.mycomment').style.display = 'none';
  document.querySelector('.inquirysection').style.display = 'block';
  document.querySelector('.anichange').style.display = 'none';
  document.querySelector('.pwchange').style.display = 'none';
  document.querySelector('.alarmsetting').style.display = 'none';
}
function disani() {
  document.querySelector('.myhospital').style.display = 'none';
  document.querySelector('.myplace').style.display = 'none';
  document.querySelector('.mysalon').style.display = 'none';
  document.querySelector('.mypost').style.display = 'none';
  document.querySelector('.mycomment').style.display = 'none';
  document.querySelector('.inquirysection').style.display = 'none';
  document.querySelector('.anichange').style.display = 'block';
  document.querySelector('.pwchange').style.display = 'none';
  document.querySelector('.alarmsetting').style.display = 'none';
}

function dispw() {
  document.querySelector('.myhospital').style.display = 'none';
  document.querySelector('.myplace').style.display = 'none';
  document.querySelector('.mysalon').style.display = 'none';
  document.querySelector('.mypost').style.display = 'none';
  document.querySelector('.mycomment').style.display = 'none';
  document.querySelector('.inquirysection').style.display = 'none';
  document.querySelector('.anichange').style.display = 'none';
  document.querySelector('.pwchange').style.display = 'block';
  document.querySelector('.alarmsetting').style.display = 'none';
}

function disala() {
  document.querySelector('.myhospital').style.display = 'none';
  document.querySelector('.myplace').style.display = 'none';
  document.querySelector('.mysalon').style.display = 'none';
  document.querySelector('.mypost').style.display = 'none';
  document.querySelector('.mycomment').style.display = 'none';
  document.querySelector('.inquirysection').style.display = 'none';
  document.querySelector('.anichange').style.display = 'none';
  document.querySelector('.pwchange').style.display = 'none';
  document.querySelector('.alarmsetting').style.display = 'block';
}
// 북마크
function loadBest(data) {
  const wrap3 = document.querySelector('.mybookmark');
  if (!wrap3) return; // wrap3 요소가 없으면 함수 종료

  for (let i = 0; i < 8; i++) {
    let code = `<div class="card-bb" style="width: 16rem; cursor:pointer; position: relative;">
      <div class="image-container">
        <img src=${data[i].image} class="card-img-top" alt="...">
      </div>
      <div class="heart-icon" style="position: absolute; bottom: 65px; right: 10px;">
        <img id="heart-icon-${i}" style='width: 20px; height: auto; cursor: pointer;' src="./img/h.png" onclick="toggleLike(${i})" />
        <span id="like-count-${i}" style='font-size: 12px; color: gray;'>${data[i].like}</span>
      </div>
      <div class="card-b">
        <p class="card-b-text">
          <span class='c-span' style="color:black;">
            <!-- 좋아요 관련 처리를 위한 빈 span -->
          </span><br>
          ${data[i].content}
        </p>
      </div>
    </div>`;
    wrap3.innerHTML += code;
  }
}

// localStorage에서 가져오는 방법
const placeName = localStorage.getItem('placeName');
const date = localStorage.getItem('selectedDate');
const time = localStorage.getItem('selectedTime');
console.log(placeName, date, time);

let now = new Date(); // 현재 날짜 및 시간
let month = now.getMonth() + 1; // 월
console.log(month);

// 변수는 ${}식으로 받아옴
let code = `<div class="reservitem">
<div class="reservinfo">
  <div class="reservname">${placeName}</div>
  <div class="reservdate">${month}월 ${date}일 ${time}</div>
</div>
<div class="changebutton" onclick="location.href= '../html/reservation.html'">
  변경
</div>
</div>`;

document.querySelector('.hospitalreserv').innerHTML = code;

function logOut() {
  window.addEventListener('unload', function (event) {
    localStorage.clear(); // 페이지가 언로드될 때 로컬 스토리지 데이터를 모두 삭제
  });
  location.href = '../index.html';
}
// to top btn
let toTopBtn = document.querySelector('#toTopBtn');
function topFunc() {
  document.documentElement.scrollTop = 0;
}

let userInfo = localStorage.getItem('userinfo');
petName = userInfo.petName;
console.log(userInfo);

let code1 = `<div class="profilename">${petName}</div>`;
document.querySelector('.pnbox').innerHTML = code1;

// document.querySelector('.profilename').innerText = userInfo;
