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

function toggleLike(index) {
  const heartIcon = document.querySelector(`#heart-icon-${index}`);
  const likeCount = document.querySelector(`#like-count-${index}`);
  const currentLike = parseInt(likeCount.textContent);

  // 이미 좋아요를 누른 경우
  if (heartIcon.src.includes('h-on.png')) {
    // 이미지 파일명을 h-on.png로 수정
    heartIcon.src = './img/h.png';
    likeCount.textContent = currentLike - 1;
  } else {
    // 좋아요를 처음 누른 경우
    heartIcon.src = './img/h-on.png'; // 이미지 파일명을 h-on.png로 수정
    likeCount.textContent = currentLike + 1;
  }
}
let communityData = [];
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // 커뮤니티 best 가져오기
    communityData = await fetch('../html/community.json').then((response) =>
      response.json()
    );
    console.log('커뮤니티 데이터 가져옴:', communityData);
    const wrap3 = document.querySelector('.wrap3');
    if (!wrap3) return; // wrap3 요소가 없으면 함수 종료
    wrap3.innerHTML = ''; // 기존의 내용을 지우고 다시 추가
    for (let i = 9; i < 17; i++) {
      let code = `<div class="card-bb" style="width: 16rem; cursor:pointer; position: relative;">
      <div class="image-container" onclick="showDetail(${i}, communityData)">
          <img src=${communityData[i].image} class="card-img-top" alt="...">
        </div>
        <div class="heart-icon" style="position: absolute; bottom: 78px; right: 10px;">
          <img id="heart-icon-${i}" style='width: 20px; height: auto; cursor: pointer;' src="./img/h.png" onclick="toggleLike(${i})" />
          <span id="like-count-${i}" style='font-size: 12px; color: gray;'>${communityData[i].like}</span>
        </div>
        <div class="card-b">
          <p class="card-b-text" >
            <span class='c-span' style="color:black;">
              <!-- 좋아요 관련 처리를 위한 빈 span -->
            </span>
            ${communityData[i].write}
            <Br>
            ${communityData[i].content}
          </p>
        </div>
      </div>`;
      wrap3.innerHTML += code;
    }

    const wrap5 = document.querySelector('.wrap5');
    if (!wrap5) return; // wrap5 요소가 없으면 함수 종료
    wrap5.innerHTML = ''; // 기존의 내용을 지우고 다시 추가
    for (let i = 16; i < 28; i++) {
      let hoogi = `<div class="card text-bg-dark" onclick="showDetail(${i},communityData)">
        <img src=${communityData[i].image} class="card-img" alt="...">
        <div class="card-img-overlay">
          <h6 class="card-title" style="text-align:right">${communityData[i].title}</h6>
          <p class ="card-text" style="text-align:right">${communityData[i].addr}</p>
          <br/><br/></br>
          <p class="card-text">${communityData[i].content}</p>
        </div>
      </div>`;
      wrap5.innerHTML += hoogi;
    }
  } catch (error) {
    console.error('에러:', error);
  }
});

function showDetail(index) {
  const selectedCard = communityData[index];
  const postId = selectedCard.id;
  // 카드 ID를 매개변수로 사용하여 URL 구성
  const detailURL = `../html/communityDetail.html?id=${postId}`;
  // 디테일 페이지 URL로 이동
  window.location.href = detailURL;
}


// 이미지 클릭 이벤트 등록
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');

img1.addEventListener('click', function () {
  const imgSrc = img1.getAttribute('src');
  showImage(imgSrc);
});

img2.addEventListener('click', function () {
  const imgSrc = img2.getAttribute('src');
  showImage(imgSrc);
});

img3.addEventListener('click', function () {
  const imgSrc = img3.getAttribute('src');
  showImage(imgSrc);
});

function showImage(imgSrc) {
  // 메인과 mag-content 숨기기
  document.querySelector('main').setAttribute('style', 'display:none;');
  document.querySelector('.mag-content').setAttribute('style', 'display:none;');
  // 이벤트 영역에 이미지 표시
  document.querySelector(
    '.event'
  ).innerHTML = `<img src="${imgSrc}" width='1070px' height='1000px' />`;
}
