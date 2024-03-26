// let currentSlide = 0;
// const slides = document.querySelectorAll('.slide');
// const slideCount = slides.length;

// function showSlide(n) {
//   slides.forEach((slide) => (slide.style.display = 'none'));
//   slides[n].style.display = 'block';
// }

// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slideCount;
//   showSlide(currentSlide);
// }

// function prevSlide() {
//   currentSlide = (currentSlide - 1 + slideCount) % slideCount;
//   showSlide(currentSlide);
// }

// document.addEventListener('DOMContentLoaded', () => {
//   showSlide(currentSlide);
//   setInterval(nextSlide, 2000);
// });
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');

let mag1 = document.querySelector('.mag-1');
let mag2 = document.querySelector('.mag-2');
let mag3 = document.querySelector('.mag-3');

img1.addEventListener('click', function () {
  imgSrc = img1.getAttribute('src');
  document.querySelector('main').setAttribute('style', 'display:none;');
  document.querySelector('.mag-content').setAttribute('style', 'display:none;');
  document.querySelector(
    '.event'
  ).innerHTML = `<img src="${imgSrc}" width='1070px' height:'1000px' />`;
});
img2.addEventListener('click', function () {
  imgSrc = img2.getAttribute('src');
  document.querySelector('main').setAttribute('style', 'display:none;');
  document.querySelector('.mag-content').setAttribute('style', 'display:none;');
  document.querySelector(
    '.event'
  ).innerHTML = `<img src="${imgSrc}" width='1070px' height:'1000px' />`;
});

img3.addEventListener('click', function () {
  imgSrc = img3.getAttribute('src');
  document.querySelector('main').setAttribute('style', 'display:none;');
  document.querySelector('.mag-content').setAttribute('style', 'display:none;');
  document.querySelector(
    '.event'
  ).innerHTML = `<img src="${imgSrc}" width='1070px' height:'1000px' />`;
});

// document.querySelector('.wrap3').innerHTML=``;
mag1.addEventListener('click', function () {
  document.querySelector('main').setAttribute('style', 'display:none;');
  document.querySelector('.event').setAttribute('style', 'display:none;');
  document.querySelector('.mag-content').innerHTML = `
  <div style="width:100vw;">
  <div style="width:1070px;margin:auto;">
  <img width="1070px" height="800px"
    src="https://mellowmate.co.kr/web/upload/NNEditor/20231117/mellow_vol8_cat_E18482E185A2E1848CE185B5E18486E185A9E186A8E1848BE185A5E186B81.png"
    >
  <h2>GREETING</h2>
  <p style='text-align:center;'>
    ‘검은 고양이 눈 감은 듯’이라는 속담이 있다. <br>
    옛날 옛적, 희미한 달빛에만 의지해야 했던 깜깜한 밤, 어둠 속에 숨은 검은 고양이는 눈에 잘 띄지 않았다. 
    <br/>
    <br/>
    두 눈을 감으면 어디까지 얼굴이고 어디까지
    몸통인지 분간하기 어려웠다.<br/>
    사람들은 눈앞의 상황을 이해하기 어려울 때 상상력을 발휘하기 시작한다. <br/>
    그렇게 검은 고양이들은 밤을 호령하는 마녀의 하수인이자, 마법 세계와 현실 세계 중간에 있는, 신비한
    존재가 되었다.<br/>
    <br/>
    그런데 우리는 신비함을 오래 견디지 못하는 것 같다. <br/>
    신비함은 ‘이해할 수 없음’ ‘익숙하지 않음’ ‘낯섦’을 뜻하며 그런 것들은 항상 미움을 받아왔다. <br/>
    규정하기 어려운 존재에 미워하는 마음을 더하자
    지옥이 펼쳐졌다. </br>
    이번 호를 만들면서 얼마나 많은 고양이들이 검은색 옷을 입었다는 이유만으로 죽음에 내몰렸는지 알게 되었다.<br/> 
    어쩌면 무엇이든 분명하게 만들려는 마음이 폭력일지도 모른다.<br/>
    검은 고양이는 당연하게도 다른 고양이들과 똑같다. 
    </br> </br>
    솜바지를 입고, 새벽에 와다다를 하며, 츄르에 눈을 뒤집고, 나를 업신여긴다.<br/>
     하지만 아직도 검은색 옷을 입은 아이들은 가족을 만날 확률이 더 낮다.<br/>
    이제 눈 감은 검은 고양이의 모호함을 버텨야 할 때가 아닐까? 그리고 조금 더 자세히 들여다봐야 한다.<br/> 
    분간하기 어려운 얼굴 안에 숨어있는 분홍 코와 호박색 눈의 반짝임을 찾아내자.
  <br/><br />
    편집장 박조은
  </p>
  <img width="1070px" height="800px"
    src="https://mellowmate.co.kr/web/upload/NNEditor/20231117/mellow_vol8_cat_E18482E185A2E1848CE185B5E18486E185A9E186A8E1848BE185A5E186B82.png" />
</div>
</div>`;
});

let Data = [];

// 지도 정보 목데이터 가져오기
fetch('../html/mainCommunity.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log('제이슨파일 가져옴 ', data);
    Data = data;
    console.log('fetch에서 data', Data);
    loadBest(); // 데이터가 로드된 후에 loadBest() 호출
  })
  .catch((error) => console.log('error : ', error));

function loadBest() {
  for (let i = 0; i < 4; i++) {
    let code = `
  <div class="card" style="width: 16rem; cursor:pointer">
  <img src="./img/c-2.jpeg" class="card-img-top" alt="...">
  <div class="card-body">
    <div class="cnt" style="display:flex; margin-left:155px; flex-direcetion:row;">
      <span style='font-size:15px;' id="cnt-heart">${Data[i].heart_cnt}</span>
      <img style='margin-left:10px;margin-bottom:10px;width:20px;height:auto;cursor:pointer' src="./img/h.png" />
    </div>
    <p class="card-text">
      <span class='c-span' style="color:black;">
      ${Data[i].title} </span>
      ${Data[i].content} </p>
  </div>`;

    document.querySelector('.wrap3').innerHTML += code;
  }
  localStorage.setItem('Data', JSON.stringify(Data));

  const { setItem, getItem, removeItem, clear, length, key } = localStorage;

  const cardInfoArr = Data;
  localStorage.setItem('cardInfoArr', JSON.stringify(cardInfoArr));
}

const { setItem, getItem, removeItem, clear, length, key } = localStorage;
const userInfo = {
  'petName':'happy','pw':'1234'};
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
