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
  newImg.style.width = '200px';
  newImg.style.height = '200px';
  newImg.style.objectFit = 'contain';
  newImg.style.margin = '10px';

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
